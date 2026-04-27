import { ArrowLeft } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { createStudyPlan, saveDailySchedule } from "../../lib/studyPlanService";

const TARGET_SCORE_OPTIONS = ["600+", "700+", "800+", "900+"] as const;
const DURATION_OPTIONS = [1, 2, 3, 6] as const;
const DAILY_TIME_OPTIONS = ["30 min", "1 hour", "2 hours", "3+ hours"] as const;
const FOCUS_AREA_OPTIONS = [
  "Listening",
  "Reading",
  "Grammar",
  "Vocabulary",
] as const;

type FocusArea = (typeof FOCUS_AREA_OPTIONS)[number];

type GroqDailySchedule = {
  todayStudyTime: string;
  progressPercent: number;
  items: Array<{
    title: string;
    startTime: string;
    duration: string;
    color: string;
  }>;
};

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL_CANDIDATES = [
  "llama-3.3-70b-versatile",
  "llama-3.1-8b-instant"
] as const;

const sanitizeJsonLikeText = (input: string) => {
  const normalized = input
    .replace(/[]/g, "")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/,\s*([}\]])/g, "$1");

  let out = "";
  let inString = false;
  let escaped = false;

  for (let i = 0; i < normalized.length; i++) {
    const ch = normalized[i];

    if (inString) {
      if (escaped) {
        out += ch;
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        out += ch;
        escaped = true;
        continue;
      }
      if (ch === '"') {
        out += ch;
        inString = false;
        continue;
      }
      if (ch === "\n") {
        out += "\\n";
        continue;
      }
      if (ch === "\r") {
        out += "\\r";
        continue;
      }
      if (ch === "\t") {
        out += "\\t";
        continue;
      }

      out += ch;
      continue;
    }

    if (ch === '"') {
      out += ch;
      inString = true;
      continue;
    }

    out += ch;
  }

  return out;
};

const tryParseJson = (input: string) => {
  try {
    return JSON.parse(input);
  } catch {
    return JSON.parse(sanitizeJsonLikeText(input));
  }
};

