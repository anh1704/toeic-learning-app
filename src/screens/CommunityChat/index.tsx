import { ArrowLeft } from "lucide-react-native";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  getGroupMessages,
  sendMessage,
  subscribeToMessages,
  GroupMessage,
} from "../../lib/communityService";
import { supabase } from "../../lib/supabase";

export default () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const groupId = route.params?.groupId;
  const scrollViewRef = useRef<ScrollView>(null);

  const [messages, setMessages] = useState<GroupMessage[]>([]);
  const [messageText, setMessageText] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string>("");

  useEffect(() => {
    if (!groupId) {
      Alert.alert("Error", "Group ID not found");
      navigation.goBack();
      return;
    }

    getCurrentUser();
    loadMessages();

    // Subscribe to real-time messages
    const unsubscribe = subscribeToMessages(groupId, (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
      // Auto scroll to bottom
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    });

    return () => {
      unsubscribe();
    };
  }, [groupId]);

  const getCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setCurrentUserId(user.id);
    }
  };

  const loadMessages = async () => {
    if (!groupId) return;
    
    try {
      setLoading(true);
      const data = await getGroupMessages(groupId, 50);
      setMessages(data);
      // Scroll to bottom after loading
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: false });
      }, 100);
    } catch (error) {
      console.error("Error loading messages:", error);
      Alert.alert("Error", "Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!messageText.trim() || !groupId) return;

    try {
      setSending(true);
      const newMessage = await sendMessage(groupId, messageText.trim());
      // Message will be added via real-time subscription
      setMessageText("");
    } catch (error) {
      console.error("Error sending message:", error);
      Alert.alert("Error", "Failed to send message");
    } finally {
      setSending(false);
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const getInitial = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : "?";
  };

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
          <Text
            style={{
              color: "#2C2636",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 10
            }}
          >
            {"Group Chat"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 161,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              marginBottom: 11,
            }}
          >
            <View
              style={{
                alignSelf: "flex-start",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: 8,
                borderWidth: 1,
                paddingVertical: 13,
                paddingHorizontal: 12,
              }}
            >
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 12,
                  marginBottom: 3,
                }}
              >
                {"Phe"}
              </Text>
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingRight: 62,
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    width: 164,
                  }}
                >
                  {"Has anyone tried the new listening exercises?"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingRight: 201,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"10:30"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              paddingTop: 1,
              paddingRight: 1,
              marginBottom: 13,
            }}
          >
            <View
              style={{
                backgroundColor: "#A47551",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 16,
                padding: 12,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  marginBottom: 5,
                }}
              >
                {"Yes! Part 3 is really good now"}
              </Text>
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingRight: 163,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 10,
                  }}
                >
                  {"10:32"}
                </Text>
              </View>
            </View>
            <View
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                alignSelf: "stretch",
                alignItems: "center",
              }}
            ></View>
          </View>
          <View
            style={{
              marginBottom: 13,
            }}
          >
            <View
              style={{
                alignSelf: "flex-start",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: 8,
                borderWidth: 1,
                paddingVertical: 13,
                paddingHorizontal: 12,
              }}
            >
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 12,
                  marginBottom: 3,
                }}
              >
                {"Thu"}
              </Text>
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingRight: 55,
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    width: 171,
                  }}
                >
                  {"I agree, the audio quality is much better"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingRight: 201,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"10:33"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              paddingRight: 1,
              marginBottom: 13,
            }}
          >
            <View
              style={{
                backgroundColor: "#A47551",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 16,
                padding: 12,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                  {"Scored 85% on the latest set!"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingRight: 165,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 10,
                  }}
                >
                  {"10:35"}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                alignSelf: "flex-start",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: 8,
                borderWidth: 1,
                paddingVertical: 13,
                paddingHorizontal: 12,
              }}
            >
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 12,
                  marginBottom: 3,
                }}
              >
                {"Anh"}
              </Text>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Wow congratulations! Any tips?"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingRight: 176,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"10:36"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/9tjzh671_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 45,
              height: 45,
              marginRight: 9,
            }}
          />
          <TextInput
            placeholder={"Type a message..."}
            value={messageText}
            onChangeText={setMessageText}
            editable={!sending}
            style={{
              color: "#2C2636",
              fontSize: 14,
              marginRight: 8,
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 14,
              paddingHorizontal: 16,
            }}
          />
          <TouchableOpacity
            onPress={handleSendMessage}
            disabled={sending || !messageText.trim()}
          >
            {sending ? (
              <ActivityIndicator size="small" color="#A47551" />
            ) : (
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/qwziswcd_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 43,
                  height: 45,
                  opacity: messageText.trim() ? 1 : 0.5,
                }}
              />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
          
