import {
  ArrowLeft,
  Heart,
  MessageCircle,
  Send,
  Share,
  Share2,
  ThumbsUp,
} from "lucide-react-native";
import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  getPostDetail,
  createReply,
  likePost,
  unlikePost,
  likeReply,
  unlikeReply,
  ForumPost,
  PostReply,
} from "../../lib/communityService";

export default () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const postId = route.params?.postId;

  const [post, setPost] = useState<ForumPost | null>(null);
  const [replies, setReplies] = useState<PostReply[]>([]);
  const [replyText, setReplyText] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (postId) {
      loadPostDetail();
    }
  }, [postId]);

  const loadPostDetail = async () => {
    try {
      setLoading(true);
      const data = await getPostDetail(postId);
      setPost(data.post);
      setReplies(data.replies);
    } catch (error) {
      console.error("Error loading post:", error);
      Alert.alert("Error", "Failed to load post");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateReply = async () => {
    if (!replyText.trim()) return;

    try {
      setSubmitting(true);
      const newReply = await createReply(postId, replyText.trim());
      setReplies([...replies, newReply]);
      setReplyText("");
      // Update reply count
      if (post) {
        setPost({ ...post, reply_count: post.reply_count + 1 });
      }
    } catch (error) {
      console.error("Error creating reply:", error);
      Alert.alert("Error", "Failed to post reply");
    } finally {
      setSubmitting(false);
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

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <ActivityIndicator
          size="large"
          color="#A47551"
          style={{ marginTop: 100 }}
        />
      </SafeAreaView>
    );
  }

  if (!post) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <Text style={{ textAlign: "center", marginTop: 100, color: "#6E6880" }}>
          Post not found
        </Text>
      </SafeAreaView>
    );
  }

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
          paddingRight: 17,
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 17,
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
            {"Discussion"}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 17,
            marginBottom: 21,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 14,
              marginLeft: 16,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#A475511A",
                borderRadius: 28138600,
                paddingVertical: 8,
                paddingHorizontal: 15,
                marginRight: 9,
              }}
              onPress={() => null}
            >
              <Text
                style={{
                  color: "#A47551",
                  fontSize: 16,
                  marginRight: 2,
                }}
              >
                {getInitial(post.author?.name || "?")}
              </Text>
            </TouchableOpacity>
            <View>
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
                  {post.author?.name || "Anonymous"}
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
                  {formatTimeAgo(post.created_at)}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              marginBottom: 8,
              marginLeft: 16,
            }}
          >
            <Text
              style={{
                color: "#2C2636",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {post.title}
            </Text>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              marginBottom: 13,
              marginLeft: 16,
              marginRight: 16,
            }}
          >
            <Text
              style={{
                color: "#6E6880",
                fontSize: 14,
              }}
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 16,
              }}
            >
              <Heart size={13} color="#6E6880" style={{ marginRight: 4 }} />
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {` ${post.like_count}`}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 17,
              }}
            >
              <MessageCircle
                size={13}
                color="#6E6880"
                style={{ marginRight: 6 }}
              />
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                }}
              >
                {` ${post.reply_count}`}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Share2 size={13} color="#6E6880" style={{ marginRight: 6 }} />
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {" Share"}
              </Text>
            </View>
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
              color: "#2C2636",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {`Replies (${replies.length})`}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 22,
            marginLeft: 20,
          }}
        >
          {replies.length === 0 ? (
            <Text
              style={{
                color: "#6E6880",
                fontSize: 14,
                textAlign: "center",
                marginVertical: 20,
              }}
            >
              No replies yet. Be the first to reply!
            </Text>
          ) : (
            replies.map((reply, index) => (
              <View
                key={reply.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#2C26361A",
                  borderRadius: 16,
                  borderWidth: 1,
                  paddingVertical: 12,
                  paddingRight: 12,
                  marginBottom: index === replies.length - 1 ? 0 : 12,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 9,
                    marginLeft: 12,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#8B6BAE1A",
                      borderRadius: 28138600,
                      paddingVertical: 7,
                      paddingHorizontal: 12,
                      marginRight: 9,
                    }}
                    onPress={() => null}
                  >
                    <Text
                      style={{
                        color: "#8B6BAE",
                        fontSize: 12,
                      }}
                    >
                      {getInitial(reply.author?.name || "?")}
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "#2C2636",
                      fontSize: 12,
                      marginRight: 10,
                    }}
                  >
                    {reply.author?.name || "Anonymous"}
                  </Text>
                  <View>
                    <Text
                      style={{
                        color: "#6E6880",
                        fontSize: 10,
                      }}
                    >
                      {formatTimeAgo(reply.created_at)}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginBottom: 10,
                    marginLeft: 12,
                    marginRight: 12,
                  }}
                >
                  <Text
                    style={{
                      color: "#6E6880",
                      fontSize: 14,
                    }}
                  >
                    {reply.content}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 12,
                  }}
                >
                  <ThumbsUp
                    size={13}
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
                    {` ${reply.like_count}`}
                  </Text>
                </View>
              </View>
            ))
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 48,
            marginLeft: 17,
          }}
        >
          <TextInput
            placeholder={"Write a reply..."}
            value={replyText}
            onChangeText={setReplyText}
            editable={!submitting}
            style={{
              color: "#2C2636",
              fontSize: 14,
              marginRight: 8,
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              paddingVertical: 12,
              paddingHorizontal: 16,
            }}
          />
          <TouchableOpacity
            onPress={handleCreateReply}
            disabled={submitting || !replyText.trim()}
          >
            {submitting ? (
              <ActivityIndicator size="small" color="#A47551" />
            ) : (
              <View
                style={{
                  width: 43,
                  height: 43,
                  borderRadius: 12,
                  backgroundColor: "#A47551",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: replyText.trim() ? 1 : 0.5,
                }}
              >
                <Send size={20} color="#FFFFFF" />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
