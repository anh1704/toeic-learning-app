# Hướng dẫn Setup Supabase cho TOEIC App

## Bước 1: Tạo Project trên Supabase

1. Truy cập [https://supabase.com](https://supabase.com)
2. Đăng ký/Đăng nhập tài khoản
3. Click "New Project"
4. Điền thông tin:
   - **Name**: toeic-app (hoặc tên bạn muốn)
   - **Database Password**: Tạo mật khẩu mạnh (lưu lại)
   - **Region**: Chọn gần Việt Nam nhất (Singapore)
5. Click "Create new project" và đợi vài phút

## Bước 2: Lấy API Keys

1. Vào project vừa tạo
2. Click vào icon ⚙️ (Settings) ở sidebar bên trái
3. Chọn "API" trong menu Settings
4. Copy 2 thông tin sau:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGc...` (key rất dài)

## Bước 3: Cập nhật file .env

Mở file `.env` trong project và thay thế:

```env
EXPO_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

## Bước 4: Tạo Database Schema

Vào **SQL Editor** trong Supabase Dashboard và chạy các câu lệnh sau:

### 4.1. Tạo bảng profiles (thông tin user)

```sql
-- Tạo bảng profiles
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatar_url TEXT,
  current_score INTEGER DEFAULT 0,
  target_score INTEGER DEFAULT 800,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

-- Policy: Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Function: Tự động tạo profile khi user đăng ký
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger: Tự động tạo profile
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### 4.2. Tạo bảng study_plans (kế hoạch học)

```sql
CREATE TABLE study_plans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  target_score INTEGER NOT NULL,
  duration_months INTEGER NOT NULL,
  daily_study_time TEXT NOT NULL,
  focus_areas TEXT[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE study_plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own study plans"
  ON study_plans FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own study plans"
  ON study_plans FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own study plans"
  ON study_plans FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own study plans"
  ON study_plans FOR DELETE
  USING (auth.uid() = user_id);
```

### 4.3. Tạo bảng daily_tasks (nhiệm vụ hàng ngày)

```sql
CREATE TABLE daily_tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  xp INTEGER DEFAULT 0,
  progress INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT FALSE,
  task_date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE daily_tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own daily tasks"
  ON daily_tasks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own daily tasks"
  ON daily_tasks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own daily tasks"
  ON daily_tasks FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own daily tasks"
  ON daily_tasks FOR DELETE
  USING (auth.uid() = user_id);
```

### 4.4. Tạo bảng vocabulary (từ vựng)

```sql
CREATE TABLE vocabulary (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  topic TEXT,
  word TEXT NOT NULL,
  meaning TEXT,
  phonetic TEXT,
  example TEXT,
  part_of_speech TEXT,
  mastered BOOLEAN NOT NULL DEFAULT FALSE,
  is_bookmarked BOOLEAN NOT NULL DEFAULT FALSE,
  last_reviewed_at TIMESTAMP WITH TIME ZONE,
  is_favorite BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT vocabulary_user_id_word_key UNIQUE (user_id, word),
  CONSTRAINT vocabulary_user_id_fkey FOREIGN KEY (user_id) REFERENCES profiles (id) ON DELETE CASCADE
);

ALTER TABLE vocabulary ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own vocabulary"
  ON vocabulary FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own vocabulary"
  ON vocabulary FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own vocabulary"
  ON vocabulary FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own vocabulary"
  ON vocabulary FOR DELETE
  USING (auth.uid() = user_id);

-- Nếu bạn đã tạo bảng `vocabulary` trước đó, chạy migrate sau:
-- ALTER TABLE vocabulary ADD COLUMN IF NOT EXISTS is_favorite BOOLEAN DEFAULT FALSE;

-- Index gợi ý (tuỳ chọn)
-- CREATE INDEX IF NOT EXISTS vocabulary_user_topic_idx ON public.vocabulary (user_id, topic);
-- CREATE INDEX IF NOT EXISTS vocabulary_user_mastered_idx ON public.vocabulary (user_id, mastered);
```

### 4.4.b. (Flashcards) Tạo kho từ vựng chung theo topic

Màn Flashcards dùng **kho từ chung** (`vocabulary_bank`) và mỗi ngày lấy ra **10 từ ngẫu nhiên** (nhưng cố định trong ngày) qua hàm RPC `get_daily_flashcards`.

```sql
-- 1) Kho từ vựng chung (public)
CREATE TABLE IF NOT EXISTS public.vocabulary_bank (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  topic TEXT,
  word TEXT NOT NULL,
  meaning TEXT,
  english_meaning TEXT,
  phonetic TEXT,
  example TEXT,
  part_of_speech TEXT,
  synonyms TEXT[],
  word_family JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.vocabulary_bank ENABLE ROW LEVEL SECURITY;

-- Cho phép user đã đăng nhập đọc kho từ vựng chung
DO $$ BEGIN
  CREATE POLICY "Authenticated can read vocabulary bank"
    ON public.vocabulary_bank FOR SELECT
    TO authenticated
    USING (true);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

-- 2) Favorites của user cho kho từ chung
CREATE TABLE IF NOT EXISTS public.vocabulary_bank_favorites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles (id) ON DELETE CASCADE,
  vocabulary_bank_id UUID NOT NULL REFERENCES public.vocabulary_bank (id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT vocabulary_bank_favorites_unique UNIQUE (user_id, vocabulary_bank_id)
);

ALTER TABLE public.vocabulary_bank_favorites ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Users can view own vocabulary bank favorites"
    ON public.vocabulary_bank_favorites FOR SELECT
    USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Users can insert own vocabulary bank favorites"
    ON public.vocabulary_bank_favorites FOR INSERT
    WITH CHECK (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Users can delete own vocabulary bank favorites"
    ON public.vocabulary_bank_favorites FOR DELETE
    USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

-- 3) Word of the Day: mỗi user một từ riêng theo ngày
CREATE TABLE IF NOT EXISTS public.word_of_day_daily (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles (id) ON DELETE CASCADE,
  set_date DATE NOT NULL DEFAULT CURRENT_DATE,
  vocabulary_bank_id UUID NOT NULL REFERENCES public.vocabulary_bank (id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT word_of_day_daily_unique UNIQUE (user_id, set_date)
);

CREATE INDEX IF NOT EXISTS word_of_day_daily_user_date_idx
  ON public.word_of_day_daily (user_id, set_date);

ALTER TABLE public.word_of_day_daily ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Users can view own word of day"
    ON public.word_of_day_daily FOR SELECT
    USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Users can insert own word of day"
    ON public.word_of_day_daily FOR INSERT
    WITH CHECK (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

-- 4) Lưu bộ 10 thẻ của từng ngày (để hôm đó luôn ra cùng 10 từ)
CREATE TABLE IF NOT EXISTS public.flashcard_daily_cards (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles (id) ON DELETE CASCADE,
  set_date DATE NOT NULL DEFAULT CURRENT_DATE,
  topic TEXT,
  vocabulary_bank_id UUID NOT NULL REFERENCES public.vocabulary_bank (id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT flashcard_daily_cards_unique UNIQUE (user_id, set_date, vocabulary_bank_id)
);

CREATE INDEX IF NOT EXISTS flashcard_daily_cards_user_date_topic_idx
  ON public.flashcard_daily_cards (user_id, set_date, topic);

ALTER TABLE public.flashcard_daily_cards ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Users can view own daily flashcards"
    ON public.flashcard_daily_cards FOR SELECT
    USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Users can insert own daily flashcards"
    ON public.flashcard_daily_cards FOR INSERT
    WITH CHECK (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

-- 5) RPC: lấy 10 từ ngẫu nhiên theo ngày + topic (tạo set nếu chưa có)
CREATE OR REPLACE FUNCTION public.get_daily_flashcards(
  p_topic TEXT DEFAULT NULL,
  p_limit INT DEFAULT 10
)
RETURNS TABLE (
  id UUID,
  topic TEXT,
  word TEXT,
  meaning TEXT,
  english_meaning TEXT,
  phonetic TEXT,
  example TEXT,
  part_of_speech TEXT,
  synonyms TEXT[],
  word_family JSONB
)
LANGUAGE plpgsql
AS $$
DECLARE
  v_user UUID := auth.uid();
  v_date DATE := CURRENT_DATE;
BEGIN
  IF v_user IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  IF NOT EXISTS (
    SELECT 1
    FROM public.flashcard_daily_cards dc
    WHERE dc.user_id = v_user
      AND dc.set_date = v_date
      AND (p_topic IS NULL OR dc.topic = p_topic)
  ) THEN
    INSERT INTO public.flashcard_daily_cards (user_id, set_date, topic, vocabulary_bank_id)
    SELECT v_user, v_date, b.topic, b.id
    FROM public.vocabulary_bank b
    WHERE (p_topic IS NULL OR b.topic = p_topic)
    ORDER BY random()
    LIMIT p_limit
    ON CONFLICT DO NOTHING;
  END IF;

  RETURN QUERY
  SELECT b.id, b.topic, b.word, b.meaning, b.english_meaning, b.phonetic, b.example, b.part_of_speech, b.synonyms, b.word_family
  FROM public.flashcard_daily_cards dc
  JOIN public.vocabulary_bank b ON b.id = dc.vocabulary_bank_id
  WHERE dc.user_id = v_user
    AND dc.set_date = v_date
    AND (p_topic IS NULL OR dc.topic = p_topic)
  ORDER BY dc.created_at ASC
  LIMIT p_limit;
END;
$$;

-- 6) Quyền cho role authenticated (nếu bạn bị lỗi permission)
GRANT SELECT ON public.vocabulary_bank TO authenticated;
GRANT SELECT, INSERT, DELETE ON public.vocabulary_bank_favorites TO authenticated;
GRANT SELECT, INSERT ON public.word_of_day_daily TO authenticated;
GRANT SELECT, INSERT ON public.flashcard_daily_cards TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_daily_flashcards(TEXT, INT) TO authenticated;

-- (Tuỳ chọn) Nếu bạn đã tạo bảng vocabulary_bank trước đó, chạy các lệnh sau để cập nhật:
-- ALTER TABLE public.vocabulary_bank ADD COLUMN IF NOT EXISTS english_meaning TEXT;
-- ALTER TABLE public.vocabulary_bank ADD COLUMN IF NOT EXISTS synonyms TEXT[];
-- ALTER TABLE public.vocabulary_bank ADD COLUMN IF NOT EXISTS word_family JSONB;
-- Chạy lại câu lệnh CREATE OR REPLACE FUNCTION get_daily_flashcards ở trên để cập nhật hàm.
```

### 4.4.c. (Quiz) 10 câu/ngày theo topic (4 đáp án)

Quiz dùng cùng kho từ chung `vocabulary_bank`. Mỗi ngày tạo 10 câu ngẫu nhiên (cố định trong ngày), mỗi câu có 4 đáp án (1 đúng + 3 nhiễu).

```sql
-- 1) Lưu bộ câu hỏi của từng ngày (để mỗi ngày ra đúng 10 câu cố định)
CREATE TABLE IF NOT EXISTS public.vocab_quiz_daily_questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles (id) ON DELETE CASCADE,
  set_date DATE NOT NULL DEFAULT CURRENT_DATE,
  topic TEXT,
  vocabulary_bank_id UUID NOT NULL REFERENCES public.vocabulary_bank (id) ON DELETE CASCADE,
  options JSONB NOT NULL,
  correct_index INT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT vocab_quiz_daily_questions_unique UNIQUE (user_id, set_date, vocabulary_bank_id)
);

