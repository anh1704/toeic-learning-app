import { ArrowLeft, Search, Play, Headphones, Lightbulb, Download, Book, FileText, PlayCircle, Video } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  ScrollView,
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
          <Search size={16} color="#6E6880" style={{ marginLeft: 20, marginRight: 15 }} />
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
              <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: "#E07B54", alignItems: "center", justifyContent: "center", marginBottom: 9 }}>
                <Video size={20} color="#FFFFFF" />
              </View>
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
              <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: "#A47551", alignItems: "center", justifyContent: "center", marginBottom: 9 }}>
                <Headphones size={20} color="#FFFFFF" />
              </View>
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
              <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: "#D4A853", alignItems: "center", justifyContent: "center", marginBottom: 9 }}>
                <Lightbulb size={20} color="#FFFFFF" />
              </View>
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
              <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: "#5B9E91", alignItems: "center", justifyContent: "center", marginBottom: 9 }}>
                <Download size={20} color="#FFFFFF" />
              </View>
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
            <View style={{ width: 39, height: 39, borderRadius: 12, backgroundColor: "#A4755133", alignItems: "center", justifyContent: "center", marginRight: 12 }}>
              <FileText size={20} color="#A47551" />
            </View>
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
            <Download size={19} color="#A47551" />
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
            <View style={{ width: 39, height: 39, borderRadius: 12, backgroundColor: "#A4755133", alignItems: "center", justifyContent: "center", marginRight: 12 }}>
              <FileText size={20} color="#A47551" />
            </View>
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
            <Download size={19} color="#A47551" />
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
            <View style={{ width: 39, height: 39, borderRadius: 12, backgroundColor: "#A4755133", alignItems: "center", justifyContent: "center", marginRight: 12 }}>
              <FileText size={20} color="#A47551" />
            </View>
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
            <Download size={19} color="#A47551" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
