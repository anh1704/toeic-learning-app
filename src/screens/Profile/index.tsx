import React, { useState, useEffect } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { View, ScrollView, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { getCurrentUser, signOut } from "../../lib/authService";
import { getProfile } from "../../lib/profileService";

export default () => {
  const navigation = useNavigation<any>();
  const [userName, setUserName] = useState("User");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const loadUserData = async () => {
    try {
      const user = await getCurrentUser();
      if (user) {
        setUserName(user.name || user.email?.split('@')[0] || "User");
        setUserEmail(user.email);
        
        // Load profile data
        const profile = await getProfile();
        if (profile) {
          setUserName(profile.name || user.name || user.email?.split('@')[0] || "User");
        }
      }
    } catch (error) {
      console.error("Error loading user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadUserData();
    }, [])
  );

  const handleSignOut = async () => {
    try {
      await signOut();
      navigation.reset({
        index: 0,
        routes: [{ name: "AuthLogin" }],
      });
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const getInitial = () => {
    return userName.charAt(0).toUpperCase();
  };
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FAF6F1",
        }}
      >
        <View
          style={{
            alignItems: "center",
            paddingTop: 19,
          }}
        >
          <View
            style={{
              paddingBottom: 1,
              marginBottom: 21,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {"Profile"}
            </Text>
          </View>
          <View
            style={{
              alignSelf: "stretch",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 25,
              marginBottom: 21,
              marginHorizontal: 20,
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 28138600,
                paddingVertical: 23,
                paddingHorizontal: 30,
                marginBottom: 14,
              }}
              onPress={() => alert("Pressed!")}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#8B6BAE"]}
                style={{
                  borderRadius: 28138600,
                  paddingVertical: 23,
                  paddingHorizontal: 30,
                  marginBottom: 14,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 24,
                  }}
                >
                  {getInitial()}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            {loading ? (
              <ActivityIndicator color="#A47551" style={{ marginBottom: 17 }} />
            ) : (
              <>
                <View>
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    {userName}
                  </Text>
                </View>
                <View
                  style={{
                    marginBottom: 17,
                  }}
                >
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 14,
                    }}
                  >
                    {userEmail}
                  </Text>
                </View>
              </>
            )}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  marginRight: 24,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      color: "#A47551",
                      fontSize: 18,
                    }}
                  >
                    {"12"}
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
                      fontSize: 10,
                    }}
                  >
                    {"Level"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginRight: 25,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      color: "#D4A853",
                      fontSize: 18,
                    }}
                  >
                    {"4850"}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginLeft: 17,
                  }}
                >
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 10,
                    }}
                  >
                    {"XP"}
                  </Text>
                </View>
              </View>
              <View>
                <View
                  style={{
                    alignSelf: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      color: "#E07B54",
                      fontSize: 18,
                    }}
                  >
                    {"15"}
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
                      fontSize: 10,
                    }}
                  >
                    {"Streak"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              alignSelf: "stretch",
              paddingBottom: 1,
              marginBottom: 4,
              marginHorizontal: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileEdit")}
              activeOpacity={0.7}
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 16,
                padding: 11,
                marginBottom: 4,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/c97mlvyv_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 13,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Edit Profile"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/oebe33dw_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 15,
                  height: 15,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileSettings")}
              activeOpacity={0.7}
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 16,
                paddingVertical: 12,
                paddingHorizontal: 11,
                marginBottom: 5,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/5utp0gt1_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 13,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Settings"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/gis5jmk7_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 15,
                  height: 15,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileNotifications")}
              activeOpacity={0.7}
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 16,
                paddingVertical: 12,
                paddingHorizontal: 11,
                marginBottom: 5,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/v8b35q0q_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 13,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Notifications"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/ftb9bq84_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 15,
                  height: 15,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileSubscription")}
              activeOpacity={0.7}
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 16,
                paddingVertical: 12,
                paddingHorizontal: 11,
                marginBottom: 5,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/rxdef12q_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 13,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Premium"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/eb97hqk0_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 15,
                  height: 15,
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 16,
                paddingVertical: 12,
                paddingHorizontal: 11,
                marginBottom: 5,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/o952s7ky_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 13,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Help & FAQ"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/mlp714qd_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 15,
                  height: 15,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 16,
                paddingVertical: 12,
                paddingHorizontal: 11,
                marginBottom: 5,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/81dj9gl6_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 13,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"About"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/sj8f0zvw_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 15,
                  height: 15,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 16,
                paddingVertical: 12,
                paddingHorizontal: 11,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/v4mf5b1v_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 13,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Feedback"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/q7cam2db_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 15,
                  height: 15,
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={handleSignOut}
            activeOpacity={0.7}
            style={{
              alignSelf: "stretch",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 16,
              paddingVertical: 12,
              marginBottom: 52,
              marginHorizontal: 20,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/7oo47559_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 19,
                height: 19,
                marginLeft: 11,
                marginRight: 12,
              }}
            />
            <View>
              <Text
                style={{
                  color: "#D4183D",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Sign Out"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
