import { supabase } from "./supabase";

// ============================================
// TYPES & INTERFACES
// ============================================

export interface ForumPost {
  id: string;
  author_id: string;
  category_id: string;
  title: string;
  content: string;
  view_count: number;
  like_count: number;
  reply_count: number;
  is_pinned: boolean;
  created_at: string;
  updated_at: string;
  // Joined data
  author?: {
    id: string;
    name: string;
    username: string;
    avatar_url: string;
  };
  category?: {
    id: string;
    name: string;
    slug: string;
    color: string;
  };
}

export interface PostReply {
  id: string;
  post_id: string;
  author_id: string;
  content: string;
  like_count: number;
  created_at: string;
  updated_at: string;
  // Joined data
  author?: {
    id: string;
    name: string;
    username: string;
    avatar_url: string;
  };
}

export interface StudyGroup {
  id: string;
  name: string;
  description: string;
  member_count: number;
  is_active: boolean;
  avatar_letter: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface GroupMessage {
  id: string;
  group_id: string;
  sender_id: string;
  content: string;
  created_at: string;
  // Joined data
  sender?: {
    id: string;
    name: string;
    username: string;
    avatar_url: string;
  };
}

export interface UserRanking {
  id: string;
  user_id: string;
  rank_position: number;
  xp_points: number;
  current_score: number;
  rank_tier: string;
  period: string;
  // Joined data
  user?: {
    id: string;
    name: string;
    username: string;
    avatar_url: string;
  };
}

export interface PostCategory {
  id: string;
  name: string;
  slug: string;
  color: string;
  icon_url?: string;
}

// ============================================
// FORUM FUNCTIONS
// ============================================

/**
 * Get forum posts with filters
 */
export async function getForumPosts(
  filter: "latest" | "popular" | "unanswered" = "latest",
  limit: number = 20
): Promise<ForumPost[]> {
  let query = supabase
    .from("forum_posts")
    .select("*")
    .limit(limit);

  // Apply filters
  if (filter === "latest") {
    query = query.order("created_at", { ascending: false });
  } else if (filter === "popular") {
    query = query.order("like_count", { ascending: false });
  } else if (filter === "unanswered") {
    query = query.eq("reply_count", 0).order("created_at", { ascending: false });
  }

  const { data: posts, error } = await query;

  if (error) {
    console.error("Error fetching forum posts:", error);
    throw error;
  }

  // Get author and category info for each post
  const postsWithDetails = await Promise.all(
    (posts || []).map(async (post) => {
      const [authorResult, categoryResult] = await Promise.all([
        supabase
          .from("profiles")
          .select("id, name, username, avatar_url")
          .eq("id", post.author_id)
          .single(),
        supabase
          .from("post_categories")
          .select("id, name, slug, color")
          .eq("id", post.category_id)
          .single(),
      ]);

      return {
        ...post,
        author: authorResult.data || null,
        category: categoryResult.data || null,
      };
    })
  );

  return postsWithDetails;
}

/**
 * Get hot topics (posts with high engagement)
 */
export async function getHotTopics(limit: number = 10): Promise<ForumPost[]> {
  const { data: posts, error } = await supabase
    .from("forum_posts")
    .select("*")
    .order("like_count", { ascending: false })
    .order("reply_count", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching hot topics:", error);
    throw error;
  }

  // Get author and category info for each post
  const postsWithDetails = await Promise.all(
    (posts || []).map(async (post) => {
      const [authorResult, categoryResult] = await Promise.all([
        supabase
          .from("profiles")
          .select("id, name, username, avatar_url")
          .eq("id", post.author_id)
          .single(),
        supabase
          .from("post_categories")
          .select("id, name, slug, color")
          .eq("id", post.category_id)
          .single(),
      ]);

      return {
        ...post,
        author: authorResult.data || null,
        category: categoryResult.data || null,
      };
    })
  );

  return postsWithDetails;
}

/**
 * Get post detail with replies
 */
export async function getPostDetail(postId: string): Promise<{
  post: ForumPost;
  replies: PostReply[];
}> {
  // Get post
  const { data: post, error: postError } = await supabase
    .from("forum_posts")
    .select("*")
    .eq("id", postId)
    .single();

  if (postError) {
    console.error("Error fetching post:", postError);
    throw postError;
  }

  // Get author and category info for post
  const [authorResult, categoryResult] = await Promise.all([
    supabase
      .from("profiles")
      .select("id, name, username, avatar_url")
      .eq("id", post.author_id)
      .single(),
    supabase
      .from("post_categories")
      .select("id, name, slug, color")
      .eq("id", post.category_id)
      .single(),
  ]);

  const postWithDetails = {
    ...post,
    author: authorResult.data || null,
    category: categoryResult.data || null,
  };

  // Increment view count
  await supabase
    .from("forum_posts")
    .update({ view_count: (post.view_count || 0) + 1 })
    .eq("id", postId);

  // Get replies with author info from profiles
  const { data: repliesRaw, error: repliesError } = await supabase
    .from("post_replies")
    .select("*")
    .eq("post_id", postId)
    .order("created_at", { ascending: true });

  if (repliesError) {
    console.error("Error fetching replies:", repliesError);
    throw repliesError;
  }

  // Get author info for each reply
  const replies = await Promise.all(
    (repliesRaw || []).map(async (reply) => {
      const { data: author } = await supabase
        .from("profiles")
        .select("id, name, username, avatar_url")
        .eq("id", reply.author_id)
        .single();

      return {
        ...reply,
        author: author || null,
      };
    })
  );

  return {
    post: postWithDetails,
    replies: replies || [],
  };
}

/**
 * Create a new forum post
 */
export async function createPost(
  title: string,
  content: string,
  categoryId: string
): Promise<ForumPost> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { data: newPost, error } = await supabase
    .from("forum_posts")
    .insert({
      author_id: user.id,
      category_id: categoryId,
      title,
      content,
    })
    .select("*")
    .single();

