import React, { useState, useEffect } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { View, ScrollView, Text, TouchableOpacity, ActivityIndicator, Settings } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { getCurrentUser, signOut } from "../../lib/authService";
import { getProfile } from "../../lib/profileService";
import { AlertCircle, Bell, ChevronRight, ColumnsSettings, Crown, Edit, HelpCircle, LogOut, MessageSquare, MoveRight, Settings2, Settings2Icon } from "lucide-react-native";

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
              marginBottom: 20,
              marginHorizontal: 20,
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 28138600,
                paddingVertical: 23,
                paddingHorizontal: 30,
                marginBottom: 0,
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
                  paddingHorizontal: 30
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
            <Edit size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
            <ChevronRight size={20} color="#6E6880" />
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
            <ColumnsSettings size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
            <ChevronRight size={20} color="#6E6880" />
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
            <Bell size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
            <ChevronRight size={20} color="#6E6880" />
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
            <Crown size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
            <ChevronRight size={20} color="#6E6880" />
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
            <HelpCircle size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
            <ChevronRight size={20} color="#6E6880" />
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
            <AlertCircle size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
            <ChevronRight size={20} color="#6E6880" />
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
            <MessageSquare size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
            <ChevronRight size={20} color="#6E6880" />
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
            <LogOut size={20} style={{ marginRight: 10 , marginLeft: 10}} color="#6E6880" />
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
