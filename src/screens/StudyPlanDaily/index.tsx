import { ArrowLeft } from "lucide-react-native";
import Svg, { Circle } from "react-native-svg";
import React, { useCallback, useMemo, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  getTodaySchedule,
  type DailySchedule,
  type DailyScheduleItem,
} from "../../lib/studyPlanService";

const FALLBACK_ITEMS: DailyScheduleItem[] = [
  {
    title: "Word of the Day",
    startTime: "7:00",
    duration: "5 min",
    color: "#D4A853",
  },
  {
    title: "Vocabulary Review",
    startTime: "8:00",
    duration: "15 min",
    color: "#5B9E91",
  },
  {
    title: "Listening Practice",
    startTime: "10:00",
    duration: "30 min",
    color: "#A47551",
  },
  {
    title: "Grammar Lesson",
    startTime: "12:00",
    duration: "20 min",
    color: "#8B6BAE",
  },
  {
    title: "Reading Exercise",
    startTime: "14:00",
    duration: "30 min",
    color: "#E07B54",
  },
  {
    title: "Spaced Repetition",
    startTime: "16:00",
    duration: "15 min",
    color: "#5B9E91",
  },
  {
    title: "Mini Test",
    startTime: "19:00",
    duration: "30 min",
    color: "#A47551",
  },
  {
    title: "Review Mistakes",
    startTime: "21:00",
    duration: "15 min",
    color: "#D4A853",
  },
];

export default () => {
  const navigation = useNavigation<any>();
  const [schedule, setSchedule] = useState<DailySchedule | null>(null);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;

      (async () => {
        try {
          const loaded = await getTodaySchedule();
          if (!cancelled) setSchedule(loaded);
        } catch {
          if (!cancelled) setSchedule(null);
        }
      })();

      return () => {
        cancelled = true;
      };
    }, []),
  );

  const items = useMemo(() => {
    if (schedule?.items?.length) return schedule.items;
    return FALLBACK_ITEMS;
  }, [schedule?.items]);

  const todayStudyTime = schedule?.today_study_time ?? "2h 40m";
  const progressPercent =
    typeof schedule?.progress_percent === "number"
      ? schedule.progress_percent
      : 70;

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
            marginBottom: 21,
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
            }}
          >
            <ArrowLeft size={20} color="#2C2636" />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: "#2C2636",
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              {"Daily Schedule"}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            padding: 17,
            marginBottom: 23,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              paddingBottom: 1,
            }}
          >
            <View
              style={{
                alignSelf: "flex-start",
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"Today's Study Time"}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                marginRight: 43,
              }}
            >
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 24,
                }}
              >
                {todayStudyTime}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginRight: -10,
            }}
          >
            <Svg width={90} height={90}>
              {/* nền */}
              <Circle
                cx="45"
                cy="45"
                r="30"
                stroke="#F0EBE4"
                strokeWidth="6"
                fill="none"
              />

              {/* 4 đoạn */}
              <Circle
                cx="45"
                cy="45"
                r="30"
                stroke="#A47551"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${((2 * Math.PI * 30) / 4) * 0.4}, ${((2 * Math.PI * 30) / 4) * 0.6}`}
                strokeLinecap="round"
                rotation="-90"
                origin="45,45"
              />
            </Svg>

            <Text
              style={{
                position: "absolute",
                fontSize: 14,
                color: "#333",
              }}
            >
              70%
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          {items.map((it, idx) => {
            const isLast = idx === items.length - 1;

            return (
              <View
                key={`${idx}-${it.title}-${it.startTime}`}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: isLast ? 0 : 1,
                }}
              >
                <View
                  style={{
                    width: 11,
                    height: 11,
                    backgroundColor: it.color || "#A47551",
                    borderRadius: 28138600,
                    marginBottom: 58,
                    marginRight: 13,
                  }}
                />

                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#FFFFFF",
                    borderColor: "#2C26361A",
                    borderRadius: 16,
                    borderWidth: 1,
                    paddingVertical: 12,
                    paddingHorizontal: 12,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 2,
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          color: "#2C2636",
                          fontSize: 14,
                        }}
                      >
                        {it.title}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: "#6E6880",
                        fontSize: 12,
                      }}
                    >
                      {it.startTime}
                    </Text>
                  </View>

                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                    }}
                  >
                    {it.duration}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
