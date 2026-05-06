import { ArrowLeft, Check, Eye, Funnel } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default () => {
  const navigation = useNavigation<any>();
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
          paddingTop: 19,
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
              marginLeft: 10
            }}
          >
            {"Skim & Scan Practice"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#A47551",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 13,
              marginRight: 10,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Eye size={20} color="#FFFFFF" />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {"Skimming"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 13,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Funnel size={20} color="#1A1635" />
            <Text
              style={{
                color: "#2C2636",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {"Scanning"}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#F6F0E9",
            borderColor: "#E8DBCF",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 16,
            paddingRight: 16,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              color: "#2C2636",
              fontSize: 14,
              fontWeight: "bold",
              marginBottom: 8,
              marginLeft: 16,
            }}
          >
            {"What is Skimming?"}
          </Text>
          <Text
            style={{
              color: "#6E6880",
              fontSize: 12,
              marginBottom: 8,
              marginLeft: 16,
            }}
          >
            {
              "Skimming is reading quickly to get the general idea of the text. You read only the key parts to understand what the passage is about without reading every word."
            }
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
              marginLeft: 16,
            }}
          >
            <Check size={18} style={{ marginRight: 8 }} color="#A47551" />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
              }}
            >
              {"Read titles and headings"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
              marginLeft: 16,
            }}
          >
            <Check size={18} style={{ marginRight: 8 }} color="#A47551" />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
              }}
            >
              {"First and last paragraphs"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 16,
            }}
          >
            <Check size={18} style={{ marginRight: 8 }} color="#A47551" />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
              }}
            >
              {"First sentence of each paragraph"}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 18,
              marginBottom: 17,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F6F1EE",
                borderRadius: 16,
                paddingVertical: 10,
                paddingHorizontal: 16,
                marginRight: 18,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"1"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                paddingBottom: 1,
                paddingRight: 27,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 1,
                }}
              >
                {"Business Email - Find main purpose"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"Target: 45 seconds"}
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
              paddingVertical: 17,
              paddingHorizontal: 18,
              marginBottom: 17,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F6F1EE",
                borderRadius: 16,
                paddingVertical: 10,
                paddingHorizontal: 15,
                marginRight: 18,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"2"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                paddingBottom: 1,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 1,
                }}
              >
                {"Article - Identify topic"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"Target: 45 seconds"}
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
              paddingVertical: 17,
              paddingHorizontal: 18,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F6F1EE",
                borderRadius: 16,
                paddingVertical: 10,
                paddingHorizontal: 15,
                marginRight: 18,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"3"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                paddingBottom: 1,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 1,
                }}
              >
                {"Report - Get key findings"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"Target: 45 seconds"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
