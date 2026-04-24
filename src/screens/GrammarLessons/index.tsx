import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
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
          paddingTop: 5,
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
            {"Verb Tenses"}
          </Text>
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
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 14,
              paddingHorizontal: 18,
              marginBottom: 17,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/nnbwdr74_expires_30_days.png",
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
                paddingBottom: 1,
                marginRight: 18,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 1,
                }}
              >
                {"Present Simple"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"10 min"}
              </Text>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/qlt0dah2_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 20,
                height: 20,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("GrammarDetail")}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#EAE9EB",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 14,
                paddingHorizontal: 18,
                marginBottom: 17,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/3up3abn6_expires_30_days.png",
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
                  paddingBottom: 1,
                  marginRight: 18,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                    marginBottom: 1,
                  }}
                >
                  {"Present Continuous"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"12 min"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/04ojix5c_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 14,
              paddingHorizontal: 18,
              marginBottom: 17,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/v02z3biy_expires_30_days.png",
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
                paddingBottom: 1,
                marginRight: 18,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 1,
                }}
              >
                {"Past Simple"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"10 min"}
              </Text>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/bl88cv1v_expires_30_days.png",
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
              paddingVertical: 14,
              marginBottom: 17,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#A47551",
                borderRadius: 16,
                paddingVertical: 12,
                paddingHorizontal: 16,
                marginHorizontal: 18,
              }}
              onPress={() => navigation.navigate("GrammarDetail")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {"4"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                paddingBottom: 1,
                paddingRight: 112,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 1,
                }}
              >
                {"Past Continuous"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"15 min"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 14,
              marginBottom: 17,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#A47551",
                borderRadius: 16,
                paddingVertical: 12,
                paddingHorizontal: 16,
                marginHorizontal: 18,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {"5"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                paddingBottom: 1,
                paddingRight: 117,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 1,
                }}
              >
                {"Present Perfect"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"12 min"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 14,
              marginBottom: 17,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#A47551",
                borderRadius: 16,
                paddingVertical: 12,
                paddingHorizontal: 16,
                marginHorizontal: 18,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {"6"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                paddingBottom: 1,
                paddingRight: 139,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 1,
                }}
              >
                {"Past Perfect"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"10 min"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FDFBF8",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 14,
              marginBottom: 17,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/auuc4edr_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 44,
                height: 44,
                marginHorizontal: 18,
              }}
            />
            <View
              style={{
                paddingBottom: 1,
                paddingRight: 130,
              }}
            >
              <Text
                style={{
                  color: "#938E93",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 1,
                }}
              >
                {"Future Simple"}
              </Text>
              <Text
                style={{
                  color: "#B4AFB9",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"10 min"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FDFBF8",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 14,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/cv5naym9_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 44,
                height: 44,
                marginHorizontal: 18,
              }}
            />
            <View
              style={{
                paddingBottom: 1,
                paddingRight: 126,
              }}
            >
              <Text
                style={{
                  color: "#938E93",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 1,
                }}
              >
                {"Future Perfect"}
              </Text>
              <Text
                style={{
                  color: "#B4AFB9",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"12 min"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
