import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, Target, Clock, FileText, ChevronRight, GraduationCap, Zap } from "lucide-react-native";

export default () => {
  const navigation = useNavigation<any>();

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }

    navigation.navigate("Home");
  };

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
          paddingTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
            marginHorizontal: 20,
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
              marginRight: 12,
            }}
          >
            <ArrowLeft size={20} color="#2C2636" />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              paddingBottom: 1,
              marginRight: 12,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {"Practice Tests"}
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 2,
            }}
          >
            <Text
              style={{
                color: "#A47551",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"History"}
            </Text>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#D4A853", "#E07B54"]}
          style={{
            borderRadius: 16,
            paddingVertical: 20,
            marginBottom: 21,
            marginHorizontal: 20,
          }}
        >
            <GraduationCap size={24} style={{ marginLeft: 19, marginBottom: 5 }} color="#FFFFFF" />
          <View
            style={{
              alignSelf: "flex-start",
              marginBottom: 5,
              marginLeft: 19,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 20,
              }}
            >
              {"Test Center"}
            </Text>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              marginLeft: 19,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
              }}
            >
              {"Practice makes perfect"}
            </Text>
          </View>
        </LinearGradient>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("TestsMini")}
            activeOpacity={0.7}
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 16,
              marginRight: 12,
            }}
          >
            <View style={{ width: 39, height: 39, borderRadius: 12, backgroundColor: "#A47551", alignItems: "center", justifyContent: "center", marginBottom: 8, marginLeft: 16 }}>
              <Zap size={20} color="#FFFFFF" />
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                marginBottom: 2,
                marginLeft: 16,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Mini Test"}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                marginLeft: 16,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"30 min · 50 questions"}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("TestsFull")}
            activeOpacity={0.7}
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 16,
              paddingRight: 16,
            }}
          >
            <View style={{ width: 39, height: 39, borderRadius: 12, backgroundColor: "#E07B54", alignItems: "center", justifyContent: "center", marginBottom: 8, marginLeft: 16 }}>
              <FileText size={20} color="#FFFFFF" />
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                marginBottom: 2,
                marginLeft: 16,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Full Test"}
              </Text>
            </View>
            <View
              style={{
                marginLeft: 16,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"120 min · 200 questions"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 11,
            marginHorizontal: 20,
          }}
        >
          <View>
            <Text
              style={{
                color: "#2C2636",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {"Recent Tests"}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#A47551",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"View all"}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginBottom: 125,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
              marginBottom: 13,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 16,
                paddingVertical: 10,
                paddingHorizontal: 7,
                marginRight: 13,
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
                {"420"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                marginRight: 13,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Mini Test #5"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"Mar 5 · 28 min"}
                </Text>
              </View>
            </View>
            <ChevronRight size={20} color="#9B97A7" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
              marginBottom: 13,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 16,
                paddingVertical: 10,
                paddingHorizontal: 7,
                marginRight: 13,
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
                {"650"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                marginRight: 13,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Full Test #2"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"Mar 3 · 115 min"}
                </Text>
              </View>
            </View>
            <ChevronRight size={20} color="#9B97A7" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 16,
                paddingVertical: 10,
                paddingHorizontal: 7,
                marginRight: 13,
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
                {"390"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                marginRight: 13,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 1,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Mini Test #4"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"Mar 1 · 30 min"}
                </Text>
              </View>
            </View>
            <ChevronRight size={20} color="#9B97A7" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
