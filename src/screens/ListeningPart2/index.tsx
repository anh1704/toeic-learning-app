import { ArrowLeft, Check } from "lucide-react-native";
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

type ListeningPart2Props = NativeStackScreenProps<
  RootStackParamList,
  "ListeningPart2"
>;

export default (props: ListeningPart2Props) => {
  const [exams, setExams] = useState<ExamForPart[]>([]);
  const [attempts, setAttempts] = useState<Map<string, BestAttempt>>(new Map());
  const [loading, setLoading] = useState(true);

  // useFocusEffect: refetch mỗi lần quay lại màn hình
  useFocusEffect(
    useCallback(() => {
      let active = true;
      const fetchAll = async () => {
        setLoading(true);
        // Lấy data cho part 2
        const examList = await getExamsForPart(2);
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
            {"Part 2: Q&A"}
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
          {"Listen to questions and choose the best response from three options."}
        </Text>

        {/* List */}
        {loading ? (
          <ActivityIndicator size="large" color="#8B6BAE" style={{ marginTop: 40 }} />
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
            const percent = isDone && exam.question_count > 0
              ? Math.round((attempt.best_score / exam.question_count) * 100)
              : 0;

            return (
              <TouchableOpacity
                key={exam.exam_id}
                onPress={() =>
                  props.navigation.navigate("ListeningPart21", {
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
                {/* Icon */}
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 16,
                    backgroundColor: isDone ? "#5B9E91" : "#8B6BAE",
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

                {/* Percentage – chỉ hiện khi đã làm */}
                {isDone && (
                  <View style={{ marginLeft: 8 }}>
                    <Text
                      style={{
                        color: "#5B9E91",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {`${percent}%`}
                    </Text>
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
