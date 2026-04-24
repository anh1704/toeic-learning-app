-- TOEIC Tips schema for Supabase/PostgreSQL
-- Covers:
-- 1) Reading Tips screen
-- 2) Listening Tips screen
-- 3) Tips & Tricks screen with filters

BEGIN;

-- Optional enums for stricter data quality
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'tip_skill') THEN
    CREATE TYPE public.tip_skill AS ENUM ('reading', 'listening', 'general');
  END IF;
END
$$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'tip_status') THEN
    CREATE TYPE public.tip_status AS ENUM ('draft', 'published', 'archived');
  END IF;
END
$$;

-- 1) Core tips table
CREATE TABLE IF NOT EXISTS public.tips (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  skill public.tip_skill NOT NULL DEFAULT 'general',
  status public.tip_status NOT NULL DEFAULT 'published',
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- 2) Tags (Strategy, Part 1, Vocabulary, ...)
CREATE TABLE IF NOT EXISTS public.tip_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  tag_type TEXT NOT NULL CHECK (tag_type IN ('topic', 'exam_part', 'skill', 'other')),
  color TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- 3) Many-to-many mapping
CREATE TABLE IF NOT EXISTS public.tip_tag_map (
  tip_id UUID NOT NULL REFERENCES public.tips(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES public.tip_tags(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  PRIMARY KEY (tip_id, tag_id)
);

-- 4) Optional screen mapping (use when manually controlling each screen)
CREATE TABLE IF NOT EXISTS public.tip_screen_map (
  tip_id UUID NOT NULL REFERENCES public.tips(id) ON DELETE CASCADE,
  screen_key TEXT NOT NULL CHECK (screen_key IN ('reading_tips', 'listening_tips', 'tips_tricks')),
  sort_order INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (tip_id, screen_key)
);

-- Helpful indexes
CREATE INDEX IF NOT EXISTS idx_tips_skill_active_order
  ON public.tips (skill, is_active, sort_order);

CREATE INDEX IF NOT EXISTS idx_tips_status_active
  ON public.tips (status, is_active);

CREATE INDEX IF NOT EXISTS idx_tip_tags_slug
  ON public.tip_tags (slug);

CREATE INDEX IF NOT EXISTS idx_tip_screen_map_screen_order
  ON public.tip_screen_map (screen_key, sort_order);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_tips_set_updated_at ON public.tips;
CREATE TRIGGER trg_tips_set_updated_at
BEFORE UPDATE ON public.tips
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- RLS
ALTER TABLE public.tips ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tip_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tip_tag_map ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tip_screen_map ENABLE ROW LEVEL SECURITY;

-- Read for everyone (anonymous + authenticated), only published and active tips
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'tips'
      AND policyname = 'Public can read active published tips'
  ) THEN
    CREATE POLICY "Public can read active published tips"
      ON public.tips FOR SELECT
      TO anon, authenticated
      USING (status = 'published' AND is_active = TRUE);
  END IF;
END
$$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'tip_tags'
      AND policyname = 'Public can read tags'
  ) THEN
    CREATE POLICY "Public can read tags"
      ON public.tip_tags FOR SELECT
      TO anon, authenticated
      USING (TRUE);
  END IF;
END
$$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'tip_tag_map'
      AND policyname = 'Public can read tip tag mappings'
  ) THEN
    CREATE POLICY "Public can read tip tag mappings"
      ON public.tip_tag_map FOR SELECT
      TO anon, authenticated
      USING (TRUE);
  END IF;
END
$$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'tip_screen_map'
      AND policyname = 'Public can read tip screen mappings'
  ) THEN
    CREATE POLICY "Public can read tip screen mappings"
      ON public.tip_screen_map FOR SELECT
      TO anon, authenticated
      USING (TRUE);
  END IF;
END
$$;

-- Admin write access (service role bypasses RLS by default on Supabase).
GRANT SELECT ON public.tips TO anon, authenticated;
GRANT SELECT ON public.tip_tags TO anon, authenticated;
GRANT SELECT ON public.tip_tag_map TO anon, authenticated;
GRANT SELECT ON public.tip_screen_map TO anon, authenticated;

COMMIT;

-- -----------------------
-- Seed data (idempotent)
-- -----------------------

-- Tags
INSERT INTO public.tip_tags (name, slug, tag_type, color)
VALUES
  ('General', 'general', 'topic', '#EDE6DF'),
  ('Strategy', 'strategy', 'topic', '#E8DCCF'),
  ('Listening', 'listening', 'skill', '#EDE6DF'),
  ('Reading', 'reading', 'skill', '#EDE6DF'),
  ('Vocabulary', 'vocabulary', 'topic', '#EDE6DF'),
  ('Part 1', 'part-1', 'exam_part', '#F1E5D8'),
  ('Part 3', 'part-3', 'exam_part', '#F1E5D8'),
  ('Part 4', 'part-4', 'exam_part', '#F1E5D8')
ON CONFLICT (slug) DO NOTHING;

