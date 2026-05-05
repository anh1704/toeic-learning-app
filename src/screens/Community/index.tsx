import {
  ArrowLeft,
  Users,
  MessageCircle,
  Trophy,
  Heart,
  MessageSquare,
  Send,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  getHotTopics,
  getCommunityMemberCount,
  ForumPost,
} from "../../lib/communityService";

export default () => {
  const navigation = useNavigation<any>();
  const [hotTopics, setHotTopics] = useState<ForumPost[]>([]);
  const [memberCount, setMemberCount] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [topics, count] = await Promise.all([
        getHotTopics(3),
        getCommunityMemberCount(),
      ]);
      setHotTopics(topics);
      setMemberCount(count);
    } catch (error) {
      console.error("Error loading community data:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return "Yesterday";
    return `${diffDays}d ago`;
  };

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
          paddingRight: 19,
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
          <Text
            style={{
              color: "#2C2636",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            {"Community"}
          </Text>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#A47551", "#8B6BAE"]}
          style={{
            borderRadius: 16,
            paddingVertical: 18,
            marginBottom: 21,
            marginLeft: 19,
          }}
        >
          <Users
            size={23}
            color="#FFFFFF"
            style={{ marginBottom: 7, marginLeft: 27 }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              marginBottom: 1,
              marginLeft: 27,
            }}
          >
            {`${memberCount} Learners`}
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              marginLeft: 29,
            }}
          >
            {"Join discussions & study together"}
          </Text>
        </LinearGradient>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
              marginRight: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("CommunityForum")}
            >
              <MessageCircle
                size={19}
                color="#A47551"
                style={{ marginLeft: 16, marginRight: 12 }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Forum"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 17,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("CommunityGroups")}
            >
              <Users
                size={19}
                color="#A47551"
                style={{ marginLeft: 16, marginRight: 12 }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Groups"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 16,
              marginRight: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("CommunityGroups")}
            >
              <Send
                size={19}
                color="#A47551"
                style={{ marginLeft: 16, marginRight: 12 }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Chat"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 16,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("CommunityRanking")}
            >
              <Trophy
                size={19}
                color="#A47551"
                style={{ marginLeft: 16, marginRight: 12 }}
              />
              <View>
                <Text
                  style={{
                    color: "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"Rankings"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              marginBottom: 21,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {"Hot Topics"}
            </Text>
          </View>
          {loading ? (
            <ActivityIndicator
              size="large"
              color="#A47551"
              style={{ marginTop: 20 }}
            />
          ) : (
            <View>
              {hotTopics.map((topic, index) => (
                <TouchableOpacity
                  key={topic.id}
                  onPress={() =>
                    navigation.navigate("CommunityPost", { postId: topic.id })
                  }
                >
                  <View
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "#2C263633",
                      borderRadius: 16,
                      borderWidth: 1,
                      paddingTop: 16,
                      paddingBottom: 17,
                      paddingLeft: 27,
                      marginBottom: index === hotTopics.length - 1 ? 0 : 12,
                    }}
                  >
                    <View
                      style={{
                        alignSelf: "flex-start",
                        paddingVertical: 3,
                        paddingRight: 80,
                        marginBottom: 8,
                      }}
                    >
                      <Text
                        style={{
                          color: "#000000",
                          fontSize: 14,
                          fontWeight: "bold",
                        }}
                      >
                        {topic.title}
                      </Text>
                    </View>
                    <View
                      style={{
                        alignSelf: "flex-start",
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 123,
                      }}
                    >
                      <View
                        style={{
                          marginRight: 13,
                        }}
                      >
                        <Text
                          style={{
                            color: "#6E6880",
                            fontSize: 12,
                            fontWeight: "bold",
                          }}
                        >
                          {topic.author?.name || "Anonymous"}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginRight: 13,
                        }}
                      >
                        <MessageCircle
                          size={11}
                          color="#6E6880"
                          style={{ marginRight: 6 }}
                        />
                        <Text
                          style={{
                            color: "#6E6880",
                            fontSize: 12,
                            fontWeight: "bold",
                          }}
                        >
                          {topic.like_count}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Heart
                          size={11}
                          color="#6E6880"
                          style={{ marginRight: 4 }}
                        />
                        <Text
                          style={{
                            color: "#6E6880",
                            fontSize: 12,
                            fontWeight: "bold",
                          }}
                        >
                          {topic.reply_count}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
