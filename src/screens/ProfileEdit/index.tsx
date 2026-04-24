import { ArrowLeft } from "lucide-react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { getCurrentUser } from "../../lib/authService";
import { getProfile, updateProfile } from "../../lib/profileService";

export default () => {
  const navigation = useNavigation<any>();
  const [textInput1, onChangeTextInput1] = useState("");
  const [textInput2, onChangeTextInput2] = useState("");
  const [textInput3, onChangeTextInput3] = useState("");
  const [selectedTarget, setSelectedTarget] = useState(800);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const user = await getCurrentUser();
      if (user) {
        onChangeTextInput1(user.name || "");
        onChangeTextInput2(user.email || "");
        
        // Load profile data
        const profile = await getProfile();
        if (profile) {
          onChangeTextInput1(profile.name || user.name || "");
          setSelectedTarget(profile.target_score || 800);
        }
      }
    } catch (error) {
      console.error("Error loading user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!textInput1.trim()) {
      Alert.alert("Error", "Please enter your name");
      return;
    }

    setSaving(true);
    try {
      await updateProfile({
        name: textInput1.trim(),
        target_score: selectedTarget,
      });
      
      Alert.alert("Success", "Profile updated successfully");
      navigation.goBack();
    } catch (error: any) {
      console.error("Error saving profile:", error);
      Alert.alert("Error", error.message || "Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const getInitial = () => {
    return textInput1.charAt(0).toUpperCase() || "U";
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
          paddingTop: 19,
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
              {"Edit Profile"}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 21,
          }}
        >
          {loading ? (
            <ActivityIndicator color="#A47551" size="large" />
          ) : (
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#A47551", "#8B6BAE"]}
              style={{
                flexDirection: "row",
                borderRadius: 28138600,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 30,
                  marginTop: 29,
                  marginLeft: 36,
                  marginRight: 10,
                }}
              >
                {getInitial()}
              </Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/vumzdv3r_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 31,
                  height: 31,
                  marginTop: 63,
                }}
              />
            </LinearGradient>
          )}
        </View>
        <View
          style={{
            marginBottom: 48,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              marginBottom: 17,
            }}
          >
            <View
              style={{
                marginBottom: 5,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Full Name"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/xgwr6265_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginLeft: 11,
                  marginRight: 9,
                }}
              />
              <TextInput
                placeholder={"Full Name"}
                value={textInput1}
                onChangeText={onChangeTextInput1}
                autoCapitalize="words"
                style={{
                  color: "#2C2636",
                  fontSize: 16,
                  marginRight: 4,
                  flex: 1,
                  paddingVertical: 12,
                }}
              />
            </View>
          </View>
          <View
            style={{
              marginBottom: 17,
            }}
          >
            <View
              style={{
                marginBottom: 5,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Email"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#F0EBE4",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/wn9p9hf8_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginLeft: 11,
                  marginRight: 9,
                }}
              />
              <TextInput
                placeholder={"Email"}
                value={textInput2}
                onChangeText={onChangeTextInput2}
                editable={false}
                style={{
                  color: "#6E6880",
                  fontSize: 16,
                  marginRight: 4,
                  flex: 1,
                  paddingVertical: 12,
                }}
              />
            </View>
          </View>
          <View
            style={{
              marginBottom: 16,
            }}
          >
            <View
              style={{
                marginBottom: 5,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Phone"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/5j53x0d4_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginLeft: 11,
                  marginRight: 9,
                }}
              />
              <TextInput
                placeholder={"Add phone number"}
                value={textInput3}
                onChangeText={onChangeTextInput3}
                style={{
                  color: "#2C2636",
                  fontSize: 16,
                  marginRight: 4,
                  flex: 1,
                  paddingVertical: 15,
                }}
              />
            </View>
          </View>
          <View
            style={{
              marginBottom: 17,
            }}
          >
            <View
              style={{
                marginBottom: 5,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Target Score"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: selectedTarget === 600 ? "#A47551" : "#FFFFFF",
                  borderColor: "#2C26361A",
                  borderRadius: 16,
                  borderWidth: selectedTarget === 600 ? 0 : 1,
                  paddingVertical: 8,
                  marginRight: 8,
                }}
                onPress={() => setSelectedTarget(600)}
              >
                <Text
                  style={{
                    color: selectedTarget === 600 ? "#FFFFFF" : "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"600"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: selectedTarget === 700 ? "#A47551" : "#FFFFFF",
                  borderColor: "#2C26361A",
                  borderRadius: 16,
                  borderWidth: selectedTarget === 700 ? 0 : 1,
                  paddingVertical: 8,
                  marginRight: 8,
                }}
                onPress={() => setSelectedTarget(700)}
              >
                <Text
                  style={{
                    color: selectedTarget === 700 ? "#FFFFFF" : "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"700"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: selectedTarget === 800 ? "#A47551" : "#FFFFFF",
                  borderColor: "#2C26361A",
                  borderRadius: 16,
                  borderWidth: selectedTarget === 800 ? 0 : 1,
                  paddingVertical: 8,
                  marginRight: 9,
                }}
                onPress={() => setSelectedTarget(800)}
              >
                <Text
                  style={{
                    color: selectedTarget === 800 ? "#FFFFFF" : "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"800"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: selectedTarget === 900 ? "#A47551" : "#FFFFFF",
                  borderColor: "#2C26361A",
                  borderRadius: 16,
                  borderWidth: selectedTarget === 900 ? 0 : 1,
                  paddingVertical: 8,
                }}
                onPress={() => setSelectedTarget(900)}
              >
                <Text
                  style={{
                    color: selectedTarget === 900 ? "#FFFFFF" : "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"900"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={{
              alignItems: "center",
              borderRadius: 16,
              paddingVertical: 11,
            }}
            onPress={handleSave}
            disabled={saving}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#A47551", "#E07B54"]}
              style={{
                alignItems: "center",
                borderRadius: 16,
                paddingVertical: 11,
                width: "100%",
                opacity: saving ? 0.7 : 1,
              }}
            >
              {saving ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {"Save Changes"}
                </Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
