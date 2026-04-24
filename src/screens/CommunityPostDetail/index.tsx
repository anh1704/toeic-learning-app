import { ArrowLeft, Heart, MessageCircle, Share, ThumbsUp, Send } from "lucide-react-native";
import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
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
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
        <ActivityIndicator size="large" color="#A47551" style={{ marginTop: 100 }} />
      </SafeAreaView>
    );
  }

  if (!post) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
        <Text style={{ textAlign: "center", marginTop: 100, color: "#6E6880" }}>
          Post not found
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: "#F5F5F5",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#000",
            marginLeft: 12,
          }}
        >
          Discussion
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* Post Content */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            marginHorizontal: 16,
            marginTop: 8,
            borderRadius: 12,
            padding: 16,
          }}
        >
          {/* Author Info */}
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#F0E6D6",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Text style={{ color: "#A47551", fontSize: 16, fontWeight: "600" }}>
                {getInitial(post.author?.name || "?")}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "600", color: "#000" }}>
                {post.author?.name || "Anonymous"}
              </Text>
              <Text style={{ fontSize: 14, color: "#8E8E93" }}>
                {formatTimeAgo(post.created_at)}
              </Text>
            </View>
          </View>

          {/* Post Title */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "#000",
              marginBottom: 8,
            }}
          >
            {post.title}
          </Text>

          {/* Post Content */}
          <Text
            style={{
              fontSize: 16,
              color: "#3C3C43",
              lineHeight: 22,
              marginBottom: 16,
            }}
          >
            {post.content}
          </Text>

          {/* Engagement Stats */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginRight: 20 }}>
              <Heart size={16} color="#8E8E93" />
              <Text style={{ fontSize: 16, color: "#8E8E93", marginLeft: 4 }}>
                {post.like_count}
              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center", marginRight: 20 }}>
              <MessageCircle size={16} color="#8E8E93" />
              <Text style={{ fontSize: 16, color: "#8E8E93", marginLeft: 4 }}>
                {post.reply_count}
              </Text>
            </View>
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
              <Share size={16} color="#8E8E93" />
              <Text style={{ fontSize: 16, color: "#8E8E93", marginLeft: 4 }}>
                Share
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Replies Section */}
        <View style={{ marginTop: 24, marginHorizontal: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", color: "#000", marginBottom: 16 }}>
            Replies ({replies.length})
          </Text>

          {replies.length === 0 ? (
            <Text style={{ color: "#8E8E93", fontSize: 16, textAlign: "center", marginVertical: 40 }}>
              No replies yet. Be the first to reply!
            </Text>
          ) : (
            replies.map((reply, index) => (
              <View
                key={reply.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 12,
                  padding: 16,
                  marginBottom: 12,
                }}
              >
                {/* Reply Author */}
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
                  <View
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 16,
                      backgroundColor: "#E8E3F3",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 12,
                    }}
                  >
                    <Text style={{ color: "#8B6BAE", fontSize: 14, fontWeight: "600" }}>
                      {getInitial(reply.author?.name || "?")}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <Text style={{ fontSize: 16, fontWeight: "600", color: "#000", marginRight: 8 }}>
                        {reply.author?.name || "Anonymous"}
                      </Text>
                      <Text style={{ fontSize: 14, color: "#8E8E93" }}>
                        {formatTimeAgo(reply.created_at)}
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Reply Content */}
                <Text
                  style={{
                    fontSize: 16,
                    color: "#3C3C43",
                    lineHeight: 22,
                    marginBottom: 12,
                  }}
                >
                  {reply.content}
                </Text>

                {/* Reply Like */}
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                  <ThumbsUp size={14} color="#8E8E93" />
                  <Text style={{ fontSize: 14, color: "#8E8E93", marginLeft: 4 }}>
                    {reply.like_count}
                  </Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>

        {/* Bottom Spacing */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Reply Input */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderTopWidth: 1,
          borderTopColor: "#E5E5EA",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            placeholder="Write a reply..."
            value={replyText}
            onChangeText={setReplyText}
            editable={!submitting}
            multiline
            style={{
              flex: 1,
              backgroundColor: "#F2F2F7",
              borderRadius: 20,
              paddingHorizontal: 16,
              paddingVertical: 12,
              fontSize: 16,
              maxHeight: 100,
              marginRight: 12,
            }}
          />
          <TouchableOpacity
            onPress={handleCreateReply}
            disabled={submitting || !replyText.trim()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: replyText.trim() ? "#A47551" : "#E5E5EA",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {submitting ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Send size={18} color="#FFFFFF" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};