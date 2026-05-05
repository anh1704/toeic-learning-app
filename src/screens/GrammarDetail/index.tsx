import { ArrowLeft, Bookmark, Check, Lightbulb } from "lucide-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  const navigation = useNavigation<any>();
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
          paddingTop: 19,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
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
          <Text
            style={{
              color: "#2C2636",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            {"Past Continuous"}
          </Text>
          <View
            style={{
              flex: 1,
            }}
          ></View>
          <View
            style={{
              width: 38,
              height: 38,
              borderRadius: 18,
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Bookmark size={20} color="#000000" />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#EAE9EB",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 19,
            marginBottom: 21,
          }}
        >
          <Text
            style={{
              color: "#2C2636",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 8,
              marginLeft: 16,
            }}
          >
            {"Structure"}
          </Text>
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "#FAF8F6",
              borderRadius: 12,
              paddingVertical: 10,
              marginBottom: 8,
              marginHorizontal: 16,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 14,
              }}
            >
              {"Subject + was/were + V-ing"}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: "#6E6880",
              fontSize: 14,
              marginLeft: 16,
              marginRight: 29,
            }}
          >
            {
              "Used to describe actions that were in progress at a specific time in the past."
            }
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#EAE9EB",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 17,
            marginBottom: 21,
          }}
        >
          <Text
            style={{
              color: "#2C2636",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 5,
              marginLeft: 16,
            }}
          >
            {"Examples"}
          </Text>
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 9,
              marginLeft: 16,
            }}
          >
            <Check size={16} color="#5B9E91" style={{ marginRight: 8 }} />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 14,
              }}
            >
              {"I was working when you called."}
            </Text>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 9,
              marginLeft: 16,
            }}
          >
            <Check size={16} color="#5B9E91" style={{ marginRight: 8 }} />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 14,
              }}
            >
              {"They were having a meeting at 3 PM."}
            </Text>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 16,
            }}
          >
            <Check size={16} color="#5B9E91" style={{ marginRight: 8 }} />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 14,
              }}
            >
              {"She was studying while he was cooking."}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#EAE9EB",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 17,
            paddingRight: 16,
            marginBottom: 21,
          }}
        >
          <Text
            style={{
              color: "#2C2636",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 7,
              marginLeft: 16,
            }}
          >
            {"Key Points"}
          </Text>
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              marginBottom: 8,
              marginLeft: 16,
            }}
          >
            <Lightbulb size={16} color="#D6AD5D" style={{ marginRight: 8 }} />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
                width: 248,
              }}
            >
              {
                'Often used with "when" and "while" to show interrupted or simultaneous actions.'
              }
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 16,
            }}
          >
            <Lightbulb size={16} color="#D6AD5D" style={{ marginRight: 8 }} />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
                flex: 1,
              }}
            >
              {'Use "was" with I, he, she, it. Use "were" with you, we, they.'}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 48,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#A47551",
              borderRadius: 16,
              paddingVertical: 13,
              marginRight: 12,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {"Practice"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#8B6BAE",
              borderRadius: 16,
              paddingVertical: 13,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {"Quiz"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
