# Backend Listening – Normalized TOEIC Schema

## Data Model (8 bảng)

```
exam  ──┐
        ├─► section (part 1-7) ──┐
        │                        ├─► question_group (Part 3&4)
        │                        └─► question ──► answer
        │                              └─► question_media ──► media
        │
attempt ──► user_answer ──► question
```

---

## SQL Schema

### Bảng 1: `exam`
```sql
CREATE TABLE public.exam (
  id        UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title     TEXT NOT NULL,
  type      TEXT NOT NULL CHECK (type IN ('FULL','MINI','PRACTICE')),
  duration  INTEGER NOT NULL DEFAULT 7200,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
ALTER TABLE public.exam ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published exams" ON public.exam FOR SELECT USING (is_published = TRUE);
GRANT SELECT ON public.exam TO authenticated, anon;
```

### Bảng 2: `section`
```sql
CREATE TABLE public.section (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  exam_id    UUID NOT NULL REFERENCES public.exam(id) ON DELETE CASCADE,
  part       INTEGER NOT NULL CHECK (part BETWEEN 1 AND 7),
  order_index INTEGER NOT NULL DEFAULT 0
);
ALTER TABLE public.section ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view sections" ON public.section FOR SELECT USING (true);
GRANT SELECT ON public.section TO authenticated, anon;
```

### Bảng 3: `media`
```sql
CREATE TABLE public.media (
  id   UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('AUDIO','IMAGE')),
  url  TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view media" ON public.media FOR SELECT USING (true);
GRANT SELECT ON public.media TO authenticated, anon;
```

### Bảng 4: `question_group` (Part 3 & 4)
```sql
CREATE TABLE public.question_group (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id  UUID NOT NULL REFERENCES public.section(id) ON DELETE CASCADE,
  media_id    UUID REFERENCES public.media(id),  -- audio chung
  order_index INTEGER NOT NULL DEFAULT 0
);
ALTER TABLE public.question_group ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view question groups" ON public.question_group FOR SELECT USING (true);
GRANT SELECT ON public.question_group TO authenticated, anon;
```

### Bảng 5: `question`
```sql
-- question_type:
--   PHOTO        → Part 1 (ảnh + 4 đáp án)
--   QA           → Part 2 (audio + 3 đáp án)
--   CONVERSATION → Part 3 (hội thoại + 4 đáp án, nhiều câu/group)
--   TALK         → Part 4 (bài nói + 4 đáp án, nhiều câu/group)
--   INCOMPLETE   → Part 5 (điền vào câu)
--   TEXT         → Part 6 (đoạn văn điền)
--   READING      → Part 7 (đọc hiểu)
CREATE TABLE public.question (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id    UUID NOT NULL REFERENCES public.section(id) ON DELETE CASCADE,
  group_id      UUID REFERENCES public.question_group(id) ON DELETE SET NULL, -- nullable
  question_type TEXT NOT NULL CHECK (question_type IN
                  ('PHOTO','QA','CONVERSATION','TALK','INCOMPLETE','TEXT','READING')),
  content       TEXT,       -- question text (null nếu câu hỏi nằm trong audio)
  explanation   TEXT,
  order_index   INTEGER NOT NULL DEFAULT 0
);
ALTER TABLE public.question ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view questions" ON public.question FOR SELECT USING (true);
GRANT SELECT ON public.question TO authenticated, anon;
```

### Bảng 6: `answer`
```sql
CREATE TABLE public.answer (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question_id UUID NOT NULL REFERENCES public.question(id) ON DELETE CASCADE,
  content     TEXT NOT NULL,
  is_correct  BOOLEAN NOT NULL DEFAULT FALSE,
  order_index INTEGER NOT NULL DEFAULT 0  -- 0=A, 1=B, 2=C, 3=D
);
ALTER TABLE public.answer ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view answers" ON public.answer FOR SELECT USING (true);
GRANT SELECT ON public.answer TO authenticated, anon;
```

