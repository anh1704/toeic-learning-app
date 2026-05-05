import { ArrowLeft, Lightbulb, Volume2, Mic, Trophy, RotateCcw, ArrowRight, AlertCircle } from "lucide-react-native";
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
              marginRight: 10,
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
            {"Pronunciation Practice"}
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
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 31,
                  height: 5,
                  backgroundColor: "#A47551",
                  borderRadius: 41877300,
                  marginRight: 6,
                }}
              ></View>
              <View
                style={{
                  width: 31,
                  height: 5,
                  backgroundColor: "#F0EBE4",
                  borderRadius: 41877300,
                  marginRight: 7,
                }}
              ></View>
              <View
                style={{
                  width: 31,
                  height: 5,
                  backgroundColor: "#F0EBE4",
                  borderRadius: 41877300,
                }}
              ></View>
            </View>
            <View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                }}
              >
                {"1/3"}
              </Text>
            </View>
          </View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#8B6BAE1A", "#A475511A"]}
            style={{
              borderColor: "#8B6BAE4D",
              borderRadius: 16,
              borderWidth: 1,
              paddingTop: 25,
              paddingBottom: 42,
              paddingHorizontal: 25,
              marginBottom: 16,
            }}
          >
            <View
              style={{
                alignItems: "center",
                marginBottom: 9,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 30,
                  }}
                >
                  {"negotiate"}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                marginBottom: 13,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 18,
                  }}
                >
                  {"/nɪˈɡoʊʃieɪt/"}
                </Text>
                <Text
                  style={{
                    position: "absolute",
                    bottom: -7,
                    left: -51,
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#2C26361A",
                    borderRadius: 12,
                    borderWidth: 1,
                    paddingVertical: 6,
                    paddingHorizontal: 13,
                    marginRight: 8,
                  }}
                  onPress={() => alert("Pressed!")}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                    }}
                  >
                    {"ne"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#2C26361A",
                    borderRadius: 12,
                    borderWidth: 1,
                    paddingVertical: 6,
                    paddingHorizontal: 14,
                    marginRight: 9,
                  }}
                  onPress={() => alert("Pressed!")}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                    }}
                  >
                    {"go"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#2C26361A",
                    borderRadius: 12,
                    borderWidth: 1,
                    paddingVertical: 6,
                    paddingHorizontal: 14,
                    marginRight: 9,
                  }}
                  onPress={() => alert("Pressed!")}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                    }}
                  >
                    {"ti"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#2C26361A",
                    borderRadius: 12,
                    borderWidth: 1,
                    paddingVertical: 6,
                    paddingHorizontal: 12,
                  }}
                  onPress={() => alert("Pressed!")}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                    }}
                  >
                    {"ate"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#D4A8531A",
                borderColor: "#D4A8534D",
                borderRadius: 16,
                borderWidth: 1,
                padding: 13,
                marginBottom: 17,
                marginRight: 14,
                width: "100%",
              }}
            >
              <AlertCircle size={15} color="#D4A853" style={{ marginRight: 8 }} />
              <View
                style={{
                  flex: 1,
                  marginRight: 21,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 12,
                  }}
                >
                  {"Stress on the second syllable: ne-GO-ti-ate"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 9,
                marginRight: 14,
              }}
            >
              <Volume2 size={15} color="#A47551" style={{ marginRight: 8 }} />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Listen to pronunciation"}
                </Text>
              </View>
            </View>
          </LinearGradient>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingTop: 25,
              marginBottom: 16,
            }}
          >
            <View
              style={{
                marginBottom: 17,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                }}
              >
                {"Tap the mic to practice"}
              </Text>
            </View>
            <View
              style={{
                width: 79,
                height: 79,
                borderRadius: 40,
                borderColor: "#A47551",
                borderWidth: 2,
                backgroundColor: "#A475511A",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 41,
              }}
            >
              <Mic size={35} color="#A47551" />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                padding: 13,
                marginRight: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <Trophy size={15} color="#A47551" style={{ marginRight: 4 }} />
                <View>
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                    }}
                  >
                    {"Best Score"}
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 20,
                  }}
                >
                  {"0%"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                padding: 13,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <RotateCcw size={15} color="#A47551" style={{ marginRight: 4 }} />
                <View>
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                    }}
                  >
                    {"Attempts"}
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 20,
                  }}
                >
                  {"0"}
                </Text>
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
              paddingVertical: 11,
              marginBottom: 1,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "bold",
                marginRight: 9,
              }}
            >
              {"Next Word "}
            </Text>
            <ArrowRight size={15} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
