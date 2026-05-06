import {
  ArrowLeft,
  Check,
  Flame,
  Trophy,
  Brain,
  Medal,
  CheckCircle,
} from "lucide-react-native";
import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

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
          paddingTop: 18,
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
          <View>
            <Text
              style={{
                color: "#2C2636",
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              {"Milestones"}
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          {/* Timeline Container */}
          <View style={{ position: "relative" }}>
            {/* Vertical Line */}
            <View
              style={{
                position: "absolute",
                left: 12,
                top: 0,
                bottom: 0,
                width: 2,
                backgroundColor: "#5B9E91",
              }}
            />

            {/* Item 1: First 100 Words */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 18,
              }}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: "#5B9E91",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Check size={14} color="#FFFFFF" strokeWidth={3} />
              </View>
              <View style={{ flex: 1, paddingTop: 4 }}>
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 14,
                    marginBottom: 2,
                  }}
                >
                  {"First 100 Words"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Dec 2025"}
                </Text>
              </View>
            </View>

            {/* Item 2: Score 500+ */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 18,
              }}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: "#5B9E91",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Check size={14} color="#FFFFFF" strokeWidth={3} />
              </View>
              <View style={{ flex: 1, paddingTop: 4 }}>
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 14,
                    marginBottom: 2,
                  }}
                >
                  {"Score 500+"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Jan 2026"}
                </Text>
              </View>
            </View>

            {/* Item 3: Score 600+ */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 18,
              }}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: "#5B9E91",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Check size={14} color="#FFFFFF" strokeWidth={3} />
              </View>
              <View style={{ flex: 1, paddingTop: 4 }}>
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 14,
                    marginBottom: 2,
                  }}
                >
                  {"Score 600+"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Feb 2026"}
                </Text>
              </View>
            </View>

            {/* Item 4: 30-Day Streak */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 18,
              }}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: "#E8E3D8",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 12,
                  }}
                >
                  {"4"}
                </Text>
              </View>
              <View style={{ flex: 1, paddingTop: 4 }}>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginBottom: 2,
                  }}
                >
                  {"30-Day Streak"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"15/30"}
                </Text>
              </View>
            </View>

            {/* Item 5: Score 700+ */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 18,
              }}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: "#E8E3D8",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 12,
                  }}
                >
                  {"5"}
                </Text>
              </View>
              <View style={{ flex: 1, paddingTop: 4 }}>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginBottom: 2,
                  }}
                >
                  {"Score 700+"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"650/700"}
                </Text>
              </View>
            </View>

            {/* Item 6: Master 500 Words */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 18,
              }}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: "#E8E3D8",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 12,
                  }}
                >
                  {"6"}
                </Text>
              </View>
              <View style={{ flex: 1, paddingTop: 4 }}>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginBottom: 2,
                  }}
                >
                  {"Master 500 Words"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"450/500"}
                </Text>
              </View>
            </View>

            {/* Item 7: Score 800+ */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 18,
              }}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: "#E8E3D8",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 12,
                    fontWeight: "600",
                  }}
                >
                  {"7"}
                </Text>
              </View>
              <View style={{ flex: 1, paddingTop: 4 }}>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginBottom: 2,
                  }}
                >
                  {"Score 800+"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"650/800"}
                </Text>
              </View>
            </View>

            {/* Item 8: Complete All Tests */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: "#E8E3D8",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 12,
                  }}
                >
                  {"8"}
                </Text>
              </View>
              <View style={{ flex: 1, paddingTop: 4 }}>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginBottom: 2,
                  }}
                >
                  {"Complete All Tests"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"5/20"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
