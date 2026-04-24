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
          paddingTop: 18,
          paddingRight: 19,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 17,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
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
                marginLeft: 10
              }}
            >
              {"Forum"}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("CommunityCreatePost")}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/7wlu5qzg_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 35,
                height: 35,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 22,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#A47551",
              borderRadius: 28138600,
              paddingVertical: 6,
              paddingHorizontal: 11,
              marginRight: 8,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Latest"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 28138600,
              borderWidth: 1,
              paddingVertical: 6,
              paddingHorizontal: 13,
              marginRight: 8,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Popular"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 28138600,
              borderWidth: 1,
              paddingVertical: 6,
              paddingHorizontal: 13,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Unanswered"}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
            marginLeft: 19,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("CommunityPost")}
          >
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 16,
                paddingRight: 29,
                marginBottom: 12,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 9,
                  marginLeft: 16,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#A475511A",
                    borderRadius: 28138600,
                    paddingVertical: 7,
                    paddingHorizontal: 11,
                    marginRight: 9,
                  }}
                  onPress={() => alert("Pressed!")}
                >
                  <Text
                    style={{
                      color: "#A47551",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {"M"}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    marginRight: 9,
                  }}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {"Pham .P"}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {"2h ago"}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: "stretch",
                  }}
                ></View>
                <View
                  style={{
                    backgroundColor: "#8B6BAE1A",
                    borderRadius: 28138600,
                    paddingTop: 2,
                    paddingHorizontal: 8,
                  }}
                >
                  <Text
                    style={{
                      color: "#8B6BAE",
                      fontSize: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {"Listening"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 6,
                  marginLeft: 16,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Tips for Part 3 conversations?"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 9,
                  marginLeft: 16,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"I always struggle with Part 3..."}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 16,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/h4s0i89i_expires_30_days.png",
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
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                    marginRight: 17,
                  }}
                >
                  {"36"}
                </Text>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/nc2f5pne_expires_30_days.png",
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
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"22"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 16,
              paddingRight: 29,
              marginBottom: 13,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 9,
                marginLeft: 18,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#A475511A",
                  borderRadius: 28138600,
                  paddingVertical: 7,
                  paddingHorizontal: 12,
                  marginRight: 9,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#A47551",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"H"}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"Hoang L."}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"5h ago"}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "#8B6BAE1A",
                  borderRadius: 28138600,
                  paddingTop: 2,
                  paddingHorizontal: 8,
                }}
              >
                <Text
                  style={{
                    color: "#8B6BAE",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"Tips"}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                marginBottom: 6,
                marginLeft: 16,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"How I scored 900 in 3 months"}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                marginBottom: 9,
                marginLeft: 16,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"Here is my study plan that helped me..."}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/xe127xso_expires_30_days.png",
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
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginRight: 16,
                }}
              >
                {"358"}
              </Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/5eagmcef_expires_30_days.png",
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
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"280"}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 16,
              paddingRight: 29,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 9,
                marginLeft: 16,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#A475511A",
                  borderRadius: 28138600,
                  paddingVertical: 7,
                  paddingHorizontal: 13,
                  marginRight: 9,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#A47551",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"L"}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"Lan N."}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"1d ago"}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "#8B6BAE1A",
                  borderRadius: 28138600,
                  paddingTop: 2,
                  paddingHorizontal: 8,
                }}
              >
                <Text
                  style={{
                    color: "#8B6BAE",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"Grammar"}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                marginBottom: 5,
                marginLeft: 16,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Grammar question: had + pp"}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                marginBottom: 9,
                marginLeft: 16,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"When do we use past perfect?"}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 16,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/x8gpcdg3_expires_30_days.png",
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
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"56"}
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/nheihnc0_expires_30_days.png",
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
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"56"}
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
              paddingVertical: 16,
              paddingRight: 29,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 9,
                marginLeft: 16,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#A475511A",
                  borderRadius: 28138600,
                  paddingVertical: 7,
                  paddingHorizontal: 12,
                  marginRight: 9,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#A47551",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"D"}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  marginRight: 11,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"Duy V."}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"1d ago"}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "#8B6BAE1A",
                  borderRadius: 28138600,
                  paddingTop: 2,
                  paddingHorizontal: 8,
                }}
              >
                <Text
                  style={{
                    color: "#8B6BAE",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"Reading"}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                marginBottom: 6,
                marginLeft: 16,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Part 7 time management"}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                marginBottom: 9,
                marginLeft: 16,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"How do you manage time for reading?"}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/bwyvq2vv_expires_30_days.png",
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
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginRight: 20,
                }}
              >
                {"11"}
              </Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/gz7ntxbz_expires_30_days.png",
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
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"88"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
