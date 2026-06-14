export interface VideoQuestQuestion {
  question: string;
  choices: string[];
  choiceIpas?: string[];
  correctAnswer: string;
  explanation: string;
  imageUrl?: string;
}

export interface VideoQuest {
  grade: number;
  videoUrl: string;
  title: string;
  channel: string;
  words: string[];
  questions: VideoQuestQuestion[];
}

const STATIC_VIDEO_QUESTS_DATABASE: { [grade: number]: VideoQuest } = {
  // KINDERGARTEN
  0: {
    grade: 0,
    videoUrl: "https://www.youtube.com/embed/HEV51Qee0M8",
    title: "Animal Sounds and Names for Kids 🐯",
    channel: "@PRES.ENGLISH",
    words: ["Lion", "Monkey", "Elephant", "Giraffe", "Zebra"],
    questions: [
      {
        question: "Which animal has black and white stripes?",
        choices: ["Zebra", "Lion", "Giraffe", "Monkey"],
        correctAnswer: "Zebra",
        explanation: "Zebras have beautiful black and white stripes all over their bodies!"
      },
      {
        question: "Which animal is known as the King of the Jungle?",
        choices: ["Lion", "Elephant", "Zebra", "Giraffe"],
        correctAnswer: "Lion",
        explanation: "The mighty lion is famously known as the King of the Jungle!"
      },
      {
        question: "Which animal has a very long neck to reach tall leaves?",
        choices: ["Giraffe", "Monkey", "Elephant", "Zebra"],
        correctAnswer: "Giraffe",
        explanation: "Giraffes have incredibly long necks to eat leaves from high trees!"
      },
      {
        question: "Which animal loves to swing on trees and eat bananas?",
        choices: ["Monkey", "Lion", "Giraffe", "Elephant"],
        correctAnswer: "Monkey",
        explanation: "Monkeys are active swingers and love eating yummy bananas!"
      },
      {
        question: "Which animal is the largest land mammal with big ears?",
        choices: ["Elephant", "Zebra", "Lion", "Giraffe"],
        correctAnswer: "Elephant",
        explanation: "The elephant is the largest mammal living on land!"
      }
    ]
  },
  // GRADE 1
  1: {
    grade: 1,
    videoUrl: "https://www.youtube.com/embed/uR7bSJYQEc0",
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
        question: "What do you apply to dry or chapped lips?",
        choices: ["Chapstick", "Q-tip", "Clothes pin", "Dustpan"],
        correctAnswer: "Chapstick",
        explanation: "Chapstick (lip balm) is used to moisturize dry lips.",
        imageUrl: "/chapstick.png"
      },
      {
        question: "What are the cotton swabs used for cleaning small areas?",
        choices: ["Q-tip", "Bobby pin", "Chapstick", "Clothes pin"],
        correctAnswer: "Q-tip",
        explanation: "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
        imageUrl: "/qtip.png"
      },
      {
        question: "What tool do you sweep dust and dirt into with a broom?",
        choices: ["Dustpan", "Clothes pin", "Bobby pin", "Chapstick"],
        correctAnswer: "Dustpan",
        explanation: "A dustpan is a flat scoop used to collect dust swept off the floor.",
        imageUrl: "/dustpan.png"
      }
    ]
  },
  // GRADE 2
  2: {
    grade: 2,
    videoUrl: "https://www.youtube.com/embed/u1Q_qW6_Zsk",
    title: "Bathroom Essentials Vocabulary 🧼",
    channel: "@PRES.ENGLISH",
    words: ["Loofah", "Plunger", "Scale", "Toothpaste", "Faucet"],
    questions: [
      {
        question: "What spongy item do you use to scrub your body in the shower?",
        choices: ["Loofah", "Plunger", "Faucet", "Scale"],
        correctAnswer: "Loofah",
        explanation: "A loofah is a textured sponge-like mesh used for washing and exfoliating skin."
      },
      {
        question: "What tool is used to clear blocks in toilets and sinks?",
        choices: ["Plunger", "Scale", "Toothpaste", "Faucet"],
        correctAnswer: "Plunger",
        explanation: "A plunger uses suction to clear blockages in pipes and drains."
      },
      {
        question: "What device do you stand on to check your weight?",
        choices: ["Scale", "Loofah", "Toothpaste", "Plunger"],
        correctAnswer: "Scale",
        explanation: "A scale is used to measure the weight of an object or person."
      },
      {
        question: "What minty paste is squeezed onto a toothbrush?",
        choices: ["Toothpaste", "Loofah", "Faucet", "Plunger"],
        correctAnswer: "Toothpaste",
        explanation: "Toothpaste cleans teeth, freshens breath, and prevents cavities."
      },
      {
        question: "What is the fixture where water flows out of into the sink?",
        choices: ["Faucet", "Scale", "Toothpaste", "Loofah"],
        correctAnswer: "Faucet",
        explanation: "A faucet (or tap) controls the flow of water into a sink or tub."
      }
    ]
  },
  // GRADE 3
  3: {
    grade: 3,
    videoUrl: "https://www.youtube.com/embed/2_H0P9o-Xg4",
    title: "Must-Know Kitchen Utensils 🍳",
    channel: "@PRES.ENGLISH",
    words: ["Whisk", "Spatula", "Ladle", "Colander", "Grater"],
    questions: [
      {
        question: "Which tool has wire loops and is used to beat eggs or cream?",
        choices: ["Whisk", "Spatula", "Ladle", "Colander"],
        correctAnswer: "Whisk",
        explanation: "A whisk blends ingredients smoothly or incorporates air into mixes."
      },
      {
        question: "What flat, flexible tool is used to flip pancakes or burgers?",
        choices: ["Spatula", "Ladle", "Grater", "Colander"],
        correctAnswer: "Spatula",
        explanation: "A spatula is flat and wide, ideal for flipping or lifting food."
      },
      {
        question: "What deep-cupped spoon is used to serve soup or broth?",
        choices: ["Ladle", "Whisk", "Colander", "Grater"],
        correctAnswer: "Ladle",
        explanation: "A ladle has a long handle and a large bowl for scooping liquids."
      },
      {
        question: "What bowl with holes is used to drain water from pasta?",
        choices: ["Colander", "Spatula", "Whisk", "Grater"],
        correctAnswer: "Colander",
        explanation: "A colander lets water flow out through small holes while keeping the food inside."
      },
      {
        question: "What metal tool with sharp slots is used to shred cheese?",
        choices: ["Grater", "Ladle", "Colander", "Spatula"],
        correctAnswer: "Grater",
        explanation: "A grater cuts food into small shreds when rubbed across its metal surface."
      }
    ]
  },
  // GRADE 4
  4: {
    grade: 4,
    videoUrl: "https://www.youtube.com/embed/bN7zKzW2eUo",
    title: "Weather and Atmospheric Elements 🌪️",
    channel: "@PRES.ENGLISH",
    words: ["Breeze", "Blizzard", "Drizzle", "Hurricane", "Tornado"],
    questions: [
      {
        question: "What is a gentle, light wind called?",
        choices: ["Breeze", "Blizzard", "Hurricane", "Tornado"],
        correctAnswer: "Breeze",
        explanation: "A breeze is a soft, refreshing, light wind."
      },
      {
        question: "What is a severe snowstorm with high winds and low visibility called?",
        choices: ["Blizzard", "Drizzle", "Tornado", "Breeze"],
        correctAnswer: "Blizzard",
        explanation: "A blizzard is a freezing, heavy snowstorm with powerful winds."
      },
      {
        question: "What do we call very light rain falling in fine drops?",
        choices: ["Drizzle", "Hurricane", "Breeze", "Blizzard"],
        correctAnswer: "Drizzle",
        explanation: "Drizzle is light, misty rain that falls very softly."
      },
      {
        question: "What is a violent tropical storm with circular winds over the ocean?",
        choices: ["Hurricane", "Tornado", "Drizzle", "Breeze"],
        correctAnswer: "Hurricane",
        explanation: "A hurricane is a massive spinning tropical storm that forms over warm waters."
      },
      {
        question: "What is a fast-spinning column of air touching both a cloud and the ground?",
        choices: ["Tornado", "Blizzard", "Hurricane", "Drizzle"],
        correctAnswer: "Tornado",
        explanation: "A tornado is a destructive rotating funnel of air extending from a thunderstorm."
      }
    ]
  },
  // GRADE 5
  5: {
    grade: 5,
    videoUrl: "https://www.youtube.com/embed/OqgHpyqQzrc",
    title: "Everyday Idioms and Phrases 🗣️",
    channel: "@PRES.ENGLISH",
    words: ["Good luck", "Sick", "Face a difficulty", "Reveal a secret", "Very easy"],
    questions: [
      {
        question: "What does it mean when someone says 'break a leg'?",
        choices: ["Good luck", "Get hurt", "Run fast", "Sleep early"],
        correctAnswer: "Good luck",
        explanation: "In theater and performance, saying 'break a leg' is an idiom wishing good luck!"
      },
      {
        question: "If you are feeling 'under the weather', how do you feel?",
        choices: ["Sick / Unwell", "Happy / Joyful", "Cold", "Super strong"],
        correctAnswer: "Sick / Unwell",
        explanation: "To feel 'under the weather' is an idiom meaning you are feeling sick or slightly unwell."
      },
      {
        question: "What does it mean to 'bite the bullet'?",
        choices: ["Face a difficult situation bravely", "Eat quickly", "Talk loudly", "Shoot a gun"],
        correctAnswer: "Face a difficult situation bravely",
        explanation: "To 'bite the bullet' means to get a tough task over with and face it courageously."
      },
      {
        question: "What is the meaning of 'spill the beans'?",
        choices: ["Reveal a secret", "Drop your food", "Cook dinner", "Clean up"],
        correctAnswer: "Reveal a secret",
        explanation: "To 'spill the beans' is an idiom that means to let out a secret, often accidentally."
      },
      {
        question: "If a task is a 'piece of cake', it is:",
        choices: ["Very easy", "Delicious", "Hard to do", "Expensive"],
        correctAnswer: "Very easy",
        explanation: "If something is a 'piece of cake', it is very simple and easy to complete!"
      }
    ]
  },
  // GRADE 6
  6: {
    grade: 6,
    videoUrl: "https://www.youtube.com/embed/8-W_N411Kag",
    title: "Essential Synonyms for Middle School 📚",
    channel: "@PRES.ENGLISH",
    words: ["Abundant", "Trivial", "Obsolete", "Amicable", "Cluttered"],
    questions: [
      {
        question: "What is a synonym for 'abundant'?",
        choices: ["Plentiful", "Scarce", "Empty", "Dirty"],
        correctAnswer: "Plentiful",
        explanation: "Abundant means existing or available in large quantities; plentiful."
      },
      {
        question: "If something is 'trivial', it is:",
        choices: ["Unimportant", "Crucial", "Heavy", "Old"],
        correctAnswer: "Unimportant",
        explanation: "Trivial refers to details or facts that are of little value or importance."
      },
      {
        question: "What does 'obsolete' mean?",
        choices: ["Outdated / No longer used", "Brand new", "Shining", "Fast"],
        correctAnswer: "Outdated / No longer used",
        explanation: "Obsolete means no longer produced or used; out of date."
      },
      {
        question: "If a conversation was 'amicable', it was:",
        choices: ["Friendly", "Hostile", "Confusing", "Quiet"],
        correctAnswer: "Friendly",
        explanation: "Amicable relationships or negotiations are characterized by friendliness and goodwill."
      },
      {
        question: "What does 'cluttered' mean?",
        choices: ["Messy / Full of things", "Clean", "Open", "Dark"],
        correctAnswer: "Messy / Full of things",
        explanation: "Cluttered describes a space crowded or untidily filled with items."
      }
    ]
  },
  // GRADE 7
  7: {
    grade: 7,
    videoUrl: "https://www.youtube.com/embed/m6g2w_H5Hts",
    title: "Common Phrasal Verbs in English 🗣️",
    channel: "@PRES.ENGLISH",
    words: ["Call off", "Put off", "Look up to", "Run out of", "Carry on"],
    questions: [
      {
        question: "What does it mean to 'call off' a meeting?",
        choices: ["Cancel it", "Delay it", "Start it", "Record it"],
        correctAnswer: "Cancel it",
        explanation: "To 'call off' means to cancel an event or agreement."
      },
      {
        question: "If you 'put off' doing homework, what are you doing?",
        choices: ["Postponing / Procrastinating", "Finishing it", "Losing it", "Sharing it"],
        correctAnswer: "Postponing / Procrastinating",
        explanation: "To 'put off' means to delay or postpone doing something."
      },
      {
        question: "When you 'look up to' someone, you:",
        choices: ["Respect / Admire them", "Stand above them", "Ignore them", "Look at their head"],
        correctAnswer: "Respect / Admire them",
        explanation: "To 'look up to' someone means to respect and admire them as a role model."
      },
      {
        question: "What does 'run out of' sugar mean?",
        choices: ["Have none left", "Buy more", "Drop it", "Find it"],
        correctAnswer: "Have none left",
        explanation: "To 'run out of' something means to finish the supply so that none is left."
      },
      {
        question: "What does it mean to 'carry on'?",
        choices: ["Continue doing something", "Stop immediately", "Lift something", "Leave the room"],
        correctAnswer: "Continue doing something",
        explanation: "To 'carry on' means to continue doing an activity despite difficulties."
      }
    ]
  },
  // GRADE 8
  8: {
    grade: 8,
    videoUrl: "https://www.youtube.com/embed/RkSGsE5T-N4",
    title: "Word Roots and Prefixes 🧬",
    channel: "@PRES.ENGLISH",
    words: ["Chronological", "Benevolent", "Malicious", "Audiovisual", "Autobiography"],
    questions: [
      {
        question: "The root 'chron' means time. What is 'chronological' order?",
        choices: ["Arranged in order of time", "Very fast", "Confusing", "Alphabetical"],
        correctAnswer: "Arranged in order of time",
        explanation: "Chronological means starting with the earliest event and following in time sequence."
      },
      {
        question: "The prefix 'bene' means good. A 'benevolent' person is:",
        choices: ["Kind / Good-hearted", "Angry", "Selfish", "Rich"],
        correctAnswer: "Kind / Good-hearted",
        explanation: "Benevolent means well-meaning and kindly; intending to do good."
      },
      {
        question: "The prefix 'mal' means bad. A 'malicious' act is:",
        choices: ["Harmful / Bad-intentioned", "Helpful", "Funny", "Accidental"],
        correctAnswer: "Harmful / Bad-intentioned",
        explanation: "Malicious means intending or intended to do harm; spiteful."
      },
      {
        question: "The root 'audi' means to hear. 'Audiovisual' involves:",
        choices: ["Both hearing and seeing", "Hearing only", "Writing", "Drawing"],
        correctAnswer: "Both hearing and seeing",
        explanation: "Audiovisual refers to materials or devices that use both sight and sound."
      },
      {
        question: "The prefix 'auto' means self. An 'autobiography' is a book:",
        choices: ["Written about oneself", "About cars", "About history", "By a famous author"],
        correctAnswer: "Written about oneself",
        explanation: "An autobiography is an account of a person's life written by that person."
      }
    ]
  },
  // GRADE 9
  9: {
    grade: 9,
    videoUrl: "https://www.youtube.com/embed/782z161d9D4",
    title: "Advanced Rhetoric and Literary Forms 📜",
    channel: "@PRES.ENGLISH",
    words: ["Hyperbole", "Oxymoron", "Alliteration", "Euphemism", "Irony"],
    questions: [
      {
        question: "What is an extreme exaggeration called?",
        choices: ["Hyperbole", "Oxymoron", "Irony", "Euphemism"],
        correctAnswer: "Hyperbole",
        explanation: "Hyperbole is an exaggerated statement not meant to be taken literally."
      },
      {
        question: "What do you call two opposite words put together, like 'deafening silence'?",
        choices: ["Oxymoron", "Alliteration", "Irony", "Hyperbole"],
        correctAnswer: "Oxymoron",
        explanation: "An oxymoron is a figure of speech in which contradictory terms appear side-by-side."
      },
      {
        question: "What is the repetition of the same starting sound in words?",
        choices: ["Alliteration", "Euphemism", "Oxymoron", "Irony"],
        correctAnswer: "Alliteration",
        explanation: "Alliteration is the occurrence of the same letter or sound at the beginning of adjacent words."
      },
      {
        question: "What is a milder or indirect word used instead of a harsh one?",
        choices: ["Euphemism", "Hyperbole", "Oxymoron", "Alliteration"],
        correctAnswer: "Euphemism",
        explanation: "A euphemism is a mild expression substituted for one considered too harsh or blunt."
      },
      {
        question: "When the opposite of what is expected happens, it is:",
        choices: ["Irony", "Alliteration", "Euphemism", "Hyperbole"],
        correctAnswer: "Irony",
        explanation: "Irony is when the state of affairs or events is the reverse of what was expected."
      }
    ]
  },
  // GRADE 10
  10: {
    grade: 10,
    videoUrl: "https://www.youtube.com/embed/8tH8V5JocX8",
    title: "Essential Rhetorical Figures 🎭",
    channel: "@PRES.ENGLISH",
    words: ["Onomatopoeia", "Personification", "Metaphor", "Simile", "Symbolism"],
    questions: [
      {
        question: "Which device names a sound by imitating it, like 'buzz' or 'hiss'?",
        choices: ["Onomatopoeia", "Metaphor", "Personification", "Simile"],
        correctAnswer: "Onomatopoeia",
        explanation: "Onomatopoeia is the formation of a word from a sound associated with what is named."
      },
      {
        question: "Giving human qualities to non-human things (like 'the wind whispered') is:",
        choices: ["Personification", "Simile", "Symbolism", "Metaphor"],
        correctAnswer: "Personification",
        explanation: "Personification attributes human characteristics to animals, objects, or concepts."
      },
      {
        question: "A direct comparison NOT using 'like' or 'as' (e.g. 'time is a thief') is:",
        choices: ["Metaphor", "Simile", "Personification", "Onomatopoeia"],
        correctAnswer: "Metaphor",
        explanation: "A metaphor directly asserts that one thing is another, without comparison words."
      },
      {
        question: "A comparison using 'like' or 'as' (e.g. 'brave as a lion') is:",
        choices: ["Simile", "Metaphor", "Symbolism", "Personification"],
        correctAnswer: "Simile",
        explanation: "A simile compares two things explicitly using terms such as 'like' or 'as'."
      },
      {
        question: "Using an object or color to represent a deeper idea is:",
        choices: ["Symbolism", "Simile", "Personification", "Metaphor"],
        correctAnswer: "Symbolism",
        explanation: "Symbolism uses symbols to represent ideas or qualities beyond the literal meaning."
      }
    ]
  },
  // GRADE 11
  11: {
    grade: 11,
    videoUrl: "https://www.youtube.com/embed/0QfS0bWqXnE",
    title: "High-Frequency SAT/ACT Words 🎓",
    channel: "@PRES.ENGLISH",
    words: ["Pragmatic", "Ambiguous", "Ephemeral", "Resilient", "Scrutinize"],
    questions: [
      {
        question: "If a solution is 'pragmatic', it is:",
        choices: ["Practical / Sensible", "Ideal / Perfect", "Difficult", "Temporary"],
        correctAnswer: "Practical / Sensible",
        explanation: "Pragmatic means dealing with things sensibly and realistically based on practical matters."
      },
      {
        question: "When a statement or description is 'ambiguous', it is:",
        choices: ["Unclear / Open to multiple meanings", "Extremely clear", "Very funny", "Long"],
        correctAnswer: "Unclear / Open to multiple meanings",
        explanation: "Ambiguous means open to more than one interpretation; having a double meaning."
      },
      {
        question: "What does 'ephemeral' mean?",
        choices: ["Short-lived / Temporary", "Everlasting", "Beautiful", "Heavy"],
        correctAnswer: "Short-lived / Temporary",
        explanation: "Ephemeral means lasting for a very short time."
      },
      {
        question: "A 'resilient' person is someone who:",
        choices: ["Recovers quickly from difficulties", "Gives up easily", "Never talks", "Is very rich"],
        correctAnswer: "Recovers quickly from difficulties",
        explanation: "Resilient means able to withstand or recover quickly from difficult conditions."
      },
      {
        question: "To 'scrutinize' a document means to:",
        choices: ["Examine it very closely", "Throw it away", "Sign it quickly", "Copy it"],
        correctAnswer: "Examine it very closely",
        explanation: "Scrutinize means to examine or inspect closely and thoroughly."
      }
    ]
  },
  // GRADE 12
  12: {
    grade: 12,
    videoUrl: "https://www.youtube.com/embed/G6jWcZ6w3rM",
    title: "Sophisticated Scholarly Terms 🏛️",
    channel: "@PRES.ENGLISH",
    words: ["Quintessential", "Kakotopia", "Anachronistic", "Cacophony", "Obfuscate"],
    questions: [
      {
        question: "What does 'quintessential' mean?",
        choices: ["Representing the perfect example of something", "Very old", "Rare", "Five-sided"],
        correctAnswer: "Representing the perfect example of something",
        explanation: "Quintessential represents the most perfect or typical example of a quality or class."
      },
      {
        question: "What is a 'cacophony'?",
        choices: ["A harsh, discordant mixture of sounds", "A beautiful song", "A silent room", "A megaphone"],
        correctAnswer: "A harsh, discordant mixture of sounds",
        explanation: "Cacophony refers to a harsh, discordant, and unpleasant mixture of sounds."
      },
      {
        question: "To 'obfuscate' the truth means to:",
        choices: ["Make it unclear / confuse it", "Reveal it clearly", "Lie under oath", "Write it down"],
        correctAnswer: "Make it unclear / confuse it",
        explanation: "Obfuscate means to render obscure, unclear, or unintelligible."
      },
      {
        question: "Something that is out of its correct historical time is:",
        choices: ["Anachronistic", "Quintessential", "Cacophony", "Obfuscate"],
        correctAnswer: "Anachronistic",
        explanation: "Anachronistic means belonging or appropriate to a period other than that in which it exists."
      },
      {
        question: "A state or place of extreme misery and corruption (opposite of utopia) is:",
        choices: ["Kakotopia / Dystopia", "Quintessential", "Utopia", "Oasis"],
        correctAnswer: "Kakotopia / Dystopia",
        explanation: "Kakotopia (or dystopia) is a state or society characterized by human misery, oppression, and disease."
      }
    ]
  }
} as unknown as { [key: string]: VideoQuest };

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
                  const match = q.imageUrl.match(/https?:\/\/[^\/]+\.supabase\.co\/storage\/v1\/(object|render\/image)\/public\/[^\/]+\/(.+)$/);
                  if (match) {
                    const filename = match[2];
                    q.imageUrl = `${currentSupabaseUrl}/storage/v1/object/public/${bucketName}/${filename}`;
                  }
                }
                return q;
              });
            }

            // ── Cache version guard ──────────────────────────────────────────
            // Detect stale questions that contain old '>>' caption marks or
            // that blank the wrong word. If found, wipe the whole cached entry
            // so the user gets fresh data from the API on next extraction.
            const hasStaleData = quest?.questions?.some((q: any) =>
              typeof q.question === 'string' && q.question.includes('>>')
            );
            if (hasStaleData) {
              // Remove only this specific stale quest key
              delete parsed[prop as any];
              localStorage.setItem('custom_video_quests', JSON.stringify(parsed));
              return target[prop as any];
            }
            // ────────────────────────────────────────────────────────────────
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

  // Extract 11-character video ID
  let videoId = '';

  // 1. Check for shorts format: /shorts/ID
  const shortsMatch = url.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch) {
    videoId = shortsMatch[1];
  }
  // 2. Check for watch?v=ID or &v=ID
  else {
    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (watchMatch) {
      videoId = watchMatch[1];
    }
    // 3. Check for youtu.be/ID
    else {
      const shareMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
      if (shareMatch) {
        videoId = shareMatch[1];
      }
      // 4. Check for embed/ID
      else {
        const embedMatch = url.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
        if (embedMatch) {
          videoId = embedMatch[1];
        }
      }
    }
  }

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return url;
}

