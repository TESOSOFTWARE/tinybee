import { NextResponse } from 'next/server';
import { YoutubeTranscript } from 'youtube-transcript';
import { supabase, BUCKET_NAME } from '@/lib/supabase';

const PIXABAY_API_KEY = "56157889-f0ec1438c03c53096451bfbac";
const PEXELS_API_KEY = "BBnVeBiMG7JKu6cmJzDBZLOuYOHbDD8NCQsDJ6TVoky3WSBMox6qyAkO";

const CURATED_VIDEOS_DATABASE: Record<string, {
  title: string;
  channel: string;
  words: string[];
  questions: any[];
}> = {
  "uR7bSJYQEc0": {
    title: "What do you call this in English? 😱🇺🇸",
    channel: "@PRES.ENGLISH",
    words: ["Clothes pin", "Bobby pin", "Chapstick", "Q-tip", "Dustpan"],
    questions: [
      {
        question: "What do you use to hang wet clothes outside to dry?",
        choices: ["Clothes pin", "Bobby pin", "Chapstick", "Dustpan"],
        correctAnswer: "Clothes pin",
        explanation: "A clothes pin clamps clothes onto a clothesline to hold them in place.",
        imageUrl: "/clothespin.png"
      },
      {
        question: "What are the small black metal pins used to hold hair in place?",
        choices: ["Bobby pin", "Q-tip", "Chapstick", "Dustpan"],
        correctAnswer: "Bobby pin",
        explanation: "Bobby pins are tiny double-pronged hairpins used to secure hair.",
        imageUrl: "/bobbypin.png"
      },
      {
        question: "What protective balm do you apply to dry, chapped lips?",
        choices: ["Chapstick", "Q-tip", "Clothes pin", "Dustpan"],
        correctAnswer: "Chapstick",
        explanation: "Chapstick is a brand of lip balm that prevents and treats dry lips.",
        imageUrl: "/chapstick.png"
      },
      {
        question: "What cotton-tipped stick is used for cleaning ears or painting?",
        choices: ["Q-tip", "Bobby pin", "Chapstick", "Clothes pin"],
        correctAnswer: "Q-tip",
        explanation: "A Q-tip is a cotton swab useful for cosmetic or cleaning tasks.",
        imageUrl: "/qtip.png"
      },
      {
        question: "What flat shovel-like container receives swept dirt or dust?",
        choices: ["Dustpan", "Clothes pin", "Bobby pin", "Chapstick"],
        correctAnswer: "Dustpan",
        explanation: "A dustpan is swept into to collect particles from the floor.",
        imageUrl: "/dustpan.png"
      }
    ]
  },
  "QZf_V6wk1Y0": {
    title: "English Challenge: Describe Actions 😱🇺🇸",
    channel: "@PRES.ENGLISH",
    words: ["Melting", "Spinning", "Bubbling", "Bouncing", "Floating"],
    questions: [
      {
        question: "Which word describes a solid (like ice) turning into a liquid due to heat?",
        choices: ["Melting", "Spinning", "Bubbling", "Floating"],
        correctAnswer: "Melting",
        explanation: "Melting is the process of a solid turning into a liquid when heat is applied.",
        imageUrl: "/melting.png"
      },
      {
        question: "Which word describes turning around and around very quickly in circles?",
        choices: ["Spinning", "Melting", "Bubbling", "Bouncing"],
        correctAnswer: "Spinning",
        explanation: "Spinning means rotating rapidly around a central axis.",
        imageUrl: "/spinning.png"
      },
      {
        question: "Which word describes a liquid producing small bubbles of gas, like boiling water?",
        choices: ["Bubbling", "Spinning", "Floating", "Bouncing"],
        correctAnswer: "Bubbling",
        explanation: "Bubbling occurs when gas rises through a liquid and forms bubbles at the surface.",
        imageUrl: "/bubbling.png"
      },
      {
        question: "Which word describes a ball springing back up after hitting the ground?",
        choices: ["Bouncing", "Floating", "Melting", "Spinning"],
        correctAnswer: "Bouncing",
        explanation: "Bouncing is the rebound of an object after colliding with a surface.",
        imageUrl: "/bouncing.png"
      },
      {
        question: "Which word describes resting or moving slowly on the surface of water without sinking?",
        choices: ["Floating", "Melting", "Spinning", "Bubbling"],
        correctAnswer: "Floating",
        explanation: "Floating is remaining suspended at the top of a fluid.",
        imageUrl: "/floating.png"
      }
    ]
  },
  "gdy-JeUK61Y": {
    title: "English Lesson: Parts & Portions of Food",
    channel: "@PRES.ENGLISH",
    words: ["Finger", "Wedge", "Chunk", "Floret", "Spear"],
    questions: [
      {
        question: "Which word represents a single, individual piece of a banana?",
        choices: ["Finger", "Wedge", "Chunk", "Floret"],
        correctAnswer: "Finger",
        explanation: "A single banana piece is called a banana 'finger' in English terminology.",
        imageUrl: "/finger.png"
      },
      {
        question: "Which word represents a triangular slice or piece of a lemon?",
        choices: ["Wedge", "Floret", "Spear", "Chunk"],
        correctAnswer: "Wedge",
        explanation: "A lemon 'wedge' is a small triangular cut of the lemon fruit.",
        imageUrl: "/wedge.png"
      },
      {
        question: "Which word represents a small, thick cube or piece of a pineapple?",
        choices: ["Chunk", "Finger", "Wedge", "Spear"],
        correctAnswer: "Chunk",
        explanation: "A pineapple 'chunk' is a thick cut or square block of pineapple.",
        imageUrl: "/chunk.png"
      },
      {
        question: "Which word represents a small flower-like head or section of cauliflower?",
        choices: ["Floret", "Spear", "Finger", "Wedge"],
        correctAnswer: "Floret",
        explanation: "A cauliflower 'floret' is one of the small flower-like branches of the cauliflower head.",
        imageUrl: "/floret.png"
      },
      {
        question: "Which word represents a stalk or stem piece of broccoli?",
        choices: ["Spear", "Floret", "Chunk", "Finger"],
        correctAnswer: "Spear",
        explanation: "A broccoli 'spear' is a single stalk piece of broccoli.",
        imageUrl: "/spear.png"
      }
    ]
  }
};

function getYouTubeId(url: string): string | null {
  const reg = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/i;
  const match = url.match(reg);
  return match ? match[1] : null;
}

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&rsquo;/g, "'");
}

