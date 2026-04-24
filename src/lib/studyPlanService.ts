import { supabase } from './supabase';

export type StudyPlan = {
  id: string;
  user_id: string;
  target_score: number;
  duration_months: number;
  daily_study_time: string;
  focus_areas: string[];
  created_at: string;
  updated_at: string;
};

export type CreateStudyPlanInput = {
  targetScore: number;
  durationMonths: number;
  dailyStudyTime: string;
  focusAreas: string[];
};

export const getMyStudyPlans = async (): Promise<StudyPlan[]> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from('study_plans')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching study plans:', error);
    return [];
  }

  return (data ?? []) as StudyPlan[];
};

export const getLatestStudyPlan = async (): Promise<StudyPlan | null> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from('study_plans')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error('Error fetching latest study plan:', error);
    return null;
  }

  return (data ?? null) as StudyPlan | null;
};

export const createStudyPlan = async (input: CreateStudyPlanInput) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('study_plans')
    .insert({
      user_id: user.id,
      target_score: input.targetScore,
      duration_months: input.durationMonths,
      daily_study_time: input.dailyStudyTime,
      focus_areas: input.focusAreas,
      updated_at: new Date().toISOString(),
    })
    .select('*')
    .single();

  if (error) throw error;
  return data as StudyPlan;
};

export const updateStudyPlan = async (
  id: string,
  updates: Partial<Omit<StudyPlan, 'id' | 'user_id' | 'created_at'>>,
) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('study_plans')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .eq('user_id', user.id)
    .select('*')
    .single();

  if (error) throw error;
  return data as StudyPlan;
};

export const deleteStudyPlan = async (id: string) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('Not authenticated');

  const { error } = await supabase
    .from('study_plans')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) throw error;
};
