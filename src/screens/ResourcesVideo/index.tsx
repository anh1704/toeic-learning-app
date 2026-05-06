import { ArrowLeft, Play, PlayCircle } from "lucide-react-native";
import React from "react";
import { View, ScrollView, ImageBackground, Text, TouchableOpacity } from "react-native";
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
                marginLeft: 10
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
          <ImageBackground
            source={require("../../../images/resource1.png")}
            resizeMode="cover"
            style={{
              height: 149,
              marginBottom: 3,
              borderRadius: 16,
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          <View style={{ width: 48, height: 48, borderRadius: 286098700, backgroundColor: "#A47551CC", alignItems: "center", justifyContent: "center", marginRight: 12 }}>
            <Play size={24} color="#FFFFFF" />
          </View>

          </ImageBackground>
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
          <ImageBackground
            source={require("../../../images/resource2.png")}
            resizeMode="cover"
            style={{
              height: 149,
              marginBottom: 3,
              borderRadius: 16,
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          <View style={{ width: 48, height: 48, borderRadius: 286098700, backgroundColor: "#A47551CC", alignItems: "center", justifyContent: "center", marginRight: 12 }}>
            <Play size={24} color="#FFFFFF" />
          </View>
          </ImageBackground>
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
          <ImageBackground
            source={require("../../../images/resource3.png")}
            resizeMode="cover"
            style={{
              height: 149,
              marginBottom: 3,
              borderRadius: 16,
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
           <View style={{ width: 48, height: 48, borderRadius: 286098700, backgroundColor: "#A47551CC", alignItems: "center", justifyContent: "center", marginRight: 12 }}>
            <Play size={24} color="#FFFFFF" />
          </View>
          </ImageBackground>
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
          <ImageBackground
            source={require("../../../images/resource4.png")}
            resizeMode="cover"
            style={{
              height: 149,
              borderRadius: 16,
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          <View style={{ width: 48, height: 48, borderRadius: 286098700, backgroundColor: "#A47551CC", alignItems: "center", justifyContent: "center", marginRight: 12 }}>
            <Play size={24} color="#FFFFFF" />
          </View>
          </ImageBackground>
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
          <ImageBackground
            source={require("../../../images/resource5.png")}
            resizeMode="cover"
            style={{
              height: 149,
              marginBottom: 3,
              borderRadius: 16,
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          <View style={{ width: 48, height: 48, borderRadius: 286098700, backgroundColor: "#A47551CC", alignItems: "center", justifyContent: "center", marginRight: 12 }}>
            <Play size={24} color="#FFFFFF" />
          </View>
          </ImageBackground>
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
