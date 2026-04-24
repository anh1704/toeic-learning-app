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
            {"Skim First"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#F7F0E5",
              borderColor: "#EFE0C5",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 21,
              marginBottom: 17,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 14,
                marginHorizontal: 18,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/sbcdjx14_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 12,
                }}
              />
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {"Essential Tip"}
              </Text>
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 14,
                marginLeft: 18,
                marginRight: 32,
              }}
            >
              {
                "Skimming is a reading technique to quickly understand the main idea and structure of a text without reading every word. This is crucial for TOEIC Reading section where time management is key."
              }
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#F0EEED",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 19,
              paddingRight: 18,
              marginBottom: 17,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 14,
                marginLeft: 18,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/uriot7rj_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Why This Matters"}
              </Text>
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 14,
                marginLeft: 18,
                width: 289,
              }}
            >
              {
                "Skimming helps you get an overview of the content before diving into specific questions, making it easier to locate answers quickly."
              }
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#F0EEED",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 18,
              marginBottom: 17,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/qbjllb8q_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"How To Do It"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#F3F0F7",
                  borderRadius: 16,
                  paddingVertical: 2,
                  paddingHorizontal: 7,
                  marginRight: 8,
                }}
              >
                <Text
                  style={{
                    color: "#8B6BAE",
                    fontSize: 10,
                  }}
                >
                  {"1"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {"Read the title, headings, and subheadings first"}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#F3F0F7",
                  borderRadius: 16,
                  paddingVertical: 2,
                  paddingHorizontal: 6,
                  marginRight: 8,
                }}
              >
                <Text
                  style={{
                    color: "#8B6BAE",
                    fontSize: 10,
                  }}
                >
                  {"2"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  marginRight: 11,
                }}
              >
                {"Scan the first and last sentences of each paragraph"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#F3F0F7",
                  borderRadius: 16,
                  paddingVertical: 2,
                  paddingHorizontal: 6,
                  marginRight: 8,
                }}
              >
                <Text
                  style={{
                    color: "#8B6BAE",
                    fontSize: 10,
                  }}
                >
                  {"3"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {"Look for key words, names, dates, and numbers"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#F3F0F7",
                  borderRadius: 16,
                  paddingVertical: 2,
                  paddingHorizontal: 6,
                  marginRight: 8,
                }}
              >
                <Text
                  style={{
                    color: "#8B6BAE",
                    fontSize: 10,
                  }}
                >
                  {"4"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {"Pay attention to formatting like bold or italics"}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#F3F0F7",
                  borderRadius: 16,
                  paddingVertical: 2,
                  paddingHorizontal: 6,
                  marginRight: 8,
                }}
              >
                <Text
                  style={{
                    color: "#8B6BAE",
                    fontSize: 10,
                  }}
                >
                  {"5"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  marginRight: 16,
                }}
              >
                {"Don't read every word - let your eyes move quickly"}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#F6F0E9",
              borderColor: "#E8DBD0",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
                marginHorizontal: 18,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/woaod52p_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Quick Practice"}
              </Text>
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
                marginBottom: 10,
                marginLeft: 18,
                marginRight: 40,
              }}
            >
              {
                "Try skimming this passage in 30 seconds and answer: What is this passage about?"
              }
            </Text>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#F0EEED",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
                paddingHorizontal: 14,
                marginBottom: 10,
                marginHorizontal: 18,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 12,
                }}
              >
                {
                  "The quarterly sales report indicates a significant increase in revenue across all departments. Marketing efforts focused on digital platforms have yielded exceptional results, with a 45% increase in online engagement. The sales team exceeded their targets by 20%, and customer satisfaction ratings have improved to 4.8 out of 5 stars."
                }
              </Text>
            </View>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#A47551",
                borderRadius: 12,
                paddingVertical: 8,
                marginHorizontal: 18,
              }}
              onPress={() => navigation.navigate("ReadingSkimScanPractice")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Try Practice Exercise"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
