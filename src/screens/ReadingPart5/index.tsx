import { ArrowLeft, Check, PenLine } from "lucide-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
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
          paddingTop: 19,
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
            marginHorizontal: 20,
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
              color: "#000000",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            {"Part 5: Incomplete Sentences"}
          </Text>
          <View
            style={{
              width: 37,
              height: 37,
            }}
          ></View>
        </View>
        <Text
          style={{
            color: "#6E6880",
            fontSize: 14,
            marginBottom: 21,
            marginLeft: 20,
            marginRight: 39,
          }}
        >
          {"Choose the word or phrase that best completes each sentence."}
        </Text>
        <View
          style={{
            marginBottom: 48,
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ReadingExercise")}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#EAE9EB",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 15,
                paddingHorizontal: 18,
                marginBottom: 17,
              }}
            >
              <View style={{
                width: 44, height: 44, borderRadius: 14,
                backgroundColor: "#5B9E91",
                alignItems: "center", justifyContent: "center",
                marginRight: 18,
              }}>
                <Check size={22} color="#FFFFFF" />
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 18,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Exercise Set 1"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                    marginRight: 16,
                  }}
                >
                  {"30 questions"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#5B9E91",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"85%"}
              </Text>
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
              paddingVertical: 13,
              paddingHorizontal: 18,
              marginBottom: 17,
            }}
          >
            <View style={{
              width: 44, height: 44, borderRadius: 14,
              backgroundColor: "#5B9E91",
              alignItems: "center", justifyContent: "center",
              marginRight: 18,
            }}>
              <Check size={22} color="#FFFFFF" />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 18,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Exercise Set 2"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginRight: 18,
                }}
              >
                {"30 questions"}
              </Text>
            </View>
            <Text
              style={{
                color: "#5B9E91",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {"88%"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 13,
              paddingHorizontal: 18,
              marginBottom: 17,
            }}
          >
            <View style={{
              width: 44, height: 44, borderRadius: 14,
              backgroundColor: "#5B9E91",
              alignItems: "center", justifyContent: "center",
              marginRight: 18,
            }}>
              <Check size={22} color="#FFFFFF" />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 18,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Exercise Set 3"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginRight: 19,
                }}
              >
                {"30 questions"}
              </Text>
            </View>
            <Text
              style={{
                color: "#5B9E91",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {"91%"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 13,
              marginBottom: 17,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#8B6BAE",
                borderRadius: 16,
                paddingVertical: 14,
                paddingHorizontal: 18,
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
                {"4"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                paddingRight: 127,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Exercise Set 4"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginRight: 19,
                }}
              >
                {"30 questions"}
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
              paddingVertical: 13,
              marginBottom: 17,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#8B6BAE",
                borderRadius: 16,
                paddingVertical: 14,
                paddingHorizontal: 18,
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
                paddingRight: 127,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Exercise Set 5"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginRight: 19,
                }}
              >
                {"30 questions"}
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
              paddingVertical: 13,
              marginBottom: 17,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#8B6BAE",
                borderRadius: 16,
                paddingVertical: 14,
                paddingHorizontal: 18,
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
                paddingRight: 127,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Exercise Set 6"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginRight: 19,
                }}
              >
                {"30 questions"}
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
              paddingVertical: 13,
              marginBottom: 17,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#8B6BAE",
                borderRadius: 16,
                paddingVertical: 14,
                paddingHorizontal: 19,
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
                {"7"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                paddingRight: 128,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Exercise Set 7"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginRight: 18,
                }}
              >
                {"30 questions"}
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
              paddingVertical: 15,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#8B6BAE",
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
                {"8"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                paddingRight: 127,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Exercise Set 8"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginRight: 19,
                }}
              >
                {"30 questions"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