const STOP_WORDS = new Set([
  // Basic prepositions, pronouns, articles, conjunctions
  'the', 'and', 'a', 'of', 'to', 'in', 'is', 'that', 'it', 'on', 'for', 'this', 'with',
  'have', 'from', 'your', 'they', 'will', 'what', 'then', 'would', 'about', 'there',
  'their', 'more', 'like', 'just', 'them', 'some', 'other', 'these', 'here', 'an', 'are',
  'was', 'were', 'be', 'been', 'being', 'has', 'had', 'do', 'does', 'did', 'done', 'doing',
  'but', 'or', 'as', 'if', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each',
  'few', 'more', 'most', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so',
  'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should', 'now', 'd',
  'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', 'couldn', 'didn', 'doesn', 'hadn',
  'hasn', 'haven', 'isn', 'ma', 'mightn', 'mustn', 'needn', 'shan', 'shouldn', 'wasn',
  'weren', 'won', 'wouldn', 'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves',
  'you', 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she',
  'her', 'hers', 'herself', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves',

  // Conversational filler words
  'yeah', 'yes', 'no', 'okay', 'ok', 'oh', 'well', 'hey', 'hello', 'hi', 'basically',
  'actually', 'literally', 'maybe', 'guess', 'know', 'mean', 'right', 'so', 'ah', 'uh',
  'um', 'yep', 'nope', 'huh', 'please', 'thanks', 'thank', 'sorry', 'excuse',

  // Video meta & promotion words
  'youtube', 'video', 'lesson', 'vocabulary', 'words', 'word', 'learn', 'learning',
  'english', 'speak', 'speaking', 'grade', 'education', 'educational', 'kids', 'toddlers',
  'toddler', 'children', 'child', 'subscribe', 'comment', 'share', 'view', 'viewer',
  'viewers', 'watch', 'watching', 'channel', 'playlist', 'shorts', 'short', 'tiktok',
  'instagram', 'follow', 'link', 'below', 'description', 'click', 'button', 'free',
  'online', 'class', 'course', 'academy', 'school', 'teacher', 'practice', 'quiz',
  'test', 'challenge', 'challenge yourself', 'score', 'comment down below',
  'ingles', 'ingle', 'espanol', 'spanish', 'translate', 'pronunciation',

  // Conversational dialogue verbs & pronouns
  'want', 'wants', 'wanted', 'wanting', 'need', 'needs', 'needed', 'needing', 'think',
  'thinks', 'thinking', 'thought', 'believe', 'knows', 'knew', 'knowing', 'tell', 'tells',
  'telling', 'told', 'say', 'says', 'saying', 'said', 'make', 'makes', 'making', 'made',
  'take', 'takes', 'taking', 'took', 'go', 'goes', 'going', 'went', 'come', 'comes',
  'coming', 'came', 'see', 'sees', 'seeing', 'saw', 'look', 'looks', 'looking', 'looked',
  'show', 'shows', 'showing', 'showed', 'hear', 'hears', 'hearing', 'heard', 'listen',
  'listens', 'listening', 'listened', 'find', 'finds', 'finding', 'found', 'get', 'gets',
  'getting', 'got', 'give', 'gives', 'giving', 'gave', 'use', 'uses', 'using', 'used',
  'work', 'works', 'working', 'worked', 'call', 'calls', 'calling', 'called', 'try',
  'tries', 'trying', 'tried', 'ask', 'asks', 'asking', 'asked', 'talk', 'talks',
  'talking', 'talked', 'write', 'writes', 'writing', 'wrote', 'read', 'reads',
  'reading', 'study', 'studies', 'studying', 'studied', 'teach', 'teaches', 'teaching',
  'taught', 'understand', 'understands', 'understanding', 'understood', 'remember',
  'remembers', 'remembering', 'remembered', 'forget', 'forgets', 'forgetting', 'forgot',
  'feel', 'feels', 'feeling', 'felt', 'seem', 'seems', 'seeming', 'seemed', 'keep',
  'keeps', 'keeping', 'kept', 'start', 'starts', 'starting', 'started', 'stop', 'stops',
  'stopping', 'stopped', 'begin', 'begins', 'beginning', 'began', 'end', 'ends',
  'ending', 'ended',

  // Basic descriptors/conjunctions that are generic
  'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'first',
  'second', 'third', 'last', 'next', 'good', 'bad', 'easy', 'hard', 'simple', 'difficult',
  'correct', 'wrong', 'right', 'true', 'false', 'short', 'long', 'high', 'low', 'big',
  'small', 'great', 'awesome', 'nice', 'cool', 'super', 'happy', 'sad', 'angry', 'scared',
  'today', 'tomorrow', 'yesterday', 'day', 'night', 'morning', 'afternoon', 'evening',
  'week', 'month', 'year', 'time', 'times', 'people', 'person', 'guy', 'guys', 'friend',
  'friends', 'man', 'woman', 'boy', 'girl', 'baby', 'parent', 'parents', 'mother',
  'father', 'brother', 'sister', 'family', 'home', 'house', 'room', 'place', 'places',
  'thing', 'things', 'something', 'anything', 'nothing', 'everything', 'someone',
  'everyone', 'anyone', 'noone', 'nobody', 'everywhere', 'somewhere', 'anywhere',
  'nowhere', 'always', 'never', 'sometimes', 'often', 'usually', 'seldom', 'rarely',
  'already', 'still', 'yet', 'even', 'also', 'quite', 'pretty', 'almost', 'enough',
  'maybe', 'perhaps', 'probably', 'definitely', 'surely', 'actually', 'indeed', 'especially',
  'percent', 'number', 'numbers', 'word', 'words', 'sentence', 'sentences', 'phrase',
  'phrases', 'question', 'questions', 'answer', 'answers'
]);

