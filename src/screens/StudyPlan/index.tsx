import { ArrowLeft } from "lucide-react-native";
import React, { useCallback, useState } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getTodaySchedule, type DailySchedule } from "../../lib/studyPlanService";

export default () => {
  const navigation = useNavigation<any>();
  const [todaySchedule, setTodaySchedule] = useState<DailySchedule | null>(null);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;

      (async () => {
        try {
          const schedule = await getTodaySchedule();
          if (!cancelled) setTodaySchedule(schedule);
        } catch {
          if (!cancelled) setTodaySchedule(null);
        }
      })();

      return () => {
        cancelled = true;
      };
    }, []),
  );

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
                marginLeft: 10
              }}
            >
              {"Study Plan"}
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingBottom: 1,
            marginBottom: 23,
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
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 17,
                paddingRight: 17,
                marginRight: 22,
              }}
              onPress={() => navigation.navigate("StudyPlanCreate")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/ocedbh75_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 20,
                  height: 20,
                  marginBottom: 8,
                  marginLeft: 17,
                }}
              />
              <View
                style={{
                  paddingBottom: 1,
                  marginLeft: 17,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Create Plan"}
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
                paddingVertical: 17,
                paddingRight: 17,
              }}
              onPress={() => navigation.navigate("StudyPlanReminders")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/77k2t3b0_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 20,
                  height: 20,
                  marginBottom: 8,
                  marginLeft: 17,
                }}
              />
              <View
                style={{
                  paddingBottom: 1,
                  marginLeft: 17,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Reminder"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 11,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 17,
                paddingRight: 17,
                marginRight: 22,
              }}
              onPress={() => navigation.navigate("StudyPlanDaily")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/ljehl3w3_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 19,
                  height: 19,
                  marginBottom: 8,
                  marginLeft: 17,
                }}
              />
              <View
                style={{
                  marginLeft: 17,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Daily Schedule"}
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
                paddingVertical: 16,
                paddingRight: 17,
              }}
              onPress={() => navigation.navigate("StudyPlanWeekly")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/1p44y3tm_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 19,
                  marginBottom: 8,
                  marginLeft: 17,
                }}
              />
              <View
                style={{
                  marginLeft: 17,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Weekly Plan"}
                </Text>
              </View>
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
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                paddingVertical: 16,
                paddingLeft: 16,
                marginRight: 21,
              }}
              onPress={() => navigation.navigate("StudyPlanGoals")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/2q9sm3th_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 19,
                  height: 19,
                  marginBottom: 8,
                }}
              />
              <View
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Goals"}
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
                paddingVertical: 16,
                paddingRight: 17,
              }}
              onPress={() => navigation.navigate("StudyPlanMilestones")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/ol7jy3gt_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 16,
                  width: 19,
                  height: 19,
                  marginBottom: 8,
                  marginLeft: 17,
                }}
              />
              <View
                style={{
                  marginLeft: 17,
                }}
              >
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Milestones"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 6,
            marginLeft: 21,
          }}
        >
          <View>
            <Text
              style={{
                color: "#2C2636",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {"Today's Plan"}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("StudyPlanCreate")}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/lmxmayr4_expires_30_days.png",
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
                color: "#A47551",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {" Custom"}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
            marginLeft: 22,
          }}
        >
          {todaySchedule && todaySchedule.items.length > 0 ? (
            todaySchedule.items.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#FFFFFF",
                  borderColor: "#2C26361A",
                  borderRadius: 16,
                  borderWidth: 1,
                  padding: 12,
                  marginBottom: index === todaySchedule.items.length - 1 ? 0 : 8,
                }}
              >
                <View
                  style={{
                    width: 31,
                    height: 31,
                    borderRadius: 16,
                    backgroundColor: item.color || "#A47551",
                    marginRight: 12,
                  }}
                />
                <View
                  style={{
                    flex: 1,
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
                      {item.title}
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
                      {item.startTime}
                    </Text>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#2C26361A",
                borderRadius: 16,
                borderWidth: 1,
                padding: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                }}
              >
                {"No schedule for today. Create a plan to get started!"}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