### Bảng 7: `question_media` (mapping)
```sql
CREATE TABLE public.question_media (
  question_id UUID NOT NULL REFERENCES public.question(id) ON DELETE CASCADE,
  media_id    UUID NOT NULL REFERENCES public.media(id) ON DELETE CASCADE,
  PRIMARY KEY (question_id, media_id)
);
ALTER TABLE public.question_media ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view question media" ON public.question_media FOR SELECT USING (true);
GRANT SELECT ON public.question_media TO authenticated, anon;
```

### Bảng 8: `attempt`
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
CREATE POLICY "Users can view own attempts" ON public.attempt FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own attempts" ON public.attempt FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own attempts" ON public.attempt FOR UPDATE USING (auth.uid() = user_id);
GRANT SELECT, INSERT, UPDATE ON public.attempt TO authenticated;
```

### Bảng 9: `user_answer`
```sql
CREATE TABLE public.user_answer (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  attempt_id  UUID NOT NULL REFERENCES public.attempt(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.question(id) ON DELETE CASCADE,
  answer_id   UUID REFERENCES public.answer(id) ON DELETE SET NULL,
  UNIQUE (attempt_id, question_id)
);
ALTER TABLE public.user_answer ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own user_answers" ON public.user_answer FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.attempt a WHERE a.id = attempt_id AND a.user_id = auth.uid())
);
CREATE POLICY "Users can insert own user_answers" ON public.user_answer FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM public.attempt a WHERE a.id = attempt_id AND a.user_id = auth.uid())
);
GRANT SELECT, INSERT ON public.user_answer TO authenticated;
```

---

## RPC Functions

### RPC 1: Load exam by part (Full Test / per-Part Practice)
```sql
CREATE OR REPLACE FUNCTION public.get_exam_part(
  p_exam_id UUID,
  p_part    INTEGER
)
RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER
AS $$
DECLARE
  result JSONB;
BEGIN
  WITH q_answers AS (
    SELECT a.question_id,
           jsonb_agg(jsonb_build_object(
             'id', a.id, 'content', a.content,
             'is_correct', a.is_correct, 'order_index', a.order_index
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
    SELECT q.id, q.group_id, q.question_type, q.content,
           q.explanation, q.order_index,
           COALESCE(qa.answers, '[]'::jsonb) AS answers,
           COALESCE(qm.media, '[]'::jsonb) AS media
    FROM public.question q
    JOIN public.section s ON s.id = q.section_id
    LEFT JOIN q_answers qa ON qa.question_id = q.id
    LEFT JOIN q_media qm ON qm.question_id = q.id
    WHERE s.exam_id = p_exam_id AND s.part = p_part
    ORDER BY q.order_index
  ),
  groups_data AS (
    SELECT qg.id AS group_id,
           jsonb_build_object('id', m.id, 'type', m.type, 'url', m.url) AS group_media,
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
    'groups', COALESCE((SELECT jsonb_agg(jsonb_build_object(
      'group_id', gd.group_id, 'audio', gd.group_media, 'questions', gd.questions
    )) FROM groups_data gd), '[]'::jsonb),
    'standalone', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'id', qd.id, 'question_type', qd.question_type,
        'content', qd.content, 'explanation', qd.explanation,
        'order_index', qd.order_index,
        'answers', qd.answers, 'media', qd.media
      ) ORDER BY qd.order_index)
      FROM questions_data qd WHERE qd.group_id IS NULL
    ), '[]'::jsonb)
  ) INTO result;
  RETURN result;
