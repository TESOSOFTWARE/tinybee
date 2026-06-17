const fs = require("fs");
const path = require("path");

const QUESTS_FILE_PATH = path.join(__dirname, "../src/data/video_quests.ts");
const TEMP_JS_PATH = path.join(__dirname, "temp_db.js");

const PLAYLIST_MAPPINGS = {
  "9b0l4iRZNXg": { grade: 1, topicId: "playground-park", level: 1 },
  "0xKYNv73vtw": { grade: 2, topicId: "jobs-occupations", level: 1 },
  "Sf4zNup1rec": { grade: 1, topicId: "food-meals", level: 1 },
  "HbvG-nV4DaM": { grade: 2, topicId: "food-drinks", level: 1 },
  "UFHw7A3ovp8": { grade: 2, topicId: "vehicles-travel", level: 1 },
  "-EvRsX91qLU": { grade: 1, topicId: "hygiene-grooming", level: 1 },
  "Qq0RPVzzWZk": { grade: 4, topicId: "shopping-money", level: 1 },
  "Xc-3EYhpBlI": { grade: 1, topicId: "home-furniture", level: 1 },
  "-UP5ZcFqv_Y": { grade: 1, topicId: "school-supplies", level: 2 },
  "2W4eR4EngLo": { grade: 2, topicId: "vehicles-travel", level: 2 },
  "7tbyXd0kxKc": { grade: 1, topicId: "hygiene-grooming", level: 2 },
  "VETWVYWsyko": { grade: 3, topicId: "health-body", level: 1 },
  "UIEIkXJAoog": { grade: 2, topicId: "wild-animals", level: 1 },
  "k5pTmDPDY8Q": { grade: 3, topicId: "hobbies-games", level: 1 },
  "xFeaApa5sHw": { grade: 1, topicId: "food-meals", level: 2 },
  "2-ZjXvMACEY": { grade: 1, topicId: "food-meals", level: 5 },
  "r9p9SunFcMY": { grade: 1, topicId: "food-meals", level: 4 },
  "YJKIvSR_Wdw": { grade: 1, topicId: "food-meals", level: 3 },
  "ViGE5pjVdjU": { grade: 4, topicId: "health-medicine", level: 1 }
};

const STANDARD_MAPPINGS = {
  0: { grade: 2, topicId: "wild-animals", level: 3 },
  1: { grade: 1, topicId: "clothing", level: 1 },
  2: { grade: 1, topicId: "hygiene-grooming", level: 3 },
  3: { grade: 4, topicId: "cooking-utensils", level: 1 },
  4: { grade: 2, topicId: "weather-seasons", level: 1 },
  5: { grade: 5, topicId: "geography-travel", level: 1 },
  6: { grade: 7, topicId: "literature-genres", level: 1 },
  7: { grade: 6, topicId: "science-lab", level: 1 },
  8: { grade: 12, topicId: "abstract-concepts", level: 1 },
  9: { grade: 9, topicId: "sat-verbs", level: 1 },
  10: { grade: 12, topicId: "gre-mastery", level: 1 },
  11: { grade: 11, topicId: "economics-finance", level: 1 },
  12: { grade: 12, topicId: "epistemology", level: 1 }
};

