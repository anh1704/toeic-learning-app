import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
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
            marginBottom: 20,
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
                marginLeft: 10,
              }}
            >
              {"Listening History"}
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 8,
            marginBottom: 11,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 32,
              marginRight: 11,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#A47551",
                borderRadius: 24562000,
                paddingVertical: 6,
                paddingHorizontal: 11,
                marginRight: 12,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"All"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 24562000,
                borderWidth: 1,
                paddingVertical: 6,
                marginRight: 13,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Part 1"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 24562000,
                borderWidth: 1,
                paddingVertical: 6,
                marginRight: 12,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Part 2"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 24562000,
                borderWidth: 1,
                paddingVertical: 6,
                marginRight: 12,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Part 3"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 24562000,
                borderWidth: 1,
                paddingVertical: 6,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Part 4"}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                paddingVertical: 9,
                paddingLeft: 14,
                paddingRight: 29,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 11,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                  }}
                >
                  {"Part 1"}
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                  }}
                >
                  {"Today"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"Source: 5/6"}
                </Text>
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 14,
                  }}
                >
                  {"83%"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"4:30"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                paddingVertical: 9,
                paddingLeft: 14,
                paddingRight: 29,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 11,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                  }}
                >
                  {"Part 1"}
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                  }}
                >
                  {"Today"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"Source: 5/6"}
                </Text>
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 14,
                  }}
                >
                  {"83%"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"4:30"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                paddingVertical: 9,
                paddingLeft: 14,
                paddingRight: 31,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 11,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                  }}
                >
                  {"Part 2"}
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                  }}
                >
                  {"Today"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"Source: 20/25"}
                </Text>
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 14,
                  }}
                >
                  {"80%"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"12:30"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                paddingVertical: 9,
                paddingLeft: 14,
                paddingRight: 31,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 11,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                  }}
                >
                  {"Part 2"}
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                  }}
                >
                  {"Today"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"Source: 20/25"}
                </Text>
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 14,
                  }}
                >
                  {"80%"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"12:30"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                paddingVertical: 9,
                paddingLeft: 14,
                paddingRight: 31,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 11,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                  }}
                >
                  {"Part 3"}
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                  }}
                >
                  {"Yesterday"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"Source: 20/39"}
                </Text>
                <Text
                  style={{
                    color: "#E07B54",
                    fontSize: 14,
                  }}
                >
                  {"75%"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"8:30"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                paddingVertical: 9,
                paddingLeft: 14,
                paddingRight: 31,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 11,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                  }}
                >
                  {"Part 4"}
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                  }}
                >
                  {"25 Mar"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"Source: 29/30"}
                </Text>
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 14,
                  }}
                >
                  {"80%"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"12:30"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                paddingVertical: 9,
                paddingLeft: 14,
                paddingRight: 31,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 11,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                  }}
                >
                  {"Part 4"}
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                  }}
                >
                  {"25 Mar"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"Source: 29/30"}
                </Text>
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 14,
                  }}
                >
                  {"80%"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"12:30"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