END;
$$;
GRANT EXECUTE ON FUNCTION public.get_exam_part(UUID, INTEGER) TO authenticated, anon;
```

### RPC 2: Get exams that have a specific part
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

### RPC 3: Practice mode (random questions by part)
```sql
CREATE OR REPLACE FUNCTION public.get_practice_questions(
  p_part  INTEGER,
  p_limit INTEGER DEFAULT 20
)
RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER
AS $$
BEGIN
  -- Reuses get_exam_part logic but with random ordering
  -- For simplicity, returns flat list of random questions for the part
  RETURN (
    SELECT jsonb_agg(jsonb_build_object(
      'id', q.id, 'question_type', q.question_type,
      'content', q.content, 'explanation', q.explanation,
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
    ))
    FROM (
      SELECT q.*
      FROM public.question q
      JOIN public.section s ON s.id = q.section_id
      WHERE s.part = p_part
      ORDER BY random()
      LIMIT p_limit
    ) q
  );
END;
$$;
GRANT EXECUTE ON FUNCTION public.get_practice_questions(INTEGER, INTEGER) TO authenticated, anon;
```

---

## Data Mẫu – Part 1 (6 câu)

```sql
-- 1. Exam
INSERT INTO public.exam (id, title, type, duration, is_published) VALUES
('exam0001-0000-0000-0000-000000000001', 'TOEIC Practice Test 1', 'FULL', 7200, TRUE);

-- 2. Section Part 1
INSERT INTO public.section (id, exam_id, part, order_index) VALUES
('sect0001-0000-0000-0000-000000000001', 'exam0001-0000-0000-0000-000000000001', 1, 1);

-- 3. Media (6 audio + 6 image – thay YOUR_URL bằng URL thật từ Supabase Storage)
INSERT INTO public.media (id, type, url) VALUES
('med00001-0000-0000-0000-000000000001', 'AUDIO', 'YOUR_AUDIO_URL_1'),
('med00001-0000-0000-0000-000000000002', 'IMAGE', 'YOUR_IMAGE_URL_1'),
('med00001-0000-0000-0000-000000000003', 'AUDIO', 'YOUR_AUDIO_URL_2'),
('med00001-0000-0000-0000-000000000004', 'IMAGE', 'YOUR_IMAGE_URL_2'),
('med00001-0000-0000-0000-000000000005', 'AUDIO', 'YOUR_AUDIO_URL_3'),
('med00001-0000-0000-0000-000000000006', 'IMAGE', 'YOUR_IMAGE_URL_3'),
('med00001-0000-0000-0000-000000000007', 'AUDIO', 'YOUR_AUDIO_URL_4'),
('med00001-0000-0000-0000-000000000008', 'IMAGE', 'YOUR_IMAGE_URL_4'),
('med00001-0000-0000-0000-000000000009', 'AUDIO', 'YOUR_AUDIO_URL_5'),
('med00001-0000-0000-0000-000000000010', 'IMAGE', 'YOUR_IMAGE_URL_5'),
('med00001-0000-0000-0000-000000000011', 'AUDIO', 'YOUR_AUDIO_URL_6'),
('med00001-0000-0000-0000-000000000012', 'IMAGE', 'YOUR_IMAGE_URL_6');

-- 4. Questions (Part 1: group_id = NULL, mỗi câu độc lập)
INSERT INTO public.question (id, section_id, group_id, question_type, content, explanation, order_index) VALUES
('ques0001-0000-0000-0000-000000000001', 'sect0001-0000-0000-0000-000000000001', NULL, 'PHOTO', NULL, 'People are sitting around a conference table.', 1),
('ques0001-0000-0000-0000-000000000002', 'sect0001-0000-0000-0000-000000000001', NULL, 'PHOTO', NULL, 'A man is reviewing a document at his desk.', 2),
('ques0001-0000-0000-0000-000000000003', 'sect0001-0000-0000-0000-000000000001', NULL, 'PHOTO', NULL, 'A photographer is taking a picture.', 3),
('ques0001-0000-0000-0000-000000000004', 'sect0001-0000-0000-0000-000000000001', NULL, 'PHOTO', NULL, 'A worker is stocking shelves in the store.', 4),
('ques0001-0000-0000-0000-000000000005', 'sect0001-0000-0000-0000-000000000001', NULL, 'PHOTO', NULL, 'A customer is paying at the checkout counter.', 5),
('ques0001-0000-0000-0000-000000000006', 'sect0001-0000-0000-0000-000000000001', NULL, 'PHOTO', NULL, 'Several people are walking through a corridor.', 6);

