import { ArrowLeft } from "lucide-react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Alert,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import {
  getDailyVocabQuiz,
  type DailyQuizQuestion,
} from "../../lib/vocabularyQuizService";

export default () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const topic: string | undefined = route?.params?.topic;

  const [rounds, setRounds] = useState<DailyQuizQuestion[]>([]);
  const [roundIndex, setRoundIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [isLoading, setIsLoading] = useState(true);
  const [isLocked, setIsLocked] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentRound = useMemo(
    () => rounds[roundIndex] ?? null,
    [roundIndex, rounds],
  );

  const formattedTime = useMemo(() => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    const ss = String(s).padStart(2, "0");
    return `${m}:${ss}`;
  }, [timeLeft]);

  const loadRounds = useCallback(async () => {
    setIsLoading(true);
    try {
      // Dùng RPC quiz sẵn có để lấy nhiều câu (có options + correct_index)
      const data = await getDailyVocabQuiz(topic, 50);
      setRounds(data);
      setRoundIndex(0);
      setSelectedIndex(null);
    } finally {
      setIsLoading(false);
    }
  }, [topic]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
  }, [stopTimer]);

  useFocusEffect(
    useCallback(() => {
      setScore(0);
      setTimeLeft(45);
      setIsLocked(false);
      void loadRounds();
      startTimer();

      return () => {
        stopTimer();
      };
    }, [loadRounds, startTimer, stopTimer]),
  );

  useEffect(() => {
    if (timeLeft > 0) return;
    stopTimer();

    Alert.alert("Time's up", `Score: ${score}`, [
      {
        text: "OK",
        onPress: () => navigation.goBack(),
      },
    ]);
  }, [navigation, score, stopTimer, timeLeft]);

  useEffect(() => {
    setSelectedIndex(null);
    setIsLocked(false);
  }, [roundIndex]);

  const goNext = useCallback(() => {
    setRoundIndex((idx) => {
      if (rounds.length === 0) return 0;
      const next = idx + 1;
      return next < rounds.length ? next : 0;
    });
  }, [rounds.length]);

  const onPick = useCallback(
    (idx: number) => {
      if (!currentRound) return;
      if (isLocked) return;
      if (timeLeft <= 0) return;

      setIsLocked(true);
      setSelectedIndex(idx);

      const isCorrect = idx === currentRound.correct_index;
      if (isCorrect) setScore((s) => s + 10);

      setTimeout(() => {
        goNext();
      }, 450);
    },
    [currentRound, goNext, isLocked, timeLeft],
  );

  const options = useMemo(() => {
    const opts = currentRound?.options ?? [];
    return opts.slice(0, 4);
  }, [currentRound]);

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
          paddingRight: 19,
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
            {"Word game"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 48,
            marginLeft: 19,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 21,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/h5u1klla_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {`Score: ${score}`}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/ltzllog6_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {formattedTime}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingTop: 26,
              marginBottom: 21,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
                marginBottom: 12,
              }}
            >
              {"Match the word with its meaning"}
            </Text>
            <View
              style={{
                marginBottom: 41,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 24,
                }}
              >
                {isLoading
                  ? ""
                  : rounds.length === 0
                    ? "No words"
                    : (currentRound?.word ?? "")}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  bottom: -14,
                  right: -55,
                  left: -55,
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              ></Text>
            </View>
          </View>
          <View
            style={{
              marginBottom: 21,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 13,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#FFFFFF",
                  borderColor: selectedIndex === 0 ? "#A47551" : "#2C26361A",
                  borderRadius: 16,
                  borderWidth: 1,
                  paddingVertical: 18,
                  marginRight: 12,
                }}
                onPress={() => onPick(0)}
                disabled={isLoading || rounds.length === 0}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {options[0] ?? ""}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#FFFFFF",
                  borderColor: selectedIndex === 1 ? "#A47551" : "#2C26361A",
                  borderRadius: 16,
                  borderWidth: 1,
                  paddingVertical: 18,
                }}
                onPress={() => onPick(1)}
                disabled={isLoading || rounds.length === 0}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {options[1] ?? ""}
                </Text>
              </TouchableOpacity>
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
                  borderColor: selectedIndex === 2 ? "#A47551" : "#2C26361A",
                  borderRadius: 16,
                  borderWidth: 1,
                  paddingVertical: 18,
                  marginRight: 12,
                }}
                onPress={() => onPick(2)}
                disabled={isLoading || rounds.length === 0}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {options[2] ?? ""}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#FFFFFF",
                  borderColor: selectedIndex === 3 ? "#A47551" : "#2C26361A",
                  borderRadius: 16,
                  borderWidth: 1,
                  paddingVertical: 18,
                }}
                onPress={() => onPick(3)}
                disabled={isLoading || rounds.length === 0}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {options[3] ?? ""}
                </Text>
              </TouchableOpacity>
            </View>
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
                backgroundColor: "#A47551",
                borderRadius: 16,
                paddingVertical: 8,
                marginRight: 11,
              }}
              onPress={() => { }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Word Match"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 8,
                marginRight: 12,
              }}
              onPress={() => { }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Fill Blank"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 8,
              }}
              onPress={() => { }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Scramble"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
