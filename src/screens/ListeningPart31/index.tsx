import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Clock, Play, Pause, Circle, CheckCircle2 } from "lucide-react-native";
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
  GroupItem,
} from "../../lib/listeningService";

type ListeningPart31Props = NativeStackScreenProps<
  RootStackParamList,
  "ListeningPart31"
>;

export default (props: ListeningPart31Props) => {
  const { examId } = props.route.params;

  // ── Data state
  const [groups, setGroups] = useState<GroupItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ── Quiz state
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});

  // ── Audio state
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const player = useAudioPlayer(audioUrl ? { uri: audioUrl } : null);
  const status = useAudioPlayerStatus(player);
  const isPlaying = status.playing;
  const audioDuration = (status.duration ?? 0) * 1000;
  const audioPosition = (status.currentTime ?? 0) * 1000;

  // ── Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const partData = await getExamPart(examId, 3); // get part 3
      if (!partData || !partData.groups || partData.groups.length === 0) {
        setError("Không tìm thấy dữ liệu. Vui lòng thử lại.");
        setLoading(false);
        return;
      }
      setGroups(partData.groups);
      
      const initialAnswers: Record<string, number | null> = {};
      partData.groups.forEach((g) => {
        g.questions.forEach((q) => {
          initialAnswers[q.id] = null;
        });
      });
      setAnswers(initialAnswers);
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
    if (groups.length === 0) return;
    const currentGroup = groups[currentGroupIndex];
    if (currentGroup.audio?.url) {
      loadAndPlayAudio(currentGroup.audio.url);
    } else {
      setAudioUrl(null);
    }
    return () => {
      try { player.pause(); } catch (_) {}
    };
  }, [currentGroupIndex, groups]);

  useEffect(() => {
    return () => {
      try { player.pause(); } catch (_) {}
    };
  }, []);

  // ── Derived values
  const totalGroups = groups.length;
  const currentGroup = groups[currentGroupIndex];
  const audioProgressPercent = audioDuration > 0 ? (audioPosition / audioDuration) * 100 : 0;
  
  const totalQuestions = useMemo(() => {
    return groups.reduce((acc, g) => acc + g.questions.length, 0);
  }, [groups]);

  const currentFirstQuestionIndex = useMemo(() => {
    let count = 0;
    for (let i = 0; i < currentGroupIndex; i++) {
      count += groups[i].questions.length;
    }
    return count;
  }, [currentGroupIndex, groups]);

  // ── Handlers
  const handleSelect = (questionId: string, answerIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const handleBack = () => {
    if (currentGroupIndex === 0) {
      props.navigation.goBack();
      return;
    }
    setCurrentGroupIndex((i) => i - 1);
  };

  const handleNext = async () => {
    if (currentGroupIndex < totalGroups - 1) {
      setCurrentGroupIndex((i) => i + 1);
      return;
    }
    // Finish
    let correctCount = 0;
    const answerPayload: any[] = [];
    const results: boolean[] = [];

    groups.forEach((g) => {
      g.questions.forEach((q) => {
        const selectedIdx = answers[q.id];
        const correctIdx = q.answers.findIndex((a) => a.is_correct);
        const isCorrect = selectedIdx !== null && selectedIdx !== undefined && selectedIdx === correctIdx;
        
        if (isCorrect) {
          correctCount++;
        }
        results.push(isCorrect);
        
        const answerId = selectedIdx !== null && selectedIdx !== undefined ? q.answers[selectedIdx]?.id ?? null : null;
        answerPayload.push({ questionId: q.id, answerId });
      });
    });

    saveAttempt({
      examId,
      answers: answerPayload,
      correctCount,
      totalQuestions,
    }).catch((e) => console.warn("[saveAttempt]", e));

    props.navigation.navigate("ListeningPart3Result", { results });
  };

  // ── Render: Loading/Error
  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center" }} edges={["top", "left", "right"]}>
        <ActivityIndicator size="large" color="#E07B54" />
      </SafeAreaView>
    );
  }
  if (error || !currentGroup) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center" }} edges={["top", "left", "right"]}>
        <Text style={{ color: "#E07B54" }}>{error}</Text>
      </SafeAreaView>
    );
  }

  // Calculate overall progress based on answered questions
  const answeredCount = Object.values(answers).filter(a => a !== null).length;
  const overallProgressPercent = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF6F1" }} edges={["top", "left", "right"]}>
      {/* Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 0, marginHorizontal: 20, marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{ width: 38, height: 38, borderRadius: 16, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center" }}
        >
          <ArrowLeft size={20} color="#2C2636" />
        </TouchableOpacity>
        
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1, marginHorizontal: 16 }}>
          <Text style={{ color: "#6E6880", fontSize: 12, fontWeight: "bold", marginRight: 8 }}>
            Q {currentFirstQuestionIndex + 1}/{totalQuestions}
          </Text>
          <View style={{ flex: 1, height: 6, backgroundColor: "#F0EBE4", borderRadius: 3, overflow: "hidden" }}>
            <View style={{ width: `${overallProgressPercent}%`, height: "100%", backgroundColor: "#E07B54" }} />
          </View>
        </View>

        <Clock size={24} color="#000000" />
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 0 }}>
        {/* Main Card */}
        <View style={{ backgroundColor: "#FFFFFF", borderRadius: 16, paddingTop: 20, paddingRight: 10, paddingLeft: 10, marginHorizontal: 20 }}>
          {/* Audio Player */}
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
            <TouchableOpacity
              onPress={togglePlayPause}
              style={{ marginRight: 12 }}
            >
              {isPlaying ? <Pause size={28} color="#6E6880" fill="#6E6880" /> : <Play size={28} color="#6E6880" fill="#6E6880" />}
            </TouchableOpacity>
            <View style={{ flex: 1, height: 6, backgroundColor: "#EBEBEB", borderRadius: 3, overflow: "hidden" }}>
              <View style={{ width: `${audioProgressPercent}%`, height: "100%", backgroundColor: "#E07B54" }} />
            </View>
          </View>

          {/* Questions */}
          {currentGroup.questions.map((q, idx) => {
            const questionNumber = currentFirstQuestionIndex + idx + 1;
            const selected = answers[q.id];

            return (
              <View key={q.id} style={{ marginBottom: 12 }}>
                {/* Question Text */}
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                  <View style={{
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    backgroundColor: "#E07B54",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 12,
                    marginTop: 2
                  }}>
                    <Text style={{ color: "#FFFFFF", fontSize: 12, fontWeight: "bold" }}>
                      {questionNumber}
                    </Text>
                  </View>
                  <Text style={{ flex: 1, fontSize: 15, fontWeight: "bold", color: "#111111", lineHeight: 22 }}>
                    {q.content}
                  </Text>
                </View>

                {/* Options */}
                <View style={{ paddingLeft: 30 }}>
                  {q.answers.map((answer, aIdx) => {
                    const isSelected = selected === aIdx;
                    return (
                      <TouchableOpacity
                        key={answer.id}
                        onPress={() => handleSelect(q.id, aIdx)}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginBottom: 14,
                        }}
                        activeOpacity={0.7}
                      >
                        {isSelected ? (
                          <CheckCircle2 size={20} color="#E07B54" style={{ marginRight: 12 }} />
                        ) : (
                          <Circle size={20} color="#D1D1D1" style={{ marginRight: 12 }} />
                        )}
                        <Text style={{ color: "#6E6880", fontSize: 14, flex: 1 }}>
                          {answer.content}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>

        {/* Bottom Buttons */}
        <View style={{ flexDirection: "row", paddingHorizontal: 20, marginTop: 20 }}>
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
            <Text style={{ color: "#000000", fontSize: 16, fontWeight: "bold" }}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#E07B54",
              borderRadius: 12,
              paddingVertical: 16,
              alignItems: "center",
            }}
            onPress={handleNext}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>
              {currentGroupIndex === totalGroups - 1 ? "Submit" : "Next"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
