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
            marginLeft: 20,
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
              {"Challenges"}
            </Text>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#8B6BAE", "#A47551"]}
          style={{
            borderRadius: 16,
            paddingVertical: 20,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
              marginLeft: 19,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/g9n66y7w_expires_30_days.png",
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
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              >
                {"Active Challenges"}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              marginBottom: 4,
              marginLeft: 19,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 30,
              }}
            >
              {"3"}
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
              {"Complete them for bonus XP!"}
            </Text>
          </View>
        </LinearGradient>
        <View
          style={{
            alignSelf: "flex-start",
            marginBottom: 22,
            marginLeft: 21,
          }}
        >
          <Text
            style={{
              color: "#2C2636",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {"Active"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 22,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#A475514D",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
                marginHorizontal: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/f0ameqwb_expires_30_days.png",
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
                  marginRight: 11,
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
                    {"Speed Demon"}
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
                      width: 130,
                    }}
                  >
                    {"Answer 30 questions in 10 minutes"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingVertical: 1,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 4,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/2ce6lc44_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 11,
                      height: 11,
                      marginRight: 4,
                    }}
                  />
                  <Text
                    style={{
                      color: "#D4A853",
                      fontSize: 12,
                    }}
                  >
                    {"200"}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 10,
                    marginLeft: 15,
                  }}
                >
                  {"Hard"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                marginHorizontal: 17,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#E07B54"]}
                style={{
                  width: 117,
                  height: 7,
                  borderRadius: 28138600,
                }}
              ></LinearGradient>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#A475514D",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              marginBottom: 13,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
                marginHorizontal: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/3xg9ahda_expires_30_days.png",
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
                    {"Perfect Run"}
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
                      width: 142,
                    }}
                  >
                    {"Get 100% accuracy on 20 questions"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingVertical: 1,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 4,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/43jvbmh0_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 11,
                      height: 11,
                      marginRight: 4,
                    }}
                  />
                  <Text
                    style={{
                      color: "#D4A853",
                      fontSize: 12,
                    }}
                  >
                    {"300"}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#E07B54",
                    fontSize: 10,
                  }}
                >
                  {"Expert"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                marginHorizontal: 17,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#E07B54"]}
                style={{
                  width: 177,
                  height: 7,
                  borderRadius: 28138600,
                }}
              ></LinearGradient>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#A475514D",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
                marginHorizontal: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/266nma9t_expires_30_days.png",
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
                  marginRight: 11,
                }}
              >
                <View
                  style={{
                    marginBottom: 1,
                  }}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                    }}
                  >
                    {"Marathon"}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                    }}
                  >
                    {"Study for 3 hours non-stop"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingBottom: 3,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 4,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/musga7oy_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 11,
                      height: 11,
                      marginRight: 4,
                    }}
                  />
                  <Text
                    style={{
                      color: "#D4A853",
                      fontSize: 12,
                    }}
                  >
                    {"250"}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 10,
                    marginLeft: 14,
                  }}
                >
                  {"Hard"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                marginHorizontal: 17,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#E07B54"]}
                style={{
                  width: 238,
                  height: 7,
                  borderRadius: 28138600,
                }}
              ></LinearGradient>
            </View>
          </View>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            marginBottom: 22,
            marginLeft: 21,
          }}
        >
          <Text
            style={{
              color: "#2C2636",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {"Available"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 46,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/6cr9hxbb_expires_30_days.png",
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
                marginRight: 13,
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
                  {"Vocab Sprint"}
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
                  {"Learn 50 new words in 1 day"}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#A47551",
                borderRadius: 12,
                paddingVertical: 5,
                paddingHorizontal: 12,
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
              paddingVertical: 17,
              paddingHorizontal: 16,
              marginBottom: 13,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/4t0ttokv_expires_30_days.png",
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
                marginRight: 13,
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
                  {"Listening Ace"}
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
                    width: 150,
                  }}
                >
                  {"Score 90%+ on all listening parts"}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#A47551",
                borderRadius: 12,
                paddingVertical: 5,
                paddingHorizontal: 12,
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
              paddingVertical: 17,
              paddingHorizontal: 16,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/gcrw8h9d_expires_30_days.png",
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
                paddingRight: 45,
                marginRight: 13,
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
                  {"Community Hero"}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Answer 10 questions in forum"}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#A47551",
                borderRadius: 12,
                paddingVertical: 5,
                paddingHorizontal: 12,
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
