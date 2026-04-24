import { ArrowLeft } from "lucide-react-native";
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
          paddingTop: 5,
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
          <Text
            style={{
              color: "#2C2636",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {"Reading Tips"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ReadingTipDetail")}
            activeOpacity={0.7}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              padding: 18,
              marginBottom: 17,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/pzqo2bnk_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 44,
                height: 44,
                marginRight: 18,
              }}
            />
            <View
              style={{
                flex: 1,
                paddingRight: 12,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginBottom: 4,
                }}
              >
                {"Skim First"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {
                  "Quickly scan the passage to understand the main idea before reading questions."
                }
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              padding: 18,
              marginBottom: 17,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/d11ptren_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 44,
                height: 44,
                marginRight: 18,
              }}
            />
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginBottom: 4,
                }}
              >
                {"Time Management"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {
                  "Spend about 1 minute per question. Don't get stuck on difficult ones."
                }
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              padding: 18,
              marginBottom: 17,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/frpbh1a4_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 44,
                height: 44,
                marginRight: 18,
              }}
            />
            <View
              style={{
                flex: 1,
                paddingRight: 15,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginBottom: 4,
                }}
              >
                {"Key Words"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {
                  "Underline or note key words in questions to find answers faster."
                }
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              padding: 18,
              marginBottom: 17,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/w28568wy_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 44,
                height: 44,
                marginRight: 18,
              }}
            />
            <View
              style={{
                flex: 1,
                paddingRight: 36,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginBottom: 4,
                }}
              >
                {"Context Clues"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {
                  "Use surrounding words to figure out the meaning of unfamiliar vocabulary."
                }
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              padding: 18,
              marginBottom: 17,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/9iwtdofn_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 44,
                height: 44,
                marginRight: 18,
              }}
            />
            <View
              style={{
                flex: 1,
                paddingRight: 33,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginBottom: 4,
                }}
              >
                {"Read Questions First"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {
                  "For Part 7, read the questions before the passage to know what to look for."
                }
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              padding: 18,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/a5exit9o_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 44,
                height: 44,
                marginRight: 18,
              }}
            />
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginBottom: 4,
                }}
              >
                {"Eliminate Wrong Answers"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {
                  "If unsure, eliminate obviously wrong answers to improve your chances."
                }
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
