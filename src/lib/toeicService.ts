import { supabase } from "./supabase";

export interface ToeicQuestion {
  id: string;
  question_number: number;
  question_text: string | null;
  options: string[] | null;
  correct_answer: string;
  explanation: string | null;
  transcript: string | null;
}

export interface ToeicQuestionGroup {
  group_id: string;
  audio_url: string | null;
  image_url: string | null;
  passage_text: string | null;
  order_index: number;
  questions: ToeicQuestion[];
}

export interface ToeicTestParts {
  [partNumber: string]: ToeicQuestionGroup[];
}

export interface ToeicTestDetail {
  id: string;
  title: string;
  test_type: string;
  duration: number;
  parts: ToeicTestParts;
}

export const getToeicTestData = async (testId: string): Promise<ToeicTestDetail | null> => {
  const { data, error } = await supabase.rpc("get_toeic_test_data", {
    p_test_id: testId,
  });

  if (error) {
    console.error("Error fetching TOEIC test data:", error);
    return null;
  }

  return data as ToeicTestDetail;
};

export const getAvailableTests = async (type?: string) => {
  let query = supabase
    .from("toeic_tests")
    .select("*")
    .eq("is_published", true);
    
  if (type) {
    query = query.eq("test_type", type);
  }

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching available tests:", error);
    return [];
  }

  return data;
};

export const calculateToeicScore = (
  listeningCorrect: number,
  readingCorrect: number
) => {
  // A simplified universal TOEIC conversion logic
  // In reality, this requires a specific conversion table per test.
  // This is an approximation.
  const calculateSectionScore = (correct: number) => {
    if (correct === 0) return 5;
    if (correct >= 96) return 495;
    // Rough linear approximation: (correct / 100) * 495, rounded to nearest 5
    return Math.round((correct / 100) * 495 / 5) * 5;
  };

  const listeningScore = calculateSectionScore(listeningCorrect);
  const readingScore = calculateSectionScore(readingCorrect);

  return {
    listeningScore,
    readingScore,
    totalScore: listeningScore + readingScore,
  };
};
