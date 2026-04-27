import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
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
          <View
            style={{
              paddingRight: 51,
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
              {"Goals"}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderColor: "#A47551",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 16,
            marginBottom: 21,
            marginLeft: 21,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/8lcg236c_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              borderRadius: 16,
              width: 19,
              height: 19,
              marginRight: 6,
            }}
          />
          <Text
            style={{
              color: "#A47551",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {" Add New Goal"}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                marginHorizontal: 16,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Reach 800 TOEIC"}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#E07B541A",
                  borderRadius: 28138600,
                  paddingTop: 2,
                  paddingHorizontal: 7,
                }}
              >
                <Text
                  style={{
                    color: "#E07B54",
                    fontSize: 10,
                  }}
                >
                  {"high"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 3,
                marginHorizontal: 16,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {"Deadline: Apr 30"}
              </Text>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 12,
                }}
              >
                {"81%"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                marginHorizontal: 17,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#5B9E91"]}
                style={{
                  width: 266,
                  height: 7,
                  borderRadius: 28138600,
                }}
              ></LinearGradient>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              marginBottom: 13,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                marginHorizontal: 16,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Master 1000 words"}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#E07B541A",
                  borderRadius: 28138600,
                  paddingTop: 2,
                  paddingHorizontal: 7,
                }}
              >
                <Text
                  style={{
                    color: "#E07B54",
                    fontSize: 10,
                  }}
                >
                  {"high"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 3,
                marginHorizontal: 16,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {"Deadline: Mar 31"}
              </Text>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 12,
                }}
              >
                {"45%"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                marginHorizontal: 17,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#5B9E91"]}
                style={{
                  width: 147,
                  height: 7,
                  borderRadius: 28138600,
                }}
              ></LinearGradient>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 9,
                marginHorizontal: 16,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Complete all Part 5"}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#D4A8531A",
                  borderRadius: 28138600,
                  paddingTop: 2,
                  paddingHorizontal: 7,
                }}
              >
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 10,
                  }}
                >
                  {"medium"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 4,
                marginHorizontal: 16,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Deadline: Mar 20"}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 12,
                  }}
                >
                  {"65%"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                marginHorizontal: 17,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#5B9E91"]}
                style={{
                  width: 213,
                  height: 7,
                  borderRadius: 28138600,
                }}
              ></LinearGradient>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                marginHorizontal: 16,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Daily 2h study"}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#D4A8531A",
                  borderRadius: 28138600,
                  paddingTop: 2,
                  paddingHorizontal: 7,
                }}
              >
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 10,
                  }}
                >
                  {"medium"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 3,
                marginHorizontal: 16,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {"Deadline: Ongoing"}
              </Text>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 12,
                }}
              >
                {"70%"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                marginHorizontal: 17,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#5B9E91"]}
                style={{
                  width: 229,
                  height: 7,
                  borderRadius: 28138600,
                }}
              ></LinearGradient>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
