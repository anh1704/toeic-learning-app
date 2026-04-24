import React, { useEffect, useState, useMemo } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, ScrollView, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import { supabase } from "../../lib/supabase";
import { calculateToeicScore } from "../../lib/toeicService";
import { useAuth } from "../../lib/authService";

export default () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { session } = useAuth();
  const { testId, answers, testData } = route.params || {};

  const [saving, setSaving] = useState(true);
  const [results, setResults] = useState({
    listeningCorrect: 0,
    readingCorrect: 0,
    listeningScore: 0,
    readingScore: 0,
    totalScore: 0,
    accuracy: 0,
    timeSpent: 0, // Mock time
  });

  useEffect(() => {
    if (!testData || !answers) {
      setSaving(false);
      return;
    }

    let lCorrect = 0;
    let rCorrect = 0;
    let totalQ = 0;

    // Calculate score
    const parts = Object.keys(testData.parts);
    for (const p of parts) {
      const partNum = Number(p);
      const isListening = partNum >= 1 && partNum <= 4;
      
      const groups = testData.parts[p];
      for (const g of groups) {
        for (const q of g.questions) {
          totalQ++;
          if (answers[q.id] === q.correct_answer) {
            if (isListening) lCorrect++;
            else rCorrect++;
          }
        }
      }
    }

    const scores = calculateToeicScore(lCorrect, rCorrect);
    const accuracy = totalQ > 0 ? Math.round(((lCorrect + rCorrect) / totalQ) * 100) : 0;
    
    setResults({
      listeningCorrect: lCorrect,
      readingCorrect: rCorrect,
      listeningScore: scores.listeningScore,
      readingScore: scores.readingScore,
      totalScore: scores.totalScore,
      accuracy,
      timeSpent: 28, // Hardcoded for demo
    });

    // Save to database
    if (session?.user?.id) {
      supabase.from('test_results').insert({
        user_id: session.user.id,
        test_type: testData.test_type,
        score: scores.totalScore,
        total_questions: totalQ,
        correct_answers: lCorrect + rCorrect,
        time_spent: 28 * 60, // seconds
        answers: answers
      }).then(({ error }) => {
        if (error) console.error("Error saving result:", error);
        setSaving(false);
      });
    } else {
      setSaving(false);
    }
  }, [testData, answers, session]);

  const handleBack = () => {
    navigation.navigate("Tabs", { screen: "Tests" });
  };

  if (saving) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#A47551" />
        <Text style={{ marginTop: 10 }}>Calculating Score...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FAF6F1",
          paddingTop: 19,
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
          <TouchableOpacity onPress={handleBack} activeOpacity={0.7} style={{
              width: 38,
              height: 38,
              borderRadius: 16,
              backgroundColor: "#FFFFFF",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 12
            }}>
            <ArrowLeft color="#2C2636" size={20} />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: "#2C2636",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {"Test Results"}
            </Text>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#A47551", "#5B9E91"]}
          style={{
            alignItems: "center",
            borderRadius: 16,
            paddingVertical: 24,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF33",
              borderRadius: 28138600,
              paddingVertical: 27,
              paddingHorizontal: 14,
              marginBottom: 13,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 36,
                fontWeight: "bold"
              }}
            >
              {results.totalScore}
            </Text>
          </View>
          <View
            style={{
              marginBottom: 13,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: "bold"
              }}
            >
              {results.totalScore > 800 ? "Excellent!" : results.totalScore > 600 ? "Great Progress!" : "Keep Trying!"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                marginRight: 49,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 24,
                    fontWeight: "bold"
                  }}
                >
                  {results.listeningScore}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 12,
                  }}
                >
                  {"Listening"}
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 24,
                    fontWeight: "bold"
                  }}
                >
                  {results.readingScore}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 12,
                  }}
                >
                  {"Reading"}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              padding: 12,
              marginRight: 12,
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#5B9E91",
                  fontSize: 20,
                  fontWeight: "bold"
                }}
              >
                {`${results.accuracy}%`}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 10,
                }}
              >
                {"Accuracy"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 12,
              paddingHorizontal: 13,
              marginRight: 13,
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 20,
                  fontWeight: "bold"
                }}
              >
                {`${results.timeSpent}m`}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 10,
                }}
              >
                {"Time"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 12,
              paddingHorizontal: 13,
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#D4A853",
                  fontSize: 20,
                  fontWeight: "bold"
                }}
              >
                {`+${Math.round(results.totalScore / 10)}`}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 10,
                }}
              >
                {"XP Earned"}
              </Text>
            </View>
          </View>
        </View>
        
        {/* Placeholder buttons for Review Answers, etc. */}
        <View style={{ marginBottom: 22, marginLeft: 20 }}>
            {/* Detailed Analysis */}
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#FFFFFF", borderColor: "#2C26361A", borderRadius: 16, borderWidth: 1, padding: 16, marginBottom: 12 }}>
                <Text style={{ flex: 1, color: "#2C2636", fontSize: 14, fontWeight: "bold", textAlign: "center" }}>Detailed Analysis</Text>
            </TouchableOpacity>
            {/* Review Answers */}
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#FFFFFF", borderColor: "#2C26361A", borderRadius: 16, borderWidth: 1, padding: 16, marginBottom: 12 }}>
                <Text style={{ flex: 1, color: "#2C2636", fontSize: 14, fontWeight: "bold", textAlign: "center" }}>Review Answers</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#A47551",
            borderRadius: 16,
            paddingVertical: 11,
            marginBottom: 48,
            marginLeft: 21,
          }}
          onPress={handleBack}
          activeOpacity={0.7}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {"Back to Tests"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
