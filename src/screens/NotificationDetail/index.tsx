import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import {
  ArrowLeft,
  Bookmark,
  Share2,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react-native";
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
                  color: "#2C2636",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                {"Notification Detail"}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Bookmark size={20} color="#2C2636" style={{ marginRight: 12 }} />
            <Share2 size={20} color="#2C2636" />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#D4A853",
            paddingVertical: 19,
            marginBottom: 20,
            borderRadius: 16,
          }}
        >
          <Trophy size={32} color="#FFFFFF" style={{ marginBottom: 8 }} />
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
            <Trophy size={19} color="#D4A853" style={{ marginBottom: 4 }} />
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
            <Target size={19} color="#A47551" style={{ marginBottom: 4 }} />
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
            <TrendingUp size={19} color="#5B9E91" style={{ marginBottom: 4 }} />
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