const ANIMAL_QUESTS = [
  {
    grade: 1,
    topicId: "farm-animals",
    level: 1,
    videoUrl: "https://www.youtube.com/embed/HEV51Qee0M8",
    title: "What is this called? #english #learnenglish #vocab...",
    channel: "@EnglishMirage",
    words: ["Bat", "Bear", "Buffalo", "Camel", "Crab"],
    questions: [
      {
        question: "Which of these is a large, strong animal with horns, often found on farms or in the wild?",
        choices: ["Buffalo", "Bear", "Camel", "Crab"],
        correctAnswer: "Buffalo",
        explanation: "Buffaloes are large, heavy mammals with horns, commonly domesticated or found in the wild."
      },
      {
        question: "Which animal is a flying mammal that is active at night?",
        choices: ["Bat", "Bear", "Buffalo", "Camel"],
        correctAnswer: "Bat",
        explanation: "Bats are the only mammals capable of true and sustained flight, and they are nocturnal."
      },
      {
        question: "Which large mammal has thick fur and is known to hibernate in the winter?",
        choices: ["Bear", "Camel", "Buffalo", "Crab"],
        correctAnswer: "Bear",
        explanation: "Bears are large, heavy mammals with thick fur, and many species hibernate during cold winter months."
      },
      {
        question: "Which animal has a hump on its back and lives in the desert?",
        choices: ["Camel", "Bear", "Buffalo", "Crab"],
        correctAnswer: "Camel",
        explanation: "Camels are famous desert animals known for the humps on their backs which store fat."
      },
      {
        question: "Which sea creature has a hard shell and walks sideways?",
        choices: ["Crab", "Bat", "Bear", "Camel"],
        correctAnswer: "Crab",
        explanation: "Crabs are decapod crustaceans with a thick exoskeleton and are known to walk sideways."
      }
    ]
  },
  {
    grade: 1,
    topicId: "farm-animals",
    level: 2,
    videoUrl: "https://www.youtube.com/embed/HEV51Qee0M8",
    title: "Animal names quiz | English vocabulary learning #...",
    channel: "@EnglishWordsCorner",
    words: ["Dog", "Cat", "Rabbit", "Elephant"],
    questions: [
      {
        question: "Which of these is a very large mammal with a trunk and big ears?",
        choices: ["Elephant", "Dog", "Cat", "Rabbit"],
        correctAnswer: "Elephant",
        explanation: "Elephants are the largest existing land animals, recognized by their long trunks and large ears."
      },
      {
        question: "Which pet is known for saying 'meow' and chasing mice?",
        choices: ["Cat", "Dog", "Rabbit", "Elephant"],
        correctAnswer: "Cat",
        explanation: "Cats are small domesticated carnivorous mammals known for meowing and catching mice."
      },
      {
        question: "Which pet is known as man's best friend and barks?",
        choices: ["Dog", "Cat", "Rabbit", "Elephant"],
        correctAnswer: "Dog",
        explanation: "Dogs are domesticated canines known for loyalty and barking sounds."
      },
      {
        question: "Which small animal has long ears and loves to eat carrots?",
        choices: ["Rabbit", "Dog", "Cat", "Elephant"],
        correctAnswer: "Rabbit",
        explanation: "Rabbits are small mammals with long ears and fluffy tails that love vegetables."
      }
    ]
  },
  {
    grade: 1,
    topicId: "farm-animals",
    level: 3,
    videoUrl: "https://www.youtube.com/embed/HEV51Qee0M8",
    title: "Let's see if you know the English name of the last a...",
    channel: "@EnglishWordsCorner",
    words: ["Sheep", "Bat", "Fox", "Bird", "Bear"],
    questions: [
      {
        question: "Which animal is covered in wool and says 'baa'?",
        choices: ["Sheep", "Fox", "Bird", "Bear"],
        correctAnswer: "Sheep",
        explanation: "Sheep are domesticated mammals covered in thick woolly fleece."
      },
      {
        question: "Which wild animal is known for being clever and has a bushy tail?",
        choices: ["Fox", "Sheep", "Bird", "Bear"],
        correctAnswer: "Fox",
        explanation: "Foxes are small-to-medium-sized omnivorous mammals known for their intelligence."
      },
      {
        question: "Which animal has wings, feathers, and can fly?",
        choices: ["Bird", "Sheep", "Fox", "Bear"],
        correctAnswer: "Bird",
        explanation: "Birds are feathered, winged animals that are generally able to fly."
      },
      {
        question: "Which animal is a flying mammal?",
        choices: ["Bat", "Sheep", "Fox", "Bear"],
        correctAnswer: "Bat",
        explanation: "Bats are flying mammals."
      },
      {
        question: "Which large animal is known to love honey and fish?",
        choices: ["Bear", "Sheep", "Fox", "Bird"],
        correctAnswer: "Bear",
        explanation: "Bears are large omnivores known for eating fish and honey."
      }
    ]
  },
  {
    grade: 1,
    topicId: "farm-animals",
    level: 4,
    videoUrl: "https://www.youtube.com/embed/HEV51Qee0M8",
    title: "Learn English Words: animals #animalname #engli...",
    channel: "@EnglishWordsCorner",
    words: ["Cow", "Rat", "Pig", "Camel", "Animal"],
    questions: [
      {
        question: "Which animal gives us milk and says 'moo'?",
        choices: ["Cow", "Pig", "Camel", "Rat"],
        correctAnswer: "Cow",
        explanation: "Cows are large farm animals raised for milk and beef."
      },
      {
        question: "Which farm animal has a curly tail and loves playing in mud?",
        choices: ["Pig", "Cow", "Camel", "Rat"],
        correctAnswer: "Pig",
        explanation: "Pigs are omnivorous domesticated animals known for pink bodies and curly tails."
      },
      {
        question: "Which desert animal has a hump?",
        choices: ["Camel", "Cow", "Pig", "Rat"],
        correctAnswer: "Camel",
        explanation: "Camels are desert animals that carry fat in their humps."
      },
      {
        question: "Which of these is a small rodent with a long tail?",
        choices: ["Rat", "Cow", "Pig", "Camel"],
        correctAnswer: "Rat",
        explanation: "Rats are small rodents with long hairless tails."
      },
      {
        question: "What general word refers to all living creatures that are not plants?",
        choices: ["Animal", "Cow", "Pig", "Camel"],
        correctAnswer: "Animal",
        explanation: "Animal is the general term for living organisms in the animal kingdom."
      }
    ]
  },
  {
    grade: 2,
    topicId: "wild-animals",
    level: 2,
    videoUrl: "https://www.youtube.com/embed/HEV51Qee0M8",
    title: "English quiz: animals #animalname #animalsnamee...",
    channel: "@EnglishWordsCorner",
    words: ["Tiger", "Lion", "Chimpanzee", "Zebra"],
    questions: [
      {
        question: "Which wild cat is known for its orange fur with black stripes?",
        choices: ["Tiger", "Lion", "Chimpanzee", "Zebra"],
        correctAnswer: "Tiger",
        explanation: "Tigers are the largest cat species, instantly recognizable by their black stripes on orange fur."
      },
      {
        question: "Which animal is a primate, very intelligent, and lives in trees?",
        choices: ["Chimpanzee", "Tiger", "Lion", "Zebra"],
        correctAnswer: "Chimpanzee",
        explanation: "Chimpanzees are highly intelligent great apes native to forests and wet savannas of tropical Africa."
      },
      {
        question: "Which animal has black and white stripes and looks like a horse?",
        choices: ["Zebra", "Tiger", "Lion", "Chimpanzee"],
        correctAnswer: "Zebra",
        explanation: "Zebras are African equines known for their distinctive black-and-white striped coats."
      },
      {
        question: "Which animal is known as the King of the Jungle?",
        choices: ["Lion", "Tiger", "Chimpanzee", "Zebra"],
        correctAnswer: "Lion",
        explanation: "The lion is a large cat of the genus Panthera, native to Africa and India, often called the king of the jungle."
      }
    ]
  }
];

