import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type NavigationProp = NativeStackNavigationProp<any>;

export default () => {
  const navigator = useNavigation<NavigationProp>();
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
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 19,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigator.goBack();
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/zrefy57a_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 37,
                height: 37,
                marginRight: 12,
              }}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: "#2C2636",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {"Achievements"}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
            }}
          ></View>
          <View
            style={{
              width: 117,
              height: 30,
            }}
          ></View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#B46E2700", "#DA9354"]}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 16,
            paddingVertical: 16,
            paddingLeft: 25,
            paddingRight: 40,
            marginBottom: 26,
            marginHorizontal: 22,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/0akvehon_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 55,
              height: 55,
              marginRight: 12,
            }}
          />
          <View
            style={{
              flex: 1,
              paddingBottom: 1,
              marginRight: 12,
            }}
          >
            <View
              style={{
                alignSelf: "flex-start",
                paddingBottom: 1,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 20,
                }}
              >
                {"Level 12"}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                marginBottom: 5,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              >
                {"4,850 / 6,000 XP"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 28138600,
              }}
            >
              <View
                style={{
                  width: 129,
                  height: 7,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 28138600,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              width: 55,
              height: 55,
            }}
          ></View>
        </LinearGradient>
        <View
          style={{
            marginBottom: 27,
            marginHorizontal: 20,
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
              onPress={() => {
                navigator.navigate("AchievementsBadges");
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#FFFFFF",
                  borderColor: "#2C26361A",
                  borderRadius: 16,
                  borderWidth: 1,
                  paddingVertical: 16,
                  paddingRight: 17,
                  marginRight: 10,
                  width: 170,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/wk6ptwnf_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 16,
                    width: 19,
                    height: 19,
                    marginBottom: 4,
                    marginLeft: 17,
                  }}
                />
                <View
                  style={{
                    marginBottom: 6,
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
                    {"Badges"}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                    marginLeft: 17,
                  }}
                >
                  {"18"}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigator.navigate("AchievementsChallenges");
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#FFFFFF",
                  borderColor: "#2C26361A",
                  borderRadius: 16,
                  borderWidth: 1,
                  paddingVertical: 16,
                  paddingRight: 17,
                  width: 170,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/7cswghod_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 16,
                    width: 19,
                    height: 19,
                    marginBottom: 4,
                    marginLeft: 17,
                  }}
                />
                <View
                  style={{
                    marginBottom: 6,
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
                    {"Challenges"}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                    marginLeft: 17,
                  }}
                >
                  {"5"}
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
              onPress={() => {
                navigator.navigate("AchievementsStreak");
              }}
            >
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#2C26361A",
                  borderRadius: 16,
                  borderWidth: 1,
                  paddingVertical: 16,
                  paddingRight: 17,
                  marginRight: 10,
                  width: 170,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/h45ulfu6_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 16,
                    width: 19,
                    height: 19,
                    marginBottom: 4,
                    marginLeft: 17,
                  }}
                />
                <View
                  style={{
                    marginBottom: 6,
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
                    {"Streak"}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                    marginLeft: 17,
                  }}
                >
                  {"15 days"}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigator.navigate("AchievementsStore");
              }}
            >
              <View
                style={{
                  width: 170,
                  backgroundColor: "#FFFFFF",
                  borderColor: "#2C26361A",
                  borderRadius: 16,
                  borderWidth: 1,
                  paddingVertical: 16,
                  paddingRight: 17,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/eylydtsk_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 16,
                    width: 19,
                    height: 19,
                    marginBottom: 4,
                    marginLeft: 17,
                  }}
                />
                <View
                  style={{
                    marginBottom: 6,
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
                    {"XP Store"}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                    marginLeft: 17,
                  }}
                >
                  {"4,850 XP"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            marginBottom: 22,
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              color: "#2C2636",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {"Recent Achievements"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 48,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/pe2re068_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 47,
                height: 47,
                marginRight: 12,
              }}
            />
            <View
              style={{
                flex: 1,
                paddingRight: 43,
                marginRight: 12,
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
                  {"Listening Master"}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Complete 50 listening exercises"}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
              }}
            >
              {"Today"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
              marginBottom: 13,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/gg9bmptc_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 47,
                height: 47,
                marginRight: 12,
              }}
            />
            <View
              style={{
                flex: 1,
                marginRight: 12,
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
                  {"15-Day Streak"}
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
                  {"Study for 15 consecutive days"}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
              }}
            >
              {"Today"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/rqi8hgks_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 47,
                height: 47,
                marginRight: 12,
              }}
            />
            <View
              style={{
                flex: 1,
                marginRight: 12,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 1,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Word Collector"}
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
                  {"Learn 400 vocabulary words"}
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {"Yesterday"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
