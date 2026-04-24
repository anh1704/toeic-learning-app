import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FAF6F1",
          paddingTop: 5,
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
          <Text
            style={{
              color: "#2C2636",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {"Common Mistakes"}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#F7EAE1",
            borderColor: "#F2D4C5",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 20,
            paddingRight: 43,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 4,
              marginLeft: 18,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/ztkd87xi_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 20,
                height: 20,
                marginRight: 8,
              }}
            />
            <Text
              style={{
                color: "#2C2636",
                fontSize: 14,
              }}
            >
              {"Learn from Errors"}
            </Text>
          </View>
          <Text
            style={{
              color: "#6E6880",
              fontSize: 14,
              marginLeft: 15,
            }}
          >
            {
              "Avoid these common mistakes that TOEIC test-takers frequently make"
            }
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            paddingHorizontal: 20,
            marginBottom: 21,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#A47551",
              borderColor: "#EBEBEC",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 8,
              paddingHorizontal: 12,
              marginRight: 8,
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
              {"All"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#EBEBEC",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 8,
              paddingHorizontal: 12,
              marginRight: 8,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {"Verb Tenses"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#EBEBEC",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 8,
              paddingHorizontal: 12,
              marginRight: 8,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {"Prepositions"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#EBEBEC",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 8,
              paddingHorizontal: 12,
              marginRight: 8,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {"Articles"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#EBEBEC",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 8,
              paddingHorizontal: 12,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {"Word Order"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#EEECED",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 18,
              paddingRight: 16,
              marginBottom: 18,
            }}
          >
            <TouchableOpacity
              style={{
                alignSelf: "flex-start",
                backgroundColor: "#E07B54",
                borderRadius: 16,
                paddingVertical: 4,
                paddingHorizontal: 12,
                marginBottom: 13,
                marginLeft: 16,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 10,
                }}
              >
                {"Verb Tenses"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#FDF8F6",
                borderColor: "#F7DFD6",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 12,
                marginBottom: 13,
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/31h1nhdn_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 16,
                  height: 16,
                  marginLeft: 12,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#E07B54",
                    fontSize: 10,
                    marginBottom: 4,
                    marginRight: 134,
                  }}
                >
                  {"Wrong"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"I am knowing the answer."}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#F7FAF9",
                borderColor: "#F7FAF9",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 12,
                marginBottom: 13,
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/ih6jfw96_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 16,
                  height: 16,
                  marginLeft: 12,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 10,
                    marginBottom: 4,
                    marginRight: 86,
                  }}
                >
                  {"Correct"}
                </Text>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"I know the answer."}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/34ubamq3_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  flex: 1,
                }}
              >
                {
                  "State verbs (know, understand, believe) are not usually used in continuous forms."
                }
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#EEECED",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 18,
              paddingRight: 16,
              marginBottom: 18,
            }}
          >
            <TouchableOpacity
              style={{
                alignSelf: "flex-start",
                backgroundColor: "#A47551",
                borderRadius: 16,
                paddingVertical: 4,
                paddingHorizontal: 12,
                marginBottom: 13,
                marginLeft: 16,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 10,
                }}
              >
                {"Prepositions"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#FDF8F6",
                borderColor: "#F7DFD6",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 12,
                marginBottom: 13,
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/lehusdp7_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 16,
                  height: 16,
                  marginLeft: 12,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#A47551",
                    fontSize: 10,
                    marginBottom: 4,
                    marginRight: 109,
                  }}
                >
                  {"Wrong"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"He is good in English."}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#F7FAF9",
                borderColor: "#F7FAF9",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 12,
                marginBottom: 13,
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/3az6etvn_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 16,
                  height: 16,
                  marginLeft: 12,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 10,
                    marginBottom: 4,
                    marginRight: 105,
                  }}
                >
                  {"Correct"}
                </Text>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"He is good at English."}
                </Text>
              </View>
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
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/tt7pxogc_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  marginRight: 18,
                }}
              >
                {'Use "good at" when talking about skills or subjects.'}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#EEECED",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 18,
              paddingRight: 16,
              marginBottom: 18,
            }}
          >
            <TouchableOpacity
              style={{
                alignSelf: "flex-start",
                backgroundColor: "#8B6BAE",
                borderRadius: 16,
                paddingVertical: 4,
                paddingHorizontal: 12,
                marginBottom: 13,
                marginLeft: 16,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 10,
                }}
              >
                {"Articles"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#FDF8F6",
                borderColor: "#F7DFD6",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 12,
                marginBottom: 13,
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/fkbox0ei_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 16,
                  height: 16,
                  marginLeft: 12,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#E07B54",
                    fontSize: 10,
                    marginBottom: 4,
                    marginRight: 66,
                  }}
                >
                  {"Wrong"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"She is teacher."}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#F7FAF9",
                borderColor: "#F7FAF9",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 12,
                marginBottom: 13,
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/t33g1e1v_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 16,
                  height: 16,
                  marginLeft: 12,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 10,
                    marginBottom: 4,
                    marginRight: 72,
                  }}
                >
                  {"Correct"}
                </Text>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"She is a teacher."}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/k19hvkdi_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  flex: 1,
                }}
              >
                {
                  'Use "a/an" with singular countable nouns when mentioning them for the first time.'
                }
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#EEECED",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 18,
              paddingRight: 16,
              marginBottom: 18,
            }}
          >
            <TouchableOpacity
              style={{
                alignSelf: "flex-start",
                backgroundColor: "#5B9E91",
                borderRadius: 16,
                paddingVertical: 4,
                paddingHorizontal: 12,
                marginBottom: 13,
                marginLeft: 16,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 10,
                }}
              >
                {"Word Order"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#FDF8F6",
                borderColor: "#F7DFD6",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 12,
                marginBottom: 13,
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/v7ncmiom_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 16,
                  height: 16,
                  marginLeft: 12,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#E07B54",
                    fontSize: 10,
                    marginBottom: 4,
                    marginRight: 146,
                  }}
                >
                  {"Wrong"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"I go always to work by bus."}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#F7FAF9",
                borderColor: "#F7FAF9",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 12,
                marginBottom: 13,
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/8t67eunt_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 16,
                  height: 16,
                  marginLeft: 12,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 10,
                    marginBottom: 4,
                    marginRight: 141,
                  }}
                >
                  {"Correct"}
                </Text>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"I always go to work by bus."}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/nu02ljjv_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  flex: 1,
                }}
              >
                {'Adverbs of frequency go before the main verb but after "be".'}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#EEECED",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 18,
              paddingRight: 16,
            }}
          >
            <TouchableOpacity
              style={{
                alignSelf: "flex-start",
                backgroundColor: "#D4A853",
                borderRadius: 16,
                paddingVertical: 4,
                paddingHorizontal: 12,
                marginBottom: 13,
                marginLeft: 16,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 10,
                }}
              >
                {"Subject-Verb Agreement"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#FDF8F6",
                borderColor: "#F7DFD6",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 12,
                marginBottom: 13,
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/oqh5hjzc_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 16,
                  height: 16,
                  marginLeft: 12,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#E07B54",
                    fontSize: 10,
                    marginBottom: 4,
                    marginRight: 114,
                  }}
                >
                  {"Wrong"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 14,
                  }}
                >
                  {"The team are winning."}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#F7FAF9",
                borderColor: "#F7FAF9",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 12,
                marginBottom: 13,
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/isach6f4_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 16,
                  height: 16,
                  marginLeft: 12,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#5B9E91",
                    fontSize: 10,
                    marginBottom: 4,
                    marginRight: 99,
                  }}
                >
                  {"Correct"}
                </Text>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"The team is winning."}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/57Y4lcQuwE/86hpttki_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  flex: 1,
                }}
              >
                {"In American English, collective nouns take singular verbs."}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
