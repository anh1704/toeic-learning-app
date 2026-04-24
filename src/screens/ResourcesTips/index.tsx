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
          paddingRight: 20,
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 13,
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
              {"Tips & Tricks"}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#A47551",
              borderRadius: 28138600,
              paddingVertical: 5,
              paddingHorizontal: 11,
              marginRight: 8,
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
              {"All"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 28138600,
              paddingVertical: 5,
              paddingHorizontal: 11,
              marginRight: 9,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Strategy"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 28138600,
              paddingVertical: 5,
              paddingHorizontal: 11,
              marginRight: 9,
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
              {"Listening"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 28138600,
              paddingVertical: 5,
              paddingHorizontal: 11,
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
              {"Reading"}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            paddingVertical: 14,
            marginBottom: 15,
            marginLeft: 20,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/fuacysrq_expires_30_days.png",
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
                marginRight: 12,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginRight: 15,
                }}
              >
                {"The 2-Second Rule"}
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
                  {"Strategy"}
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
                width: 226,
              }}
            >
              {"Skip questions you cant answer within 2 seconds in Part 5."}
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
            marginLeft: 20,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/dg705rr7_expires_30_days.png",
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
              paddingRight: 38,
              marginRight: 36,
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
                  marginRight: 17,
                }}
              >
                {"Predict Before Listen"}
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
                  {"Listening"}
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
              }}
            >
              {"Read all options before the audio plays."}
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
            marginLeft: 20,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/9b9fou9g_expires_30_days.png",
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
              paddingRight: 38,
              marginRight: 36,
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
                  marginRight: 17,
                }}
              >
                {"Elimination Method"}
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
              {"Cross out obviously wrong answers first."}
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
            marginLeft: 20,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/jqobsphb_expires_30_days.png",
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
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginRight: 15,
                  flex: 1,
                }}
              >
                {"Time Boxing"}
              </Text>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#A475511A",
                  borderRadius: 24562000,
                  paddingVertical: 3,
                  marginRight: 15,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#A47551",
                    fontSize: 12,
                  }}
                >
                  {"Strategy"}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  height: 20,
                  flex: 1,
                }}
              ></View>
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
              }}
            >
              {"Allocate specific time to each section."}
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
            marginLeft: 20,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/7e68hqz4_expires_30_days.png",
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
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginRight: 15,
                  flex: 1,
                }}
              >
                {"Active Reading"}
              </Text>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#A475511A",
                  borderRadius: 24562000,
                  paddingVertical: 3,
                  marginRight: 15,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#A47551",
                    fontSize: 12,
                  }}
                >
                  {"Reading"}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  height: 20,
                  flex: 1,
                }}
              ></View>
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
                marginRight: 23,
              }}
            >
              {"Underline key words as you read passages."}
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
            marginLeft: 20,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/qya7tmpn_expires_30_days.png",
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
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginRight: 15,
                }}
              >
                {"Word Families"}
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
                  {"Vocabulary"}
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
            marginLeft: 20,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/3qvvo9wj_expires_30_days.png",
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
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  marginRight: 15,
                  flex: 1,
                }}
              >
                {"Context Clues"}
              </Text>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#A475511A",
                  borderRadius: 24562000,
                  paddingVertical: 3,
                  marginRight: 15,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#A47551",
                    fontSize: 12,
                  }}
                >
                  {"Reading"}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  height: 20,
                  flex: 1,
                }}
              ></View>
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
                marginRight: 30,
              }}
            >
              {"Use surrounding words to guess unknown vocab."}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
