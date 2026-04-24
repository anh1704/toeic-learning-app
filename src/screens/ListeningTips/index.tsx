import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
export default () => {
  const navigation = useNavigation<any>();
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
                color: "#000000",
                fontSize: 20,
                fontWeight: "bold",
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
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 14,
              marginBottom: 15,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/bgp315ep_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 34,
                height: 34,
                marginLeft: 15,
                marginRight: 12,
              }}
            />
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
                  marginRight: 48,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginRight: 16,
                  }}
                >
                  {"Focus on Key Words"}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#A475511A",
                    borderRadius: 24562000,
                    paddingVertical: 3,
                    paddingHorizontal: 13,
                  }}
                  onPress={() => alert("Pressed!")}
                >
                  <Text
                    style={{
                      color: "#A47551",
                      fontSize: 12,
                    }}
                  >
                    {"General"}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {
                  "Listen for specific nouns, verbs, and adjectives that give meaning to sentences."
                }
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 14,
              marginBottom: 15,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/4iv8z37s_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 34,
                height: 34,
                marginLeft: 15,
                marginRight: 12,
              }}
            />
            <View
              style={{
                flex: 1,
                marginRight: 43,
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
                  {"Predict Answers"}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#A475511A",
                    borderRadius: 24562000,
                    paddingVertical: 3,
                    paddingHorizontal: 14,
                  }}
                  onPress={() => alert("Pressed!")}
                >
                  <Text
                    style={{
                      color: "#A47551",
                      fontSize: 10,
                    }}
                  >
                    {"Strategy"}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {"Read questions before listening to know what to focus on."}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 14,
              marginBottom: 15,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/7f2czi38_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 34,
                height: 34,
                marginLeft: 15,
                marginRight: 12,
              }}
            />
            <View>
              <View
                style={{
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                  marginRight: 27,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginRight: 15,
                  }}
                >
                  {"Watch for Distractors"}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#A475511A",
                    borderRadius: 24562000,
                    paddingVertical: 3,
                    paddingHorizontal: 14,
                  }}
                  onPress={() => alert("Pressed!")}
                >
                  <Text
                    style={{
                      color: "#A47551",
                      fontSize: 10,
                    }}
                  >
                    {"Part 1"}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  width: 234,
                }}
              >
                {
                  "Be careful of words that sound similar but have different meanings."
                }
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 14,
              marginBottom: 15,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/ceyvpqxr_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 34,
                height: 34,
                marginLeft: 15,
                marginRight: 12,
              }}
            />
            <View
              style={{
                flex: 1,
                marginRight: 39,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                  marginRight: 40,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginRight: 16,
                  }}
                >
                  {"Note Speaker Changes"}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#A475511A",
                    borderRadius: 24562000,
                    paddingVertical: 3,
                    paddingHorizontal: 14,
                  }}
                  onPress={() => alert("Pressed!")}
                >
                  <Text
                    style={{
                      color: "#A47551",
                      fontSize: 10,
                    }}
                  >
                    {"Part 3"}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {"In Part 3, pay attention to who is speaking and their tone."}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 14,
              marginBottom: 15,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/mh1xsdb3_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 34,
                height: 34,
                marginLeft: 15,
                marginRight: 12,
              }}
            />
            <View>
              <View
                style={{
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                  marginRight: 72,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginRight: 16,
                  }}
                >
                  {"Main Idea First"}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#A475511A",
                    borderRadius: 24562000,
                    paddingVertical: 3,
                    paddingHorizontal: 14,
                  }}
                  onPress={() => alert("Pressed!")}
                >
                  <Text
                    style={{
                      color: "#A47551",
                      fontSize: 10,
                    }}
                  >
                    {"Part 4"}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  width: 239,
                }}
              >
                {
                  "In Part 4, identify the main topic within the first few seconds."
                }
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 14,
              marginBottom: 15,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/vhwqow4w_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 34,
                height: 34,
                marginLeft: 15,
                marginRight: 12,
              }}
            />
            <View>
              <View
                style={{
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                  marginRight: 42,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginRight: 16,
                  }}
                >
                  {"Practice Daily"}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#A475511A",
                    borderRadius: 24562000,
                    paddingVertical: 3,
                    paddingHorizontal: 14,
                  }}
                  onPress={() => alert("Pressed!")}
                >
                  <Text
                    style={{
                      color: "#A47551",
                      fontSize: 10,
                    }}
                  >
                    {"General"}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  width: 210,
                }}
              >
                {
                  "Even 15 minutes of daily listening can significantly improve your score."
                }
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 14,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/t1vzzzut_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 34,
                height: 34,
                marginLeft: 15,
                marginRight: 12,
              }}
            />
            <View>
              <View
                style={{
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                  marginRight: 42,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginRight: 16,
                  }}
                >
                  {"Practice Daily"}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#A475511A",
                    borderRadius: 24562000,
                    paddingVertical: 3,
                    paddingHorizontal: 14,
                  }}
                  onPress={() => alert("Pressed!")}
                >
                  <Text
                    style={{
                      color: "#A47551",
                      fontSize: 10,
                    }}
                  >
                    {"General"}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  width: 210,
                }}
              >
                {
                  "Even 15 minutes of daily listening can significantly improve your score."
                }
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
