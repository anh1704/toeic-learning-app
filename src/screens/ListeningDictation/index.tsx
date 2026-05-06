import { 
  ArrowLeft, 
  SkipBack, 
  Play, 
  SkipForward, 
  Repeat, 
  Volume2 
} from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";

type ListeningDictationProps = NativeStackScreenProps<
  RootStackParamList,
  "ListeningDictation"
>;

export default (props: ListeningDictationProps) => {
  const [answer, setAnswer] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FAF6F1",
      }}
      edges={["top", "left", "right"]}
    >
      <ScrollView
        scrollEnabled={false}
        style={{
          flex: 1,
          backgroundColor: "#FAF6F1",
          paddingTop: 12,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 24,
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity 
            onPress={() => props.navigation.goBack()}
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
              color: "#111111",
              fontSize: 20,
              fontWeight: "bold",
              letterSpacing: -0.2,
              marginLeft: 16,
            }}
          >
            {"Dictation Practice"}
          </Text>
        </View>

        {/* Audio Player Card */}
        <View
          style={{
            backgroundColor: "#F1E9E6",
            borderRadius: 24,
            paddingVertical: 28,
            paddingHorizontal: 20,
            marginHorizontal: 20,
            marginBottom: 44,
          }}
        >
          {/* Controls */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 34,
            }}
          >
            <TouchableOpacity
              onPress={() => alert("Previous")}
              style={{
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SkipBack size={28} color="#2C2636" strokeWidth={1.5} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => alert("Play/Pause")}
              style={{
                width: 72,
                height: 72,
                borderRadius: 36,
                backgroundColor: "#B07B4D",
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 28,
              }}
            >
              {/* Thêm marginLeft nhỏ để cân bằng tam giác Play vào giữa */}
              <Play size={32} color="#FFFFFF" style={{ marginLeft: 4 }} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => alert("Next")}
              style={{
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SkipForward size={28} color="#2C2636" strokeWidth={1.5} />
            </TouchableOpacity>
          </View>

          {/* Subtitle */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Repeat size={18} color="#6E6880" style={{ marginRight: 10 }} />
            <Text
              style={{
                color: "#77718A",
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              {"Listen and type what you hear"}
            </Text>
          </View>

          {/* Progress Bar */}
          <View
            style={{
              backgroundColor: "#E6DFDA", // Màu nền thanh progress tiệp màu thẻ hơn
              borderRadius: 999,
              height: 6, // Làm thanh progress thon lại cho thanh lịch
            }}
          >
            <View
              style={{
                width: "45%", // Giả lập % đang chạy
                height: "100%",
                backgroundColor: "#B07B4D",
                borderRadius: 999,
              }}
            />
          </View>
        </View>

        {/* Text Input Card */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 24,
            marginHorizontal: 20,
            marginBottom: 34,
            paddingHorizontal: 20,
            paddingTop: 24,
            paddingBottom: 22,
            minHeight: 180,
          }}
        >
          <TextInput
            value={answer}
            onChangeText={setAnswer}
            placeholder="Type what you hear..."
            placeholderTextColor="#A9A4B1"
            multiline
            style={{
              flex: 1,
              color: "#1F1C26",
              fontSize: 17,
              textAlignVertical: "top",
              minHeight: 130,
            }}
          />
        </View>

        {/* Bottom Buttons */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
            marginBottom: 24,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 18,
              paddingVertical: 16,
              marginRight: 16,
            }}
            onPress={() => alert("Replay Audio")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Volume2 size={20} color="#111111" style={{ marginRight: 8 }} />
              <Text
                style={{
                  color: "#111111",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {"Replay"}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#B07B4D",
              borderRadius: 18,
              paddingVertical: 16,
            }}
            onPress={() =>
              props.navigation.goBack()
            }
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {"Check Answer"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};