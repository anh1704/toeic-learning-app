import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { signIn } from "../../lib/authService";

export default () => {
  const navigation = useNavigation<any>();
  const [textInput1, onChangeTextInput1] = useState("");
  const [textInput2, onChangeTextInput2] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    const email = textInput1.trim().toLowerCase();
    const password = textInput2;

    if (!email || !password) {
      setError("Vui lòng nhập email và mật khẩu");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await signIn(email, password);

      if (!data?.session) {
        setError("Đăng nhập thất bại. Vui lòng thử lại.");
        return;
      }

      navigation.reset({
        index: 0,
        routes: [{ name: "Tabs" }],
      });
    } catch (err: any) {
      console.error("Login error:", err);

      // Xử lý các lỗi cụ thể
      let errorMessage = "Email hoặc mật khẩu không đúng";

      if (err.message?.includes("Email not confirmed")) {
        errorMessage =
          "Email chưa được xác nhận. Vui lòng kiểm tra email hoặc liên hệ admin";
      } else if (err.message?.includes("Invalid login credentials")) {
        errorMessage = "Email hoặc mật khẩu không đúng";
      } else if (err.message?.includes("Email")) {
        errorMessage = "Email không hợp lệ";
      } else if (err.message) {
        errorMessage = err.message;
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

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
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            alignItems: "center",
            paddingTop: 19,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/3gqt4d1p_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 64,
              height: 64,
              marginBottom: 16,
            }}
          />
          <Text
            style={{
              color: "#2C2636",
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            {"Welcome Back"}
          </Text>
          <Text
            style={{
              color: "#6E6880",
              fontSize: 14,
              marginBottom: 29,
            }}
          >
            {"Continue your TOEIC journey"}
          </Text>
          <View
            style={{
              marginBottom: 29,
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#F5F1EC",
                borderColor: error ? "#D4183D" : "#E1DDDA",
                borderRadius: 16,
                borderWidth: 1,
                marginBottom: 16,
                width: "100%",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/o3jq91xh_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: 19,
                  marginRight: 12,
                }}
              />
              <TextInput
                placeholder={"Email address"}
                value={textInput1}
                onChangeText={(value) => {
                  onChangeTextInput1(value);
                  setError(null);
                }}
                autoCapitalize={"none"}
                keyboardType={"email-address"}
                style={{
                  color: "#2C2636",
                  fontSize: 16,
                  marginRight: 4,
                  flex: 1,
                  paddingVertical: 17,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#F5F1EC",
                borderColor: error ? "#D4183D" : "#E1DDDA",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 17,
                paddingHorizontal: 19,
                marginBottom: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/yikwzejk_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />
              <TextInput
                placeholder={"Password"}
                value={textInput2}
                onChangeText={(value) => {
                  onChangeTextInput2(value);
                  setError(null);
                }}
                secureTextEntry={true}
                autoCapitalize={"none"}
                autoCorrect={false}
                textContentType="password"
                autoComplete="password"
                style={{
                  color: "#2C2636",
                  fontSize: 16,
                  flex: 1,
                }}
              />
              <View pointerEvents="none">
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/rqpc1ev3_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 16,
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: "flex-end",
                marginBottom: 16,
              }}
            >
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 14,
                  marginRight: 3,
                }}
              >
                {"Forgot password?"}
              </Text>
            </View>

            {error ? (
              <Text
                style={{
                  color: "#D4183D",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 12,
                }}
              >
                {error}
              </Text>
            ) : null}

            <TouchableOpacity
              style={{
                alignItems: "center",
                borderRadius: 16,
                paddingVertical: 13,
              }}
              onPress={handleSignIn}
              disabled={loading}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#E07B54"]}
                style={{
                  alignItems: "center",
                  borderRadius: 16,
                  paddingVertical: 13,
                  width: "100%",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {"Sign In"}
                  </Text>
                )}
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 26,
              marginHorizontal: 24,
            }}
          >
            <View
              style={{
                height: 1,
                flex: 1,
                backgroundColor: "#E5E1DE",
                marginRight: 9,
              }}
            ></View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 14,
                marginRight: 13,
                flex: 1,
              }}
            >
              {"or continue with"}
            </Text>
            <View
              style={{
                height: 1,
                flex: 1,
                backgroundColor: "#E5E1DE",
              }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 27,
              marginHorizontal: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#E5E1DE",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
                marginRight: 10,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/6v9b0kl3_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 20,
                  height: 20,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Google"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#E5E1DE",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/b4go86tj_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 20,
                  height: 20,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Facebook"}
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "#6E6880",
              fontSize: 14,
              marginBottom: 48,
            }}
          >
            {"Don't have an account? "}
            <Text
              style={{ color: "#A47551", fontWeight: "bold" }}
              onPress={() => navigation.navigate("AuthRegister")}
            >
              {"Sign up"}
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
