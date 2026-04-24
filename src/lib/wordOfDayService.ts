import { supabase } from './supabase';
import type { VocabularyBankWord } from './vocabularyBankService';

export type WordOfDayDailyRow = {
  id: string;
  user_id: string;
  set_date: string;
  vocabulary_bank_id: string;
  created_at: string;
};

export type WordOfDayEntry = VocabularyBankWord & {
  vocabulary_bank_id: string;
  daily_id: string;
  set_date: string;
  created_at: string;
  is_favorite: boolean;
};

export type WordOfDayScreenData = {
  current: WordOfDayEntry | null;
  previous: WordOfDayEntry[];
};

const todayString = () => new Date().toISOString().split('T')[0];

const stableHash = (input: string) => {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) % 2147483647;
  }
  return Math.abs(hash);
};

const fetchDailyRows = async (
  userId: string,
  dateFilter?: { op: 'eq' | 'lt'; value: string },
  limit?: number,
) => {
  let query = supabase
    .from('word_of_day_daily')
    .select('id, user_id, set_date, vocabulary_bank_id, created_at')
    .eq('user_id', userId)
    .order('set_date', { ascending: false })
    .order('created_at', { ascending: false });

  if (dateFilter?.op === 'eq') {
    query = query.eq('set_date', dateFilter.value);
  }

  if (dateFilter?.op === 'lt') {
    query = query.lt('set_date', dateFilter.value);
  }

  if (typeof limit === 'number') {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching word of day rows:', error);
    return [] as WordOfDayDailyRow[];
  }

  return (data ?? []) as WordOfDayDailyRow[];
};

const fetchBankRows = async (ids: string[]) => {
  if (ids.length === 0) return new Map<string, VocabularyBankWord>();

  const { data, error } = await supabase
    .from('vocabulary_bank')
    .select('id, topic, word, meaning, phonetic, example, part_of_speech')
    .in('id', ids);

  if (error) {
    console.error('Error fetching vocabulary bank rows for word of day:', error);
    return new Map<string, VocabularyBankWord>();
  }

  const rows = (data ?? []) as VocabularyBankWord[];
  return new Map(rows.map((row) => [String(row.id), row]));
};

const fetchFavoriteSet = async (userId: string, ids: string[]) => {
  if (ids.length === 0) return new Set<string>();

  const { data, error } = await supabase
    .from('vocabulary_bank_favorites')
    .select('vocabulary_bank_id')
    .eq('user_id', userId)
    .in('vocabulary_bank_id', ids);

  if (error) {
    console.error('Error fetching word of day favorites:', error);
    return new Set<string>();
  }

  return new Set<string>((data ?? []).map((row: any) => String(row.vocabulary_bank_id)));
};

const selectDailyWordForToday = async (userId: string, date: string) => {
  const { count, error: countError } = await supabase
    .from('vocabulary_bank')
    .select('id', { count: 'exact', head: true });

  if (countError) {
    console.error('Error counting vocabulary bank rows for word of day:', countError);
    return null;
  }

  if (!count || count <= 0) {
    return null;
  }

  const offset = stableHash(`${userId}:${date}`) % count;

  const { data: bankRows, error: bankError } = await supabase
    .from('vocabulary_bank')
    .select('id, topic, word, meaning, phonetic, example, part_of_speech')
    .order('word', { ascending: true })
    .range(offset, offset);

  if (bankError) {
    console.error('Error selecting daily vocabulary word:', bankError);
    return null;
  }

  const selected = (bankRows ?? [])[0] as VocabularyBankWord | undefined;

  if (!selected) {
    return null;
  }

  const { data, error } = await supabase
    .from('word_of_day_daily')
    .insert({
      user_id: userId,
      set_date: date,
      vocabulary_bank_id: selected.id,
    })
    .select('id, user_id, set_date, vocabulary_bank_id, created_at')
    .single();

  if (error) {
    console.error('Error creating word of day row:', error);

    const existingRows = await fetchDailyRows(userId, { op: 'eq', value: date }, 1);
    return existingRows[0] ?? null;
  }

  return data as WordOfDayDailyRow;
};

const hydrateRows = async (
  dailyRows: WordOfDayDailyRow[],
  favoriteSet: Set<string>,
  bankMap: Map<string, VocabularyBankWord>,
): Promise<WordOfDayEntry[]> => {
  return dailyRows
    .map((row) => {
      const bankRow = bankMap.get(String(row.vocabulary_bank_id));

      if (!bankRow) return null;

      return {
        ...bankRow,
        vocabulary_bank_id: String(row.vocabulary_bank_id),
        daily_id: String(row.id),
        set_date: String(row.set_date),
        created_at: String(row.created_at),
        is_favorite: favoriteSet.has(String(row.vocabulary_bank_id)),
      } satisfies WordOfDayEntry;
    })
    .filter((row): row is WordOfDayEntry => row !== null);
};

export const getWordOfDayScreenData = async (
  previousLimit = 3,
): Promise<WordOfDayScreenData> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      current: null,
      previous: [],
    };
  }

  const today = todayString();
  const todayRows = await fetchDailyRows(user.id, { op: 'eq', value: today }, 1);

  let currentRow = todayRows[0] ?? null;

  if (!currentRow) {
    currentRow = await selectDailyWordForToday(user.id, today);
  }

  const previousRows = await fetchDailyRows(user.id, { op: 'lt', value: today }, previousLimit);

  const ids = Array.from(
    new Set(
      [currentRow?.vocabulary_bank_id, ...previousRows.map((row) => row.vocabulary_bank_id)]
        .filter(Boolean)
        .map((id) => String(id)),
    ),
  );

  const [bankMap, favoriteSet] = await Promise.all([
    fetchBankRows(ids),
    fetchFavoriteSet(user.id, ids),
  ]);

  const hydratedCurrent = currentRow
    ? (await hydrateRows([currentRow], favoriteSet, bankMap))[0] ?? null
    : null;
  const hydratedPrevious = await hydrateRows(previousRows, favoriteSet, bankMap);

  return {
    current: hydratedCurrent,
    previous: hydratedPrevious,
  };
};

export const setWordOfDayFavorite = async (
  vocabularyBankId: string,
  isFavorite: boolean,
): Promise<void> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Not authenticated');
  }

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