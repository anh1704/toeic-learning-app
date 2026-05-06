import { ArrowLeft, Crown, Star } from "lucide-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
              {"Premium"}
            </Text>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#D4A853", "#E07B54"]}
          style={{
            alignItems: "center",
            borderRadius: 16,
            paddingVertical: 24,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <Crown size={40} color="#FFFFFF" />
          <View>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {"Go Premium"}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
              }}
            >
              {"Unlock all features & content"}
            </Text>
          </View>
        </LinearGradient>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 21,
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
            <Star size={15} style={{ marginRight: 10 }} color="#D4A853" />
            <View
              style={{
                paddingBottom: 1,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"Unlimited practice tests"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
            }}
          >
            <Star size={15} style={{ marginRight: 10 }} color="#D4A853" />
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"Ad-free experience"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
            }}
          >
            <Star size={15} style={{ marginRight: 10 }} color="#D4A853" />
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"Advanced analytics"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
            }}
          >
            <Star size={15} style={{ marginRight: 10 }} color="#D4A853" />
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"Priority support"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
            }}
          >
            <Star size={15} style={{ marginRight: 10 }} color="#D4A853" />
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"Offline access"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Star size={15} style={{ marginRight: 10 }} color="#D4A853" />
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"Exclusive content"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginBottom: 22,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#A47551",
              borderRadius: 16,
              borderWidth: 1,
              padding: 17,
              marginBottom: 12,
            }}
          >
            <View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 2,
                  marginRight: 31,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Monthly"}
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
                  {"Billed monthly"}
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {"$9.99/mo"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
            }}
          >
            <View
              style={{
                marginVertical: 17,
                marginLeft: 16,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 1,
                  marginRight: 19,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Yearly"}
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
                  {"Save 50%"}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 1,
                marginRight: 2,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: "#E07B54",
                  borderBottomLeftRadius: 12,
                  paddingVertical: 1,
                  paddingHorizontal: 8,
                  marginBottom: 2,
                  marginLeft: 21,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"BEST VALUE"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {"$59.99/yr"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            borderRadius: 16,
            paddingVertical: 11,
            marginBottom: 48,
            marginLeft: 20,
          }}
          onPress={() => alert("Pressed!")}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#D4A853", "#E07B54"]}
            style={{
              alignItems: "center",
              borderRadius: 16,
              paddingVertical: 11,
              marginBottom: 48,
              marginLeft: 20,
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {"Start Free Trial"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
