import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
            marginBottom: 17,
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
            {"Rankings"}
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
            marginLeft: 20,
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
              padding: 16,
              marginBottom: 12,
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 18,
                }}
              >
                {"🥇"}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: 28138600,
                paddingHorizontal: 10,
                marginRight: 6,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#8B6BAE"]}
                style={{
                  borderRadius: 28138600,
                  paddingVertical: 9,
                  paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                  {"H"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 2,
                  marginRight: 45,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Phe Pham. "}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    marginRight: 10,
                  }}
                >
                  {"15600 XP"}
                </Text>
                <Text
                  style={{
                    color: "#8B6BAE",
                    fontSize: 12,
                  }}
                >
                  {"Diamond"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
              }}
            ></View>
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"800"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingHorizontal: 16,
              marginBottom: 13,
            }}
          >
            <View
              style={{
                marginTop: 23,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 18,
                }}
              >
                {"🥈"}
              </Text>
            </View>
            <View
              style={{
                marginVertical: 17,
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 28138600,
                  paddingHorizontal: 10,
                  marginRight: 6,
                }}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={["#A47551", "#8B6BAE"]}
                  style={{
                    borderRadius: 28138600,
                    paddingVertical: 9,
                    paddingHorizontal: 15,
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 14,
                    }}
                  >
                    {"M"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 19,
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginBottom: 2,
                  marginRight: 12,
                }}
              >
                {"Anh T. "}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {"12500 XP"}
              </Text>
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
                marginTop: 38,
              }}
            >
              {"Platinum"}
            </Text>
            <View
              style={{
                flex: 1,
              }}
            ></View>
            <View
              style={{
                marginTop: 27,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"750"}
              </Text>
            </View>
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
              paddingHorizontal: 13,
              marginBottom: 12,
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 18,
                }}
              >
                {"🥉"}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: 28138600,
                paddingHorizontal: 15,
              }}
              onPress={() => alert("Pressed!")}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#8B6BAE"]}
                style={{
                  borderRadius: 28138600,
                  paddingVertical: 9,
                  paddingHorizontal: 16,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                  {"L"}
                </Text>
              </LinearGradient>
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
                  }}
                >
                  {"Lan N. "}
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
                    marginRight: 8,
                  }}
                >
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                    }}
                  >
                    {"11800 XP"}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                    }}
                  >
                    {"Platinum"}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"680"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingHorizontal: 16,
              marginBottom: 13,
            }}
          >
            <View
              style={{
                marginTop: 16,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 18,
                }}
              >
                {"#4"}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: 28138600,
                paddingVertical: 9,
                paddingHorizontal: 15,
              }}
              onPress={() => alert("Pressed!")}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#8B6BAE"]}
                style={{
                  borderRadius: 28138600,
                  paddingVertical: 9,
                  paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                  {"A"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <View
              style={{
                marginRight: 10,
                paddingVertical: 13,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 2,
                  marginRight: 11,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Anh P. "}
                </Text>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {"11200 XP"}
              </Text>
            </View>
            <Text
              style={{
                color: "#D4A853",
                fontSize: 12,
                marginTop: 30,
              }}
            >
              {"Gold"}
            </Text>
            <View
              style={{
                flex: 1,
              }}
            ></View>
            <View
              style={{
                marginTop: 27,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"550"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#A475510D",
              borderColor: "#A47551",
              borderRadius: 16,
              borderWidth: 1,
              paddingHorizontal: 16,
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 18,
                }}
              >
                {"#5"}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: 28138600,
                paddingVertical: 13,
                paddingHorizontal: 13,
              }}
              onPress={() => alert("Pressed!")}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#8B6BAE"]}
                style={{
                  borderRadius: 28138600,
                  paddingVertical: 9,
                  paddingHorizontal: 15,
                  marginRight: 6,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                  {"Y"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                marginRight: 13,
              }}
            >
              <View
                style={{
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                  }}
                >
                  {"You (You)"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    marginRight: 10,
                  }}
                >
                  {"4850 XP"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Silver"}
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"500"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
