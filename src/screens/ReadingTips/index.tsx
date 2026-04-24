import { ArrowLeft, Lightbulb } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getReadingTips, TipItem } from "../../lib/tipsService";

export default () => {
  const navigation = useNavigation<any>();
  const [tips, setTips] = useState<TipItem[]>([]);

  useEffect(() => {
    const loadTips = async () => {
      const data = await getReadingTips();
      setTips(data);
    };
    loadTips();
  }, []);

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
          paddingTop: 5,
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
          <TouchableOpacity
            onPress={() => navigation.goBack()}
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
            {"Reading Tips"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          {tips.map((tip, index) => (
            <TouchableOpacity
              key={tip.id}
              onPress={() => navigation.navigate("ReadingTipDetail")}
              activeOpacity={0.7}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#EAE9EB",
                borderRadius: 16,
                borderWidth: 1,
                padding: 18,
                marginBottom: index === tips.length - 1 ? 0 : 17,
              }}
            >
              <View
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 16,
                  backgroundColor: "#FBF6EE",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 18,
                }}
              >
                <Lightbulb size={28} color="#D4A853" />
              </View>
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginBottom: 4,
                  }}
                >
                  {tip.title}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {tip.content}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
