import { supabase } from './supabase';

export type VocabularyItem = {
  id: string;
  user_id: string;
  topic: string | null;
  word: string;
  meaning: string | null;
  phonetic: string | null;
  example: string | null;
  part_of_speech: string | null;
  mastered: boolean;
  is_bookmarked: boolean;
  last_reviewed_at: string | null;
  is_favorite: boolean | null;
  created_at: string | null;
  updated_at: string | null;
};

export const getMyVocabularyFlashcards = async (
  limit = 50,
): Promise<VocabularyItem[]> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from('vocabulary')
    .select(
      'id, user_id, topic, word, meaning, phonetic, example, part_of_speech, mastered, is_bookmarked, last_reviewed_at, is_favorite, created_at, updated_at',
    )
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching vocabulary flashcards:', error);
    return [];
  }

  return (data ?? []) as VocabularyItem[];
};

export const setVocabularyFavorite = async (
  vocabularyId: string,
  isFavorite: boolean,
): Promise<VocabularyItem> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('vocabulary')
    .update({
      is_favorite: isFavorite,
      updated_at: new Date().toISOString(),
    })
    .eq('id', vocabularyId)
    .eq('user_id', user.id)
    .select(
      'id, user_id, topic, word, meaning, phonetic, example, part_of_speech, mastered, is_bookmarked, last_reviewed_at, is_favorite, created_at, updated_at',
    )
    .single();

  if (error) throw error;
  return data as VocabularyItem;
};

export type MyVocabularyStats = {
  total: number;
  mastered: number;
  reviewing: number;
  byTopic: Record<
    string,
    {
      total: number;
      mastered: number;
    }
  >;
};

export const getMyVocabularyStats = async (): Promise<MyVocabularyStats> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      total: 0,
      mastered: 0,
      reviewing: 0,
      byTopic: {},
    };
  }

  const { data, error } = await supabase
    .from('vocabulary')
    .select('topic, mastered')
    .eq('user_id', user.id);

  if (error) {
    console.error('Error fetching vocabulary stats:', error);
    return {
      total: 0,
      mastered: 0,
      reviewing: 0,
      byTopic: {},
    };
  }

  const rows = (data ?? []) as Array<{ topic: string | null; mastered: boolean }>;

  let total = 0;
  let mastered = 0;
  const byTopic: MyVocabularyStats['byTopic'] = {};

  for (const row of rows) {
    total += 1;
    if (row.mastered) mastered += 1;

    const topicKey = (row.topic ?? 'Other').trim() || 'Other';
    if (!byTopic[topicKey]) byTopic[topicKey] = { total: 0, mastered: 0 };
    byTopic[topicKey].total += 1;
    if (row.mastered) byTopic[topicKey].mastered += 1;
  }

  return {
    total,
    mastered,
    reviewing: Math.max(0, total - mastered),
    byTopic,
  };
};
