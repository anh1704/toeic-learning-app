import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
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
          paddingTop: 19,
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 18,
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
                color: "#000000",
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 10
              }}
            >
              {"Video Lessons"}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginBottom: 9,
            marginHorizontal: 20,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/0amr17ci_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              height: 170,
              marginBottom: 8,
            }}
          />
          <View
            style={{
              paddingBottom: 1,
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {"TOEIC Listening Strategies"}
            </Text>
          </View>
          <View
            style={{
              paddingBottom: 1,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
              }}
            >
              {"400 views · Jan 15, 2026"}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 15,
            paddingLeft: 16,
            paddingRight: 29,
            marginBottom: 7,
            marginHorizontal: 19,
          }}
        >
          <View
            style={{
              backgroundColor: "#F0EBE4",
              borderRadius: 16,
              marginBottom: 8,
            }}
          >
            <View
              style={{
                width: 165,
                height: 6,
                backgroundColor: "#A47551",
                borderRadius: 16,
              }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: "#9B97A7",
                  fontSize: 12,
                }}
              >
                {"5:23"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#9B97A7",
                  fontSize: 12,
                }}
              >
                {"15:30"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 14,
            paddingRight: 16,
            marginBottom: 9,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              marginBottom: 8,
              marginLeft: 16,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {"Description"}
            </Text>
          </View>
          <View
            style={{
              marginLeft: 16,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 14,
              }}
            >
              {
                "Learn the top strategies for acing the TOEIC listening section. This video covers all four parts with practical tips and examples."
              }
            </Text>
          </View>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            paddingBottom: 1,
            marginBottom: 11,
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              color: "#2C2636",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {"Related Videos"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 16,
            marginHorizontal: 19,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 9,
              marginBottom: 10,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/2krsvouo_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 64,
                height: 48,
                marginLeft: 15,
                marginRight: 19,
              }}
            />
            <View
              style={{
                paddingRight: 21,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingBottom: 1,
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Part 1 Photo Tips"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingBottom: 1,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"8 min"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 9,
              marginBottom: 10,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/7v3f3k4a_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 64,
                height: 48,
                marginLeft: 15,
                marginRight: 19,
              }}
            />
            <View
              style={{
                paddingRight: 21,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingBottom: 1,
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Part 1 Photo Tips"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingBottom: 1,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"8 min"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 9,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/1b2nyggg_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 64,
                height: 48,
                marginLeft: 15,
                marginRight: 19,
              }}
            />
            <View
              style={{
                paddingRight: 21,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingBottom: 1,
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Part 1 Photo Tips"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingBottom: 1,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"8 min"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
