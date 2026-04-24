-- =====================================================
-- COMMUNITY COMPLETE SETUP
-- Tạo lại toàn bộ schema và dữ liệu mẫu cho Community
-- =====================================================

-- Xóa các bảng cũ nếu có (cẩn thận!)
-- DROP TABLE IF EXISTS public.reply_likes CASCADE;
-- DROP TABLE IF EXISTS public.post_likes CASCADE;
-- DROP TABLE IF EXISTS public.post_replies CASCADE;
-- DROP TABLE IF EXISTS public.forum_posts CASCADE;
-- DROP TABLE IF EXISTS public.post_categories CASCADE;
-- DROP TABLE IF EXISTS public.group_messages CASCADE;
-- DROP TABLE IF EXISTS public.group_members CASCADE;
-- DROP TABLE IF EXISTS public.study_groups CASCADE;
-- DROP TABLE IF EXISTS public.user_rankings CASCADE;

-- =====================================================
-- 1. EXTEND PROFILES TABLE
-- =====================================================

-- Thêm các cột cần thiết cho profiles (nếu chưa có)
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS username TEXT,
ADD COLUMN IF NOT EXISTS bio TEXT,
ADD COLUMN IF NOT EXISTS xp_points INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS rank_tier TEXT DEFAULT 'Bronze';

-- =====================================================
-- 2. POST CATEGORIES TABLE
-- =====================================================

CREATE TABLE IF NOT EXISTS public.post_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  color TEXT NOT NULL DEFAULT '#6E6880',
  icon_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- 3. FORUM POSTS TABLE
-- =====================================================

CREATE TABLE IF NOT EXISTS public.forum_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES public.post_categories(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  view_count INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  reply_count INTEGER DEFAULT 0,
  is_pinned BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- 4. POST REPLIES TABLE
-- =====================================================

CREATE TABLE IF NOT EXISTS public.post_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES public.forum_posts(id) ON DELETE CASCADE,
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  like_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- 5. POST LIKES TABLE
-- =====================================================

CREATE TABLE IF NOT EXISTS public.post_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES public.forum_posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(post_id, user_id)
);

-- =====================================================
-- 6. REPLY LIKES TABLE
-- =====================================================

CREATE TABLE IF NOT EXISTS public.reply_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reply_id UUID NOT NULL REFERENCES public.post_replies(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(reply_id, user_id)
);

-- =====================================================
-- 7. STUDY GROUPS TABLE
-- =====================================================

CREATE TABLE IF NOT EXISTS public.study_groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  member_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  avatar_letter TEXT DEFAULT 'G',
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- 8. GROUP MEMBERS TABLE
-- =====================================================

CREATE TABLE IF NOT EXISTS public.group_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID NOT NULL REFERENCES public.study_groups(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(group_id, user_id)
);

-- =====================================================
-- 9. GROUP MESSAGES TABLE
-- =====================================================

CREATE TABLE IF NOT EXISTS public.group_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID NOT NULL REFERENCES public.study_groups(id) ON DELETE CASCADE,
  sender_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- 10. USER RANKINGS TABLE (CACHE)
-- =====================================================

CREATE TABLE IF NOT EXISTS public.user_rankings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  rank_position INTEGER NOT NULL,
  xp_points INTEGER DEFAULT 0,
  current_score INTEGER DEFAULT 0,
  rank_tier TEXT DEFAULT 'Bronze',
  period TEXT DEFAULT 'weekly', -- weekly, monthly, all-time
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, period)
);

-- =====================================================
-- 11. INDEXES FOR PERFORMANCE
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_forum_posts_author ON public.forum_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_forum_posts_category ON public.forum_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_forum_posts_created ON public.forum_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_forum_posts_likes ON public.forum_posts(like_count DESC);

CREATE INDEX IF NOT EXISTS idx_post_replies_post ON public.post_replies(post_id);
CREATE INDEX IF NOT EXISTS idx_post_replies_author ON public.post_replies(author_id);