const VOCAB_DICTIONARY: Record<string, { question: string; explanation: string }> = {
  "clothes pin": {
    question: "What do you use to hang wet clothes outside to dry?",
    explanation: "A clothes pin is used to clamp wet clothes on a line."
  },
  "bobby pin": {
    question: "What small metal clip keeps loose hair in place?",
    explanation: "A bobby pin is a type of hairpin to hold hair in place."
  },
  "chapstick": {
    question: "What soothing balm protects dry, chapped lips?",
    explanation: "Chapstick is a brand of lip balm used to prevent dry lips."
  },
  "q-tip": {
    question: "What cotton swab is used for cleaning ears or detailed painting?",
    explanation: "A Q-tip is a cotton swab used for hygienic cleaning."
  },
  "dustpan": {
    question: "What flat shovel helps sweep up dirt and dust from the floor?",
    explanation: "A dustpan is a shovel-shaped pan for sweeping up dust."
  },
  "red": {
    question: "What color is a ripe strawberry or a fire truck?",
    explanation: "Strawberries and fire trucks are painted or grow in a bright red color."
  },
  "blue": {
    question: "What color is the sky on a clear sunny day?",
    explanation: "The Earth's sky appears blue due to light scattering in the atmosphere."
  },
  "green": {
    question: "What color is fresh grass and leaves on a tree?",
    explanation: "Chlorophyll in plants gives grass and leaves their green color."
  },
  "yellow": {
    question: "What color is a banana or a ripe lemon?",
    explanation: "Lemons and bananas have a bright yellow skin."
  },
  "orange": {
    question: "What fruit shares its name with its bright color?",
    explanation: "An orange is a citrus fruit that has a bright orange peel."
  },
  "purple": {
    question: "Which color is often associated with royalty and grapes?",
    explanation: "Purple dye was historically rare and worn by kings and queens."
  },
  "pink": {
    question: "What color do you get when you mix red and white paint?",
    explanation: "Mixing a strong red with white softens the tone to pink."
  },
  "lion": {
    question: "Which wild cat has a large mane and is called the King of the Jungle?",
    explanation: "Lions live in grasslands and are famous for their loud roars."
  },
  "cow": {
    question: "Which farm animal makes a 'moo' sound and gives us fresh milk?",
    explanation: "Cows are dairy animals that graze on grass."
  },
  "sheep": {
    question: "Which animal has a thick coat of wool and makes a 'baa' sound?",
    explanation: "Sheep are sheared once a year to make wool for clothing."
  },
  "monkey": {
    question: "Which playful animal loves to swing from trees and eat bananas?",
    explanation: "Monkeys are primates with long tails for balancing in trees."
  },
  "elephant": {
    question: "Which mammal is the largest on land and has a long trunk?",
    explanation: "Elephants use their long trunks to drink water and pick up food."
  },
  "apple": {
    question: "Which sweet, round fruit can be red, green, or yellow?",
    explanation: "Apples grow on trees and make a nice, crunchy snack."
  },
  "balloon": {
    question: "Which colorful toy floats high in the sky when filled with helium?",
    explanation: "Balloons are made of rubber and expand when filled with air or gas."
  },
  "crayon": {
    question: "What colored wax stick do children use for drawing and coloring?",
    explanation: "Crayons are fun drawing tools that come in colorful boxes."
  },
  "pencil": {
    question: "What writing tool contains graphite and has an eraser on top?",
    explanation: "Pencils are perfect for schoolwork because you can erase mistakes."
  },
  "explore": {
    question: "Which word means to travel through a new area to learn about it?",
    explanation: "To explore is to discover and examine new surroundings."
  },
  "discover": {
    question: "What word means to find or learn something for the very first time?",
    explanation: "To discover is to uncover a secret or find a hidden object."
  },
  "curious": {
    question: "What word describes someone who is eager to know or learn new things?",
    explanation: "Curiosity makes us ask questions and learn about our world."
  },
  "brilliant": {
    question: "Which word means exceptionally clever, talented, or bright?",
    explanation: "A brilliant student is very smart and understands things quickly."
  },
  "adventure": {
    question: "What is an exciting, bold, and sometimes risky experience called?",
    explanation: "An adventure takes us on journeys to explore the unknown."
  },
  "create": {
    question: "Which word means to bring something new into existence?",
    explanation: "To create is to build, paint, draw, or make something original."
  },
  "nose": {
    question: "Which organ on our face do we use to breathe and smell things?",
    explanation: "The nose is the organ on our face used for smelling and breathing."
  },
  "mouth": {
    question: "Which body part do we use to eat, talk, and smile?",
    explanation: "The mouth contains our teeth and tongue, helping us speak and eat."
  },
  "eyes": {
    question: "Which parts of our face do we use to see the world around us?",
    explanation: "Our eyes receive light and allow us to see colors and shapes."
  },
  "ears": {
    question: "Which parts of our head do we use to hear sounds and music?",
    explanation: "Our ears detect sound waves and allow us to hear."
  },
  "melting": {
    question: "What is it called when a solid turns into a liquid due to heat?",
    explanation: "Melting is the process of a solid warming up and becoming a liquid."
  },
  "spinning": {
    question: "Which action describes turning or rotating around rapidly in circles?",
    explanation: "Spinning means revolving quickly around a central point."
  },
  "bubbling": {
    question: "What is happening when bubbles form and rise in a liquid?",
    explanation: "Bubbling occurs when air or gas bubbles escape from a liquid."
  },
  "journey": {
    question: "What word describes the act of traveling from one place to another?",
    explanation: "A journey is a long trip or travel experience."
  },
  "inspire": {
    question: "Which word means to fill someone with creative ideas or enthusiasm?",
    explanation: "To inspire is to motivate others to do or create something new."
  },
  "teacher": {
    question: "Who is the person that helps students learn new things in school?",
    explanation: "A teacher guides students and explains lessons in a classroom."
  },
  "student": {
    question: "What do we call a person who is studying or learning in school?",
    explanation: "Students attend school to gain knowledge and learn new skills."
  },
  "school": {
    question: "Where do children go to learn lessons from teachers?",
    explanation: "A school is an educational institution designed for learning."
  },
  "backpack": {
    question: "What bag do we wear on our backs to carry books and school supplies?",
    explanation: "A backpack holds pencils, books, and other tools for learning."
  },
  "ruler": {
    question: "What straight strip of plastic or wood is used to measure length?",
    explanation: "A ruler has marked measurements to help draw straight lines."
  },
  "eraser": {
    question: "What small rubber tool is used to remove pencil marks?",
    explanation: "An eraser rubs off pencil graphite to correct spelling mistakes."
  }
};

const TOPIC_WORDS: Record<string, string[]> = {
  colors: ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown"],
  shapes: ["Circle", "Square", "Triangle", "Rectangle", "Oval", "Heart", "Star", "Diamond"],
  animals: ["Lion", "Tiger", "Elephant", "Monkey", "Giraffe", "Zebra", "Hippo", "Kangaroo"],
  fruits: ["Apple", "Banana", "Orange", "Strawberry", "Grape", "Pineapple", "Mango", "Peach"],
  household: ["Clothes pin", "Bobby pin", "Chapstick", "Q-tip", "Dustpan"],
  school: ["Pencil", "Eraser", "Notebook", "Ruler", "Backpack", "Crayon", "Whiteboard", "Teacher"],
  general: ["Explore", "Discover", "Curious", "Brilliant", "Adventure", "Create", "Inspire", "Journey"]
};

