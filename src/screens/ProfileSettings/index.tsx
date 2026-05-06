import { AlertCircle, ArrowLeft, Bell, ChevronRight, CreditCard, Globe, HelpCircle, Lock, MessageSquare, Palette } from "lucide-react-native";
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
            <Globe size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
            <ChevronRight size={20} color="#6E6880" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 33,
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
                    fontWeight: "bold",
                  }}
                >
                  {"Notifications"}
                </Text>
              </View>
               <ChevronRight size={20} color="#6E6880" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
            <Lock size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
               <ChevronRight size={20} color="#6E6880" />
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
            <HelpCircle size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
               <ChevronRight size={20} color="#6E6880" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
            <CreditCard size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
            <ChevronRight size={20} color="#6E6880" />
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
            <HelpCircle size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
            <ChevronRight size={20} color="#6E6880" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 33,
              }}
            >
            <AlertCircle size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
              <ChevronRight size={20} color="#6E6880" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
            <MessageSquare size={20} style={{ marginRight: 10 }} color="#6E6880" />
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
            <ChevronRight size={20} color="#6E6880" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
