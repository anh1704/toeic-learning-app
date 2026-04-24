import { supabase } from './supabase';

export type VocabularyBankWord = {
  id: string;
  topic: string | null;
  word: string;
  meaning: string | null;
  english_meaning: string | null;
  phonetic: string | null;
  example: string | null;
  part_of_speech: string | null;
  synonyms: string[] | null;
  word_family: any[] | null;
};

export type VocabularyBankWordWithFavorite = VocabularyBankWord & {
  is_favorite: boolean;
};

export type VocabularyBankFavoriteWord = VocabularyBankWord & {
  favorite_id: string;
  favorite_created_at: string;
  is_favorite: true;
};

export type VocabularyBankStats = {
  total: number; // Learned (tổng số từ user đã học)
  mastered: number; // Mastered (map từ favorites trong số learned)
  reviewing: number;
  byTopic: Record<
    string,
    {
      total: number; // tổng số từ trong topic (bank)
      mastered: number; // Learned theo topic
    }
  >;
};

export const getVocabularyBankStats = async (): Promise<VocabularyBankStats> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: bankData, error: bankError } = await supabase
    .from('vocabulary_bank')
    .select('id, topic');

  if (bankError) {
    console.error('Error fetching vocabulary bank stats:', bankError);
    return {
      total: 0,
      mastered: 0,
      reviewing: 0,
      byTopic: {},
    };
  }

  const bankRows = (bankData ?? []) as Array<{ id: string; topic: string | null }>;

  const byTopic: VocabularyBankStats['byTopic'] = {};
  const idToTopic = new Map<string, string>();
  let total = 0;

  for (const r of bankRows) {
    total += 1;
    const topicKey = (r.topic ?? 'Other').trim() || 'Other';
    idToTopic.set(String(r.id), topicKey);
    if (!byTopic[topicKey]) byTopic[topicKey] = { total: 0, mastered: 0 };
    byTopic[topicKey].total += 1;
  }

  if (!user) {
    return {
      total: 0,
      mastered: 0,
      reviewing: 0,
      byTopic,
    };
  }

  // Learned = các từ đã xuất hiện trong flashcards/quiz của user
  const [flashcardsRes, quizDailyRes, quizAnswersRes] = await Promise.all([
    supabase
      .from('flashcard_daily_cards')
      .select('vocabulary_bank_id')
      .eq('user_id', user.id),
    supabase
      .from('vocab_quiz_daily_questions')
      .select('vocabulary_bank_id')
      .eq('user_id', user.id),
    supabase
      .from('vocab_quiz_answers')
      .select('vocabulary_bank_id')
      .eq('user_id', user.id),
  ]);

  if (flashcardsRes.error) {
    console.error('Error fetching learned flashcards:', flashcardsRes.error);
  }
  if (quizDailyRes.error) {
    console.error('Error fetching learned quiz daily:', quizDailyRes.error);
  }
  if (quizAnswersRes.error) {
    console.error('Error fetching learned quiz answers:', quizAnswersRes.error);
  }

  const learnedIds = new Set<string>();
  for (const r of (flashcardsRes.data ?? []) as Array<{ vocabulary_bank_id: string }>) {
    learnedIds.add(String(r.vocabulary_bank_id));
  }
  for (const r of (quizDailyRes.data ?? []) as Array<{ vocabulary_bank_id: string }>) {
    learnedIds.add(String(r.vocabulary_bank_id));
  }
  for (const r of (quizAnswersRes.data ?? []) as Array<{ vocabulary_bank_id: string }>) {
    learnedIds.add(String(r.vocabulary_bank_id));
  }

  // Fill learned per topic
  for (const id of learnedIds) {
    const topicKey = idToTopic.get(id);
    if (!topicKey) continue;
    if (!byTopic[topicKey]) byTopic[topicKey] = { total: 0, mastered: 0 };
    byTopic[topicKey].mastered += 1;
  }

  const learnedTotal = learnedIds.size;

  const { data: favData, error: favError } = await supabase
    .from('vocabulary_bank_favorites')
    .select('vocabulary_bank_id')
    .eq('user_id', user.id);

  if (favError) {
    console.error('Error fetching vocabulary bank favorites stats:', favError);
    return {
      total,
      mastered: 0,
      reviewing: total,
      byTopic,
    };
  }

  const favRows = (favData ?? []) as Array<{ vocabulary_bank_id: string }>;
  let favoritesAmongLearned = 0;
  for (const f of favRows) {
    const id = String(f.vocabulary_bank_id);
    if (learnedIds.has(id)) favoritesAmongLearned += 1;
  }

  return {
    total: learnedTotal,
    mastered: favoritesAmongLearned,
    reviewing: Math.max(0, learnedTotal - favoritesAmongLearned),
    byTopic,
  };
};