-- 5. Answers (4 đáp án/câu)
INSERT INTO public.answer (question_id, content, is_correct, order_index) VALUES
-- Q1
('ques0001-0000-0000-0000-000000000001', 'The woman is making a phone call.', FALSE, 0),
('ques0001-0000-0000-0000-000000000001', 'The man is typing on a computer.', FALSE, 1),
('ques0001-0000-0000-0000-000000000001', 'People are sitting around a table.', TRUE, 2),
('ques0001-0000-0000-0000-000000000001', 'A person is writing on a whiteboard.', FALSE, 3),
-- Q2
('ques0001-0000-0000-0000-000000000002', 'A man is looking at a document.', TRUE, 0),
('ques0001-0000-0000-0000-000000000002', 'The woman is using a calculator.', FALSE, 1),
('ques0001-0000-0000-0000-000000000002', 'People are waiting in a line.', FALSE, 2),
('ques0001-0000-0000-0000-000000000002', 'A person is opening a window.', FALSE, 3),
-- Q3
('ques0001-0000-0000-0000-000000000003', 'The chairs have been moved.', FALSE, 0),
('ques0001-0000-0000-0000-000000000003', 'Someone is taking a picture.', TRUE, 1),
('ques0001-0000-0000-0000-000000000003', 'A person is speaking into a microphone.', FALSE, 2),
('ques0001-0000-0000-0000-000000000003', 'People are eating a meal.', FALSE, 3),
-- Q4
('ques0001-0000-0000-0000-000000000004', 'A man is carrying a box.', FALSE, 0),
('ques0001-0000-0000-0000-000000000004', 'A woman is watering plants.', FALSE, 1),
('ques0001-0000-0000-0000-000000000004', 'The shelves are being stocked.', TRUE, 2),
('ques0001-0000-0000-0000-000000000004', 'People are boarding a bus.', FALSE, 3),
-- Q5
('ques0001-0000-0000-0000-000000000005', 'A customer is paying at the counter.', TRUE, 0),
('ques0001-0000-0000-0000-000000000005', 'A person is cleaning the floor.', FALSE, 1),
('ques0001-0000-0000-0000-000000000005', 'The doors are being locked.', FALSE, 2),
('ques0001-0000-0000-0000-000000000005', 'People are getting off an elevator.', FALSE, 3),
-- Q6
('ques0001-0000-0000-0000-000000000006', 'Someone is giving a presentation.', FALSE, 0),
('ques0001-0000-0000-0000-000000000006', 'A laptop is being repaired.', FALSE, 1),
('ques0001-0000-0000-0000-000000000006', 'A person is writing on a calendar.', FALSE, 2),
('ques0001-0000-0000-0000-000000000006', 'People are walking through a hallway.', TRUE, 3);

