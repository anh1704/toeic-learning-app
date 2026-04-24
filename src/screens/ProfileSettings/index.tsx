import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  const navigation = useNavigation<any>();
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
          <View>
            <Text
              style={{
                color: "#2C2636",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {"Settings"}
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 21,
            marginLeft: 21,
          }}
        >
          <View
            style={{
              marginBottom: 7,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
              }}
            >
              {"General"}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              padding: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 33,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/7u1xqx1s_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 13,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Language"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginRight: 13,
                }}
              >
                {"Vietnamese"}
              </Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/hc9thnn8_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 33,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/6l7iivtn_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 13,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Notifications"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/xpkduk0j_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/srgw5iql_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 13,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Theme"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/l45t0btt_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 21,
            marginLeft: 22,
          }}
        >
          <View
            style={{
              marginBottom: 7,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
              }}
            >
              {"Account"}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              padding: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 33,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/w40ktjwt_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 13,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Privacy & Security"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/fhst1elz_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/s9niuthh_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 13,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Subscription"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/ebo8bl9u_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </View>
          </View>
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
              marginBottom: 7,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
              }}
            >
              {"Support"}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              padding: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 33,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/ocqa98uf_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 13,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Help & FAQ"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/1f6f50nb_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 33,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/dhnjzr1w_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 13,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"About"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/es4k07an_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/f6wgykbf_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 13,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Feedback"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/axzhicfb_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
