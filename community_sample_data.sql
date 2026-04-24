-- =====================================================
-- COMMUNITY SAMPLE DATA
-- Dữ liệu mẫu để test các chức năng Community
-- =====================================================

-- Lưu ý: Chạy file community_schema.sql trước khi chạy file này!

-- 1. Thêm categories cho forum posts
INSERT INTO public.post_categories (id, name, color) VALUES
  ('a1b2c3d4-e5f6-4a5b-8c9d-1e2f3a4b5c6d', 'Listening', '#8B6BAE'),
  ('b2c3d4e5-f6a7-4b5c-9d1e-2f3a4b5c6d7e', 'Reading', '#5B9E91'),
  ('c3d4e5f6-a7b8-4c5d-9e1f-3a4b5c6d7e8f', 'Grammar', '#E07B54'),
  ('d4e5f6a7-b8c9-4d5e-9f1a-4b5c6d7e8f9a', 'Vocabulary', '#D4A853'),
  ('e5f6a7b8-c9d1-4e5f-9a1b-5c6d7e8f9a0b', 'Tips', '#A47551'),
  ('f6a7b8c9-d1e2-4f5a-9b1c-6d7e8f9a0b1c', 'General', '#6E6880')
ON CONFLICT (id) DO NOTHING;

-- 2. Thêm study groups
INSERT INTO public.study_groups (id, name, description, avatar_letter, is_active) VALUES
  ('11111111-1111-4111-8111-111111111111', 'TOEIC 800+ Club', 'For serious learners targeting 800+', 'T', true),
  ('22222222-2222-4222-8222-222222222222', 'Daily Practice', 'Daily study sessions together', 'D', true),
  ('33333333-3333-4333-8333-333333333333', 'Beginners Welcome', 'Start your TOEIC journey', 'B', false),
  ('44444444-4444-4444-8444-444444444444', 'Listening Squad', 'Improve listening skills together', 'L', true)
ON CONFLICT (id) DO NOTHING;

-- 3. Thêm một số forum posts mẫu
-- Lưu ý: Thay 'YOUR_USER_ID' bằng user ID thực tế của bạn từ auth.users
-- Hoặc chạy query này để lấy user ID:
-- SELECT id FROM auth.users LIMIT 1;

-- Post 1: Listening tips
INSERT INTO public.forum_posts (id, author_id, category_id, title, content) VALUES
  ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', 
   (SELECT id FROM auth.users LIMIT 1), 
   'a1b2c3d4-e5f6-4a5b-8c9d-1e2f3a4b5c6d',
   'Tips for Part 3 conversations?',
   'I always struggle with Part 3 in the listening section. The conversations are too fast and I can''t keep up with both speakers. Does anyone have tips for improving?')
ON CONFLICT (id) DO NOTHING;

-- Post 2: Study success story
INSERT INTO public.forum_posts (id, author_id, category_id, title, content) VALUES
  ('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb',
   (SELECT id FROM auth.users LIMIT 1),
   'e5f6a7b8-c9d1-4e5f-9a1b-5c6d7e8f9a0b',
   'How I scored 900 in 3 months',
   'Here is my study plan that helped me achieve 900 points in just 3 months. I practiced 2 hours daily, focused on weak areas, and used this app consistently.')
ON CONFLICT (id) DO NOTHING;

-- Post 3: Grammar question
INSERT INTO public.forum_posts (id, author_id, category_id, title, content) VALUES
  ('cccccccc-cccc-4ccc-8ccc-cccccccccccc',
   (SELECT id FROM auth.users LIMIT 1),
   'c3d4e5f6-a7b8-4c5d-9e1f-3a4b5c6d7e8f',
   'Grammar question: had + pp',
   'When do we use past perfect tense? I''m confused about the difference between simple past and past perfect in TOEIC questions.')
ON CONFLICT (id) DO NOTHING;

-- Post 4: Reading strategies
INSERT INTO public.forum_posts (id, author_id, category_id, title, content) VALUES
  ('dddddddd-dddd-4ddd-8ddd-dddddddddddd',
   (SELECT id FROM auth.users LIMIT 1),
   'b2c3d4e5-f6a7-4b5c-9d1e-2f3a4b5c6d7e',
   'Part 7 time management',
   'How do you manage time for reading section? I always run out of time on Part 7. Any strategies?')
ON CONFLICT (id) DO NOTHING;

-- 4. Thêm một số replies cho post đầu tiên
INSERT INTO public.post_replies (post_id, author_id, content) VALUES
  ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', (SELECT id FROM auth.users LIMIT 1), 'Great question! I recommend practicing with transcripts first.'),
  ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', (SELECT id FROM auth.users LIMIT 1), 'I use the shadowing technique, it helps a lot!'),
  ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', (SELECT id FROM auth.users LIMIT 1), 'Try listening to podcasts at 1.25x speed.')
ON CONFLICT DO NOTHING;

-- 5. Thêm một số likes
INSERT INTO public.post_likes (post_id, user_id) VALUES
  ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', (SELECT id FROM auth.users LIMIT 1)),
  ('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb', (SELECT id FROM auth.users LIMIT 1))
ON CONFLICT DO NOTHING;

-- 6. Thêm group members
INSERT INTO public.group_members (group_id, user_id) VALUES
  ('11111111-1111-4111-8111-111111111111', (SELECT id FROM auth.users LIMIT 1)),
  ('22222222-2222-4222-8222-222222222222', (SELECT id FROM auth.users LIMIT 1)),
  ('44444444-4444-4444-8444-444444444444', (SELECT id FROM auth.users LIMIT 1))
ON CONFLICT DO NOTHING;

-- 7. Thêm một số chat messages
INSERT INTO public.group_messages (group_id, user_id, content) VALUES
  ('11111111-1111-4111-8111-111111111111', (SELECT id FROM auth.users LIMIT 1), 'Has anyone tried the new listening exercises?'),
  ('11111111-1111-4111-8111-111111111111', (SELECT id FROM auth.users LIMIT 1), 'Yes! Part 3 is really good now'),
  ('11111111-1111-4111-8111-111111111111', (SELECT id FROM auth.users LIMIT 1), 'I agree, the audio quality is much better'),
  ('22222222-2222-4222-8222-222222222222', (SELECT id FROM auth.users LIMIT 1), 'Good morning everyone! Ready for today''s practice?'),
  ('22222222-2222-4222-8222-222222222222', (SELECT id FROM auth.users LIMIT 1), 'Yes! Let''s do Part 5 today')
ON CONFLICT DO NOTHING;

-- 8. Cập nhật user profile với XP và rank
UPDATE public.profiles 
SET 
  username = 'toeic_learner',
  bio = 'Studying for TOEIC 800+',
  xp_points = 1250,
  rank_tier = 'Gold'
WHERE id = (SELECT id FROM auth.users LIMIT 1);

-- =====================================================
-- VERIFICATION QUERIES
-- Chạy các query này để kiểm tra dữ liệu đã được thêm
-- =====================================================

-- Kiểm tra categories
-- SELECT * FROM post_categories;

-- Kiểm tra posts
-- SELECT p.title, p.content, c.name as category, p.like_count, p.reply_count 
-- FROM forum_posts p 
-- LEFT JOIN post_categories c ON p.category_id = c.id;

-- Kiểm tra groups
-- SELECT * FROM study_groups;

-- Kiểm tra messages
-- SELECT g.name, m.content, m.created_at 
-- FROM group_messages m 
-- JOIN study_groups g ON m.group_id = g.id 
-- ORDER BY m.created_at;

COMMIT;
