import { ArrowLeft } from "lucide-react-native";
import React, { useEffect, useState, useCallback } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { getForumPosts, ForumPost } from "../../lib/communityService";

export default () => {
  const navigation = useNavigation<any>();
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [filter, setFilter] = useState<"latest" | "popular" | "unanswered">("latest");
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      loadPosts();
    }, [filter])
  );

  const loadPosts = async () => {
    try {
      setLoading(true);
      const data = await getForumPosts(filter, 20);
      setPosts(data);
    } catch (error) {
      console.error("Error loading posts:", error);
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

  const getInitial = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : "?";
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
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 17,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
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
                marginLeft: 10
              }}
            >
              {"Forum"}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("CommunityCreatePost")}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/7wlu5qzg_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 35,
                height: 35,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 22,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: filter === "latest" ? "#A47551" : "#FFFFFF",
              borderColor: filter === "latest" ? "#A47551" : "#2C26361A",
              borderRadius: 28138600,
              borderWidth: 1,
              paddingVertical: 6,
              paddingHorizontal: 11,
              marginRight: 8,
            }}
            onPress={() => setFilter("latest")}
          >
            <Text
              style={{
                color: filter === "latest" ? "#FFFFFF" : "#2C2636",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Latest"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: filter === "popular" ? "#A47551" : "#FFFFFF",
              borderColor: filter === "popular" ? "#A47551" : "#2C26361A",
              borderRadius: 28138600,
              borderWidth: 1,
              paddingVertical: 6,
              paddingHorizontal: 13,
              marginRight: 8,
            }}
            onPress={() => setFilter("popular")}
          >
            <Text
              style={{
                color: filter === "popular" ? "#FFFFFF" : "#2C2636",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Popular"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: filter === "unanswered" ? "#A47551" : "#FFFFFF",
              borderColor: filter === "unanswered" ? "#A47551" : "#2C26361A",
              borderRadius: 28138600,
              borderWidth: 1,
              paddingVertical: 6,
              paddingHorizontal: 13,
            }}
            onPress={() => setFilter("unanswered")}
          >
            <Text
              style={{
                color: filter === "unanswered" ? "#FFFFFF" : "#2C2636",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Unanswered"}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
            marginLeft: 19,
          }}
        >
          {loading ? (
            <ActivityIndicator size="large" color="#A47551" style={{ marginTop: 40 }} />
          ) : posts.length === 0 ? (
            <Text style={{ color: "#6E6880", fontSize: 14, textAlign: "center", marginTop: 40 }}>
              No posts found
            </Text>
          ) : (
            posts.map((post, index) => (
              <TouchableOpacity
                key={post.id}
                onPress={() => navigation.navigate("CommunityPost", { postId: post.id })}
              >
                <View
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#2C26361A",
                    borderRadius: 16,
                    borderWidth: 1,
                    paddingVertical: 16,
                    paddingRight: 29,
                    marginBottom: index === posts.length - 1 ? 0 : 12,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 9,
                      marginLeft: 16,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#A475511A",
                        borderRadius: 28138600,
                        paddingVertical: 7,
                        paddingHorizontal: 11,
                        marginRight: 9,
                      }}
                      onPress={() => null}
                    >
                      <Text
                        style={{
                          color: "#A47551",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        {getInitial(post.author?.name || "?")}
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        marginRight: 9,
                      }}
                    >
                      <Text
                        style={{
                          color: "#2C2636",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        {post.author?.name || "Anonymous"}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: "#6E6880",
                          fontSize: 10,
                          fontWeight: "bold",
                        }}
                      >
                        {formatTimeAgo(post.created_at)}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        alignSelf: "stretch",
                      }}
                    ></View>
                    {post.category && (
                      <View
                        style={{
                          backgroundColor: `${post.category.color}1A`,
                          borderRadius: 28138600,
                          paddingTop: 2,
                          paddingHorizontal: 8,
                        }}
                      >
                        <Text
                          style={{
                            color: post.category.color,
                            fontSize: 10,
                            fontWeight: "bold",
                          }}
                        >
                          {post.category.name}
                        </Text>
                      </View>
                    )}
                  </View>
                  <View
                    style={{
                      alignSelf: "flex-start",
                      marginBottom: 6,
                      marginLeft: 16,
                    }}
                  >
                    <Text
                      style={{
                        color: "#2C2636",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                      numberOfLines={1}
                    >
                      {post.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      alignSelf: "flex-start",
                      marginBottom: 9,
                      marginLeft: 16,
                    }}
                  >
                    <Text
                      style={{
                        color: "#6E6880",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                      numberOfLines={1}
                    >
                      {post.content}
                    </Text>
                  </View>
                  <View
                    style={{
                      alignSelf: "flex-start",
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: 16,
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/h4s0i89i_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={{
                        width: 11,
                        height: 11,
                        marginRight: 4,
                      }}
                    />
                    <Text
                      style={{
                        color: "#6E6880",
                        fontSize: 12,
                        fontWeight: "bold",
                        marginRight: 17,
                      }}
                    >
                      {post.like_count}
                    </Text>
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/nc2f5pne_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={{
                        width: 11,
                        height: 11,
                        marginRight: 4,
                      }}
                    />
                    <Text
                      style={{
                        color: "#6E6880",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      {post.reply_count}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
