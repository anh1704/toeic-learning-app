import { ArrowLeft, PlusCircle, Bell, CalendarDays, CalendarRange, Target, Flag, SlidersHorizontal, Plus } from "lucide-react-native";
import React, { useCallback, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { getTodaySchedule, type DailySchedule } from "../../lib/studyPlanService";
import { getProfile } from "../../lib/profileService";

export default () => {
  const navigation = useNavigation<any>();
  const [todaySchedule, setTodaySchedule] = useState<DailySchedule | null>(null);
  const [targetScore, setTargetScore] = useState(800);
  const [currentScore, setCurrentScore] = useState(650);
  const [daysRemaining, setDaysRemaining] = useState(45);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;

      (async () => {
        try {
          const [schedule, profile] = await Promise.all([
            getTodaySchedule(),
            getProfile(),
          ]);
          if (!cancelled) {
            setTodaySchedule(schedule);
            if (profile) {
              setTargetScore(profile.target_score || 800);
              setCurrentScore(profile.current_score || 650);
            }
          }
        } catch {
          if (!cancelled) setTodaySchedule(null);
        }
      })();

      return () => {
        cancelled = true;
      };
    }, []),
  );

  const progressPercent = Math.min(100, Math.round((currentScore / targetScore) * 100));


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
            marginBottom: 10,
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
                marginLeft: 10
              }}
            >
              {"Study Plan"}
            </Text>
          </View>
        </View>

        {/* Target Banner Card */}
        <LinearGradient
          start={{ x: 0.5, y: 0 }} 
          end={{ x: 0.5, y: 1 }}   
          colors={["#8B6BAE", "#A47551"]}
          style={{
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingTop: 10,
            paddingBottom: 20,
            marginHorizontal: 20,
            marginBottom: 22,
            width: '95%'
          }}
        >
          <Target size={26} color="#FFFFFF" style={{ marginBottom: 10, opacity: 0.9 }} />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 4,
            }}
          >
            {`Target: ${targetScore} points`}
          </Text>
          <Text
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: 14,
              marginBottom: 16,
            }}
          >
            {`${daysRemaining} days remaining`}
          </Text>
          {/* Progress bar */}
          <View
            style={{
              height: 6,
              backgroundColor: "rgba(255,255,255,0.3)",
              borderRadius: 100,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                width: `${progressPercent}%`,
                height: "100%",
                backgroundColor: "rgba(255,255,255,0.85)",
                borderRadius: 100,
              }}
            />
          </View>
        </LinearGradient>

        <View
          style={{
            paddingBottom: 1,
            marginBottom: 23,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 17,
                paddingRight: 17,
                marginRight: 22,
              }}
              onPress={() => navigation.navigate("StudyPlanCreate")}
            >
              <PlusCircle size={20} color="#8B6BAE" style={{ marginBottom: 8, marginLeft: 17 }} />
              <View
                style={{
                  paddingBottom: 1,
                  marginLeft: 17,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Create Plan"}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 17,
                paddingRight: 17,
              }}
              onPress={() => navigation.navigate("StudyPlanReminders")}
            >
              <Bell size={20} color="#8B6BAE" style={{ marginBottom: 8, marginLeft: 17 }} />
              <View
                style={{
                  paddingBottom: 1,
                  marginLeft: 17,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Reminder"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 11,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 17,
                paddingRight: 17,
                marginRight: 22,
              }}
              onPress={() => navigation.navigate("StudyPlanDaily")}
            >
              <CalendarDays size={19} color="#8B6BAE" style={{ marginBottom: 8, marginLeft: 17 }} />
              <View
                style={{
                  marginLeft: 17,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Daily Schedule"}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 16,
                paddingRight: 17,
              }}
              onPress={() => navigation.navigate("StudyPlanWeekly")}
            >
              <CalendarRange size={19} color="#8B6BAE" style={{ marginBottom: 8, marginLeft: 17 }} />
              <View
                style={{
                  marginLeft: 17,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Weekly Plan"}
                </Text>
              </View>
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
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 16,
                paddingLeft: 16,
                marginRight: 21,
              }}
              onPress={() => navigation.navigate("StudyPlanGoals")}
            >
              <Target size={19} color="#8B6BAE" style={{ marginBottom: 8 }} />
              <View
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Goals"}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 16,
                paddingRight: 17,
              }}
              onPress={() => navigation.navigate("StudyPlanMilestones")}
            >
              <Flag size={19} color="#8B6BAE" style={{ marginBottom: 8, marginLeft: 17 }} />
              <View
                style={{
                  marginLeft: 17,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Milestones"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 6,
            marginLeft: 21,
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
              {"Today's Plan"}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("StudyPlanCreate")}
          >
            <Plus size={15} color="#A47551" strokeWidth={3} style={{ marginRight: 2 }} />
            <Text
              style={{
                color: "#A47551",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {" Custom"}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
            marginLeft: 22,
          }}
        >
          {todaySchedule && todaySchedule.items.length > 0 ? (
            todaySchedule.items.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#FFFFFF",
                  borderColor: "#2C26361A",
                  borderRadius: 16,
                  borderWidth: 1,
                  padding: 12,
                  marginBottom: index === todaySchedule.items.length - 1 ? 0 : 8,
                }}
              >
                <View
                  style={{
                    width: 31,
                    height: 31,
                    borderRadius: 16,
                    backgroundColor: item.color || "#A47551",
                    marginRight: 12,
                  }}
                />
                <View
                  style={{
                    flex: 1,
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
                      }}
                    >
                      {item.title}
                    </Text>
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
                      }}
                    >
                      {item.startTime}
                    </Text>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                padding: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                }}
              >
                {"No schedule for today. Create a plan to get started!"}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
