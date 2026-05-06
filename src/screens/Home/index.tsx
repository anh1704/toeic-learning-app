import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import {
  Flame,
  Trophy,
  Bell,
  CalendarDays,
  BookOpen,
  Users,
  Languages,
  ChevronRight,
  Star,
  Lightbulb,
  Zap,
} from "lucide-react-native";
import Svg, { Circle } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { getCurrentUser } from "../../lib/authService";
import { getProfile } from "../../lib/profileService";

export default () => {
  const navigation = useNavigation<any>();
  const [userName, setUserName] = useState("User");
  const [currentScore, setCurrentScore] = useState(650);
  const [targetScore, setTargetScore] = useState(800);

  const loadUserData = async () => {
    try {
      const user = await getCurrentUser();
      if (user) {
        setUserName(user.name || user.email?.split("@")[0] || "User");

        // Load profile data
        const profile = await getProfile();
        if (profile) {
          setUserName(
            profile.name || user.name || user.email?.split("@")[0] || "User",
          );
          setCurrentScore(profile.current_score || 650);
          setTargetScore(profile.target_score || 800);
        }
      }
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadUserData();
    }, []),
  );

  const getProgressPercent = () => {
    return Math.round((currentScore / targetScore) * 100);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };
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
          paddingTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 22,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              marginRight: 43,
            }}
          >
            <View
              style={{
                alignSelf: "flex-start",
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                }}
              >
                {getGreeting()}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                marginRight: 22,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {userName}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#EDD6C6",
                borderRadius: 16,
                paddingVertical: 6,
                paddingHorizontal: 11,
                marginRight: 8,
              }}
            >
              <Flame size={16} color="#E07B54" style={{ marginRight: 4 }} />
              <Text
                style={{
                  color: "#E07B54",
                  fontSize: 14,
                }}
              >
                {"15"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Achievements")}
              style={{
                width: 41,
                height: 41,
                borderRadius: 16,
                backgroundColor: "#FFFFFF",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 6,
              }}
            >
              <Trophy size={22} color="#2C2636" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
              style={{
                width: 41,
                height: 41,
                borderRadius: 16,
                backgroundColor: "#FFFFFF",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Bell size={22} color="#2C2636" />
            </TouchableOpacity>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#A47551", "#A47551", "#E07B54"]}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 16,
            paddingVertical: 18,
            paddingHorizontal: 27,
            marginBottom: 21,
            marginHorizontal: 19,
          }}
        >
          {/* LEFT */}
          <View style={{ flex: 1 }}>
            <Text style={{ color: "#FFFFFF", fontSize: 14 }}>
              Current Score
            </Text>

            <Text style={{ color: "#FFFFFF", fontSize: 36 }}>
              {currentScore}
            </Text>

            <Text style={{ color: "#FFFFFF", fontSize: 14 }}>
              {`Target: ${targetScore}`}
            </Text>
          </View>

          {/* RIGHT */}
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginRight: -10,
              }}
            >
              <Svg width={100} height={100}>
                <Circle cx="50" cy="50" r="35" strokeWidth="6" fill="none" />

                <Circle
                  cx="50"
                  cy="50"
                  r="35"
                  stroke="#FFFFFF"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${((2 * Math.PI * 35) / 8) * 0.4}, ${((2 * Math.PI * 35) / 8) * 0.6}`}
                  strokeLinecap="round"
                  rotation="-90"
                  origin="50,50"
                />
              </Svg>

              <Text
                style={{
                  position: "absolute",
                  fontSize: 14,
                  color: "#FFFFFF",
                }}
              >
                {`${getProgressPercent()}%`}
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 12,
              marginRight: 20,
            }}
            onPress={() => navigation.navigate("StudyPlan")}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 16,
                backgroundColor: "#A47551",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 8,
              }}
            >
              <CalendarDays size={22} color="#FFFFFF" />
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {"Plan"}
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
              paddingVertical: 12,
              marginRight: 20,
            }}
            onPress={() => navigation.navigate("ResourcesHome")}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 16,
                backgroundColor: "#8B6BAE",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 8,
              }}
            >
              <BookOpen size={22} color="#FFFFFF" />
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {"Resources"}
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
              paddingVertical: 12,
              marginRight: 20,
            }}
            onPress={() => navigation.navigate("Community")}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 16,
                backgroundColor: "#E07B54",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 8,
              }}
            >
              <Users size={22} color="#FFFFFF" />
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {"Community"}
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
              paddingVertical: 12,
            }}
            onPress={() => navigation.navigate("Vocabulary")}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 16,
                backgroundColor: "#5B9E91",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 8,
              }}
            >
              <Languages size={22} color="#FFFFFF" />
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {"Vocab"}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 15,
            marginHorizontal: 20,
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
              {"Daily Tasks"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#A47551",
                fontSize: 14,
                fontWeight: "bold",
                marginRight: 5,
              }}
            >
              {"View all "}
            </Text>
            <ChevronRight size={15} color="#A47551" />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("DailyTaskDetail")}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              marginBottom: 12,
              marginHorizontal: 19,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 7,
                marginHorizontal: 16,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"Practice Listening Part 1"}
              </Text>
              <View
                style={{
                  flex: 1,
                }}
              ></View>
              <Zap
                size={11}
                color="#D4A853"
                fill="#FFFFFF"
                style={{ marginRight: 4 }}
              />
              <Text
                style={{
                  color: "#D4A853",
                  fontSize: 12,
                }}
              >
                {"20 XP"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 24562000,
                marginHorizontal: 17,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#E07B54"]}
                style={{
                  width: 268,
                  height: 7,
                  borderRadius: 24562000,
                }}
              ></LinearGradient>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 17,
            marginBottom: 12,
            marginHorizontal: 19,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
              marginHorizontal: 16,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"Watch a short story video"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Zap
                size={11}
                color="#D4A853"
                fill="#FFFFFF"
                style={{ marginRight: 4 }}
              />
              <Text
                style={{
                  color: "#D4A853",
                  fontSize: 12,
                }}
              >
                {"30 XP"}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#F0EBE4",
              borderRadius: 24562000,
              marginHorizontal: 17,
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#A47551", "#E07B54"]}
              style={{
                width: 268,
                height: 7,
                borderRadius: 24562000,
              }}
            ></LinearGradient>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 17,
            marginBottom: 13,
            marginHorizontal: 19,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 7,
              marginHorizontal: 16,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 14,
              }}
            >
              {"Learn 10 new words"}
            </Text>
            <View
              style={{
                flex: 1,
              }}
            ></View>
            <Zap
              size={11}
              color="#D4A853"
              fill="#FFFFFF"
              style={{ marginRight: 4 }}
            />
            <Text
              style={{
                color: "#D4A853",
                fontSize: 12,
              }}
            >
              {"15 XP"}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#F0EBE4",
              borderRadius: 24562000,
              marginHorizontal: 17,
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#A47551", "#E07B54"]}
              style={{
                width: 176,
                height: 7,
                borderRadius: 24562000,
              }}
            ></LinearGradient>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 17,
            marginBottom: 12,
            marginHorizontal: 19,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 7,
              marginHorizontal: 16,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"Complete Grammar Quiz"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Zap
                size={11}
                color="#D4A853"
                fill="#FFFFFF"
                style={{ marginRight: 4 }}
              />
              <Text
                style={{
                  color: "#D4A853",
                  fontSize: 12,
                }}
              >
                {"25 XP"}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#F0EBE4",
              borderRadius: 24562000,
              marginHorizontal: 17,
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#A47551", "#E07B54"]}
              style={{
                width: 23,
                height: 7,
                borderRadius: 24562000,
              }}
            ></LinearGradient>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 19,
            marginBottom: 48,
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 17,
                marginBottom: 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                  marginHorizontal: 16,
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                    }}
                  >
                    {"Write a sentence using new vocabulary"}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: "stretch",
                  }}
                ></View>
                <Zap
                  size={11}
                  color="#D4A853"
                  fill="#FFFFFF"
                  style={{ marginRight: 4 }}
                />
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 12,
                  }}
                >
                  {"20 XP"}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderRadius: 24562000,
                  marginHorizontal: 17,
                }}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={["#A47551", "#E07B54"]}
                  style={{
                    width: 268,
                    height: 7,
                    borderRadius: 24562000,
                  }}
                ></LinearGradient>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#8B6BAE1A",
                borderRadius: 16,
                paddingVertical: 16,
              }}
            >
              <View
                style={{
                  width: 39,
                  height: 39,
                  borderRadius: 16,
                  backgroundColor: "#C9B8E8",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 15,
                  marginRight: 12,
                }}
              >
                <Lightbulb size={22} color="#6B3FA0" />
              </View>
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginBottom: 5,
                    marginRight: 200,
                  }}
                >
                  {"Pro Tip"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    width: 244,
                  }}
                >
                  {
                    "Practice listening for 15 minutes daily to improve your score by 50+ points in just 30 days!"
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
