import { ArrowLeft, Headphones, Image as ImageIcon, MessageSquare, Users, Radio, ChevronRight, BookOpen, Lightbulb, Gauge, FileClock } from "lucide-react-native";
import React, { FC } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";

type ListeningHomeProps = NativeStackScreenProps<
  RootStackParamList,
  "ListeningHome"
>;

export default (props: ListeningHomeProps) => {
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
        scrollEnabled={false}
        style={{
          flex: 1,
          backgroundColor: "#FAF6F1",
          paddingTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
        ></TouchableOpacity>
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity onPress={() => props.navigation.goBack()}
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
          <View>
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {"Listening"}
            </Text>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#A47551", "#A47551CC"]}
          style={{
            borderRadius: 16,
            paddingVertical: 14,
            paddingRight: 47,
            marginBottom: 11,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 14,
              marginLeft: 22,
            }}
          >
            <Headphones size={21} color="#FFFFFF" style={{ marginRight: 9 }} />
            <View
              style={{
                paddingLeft: 8,
                paddingRight: 21,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 16,
                }}
              >
                {"Listening Score"}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              marginBottom: 16,
              marginLeft: 23,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 32,
              }}
            >
              {"340 / 495"}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF33",
              borderRadius: 24,
              marginBottom: 1,
              marginLeft: 21,
            }}
          >
            <View
              style={{
                width: 207,
                height: 8,
                backgroundColor: "#FFFFFF",
                borderRadius: 24,
              }}
            ></View>
          </View>
        </LinearGradient>
        <View
          style={{
            alignSelf: "flex-start",
            paddingBottom: 1,
            marginBottom: 12,
            marginLeft: 21,
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {"TOEIC Parts"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 15,
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ListeningPart1")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 15,
              paddingHorizontal: 20,
              marginBottom: 13,
            }}
          >
            <View style={{ width: 53.39, height: 50, borderRadius: 16, backgroundColor: "#A47551", justifyContent: "center", alignItems: "center", marginRight: 12 }}>
              <ImageIcon size={24} color="#ffffff" />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 14,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                {"Part 1: Photographs"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                {"6 questions"}
              </Text>
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderRadius: 24,
                }}
              >
                <View
                  style={{
                    width: 181,
                    height: 5,
                    backgroundColor: "#A47551",
                    borderRadius: 24,
                  }}
                ></View>
              </View>
            </View>
            <ChevronRight size={16} color="#6E6880" />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 15,
              paddingHorizontal: 20,
              marginBottom: 13,
            }}
          >
            <View style={{ width: 53.39, height: 50, borderRadius: 16, backgroundColor: "#8B6BAE", justifyContent: "center", alignItems: "center", marginRight: 12 }}>
              <MessageSquare size={24} color="#FFFFFF" />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 14,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                {"Part 2: Question-Response"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 4,
                }}
              >
                {"25 questions"}
              </Text>
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderRadius: 24,
                }}
              >
                <View
                  style={{
                    width: 149,
                    height: 5,
                    backgroundColor: "#8B6BAE",
                    borderRadius: 24,
                  }}
                ></View>
              </View>
            </View>
            <ChevronRight size={16} color="#6E6880" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 14,
              paddingHorizontal: 20,
              marginBottom: 14,
            }}
          >
            <View style={{ width: 53.39, height: 50, borderRadius: 16, backgroundColor: "#E07B54", justifyContent: "center", alignItems: "center", marginRight: 12 }}>
              <Users size={24} color="#FFFFFF" />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 14,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                {"Part 3: Conversations"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 4,
                }}
              >
                {"39 questions"}
              </Text>
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderRadius: 24,
                }}
              >
                <View
                  style={{
                    width: 128,
                    height: 5,
                    backgroundColor: "#E07B54",
                    borderRadius: 24,
                  }}
                ></View>
              </View>
            </View>
            <ChevronRight size={16} color="#6E6880" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              paddingVertical: 15,
              paddingHorizontal: 20,
            }}
          >
            <View style={{ width: 53.39, height: 50, borderRadius: 16, backgroundColor: "#5B9E91", justifyContent: "center", alignItems: "center", marginRight: 12 }}>
              <Radio size={24} color="#ffffff" />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 14,
              }}
            >
              <Text
                style={{
                  color: "#2C2636",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                {"Part 4: Talks"}
              </Text>
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 4,
                }}
              >
                {"30 questions"}
              </Text>
              <View
                style={{
                  backgroundColor: "#F0EBE4",
                  borderRadius: 24,
                }}
              >
                <View
                  style={{
                    width: 106,
                    height: 5,
                    backgroundColor: "#5B9E91",
                    borderRadius: 24,
                  }}
                ></View>
              </View>
            </View>
            <ChevronRight size={16} color="#6E6880" />
          </View>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            marginBottom: 15,
            marginLeft: 24,
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {"Practice Tools"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 45,
            marginHorizontal: 20,
            gap: 12,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ListeningDictation")}
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingTop: 12,
              paddingBottom: 12,
              justifyContent: "center",
            }}
          >
            <BookOpen size={19} color="#A47551" style={{ marginBottom: 9 }} />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 10,
                fontWeight: "bold",
                minHeight: 24,
                textAlignVertical: "center",
              }}
            >
              {"Dictation"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ListeningTips")}
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingTop: 12,
              paddingBottom: 12,
              justifyContent: "center",
            }}
          >
            <Lightbulb size={19} color="#A47551" style={{ marginBottom: 9 }} />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 10,
                fontWeight: "bold",
                minHeight: 24,
                textAlignVertical: "center",
              }}
            >
              {"Tips"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AudioControl")}
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingTop: 12,
              paddingBottom: 12,
              justifyContent: "center",
            }}
          >
            <Gauge size={19} color="#A47551" style={{ marginBottom: 9 }} />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 10,
                fontWeight: "bold",
                textAlign: "center",
                minHeight: 24,
                textAlignVertical: "center",
              }}
            >
              {"Audio \nControl"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ListeningHistory")}
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingTop: 12,
              paddingBottom: 12,
              justifyContent: "center",
            }}
          >
            <FileClock size={20} color="#A47551" style={{ marginBottom: 9 }} />
            <Text
              style={{
                color: "#6E6880",
                fontSize: 10,
                fontWeight: "bold",
                minHeight: 24,
                textAlignVertical: "center",
              }}
            >
              {"History"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
