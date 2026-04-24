import { supabase } from './supabase';

export type DailyTask = {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  xp: number;
  progress: number;
  completed: boolean;
  task_date: string;
  created_at: string;
  updated_at: string;
};

// Lấy danh sách daily tasks của ngày hôm nay
export const getTodayTasks = async (): Promise<DailyTask[]> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return [];

  const today = new Date().toISOString().split('T')[0];

  const { data, error } = await supabase
    .from('daily_tasks')
    .select('*')
    .eq('user_id', user.id)
    .eq('task_date', today)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching daily tasks:', error);
    return [];
  }

  return data || [];
};

// Tạo daily task mới
export const createDailyTask = async (
  title: string,
  xp: number,
  description?: string
) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('daily_tasks')
    .insert({
      user_id: user.id,
      title,
      description,
      xp,
      task_date: new Date().toISOString().split('T')[0],
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Cập nhật progress của task
export const updateTaskProgress = async (taskId: string, progress: number) => {
  const { data, error } = await supabase
    .from('daily_tasks')
    .update({
      progress,
      completed: progress >= 100,
      updated_at: new Date().toISOString(),
    })
    .eq('id', taskId)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Đánh dấu task hoàn thành
export const completeTask = async (taskId: string) => {
  return updateTaskProgress(taskId, 100);
};

// Xóa task
export const deleteTask = async (taskId: string) => {
  const { error } = await supabase
    .from('daily_tasks')
    .delete()
    .eq('id', taskId);

  if (error) throw error;
};