export const getVideoQuest = (grade: number | string, levelId: number, topicId?: string): VideoQuest => {
  const numericGrade = typeof grade === 'string' ? (grade === 'K' ? 0 : parseInt(grade, 10)) : grade;
  const db = VIDEO_QUESTS_DATABASE;
  let quest: VideoQuest;

  // 1. Try topic-scoped key: e.g. 'spelling-3'
  if (topicId) {
    const topicKey = `${topicId}-${levelId}`;
    if (db && db[topicKey]) {
      quest = { ...db[topicKey], grade: numericGrade };
      if (quest.videoUrl) quest.videoUrl = getYouTubeEmbedUrl(quest.videoUrl);
      return quest;
    }
  }

  // 2. Try grade-level key: e.g. '1-3'
  const specificKey = `${numericGrade}-${levelId}`;
  if (db && db[specificKey]) {
    quest = { ...db[specificKey], grade: numericGrade };
  } else if (db && db[numericGrade as any]) {
    quest = { ...db[numericGrade as any], grade: numericGrade };
  } else if (db && db[`${numericGrade}-1`]) {
    quest = { ...db[`${numericGrade}-1`], grade: numericGrade };
  } else {
    // 3. Try any key matching the grade prefix
    const keys = Object.keys(db);
    const gradeKey = keys.find(k => k === String(numericGrade) || k.startsWith(`${numericGrade}-`));
    if (gradeKey && db[gradeKey]) {
      quest = { ...db[gradeKey], grade: numericGrade };
    } else {
      // Ultimate fallback
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

    // Fallback 1: any math questions for this grade
    const gradeList = mathPool.filter(q => q.grade === numericGrade);
    if (gradeList.length > 0) return gradeList;

    // Fallback 2: any math questions at all
    if (mathPool.length > 0) return mathPool;

    // Fallback 3: generic simple math questions
    return [
      {
        id: `fallback-math-${numericGrade}-1`,
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
        id: `fallback-math-${numericGrade}-2`,
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

  // For English: load from the corresponding Level's Video Quest, topic-scoped first
  const videoQuest = getVideoQuest(numericGrade, levelId, topic);
  if (videoQuest && videoQuest.questions && videoQuest.questions.length > 0) {
    return videoQuest.questions.map((q, idx) => {
      let finalImageUrl = q.imageUrl;
      if (!finalImageUrl) {
        const cleanWord = q.correctAnswer.toLowerCase().trim().replace(/\s+/g, '_');
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uzgrmusaxsgirshvkwzx.supabase.co';
        const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || 'vocab-icons';
        finalImageUrl = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${cleanWord}.png`;
      }
      return {
        id: `derived-english-${numericGrade}-${levelId}-${idx}`,
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

  // Fallback to static English pool
  const list = englishPool.filter(q => q.grade === numericGrade && q.topic === topic);
  if (list.length > 0) return list;

  // Fallback 1: Find any English video quest for this grade that has questions
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
        const cleanWord = q.correctAnswer.toLowerCase().trim().replace(/\s+/g, '_');
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uzgrmusaxsgirshvkwzx.supabase.co';
        const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || 'vocab-icons';
        finalImageUrl = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${cleanWord}.png`;
      }
      return {
        id: `derived-fallback-english-${numericGrade}-${idx}`,
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

  // Fallback 2: any English questions for this grade in the pool
  const gradeList = englishPool.filter(q => q.grade === numericGrade);
  if (gradeList.length > 0) return gradeList;

  // Fallback 3: any English questions at all
  if (englishPool.length > 0) return englishPool;

  // Fallback 4: default simple English vocabulary questions
  return [
    {
      id: `fallback-english-${numericGrade}-1`,
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
      id: `fallback-english-${numericGrade}-2`,
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
