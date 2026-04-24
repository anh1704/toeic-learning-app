import { ArrowLeft, Lightbulb } from "lucide-react-native";
import React, { useEffect, useMemo, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { getResourceTips, ResourceTipItem } from "../../lib/tipsService";

type TipTab = "all" | "strategy" | "listening" | "reading";

export default () => {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState<TipTab>("all");
  const [tips, setTips] = useState<ResourceTipItem[]>([]);

  useEffect(() => {
    const loadTips = async () => {
      const data = await getResourceTips();
      setTips(data);
    };
    loadTips();
  }, []);

  const filteredTips = useMemo(() => {
    if (activeTab === "all") return tips;
    if (activeTab === "listening") {
      return tips.filter((tip) => tip.skill === "listening" || tip.tags.includes("listening"));
    }
    if (activeTab === "reading") {
      return tips.filter((tip) => tip.skill === "reading" || tip.tags.includes("reading"));
    }
    return tips.filter((tip) => tip.tags.includes(activeTab));
  }, [activeTab, tips]);

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
            marginBottom: 13,
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
                marginLeft: 10
              }}
            >
              {"Tips & Tricks"}
            </Text>
          </View>
        </View>
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
            style={{
              backgroundColor: activeTab === "all" ? "#A47551" : "#FFFFFF",
              borderRadius: 28138600,
              paddingVertical: 5,
              paddingHorizontal: 11,
              marginRight: 8,
            }}
            onPress={() => setActiveTab("all")}
          >
            <Text
              style={{
                color: activeTab === "all" ? "#FFFFFF" : "#000000",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"All"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: activeTab === "strategy" ? "#A47551" : "#FFFFFF",
              borderRadius: 28138600,
              paddingVertical: 5,
              paddingHorizontal: 11,
              marginRight: 9,
            }}
            onPress={() => setActiveTab("strategy")}
          >
            <Text
              style={{
                color: activeTab === "strategy" ? "#FFFFFF" : "#000000",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Strategy"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: activeTab === "listening" ? "#A47551" : "#FFFFFF",
              borderRadius: 28138600,
              paddingVertical: 5,
              paddingHorizontal: 11,
              marginRight: 9,
            }}
            onPress={() => setActiveTab("listening")}
          >
            <Text
              style={{
                color: activeTab === "listening" ? "#FFFFFF" : "#2C2636",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Listening"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: activeTab === "reading" ? "#A47551" : "#FFFFFF",
              borderRadius: 28138600,
              paddingVertical: 5,
              paddingHorizontal: 11,
            }}
            onPress={() => setActiveTab("reading")}
          >
            <Text
              style={{
                color: activeTab === "reading" ? "#FFFFFF" : "#2C2636",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Reading"}
            </Text>
          </TouchableOpacity>
        </View>
        {filteredTips.map((tip, index) => (
          <View
            key={tip.id}
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 14,
              marginBottom: 15,
              marginLeft: 20,
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
                marginRight: 36,
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
                    marginRight: 15,
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
                      fontSize: 12,
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
      </ScrollView>
    </SafeAreaView>
  );
};