CREATE INDEX IF NOT EXISTS vocab_quiz_daily_questions_user_date_topic_idx
  ON public.vocab_quiz_daily_questions (user_id, set_date, topic);

ALTER TABLE public.vocab_quiz_daily_questions ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Users can view own quiz questions"
    ON public.vocab_quiz_daily_questions FOR SELECT
    USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Users can insert own quiz questions"
    ON public.vocab_quiz_daily_questions FOR INSERT
    WITH CHECK (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

-- 2) Attempts + Answers (để thống kê / tracking)
CREATE TABLE IF NOT EXISTS public.vocab_quiz_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles (id) ON DELETE CASCADE,
  set_date DATE NOT NULL DEFAULT CURRENT_DATE,
  topic TEXT,
  total_questions INT NOT NULL DEFAULT 10,
  correct_answers INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.vocab_quiz_attempts ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Users can view own quiz attempts"
    ON public.vocab_quiz_attempts FOR SELECT
    USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Users can insert own quiz attempts"
    ON public.vocab_quiz_attempts FOR INSERT
    WITH CHECK (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Users can update own quiz attempts"
    ON public.vocab_quiz_attempts FOR UPDATE
    USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

CREATE TABLE IF NOT EXISTS public.vocab_quiz_answers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  attempt_id UUID NOT NULL REFERENCES public.vocab_quiz_attempts (id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles (id) ON DELETE CASCADE,
  vocabulary_bank_id UUID NOT NULL REFERENCES public.vocabulary_bank (id) ON DELETE CASCADE,
  question_index INT NOT NULL,
  selected_index INT,
  correct_index INT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  answered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT vocab_quiz_answers_unique UNIQUE (attempt_id, vocabulary_bank_id)
);

ALTER TABLE public.vocab_quiz_answers ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Users can view own quiz answers"
    ON public.vocab_quiz_answers FOR SELECT
    USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Users can insert own quiz answers"
    ON public.vocab_quiz_answers FOR INSERT
    WITH CHECK (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

-- 3) RPC: tạo/lấy 10 câu theo ngày + topic
CREATE OR REPLACE FUNCTION public.get_daily_vocab_quiz(
  p_topic TEXT DEFAULT NULL,
  p_limit INT DEFAULT 10
)
RETURNS TABLE (
  question_id UUID,
  vocabulary_bank_id UUID,
  topic TEXT,
  word TEXT,
  phonetic TEXT,
  options JSONB,
  correct_index INT
)
LANGUAGE plpgsql
AS $$
DECLARE
  v_user UUID := auth.uid();
  v_date DATE := CURRENT_DATE;
BEGIN
  IF v_user IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  -- Nếu chưa có set câu hỏi cho hôm nay (theo topic), tạo set mới
  IF NOT EXISTS (
    SELECT 1
    FROM public.vocab_quiz_daily_questions q
    WHERE q.user_id = v_user
      AND q.set_date = v_date
      AND (p_topic IS NULL OR q.topic = p_topic)
  ) THEN
    INSERT INTO public.vocab_quiz_daily_questions (
      user_id,
      set_date,
      topic,
      vocabulary_bank_id,
      options,
      correct_index
    )
    SELECT
      v_user,
      v_date,
      b.topic,
      b.id,
      to_jsonb(shuffled.opts),
      shuffled.correct_idx
    FROM (
      SELECT b.*
      FROM public.vocabulary_bank b
      WHERE b.meaning IS NOT NULL
        AND (p_topic IS NULL OR b.topic = p_topic)
      ORDER BY random()
      LIMIT p_limit
    ) b
    CROSS JOIN LATERAL (
      SELECT
        COALESCE(dis[1], b.meaning) AS d1,
        COALESCE(dis[2], b.meaning) AS d2,
        COALESCE(dis[3], b.meaning) AS d3
      FROM (
        SELECT array_agg(s.meaning) AS dis
        FROM (
          SELECT vb.meaning
          FROM public.vocabulary_bank vb
          WHERE vb.meaning IS NOT NULL
            AND vb.id <> b.id
          ORDER BY (vb.topic = COALESCE(p_topic, b.topic)) DESC, random()
          LIMIT 3
        ) s
      ) t
    ) d
    CROSS JOIN LATERAL (
      SELECT array_agg(opt ORDER BY rnd) AS opts
      FROM (
        SELECT opt, random() AS rnd
        FROM unnest(array[b.meaning, d.d1, d.d2, d.d3]) AS opt
      ) u
    ) shuffled0
    CROSS JOIN LATERAL (
      SELECT
        shuffled0.opts AS opts,
        COALESCE(
          (
            SELECT (idx - 1)
            FROM generate_subscripts(shuffled0.opts, 1) idx
            WHERE shuffled0.opts[idx] = b.meaning
            LIMIT 1
          )::INT,
          0
        ) AS correct_idx
    ) shuffled
    ON CONFLICT DO NOTHING;
  END IF;

  RETURN QUERY
  SELECT
    q.id AS question_id,
    b.id AS vocabulary_bank_id,
    b.topic,
    b.word,
    b.phonetic,
    q.options,
    q.correct_index
  FROM public.vocab_quiz_daily_questions q
  JOIN public.vocabulary_bank b ON b.id = q.vocabulary_bank_id
  WHERE q.user_id = v_user
    AND q.set_date = v_date
    AND (p_topic IS NULL OR q.topic = p_topic)
  ORDER BY q.created_at ASC
  LIMIT p_limit;
END;
$$;

-- Quyền cho role authenticated (nếu bị lỗi permission)
GRANT SELECT, INSERT ON public.vocab_quiz_daily_questions TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.vocab_quiz_attempts TO authenticated;
GRANT SELECT, INSERT ON public.vocab_quiz_answers TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_daily_vocab_quiz(TEXT, INT) TO authenticated;
```

### 4.5. Tạo bảng test_results (kết quả bài test)

```sql
CREATE TABLE test_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  test_type TEXT NOT NULL, -- 'mini', 'full', 'listening', 'reading'
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  time_spent INTEGER, -- seconds
  answers JSONB, -- lưu chi tiết câu trả lời
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

---

### 4.6. Tạo Schema cho TOEIC Tests (Đề thi)

Cấu trúc đề thi TOEIC yêu cầu 3 bảng để xử lý việc nhóm các câu hỏi dùng chung audio/đoạn văn.

```sql
-- 1. Bảng lưu thông tin bài Test
CREATE TABLE public.toeic_tests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  test_type TEXT NOT NULL CHECK (test_type IN ('full', 'listening', 'reading', 'mini')),
  duration INTEGER NOT NULL DEFAULT 7200, -- seconds
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Bảng lưu Group (Audio, Hình ảnh, Đoạn văn dùng chung)
CREATE TABLE public.toeic_question_groups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  test_id UUID NOT NULL REFERENCES public.toeic_tests(id) ON DELETE CASCADE,
  part_number INTEGER NOT NULL CHECK (part_number BETWEEN 1 AND 7),
  audio_url TEXT,
  image_url TEXT,
  passage_text TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Bảng lưu Câu hỏi chi tiết
CREATE TABLE public.toeic_questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  group_id UUID NOT NULL REFERENCES public.toeic_question_groups(id) ON DELETE CASCADE,
  question_number INTEGER NOT NULL,
  question_text TEXT,
  options JSONB, -- Vd: ["A. ...", "B. ..."]
  correct_answer TEXT NOT NULL,
  explanation TEXT,
  transcript TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies cho đề thi
ALTER TABLE public.toeic_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.toeic_question_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.toeic_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published tests" ON public.toeic_tests FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Anyone can view test groups" ON public.toeic_question_groups FOR SELECT USING (true);
CREATE POLICY "Anyone can view test questions" ON public.toeic_questions FOR SELECT USING (true);

GRANT SELECT ON public.toeic_tests TO authenticated, anon;
GRANT SELECT ON public.toeic_question_groups TO authenticated, anon;
GRANT SELECT ON public.toeic_questions TO authenticated, anon;
```

### 4.7. Hàm RPC để lấy dữ liệu bài test nhanh

```sql
CREATE OR REPLACE FUNCTION public.get_toeic_test_data(p_test_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result JSONB;
BEGIN
  WITH questions_grouped AS (
    SELECT 
      q.group_id,
      jsonb_agg(
        jsonb_build_object(
          'id', q.id,
          'question_number', q.question_number,
          'question_text', q.question_text,
          'options', q.options,
          'correct_answer', q.correct_answer,
          'explanation', q.explanation,
          'transcript', q.transcript
        ) ORDER BY q.question_number ASC
      ) AS questions_json
    FROM public.toeic_questions q
    GROUP BY q.group_id
  ),
  groups_with_questions AS (
    SELECT 
      g.test_id,
      g.part_number,
      g.order_index,
      jsonb_build_object(
        'group_id', g.id,
        'audio_url', g.audio_url,
        'image_url', g.image_url,
        'passage_text', g.passage_text,
        'order_index', g.order_index,
        'questions', COALESCE(qg.questions_json, '[]'::jsonb)
      ) AS group_json
    FROM public.toeic_question_groups g
    LEFT JOIN questions_grouped qg ON g.id = qg.group_id
    WHERE g.test_id = p_test_id
  ),
  parts_grouped AS (
    SELECT 
      gwq.part_number,
      jsonb_agg(gwq.group_json ORDER BY gwq.order_index ASC) AS groups_array
    FROM groups_with_questions gwq
    GROUP BY gwq.part_number
  ),
  test_parts AS (
    SELECT 
      jsonb_object_agg(pg.part_number::TEXT, pg.groups_array) AS parts_json
    FROM parts_grouped pg
  )
  SELECT jsonb_build_object(
    'id', t.id,
    'title', t.title,
    'test_type', t.test_type,
    'duration', t.duration,
    'parts', COALESCE((SELECT parts_json FROM test_parts), '{}'::jsonb)
  ) INTO result
  FROM public.toeic_tests t
  WHERE t.id = p_test_id;

  RETURN result;
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_toeic_test_data(UUID) TO authenticated, anon;
```

ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own test results"
  ON test_results FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own test results"
  ON test_results FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

## Bước 5: Test Authentication

1. Khởi động app: `npm start`
2. Thử đăng ký tài khoản mới ở màn hình Register
3. Kiểm tra trong Supabase Dashboard > Authentication > Users
4. Thử đăng nhập với tài khoản vừa tạo

## Bước 6: Cấu hình Email (BẮT BUỘC cho Development)

Mặc định Supabase yêu cầu xác nhận email khi đăng ký. Để test được ngay:

1. Vào **Settings** > **Authentication** trong Supabase Dashboard
2. Scroll xuống phần **Email Auth**
3. **TẮT** "Enable email confirmations" (uncheck)
4. Click **Save**

Nếu không tắt, bạn sẽ gặp lỗi "Email not confirmed" khi đăng nhập.

## Các API đã tích hợp

### Authentication

- ✅ `signUp(email, password, name)` - Đăng ký
- ✅ `signIn(email, password)` - Đăng nhập
- ✅ `signOut()` - Đăng xuất
- ✅ `getCurrentUser()` - Lấy thông tin user hiện tại
- ✅ `onAuthStateChange(callback)` - Lắng nghe thay đổi auth

### Sử dụng trong code

```typescript
import { supabase } from "./src/lib/supabase";
import { signIn, signUp, signOut, getCurrentUser } from "./src/lib/authService";

// Đăng nhập
const { user, session } = await signIn("email@example.com", "password");

// Lấy dữ liệu từ database
const { data, error } = await supabase
  .from("profiles")
  .select("*")
  .eq("id", user.id)
  .single();

// Insert dữ liệu
const { data, error } = await supabase.from("daily_tasks").insert({
  user_id: user.id,
  title: "Practice Listening",
  xp: 20,
});

// Update dữ liệu
const { data, error } = await supabase
  .from("profiles")
  .update({ current_score: 700 })
  .eq("id", user.id);
```

## Troubleshooting

### Lỗi: "Invalid API key"

- Kiểm tra lại EXPO_PUBLIC_SUPABASE_URL và EXPO_PUBLIC_SUPABASE_ANON_KEY trong .env
- Restart app sau khi thay đổi .env

### Lỗi: "Email not confirmed"

- Vào Settings > Authentication > Disable email confirmations (chỉ cho dev)

### Lỗi: "Row Level Security policy violation"

- Kiểm tra lại các policies trong SQL Editor
- Đảm bảo user đã đăng nhập trước khi query

## Next Steps

Sau khi setup xong, bạn có thể:

1. Cập nhật màn hình Register để dùng Supabase
2. Tích hợp lưu study plans vào database
3. Lưu kết quả bài test
4. Đồng bộ vocabulary
5. Thêm realtime features cho Community

## Tài liệu tham khảo

- [Supabase Docs](https://supabase.com/docs)
- [Supabase JS Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

---

## 4.8. Schema chuẩn TOEIC (Normalized)

> Schema mới thay thế `toeic_tests/toeic_question_groups/toeic_questions` cũ.
> Chạy **theo thứ tự** từ trên xuống dưới trong SQL Editor.

### Bảng 1: `exam` (Đề thi)

```sql
CREATE TABLE public.exam (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title        TEXT NOT NULL,
  type         TEXT NOT NULL CHECK (type IN ('FULL','MINI','PRACTICE')),
  duration     INTEGER NOT NULL DEFAULT 7200,
  is_published BOOLEAN DEFAULT FALSE,
  created_at   TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
ALTER TABLE public.exam ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published exams"
  ON public.exam FOR SELECT USING (is_published = TRUE);
GRANT SELECT ON public.exam TO authenticated, anon;
```

### Bảng 2: `section` (Part 1–7)

```sql
CREATE TABLE public.section (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  exam_id     UUID NOT NULL REFERENCES public.exam(id) ON DELETE CASCADE,
  part        INTEGER NOT NULL CHECK (part BETWEEN 1 AND 7),
  order_index INTEGER NOT NULL DEFAULT 0
);
ALTER TABLE public.section ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view sections"
  ON public.section FOR SELECT USING (true);
GRANT SELECT ON public.section TO authenticated, anon;
```

### Bảng 3: `media` (Audio / Image)

```sql
CREATE TABLE public.media (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type       TEXT NOT NULL CHECK (type IN ('AUDIO','IMAGE')),
  url        TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view media"
  ON public.media FOR SELECT USING (true);
GRANT SELECT ON public.media TO authenticated, anon;
```

### Bảng 4: `question_group` (Chỉ dùng cho Part 3 & 4: 1 audio → nhiều câu)

```sql
CREATE TABLE public.question_group (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id  UUID NOT NULL REFERENCES public.section(id) ON DELETE CASCADE,
  media_id    UUID REFERENCES public.media(id),
  order_index INTEGER NOT NULL DEFAULT 0
);
ALTER TABLE public.question_group ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view question groups"
  ON public.question_group FOR SELECT USING (true);
GRANT SELECT ON public.question_group TO authenticated, anon;
```

### Bảng 5: `question` (Câu hỏi trung tâm)

```sql
-- question_type:
--   PHOTO        → Part 1 (ảnh + 4 đáp án)
--   QA           → Part 2 (audio + 3 đáp án A/B/C)
--   CONVERSATION → Part 3 (hội thoại, nhiều câu/group)
--   TALK         → Part 4 (bài nói, nhiều câu/group)
--   INCOMPLETE   → Part 5 (điền vào câu)
--   TEXT         → Part 6 (đoạn văn điền)
--   READING      → Part 7 (đọc hiểu)
CREATE TABLE public.question (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id    UUID NOT NULL REFERENCES public.section(id) ON DELETE CASCADE,
  group_id      UUID REFERENCES public.question_group(id) ON DELETE SET NULL,
  question_type TEXT NOT NULL CHECK (question_type IN
                  ('PHOTO','QA','CONVERSATION','TALK','INCOMPLETE','TEXT','READING')),
  content       TEXT,
  explanation   TEXT,
  order_index   INTEGER NOT NULL DEFAULT 0
);
ALTER TABLE public.question ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view questions"
  ON public.question FOR SELECT USING (true);
GRANT SELECT ON public.question TO authenticated, anon;
```

### Bảng 6: `answer` (Đáp án)

```sql
CREATE TABLE public.answer (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question_id UUID NOT NULL REFERENCES public.question(id) ON DELETE CASCADE,
  content     TEXT NOT NULL,
  is_correct  BOOLEAN NOT NULL DEFAULT FALSE,
  order_index INTEGER NOT NULL DEFAULT 0   -- 0=A, 1=B, 2=C, 3=D
);
ALTER TABLE public.answer ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view answers"
  ON public.answer FOR SELECT USING (true);
GRANT SELECT ON public.answer TO authenticated, anon;
```

### Bảng 7: `question_media` (Mapping câu hỏi ↔ media)

```sql
CREATE TABLE public.question_media (
  question_id UUID NOT NULL REFERENCES public.question(id) ON DELETE CASCADE,
  media_id    UUID NOT NULL REFERENCES public.media(id) ON DELETE CASCADE,
  PRIMARY KEY (question_id, media_id)
);
ALTER TABLE public.question_media ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view question media"
  ON public.question_media FOR SELECT USING (true);
GRANT SELECT ON public.question_media TO authenticated, anon;
```

### Bảng 8: `attempt` (Lần làm bài)

```sql
CREATE TABLE public.attempt (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id    UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  exam_id    UUID NOT NULL REFERENCES public.exam(id) ON DELETE CASCADE,
  start_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  end_time   TIMESTAMP WITH TIME ZONE,
  score      INTEGER,
  status     TEXT NOT NULL DEFAULT 'IN_PROGRESS'
               CHECK (status IN ('IN_PROGRESS','COMPLETED'))
);
ALTER TABLE public.attempt ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own attempts"
  ON public.attempt FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own attempts"
  ON public.attempt FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own attempts"
  ON public.attempt FOR UPDATE USING (auth.uid() = user_id);
GRANT SELECT, INSERT, UPDATE ON public.attempt TO authenticated;
```

### Bảng 9: `user_answer` (Câu trả lời của user)

```sql
CREATE TABLE public.user_answer (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  attempt_id  UUID NOT NULL REFERENCES public.attempt(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.question(id) ON DELETE CASCADE,
  answer_id   UUID REFERENCES public.answer(id) ON DELETE SET NULL,
  UNIQUE (attempt_id, question_id)
);
ALTER TABLE public.user_answer ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own user_answers" ON public.user_answer FOR SELECT
  USING (EXISTS (SELECT 1 FROM public.attempt a WHERE a.id = attempt_id AND a.user_id = auth.uid()));
CREATE POLICY "Users can insert own user_answers" ON public.user_answer FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM public.attempt a WHERE a.id = attempt_id AND a.user_id = auth.uid()));
GRANT SELECT, INSERT ON public.user_answer TO authenticated;
```

---

## 4.9. RPC Functions

### RPC 1: Lấy danh sách exams theo part

```sql
CREATE OR REPLACE FUNCTION public.get_exams_for_part(p_part INTEGER)
RETURNS TABLE (
  exam_id        UUID,
  title          TEXT,
  type           TEXT,
  question_count BIGINT
)
LANGUAGE sql SECURITY DEFINER
AS $$
  SELECT e.id, e.title, e.type, COUNT(q.id) AS question_count
  FROM public.exam e
  JOIN public.section s ON s.exam_id = e.id AND s.part = p_part
  JOIN public.question q ON q.section_id = s.id
  WHERE e.is_published = TRUE
  GROUP BY e.id, e.title, e.type
  ORDER BY e.created_at ASC;
$$;
GRANT EXECUTE ON FUNCTION public.get_exams_for_part(INTEGER) TO authenticated, anon;
```

### RPC 2: Lấy câu hỏi của 1 part từ 1 exam

```sql
CREATE OR REPLACE FUNCTION public.get_exam_part(
  p_exam_id UUID,
  p_part    INTEGER
)
RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER
AS $$
DECLARE result JSONB;
BEGIN
  WITH q_answers AS (
    SELECT a.question_id,
           jsonb_agg(jsonb_build_object(
             'id', a.id,
             'content', a.content,
             'is_correct', a.is_correct,
             'order_index', a.order_index
           ) ORDER BY a.order_index) AS answers
    FROM public.answer a
    GROUP BY a.question_id
  ),
  q_media AS (
    SELECT qm.question_id,
           jsonb_agg(jsonb_build_object(
             'id', m.id, 'type', m.type, 'url', m.url
           )) AS media
    FROM public.question_media qm
    JOIN public.media m ON m.id = qm.media_id
    GROUP BY qm.question_id
  ),
  questions_data AS (
    SELECT
      q.id, q.group_id, q.question_type, q.content,
      q.explanation, q.order_index,
      COALESCE(qa.answers, '[]'::jsonb) AS answers,
      COALESCE(qm.media,   '[]'::jsonb) AS media
    FROM public.question q
    JOIN public.section s ON s.id = q.section_id
    LEFT JOIN q_answers qa ON qa.question_id = q.id
    LEFT JOIN q_media   qm ON qm.question_id = q.id
    WHERE s.exam_id = p_exam_id AND s.part = p_part
    ORDER BY q.order_index
  ),
  groups_data AS (
    SELECT
      qg.id AS group_id,
      jsonb_build_object('id', m.id, 'type', m.type, 'url', m.url) AS group_audio,
      jsonb_agg(jsonb_build_object(
        'id', qd.id, 'question_type', qd.question_type,
        'content', qd.content, 'explanation', qd.explanation,
        'order_index', qd.order_index,
        'answers', qd.answers, 'media', qd.media
      ) ORDER BY qd.order_index) AS questions
    FROM public.question_group qg
    JOIN public.section s ON s.id = qg.section_id
    LEFT JOIN public.media m ON m.id = qg.media_id
    JOIN questions_data qd ON qd.group_id = qg.id
    WHERE s.exam_id = p_exam_id AND s.part = p_part
    GROUP BY qg.id, m.id, m.type, m.url
  )
  SELECT jsonb_build_object(
    'part', p_part,
    'standalone', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'id', qd.id, 'question_type', qd.question_type,
        'content', qd.content, 'explanation', qd.explanation,
        'order_index', qd.order_index,
        'answers', qd.answers, 'media', qd.media
      ) ORDER BY qd.order_index)
      FROM questions_data qd WHERE qd.group_id IS NULL
    ), '[]'::jsonb),
    'groups', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'group_id', gd.group_id,
        'audio', gd.group_audio,
        'questions', gd.questions
      ))
      FROM groups_data gd
    ), '[]'::jsonb)
  ) INTO result;
  RETURN result;
END;
$$;
GRANT EXECUTE ON FUNCTION public.get_exam_part(UUID, INTEGER) TO authenticated, anon;
```

### RPC 3: Practice mode – câu hỏi ngẫu nhiên theo part

```sql
CREATE OR REPLACE FUNCTION public.get_practice_questions(
  p_part  INTEGER,
  p_limit INTEGER DEFAULT 20
)
RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER
AS $$
BEGIN
  RETURN (
    SELECT COALESCE(jsonb_agg(row_data), '[]'::jsonb)
    FROM (
      SELECT jsonb_build_object(
        'id', q.id,
        'question_type', q.question_type,
        'content', q.content,
        'explanation', q.explanation,
        'answers', (
          SELECT jsonb_agg(jsonb_build_object(
            'id', a.id, 'content', a.content,
            'is_correct', a.is_correct, 'order_index', a.order_index
          ) ORDER BY a.order_index)
          FROM public.answer a WHERE a.question_id = q.id
        ),
        'media', (
          SELECT jsonb_agg(jsonb_build_object(
            'id', m.id, 'type', m.type, 'url', m.url
          ))
          FROM public.question_media qm
          JOIN public.media m ON m.id = qm.media_id
          WHERE qm.question_id = q.id
        )
      ) AS row_data
      FROM public.question q
      JOIN public.section s ON s.id = q.section_id
      JOIN public.exam e ON e.id = s.exam_id
      WHERE s.part = p_part AND e.is_published = TRUE
      ORDER BY random()
      LIMIT p_limit
    ) sub
  );
END;
$$;
GRANT EXECUTE ON FUNCTION public.get_practice_questions(INTEGER, INTEGER) TO authenticated, anon;
```

---

## 4.10. Data Mẫu – Part 1 (6 câu, UUID hợp lệ)

> **Lưu ý UUID**: UUID chỉ dùng ký tự hex `0-9` và `a-f`. Không dùng chữ cái khác.

```sql
-- =========================================
-- STEP 1: Insert Exam
-- =========================================
INSERT INTO public.exam (id, title, type, duration, is_published) VALUES
('00000001-0000-0000-0000-000000000001', 'TOEIC Practice Test 1', 'FULL', 7200, TRUE);

-- =========================================
-- STEP 2: Insert Section (Part 1)
-- =========================================
INSERT INTO public.section (id, exam_id, part, order_index) VALUES
('00000002-0000-0000-0000-000000000001', '00000001-0000-0000-0000-000000000001', 1, 1);

-- =========================================
-- STEP 3: Insert Media (6 audio + 6 image)
-- =========================================
INSERT INTO public.media (id, type, url) VALUES
('00000003-0000-0000-0000-000000000001', 'AUDIO', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'),
('00000003-0000-0000-0000-000000000002', 'IMAGE', 'https://picsum.photos/id/101/400/300'),
('00000003-0000-0000-0000-000000000003', 'AUDIO', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'),
('00000003-0000-0000-0000-000000000004', 'IMAGE', 'https://picsum.photos/id/102/400/300'),
('00000003-0000-0000-0000-000000000005', 'AUDIO', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'),
('00000003-0000-0000-0000-000000000006', 'IMAGE', 'https://picsum.photos/id/103/400/300'),
('00000003-0000-0000-0000-000000000007', 'AUDIO', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'),
('00000003-0000-0000-0000-000000000008', 'IMAGE', 'https://picsum.photos/id/104/400/300'),
('00000003-0000-0000-0000-000000000009', 'AUDIO', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'),
('00000003-0000-0000-0000-000000000010', 'IMAGE', 'https://picsum.photos/id/106/400/300'),
('00000003-0000-0000-0000-000000000011', 'AUDIO', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'),
('00000003-0000-0000-0000-000000000012', 'IMAGE', 'https://picsum.photos/id/107/400/300');

-- =========================================
-- STEP 4: Insert Questions (Part 1, group_id = NULL)
-- =========================================
INSERT INTO public.question (id, section_id, group_id, question_type, content, explanation, order_index) VALUES
('00000004-0000-0000-0000-000000000001', '00000002-0000-0000-0000-000000000001', NULL, 'PHOTO', NULL, 'People are sitting around a conference table.', 1),
('00000004-0000-0000-0000-000000000002', '00000002-0000-0000-0000-000000000001', NULL, 'PHOTO', NULL, 'A man is reviewing a document at his desk.', 2),
('00000004-0000-0000-0000-000000000003', '00000002-0000-0000-0000-000000000001', NULL, 'PHOTO', NULL, 'A photographer is taking a picture.', 3),
('00000004-0000-0000-0000-000000000004', '00000002-0000-0000-0000-000000000001', NULL, 'PHOTO', NULL, 'A worker is stocking shelves in the store.', 4),
('00000004-0000-0000-0000-000000000005', '00000002-0000-0000-0000-000000000001', NULL, 'PHOTO', NULL, 'A customer is paying at the checkout counter.', 5),
('00000004-0000-0000-0000-000000000006', '00000002-0000-0000-0000-000000000001', NULL, 'PHOTO', NULL, 'Several people are walking through a corridor.', 6);

-- =========================================
-- STEP 5: Insert Answers (4 đáp án / câu)
-- =========================================
INSERT INTO public.answer (question_id, content, is_correct, order_index) VALUES
-- Q1
('00000004-0000-0000-0000-000000000001', 'The woman is making a phone call.', FALSE, 0),
('00000004-0000-0000-0000-000000000001', 'The man is typing on a computer.', FALSE, 1),
('00000004-0000-0000-0000-000000000001', 'People are sitting around a table.', TRUE, 2),
('00000004-0000-0000-0000-000000000001', 'A person is writing on a whiteboard.', FALSE, 3),
-- Q2
('00000004-0000-0000-0000-000000000002', 'A man is looking at a document.', TRUE, 0),
('00000004-0000-0000-0000-000000000002', 'The woman is using a calculator.', FALSE, 1),
('00000004-0000-0000-0000-000000000002', 'People are waiting in a line.', FALSE, 2),
('00000004-0000-0000-0000-000000000002', 'A person is opening a window.', FALSE, 3),
-- Q3
('00000004-0000-0000-0000-000000000003', 'The chairs have been moved.', FALSE, 0),
('00000004-0000-0000-0000-000000000003', 'Someone is taking a picture.', TRUE, 1),
('00000004-0000-0000-0000-000000000003', 'A person is speaking into a microphone.', FALSE, 2),
('00000004-0000-0000-0000-000000000003', 'People are eating a meal.', FALSE, 3),
-- Q4
('00000004-0000-0000-0000-000000000004', 'A man is carrying a box.', FALSE, 0),
('00000004-0000-0000-0000-000000000004', 'A woman is watering plants.', FALSE, 1),
('00000004-0000-0000-0000-000000000004', 'The shelves are being stocked.', TRUE, 2),
('00000004-0000-0000-0000-000000000004', 'People are boarding a bus.', FALSE, 3),
-- Q5
('00000004-0000-0000-0000-000000000005', 'A customer is paying at the counter.', TRUE, 0),
('00000004-0000-0000-0000-000000000005', 'A person is cleaning the floor.', FALSE, 1),
('00000004-0000-0000-0000-000000000005', 'The doors are being locked.', FALSE, 2),
('00000004-0000-0000-0000-000000000005', 'People are getting off an elevator.', FALSE, 3),
-- Q6
('00000004-0000-0000-0000-000000000006', 'Someone is giving a presentation.', FALSE, 0),
('00000004-0000-0000-0000-000000000006', 'A laptop is being repaired.', FALSE, 1),
('00000004-0000-0000-0000-000000000006', 'A person is writing on a calendar.', FALSE, 2),
('00000004-0000-0000-0000-000000000006', 'People are walking through a hallway.', TRUE, 3);

-- =========================================
-- STEP 6: Map question ↔ media
-- =========================================
INSERT INTO public.question_media (question_id, media_id) VALUES
('00000004-0000-0000-0000-000000000001', '00000003-0000-0000-0000-000000000001'), -- Q1 audio
('00000004-0000-0000-0000-000000000001', '00000003-0000-0000-0000-000000000002'), -- Q1 image
('00000004-0000-0000-0000-000000000002', '00000003-0000-0000-0000-000000000003'), -- Q2 audio
('00000004-0000-0000-0000-000000000002', '00000003-0000-0000-0000-000000000004'), -- Q2 image
('00000004-0000-0000-0000-000000000003', '00000003-0000-0000-0000-000000000005'), -- Q3 audio
('00000004-0000-0000-0000-000000000003', '00000003-0000-0000-0000-000000000006'), -- Q3 image
('00000004-0000-0000-0000-000000000004', '00000003-0000-0000-0000-000000000007'), -- Q4 audio
('00000004-0000-0000-0000-000000000004', '00000003-0000-0000-0000-000000000008'), -- Q4 image
('00000004-0000-0000-0000-000000000005', '00000003-0000-0000-0000-000000000009'), -- Q5 audio
('00000004-0000-0000-0000-000000000005', '00000003-0000-0000-0000-000000000010'), -- Q5 image
('00000004-0000-0000-0000-000000000006', '00000003-0000-0000-0000-000000000011'), -- Q6 audio
('00000004-0000-0000-0000-000000000006', '00000003-0000-0000-0000-000000000012'); -- Q6 image

-- =========================================
-- STEP 7: Verify
-- =========================================
-- Kiểm tra RPC hoạt động đúng:
SELECT public.get_exams_for_part(1);
SELECT public.get_exam_part('00000001-0000-0000-0000-000000000001', 1);
```