const extractJsonObject = (rawText: string) => {
  const trimmed = rawText.trim();
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  const candidate = (fenced?.[1] ?? trimmed).trim();

  try {
    return tryParseJson(candidate);
  } catch {
    // continue
  }

  const start = candidate.search(/[\{\[]/);
  if (start === -1) throw new Error("Model did not return JSON");

  const stack: string[] = [];
  let inString = false;
  let escaped = false;

  for (let i = start; i < candidate.length; i++) {
    const ch = candidate[i];

    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (ch === '"') inString = false;
      continue;
    }

    if (ch === '"') {
      inString = true;
      continue;
    }

    if (ch === "{") {
      stack.push("}");
      continue;
    }
    if (ch === "[") {
      stack.push("]");
      continue;
    }

    if (ch === "}" || ch === "]") {
      const expected = stack.pop();
      if (expected !== ch) break;
      if (stack.length === 0) {
        const jsonSlice = candidate.slice(start, i + 1);
        return tryParseJson(jsonSlice);
      }
    }
  }

  throw new Error("Model did not return JSON");
};

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

const parseRetryAfterMs = (
  message?: string,
  retryAfterHeader?: string | null,
) => {
  if (retryAfterHeader) {
    const seconds = Number(retryAfterHeader);
    if (Number.isFinite(seconds) && seconds > 0)
      return Math.ceil(seconds * 1000);
  }

  const msg = String(message ?? "");
  const m = msg.match(/retry in\s*([0-9]+(?:\.[0-9]+)?)s/i);
  if (m?.[1]) {
    const seconds = Number(m[1]);
    if (Number.isFinite(seconds) && seconds > 0)
      return Math.ceil(seconds * 1000);
  }

  return undefined;
};

export default () => {
  const navigation = useNavigation<any>();

  const [targetScore, setTargetScore] =
    useState<(typeof TARGET_SCORE_OPTIONS)[number]>("800+");
  const [durationMonths, setDurationMonths] =
    useState<(typeof DURATION_OPTIONS)[number]>(3);
  const [dailyStudyTime, setDailyStudyTime] =
    useState<(typeof DAILY_TIME_OPTIONS)[number]>("2 hours");
  const [focusAreas, setFocusAreas] = useState<FocusArea[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const targetScoreColor = "#A47551";
  const durationColor = "#8B6BAE";
  const dailyTimeColor = "#E07B54";

  const toggleFocusArea = (area: FocusArea) => {
    setFocusAreas((prev) => {
      if (prev.includes(area)) return prev.filter((x) => x !== area);
      return [...prev, area];
    });
  };

  const prompt = useMemo(() => {
    const allowedColors = [
      "#D4A853",
      "#5B9E91",
      "#A47551",
      "#8B6BAE",
      "#E07B54",
    ];

    // Convert dailyStudyTime to minutes for calculation
    const timeInMinutes = dailyStudyTime === "30 min" ? 30 
      : dailyStudyTime === "1 hour" ? 60 
      : dailyStudyTime === "2 hours" ? 120 
      : 180; // 3+ hours

    return [
      "You are a TOEIC study plan generator.",
      "Generate a one-day schedule for TODAY.",
      "Return ONLY valid JSON (no markdown, no extra text).",
      "Your response MUST start with '{' and end with '}'.",
      "Example (follow this shape, but with your own values):",
      '{"todayStudyTime":"2h","progressPercent":70,"items":[{"title":"Word of the Day","startTime":"07:00","duration":"15 min","color":"#D4A853"}]}',
      "",
      "CRITICAL RULES:",
      "- startTime must be 24h format HH:MM (e.g. 07:00, 14:30)",
      "- duration must be a short string like '15 min', '30 min', '1h', '1h 30m'",
      `- color must be one of: ${allowedColors.join(", ")}`,
      `- The TOTAL duration of ALL items MUST equal exactly ${dailyStudyTime} (${timeInMinutes} minutes)`,
      `- todayStudyTime field must be "${dailyStudyTime}"`,
      `- Create ${timeInMinutes <= 60 ? '3-5' : timeInMinutes <= 120 ? '4-6' : '6-8'} study items`,
      "- Distribute time wisely across items based on focus areas",
      "- Keep titles short and relevant to TOEIC study tasks",
      "- Prioritize focus areas in the schedule",
      "",
      "User settings:",
      `- targetScore: ${targetScore}`,
      `- studyDurationMonths: ${durationMonths}`,
      `- dailyStudyTime: ${dailyStudyTime} (TOTAL time for ALL items)`,
      `- focusAreas: ${focusAreas.join(", ")} (prioritize these)`,
    ].join("\n");
  }, [dailyStudyTime, durationMonths, focusAreas, targetScore]);

  const generatePlan = async () => {
    if (isGenerating) return;

    if (focusAreas.length === 0) {
      Alert.alert("Focus Areas", "Please select at least 1 focus area.");
      return;
    }

    const apiKey = process.env.EXPO_PUBLIC_GROQ_API_KEY as string | undefined;

    if (!apiKey) {
      Alert.alert(
        "Missing Groq API Key",
        "Set EXPO_PUBLIC_GROQ_API_KEY in your environment and restart Metro.",
      );
      return;
    }

    setIsGenerating(true);
    try {
      let lastError: unknown = null;

      for (const model of GROQ_MODEL_CANDIDATES) {
        for (let attempt = 0; attempt < 2; attempt++) {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 20000);

          try {
            const res = await fetch(GROQ_API_URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
              },
              body: JSON.stringify({
                model,
                temperature: 0.4,
                max_tokens: 1200,
                messages: [
                  {
                    role: "system",
                    content:
                      "You are a TOEIC study plan generator. Return ONLY valid JSON (no markdown, no extra text).",
                  },
                  { role: "user", content: prompt },
                ],
              }),
              signal: controller.signal,
            });

            const payload = (await res.json().catch(() => ({}))) as any;

            if (!res.ok) {
              const message =
                payload?.error?.message ??
                payload?.message ??
                `Groq request failed (${res.status} ${res.statusText})`;

              const retryAfterMs = parseRetryAfterMs(
                message,
                res.headers.get("retry-after"),
              );

              // Auth issue: no point retrying.
              if (res.status === 401) {
                lastError = new Error(
                  "Groq: Invalid API key (401). Kiểm tra EXPO_PUBLIC_GROQ_API_KEY.",
                );
                break;
              }

              // Payment/credits issue: no point retrying.
              if (
                res.status === 402 ||
                /insufficient\s+balance/i.test(message) ||
                /insufficient\s+quota/i.test(message)
              ) {
                lastError = new Error(
                  "Groq: Insufficient balance/quota (tài khoản hết credits hoặc chưa bật billing). Hãy nạp tiền hoặc dùng API key khác.",
                );
                break;
              }

              // 404 usually means the model is not enabled for this key; try next model.
              if (res.status === 404) {
                lastError = new Error(message);
                break;
              }

              // Respect rate-limit hints when present.
              if ((res.status === 429 || res.status === 503) && attempt < 1) {
                const backoffMs = 700 * Math.pow(2, attempt);
                await sleep(
                  Math.min(30000, Math.max(backoffMs, retryAfterMs ?? 0)),
                );
                continue;
              }

              throw new Error(message);
            }

            const text: string =
              payload?.choices?.[0]?.message?.content ??
              payload?.choices?.[0]?.text ??
              "";

            if (!String(text).trim()) {
              throw new Error("Groq returned no text");
            }

            const parsed = extractJsonObject(String(text)) as GroqDailySchedule;

            if (!parsed || !Array.isArray(parsed.items)) {
              throw new Error("Invalid schedule format returned by Groq");
            }

            const scheduleItems = parsed.items.map((it) => ({
              title: String(it?.title ?? ""),
              startTime: String(it?.startTime ?? ""),
              duration: String(it?.duration ?? ""),
              color: String(it?.color ?? targetScoreColor),
            }));

            const numericTarget = Number(
              String(targetScore).replace(/[^0-9]/g, ""),
            );

            // Lưu settings lên Supabase (bảng study_plans)
            const studyPlan = await createStudyPlan({
              targetScore:
                Number.isFinite(numericTarget) && numericTarget > 0
                  ? numericTarget
                  : 800,
              durationMonths,
              dailyStudyTime,
              focusAreas,
            });

            // Lưu daily schedule lên Supabase (bảng daily_schedules)
            const today = new Date().toISOString().split('T')[0];
            await saveDailySchedule(
              today,
              String(parsed.todayStudyTime ?? dailyStudyTime),
              typeof parsed.progressPercent === "number" ? parsed.progressPercent : 0,
              scheduleItems,
              studyPlan.id
            );
            navigation.navigate("StudyPlanDaily");
            return;
          } catch (e) {
            lastError = e;
            const isAbort = (e as any)?.name === "AbortError";
            if (isAbort && attempt < 1) continue;
          } finally {
            clearTimeout(timeoutId);
          }
        }
      }

      throw lastError instanceof Error
        ? lastError
        : new Error("Groq is busy right now. Please try again.");
    } catch (e: any) {
      Alert.alert("Generate Plan Failed", e?.message ?? "Unknown error");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
      edges={["top", "left", "right"]}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FAF6F1",
          paddingTop: 18,
          paddingRight: 20,
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}
            style={{
              width: 38,
              height: 38,
              borderRadius: 16,
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowLeft size={20} color="#2C2636" />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: "#2C2636",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {" Create Study Plan"}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginBottom: 48,
            marginLeft: 21,
          }}
        >
          <View
            style={{
              paddingBottom: 1,
              marginBottom: 25,
            }}
          >
            <View
              style={{
                paddingBottom: 1,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Target Score"}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {TARGET_SCORE_OPTIONS.map((opt, idx) => {
                const selected = opt === targetScore;
                return (
                  <TouchableOpacity
                    key={opt}
                    style={{
                      flex: 1,
                      alignItems: "center",
                      backgroundColor: selected ? targetScoreColor : "#FFFFFF",
                      borderColor: selected ? "transparent" : "#2C26361A",
                      borderRadius: 16,
                      borderWidth: selected ? 0 : 1,
                      paddingVertical: 12,
                      marginRight:
                        idx === TARGET_SCORE_OPTIONS.length - 1
                          ? 0
                          : idx === 0
                            ? 9
                            : 8,
                    }}
                    onPress={() => setTargetScore(opt)}
                    disabled={isGenerating}
                  >
                    <Text
                      style={{
                        color: selected ? "#FFFFFF" : "#2C2636",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {opt}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View
            style={{
              paddingBottom: 1,
              marginBottom: 25,
            }}
          >
            <View
              style={{
                paddingBottom: 1,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Study Duration (months)"}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {DURATION_OPTIONS.map((opt, idx) => {
                const selected = opt === durationMonths;
                return (
                  <TouchableOpacity
                    key={String(opt)}
                    style={{
                      flex: 1,
                      alignItems: "center",
                      backgroundColor: selected ? durationColor : "#FFFFFF",
                      borderColor: selected ? "transparent" : "#2C26361A",
                      borderRadius: 16,
                      borderWidth: selected ? 0 : 1,
                      paddingVertical: 12,
                      marginRight:
                        idx === DURATION_OPTIONS.length - 1
                          ? 0
                          : idx === 0
                            ? 9
                            : 8,
                    }}
                    onPress={() => setDurationMonths(opt)}
                    disabled={isGenerating}
                  >
                    <Text
                      style={{
                        color: selected ? "#FFFFFF" : "#2C2636",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {String(opt)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View
            style={{
              paddingBottom: 1,
              marginBottom: 25,
            }}
          >
            <View
              style={{
                paddingBottom: 1,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Daily Study Time"}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {DAILY_TIME_OPTIONS.map((opt, idx) => {
                const selected = opt === dailyStudyTime;
                return (
                  <TouchableOpacity
                    key={opt}
                    style={{
                      flex: 1,
                      alignItems: "center",
                      backgroundColor: selected ? dailyTimeColor : "#FFFFFF",
                      borderColor: selected ? "transparent" : "#2C26361A",
                      borderRadius: 16,
                      borderWidth: selected ? 0 : 1,
                      paddingVertical: 8,
                      marginRight:
                        idx === DAILY_TIME_OPTIONS.length - 1
                          ? 0
                          : idx === 0
                            ? 9
                            : 8,
                    }}
                    onPress={() => setDailyStudyTime(opt)}
                    disabled={isGenerating}
                  >
                    <Text
                      style={{
                        color: selected ? "#FFFFFF" : "#2C2636",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      {opt}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View
            style={{
              paddingBottom: 1,
              marginBottom: 25,
            }}
          >
            <View
              style={{
                paddingBottom: 1,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Focus Areas"}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {FOCUS_AREA_OPTIONS.map((area) => {
                const selected = focusAreas.includes(area);
                return (
                  <TouchableOpacity
                    key={area}
                    style={{
                      alignSelf: "flex-start",
                      backgroundColor: selected ? "#A475511A" : "#FFFFFF",
                      borderColor: selected ? targetScoreColor : "#2C26361A",
                      borderRadius: 28138600,
                      borderWidth: 1,
                      paddingVertical: 8,
                      paddingHorizontal: 16,
                      marginRight: 9,
                      marginBottom: 9,
                    }}
                    onPress={() => toggleFocusArea(area)}
                    disabled={isGenerating}
                  >
                    <Text
                      style={{
                        color: selected ? targetScoreColor : "#2C2636",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {area}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <TouchableOpacity
            style={{
              alignItems: "center",
              borderRadius: 16,
              paddingVertical: 11,
              opacity: isGenerating ? 0.7 : 1,
            }}
            onPress={generatePlan}
            disabled={isGenerating}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#A47551", "#E07B54"]}
              style={{
                alignItems: "center",
                width: "100%",
                borderRadius: 16,
                paddingVertical: 11,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {isGenerating ? "Generating..." : "Generate Plan"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
