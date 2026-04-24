import { ArrowLeft } from "lucide-react-native";
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/odrl040p_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 20,
                height: 20,
                marginRight: 8,
              }}
            />
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/mejkelaa_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 44,
                height: 44,
                marginRight: 18,
              }}
            />
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/hlbd2jf9_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 20,
                height: 20,
              }}
            />
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/tcc13jdp_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 44,
                height: 44,
                marginRight: 18,
              }}
            />
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/gtioukfo_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 20,
                height: 20,
              }}
            />
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/yteircj8_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 44,
                height: 44,
                marginRight: 18,
              }}
            />
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/0v8kdxc9_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 20,
                height: 20,
              }}
            />
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/36q8jrdu_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 44,
                height: 44,
                marginRight: 18,
              }}
            />
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/pklw1x9g_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 20,
                height: 20,
              }}
            />
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/005cv6dw_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 44,
                height: 44,
                marginRight: 18,
              }}
            />
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/x8cykvwf_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 20,
                height: 20,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
