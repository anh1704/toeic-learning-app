import { ArrowLeft } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
export default () => {
  const navigation = useNavigation<any>();
  const [textInput1, onChangeTextInput1] = useState("");
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
          paddingTop: 18,
          paddingRight: 20,
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 17,
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
            {"New post"}
          </Text>
        </View>
        <Text
          style={{
            color: "#2C2636",
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 13,
            marginLeft: 21,
          }}
        >
          {"Category"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 13,
            marginLeft: 21,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#A47551",
              borderRadius: 28138600,
              paddingVertical: 6,
              marginRight: 10,
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
              {"General"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 28138600,
              borderWidth: 1,
              paddingVertical: 6,
              marginRight: 10,
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
              {"Listening"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 28138600,
              borderWidth: 1,
              paddingVertical: 6,
              marginRight: 10,
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
              {"Reading"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 28138600,
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
              {"Grammar"}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 9,
            marginLeft: 21,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 28138600,
              borderWidth: 1,
              paddingVertical: 6,
              paddingHorizontal: 12,
              marginRight: 10,
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
              {"Vocabulary"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 28138600,
              borderWidth: 1,
              paddingVertical: 6,
              paddingHorizontal: 13,
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
              {"Tips"}
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder={"Post title..."}
          value={textInput1}
          onChangeText={onChangeTextInput1}
          style={{
            color: "#2C2636",
            fontSize: 16,
            marginBottom: 16,
            marginLeft: 21,
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 18,
            paddingHorizontal: 16,
          }}
        />
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingTop: 16,
            paddingLeft: 16,
            marginBottom: 24,
            marginLeft: 21,
          }}
        >
          <Text
            style={{
              color: "#2C2636",
              fontSize: 14,
              marginBottom: 122,
            }}
          >
            {"Write your post..."}
          </Text>
        </View>
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/5040v2ul_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={{
            height: 45,
            marginLeft: 21,
          }}
        />
        <TouchableOpacity
          style={{
            alignItems: "center",
            borderRadius: 16,
            paddingVertical: 11,
            marginBottom: 48,
            margin: 10,
          }}
          onPress={() => navigation.navigate("CommunityForum")}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#A47551", "#E07B54"]}
            style={{
              alignItems: "center",
              borderRadius: 16,
              paddingVertical: 11,
              marginBottom: 48,
              marginLeft: 21,
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
              {"Publish"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
