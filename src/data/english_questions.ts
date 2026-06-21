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

const STATIC_ENGLISH_QUESTIONS = [
    {
        "id": "english-0-alphabet-0",
        "grade": 0,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-0-alphabet-1",
        "grade": 0,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-0-alphabet-2",
        "grade": 0,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-0-alphabet-3",
        "grade": 0,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-0-alphabet-4",
        "grade": 0,
        "topic": "alphabet",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-0-sight-words-0",
        "grade": 0,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-0-sight-words-1",
        "grade": 0,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-0-sight-words-2",
        "grade": 0,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-0-sight-words-3",
        "grade": 0,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-0-sight-words-4",
        "grade": 0,
        "topic": "sight-words",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-0-phonics-0",
        "grade": 0,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-0-phonics-1",
        "grade": 0,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-0-phonics-2",
        "grade": 0,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-0-phonics-3",
        "grade": 0,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-0-phonics-4",
        "grade": 0,
        "topic": "phonics",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-0-spelling-0",
        "grade": 0,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-0-spelling-1",
        "grade": 0,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-0-spelling-2",
        "grade": 0,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-0-spelling-3",
        "grade": 0,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-0-spelling-4",
        "grade": 0,
        "topic": "spelling",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-0-vocabulary-0",
        "grade": 0,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-0-vocabulary-1",
        "grade": 0,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-0-vocabulary-2",
        "grade": 0,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-0-vocabulary-3",
        "grade": 0,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-0-vocabulary-4",
        "grade": 0,
        "topic": "vocabulary",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-0-reading-comprehension-0",
        "grade": 0,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-0-reading-comprehension-1",
        "grade": 0,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-0-reading-comprehension-2",
        "grade": 0,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-0-reading-comprehension-3",
        "grade": 0,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-0-reading-comprehension-4",
        "grade": 0,
        "topic": "reading-comprehension",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-0-parts-of-speech-0",
        "grade": 0,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-0-parts-of-speech-1",
        "grade": 0,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-0-parts-of-speech-2",
        "grade": 0,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-0-parts-of-speech-3",
        "grade": 0,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-0-parts-of-speech-4",
        "grade": 0,
        "topic": "parts-of-speech",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-0-sentence-structure-0",
        "grade": 0,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-0-sentence-structure-1",
        "grade": 0,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-0-sentence-structure-2",
        "grade": 0,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-0-sentence-structure-3",
        "grade": 0,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-0-sentence-structure-4",
        "grade": 0,
        "topic": "sentence-structure",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-0-grammar-0",
        "grade": 0,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-0-grammar-1",
        "grade": 0,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-0-grammar-2",
        "grade": 0,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-0-grammar-3",
        "grade": 0,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-0-grammar-4",
        "grade": 0,
        "topic": "grammar",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-0-sentence-building-0",
        "grade": 0,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-0-sentence-building-1",
        "grade": 0,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-0-sentence-building-2",
        "grade": 0,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-0-sentence-building-3",
        "grade": 0,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-0-sentence-building-4",
        "grade": 0,
        "topic": "sentence-building",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-0-reading-0",
        "grade": 0,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-0-reading-1",
        "grade": 0,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-0-reading-2",
        "grade": 0,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-0-reading-3",
        "grade": 0,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-0-reading-4",
        "grade": 0,
        "topic": "reading",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-0-writing-0",
        "grade": 0,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-0-writing-1",
        "grade": 0,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-0-writing-2",
        "grade": 0,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-0-writing-3",
        "grade": 0,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-0-writing-4",
        "grade": 0,
        "topic": "writing",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-0-literature-0",
        "grade": 0,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-0-literature-1",
        "grade": 0,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-0-literature-2",
        "grade": 0,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-0-literature-3",
        "grade": 0,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-0-literature-4",
        "grade": 0,
        "topic": "literature",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-1-alphabet-0",
        "grade": 1,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-1-alphabet-1",
        "grade": 1,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-1-alphabet-2",
        "grade": 1,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-1-alphabet-3",
        "grade": 1,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-1-alphabet-4",
        "grade": 1,
        "topic": "alphabet",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-1-sight-words-0",
        "grade": 1,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-1-sight-words-1",
        "grade": 1,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-1-sight-words-2",
        "grade": 1,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-1-sight-words-3",
        "grade": 1,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-1-sight-words-4",
        "grade": 1,
        "topic": "sight-words",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-1-phonics-0",
        "grade": 1,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-1-phonics-1",
        "grade": 1,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-1-phonics-2",
        "grade": 1,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-1-phonics-3",
        "grade": 1,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-1-phonics-4",
        "grade": 1,
        "topic": "phonics",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-1-spelling-0",
        "grade": 1,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-1-spelling-1",
        "grade": 1,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-1-spelling-2",
        "grade": 1,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-1-spelling-3",
        "grade": 1,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-1-spelling-4",
        "grade": 1,
        "topic": "spelling",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-1-vocabulary-0",
        "grade": 1,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-1-vocabulary-1",
        "grade": 1,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-1-vocabulary-2",
        "grade": 1,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-1-vocabulary-3",
        "grade": 1,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-1-vocabulary-4",
        "grade": 1,
        "topic": "vocabulary",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-1-reading-comprehension-0",
        "grade": 1,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-1-reading-comprehension-1",
        "grade": 1,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-1-reading-comprehension-2",
        "grade": 1,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-1-reading-comprehension-3",
        "grade": 1,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-1-reading-comprehension-4",
        "grade": 1,
        "topic": "reading-comprehension",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-1-parts-of-speech-0",
        "grade": 1,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-1-parts-of-speech-1",
        "grade": 1,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-1-parts-of-speech-2",
        "grade": 1,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-1-parts-of-speech-3",
        "grade": 1,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-1-parts-of-speech-4",
        "grade": 1,
        "topic": "parts-of-speech",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-1-sentence-structure-0",
        "grade": 1,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-1-sentence-structure-1",
        "grade": 1,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-1-sentence-structure-2",
        "grade": 1,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-1-sentence-structure-3",
        "grade": 1,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-1-sentence-structure-4",
        "grade": 1,
        "topic": "sentence-structure",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-1-grammar-0",
        "grade": 1,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-1-grammar-1",
        "grade": 1,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-1-grammar-2",
        "grade": 1,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-1-grammar-3",
        "grade": 1,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-1-grammar-4",
        "grade": 1,
        "topic": "grammar",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-1-sentence-building-0",
        "grade": 1,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-1-sentence-building-1",
        "grade": 1,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-1-sentence-building-2",
        "grade": 1,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-1-sentence-building-3",
        "grade": 1,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-1-sentence-building-4",
        "grade": 1,
        "topic": "sentence-building",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-1-reading-0",
        "grade": 1,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-1-reading-1",
        "grade": 1,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-1-reading-2",
        "grade": 1,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-1-reading-3",
        "grade": 1,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-1-reading-4",
        "grade": 1,
        "topic": "reading",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-1-writing-0",
        "grade": 1,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-1-writing-1",
        "grade": 1,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-1-writing-2",
        "grade": 1,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-1-writing-3",
        "grade": 1,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-1-writing-4",
        "grade": 1,
        "topic": "writing",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-1-literature-0",
        "grade": 1,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-1-literature-1",
        "grade": 1,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-1-literature-2",
        "grade": 1,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-1-literature-3",
        "grade": 1,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-1-literature-4",
        "grade": 1,
        "topic": "literature",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-2-alphabet-0",
        "grade": 2,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-2-alphabet-1",
        "grade": 2,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-2-alphabet-2",
        "grade": 2,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-2-alphabet-3",
        "grade": 2,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-2-alphabet-4",
        "grade": 2,
        "topic": "alphabet",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-2-sight-words-0",
        "grade": 2,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-2-sight-words-1",
        "grade": 2,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-2-sight-words-2",
        "grade": 2,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-2-sight-words-3",
        "grade": 2,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-2-sight-words-4",
        "grade": 2,
        "topic": "sight-words",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-2-phonics-0",
        "grade": 2,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-2-phonics-1",
        "grade": 2,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-2-phonics-2",
        "grade": 2,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-2-phonics-3",
        "grade": 2,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-2-phonics-4",
        "grade": 2,
        "topic": "phonics",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-2-spelling-0",
        "grade": 2,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-2-spelling-1",
        "grade": 2,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-2-spelling-2",
        "grade": 2,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-2-spelling-3",
        "grade": 2,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-2-spelling-4",
        "grade": 2,
        "topic": "spelling",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-2-vocabulary-0",
        "grade": 2,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-2-vocabulary-1",
        "grade": 2,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-2-vocabulary-2",
        "grade": 2,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-2-vocabulary-3",
        "grade": 2,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-2-vocabulary-4",
        "grade": 2,
        "topic": "vocabulary",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-2-reading-comprehension-0",
        "grade": 2,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-2-reading-comprehension-1",
        "grade": 2,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-2-reading-comprehension-2",
        "grade": 2,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-2-reading-comprehension-3",
        "grade": 2,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-2-reading-comprehension-4",
        "grade": 2,
        "topic": "reading-comprehension",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-2-parts-of-speech-0",
        "grade": 2,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-2-parts-of-speech-1",
        "grade": 2,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-2-parts-of-speech-2",
        "grade": 2,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-2-parts-of-speech-3",
        "grade": 2,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-2-parts-of-speech-4",
        "grade": 2,
        "topic": "parts-of-speech",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-2-sentence-structure-0",
        "grade": 2,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-2-sentence-structure-1",
        "grade": 2,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-2-sentence-structure-2",
        "grade": 2,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-2-sentence-structure-3",
        "grade": 2,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-2-sentence-structure-4",
        "grade": 2,
        "topic": "sentence-structure",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-2-grammar-0",
        "grade": 2,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-2-grammar-1",
        "grade": 2,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-2-grammar-2",
        "grade": 2,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-2-grammar-3",
        "grade": 2,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-2-grammar-4",
        "grade": 2,
        "topic": "grammar",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-2-sentence-building-0",
        "grade": 2,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-2-sentence-building-1",
        "grade": 2,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-2-sentence-building-2",
        "grade": 2,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-2-sentence-building-3",
        "grade": 2,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-2-sentence-building-4",
        "grade": 2,
        "topic": "sentence-building",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-2-reading-0",
        "grade": 2,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-2-reading-1",
        "grade": 2,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-2-reading-2",
        "grade": 2,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-2-reading-3",
        "grade": 2,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-2-reading-4",
        "grade": 2,
        "topic": "reading",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-2-writing-0",
        "grade": 2,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-2-writing-1",
        "grade": 2,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-2-writing-2",
        "grade": 2,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-2-writing-3",
        "grade": 2,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-2-writing-4",
        "grade": 2,
        "topic": "writing",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-2-literature-0",
        "grade": 2,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-2-literature-1",
        "grade": 2,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-2-literature-2",
        "grade": 2,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-2-literature-3",
        "grade": 2,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-2-literature-4",
        "grade": 2,
        "topic": "literature",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-3-alphabet-0",
        "grade": 3,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-3-alphabet-1",
        "grade": 3,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-3-alphabet-2",
        "grade": 3,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-3-alphabet-3",
        "grade": 3,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-3-alphabet-4",
        "grade": 3,
        "topic": "alphabet",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-3-sight-words-0",
        "grade": 3,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-3-sight-words-1",
        "grade": 3,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-3-sight-words-2",
        "grade": 3,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-3-sight-words-3",
        "grade": 3,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-3-sight-words-4",
        "grade": 3,
        "topic": "sight-words",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-3-phonics-0",
        "grade": 3,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-3-phonics-1",
        "grade": 3,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-3-phonics-2",
        "grade": 3,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-3-phonics-3",
        "grade": 3,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-3-phonics-4",
        "grade": 3,
        "topic": "phonics",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-3-spelling-0",
        "grade": 3,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-3-spelling-1",
        "grade": 3,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-3-spelling-2",
        "grade": 3,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-3-spelling-3",
        "grade": 3,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-3-spelling-4",
        "grade": 3,
        "topic": "spelling",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-3-vocabulary-0",
        "grade": 3,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-3-vocabulary-1",
        "grade": 3,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-3-vocabulary-2",
        "grade": 3,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-3-vocabulary-3",
        "grade": 3,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-3-vocabulary-4",
        "grade": 3,
        "topic": "vocabulary",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-3-reading-comprehension-0",
        "grade": 3,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-3-reading-comprehension-1",
        "grade": 3,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-3-reading-comprehension-2",
        "grade": 3,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-3-reading-comprehension-3",
        "grade": 3,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-3-reading-comprehension-4",
        "grade": 3,
        "topic": "reading-comprehension",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-3-parts-of-speech-0",
        "grade": 3,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-3-parts-of-speech-1",
        "grade": 3,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-3-parts-of-speech-2",
        "grade": 3,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-3-parts-of-speech-3",
        "grade": 3,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-3-parts-of-speech-4",
        "grade": 3,
        "topic": "parts-of-speech",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-3-sentence-structure-0",
        "grade": 3,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-3-sentence-structure-1",
        "grade": 3,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-3-sentence-structure-2",
        "grade": 3,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-3-sentence-structure-3",
        "grade": 3,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-3-sentence-structure-4",
        "grade": 3,
        "topic": "sentence-structure",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-3-grammar-0",
        "grade": 3,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-3-grammar-1",
        "grade": 3,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-3-grammar-2",
        "grade": 3,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-3-grammar-3",
        "grade": 3,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-3-grammar-4",
        "grade": 3,
        "topic": "grammar",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-3-sentence-building-0",
        "grade": 3,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-3-sentence-building-1",
        "grade": 3,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-3-sentence-building-2",
        "grade": 3,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-3-sentence-building-3",
        "grade": 3,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-3-sentence-building-4",
        "grade": 3,
        "topic": "sentence-building",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-3-reading-0",
        "grade": 3,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-3-reading-1",
        "grade": 3,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-3-reading-2",
        "grade": 3,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-3-reading-3",
        "grade": 3,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-3-reading-4",
        "grade": 3,
        "topic": "reading",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-3-writing-0",
        "grade": 3,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-3-writing-1",
        "grade": 3,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-3-writing-2",
        "grade": 3,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-3-writing-3",
        "grade": 3,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-3-writing-4",
        "grade": 3,
        "topic": "writing",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-3-literature-0",
        "grade": 3,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-3-literature-1",
        "grade": 3,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-3-literature-2",
        "grade": 3,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-3-literature-3",
        "grade": 3,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-3-literature-4",
        "grade": 3,
        "topic": "literature",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-4-alphabet-0",
        "grade": 4,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-4-alphabet-1",
        "grade": 4,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-4-alphabet-2",
        "grade": 4,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-4-alphabet-3",
        "grade": 4,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-4-alphabet-4",
        "grade": 4,
        "topic": "alphabet",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-4-sight-words-0",
        "grade": 4,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-4-sight-words-1",
        "grade": 4,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-4-sight-words-2",
        "grade": 4,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-4-sight-words-3",
        "grade": 4,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-4-sight-words-4",
        "grade": 4,
        "topic": "sight-words",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-4-phonics-0",
        "grade": 4,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-4-phonics-1",
        "grade": 4,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-4-phonics-2",
        "grade": 4,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-4-phonics-3",
        "grade": 4,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-4-phonics-4",
        "grade": 4,
        "topic": "phonics",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-4-spelling-0",
        "grade": 4,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-4-spelling-1",
        "grade": 4,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-4-spelling-2",
        "grade": 4,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-4-spelling-3",
        "grade": 4,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-4-spelling-4",
        "grade": 4,
        "topic": "spelling",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-4-vocabulary-0",
        "grade": 4,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-4-vocabulary-1",
        "grade": 4,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-4-vocabulary-2",
        "grade": 4,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-4-vocabulary-3",
        "grade": 4,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-4-vocabulary-4",
        "grade": 4,
        "topic": "vocabulary",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-4-reading-comprehension-0",
        "grade": 4,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-4-reading-comprehension-1",
        "grade": 4,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-4-reading-comprehension-2",
        "grade": 4,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-4-reading-comprehension-3",
        "grade": 4,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-4-reading-comprehension-4",
        "grade": 4,
        "topic": "reading-comprehension",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-4-parts-of-speech-0",
        "grade": 4,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-4-parts-of-speech-1",
        "grade": 4,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-4-parts-of-speech-2",
        "grade": 4,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-4-parts-of-speech-3",
        "grade": 4,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-4-parts-of-speech-4",
        "grade": 4,
        "topic": "parts-of-speech",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-4-sentence-structure-0",
        "grade": 4,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-4-sentence-structure-1",
        "grade": 4,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-4-sentence-structure-2",
        "grade": 4,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-4-sentence-structure-3",
        "grade": 4,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-4-sentence-structure-4",
        "grade": 4,
        "topic": "sentence-structure",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-4-grammar-0",
        "grade": 4,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-4-grammar-1",
        "grade": 4,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-4-grammar-2",
        "grade": 4,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-4-grammar-3",
        "grade": 4,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-4-grammar-4",
        "grade": 4,
        "topic": "grammar",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-4-sentence-building-0",
        "grade": 4,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-4-sentence-building-1",
        "grade": 4,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-4-sentence-building-2",
        "grade": 4,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-4-sentence-building-3",
        "grade": 4,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-4-sentence-building-4",
        "grade": 4,
        "topic": "sentence-building",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-4-reading-0",
        "grade": 4,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-4-reading-1",
        "grade": 4,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-4-reading-2",
        "grade": 4,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-4-reading-3",
        "grade": 4,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-4-reading-4",
        "grade": 4,
        "topic": "reading",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-4-writing-0",
        "grade": 4,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-4-writing-1",
        "grade": 4,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-4-writing-2",
        "grade": 4,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-4-writing-3",
        "grade": 4,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-4-writing-4",
        "grade": 4,
        "topic": "writing",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-4-literature-0",
        "grade": 4,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-4-literature-1",
        "grade": 4,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-4-literature-2",
        "grade": 4,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-4-literature-3",
        "grade": 4,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-4-literature-4",
        "grade": 4,
        "topic": "literature",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-5-alphabet-0",
        "grade": 5,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-5-alphabet-1",
        "grade": 5,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-5-alphabet-2",
        "grade": 5,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-5-alphabet-3",
        "grade": 5,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-5-alphabet-4",
        "grade": 5,
        "topic": "alphabet",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-5-sight-words-0",
        "grade": 5,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-5-sight-words-1",
        "grade": 5,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-5-sight-words-2",
        "grade": 5,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-5-sight-words-3",
        "grade": 5,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-5-sight-words-4",
        "grade": 5,
        "topic": "sight-words",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-5-phonics-0",
        "grade": 5,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-5-phonics-1",
        "grade": 5,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-5-phonics-2",
        "grade": 5,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-5-phonics-3",
        "grade": 5,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-5-phonics-4",
        "grade": 5,
        "topic": "phonics",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-5-spelling-0",
        "grade": 5,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-5-spelling-1",
        "grade": 5,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-5-spelling-2",
        "grade": 5,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-5-spelling-3",
        "grade": 5,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-5-spelling-4",
        "grade": 5,
        "topic": "spelling",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-5-vocabulary-0",
        "grade": 5,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-5-vocabulary-1",
        "grade": 5,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-5-vocabulary-2",
        "grade": 5,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-5-vocabulary-3",
        "grade": 5,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-5-vocabulary-4",
        "grade": 5,
        "topic": "vocabulary",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-5-reading-comprehension-0",
        "grade": 5,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-5-reading-comprehension-1",
        "grade": 5,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-5-reading-comprehension-2",
        "grade": 5,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-5-reading-comprehension-3",
        "grade": 5,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-5-reading-comprehension-4",
        "grade": 5,
        "topic": "reading-comprehension",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-5-parts-of-speech-0",
        "grade": 5,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-5-parts-of-speech-1",
        "grade": 5,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-5-parts-of-speech-2",
        "grade": 5,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-5-parts-of-speech-3",
        "grade": 5,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-5-parts-of-speech-4",
        "grade": 5,
        "topic": "parts-of-speech",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-5-sentence-structure-0",
        "grade": 5,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-5-sentence-structure-1",
        "grade": 5,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-5-sentence-structure-2",
        "grade": 5,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-5-sentence-structure-3",
        "grade": 5,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-5-sentence-structure-4",
        "grade": 5,
        "topic": "sentence-structure",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-5-grammar-0",
        "grade": 5,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-5-grammar-1",
        "grade": 5,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-5-grammar-2",
        "grade": 5,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-5-grammar-3",
        "grade": 5,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-5-grammar-4",
        "grade": 5,
        "topic": "grammar",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-5-sentence-building-0",
        "grade": 5,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-5-sentence-building-1",
        "grade": 5,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-5-sentence-building-2",
        "grade": 5,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-5-sentence-building-3",
        "grade": 5,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-5-sentence-building-4",
        "grade": 5,
        "topic": "sentence-building",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-5-reading-0",
        "grade": 5,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-5-reading-1",
        "grade": 5,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-5-reading-2",
        "grade": 5,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-5-reading-3",
        "grade": 5,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-5-reading-4",
        "grade": 5,
        "topic": "reading",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-5-writing-0",
        "grade": 5,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-5-writing-1",
        "grade": 5,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-5-writing-2",
        "grade": 5,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-5-writing-3",
        "grade": 5,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-5-writing-4",
        "grade": 5,
        "topic": "writing",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-5-literature-0",
        "grade": 5,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-5-literature-1",
        "grade": 5,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-5-literature-2",
        "grade": 5,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-5-literature-3",
        "grade": 5,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-5-literature-4",
        "grade": 5,
        "topic": "literature",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-6-alphabet-0",
        "grade": 6,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-6-alphabet-1",
        "grade": 6,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-6-alphabet-2",
        "grade": 6,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-6-alphabet-3",
        "grade": 6,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-6-alphabet-4",
        "grade": 6,
        "topic": "alphabet",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-6-sight-words-0",
        "grade": 6,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-6-sight-words-1",
        "grade": 6,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-6-sight-words-2",
        "grade": 6,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-6-sight-words-3",
        "grade": 6,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-6-sight-words-4",
        "grade": 6,
        "topic": "sight-words",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-6-phonics-0",
        "grade": 6,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-6-phonics-1",
        "grade": 6,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-6-phonics-2",
        "grade": 6,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-6-phonics-3",
        "grade": 6,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-6-phonics-4",
        "grade": 6,
        "topic": "phonics",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-6-spelling-0",
        "grade": 6,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-6-spelling-1",
        "grade": 6,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-6-spelling-2",
        "grade": 6,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-6-spelling-3",
        "grade": 6,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-6-spelling-4",
        "grade": 6,
        "topic": "spelling",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-6-vocabulary-0",
        "grade": 6,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-6-vocabulary-1",
        "grade": 6,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-6-vocabulary-2",
        "grade": 6,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-6-vocabulary-3",
        "grade": 6,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-6-vocabulary-4",
        "grade": 6,
        "topic": "vocabulary",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-6-reading-comprehension-0",
        "grade": 6,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-6-reading-comprehension-1",
        "grade": 6,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-6-reading-comprehension-2",
        "grade": 6,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-6-reading-comprehension-3",
        "grade": 6,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-6-reading-comprehension-4",
        "grade": 6,
        "topic": "reading-comprehension",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-6-parts-of-speech-0",
        "grade": 6,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-6-parts-of-speech-1",
        "grade": 6,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-6-parts-of-speech-2",
        "grade": 6,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-6-parts-of-speech-3",
        "grade": 6,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-6-parts-of-speech-4",
        "grade": 6,
        "topic": "parts-of-speech",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-6-sentence-structure-0",
        "grade": 6,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-6-sentence-structure-1",
        "grade": 6,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-6-sentence-structure-2",
        "grade": 6,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-6-sentence-structure-3",
        "grade": 6,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-6-sentence-structure-4",
        "grade": 6,
        "topic": "sentence-structure",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-6-grammar-0",
        "grade": 6,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-6-grammar-1",
        "grade": 6,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-6-grammar-2",
        "grade": 6,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-6-grammar-3",
        "grade": 6,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-6-grammar-4",
        "grade": 6,
        "topic": "grammar",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-6-sentence-building-0",
        "grade": 6,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-6-sentence-building-1",
        "grade": 6,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-6-sentence-building-2",
        "grade": 6,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-6-sentence-building-3",
        "grade": 6,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-6-sentence-building-4",
        "grade": 6,
        "topic": "sentence-building",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-6-reading-0",
        "grade": 6,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-6-reading-1",
        "grade": 6,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-6-reading-2",
        "grade": 6,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-6-reading-3",
        "grade": 6,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-6-reading-4",
        "grade": 6,
        "topic": "reading",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-6-writing-0",
        "grade": 6,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-6-writing-1",
        "grade": 6,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-6-writing-2",
        "grade": 6,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-6-writing-3",
        "grade": 6,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-6-writing-4",
        "grade": 6,
        "topic": "writing",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-6-literature-0",
        "grade": 6,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-6-literature-1",
        "grade": 6,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-6-literature-2",
        "grade": 6,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-6-literature-3",
        "grade": 6,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-6-literature-4",
        "grade": 6,
        "topic": "literature",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-7-alphabet-0",
        "grade": 7,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-7-alphabet-1",
        "grade": 7,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-7-alphabet-2",
        "grade": 7,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-7-alphabet-3",
        "grade": 7,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-7-alphabet-4",
        "grade": 7,
        "topic": "alphabet",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-7-sight-words-0",
        "grade": 7,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-7-sight-words-1",
        "grade": 7,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-7-sight-words-2",
        "grade": 7,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-7-sight-words-3",
        "grade": 7,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-7-sight-words-4",
        "grade": 7,
        "topic": "sight-words",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-7-phonics-0",
        "grade": 7,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-7-phonics-1",
        "grade": 7,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-7-phonics-2",
        "grade": 7,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-7-phonics-3",
        "grade": 7,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-7-phonics-4",
        "grade": 7,
        "topic": "phonics",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-7-spelling-0",
        "grade": 7,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-7-spelling-1",
        "grade": 7,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-7-spelling-2",
        "grade": 7,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-7-spelling-3",
        "grade": 7,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-7-spelling-4",
        "grade": 7,
        "topic": "spelling",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-7-vocabulary-0",
        "grade": 7,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-7-vocabulary-1",
        "grade": 7,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-7-vocabulary-2",
        "grade": 7,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-7-vocabulary-3",
        "grade": 7,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-7-vocabulary-4",
        "grade": 7,
        "topic": "vocabulary",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-7-reading-comprehension-0",
        "grade": 7,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-7-reading-comprehension-1",
        "grade": 7,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-7-reading-comprehension-2",
        "grade": 7,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-7-reading-comprehension-3",
        "grade": 7,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-7-reading-comprehension-4",
        "grade": 7,
        "topic": "reading-comprehension",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-7-parts-of-speech-0",
        "grade": 7,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-7-parts-of-speech-1",
        "grade": 7,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-7-parts-of-speech-2",
        "grade": 7,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-7-parts-of-speech-3",
        "grade": 7,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-7-parts-of-speech-4",
        "grade": 7,
        "topic": "parts-of-speech",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-7-sentence-structure-0",
        "grade": 7,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-7-sentence-structure-1",
        "grade": 7,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-7-sentence-structure-2",
        "grade": 7,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-7-sentence-structure-3",
        "grade": 7,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-7-sentence-structure-4",
        "grade": 7,
        "topic": "sentence-structure",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-7-grammar-0",
        "grade": 7,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-7-grammar-1",
        "grade": 7,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-7-grammar-2",
        "grade": 7,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-7-grammar-3",
        "grade": 7,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-7-grammar-4",
        "grade": 7,
        "topic": "grammar",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-7-sentence-building-0",
        "grade": 7,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-7-sentence-building-1",
        "grade": 7,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-7-sentence-building-2",
        "grade": 7,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-7-sentence-building-3",
        "grade": 7,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-7-sentence-building-4",
        "grade": 7,
        "topic": "sentence-building",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-7-reading-0",
        "grade": 7,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-7-reading-1",
        "grade": 7,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-7-reading-2",
        "grade": 7,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-7-reading-3",
        "grade": 7,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-7-reading-4",
        "grade": 7,
        "topic": "reading",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-7-writing-0",
        "grade": 7,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-7-writing-1",
        "grade": 7,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-7-writing-2",
        "grade": 7,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-7-writing-3",
        "grade": 7,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-7-writing-4",
        "grade": 7,
        "topic": "writing",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-7-literature-0",
        "grade": 7,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-7-literature-1",
        "grade": 7,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-7-literature-2",
        "grade": 7,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-7-literature-3",
        "grade": 7,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-7-literature-4",
        "grade": 7,
        "topic": "literature",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-8-alphabet-0",
        "grade": 8,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-8-alphabet-1",
        "grade": 8,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-8-alphabet-2",
        "grade": 8,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-8-alphabet-3",
        "grade": 8,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-8-alphabet-4",
        "grade": 8,
        "topic": "alphabet",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-8-sight-words-0",
        "grade": 8,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-8-sight-words-1",
        "grade": 8,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-8-sight-words-2",
        "grade": 8,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-8-sight-words-3",
        "grade": 8,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-8-sight-words-4",
        "grade": 8,
        "topic": "sight-words",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-8-phonics-0",
        "grade": 8,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-8-phonics-1",
        "grade": 8,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-8-phonics-2",
        "grade": 8,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-8-phonics-3",
        "grade": 8,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-8-phonics-4",
        "grade": 8,
        "topic": "phonics",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-8-spelling-0",
        "grade": 8,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-8-spelling-1",
        "grade": 8,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-8-spelling-2",
        "grade": 8,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-8-spelling-3",
        "grade": 8,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-8-spelling-4",
        "grade": 8,
        "topic": "spelling",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-8-vocabulary-0",
        "grade": 8,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-8-vocabulary-1",
        "grade": 8,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-8-vocabulary-2",
        "grade": 8,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-8-vocabulary-3",
        "grade": 8,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-8-vocabulary-4",
        "grade": 8,
        "topic": "vocabulary",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-8-reading-comprehension-0",
        "grade": 8,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-8-reading-comprehension-1",
        "grade": 8,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-8-reading-comprehension-2",
        "grade": 8,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-8-reading-comprehension-3",
        "grade": 8,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-8-reading-comprehension-4",
        "grade": 8,
        "topic": "reading-comprehension",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-8-parts-of-speech-0",
        "grade": 8,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-8-parts-of-speech-1",
        "grade": 8,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-8-parts-of-speech-2",
        "grade": 8,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-8-parts-of-speech-3",
        "grade": 8,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-8-parts-of-speech-4",
        "grade": 8,
        "topic": "parts-of-speech",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-8-sentence-structure-0",
        "grade": 8,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-8-sentence-structure-1",
        "grade": 8,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-8-sentence-structure-2",
        "grade": 8,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-8-sentence-structure-3",
        "grade": 8,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-8-sentence-structure-4",
        "grade": 8,
        "topic": "sentence-structure",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-8-grammar-0",
        "grade": 8,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-8-grammar-1",
        "grade": 8,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-8-grammar-2",
        "grade": 8,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-8-grammar-3",
        "grade": 8,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-8-grammar-4",
        "grade": 8,
        "topic": "grammar",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-8-sentence-building-0",
        "grade": 8,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-8-sentence-building-1",
        "grade": 8,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-8-sentence-building-2",
        "grade": 8,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-8-sentence-building-3",
        "grade": 8,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-8-sentence-building-4",
        "grade": 8,
        "topic": "sentence-building",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-8-reading-0",
        "grade": 8,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-8-reading-1",
        "grade": 8,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-8-reading-2",
        "grade": 8,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-8-reading-3",
        "grade": 8,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-8-reading-4",
        "grade": 8,
        "topic": "reading",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-8-writing-0",
        "grade": 8,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-8-writing-1",
        "grade": 8,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-8-writing-2",
        "grade": 8,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-8-writing-3",
        "grade": 8,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-8-writing-4",
        "grade": 8,
        "topic": "writing",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-8-literature-0",
        "grade": 8,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-8-literature-1",
        "grade": 8,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-8-literature-2",
        "grade": 8,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-8-literature-3",
        "grade": 8,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-8-literature-4",
        "grade": 8,
        "topic": "literature",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-9-alphabet-0",
        "grade": 9,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-9-alphabet-1",
        "grade": 9,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-9-alphabet-2",
        "grade": 9,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-9-alphabet-3",
        "grade": 9,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-9-alphabet-4",
        "grade": 9,
        "topic": "alphabet",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-9-sight-words-0",
        "grade": 9,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-9-sight-words-1",
        "grade": 9,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-9-sight-words-2",
        "grade": 9,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-9-sight-words-3",
        "grade": 9,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-9-sight-words-4",
        "grade": 9,
        "topic": "sight-words",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-9-phonics-0",
        "grade": 9,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-9-phonics-1",
        "grade": 9,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-9-phonics-2",
        "grade": 9,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-9-phonics-3",
        "grade": 9,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-9-phonics-4",
        "grade": 9,
        "topic": "phonics",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-9-spelling-0",
        "grade": 9,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-9-spelling-1",
        "grade": 9,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-9-spelling-2",
        "grade": 9,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-9-spelling-3",
        "grade": 9,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-9-spelling-4",
        "grade": 9,
        "topic": "spelling",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-9-vocabulary-0",
        "grade": 9,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-9-vocabulary-1",
        "grade": 9,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-9-vocabulary-2",
        "grade": 9,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-9-vocabulary-3",
        "grade": 9,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-9-vocabulary-4",
        "grade": 9,
        "topic": "vocabulary",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-9-reading-comprehension-0",
        "grade": 9,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-9-reading-comprehension-1",
        "grade": 9,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-9-reading-comprehension-2",
        "grade": 9,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-9-reading-comprehension-3",
        "grade": 9,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-9-reading-comprehension-4",
        "grade": 9,
        "topic": "reading-comprehension",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-9-parts-of-speech-0",
        "grade": 9,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-9-parts-of-speech-1",
        "grade": 9,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-9-parts-of-speech-2",
        "grade": 9,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-9-parts-of-speech-3",
        "grade": 9,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-9-parts-of-speech-4",
        "grade": 9,
        "topic": "parts-of-speech",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-9-sentence-structure-0",
        "grade": 9,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-9-sentence-structure-1",
        "grade": 9,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-9-sentence-structure-2",
        "grade": 9,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-9-sentence-structure-3",
        "grade": 9,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-9-sentence-structure-4",
        "grade": 9,
        "topic": "sentence-structure",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-9-grammar-0",
        "grade": 9,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-9-grammar-1",
        "grade": 9,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-9-grammar-2",
        "grade": 9,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-9-grammar-3",
        "grade": 9,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-9-grammar-4",
        "grade": 9,
        "topic": "grammar",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-9-sentence-building-0",
        "grade": 9,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-9-sentence-building-1",
        "grade": 9,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-9-sentence-building-2",
        "grade": 9,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-9-sentence-building-3",
        "grade": 9,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-9-sentence-building-4",
        "grade": 9,
        "topic": "sentence-building",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-9-reading-0",
        "grade": 9,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-9-reading-1",
        "grade": 9,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-9-reading-2",
        "grade": 9,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-9-reading-3",
        "grade": 9,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-9-reading-4",
        "grade": 9,
        "topic": "reading",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-9-writing-0",
        "grade": 9,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-9-writing-1",
        "grade": 9,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-9-writing-2",
        "grade": 9,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-9-writing-3",
        "grade": 9,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-9-writing-4",
        "grade": 9,
        "topic": "writing",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-9-literature-0",
        "grade": 9,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-9-literature-1",
        "grade": 9,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-9-literature-2",
        "grade": 9,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-9-literature-3",
        "grade": 9,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-9-literature-4",
        "grade": 9,
        "topic": "literature",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-10-alphabet-0",
        "grade": 10,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-10-alphabet-1",
        "grade": 10,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-10-alphabet-2",
        "grade": 10,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-10-alphabet-3",
        "grade": 10,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-10-alphabet-4",
        "grade": 10,
        "topic": "alphabet",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-10-sight-words-0",
        "grade": 10,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-10-sight-words-1",
        "grade": 10,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-10-sight-words-2",
        "grade": 10,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-10-sight-words-3",
        "grade": 10,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-10-sight-words-4",
        "grade": 10,
        "topic": "sight-words",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-10-phonics-0",
        "grade": 10,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-10-phonics-1",
        "grade": 10,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-10-phonics-2",
        "grade": 10,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-10-phonics-3",
        "grade": 10,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-10-phonics-4",
        "grade": 10,
        "topic": "phonics",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-10-spelling-0",
        "grade": 10,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-10-spelling-1",
        "grade": 10,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-10-spelling-2",
        "grade": 10,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-10-spelling-3",
        "grade": 10,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-10-spelling-4",
        "grade": 10,
        "topic": "spelling",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-10-vocabulary-0",
        "grade": 10,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-10-vocabulary-1",
        "grade": 10,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-10-vocabulary-2",
        "grade": 10,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-10-vocabulary-3",
        "grade": 10,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-10-vocabulary-4",
        "grade": 10,
        "topic": "vocabulary",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-10-reading-comprehension-0",
        "grade": 10,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-10-reading-comprehension-1",
        "grade": 10,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-10-reading-comprehension-2",
        "grade": 10,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-10-reading-comprehension-3",
        "grade": 10,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-10-reading-comprehension-4",
        "grade": 10,
        "topic": "reading-comprehension",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-10-parts-of-speech-0",
        "grade": 10,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-10-parts-of-speech-1",
        "grade": 10,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-10-parts-of-speech-2",
        "grade": 10,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-10-parts-of-speech-3",
        "grade": 10,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-10-parts-of-speech-4",
        "grade": 10,
        "topic": "parts-of-speech",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-10-sentence-structure-0",
        "grade": 10,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-10-sentence-structure-1",
        "grade": 10,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-10-sentence-structure-2",
        "grade": 10,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-10-sentence-structure-3",
        "grade": 10,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-10-sentence-structure-4",
        "grade": 10,
        "topic": "sentence-structure",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-10-grammar-0",
        "grade": 10,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-10-grammar-1",
        "grade": 10,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-10-grammar-2",
        "grade": 10,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-10-grammar-3",
        "grade": 10,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-10-grammar-4",
        "grade": 10,
        "topic": "grammar",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-10-sentence-building-0",
        "grade": 10,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-10-sentence-building-1",
        "grade": 10,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-10-sentence-building-2",
        "grade": 10,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-10-sentence-building-3",
        "grade": 10,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-10-sentence-building-4",
        "grade": 10,
        "topic": "sentence-building",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-10-reading-0",
        "grade": 10,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-10-reading-1",
        "grade": 10,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-10-reading-2",
        "grade": 10,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-10-reading-3",
        "grade": 10,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-10-reading-4",
        "grade": 10,
        "topic": "reading",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-10-writing-0",
        "grade": 10,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-10-writing-1",
        "grade": 10,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-10-writing-2",
        "grade": 10,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-10-writing-3",
        "grade": 10,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-10-writing-4",
        "grade": 10,
        "topic": "writing",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-10-literature-0",
        "grade": 10,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-10-literature-1",
        "grade": 10,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-10-literature-2",
        "grade": 10,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-10-literature-3",
        "grade": 10,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-10-literature-4",
        "grade": 10,
        "topic": "literature",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-11-alphabet-0",
        "grade": 11,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-11-alphabet-1",
        "grade": 11,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-11-alphabet-2",
        "grade": 11,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-11-alphabet-3",
        "grade": 11,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-11-alphabet-4",
        "grade": 11,
        "topic": "alphabet",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-11-sight-words-0",
        "grade": 11,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-11-sight-words-1",
        "grade": 11,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-11-sight-words-2",
        "grade": 11,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-11-sight-words-3",
        "grade": 11,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-11-sight-words-4",
        "grade": 11,
        "topic": "sight-words",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-11-phonics-0",
        "grade": 11,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-11-phonics-1",
        "grade": 11,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-11-phonics-2",
        "grade": 11,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-11-phonics-3",
        "grade": 11,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-11-phonics-4",
        "grade": 11,
        "topic": "phonics",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-11-spelling-0",
        "grade": 11,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-11-spelling-1",
        "grade": 11,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-11-spelling-2",
        "grade": 11,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-11-spelling-3",
        "grade": 11,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-11-spelling-4",
        "grade": 11,
        "topic": "spelling",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-11-vocabulary-0",
        "grade": 11,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-11-vocabulary-1",
        "grade": 11,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-11-vocabulary-2",
        "grade": 11,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-11-vocabulary-3",
        "grade": 11,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-11-vocabulary-4",
        "grade": 11,
        "topic": "vocabulary",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-11-reading-comprehension-0",
        "grade": 11,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-11-reading-comprehension-1",
        "grade": 11,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-11-reading-comprehension-2",
        "grade": 11,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-11-reading-comprehension-3",
        "grade": 11,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-11-reading-comprehension-4",
        "grade": 11,
        "topic": "reading-comprehension",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-11-parts-of-speech-0",
        "grade": 11,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-11-parts-of-speech-1",
        "grade": 11,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-11-parts-of-speech-2",
        "grade": 11,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-11-parts-of-speech-3",
        "grade": 11,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-11-parts-of-speech-4",
        "grade": 11,
        "topic": "parts-of-speech",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-11-sentence-structure-0",
        "grade": 11,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-11-sentence-structure-1",
        "grade": 11,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-11-sentence-structure-2",
        "grade": 11,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-11-sentence-structure-3",
        "grade": 11,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-11-sentence-structure-4",
        "grade": 11,
        "topic": "sentence-structure",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-11-grammar-0",
        "grade": 11,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-11-grammar-1",
        "grade": 11,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-11-grammar-2",
        "grade": 11,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-11-grammar-3",
        "grade": 11,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-11-grammar-4",
        "grade": 11,
        "topic": "grammar",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-11-sentence-building-0",
        "grade": 11,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-11-sentence-building-1",
        "grade": 11,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-11-sentence-building-2",
        "grade": 11,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-11-sentence-building-3",
        "grade": 11,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-11-sentence-building-4",
        "grade": 11,
        "topic": "sentence-building",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-11-reading-0",
        "grade": 11,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-11-reading-1",
        "grade": 11,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-11-reading-2",
        "grade": 11,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-11-reading-3",
        "grade": 11,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-11-reading-4",
        "grade": 11,
        "topic": "reading",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-11-writing-0",
        "grade": 11,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-11-writing-1",
        "grade": 11,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-11-writing-2",
        "grade": 11,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-11-writing-3",
        "grade": 11,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-11-writing-4",
        "grade": 11,
        "topic": "writing",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-11-literature-0",
        "grade": 11,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-11-literature-1",
        "grade": 11,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-11-literature-2",
        "grade": 11,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-11-literature-3",
        "grade": 11,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-11-literature-4",
        "grade": 11,
        "topic": "literature",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-12-alphabet-0",
        "grade": 12,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-12-alphabet-1",
        "grade": 12,
        "topic": "alphabet",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-12-alphabet-2",
        "grade": 12,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-12-alphabet-3",
        "grade": 12,
        "topic": "alphabet",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-12-alphabet-4",
        "grade": 12,
        "topic": "alphabet",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-12-sight-words-0",
        "grade": 12,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-12-sight-words-1",
        "grade": 12,
        "topic": "sight-words",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-12-sight-words-2",
        "grade": 12,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-12-sight-words-3",
        "grade": 12,
        "topic": "sight-words",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-12-sight-words-4",
        "grade": 12,
        "topic": "sight-words",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-12-phonics-0",
        "grade": 12,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-12-phonics-1",
        "grade": 12,
        "topic": "phonics",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-12-phonics-2",
        "grade": 12,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-12-phonics-3",
        "grade": 12,
        "topic": "phonics",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-12-phonics-4",
        "grade": 12,
        "topic": "phonics",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-12-spelling-0",
        "grade": 12,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-12-spelling-1",
        "grade": 12,
        "topic": "spelling",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-12-spelling-2",
        "grade": 12,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-12-spelling-3",
        "grade": 12,
        "topic": "spelling",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-12-spelling-4",
        "grade": 12,
        "topic": "spelling",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-12-vocabulary-0",
        "grade": 12,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-12-vocabulary-1",
        "grade": 12,
        "topic": "vocabulary",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-12-vocabulary-2",
        "grade": 12,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-12-vocabulary-3",
        "grade": 12,
        "topic": "vocabulary",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-12-vocabulary-4",
        "grade": 12,
        "topic": "vocabulary",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-12-reading-comprehension-0",
        "grade": 12,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-12-reading-comprehension-1",
        "grade": 12,
        "topic": "reading-comprehension",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-12-reading-comprehension-2",
        "grade": 12,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-12-reading-comprehension-3",
        "grade": 12,
        "topic": "reading-comprehension",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-12-reading-comprehension-4",
        "grade": 12,
        "topic": "reading-comprehension",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-12-parts-of-speech-0",
        "grade": 12,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-12-parts-of-speech-1",
        "grade": 12,
        "topic": "parts-of-speech",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-12-parts-of-speech-2",
        "grade": 12,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-12-parts-of-speech-3",
        "grade": 12,
        "topic": "parts-of-speech",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-12-parts-of-speech-4",
        "grade": 12,
        "topic": "parts-of-speech",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-12-sentence-structure-0",
        "grade": 12,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-12-sentence-structure-1",
        "grade": 12,
        "topic": "sentence-structure",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-12-sentence-structure-2",
        "grade": 12,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-12-sentence-structure-3",
        "grade": 12,
        "topic": "sentence-structure",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-12-sentence-structure-4",
        "grade": 12,
        "topic": "sentence-structure",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-12-grammar-0",
        "grade": 12,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-12-grammar-1",
        "grade": 12,
        "topic": "grammar",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-12-grammar-2",
        "grade": 12,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-12-grammar-3",
        "grade": 12,
        "topic": "grammar",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-12-grammar-4",
        "grade": 12,
        "topic": "grammar",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-12-sentence-building-0",
        "grade": 12,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-12-sentence-building-1",
        "grade": 12,
        "topic": "sentence-building",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-12-sentence-building-2",
        "grade": 12,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-12-sentence-building-3",
        "grade": 12,
        "topic": "sentence-building",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-12-sentence-building-4",
        "grade": 12,
        "topic": "sentence-building",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-12-reading-0",
        "grade": 12,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-12-reading-1",
        "grade": 12,
        "topic": "reading",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-12-reading-2",
        "grade": 12,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-12-reading-3",
        "grade": 12,
        "topic": "reading",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-12-reading-4",
        "grade": 12,
        "topic": "reading",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-12-writing-0",
        "grade": 12,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-12-writing-1",
        "grade": 12,
        "topic": "writing",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-12-writing-2",
        "grade": 12,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-12-writing-3",
        "grade": 12,
        "topic": "writing",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-12-writing-4",
        "grade": 12,
        "topic": "writing",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    },
    {
        "id": "english-12-literature-0",
        "grade": 12,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What do you use to hang wet clothes outside to dry?",
        "choices": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Clothes pin",
        "hint": "It clamps clothes onto a clothesline.",
        "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        "imageUrl": "/clothespin.png"
    },
    {
        "id": "english-12-literature-1",
        "grade": 12,
        "topic": "literature",
        "difficulty": "easy",
        "question": "What are the small black metal pins used to hold hair in place?",
        "choices": [
            "Bobby pin",
            "Q-tip",
            "Chapstick",
            "Dustpan"
        ],
        "correctAnswer": "Bobby pin",
        "hint": "They are tiny double-pronged hairpins.",
        "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        "imageUrl": "/bobbypin.png"
    },
    {
        "id": "english-12-literature-2",
        "grade": 12,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What do you apply to dry or chapped lips?",
        "choices": [
            "Chapstick",
            "Q-tip",
            "Clothes pin",
            "Dustpan"
        ],
        "correctAnswer": "Chapstick",
        "hint": "It is a moisturizing lip balm.",
        "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
        "imageUrl": "/chapstick.png"
    },
    {
        "id": "english-12-literature-3",
        "grade": 12,
        "topic": "literature",
        "difficulty": "medium",
        "question": "What are the cotton swabs used for cleaning small areas?",
        "choices": [
            "Q-tip",
            "Bobby pin",
            "Chapstick",
            "Clothes pin"
        ],
        "correctAnswer": "Q-tip",
        "hint": "A small stick with cotton on both ends.",
        "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        "imageUrl": "/qtip.png"
    },
    {
        "id": "english-12-literature-4",
        "grade": 12,
        "topic": "literature",
        "difficulty": "hard",
        "question": "What tool do you sweep dust and dirt into with a broom?",
        "choices": [
            "Dustpan",
            "Clothes pin",
            "Bobby pin",
            "Chapstick"
        ],
        "correctAnswer": "Dustpan",
        "hint": "A flat scoop used to collect dust.",
        "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
        "imageUrl": "/dustpan.png"
    }
];

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