-- 6. question_media mapping (audio + image cho mỗi câu)
INSERT INTO public.question_media (question_id, media_id) VALUES
('ques0001-0000-0000-0000-000000000001', 'med00001-0000-0000-0000-000000000001'), -- audio
('ques0001-0000-0000-0000-000000000001', 'med00001-0000-0000-0000-000000000002'), -- image
('ques0001-0000-0000-0000-000000000002', 'med00001-0000-0000-0000-000000000003'),
('ques0001-0000-0000-0000-000000000002', 'med00001-0000-0000-0000-000000000004'),
('ques0001-0000-0000-0000-000000000003', 'med00001-0000-0000-0000-000000000005'),
('ques0001-0000-0000-0000-000000000003', 'med00001-0000-0000-0000-000000000006'),
('ques0001-0000-0000-0000-000000000004', 'med00001-0000-0000-0000-000000000007'),
('ques0001-0000-0000-0000-000000000004', 'med00001-0000-0000-0000-000000000008'),
('ques0001-0000-0000-0000-000000000005', 'med00001-0000-0000-0000-000000000009'),
('ques0001-0000-0000-0000-000000000005', 'med00001-0000-0000-0000-000000000010'),
('ques0001-0000-0000-0000-000000000006', 'med00001-0000-0000-0000-000000000011'),
('ques0001-0000-0000-0000-000000000006', 'med00001-0000-0000-0000-000000000012');
```

---

## Service Layer – `listeningService.ts` [NEW]

```typescript
// Types
export type QuestionType = 'PHOTO'|'QA'|'CONVERSATION'|'TALK'|'INCOMPLETE'|'TEXT'|'READING';
export type MediaType = 'AUDIO'|'IMAGE';

export interface MediaItem  { id: string; type: MediaType; url: string; }
export interface AnswerItem { id: string; content: string; is_correct: boolean; order_index: number; }
export interface QuestionItem {
  id: string; question_type: QuestionType; content: string | null;
  explanation: string | null; order_index: number;
  media: MediaItem[]; answers: AnswerItem[];
}
export interface GroupItem { group_id: string; audio: MediaItem | null; questions: QuestionItem[]; }
export interface PartData  { part: number; groups: GroupItem[]; standalone: QuestionItem[]; }
export interface ExamForPart { exam_id: string; title: string; type: string; question_count: number; }

// Functions
getExamsForPart(part: number): Promise<ExamForPart[]>        // → get_exams_for_part
getExamPart(examId: string, part: number): Promise<PartData> // → get_exam_part
getPracticeQuestions(part: number, limit?: number)           // → get_practice_questions
saveAttempt(examId: string): Promise<string>                 // insert attempt, return attemptId
saveUserAnswer(attemptId, questionId, answerId): Promise<void>
completeAttempt(attemptId, score): Promise<void>
```

---

## Frontend Changes

### [MODIFY] `App.tsx`
```typescript
ListeningPart11: { examId: string; partNumber: number };
// Thêm partNumber để dùng lại màn hình cho Part 2-4 sau này
```

### [MODIFY] `ListeningPart1/index.tsx`
- Fetch `getExamsForPart(1)` khi mount → hiển thị list
- Navigate `ListeningPart11` với `{ examId, partNumber: 1 }`

### [MODIFY] `ListeningPart11/index.tsx` (thay đổi nhiều nhất)
- Nhận `examId`, `partNumber` từ params
- Fetch `getExamPart(examId, 1)`
- **Audio Player** (expo-av):
  - Auto-play khi vào câu mới
  - Play/Pause + Replay buttons
  - Duration progress bar
- **Image** từ `media.find(m => m.type === 'IMAGE')`
- **Answers** từ `question.answers` (4 items)
- Sau khi user chọn → hiển thị đúng/sai ngay (highlight màu)
- Finish → `saveAttempt()` + `saveUserAnswer()` cho từng câu → navigate Result

---

## Lưu ý về Storage

> Dùng **Supabase Storage** (miễn phí, tích hợp sẵn) hoặc **Cloudinary**:
> - Tạo bucket `toeic-media` trong Supabase Storage → public
> - Upload file → lấy public URL → paste vào INSERT SQL trên

---

## Verification Plan
1. SQL chạy không lỗi trong Supabase SQL Editor
2. `get_exams_for_part(1)` → `[{ title: "TOEIC Practice Test 1", question_count: 6 }]`
3. `get_exam_part(examId, 1)` → 6 standalone questions với media + answers
4. expo-av audio play được URL từ Supabase Storage
5. TypeScript build pass
6. `attempt` + `user_answer` được insert sau khi Finish
