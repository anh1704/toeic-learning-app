import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeft, Bookmark, Volume2 } from "lucide-react-native";

export default () => {
  const navigator = useNavigation();
  const route = useRoute<any>();

  const item = route.params?.item as
    | {
      word?: string;
      phonetic?: string | null;
      meaning?: string | null;
      english_meaning?: string | null;
      example?: string | null;
      part_of_speech?: string | null;
      synonyms?: string[] | null;
      word_family?: Array<{ word: string; pos: string; meaning: string }> | null;
    }
    | undefined;

  const wordText = String(item?.word ?? "implement");
  const phoneticText = String(item?.phonetic ?? "/ˈɪmplɪment/");
  const meaningText = String(item?.meaning ?? "Thực hiện, triển khai");
  const englishMeaningText = item?.english_meaning
    ? String(item.english_meaning)
    : null;
  const posText = String(item?.part_of_speech ?? "verb");
  const exampleText = item?.example ? String(item.example) : null;

  // synonyms có thể là string[] hoặc string (jsonb trả về dạng string trong 1 số TH)
  const rawSynonyms = item?.synonyms;
  const synonyms: string[] = Array.isArray(rawSynonyms)
    ? rawSynonyms
    : typeof rawSynonyms === "string"
      ? (JSON.parse(rawSynonyms as string) as string[])
      : [];

  // word_family có thể là object[] hoặc string (jsonb)
  const rawWordFamily = item?.word_family;
  const wordFamily: Array<{ word: string; pos: string; meaning: string }> =
    Array.isArray(rawWordFamily)
      ? rawWordFamily
      : typeof rawWordFamily === "string"
        ? (JSON.parse(rawWordFamily as string) as Array<{
          word: string;
          pos: string;
          meaning: string;
        }>)
        : [];

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
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            marginBottom: 48,
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
              }}
            >
              <ArrowLeft size={20} color="#2C2636" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => alert("Bookmark")}
            >
              <Bookmark size={22} color="#2C2636" />
            </TouchableOpacity>
          </View>

          {/* Word card */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 24,
              marginBottom: 22,
            }}
          >
            <View
              style={{
                marginBottom: 4,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 30,
                }}
              >
                {wordText}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 18,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                  marginRight: 9,
                }}
              >
                {phoneticText}
              </Text>
              <TouchableOpacity onPress={() => alert("Play pronunciation")}>
                <Volume2 size={23} color="#E07B54" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#A475511A",
                borderRadius: 28138600,
                paddingVertical: 2,
                paddingHorizontal: 12,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {posText}
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            {/* Meaning */}
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
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginBottom: 9,
                }}
              >
                {"Meaning"}
              </Text>
              {englishMeaningText ? (
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                    marginBottom: 5,
                  }}
                >
                  {englishMeaningText}
                </Text>
              ) : null}
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 14,
                }}
              >
                {meaningText}
              </Text>
            </View>

            {/* Examples */}
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 16,
                paddingHorizontal: 16,
                marginBottom: 17,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginBottom: 10,
                }}
              >
                {"Examples"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  marginBottom: 8,
                  marginRight: 24,
                }}
              >
                {exampleText ? `"${exampleText}"` : ""}
              </Text>
            </View>

            {/* Synonyms */}
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 17,
                paddingHorizontal: 16,
                marginBottom: 17,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginBottom: 9,
                }}
              >
                {"Synonyms"}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {synonyms.map((syn, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      backgroundColor: "#F0EBE4",
                      borderRadius: 28138600,
                      paddingVertical: 3,
                      paddingHorizontal: 12,
                      marginRight: 9,
                      marginBottom: 8,
                    }}
                    onPress={() => alert(`Searching for ${syn}`)}
                  >
                    <Text
                      style={{
                        color: "#2C2636",
                        fontSize: 12,
                      }}
                    >
                      {syn}
                    </Text>
                  </TouchableOpacity>
                ))}
                {synonyms.length === 0 && (
                  <Text style={{ color: "#6E6880", fontSize: 12 }}>
                    No synonyms available
                  </Text>
                )}
              </View>
            </View>

            {/* Word Family */}
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 16,
                paddingHorizontal: 16,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginBottom: 9,
                }}
              >
                {"Word Family"}
              </Text>
              {wordFamily.map((wf, index) => (
                <Text
                  key={index}
                  style={{
                    color: "#A47551",
                    fontSize: 12,
                    marginBottom: index === wordFamily.length - 1 ? 0 : 4,
                  }}
                >
                  {`${wf.word} (${wf.pos}) - ${wf.meaning}`}
                </Text>
              ))}
              {wordFamily.length === 0 && (
                <Text style={{ color: "#6E6880", fontSize: 12 }}>
                  No word family data
                </Text>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
