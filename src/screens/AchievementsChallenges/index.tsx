import { ArrowLeft, Swords, Zap, CircleCheckBig, Timer, Star, Languages, Headphones, Users, Sparkle, Sparkles, Clock, Goal } from "lucide-react-native";
import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
export default () => {
  const navigator = useNavigation();
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
          paddingRight: 20,
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigator.goBack()}
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
                marginLeft: 10,
              }}
            >
              {"Challenges"}
            </Text>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#8B6BAE", "#A47551"]}
          style={{
            borderRadius: 16,
            paddingVertical: 20,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
              marginLeft: 19,
            }}
          >
            <Goal size={19} color="#FFFFFF" style={{ marginRight: 8 }} />
            <View>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              >
                {"Active Challenges"}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              marginBottom: 4,
              marginLeft: 19,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 30,
              }}
            >
              {"3"}
            </Text>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              marginLeft: 19,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
              }}
            >
              {"Complete them for bonus XP!"}
            </Text>
          </View>
        </LinearGradient>
        <View
          style={{
            alignSelf: "flex-start",
            marginBottom: 10,
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
            {"Active"}
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
              borderColor: "#A475514D",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
                marginHorizontal: 16,
              }}
            >
              <View
                style={{
                  width: 47,
                  height: 47,
                  borderRadius: 16,
                  backgroundColor: "#E07B54",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Zap size={26} color="#FFFFFF" />
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 11,
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
                    {"Speed Demon"}
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
                      width: 130,
                    }}
                  >
                    {"Answer 30 questions in 10 minutes"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingVertical: 1,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 4,
                  }}
                >
                  <Sparkles size={11} color="#D4A853" fill="#FFFFFF" style={{ marginRight: 4 }} />
                  <Text
                    style={{
                      color: "#D4A853",
                      fontSize: 12,
                    }}
                  >
                    {"200"}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 10,
                    marginLeft: 15,
                  }}
                >
                  {"Hard"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                marginHorizontal: 17,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#E07B54"]}
                style={{
                  width: 117,
                  height: 7,
                  borderRadius: 28138600,
                }}
              ></LinearGradient>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#A475514D",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              marginBottom: 13,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
                marginHorizontal: 16,
              }}
            >
              <View
                style={{
                  width: 47,
                  height: 47,
                  borderRadius: 16,
                  backgroundColor: "#A47551",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <CircleCheckBig size={26} color="#FFFFFF" />
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 12,
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
                    {"Perfect Run"}
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
                      width: 142,
                    }}
                  >
                    {"Get 100% accuracy on 20 questions"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingVertical: 1,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 4,
                  }}
                >
                  <Sparkles size={11} color="#D4A853" fill="#FFFFFF" style={{ marginRight: 4 }} />
                  <Text
                    style={{
                      color: "#D4A853",
                      fontSize: 12,
                    }}
                  >
                    {"300"}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#E07B54",
                    fontSize: 10,
                    marginLeft: 5
                  }}
                >
                  {"Expert"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                marginHorizontal: 17,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#E07B54"]}
                style={{
                  width: 177,
                  height: 7,
                  borderRadius: 28138600,
                }}
              ></LinearGradient>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#A475514D",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
                marginHorizontal: 16,
              }}
            >
              <View
                style={{
                  width: 47,
                  height: 47,
                  borderRadius: 16,
                  backgroundColor: "#8B6BAE",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Clock size={26} color="#FFFFFF" />
              </View>
              <View
                style={{
                  flex: 1,
                  marginRight: 11,
                }}
              >
                <View
                  style={{
                    marginBottom: 1,
                  }}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                    }}
                  >
                    {"Marathon"}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                    }}
                  >
                    {"Study for 3 hours non-stop"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingBottom: 3,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 4,
                  }}
                >
                  <Sparkles size={11} color="#D4A853" fill="#FFFFFF" style={{ marginRight: 4 }} />
                  <Text
                    style={{
                      color: "#D4A853",
                      fontSize: 12,
                    }}
                  >
                    {"250"}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#D4A853",
                    fontSize: 10,
                    marginLeft: 14,
                  }}
                >
                  {"Hard"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                marginHorizontal: 17,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A47551", "#E07B54"]}
                style={{
                  width: 238,
                  height: 7,
                  borderRadius: 28138600,
                }}
              ></LinearGradient>
            </View>
          </View>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            marginBottom: 10,
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
            {"Available"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 20,
            marginLeft: 20,
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
            <View
              style={{
                width: 39,
                height: 39,
                borderRadius: 16,
                backgroundColor: "#5B9E91",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Languages size={22} color="#FFFFFF" />
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
                  {"Vocab Sprint"}
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
                  {"Learn 50 new words in 1 day"}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#A47551",
                borderRadius: 12,
                paddingVertical: 5,
                paddingHorizontal: 12,
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
                {"Start"}
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
              marginBottom: 13,
            }}
          >
            <View
              style={{
                width: 39,
                height: 39,
                borderRadius: 16,
                backgroundColor: "#D4A853",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Headphones size={22} color="#FFFFFF" />
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
                  {"Listening Ace"}
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
                    width: 150,
                  }}
                >
                  {"Score 90%+ on all listening parts"}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#A47551",
                borderRadius: 12,
                paddingVertical: 5,
                paddingHorizontal: 12,
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
                {"Start"}
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
            }}
          >
            <View
              style={{
                width: 39,
                height: 39,
                borderRadius: 16,
                backgroundColor: "#E07B54",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Users size={22} color="#FFFFFF" />
            </View>
            <View
              style={{
                flex: 1,
                paddingRight: 45,
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
                  {"Community Hero"}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Answer 10 questions in forum"}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#A47551",
                borderRadius: 12,
                paddingVertical: 5,
                paddingHorizontal: 12,
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
                {"Start"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
