import { supabase } from './supabase';

export type DailyQuizQuestion = {
  question_id: string;
  vocabulary_bank_id: string;
  topic: string | null;
  word: string;
  phonetic: string | null;
  options: string[];
  correct_index: number;
};

export type VocabQuizAttempt = {
  id: string;
  user_id: string;
  set_date: string;
  topic: string | null;
  total_questions: number;
  correct_answers: number;
  created_at: string;
  updated_at: string;
};

export const getDailyVocabQuiz = async (
  topic?: string,
  limit = 10,
): Promise<DailyQuizQuestion[]> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase.rpc('get_daily_vocab_quiz', {
    p_topic: topic ?? null,
    p_limit: limit,
  });

  if (error) {
    console.error('Error fetching daily vocab quiz:', error);
    return [];
  }

  const rows = (data ?? []) as any[];
  return rows.map((r) => ({
    question_id: String(r.question_id),
    vocabulary_bank_id: String(r.vocabulary_bank_id),
    topic: (r.topic ?? null) as string | null,
    word: String(r.word ?? ''),
    phonetic: (r.phonetic ?? null) as string | null,
    options: Array.isArray(r.options) ? (r.options as string[]) : [],
    correct_index: Number(r.correct_index ?? 0),
  }));
};

export const createVocabQuizAttempt = async (topic?: string, totalQuestions = 10) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('vocab_quiz_attempts')
    .insert({
      user_id: user.id,
      topic: topic ?? null,
      total_questions: totalQuestions,
      correct_answers: 0,
      updated_at: new Date().toISOString(),
    })
    .select('*')
    .single();

  if (error) throw error;
  return data as VocabQuizAttempt;
};

export const upsertVocabQuizAnswer = async (input: {
  attemptId: string;
  vocabularyBankId: string;
  questionIndex: number;
  selectedIndex: number;
  correctIndex: number;
}) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('Not authenticated');

  const isCorrect = input.selectedIndex === input.correctIndex;

  const { error } = await supabase
    .from('vocab_quiz_answers')
    .upsert(
      {
        attempt_id: input.attemptId,
        user_id: user.id,
        vocabulary_bank_id: input.vocabularyBankId,
        question_index: input.questionIndex,
        selected_index: input.selectedIndex,
        correct_index: input.correctIndex,
        is_correct: isCorrect,
        answered_at: new Date().toISOString(),
      },
      { onConflict: 'attempt_id,vocabulary_bank_id' },
    );

  if (error) throw error;

  return { isCorrect };
};

export const finishVocabQuizAttempt = async (
  attemptId: string,
  correctAnswers: number,
  totalQuestions: number,
) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('Not authenticated');

  const { error } = await supabase
    .from('vocab_quiz_attempts')
    .update({
      correct_answers: correctAnswers,
      total_questions: totalQuestions,
      updated_at: new Date().toISOString(),
    })
    .eq('id', attemptId)
    .eq('user_id', user.id);

  if (error) throw error;
};
