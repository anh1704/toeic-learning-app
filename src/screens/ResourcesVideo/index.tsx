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
          paddingRight: 20,
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
              }}
            >
              {"Video Lessons"}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            paddingBottom: 4,
            marginBottom: 15,
            marginLeft: 20,
          }}
          onPress={() => navigation.navigate("ResourcesVideo2")}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/vqvpe8w7_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              height: 149,
              marginBottom: 3,
            }}
          />
          <View
            style={{
              paddingBottom: 1,
              marginBottom: 3,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 14,
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
                fontWeight: "bold",
              }}
            >
              {"400 views"}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginBottom: 15,
            marginLeft: 20,
          }}
          onPress={() => navigation.navigate("ResourcesVideo2")}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/ghgzspu0_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              height: 149,
              marginBottom: 3,
            }}
          />
          <View
            style={{
              paddingBottom: 1,
              marginBottom: 3,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Master Part 5 Grammar"}
            </Text>
          </View>
          <View
            style={{
              paddingBottom: 4,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {"85 views"}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginBottom: 15,
            marginLeft: 20,
          }}
          onPress={() => navigation.navigate("ResourcesVideo2")}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/prlf971f_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              height: 149,
              marginBottom: 3,
            }}
          />
          <View
            style={{
              paddingBottom: 1,
              marginBottom: 3,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Reading Speed Techniques"}
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
                fontWeight: "bold",
              }}
            >
              {"40 views"}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginBottom: 3,
            marginLeft: 20,
          }}
          onPress={() => navigation.navigate("ResourcesVideo2")}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/j4kh8q7y_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              height: 149,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 3,
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              color: "#2C2636",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            {"Vocabulary Building Tips"}
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 15,
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              color: "#6E6880",
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            {"174 views"}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginBottom: 48,
            marginLeft: 20,
          }}
          onPress={() => navigation.navigate("ResourcesVideo2")}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/7pa7nl13_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              height: 149,
              marginBottom: 3,
            }}
          />
          <View
            style={{
              paddingBottom: 1,
              marginBottom: 3,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Full Test Walkthrough"}
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
                fontWeight: "bold",
              }}
            >
              {"30 views"}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
