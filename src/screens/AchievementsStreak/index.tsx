import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
export default () => {
  const navigator = useNavigation();
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
          paddingRight: 20,
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
            marginLeft: 18,
          }}
        >
          <TouchableOpacity onPress={() => navigator.goBack()}
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
              {"Study Streak"}
            </Text>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#E07B54", "#A47551"]}
          style={{
            alignItems: "center",
            borderRadius: 16,
            paddingVertical: 24,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/j61az0zz_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              borderRadius: 16,
              width: 47,
              height: 47,
              marginBottom: 9,
            }}
          />
          <View
            style={{
              marginBottom: 4,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 48,
              }}
            >
              {"15"}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
              }}
            >
              {"Day Streak!"}
            </Text>
          </View>
        </LinearGradient>
        <View
          style={{
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 17,
            paddingHorizontal: 16,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              paddingTop: 1,
              marginBottom: 11,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {"This Week"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                marginRight: 13,
              }}
            >
              <View
                style={{
                  marginBottom: 5,
                  marginHorizontal: 13,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"M"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/kwvlvr60_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 13,
              }}
            >
              <View
                style={{
                  marginBottom: 5,
                  marginHorizontal: 14,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"T"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/ej5nhfo7_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 12,
              }}
            >
              <View
                style={{
                  marginBottom: 5,
                  marginHorizontal: 13,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"W"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/z4udjojn_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 13,
              }}
            >
              <View
                style={{
                  marginBottom: 5,
                  marginHorizontal: 14,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"T"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/n98nj1j2_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 13,
              }}
            >
              <View
                style={{
                  marginBottom: 5,
                  marginHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"F"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/l9eqr4d7_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 14,
              }}
            >
              <View
                style={{
                  marginBottom: 5,
                  marginHorizontal: 14,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"S"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/o59omgfp_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  marginBottom: 5,
                  marginHorizontal: 13,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"S"}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  backgroundColor: "#F0EBE4",
                  borderRadius: 28138600,
                  paddingVertical: 9,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"S"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            marginBottom: 22,
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              color: "#2C2636",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {"Streak Rewards"}
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
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#5B9E910D",
              borderColor: "#5B9E91",
              borderRadius: 16,
              borderWidth: 1,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/mlnqmh14_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 39,
                height: 39,
                marginRight: 12,
              }}
            />
            <View
              style={{
                flex: 1,
                marginRight: 12,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"7-Day Streak"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"50 XP Bonus"}
                </Text>
              </View>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/wl3x4t81_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 19,
                height: 19,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#5B9E910D",
              borderColor: "#5B9E91",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
              marginBottom: 13,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/y3t3zedw_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 39,
                height: 39,
                marginRight: 12,
              }}
            />
            <View
              style={{
                flex: 1,
                marginRight: 12,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"14-Day Streak"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"100 XP Bonus"}
                </Text>
              </View>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/w2wlgszf_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 19,
                height: 19,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              padding: 17,
              marginBottom: 12,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                paddingVertical: 11,
                paddingHorizontal: 12,
                marginRight: 12,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 12,
                }}
              >
                {"30"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 1,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"30-Day Streak"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Streak King Badge"}
                </Text>
              </View>
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
              padding: 17,
              marginBottom: 13,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                paddingVertical: 11,
                paddingHorizontal: 12,
                marginRight: 12,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 12,
                }}
              >
                {"60"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"60-Day Streak"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"500 XP + Premium Trial"}
                </Text>
              </View>
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
              padding: 17,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                paddingVertical: 11,
                paddingHorizontal: 9,
                marginRight: 12,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 12,
                }}
              >
                {"100"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"100-Day Streak"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Legend Badge + 1000 XP"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
