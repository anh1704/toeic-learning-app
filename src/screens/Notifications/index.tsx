import {
  ArrowLeft,
  Clock,
  Flame,
  MessageCircle,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  X,
} from "lucide-react-native";
import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Achievements from "../Achievements";

type RootStackParamList = {
  NotificationDetail: undefined;
};

export default () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
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
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 21,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
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
                {"Notifications"}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: "#A47551",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Mark all read"}
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("NotificationDetail");
            }}
          >
            <View
              style={{
                flexDirection: "row",
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
                  backgroundColor: "#D4A853",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Trophy size={20} color="#FFFFFF" />
              </View>
              <View
                style={{
                  paddingTop: 1,
                  paddingRight: 39,
                  marginRight: 12,
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
                    {"New Achievement!"}
                  </Text>
                </View>
                <View
                  style={{
                    marginBottom: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 12,
                    }}
                  >
                    {'You earned "Listening Master" badge'}
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
                      fontSize: 10,
                    }}
                  >
                    {"2m ago"}
                  </Text>
                </View>
              </View>
              <X size={15} color="#6E6880" />
            </View>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
              marginBottom: 12,
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
              <Flame size={20} color="#FFFFFF" />
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
                  marginBottom: 1,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"Streak Alert!"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Your 15-day streak is on fire!"}
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
                    fontSize: 10,
                  }}
                >
                  {"1h ago"}
                </Text>
              </View>
            </View>
            <X size={15} color="#6E6880" />
          </View>
          <View
            style={{
              flexDirection: "row",
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
                backgroundColor: "#A47551",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Clock size={20} color="#FFFFFF" />
            </View>
            <View
              style={{
                paddingTop: 1,
                paddingRight: 44,
                marginRight: 12,
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
                  {"Study Reminder"}
                </Text>
              </View>
              <View
                style={{
                  marginBottom: 4,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Time for your daily listening practice"}
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
                    fontSize: 10,
                  }}
                >
                  {"3h ago"}
                </Text>
              </View>
            </View>
            <X size={15} color="#6E6880" />
          </View>
          <View
            style={{
              flexDirection: "row",
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
                backgroundColor: "#8B6BAE",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <MessageCircle size={20} color="#FFFFFF" />
            </View>
            <View
              style={{
                paddingTop: 1,
                paddingRight: 31,
                marginRight: 12,
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
                  {"New Reply"}
                </Text>
              </View>
              <View
                style={{
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Minh replied to your grammar question"}
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
                    fontSize: 10,
                  }}
                >
                  {"5h ago"}
                </Text>
              </View>
            </View>
            <X size={15} color="#6E6880" />
          </View>
          <View
            style={{
              flexDirection: "row",
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
                backgroundColor: "#5B9E91",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <TrendingUp size={20} color="#FFFFFF" />
            </View>
            <View
              style={{
                paddingRight: 30,
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
                  {"Score Update"}
                </Text>
              </View>
              <View
                style={{
                  marginBottom: 4,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Your predicted score increased to 670!"}
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
                    fontSize: 10,
                  }}
                >
                  {"1d ago"}
                </Text>
              </View>
            </View>
            <X size={15} color="#6E6880" />
          </View>
          <View
            style={{
              flexDirection: "row",
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
                backgroundColor: "#E07B54",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Target size={20} color="#FFFFFF" />
            </View>
            <View
              style={{
                flex: 1,
                paddingTop: 1,
                marginRight: 12,
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
                  {"Daily Challenge"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"New challenges are available!"}
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
                    fontSize: 10,
                  }}
                >
                  {"1d ago"}
                </Text>
              </View>
            </View>
            <X size={15} color="#6E6880" />
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              paddingHorizontal: 16,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                width: 39,
                height: 39,
                borderRadius: 16,
                backgroundColor: "#A47551",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Users size={20} color="#FFFFFF" />
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
                  marginBottom: 1,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                  }}
                >
                  {"New Follower"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"Le Hoang started following you"}
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
                    fontSize: 10,
                  }}
                >
                  {"2d ago"}
                </Text>
              </View>
            </View>
            <X size={15} color="#6E6880" />
          </View>
          <View
            style={{
              flexDirection: "row",
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
                backgroundColor: "#D4A853",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Star size={20} color="#FFFFFF" />
            </View>
            <View
              style={{
                flex: 1,
                paddingTop: 1,
                marginRight: 12,
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
                  {"Level Up!"}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#6E6880",
                    fontSize: 12,
                  }}
                >
                  {"You reached Level 12!"}
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
                    fontSize: 10,
                  }}
                >
                  {"3d ago"}
                </Text>
              </View>
            </View>
            <X size={15} color="#6E6880" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
