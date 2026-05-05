import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Gauge, Volume, Volume2 } from "lucide-react-native";
export default () => {
  const navigation = useNavigation<any>();
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
          paddingTop: 19,
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.pop()}
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
                color: "#000000",
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              {"Audio Control"}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            paddingVertical: 23,
            marginBottom: 33,
            marginHorizontal: 19,
          }}
        >
          <View
            style={{
              alignItems: "center",
              marginBottom: 16,
              marginHorizontal: 29,
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 8,
              }}
            >
              <Volume2 size={40} color="#A47551" />
            </View>
            <Text
              style={{
                color: "#000000",
                fontSize: 14,
                marginBottom: 8,
              }}
            >
              {"Playback Speed"}
            </Text>
            <View
              style={{
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 30,
                }}
              >
                {"1x"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 23,
              marginHorizontal: 31,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#F0EBE4",
                borderRadius: 16,
                paddingVertical: 7,
                marginRight: 18,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"0.5x"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#F0EBE4",
                borderRadius: 16,
                paddingVertical: 7,
                marginRight: 18,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"0.75x"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#A47551",
                borderRadius: 16,
                paddingVertical: 7,
                marginRight: 18,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"1x"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#F0EBE4",
                borderRadius: 16,
                paddingVertical: 7,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"1.25x"}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 25,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#F0EBE4",
                  borderRadius: 16,
                  paddingVertical: 7,
                  paddingHorizontal: 17,
                  marginRight: 18,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"1.5x"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#A47551",
                  borderRadius: 16,
                  paddingVertical: 7,
                  paddingHorizontal: 22,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"2x"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginBottom: 20,
              marginHorizontal: 29,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 14,
                fontWeight: "bold",
                marginBottom: 6,
              }}
            >
              {"Volume"}
            </Text>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 16,
              }}
            >
              <View
                style={{
                  width: 185,
                  height: 7,
                  backgroundColor: "#A47551",
                  borderRadius: 16,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              marginLeft: 31,
              marginRight: 20,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 14,
                fontWeight: "bold",
                marginBottom: 6,
              }}
            >
              {"Bass Boost"}
            </Text>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 16,
              }}
            >
              <View
                style={{
                  width: 185,
                  height: 7,
                  backgroundColor: "#8B6BAE",
                  borderRadius: 16,
                }}
              ></View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#F6F0E9",
            borderRadius: 16,
            paddingVertical: 17,
            paddingHorizontal: 25,
            marginBottom: 176,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              marginBottom: 4,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 14,
              }}
            >
              {"Tip"}
            </Text>
          </View>
          <View
            style={{
              paddingTop: 2,
              paddingRight: 0,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
              }}
            >
              {
                "Start with 0.75x speed for difficult passages, then gradually increase to 1.25x to train your ears."
              }
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
