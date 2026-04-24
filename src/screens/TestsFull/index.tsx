import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAvailableTests } from "../../lib/toeicService";

export default () => {
  const navigation = useNavigation<any>();

  const [tests, setTests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getAvailableTests('full');
      setTests(data);
      setLoading(false);
    })();
  }, []);

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }

    navigation.navigate("Tabs", { screen: "Tests" });
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
          paddingTop: 19,
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
          <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/d1ghdj4v_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 37,
                height: 37,
                marginRight: 12,
              }}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: "#2C2636",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {"Full Test"}
            </Text>
          </View>
        </View>
        {loading ? (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 }}>
            <ActivityIndicator size="large" color="#A47551" />
          </View>
        ) : tests.length === 0 ? (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 }}>
            <Text style={{ color: "#6E6880" }}>No tests available right now.</Text>
          </View>
        ) : (
          tests.map((test) => (
            <View
              key={test.id}
              style={{
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 25,
                marginBottom: 20,
                marginLeft: 20,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/96g8b84z_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 63,
                  height: 63,
                  marginBottom: 17,
                }}
              />
              <View
                style={{
                  marginBottom: 8,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {test.title}
                </Text>
              </View>
              <View
                style={{
                  marginBottom: 17,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {`${test.test_type === 'mini' ? 'Mini Test' : 'Full Test'} · ${Math.round(test.duration / 60)} minutes`}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  alignSelf: "stretch",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 16,
                  paddingVertical: 12,
                  marginHorizontal: 25,
                }}
                onPress={() => navigation.navigate("TestsInProgress", { testId: test.id })}
                activeOpacity={0.7}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={["#E07B54", "#A47551"]}
                  style={{
                    alignSelf: "stretch",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 16,
                    paddingVertical: 12,
                    marginHorizontal: 25,
                    width: "100%",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/5nn87rnr_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      borderRadius: 16,
                      width: 19,
                      height: 19,
                      marginRight: 7,
                    }}
                  />
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {" Start Test"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
