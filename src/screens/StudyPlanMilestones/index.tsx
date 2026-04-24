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
          paddingTop: 18,
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
              {"Milestones"}
            </Text>
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
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/oe8gkhpi_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 23,
                height: 55,
                marginRight: 12,
              }}
            />
            <View
              style={{
                paddingBottom: 20,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingBottom: 1,
                  marginBottom: 1,
                }}
              >
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 14,
                  }}
                >
                  {"First 100 Words"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginRight: 47,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Dec 2025"}
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/zh8vaj4o_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 23,
                height: 55,
                marginRight: 12,
              }}
            />
            <View
              style={{
                paddingBottom: 19,
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
                    color: "#5B9E91",
                    fontSize: 14,
                  }}
                >
                  {"Score 500+"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginRight: 24,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Jan 2026"}
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
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/kyzywc31_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 23,
                height: 55,
                marginRight: 12,
              }}
            />
            <View
              style={{
                paddingBottom: 19,
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
                    color: "#5B9E91",
                    fontSize: 14,
                  }}
                >
                  {"Score 600+"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginRight: 23,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Feb 2026"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 1,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingHorizontal: 8,
                marginBottom: 32,
                marginRight: 12,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 10,
                }}
              >
                {"4"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                paddingBottom: 19,
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
                  {"30-Day Streak"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginRight: 63,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"15/30"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 1,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingHorizontal: 8,
                marginBottom: 32,
                marginRight: 12,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 10,
                }}
              >
                {"5"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                paddingBottom: 19,
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
                  {"Score 700+"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginRight: 28,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"650/700"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 1,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingHorizontal: 8,
                marginBottom: 32,
                marginRight: 12,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 10,
                }}
              >
                {"6"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                paddingBottom: 19,
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
                  {"Master 500 Words"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginRight: 72,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"450/500"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 1,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingHorizontal: 9,
                marginBottom: 32,
                marginRight: 12,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 10,
                }}
              >
                {"7"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                paddingBottom: 18,
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
                  {"Score 800+"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  marginRight: 28,
                }}
              >
                {"650/800"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingHorizontal: 8,
                marginBottom: 28,
                marginRight: 12,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 10,
                }}
              >
                {"8"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                paddingBottom: 15,
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
                  {"Complete All Tests"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginRight: 96,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"5/20"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
