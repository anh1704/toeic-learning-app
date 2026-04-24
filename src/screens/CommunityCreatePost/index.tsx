import { ArrowLeft } from "lucide-react-native";
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
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { getPostCategories, createPost, PostCategory } from "../../lib/communityService";

export default () => {
  const navigation = useNavigation<any>();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState<PostCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setLoading(true);
      const data = await getPostCategories();
      setCategories(data);
      if (data.length > 0) {
        setSelectedCategory(data[0].id); // Select first category by default
      }
    } catch (error) {
      console.error("Error loading categories:", error);
      Alert.alert("Error", "Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  const handlePublish = async () => {
    if (!title.trim()) {
      Alert.alert("Error", "Please enter a title");
      return;
    }
    if (!content.trim()) {
      Alert.alert("Error", "Please enter content");
      return;
    }
    if (!selectedCategory) {
      Alert.alert("Error", "Please select a category");
      return;
    }

    try {
      setSubmitting(true);
      await createPost(title.trim(), content.trim(), selectedCategory);
      Alert.alert("Success", "Post created successfully", [
        {
          text: "OK",
          onPress: () => navigation.navigate("CommunityForum"),
        },
      ]);
    } catch (error) {
      console.error("Error creating post:", error);
      Alert.alert("Error", "Failed to create post");
    } finally {
      setSubmitting(false);
    }
  };

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
          paddingRight: 20,
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
            {"New post"}
          </Text>
        </View>
        <Text
          style={{
            color: "#2C2636",
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 13,
            marginLeft: 21,
          }}
        >
          {"Category"}
        </Text>
        {loading ? (
          <ActivityIndicator size="small" color="#A47551" style={{ marginBottom: 13 }} />
        ) : (
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
              marginLeft: 21,
            }}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={{
                  alignItems: "center",
                  backgroundColor: selectedCategory === category.id ? "#A47551" : "#FFFFFF",
                  borderColor: selectedCategory === category.id ? "#A47551" : "#2C26361A",
                  borderRadius: 28138600,
                  borderWidth: 1,
                  paddingVertical: 6,
                  paddingHorizontal: 12,
                  marginRight: 10,
                  marginBottom: 10,
                }}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Text
                  style={{
                    color: selectedCategory === category.id ? "#FFFFFF" : "#2C2636",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <TextInput
          placeholder={"Post title..."}
          value={title}
          onChangeText={setTitle}
          editable={!submitting}
          style={{
            color: "#2C2636",
            fontSize: 16,
            marginBottom: 16,
            marginLeft: 21,
            marginRight: 20,
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingVertical: 18,
            paddingHorizontal: 16,
          }}
        />
        <TextInput
          placeholder={"Write your post..."}
          value={content}
          onChangeText={setContent}
          editable={!submitting}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
          style={{
            color: "#2C2636",
            fontSize: 14,
            marginBottom: 24,
            marginLeft: 21,
            marginRight: 20,
            backgroundColor: "#FFFFFF",
            borderColor: "#2C26361A",
            borderRadius: 16,
            borderWidth: 1,
            paddingTop: 16,
            paddingHorizontal: 16,
            minHeight: 150,
          }}
        />
        <TouchableOpacity
          style={{
            alignItems: "center",
            borderRadius: 16,
            paddingVertical: 11,
            marginBottom: 48,
            marginHorizontal: 21,
          }}
          onPress={handlePublish}
          disabled={submitting}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#A47551", "#E07B54"]}
            style={{
              alignItems: "center",
              borderRadius: 16,
              paddingVertical: 16,
              width: "100%",
            }}
          >
            {submitting ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {"Publish"}
              </Text>
            )}
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
