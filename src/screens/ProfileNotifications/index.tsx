import { ArrowLeft, Bell, MailIcon, Vibrate, Volume2Icon } from "lucide-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
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
                marginLeft: 10,
              }}
            >
              {"Notifications"}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingBottom: 2,
            marginBottom: 21,
            marginLeft: 21,
          }}
        >
          <View
            style={{
              paddingTop: 13,
              paddingLeft: 16,
              marginBottom: 1,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
                marginBottom: 1,
              }}
            >
              {"Channels"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 16,
              marginBottom: 1,
            }}
          >
            <Bell size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
                }}
              >
                {"Push Notifications"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#A47551",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingLeft: 20,
                paddingRight: 4,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 28138600,
                  shadowColor: "#0000001A",
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowRadius: 2,
                  elevation: 2,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 16,
              marginBottom: 1,
            }}
          >
            <MailIcon size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
                }}
              >
                {"Email Notifications"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingLeft: 4,
                paddingRight: 20,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 28138600,
                  shadowColor: "#0000001A",
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowRadius: 2,
                  elevation: 2,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 16,
              marginBottom: 1,
            }}
          >
            <Volume2Icon size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
                }}
              >
                {"Sound"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#A47551",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingLeft: 20,
                paddingRight: 4,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 28138600,
                  shadowColor: "#0000001A",
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowRadius: 2,
                  elevation: 2,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 16,
            }}
          >
            <Vibrate size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
                }}
              >
                {"Vibration"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#A47551",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingLeft: 20,
                paddingRight: 4,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 28138600,
                  shadowColor: "#0000001A",
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowRadius: 2,
                  elevation: 2,
                }}
              ></View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 15,
            paddingRight: 16,
            marginBottom: 48,
            marginLeft: 21,
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              marginBottom: 19,
              marginLeft: 16,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
              }}
            >
              {"Types"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 34,
              marginLeft: 16,
            }}
          >
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
                }}
              >
                {"Streak Reminder"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#A47551",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingLeft: 20,
                paddingRight: 4,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 28138600,
                  shadowColor: "#0000001A",
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowRadius: 2,
                  elevation: 2,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 34,
              marginLeft: 16,
            }}
          >
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
                }}
              >
                {"Daily Goal"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#A47551",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingLeft: 20,
                paddingRight: 4,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 28138600,
                  shadowColor: "#0000001A",
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowRadius: 2,
                  elevation: 2,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 34,
              marginLeft: 16,
            }}
          >
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
                }}
              >
                {"Community Activity"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingLeft: 4,
                paddingRight: 20,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 28138600,
                  shadowColor: "#0000001A",
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowRadius: 2,
                  elevation: 2,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 16,
            }}
          >
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
                }}
              >
                {"Promotions"}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingLeft: 4,
                paddingRight: 20,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 28138600,
                  shadowColor: "#0000001A",
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowRadius: 2,
                  elevation: 2,
                }}
              ></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
