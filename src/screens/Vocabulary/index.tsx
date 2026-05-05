import React, { useCallback, useMemo, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ArrowLeft, BookOpen, LayoutList, CircleHelp, Gamepad2, Sunrise, Mic, RefreshCw, Brain } from "lucide-react-native";

import {
  getVocabularyBankStats,
  type VocabularyBankStats,
} from "../../lib/vocabularyBankService";

const TOPIC_META: Record<string, { barColor: string }> = {
  Finance:    { barColor: "#8B6BAE" },
  Business:   { barColor: "#A47551" },
  Marketing:  { barColor: "#E07B54" },
  HR:         { barColor: "#5B9E91" },
  Technology: { barColor: "#D9A441" },
  Travel:     { barColor: "#A47551" },
};

const TOPIC_COLOR_PALETTE = ["#8B6BAE", "#E07B54", "#5B9E91"] as const;

const stableColorForTopic = (topicName: string): string => {
  let hash = 0;
  for (let i = 0; i < topicName.length; i += 1) {
    hash = (hash + topicName.charCodeAt(i)) % 2147483647;
  }
  return TOPIC_COLOR_PALETTE[Math.abs(hash) % TOPIC_COLOR_PALETTE.length];
};

export default () => {
  const navigation = useNavigation<any>();

  const [stats, setStats] = useState<VocabularyBankStats>({
    total: 0,
    mastered: 0,
    reviewing: 0,
    byTopic: {},
  });

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      (async () => {
        const s = await getVocabularyBankStats();
        if (isActive) setStats(s);
      })();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const getTopicCounts = useCallback(
    (topicName: string) => {
      const t = stats.byTopic[topicName];
      return {
        total: t?.total ?? 0,
        mastered: t?.mastered ?? 0,
      };
    },
    [stats.byTopic],
  );

  const getProgressPct = useCallback((mastered: number, total: number) => {
    if (total <= 0) return 0;
    const pct = mastered / total;
    if (Number.isNaN(pct)) return 0;
    return Math.max(0, Math.min(1, pct));
  }, []);

  const learnedText = useMemo(() => String(stats.total), [stats.total]);
  const masteredText = useMemo(() => String(stats.mastered), [stats.mastered]);
  const reviewingText = useMemo(
    () => String(stats.reviewing),
    [stats.reviewing],
  );

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
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
            marginHorizontal: 20,
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
              marginRight: 12,
            }}
          >
            <ArrowLeft size={20} color="#2C2636" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#2C2636",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {"Vocabulary"}
          </Text>
          <View
            style={{
              flex: 1,
            }}
          ></View>
          <TouchableOpacity
            onPress={() => navigation.navigate("VocabularyMyWordList")}
            style={{
              paddingLeft: 8,
              paddingVertical: 4,
            }}
          >
            <Text
              style={{
                color: "#A47551",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"My Word List"}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 48,
            marginHorizontal: 19,
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#5B9E91", "#5B9E91CC"]}
            style={{
              borderRadius: 16,
              paddingVertical: 20,
              marginBottom: 21,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
                marginHorizontal: 24,
              }}
            >
              <Brain size={19} color="#FFFFFF" style={{ marginRight: 8 }} />
              <View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                  {"Your Word Bank"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 23,
              }}
            >
              <View
                style={{
                  flex: 1,
                  marginRight: 20,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 24,
                    }}
                  >
                    {learnedText}
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 10,
                    }}
                  >
                    {"Learned"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 20,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 24,
                    }}
                  >
                    {masteredText}
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 10,
                    }}
                  >
                    {"Mastered"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 24,
                    }}
                  >
                    {reviewingText}
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 10,
                    }}
                  >
                    {"Reviewing"}
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
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
                marginRight: 25,
              }}
              onPress={() => navigation.navigate("VocabularyFlashcards")}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <LayoutList size={20} color="#5B9E91" />
              </View>
              <View
                style={{
                  marginHorizontal: 24,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"Flashcards"}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
                marginRight: 25,
              }}
              onPress={() => navigation.navigate("VocabularyQuiz")}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <CircleHelp size={20} color="#5B9E91" />
              </View>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"Quiz"}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
              }}
              onPress={() => navigation.navigate("VocabularyGame")}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <Gamepad2 size={20} color="#5B9E91" />
              </View>
              <View
                style={{
                  marginHorizontal: 23,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"Word Game"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 22,
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
                marginRight: 25,
              }}
              onPress={() => navigation.navigate("VocabularyWordOfDay")}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 7,
                }}
              >
                <Sunrise size={20} color="#5B9E91" />
              </View>
              <View
                style={{
                  marginHorizontal: 24,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"Word Of Day"}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
                marginRight: 25,
              }}
              onPress={() => navigation.navigate("VocabularyPronunciation")}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <Mic size={20} color="#5B9E91" />
              </View>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"Pronunciation"}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 12,
              }}
              onPress={() => navigation.navigate("VocabularySpacedRepetition")}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 7,
                }}
              >
                <RefreshCw size={20} color="#5B9E91" />
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginHorizontal: 23,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"Repetition"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {"Topics"}
              </Text>
            </View>
            <View
              style={{
                paddingLeft: 24,
                paddingRight: 2,
              }}
            >
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Stats"}
              </Text>
            </View>
          </View>

          <View>
            {(() => {
              const preferred = Object.keys(TOPIC_META);
              const all = Object.keys(stats.byTopic);
              const ordered: string[] = [];

              for (const name of preferred) {
                if (all.includes(name)) ordered.push(name);
              }

              const rest = all.filter((name) => !ordered.includes(name)).sort();
              ordered.push(...rest);

              return ordered.map((topicName) => {
                const barColor =
                  TOPIC_META[topicName]?.barColor ??
                  stableColorForTopic(topicName);
                const { total, mastered } = getTopicCounts(topicName);
                const pct = getProgressPct(mastered, total);

                return (
                  <TouchableOpacity
                    key={topicName}
                    onPress={() => {
                      navigation.navigate("VocabularyTopic", {
                        topic: topicName,
                      });
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#FFFFFF",
                        borderColor: "#2C26361A",
                        borderRadius: 16,
                        borderWidth: 1,
                        paddingVertical: 17,
                        paddingHorizontal: 16,
                        marginBottom: 13,
                      }}
                    >
                      <View
                        style={{
                          width: 39,
                          height: 39,
                          borderRadius: 16,
                              backgroundColor: barColor,
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: 12,
                        }}
                      >
                        <BookOpen size={20} color={"#FFFFFF"} strokeWidth={2} />
                      </View>
                      <View
                        style={{
                          flex: 1,
                          paddingRight: 27,
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
                              color: "#2C2636",
                              fontSize: 14,
                              fontWeight: "bold",
                            }}
                          >
                            {topicName}
                          </Text>
                        </View>
                        <View
                          style={{
                            alignSelf: "flex-start",
                            marginBottom: 4,
                          }}
                        >
                          <Text
                            style={{
                              color: "#6E6880",
                              fontSize: 12,
                              fontWeight: "bold",
                            }}
                          >
                            {`${mastered}/${total} words`}
                          </Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: "#F0EBE4",
                            borderRadius: 16,
                            height: 5,
                            overflow: "hidden",
                          }}
                        >
                          <View
                            style={{
                              width: `${pct * 100}%`,
                              height: 5,
                                  backgroundColor: barColor,
                              borderRadius: 16,
                            }}
                          />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              });
            })()}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
