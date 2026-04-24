import { ArrowLeft } from "lucide-react-native";
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
          paddingRight: 20,
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 22,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigator.goBack()}
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
              {"XP Store"}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 17,
            paddingHorizontal: 16,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/gtgt38wq_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 19,
                height: 19,
                marginRight: 8,
              }}
            />
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"Your Balance"}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: "#D4A853",
                fontSize: 20,
              }}
            >
              {"4,850 XP"}
            </Text>
          </View>
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
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 17,
                paddingRight: 17,
                marginRight: 25,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/kg7x38e0_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 39,
                  height: 39,
                  marginBottom: 12,
                  marginLeft: 16,
                }}
              />
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                  marginLeft: 16,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Streak Freeze"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 13,
                  marginLeft: 16,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                    width: 113,
                  }}
                >
                  {"Protect your streak for 1 day"}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#D4A8531A",
                  borderRadius: 12,
                  paddingVertical: 8,
                  marginLeft: 17,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/41b453xi_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 12,
                    width: 11,
                    height: 11,
                    marginRight: 3,
                  }}
                />
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {" 200"}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingTop: 16,
                paddingRight: 17,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/i85r8e7g_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 39,
                  height: 39,
                  marginBottom: 12,
                  marginLeft: 16,
                }}
              />
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                  marginLeft: 16,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Double XP (1 Day)"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 13,
                  marginLeft: 16,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"Earn 2x XP for 24 hours"}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#D4A8531A",
                  borderRadius: 12,
                  paddingVertical: 8,
                  marginBottom: 34,
                  marginLeft: 17,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/cpmll42y_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 12,
                    width: 11,
                    height: 11,
                    marginRight: 3,
                  }}
                />
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {" 500"}
                </Text>
              </TouchableOpacity>
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
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 17,
                paddingRight: 17,
                marginRight: 25,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/rcck5cyf_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 39,
                  height: 39,
                  marginBottom: 12,
                  marginLeft: 16,
                }}
              />
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                  marginLeft: 16,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Custom Avatar"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 13,
                  marginLeft: 16,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                    width: 75,
                  }}
                >
                  {"Unlock premium avatar frame"}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#D4A8531A",
                  borderRadius: 12,
                  paddingVertical: 8,
                  marginLeft: 17,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/6j908dft_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 12,
                    width: 11,
                    height: 11,
                    marginRight: 3,
                  }}
                />
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {" 300"}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingTop: 16,
                paddingRight: 17,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/7lk68ah2_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 39,
                  height: 39,
                  marginBottom: 12,
                  marginLeft: 16,
                }}
              />
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                  marginLeft: 16,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Power Quiz"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 13,
                  marginLeft: 16,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"Access exclusive quiz set"}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#D4A8531A",
                  borderRadius: 12,
                  paddingVertical: 8,
                  marginBottom: 33,
                  marginLeft: 17,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/vrj6nwdq_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 12,
                    width: 11,
                    height: 11,
                    marginRight: 2,
                  }}
                />
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {" 400"}
                </Text>
              </TouchableOpacity>
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
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 17,
                paddingRight: 17,
                marginRight: 25,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/0f7wtw21_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 39,
                  height: 39,
                  marginBottom: 12,
                  marginLeft: 16,
                }}
              />
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                  marginLeft: 16,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Bonus Test"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 13,
                  marginLeft: 16,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                    width: 88,
                  }}
                >
                  {"Unlock 1 additional practice test"}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#D4A8531A",
                  borderRadius: 12,
                  paddingVertical: 8,
                  marginLeft: 17,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/k3cu9bs2_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 12,
                    width: 11,
                    height: 11,
                    marginRight: 3,
                  }}
                />
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {" 800"}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 17,
                paddingRight: 17,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/11u5ogos_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 39,
                  height: 39,
                  marginBottom: 12,
                  marginLeft: 16,
                }}
              />
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                  marginLeft: 16,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Premium Trial"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 13,
                  marginLeft: 16,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                    width: 71,
                  }}
                >
                  {"3-day premium experience"}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#D4A8531A",
                  borderRadius: 12,
                  paddingVertical: 8,
                  marginLeft: 17,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/wu4fsmr4_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 12,
                    width: 11,
                    height: 11,
                    marginRight: 2,
                  }}
                />
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {" 1500"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