  if (error) {
    console.error("Error creating post:", error);
    throw error;
  }

  // Get author and category info
  const [authorResult, categoryResult] = await Promise.all([
    supabase
      .from("profiles")
      .select("id, name, username, avatar_url")
      .eq("id", newPost.author_id)
      .single(),
    supabase
      .from("post_categories")
      .select("id, name, slug, color")
      .eq("id", newPost.category_id)
      .single(),
  ]);

  return {
    ...newPost,
    author: authorResult.data || null,
    category: categoryResult.data || null,
  };
}

/**
 * Create a reply to a post
 */
export async function createReply(
  postId: string,
  content: string
): Promise<PostReply> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { data: newReply, error } = await supabase
    .from("post_replies")
    .insert({
      post_id: postId,
      author_id: user.id,
      content,
    })
    .select("*")
    .single();

  if (error) {
    console.error("Error creating reply:", error);
    throw error;
  }

  // Get author info
  const { data: author } = await supabase
    .from("profiles")
    .select("id, name, username, avatar_url")
    .eq("id", newReply.author_id)
    .single();

  return {
    ...newReply,
    author: author || null,
  };
}

/**
 * Like a post
 */
export async function likePost(postId: string): Promise<void> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { error } = await supabase.from("post_likes").insert({
    post_id: postId,
    user_id: user.id,
  });

  if (error) {
    console.error("Error liking post:", error);
    throw error;
  }
}

/**
 * Unlike a post
 */
export async function unlikePost(postId: string): Promise<void> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { error } = await supabase
    .from("post_likes")
    .delete()
    .eq("post_id", postId)
    .eq("user_id", user.id);

  if (error) {
    console.error("Error unliking post:", error);
    throw error;
  }
}

/**
 * Like a reply
 */
export async function likeReply(replyId: string): Promise<void> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { error } = await supabase.from("reply_likes").insert({
    reply_id: replyId,
    user_id: user.id,
  });

  if (error) {
    console.error("Error liking reply:", error);
    throw error;
  }
}

/**
 * Unlike a reply
 */
export async function unlikeReply(replyId: string): Promise<void> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { error } = await supabase
    .from("reply_likes")
    .delete()
    .eq("reply_id", replyId)
    .eq("user_id", user.id);

  if (error) {
    console.error("Error unliking reply:", error);
    throw error;
  }
}

/**
 * Get all post categories
 */
export async function getPostCategories(): Promise<PostCategory[]> {
  const { data, error } = await supabase
    .from("post_categories")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }

  return data || [];
}

// ============================================
// STUDY GROUPS FUNCTIONS
// ============================================

/**
 * Get all study groups
 */
export async function getStudyGroups(): Promise<StudyGroup[]> {
  const { data, error } = await supabase
    .from("study_groups")
    .select("*")
    .eq("is_active", true)
    .order("member_count", { ascending: false });

  if (error) {
    console.error("Error fetching study groups:", error);
    throw error;
  }

  return data || [];
}

/**
 * Get group detail
 */
export async function getGroupDetail(groupId: string): Promise<StudyGroup> {
  const { data, error } = await supabase
    .from("study_groups")
    .select("*")
    .eq("id", groupId)
    .single();

  if (error) {
    console.error("Error fetching group detail:", error);
    throw error;
  }

  return data;
}

/**
 * Join a study group
 */
export async function joinGroup(groupId: string): Promise<void> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { error } = await supabase.from("group_members").insert({
    group_id: groupId,
    user_id: user.id,
  });

  if (error) {
    console.error("Error joining group:", error);
    throw error;
  }
}

/**
 * Leave a study group
 */
export async function leaveGroup(groupId: string): Promise<void> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { error } = await supabase
    .from("group_members")
    .delete()
    .eq("group_id", groupId)
    .eq("user_id", user.id);

  if (error) {
    console.error("Error leaving group:", error);
    throw error;
  }
}

/**
 * Check if user is member of a group
 */
export async function isGroupMember(groupId: string): Promise<boolean> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return false;
  }

  const { data, error } = await supabase
    .from("group_members")
    .select("id")
    .eq("group_id", groupId)
    .eq("user_id", user.id)
    .single();

  if (error && error.code !== "PGRST116") {
    console.error("Error checking group membership:", error);
    return false;
  }

  return !!data;
}

