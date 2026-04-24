import { ArrowLeft } from "lucide-react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import {
  createVocabQuizAttempt,
  finishVocabQuizAttempt,
  getDailyVocabQuiz,
  upsertVocabQuizAnswer,
  type DailyQuizQuestion,
} from "../../lib/vocabularyQuizService";

export default () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const topic: string | undefined = route?.params?.topic;

  const [questions, setQuestions] = useState<DailyQuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const currentQuestion = useMemo(
    () => questions[currentIndex] ?? null,
    [questions, currentIndex],
  );

  const loadQuiz = useCallback(async () => {
    setIsLoading(true);
    setSelectedIndex(null);
    setCurrentIndex(0);
    setCorrectCount(0);
    setResults([]);
    try {
      const data = await getDailyVocabQuiz(topic, 10);
      setQuestions(data);

      try {
        const attempt = await createVocabQuizAttempt(topic, data.length || 10);
        setAttemptId(attempt.id);
      } catch (e) {
        console.error("Error creating quiz attempt:", e);
        setAttemptId(null);
      }
    } finally {
      setIsLoading(false);
    }
  }, [topic]);

  useFocusEffect(
    useCallback(() => {
      void loadQuiz();
    }, [loadQuiz]),
  );

  useEffect(() => {
    setSelectedIndex(null);
  }, [currentIndex]);

  const onPressNext = useCallback(async () => {
    if (!currentQuestion) return;
    if (isSaving) return;

    setIsSaving(true);
    try {
      const isCorrectNow =
        selectedIndex !== null &&
        selectedIndex === currentQuestion.correct_index;

      if (
        attemptId &&
        selectedIndex !== null &&
        Number.isFinite(currentQuestion.correct_index)
      ) {
        try {
          await upsertVocabQuizAnswer({
            attemptId,
            vocabularyBankId: currentQuestion.vocabulary_bank_id,
            questionIndex: currentIndex,
            selectedIndex,
            correctIndex: currentQuestion.correct_index,
          });
        } catch (e) {
          console.error("Error saving quiz answer:", e);
        }
      }

      const nextCorrect = correctCount + (isCorrectNow ? 1 : 0);
      const nextResults = [...results, isCorrectNow];

      const isLast = currentIndex + 1 >= questions.length;
      if (!isLast) {
        setCorrectCount(nextCorrect);
        setResults(nextResults);
        setCurrentIndex((i) => i + 1);
        return;
      }

      if (attemptId) {
        try {
          const total = questions.length;
          await finishVocabQuizAttempt(attemptId, nextCorrect, total);
        } catch (e) {
          console.error("Error finishing quiz attempt:", e);
        }
      }

      navigation.navigate("VocabularyQuizResult", {
        items: questions.map((q, idx) => ({
          word: q.word,
          isCorrect: Boolean(nextResults[idx]),
        })),
        ...(topic ? { topic } : {}),
      });
    } finally {
      setIsSaving(false);
    }
  }, [
    attemptId,
    correctCount,
    currentIndex,
    currentQuestion,
    isSaving,
    navigation,
    questions.length,
    results,
    selectedIndex,
    topic,
  ]);

  const progressText = useMemo(() => {
    const total = questions.length || 10;
    return `${Math.min(currentIndex + 1, total)}/${total}`;
  }, [currentIndex, questions.length]);

  const totalBars = 10;
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
        }}
      >
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
            marginHorizontal: 19,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 21,
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
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                marginRight: 12,
              }}
            >
              {Array.from({ length: totalBars }).map((_, i) => (
                <View
                  key={i}
                  style={{
                    height: 5,
                    flex: 1,
                    backgroundColor: i === currentIndex ? "#A47551" : "#F0EBE4",
                    borderRadius: 28138600,
                    marginRight: i === totalBars - 1 ? 0 : 5,
                  }}
                />
              ))}
            </View>
            <View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                }}
              >
                {progressText}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginBottom: 22,
            }}
          >
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 25,
              }}
            >
              <View
                style={{
                  marginBottom: 8,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"What does this word mean?"}
                </Text>
              </View>
              <View
                style={{
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 24,
                  }}
                >
                  {isLoading
                    ? ""
                    : questions.length === 0
                      ? "No quiz"
                      : (currentQuestion?.word ?? "")}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {isLoading
                    ? ""
                    : questions.length === 0
                      ? ""
                      : currentQuestion?.phonetic
                        ? `/${currentQuestion.phonetic}/`
                        : ""}
                </Text>
              </View>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: -7,
                right: 0,
                left: 0,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              ></Text>
            </View>
          </View>
          <View
            style={{
              marginBottom: 21,
            }}
          >
            {(currentQuestion?.options ?? []).slice(0, 4).map((opt, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={0.85}
                onPress={() => setSelectedIndex(i)}
                style={{
                  marginBottom: i === 3 ? 0 : 13,
                  backgroundColor: "#FFFFFF",
                  borderColor: selectedIndex === i ? "#A47551" : "#2C26361A",
                  borderRadius: 16,
                  borderWidth: selectedIndex === i ? 2 : 1,
                  paddingVertical: 18,
                  paddingHorizontal: 16,
                  opacity: isLoading ? 0.6 : 1,
                }}
                disabled={isLoading || questions.length === 0}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                    opacity: selectedIndex === i ? 1 : 0.7,
                  }}
                >
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "#A47551",
              borderRadius: 16,
              paddingVertical: 11,
              opacity: isSaving ? 0.7 : 1,
            }}
            onPress={onPressNext}
            disabled={isSaving || isLoading || questions.length === 0}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {"Next"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
