import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
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
        setUserName(user.name || user.email?.split('@')[0] || "User");
        
        // Load profile data
        const profile = await getProfile();
        if (profile) {
          setUserName(profile.name || user.name || user.email?.split('@')[0] || "User");
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
    }, [])
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
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/52zk4aq3_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 16,
                  height: 16,
                  marginRight: 4,
                }}
              />
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
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/4hwhdwin_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 41,
                  height: 41,
                  marginRight: 6,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/vnt14spf_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 41,
                  height: 41,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#A47551", "#A47551", "#E07B54"]}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 16,
            paddingVertical: 18,
            paddingHorizontal: 27,
            marginBottom: 21,
            marginHorizontal: 19,
          }}
        >
          <View>
            <View
              style={{
                alignSelf: "flex-start",
                paddingBottom: 1,
                marginBottom: 3,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              >
                {"Current Score"}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                paddingRight: 27,
                marginBottom: 3,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 36,
                }}
              >
                {currentScore}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                paddingTop: 1,
                paddingRight: 17,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              >
                {`Target: ${targetScore}`}
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/ea59s3sq_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              paddingVertical: 30,
              paddingHorizontal: 27,
              marginLeft: 83,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
              }}
            >
              {`${getProgressPercent()}%`}
            </Text>
          </ImageBackground>
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/tvuwj72z_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 40,
                height: 40,
                marginBottom: 8,
              }}
            />
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/m4avneko_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 40,
                height: 40,
                marginBottom: 8,
              }}
            />
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/vmpa1aqo_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 40,
                height: 40,
                marginBottom: 8,
              }}
            />
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/1i6o2ieg_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 40,
                height: 40,
                marginBottom: 8,
              }}
            />
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/0j3svs0i_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 15,
                height: 15,
              }}
            />
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
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/bnyswe3h_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 11,
                  height: 11,
                  marginRight: 4,
                }}
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
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/cuoicev2_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 11,
                  height: 11,
                  marginRight: 4,
                }}
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/2qlt02t4_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 11,
                height: 11,
                marginRight: 4,
              }}
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
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/dlfrs06i_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 11,
                  height: 11,
                  marginRight: 4,
                }}
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
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/lif08755_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 11,
                    height: 11,
                    marginRight: 4,
                  }}
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
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/quze5fd0_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 39,
                  height: 39,
                  marginLeft: 15,
                  marginRight: 12,
                }}
              />
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