-- Tips
INSERT INTO public.tips (title, content, skill, sort_order)
VALUES
  ('Skim First', 'Quickly scan the passage to understand the main idea before reading questions.', 'reading', 10),
  ('Time Management', 'Spend about 1 minute per question. Don''t get stuck on difficult ones.', 'reading', 20),
  ('Key Words', 'Underline or note key words in questions to find answers faster.', 'reading', 30),
  ('Context Clues', 'Use surrounding words to figure out the meaning of unfamiliar vocabulary.', 'reading', 40),
  ('Read Questions First', 'For Part 7, read the questions before the passage to know what to look for.', 'reading', 50),
  ('Eliminate Wrong Answers', 'If unsure, eliminate obviously wrong answers to improve your chances.', 'reading', 60),

  ('Focus on Key Words', 'Listen for specific nouns, verbs, and adjectives that give meaning to sentences.', 'listening', 70),
  ('Predict Answers', 'Read questions before listening to know what to focus on.', 'listening', 80),
  ('Watch for Distractors', 'Be careful of words that sound similar but have different meanings.', 'listening', 90),
  ('Note Speaker Changes', 'In Part 3, pay attention to who is speaking and their tone.', 'listening', 100),
  ('Main Idea First', 'In Part 4, identify the main topic within the first few seconds.', 'listening', 110),
  ('Practice Daily', 'Even 15 minutes of daily listening can significantly improve your score.', 'listening', 120),

  ('The 2-Second Rule', 'Skip questions you can''t answer within 2 seconds in Part 5.', 'general', 130),
  ('Predict Before Listen', 'Read all options before the audio plays.', 'listening', 140),
  ('Elimination Method', 'Cross out obviously wrong answers first.', 'general', 150),
  ('Time Boxing', 'Allocate specific time to each section.', 'general', 160),
  ('Active Reading', 'Underline key words as you read passages.', 'reading', 170),
  ('Word Families', 'Track common noun/verb/adjective forms to improve vocabulary speed.', 'general', 180)
ON CONFLICT DO NOTHING;

-- Link helper CTE for tags
WITH tip_tag_links AS (
  SELECT 'Focus on Key Words'::TEXT AS tip_title, 'general'::TEXT AS tag_slug UNION ALL
  SELECT 'Predict Answers', 'strategy' UNION ALL
  SELECT 'Watch for Distractors', 'part-1' UNION ALL
  SELECT 'Note Speaker Changes', 'part-3' UNION ALL
  SELECT 'Main Idea First', 'part-4' UNION ALL
  SELECT 'Practice Daily', 'general' UNION ALL
  SELECT 'Skim First', 'reading' UNION ALL
  SELECT 'Time Management', 'strategy' UNION ALL
  SELECT 'Key Words', 'reading' UNION ALL
  SELECT 'Context Clues', 'reading' UNION ALL
  SELECT 'Read Questions First', 'reading' UNION ALL
  SELECT 'Eliminate Wrong Answers', 'strategy' UNION ALL
  SELECT 'The 2-Second Rule', 'strategy' UNION ALL
  SELECT 'Predict Before Listen', 'listening' UNION ALL
  SELECT 'Elimination Method', 'general' UNION ALL
  SELECT 'Time Boxing', 'strategy' UNION ALL
  SELECT 'Active Reading', 'reading' UNION ALL
  SELECT 'Word Families', 'vocabulary'
)
INSERT INTO public.tip_tag_map (tip_id, tag_id)
SELECT t.id, tg.id
FROM tip_tag_links l
JOIN public.tips t ON t.title = l.tip_title
JOIN public.tip_tags tg ON tg.slug = l.tag_slug
ON CONFLICT DO NOTHING;

-- Optional explicit screen mapping examples
INSERT INTO public.tip_screen_map (tip_id, screen_key, sort_order)
SELECT id, 'reading_tips', sort_order
FROM public.tips
WHERE skill = 'reading'
ON CONFLICT DO NOTHING;

INSERT INTO public.tip_screen_map (tip_id, screen_key, sort_order)
SELECT id, 'listening_tips', sort_order
FROM public.tips
WHERE skill = 'listening'
ON CONFLICT DO NOTHING;

INSERT INTO public.tip_screen_map (tip_id, screen_key, sort_order)
SELECT id, 'tips_tricks', sort_order
FROM public.tips
WHERE is_active = TRUE
ON CONFLICT DO NOTHING;

-- -----------------------
-- Query samples for app
-- -----------------------

-- Reading Tips screen
-- SELECT id, title, content
-- FROM public.tips
-- WHERE skill = 'reading'
--   AND status = 'published'
--   AND is_active = TRUE
-- ORDER BY sort_order, created_at;

-- Listening Tips screen (with 1 badge tag)
-- SELECT
--   t.id,
--   t.title,
--   t.content,
--   COALESCE(tt.name, 'General') AS badge
-- FROM public.tips t
-- LEFT JOIN LATERAL (
--   SELECT tg.name
--   FROM public.tip_tag_map m
--   JOIN public.tip_tags tg ON tg.id = m.tag_id
--   WHERE m.tip_id = t.id
--   ORDER BY
--     CASE WHEN tg.tag_type = 'exam_part' THEN 1 ELSE 2 END,
--     tg.name
--   LIMIT 1
-- ) tt ON TRUE
-- WHERE t.skill = 'listening'
--   AND t.status = 'published'
--   AND t.is_active = TRUE
-- ORDER BY t.sort_order, t.created_at;

-- Tips & Tricks screen by tab
-- :tab_slug values -> all | strategy | listening | reading
-- SELECT DISTINCT
--   t.id,
--   t.title,
--   t.content
-- FROM public.tips t
-- LEFT JOIN public.tip_tag_map m ON m.tip_id = t.id
-- LEFT JOIN public.tip_tags tg ON tg.id = m.tag_id
-- WHERE t.status = 'published'
--   AND t.is_active = TRUE
--   AND (
--     :tab_slug = 'all'
--     OR tg.slug = :tab_slug
--     OR (:tab_slug = 'listening' AND t.skill = 'listening')
--     OR (:tab_slug = 'reading' AND t.skill = 'reading')
--   )
-- ORDER BY t.sort_order, t.created_at;
