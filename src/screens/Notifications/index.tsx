import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  NotificationDetail: undefined;
};

export default () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
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
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 21,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
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

            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {"Notifications"}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: "#A47551",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Mark all read"}
            </Text>
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
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/4frzg7sq_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 39,
                height: 39,
                marginRight: 12,
              }}
            />
            <View
              style={{
                paddingTop: 1,
                paddingRight: 39,
                marginRight: 12,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("NotificationDetail");
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
                    {"New Achievement!"}
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {'You earned "Listening Master" badge'}
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
                    fontSize: 10,
                  }}
                >
                  {"2m ago"}
                </Text>
              </View>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/ew6w6fw2_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 15,
                height: 15,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
              marginBottom: 12,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/6t70ar1t_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 39,
                height: 39,
                marginRight: 12,
              }}
            />
            <View
              style={{
                flex: 1,
                marginRight: 12,
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
                  {"Streak Alert!"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Your 15-day streak is on fire!"}
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
                    fontSize: 10,
                  }}
                >
                  {"1h ago"}
                </Text>
              </View>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/bowvsb5w_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 15,
                height: 15,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
              marginBottom: 13,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/d6932b20_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 39,
                height: 39,
                marginRight: 12,
              }}
            />
            <View
              style={{
                paddingTop: 1,
                paddingRight: 44,
                marginRight: 12,
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
                  {"Study Reminder"}
                </Text>
              </View>
              <View
                style={{
                  marginBottom: 4,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Time for your daily listening practice"}
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
                    fontSize: 10,
                  }}
                >
                  {"3h ago"}
                </Text>
              </View>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/nfplyxlq_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 15,
                height: 15,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/v85wcgbu_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 39,
                height: 39,
                marginRight: 12,
              }}
            />
            <View
              style={{
                paddingTop: 1,
                paddingRight: 31,
                marginRight: 12,
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
                  {"New Reply"}
                </Text>
              </View>
              <View
                style={{
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Minh replied to your grammar question"}
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
                    fontSize: 10,
                  }}
                >
                  {"5h ago"}
                </Text>
              </View>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/xj7drplb_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 15,
                height: 15,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
              marginBottom: 13,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/bm122s3b_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 39,
                height: 39,
                marginRight: 12,
              }}
            />
            <View
              style={{
                paddingRight: 30,
                marginRight: 12,
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
                  }}
                >
                  {"Score Update"}
                </Text>
              </View>
              <View
                style={{
                  marginBottom: 4,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Your predicted score increased to 670!"}
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
                    fontSize: 10,
                  }}
                >
                  {"1d ago"}
                </Text>
              </View>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/tdvb1dae_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 15,
                height: 15,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/4gcgz9ik_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 39,
                height: 39,
                marginRight: 12,
              }}
            />
            <View
              style={{
                flex: 1,
                paddingTop: 1,
                marginRight: 12,
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
                  {"Daily Challenge"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"New challenges are available!"}
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
                    fontSize: 10,
                  }}
                >
                  {"1d ago"}
                </Text>
              </View>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/hm1jdmzu_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 15,
                height: 15,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
              marginBottom: 12,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/dgqqsn24_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 39,
                height: 39,
                marginRight: 12,
              }}
            />
            <View
              style={{
                flex: 1,
                marginRight: 12,
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
                  {"New Follower"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Le Hoang started following you"}
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
                    fontSize: 10,
                  }}
                >
                  {"2d ago"}
                </Text>
              </View>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/lrzo3thw_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 15,
                height: 15,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/5sp7hfxr_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 39,
                height: 39,
                marginRight: 12,
              }}
            />
            <View
              style={{
                flex: 1,
                paddingTop: 1,
                marginRight: 12,
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
                  {"Level Up!"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"You reached Level 12!"}
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
                    fontSize: 10,
                  }}
                >
                  {"3d ago"}
                </Text>
              </View>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/no856flj_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 15,
                height: 15,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