CREATE INDEX IF NOT EXISTS idx_group_messages_group ON public.group_messages(group_id);
CREATE INDEX IF NOT EXISTS idx_group_messages_created ON public.group_messages(created_at);

CREATE INDEX IF NOT EXISTS idx_group_members_group ON public.group_members(group_id);
CREATE INDEX IF NOT EXISTS idx_group_members_user ON public.group_members(user_id);

-- =====================================================
-- 12. TRIGGERS FOR AUTO-UPDATE COUNTERS
-- =====================================================

-- Function to update post reply count
CREATE OR REPLACE FUNCTION update_post_reply_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.forum_posts 
    SET reply_count = reply_count + 1 
    WHERE id = NEW.post_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.forum_posts 
    SET reply_count = GREATEST(0, reply_count - 1) 
    WHERE id = OLD.post_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Function to update post like count
CREATE OR REPLACE FUNCTION update_post_like_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.forum_posts 
    SET like_count = like_count + 1 
    WHERE id = NEW.post_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.forum_posts 
    SET like_count = GREATEST(0, like_count - 1) 
    WHERE id = OLD.post_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Function to update reply like count
CREATE OR REPLACE FUNCTION update_reply_like_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.post_replies 
    SET like_count = like_count + 1 
    WHERE id = NEW.reply_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.post_replies 
    SET like_count = GREATEST(0, like_count - 1) 
    WHERE id = OLD.reply_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Function to update group member count
CREATE OR REPLACE FUNCTION update_group_member_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.study_groups 
    SET member_count = member_count + 1 
    WHERE id = NEW.group_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.study_groups 
    SET member_count = GREATEST(0, member_count - 1) 
    WHERE id = OLD.group_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create triggers
DROP TRIGGER IF EXISTS trigger_update_post_reply_count ON public.post_replies;
CREATE TRIGGER trigger_update_post_reply_count
  AFTER INSERT OR DELETE ON public.post_replies
  FOR EACH ROW EXECUTE FUNCTION update_post_reply_count();

DROP TRIGGER IF EXISTS trigger_update_post_like_count ON public.post_likes;
CREATE TRIGGER trigger_update_post_like_count
  AFTER INSERT OR DELETE ON public.post_likes
  FOR EACH ROW EXECUTE FUNCTION update_post_like_count();

DROP TRIGGER IF EXISTS trigger_update_reply_like_count ON public.reply_likes;
CREATE TRIGGER trigger_update_reply_like_count
  AFTER INSERT OR DELETE ON public.reply_likes
  FOR EACH ROW EXECUTE FUNCTION update_reply_like_count();

DROP TRIGGER IF EXISTS trigger_update_group_member_count ON public.group_members;
CREATE TRIGGER trigger_update_group_member_count
  AFTER INSERT OR DELETE ON public.group_members
  FOR EACH ROW EXECUTE FUNCTION update_group_member_count();

-- =====================================================
-- 13. ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Enable RLS
ALTER TABLE public.post_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reply_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.group_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.group_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_rankings ENABLE ROW LEVEL SECURITY;

-- Policies for post_categories (public read)
DROP POLICY IF EXISTS "Categories are viewable by everyone" ON public.post_categories;
CREATE POLICY "Categories are viewable by everyone" ON public.post_categories
  FOR SELECT USING (true);

-- Policies for forum_posts
DROP POLICY IF EXISTS "Posts are viewable by everyone" ON public.forum_posts;
CREATE POLICY "Posts are viewable by everyone" ON public.forum_posts
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can create posts" ON public.forum_posts;
CREATE POLICY "Users can create posts" ON public.forum_posts
  FOR INSERT WITH CHECK (auth.uid() = author_id);

DROP POLICY IF EXISTS "Users can update own posts" ON public.forum_posts;
CREATE POLICY "Users can update own posts" ON public.forum_posts
  FOR UPDATE USING (auth.uid() = author_id);

-- Policies for post_replies
DROP POLICY IF EXISTS "Replies are viewable by everyone" ON public.post_replies;
CREATE POLICY "Replies are viewable by everyone" ON public.post_replies
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can create replies" ON public.post_replies;
CREATE POLICY "Users can create replies" ON public.post_replies
  FOR INSERT WITH CHECK (auth.uid() = author_id);

