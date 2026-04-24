import { supabase } from './supabase';

export type Profile = {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  current_score: number;
  target_score: number;
  created_at: string;
  updated_at: string;
};

// Lấy profile của user hiện tại
export const getProfile = async (): Promise<Profile | null> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return null;

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) {
    console.error('Error fetching profile:', error);
    return null;
  }

  return data;
};

// Cập nhật profile
export const updateProfile = async (updates: Partial<Profile>) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('profiles')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', user.id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Cập nhật điểm số
export const updateScore = async (newScore: number) => {
  return updateProfile({ current_score: newScore });
};

// Cập nhật target score
export const updateTargetScore = async (targetScore: number) => {
  return updateProfile({ target_score: targetScore });
};
