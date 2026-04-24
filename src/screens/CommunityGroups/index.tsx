import { ArrowLeft } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation<any>();
  const [textInput1, onChangeTextInput1] = useState("");
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
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 17,
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
              {"Study Groups"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              marginBottom: 22,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/rdjsr9kk_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 19,
                height: 19,
                marginLeft: 11,
                marginRight: 9,
              }}
            />
            <TextInput
              placeholder={"Search groups..."}
              value={textInput1}
              onChangeText={onChangeTextInput1}
              style={{
                color: "#2C2636",
                fontSize: 16,
                marginRight: 4,
                flex: 1,
                paddingVertical: 15,
              }}
            />
          </View>
          <View
            style={{
              paddingBottom: 1,
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
              <TouchableOpacity
                style={{
                  borderRadius: 16,
                }}
                onPress={() => navigation.navigate("CommunityChat")}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={["#A47551", "#8B6BAE"]}
                  style={{
                    borderRadius: 16,
                    paddingVertical: 11,
                    paddingHorizontal: 19,
                    marginRight: 13,
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {"T"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  paddingRight: 11,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <View
                    style={{
                      marginRight: 9,
                    }}
                  >
                    <Text
                      style={{
                        color: "#2C2636",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {"TOEIC 800+ Club"}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 7,
                      height: 7,
                      backgroundColor: "#5B9E91",
                      borderRadius: 28138600,
                      marginRight: 9,
                    }}
                  ></View>
                  <View
                    style={{
                      height: 19,
                      flex: 1,
                    }}
                  ></View>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 1,
                  }}
                >
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {"156 members"}
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
                    {"For serious learners targeting 800+"}
                  </Text>
                </View>
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
                padding: 16,
                marginBottom: 13,
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 16,
                }}
                onPress={() => navigation.navigate("CommunityChat")}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={["#A47551", "#8B6BAE"]}
                  style={{
                    borderRadius: 16,
                    paddingVertical: 11,
                    paddingHorizontal: 18,
                    marginRight: 13,
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {"D"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <View
                    style={{
                      marginRight: 9,
                    }}
                  >
                    <Text
                      style={{
                        color: "#2C2636",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {"Daily Practice"}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 7,
                      height: 7,
                      backgroundColor: "#5B9E91",
                      borderRadius: 28138600,
                    }}
                  ></View>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 1,
                  }}
                >
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {"89 members"}
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
                    {"Daily study sessions together"}
                  </Text>
                </View>
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
                paddingHorizontal: 16,
                marginBottom: 12,
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 16,
                }}
                onPress={() => navigation.navigate("CommunityChat")}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={["#A47551", "#8B6BAE"]}
                  style={{
                    borderRadius: 16,
                    paddingVertical: 11,
                    paddingHorizontal: 19,
                    marginRight: 13,
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {"B"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                }}
              >
                <View
                  style={{
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
                    {"Beginners Welcome"}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 1,
                  }}
                >
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {"522 members"}
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
                    {"Start your TOEIC journey"}
                  </Text>
                </View>
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
                padding: 16,
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 16,
                }}
                onPress={() => navigation.navigate("CommunityChat")}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={["#A47551", "#8B6BAE"]}
                  style={{
                    borderRadius: 16,
                    paddingVertical: 11,
                    paddingHorizontal: 19,
                    marginRight: 13,
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {"L"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  paddingRight: 27,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <View
                    style={{
                      marginRight: 9,
                    }}
                  >
                    <Text
                      style={{
                        color: "#2C2636",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {"Listening Squad"}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 7,
                      height: 7,
                      backgroundColor: "#5B9E91",
                      borderRadius: 28138600,
                      marginRight: 9,
                    }}
                  ></View>
                  <View
                    style={{
                      height: 19,
                      flex: 1,
                    }}
                  ></View>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 1,
                  }}
                >
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {"123 members"}
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
                    {"Improve listening skills together"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
