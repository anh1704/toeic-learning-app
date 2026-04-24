import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { Check, X, ArrowLeft } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";

type ListeningPart3ResultProps = NativeStackScreenProps<
  RootStackParamList,
  "ListeningPart3Result"
>;

export default (props: ListeningPart3ResultProps) => {
  const { results = [] } = props.route.params || {};

  const total = results.length;
  const correctCount = results.filter((r) => r).length;
  const incorrectCount = total - correctCount;
  const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  const summaryText =
    accuracy >= 80
      ? "Excellent!"
      : accuracy >= 60
        ? "Good Job!"
        : "Keep Practicing!";

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
      edges={["top", "left", "right"]}
    >
      <ScrollView
        scrollEnabled={true}
        style={{
          flex: 1,
          backgroundColor: "#FAF6F1",
          paddingTop: 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
            marginHorizontal: 20,
          }}
        ></View>

        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 11,
            marginLeft: 19,
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ListeningHome")}
            style={{ width: 38, height: 38, borderRadius: 16, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", marginRight: 16 }}
          >
            <ArrowLeft size={20} color="#2C2636" />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {"Results"}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            paddingHorizontal: 20,
            marginBottom: 13,
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#5B9E91", "#E07B54"]}
            style={{
              width: "100%",
              alignItems: "center",
              borderRadius: 16,
              paddingVertical: 25,
            }}
          >
            <View>
              <View
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: "#FFFFFF33",
                  borderRadius: 38,
                  paddingVertical: 20,
                  paddingHorizontal: 21,
                  marginLeft: 12,
                  height: 76,
                  width: 76
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 24,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {`${correctCount}/${total}`}
                </Text>
              </View>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 20,
                }}
              >
                {summaryText}
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  marginLeft: 2,
                }}
              >
                {`${accuracy}% accuracy`}
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View
          style={{
            paddingVertical: 1,
            marginBottom: 21,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 15,
              marginHorizontal: 1,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C263633",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 12,
                marginRight: 39,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  paddingHorizontal: 1,
                }}
              >
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 20,
                    marginBottom: 3,
                  }}
                >
                  {String(correctCount)}
                </Text>
                <Text
                  style={{
                    color: "#928D9F",
                    fontSize: 14,
                  }}
                >
                  {"Correct"}
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C263633",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 12,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#E07B54",
                    fontSize: 20,
                    marginBottom: 3,
                    marginLeft: 24,
                  }}
                >
                  {String(incorrectCount)}
                </Text>
                <Text
                  style={{
                    color: "#928D9F",
                    fontSize: 14,
                  }}
                >
                  {"Incorrect"}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              marginBottom: 11,
              marginHorizontal: 1,
            }}
          >
            {results.map((isCorrect, idx) => {
              const isLast = idx === results.length - 1;

              return (
                <View
                  key={`q-${idx}`}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#FFFFFF",
                    borderColor: "#2C263633",
                    borderRadius: 16,
                    borderWidth: 1,
                    paddingVertical: 9,
                    paddingLeft: 20,
                    paddingRight: 31,
                    marginBottom: isLast ? 0 : 11,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: isCorrect ? "#5B9E911A" : "#E07B541A", alignItems: "center", justifyContent: "center", marginRight: 12 }}>
                      {isCorrect ? <Check size={16} color="#5B9E91" /> : <X size={16} color="#E07B54" />}
                    </View>
                    <Text
                      style={{
                        color: "#2C2636",
                        fontSize: 14,
                      }}
                    >
                      {`Question ${idx + 1}`}
                    </Text>
                  </View>

                  <Text
                    style={{
                      color: isCorrect ? "#5B9E91" : "#E07B54",
                      fontSize: 12,
                    }}
                  >
                    {isCorrect ? "Correct" : "Incorrect"}
                  </Text>
                </View>
              );
            })}
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
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
                marginRight: 44,
              }}
              onPress={() => props.navigation.navigate("ListeningPart3")}
              activeOpacity={0.7}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Try Again"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#E07B54",
                borderColor: "#F0EBE4",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 16,
              }}
              onPress={() => props.navigation.navigate("ListeningHome")}
              activeOpacity={0.7}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Back"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
