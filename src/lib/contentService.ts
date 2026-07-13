import { supabase } from './supabase';

export const getAppContent = async (key: string): Promise<any> => {
  try {
    const { data, error } = await supabase
      .from('app_content')
      .select('data')
      .eq('key', key)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No row found, return null or empty object
        return null;
      }
      console.error(`Error fetching app_content for key ${key}:`, error);
      return null;
    }

    return data?.data || null;
  } catch (err) {
    console.error(`Failed to fetch ${key}:`, err);
    return null;
  }
};

export const setAppContent = async (key: string, contentData: any): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('app_content')
      .upsert({ key, data: contentData }, { onConflict: 'key' });

    if (error) {
      console.error(`Error setting app_content for key ${key}:`, error);
      return false;
    }

    return true;
  } catch (err) {
    console.error(`Failed to save ${key}:`, err);
    return false;
  }
};
