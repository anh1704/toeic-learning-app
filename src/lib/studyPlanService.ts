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

export type DailyScheduleItem = {
  title: string;
  startTime: string;
  duration: string;
  color: string;
};

export type DailySchedule = {
  id: string;
  user_id: string;
  study_plan_id: string | null;
  schedule_date: string;
  today_study_time: string;
  progress_percent: number;
  items: DailyScheduleItem[];
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

// Daily Schedule functions
export const getTodaySchedule = async (): Promise<DailySchedule | null> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const today = new Date().toISOString().split('T')[0];

  const { data, error } = await supabase
    .from('daily_schedules')
    .select('*')
    .eq('user_id', user.id)
    .eq('schedule_date', today)
    .maybeSingle();

  if (error) {
    console.error('Error fetching today schedule:', error);
    return null;
  }

  return (data ?? null) as DailySchedule | null;
};

export const saveDailySchedule = async (
  scheduleDate: string,
  todayStudyTime: string,
  progressPercent: number,
  items: DailyScheduleItem[],
  studyPlanId?: string | null,
) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('Not authenticated');

  // Check if schedule exists for this date
  const { data: existing } = await supabase
    .from('daily_schedules')
    .select('id')
    .eq('user_id', user.id)
    .eq('schedule_date', scheduleDate)
    .maybeSingle();

  if (existing) {
    // Update existing
    const { data, error } = await supabase
      .from('daily_schedules')
      .update({
        today_study_time: todayStudyTime,
        progress_percent: progressPercent,
        items,
        study_plan_id: studyPlanId ?? null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', existing.id)
      .select('*')
      .single();

    if (error) throw error;
    return data as DailySchedule;
  } else {
    // Insert new
    const { data, error } = await supabase
      .from('daily_schedules')
      .insert({
        user_id: user.id,
        study_plan_id: studyPlanId ?? null,
        schedule_date: scheduleDate,
        today_study_time: todayStudyTime,
        progress_percent: progressPercent,
        items,
        updated_at: new Date().toISOString(),
      })
      .select('*')
      .single();

    if (error) throw error;
    return data as DailySchedule;
  }
};