function findTranscriptSentence(word: string, transcript: string): string | null {
  if (!transcript) return null;
  const target = word.toLowerCase().trim();
  const lowerTranscript = transcript.toLowerCase();

  const index = lowerTranscript.indexOf(target);
  if (index === -1) return null;

  let start = index;
  let wordCount = 0;
  let foundStartPunc = false;
  while (start > 0 && wordCount < 12) {
    const char = transcript[start];
    const prevChar = transcript[start - 1];
    if (char === ' ' && (prevChar === '.' || prevChar === '!' || prevChar === '?')) {
      foundStartPunc = true;
      break;
    }
    if (char === ' ') wordCount++;
    start--;
  }

  let end = index + target.length;
  wordCount = 0;
  let foundEndPunc = false;
  while (end < transcript.length && wordCount < 12) {
    const char = transcript[end];
    if (char === '.' || char === '!' || char === '?') {
      foundEndPunc = true;
      end++;
      break;
    }
    if (char === ' ') wordCount++;
    end++;
  }

  // Auto-generated transcripts often lack punctuation. 
  // If we grabbed 24 words with no punctuation, it's a giant run-on sentence.
  // Constrain tightly around the target word instead (max 4 words back, 5 forward).
  if (!foundStartPunc && !foundEndPunc) {
    start = index;
    wordCount = 0;
    while (start > 0 && wordCount < 4) {
      if (transcript[start] === ' ') wordCount++;
      start--;
    }
    end = index + target.length;
    wordCount = 0;
    while (end < transcript.length && wordCount < 5) {
      if (transcript[end] === ' ') wordCount++;
      end++;
    }
  }

  let sentence = transcript.substring(start, end).replace(/>>/g, '').replace(/\s+/g, ' ').trim();

  if (sentence) {
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    const regex = new RegExp(`\\b${target}\\b`, 'gi');
    if (regex.test(sentence)) {
      return sentence.replace(regex, '_______');
    }
    const fallbackRegex = new RegExp(target, 'gi');
    if (fallbackRegex.test(sentence)) {
      return sentence.replace(fallbackRegex, '_______');
    }
  }

  return null;
}

