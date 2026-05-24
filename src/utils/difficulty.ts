import { MathQuestion } from '@/data/questions';

/**
 * Progressively scales difficulty of questions based on level ID (1 to 10).
 * - Levels 1-2: Focuses heavily on 'easy' questions.
 * - Levels 3-4: Focuses on 'easy' and 'medium' questions.
 * - Levels 5-6: Focuses on 'medium' questions.
 * - Levels 7-8: Focuses on 'medium' and 'hard' questions.
 * - Levels 9-10 (Boss): Focuses heavily on 'hard' questions.
 * 
 * Cascades to alternative difficulty pools if the preferred tier is unpopulated.
 * Shuffles items within matching bands for high replay value.
 */
export const getScaledQuestions = (
  questions: MathQuestion[],
  levelId: number,
  count: number = 5
): MathQuestion[] => {
  if (questions.length === 0) return [];

  // Determine preference hierarchy based on milestone tiers (1 to 10)
  let targetOrder: ('easy' | 'medium' | 'hard')[];

  if (levelId <= 2) {
    // Easy introductory tier
    targetOrder = ['easy', 'medium', 'hard'];
  } else if (levelId <= 4) {
    // Easy-Medium mixed tier
    targetOrder = ['medium', 'easy', 'hard'];
  } else if (levelId <= 6) {
    // Medium core tier
    targetOrder = ['medium', 'hard', 'easy'];
  } else if (levelId <= 8) {
    // Medium-Hard mixed tier
    targetOrder = ['hard', 'medium', 'easy'];
  } else {
    // Boss tier (Level 9-10)
    targetOrder = ['hard', 'medium', 'easy'];
  }

  // Group matching questions by difficulty tags
  const grouped = {
    easy: questions.filter(q => q.difficulty === 'easy'),
    medium: questions.filter(q => q.difficulty === 'medium'),
    hard: questions.filter(q => q.difficulty === 'hard')
  };

  // Shuffle individual pools to vary challenges
  const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);
  
  const shuffledGroups = {
    easy: shuffle(grouped.easy),
    medium: shuffle(grouped.medium),
    hard: shuffle(grouped.hard)
  };

  // Compile final selection list based on weight order
  let result: MathQuestion[] = [];
  for (const diff of targetOrder) {
    result = [...result, ...shuffledGroups[diff]];
  }

  // Fallback padding: if total pool is smaller than requested deck size, repeat shuffled matches
  if (result.length < count) {
    const originalLength = result.length;
    while (result.length < count) {
      result = [...result, ...shuffle(result.slice(0, originalLength))];
    }
  }

  return result.slice(0, count);
};
