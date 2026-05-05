import { ArrowLeft, Brain } from "lucide-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
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
          paddingTop: 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 21,
            marginHorizontal: 20,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 17,
            marginHorizontal: 10,
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
            {"Grammar List"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 48,
            marginHorizontal: 20,
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#E07B54", "#A47551"]}
            style={{
              borderRadius: 16,
              paddingVertical: 20,
              paddingRight: 18,
              marginBottom: 21,
            }}
          >
            <Brain
              size={32}
              color="#FFFFFF"
              style={{ marginLeft: 18, paddingBottom: 4 }}
            />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 20,
                marginBottom: 4,
                marginLeft: 18,
              }}
            >
              {"Grammar Mastery"}
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                marginBottom: 9,
                marginLeft: 18,
              }}
            >
              {"52% overall progress"}
            </Text>
            <View
              style={{
                backgroundColor: "#BF9175",
                borderRadius: 16,
                marginLeft: 18,
              }}
            >
              <View
                style={{
                  width: 175,
                  height: 8,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 16,
                }}
              ></View>
            </View>
          </LinearGradient>
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 21,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#A47551",
                borderColor: "#EBEBEC",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 8,
                paddingHorizontal: 12,
                marginRight: 8,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"All"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#EBEBEC",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 8,
                paddingHorizontal: 12,
                marginRight: 8,
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
                {"In Progress"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#EBEBEC",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 8,
                paddingHorizontal: 12,
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
                {"Completed"}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("GrammarLessons")}
              activeOpacity={0.7}
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
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: "#FDF8F6",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 14,
                  }}
                >
                  <Brain size={24} color="#E07B54" />
                </View>
                <View
                  style={{
                    flex: 1,
                    marginRight: 18,
                  }}
                >
                  <View
                    style={{
                      alignSelf: "flex-start",
                      marginBottom: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: "#2C2636",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {"Verb Tenses"}
                    </Text>
                    <Text
                      style={{
                        color: "#6E6880",
                        fontSize: 12,
                        fontWeight: "bold",
                        marginRight: 22,
                      }}
                    >
                      {"12 lessons"}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FDF8F6",
                      borderRadius: 16,
                    }}
                  >
                    <View
                      style={{
                        width: 160,
                        height: 6,
                        backgroundColor: "#E07B54",
                        borderRadius: 16,
                      }}
                    ></View>
                  </View>
                </View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"75%"}
                </Text>
              </View>
            </TouchableOpacity>
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
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: "#FDF8F6",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 14,
                }}
              >
                <Brain size={24} color="#E07B54" />
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 18,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {"Parts of Speech"}
                  </Text>
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                      marginRight: 43,
                    }}
                  >
                    {"10 lessons"}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FDF8F6",
                    borderRadius: 16,
                  }}
                >
                  <View
                    style={{
                      width: 123,
                      height: 6,
                      backgroundColor: "#E07B54",
                      borderRadius: 16,
                    }}
                  ></View>
                </View>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"60%"}
              </Text>
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
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: "#FDF8F6",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 14,
                }}
              >
                <Brain size={24} color="#E07B54" />
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 18,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {"Sentence Structure"}
                  </Text>
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                      marginRight: 73,
                    }}
                  >
                    {"8 lessons"}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FDF9F6",
                    borderRadius: 16,
                  }}
                >
                  <View
                    style={{
                      width: 95,
                      height: 6,
                      backgroundColor: "#E07B54",
                      borderRadius: 16,
                    }}
                  ></View>
                </View>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"45%"}
              </Text>
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
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: "#FDF8F6",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 14,
                }}
              >
                <Brain size={24} color="#E07B54" />
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 18,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {"Conditionals"}
                  </Text>
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                      marginRight: 28,
                    }}
                  >
                    {"6 lessons"}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FDF9F6",
                    borderRadius: 16,
                  }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 6,
                      backgroundColor: "#E07B54",
                      borderRadius: 16,
                    }}
                  ></View>
                </View>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"30%"}
              </Text>
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
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: "#FDF8F6",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 14,
                }}
              >
                <Brain size={24} color="#E07B54" />
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 18,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {"Passive Voice"}
                  </Text>
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                      marginRight: 36,
                    }}
                  >
                    {"5 lessons"}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FDF9F6",
                    borderRadius: 16,
                  }}
                >
                  <View
                    style={{
                      width: 167,
                      height: 6,
                      backgroundColor: "#E07B54",
                      borderRadius: 16,
                    }}
                  ></View>
                </View>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"80%"}
              </Text>
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
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: "#FDF8F6",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 14,
                }}
              >
                <Brain size={24} color="#E07B54" />
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 18,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {"Relative Clauses"}
                  </Text>
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                      marginRight: 54,
                    }}
                  >
                    {"7 lessons"}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FDF9F6",
                    borderRadius: 16,
                  }}
                >
                  <View
                    style={{
                      width: 36,
                      height: 6,
                      backgroundColor: "#E07B54",
                      borderRadius: 16,
                    }}
                  ></View>
                </View>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"20%"}
              </Text>
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
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: "#FDF8F6",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 14,
                }}
              >
                <Brain size={24} color="#E07B54" />
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 18,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {"Prepositions"}
                  </Text>
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                      marginRight: 27,
                    }}
                  >
                    {"9 lessons"}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FDF9F6",
                    borderRadius: 16,
                  }}
                >
                  <View
                    style={{
                      width: 114,
                      height: 6,
                      backgroundColor: "#E07B54",
                      borderRadius: 16,
                    }}
                  ></View>
                </View>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"55%"}
              </Text>
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
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: "#FDF8F6",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 14,
                }}
              >
                <Brain size={24} color="#E07B54" />
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 18,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {"Articles & Determiners"}
                  </Text>
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                      marginRight: 94,
                    }}
                  >
                    {"6 lessons"}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FDF9F6",
                    borderRadius: 16,
                  }}
                >
                  <View
                    style={{
                      width: 75,
                      height: 6,
                      backgroundColor: "#E07B54",
                      borderRadius: 16,
                    }}
                  ></View>
                </View>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"40%"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
