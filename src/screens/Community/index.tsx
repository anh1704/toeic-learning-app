import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
          paddingTop: 18,
          paddingRight: 19,
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
          <Text
            style={{
              color: "#2C2636",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {"Community"}
          </Text>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#A47551", "#8B6BAE"]}
          style={{
            borderRadius: 16,
            paddingVertical: 18,
            marginBottom: 21,
            marginLeft: 19,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/r9cq2nzm_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 23,
              height: 23,
              marginBottom: 7,
              marginLeft: 27,
            }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              marginBottom: 1,
              marginLeft: 27,
            }}
          >
            {"5 Learners"}
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              marginLeft: 29,
            }}
          >
            {"Join discussions & study together"}
          </Text>
        </LinearGradient>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              marginRight: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("CommunityForum")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/3nat44im_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginLeft: 16,
                  marginRight: 12,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Forum"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("CommunityGroups")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/pdneam9w_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginLeft: 16,
                  marginRight: 12,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Groups"}
                </Text>
              </View>
            </TouchableOpacity>
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
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 16,
              marginRight: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("CommunityChat")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/sm80xcja_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginLeft: 16,
                  marginRight: 12,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Chat"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 16,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("CommunityRanking")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/e0jqxtv2_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginLeft: 16,
                  marginRight: 12,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Rankings"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              marginBottom: 21,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {"Hot Topics"}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("CommunityPost")}
            >
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#2C263633",
                  borderRadius: 16,
                  borderWidth: 1,
                  paddingTop: 16,
                  paddingBottom: 17,
                  paddingLeft: 27,
                  marginBottom: 12,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    paddingVertical: 3,
                    paddingRight: 80,
                    marginBottom: 8,
                  }}
                >
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {"Tip for Part 3 conversation?"}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 123,
                  }}
                >
                  <View
                    style={{
                      marginRight: 13,
                    }}
                  >
                    <Text
                      style={{
                        color: "#6E6880",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      {"Phe Pham"}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: 13,
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/qzltlw8j_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={{
                        width: 9,
                        height: 9,
                        marginRight: 6,
                      }}
                    />
                    <Text
                      style={{
                        color: "#6E6880",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      {"65"}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/314518ss_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={{
                        width: 9,
                        height: 8,
                        marginRight: 4,
                      }}
                    />
                    <Text
                      style={{
                        color: "#6E6880",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      {"47"}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#2C263633",
                borderRadius: 16,
                borderWidth: 1,
                paddingTop: 16,
                paddingBottom: 17,
                paddingLeft: 27,
                marginBottom: 12,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingVertical: 4,
                  paddingLeft: 1,
                  paddingRight: 68,
                  marginBottom: 8,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"How I scored 800 in 3 months"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 123,
                }}
              >
                <View
                  style={{
                    marginRight: 14,
                  }}
                >
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {"Ngoc Anh"}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 13,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/7yewquiw_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 9,
                      height: 9,
                      marginRight: 6,
                    }}
                  />
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {"48"}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/omf9xc3t_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 9,
                      height: 8,
                      marginRight: 4,
                    }}
                  />
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {"90"}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#2C263633",
                borderRadius: 16,
                borderWidth: 1,
                paddingTop: 16,
                paddingBottom: 17,
                paddingLeft: 27,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingVertical: 3,
                  paddingRight: 80,
                  marginBottom: 8,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Tip  for Part 3 conversation?"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 123,
                }}
              >
                <View
                  style={{
                    marginRight: 13,
                  }}
                >
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {"Phe Pham"}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 14,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/caoj2uaw_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 9,
                      height: 9,
                      marginRight: 6,
                    }}
                  />
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {"55"}
                  </Text>
                </View>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/wweo74wd_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 9,
                    height: 8,
                    marginRight: 4,
                  }}
                />
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"36"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
