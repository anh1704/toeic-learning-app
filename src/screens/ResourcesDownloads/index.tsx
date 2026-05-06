import { ArrowLeft, BookOpen, FileText, Headphones, Download, Check, CheckCircle, Lock } from "lucide-react-native";
import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
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
            marginBottom: 20,
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
                marginLeft: 10
              }}
            >
              {"Downloads"}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 25,
            marginLeft: 22,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#A47551",
              borderRadius: 28138600,
              paddingVertical: 2,
              paddingHorizontal: 11,
              marginRight: 28,
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
              paddingVertical: 2,
              paddingHorizontal: 11,
              marginRight: 28,
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
              {"Downloaded"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 28138600,
              paddingVertical: 2,
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
              {"Free"}
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
            marginBottom: 12,
            marginHorizontal: 22,
          }}
        >
          <View style={{ width: 39, height: 39, borderRadius: 12, backgroundColor: "#5B9E911A", alignItems: "center", justifyContent: "center", marginRight: 12 }}>
            <CheckCircle size={20} color="#5B9E91" />
          </View>
          <View
            style={{
              flex: 1,
              marginRight: 13,
            }}
          >
            <View
              style={{
                paddingRight: 44,
                marginBottom: 2,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                }}
              >
                {"TOEIC Complete Guide 2026"}
              </Text>
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
              }}
            >
              {"PDF · 12.5 MB"}
            </Text>
          </View>
          <View style={{ width: 31, height: 31, borderRadius: 16, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center" }}>
            <Download size={16} color="#6E6880" />
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
            padding: 16,
            marginBottom: 12,
            marginHorizontal: 22,
          }}
        >
          <View style={{ width: 39, height: 39, borderRadius: 12, backgroundColor: "#5B9E911A", alignItems: "center", justifyContent: "center", marginRight: 12 }}>
            <CheckCircle size={20} color="#5B9E91" />
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
                {"Top 1000 TOEIC Words"}
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
                {"PDF · 5.2 MB"}
              </Text>
            </View>
          </View>
          <View style={{ width: 31, height: 31, borderRadius: 16, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center" }}>
            <Download size={16} color="#6E6880" />
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
            paddingVertical: 17,
            paddingHorizontal: 16,
            marginBottom: 12,
            marginHorizontal: 22,
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
                {"Grammar Cheat Sheet"}
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
                {"PDF · 2.1 MB"}
              </Text>
            </View>
          </View>
          <View style={{ width: 31, height: 31, borderRadius: 16, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center" }}>
            <Download size={16} color="#A47551" />
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
            paddingVertical: 17,
            paddingHorizontal: 16,
            marginBottom: 12,
            marginHorizontal: 22,
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
                {"Listening Scripts Pack"}
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
                {"PDF · 8.7 MB"}
              </Text>
            </View>
          </View>
          <View style={{ width: 31, height: 31, borderRadius: 16, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center" }}>
            <Download size={16} color="#A47551" />
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
            padding: 16,
            marginBottom: 12,
            marginHorizontal: 22,
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
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <View
                style={{
                  marginRight: 9,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Practice Test #1 Audio"}
                </Text>
              </View>
              <Lock size={11} color="#A47551" />
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
                {"MP3 · 45 MB"}
              </Text>
            </View>
          </View>
          <View style={{ width: 31, height: 31, borderRadius: 16, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center" }}>
            <Download size={16} color="#A47551" />
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
            paddingVertical: 17,
            paddingHorizontal: 16,
            marginBottom: 12,
            marginHorizontal: 22,
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
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <View
                style={{
                  marginRight: 9,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Practice Test #2 Audio"}
                </Text>
              </View>
              <Lock size={11} color="#A47551" />
            </View>
            <Text
              style={{
                color: "#6E6880",
                fontSize: 12,
              }}
            >
              {"MP3 · 48 MB"}
            </Text>
          </View>
          <View style={{ width: 31, height: 31, borderRadius: 16, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center" }}>
            <Download size={16} color="#A47551" />
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
            paddingVertical: 17,
            paddingHorizontal: 16,
            marginBottom: 24,
            marginHorizontal: 22,
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
                {"Vocabulary Flashcard Pack"}
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
                {"PDF · 3.4 MB"}
              </Text>
            </View>
          </View>
          <View style={{ width: 31, height: 31, borderRadius: 16, backgroundColor: "#FAF6F1", alignItems: "center", justifyContent: "center" }}>
            <Download size={16} color="#A47551" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
