import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Clock, Play, Pause, SkipBack, SkipForward } from "lucide-react-native";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";
import { useAudioPlayer, useAudioPlayerStatus, setAudioModeAsync } from "expo-audio";
import {
  getExamPart,
  saveAttempt,
  AnswerItem,
  QuestionItem,
} from "../../lib/listeningService";

type ListeningPart11Props = NativeStackScreenProps<
  RootStackParamList,
  "ListeningPart11"
>;

type AnswerIndex = 0 | 1 | 2 | 3;
const OPTION_LABELS = ["A", "B", "C", "D"] as const;

export default (props: ListeningPart11Props) => {
  const { examId } = props.route.params;

  // ── Data state ──────────────────────────────────────────────────────────────
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ── Quiz state ───────────────────────────────────────────────────────────────
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<AnswerIndex | null>>([]);

  // ── Audio state ──────────────────────────────────────────────────────────────
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const player = useAudioPlayer(audioUrl ? { uri: audioUrl } : null);
  const status = useAudioPlayerStatus(player);
  const isPlaying = status.playing;
  const audioDuration = (status.duration ?? 0) * 1000;   // expo-audio returns seconds
  const audioPosition = (status.currentTime ?? 0) * 1000;

  // ── Fetch data ───────────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const partData = await getExamPart(examId, 1);
      if (!partData || partData.standalone.length === 0) {
        setError("Không tìm thấy câu hỏi. Vui lòng thử lại.");
        setLoading(false);
        return;
      }
      setQuestions(partData.standalone);
      setAnswers(Array(partData.standalone.length).fill(null));
      setLoading(false);
    };
    fetchData();
  }, [examId]);

  // ── Audio helpers ─────────────────────────────────────────────────────────────
  const loadAndPlayAudio = async (url: string) => {
    try {
      await setAudioModeAsync({ playsInSilentMode: true });
      setAudioUrl(url);
    } catch (e) {
      console.warn("[audio] loadAndPlayAudio error:", e);
    }
  };

  const togglePlayPause = async () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  };

  const replayAudio = async () => {
    player.seekTo(0);
    player.play();
  };

  // Auto-play khi đổi câu
  useEffect(() => {
    if (questions.length === 0) return;
    const q = questions[currentIndex];
    const audio = q.media.find((m) => m.type === "AUDIO");
    if (audio?.url) {
      loadAndPlayAudio(audio.url);
    } else {
      setAudioUrl(null);
    }
    return () => {
      try { player.pause(); } catch (_) {}
    };
  }, [currentIndex, questions]);

  // Cleanup khi rời màn hình
  useEffect(() => {
    return () => {
      try { player.pause(); } catch (_) {}
    };
  }, []);

  // ── Derived values ────────────────────────────────────────────────────────────
  const total = questions.length;
  const currentQuestion = questions[currentIndex];
  const selected = answers[currentIndex];
  const progressPercent = total > 0 ? ((currentIndex + 1) / total) * 100 : 0;

  const audioProgressPercent =
    audioDuration > 0 ? (audioPosition / audioDuration) * 100 : 0;

  const imageUri = currentQuestion?.media.find((m) => m.type === "IMAGE")?.url;

  const correctAnswers = useMemo(
    () =>
      questions.map((q) => {
        const correct = q.answers.find((a) => a.is_correct);
        return correct ? q.answers.indexOf(correct) : -1;
      }),
    [questions]
  );

  // ── Handlers ──────────────────────────────────────────────────────────────────
  const handleSelect = (index: AnswerIndex) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = index;
      return next;
    });
  };

  const handleBack = () => {
    if (currentIndex === 0) {
      props.navigation.goBack();
      return;
    }
    setCurrentIndex((i) => i - 1);
  };

  const handleNext = async () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
      return;
    }

    // Finish: lưu kết quả
    const correctCount = answers.filter(
      (a, i) => a !== null && a === correctAnswers[i]
    ).length;

    // Build payload for saveAttempt
    const answerPayload = questions.map((q, i) => {
      const selectedIdx = answers[i];
      const answerId =
        selectedIdx !== null ? q.answers[selectedIdx]?.id ?? null : null;
      return { questionId: q.id, answerId };
    });

    saveAttempt({
      examId,
      answers: answerPayload,
      correctCount,
      totalQuestions: total,
    }).catch((e) => console.warn("[saveAttempt]", e));

    props.navigation.navigate("ListeningPart1Result", {
      answers,
      correctAnswers,
    });
  };

  // ── Render: Loading ───────────────────────────────────────────────────────────
  if (loading) {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center" }}
        edges={["top", "left", "right"]}
      >
        <ActivityIndicator size="large" color="#A47551" />
        <Text style={{ color: "#6E6880", marginTop: 12, fontSize: 14 }}>
          Loading questions...
        </Text>
      </SafeAreaView>
    );
  }

  if (error || !currentQuestion) {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center" }}
        edges={["top", "left", "right"]}
      >
        <Text style={{ color: "#E07B54", fontSize: 14, textAlign: "center", marginHorizontal: 32 }}>
          {error ?? "Đã xảy ra lỗi. Vui lòng thử lại."}
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{ marginTop: 20, backgroundColor: "#A47551", borderRadius: 12, paddingVertical: 12, paddingHorizontal: 24 }}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>Quay lại</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  // ── Render: Quiz ─────────────────────────────────────────────────────────────
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
          paddingTop: 0,
        }}
      >
        {/* Spacer row (giữ nguyên layout gốc) */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 17,
            marginHorizontal: 20,
          }}
        />

        {/* Progress row */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 7,
            marginLeft: 20,
            marginRight: 36,
          }}
        >
          <TouchableOpacity onPress={() => props.navigation.goBack()}
            style={{
              width: 38,
              height: 38,
              borderRadius: 16,
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
            }}
          >
            <ArrowLeft size={20} color="#2C2636" />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              marginHorizontal: 12,
            }}
          >
            <Text style={{ color: "#6E6880", fontSize: 14, marginRight: 12 }}>
              {`Q ${currentIndex + 1}/${total}`}
            </Text>
            <View
              style={{
                flex: 1,
                backgroundColor: "#F0EBE4",
                borderRadius: 16,
                height: 8,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  width: `${progressPercent}%`,
                  height: "100%",
                  backgroundColor: "#A47551",
                  borderRadius: 16,
                }}
              />
            </View>
          </View>

          <Clock size={20} color="#6E6880" />
        </View>

        {/* Question card */}
        <View style={{ marginHorizontal: 20 }}>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 23,
              paddingHorizontal: 30,
              marginBottom: 10,
            }}
          >
            {/* Image */}
            {imageUri ? (
              <Image
                source={{ uri: imageUri }}
                resizeMode={"cover"}
                style={{
                  height: 155,
                  width: "100%",
                  marginBottom: 17,
                  borderRadius: 8,
                }}
              />
            ) : (
              <View
                style={{
                  height: 155,
                  width: "100%",
                  marginBottom: 17,
                  borderRadius: 8,
                  backgroundColor: "#F0EBE4",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#A47551", fontSize: 12 }}>No image</Text>
              </View>
            )}

            <Text style={{ color: "#6E6880", fontSize: 14, marginBottom: 17 }}>
              {"Listen and choose the best description"}
            </Text>

            {/* Audio player – giữ nguyên layout gốc, thêm chức năng */}
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#F0EBE480",
                borderRadius: 16,
                paddingVertical: 16,
                marginHorizontal: 4,
                alignSelf: "stretch",
              }}
            >
              {/* Audio progress bar */}
              <View
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#F0EBE4",
                  borderRadius: 16,
                  marginBottom: 17,
                  marginHorizontal: 17,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    height: 6,
                    width: `${audioProgressPercent}%`,
                    backgroundColor: "#A47551",
                    borderRadius: 16,
                  }}
                />
              </View>

              {/* Controls: replay | play/pause | forward */}
              <View
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                {/* Replay */}
                <TouchableOpacity onPress={replayAudio} activeOpacity={0.7} style={{ marginRight: 41 }}>
                  <SkipBack size={24} color="#6E6880" />
                </TouchableOpacity>

                {/* Play / Pause */}
                <TouchableOpacity
                  onPress={togglePlayPause}
                  activeOpacity={0.7}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: "#A47551",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 41,
                  }}
                >
                  {isPlaying ? (
                    <Pause size={24} color="#FFFFFF" />
                  ) : (
                    <Play size={24} color="#FFFFFF" style={{ marginLeft: 4 }} />
                  )}
                </TouchableOpacity>

                {/* Forward (skip) */}
                <TouchableOpacity activeOpacity={0.7}>
                  <SkipForward size={24} color="#6E6880" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Options */}
          <View style={{ paddingBottom: 1 }}>
            <View style={{ marginBottom: 16 }}>
              {currentQuestion.answers.map((answer, idx) => {
                const optionIndex = idx as AnswerIndex;
                const isSelected = selected === optionIndex;

                return (
                  <TouchableOpacity
                    key={`${currentQuestion.id}-${idx}`}
                    activeOpacity={0.7}
                    onPress={() => handleSelect(optionIndex)}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#FFFFFF",
                      borderColor: isSelected ? "#A47551" : "#2C26361A",
                      borderRadius: 16,
                      borderWidth: 1,
                      paddingVertical: 14,
                      paddingHorizontal: 14,
                      marginBottom: idx === 3 ? 0 : 13,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: isSelected ? "#A47551" : "#FFFFFF",
                        borderColor: isSelected ? "#A47551" : "#2C26361A",
                        borderRadius: 22,
                        borderWidth: 1,
                        paddingVertical: 6,
                        paddingHorizontal: 10,
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{
                          color: isSelected ? "#FFFFFF" : "#000000",
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        {OPTION_LABELS[idx]}
                      </Text>
                    </View>

                    <Text
                      style={{
                        color: "#000000",
                        fontSize: 14,
                        fontWeight: "bold",
                        flex: 1,
                      }}
                    >
                      {answer.content}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        {/* Back / Next buttons */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
            marginBottom: 16,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#F0EBE4",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 16,
              marginRight: 10,
            }}
            onPress={handleBack}
            activeOpacity={0.7}
          >
            <Text style={{ color: "#000000", fontSize: 14, fontWeight: "bold" }}>
              {currentIndex === 0 ? "Back" : "Previous"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#A47551",
              borderColor: "#F0EBE4",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 16,
            }}
            onPress={handleNext}
            activeOpacity={0.7}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: "bold" }}>
              {currentIndex === total - 1 ? "Finish" : "Next"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
