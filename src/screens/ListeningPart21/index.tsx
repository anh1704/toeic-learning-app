import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Clock, Play, Pause } from "lucide-react-native";
import {
  View,
  ScrollView,
  Text,
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
  QuestionItem,
} from "../../lib/listeningService";

type ListeningPart21Props = NativeStackScreenProps<
  RootStackParamList,
  "ListeningPart21"
>;

type AnswerIndex = 0 | 1 | 2; // Part 2 usually has 3 options
const OPTION_LABELS = ["(A)", "(B)", "(C)"] as const;

export default (props: ListeningPart21Props) => {
  const { examId } = props.route.params;

  // ── Data state
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ── Quiz state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<AnswerIndex | null>>([]);

  // ── Audio state
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const player = useAudioPlayer(audioUrl ? { uri: audioUrl } : null);
  const status = useAudioPlayerStatus(player);
  const isPlaying = status.playing;
  const audioDuration = (status.duration ?? 0) * 1000; // expo-audio returns seconds
  const audioPosition = (status.currentTime ?? 0) * 1000;

  // ── Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const partData = await getExamPart(examId, 2); // get part 2
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

  // ── Audio helpers
  const loadAndPlayAudio = async (url: string) => {
    try {
      await setAudioModeAsync({ playsInSilentMode: true });
      setAudioUrl(url);
    } catch (e) {
      console.warn("[audio] error:", e);
    }
  };

  const togglePlayPause = async () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  };

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

  useEffect(() => {
    return () => {
      try { player.pause(); } catch (_) {}
    };
  }, []);

  // ── Derived values
  const total = questions.length;
  const currentQuestion = questions[currentIndex];
  const selected = answers[currentIndex];
  const audioProgressPercent = audioDuration > 0 ? (audioPosition / audioDuration) * 100 : 0;

  const correctAnswers = useMemo(
    () =>
      questions.map((q) => {
        const correct = q.answers.find((a) => a.is_correct);
        return correct ? q.answers.indexOf(correct) : -1;
      }),
    [questions]
  );

  // ── Handlers
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

  const handleSubmit = async () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
      return;
    }
    // Finish
    const correctCount = answers.filter((a, i) => a !== null && a === correctAnswers[i]).length;
    const answerPayload = questions.map((q, i) => {
      const selectedIdx = answers[i];
      const answerId = selectedIdx !== null ? q.answers[selectedIdx]?.id ?? null : null;
      return { questionId: q.id, answerId };
    });

    saveAttempt({
      examId,
      answers: answerPayload,
      correctCount,
      totalQuestions: total,
    }).catch((e) => console.warn("[saveAttempt]", e));

    props.navigation.navigate("ListeningPart2Result", {
      answers,
      correctAnswers,
    });
  };

  // ── Render: Loading/Error
  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center" }} edges={["top", "left", "right"]}>
        <ActivityIndicator size="large" color="#8B6BAE" />
      </SafeAreaView>
    );
  }
  if (error || !currentQuestion) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center" }} edges={["top", "left", "right"]}>
        <Text style={{ color: "#E07B54" }}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top", "left", "right"]}>
      <ScrollView style={{ flex: 1, backgroundColor: "#FAF6F1" }}>
        {/* Header */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 16, marginHorizontal: 20 }}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{ width: 38, height: 38, borderRadius: 16, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center" }}
          >
            <ArrowLeft size={20} color="#2C2636" />
          </TouchableOpacity>
          <Clock size={24} color="#000000" />
        </View>

        {/* Question Grid */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 20, marginTop: 24 }}>
          {questions.map((q, i) => {
            let bgColor = "#8B6BAE"; // default unattempted
            if (i === currentIndex) {
              bgColor = "#5B9E91"; // active
            } else if (answers[i] !== null) {
              bgColor = "#A1C5BB"; // completed
            }

            return (
              <TouchableOpacity
                key={q.id}
                onPress={() => setCurrentIndex(i)}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 14,
                  backgroundColor: bgColor,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 8,
                  marginBottom: 12,
                }}
              >
                <Text style={{ color: "#FFFFFF", fontSize: 12, fontWeight: "bold" }}>{i + 7}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Player & Options Card */}
        <View style={{ backgroundColor: "#FFFFFF", borderRadius: 16, padding: 24, marginHorizontal: 20, marginTop: 12, marginBottom: 24 }}>
          {/* Audio Player */}
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24 }}>
            <TouchableOpacity
              onPress={togglePlayPause}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#8B6BAE",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              {isPlaying ? <Pause size={20} color="#FFFFFF" /> : <Play size={20} color="#FFFFFF" style={{ marginLeft: 3 }} />}
            </TouchableOpacity>
            <View style={{ flex: 1, height: 8, backgroundColor: "#F0EBE4", borderRadius: 4, overflow: "hidden" }}>
              <View style={{ width: `${audioProgressPercent}%`, height: "100%", backgroundColor: "#8B6BAE" }} />
            </View>
          </View>

          {/* Options */}
          <View>
            {currentQuestion.answers.slice(0, 3).map((answer, idx) => {
              const optionIndex = idx as AnswerIndex;
              const isSelected = selected === optionIndex;

              return (
                <TouchableOpacity
                  key={`${currentQuestion.id}-${idx}`}
                  onPress={() => handleSelect(optionIndex)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFFFFF",
                    borderColor: isSelected ? "#8B6BAE" : "#EBEBEB",
                    borderRadius: 12,
                    borderWidth: 1,
                    paddingVertical: 14,
                    paddingHorizontal: 16,
                    marginBottom: 12,
                  }}
                  activeOpacity={0.7}
                >
                  <Text style={{ color: isSelected ? "#8B6BAE" : "#111111", fontSize: 14, fontWeight: "bold" }}>
                    {OPTION_LABELS[idx]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Bottom Buttons */}
        <View style={{ flexDirection: "row", paddingHorizontal: 20, marginBottom: 40 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              paddingVertical: 16,
              alignItems: "center",
              marginRight: 12,
            }}
            onPress={handleBack}
          >
            <Text style={{ color: "#000000", fontSize: 16, fontWeight: "bold" }}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#8B6BAE",
              borderRadius: 12,
              paddingVertical: 16,
              alignItems: "center",
            }}
            onPress={handleSubmit}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>
              {currentIndex === total - 1 ? "Submit" : "Submit"}
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};
