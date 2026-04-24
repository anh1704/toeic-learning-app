import { supabase } from "./supabase";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
export type QuestionType =
  | "PHOTO"
  | "QA"
  | "CONVERSATION"
  | "TALK"
  | "INCOMPLETE"
  | "TEXT"
  | "READING";

export type MediaType = "AUDIO" | "IMAGE";

export interface MediaItem {
  id: string;
  type: MediaType;
  url: string;
}

export interface AnswerItem {
  id: string;
  content: string;
  is_correct: boolean;
  order_index: number;
}

export interface QuestionItem {
  id: string;
  question_type: QuestionType;
  content: string | null;
  explanation: string | null;
  order_index: number;
  media: MediaItem[];
  answers: AnswerItem[];
}

export interface GroupItem {
  group_id: string;
  audio: MediaItem | null;
  questions: QuestionItem[];
}

export interface PartData {
  part: number;
  standalone: QuestionItem[]; // Part 1, 2 – câu độc lập
  groups: GroupItem[];         // Part 3, 4 – nhóm có audio chung
}

export interface ExamForPart {
  exam_id: string;
  title: string;
  type: string;
  question_count: number;
}

// ─────────────────────────────────────────────
// Functions
// ─────────────────────────────────────────────

/** Lấy danh sách exams có data cho một part cụ thể */
export const getExamsForPart = async (
  part: number
): Promise<ExamForPart[]> => {
  const { data, error } = await supabase.rpc("get_exams_for_part", {
    p_part: part,
  });

  if (error) {
    console.error("[listeningService] getExamsForPart error:", error);
    return [];
  }

  return (data ?? []).map((row: any) => ({
    exam_id: row.exam_id,
    title: row.title,
    type: row.type,
    question_count: Number(row.question_count),
  }));
};

/** Lấy toàn bộ câu hỏi của 1 part từ 1 exam */
export const getExamPart = async (
  examId: string,
  part: number
): Promise<PartData | null> => {
  const { data, error } = await supabase.rpc("get_exam_part", {
    p_exam_id: examId,
    p_part: part,
  });

  if (error) {
    console.error("[listeningService] getExamPart error:", error);
    return null;
  }

  return data as PartData;
};

/** Lưu kết quả làm bài (attempt + user_answers) */
export interface SaveAttemptPayload {
  examId: string;
  answers: Array<{
    questionId: string;
    answerId: string | null;
  }>;
  correctCount: number;
  totalQuestions: number;
}

export const saveAttempt = async (
  payload: SaveAttemptPayload
): Promise<void> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  // 1. Tạo attempt
  const { data: attempt, error: attemptError } = await supabase
    .from("attempt")
    .insert({
      user_id: user.id,
      exam_id: payload.examId,
      end_time: new Date().toISOString(),
      score: payload.correctCount,
      status: "COMPLETED",
    })
    .select("id")
    .single();

  if (attemptError || !attempt) {
    console.error("[listeningService] saveAttempt error:", attemptError);
    return;
  }

  // 2. Insert từng user_answer
  const userAnswers = payload.answers.map((a) => ({
    attempt_id: attempt.id,
    question_id: a.questionId,
    answer_id: a.answerId,
  }));

  const { error: answerError } = await supabase
    .from("user_answer")
    .insert(userAnswers);

  if (answerError) {
    console.error("[listeningService] saveUserAnswers error:", answerError);
  }
};

/** Lấy điểm tốt nhất (best score) của user cho từng examId */
export interface BestAttempt {
  exam_id: string;
  best_score: number;   // số câu đúng
  total_questions: number;
}

export const getBestAttempts = async (
  examIds: string[]
): Promise<Map<string, BestAttempt>> => {
  if (examIds.length === 0) return new Map();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return new Map();

  const { data, error } = await supabase
    .from("attempt")
    .select("exam_id, score")
    .in("exam_id", examIds)
    .eq("user_id", user.id)
    .eq("status", "COMPLETED")
    .order("score", { ascending: false });

  if (error || !data) return new Map();

  const map = new Map<string, BestAttempt>();
  data.forEach((row: any) => {
    if (!map.has(row.exam_id)) {
      map.set(row.exam_id, {
        exam_id: row.exam_id,
        best_score: row.score ?? 0,
        total_questions: 0, // sẽ được fill từ exams list
      });
    }
  });
  return map;
};

