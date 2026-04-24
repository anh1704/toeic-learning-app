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
import { signUp } from "../../lib/authService";

export default () => {
  const navigation = useNavigation<any>();
  const [textInput1, onChangeTextInput1] = useState("");
  const [textInput2, onChangeTextInput2] = useState("");
  const [textInput3, onChangeTextInput3] = useState("");
  const [textInput4, onChangeTextInput4] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    const name = textInput1.trim();
    const email = textInput2.trim().toLowerCase();
    const password = textInput3;
    const confirmPassword = textInput4;

    // Validation
    if (!name) {
      setError("Vui lòng nhập tên");
      return;
    }

    if (!email) {
      setError("Vui lòng nhập email");
      return;
    }

    // Basic email validation - chỉ check có @ và .
    if (!email.includes("@") || !email.includes(".")) {
      setError("Email không hợp lệ");
      return;
    }

    if (!password) {
      setError("Vui lòng nhập mật khẩu");
      return;
    }

    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await signUp(email, password, name);

      // Nếu project bật email confirmation thì sẽ không có session ngay.
      if (!data?.session) {
        setError(
          "Đăng ký thành công. Vui lòng xác nhận email trước khi đăng nhập.",
        );
        return;
      }

      navigation.reset({
        index: 0,
        routes: [{ name: "Tabs" }],
      });
    } catch (err: any) {
      console.error("Sign up error:", err);

      // Xử lý các lỗi cụ thể
      let errorMessage = "Đăng ký thất bại. Vui lòng thử lại";

      if (err.message?.includes("already registered")) {
        errorMessage = "Email này đã được đăng ký. Vui lòng đăng nhập";
      } else if (err.message?.includes("Email not confirmed")) {
        errorMessage = "Vui lòng xác nhận email trước khi đăng nhập";
      } else if (err.message?.includes("invalid")) {
        errorMessage = "Email hoặc mật khẩu không hợp lệ";
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
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/3jzmu13k_expires_30_days.png",
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
            {"Create Account"}
          </Text>
          <Text
            style={{
              color: "#6E6880",
              fontSize: 14,
              marginBottom: 29,
            }}
          >
            {"Start mastering TOEIC today"}
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
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/0128xkt3_expires_30_days.png",
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
                placeholder={"Full name"}
                value={textInput1}
                onChangeText={(value) => {
                  onChangeTextInput1(value);
                  setError(null);
                }}
                autoCapitalize="words"
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
                marginBottom: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/07o3392b_expires_30_days.png",
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
                value={textInput2}
                onChangeText={(value) => {
                  onChangeTextInput2(value);
                  setError(null);
                }}
                autoCapitalize="none"
                keyboardType="email-address"
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
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/7ynlej0w_expires_30_days.png",
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
                value={textInput3}
                onChangeText={(value) => {
                  onChangeTextInput3(value);
                  setError(null);
                }}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                autoComplete="new-password"
                style={{
                  color: "#2C2636",
                  fontSize: 16,
                  flex: 1,
                }}
              />
              <View pointerEvents="none">
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/erz1qmw1_expires_30_days.png",
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
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/bgxlyj4m_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />
              <TextInput
                placeholder={"Confirm password"}
                value={textInput4}
                onChangeText={(value) => {
                  onChangeTextInput4(value);
                  setError(null);
                }}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                autoComplete="new-password"
                style={{
                  color: "#2C2636",
                  fontSize: 16,
                  flex: 1,
                }}
              />
              <View pointerEvents="none">
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/jumvqytg_expires_30_days.png",
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
              onPress={handleSignUp}
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
                    {"Create Account"}
                  </Text>
                )}
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "#6E6880",
              fontSize: 14,
              marginBottom: 48,
            }}
          >
            {"Already have an account? "}
            <Text
              style={{ color: "#A47551", fontWeight: "bold" }}
              onPress={() => navigation.navigate("AuthLogin")}
            >
              {"Sign in"}
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
