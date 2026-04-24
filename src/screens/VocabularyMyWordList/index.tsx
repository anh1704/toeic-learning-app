import React, { useCallback, useMemo, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  BookOpen,
  ChevronLeft,
  Plus,
  Search,
  Trash2,
} from "lucide-react-native";

import {
  getVocabularyBankFavoriteWords,
  removeVocabularyBankFavorite,
  type VocabularyBankFavoriteWord,
} from "../../lib/vocabularyBankService";

const formatSavedDate = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

export default () => {
  const navigation = useNavigation<any>();

  const [items, setItems] = useState<VocabularyBankFavoriteWord[]>([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [removingId, setRemovingId] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      (async () => {
        setIsLoading(true);

        try {
          const data = await getVocabularyBankFavoriteWords();

          if (!isActive) return;

          setItems(data);
        } catch (error) {
          console.error("Error loading my word list:", error);

          if (isActive) {
            setItems([]);
          }
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

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return items;

    return items.filter((item) => {
      const searchable = [item.word, item.meaning ?? "", item.topic ?? ""].join(
        " ",
      );
      return searchable.toLowerCase().includes(normalizedQuery);
    });
  }, [items, query]);

  const handleRemove = useCallback(
    async (item: VocabularyBankFavoriteWord) => {
      if (removingId) return;

      setRemovingId(item.id);

      try {
        await removeVocabularyBankFavorite(item.id);
        setItems((current) => current.filter((row) => row.id !== item.id));
      } catch (error) {
        console.error("Error removing word from my word list:", error);
      } finally {
        setRemovingId(null);
      }
    },
    [removingId],
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
        }}
        contentContainerStyle={{
          paddingTop: 18,
          paddingHorizontal: 20,
          paddingBottom: 28,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 38,
              height: 38,
              borderRadius: 19,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#E9DFD4",
              borderWidth: 1,
              marginRight: 10,
            }}
          >
            <ChevronLeft size={21} color="#2C2636" strokeWidth={2.25} />
          </TouchableOpacity>
          <Text
            style={{
              color: "#2C2636",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {"My Word Lists"}
          </Text>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            onPress={() => navigation.navigate("VocabularyWordOfDay")}
            style={{
              width: 38,
              height: 38,
              borderRadius: 19,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#A47551",
            }}
          >
            <Plus size={20} color="#FFFFFF" strokeWidth={2.5} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#E6DDD2",
            borderWidth: 1,
            borderRadius: 16,
            height: 48,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 14,
            marginBottom: 16,
          }}
        >
          <Search size={18} color="#8E8396" strokeWidth={2} />
          <TextInput
            placeholder="Search words..."
            placeholderTextColor="#9C92A3"
            value={query}
            onChangeText={setQuery}
            style={{
              flex: 1,
              marginLeft: 10,
              color: "#2C2636",
              fontSize: 14,
              paddingVertical: 0,
            }}
          />
        </View>

        {isLoading ? (
          <View
            style={{
              alignItems: "center",
              paddingVertical: 40,
            }}
          >
            <ActivityIndicator color="#A47551" />
          </View>
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const savedDate = formatSavedDate(item.favorite_created_at);

            return (
              <View
                key={item.favorite_id}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E6DDD2",
                  borderWidth: 1,
                  borderRadius: 16,
                  paddingVertical: 14,
                  paddingHorizontal: 14,
                  marginBottom: 12,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingRight: 12,
                  }}
                  activeOpacity={0.85}
                  onPress={() => {
                    navigation.navigate("VocabularyDetail", {
                      item,
                    });
                  }}
                >
                  <View
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 16,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#FBF4ED",
                      marginRight: 12,
                    }}
                  >
                    <BookOpen size={18} color="#A47551" strokeWidth={2} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: "#2C2636",
                        fontSize: 15,
                        fontWeight: "bold",
                        marginBottom: 2,
                      }}
                    >
                      {item.word}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: "#6E6880",
                        fontSize: 12,
                        marginBottom: 2,
                      }}
                    >
                      {item.meaning ?? "No meaning available"}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: "#A47551",
                        fontSize: 11,
                      }}
                    >
                      {`${item.topic ?? "Other"}${savedDate ? ` · ${savedDate}` : ""}`}
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    void handleRemove(item);
                  }}
                  disabled={removingId === item.id}
                  style={{
                    width: 28,
                    height: 28,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Trash2 size={18} color="#8E8396" strokeWidth={2} />
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#E6DDD2",
              borderWidth: 1,
              borderRadius: 16,
              paddingVertical: 28,
              paddingHorizontal: 18,
              alignItems: "center",
              marginTop: 6,
            }}
          >
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 18,
                backgroundColor: "#FBF4ED",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              <BookOpen size={22} color="#A47551" strokeWidth={2} />
            </View>
            <Text
              style={{
                color: "#2C2636",
                fontSize: 15,
                fontWeight: "bold",
                marginBottom: 4,
              }}
            >
              {"No saved words yet"}
            </Text>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
                textAlign: "center",
                lineHeight: 18,
              }}
            >
              {
                "Tap Add to My Words on Word of the Day or other vocabulary screens to save words here."
              }
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
