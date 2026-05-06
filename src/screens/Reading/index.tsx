import { ArrowLeft, BarChart2, ChevronRight, PenLine, FileText, ScrollText, Layers, Zap, BookOpen, Lightbulb, Eye, Brain } from "lucide-react-native";
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
          paddingTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
            marginHorizontal: 20,
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
              marginRight: 12,
            }}
          >
            <ArrowLeft size={20} color="#2C2636" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {"Reading"}
          </Text>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
            }}
          ></View>
          <View
            style={{
              paddingHorizontal: 2,
            }}
          >
            <Text
              style={{
                color: "#A47551",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"History"}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#9678B4",
            borderRadius: 16,
            paddingVertical: 21,
            paddingRight: 18,
            marginBottom: 25,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 6,
              marginLeft: 18,
            }}
          >
            <BookOpen size={18} color="#FFFFFF" style={{ marginRight: 8 }} />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
              }}
            >
              {"Reading Score"}
            </Text>
          </View>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 30,
              marginBottom: 3,
              marginLeft: 18,
            }}
          >
            {"310 / 495"}
          </Text>
          <View
            style={{
              backgroundColor: "#AF99C6",
              borderRadius: 16,
              marginLeft: 18,
            }}
          >
            <View
              style={{
                width: 248,
                height: 8,
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
              }}
            ></View>
          </View>
        </View>
        <View
          style={{
            marginBottom: 25,
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ReadingPart5")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 18,
              marginBottom: 17,
            }}
          >
            <View style={{
              width: 48, height: 48, borderRadius: 14,
              backgroundColor: "#8B6BAE",
              alignItems: "center", justifyContent: "center",
              marginRight: 18,
            }}>
              <PenLine size={24} color="#FFFFFF" />
            </View>
            <View
              style={{
                marginRight: 18,
              }}
            >
              <View
                style={{
                  marginBottom: 1,
                  marginRight: 26,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Part 5: Incomplete Sentences"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"30 questions"}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderRadius: 16,
                }}
              >
                <View
                  style={{
                    width: 139,
                    height: 6,
                    backgroundColor: "#8B6BAE",
                    borderRadius: 16,
                  }}
                ></View>
              </View>
            </View>
            <ChevronRight size={20} color="#6E6880" />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 18,
              marginBottom: 17,
            }}
          >
            <View style={{
              width: 48, height: 48, borderRadius: 14,
              backgroundColor: "#A47551",
              alignItems: "center", justifyContent: "center",
              marginRight: 18,
            }}>
              <FileText size={24} color="#FFFFFF" />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 18,
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
                    color: "#000000",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Part 6: Text Completion"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                    marginRight: 83,
                  }}
                >
                  {"16 questions"}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderRadius: 16,
                }}
              >
                <View
                  style={{
                    width: 100,
                    height: 6,
                    backgroundColor: "#A47551",
                    borderRadius: 16,
                  }}
                ></View>
              </View>
            </View>
            <ChevronRight size={20} color="#6E6880" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 18,
              marginBottom: 17,
            }}
          >
            <View style={{
              width: 48, height: 48, borderRadius: 14,
              backgroundColor: "#E07B54",
              alignItems: "center", justifyContent: "center",
              marginRight: 18,
            }}>
              <ScrollText size={24} color="#FFFFFF" />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 18,
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
                    color: "#000000",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Part 7: Single Passages"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                    marginRight: 80,
                  }}
                >
                  {"29 questions"}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderRadius: 16,
                }}
              >
                <View
                  style={{
                    width: 70,
                    height: 6,
                    backgroundColor: "#E07B54",
                    borderRadius: 16,
                  }}
                ></View>
              </View>
            </View>
            <ChevronRight size={20} color="#6E6880" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 18,
            }}
          >
            <View style={{
              width: 48, height: 48, borderRadius: 14,
              backgroundColor: "#5B9E91",
              alignItems: "center", justifyContent: "center",
              marginRight: 18,
            }}>
              <Layers size={24} color="#FFFFFF" />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 18,
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
                    color: "#000000",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Part 7: Multi Passages"}
                </Text>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                    fontWeight: "bold",
                    marginRight: 72,
                  }}
                >
                  {"25 questions"}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderRadius: 16,
                }}
              >
                <View
                  style={{
                    width: 50,
                    height: 6,
                    backgroundColor: "#5B9E91",
                    borderRadius: 16,
                  }}
                ></View>
              </View>
            </View>
            <ChevronRight size={20} color="#6E6880" />
          </View>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            paddingBottom: 1,
            marginBottom: 15,
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
            {"Extra Practice"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 39,
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 12,
              marginRight: 14,
              opacity: 0.5,
            }}
          >
            <Eye size={20} color="#6E6880" style={{ marginBottom: 8 }} />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 10,
                fontWeight: "bold",
              }}
            >
              {"Speed Read"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 12,
              marginRight: 13,
            }}
            onPress={() => navigation.navigate("ReadingGrammar")}
          >
            <Brain size={20} color="#6E6880" style={{ marginBottom: 8 }} />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 10,
                fontWeight: "bold",
              }}
            >
              {"Grammar"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#EAE9EB",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 12,
            }}
            onPress={() => navigation.navigate("ReadingTips")}
          >
            <Lightbulb size={20} color="#6E6880" style={{ marginBottom: 8 }} />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 10,
                fontWeight: "bold",
              }}
            >
              {"Tips"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
