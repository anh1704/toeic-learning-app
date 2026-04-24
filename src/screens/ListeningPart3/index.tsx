import { ArrowLeft, Check, Users, ChevronRight } from "lucide-react-native";
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

type ListeningPart3Props = NativeStackScreenProps<
  RootStackParamList,
  "ListeningPart3"
>;

export default (props: ListeningPart3Props) => {
  const [exams, setExams] = useState<ExamForPart[]>([]);
  const [attempts, setAttempts] = useState<Map<string, BestAttempt>>(new Map());
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      const fetchAll = async () => {
        setLoading(true);
        const examList = await getExamsForPart(3);
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
            Part 3: Conversations
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
          Listen to conversations between two or three speakers and answer questions.
        </Text>

        {/* List */}
        {loading ? (
          <ActivityIndicator size="large" color="#E07B54" style={{ marginTop: 40 }} />
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
            
            // Part 3 usually has 3 questions per conversation
            const conversationCount = Math.floor(exam.question_count / 3);

            return (
              <TouchableOpacity
                key={exam.exam_id}
                onPress={() =>
                  props.navigation.navigate("ListeningPart31", {
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
                    backgroundColor: isDone ? "#5B9E91" : "#E07B54",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 11,
                  }}
                >
                  {isDone ? (
                    <Check size={22} color="#FFFFFF" strokeWidth={3} />
                  ) : (
                    <Users size={22} color="#FFFFFF" />
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
                    {exam.title || `Conversation Set ${index + 1}`}
                  </Text>
                  <Text
                    style={{ color: "#6E6880", fontSize: 12, fontWeight: "bold" }}
                  >
                    {`${conversationCount} conversations, ${exam.question_count} questions`}
                  </Text>
                </View>

                {/* Percentage */}
                {isDone ? (
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
                ) : (
                  <View style={{ marginLeft: 8 }}>
                    <ChevronRight size={20} color="#6E6880" />
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
