import { supabase } from './supabase';

export type DailyFlashcard = {
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
  is_favorite: boolean;
};

type DailyFlashcardRow = Omit<DailyFlashcard, 'is_favorite'>;

export const getDailyFlashcards = async (
  topic?: string,
  limit = 10,
): Promise<DailyFlashcard[]> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase.rpc('get_daily_flashcards', {
    p_topic: topic ?? null,
    p_limit: limit,
  });

  if (error) {
    console.error('Error fetching daily flashcards:', error);
    return [];
  }

  const rows = (data ?? []) as DailyFlashcardRow[];

  const ids = rows.map((r) => r.id).filter(Boolean);
  if (ids.length === 0) return [];

  const { data: favData, error: favError } = await supabase
    .from('vocabulary_bank_favorites')
    .select('vocabulary_bank_id')
    .eq('user_id', user.id)
    .in('vocabulary_bank_id', ids);

  if (favError) {
    console.error('Error fetching flashcard favorites:', favError);
  }

  const favoriteIds = new Set<string>((favData ?? []).map((r: any) => r.vocabulary_bank_id));

  return rows.map((r) => ({
    ...r,
    is_favorite: favoriteIds.has(r.id),
  }));
};

export const setFlashcardFavorite = async (
  vocabularyBankId: string,
  isFavorite: boolean,
): Promise<void> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('Not authenticated');

  if (isFavorite) {
    const { error } = await supabase
      .from('vocabulary_bank_favorites')
      .upsert(
        {
          user_id: user.id,
          vocabulary_bank_id: vocabularyBankId,
        },
        { onConflict: 'user_id,vocabulary_bank_id' },
      );

    if (error) throw error;
    return;
  }

  const { error } = await supabase
    .from('vocabulary_bank_favorites')
    .delete()
    .eq('user_id', user.id)
    .eq('vocabulary_bank_id', vocabularyBankId);

  if (error) throw error;
};
