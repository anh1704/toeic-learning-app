import { ArrowLeft, RefreshCw } from "lucide-react-native";
import React, { useCallback, useState } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { supabase } from "../../lib/supabase";

export default () => {
  const navigation = useNavigation<any>();
  const [counts, setCounts] = useState({
    total: 0,
    today: 0,
    yesterday: 0,
    threeDays: 0,
    oneWeek: 0,
  });

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      (async () => {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) return;

        const { data } = await supabase
          .from("vocabulary_bank_favorites")
          .select("created_at")
          .eq("user_id", user.id);

        if (isActive && data) {
          const now = new Date();
          const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
          const msPerDay = 24 * 60 * 60 * 1000;

          let cToday = 0;
          let cYesterday = 0;
          let c3Days = 0;
          let c7Days = 0;

          data.forEach((r) => {
            if (!r.created_at) return;
            const d = new Date(r.created_at);
            const startOfD = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
            const diffDays = Math.round((startOfToday - startOfD) / msPerDay);

            if (diffDays === 0) cToday++;
            else if (diffDays === 1) cYesterday++;
            else if (diffDays === 3) c3Days++;
            else if (diffDays === 7) c7Days++;
          });

          setCounts({
            total: data.length,
            today: cToday,
            yesterday: cYesterday,
            threeDays: c3Days,
            oneWeek: c7Days,
          });
        }
      })();

      return () => {
        isActive = false;
      };
    }, []),
  );

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
              marginRight: 12,
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
            {"Spaced Repetition"}
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              marginBottom: 5,
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#8B6BAE", "#A47551"]}
              style={{
                borderRadius: 16,
                paddingVertical: 20,
                width: "100%",
              }}
            >
              <RefreshCw
                size={24}
                color="#FFFFFF"
                style={{
                  marginBottom: 8,
                  marginLeft: 19,
                }}
              />
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                  marginLeft: 19,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 20,
                  }}
                >
                  {`${counts.today} words due`}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginLeft: 19,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                  {"Review now to keep your memory strong"}
                </Text>
              </View>
            </LinearGradient>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
              }}
            >
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 22,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 12,
                marginRight: 12,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  marginBottom: 1,
                  marginHorizontal: 12,
                }}
              >
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 24,
                  }}
                >
                  {"85%"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {"Retention"}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 12,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  marginBottom: 1,
                  marginHorizontal: 12,
                }}
              >
                <Text
                  style={{
                    color: "#A47551",
                    fontSize: 24,
                  }}
                >
                  {String(counts.total)}
                </Text>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {"Words Reviewed"}
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingTop: 1,
            }}
          >
            <View
              style={{
                alignSelf: "flex-start",
                marginBottom: 4,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {"Review Schedule"}
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
                paddingVertical: 13,
                paddingHorizontal: 12,
                marginBottom: 13,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/2za0mw2n_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {`Today - ${counts.today} words`}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#A47551",
                  borderRadius: 28138600,
                  paddingVertical: 3,
                  paddingHorizontal: 13,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"Start"}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
                paddingHorizontal: 12,
                marginBottom: 12,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/4yvo6id4_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {`1 day ago - ${counts.yesterday} words`}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
                paddingHorizontal: 12,
                marginBottom: 13,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/19dlwqhb_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {`3 days ago - ${counts.threeDays} words`}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 13,
                paddingHorizontal: 12,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/3u2w3x83_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {`1 week ago - ${counts.oneWeek} words`}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
