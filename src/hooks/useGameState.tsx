'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { WORLDS_DATABASE } from '@/data/worlds';

export interface Pet {
  id: string;
  name: string;
  description: string;
  cost: number;
  unlocked: boolean;
  color: string; // Tailwind/CSS color
  emoji: string;
}

export interface WorldProgression {
  unlockedLevels: number; // e.g. level 1 to 5
  stars: { [levelId: string]: number }; // levelId -> stars (1-3)
  highScores: { [levelId: string]: number }; // levelId -> percentage accuracy
}

export interface GameState {
  coins: number;
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string | null;
  activePetId: string;
  unlockedPetIds: string[];
  worldProgression: { [worldId: string]: WorldProgression };
  battleStats: {
    questionsAnswered: number;
    correctAnswers: number;
    timePracticedSeconds: number;
    topicAccuracy: { [topicId: string]: { correct: number; total: number } };
  };
}

export const PETS_DATABASE: Pet[] = [
  { id: 'leaf_kitten', name: 'Leaf Kitten', description: 'A cute green kitten that loves numbers!', cost: 0, unlocked: true, color: '#4ade80', emoji: '🐱' },
  { id: 'aqua_puppy', name: 'Aqua Puppy', description: 'A bubble-blowing pup that splash-attacks!', cost: 100, unlocked: false, color: '#38bdf8', emoji: '🐶' },
  { id: 'pyrosaur', name: 'Pyrosaur', description: 'A fire-breathing baby dino that loves hot equations!', cost: 250, unlocked: false, color: '#fb923c', emoji: '🦖' },
  { id: 'star_bunny', name: 'Star Bunny', description: 'A magical cosmic bunny that drops shooting stars!', cost: 500, unlocked: false, color: '#c084fc', emoji: '🐰' },
  { id: 'sparky_owl', name: 'Sparky Owl', description: 'An electric wise owl that zaps monsters with math!', cost: 800, unlocked: false, color: '#facc15', emoji: '🦉' }
];

const DEFAULT_STATE: GameState = {
  coins: 0,
  xp: 0,
  level: 1,
  streak: 0,
  lastActiveDate: null,
  activePetId: 'leaf_kitten',
  unlockedPetIds: ['leaf_kitten'],
  worldProgression: {
    'g1-addition': { unlockedLevels: 1, stars: {}, highScores: {} },
    'g1-subtraction': { unlockedLevels: 1, stars: {}, highScores: {} },
    'g2-addition': { unlockedLevels: 1, stars: {}, highScores: {} },
    'g2-subtraction': { unlockedLevels: 1, stars: {}, highScores: {} },
    'g3-multiplication': { unlockedLevels: 1, stars: {}, highScores: {} },
    'g3-division': { unlockedLevels: 1, stars: {}, highScores: {} }
  },
  battleStats: {
    questionsAnswered: 0,
    correctAnswers: 0,
    timePracticedSeconds: 0,
    topicAccuracy: {}
  }
};

interface GameContextType {
  state: GameState;
  pets: Pet[];
  isLoading: boolean;
  addXP: (amount: number) => { leveledUp: boolean; newLevel: number };
  addCoins: (amount: number) => void;
  unlockPet: (petId: string) => boolean;
  setActivePet: (petId: string) => void;
  completeLevel: (
    worldId: string,
    levelId: string,
    stars: number,
    accuracy: number,
    timeSpentSeconds: number,
    correctCount: number,
    totalCount: number
  ) => void;
  updateStreak: () => void;
  resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GameState>(DEFAULT_STATE);
  const [isLoading, setIsLoading] = useState(true);

