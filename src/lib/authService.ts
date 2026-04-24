import { supabase } from './supabase';

export type User = {
  id: string;
  email: string;
  name?: string;
};

const mapSupabaseUser = (user: any): User => ({
  id: user.id,
  email: user.email || '',
  name: user.user_metadata?.name || '',
});

// Đăng ký user mới
export const signUp = async (email: string, password: string, name?: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: name || '',
      },
    },
  });

  if (error) throw error;
  return data;
};

// Đăng nhập
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

// Đăng xuất
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

// Lấy session hiện tại (nếu đã đăng nhập)
export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
};

// Lấy user hiện tại
export const getCurrentUser = async (): Promise<User | null> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return null;

  return mapSupabaseUser(user);
};

// Lắng nghe thay đổi auth state
export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return supabase.auth.onAuthStateChange((_event, session) => {
    callback(session?.user ? mapSupabaseUser(session.user) : null);
  });
};
