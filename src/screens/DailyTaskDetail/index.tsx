import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
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
          <View>
            <Text
              style={{
                color: "#2C2636",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {"Task Detail"}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#A47551",
            borderRadius: 16,
            paddingVertical: 20,
            paddingHorizontal: 19,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/86831g3h_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 47,
                height: 47,
                marginRight: 12,
              }}
            />
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 18,
                  }}
                >
                  {"Practice Listening Part 1"}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                  {"Answer 10 photo description questions"}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 9,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                  {"Progress: 6/10"}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                  {"60%"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#FFFFFF33",
                borderRadius: 41877300,
              }}
            >
              <View
                style={{
                  width: 199,
                  height: 7,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 41877300,
                }}
              ></View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
            marginLeft: 20,
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
              marginRight: 10,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/g6zrz13m_expires_30_days.png",
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
                alignSelf: "center",
                marginBottom: 1,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 12,
                }}
              >
                {"15 minutes"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 10,
                }}
              >
                {"Time Limit"}
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
              marginRight: 10,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/ds0zlpmu_expires_30_days.png",
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
                  color: "#2C2636",
                  fontSize: 12,
                }}
              >
                {"Intermediate"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 10,
                }}
              >
                {"Difficulty"}
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/i3ugsjv3_expires_30_days.png",
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
                  color: "#2C2636",
                  fontSize: 12,
                }}
              >
                {"50 XP"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 10,
                }}
              >
                {"Reward"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            padding: 17,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              marginBottom: 13,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {"Requirements"}
            </Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 13,
              }}
            >
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderRadius: 41877300,
                  paddingVertical: 2,
                  paddingHorizontal: 6,
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 10,
                  }}
                >
                  {"6"}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 11,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Complete 10 questions"}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"6/10"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/y3ajkbkc_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginRight: 11,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Accuracy above 70%"}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"75%"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderRadius: 41877300,
                  paddingVertical: 2,
                  paddingHorizontal: 6,
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 10,
                  }}
                >
                  {"?"}
                </Text>
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
                  }}
                >
                  {"Finish within time limit"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#D4A8531A", "#E07B540D"]}
          style={{
            borderColor: "#D4A8534D",
            borderRadius: 16,
            borderWidth: 1,
            padding: 17,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/v17k4hwy_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 19,
                height: 19,
                marginRight: 8,
              }}
            />
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {"Rewards"}
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 9,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/c1zzufl1_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"50 XP"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 9,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/b84bb3tv_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Listening skill +2"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/3jn14s1l_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Daily streak maintained"}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            padding: 17,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/241vju51_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 19,
                height: 19,
                marginRight: 8,
              }}
            />
            <View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {"Pro Tips"}
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 9,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/e4yldq7s_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"Listen carefully to verb tenses"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 9,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/exyri1i3_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"Pay attention to the number of people"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/29ztr1vf_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"Notice the location and setting"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#A47551",
            borderRadius: 16,
            paddingVertical: 14,
            marginBottom: 5,
            marginLeft: 20,
          }}
          onPress={() => alert("Pressed!")}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/ue58fygs_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              borderRadius: 16,
              width: 19,
              height: 19,
              marginRight: 4,
            }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            {"Start Task"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