function main() {
  console.log("Transpiling TypeScript to pure JS sandbox...");
  let fileContent = fs.readFileSync(QUESTS_FILE_PATH, "utf8");

  // Transpile ts to js
  let jsContent = fileContent;
  jsContent = jsContent.replace(/export interface [\s\S]*?}/g, "");
  jsContent = jsContent.replace(/export function [\s\S]*?}/g, "");
  jsContent = jsContent.replace(/:\s*\{ \[grade: number\]: VideoQuest \}/g, "");
  jsContent = jsContent.replace(/as unknown as \{ \[key: string\]: VideoQuest \};/g, "");
  jsContent = jsContent.replace(/export const VIDEO_QUESTS_DATABASE = [\s\S]*$/g, "");
  jsContent = jsContent.replace(/import type[\s\S]*$/g, "");
  jsContent = jsContent.replace(/export const/g, "const");

  const code = jsContent + "\nmodule.exports = STATIC_VIDEO_QUESTS_DATABASE;";
  fs.writeFileSync(TEMP_JS_PATH, code);

  const db = require(TEMP_JS_PATH);
  console.log("Successfully loaded in-memory database.");

  // We will collect all distinct source quests from the loaded db
  const sourceQuests = [];
  const seenVideoIds = new Set();

  // 1. Process playlist quests & standard quests from db
  Object.keys(db).forEach(key => {
    const q = db[key];
    if (!q || !q.videoUrl) return;

    // Extract raw video ID
    let videoId = "";
    const embedMatch = q.videoUrl.match(/embed\/([a-zA-Z0-9_-]{11})/);
    if (embedMatch) {
      videoId = embedMatch[1];
    } else {
      const watchMatch = q.videoUrl.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
      if (watchMatch) videoId = watchMatch[1];
    }

    if (!videoId) return;

    // Check if this is a mapped playlist quest
    const playlistMap = PLAYLIST_MAPPINGS[videoId];
    if (playlistMap) {
      if (!seenVideoIds.has(videoId)) {
        seenVideoIds.add(videoId);
        sourceQuests.push({
          grade: playlistMap.grade,
          topicId: playlistMap.topicId,
          level: playlistMap.level,
          videoUrl: q.videoUrl,
          title: q.title,
          channel: q.channel,
          words: q.words,
          questions: q.questions
        });
      }
      return;
    }

    // Check if this is a standard quest key (0 to 12)
    const isNumericKey = !isNaN(Number(key));
    if (isNumericKey) {
      const gradeNum = parseInt(key, 10);
      const stdMap = STANDARD_MAPPINGS[gradeNum];
      if (stdMap && !seenVideoIds.has(videoId)) {
        seenVideoIds.add(videoId);
        sourceQuests.push({
          grade: stdMap.grade,
          topicId: stdMap.topicId,
          level: stdMap.level,
          videoUrl: q.videoUrl,
          title: q.title,
          channel: q.channel,
          words: q.words,
          questions: q.questions
        });
      }
    }
  });

  // 2. Add animal quests
  ANIMAL_QUESTS.forEach(q => {
    sourceQuests.push(q);
  });

  console.log(`Gathered ${sourceQuests.length} unique quests.`);

  // 3. Build the final STATIC_VIDEO_QUESTS_DATABASE
  const finalDb = {};

  // Group quests by grade for assigning fallbacks
  const gradeGroups = {};
  sourceQuests.forEach(q => {
    if (!gradeGroups[q.grade]) gradeGroups[q.grade] = [];
    gradeGroups[q.grade].push(q);
  });

  // Sort and assign keys
  sourceQuests.forEach(q => {
    const qObj = {
      grade: q.grade,
      videoUrl: q.videoUrl,
      title: q.title,
      channel: q.channel,
      words: q.words,
      topicId: q.topicId,
      questions: q.questions
    };

    // Topic-scoped keys: topicId-level (e.g. farm-animals-1)
    const topicKey = `${q.topicId}-${q.level}`;
    finalDb[topicKey] = qObj;

    // Level 1 shortcuts (topicId)
    if (q.level === 1) {
      finalDb[q.topicId] = qObj;
    }
  });

  // Generate fallback keys sequentially (1-1, 1-2, 2-1...)
  Object.keys(gradeGroups).forEach(grade => {
    const list = gradeGroups[grade];
    // Sort so there is some stable ordering (e.g. by level, then by topicId)
    list.sort((a, b) => {
      if (a.topicId !== b.topicId) return a.topicId.localeCompare(b.topicId);
      return a.level - b.level;
    });

    list.forEach((q, idx) => {
      const fallbackKey = `${grade}-${idx + 1}`;
      const qObj = {
        grade: q.grade,
        videoUrl: q.videoUrl,
        title: q.title,
        channel: q.channel,
        words: q.words,
        topicId: q.topicId,
        questions: q.questions
      };
      
      // Only set fallback if not already occupied by a topic key (should not be)
      finalDb[fallbackKey] = qObj;
      
      // Also register grade key shortcut for level 1 (e.g. "1" points to "1-1")
      if (idx === 0) {
        finalDb[grade] = qObj;
      }
    });
  });

  // 4. Construct TypeScript code output
  let output = `export interface VideoQuestQuestion {
  question: string;
  choices: string[];
  choiceIpas?: string[];
  correctAnswer: string;
  explanation: string;
  imageUrl?: string;
  ipa?: string;
  isMissingCustomIcon?: boolean;
}

export interface VideoQuest {
  grade: number;
  videoUrl: string;
  title: string;
  channel: string;
  words: string[];
  topicId?: string;
  questions: VideoQuestQuestion[];
}

const STATIC_VIDEO_QUESTS_DATABASE: { [key: string]: VideoQuest } = {
`;

  // Format finalDb keys nicely
  const sortedKeys = Object.keys(finalDb).sort((a, b) => {
    // Sort numeric fallbacks first, then alphabetical
    const isNumA = /^\d+/.test(a);
    const isNumB = /^\d+/.test(b);
    if (isNumA && !isNumB) return -1;
    if (!isNumA && isNumB) return 1;
    return a.localeCompare(b);
  });

  sortedKeys.forEach((key, index) => {
    const q = finalDb[key];
    const isLast = index === sortedKeys.length - 1;
    output += `  "${key}": ${JSON.stringify(q, null, 4).replace(/\n/g, "\n  ")}${isLast ? "" : ","}\n`;
  });

  output += `};

export const VIDEO_QUESTS_DATABASE = new Proxy(STATIC_VIDEO_QUESTS_DATABASE, {
  get(target, prop) {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('custom_video_quests');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed && typeof parsed === 'object' && prop in parsed) {
            const quest = parsed[prop as any];
            
            // Rewrite outdated Supabase URL project IDs dynamically
            const currentSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uzgrmusaxsgirshvkwzx.supabase.co';
            const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || 'vocab-icons';
            if (quest && quest.questions) {
              quest.questions = quest.questions.map((q: any) => {
                if (q.imageUrl) {
                  const match = q.imageUrl.match(/https?:\\/\\/[^\\/]+\\.supabase\\.co\\/storage\\/v1\\/(object|render\\/image)\\/public\\/[^\\/]+\\/(.+)$/);
                  if (match) {
                    const filename = match[2];
                    q.imageUrl = \`\${currentSupabaseUrl}/storage/v1/object/public/\${bucketName}/\${filename}\`;
                  }
                }
                return q;
              });
            }

            // Cache version guard
            const hasStaleData = quest?.questions?.some((q: any) =>
              typeof q.question === 'string' && q.question.includes('>>')
            );
            if (hasStaleData) {
              delete parsed[prop as any];
              localStorage.setItem('custom_video_quests', JSON.stringify(parsed));
              return target[prop as any];
            }
            return quest;
          }
        } catch (e) { }
      }
    }
    return target[prop as any];
  },
  ownKeys(target) {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('custom_video_quests');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed && typeof parsed === 'object') {
            const keys = new Set([...Reflect.ownKeys(target), ...Reflect.ownKeys(parsed)]);
            return Array.from(keys);
          }
        } catch (e) { }
      }
    }
    return Reflect.ownKeys(target);
  },
  getOwnPropertyDescriptor(target, prop) {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('custom_video_quests');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed && typeof parsed === 'object' && prop in parsed) {
            return {
              configurable: true,
              enumerable: true,
              value: parsed[prop as any],
              writable: true
            };
          }
        } catch (e) { }
      }
    }
    return Reflect.getOwnPropertyDescriptor(target, prop);
  }
}) as unknown as { [key: string]: VideoQuest };

export function getYouTubeEmbedUrl(url: string): string {
  if (!url) return '';
  url = url.trim();

  let videoId = '';
  const shortsMatch = url.match(/\\/shorts\\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch) {
    videoId = shortsMatch[1];
  } else {
    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (watchMatch) {
      videoId = watchMatch[1];
    } else {
      const shareMatch = url.match(/youtu\\.be\\/([a-zA-Z0-9_-]{11})/);
      if (shareMatch) {
        videoId = shareMatch[1];
      } else {
        const embedMatch = url.match(/\\/embed\\/([a-zA-Z0-9_-]{11})/);
        if (embedMatch) {
          videoId = embedMatch[1];
        }
      }
    }
  }

  if (videoId) {
    return \`https://www.youtube.com/embed/\${videoId}\`;
  }
  return url;
}

export const getVideoQuest = (grade: number | string, levelId: number, topicId?: string): VideoQuest => {
  const numericGrade = typeof grade === 'string' ? (grade === 'K' ? 0 : parseInt(grade, 10)) : grade;
  const db = VIDEO_QUESTS_DATABASE;
  let quest: VideoQuest;

  if (topicId) {
    const topicKey = \`\${topicId}-\${levelId}\`;
    if (db && db[topicKey]) {
      quest = { ...db[topicKey], grade: numericGrade };
      if (quest.videoUrl) quest.videoUrl = getYouTubeEmbedUrl(quest.videoUrl);
      return quest;
    }
  }

  const specificKey = \`\${numericGrade}-\${levelId}\`;
  if (db && db[specificKey]) {
    quest = { ...db[specificKey], grade: numericGrade };
  } else if (db && db[numericGrade as any]) {
    quest = { ...db[numericGrade as any], grade: numericGrade };
  } else if (db && db[\`\${numericGrade}-1\`]) {
    quest = { ...db[\`\${numericGrade}-1\`], grade: numericGrade };
  } else {
    const keys = Object.keys(db);
    const gradeKey = keys.find(k => k === String(numericGrade) || k.startsWith(\`\${numericGrade}-\`));
    if (gradeKey && db[gradeKey]) {
      quest = { ...db[gradeKey], grade: numericGrade };
    } else {
      const fallback = db["1-1"] || db["1"] || Object.values(db)[0];
      quest = fallback ? { ...fallback, grade: numericGrade } : {
        grade: numericGrade,
        videoUrl: "https://www.youtube.com/embed/uR7bSJYQEc0",
        title: "Household Vocabulary Stickers 🧸",
        channel: "@PRES.ENGLISH",
        words: ["Clothes pin", "Bobby pin", "Chapstick", "Q-tip", "Dustpan"],
        questions: []
      };
    }
  }

  if (quest && quest.videoUrl) {
    quest.videoUrl = getYouTubeEmbedUrl(quest.videoUrl);
  }
  return quest;
};

import type { Question } from '@/data/questions';

export const getQuestionsForGame = (
  subject: 'math' | 'english',
  grade: number | string,
  levelId: number,
  topic: string,
  mathPool: Question[],
  englishPool: Question[]
): Question[] => {
  const numericGrade = typeof grade === 'string' ? (grade === 'K' ? 0 : parseInt(grade, 10)) : grade;
  
  if (subject === 'math') {
    const list = mathPool.filter(q => q.grade === numericGrade && q.topic === topic);
    if (list.length > 0) return list;

    const gradeList = mathPool.filter(q => q.grade === numericGrade);
    if (gradeList.length > 0) return gradeList;

    if (mathPool.length > 0) return mathPool;

    return [
      {
        id: \`fallback-math-\${numericGrade}-1\`,
        grade: numericGrade,
        topic: topic,
        difficulty: 'easy',
        question: "1 + 1 = ?",
        choices: ["1", "2", "3", "4"],
        correctAnswer: "2",
        hint: "Count on your fingers: 1, 2!",
        explanation: "One plus one equals two."
      },
      {
        id: \`fallback-math-\${numericGrade}-2\`,
        grade: numericGrade,
        topic: topic,
        difficulty: 'easy',
        question: "2 + 2 = ?",
        choices: ["2", "3", "4", "5"],
        correctAnswer: "4",
        hint: "Double two makes four!",
        explanation: "Two plus two equals four."
      }
    ];
  }

  const videoQuest = getVideoQuest(numericGrade, levelId, topic);
  if (videoQuest && videoQuest.questions && videoQuest.questions.length > 0) {
    return videoQuest.questions.map((q, idx) => {
      let finalImageUrl = q.imageUrl;
      if (!finalImageUrl) {
        const cleanWord = q.correctAnswer.toLowerCase().trim().replace(/\\s+/g, '_');
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uzgrmusaxsgirshvkwzx.supabase.co';
        const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || 'vocab-icons';
        finalImageUrl = \`\${supabaseUrl}/storage/v1/object/public/\${bucketName}/\${cleanWord}.png\`;
      }
      return {
        id: \`derived-english-\${numericGrade}-\${levelId}-\${idx}\`,
        grade: numericGrade,
        topic,
        difficulty: idx < 2 ? 'easy' : idx < 4 ? 'medium' : 'hard',
        question: q.question,
        choices: q.choices,
        correctAnswer: q.correctAnswer,
        hint: q.explanation || '',
        explanation: q.explanation || '',
        imageUrl: finalImageUrl
      };
    });
  }

  const list = englishPool.filter(q => q.grade === numericGrade && q.topic === topic);
  if (list.length > 0) return list;

  const allVideoQuests = Object.values(VIDEO_QUESTS_DATABASE);
  const gradeVideoQuest = allVideoQuests.find(vq => 
    vq && 
    String(vq.grade) === String(numericGrade) && 
    vq.questions && 
    vq.questions.length > 0
  );
  if (gradeVideoQuest && gradeVideoQuest.questions) {
    return gradeVideoQuest.questions.map((q, idx) => {
      let finalImageUrl = q.imageUrl;
      if (!finalImageUrl) {
        const cleanWord = q.correctAnswer.toLowerCase().trim().replace(/\\s+/g, '_');
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uzgrmusaxsgirshvkwzx.supabase.co';
        const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || 'vocab-icons';
        finalImageUrl = \`\${supabaseUrl}/storage/v1/object/public/\${bucketName}/\${cleanWord}.png\`;
      }
      return {
        id: \`derived-fallback-english-\${numericGrade}-\${idx}\`,
        grade: numericGrade,
        topic,
        difficulty: idx < 2 ? 'easy' : idx < 4 ? 'medium' : 'hard',
        question: q.question,
        choices: q.choices,
        correctAnswer: q.correctAnswer,
        hint: q.explanation || '',
        explanation: q.explanation || '',
        imageUrl: finalImageUrl
      };
    });
  }

  const gradeList = englishPool.filter(q => q.grade === numericGrade);
  if (gradeList.length > 0) return gradeList;

  if (englishPool.length > 0) return englishPool;

  return [
    {
      id: \`fallback-english-\${numericGrade}-1\`,
      grade: numericGrade,
      topic: topic,
      difficulty: 'easy',
      question: "Which of these is a fruit?",
      choices: ["Apple 🍎", "Carrot 🥕", "Potato 🥔", "Onion 🧅"],
      correctAnswer: "Apple 🍎",
      hint: "It is red, round, and sweet!",
      explanation: "An apple is a sweet fruit that grows on trees."
    },
    {
      id: \`fallback-english-\${numericGrade}-2\`,
      grade: numericGrade,
      topic: topic,
      difficulty: 'easy',
      question: "Which animal says 'woof'?",
      choices: ["Cat 🐱", "Dog 🐶", "Cow 🐮", "Sheep 🐑"],
      correctAnswer: "Dog 🐶",
      hint: "It is a loyal pet!",
      explanation: "Dogs bark and say woof."
    }
  ];
};
`;

  fs.writeFileSync(QUESTS_FILE_PATH, output);
  console.log("Successfully rebuilt and saved video_quests.ts!");
  
  // Cleanup temp JS file
  fs.unlinkSync(TEMP_JS_PATH);
}

main();
