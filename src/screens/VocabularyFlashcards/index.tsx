import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Animated,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Heart, ArrowLeft, ArrowRight } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import {
  getDailyFlashcards,
  setFlashcardFavorite,
  type DailyFlashcard,
} from "../../lib/flashcardsService";

export default () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const topic: string | undefined = route?.params?.topic;

  const [cards, setCards] = useState<DailyFlashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSavingFavorite, setIsSavingFavorite] = useState(false);

  const flipAnim = useMemo(() => new Animated.Value(0), []);

  const frontRotation = useMemo(
    () =>
      flipAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "180deg"],
      }),
    [flipAnim],
  );

  const backRotation = useMemo(
    () =>
      flipAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["180deg", "360deg"],
      }),
    [flipAnim],
  );

  const currentCard = useMemo(
    () => cards[currentIndex] ?? null,
    [cards, currentIndex],
  );

  const loadCards = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getDailyFlashcards(topic, 10);
      setCards(data);
      setCurrentIndex(0);
      setIsFlipped(false);
      flipAnim.setValue(0);
    } finally {
      setIsLoading(false);
    }
  }, [flipAnim, topic]);

  useFocusEffect(
    useCallback(() => {
      void loadCards();
    }, [loadCards]),
  );

  useEffect(() => {
    setIsFlipped(false);
    flipAnim.setValue(0);
  }, [currentIndex]);

  const onFlip = useCallback(() => {
    if (cards.length === 0) return;
    const next = !isFlipped;
    setIsFlipped(next);
    Animated.timing(flipAnim, {
      toValue: next ? 1 : 0,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, [cards.length, flipAnim, isFlipped]);

  const onPressPrev = useCallback(() => {
    setCurrentIndex((idx) => (idx > 0 ? idx - 1 : idx));
  }, []);

  const onPressNext = useCallback(() => {
    setCurrentIndex((idx) => (idx + 1 < cards.length ? idx + 1 : idx));
  }, [cards.length]);

  const onToggleFavorite = useCallback(async () => {
    if (!currentCard || isSavingFavorite) return;

    const nextFavorite = !Boolean(currentCard.is_favorite);
    setIsSavingFavorite(true);

    setCards((prev) =>
      prev.map((c) =>
        c.id === currentCard.id ? { ...c, is_favorite: nextFavorite } : c,
      ),
    );

    try {
      await setFlashcardFavorite(currentCard.id, nextFavorite);
    } catch (e) {
      console.error("Error toggling favorite:", e);
      setCards((prev) =>
        prev.map((c) =>
          c.id === currentCard.id ? { ...c, is_favorite: !nextFavorite } : c,
        ),
      );
    } finally {
      setIsSavingFavorite(false);
    }
  }, [currentCard, isSavingFavorite]);

  const canPrev = currentIndex > 0;
  const canNext = currentIndex + 1 < cards.length;

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
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 38,
              height: 38,
              borderRadius: 16,
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 9,
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
            {"Flashcards"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              alignItems: "center",
              marginBottom: 21,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 14,
              }}
            >
              {"Tap card to flip"}
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 22,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                }}
              >
                {`${cards.length === 0 ? 0 : currentIndex + 1} / ${cards.length}`}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            disabled={cards.length === 0}
            onPress={onFlip}
            style={{
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingTop: 38,
              marginBottom: 22,
              shadowColor: "#0000001A",
              shadowOpacity: 0.1,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowRadius: 6,
              elevation: 6,
            }}
          >
            <View style={{ width: "100%", alignItems: "center" }}>
              <Animated.View
                style={{
                  width: "100%",
                  alignItems: "center",
                  backfaceVisibility: "hidden",
                  transform: [
                    { perspective: 1000 },
                    { rotateY: frontRotation },
                  ],
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                    marginBottom: 40,
                  }}
                ></Text>
                <View style={{ marginBottom: 9 }}>
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 24,
                      fontWeight: "bold",
                    }}
                  >
                    {isLoading
                      ? ""
                      : cards.length === 0
                        ? "No vocabulary"
                        : (currentCard?.word ?? "")}
                  </Text>
                </View>
                <View style={{ marginBottom: 98 }}>
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {isLoading
                      ? ""
                      : cards.length === 0
                        ? "No cards today"
                        : "Tap to see meaning"}
                  </Text>
                </View>
              </Animated.View>

              <Animated.View
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  alignItems: "center",
                  backfaceVisibility: "hidden",
                  transform: [{ perspective: 1000 }, { rotateY: backRotation }],
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                    marginBottom: 40,
                  }}
                ></Text>
                <View style={{ marginBottom: 9 }}>
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 24,
                      fontWeight: "bold",
                    }}
                  >
                    {isLoading
                      ? ""
                      : cards.length === 0
                        ? "No vocabulary"
                        : (currentCard?.meaning ?? "")}
                  </Text>
                </View>
                <View style={{ marginBottom: 98 }}>
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {isLoading
                      ? ""
                      : cards.length === 0
                        ? "No cards today"
                        : "Tap to see word"}
                  </Text>
                </View>
              </Animated.View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              disabled={!canPrev}
              onPress={onPressPrev}
              style={{
                width: 55,
                height: 55,
                borderRadius: 27.5,
                backgroundColor: "#FDE8E8",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 16,
                opacity: canPrev ? 1 : 0.5,
              }}
            >
              <ArrowLeft size={22} color="#E07070" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              disabled={!canNext}
              onPress={onPressNext}
              style={{
                width: 55,
                height: 55,
                borderRadius: 27.5,
                backgroundColor: "#E8F5E9",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 16,
                opacity: canNext ? 1 : 0.5,
              }}
            >
              <ArrowRight size={22} color="#5BAD6F" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              disabled={cards.length === 0 || isSavingFavorite}
              onPress={onToggleFavorite}
              style={{
                width: 55,
                height: 55,
                borderRadius: 27.5,
                backgroundColor: "#F5EDE4",
                alignItems: "center",
                justifyContent: "center",
                opacity: cards.length === 0 ? 0.5 : 1,
              }}
            >
              <Heart
                size={24}
                color={currentCard?.is_favorite ? "#F5A623" : "#A47551"}
                fill={currentCard?.is_favorite ? "#F5A623" : "transparent"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
