import { ArrowLeft, Check, Headphones, Star } from "lucide-react-native";
import React, { useCallback, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";
import {
  getExamsForPart,
  getBestAttempts,
  ExamForPart,
  BestAttempt,
} from "../../lib/listeningService";

type ListeningPart1Props = NativeStackScreenProps<
  RootStackParamList,
  "ListeningPart1"
>;

/** Component 5 ngôi sao */
const StarRating = ({ correct, total }: { correct: number; total: number }) => (
  <View style={{ flexDirection: "row", gap: 3 }}>
    {/* Tự động tạo mảng [1, 2, 3...] theo số total */}
    {Array.from({ length: total }, (_, i) => i + 1).map((i) => (
      <Star
        key={i}
        size={14}
        color="#A47551"
        fill={i <= correct ? "#A47551" : "transparent"}
      />
    ))}
  </View>
);

export default (props: ListeningPart1Props) => {
  const [exams, setExams] = useState<ExamForPart[]>([]);
  const [attempts, setAttempts] = useState<Map<string, BestAttempt>>(new Map());
  const [loading, setLoading] = useState(true);

  // useFocusEffect: refetch mỗi lần quay lại màn hình (sau khi làm xong bài)
  useFocusEffect(
    useCallback(() => {
      let active = true;
      const fetchAll = async () => {
        setLoading(true);
        const examList = await getExamsForPart(1);
        if (!active) return;
        setExams(examList);

        const ids = examList.map((e) => e.exam_id);
        const attemptsMap = await getBestAttempts(ids);
        if (!active) return;
        setAttempts(attemptsMap);
        setLoading(false);
      };
      fetchAll();
      return () => {
        active = false;
      };
    }, [])
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFFFFF" }}
      edges={["top", "left", "right"]}
    >
      <ScrollView
        style={{ flex: 1, backgroundColor: "#FAF6F1", paddingTop: 19 }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 13,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
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
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 12,
            }}
          >
            {"Part 1: Photographs"}
          </Text>
        </View>

        <Text
          style={{
            color: "#6E6880",
            fontSize: 14,
            marginBottom: 16,
            marginLeft: 20,
            marginRight: 34,
          }}
        >
          {"Listen and select the best description of what you see in the photograph."}
        </Text>

        {/* List */}
        {loading ? (
          <ActivityIndicator size="large" color="#A47551" style={{ marginTop: 40 }} />
        ) : exams.length === 0 ? (
          <Text
            style={{
              color: "#6E6880",
              fontSize: 14,
              textAlign: "center",
              marginTop: 40,
            }}
          >
            No exercises available.
          </Text>
        ) : (
          exams.map((exam, index) => {
            const attempt = attempts.get(exam.exam_id);
            const isDone = !!attempt;
            const correctAnswers = isDone ? attempt.best_score : 0;

            return (
              <TouchableOpacity
                key={exam.exam_id}
                onPress={() =>
                  props.navigation.navigate("ListeningPart11", {
                    examId: exam.exam_id,
                  })
                }
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#FFFFFF",
                  borderRadius: 16,
                  paddingVertical: 12,
                  paddingHorizontal: 17,
                  marginBottom: 10,
                  marginHorizontal: 20,
                }}
                activeOpacity={0.7}
              >
                {/* Icon: xanh + tick nếu đã làm, nâu + số nếu chưa */}
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: isDone ? "#5B9E91" : "#A47551",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 11,
                  }}
                >
                  {isDone ? (
                    <Check size={22} color="#FFFFFF" strokeWidth={3} />
                  ) : (
                    <Text
                      style={{
                        color: "#FFFFFF",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {index + 1}
                    </Text>
                  )}
                </View>

                {/* Text */}
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 14,
                      fontWeight: "bold",
                      marginBottom: 3,
                    }}
                  >
                    {exam.title}
                  </Text>
                  <Text
                    style={{ color: "#6E6880", fontSize: 12, fontWeight: "bold" }}
                  >
                    {`${exam.question_count} questions`}
                  </Text>
                </View>

                {/* Stars – chỉ hiện khi đã làm */}
                {isDone && (
                  <View style={{ marginLeft: 8 }}>
                    <StarRating
                      correct={correctAnswers}
                      total={exam.question_count}
                    />
                  </View>
                )}
              </TouchableOpacity>
            );
          })
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};
