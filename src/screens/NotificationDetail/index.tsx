import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, NavigationProp } from "@react-navigation/native";
export default () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FAF6F1",
          paddingTop: 18,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 21,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/cb9n90z2_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 38,
                  height: 38,
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
                {"Notification Detail"}
              </Text>
            </View>
          </View>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/prshyvqs_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 79,
              height: 35,
            }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#D4A853",
            paddingVertical: 19,
            marginBottom: 20,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/4p9cdt0p_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 79,
              height: 79,
              marginBottom: 3,
            }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 24,
              textAlign: "center",
              width: 144,
            }}
          >
            {"New Achievement Unlocked!"}
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
            }}
          >
            {"2 minutes ago"}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingTop: 1,
            marginBottom: 23,
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 24,
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 14,
              }}
            >
              {
                'You\'ve completed 50 listening exercises with an average score of 88%. This achievement shows your dedication and consistent practice in improving your listening comprehension skills.  Your listening score has improved from 320 to 340 in the past month. Keep up the excellent work!  \nThis badge comes with: \n• 150 XP bonus\n• Exclusive audio practice materials \n• Special "Listening Master" badge on your profile'
              }
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
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
              paddingVertical: 13,
              marginRight: 20,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/jnarersa_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 19,
                height: 19,
                marginBottom: 4,
              }}
            />
            <View
              style={{
                marginBottom: 1,
              }}
            >
              <Text
                style={{
                  color: "#D4A853",
                  fontSize: 18,
                }}
              >
                {"+150"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 10,
                }}
              >
                {"XP Earned"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 13,
              marginRight: 20,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/lj8uci07_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 19,
                height: 19,
                marginBottom: 4,
              }}
            />
            <View
              style={{
                marginBottom: 1,
              }}
            >
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 18,
                }}
              >
                {"50"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 10,
                }}
              >
                {"Exercises"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 13,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/lqr2jefk_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 19,
                height: 19,
                marginBottom: 4,
              }}
            />
            <View
              style={{
                marginBottom: 1,
              }}
            >
              <Text
                style={{
                  color: "#5B9E91",
                  fontSize: 18,
                }}
              >
                {"88%"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 10,
                }}
              >
                {"Avg Score"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 48,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 12,
              marginRight: 27,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Dismiss"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#A47551",
              borderRadius: 16,
              paddingVertical: 12,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"View Badge"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
