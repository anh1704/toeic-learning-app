import { ArrowLeft } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
export default () => {
  const navigation = useNavigation();
  const [textInput1, onChangeTextInput1] = useState("");
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
          paddingRight: 17,
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 17,
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
              marginLeft: 10
            }}
          >
            {"Discussion"}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 17,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 14,
              marginLeft: 16,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#A475511A",
                borderRadius: 28138600,
                paddingVertical: 8,
                paddingHorizontal: 15,
                marginRight: 9,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 16,
                  marginRight: 2,
                }}
              >
                {"P"}
              </Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/ydohusyk_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 1,
                  height: 1,
                }}
              />
            </TouchableOpacity>
            <View>
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
                  {"Pham P."}
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
                  {"2h ago"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              marginBottom: 8,
              marginLeft: 16,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {"Tips for Part 3 conversations?"}
            </Text>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              marginBottom: 13,
              marginLeft: 16,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 14,
                width: 278,
              }}
            >
              {
                "I always struggle with Part 3 in the listening section. The conversations are too fast and I can't keep up with both speakers. Does anyone have tips for improving?"
              }
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
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/u206cpmm_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 2,
                }}
              />
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {" 56"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 17,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/lytyqq1l_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 4,
                }}
              />
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                }}
              >
                {" 24"}
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
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/axm91myf_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 3,
                }}
              />
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {" Share"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            paddingBottom: 1,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              color: "#2C2636",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {"Replies (3)"}
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
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 12,
              paddingRight: 12,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 9,
                marginLeft: 12,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#8B6BAE1A",
                  borderRadius: 28138600,
                  paddingVertical: 7,
                  paddingHorizontal: 12,
                  marginRight: 9,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#8B6BAE",
                    fontSize: 12,
                  }}
                >
                  {"H"}
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 12,
                  marginRight: 10,
                }}
              >
                {"Hoang L."}
              </Text>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"1h ago"}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginBottom: 10,
                marginLeft: 12,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                  width: 254,
                }}
              >
                {
                  "Great question! I recommend practicing with transcripts first."
                }
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 12,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/b97tkdzi_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 11,
                  height: 11,
                  marginRight: 3,
                }}
              />
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {" 12"}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 12,
              paddingRight: 12,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 9,
                marginLeft: 12,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#8B6BAE1A",
                  borderRadius: 28138600,
                  paddingVertical: 7,
                  paddingHorizontal: 12,
                  marginRight: 9,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#8B6BAE",
                    fontSize: 12,
                  }}
                >
                  {"T"}
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 12,
                  marginRight: 10,
                }}
              >
                {"Thu H."}
              </Text>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"45m ago"}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginBottom: 10,
                marginLeft: 12,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                }}
              >
                {"I use the shadowing technique, it helps a lot!"}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 12,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/hih91rue_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 11,
                  height: 11,
                }}
              />
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {" 15"}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 12,
              paddingRight: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 9,
                marginLeft: 12,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#8B6BAE1A",
                  borderRadius: 28138600,
                  paddingVertical: 7,
                  paddingHorizontal: 12,
                  marginRight: 9,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#8B6BAE",
                    fontSize: 12,
                  }}
                >
                  {"D"}
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 12,
                  marginRight: 10,
                }}
              >
                {"Duy V."}
              </Text>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 10,
                  }}
                >
                  {"30m ago"}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginBottom: 10,
                marginLeft: 12,
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                }}
              >
                {"Try listening to podcasts at 1.25x speed."}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 12,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/05x5qicl_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 11,
                  height: 11,
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
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 48,
            marginLeft: 17,
          }}
        >
          <TextInput
            placeholder={"Write a reply..."}
            value={textInput1}
            onChangeText={onChangeTextInput1}
            style={{
              color: "#2C2636",
              fontSize: 14,
              marginRight: 8,
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 12,
              paddingHorizontal: 16,
            }}
          />
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Ikm4tDedUs/6sbcgxre_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 43,
              height: 43,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
