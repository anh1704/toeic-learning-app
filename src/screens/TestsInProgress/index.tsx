import React, { useEffect, useState, useMemo } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getToeicTestData, ToeicTestDetail, ToeicQuestion, ToeicQuestionGroup } from "../../lib/toeicService";
import { ArrowLeft, Play, Volume2 } from "lucide-react-native";

interface FlatQuestion {
  question: ToeicQuestion;
  group: Omit<ToeicQuestionGroup, "questions">;
  partNumber: number;
  globalIndex: number;
}

export default () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { testId } = route.params || {};

  const [loading, setLoading] = useState(true);
  const [testData, setTestData] = useState<ToeicTestDetail | null>(null);
  const [questionsList, setQuestionsList] = useState<FlatQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({}); // question_id -> option
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (!testId) {
      Alert.alert("Error", "No test selected.");
      navigation.goBack();
      return;
    }

    (async () => {
      const data = await getToeicTestData(testId);
      if (data) {
        setTestData(data);
        setTimeLeft(data.duration);
        
        // Flatten the test structure
        const flatList: FlatQuestion[] = [];
        let globalIndex = 0;
        
        // Sort parts 1 to 7
        const parts = Object.keys(data.parts).sort((a, b) => Number(a) - Number(b));
        for (const partNum of parts) {
          const groups = data.parts[partNum] || [];
          // Sort groups by order_index
          groups.sort((a, b) => a.order_index - b.order_index);
          for (const group of groups) {
            // Sort questions
            const questions = group.questions || [];
            questions.sort((a, b) => a.question_number - b.question_number);
            for (const q of questions) {
              const { questions: _, ...groupWithoutQuestions } = group;
              flatList.push({
                question: q,
                group: groupWithoutQuestions,
                partNumber: Number(partNum),
                globalIndex: globalIndex++,
              });
            }
          }
        }
        
        setQuestionsList(flatList);
      }
      setLoading(false);
    })();
  }, [testId]);

  useEffect(() => {
    if (loading || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [loading, timeLeft]);

  const handleBack = () => {
    Alert.alert("Quit Test?", "Your progress will be lost.", [
      { text: "Cancel", style: "cancel" },
      { text: "Quit", style: "destructive", onPress: () => navigation.goBack() }
    ]);
  };

  const handleSubmit = () => {
    // Navigate to results
    navigation.navigate("TestsResultSumary", { 
      testId,
      answers,
      testData
    });
  };

  const handleSelectOption = (optionRaw: string) => {
    const currentQ = questionsList[currentIndex].question;
    
    // Extract letter A, B, C, D from something like "A. ..." or "(A)"
    const match = optionRaw.match(/[A-D]/);
    const letter = match ? match[0] : optionRaw;

    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: letter
    }));
  };

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#A47551" />
      </SafeAreaView>
    );
  }

  if (questionsList.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center" }}>
        <Text>No questions found in this test.</Text>
      </SafeAreaView>
    );
  }

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentItem = questionsList[currentIndex];
  const { question, group, partNumber } = currentItem;
  
  // Clean options array
  const rawOptions = question.options || [];
  let parsedOptions: string[] = [];
  try {
    if (typeof rawOptions === 'string') {
      parsedOptions = JSON.parse(rawOptions);
    } else {
      parsedOptions = rawOptions as string[];
    }
  } catch (e) {
    console.error("Failed to parse options", rawOptions);
  }

  const selectedAnswerLetter = answers[question.id];

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
          paddingTop: 19,
          paddingHorizontal: 20,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 21,
          }}
        >
          <TouchableOpacity onPress={handleBack} activeOpacity={0.7} style={{
              width: 38,
              height: 38,
              borderRadius: 16,
              backgroundColor: "#FFFFFF",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <ArrowLeft color="#2C2636" size={20} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#E07B541A",
              borderRadius: 28138600,
              paddingVertical: 6,
              paddingHorizontal: 12,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#E07B54",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {formatTime(timeLeft)}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={{ color: "#A47551", fontWeight: "bold" }}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* Question Scroller */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            marginBottom: 22,
          }}
        >
          {questionsList.map((q, idx) => {
            const isSelected = idx === currentIndex;
            const isAnswered = !!answers[q.question.id];

            let bgColor = "#FFFFFF";
            let textColor = "#2C2636";
            if (isSelected) {
              bgColor = "#A47551";
              textColor = "#FFFFFF";
            } else if (isAnswered) {
              bgColor = "#E6DDD2";
            }

            return (
              <TouchableOpacity
                key={q.question.id}
                style={{
                  backgroundColor: bgColor,
                  borderColor: isSelected ? "#A47551" : "#2C26361A",
                  borderRadius: 28138600,
                  borderWidth: 1,
                  paddingVertical: 7,
                  paddingHorizontal: 12,
                  marginRight: 5,
                }}
                onPress={() => setCurrentIndex(idx)}
              >
                <Text
                  style={{
                    color: textColor,
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {q.question.question_number}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Part Label */}
        <Text style={{ color: "#A47551", fontWeight: "bold", marginBottom: 10, fontSize: 16 }}>
          Part {partNumber}
        </Text>

        {/* Media / Passage Area */}
        {group.image_url && (
          <Image 
            source={{ uri: group.image_url }} 
            style={{ width: '100%', height: 200, borderRadius: 16, marginBottom: 15 }} 
            resizeMode="contain" 
          />
        )}
        
        {group.passage_text && (
          <View style={{ backgroundColor: "#FFFFFF", padding: 15, borderRadius: 16, marginBottom: 15, borderWidth: 1, borderColor: "#2C26361A" }}>
            <Text style={{ fontSize: 14, color: "#2C2636", lineHeight: 22 }}>
              {group.passage_text}
            </Text>
          </View>
        )}

        {group.audio_url && (
          <View style={{ backgroundColor: "#E6DDD2", padding: 16, borderRadius: 16, marginBottom: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#A47551", justifyContent: "center", alignItems: "center" }}>
                <Play color="#FFFFFF" size={20} style={{ marginLeft: 3 }} />
              </TouchableOpacity>
              <View style={{ flex: 1, marginHorizontal: 15 }}>
                <View style={{ height: 4, backgroundColor: "#FFFFFF", borderRadius: 2, overflow: "hidden" }}>
                  <View style={{ width: "30%", height: "100%", backgroundColor: "#A47551" }} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                  <Text style={{ fontSize: 10, color: "#2C2636", fontWeight: "bold" }}>00:15</Text>
                  <Text style={{ fontSize: 10, color: "#6E6880" }}>01:30</Text>
                </View>
              </View>
              <Volume2 color="#2C2636" size={20} />
            </View>
          </View>
        )}

        {/* Question Area */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 17,
            paddingHorizontal: 16,
            marginBottom: 21,
          }}
        >
          <Text
            style={{
              color: "#6E6880",
              fontSize: 12,
              marginBottom: question.question_text ? 7 : 0,
            }}
          >
            {`Question ${question.question_number}`}
          </Text>
          {question.question_text ? (
            <View
              style={{
                paddingRight: 11,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                {question.question_text}
              </Text>
            </View>
          ) : null}
        </View>

        {/* Options */}
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 22,
          }}
        >
          {parsedOptions.map((opt, i) => {
            const letterMatch = opt.match(/[A-D]/);
            const letter = letterMatch ? letterMatch[0] : String.fromCharCode(65 + i); // Fallback to A, B, C, D
            const isSelected = selectedAnswerLetter === letter;

            return (
              <TouchableOpacity
                key={i}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: isSelected ? "#A47551" : "#FFFFFF",
                  borderColor: isSelected ? "#A47551" : "#2C26361A",
                  borderRadius: 16,
                  borderWidth: 1,
                  paddingVertical: 13,
                  paddingLeft: 12,
                  marginBottom: 8,
                }}
                onPress={() => handleSelectOption(opt)}
                activeOpacity={0.7}
              >
                <View
                  style={{
                    backgroundColor: isSelected ? "#FFFFFF" : "transparent",
                    borderColor: isSelected ? "#FFFFFF" : "#2C26361A",
                    borderRadius: 28138600,
                    borderWidth: 1,
                    paddingVertical: 3,
                    paddingHorizontal: 8,
                    marginRight: 9,
                  }}
                >
                  <Text
                    style={{
                      color: isSelected ? "#A47551" : "#2C2636",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {letter}
                  </Text>
                </View>
                <View style={{ flex: 1, paddingRight: 10 }}>
                  <Text
                    style={{
                      color: isSelected ? "#FFFFFF" : "#2C2636",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {opt.replace(/^[A-D]\.\s*/, "").replace(/^\([A-D]\)\s*/, "")}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Navigation Buttons */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 48,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 12,
              marginRight: 12,
              opacity: currentIndex === 0 ? 0.5 : 1
            }}
            onPress={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {"Prev"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: currentIndex === questionsList.length - 1 ? "#34C759" : "#A47551",
              borderRadius: 16,
              paddingVertical: 12,
            }}
            onPress={() => {
              if (currentIndex === questionsList.length - 1) {
                handleSubmit();
              } else {
                setCurrentIndex(Math.min(questionsList.length - 1, currentIndex + 1));
              }
            }}
            activeOpacity={0.7}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {currentIndex === questionsList.length - 1 ? "Submit" : "Next"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