function extractTaughtVocabulary(transcript: string, description: string, title: string): string[] {
  const candidateScores: Record<string, number> = {};

  const cleanDescription = decodeHtmlEntities(description || '');
  const cleanTranscript = decodeHtmlEntities(transcript || '');
  const cleanTitle = decodeHtmlEntities(title || '');

  // Helper to normalize words (trim, singularize, clean capitalization)
  const cleanWord = (w: string) => {
    let word = w.trim().replace(/[^\w\s-]/g, '');
    // If plural (simple check), convert to singular for lookup/display consistency
    if (word.length > 4 && word.toLowerCase().endsWith('s') && !word.toLowerCase().endsWith('ss') && !word.toLowerCase().endsWith('us')) {
      word = word.slice(0, -1);
    }
    return word;
  };

  // Helper to add/score candidates
  const addCandidate = (rawWord: string, baseScore: number) => {
    const cleaned = cleanWord(rawWord);
    if (cleaned.length < 3 || cleaned.length > 20) return;

    const lower = cleaned.toLowerCase();
    if (STOP_WORDS.has(lower)) return;

    // Filter out common YouTube search keywords, channel promotional terms, and concatenated tags
    if (lower.includes('online') || lower.includes('tips') || lower.includes('speak') ||
      lower.includes('learn') || lower.includes('vocab') || lower.includes('short') ||
      lower.includes('subs') || lower.includes('english') || lower.includes('click') ||
      lower.includes('follow') || lower.includes('comment')) {
      return;
    }

    // Capitalize first letter for visual presentation
    const displayVal = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);

    candidateScores[displayVal] = (candidateScores[displayVal] || 0) + baseScore;
  };

  // 1. Parse description for bulleted or numbered lines
  // Many channels list target vocabulary like:
  // - Melting
  // - Spinning
  // or "1. Melting, 2. Spinning"
  const descLines = cleanDescription.split('\n');
  descLines.forEach(line => {
    const trimmed = line.trim();
    // Match bullet points or numbers followed by a word or two-word phrase
    // e.g. "• Melting", "1. Clothes pin", "- Bobby pin", "👉 Chapstick"
    const match = trimmed.match(/^[-\*•\d#👉✅🔹🌟📌]\s*([a-zA-Z\s-]{3,20})$/);
    if (match) {
      addCandidate(match[1], 150);
    }

    // Match patterns like "Vocabulary: melting, spinning, bubbling"
    if (/vocabulary|words|target|focus/i.test(trimmed)) {
      const parts = trimmed.split(/[:\-]/);
      if (parts.length > 1) {
        const listParts = parts[1].split(/[,;\/]/);
        listParts.forEach(part => {
          addCandidate(part, 100);
        });
      }
    }
  });

  // 2. Scan title (low scoring to avoid clickbait instructions overriding actual content)
  const titleWords = cleanTitle.split(/\s+/);
  titleWords.forEach(w => {
    addCandidate(w, 5);
  });

  // 3. Scan transcript for explicit teaching cues and candidates
  const words = cleanTranscript.split(/\s+/).filter(w => {
    return /[a-zA-Z0-9]/.test(w);
  });

  for (let i = 0; i < words.length; i++) {
    const unigram = words[i].replace(/[^\w\s-]/g, '');
    const unigramClean = cleanWord(unigram);
    const unigramLower = unigramClean.toLowerCase();

    // Check if it's ALL CAPS in transcript
    const isAllCaps = unigram === unigram.toUpperCase() && unigram.length >= 4 && !/^\d+$/.test(unigram);
    const casingBonus = isAllCaps ? 35 : 0;

    // Check for preceding teaching cues (e.g. "called", "say", "means", or state indicators like "is/are/gets")
    let cueBonus = 0;
    if (i > 0) {
      const prev1 = words[i - 1].toLowerCase().replace(/[^\w]/g, '');
      if (prev1 === 'called' || prev1 === 'say' || prev1 === 'means' || prev1 === 'representing' || prev1 === 'represents') {
        cueBonus = 30;
      } else if (prev1 === 'is' || prev1 === 'are' || prev1 === 'gets' || prev1 === 'get' || prev1 === 'was' || prev1 === 'were' || words[i - 1].toLowerCase().endsWith("'s") || words[i - 1].toLowerCase().endsWith("’s")) {
        cueBonus = 50;
      }
      if (i > 1) {
        const prev2 = words[i - 2].toLowerCase().replace(/[^\w]/g, '') + ' ' + prev1;
        if (prev2 === 'this is' || prev2 === 'we call' || prev2 === 'its a' || prev2 === 'it is') {
          cueBonus = 25;
        }
      }
    }

    // Look backwards up to 3 positions for a question mark.
    // This catches transcript patterns like "What is this called? >> Baguette."
    for (let k = 1; k <= 3; k++) {
      if (i - k >= 0) {
        const prevRaw = words[i - k];
        if (prevRaw.includes('?')) {
          // Verify that the words between the question mark and current word are empty or just symbols like '>>'
          let isValid = true;
          for (let j = 1; j < k; j++) {
            if (cleanWord(words[i - j]).length > 0) {
              isValid = false;
              break;
            }
          }
          if (isValid) {
            cueBonus += 80; // High bonus for being the direct answer to a question
          }
          break;
        }
      }
    }

    if (unigramClean && !STOP_WORDS.has(unigramLower)) {
      addCandidate(unigramClean, 10 + casingBonus + cueBonus);
    }

    // Try Bigrams (prevent crossing sentence boundaries like period or exclamation)
    if (i < words.length - 1) {
      const firstWordRaw = words[i];
      if (!/[.!?;\-]/.test(firstWordRaw)) {
        const nextWord = words[i + 1].replace(/[^\w\s-]/g, '');
        const bigram = `${unigramClean} ${cleanWord(nextWord)}`;
        const bigramClean = bigram.trim();

        const parts = bigramClean.split(' ');
        if (parts.length === 2 && !STOP_WORDS.has(parts[0].toLowerCase()) && !STOP_WORDS.has(parts[1].toLowerCase())) {
          addCandidate(bigramClean, 20 + cueBonus);
        }
      }
    }
  }

  // Suffix/part of speech bonuses
  Object.keys(candidateScores).forEach(candidate => {
    const lower = candidate.toLowerCase();
    if (lower.endsWith('ing')) {
      candidateScores[candidate] += 20;
    }
    if (lower.endsWith('ly')) {
      candidateScores[candidate] += 15;
    }
    if (lower.endsWith('ed') || lower.endsWith('en') || lower.endsWith('t')) {
      candidateScores[candidate] += 15;
    }
    if (VOCAB_DICTIONARY[lower]) {
      candidateScores[candidate] += 40;
    }
  });

  const sortedCandidates = Object.keys(candidateScores).sort((a, b) => candidateScores[b] - candidateScores[a]);

  const finalList: string[] = [];
  for (const candidate of sortedCandidates) {
    if (candidateScores[candidate] < 5) continue;

    const isSubset = finalList.some(existing => {
      return existing.toLowerCase().includes(candidate.toLowerCase()) && existing.toLowerCase() !== candidate.toLowerCase();
    });
    if (!isSubset) {
      finalList.push(candidate);
    }
    if (finalList.length >= 5) break;
  }

  return finalList;
}

// ---------------------------------------------------------------------------
// Iconify CDN icon maps — all icons served free from https://api.iconify.design
// Format: "collection/icon-name" → becomes the URL suffix
// ---------------------------------------------------------------------------

/** Maps sentence subject nouns → a specific Iconify icon */
const NOUN_ICON_MAP: Record<string, string> = {
  // Clothing
  shirt: "noto/t-shirt",
  shirts: "noto/t-shirt",
  shoe: "noto/running-shoe",
  shoes: "noto/running-shoe",
  boot: "noto/womans-boot",
  boots: "noto/womans-boot",
  sock: "noto/socks",
  socks: "noto/socks",
  // Household
  window: "noto/window",
  windows: "noto/window",
  table: "noto/chair",
  furniture: "noto/chair",
  chair: "noto/chair",
  room: "noto/house",
  spoon: "noto/spoon",
  spoons: "noto/spoon",
  mug: "noto/hot-beverage",
  cup: "noto/hot-beverage",
  cups: "noto/hot-beverage",
  mugs: "noto/hot-beverage",
  nail: "noto/nail-polish",
  nails: "noto/nail-polish",
  // Transport
  cable: "noto/electric-plug",
  cables: "noto/electric-plug",
  wire: "noto/electric-plug",
  cord: "noto/electric-plug",
  car: "noto/automobile",
  cars: "noto/automobile",
  // Tech & Accessories
  battery: "noto/battery",
  batteries: "noto/battery",
  zipper: "noto/zipper-mouth-face",
  zippers: "noto/zipper-mouth-face",
  phone: "noto/mobile-phone",
  // Body
  tooth: "noto/tooth",
  teeth: "noto/tooth",
  hair: "noto/woman",
  nose: "noto/nose",
  ear: "noto/ear",
  eye: "noto/eye",
  hand: "noto/waving-hand",
  foot: "noto/footprints",
  // Food
  apple: "noto/red-apple",
  banana: "noto/banana",
  orange: "noto/tangerine",
  strawberry: "noto/strawberry",
  watermelon: "noto/watermelon",
  cake: "noto/shortcake",
  bread: "noto/bread",
  // Animals
  cat: "noto/cat-face",
  dog: "noto/dog-face",
  bird: "noto/bird",
  fish: "noto/fish",
  lion: "noto/lion",
  tiger: "noto/tiger",
  elephant: "noto/elephant",
  bear: "noto/bear",
  rabbit: "noto/rabbit",
  // School
  book: "noto/books",
  pencil: "noto/pencil",
  backpack: "noto/backpack",
  ruler: "noto/straight-ruler",
  scissors: "noto/scissors",
  // Nature
  flower: "noto/hibiscus",
  tree: "noto/deciduous-tree",
  sun: "noto/sun",
  moon: "noto/full-moon",
  star: "noto/star",
  cloud: "noto/cloud",
  rain: "noto/cloud-with-rain",
  snow: "noto/snowflake",
  fire: "noto/fire",
  water: "noto/droplet",
  ice: "noto/ice",
};

/** Maps adjective/state vocabulary words → a Iconify icon that visualizes the concept */
const STATE_ICON_MAP: Record<string, string> = {
  // Damage states
  dented: "noto/collision",
  cracked: "noto/high-voltage",
  bent: "noto/wavy-dash",
  torn: "noto/scissors",
  broken: "noto/broken-heart",
  chipped: "noto/broken-heart",
  scuffed: "noto/anger-symbol",
  scratched: "noto/anger-symbol",
  // Power/function states
  dead: "noto/skull",
  stuck: "noto/locked",
  frozen: "noto/snowflake",
  // Dirt/cleanliness states
  stained: "noto/splatter",
  muddy: "noto/pile-of-poo",
  dusty: "noto/cloud",
  grimy: "noto/nauseated-face",
  dirty: "noto/pile-of-poo",
  messy: "noto/wastebasket",
  // Temperature/moisture
  wet: "noto/droplet",
  dry: "noto/sun",
  hot: "noto/fire",
  cold: "noto/snowflake",
  // Action states (ing-form words)
  melting: "noto/melting-face",
  spinning: "noto/cyclone",
  bubbling: "noto/soap",
  bouncing: "noto/basketball",
  floating: "noto/sailboat",
  burning: "noto/fire",
  shaking: "noto/shaking-face",
  // Appearance
  shiny: "noto/sparkles",
  smooth: "noto/mirror",
  rough: "noto/wood",
  sharp: "noto/kitchen-knife",
  soft: "noto/teddy-bear",
  hard: "noto/rock",
};

/** Maps standalone vocabulary words → a single best-match Iconify icon */
const WORD_ICON_MAP: Record<string, string> = {
  // Actions (verbs)
  reading: "noto/books",
  writing: "noto/memo",
  drawing: "noto/artist-palette",
  running: "noto/person-running",
  jumping: "noto/person-cartwheeling",
  swimming: "noto/person-swimming",
  sleeping: "noto/sleeping-face",
  eating: "noto/fork-and-knife",
  cooking: "noto/cooking",
  laughing: "noto/rolling-on-the-floor-laughing",
  crying: "noto/crying-face",
  singing: "noto/microphone",
  dancing: "noto/woman-dancing",
  playing: "noto/video-game",
  learning: "noto/graduation-cap",
  teaching: "noto/teacher",
  building: "noto/building-construction",
  cleaning: "noto/broom",
  climbing: "noto/person-climbing",
  driving: "noto/automobile",
  shopping: "noto/shopping-cart",
  // Emotions
  happy: "noto/beaming-face-with-smiling-eyes",
  sad: "noto/crying-face",
  angry: "noto/angry-face",
  scared: "noto/fearful-face",
  surprised: "noto/astonished-face",
  excited: "noto/star-struck",
  tired: "noto/sleepy-face",
  // Colors
  red: "noto/red-circle",
  blue: "noto/blue-circle",
  green: "noto/green-circle",
  yellow: "noto/yellow-circle",
  purple: "noto/purple-circle",
  orange: "noto/orange-circle",
  // Numbers
  one: "noto/keycap-1",
  two: "noto/keycap-2",
  three: "noto/keycap-3",
};

const ICONIFY_BASE = "https://api.iconify.design";

function iconifyUrl(iconPath: string, size = 96): string {
  return `${ICONIFY_BASE}/${iconPath}.svg?height=${size}`;
}

/**
 * Returns one or two Iconify icon URLs to visually represent a vocabulary word.
 * For state adjectives (e.g. "dented"), returns [nounIconUrl, stateIconUrl]
 * so the renderer can show both side-by-side.
 * Returns the result as a pipe-separated string: "iconify:url1|url2" or "iconify:url"
 */
function getVocabularyIcon(word: string, context?: string): string {
  const clean = word.toLowerCase().trim();
  const cleanContext = context ? context.toLowerCase() : "";

  // 1. Check if target word has a direct standalone icon mapping
  const directIcon = WORD_ICON_MAP[clean];

  // 2. Find noun in context (subject of the sentence)
  let nounIcon = "";
  for (const [noun, icon] of Object.entries(NOUN_ICON_MAP)) {
    const regex = new RegExp(`\\b${noun}\\b`, 'i');
    if (regex.test(cleanContext)) {
      nounIcon = icon;
      break;
    }
  }

  // 3. Check if target word is a state/adjective
  let stateIcon = STATE_ICON_MAP[clean] || "";
  if (!stateIcon) {
    for (const [key, icon] of Object.entries(STATE_ICON_MAP)) {
      if (clean.includes(key) || key.includes(clean)) {
        stateIcon = icon;
        break;
      }
    }
  }

  // 4. Best combination strategy:
  if (nounIcon && stateIcon) {
    // State adjective + subject noun → show both icons side by side
    return `iconify:${iconifyUrl(nounIcon)}|${iconifyUrl(stateIcon)}`;
  }
  if (stateIcon) {
    return `iconify:${iconifyUrl(stateIcon)}`;
  }
  if (directIcon) {
    return `iconify:${iconifyUrl(directIcon)}`;
  }
  // Check if the word itself is a noun
  const nounSelf = NOUN_ICON_MAP[clean] || NOUN_ICON_MAP[clean.replace(/s$/, '')];
  if (nounSelf) {
    return `iconify:${iconifyUrl(nounSelf)}`;
  }

  // No icon found — return empty so the icon is hidden.
  // Admin can add one manually via the admin panel.
  return "";
}

const ipaCache: Record<string, string> = {};

async function getPhraseIPA(phrase: string): Promise<string> {
  try {
    const words = phrase.split(/\s+/);
    const ipas = [];
    for (const w of words) {
      const cleanW = w.toLowerCase().replace(/[^a-z-]/g, '');
      if (!cleanW) continue;
      
      if (ipaCache[cleanW] !== undefined) {
        if (ipaCache[cleanW]) ipas.push(ipaCache[cleanW]);
        continue;
      }
      
      try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleanW)}`);
        if (!res.ok) {
          ipaCache[cleanW] = "";
          await new Promise(r => setTimeout(r, 150));
          continue;
        }
        const data = await res.json();
        const ipa = data[0]?.phonetic || data[0]?.phonetics?.find((p: any) => p.text)?.text || "";
        ipaCache[cleanW] = ipa;
        if (ipa) ipas.push(ipa);
      } catch (e) {
        ipaCache[cleanW] = "";
      }
      // Small delay to prevent rate limiting
      await new Promise(r => setTimeout(r, 150));
    }
    return ipas.filter(Boolean).join(' ');
  } catch (e) {
    return "";
  }
}

async function crawlGoogleImages(query: string): Promise<string[]> {
  // First attempt: DuckDuckGo images (very reliable proxy search)
  try {
    const initUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
    const initRes = await fetch(initUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
      }
    });
    if (initRes.ok) {
      const initHtml = await initRes.text();
      const vqdMatch = initHtml.match(/vqd=([#~?=&%0-9a-zA-Z-\._]+)/) || initHtml.match(/vqd\s*=\s*['"]([^'"]+)['"]/);
      if (vqdMatch) {
        const vqd = vqdMatch[1];
        const imagesUrl = `https://duckduckgo.com/i.js?l=us-en&o=json&q=${encodeURIComponent(query)}&vqd=${vqd}&f=,,,`;
        const imagesRes = await fetch(imagesUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'Referer': 'https://duckduckgo.com/'
          }
        });
        if (imagesRes.ok) {
          const data = await imagesRes.json();
          if (data.results && data.results.length > 0) {
            return data.results.map((r: any) => r.image).filter(Boolean);
          }
        }
      }
    }
  } catch (error) {
    console.error("DuckDuckGo image crawl failed:", error);
  }

  // Second/Fallback attempt: Google Images (directly querying and extracting encrypted/thumbnail URLs if possible)
  try {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch&safe=active`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
      }
    });
    if (res.ok) {
      const html = await res.text();
      const gstaticUrls: string[] = [];
      const gstaticRegex = /https:\/\/encrypted-tbn[0-9]\.gstatic\.com\/images\?q=[^"\s'\\&]+/g;
      let match;
      while ((match = gstaticRegex.exec(html)) !== null) {
        gstaticUrls.push(match[0]);
      }
      if (gstaticUrls.length > 0) {
        return gstaticUrls;
      }
    }
  } catch (error) {
    console.error("Google Image fallback crawl failed:", error);
  }

  return [];
}

async function generateQuestionForWord(word: string, choices: string[], transcriptText?: string, imageSource?: string, imageIndex = 0): Promise<any> {
  const cleanWord = word.toLowerCase().trim();
  const dictEntry = VOCAB_DICTIONARY[cleanWord];

  let transcriptSentence = "";
  if (transcriptText) {
    transcriptSentence = findTranscriptSentence(word, transcriptText) || "";
  }

  let imageUrl = "";
  let isMissingCustomIcon = false;

  if (dictEntry) {
    imageUrl = cleanWord === "clothes pin" ? "/clothespin.png" :
      cleanWord === "bobby pin" ? "/bobbypin.png" :
        cleanWord === "chapstick" ? "/chapstick.png" :
          cleanWord === "q-tip" ? "/qtip.png" :
            cleanWord === "dustpan" ? "/dustpan.png" : "";
  }

  // Try Supabase custom icons only if Antigravity is selected
  if (!imageUrl && process.env.NEXT_PUBLIC_SUPABASE_URL && (!imageSource || imageSource === 'antigravity')) {
    const fileName = `${cleanWord.replace(/\s+/g, '_')}.png`;
    const publicUrl = supabase.storage.from(BUCKET_NAME).getPublicUrl(fileName).data.publicUrl;

    try {
      // Check if file actually exists on Supabase
      const headRes = await fetch(publicUrl, { method: 'HEAD' });
      if (headRes.ok && headRes.headers.get('content-type')?.startsWith('image/')) {
        imageUrl = publicUrl;
      } else {
        isMissingCustomIcon = true;
      }
    } catch (e) {
      isMissingCustomIcon = true;
    }
  }

  // Try Google / Pixabay / Pexels for dynamic illustrations or web search
  if (!imageUrl && imageSource !== 'antigravity') {
    let searchQuery = cleanWord;
    const cleanContext = (transcriptSentence || dictEntry?.question || "").toLowerCase();

    // If we have context, try to find a known subject noun to narrow the search (e.g., "stained" -> "stained shirt")
    if (cleanContext) {
      let contextNoun = "";
      for (const noun of Object.keys(NOUN_ICON_MAP)) {
        if (new RegExp(`\\b${noun}\\b`, 'i').test(cleanContext)) {
          contextNoun = noun;
          break;
        }
      }
      // Only append if the target word isn't already the noun
      if (contextNoun && cleanWord !== contextNoun && !cleanWord.includes(contextNoun)) {
        searchQuery = `${cleanWord} ${contextNoun}`;
      }
    }

    // Try Google Images (Crawled) if selected
    if (imageSource === 'google') {
      try {
        const urls = await crawlGoogleImages(searchQuery);
        if (urls && urls.length > 0) {
          const idx = imageIndex % urls.length;
          imageUrl = urls[idx];
        }
      } catch (error) {
        console.error("Google images crawling failed:", error);
      }
    }

    // Try Pexels if selected
    if (!imageUrl && imageSource === 'pexels') {
      try {
        const pexelsRes = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}&per_page=20`, {
          headers: { Authorization: PEXELS_API_KEY }
        });
        if (pexelsRes.ok) {
          const data = await pexelsRes.json();
          if (data.photos && data.photos.length > 0) {
            const idx = imageIndex % data.photos.length;
            imageUrl = data.photos[idx].src.medium;
          }
        }
      } catch (error) {
        console.error("Pexels fetch failed:", error);
      }
    }

    // Try Pixabay if Pexels/Google failed or if Pixabay was selected
    if (!imageUrl) {
      try {
        const pixabayRes = await fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(searchQuery)}&image_type=illustration&per_page=20&safesearch=true`);
        if (pixabayRes.ok) {
          const data = await pixabayRes.json();
          if (data.hits && data.hits.length > 0) {
            const idx = imageIndex % data.hits.length;
            imageUrl = data.hits[idx].webformatURL;
          }
        }
      } catch (error) {
        console.error("Pixabay fetch failed:", error);
      }
    }
  }

  // Fallback to Iconify if no image found
  if (!imageUrl) {
    imageUrl = getVocabularyIcon(word, transcriptSentence || dictEntry?.question);
  }

  const ipa = await getPhraseIPA(cleanWord);
  
  const choiceIpas = [];
  for (const c of choices) {
    choiceIpas.push(await getPhraseIPA(c));
  }

  if (dictEntry) {
    return {
      question: dictEntry.question,
      choices,
      choiceIpas,
      correctAnswer: word,
      explanation: dictEntry.explanation,
      imageUrl,
      ipa,
      isMissingCustomIcon
    };
  }

  let question = `Which word best describes this image?`;
  let explanation = `"${word}" is the correct vocabulary word for this picture.`;

  if (word.endsWith('ing')) {
    question = `Which word describes the action happening in this image?`;
    explanation = `Action verbs ending in "-ing" describe ongoing actions like the one shown here.`;
  } else if (word.endsWith('ly')) {
    question = `Which word describes how the action in this image is being performed?`;
    explanation = `Adverbs ending in "-ly" explain how actions are carried out.`;
  }

  return {
    question,
    choices,
    choiceIpas,
    correctAnswer: word,
    explanation,
    imageUrl,
    ipa,
    isMissingCustomIcon
  };
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const videoUrl = searchParams.get('videoUrl');
    const imageSource = searchParams.get('imageSource') || 'pexels';
    const debug = searchParams.get('debug') === 'true';

    if (!videoUrl) {
      return NextResponse.json({ error: 'Missing videoUrl parameter' }, { status: 400 });
    }

    const videoId = getYouTubeId(videoUrl);
    if (!videoId) {
      return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 });
    }

    // Check curated lookup database first
    if (CURATED_VIDEOS_DATABASE[videoId]) {
      return NextResponse.json(CURATED_VIDEOS_DATABASE[videoId]);
    }

    // Fetch the YouTube page HTML
    const response = await fetch(`https://www.youtube.com/watch?v=${videoId}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch YouTube page: ${response.statusText}`);
    }

    const html = await response.text();

    // 1. Extract Video Title
    let title = '';
    const titleMatch = html.match(/<meta property="og:title" content="([^"]+)">/) || html.match(/<title>([^<]+)<\/title>/);
    if (titleMatch) {
      title = decodeHtmlEntities(titleMatch[1].replace(/ - YouTube$/, '').trim());
    } else {
      title = "YouTube Video Lesson";
    }

    // 2. Extract Channel Name / Handle
    let channel = '';
    const handleMatch = html.match(/canonicalBaseUrl"\s*:\s*"\s*\/@([^"]+)"/) ||
      html.match(/href="(?:https?:)?\/\/(?:www\.)?youtube\.com\/@([^"]+)"/) ||
      html.match(/itemprop="url"\s+href="http:\/\/www\.youtube\.com\/@([^"]+)"/);

    const channelNameMatch = html.match(/<link itemprop="name" content="([^"]+)">/) || html.match(/"author":"([^"]+)"/);

    if (handleMatch) {
      channel = '@' + handleMatch[1].trim();
    } else if (channelNameMatch) {
      channel = '@' + channelNameMatch[1].replace(/\s+/g, '').toUpperCase().trim();
    } else {
      channel = "@YOUTUBE.CREATOR";
    }
    channel = decodeHtmlEntities(channel);

    // 2.5 Extract Video Description
    let description = '';
    const descMatch = html.match(/<meta name="description" content="([^"]+)">/) ||
      html.match(/<meta property="og:description" content="([^"]+)">/) ||
      html.match(/"shortDescription":"([^"]+)"/);
    if (descMatch) {
      description = decodeHtmlEntities(descMatch[1]
        .replace(/\\n/g, '\n')
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'")
        .replace(/\\u0026/g, '&')
        .trim());
    }

    // 3. Extract Transcript using youtube-transcript package with fallback
    let transcriptText = '';
    try {
      const transcript = await YoutubeTranscript.fetchTranscript(videoId);
      transcriptText = transcript.map(t => t.text).join(' ');
    } catch (e) {
      console.error("Failed to fetch transcript with library, falling back to manual parse", e);
      const baseUrlMatch = html.match(/"baseUrl":"(https:\/\/www\.youtube\.com\/api\/timedtext[^"]+)"/);
      if (baseUrlMatch) {
        const captionUrl = baseUrlMatch[1].replace(/\\u0026/g, '&');
        try {
          const capResponse = await fetch(captionUrl);
          if (capResponse.ok) {
            const capXml = await capResponse.text();
            transcriptText = capXml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
          }
        } catch (err) {
          console.error("Failed manual transcript parse", err);
        }
      }
    }

    // 4. Extract Vocabulary Words using the rule-based extractTaughtVocabulary algorithm
    let extractedWords = extractTaughtVocabulary(transcriptText, description, title);

    // Determine Topic to supplement or fallback
    let matchedTopic = 'general';
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('color')) matchedTopic = 'colors';
    else if (lowerTitle.includes('shape')) matchedTopic = 'shapes';
    else if (lowerTitle.includes('animal') || lowerTitle.includes('zoo') || lowerTitle.includes('farm') || lowerTitle.includes('pet')) matchedTopic = 'animals';
    else if (lowerTitle.includes('fruit') || lowerTitle.includes('vegetable') || lowerTitle.includes('food') || lowerTitle.includes('eat')) matchedTopic = 'fruits';
    else if (lowerTitle.includes('school') || lowerTitle.includes('class')) matchedTopic = 'school';
    else if (videoId === 'uR7bSJYQEc0' || lowerTitle.includes('household') || lowerTitle.includes('stickers')) matchedTopic = 'household';

    const topicPool = TOPIC_WORDS[matchedTopic] || TOPIC_WORDS.general;

    // Supplement if we don't have exactly 5 words
    let poolIndex = 0;
    while (extractedWords.length < 5 && poolIndex < topicPool.length) {
      const fallbackWord = topicPool[poolIndex];
      const capitalized = fallbackWord.charAt(0).toUpperCase() + fallbackWord.slice(1);
      if (!extractedWords.includes(capitalized)) {
        extractedWords.push(capitalized);
      }
      poolIndex++;
    }

    if (debug) {
      return NextResponse.json({
        title,
        channel,
        description,
        transcriptText,
        words: extractedWords
      });
    }

    return NextResponse.json({
      title,
      channel,
      description,
      transcriptText,
      words: extractedWords
    });
  } catch (error: any) {
    console.error('Error in extract-video API:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { words, transcriptText, imageSource, title, imageIndex } = body;

    if (!words || !Array.isArray(words)) {
      return NextResponse.json({ error: 'Missing or invalid words array' }, { status: 400 });
    }

    // Determine Topic to supplement or fallback
    let matchedTopic = 'general';
    const lowerTitle = (title || '').toLowerCase();
    if (lowerTitle.includes('color')) matchedTopic = 'colors';
    else if (lowerTitle.includes('shape')) matchedTopic = 'shapes';
    else if (lowerTitle.includes('animal') || lowerTitle.includes('zoo') || lowerTitle.includes('farm') || lowerTitle.includes('pet')) matchedTopic = 'animals';
    else if (lowerTitle.includes('fruit') || lowerTitle.includes('vegetable') || lowerTitle.includes('food') || lowerTitle.includes('eat')) matchedTopic = 'fruits';
    else if (lowerTitle.includes('school') || lowerTitle.includes('class')) matchedTopic = 'school';
    else if (lowerTitle.includes('household') || lowerTitle.includes('stickers')) matchedTopic = 'household';

    const topicPool = TOPIC_WORDS[matchedTopic] || TOPIC_WORDS.general;

    // Generate dynamic matching questions
    const questions = [];
    for (const word of words) {
      const otherExtracted = words.filter(w => w.toLowerCase() !== word.toLowerCase());
      const wrongPool = topicPool.filter(w => w.toLowerCase() !== word.toLowerCase());
      const combinedWrongs = Array.from(new Set([...otherExtracted, ...wrongPool]));
      const selectedWrongs = combinedWrongs.slice(0, 3);

      while (selectedWrongs.length < 3) {
        const extraWord = TOPIC_WORDS.general.find(w => w.toLowerCase() !== word.toLowerCase() && !selectedWrongs.includes(w));
        if (extraWord) {
          selectedWrongs.push(extraWord);
        } else {
          selectedWrongs.push("SpellingWord");
        }
      }

      const choices = [word, ...selectedWrongs].sort(() => Math.random() - 0.5);
      const q = await generateQuestionForWord(word, choices, transcriptText || '', imageSource || 'antigravity', imageIndex || 0);
      questions.push(q);
    }

    const missingWords = questions
      .filter(q => q.isMissingCustomIcon)
      .map(q => q.correctAnswer);

    return NextResponse.json({ questions, missingWords });

  } catch (error: any) {
    console.error('Error in POST /api/extract-video:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