  // Hydrate state from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('math_battle_academy_state');
      if (stored) {
        const parsed = JSON.parse(stored);
        
        // Merge with DEFAULT_STATE to handle newly added fields gracefully
        const merged: GameState = {
          ...DEFAULT_STATE,
          ...parsed,
          worldProgression: {
            ...DEFAULT_STATE.worldProgression,
            ...(parsed.worldProgression || {})
          },
          battleStats: {
            ...DEFAULT_STATE.battleStats,
            ...(parsed.battleStats || {}),
            topicAccuracy: {
              ...DEFAULT_STATE.battleStats.topicAccuracy,
              ...(parsed.battleStats?.topicAccuracy || {})
            }
          }
        };
        setState(merged);
      }
    } catch (e) {
      console.error('Failed to load state from LocalStorage:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('math_battle_academy_state', JSON.stringify(state));
    }
  }, [state, isLoading]);

  // Streak updating logic
  const updateStreak = () => {
    const today = new Date().toDateString();
    if (state.lastActiveDate === today) return; // Already active today

    setState(prev => {
      let newStreak = prev.streak;
      if (prev.lastActiveDate) {
        const lastDate = new Date(prev.lastActiveDate);
        const diffTime = Math.abs(new Date(today).getTime() - lastDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
          // Consecutive day
          newStreak += 1;
        } else if (diffDays > 1) {
          // Streak broken
          newStreak = 1;
        }
      } else {
        // First time
        newStreak = 1;
      }

      return {
        ...prev,
        streak: newStreak,
        lastActiveDate: today
      };
    });
  };

  const addXP = (amount: number) => {
    let leveledUp = false;
    let newLevel = state.level;

    setState(prev => {
      const targetXP = prev.xp + amount;
      // Formula: 500 XP per level
      const calculatedLevel = Math.floor(targetXP / 500) + 1;
      
      if (calculatedLevel > prev.level) {
        leveledUp = true;
        newLevel = calculatedLevel;
      }

      return {
        ...prev,
        xp: targetXP,
        level: calculatedLevel
      };
    });

    return { leveledUp, newLevel };
  };

  const addCoins = (amount: number) => {
    setState(prev => ({
      ...prev,
      coins: prev.coins + amount
    }));
  };

  const unlockPet = (petId: string) => {
    const pet = PETS_DATABASE.find(p => p.id === petId);
    if (!pet || state.coins < pet.cost || state.unlockedPetIds.includes(petId)) {
      return false;
    }

    setState(prev => ({
      ...prev,
      coins: prev.coins - pet.cost,
      unlockedPetIds: [...prev.unlockedPetIds, petId],
      activePetId: petId // Auto-equip the new pet
    }));

    return true;
  };

  const setActivePet = (petId: string) => {
    if (state.unlockedPetIds.includes(petId)) {
      setState(prev => ({
        ...prev,
        activePetId: petId
      }));
    }
  };

  const completeLevel = (
    worldId: string,
    levelId: string, // e.g. "1", "2", "3", "4", "5"
    stars: number,
    accuracy: number,
    timeSpentSeconds: number,
    correctCount: number,
    totalCount: number
  ) => {
    setState(prev => {
      const currentWorld = prev.worldProgression[worldId] || { unlockedLevels: 1, stars: {}, highScores: {} };
      
      // Calculate star upgrade
      const existingStars = currentWorld.stars[levelId] || 0;
      const newStars = Math.max(existingStars, stars);
      
      // Calculate high score upgrade
      const existingHighScore = currentWorld.highScores[levelId] || 0;
      const newHighScore = Math.max(existingHighScore, accuracy);

      // Unlock progression if they successfully complete their current maximum level
      const levelNumber = parseInt(levelId);
      let newUnlockedLevels = currentWorld.unlockedLevels;
      if (levelNumber === currentWorld.unlockedLevels && levelNumber < 5 && accuracy >= 50) {
        newUnlockedLevels = levelNumber + 1;
      }

      // Update topic stats
      const worldConfig = WORLDS_DATABASE[worldId];
      const topic = worldConfig ? worldConfig.topicId : (worldId.split('-')[1] || 'addition');
      const currentTopicStats = prev.battleStats.topicAccuracy[topic] || { correct: 0, total: 0 };
      const newTopicStats = {
        correct: currentTopicStats.correct + correctCount,
        total: currentTopicStats.total + totalCount
      };

      return {
        ...prev,
        worldProgression: {
          ...prev.worldProgression,
          [worldId]: {
            unlockedLevels: newUnlockedLevels,
            stars: {
              ...currentWorld.stars,
              [levelId]: newStars
            },
            highScores: {
              ...currentWorld.highScores,
              [levelId]: newHighScore
            }
          }
        },
        battleStats: {
          questionsAnswered: prev.battleStats.questionsAnswered + totalCount,
          correctAnswers: prev.battleStats.correctAnswers + correctCount,
          timePracticedSeconds: prev.battleStats.timePracticedSeconds + timeSpentSeconds,
          topicAccuracy: {
            ...prev.battleStats.topicAccuracy,
            [topic]: newTopicStats
          }
        }
      };
    });
  };

  const resetGame = () => {
    setState(DEFAULT_STATE);
    localStorage.removeItem('math_battle_academy_state');
  };

  // Compile pets list with dynamic locked state
  const pets = PETS_DATABASE.map(pet => ({
    ...pet,
    unlocked: state.unlockedPetIds.includes(pet.id)
  }));

  return (
    <GameContext.Provider
      value={{
        state,
        pets,
        isLoading,
        addXP,
        addCoins,
        unlockPet,
        setActivePet,
        completeLevel,
        updateStreak,
        resetGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameState = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
};
