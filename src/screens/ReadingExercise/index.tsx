import React, { useState } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

type Question = {
  id: string;
  passage: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
};

const QUESTIONS: Question[] = [
  {
    id: "q1",
    passage:
      "Dear Mr. Johnson,\n\nThank you for your inquiry about our new product line. We are pleased to inform you that our latest collection will be available starting next month. The new products feature improved durability and a wider range of color options. Please find attached the updated catalog with detailed specifications and pricing information. If you have any questions, please do not hesitate to contact us.",
    question: "What is the purpose of this letter?",
    options: [
      "To complain about a product",
      "To respond to a product inquiry",
      "To place an order",
      "To request a refund",
    ],
    correctIndex: 1,
  },
  {
    id: "q2",
    passage:
      "Dear Mr. Johnson,\n\nThank you for your inquiry about our new product line. We are pleased to inform you that our latest collection will be available starting next month. The new products feature improved durability and a wider range of color options. Please find attached the updated catalog with detailed specifications and pricing information. If you have any questions, please do not hesitate to contact us.",
    question: "When will the new products be available?",
    options: ["This week", "Next month", "Next year", "In two months"],
    correctIndex: 1,
  },
  {
    id: "q3",
    passage:
      "Dear Mr. Johnson,\n\nThank you for your inquiry about our new product line. We are pleased to inform you that our latest collection will be available starting next month. The new products feature improved durability and a wider range of color options. Please find attached the updated catalog with detailed specifications and pricing information. If you have any questions, please do not hesitate to contact us.",
    question:
      "Which of the following is NOT mentioned as a feature of the new products?",
    options: [
      "Improved durability",
      "Wide range of colors",
      "Affordable pricing",
      "Detailed specifications",
    ],
    correctIndex: 2,
  },
  {
    id: "q4",
    passage:
      "The annual conference will be held in New York from June 15-17. All employees are encouraged to attend the main sessions and networking events. Registration is now open on the company intranet. Please note that the dress code for the gala dinner on June 16 is business formal. Transportation and accommodation will be provided for all registered attendees.",
    question: "When should attendees register for the conference?",
    options: [
      "After arriving in New York",
      "At the entrance of the conference",
      "Now on the company intranet",
      "During the gala dinner",
    ],
    correctIndex: 2,
  },
  {
    id: "q5",
    passage:
      "The annual conference will be held in New York from June 15-17. All employees are encouraged to attend the main sessions and networking events. Registration is now open on the company intranet. Please note that the dress code for the gala dinner on June 16 is business formal. Transportation and accommodation will be provided for all registered attendees.",
    question: "What is the dress code for the gala dinner?",
    options: ["Casual", "Business casual", "Business formal", "Black tie"],
    correctIndex: 2,
  },
];

export default () => {
  const navigation = useNavigation<any>();
  const total = QUESTIONS.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(() =>
    Array(total).fill(null),
  );

  const currentQuestion = QUESTIONS[currentIndex];
  const selected = answers[currentIndex];
  const handleSelectOption = (optionIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
      return;
    }

    // Navigate to result
    const correctAnswers = QUESTIONS.map((q) => q.correctIndex);
    navigation.navigate("ReadingResult", {
      answers,
      correctAnswers,
    });
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView
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
          paddingRight: 19,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity onPress={handlePrevious}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/zbkg07d8_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 37,
                height: 37,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/s6rlpkzl_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 15,
                height: 15,
                marginRight: 9,
              }}
            />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 14,
              }}
            >
              {"12:45"}
            </Text>
          </View>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/9htlkde3_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 37,
              height: 37,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
            marginLeft: 19,
          }}
        >
          <Text
            style={{
              color: "#6E6880",
              fontSize: 14,
              marginRight: 13,
            }}
          >
            {`Q ${currentIndex + 1}/${total}`}
          </Text>
          <View
            style={{
              flex: 1,
              backgroundColor: "#F0EBE4",
              borderRadius: 16,
            }}
          >
            <View
              style={{
                width: `${((currentIndex + 1) / total) * 100}%`,
                height: 8,
                backgroundColor: "#8B6BAE",
                borderRadius: 16,
              }}
            ></View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#EAE9EB",
            borderRadius: 16,
            borderWidth: 1,
            paddingTop: 22,
            paddingRight: 17,
            paddingBottom: 17,
            paddingLeft: 17,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              color: "#2C2636",
              fontSize: 14,
              lineHeight: 20,
            }}
          >
            {currentQuestion.passage}
          </Text>
        </View>
        <Text
          style={{
            color: "#2C2636",
            fontSize: 14,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          {currentQuestion.question}
        </Text>
        <View
          style={{
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          {currentQuestion.options.map((option, optIdx) => {
            const isSelected = selected === optIdx;
            const borderColor = isSelected ? "#8B6BAE" : "#EAE9EB";
            const bgColor = isSelected ? "#F5F3F8" : "#FFFFFF";

            return (
              <TouchableOpacity
                key={optIdx}
                onPress={() => handleSelectOption(optIdx)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: bgColor,
                  borderColor: borderColor,
                  borderRadius: 16,
                  borderWidth: 1,
                  marginBottom: optIdx === 3 ? 0 : 8,
                  paddingVertical: 14,
                  paddingHorizontal: 13,
                }}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 30,
                    borderColor: borderColor,
                    borderWidth: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                    backgroundColor: isSelected ? "#8B6BAE" : "#FFFFFF",
                  }}
                >
                  {isSelected && (
                    <Text
                      style={{
                        color: "#FFFFFF",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </Text>
                  )}
                </View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "500",
                    flex: 1,
                  }}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 13,
              marginRight: 12,
            }}
            onPress={handlePrevious}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {"Previous"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#8B6BAE",
              borderRadius: 16,
              paddingVertical: 13,
            }}
            onPress={handleNext}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {currentIndex === total - 1 ? "Finish" : "Next"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
