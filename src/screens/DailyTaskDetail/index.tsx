import {
  ArrowLeft,
  Headphones,
  Clock,
  Zap,
  Gift,
  Check,
  Lightbulb,
  Ear,
  Flame,
  Users,
  MapPin,
  Play,
  Star,
  Trophy,
  Info,
} from "lucide-react-native";
import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
export default () => {
  const navigation = useNavigation();
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
              }}
            >
              {"Task Detail"}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#A47551",
            borderRadius: 16,
            paddingVertical: 20,
            paddingHorizontal: 19,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
            }}
          >
            <View
              style={{
                width: 43,
                height: 45,
                borderRadius: 12,
                backgroundColor: "#ffffff8f",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Headphones size={20} color="#FFFFFF" />
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 18,
                  }}
                >
                  {"Practice Listening Part 1"}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                  {"Answer 10 photo description questions"}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 9,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                  {"Progress: 6/10"}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                  {"60%"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#FFFFFF33",
                borderRadius: 41877300,
              }}
            >
              <View
                style={{
                  width: 199,
                  height: 7,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 41877300,
                }}
              ></View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
            marginLeft: 20,
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
              marginRight: 10,
            }}
          >
            <Clock size={19} color="#E07B54" style={{ marginBottom: 4 }} />
            <View
              style={{
                alignSelf: "center",
                marginBottom: 1,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 12,
                }}
              >
                {"15 minutes"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 10,
                }}
              >
                {"Time Limit"}
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
              marginRight: 10,
            }}
          >
            <Star size={19} color="#D4A853" style={{ marginBottom: 4 }} />
            <View
              style={{
                marginBottom: 1,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 12,
                }}
              >
                {"Intermediate"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 10,
                }}
              >
                {"Difficulty"}
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
            <Zap size={19} color="#D4A853" style={{ marginBottom: 4 }} />
            <View
              style={{
                marginBottom: 1,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 12,
                }}
              >
                {"50 XP"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 10,
                }}
              >
                {"Reward"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            padding: 17,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              marginBottom: 13,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {"Requirements"}
            </Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 13,
              }}
            >
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderRadius: 41877300,
                  paddingVertical: 2,
                  paddingHorizontal: 6,
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 10,
                  }}
                >
                  {"6"}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 11,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Complete 10 questions"}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"6/10"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <View
                style={{
                  backgroundColor: "#5B9E91",
                  borderRadius: 16,
                  padding: 2,
                  marginRight: 12,
                }}
              >
                <Check size={13} color="#FFFFFF" />
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 11,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Accuracy above 70%"}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"75%"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderRadius: 41877300,
                  paddingVertical: 2,
                  paddingHorizontal: 6,
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 10,
                  }}
                >
                  {"?"}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Finish within time limit"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#D4A8531A", "#E07B540D"]}
          style={{
            borderColor: "#D4A8534D",
            borderRadius: 16,
            borderWidth: 1,
            padding: 17,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
            }}
          >
            <Trophy size={19} color="#D4A853" style={{ marginRight: 8 }} />
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {"Rewards"}
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 9,
              }}
            >
              <View
                style={{
                  borderColor: "#D4A853",
                  borderRadius: 16,
                  padding: 2,
                  marginRight: 12,
                  borderWidth: 1,
                }}
              >
                <Check size={10} color="#D4A853" />
              </View>
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"50 XP"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 9,
              }}
            >
              <View
                style={{
                  borderColor: "#D4A853",
                  borderRadius: 16,
                  padding: 2,
                  marginRight: 12,
                  borderWidth: 1,
                }}
              >
                <Check size={10} color="#D4A853" />
              </View>
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Listening skill +2"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderColor: "#D4A853",
                  borderRadius: 16,
                  padding: 2,
                  marginRight: 12,
                  borderWidth: 1,
                }}
              >
                <Check size={10} color="#D4A853" />
              </View>
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Daily streak maintained"}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            padding: 17,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
            }}
          >
            <Lightbulb size={19} color="#8B6BAE" style={{ marginRight: 8 }} />
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {"Pro Tips"}
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 9,
              }}
            >
              <Info size={16} color="#8B6BAE" style={{ marginRight: 8 }} />
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"Listen carefully to verb tenses"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 9,
              }}
            >
              <Info size={16} color="#8B6BAE" style={{ marginRight: 8 }} />
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"Pay attention to the number of people"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Info size={16} color="#8B6BAE" style={{ marginRight: 8 }} />
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"Notice the location and setting"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#A47551",
            borderRadius: 16,
            paddingVertical: 14,
            marginBottom: 5,
            marginLeft: 20,
          }}
          onPress={() => alert("Pressed!")}
        >
          <Play size={19} color="#FFFFFF" style={{ marginRight: 4 }} />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            {"Start Task"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
