import { ArrowLeft, Lightbulb } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { getListeningTips, ListeningTipItem } from "../../lib/tipsService";

// ICONS array removed, using Lightbulb icon instead
export default () => {
  const navigation = useNavigation<any>();
  const [tips, setTips] = useState<ListeningTipItem[]>([]);

  useEffect(() => {
    const loadTips = async () => {
      const data = await getListeningTips();
      setTips(data);
    };
    loadTips();
  }, []);

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
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
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
          <View>
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              {"Listening Tips"}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginBottom: 19,
            marginHorizontal: 21,
          }}
        >
          {tips.map((tip, index) => (
            <View
              key={tip.id}
              style={{
                flexDirection: "row",
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                paddingVertical: 14,
                marginBottom: index === tips.length - 1 ? 0 : 15,
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
                  marginLeft: 15,
                  marginRight: 12,
                }}
              >
                <Lightbulb size={28} color="#D4A853" />
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 24,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                      marginRight: 16,
                    }}
                  >
                    {tip.title}
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#A475511A",
                      borderRadius: 24562000,
                      paddingVertical: 3,
                      paddingHorizontal: 13,
                    }}
                    onPress={() => null}
                  >
                    <Text
                      style={{
                        color: "#A47551",
                        fontSize: 11,
                      }}
                    >
                      {tip.badge}
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {tip.content}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
