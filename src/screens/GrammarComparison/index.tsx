import { ArrowLeft, Brain, ChevronRight } from "lucide-react-native";
import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
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
            {"Grammar Comparison"}
          </Text>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#A47551", "#8B6BAE"]}
          style={{
            borderRadius: 16,
            paddingVertical: 20,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 6,
              marginLeft: 18,
            }}
          >
            <Brain size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
              }}
            >
              {"Compare & Learn"}
            </Text>
          </View>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 18,
              marginBottom: 6,
              marginLeft: 18,
            }}
          >
            {"Confusing Grammar Points"}
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              marginLeft: 18,
            }}
          >
            {"Master the differences between similar structures"}
          </Text>
        </LinearGradient>
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
              padding: 18,
              marginBottom: 15,
            }}
          >
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 18,
                backgroundColor: "#A47551",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 18,
              }}
            >
              <Brain size={24} color="#FFFFFF" />
            </View>
            <View
              style={{
                paddingRight: 29,
                marginRight: 18,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 2,
                }}
              >
                {"Present Perfect vs Past Simple"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 9,
                }}
              >
                {"Understand when to use each tense"}
              </Text>
              <View
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: "#F0EBE4",
                  borderRadius: 8,
                  paddingVertical: 2,
                  paddingHorizontal: 8,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"Intermediate"}
                </Text>
              </View>
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
              marginBottom: 15,
            }}
          >
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 18,
                backgroundColor: "#8B6BAE",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 18,
              }}
            >
              <Brain size={24} color="#FFFFFF" />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 18,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 2,
                }}
              >
                {"Make vs Do"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 9,
                }}
              >
                {"Common collocations and usage"}
              </Text>
              <View
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: "#F0EBE4",
                  borderRadius: 8,
                  paddingVertical: 2,
                  paddingHorizontal: 8,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"Beginner"}
                </Text>
              </View>
            </View>
            <ChevronRight size={20} color="#6E6880" />
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
              marginBottom: 15,
            }}
          >
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 18,
                backgroundColor: "#E07B54",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 18,
              }}
            >
              <Brain size={24} color="#FFFFFF" />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 18,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 2,
                }}
              >
                {"Gerund vs Infinitive"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 9,
                }}
              >
                {"Which verbs take which form"}
              </Text>
              <View
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: "#F0EBE4",
                  borderRadius: 8,
                  paddingVertical: 2,
                  paddingHorizontal: 8,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"Advanced"}
                </Text>
              </View>
            </View>
            <ChevronRight size={20} color="#6E6880" />
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
              marginBottom: 15,
            }}
          >
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 18,
                backgroundColor: "#5B9E91",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 18,
              }}
            >
              <Brain size={24} color="#FFFFFF" />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 18,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 2,
                }}
              >
                {"Few vs Little"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 9,
                }}
              >
                {"Countable and uncountable nouns"}
              </Text>
              <View
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: "#F0EBE4",
                  borderRadius: 8,
                  paddingVertical: 2,
                  paddingHorizontal: 8,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"Intermediate"}
                </Text>
              </View>
            </View>
            <ChevronRight size={20} color="#6E6880" />
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
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 18,
                backgroundColor: "#D4A853",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 18,
              }}
            >
              <Brain size={24} color="#FFFFFF" />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 18,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 2,
                }}
              >
                {"Say vs Tell"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 9,
                }}
              >
                {"Reporting verbs differences"}
              </Text>
              <View
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: "#F0EBE4",
                  borderRadius: 8,
                  paddingVertical: 2,
                  paddingHorizontal: 8,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"Beginner"}
                </Text>
              </View>
            </View>
            <ChevronRight size={20} color="#6E6880" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
