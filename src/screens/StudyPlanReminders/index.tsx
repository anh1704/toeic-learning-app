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
          paddingTop: 18,
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
          <View>
            <Text
              style={{
                color: "#2C2636",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {"Reminders"}
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 22,
            marginLeft: 21,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
              marginBottom: 21,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/zgig9sgc_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginRight: 12,
                }}
              />
              <View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 1,
                    marginRight: 14,
                  }}
                >
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 14,
                    }}
                  >
                    {"Daily Reminders"}
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
                    {"Get notified to study"}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#A47551",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingLeft: 24,
                paddingRight: 4,
              }}
            >
              <View
                style={{
                  width: 19,
                  height: 19,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 28138600,
                  shadowColor: "#0000001A",
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowRadius: 2,
                  elevation: 2,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              padding: 16,
              marginBottom: 21,
            }}
          >
            <View>
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
                  {"Morning Review"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginRight: 36,
                }}
              >
                <Text
                  style={{
                    color: "#A47551",
                    fontSize: 18,
                  }}
                >
                  {"8:00 AM"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#5B9E91",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingLeft: 20,
                paddingRight: 4,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 28138600,
                  shadowColor: "#0000001A",
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowRadius: 2,
                  elevation: 2,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
              marginBottom: 22,
            }}
          >
            <View>
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
                  {"Lunch Practice"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginRight: 23,
                }}
              >
                <Text
                  style={{
                    color: "#A47551",
                    fontSize: 18,
                  }}
                >
                  {"12:00 PM"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#5B9E91",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingLeft: 20,
                paddingRight: 4,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 28138600,
                  shadowColor: "#0000001A",
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowRadius: 2,
                  elevation: 2,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
              marginBottom: 21,
            }}
          >
            <View>
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
                  {"Evening Study"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginRight: 27,
                }}
              >
                <Text
                  style={{
                    color: "#A47551",
                    fontSize: 18,
                  }}
                >
                  {"6:00 PM"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#F0EBE4",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingLeft: 4,
                paddingRight: 20,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 28138600,
                  shadowColor: "#0000001A",
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowRadius: 2,
                  elevation: 2,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
            }}
          >
            <View>
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
                  {"Night Review"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingRight: 19,
                }}
              >
                <Text
                  style={{
                    color: "#A47551",
                    fontSize: 18,
                  }}
                >
                  {"9:00 PM"}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#5B9E91",
                borderRadius: 28138600,
                paddingVertical: 4,
                paddingLeft: 20,
                paddingRight: 4,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 28138600,
                  shadowColor: "#0000001A",
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowRadius: 2,
                  elevation: 2,
                }}
              ></View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderColor: "#A47551",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 16,
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/h6v00mh6_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              borderRadius: 16,
              width: 19,
              height: 19,
              marginRight: 7,
            }}
          />
          <Text
            style={{
              color: "#A47551",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {" Add Reminder"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
