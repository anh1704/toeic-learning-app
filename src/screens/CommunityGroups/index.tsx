import { ArrowLeft, Search } from "lucide-react-native";
import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { getStudyGroups, StudyGroup } from "../../lib/communityService";

export default () => {
  const navigation = useNavigation<any>();
  const [textInput1, onChangeTextInput1] = useState("");
  const [groups, setGroups] = useState<StudyGroup[]>([]);
  const [filteredGroups, setFilteredGroups] = useState<StudyGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGroups();
  }, []);

  useEffect(() => {
    if (textInput1.trim() === "") {
      setFilteredGroups(groups);
    } else {
      const filtered = groups.filter(
        (group) =>
          group.name.toLowerCase().includes(textInput1.toLowerCase()) ||
          group.description?.toLowerCase().includes(textInput1.toLowerCase()),
      );
      setFilteredGroups(filtered);
    }
  }, [textInput1, groups]);

  const loadGroups = async () => {
    try {
      setLoading(true);
      const data = await getStudyGroups();
      setGroups(data);
      setFilteredGroups(data);
    } catch (error) {
      console.error("Error loading groups:", error);
    } finally {
      setLoading(false);
    }
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
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 17,
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
              {"Study Groups"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderColor: "#2C26361A",
              borderRadius: 16,
              borderWidth: 1,
              marginBottom: 22,
            }}
          >
            <Search
              size={16}
              color="#6E6880"
              style={{ marginLeft: 15, marginRight: 4 }}
            />
            <TextInput
              placeholder={"Search groups..."}
              value={textInput1}
              onChangeText={onChangeTextInput1}
              style={{
                color: "#2C2636",
                fontSize: 16,
                marginRight: 4,
                flex: 1,
                paddingVertical: 15,
              }}
            />
          </View>
          <View
            style={{
              paddingBottom: 1,
            }}
          >
            {loading ? (
              <ActivityIndicator
                size="large"
                color="#A47551"
                style={{ marginTop: 40 }}
              />
            ) : filteredGroups.length === 0 ? (
              <Text
                style={{
                  color: "#6E6880",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 40,
                }}
              >
                {textInput1 ? "No groups found" : "No groups available"}
              </Text>
            ) : (
              filteredGroups.map((group, index) => (
                <View
                  key={group.id}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFFFFF",
                    borderColor: "#2C26361A",
                    borderRadius: 16,
                    borderWidth: 1,
                    padding: 16,
                    marginBottom: index === filteredGroups.length - 1 ? 0 : 12,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      borderRadius: 16,
                    }}
                    onPress={() =>
                      navigation.navigate("CommunityChat", {
                        groupId: group.id,
                      })
                    }
                  >
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#A47551", "#8B6BAE"]}
                      style={{
                        borderRadius: 16,
                        paddingVertical: 11,
                        paddingHorizontal: 19,
                        marginRight: 13,
                      }}
                    >
                      <Text
                        style={{
                          color: "#FFFFFF",
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        {group.avatar_letter ||
                          group.name.charAt(0).toUpperCase()}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <View
                    style={{
                      flex: 1,
                      paddingRight: 11,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 2,
                      }}
                    >
                      <View
                        style={{
                          marginRight: 9,
                        }}
                      >
                        <Text
                          style={{
                            color: "#2C2636",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          {group.name}
                        </Text>
                      </View>
                      {group.is_active && (
                        <View
                          style={{
                            width: 7,
                            height: 7,
                            backgroundColor: "#5B9E91",
                            borderRadius: 28138600,
                            marginRight: 9,
                          }}
                        ></View>
                      )}
                      <View
                        style={{
                          height: 19,
                          flex: 1,
                        }}
                      ></View>
                    </View>
                    <View
                      style={{
                        alignSelf: "flex-start",
                        marginBottom: 1,
                      }}
                    >
                      <Text
                        style={{
                          color: "#6E6880",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        {`${group.member_count} members`}
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
                          fontWeight: "bold",
                        }}
                        numberOfLines={1}
                      >
                        {group.description || "No description"}
                      </Text>
                    </View>
                  </View>
                </View>
              ))
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
