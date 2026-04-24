import { ArrowLeft } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { getUserRankings, getCurrentUserRank, UserRanking } from "../../lib/communityService";

export default () => {
  const navigation = useNavigation<any>();
  const [rankings, setRankings] = useState<UserRanking[]>([]);
  const [currentUserRank, setCurrentUserRank] = useState<UserRanking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRankings();
  }, []);

  const loadRankings = async () => {
    try {
      setLoading(true);
      const [rankingsData, userRank] = await Promise.all([
        getUserRankings("weekly", 100),
        getCurrentUserRank(),
      ]);
      setRankings(rankingsData);
      setCurrentUserRank(userRank);
    } catch (error) {
      console.error("Error loading rankings:", error);
    } finally {
      setLoading(false);
    }
  };

  const getRankEmoji = (position: number) => {
    if (position === 1) return "🥇";
    if (position === 2) return "🥈";
    if (position === 3) return "🥉";
    return `#${position}`;
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Diamond": return "#8B6BAE";
      case "Platinum": return "#6E6880";
      case "Gold": return "#D4A853";
      case "Silver": return "#A9A4B1";
      default: return "#6E6880";
    }
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
            {"Rankings"}
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 1,
            marginBottom: 48,
            marginLeft: 20,
          }}
        >
          {loading ? (
            <ActivityIndicator size="large" color="#A47551" style={{ marginTop: 40 }} />
          ) : rankings.length === 0 ? (
            <Text style={{ color: "#6E6880", fontSize: 14, textAlign: "center", marginTop: 40 }}>
              No rankings available
            </Text>
          ) : (
            rankings.slice(0, 5).map((ranking, index) => {
              const isCurrentUser = currentUserRank?.user_id === ranking.user_id;
              return (
                <View
                  key={ranking.id}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: isCurrentUser ? "#A475510D" : "#FFFFFF",
                    borderColor: isCurrentUser ? "#A47551" : "#2C26361A",
                    borderRadius: 16,
                    borderWidth: 1,
                    padding: 16,
                    marginBottom: index === 4 ? 0 : 12,
                  }}
                >
                  <View style={{}}>
                    <Text
                      style={{
                        color: "#2C2636",
                        fontSize: 18,
                      }}
                    >
                      {getRankEmoji(ranking.rank_position)}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      borderRadius: 28138600,
                      paddingHorizontal: 10,
                      marginRight: 6,
                    }}
                  >
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#A47551", "#8B6BAE"]}
                      style={{
                        borderRadius: 28138600,
                        paddingVertical: 9,
                        paddingHorizontal: 15,
                      }}
                    >
                      <Text
                        style={{
                          color: "#FFFFFF",
                          fontSize: 14,
                        }}
                      >
                        {getInitial(ranking.user?.name || "?")}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <View
                    style={{
                      flex: 1,
                      marginRight: 13,
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
                        {isCurrentUser ? "You (You)" : ranking.user?.name || "Anonymous"}
                      </Text>
                    </View>
                    <View
                      style={{
                        alignSelf: "flex-start",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "#6E6880",
                          fontSize: 12,
                          marginRight: 10,
                        }}
                      >
                        {`${ranking.xp_points} XP`}
                      </Text>
                      <Text
                        style={{
                          color: getTierColor(ranking.rank_tier),
                          fontSize: 12,
                        }}
                      >
                        {ranking.rank_tier}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "#2C2636",
                        fontSize: 14,
                      }}
                    >
                      {ranking.current_score}
                    </Text>
                  </View>
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
