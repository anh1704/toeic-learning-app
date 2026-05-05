import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import {
  ArrowLeft,
  Headphones,
  Star,
  BookOpen,
  Flame,
  Trophy,
  BookMarked,
  Lock,
  Zap,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
export default () => {
  const navigator = useNavigation();
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
            style={{
              width: 37,
              height: 37,
              borderRadius: 16,
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
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
              }}
            >
              {"Badges"}
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
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 16,
            marginBottom: 22,
            marginHorizontal: 19,
          }}
        >
          <View
            style={{
              alignItems: "center",
              marginBottom: 1,
              marginHorizontal: 17,
            }}
          >
            <Text
              style={{
                color: "#D4A853",
                fontSize: 24,
              }}
            >
              {"6 / 12"}
            </Text>
          </View>
          <Text
            style={{
              color: "#6E6880",
              fontSize: 12,
            }}
          >
            {"Badges earned"}
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
            marginHorizontal: 21,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
                marginRight: 13,
              }}
            >
              <View
                style={{
                  width: 47,
                  height: 47,
                  borderRadius: 16,
                  backgroundColor: "#D4A853",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <Star size={26} color="#FFFFFF" fill="#D4A853" />
              </View>
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"First Steps"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
                marginRight: 13,
              }}
            >
              <View
                style={{
                  width: 47,
                  height: 47,
                  borderRadius: 16,
                  backgroundColor: "#A47551",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <Headphones size={26} color="#FFFFFF" />
              </View>
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Listening Pro"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
              }}
            >
              <View
                style={{
                  width: 47,
                  height: 47,
                  borderRadius: 16,
                  backgroundColor: "#5B9E91",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <BookOpen size={26} color="#FFFFFF" />
              </View>
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Word Master"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
                marginRight: 13,
              }}
            >
              <View
                style={{
                  width: 47,
                  height: 47,
                  borderRadius: 16,
                  backgroundColor: "#E07B54",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <Flame size={26} color="#FFFFFF" />
              </View>
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Streak King"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
                marginRight: 13,
              }}
            >
              <View
                style={{
                  width: 47,
                  height: 47,
                  borderRadius: 16,
                  backgroundColor: "#8B6BAE",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <Zap size={26} color="#FFFFFF" />
              </View>
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Quiz Champ"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
              }}
            >
              <View
                style={{
                  width: 47,
                  height: 47,
                  borderRadius: 16,
                  backgroundColor: "#A47551",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <BookMarked size={26} color="#FFFFFF" />
              </View>
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Book Worm"}
                </Text>
              </View>
            </View>
          </View>
          {/* Row 3 - Locked */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            {[
              { label: "Grammar Guru" },
              { label: "Perfect Score" },
              { label: "Endurance" },
            ].map((badge, i) => (
              <View
                key={badge.label}
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#FAF6F1",
                  borderColor: "#2C26361A",
                  borderRadius: 16,
                  borderWidth: 1,
                  paddingVertical: 13,
                  marginRight: i < 2 ? 13 : 0,
                }}
              >
                <View
                  style={{
                    width: 47,
                    height: 47,
                    borderRadius: 16,
                    backgroundColor: "#F0EBE4",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 8,
                  }}
                >
                  <Lock size={24} color="#A09AB0" />
                </View>
                <Text
                  style={{
                    color: "#A09AB0",
                    fontSize: 10,
                  }}
                >
                  {badge.label}
                </Text>
              </View>
            ))}
          </View>
          {/* Row 4 - Locked */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {[
              { label: "Top 10" },
              { label: "Vocabulary King" },
              { label: "Social Star" },
            ].map((badge, i) => (
              <View
                key={badge.label}
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#FAF6F1",
                  borderColor: "#2C26361A",
                  borderRadius: 16,
                  borderWidth: 1,
                  paddingVertical: 13,
                  marginRight: i < 2 ? 13 : 0,
                }}
              >
                <View
                  style={{
                    width: 47,
                    height: 47,
                    borderRadius: 16,
                    backgroundColor: "#F0EBE4",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 8,
                  }}
                >
                  <Lock size={24} color="#A09AB0" />
                </View>
                <Text
                  style={{
                    color: "#A09AB0",
                    fontSize: 10,
                  }}
                >
                  {badge.label}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
