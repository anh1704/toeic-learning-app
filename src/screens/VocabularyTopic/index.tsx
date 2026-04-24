import React, { useCallback, useMemo, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { ArrowLeft, ChevronRight } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  getVocabularyBankWordsByTopic,
  type VocabularyBankWordWithFavorite,
} from "../../lib/vocabularyBankService";

type NavigationProp = NativeStackNavigationProp<any>;

type FilterKey = "all" | "mastered" | "learning";

export default () => {
  const navigator = useNavigation<NavigationProp>();
  const route = useRoute<any>();

  const topic = (route.params?.topic ?? "Business") as string;

  const [filter, setFilter] = useState<FilterKey>("all");
  const [words, setWords] = useState<VocabularyBankWordWithFavorite[]>([]);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      (async () => {
        const rows = await getVocabularyBankWordsByTopic(topic);
        if (isActive) setWords(rows);
      })();

      return () => {
        isActive = false;
      };
    }, [topic]),
  );

  const filteredWords = useMemo(() => {
    if (filter === "mastered") return words.filter((w) => w.is_favorite);
    if (filter === "learning") return words.filter((w) => !w.is_favorite);
    return words;
  }, [filter, words]);

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
          paddingTop: 18,
          paddingRight: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 17,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigator.goBack();
            }}
            style={{
              width: 37,
              height: 37,
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
            {topic}
          </Text>
          <View
            style={{
              flex: 1,
            }}
          ></View>
          <Text
            style={{
              color: "#A47551",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            {"Review"}
          </Text>
        </View>

        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 22,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: filter === "all" ? "#A47551" : "#FFFFFF",
              borderColor: filter === "all" ? "#A47551" : "#2C26361A",
              borderRadius: 28138600,
              borderWidth: filter === "all" ? 0 : 1,
              paddingVertical: 6,
              paddingHorizontal: 11,
              marginRight: 8,
            }}
            onPress={() => setFilter("all")}
          >
            <Text
              style={{
                color: filter === "all" ? "#FFFFFF" : "#2C2636",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"All"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: filter === "mastered" ? "#A47551" : "#FFFFFF",
              borderColor: filter === "mastered" ? "#A47551" : "#2C26361A",
              borderRadius: 28138600,
              borderWidth: filter === "mastered" ? 0 : 1,
              paddingVertical: 6,
              paddingHorizontal: 13,
              marginRight: 8,
            }}
            onPress={() => setFilter("mastered")}
          >
            <Text
              style={{
                color: filter === "mastered" ? "#FFFFFF" : "#2C2636",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Mastered"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: filter === "learning" ? "#A47551" : "#FFFFFF",
              borderColor: filter === "learning" ? "#A47551" : "#2C26361A",
              borderRadius: 28138600,
              borderWidth: filter === "learning" ? 0 : 1,
              paddingVertical: 6,
              paddingHorizontal: 13,
            }}
            onPress={() => setFilter("learning")}
          >
            <Text
              style={{
                color: filter === "learning" ? "#FFFFFF" : "#2C2636",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Learning"}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          {filteredWords.map((item) => {
            const phoneticText = item.phonetic ? String(item.phonetic) : "";
            const meaningText = item.meaning ? String(item.meaning) : "";

            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  navigator.navigate("VocabularyDetail", { item });
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
                    padding: 12,
                    marginBottom: 8,
                    marginRight: 0,
                  }}
                >
                  <View
                    style={{
                      width: 7,
                      height: 7,
                      backgroundColor: item.is_favorite ? "#5B9E91" : "#A47551",
                      borderRadius: 28138600,
                      marginRight: 13,
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      marginRight: 13,
                    }}
                  >
                    <View
                      style={{
                        alignSelf: "flex-start",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 2,
                      }}
                    >
                      <View
                        style={{
                          marginRight: 9,
                        }}
                      >
                        <Text
                          style={{
                            color: "#2C2636",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          {item.word}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: "#6E6880",
                            fontSize: 10,
                            fontWeight: "bold",
                          }}
                        >
                          {phoneticText}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        alignSelf: "flex-start",
                      }}
                    >
                      <Text
                        style={{
                          color: "#6E6880",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        {meaningText}
                      </Text>
                    </View>
                  </View>
                  <ChevronRight size={15} color="#A47551" />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
