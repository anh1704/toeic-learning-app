import { ArrowLeft, BookOpen, ArrowLeftRight, AlertTriangle, FileSearch, TrendingUp, Bookmark, Trophy, List, Scale, XCircle, TextInitial, ChartColumn, BookMarked, Award } from "lucide-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
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
          paddingTop: 19,
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
              marginLeft: 10,
            }}
          >
            {"Grammar"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 21,
            marginLeft: 20,
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
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#EEEDEF",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 11,
                marginRight: 13,
              }}
              onPress={() => navigation.navigate("Grammar")}
            >
              <View style={{
                width: 48, height: 48, borderRadius: 14,
                backgroundColor: "#E07B54",
                alignItems: "center", justifyContent: "center",
                marginBottom: 11,
              }}>
                <List size={24} color="#FFFFFF" />
              </View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 10,
                }}
              >
                {"Grammar List"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#EEEDEF",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 11,
                marginRight: 13,
              }}
              onPress={() => navigation.navigate("GrammarComparison")}
            >
              <View style={{
                width: 48, height: 48, borderRadius: 14,
                backgroundColor: "#5B9E91",
                alignItems: "center", justifyContent: "center",
                marginBottom: 11,
              }}>
                <Scale size={24} color="#FFFFFF" />
              </View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 10,
                }}
              >
                {"Comparison"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#EEEDEF",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 11,
              }}
              onPress={() => navigation.navigate("GrammarMistakes")}
            >
              <View style={{
                width: 48, height: 48, borderRadius: 14,
                backgroundColor: "#D4183D",
                alignItems: "center", justifyContent: "center",
                marginBottom: 11,
              }}>
                <XCircle size={24} color="#FFFFFF" />
              </View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 10,
                }}
              >
                {"Common Mistakes"}
              </Text>
            </TouchableOpacity>
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
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#EEEDEF",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 11,
                marginRight: 13,
                opacity: 0.5,
              }}
            >
              <View style={{
                width: 48, height: 48, borderRadius: 14,
                backgroundColor: "#8B6BAE",
                alignItems: "center", justifyContent: "center",
                marginBottom: 11,
              }}>
                <TextInitial size={24} color="#FFFFFF" />
              </View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 10,
                }}
              >
                {"In Context"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#EEEDEF",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 11,
                marginRight: 13,
                opacity: 0.5,
              }}
            >
              <View style={{
                width: 48, height: 48, borderRadius: 14,
                backgroundColor: "#A47551",
                alignItems: "center", justifyContent: "center",
                marginBottom: 11,
              }}>
                <ChartColumn size={24} color="#FFFFFF" />
              </View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 10,
                }}
              >
                {"Progress"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#EEEDEF",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 11,
                opacity: 0.5,
              }}
            >
              <View style={{
                width: 48, height: 48, borderRadius: 14,
                backgroundColor: "#D4A853",
                alignItems: "center", justifyContent: "center",
                marginBottom: 11,
              }}>
                <BookMarked size={24} color="#FFFFFF" />
              </View>
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 10,
                }}
              >
                {"Boookmarks"}
              </Text>
            </TouchableOpacity>
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
              color: "#000000",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {"Grammar Challenge"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 47,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#EEEDEF",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 19,
              paddingHorizontal: 14,
              marginBottom: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <View style={{
                width: 48, height: 48, borderRadius: 14,
                backgroundColor: "#5B9E91",
                alignItems: "center", justifyContent: "center",
                marginRight: 12,
              }}>
                <Award size={24} color="#FFFFFF" />
              </View>
              <View
                style={{
                  marginRight: 22,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginBottom: 2,
                  }}
                >
                  {"Grammar Basics"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Test your fundamental grammar knowledge"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#FBF9F7",
                  borderRadius: 12,
                  paddingVertical: 8,
                  marginRight: 8,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    marginBottom: 2,
                  }}
                >
                  {"Questions"}
                </Text>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"10"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#FBF9F7",
                  borderRadius: 12,
                  paddingVertical: 8,
                  marginRight: 8,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    marginBottom: 2,
                  }}
                >
                  {"Time"}
                </Text>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"5 min"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#FBF9F7",
                  borderRadius: 12,
                  paddingVertical: 8,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    marginBottom: 2,
                  }}
                >
                  {"Points"}
                </Text>
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 14,
                  }}
                >
                  {"50 XP"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#5B9E91",
                borderRadius: 12,
                paddingVertical: 8,
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
                {"Start Challenge"}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#EEEDEF",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 19,
              paddingHorizontal: 14,
              marginBottom: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <View style={{
                width: 48, height: 48, borderRadius: 14,
                backgroundColor: "#A47551",
                alignItems: "center", justifyContent: "center",
                marginRight: 12,
              }}>
                <Award size={24} color="#FFFFFF" />
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 22,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginBottom: 2,
                  }}
                >
                  {"Intermediate Challenge"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Mixed grammar topics for practice"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#FBF9F7",
                  borderRadius: 12,
                  paddingVertical: 8,
                  marginRight: 8,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    marginBottom: 2,
                  }}
                >
                  {"Questions"}
                </Text>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"15"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#FBF9F7",
                  borderRadius: 12,
                  paddingVertical: 8,
                  marginRight: 8,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    marginBottom: 2,
                  }}
                >
                  {"Time"}
                </Text>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"10 min"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#FBF9F7",
                  borderRadius: 12,
                  paddingVertical: 8,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    marginBottom: 2,
                  }}
                >
                  {"Points"}
                </Text>
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 14,
                  }}
                >
                  {"100 XP"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#A47551",
                borderRadius: 12,
                paddingVertical: 8,
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
                {"Start Challenge"}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#EEEDEF",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 19,
              paddingHorizontal: 14,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <View style={{
                width: 48, height: 48, borderRadius: 14,
                backgroundColor: "#E07B54",
                alignItems: "center", justifyContent: "center",
                marginRight: 12,
              }}>
                <Award size={24} color="#FFFFFF" />
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 22,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    marginBottom: 2,
                  }}
                >
                  {"Expert Level"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Advanced grammar for high scorers"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#FBF9F7",
                  borderRadius: 12,
                  paddingVertical: 8,
                  marginRight: 8,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    marginBottom: 2,
                  }}
                >
                  {"Questions"}
                </Text>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"20"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#FBF9F7",
                  borderRadius: 12,
                  paddingVertical: 8,
                  marginRight: 8,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    marginBottom: 2,
                  }}
                >
                  {"Time"}
                </Text>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"15 min"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#FBF9F7",
                  borderRadius: 12,
                  paddingVertical: 8,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    marginBottom: 2,
                  }}
                >
                  {"Points"}
                </Text>
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 14,
                  }}
                >
                  {"200 XP"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#E07B54",
                borderRadius: 12,
                paddingVertical: 8,
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
                {"Start Challenge"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
