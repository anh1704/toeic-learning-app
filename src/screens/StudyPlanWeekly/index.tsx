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
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
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
          <View
            style={{
              width: 180,
              marginRight: 13,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 10
              }}
            >
              {"Weekly Overview"}
            </Text>
          </View>
          <View
            style={{
              height: 20,
              flex: 1,
              marginRight: 12,
            }}
          ></View>
          <Text
            style={{
              color: "#A47551",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            {"Monthly"}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 17,
            marginBottom: 21,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 15,
              marginHorizontal: 16,
            }}
          >
            <View
              style={{
                paddingTop: 1,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {"This Week"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 14,
                }}
              >
                {"11.8 hours"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 13,
              marginHorizontal: 17,
            }}
          >
            <View
              style={{
                flex: 1,
                marginRight: 1,
              }}
            >
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  paddingTop: 40,
                  marginBottom: 5,
                }}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={["#A47551", "#8B6BAE"]}
                  style={{
                    height: 39,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                ></LinearGradient>
              </View>
              <View
                style={{
                  marginHorizontal: 9,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"Mon"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 1,
              }}
            >
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  paddingTop: 27,
                  marginBottom: 5,
                }}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={["#A47551", "#8B6BAE"]}
                  style={{
                    height: 53,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                ></LinearGradient>
              </View>
              <View
                style={{
                  marginHorizontal: 11,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"Tue"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 1,
              }}
            >
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  paddingTop: 54,
                  marginBottom: 5,
                }}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={["#A47551", "#8B6BAE"]}
                  style={{
                    height: 26,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                ></LinearGradient>
              </View>
              <View
                style={{
                  marginHorizontal: 8,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"Wed"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 1,
              }}
            >
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  paddingTop: 14,
                  marginBottom: 5,
                }}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={["#A47551", "#8B6BAE"]}
                  style={{
                    height: 66,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                ></LinearGradient>
              </View>
              <View
                style={{
                  marginHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"Thu"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 1,
              }}
            >
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  paddingTop: 32,
                  marginBottom: 5,
                }}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={["#A47551", "#8B6BAE"]}
                  style={{
                    height: 47,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                ></LinearGradient>
              </View>
              <View
                style={{
                  marginHorizontal: 13,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"Fri"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 1,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#8B6BAE"]}
                style={{
                  height: 79,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  marginBottom: 5,
                }}
              ></LinearGradient>
              <View
                style={{
                  marginHorizontal: 11,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"Sat"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  paddingTop: 80,
                  marginBottom: 5,
                }}
              >
                <View
                  style={{
                    height: 1,
                    backgroundColor: "#F0EBE4",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                ></View>
              </View>
              <View
                style={{
                  marginHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    color: "#E07B54",
                    fontSize: 10,
                  }}
                >
                  {"Sun"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
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
              paddingVertical: 12,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                width: 11,
                height: 11,
                backgroundColor: "#A47551",
                borderRadius: 28138600,
                marginLeft: 13,
                marginRight: 12,
              }}
            ></View>
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"Listening: 4.2h"}
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
              paddingVertical: 13,
              marginBottom: 13,
            }}
          >
            <View
              style={{
                width: 11,
                height: 11,
                backgroundColor: "#8B6BAE",
                borderRadius: 28138600,
                marginLeft: 13,
                marginRight: 12,
              }}
            ></View>
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"Reading: 3.5h"}
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
              paddingVertical: 13,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                width: 11,
                height: 11,
                backgroundColor: "#E07B54",
                borderRadius: 28138600,
                marginLeft: 13,
                marginRight: 12,
              }}
            ></View>
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"Grammar: 2.1h"}
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
              paddingVertical: 13,
            }}
          >
            <View
              style={{
                width: 11,
                height: 11,
                backgroundColor: "#5B9E91",
                borderRadius: 28138600,
                marginLeft: 13,
                marginRight: 12,
              }}
            ></View>
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"Vocabulary: 2h"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
