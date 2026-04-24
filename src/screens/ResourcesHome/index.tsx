import { ArrowLeft } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
export default () => {
  const navigation = useNavigation<any>();
  const [textInput1, onChangeTextInput1] = useState("");
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
          <View>
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 10
              }}
            >
              {"Resources"}
            </Text>
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
            marginBottom: 10,
            marginHorizontal: 20,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/vqct38bb_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              borderRadius: 16,
              width: 16,
              height: 16,
              marginLeft: 20,
              marginRight: 15,
            }}
          />
          <TextInput
            placeholder={"Search resources..."}
            value={textInput1}
            onChangeText={onChangeTextInput1}
            style={{
              color: "#2C2636",
              fontSize: 16,
              marginRight: 4,
              flex: 1,
              paddingVertical: 15,
            }}
          />
        </View>
        <View
          style={{
            marginBottom: 26,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 20,
                paddingLeft: 13,
                marginRight: 21,
              }}
              onPress={() => navigation.navigate("ResourcesVideo")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/imqjl6n7_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 40,
                  height: 40,
                  marginBottom: 9,
                }}
              />
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingBottom: 1,
                  marginBottom: 4,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"Videos"}
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
                    fontWeight: "bold",
                  }}
                >
                  {"45 items"}
                </Text>
              </View>
            </TouchableOpacity>
            <View
              pointerEvents="none"
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 20,
                paddingLeft: 13,
                opacity: 0.5,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/gywdq2w6_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 40,
                  height: 40,
                  marginBottom: 9,
                }}
              />
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingBottom: 1,
                  marginBottom: 4,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"Podcats"}
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
                    fontWeight: "bold",
                  }}
                >
                  {"30 items"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 20,
                paddingLeft: 13,
                marginRight: 21,
              }}
              onPress={() => navigation.navigate("ResourcesTips")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/03b3lt2h_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 40,
                  height: 40,
                  marginBottom: 9,
                }}
              />
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingBottom: 1,
                  marginBottom: 4,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"Tips"}
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
                    fontWeight: "bold",
                  }}
                >
                  {"80 items"}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 20,
                paddingLeft: 13,
              }}
              onPress={() => navigation.navigate("ResourcesDownloads")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/3liiwtgt_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 40,
                  height: 40,
                  marginBottom: 9,
                }}
              />
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingBottom: 1,
                  marginBottom: 4,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"Downloads"}
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
                    fontWeight: "bold",
                  }}
                >
                  {"20 items"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            marginBottom: 8,
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
            {"Featured"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 88,
            marginHorizontal: 18,
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/t21rj25s_expires_30_days.png",
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
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Complete TOEIC Guide 2026"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                }}
              >
                {"PDF · 12 MB"}
              </Text>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/wpe3pq4g_expires_30_days.png",
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
              paddingVertical: 17,
              paddingHorizontal: 16,
              marginBottom: 13,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/97aj0zud_expires_30_days.png",
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
                  {"Top 500 TOEIC Words"}
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
                  {"PDF · 5 MB"}
                </Text>
              </View>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/j5ttqy7n_expires_30_days.png",
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
              paddingVertical: 17,
              paddingHorizontal: 16,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/80t7adsh_expires_30_days.png",
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
                  marginBottom: 1,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Listening Strategy Video"}
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
                  {"Video · 15 min"}
                </Text>
              </View>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/x8nlf6bu_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 16,
                width: 19,
                height: 19,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
