import { Question } from './questions';

// The Learning Section questions (sourced from the demo video)
const demoVocabularyQuestions = [
  {
    id: "learning-clothespin",
    question: "What do you use to hang wet clothes outside to dry?",
    choices: ["Clothes pin", "Bobby pin", "Chapstick", "Dustpan"],
    correctAnswer: "Clothes pin",
    hint: "It clamps clothes onto a clothesline.",
    explanation: "A clothes pin clamps clothes onto a clothesline to hold them in place.",
    imageUrl: "/clothespin.png"
  },
  {
    id: "learning-bobbypin",
    question: "What are the small black metal pins used to hold hair in place?",
    choices: ["Bobby pin", "Q-tip", "Chapstick", "Dustpan"],
    correctAnswer: "Bobby pin",
    hint: "They are tiny double-pronged hairpins.",
    explanation: "Bobby pins are tiny double-pronged hairpins used to secure hair.",
    imageUrl: "/bobbypin.png"
  },
  {
    id: "learning-chapstick",
    question: "What do you apply to dry or chapped lips?",
    choices: ["Chapstick", "Q-tip", "Clothes pin", "Dustpan"],
    correctAnswer: "Chapstick",
    hint: "It is a moisturizing lip balm.",
    explanation: "Chapstick (lip balm) is used to moisturize dry lips.",
    imageUrl: "/chapstick.png"
  },
  {
    id: "learning-qtip",
    question: "What are the cotton swabs used for cleaning small areas?",
    choices: ["Q-tip", "Bobby pin", "Chapstick", "Clothes pin"],
    correctAnswer: "Q-tip",
    hint: "A small stick with cotton on both ends.",
    explanation: "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
    imageUrl: "/qtip.png"
  },
  {
    id: "learning-dustpan",
    question: "What tool do you sweep dust and dirt into with a broom?",
    choices: ["Dustpan", "Clothes pin", "Bobby pin", "Chapstick"],
    correctAnswer: "Dustpan",
    hint: "A flat scoop used to collect dust.",
    explanation: "A dustpan is a flat scoop used to collect dust swept off the floor.",
    imageUrl: "/dustpan.png"
  }
];

// Generate question list mapping these demo questions to all grades (0 to 12) and their topics,
// so that all gameplay modes (levels 1-10) load questions only from this Learning Section.
const grades = Array.from({ length: 13 }, (_, i) => i);
const topics = [
  'alphabet', 'sight-words', 'phonics',
  'spelling', 'vocabulary', 'reading-comprehension',
  'parts-of-speech', 'sentence-structure',
  'grammar', 'sentence-building', 'reading',
  'writing', 'literature'
];

const generatedQuestions: Question[] = [];

grades.forEach((grade) => {
  topics.forEach((topic) => {
    demoVocabularyQuestions.forEach((q, idx) => {
      generatedQuestions.push({
        id: `english-${grade}-${topic}-${idx}`,
        grade,
        topic,
        difficulty: idx < 2 ? 'easy' : idx < 4 ? 'medium' : 'hard',
        question: q.question,
        choices: q.choices,
        correctAnswer: q.correctAnswer,
        hint: q.hint,
        explanation: q.explanation,
        imageUrl: q.imageUrl
      });
    });
  });
});

const STATIC_ENGLISH_QUESTIONS = generatedQuestions;

export const englishQuestions = new Proxy(STATIC_ENGLISH_QUESTIONS, {
  get(target, prop) {
    let activeArray = target;
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('custom_english_questions');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            activeArray = parsed;
          }
        } catch (e) {}
      }
    }
    const val = activeArray[prop as any];
    if (typeof val === 'function') {
      return (val as any).bind(activeArray);
    }
    return val;
  }
}) as unknown as Question[];