export const getVocabularyBankWordsByTopic = async (
  topic: string,
): Promise<VocabularyBankWordWithFavorite[]> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let query = supabase
    .from('vocabulary_bank')
    .select('id, topic, word, meaning, english_meaning, phonetic, example, part_of_speech, synonyms, word_family')
    .order('word', { ascending: true });

  query = topic === 'Other' ? query.is('topic', null) : query.eq('topic', topic);

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching vocabulary bank words:', error);
    return [];
  }

  const rows = (data ?? []) as VocabularyBankWord[];
  const ids = rows.map((r) => String(r.id)).filter(Boolean);

  if (!user || ids.length === 0) {
    return rows.map((r) => ({ ...r, is_favorite: false }));
  }

  const { data: favData, error: favError } = await supabase
    .from('vocabulary_bank_favorites')
    .select('vocabulary_bank_id')
    .eq('user_id', user.id)
    .in('vocabulary_bank_id', ids);

  if (favError) {
    console.error('Error fetching vocabulary bank favorites:', favError);
    return rows.map((r) => ({ ...r, is_favorite: false }));
  }

  const favoriteIds = new Set<string>(
    (favData ?? []).map((r: any) => String(r.vocabulary_bank_id)),
  );

  return rows.map((r) => ({
    ...r,
    is_favorite: favoriteIds.has(String(r.id)),
  }));
};

export const getVocabularyBankFavoriteWords = async (): Promise<
  VocabularyBankFavoriteWord[]
> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return [];
  }

  const { data: favData, error: favError } = await supabase
    .from('vocabulary_bank_favorites')
    .select('id, vocabulary_bank_id, created_at')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (favError) {
    console.error('Error fetching vocabulary bank favorite words:', favError);
    return [];
  }

  const favoriteRows = (favData ?? []) as Array<{
    id: string;
    vocabulary_bank_id: string;
    created_at: string;
  }>;

  const ids = favoriteRows.map((row) => String(row.vocabulary_bank_id)).filter(Boolean);

  if (ids.length === 0) {
    return [];
  }

  const { data: bankData, error: bankError } = await supabase
    .from('vocabulary_bank')
    .select('id, topic, word, meaning, english_meaning, phonetic, example, part_of_speech, synonyms, word_family')
    .in('id', ids);

  if (bankError) {
    console.error('Error fetching vocabulary bank rows for favorites:', bankError);
    return [];
  }

  const bankMap = new Map<string, VocabularyBankWord>(
    (bankData ?? []).map((row) => [String((row as VocabularyBankWord).id), row as VocabularyBankWord]),
  );

  return favoriteRows
    .map((favoriteRow) => {
      const bankRow = bankMap.get(String(favoriteRow.vocabulary_bank_id));

      if (!bankRow) return null;

      return {
        ...bankRow,
        favorite_id: String(favoriteRow.id),
        favorite_created_at: String(favoriteRow.created_at),
        is_favorite: true,
      } satisfies VocabularyBankFavoriteWord;
    })
    .filter((row): row is VocabularyBankFavoriteWord => row !== null);
};

export const removeVocabularyBankFavorite = async (
  vocabularyBankId: string,
): Promise<void> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('Not authenticated');

  const { error } = await supabase
    .from('vocabulary_bank_favorites')
    .delete()
    .eq('user_id', user.id)
    .eq('vocabulary_bank_id', vocabularyBankId);

  if (error) throw error;
};