-- Policies for likes
DROP POLICY IF EXISTS "Users can manage own post likes" ON public.post_likes;
CREATE POLICY "Users can manage own post likes" ON public.post_likes
  FOR ALL USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can manage own reply likes" ON public.reply_likes;
CREATE POLICY "Users can manage own reply likes" ON public.reply_likes
  FOR ALL USING (auth.uid() = user_id);

-- Policies for study groups
DROP POLICY IF EXISTS "Groups are viewable by everyone" ON public.study_groups;
CREATE POLICY "Groups are viewable by everyone" ON public.study_groups
  FOR SELECT USING (true);

-- Policies for group members
DROP POLICY IF EXISTS "Group members are viewable by everyone" ON public.group_members;
CREATE POLICY "Group members are viewable by everyone" ON public.group_members
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can manage own group membership" ON public.group_members;
CREATE POLICY "Users can manage own group membership" ON public.group_members
  FOR ALL USING (auth.uid() = user_id);

-- Policies for group messages
DROP POLICY IF EXISTS "Group messages are viewable by members" ON public.group_messages;
CREATE POLICY "Group messages are viewable by members" ON public.group_messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.group_members 
      WHERE group_id = group_messages.group_id 
      AND user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "Users can send messages to joined groups" ON public.group_messages;
CREATE POLICY "Users can send messages to joined groups" ON public.group_messages
  FOR INSERT WITH CHECK (
    auth.uid() = sender_id AND
    EXISTS (
      SELECT 1 FROM public.group_members 
      WHERE group_id = group_messages.group_id 
      AND user_id = auth.uid()
    )
  );

-- Policies for user rankings
DROP POLICY IF EXISTS "Rankings are viewable by everyone" ON public.user_rankings;
CREATE POLICY "Rankings are viewable by everyone" ON public.user_rankings
  FOR SELECT USING (true);

-- =====================================================
-- 14. SAMPLE DATA
-- =====================================================

-- Insert categories
INSERT INTO public.post_categories (id, name, slug, color) VALUES
  ('a1b2c3d4-e5f6-4a5b-8c9d-1e2f3a4b5c6d', 'Listening', 'listening', '#8B6BAE'),
  ('b2c3d4e5-f6a7-4b5c-9d1e-2f3a4b5c6d7e', 'Reading', 'reading', '#5B9E91'),
  ('c3d4e5f6-a7b8-4c5d-9e1f-3a4b5c6d7e8f', 'Grammar', 'grammar', '#E07B54'),
  ('d4e5f6a7-b8c9-4d5e-9f1a-4b5c6d7e8f9a', 'Vocabulary', 'vocabulary', '#D4A853'),
  ('e5f6a7b8-c9d1-4e5f-9a1b-5c6d7e8f9a0b', 'Tips', 'tips', '#A47551'),
  ('f6a7b8c9-d1e2-4f5a-9b1c-6d7e8f9a0b1c', 'General', 'general', '#6E6880')
ON CONFLICT (id) DO NOTHING;

-- Insert study groups
INSERT INTO public.study_groups (id, name, description, avatar_letter, is_active, member_count) VALUES
  ('11111111-1111-4111-8111-111111111111', 'TOEIC 800+ Club', 'For serious learners targeting 800+', 'T', true, 156),
  ('22222222-2222-4222-8222-222222222222', 'Daily Practice', 'Daily study sessions together', 'D', true, 89),
  ('33333333-3333-4333-8333-333333333333', 'Beginners Welcome', 'Start your TOEIC journey', 'B', true, 522),
  ('44444444-4444-4444-8444-444444444444', 'Listening Squad', 'Improve listening skills together', 'L', true, 123)
ON CONFLICT (id) DO NOTHING;

-- Insert sample posts (only if there are users)
DO $$
DECLARE
  sample_user_id UUID;
