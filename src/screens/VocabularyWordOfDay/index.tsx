import { ArrowLeft } from "lucide-react-native";
import React, { useCallback, useMemo, useState } from "react";
import {
  ActivityIndicator,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import {
  getWordOfDayScreenData,
  setWordOfDayFavorite,
  type WordOfDayEntry,
} from "../../lib/wordOfDayService";

const formatPhonetic = (phonetic?: string | null) => {
  if (!phonetic) return "";
  const trimmed = String(phonetic).trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("/") && trimmed.endsWith("/")) return trimmed;
  return `/${trimmed}/`;
};

const dayLabelFromDate = (setDate: string) => {
  const today = new Date(`${new Date().toISOString().split("T")[0]}T00:00:00Z`);
  const target = new Date(`${setDate}T00:00:00Z`);
  const diff = Math.max(
    0,
    Math.round((today.getTime() - target.getTime()) / 86400000),
  );
  return diff <= 0 ? "Today" : `Day ${diff}`;
};

export default () => {
  const navigation = useNavigation<any>();

  const [currentWord, setCurrentWord] = useState<WordOfDayEntry | null>(null);
  const [previousWords, setPreviousWords] = useState<WordOfDayEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdatingFavorite, setIsUpdatingFavorite] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      (async () => {
        setIsLoading(true);

        try {
          const result = await getWordOfDayScreenData();

          if (!isActive) return;

          setCurrentWord(result.current);
          setPreviousWords(result.previous);
        } catch (error) {
          console.error("Error loading word of the day:", error);
        } finally {
          if (isActive) {
            setIsLoading(false);
          }
        }
      })();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const phoneticText = useMemo(
    () => formatPhonetic(currentWord?.phonetic),
    [currentWord?.phonetic],
  );

  const partOfSpeechText = useMemo(() => {
    return String(currentWord?.part_of_speech ?? "word");
  }, [currentWord?.part_of_speech]);

  const meaningText = useMemo(() => {
    return String(
      currentWord?.meaning ??
      "The daily word will appear here once it is assigned.",
    );
  }, [currentWord?.meaning]);

  const exampleText = useMemo(() => {
    return currentWord?.example
      ? `"${currentWord.example}"`
      : "No example available yet.";
  }, [currentWord?.example]);

  const handleToggleFavorite = useCallback(async () => {
    if (!currentWord || isUpdatingFavorite) return;

    setIsUpdatingFavorite(true);
    try {
      const nextFavoriteState = !currentWord.is_favorite;
      await setWordOfDayFavorite(
        currentWord.vocabulary_bank_id,
        nextFavoriteState,
      );
      setCurrentWord((prev: WordOfDayEntry | null) =>
        prev ? { ...prev, is_favorite: nextFavoriteState } : prev,
      );
    } catch (error) {
      console.error("Error updating word of the day favorite:", error);
    } finally {
      setIsUpdatingFavorite(false);
    }
  }, [currentWord, isUpdatingFavorite]);

  const favoriteButtonLabel = currentWord?.is_favorite
    ? "Remove from My Words"
    : "Add to My Words";

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
          paddingRight: 20,
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 17,
            marginLeft: 20,
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
            {"Word of the Day"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#D4A85333", "#E07B541A"]}
            style={{
              alignItems: "center",
              borderColor: "#D4A85333",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 25,
              marginBottom: 21,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/s3ovia41_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 31,
                height: 31,
                marginBottom: 11,
              }}
            />
            {isLoading && !currentWord ? (
              <View
                style={{
                  alignItems: "center",
                  paddingVertical: 20,
                }}
              >
                <ActivityIndicator color="#D4A853" />
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginTop: 10,
                  }}
                >
                  {"Loading today's word..."}
                </Text>
              </View>
            ) : (
              <>
                <View
                  style={{
                    paddingBottom: 1,
                    marginBottom: 9,
                  }}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 30,
                    }}
                  >
                    {currentWord?.word ?? "No word available yet"}
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
                      fontSize: 14,
                    }}
                  >
                    {phoneticText || ""}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#D4A8531A",
                    borderRadius: 28138600,
                    paddingVertical: 2,
                    paddingHorizontal: 11,
                  }}
                >
                  <Text
                    style={{
                      color: "#D4A853",
                      fontSize: 12,
                    }}
                  >
                    {partOfSpeechText}
                  </Text>
                </View>
              </>
            )}
          </LinearGradient>
          <View
            style={{
              paddingBottom: 1,
              marginBottom: 21,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 17,
                paddingHorizontal: 16,
                marginBottom: 16,
              }}
            >
              <View
                style={{
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Definition"}
                </Text>
              </View>
              <View
                style={{
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                    width: 232,
                  }}
                >
                  {meaningText}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#A47551",
                    fontSize: 14,
                  }}
                >
                  {currentWord?.topic
                    ? `Topic: ${currentWord.topic}`
                    : partOfSpeechText}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 16,
                paddingRight: 16,
                marginBottom: 17,
              }}
            >
              <View
                style={{
                  marginBottom: 10,
                  marginLeft: 16,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Example"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  marginLeft: 16,
                  width: 265,
                }}
              >
                {exampleText}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 17,
                paddingHorizontal: 16,
              }}
            >
              <View
                style={{
                  marginBottom: 9,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Previous Words"}
                </Text>
              </View>
              <View>
                {previousWords.length > 0 ? (
                  previousWords.map((item) => (
                    <View
                      key={item.daily_id}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 9,
                      }}
                    >
                      <View
                        style={{
                          marginRight: 9,
                        }}
                      >
                        <Text
                          style={{
                            color: "#6E6880",
                            fontSize: 12,
                          }}
                        >
                          {dayLabelFromDate(item.set_date)}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: "#A47551",
                            fontSize: 14,
                          }}
                        >
                          {item.word}
                        </Text>
                      </View>
                    </View>
                  ))
                ) : (
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                    }}
                  >
                    {"No previous words yet."}
                  </Text>
                )}
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: currentWord?.is_favorite ? "#5B9E91" : "#A47551",
              borderRadius: 16,
              paddingVertical: 12,
              opacity: !currentWord || isUpdatingFavorite ? 0.7 : 1,
            }}
            onPress={() => {
              void handleToggleFavorite();
            }}
            disabled={!currentWord || isUpdatingFavorite}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {favoriteButtonLabel}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
