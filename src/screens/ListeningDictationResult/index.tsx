import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";

type ListeningDictationResultProps = NativeStackScreenProps<
  RootStackParamList,
  "ListeningDictationResult"
>;

export default (props: ListeningDictationResultProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
      edges={["top", "left", "right"]}
    >
      <ScrollView
        scrollEnabled={false}
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
            marginBottom: 19,
            marginLeft: 19,
          }}
        >
          <TouchableOpacity onPress={() => props.navigation.goBack()}
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
              {"Results"}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: "100%", // Đảm bảo chiếm hết chiều ngang
            paddingHorizontal: 20, // Tạo khoảng cách với 2 mép màn hình
            marginBottom: 13,
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#5B9E91", "#A47551"]}
            style={{
              width: "100%", // Giãn đều khung gradient
              alignItems: "center",
              borderRadius: 16,
              paddingVertical: 25, // Tăng padding dọc cho thoáng
            }}
          >
            <View>
              <View
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: "#FFFFFF33",
                  borderRadius: 38,
                  paddingVertical: 20,
                  paddingHorizontal: 21,
                  marginLeft: 12,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 24,
                  }}
                >
                  {"0%"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 20,
                }}
              >
                {"Try Again!"}
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  marginLeft: 2,
                }}
              >
                {"0% accuracy"}
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <View
          style={{
            paddingVertical: 16,
            marginBottom: 23,
            marginHorizontal: 20,
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: "#928D9F",
              fontSize: 13,
              marginBottom: 12,
            }}
          >
            {"Correct Answer"}
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 16,
            }}
          >
            {"The weather is sunny and warm."}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 32,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginBottom: 11,
            }}
          >
            <View
              style={{
                backgroundColor: "#E07B5433",
                borderColor: "#E07B54",
                borderRadius: 100,
                borderWidth: 1,
                paddingVertical: 8,
                paddingHorizontal: 12,
                marginRight: 6,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#E07B54",
                  fontSize: 12,
                  textDecorationLine: "line-through",
                }}
              >
                {"the"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#5B9E9133",
                borderColor: "#5B9E91",
                borderRadius: 100,
                borderWidth: 1,
                paddingVertical: 8,
                paddingHorizontal: 12,
                marginRight: 6,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#5B9E91",
                  fontSize: 12,
                }}
              >
                {"weather"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#E07B5433",
                borderColor: "#E07B54",
                borderRadius: 100,
                borderWidth: 1,
                paddingVertical: 8,
                paddingHorizontal: 12,
                marginRight: 6,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#E07B54",
                  fontSize: 12,
                  textDecorationLine: "line-through",
                }}
              >
                {"is"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#E07B5433",
                borderColor: "#E07B54",
                borderRadius: 100,
                borderWidth: 1,
                paddingVertical: 8,
                paddingHorizontal: 12,
                marginRight: 6,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#E07B54",
                  fontSize: 12,
                  textDecorationLine: "line-through",
                }}
              >
                {"sunny"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View
              style={{
                backgroundColor: "#5B9E9133",
                borderColor: "#5B9E91",
                borderRadius: 100,
                borderWidth: 1,
                paddingVertical: 8,
                paddingHorizontal: 12,
                marginRight: 6,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#5B9E91",
                  fontSize: 12,
                }}
              >
                {"and"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#5B9E9133",
                borderColor: "#5B9E91",
                borderRadius: 100,
                borderWidth: 1,
                paddingVertical: 8,
                paddingHorizontal: 12,
                marginRight: 6,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#5B9E91",
                  fontSize: 12,
                }}
              >
                {"warm"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#F0EBE4",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 16,
              marginRight: 44,
            }}
            onPress={() => props.navigation.goBack()}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Try Again"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#A47551",
              borderColor: "#F0EBE4",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 16,
            }}
            onPress={() => props.navigation.pop(2)}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Done"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