// ============================================
// CHAT FUNCTIONS
// ============================================

/**
 * Get group messages
 */
export async function getGroupMessages(
  groupId: string,
  limit: number = 50
): Promise<GroupMessage[]> {
  const { data, error } = await supabase
    .from("group_messages")
    .select(
      `
      *,
      sender:profiles!sender_id(id, name, username, avatar_url)
    `
    )
    .eq("group_id", groupId)
    .order("created_at", { ascending: true })
    .limit(limit);

  if (error) {
    console.error("Error fetching group messages:", error);
    throw error;
  }

  return data || [];
}

/**
 * Send a message to a group
 */
export async function sendMessage(
  groupId: string,
  content: string
): Promise<GroupMessage> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { data, error } = await supabase
    .from("group_messages")
    .insert({
      group_id: groupId,
      sender_id: user.id,
      content,
    })
    .select(
      `
      *,
      sender:profiles!sender_id(id, name, username, avatar_url)
    `
    )
    .single();

  if (error) {
    console.error("Error sending message:", error);
    throw error;
  }

  return data;
}

/**
 * Subscribe to real-time messages in a group
 */
export function subscribeToMessages(
  groupId: string,
  callback: (message: GroupMessage) => void
) {
  const channel = supabase
    .channel(`group_messages:${groupId}`)
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "group_messages",
        filter: `group_id=eq.${groupId}`,
      },
      async (payload) => {
        // Fetch full message with sender info
        const { data } = await supabase
          .from("group_messages")
          .select(
            `
            *,
            sender:profiles!sender_id(id, name, username, avatar_url)
          `
          )
          .eq("id", payload.new.id)
          .single();

        if (data) {
          callback(data);
        }
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}

// ============================================
// RANKING FUNCTIONS
// ============================================

/**
 * Get user rankings
 */
export async function getUserRankings(
  period: "weekly" | "monthly" | "all-time" = "weekly",
  limit: number = 100
): Promise<UserRanking[]> {
  // For now, we'll calculate rankings from profiles table
  // In production, you'd use the user_rankings cache table
  const { data, error } = await supabase
    .from("profiles")
    .select("id, name, username, avatar_url, xp_points, current_score, rank_tier")
    .order("current_score", { ascending: false })
    .order("xp_points", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching rankings:", error);
    throw error;
  }

  // Transform to UserRanking format with rank positions
  return (data || []).map((user, index) => ({
    id: user.id,
    user_id: user.id,
    rank_position: index + 1,
    xp_points: user.xp_points || 0,
    current_score: user.current_score || 0,
    rank_tier: user.rank_tier || "Bronze",
    period,
    user: {
      id: user.id,
      name: user.name || "",
      username: user.username || "",
      avatar_url: user.avatar_url || "",
    },
  }));
}

/**
 * Get current user's rank
 */
export async function getCurrentUserRank(): Promise<UserRanking | null> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  // Get all users ordered by score
  const { data: allUsers, error } = await supabase
    .from("profiles")
    .select("id, name, username, avatar_url, xp_points, current_score, rank_tier")
    .order("current_score", { ascending: false })
    .order("xp_points", { ascending: false });

  if (error) {
    console.error("Error fetching user rank:", error);
    throw error;
  }

  // Find current user's position
  const userIndex = (allUsers || []).findIndex((u) => u.id === user.id);

  if (userIndex === -1) {
    return null;
  }

  const userData = allUsers[userIndex];

  return {
    id: userData.id,
    user_id: userData.id,
    rank_position: userIndex + 1,
    xp_points: userData.xp_points || 0,
    current_score: userData.current_score || 0,
    rank_tier: userData.rank_tier || "Bronze",
    period: "weekly",
    user: {
      id: userData.id,
      name: userData.name || "",
      username: userData.username || "",
      avatar_url: userData.avatar_url || "",
    },
  };
}

/**
 * Update user XP points
 */
export async function updateUserXP(xpChange: number): Promise<void> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  // Get current XP
  const { data: profile } = await supabase
    .from("profiles")
    .select("xp_points")
    .eq("id", user.id)
    .single();

  const currentXP = profile?.xp_points || 0;
  const newXP = Math.max(0, currentXP + xpChange);

  // Update XP and calculate new tier
  const newTier = calculateRankTier(newXP);

  const { error } = await supabase
    .from("profiles")
    .update({
      xp_points: newXP,
      rank_tier: newTier,
    })
    .eq("id", user.id);

  if (error) {
    console.error("Error updating XP:", error);
    throw error;
  }
}

/**
 * Calculate rank tier based on XP
 */
function calculateRankTier(xp: number): string {
  if (xp >= 15000) return "Diamond";
  if (xp >= 11000) return "Platinum";
  if (xp >= 7000) return "Gold";
  if (xp >= 3000) return "Silver";
  return "Bronze";
}

/**
 * Get total community member count
 */
export async function getCommunityMemberCount(): Promise<number> {
  const { count, error } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("Error fetching member count:", error);
    return 0;
  }

  return count || 0;
}
