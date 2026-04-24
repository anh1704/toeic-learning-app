import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
export default () => {
  const navigator = useNavigation();
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
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 19,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigator.goBack();
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/edywtg5y_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 37,
                height: 37,
                marginRight: 12,
              }}
            />
          </TouchableOpacity>

          <View>
            <Text
              style={{
                color: "#2C2636",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {"Badges"}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
            }}
          ></View>
          <View
            style={{
              width: 117,
              height: 30,
            }}
          ></View>
        </View>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 16,
            marginBottom: 22,
            marginHorizontal: 19,
          }}
        >
          <View
            style={{
              alignItems: "center",
              marginBottom: 1,
              marginHorizontal: 17,
            }}
          >
            <Text
              style={{
                color: "#D4A853",
                fontSize: 24,
              }}
            >
              {"6 / 12"}
            </Text>
          </View>
          <Text
            style={{
              color: "#6E6880",
              fontSize: 12,
            }}
          >
            {"Badges earned"}
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
            marginHorizontal: 21,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
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
                marginRight: 13,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/ahs8bg3q_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 47,
                  height: 47,
                  marginBottom: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"First Steps"}
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
                marginRight: 13,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/o23oxjf2_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 47,
                  height: 47,
                  marginBottom: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Listening Pro"}
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
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/05pwnc3j_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 47,
                  height: 47,
                  marginBottom: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Word Master"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
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
                marginRight: 13,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/6wrji536_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 47,
                  height: 47,
                  marginBottom: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Streak King"}
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
                marginRight: 13,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/x8otppw2_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 47,
                  height: 47,
                  marginBottom: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Quiz Champ"}
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
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/x9z2krlr_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 47,
                  height: 47,
                  marginBottom: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Book Worm"}
                </Text>
              </View>
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
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
                marginRight: 13,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/rn0c5k84_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 47,
                  height: 47,
                  marginBottom: 8,
                }}
              />
              <View
                style={{
                  marginHorizontal: 21,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Grammar Guru"}
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
                marginRight: 13,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/xln6fsit_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 47,
                  height: 47,
                  marginBottom: 8,
                }}
              />
              <View
                style={{
                  marginHorizontal: 23,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Perfect Score"}
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
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/gnmsouh3_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 47,
                  height: 47,
                  marginBottom: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Endurance"}
                </Text>
              </View>
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
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
                marginRight: 13,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/n7yef8js_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 47,
                  height: 47,
                  marginBottom: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Top 10"}
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
                marginRight: 13,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/f8fvbu6r_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 47,
                  height: 47,
                  marginBottom: 8,
                }}
              />
              <View
                style={{
                  marginHorizontal: 16,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Vocabulary King"}
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
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/aydszggi_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 47,
                  height: 47,
                  marginBottom: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 10,
                  }}
                >
                  {"Social Star"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
