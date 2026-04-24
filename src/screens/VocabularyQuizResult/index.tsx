import React, { useMemo } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppRootStackParamList } from "../../../App";

type VocabularyQuizResultProps = NativeStackScreenProps<
  AppRootStackParamList,
  "VocabularyQuizResult"
>;

export default (props: VocabularyQuizResultProps) => {
  const items = props.route.params?.items ?? [];
  const total = Math.max(items.length, 10);

  const resultRows = useMemo(() => {
    return Array.from({ length: total }, (_, i) => {
      const item = items[i] ?? null;
      return {
        index: i,
        word: item?.word ?? `Word ${i + 1}`,
        isCorrect: Boolean(item?.isCorrect),
        hasData: Boolean(item),
      };
    });
  }, [items, total]);

  const correctCount = resultRows.filter(
    (r) => r.hasData && r.isCorrect,
  ).length;
  const answeredCount = resultRows.filter((r) => r.hasData).length;
  const incorrectCount = Math.max(answeredCount - correctCount, 0);
  const accuracy =
    answeredCount === 0 ? 0 : Math.round((correctCount / answeredCount) * 100);

  const summaryText =
    accuracy >= 80
      ? "Excellent!"
      : accuracy >= 60
        ? "Good Job!"
        : "Keep Practicing!";

  const correctIconUri =
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/h8f875eu_expires_30_days.png";
  const incorrectIconUri =
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/tkiy6g94_expires_30_days.png";

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
            onPress={() => props.navigation.pop(2)}
            activeOpacity={0.7}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/vhieiw1t_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 37,
                height: 37,
                marginRight: 12,
              }}
            />
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
            colors={["#5B9E91", "#A47551"]}
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
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 24,
                  }}
                >
                  {`${correctCount}/${answeredCount || total}`}
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
            {resultRows.map((row, idx) => {
              const isLast = idx === resultRows.length - 1;

              return (
                <View
                  key={`w-${row.index}`}
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
                    opacity: row.hasData ? 1 : 0.5,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      flex: 1,
                      paddingRight: 12,
                    }}
                  >
                    <Image
                      source={{
                        uri: row.isCorrect ? correctIconUri : incorrectIconUri,
                      }}
                      resizeMode={"stretch"}
                      style={{
                        width: 33,
                        height: 33,
                        marginRight: 8,
                      }}
                    />
                    <Text
                      numberOfLines={1}
                      style={{
                        color: "#2C2636",
                        fontSize: 14,
                        flex: 1,
                      }}
                    >
                      {row.word}
                    </Text>
                  </View>

                  <Text
                    style={{
                      color: row.isCorrect ? "#5B9E91" : "#E07B54",
                      fontSize: 12,
                    }}
                  >
                    {row.isCorrect ? "Correct" : "Incorrect"}
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
              onPress={() => props.navigation.pop(1)}
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
                backgroundColor: "#A47551",
                borderColor: "#F0EBE4",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 16,
              }}
              onPress={() => props.navigation.pop(2)}
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
