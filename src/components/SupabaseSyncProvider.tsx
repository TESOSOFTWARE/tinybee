'use client';

import React, { useEffect, useState } from 'react';
import { getAppContent } from '@/lib/contentService';
import { Sparkles } from 'lucide-react';

export const SupabaseSyncProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSynced, setIsSynced] = useState(false);

  useEffect(() => {
    const syncData = async () => {
      try {
        const keysToSync = [
          'custom_worlds',
          'custom_math_questions',
          'custom_english_questions',
          'custom_video_quests'
        ];

        // Fetch all data concurrently
        const results = await Promise.all(keysToSync.map(key => getAppContent(key)));

        // Update localStorage
        keysToSync.forEach((key, index) => {
          const data = results[index];
          if (data) {
            localStorage.setItem(key, JSON.stringify(data));
          }
        });
      } catch (error) {
        console.error('Failed to sync content from Supabase:', error);
      } finally {
        setIsSynced(true);
      }
    };

    syncData();
  }, []);

  if (!isSynced) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-playful-dots bg-indigo-50">
        <div className="text-center space-y-4 animate-pulse">
          <Sparkles className="w-12 h-12 text-indigo-500 mx-auto animate-spin-slow" />
          <p className="text-lg font-bold text-indigo-700 tracking-tight">Syncing Magic Spells...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