BEGIN
  -- Get a sample user ID
  SELECT id INTO sample_user_id FROM auth.users LIMIT 1;
  
  IF sample_user_id IS NOT NULL THEN
    -- Insert forum posts
    INSERT INTO public.forum_posts (id, author_id, category_id, title, content, like_count, reply_count) VALUES
      ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', 
       sample_user_id, 
       'a1b2c3d4-e5f6-4a5b-8c9d-1e2f3a4b5c6d',
       'Tips for Part 3 conversations?',
       'I always struggle with Part 3 in the listening section. The conversations are too fast and I can''t keep up with both speakers. Does anyone have tips for improving?',
       36, 22),
      ('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb',
       sample_user_id,
       'e5f6a7b8-c9d1-4e5f-9a1b-5c6d7e8f9a0b',
       'How I scored 900 in 3 months',
       'Here is my study plan that helped me achieve 900 points in just 3 months. I practiced 2 hours daily, focused on weak areas, and used this app consistently.',
       358, 280),
      ('cccccccc-cccc-4ccc-8ccc-cccccccccccc',
       sample_user_id,
       'c3d4e5f6-a7b8-4c5d-9e1f-3a4b5c6d7e8f',
       'Grammar question: had + pp',
       'When do we use past perfect tense? I''m confused about the difference between simple past and past perfect in TOEIC questions.',
       56, 56),
      ('dddddddd-dddd-4ddd-8ddd-dddddddddddd',
       sample_user_id,
       'b2c3d4e5-f6a7-4b5c-9d1e-2f3a4b5c6d7e',
       'Part 7 time management',
       'How do you manage time for reading section? I always run out of time on Part 7. Any strategies?',
       11, 88)
    ON CONFLICT (id) DO NOTHING;

    -- Insert replies
    INSERT INTO public.post_replies (post_id, author_id, content, like_count) VALUES
      ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', sample_user_id, 'Great question! I recommend practicing with transcripts first.', 12),
      ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', sample_user_id, 'I use the shadowing technique, it helps a lot!', 15),
      ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', sample_user_id, 'Try listening to podcasts at 1.25x speed.', 8)
    ON CONFLICT DO NOTHING;

    -- Insert group members
    INSERT INTO public.group_members (group_id, user_id) VALUES
      ('11111111-1111-4111-8111-111111111111', sample_user_id),
      ('22222222-2222-4222-8222-222222222222', sample_user_id),
      ('44444444-4444-4444-8444-444444444444', sample_user_id)
    ON CONFLICT DO NOTHING;

    -- Insert chat messages
    INSERT INTO public.group_messages (group_id, sender_id, content) VALUES
      ('11111111-1111-4111-8111-111111111111', sample_user_id, 'Has anyone tried the new listening exercises?'),
      ('11111111-1111-4111-8111-111111111111', sample_user_id, 'Yes! Part 3 is really good now'),
      ('11111111-1111-4111-8111-111111111111', sample_user_id, 'I agree, the audio quality is much better'),
      ('22222222-2222-4222-8222-222222222222', sample_user_id, 'Good morning everyone! Ready for today''s practice?'),
      ('22222222-2222-4222-8222-222222222222', sample_user_id, 'Yes! Let''s do Part 5 today')
    ON CONFLICT DO NOTHING;

    -- Update user profile
    UPDATE public.profiles 
    SET 
      username = 'toeic_learner',
      bio = 'Studying for TOEIC 800+',
      xp_points = 1250,
      rank_tier = 'Gold'
    WHERE id = sample_user_id;
  END IF;
END $$;

-- =====================================================
-- 15. VERIFICATION QUERIES
-- =====================================================

-- Uncomment these to verify data after running:

-- SELECT 'Categories' as table_name, count(*) as count FROM post_categories
-- UNION ALL
-- SELECT 'Groups', count(*) FROM study_groups
-- UNION ALL  
-- SELECT 'Posts', count(*) FROM forum_posts
-- UNION ALL
-- SELECT 'Replies', count(*) FROM post_replies
-- UNION ALL
-- SELECT 'Messages', count(*) FROM group_messages;

COMMIT;