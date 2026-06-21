export interface VideoQuestQuestion {
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
  transcriptText?: string;
  questions: VideoQuestQuestion[];
}

const STATIC_VIDEO_QUESTS_DATABASE: { [key: string]: VideoQuest } = {
    "1": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/41cJ0mqWses",
        "title": "School Supplies Song",
        "channel": "@EnglishTreeTV",
        "transcriptText": "[Música] pencil pencil sharpener sharpener eraser eraser ruler ruler Book book scissors scissors chare Cher desk desk pen pen b [Aplausos] [Música] b pencil pencil sharpener sharpener eraser eraser ruler ruler Book Book scissors scissors chair chair desk desk pen he Back [Aplausos] [Música] [Música] back [Música] Oh",
        "words": [
            "Pencil",
            "Sharpener",
            "Eraser",
            "Ruler",
            "Book",
            "Scissors",
            "Chair",
            "Desk",
            "Pen",
            "Backpack"
        ],
        "questions": [
            {
                "question": "What writing tool contains graphite and has an eraser on top?",
                "choices": [
                    "Sharpener",
                    "Pencil sharpener",
                    "Pencil",
                    "Eraser"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil",
                "explanation": "Pencils are perfect for schoolwork because you can erase mistakes.",
                "imageUrl": "https://images.pexels.com/photos/8386693/pexels-photo-8386693.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈpɛnsɪl/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sharpener",
                    "Eraser",
                    "Pencil",
                    "Pencil sharpener"
                ],
                "choiceIpas": [
                    "/ˈʃɑː(ɹ)pənə(ɹ)/",
                    "/ɪˈɹeɪzə/",
                    "/ˈpɛnsɪl/",
                    "/ˈpɛnsɪl/ /ˈʃɑː(ɹ)pənə(ɹ)/"
                ],
                "correctAnswer": "Sharpener",
                "explanation": "\"sharpener\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/237414/pexels-photo-237414.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈʃɑː(ɹ)pənə(ɹ)/",
                "isMissingCustomIcon": true
            },
            {
                "question": "What small rubber tool is used to remove pencil marks?",
                "choices": [
                    "Eraser",
                    "Pencil",
                    "Pencil sharpener",
                    "Sharpener"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "/ˈpɛnsɪl/",
                    ""
                ],
                "correctAnswer": "Eraser",
                "explanation": "An eraser rubs off pencil graphite to correct spelling mistakes.",
                "imageUrl": "https://images.pexels.com/photos/6193755/pexels-photo-6193755.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ɪˈɹeɪzə/",
                "isMissingCustomIcon": true
            },
            {
                "question": "What straight strip of plastic or wood is used to measure length?",
                "choices": [
                    "Pencil",
                    "Sharpener",
                    "Pencil sharpener",
                    "Ruler"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/",
                    "/ˈʃɑː(ɹ)pənə(ɹ)/",
                    "",
                    ""
                ],
                "correctAnswer": "Ruler",
                "explanation": "A ruler has marked measurements to help draw straight lines.",
                "imageUrl": "https://images.pexels.com/photos/29279407/pexels-photo-29279407.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈɹuːlə(ɹ)/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil sharpener",
                    "Pencil",
                    "Sharpener",
                    "Book"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Book",
                "explanation": "\"book\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5905439/pexels-photo-5905439.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/buːk/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil sharpener",
                    "Scissors",
                    "Pencil",
                    "Sharpener"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/",
                    "/ˈsɪzəz/",
                    "",
                    "/ˈʃɑː(ɹ)pənə(ɹ)/"
                ],
                "correctAnswer": "Scissors",
                "explanation": "\"scissors\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/1212183/pexels-photo-1212183.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈsɪzəz/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil sharpener",
                    "Chair",
                    "Sharpener",
                    "Pencil"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/ /ˈʃɑː(ɹ)pənə(ɹ)/",
                    "/t͡ʃɛə(ɹ)/",
                    "",
                    ""
                ],
                "correctAnswer": "Chair",
                "explanation": "\"chair\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/17466659/pexels-photo-17466659.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/t͡ʃɛə(ɹ)/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Desk",
                    "Pencil",
                    "Sharpener",
                    "Pencil sharpener"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Desk",
                "explanation": "\"desk\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://virco.com/wp-content/uploads/desk-280opnm-red70-brn96-gry02_0-1.png",
                "ipa": "/dɛsk/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sharpener",
                    "Pencil sharpener",
                    "Pencil",
                    "Pen"
                ],
                "choiceIpas": [
                    "/ˈʃɑː(ɹ)pənə(ɹ)/",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pen",
                "explanation": "\"pen\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/19364472/pexels-photo-19364472.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/pɛn/",
                "isMissingCustomIcon": true
            },
            {
                "question": "What bag do we wear on our backs to carry books and school supplies?",
                "choices": [
                    "Pencil",
                    "Sharpener",
                    "Pencil sharpener",
                    "Backpack"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Backpack",
                "explanation": "A backpack holds pencils, books, and other tools for learning.",
                "imageUrl": "https://images.pexels.com/photos/4907460/pexels-photo-4907460.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈbæk.pæk/",
                "isMissingCustomIcon": true
            }
        ]
    },
    "2": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/HbvG-nV4DaM",
        "title": "What Is This Called in English? 🇬🇧 | Tea & Coffee #16",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Coffee",
            "Teapot",
            "Moka pot",
            "Teacup",
            "Explore"
        ],
        "topicId": "food-drinks",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coffee",
                    "Teapot",
                    "Teacup",
                    "Moka pot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Coffee",
                "explanation": "\"Coffee\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/20130929/pexels-photo-20130929.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coffee",
                    "Moka pot",
                    "Teacup",
                    "Teapot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Teapot",
                "explanation": "\"Teapot\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/11532730/pexels-photo-11532730.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Moka pot",
                    "Coffee",
                    "Teapot",
                    "Teacup"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Moka pot",
                "explanation": "\"Moka pot\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5996061/pexels-photo-5996061.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coffee",
                    "Teapot",
                    "Teacup",
                    "Moka pot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Teacup",
                "explanation": "\"Teacup\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/35380303/pexels-photo-35380303.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Teapot",
                    "Explore",
                    "Moka pot",
                    "Coffee"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4640946/pexels-photo-4640946.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "3": {
        "grade": 3,
        "videoUrl": "https://www.youtube.com/embed/VETWVYWsyko",
        "title": "What Is This Called in English? 🇬🇧 | Face Parts #8",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Nose",
            "Mouth",
            "Eye",
            "Ear",
            "Explore"
        ],
        "topicId": "health-body",
        "questions": [
            {
                "question": "Which organ on our face do we use to breathe and smell things?",
                "choices": [
                    "Mouth",
                    "Nose",
                    "Ear",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Nose",
                "explanation": "The nose is the organ on our face used for smelling and breathing.",
                "imageUrl": "https://images.pexels.com/photos/8727385/pexels-photo-8727385.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which body part do we use to eat, talk, and smile?",
                "choices": [
                    "Mouth",
                    "Nose",
                    "Ear",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Mouth",
                "explanation": "The mouth contains our teeth and tongue, helping us speak and eat.",
                "imageUrl": "https://images.pexels.com/photos/8727479/pexels-photo-8727479.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Ear",
                    "Nose",
                    "Mouth",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Eye",
                "explanation": "\"Eye\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/2440264/pexels-photo-2440264.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Eye",
                    "Ear",
                    "Mouth",
                    "Nose"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ear",
                "explanation": "\"Ear\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/13308389/pexels-photo-13308389.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Explore",
                    "Nose",
                    "Mouth",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4555538/pexels-photo-4555538.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "4": {
        "grade": 4,
        "videoUrl": "https://www.youtube.com/embed/2_H0P9o-Xg4",
        "title": "Must-Know Kitchen Utensils 🍳",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Whisk",
            "Spatula",
            "Ladle",
            "Colander",
            "Grater"
        ],
        "topicId": "cooking-utensils",
        "questions": [
            {
                "question": "Which tool has wire loops and is used to beat eggs or cream?",
                "choices": [
                    "Whisk",
                    "Spatula",
                    "Ladle",
                    "Colander"
                ],
                "correctAnswer": "Whisk",
                "explanation": "A whisk blends ingredients smoothly or incorporates air into mixes."
            },
            {
                "question": "What flat, flexible tool is used to flip pancakes or burgers?",
                "choices": [
                    "Spatula",
                    "Ladle",
                    "Grater",
                    "Colander"
                ],
                "correctAnswer": "Spatula",
                "explanation": "A spatula is flat and wide, ideal for flipping or lifting food."
            },
            {
                "question": "What deep-cupped spoon is used to serve soup or broth?",
                "choices": [
                    "Ladle",
                    "Whisk",
                    "Colander",
                    "Grater"
                ],
                "correctAnswer": "Ladle",
                "explanation": "A ladle has a long handle and a large bowl for scooping liquids."
            },
            {
                "question": "What bowl with holes is used to drain water from pasta?",
                "choices": [
                    "Colander",
                    "Spatula",
                    "Whisk",
                    "Grater"
                ],
                "correctAnswer": "Colander",
                "explanation": "A colander lets water flow out through small holes while keeping the food inside."
            },
            {
                "question": "What metal tool with sharp slots is used to shred cheese?",
                "choices": [
                    "Grater",
                    "Ladle",
                    "Colander",
                    "Spatula"
                ],
                "correctAnswer": "Grater",
                "explanation": "A grater cuts food into small shreds when rubbed across its metal surface."
            }
        ]
    },
    "5": {
        "grade": 5,
        "videoUrl": "https://www.youtube.com/embed/OqgHpyqQzrc",
        "title": "Everyday Idioms and Phrases 🗣️",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Good luck",
            "Sick",
            "Face a difficulty",
            "Reveal a secret",
            "Very easy"
        ],
        "topicId": "geography-travel",
        "questions": [
            {
                "question": "What does it mean when someone says 'break a leg'?",
                "choices": [
                    "Good luck",
                    "Get hurt",
                    "Run fast",
                    "Sleep early"
                ],
                "correctAnswer": "Good luck",
                "explanation": "In theater and performance, saying 'break a leg' is an idiom wishing good luck!"
            },
            {
                "question": "If you are feeling 'under the weather', how do you feel?",
                "choices": [
                    "Sick / Unwell",
                    "Happy / Joyful",
                    "Cold",
                    "Super strong"
                ],
                "correctAnswer": "Sick / Unwell",
                "explanation": "To feel 'under the weather' is an idiom meaning you are feeling sick or slightly unwell."
            },
            {
                "question": "What does it mean to 'bite the bullet'?",
                "choices": [
                    "Face a difficult situation bravely",
                    "Eat quickly",
                    "Talk loudly",
                    "Shoot a gun"
                ],
                "correctAnswer": "Face a difficult situation bravely",
                "explanation": "To 'bite the bullet' means to get a tough task over with and face it courageously."
            },
            {
                "question": "What is the meaning of 'spill the beans'?",
                "choices": [
                    "Reveal a secret",
                    "Drop your food",
                    "Cook dinner",
                    "Clean up"
                ],
                "correctAnswer": "Reveal a secret",
                "explanation": "To 'spill the beans' is an idiom that means to let out a secret, often accidentally."
            },
            {
                "question": "If a task is a 'piece of cake', it is:",
                "choices": [
                    "Very easy",
                    "Delicious",
                    "Hard to do",
                    "Expensive"
                ],
                "correctAnswer": "Very easy",
                "explanation": "If something is a 'piece of cake', it is very simple and easy to complete!"
            }
        ]
    },
    "6": {
        "grade": 6,
        "videoUrl": "https://www.youtube.com/embed/m6g2w_H5Hts",
        "title": "Common Phrasal Verbs in English 🗣️",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Call off",
            "Put off",
            "Look up to",
            "Run out of",
            "Carry on"
        ],
        "topicId": "science-lab",
        "questions": [
            {
                "question": "What does it mean to 'call off' a meeting?",
                "choices": [
                    "Cancel it",
                    "Delay it",
                    "Start it",
                    "Record it"
                ],
                "correctAnswer": "Cancel it",
                "explanation": "To 'call off' means to cancel an event or agreement."
            },
            {
                "question": "If you 'put off' doing homework, what are you doing?",
                "choices": [
                    "Postponing / Procrastinating",
                    "Finishing it",
                    "Losing it",
                    "Sharing it"
                ],
                "correctAnswer": "Postponing / Procrastinating",
                "explanation": "To 'put off' means to delay or postpone doing something."
            },
            {
                "question": "When you 'look up to' someone, you:",
                "choices": [
                    "Respect / Admire them",
                    "Stand above them",
                    "Ignore them",
                    "Look at their head"
                ],
                "correctAnswer": "Respect / Admire them",
                "explanation": "To 'look up to' someone means to respect and admire them as a role model."
            },
            {
                "question": "What does 'run out of' sugar mean?",
                "choices": [
                    "Have none left",
                    "Buy more",
                    "Drop it",
                    "Find it"
                ],
                "correctAnswer": "Have none left",
                "explanation": "To 'run out of' something means to finish the supply so that none is left."
            },
            {
                "question": "What does it mean to 'carry on'?",
                "choices": [
                    "Continue doing something",
                    "Stop immediately",
                    "Lift something",
                    "Leave the room"
                ],
                "correctAnswer": "Continue doing something",
                "explanation": "To 'carry on' means to continue doing an activity despite difficulties."
            }
        ]
    },
    "7": {
        "grade": 7,
        "videoUrl": "https://www.youtube.com/embed/8-W_N411Kag",
        "title": "Essential Synonyms for Middle School 📚",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Abundant",
            "Trivial",
            "Obsolete",
            "Amicable",
            "Cluttered"
        ],
        "topicId": "literature-genres",
        "questions": [
            {
                "question": "What is a synonym for 'abundant'?",
                "choices": [
                    "Plentiful",
                    "Scarce",
                    "Empty",
                    "Dirty"
                ],
                "correctAnswer": "Plentiful",
                "explanation": "Abundant means existing or available in large quantities; plentiful."
            },
            {
                "question": "If something is 'trivial', it is:",
                "choices": [
                    "Unimportant",
                    "Crucial",
                    "Heavy",
                    "Old"
                ],
                "correctAnswer": "Unimportant",
                "explanation": "Trivial refers to details or facts that are of little value or importance."
            },
            {
                "question": "What does 'obsolete' mean?",
                "choices": [
                    "Outdated / No longer used",
                    "Brand new",
                    "Shining",
                    "Fast"
                ],
                "correctAnswer": "Outdated / No longer used",
                "explanation": "Obsolete means no longer produced or used; out of date."
            },
            {
                "question": "If a conversation was 'amicable', it was:",
                "choices": [
                    "Friendly",
                    "Hostile",
                    "Confusing",
                    "Quiet"
                ],
                "correctAnswer": "Friendly",
                "explanation": "Amicable relationships or negotiations are characterized by friendliness and goodwill."
            },
            {
                "question": "What does 'cluttered' mean?",
                "choices": [
                    "Messy / Full of things",
                    "Clean",
                    "Open",
                    "Dark"
                ],
                "correctAnswer": "Messy / Full of things",
                "explanation": "Cluttered describes a space crowded or untidily filled with items."
            }
        ]
    },
    "9": {
        "grade": 9,
        "videoUrl": "https://www.youtube.com/embed/782z161d9D4",
        "title": "Advanced Rhetoric and Literary Forms 📜",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Hyperbole",
            "Oxymoron",
            "Alliteration",
            "Euphemism",
            "Irony"
        ],
        "topicId": "sat-verbs",
        "questions": [
            {
                "question": "What is an extreme exaggeration called?",
                "choices": [
                    "Hyperbole",
                    "Oxymoron",
                    "Irony",
                    "Euphemism"
                ],
                "correctAnswer": "Hyperbole",
                "explanation": "Hyperbole is an exaggerated statement not meant to be taken literally."
            },
            {
                "question": "What do you call two opposite words put together, like 'deafening silence'?",
                "choices": [
                    "Oxymoron",
                    "Alliteration",
                    "Irony",
                    "Hyperbole"
                ],
                "correctAnswer": "Oxymoron",
                "explanation": "An oxymoron is a figure of speech in which contradictory terms appear side-by-side."
            },
            {
                "question": "What is the repetition of the same starting sound in words?",
                "choices": [
                    "Alliteration",
                    "Euphemism",
                    "Oxymoron",
                    "Irony"
                ],
                "correctAnswer": "Alliteration",
                "explanation": "Alliteration is the occurrence of the same letter or sound at the beginning of adjacent words."
            },
            {
                "question": "What is a milder or indirect word used instead of a harsh one?",
                "choices": [
                    "Euphemism",
                    "Hyperbole",
                    "Oxymoron",
                    "Alliteration"
                ],
                "correctAnswer": "Euphemism",
                "explanation": "A euphemism is a mild expression substituted for one considered too harsh or blunt."
            },
            {
                "question": "When the opposite of what is expected happens, it is:",
                "choices": [
                    "Irony",
                    "Alliteration",
                    "Euphemism",
                    "Hyperbole"
                ],
                "correctAnswer": "Irony",
                "explanation": "Irony is when the state of affairs or events is the reverse of what was expected."
            }
        ]
    },
    "11": {
        "grade": 11,
        "videoUrl": "https://www.youtube.com/embed/0QfS0bWqXnE",
        "title": "High-Frequency SAT/ACT Words 🎓",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Pragmatic",
            "Ambiguous",
            "Ephemeral",
            "Resilient",
            "Scrutinize"
        ],
        "topicId": "economics-finance",
        "questions": [
            {
                "question": "If a solution is 'pragmatic', it is:",
                "choices": [
                    "Practical / Sensible",
                    "Ideal / Perfect",
                    "Difficult",
                    "Temporary"
                ],
                "correctAnswer": "Practical / Sensible",
                "explanation": "Pragmatic means dealing with things sensibly and realistically based on practical matters."
            },
            {
                "question": "When a statement or description is 'ambiguous', it is:",
                "choices": [
                    "Unclear / Open to multiple meanings",
                    "Extremely clear",
                    "Very funny",
                    "Long"
                ],
                "correctAnswer": "Unclear / Open to multiple meanings",
                "explanation": "Ambiguous means open to more than one interpretation; having a double meaning."
            },
            {
                "question": "What does 'ephemeral' mean?",
                "choices": [
                    "Short-lived / Temporary",
                    "Everlasting",
                    "Beautiful",
                    "Heavy"
                ],
                "correctAnswer": "Short-lived / Temporary",
                "explanation": "Ephemeral means lasting for a very short time."
            },
            {
                "question": "A 'resilient' person is someone who:",
                "choices": [
                    "Recovers quickly from difficulties",
                    "Gives up easily",
                    "Never talks",
                    "Is very rich"
                ],
                "correctAnswer": "Recovers quickly from difficulties",
                "explanation": "Resilient means able to withstand or recover quickly from difficult conditions."
            },
            {
                "question": "To 'scrutinize' a document means to:",
                "choices": [
                    "Examine it very closely",
                    "Throw it away",
                    "Sign it quickly",
                    "Copy it"
                ],
                "correctAnswer": "Examine it very closely",
                "explanation": "Scrutinize means to examine or inspect closely and thoroughly."
            }
        ]
    },
    "12": {
        "grade": 12,
        "videoUrl": "https://www.youtube.com/embed/RkSGsE5T-N4",
        "title": "Word Roots and Prefixes 🧬",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Chronological",
            "Benevolent",
            "Malicious",
            "Audiovisual",
            "Autobiography"
        ],
        "topicId": "abstract-concepts",
        "questions": [
            {
                "question": "The root 'chron' means time. What is 'chronological' order?",
                "choices": [
                    "Arranged in order of time",
                    "Very fast",
                    "Confusing",
                    "Alphabetical"
                ],
                "correctAnswer": "Arranged in order of time",
                "explanation": "Chronological means starting with the earliest event and following in time sequence."
            },
            {
                "question": "The prefix 'bene' means good. A 'benevolent' person is:",
                "choices": [
                    "Kind / Good-hearted",
                    "Angry",
                    "Selfish",
                    "Rich"
                ],
                "correctAnswer": "Kind / Good-hearted",
                "explanation": "Benevolent means well-meaning and kindly; intending to do good."
            },
            {
                "question": "The prefix 'mal' means bad. A 'malicious' act is:",
                "choices": [
                    "Harmful / Bad-intentioned",
                    "Helpful",
                    "Funny",
                    "Accidental"
                ],
                "correctAnswer": "Harmful / Bad-intentioned",
                "explanation": "Malicious means intending or intended to do harm; spiteful."
            },
            {
                "question": "The root 'audi' means to hear. 'Audiovisual' involves:",
                "choices": [
                    "Both hearing and seeing",
                    "Hearing only",
                    "Writing",
                    "Drawing"
                ],
                "correctAnswer": "Both hearing and seeing",
                "explanation": "Audiovisual refers to materials or devices that use both sight and sound."
            },
            {
                "question": "The prefix 'auto' means self. An 'autobiography' is a book:",
                "choices": [
                    "Written about oneself",
                    "About cars",
                    "About history",
                    "By a famous author"
                ],
                "correctAnswer": "Written about oneself",
                "explanation": "An autobiography is an account of a person's life written by that person."
            }
        ]
    },
    "1-10": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/JlNqWAZlcsc",
        "title": "Learn School Supplies | Talking Flashcards",
        "channel": "@Mapleleaflearning",
        "transcriptText": "talking flash cards school are you ready here we go a pencil a pencil an eraser [Music] an eraser a book [Music] a book a ruler a ruler a pen a pen [Music] a desk [Music] a desk a pencil case [Music] a pencil case a clock [Music] a clock a chair a chair a crayon a crayon a stapler a stapler a notebook a notebook [Music] a sharpener a sharpener a backpack a backpack glue [Music] glue scissors scissors you can get these flashcards and many many more at www.mapleleaflearning.com [Music] please come by and check out our site we have games flash cards songs and many many more activities to make your classroom more fun anyways hope to see you soon where's the stapler where is it where is it on the desk on the desk where's the broom where is it where is it in the box in the box where's the crayon where is it where is it under the chair under the chair on in and under yeah where's the pencil where is it where is it on the book on the book where's the glue where is it where is it in the basket in the basket where's the sharpener where is it where is it under the desk under the desk on in and under great the paintbrush where is it where is it on the chair on the chair where's the ruler where is it where is it in the bag in the bag where's the pen where is it where is it under the book under the book on in and under see you next time",
        "words": [
            "Http",
            "Pencil",
            "Music",
            "Under",
            "Ruler"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil",
                    "Http",
                    "Music",
                    "Under"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Http",
                "explanation": "\"Http\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/270488/pexels-photo-270488.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What writing tool contains graphite and has an eraser on top?",
                "choices": [
                    "Music",
                    "Under",
                    "Pencil",
                    "Http"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil",
                "explanation": "Pencils are perfect for schoolwork because you can erase mistakes.",
                "imageUrl": "https://images.pexels.com/photos/6952393/pexels-photo-6952393.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Under",
                    "Music",
                    "Http",
                    "Pencil"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Music",
                "explanation": "\"Music\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/1718380/pexels-photo-1718380.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Http",
                    "Pencil",
                    "Under",
                    "Music"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Under",
                "explanation": "\"Under\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7320698/pexels-photo-7320698.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What straight strip of plastic or wood is used to measure length?",
                "choices": [
                    "Music",
                    "Ruler",
                    "Http",
                    "Pencil"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ruler",
                "explanation": "A ruler has marked measurements to help draw straight lines.",
                "imageUrl": "https://images.pexels.com/photos/35242187/pexels-photo-35242187.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-11": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/Xc-3EYhpBlI",
        "title": "What Is This Called in English? 🇬🇧 | Bedroom Items #12",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Blanket",
            "Bed",
            "Pillow",
            "Cushion",
            "Explore"
        ],
        "topicId": "home-furniture",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bed",
                    "Cushion",
                    "Blanket",
                    "Pillow"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Blanket",
                "explanation": "\"Blanket\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16497537/pexels-photo-16497537.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Cushion",
                    "Pillow",
                    "Bed",
                    "Blanket"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Bed",
                "explanation": "\"Bed\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/27671434/pexels-photo-27671434.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bed",
                    "Cushion",
                    "Pillow",
                    "Blanket"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pillow",
                "explanation": "\"Pillow\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/3999070/pexels-photo-3999070.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Cushion",
                    "Pillow",
                    "Blanket",
                    "Bed"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Cushion",
                "explanation": "\"Cushion\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6917038/pexels-photo-6917038.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Blanket",
                    "Explore",
                    "Pillow",
                    "Bed"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4992763/pexels-photo-4992763.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-12": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/-EvRsX91qLU",
        "title": "What Is This Called in English? 🇬🇧 | Bathroom Items #14",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Toilet",
            "Toothbrush",
            "Toothpaste",
            "Towel",
            "Explore"
        ],
        "topicId": "hygiene-grooming",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Toothbrush",
                    "Toilet",
                    "Towel",
                    "Toothpaste"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Toilet",
                "explanation": "\"Toilet\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/4239072/pexels-photo-4239072.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Towel",
                    "Toothpaste",
                    "Toothbrush",
                    "Toilet"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Toothbrush",
                "explanation": "\"Toothbrush\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6763784/pexels-photo-6763784.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Toothpaste",
                    "Towel",
                    "Toilet",
                    "Toothbrush"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Toothpaste",
                "explanation": "\"Toothpaste\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/27176881/pexels-photo-27176881.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Toothpaste",
                    "Toothbrush",
                    "Toilet",
                    "Towel"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Towel",
                "explanation": "\"Towel\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/2672634/pexels-photo-2672634.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Toilet",
                    "Toothpaste",
                    "Toothbrush",
                    "Explore"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4640947/pexels-photo-4640947.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-13": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/7tbyXd0kxKc",
        "title": "What Is This Called in English? 🇬🇧 | Daily Objects #9",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Nail",
            "Razor",
            "Sponge",
            "Towel",
            "Explore"
        ],
        "topicId": "hygiene-grooming",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sponge",
                    "Razor",
                    "Nail",
                    "Towel"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Nail",
                "explanation": "\"Nail\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/34835304/pexels-photo-34835304.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Razor",
                    "Towel",
                    "Nail",
                    "Sponge"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Razor",
                "explanation": "\"Razor\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Towel",
                    "Nail",
                    "Sponge",
                    "Razor"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Sponge",
                "explanation": "\"Sponge\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9774860/pexels-photo-9774860.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Towel",
                    "Nail",
                    "Razor",
                    "Sponge"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Towel",
                "explanation": "\"Towel\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/4210314/pexels-photo-4210314.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Razor",
                    "Sponge",
                    "Nail",
                    "Explore"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/18569408/pexels-photo-18569408.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-14": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/u1Q_qW6_Zsk",
        "title": "Bathroom Essentials Vocabulary 🧼",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Loofah",
            "Plunger",
            "Scale",
            "Toothpaste",
            "Faucet"
        ],
        "topicId": "hygiene-grooming",
        "questions": [
            {
                "question": "What spongy item do you use to scrub your body in the shower?",
                "choices": [
                    "Loofah",
                    "Plunger",
                    "Faucet",
                    "Scale"
                ],
                "correctAnswer": "Loofah",
                "explanation": "A loofah is a textured sponge-like mesh used for washing and exfoliating skin."
            },
            {
                "question": "What tool is used to clear blocks in toilets and sinks?",
                "choices": [
                    "Plunger",
                    "Scale",
                    "Toothpaste",
                    "Faucet"
                ],
                "correctAnswer": "Plunger",
                "explanation": "A plunger uses suction to clear blockages in pipes and drains."
            },
            {
                "question": "What device do you stand on to check your weight?",
                "choices": [
                    "Scale",
                    "Loofah",
                    "Toothpaste",
                    "Plunger"
                ],
                "correctAnswer": "Scale",
                "explanation": "A scale is used to measure the weight of an object or person."
            },
            {
                "question": "What minty paste is squeezed onto a toothbrush?",
                "choices": [
                    "Toothpaste",
                    "Loofah",
                    "Faucet",
                    "Plunger"
                ],
                "correctAnswer": "Toothpaste",
                "explanation": "Toothpaste cleans teeth, freshens breath, and prevents cavities."
            },
            {
                "question": "What is the fixture where water flows out of into the sink?",
                "choices": [
                    "Faucet",
                    "Scale",
                    "Toothpaste",
                    "Loofah"
                ],
                "correctAnswer": "Faucet",
                "explanation": "A faucet (or tap) controls the flow of water into a sink or tub."
            }
        ]
    },
    "1-15": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/9b0l4iRZNXg",
        "title": "What Is This Called in English? 🇬🇧 | Park & City Words #19",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Swing",
            "Slide",
            "Seesaw",
            "Fountain",
            "Explore"
        ],
        "topicId": "playground-park",
        "questions": [
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Fountain",
                    "Slide",
                    "Swing",
                    "Seesaw"
                ],
                "choiceIpas": [
                    "[ˈfaʊn.ʔn̩]",
                    "/slaɪd/",
                    "/ˈswɪŋ/",
                    "/ˈsiːsɔː/"
                ],
                "correctAnswer": "Swing",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/30697294/pexels-photo-30697294.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈswɪŋ/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Fountain",
                    "Slide",
                    "Swing",
                    "Seesaw"
                ],
                "choiceIpas": [
                    "[ˈfaʊn.ʔn̩]",
                    "/slaɪd/",
                    "/ˈswɪŋ/",
                    "/ˈsiːsɔː/"
                ],
                "correctAnswer": "Slide",
                "explanation": "\"Slide\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7943718/pexels-photo-7943718.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/slaɪd/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Slide",
                    "Fountain",
                    "Seesaw",
                    "Swing"
                ],
                "choiceIpas": [
                    "/slaɪd/",
                    "[ˈfaʊn.ʔn̩]",
                    "/ˈsiːsɔː/",
                    "/ˈswɪŋ/"
                ],
                "correctAnswer": "Seesaw",
                "explanation": "\"Seesaw\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/17153903/pexels-photo-17153903.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈsiːsɔː/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Seesaw",
                    "Fountain",
                    "Swing",
                    "Slide"
                ],
                "choiceIpas": [
                    "/ˈsiːsɔː/",
                    "[ˈfaʊn.ʔn̩]",
                    "/ˈswɪŋ/",
                    "/slaɪd/"
                ],
                "correctAnswer": "Fountain",
                "explanation": "\"Fountain\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/35279443/pexels-photo-35279443.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "[ˈfaʊn.ʔn̩]",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Swing",
                    "Seesaw",
                    "Explore",
                    "Slide"
                ],
                "choiceIpas": [
                    "/ˈswɪŋ/",
                    "/ˈsiːsɔː/",
                    "/ɪkˈsplɔː/",
                    "/slaɪd/"
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/28811726/pexels-photo-28811726.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ɪkˈsplɔː/",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-16": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/-UP5ZcFqv_Y",
        "title": "What Is This Called in English? 🇬🇧 | Art & Colors #11",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Paint",
            "Portrait",
            "Canva",
            "Museum",
            "Explore"
        ],
        "topicId": "school-supplies",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Museum",
                    "Paint",
                    "Portrait",
                    "Canva"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Paint",
                "explanation": "\"Paint\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5641684/pexels-photo-5641684.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Museum",
                    "Paint",
                    "Canva",
                    "Portrait"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Portrait",
                "explanation": "\"Portrait\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/30968488/pexels-photo-30968488.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Canva",
                    "Museum",
                    "Paint",
                    "Portrait"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Canva",
                "explanation": "\"Canva\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/34086221/pexels-photo-34086221.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Paint",
                    "Portrait",
                    "Museum",
                    "Canva"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Museum",
                "explanation": "\"Museum\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16287997/pexels-photo-16287997.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Portrait",
                    "Explore",
                    "Paint",
                    "Canva"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/2330507/pexels-photo-2330507.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-3": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/g7kK989HiRQ",
        "title": "School Supplies | Talking Flashcards",
        "channel": "@Mapleleaflearning",
        "transcriptText": "[Music] Maple Leaf learning talking flashcards school book book book chair chair chair desk desk desk pencil case pencil case pencil case pen pen pen ruler ruler ruler pencil pencil pencil eraser eraser eraser clock clock clock crayon crayon crayon scissors scissors scissors sharpener sharpener sharpener stapler stapler stapler teacher teacher hey sit down and be quiet it's time to study I'm sorry Maple Leaf learning talking flashcards see you next time",
        "words": [
            "Pencil",
            "Ruler",
            "Eraser",
            "Crayon",
            "Pencil case"
        ],
        "questions": [
            {
                "question": "What writing tool contains graphite and has an eraser on top?",
                "choices": [
                    "Eraser",
                    "Ruler",
                    "Pencil",
                    "Crayon"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil",
                "explanation": "Pencils are perfect for schoolwork because you can erase mistakes.",
                "imageUrl": "https://images.pexels.com/photos/12969416/pexels-photo-12969416.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What straight strip of plastic or wood is used to measure length?",
                "choices": [
                    "Pencil",
                    "Crayon",
                    "Ruler",
                    "Eraser"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ruler",
                "explanation": "A ruler has marked measurements to help draw straight lines.",
                "imageUrl": "https://images.pexels.com/photos/6123262/pexels-photo-6123262.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What small rubber tool is used to remove pencil marks?",
                "choices": [
                    "Eraser",
                    "Ruler",
                    "Pencil",
                    "Crayon"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Eraser",
                "explanation": "An eraser rubs off pencil graphite to correct spelling mistakes.",
                "imageUrl": "https://images.pexels.com/photos/30663291/pexels-photo-30663291.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What colored wax stick do children use for drawing and coloring?",
                "choices": [
                    "Eraser",
                    "Ruler",
                    "Pencil",
                    "Crayon"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Crayon",
                "explanation": "Crayons are fun drawing tools that come in colorful boxes.",
                "imageUrl": "https://images.pexels.com/photos/28656153/pexels-photo-28656153.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Ruler",
                    "Pencil",
                    "Eraser",
                    "Pencil case"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil case",
                "explanation": "\"Pencil case\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/8580767/pexels-photo-8580767.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-4": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/6AgDtngHP6c",
        "title": "Kids vocabulary - School Supplies - Learn English for kids - English educational video #shorts",
        "channel": "@EnglishSingsing",
        "transcriptText": "foreign school supplies what's in your backpack it's my book I can read book book [Applause] it's my notebook I can write on it notebook [Music] notebook [Applause] these are my scissors I can cut the paper [Applause] [Music] scissors [Music] scissors it's my glue I can stick them with it glue [Music]",
        "words": [
            "Wwwyoutubecom",
            "User",
            "Backpack",
            "Music",
            "Music scissor"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Wwwyoutubecom",
                    "Backpack",
                    "Music",
                    "User"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Wwwyoutubecom",
                "explanation": "\"Wwwyoutubecom\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/3227986/pexels-photo-3227986.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "User",
                    "Backpack",
                    "Wwwyoutubecom",
                    "Music"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "User",
                "explanation": "\"User\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/33989917/pexels-photo-33989917.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What bag do we wear on our backs to carry books and school supplies?",
                "choices": [
                    "Wwwyoutubecom",
                    "Backpack",
                    "User",
                    "Music"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Backpack",
                "explanation": "A backpack holds pencils, books, and other tools for learning.",
                "imageUrl": "https://images.pexels.com/photos/16372801/pexels-photo-16372801.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Backpack",
                    "User",
                    "Wwwyoutubecom",
                    "Music"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Music",
                "explanation": "\"Music\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9418650/pexels-photo-9418650.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Backpack",
                    "User",
                    "Wwwyoutubecom",
                    "Music scissor"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Music scissor",
                "explanation": "\"Music scissor\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/11650293/pexels-photo-11650293.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-5": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/AYYzO36M0So",
        "title": "Easy Words 5 (Stationery Song) - Learn English vocabulary for kids - English song for Toddlers",
        "channel": "@EnglishSingsing",
        "transcriptText": "[Music] [Applause] pencil pencil pencil book book book ruler ruler ruler eraser eraser eraser [Music]",
        "words": [
            "Wwwyoutubecom",
            "User",
            "Pencil",
            "Ruler",
            "Eraser"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Ruler",
                    "User",
                    "Pencil",
                    "Wwwyoutubecom"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Wwwyoutubecom",
                "explanation": "\"Wwwyoutubecom\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/27680443/pexels-photo-27680443.png?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil",
                    "Ruler",
                    "User",
                    "Wwwyoutubecom"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "User",
                "explanation": "\"User\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/20896020/pexels-photo-20896020.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What writing tool contains graphite and has an eraser on top?",
                "choices": [
                    "Ruler",
                    "User",
                    "Wwwyoutubecom",
                    "Pencil"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil",
                "explanation": "Pencils are perfect for schoolwork because you can erase mistakes.",
                "imageUrl": "https://images.pexels.com/photos/8099373/pexels-photo-8099373.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What straight strip of plastic or wood is used to measure length?",
                "choices": [
                    "Ruler",
                    "Pencil",
                    "Wwwyoutubecom",
                    "User"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ruler",
                "explanation": "A ruler has marked measurements to help draw straight lines.",
                "imageUrl": "https://images.pexels.com/photos/17750881/pexels-photo-17750881.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What small rubber tool is used to remove pencil marks?",
                "choices": [
                    "Wwwyoutubecom",
                    "Eraser",
                    "User",
                    "Pencil"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Eraser",
                "explanation": "An eraser rubs off pencil graphite to correct spelling mistakes.",
                "imageUrl": "https://images.pexels.com/photos/5088023/pexels-photo-5088023.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-6": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/9LZPHvQJABQ",
        "title": "School Vocabulary I - Vocabulary for Kids",
        "channel": "@SmileandLearnEnglish",
        "transcriptText": "[Music] smile and learn hello friends today we're going to visit our school and we're going to learn many words related to this place are you ready to find out more about the school let's go for it [Music] the classroom is the place where students learn and do activities classroom the teacher teaches children in school thank you teacher teacher we can read books and learn many things book the alphabet is a set of letters in a fixed order a b c d e alphabet the desk is the table where pupils study and do their work desk the computer is an electronic device that allows us to look up information and create content and assignments we love learning using the computer computer we write or draw using the pencil i love it pencil the pencil case is used to keep some school supplies like the eraser the pencil the pen or the pencil sharpener pencil case the ruler is a tool used to draw straight lines or to measure ruler the clock indicates hours and minutes and tells us when our school day ends recess time clock let's see if you remember any of the words we learned who teaches children in school the teacher where do students learn and do classwork in class how do we recap the order of letters with the alphabet [Music] how do we call the table where students do their classwork the desk where do we keep the pencil the pen or the eraser in the pencil case what do we use to write the pencil [Applause] these have been some words related to school but there are so many more don't miss the second video about school [Music] did you like the video we have so many more subscribe by clicking on the seal ah and if you want to keep watching more videos click on the boxes [Music]",
        "words": [
            "Pencil",
            "Student",
            "Pencil case",
            "Eraser",
            "Ruler"
        ],
        "questions": [
            {
                "question": "What writing tool contains graphite and has an eraser on top?",
                "choices": [
                    "Student",
                    "Pencil",
                    "Eraser",
                    "Pencil case"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil",
                "explanation": "Pencils are perfect for schoolwork because you can erase mistakes.",
                "imageUrl": "https://images.pexels.com/photos/30583224/pexels-photo-30583224.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What do we call a person who is studying or learning in school?",
                "choices": [
                    "Eraser",
                    "Pencil case",
                    "Student",
                    "Pencil"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Student",
                "explanation": "Students attend school to gain knowledge and learn new skills.",
                "imageUrl": "https://images.pexels.com/photos/8199161/pexels-photo-8199161.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Student",
                    "Pencil",
                    "Pencil case",
                    "Eraser"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil case",
                "explanation": "\"Pencil case\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/3731255/pexels-photo-3731255.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What small rubber tool is used to remove pencil marks?",
                "choices": [
                    "Student",
                    "Pencil case",
                    "Pencil",
                    "Eraser"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Eraser",
                "explanation": "An eraser rubs off pencil graphite to correct spelling mistakes.",
                "imageUrl": "https://images.pexels.com/photos/5412134/pexels-photo-5412134.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What straight strip of plastic or wood is used to measure length?",
                "choices": [
                    "Pencil",
                    "Student",
                    "Ruler",
                    "Pencil case"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ruler",
                "explanation": "A ruler has marked measurements to help draw straight lines.",
                "imageUrl": "https://images.pexels.com/photos/34918663/pexels-photo-34918663.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-7": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/BK_wTEtB63U",
        "title": "What's this? – School supplies | English Vocabulary Guess the silhouette Game for kids (ESL)",
        "channel": "@beenglishkids1402",
        "transcriptText": "",
        "words": [
            "What is itDO",
            "Supplie",
            "Silhouette",
            "Game",
            "ESL"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Game",
                    "Silhouette",
                    "What is itDO",
                    "Supplie"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "What is itDO",
                "explanation": "\"What is itDO\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/1181598/pexels-photo-1181598.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "What is itDO",
                    "Supplie",
                    "Silhouette",
                    "Game"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Supplie",
                "explanation": "\"Supplie\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9714426/pexels-photo-9714426.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Game",
                    "Silhouette",
                    "Supplie",
                    "What is itDO"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Silhouette",
                "explanation": "\"Silhouette\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/18613638/pexels-photo-18613638.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Supplie",
                    "What is itDO",
                    "Game",
                    "Silhouette"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Game",
                "explanation": "\"Game\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9068972/pexels-photo-9068972.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "What is itDO",
                    "ESL",
                    "Supplie",
                    "Silhouette"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "ESL",
                "explanation": "\"ESL\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6929167/pexels-photo-6929167.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-8": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/aVSnDZHNEQc",
        "title": "What is In Your Bag? Song with Matt | School Classroom Items | Learn English Kids",
        "channel": "@DreamEnglishKids",
        "transcriptText": "woaaaah!! Dream English Kids Hi, friends. Are you ready to sing the What's in your bag? Song? Here we go! What's in your bag? It's my pencil. What's in your bag? It's my notebook. What's in your bag? It's my pet snake. You don't have a pet snake. Ahhh! What's in your bag? It's my ruler. What's in your bag? It's my eraser. What's in your bag? It's my pet spider. You don't have a pet spider. Ahhh! What's in your bag? It's my pencil case. What's in your bag? It's my book. What's in your bag? It's my pet dinosaur. You don't have a pet dinosaur. Ahhh! One more time! Faster! What's in your bag? It's my pencil. What's in your bag? It's my notebook. What's in your bag? It's my pet snake. You don't have a pet snake. Ahhh! What's in your bag? It's my ruler. What's in your bag? It's my eraser. What's in your bag? It's my pet spider. You don't have a pet spider. Ahhh! What's in your bag? It's my pencil case. What's in your bag? It's my book. What's in your bag? It's my pet dinosaur. You don't have a pet dinosaur. Ahhh! Great job! Hello. My name is Matt. What's your name? Let's learn some more!",
        "words": [
            "Bag",
            "Pet",
            "Song",
            "Lets",
            "Matt"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pet",
                    "Bag",
                    "Song",
                    "Lets"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Bag",
                "explanation": "\"Bag\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6633602/pexels-photo-6633602.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈbæːɡ/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Lets",
                    "Song",
                    "Pet",
                    "Bag"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pet",
                "explanation": "\"Pet\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/30070537/pexels-photo-30070537.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/pɛt/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bag",
                    "Pet",
                    "Lets",
                    "Song"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Song",
                "explanation": "\"Song\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/19262077/pexels-photo-19262077.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Lets",
                    "Song",
                    "Bag",
                    "Pet"
                ],
                "choiceIpas": [
                    "/lɛts/",
                    "/sɒŋ/",
                    "/ˈbæːɡ/",
                    "/pɛt/"
                ],
                "correctAnswer": "Lets",
                "explanation": "\"Lets\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/8879788/pexels-photo-8879788.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/lɛts/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pet",
                    "Matt",
                    "Song",
                    "Bag"
                ],
                "choiceIpas": [
                    "/pɛt/",
                    "",
                    "/sɒŋ/",
                    "/ˈbæːɡ/"
                ],
                "correctAnswer": "Matt",
                "explanation": "\"Matt\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7005061/pexels-photo-7005061.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-9": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/zo3NUvGNjLY",
        "title": "School Supplies Finger Family Song | Learn English Children",
        "channel": "@DreamEnglishKids",
        "transcriptText": "[Music] it's a five finger school supplies finger family wow cool dream english kids [Applause] hi friends are you ready for the school supplies finger family song here we go backpack finger backpack finger where are you here i am [Music] finger pencil finger where are you here i am here i am how do you do pencil [Music] pencil eraser finger eraser finger where are you here i am here i am eraser eraser ruler finger ruler finger where are you here i am here i am how do you do ruler [Music] ruler notebook finger notebook finger where are you here i am here i am how do you do [Music] no no this is a pencil no it's a banana oh [Music] this is a pencil no it's a notebook oh this is a pencil yes [Music] let's sing the family finger song one more time here we go backpack finger backpack finger where are you here i am here i am [Music] finger pencil finger where are you here i am here i am how do you do [Music] pencil [Music] pencil eraser finger eraser finger where are you here i am here i am how do you do eraser eraser ruler finger ruler finger where are you here i am here i am how do you do ruler ruler notebook finger notebook finger where are you here i am here i am how do you do [Music] nofa [Music] richa hello my name is matt what's your name it's great to see you what do you have in your backpack in my backpack i have a pencil [Music] an eraser [Music] a ruler and a notebook oh and there's one more thing in here a banana [Music] goodbye see you thank you goodbye [Music] [Applause] dream english kids let's have a look at another song [Music]",
        "words": [
            "Finger",
            "Music",
            "Pencil",
            "Eraser",
            "Ruler"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Eraser",
                    "Music",
                    "Finger",
                    "Pencil"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Finger",
                "explanation": "\"Finger\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/11731122/pexels-photo-11731122.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Eraser",
                    "Finger",
                    "Pencil",
                    "Music"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Music",
                "explanation": "\"Music\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7095510/pexels-photo-7095510.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What writing tool contains graphite and has an eraser on top?",
                "choices": [
                    "Pencil",
                    "Finger",
                    "Eraser",
                    "Music"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil",
                "explanation": "Pencils are perfect for schoolwork because you can erase mistakes.",
                "imageUrl": "https://images.pexels.com/photos/8386695/pexels-photo-8386695.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What small rubber tool is used to remove pencil marks?",
                "choices": [
                    "Finger",
                    "Eraser",
                    "Music",
                    "Pencil"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Eraser",
                "explanation": "An eraser rubs off pencil graphite to correct spelling mistakes.",
                "imageUrl": "https://images.pexels.com/photos/37121878/pexels-photo-37121878.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What straight strip of plastic or wood is used to measure length?",
                "choices": [
                    "Finger",
                    "Pencil",
                    "Ruler",
                    "Music"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ruler",
                "explanation": "A ruler has marked measurements to help draw straight lines.",
                "imageUrl": "https://images.pexels.com/photos/5412363/pexels-photo-5412363.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "11-1": {
        "grade": 11,
        "videoUrl": "https://www.youtube.com/embed/0QfS0bWqXnE",
        "title": "High-Frequency SAT/ACT Words 🎓",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Pragmatic",
            "Ambiguous",
            "Ephemeral",
            "Resilient",
            "Scrutinize"
        ],
        "topicId": "economics-finance",
        "questions": [
            {
                "question": "If a solution is 'pragmatic', it is:",
                "choices": [
                    "Practical / Sensible",
                    "Ideal / Perfect",
                    "Difficult",
                    "Temporary"
                ],
                "correctAnswer": "Practical / Sensible",
                "explanation": "Pragmatic means dealing with things sensibly and realistically based on practical matters."
            },
            {
                "question": "When a statement or description is 'ambiguous', it is:",
                "choices": [
                    "Unclear / Open to multiple meanings",
                    "Extremely clear",
                    "Very funny",
                    "Long"
                ],
                "correctAnswer": "Unclear / Open to multiple meanings",
                "explanation": "Ambiguous means open to more than one interpretation; having a double meaning."
            },
            {
                "question": "What does 'ephemeral' mean?",
                "choices": [
                    "Short-lived / Temporary",
                    "Everlasting",
                    "Beautiful",
                    "Heavy"
                ],
                "correctAnswer": "Short-lived / Temporary",
                "explanation": "Ephemeral means lasting for a very short time."
            },
            {
                "question": "A 'resilient' person is someone who:",
                "choices": [
                    "Recovers quickly from difficulties",
                    "Gives up easily",
                    "Never talks",
                    "Is very rich"
                ],
                "correctAnswer": "Recovers quickly from difficulties",
                "explanation": "Resilient means able to withstand or recover quickly from difficult conditions."
            },
            {
                "question": "To 'scrutinize' a document means to:",
                "choices": [
                    "Examine it very closely",
                    "Throw it away",
                    "Sign it quickly",
                    "Copy it"
                ],
                "correctAnswer": "Examine it very closely",
                "explanation": "Scrutinize means to examine or inspect closely and thoroughly."
            }
        ]
    },
    "12-1": {
        "grade": 12,
        "videoUrl": "https://www.youtube.com/embed/RkSGsE5T-N4",
        "title": "Word Roots and Prefixes 🧬",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Chronological",
            "Benevolent",
            "Malicious",
            "Audiovisual",
            "Autobiography"
        ],
        "topicId": "abstract-concepts",
        "questions": [
            {
                "question": "The root 'chron' means time. What is 'chronological' order?",
                "choices": [
                    "Arranged in order of time",
                    "Very fast",
                    "Confusing",
                    "Alphabetical"
                ],
                "correctAnswer": "Arranged in order of time",
                "explanation": "Chronological means starting with the earliest event and following in time sequence."
            },
            {
                "question": "The prefix 'bene' means good. A 'benevolent' person is:",
                "choices": [
                    "Kind / Good-hearted",
                    "Angry",
                    "Selfish",
                    "Rich"
                ],
                "correctAnswer": "Kind / Good-hearted",
                "explanation": "Benevolent means well-meaning and kindly; intending to do good."
            },
            {
                "question": "The prefix 'mal' means bad. A 'malicious' act is:",
                "choices": [
                    "Harmful / Bad-intentioned",
                    "Helpful",
                    "Funny",
                    "Accidental"
                ],
                "correctAnswer": "Harmful / Bad-intentioned",
                "explanation": "Malicious means intending or intended to do harm; spiteful."
            },
            {
                "question": "The root 'audi' means to hear. 'Audiovisual' involves:",
                "choices": [
                    "Both hearing and seeing",
                    "Hearing only",
                    "Writing",
                    "Drawing"
                ],
                "correctAnswer": "Both hearing and seeing",
                "explanation": "Audiovisual refers to materials or devices that use both sight and sound."
            },
            {
                "question": "The prefix 'auto' means self. An 'autobiography' is a book:",
                "choices": [
                    "Written about oneself",
                    "About cars",
                    "About history",
                    "By a famous author"
                ],
                "correctAnswer": "Written about oneself",
                "explanation": "An autobiography is an account of a person's life written by that person."
            }
        ]
    },
    "12-2": {
        "grade": 12,
        "videoUrl": "https://www.youtube.com/embed/G6jWcZ6w3rM",
        "title": "Sophisticated Scholarly Terms 🏛️",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Quintessential",
            "Kakotopia",
            "Anachronistic",
            "Cacophony",
            "Obfuscate"
        ],
        "topicId": "epistemology",
        "questions": [
            {
                "question": "What does 'quintessential' mean?",
                "choices": [
                    "Representing the perfect example of something",
                    "Very old",
                    "Rare",
                    "Five-sided"
                ],
                "correctAnswer": "Representing the perfect example of something",
                "explanation": "Quintessential represents the most perfect or typical example of a quality or class."
            },
            {
                "question": "What is a 'cacophony'?",
                "choices": [
                    "A harsh, discordant mixture of sounds",
                    "A beautiful song",
                    "A silent room",
                    "A megaphone"
                ],
                "correctAnswer": "A harsh, discordant mixture of sounds",
                "explanation": "Cacophony refers to a harsh, discordant, and unpleasant mixture of sounds."
            },
            {
                "question": "To 'obfuscate' the truth means to:",
                "choices": [
                    "Make it unclear / confuse it",
                    "Reveal it clearly",
                    "Lie under oath",
                    "Write it down"
                ],
                "correctAnswer": "Make it unclear / confuse it",
                "explanation": "Obfuscate means to render obscure, unclear, or unintelligible."
            },
            {
                "question": "Something that is out of its correct historical time is:",
                "choices": [
                    "Anachronistic",
                    "Quintessential",
                    "Cacophony",
                    "Obfuscate"
                ],
                "correctAnswer": "Anachronistic",
                "explanation": "Anachronistic means belonging or appropriate to a period other than that in which it exists."
            },
            {
                "question": "A state or place of extreme misery and corruption (opposite of utopia) is:",
                "choices": [
                    "Kakotopia / Dystopia",
                    "Quintessential",
                    "Utopia",
                    "Oasis"
                ],
                "correctAnswer": "Kakotopia / Dystopia",
                "explanation": "Kakotopia (or dystopia) is a state or society characterized by human misery, oppression, and disease."
            }
        ]
    },
    "12-3": {
        "grade": 12,
        "videoUrl": "https://www.youtube.com/embed/8tH8V5JocX8",
        "title": "Essential Rhetorical Figures 🎭",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Onomatopoeia",
            "Personification",
            "Metaphor",
            "Simile",
            "Symbolism"
        ],
        "topicId": "gre-mastery",
        "questions": [
            {
                "question": "Which device names a sound by imitating it, like 'buzz' or 'hiss'?",
                "choices": [
                    "Onomatopoeia",
                    "Metaphor",
                    "Personification",
                    "Simile"
                ],
                "correctAnswer": "Onomatopoeia",
                "explanation": "Onomatopoeia is the formation of a word from a sound associated with what is named."
            },
            {
                "question": "Giving human qualities to non-human things (like 'the wind whispered') is:",
                "choices": [
                    "Personification",
                    "Simile",
                    "Symbolism",
                    "Metaphor"
                ],
                "correctAnswer": "Personification",
                "explanation": "Personification attributes human characteristics to animals, objects, or concepts."
            },
            {
                "question": "A direct comparison NOT using 'like' or 'as' (e.g. 'time is a thief') is:",
                "choices": [
                    "Metaphor",
                    "Simile",
                    "Personification",
                    "Onomatopoeia"
                ],
                "correctAnswer": "Metaphor",
                "explanation": "A metaphor directly asserts that one thing is another, without comparison words."
            },
            {
                "question": "A comparison using 'like' or 'as' (e.g. 'brave as a lion') is:",
                "choices": [
                    "Simile",
                    "Metaphor",
                    "Symbolism",
                    "Personification"
                ],
                "correctAnswer": "Simile",
                "explanation": "A simile compares two things explicitly using terms such as 'like' or 'as'."
            },
            {
                "question": "Using an object or color to represent a deeper idea is:",
                "choices": [
                    "Symbolism",
                    "Simile",
                    "Personification",
                    "Metaphor"
                ],
                "correctAnswer": "Symbolism",
                "explanation": "Symbolism uses symbols to represent ideas or qualities beyond the literal meaning."
            }
        ]
    },
    "2-1": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/HbvG-nV4DaM",
        "title": "What Is This Called in English? 🇬🇧 | Tea & Coffee #16",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Coffee",
            "Teapot",
            "Moka pot",
            "Teacup",
            "Explore"
        ],
        "topicId": "food-drinks",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coffee",
                    "Teapot",
                    "Teacup",
                    "Moka pot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Coffee",
                "explanation": "\"Coffee\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/20130929/pexels-photo-20130929.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coffee",
                    "Moka pot",
                    "Teacup",
                    "Teapot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Teapot",
                "explanation": "\"Teapot\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/11532730/pexels-photo-11532730.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Moka pot",
                    "Coffee",
                    "Teapot",
                    "Teacup"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Moka pot",
                "explanation": "\"Moka pot\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5996061/pexels-photo-5996061.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coffee",
                    "Teapot",
                    "Teacup",
                    "Moka pot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Teacup",
                "explanation": "\"Teacup\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/35380303/pexels-photo-35380303.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Teapot",
                    "Explore",
                    "Moka pot",
                    "Coffee"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4640946/pexels-photo-4640946.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "2-2": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/0xKYNv73vtw",
        "title": "What Is This Called in English? 🇬🇧 | Law & Court #18",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Judge",
            "Cell",
            "Scale",
            "Courthouse",
            "Explore"
        ],
        "topicId": "jobs-occupations",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Cell",
                    "Scale",
                    "Judge",
                    "Courthouse"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Judge",
                "explanation": "\"Judge\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6077240/pexels-photo-6077240.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Judge",
                    "Courthouse",
                    "Cell",
                    "Scale"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Cell",
                "explanation": "\"Cell\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16882902/pexels-photo-16882902.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Courthouse",
                    "Judge",
                    "Scale",
                    "Cell"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Scale",
                "explanation": "\"Scale\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/8112195/pexels-photo-8112195.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Courthouse",
                    "Cell",
                    "Scale",
                    "Judge"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Courthouse",
                "explanation": "\"Courthouse\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16750823/pexels-photo-16750823.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Judge",
                    "Cell",
                    "Explore",
                    "Scale"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4641233/pexels-photo-4641233.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "2-3": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/UFHw7A3ovp8",
        "title": "What Is This Called in English? 🇬🇧 | Car Parts #15",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Steering",
            "Headlight",
            "Tail light",
            "Dashboard",
            "Explore"
        ],
        "topicId": "vehicles-travel",
        "questions": [
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Tail light",
                    "Dashboard",
                    "Headlight",
                    "Steering"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Steering",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/37421212/pexels-photo-37421212.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Dashboard",
                    "Steering",
                    "Headlight",
                    "Tail light"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Headlight",
                "explanation": "\"Headlight\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16040150/pexels-photo-16040150.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Headlight",
                    "Steering",
                    "Dashboard",
                    "Tail light"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Tail light",
                "explanation": "\"Tail light\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/28914526/pexels-photo-28914526.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Dashboard",
                    "Steering",
                    "Headlight",
                    "Tail light"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Dashboard",
                "explanation": "\"Dashboard\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9530906/pexels-photo-9530906.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Headlight",
                    "Steering",
                    "Tail light",
                    "Explore"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4640946/pexels-photo-4640946.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "2-4": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/2W4eR4EngLo",
        "title": "What Is This Called in English? 🇬🇧 | Transportation #10",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Train",
            "Airplane",
            "Ship",
            "Bicycle",
            "Helicopter"
        ],
        "topicId": "vehicles-travel",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bicycle",
                    "Ship",
                    "Train",
                    "Airplane"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Train",
                "explanation": "\"Train\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16673166/pexels-photo-16673166.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Train",
                    "Airplane",
                    "Bicycle",
                    "Ship"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Airplane",
                "explanation": "\"Airplane\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/32325153/pexels-photo-32325153.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bicycle",
                    "Train",
                    "Ship",
                    "Airplane"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ship",
                "explanation": "\"Ship\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/27402391/pexels-photo-27402391.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Train",
                    "Bicycle",
                    "Ship",
                    "Airplane"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Bicycle",
                "explanation": "\"Bicycle\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/19353575/pexels-photo-19353575.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Train",
                    "Ship",
                    "Helicopter",
                    "Airplane"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Helicopter",
                "explanation": "\"Helicopter\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16863610/pexels-photo-16863610.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "2-5": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/bN7zKzW2eUo",
        "title": "Weather and Atmospheric Elements 🌪️",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Breeze",
            "Blizzard",
            "Drizzle",
            "Hurricane",
            "Tornado"
        ],
        "topicId": "weather-seasons",
        "questions": [
            {
                "question": "What is a gentle, light wind called?",
                "choices": [
                    "Breeze",
                    "Blizzard",
                    "Hurricane",
                    "Tornado"
                ],
                "correctAnswer": "Breeze",
                "explanation": "A breeze is a soft, refreshing, light wind."
            },
            {
                "question": "What is a severe snowstorm with high winds and low visibility called?",
                "choices": [
                    "Blizzard",
                    "Drizzle",
                    "Tornado",
                    "Breeze"
                ],
                "correctAnswer": "Blizzard",
                "explanation": "A blizzard is a freezing, heavy snowstorm with powerful winds."
            },
            {
                "question": "What do we call very light rain falling in fine drops?",
                "choices": [
                    "Drizzle",
                    "Hurricane",
                    "Breeze",
                    "Blizzard"
                ],
                "correctAnswer": "Drizzle",
                "explanation": "Drizzle is light, misty rain that falls very softly."
            },
            {
                "question": "What is a violent tropical storm with circular winds over the ocean?",
                "choices": [
                    "Hurricane",
                    "Tornado",
                    "Drizzle",
                    "Breeze"
                ],
                "correctAnswer": "Hurricane",
                "explanation": "A hurricane is a massive spinning tropical storm that forms over warm waters."
            },
            {
                "question": "What is a fast-spinning column of air touching both a cloud and the ground?",
                "choices": [
                    "Tornado",
                    "Blizzard",
                    "Hurricane",
                    "Drizzle"
                ],
                "correctAnswer": "Tornado",
                "explanation": "A tornado is a destructive rotating funnel of air extending from a thunderstorm."
            }
        ]
    },
    "2-6": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/UIEIkXJAoog",
        "title": "What Is This Called in English? | Learn English Word | 07",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Deer",
            "Fox",
            "Bear",
            "Wolf",
            "Panther"
        ],
        "topicId": "wild-animals",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Fox",
                    "Bear",
                    "Wolf",
                    "Deer"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Deer",
                "explanation": "\"Deer\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/31805554/pexels-photo-31805554.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bear",
                    "Deer",
                    "Fox",
                    "Wolf"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Fox",
                "explanation": "\"Fox\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9681754/pexels-photo-9681754.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Deer",
                    "Bear",
                    "Wolf",
                    "Fox"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Bear",
                "explanation": "\"Bear\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/17646625/pexels-photo-17646625.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Wolf",
                    "Deer",
                    "Fox",
                    "Bear"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Wolf",
                "explanation": "\"Wolf\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7249475/pexels-photo-7249475.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Deer",
                    "Fox",
                    "Panther",
                    "Bear"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Panther",
                "explanation": "\"Panther\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7867206/pexels-photo-7867206.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "2-7": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/HEV51Qee0M8",
        "title": "English quiz: animals #animalname #animalsnamee...",
        "channel": "@EnglishWordsCorner",
        "words": [
            "Tiger",
            "Lion",
            "Chimpanzee",
            "Zebra"
        ],
        "topicId": "wild-animals",
        "questions": [
            {
                "question": "Which wild cat is known for its orange fur with black stripes?",
                "choices": [
                    "Tiger",
                    "Lion",
                    "Chimpanzee",
                    "Zebra"
                ],
                "correctAnswer": "Tiger",
                "explanation": "Tigers are the largest cat species, instantly recognizable by their black stripes on orange fur."
            },
            {
                "question": "Which animal is a primate, very intelligent, and lives in trees?",
                "choices": [
                    "Chimpanzee",
                    "Tiger",
                    "Lion",
                    "Zebra"
                ],
                "correctAnswer": "Chimpanzee",
                "explanation": "Chimpanzees are highly intelligent great apes native to forests and wet savannas of tropical Africa."
            },
            {
                "question": "Which animal has black and white stripes and looks like a horse?",
                "choices": [
                    "Zebra",
                    "Tiger",
                    "Lion",
                    "Chimpanzee"
                ],
                "correctAnswer": "Zebra",
                "explanation": "Zebras are African equines known for their distinctive black-and-white striped coats."
            },
            {
                "question": "Which animal is known as the King of the Jungle?",
                "choices": [
                    "Lion",
                    "Tiger",
                    "Chimpanzee",
                    "Zebra"
                ],
                "correctAnswer": "Lion",
                "explanation": "The lion is a large cat of the genus Panthera, native to Africa and India, often called the king of the jungle."
            }
        ]
    },
    "2-8": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/HEV51Qee0M8",
        "title": "Animal Sounds and Names for Kids 🐯",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Lion",
            "Monkey",
            "Elephant",
            "Giraffe",
            "Zebra"
        ],
        "topicId": "wild-animals",
        "questions": [
            {
                "question": "Which animal has black and white stripes?",
                "choices": [
                    "Zebra",
                    "Lion",
                    "Giraffe",
                    "Monkey"
                ],
                "correctAnswer": "Zebra",
                "explanation": "Zebras have beautiful black and white stripes all over their bodies!"
            },
            {
                "question": "Which animal is known as the King of the Jungle?",
                "choices": [
                    "Lion",
                    "Elephant",
                    "Zebra",
                    "Giraffe"
                ],
                "correctAnswer": "Lion",
                "explanation": "The mighty lion is famously known as the King of the Jungle!"
            },
            {
                "question": "Which animal has a very long neck to reach tall leaves?",
                "choices": [
                    "Giraffe",
                    "Monkey",
                    "Elephant",
                    "Zebra"
                ],
                "correctAnswer": "Giraffe",
                "explanation": "Giraffes have incredibly long necks to eat leaves from high trees!"
            },
            {
                "question": "Which animal loves to swing on trees and eat bananas?",
                "choices": [
                    "Monkey",
                    "Lion",
                    "Giraffe",
                    "Elephant"
                ],
                "correctAnswer": "Monkey",
                "explanation": "Monkeys are active swingers and love eating yummy bananas!"
            },
            {
                "question": "Which animal is the largest land mammal with big ears?",
                "choices": [
                    "Elephant",
                    "Zebra",
                    "Lion",
                    "Giraffe"
                ],
                "correctAnswer": "Elephant",
                "explanation": "The elephant is the largest mammal living on land!"
            }
        ]
    },
    "3-1": {
        "grade": 3,
        "videoUrl": "https://www.youtube.com/embed/VETWVYWsyko",
        "title": "What Is This Called in English? 🇬🇧 | Face Parts #8",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Nose",
            "Mouth",
            "Eye",
            "Ear",
            "Explore"
        ],
        "topicId": "health-body",
        "questions": [
            {
                "question": "Which organ on our face do we use to breathe and smell things?",
                "choices": [
                    "Mouth",
                    "Nose",
                    "Ear",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Nose",
                "explanation": "The nose is the organ on our face used for smelling and breathing.",
                "imageUrl": "https://images.pexels.com/photos/8727385/pexels-photo-8727385.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which body part do we use to eat, talk, and smile?",
                "choices": [
                    "Mouth",
                    "Nose",
                    "Ear",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Mouth",
                "explanation": "The mouth contains our teeth and tongue, helping us speak and eat.",
                "imageUrl": "https://images.pexels.com/photos/8727479/pexels-photo-8727479.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Ear",
                    "Nose",
                    "Mouth",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Eye",
                "explanation": "\"Eye\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/2440264/pexels-photo-2440264.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Eye",
                    "Ear",
                    "Mouth",
                    "Nose"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ear",
                "explanation": "\"Ear\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/13308389/pexels-photo-13308389.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Explore",
                    "Nose",
                    "Mouth",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4555538/pexels-photo-4555538.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "3-2": {
        "grade": 3,
        "videoUrl": "https://www.youtube.com/embed/k5pTmDPDY8Q",
        "title": "What Is This Called in English? | Learn English Word | 06",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Balloon",
            "Party hat",
            "Decoration light",
            "Greeting",
            "Gift"
        ],
        "topicId": "hobbies-games",
        "questions": [
            {
                "question": "Which colorful toy floats high in the sky when filled with helium?",
                "choices": [
                    "Balloon",
                    "Party hat",
                    "Decoration light",
                    "Greeting"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Balloon",
                "explanation": "Balloons are made of rubber and expand when filled with air or gas.",
                "imageUrl": "https://images.pexels.com/photos/19326083/pexels-photo-19326083.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Balloon",
                    "Decoration light",
                    "Party hat",
                    "Greeting"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    "/ˈɡɹiːtɪŋ/"
                ],
                "correctAnswer": "Party hat",
                "explanation": "\"Party hat\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9628004/pexels-photo-9628004.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Greeting",
                    "Balloon",
                    "Decoration light",
                    "Party hat"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Decoration light",
                "explanation": "\"Decoration light\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/34649416/pexels-photo-34649416.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Greeting",
                    "Decoration light",
                    "Balloon",
                    "Party hat"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Greeting",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/5537978/pexels-photo-5537978.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Gift",
                    "Balloon",
                    "Party hat",
                    "Decoration light"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Gift",
                "explanation": "\"Gift\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6334844/pexels-photo-6334844.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "4-1": {
        "grade": 4,
        "videoUrl": "https://www.youtube.com/embed/2_H0P9o-Xg4",
        "title": "Must-Know Kitchen Utensils 🍳",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Whisk",
            "Spatula",
            "Ladle",
            "Colander",
            "Grater"
        ],
        "topicId": "cooking-utensils",
        "questions": [
            {
                "question": "Which tool has wire loops and is used to beat eggs or cream?",
                "choices": [
                    "Whisk",
                    "Spatula",
                    "Ladle",
                    "Colander"
                ],
                "correctAnswer": "Whisk",
                "explanation": "A whisk blends ingredients smoothly or incorporates air into mixes."
            },
            {
                "question": "What flat, flexible tool is used to flip pancakes or burgers?",
                "choices": [
                    "Spatula",
                    "Ladle",
                    "Grater",
                    "Colander"
                ],
                "correctAnswer": "Spatula",
                "explanation": "A spatula is flat and wide, ideal for flipping or lifting food."
            },
            {
                "question": "What deep-cupped spoon is used to serve soup or broth?",
                "choices": [
                    "Ladle",
                    "Whisk",
                    "Colander",
                    "Grater"
                ],
                "correctAnswer": "Ladle",
                "explanation": "A ladle has a long handle and a large bowl for scooping liquids."
            },
            {
                "question": "What bowl with holes is used to drain water from pasta?",
                "choices": [
                    "Colander",
                    "Spatula",
                    "Whisk",
                    "Grater"
                ],
                "correctAnswer": "Colander",
                "explanation": "A colander lets water flow out through small holes while keeping the food inside."
            },
            {
                "question": "What metal tool with sharp slots is used to shred cheese?",
                "choices": [
                    "Grater",
                    "Ladle",
                    "Colander",
                    "Spatula"
                ],
                "correctAnswer": "Grater",
                "explanation": "A grater cuts food into small shreds when rubbed across its metal surface."
            }
        ]
    },
    "4-2": {
        "grade": 4,
        "videoUrl": "https://www.youtube.com/embed/ViGE5pjVdjU",
        "title": "What Is This Called in English? | Learn English Word | 01",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Chapped",
            "Scab",
            "Vitiligo",
            "Frenulum",
            "Explore"
        ],
        "topicId": "health-medicine",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Frenulum",
                    "Chapped",
                    "Scab",
                    "Vitiligo"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Chapped",
                "explanation": "\"Chapped\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/11487245/pexels-photo-11487245.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Vitiligo",
                    "Chapped",
                    "Frenulum",
                    "Scab"
                ],
                "choiceIpas": [
                    "",
                    "/tʃæpt/",
                    "/ˈfrɛnjələm/",
                    "/skæb/"
                ],
                "correctAnswer": "Scab",
                "explanation": "\"Scab\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7699355/pexels-photo-7699355.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Chapped",
                    "Frenulum",
                    "Vitiligo",
                    "Scab"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Vitiligo",
                "explanation": "\"Vitiligo\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5301539/pexels-photo-5301539.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Chapped",
                    "Vitiligo",
                    "Frenulum",
                    "Scab"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Frenulum",
                "explanation": "\"Frenulum\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/34529448/pexels-photo-34529448.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Vitiligo",
                    "Scab",
                    "Chapped",
                    "Explore"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/18569408/pexels-photo-18569408.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "4-3": {
        "grade": 4,
        "videoUrl": "https://www.youtube.com/embed/Qq0RPVzzWZk",
        "title": "What Is This Called in English? 🇬🇧 | Money Words #13",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Receipt",
            "Credit",
            "Coin",
            "Bill",
            "Explore"
        ],
        "topicId": "shopping-money",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Receipt",
                    "Bill",
                    "Credit",
                    "Coin"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Receipt",
                "explanation": "\"Receipt\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5242813/pexels-photo-5242813.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bill",
                    "Receipt",
                    "Credit",
                    "Coin"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Credit",
                "explanation": "\"Credit\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/4841691/pexels-photo-4841691.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Credit",
                    "Coin",
                    "Receipt",
                    "Bill"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Coin",
                "explanation": "\"Coin\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6777559/pexels-photo-6777559.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bill",
                    "Receipt",
                    "Coin",
                    "Credit"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Bill",
                "explanation": "\"Bill\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7651974/pexels-photo-7651974.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Credit",
                    "Receipt",
                    "Coin",
                    "Explore"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/16319803/pexels-photo-16319803.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "5-1": {
        "grade": 5,
        "videoUrl": "https://www.youtube.com/embed/OqgHpyqQzrc",
        "title": "Everyday Idioms and Phrases 🗣️",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Good luck",
            "Sick",
            "Face a difficulty",
            "Reveal a secret",
            "Very easy"
        ],
        "topicId": "geography-travel",
        "questions": [
            {
                "question": "What does it mean when someone says 'break a leg'?",
                "choices": [
                    "Good luck",
                    "Get hurt",
                    "Run fast",
                    "Sleep early"
                ],
                "correctAnswer": "Good luck",
                "explanation": "In theater and performance, saying 'break a leg' is an idiom wishing good luck!"
            },
            {
                "question": "If you are feeling 'under the weather', how do you feel?",
                "choices": [
                    "Sick / Unwell",
                    "Happy / Joyful",
                    "Cold",
                    "Super strong"
                ],
                "correctAnswer": "Sick / Unwell",
                "explanation": "To feel 'under the weather' is an idiom meaning you are feeling sick or slightly unwell."
            },
            {
                "question": "What does it mean to 'bite the bullet'?",
                "choices": [
                    "Face a difficult situation bravely",
                    "Eat quickly",
                    "Talk loudly",
                    "Shoot a gun"
                ],
                "correctAnswer": "Face a difficult situation bravely",
                "explanation": "To 'bite the bullet' means to get a tough task over with and face it courageously."
            },
            {
                "question": "What is the meaning of 'spill the beans'?",
                "choices": [
                    "Reveal a secret",
                    "Drop your food",
                    "Cook dinner",
                    "Clean up"
                ],
                "correctAnswer": "Reveal a secret",
                "explanation": "To 'spill the beans' is an idiom that means to let out a secret, often accidentally."
            },
            {
                "question": "If a task is a 'piece of cake', it is:",
                "choices": [
                    "Very easy",
                    "Delicious",
                    "Hard to do",
                    "Expensive"
                ],
                "correctAnswer": "Very easy",
                "explanation": "If something is a 'piece of cake', it is very simple and easy to complete!"
            }
        ]
    },
    "6-1": {
        "grade": 6,
        "videoUrl": "https://www.youtube.com/embed/m6g2w_H5Hts",
        "title": "Common Phrasal Verbs in English 🗣️",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Call off",
            "Put off",
            "Look up to",
            "Run out of",
            "Carry on"
        ],
        "topicId": "science-lab",
        "questions": [
            {
                "question": "What does it mean to 'call off' a meeting?",
                "choices": [
                    "Cancel it",
                    "Delay it",
                    "Start it",
                    "Record it"
                ],
                "correctAnswer": "Cancel it",
                "explanation": "To 'call off' means to cancel an event or agreement."
            },
            {
                "question": "If you 'put off' doing homework, what are you doing?",
                "choices": [
                    "Postponing / Procrastinating",
                    "Finishing it",
                    "Losing it",
                    "Sharing it"
                ],
                "correctAnswer": "Postponing / Procrastinating",
                "explanation": "To 'put off' means to delay or postpone doing something."
            },
            {
                "question": "When you 'look up to' someone, you:",
                "choices": [
                    "Respect / Admire them",
                    "Stand above them",
                    "Ignore them",
                    "Look at their head"
                ],
                "correctAnswer": "Respect / Admire them",
                "explanation": "To 'look up to' someone means to respect and admire them as a role model."
            },
            {
                "question": "What does 'run out of' sugar mean?",
                "choices": [
                    "Have none left",
                    "Buy more",
                    "Drop it",
                    "Find it"
                ],
                "correctAnswer": "Have none left",
                "explanation": "To 'run out of' something means to finish the supply so that none is left."
            },
            {
                "question": "What does it mean to 'carry on'?",
                "choices": [
                    "Continue doing something",
                    "Stop immediately",
                    "Lift something",
                    "Leave the room"
                ],
                "correctAnswer": "Continue doing something",
                "explanation": "To 'carry on' means to continue doing an activity despite difficulties."
            }
        ]
    },
    "7-1": {
        "grade": 7,
        "videoUrl": "https://www.youtube.com/embed/8-W_N411Kag",
        "title": "Essential Synonyms for Middle School 📚",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Abundant",
            "Trivial",
            "Obsolete",
            "Amicable",
            "Cluttered"
        ],
        "topicId": "literature-genres",
        "questions": [
            {
                "question": "What is a synonym for 'abundant'?",
                "choices": [
                    "Plentiful",
                    "Scarce",
                    "Empty",
                    "Dirty"
                ],
                "correctAnswer": "Plentiful",
                "explanation": "Abundant means existing or available in large quantities; plentiful."
            },
            {
                "question": "If something is 'trivial', it is:",
                "choices": [
                    "Unimportant",
                    "Crucial",
                    "Heavy",
                    "Old"
                ],
                "correctAnswer": "Unimportant",
                "explanation": "Trivial refers to details or facts that are of little value or importance."
            },
            {
                "question": "What does 'obsolete' mean?",
                "choices": [
                    "Outdated / No longer used",
                    "Brand new",
                    "Shining",
                    "Fast"
                ],
                "correctAnswer": "Outdated / No longer used",
                "explanation": "Obsolete means no longer produced or used; out of date."
            },
            {
                "question": "If a conversation was 'amicable', it was:",
                "choices": [
                    "Friendly",
                    "Hostile",
                    "Confusing",
                    "Quiet"
                ],
                "correctAnswer": "Friendly",
                "explanation": "Amicable relationships or negotiations are characterized by friendliness and goodwill."
            },
            {
                "question": "What does 'cluttered' mean?",
                "choices": [
                    "Messy / Full of things",
                    "Clean",
                    "Open",
                    "Dark"
                ],
                "correctAnswer": "Messy / Full of things",
                "explanation": "Cluttered describes a space crowded or untidily filled with items."
            }
        ]
    },
    "9-1": {
        "grade": 9,
        "videoUrl": "https://www.youtube.com/embed/782z161d9D4",
        "title": "Advanced Rhetoric and Literary Forms 📜",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Hyperbole",
            "Oxymoron",
            "Alliteration",
            "Euphemism",
            "Irony"
        ],
        "topicId": "sat-verbs",
        "questions": [
            {
                "question": "What is an extreme exaggeration called?",
                "choices": [
                    "Hyperbole",
                    "Oxymoron",
                    "Irony",
                    "Euphemism"
                ],
                "correctAnswer": "Hyperbole",
                "explanation": "Hyperbole is an exaggerated statement not meant to be taken literally."
            },
            {
                "question": "What do you call two opposite words put together, like 'deafening silence'?",
                "choices": [
                    "Oxymoron",
                    "Alliteration",
                    "Irony",
                    "Hyperbole"
                ],
                "correctAnswer": "Oxymoron",
                "explanation": "An oxymoron is a figure of speech in which contradictory terms appear side-by-side."
            },
            {
                "question": "What is the repetition of the same starting sound in words?",
                "choices": [
                    "Alliteration",
                    "Euphemism",
                    "Oxymoron",
                    "Irony"
                ],
                "correctAnswer": "Alliteration",
                "explanation": "Alliteration is the occurrence of the same letter or sound at the beginning of adjacent words."
            },
            {
                "question": "What is a milder or indirect word used instead of a harsh one?",
                "choices": [
                    "Euphemism",
                    "Hyperbole",
                    "Oxymoron",
                    "Alliteration"
                ],
                "correctAnswer": "Euphemism",
                "explanation": "A euphemism is a mild expression substituted for one considered too harsh or blunt."
            },
            {
                "question": "When the opposite of what is expected happens, it is:",
                "choices": [
                    "Irony",
                    "Alliteration",
                    "Euphemism",
                    "Hyperbole"
                ],
                "correctAnswer": "Irony",
                "explanation": "Irony is when the state of affairs or events is the reverse of what was expected."
            }
        ]
    },
    "abstract-concepts": {
        "grade": 12,
        "videoUrl": "https://www.youtube.com/embed/RkSGsE5T-N4",
        "title": "Word Roots and Prefixes 🧬",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Chronological",
            "Benevolent",
            "Malicious",
            "Audiovisual",
            "Autobiography"
        ],
        "topicId": "abstract-concepts",
        "questions": [
            {
                "question": "The root 'chron' means time. What is 'chronological' order?",
                "choices": [
                    "Arranged in order of time",
                    "Very fast",
                    "Confusing",
                    "Alphabetical"
                ],
                "correctAnswer": "Arranged in order of time",
                "explanation": "Chronological means starting with the earliest event and following in time sequence."
            },
            {
                "question": "The prefix 'bene' means good. A 'benevolent' person is:",
                "choices": [
                    "Kind / Good-hearted",
                    "Angry",
                    "Selfish",
                    "Rich"
                ],
                "correctAnswer": "Kind / Good-hearted",
                "explanation": "Benevolent means well-meaning and kindly; intending to do good."
            },
            {
                "question": "The prefix 'mal' means bad. A 'malicious' act is:",
                "choices": [
                    "Harmful / Bad-intentioned",
                    "Helpful",
                    "Funny",
                    "Accidental"
                ],
                "correctAnswer": "Harmful / Bad-intentioned",
                "explanation": "Malicious means intending or intended to do harm; spiteful."
            },
            {
                "question": "The root 'audi' means to hear. 'Audiovisual' involves:",
                "choices": [
                    "Both hearing and seeing",
                    "Hearing only",
                    "Writing",
                    "Drawing"
                ],
                "correctAnswer": "Both hearing and seeing",
                "explanation": "Audiovisual refers to materials or devices that use both sight and sound."
            },
            {
                "question": "The prefix 'auto' means self. An 'autobiography' is a book:",
                "choices": [
                    "Written about oneself",
                    "About cars",
                    "About history",
                    "By a famous author"
                ],
                "correctAnswer": "Written about oneself",
                "explanation": "An autobiography is an account of a person's life written by that person."
            }
        ]
    },
    "abstract-concepts-1": {
        "grade": 12,
        "videoUrl": "https://www.youtube.com/embed/RkSGsE5T-N4",
        "title": "Word Roots and Prefixes 🧬",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Chronological",
            "Benevolent",
            "Malicious",
            "Audiovisual",
            "Autobiography"
        ],
        "topicId": "abstract-concepts",
        "questions": [
            {
                "question": "The root 'chron' means time. What is 'chronological' order?",
                "choices": [
                    "Arranged in order of time",
                    "Very fast",
                    "Confusing",
                    "Alphabetical"
                ],
                "correctAnswer": "Arranged in order of time",
                "explanation": "Chronological means starting with the earliest event and following in time sequence."
            },
            {
                "question": "The prefix 'bene' means good. A 'benevolent' person is:",
                "choices": [
                    "Kind / Good-hearted",
                    "Angry",
                    "Selfish",
                    "Rich"
                ],
                "correctAnswer": "Kind / Good-hearted",
                "explanation": "Benevolent means well-meaning and kindly; intending to do good."
            },
            {
                "question": "The prefix 'mal' means bad. A 'malicious' act is:",
                "choices": [
                    "Harmful / Bad-intentioned",
                    "Helpful",
                    "Funny",
                    "Accidental"
                ],
                "correctAnswer": "Harmful / Bad-intentioned",
                "explanation": "Malicious means intending or intended to do harm; spiteful."
            },
            {
                "question": "The root 'audi' means to hear. 'Audiovisual' involves:",
                "choices": [
                    "Both hearing and seeing",
                    "Hearing only",
                    "Writing",
                    "Drawing"
                ],
                "correctAnswer": "Both hearing and seeing",
                "explanation": "Audiovisual refers to materials or devices that use both sight and sound."
            },
            {
                "question": "The prefix 'auto' means self. An 'autobiography' is a book:",
                "choices": [
                    "Written about oneself",
                    "About cars",
                    "About history",
                    "By a famous author"
                ],
                "correctAnswer": "Written about oneself",
                "explanation": "An autobiography is an account of a person's life written by that person."
            }
        ]
    },
    "clothing": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/uR7bSJYQEc0",
        "title": "What do you call this in English? 😱🇺🇸",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Q-tip",
            "Dustpan"
        ],
        "topicId": "clothing",
        "questions": [
            {
                "question": "What do you use to hang wet clothes outside to dry?",
                "choices": [
                    "Clothes pin",
                    "Bobby pin",
                    "Chapstick",
                    "Dustpan"
                ],
                "correctAnswer": "Clothes pin",
                "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
                "imageUrl": "/clothespin.png"
            },
            {
                "question": "What are the small black metal pins used to hold hair in place?",
                "choices": [
                    "Bobby pin",
                    "Q-tip",
                    "Chapstick",
                    "Dustpan"
                ],
                "correctAnswer": "Bobby pin",
                "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
                "imageUrl": "/bobbypin.png"
            },
            {
                "question": "What do you apply to dry or chapped lips?",
                "choices": [
                    "Chapstick",
                    "Q-tip",
                    "Clothes pin",
                    "Dustpan"
                ],
                "correctAnswer": "Chapstick",
                "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
                "imageUrl": "/chapstick.png"
            },
            {
                "question": "What are the cotton swabs used for cleaning small areas?",
                "choices": [
                    "Q-tip",
                    "Bobby pin",
                    "Chapstick",
                    "Clothes pin"
                ],
                "correctAnswer": "Q-tip",
                "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
                "imageUrl": "/qtip.png"
            },
            {
                "question": "What tool do you sweep dust and dirt into with a broom?",
                "choices": [
                    "Dustpan",
                    "Clothes pin",
                    "Bobby pin",
                    "Chapstick"
                ],
                "correctAnswer": "Dustpan",
                "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
                "imageUrl": "/dustpan.png"
            }
        ]
    },
    "clothing-1": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/uR7bSJYQEc0",
        "title": "What do you call this in English? 😱🇺🇸",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Clothes pin",
            "Bobby pin",
            "Chapstick",
            "Q-tip",
            "Dustpan"
        ],
        "topicId": "clothing",
        "questions": [
            {
                "question": "What do you use to hang wet clothes outside to dry?",
                "choices": [
                    "Clothes pin",
                    "Bobby pin",
                    "Chapstick",
                    "Dustpan"
                ],
                "correctAnswer": "Clothes pin",
                "explanation": "A clothes pin clamps clothes onto a clothesline to hold them in place.",
                "imageUrl": "/clothespin.png"
            },
            {
                "question": "What are the small black metal pins used to hold hair in place?",
                "choices": [
                    "Bobby pin",
                    "Q-tip",
                    "Chapstick",
                    "Dustpan"
                ],
                "correctAnswer": "Bobby pin",
                "explanation": "Bobby pins are tiny double-pronged hairpins used to secure hair.",
                "imageUrl": "/bobbypin.png"
            },
            {
                "question": "What do you apply to dry or chapped lips?",
                "choices": [
                    "Chapstick",
                    "Q-tip",
                    "Clothes pin",
                    "Dustpan"
                ],
                "correctAnswer": "Chapstick",
                "explanation": "Chapstick (lip balm) is used to moisturize dry lips.",
                "imageUrl": "/chapstick.png"
            },
            {
                "question": "What are the cotton swabs used for cleaning small areas?",
                "choices": [
                    "Q-tip",
                    "Bobby pin",
                    "Chapstick",
                    "Clothes pin"
                ],
                "correctAnswer": "Q-tip",
                "explanation": "A Q-tip is a small stick with cotton on both ends used for cleaning or hygiene.",
                "imageUrl": "/qtip.png"
            },
            {
                "question": "What tool do you sweep dust and dirt into with a broom?",
                "choices": [
                    "Dustpan",
                    "Clothes pin",
                    "Bobby pin",
                    "Chapstick"
                ],
                "correctAnswer": "Dustpan",
                "explanation": "A dustpan is a flat scoop used to collect dust swept off the floor.",
                "imageUrl": "/dustpan.png"
            }
        ]
    },
    "cooking-utensils": {
        "grade": 4,
        "videoUrl": "https://www.youtube.com/embed/2_H0P9o-Xg4",
        "title": "Must-Know Kitchen Utensils 🍳",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Whisk",
            "Spatula",
            "Ladle",
            "Colander",
            "Grater"
        ],
        "topicId": "cooking-utensils",
        "questions": [
            {
                "question": "Which tool has wire loops and is used to beat eggs or cream?",
                "choices": [
                    "Whisk",
                    "Spatula",
                    "Ladle",
                    "Colander"
                ],
                "correctAnswer": "Whisk",
                "explanation": "A whisk blends ingredients smoothly or incorporates air into mixes."
            },
            {
                "question": "What flat, flexible tool is used to flip pancakes or burgers?",
                "choices": [
                    "Spatula",
                    "Ladle",
                    "Grater",
                    "Colander"
                ],
                "correctAnswer": "Spatula",
                "explanation": "A spatula is flat and wide, ideal for flipping or lifting food."
            },
            {
                "question": "What deep-cupped spoon is used to serve soup or broth?",
                "choices": [
                    "Ladle",
                    "Whisk",
                    "Colander",
                    "Grater"
                ],
                "correctAnswer": "Ladle",
                "explanation": "A ladle has a long handle and a large bowl for scooping liquids."
            },
            {
                "question": "What bowl with holes is used to drain water from pasta?",
                "choices": [
                    "Colander",
                    "Spatula",
                    "Whisk",
                    "Grater"
                ],
                "correctAnswer": "Colander",
                "explanation": "A colander lets water flow out through small holes while keeping the food inside."
            },
            {
                "question": "What metal tool with sharp slots is used to shred cheese?",
                "choices": [
                    "Grater",
                    "Ladle",
                    "Colander",
                    "Spatula"
                ],
                "correctAnswer": "Grater",
                "explanation": "A grater cuts food into small shreds when rubbed across its metal surface."
            }
        ]
    },
    "cooking-utensils-1": {
        "grade": 4,
        "videoUrl": "https://www.youtube.com/embed/2_H0P9o-Xg4",
        "title": "Must-Know Kitchen Utensils 🍳",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Whisk",
            "Spatula",
            "Ladle",
            "Colander",
            "Grater"
        ],
        "topicId": "cooking-utensils",
        "questions": [
            {
                "question": "Which tool has wire loops and is used to beat eggs or cream?",
                "choices": [
                    "Whisk",
                    "Spatula",
                    "Ladle",
                    "Colander"
                ],
                "correctAnswer": "Whisk",
                "explanation": "A whisk blends ingredients smoothly or incorporates air into mixes."
            },
            {
                "question": "What flat, flexible tool is used to flip pancakes or burgers?",
                "choices": [
                    "Spatula",
                    "Ladle",
                    "Grater",
                    "Colander"
                ],
                "correctAnswer": "Spatula",
                "explanation": "A spatula is flat and wide, ideal for flipping or lifting food."
            },
            {
                "question": "What deep-cupped spoon is used to serve soup or broth?",
                "choices": [
                    "Ladle",
                    "Whisk",
                    "Colander",
                    "Grater"
                ],
                "correctAnswer": "Ladle",
                "explanation": "A ladle has a long handle and a large bowl for scooping liquids."
            },
            {
                "question": "What bowl with holes is used to drain water from pasta?",
                "choices": [
                    "Colander",
                    "Spatula",
                    "Whisk",
                    "Grater"
                ],
                "correctAnswer": "Colander",
                "explanation": "A colander lets water flow out through small holes while keeping the food inside."
            },
            {
                "question": "What metal tool with sharp slots is used to shred cheese?",
                "choices": [
                    "Grater",
                    "Ladle",
                    "Colander",
                    "Spatula"
                ],
                "correctAnswer": "Grater",
                "explanation": "A grater cuts food into small shreds when rubbed across its metal surface."
            }
        ]
    },
    "economics-finance": {
        "grade": 11,
        "videoUrl": "https://www.youtube.com/embed/0QfS0bWqXnE",
        "title": "High-Frequency SAT/ACT Words 🎓",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Pragmatic",
            "Ambiguous",
            "Ephemeral",
            "Resilient",
            "Scrutinize"
        ],
        "topicId": "economics-finance",
        "questions": [
            {
                "question": "If a solution is 'pragmatic', it is:",
                "choices": [
                    "Practical / Sensible",
                    "Ideal / Perfect",
                    "Difficult",
                    "Temporary"
                ],
                "correctAnswer": "Practical / Sensible",
                "explanation": "Pragmatic means dealing with things sensibly and realistically based on practical matters."
            },
            {
                "question": "When a statement or description is 'ambiguous', it is:",
                "choices": [
                    "Unclear / Open to multiple meanings",
                    "Extremely clear",
                    "Very funny",
                    "Long"
                ],
                "correctAnswer": "Unclear / Open to multiple meanings",
                "explanation": "Ambiguous means open to more than one interpretation; having a double meaning."
            },
            {
                "question": "What does 'ephemeral' mean?",
                "choices": [
                    "Short-lived / Temporary",
                    "Everlasting",
                    "Beautiful",
                    "Heavy"
                ],
                "correctAnswer": "Short-lived / Temporary",
                "explanation": "Ephemeral means lasting for a very short time."
            },
            {
                "question": "A 'resilient' person is someone who:",
                "choices": [
                    "Recovers quickly from difficulties",
                    "Gives up easily",
                    "Never talks",
                    "Is very rich"
                ],
                "correctAnswer": "Recovers quickly from difficulties",
                "explanation": "Resilient means able to withstand or recover quickly from difficult conditions."
            },
            {
                "question": "To 'scrutinize' a document means to:",
                "choices": [
                    "Examine it very closely",
                    "Throw it away",
                    "Sign it quickly",
                    "Copy it"
                ],
                "correctAnswer": "Examine it very closely",
                "explanation": "Scrutinize means to examine or inspect closely and thoroughly."
            }
        ]
    },
    "economics-finance-1": {
        "grade": 11,
        "videoUrl": "https://www.youtube.com/embed/0QfS0bWqXnE",
        "title": "High-Frequency SAT/ACT Words 🎓",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Pragmatic",
            "Ambiguous",
            "Ephemeral",
            "Resilient",
            "Scrutinize"
        ],
        "topicId": "economics-finance",
        "questions": [
            {
                "question": "If a solution is 'pragmatic', it is:",
                "choices": [
                    "Practical / Sensible",
                    "Ideal / Perfect",
                    "Difficult",
                    "Temporary"
                ],
                "correctAnswer": "Practical / Sensible",
                "explanation": "Pragmatic means dealing with things sensibly and realistically based on practical matters."
            },
            {
                "question": "When a statement or description is 'ambiguous', it is:",
                "choices": [
                    "Unclear / Open to multiple meanings",
                    "Extremely clear",
                    "Very funny",
                    "Long"
                ],
                "correctAnswer": "Unclear / Open to multiple meanings",
                "explanation": "Ambiguous means open to more than one interpretation; having a double meaning."
            },
            {
                "question": "What does 'ephemeral' mean?",
                "choices": [
                    "Short-lived / Temporary",
                    "Everlasting",
                    "Beautiful",
                    "Heavy"
                ],
                "correctAnswer": "Short-lived / Temporary",
                "explanation": "Ephemeral means lasting for a very short time."
            },
            {
                "question": "A 'resilient' person is someone who:",
                "choices": [
                    "Recovers quickly from difficulties",
                    "Gives up easily",
                    "Never talks",
                    "Is very rich"
                ],
                "correctAnswer": "Recovers quickly from difficulties",
                "explanation": "Resilient means able to withstand or recover quickly from difficult conditions."
            },
            {
                "question": "To 'scrutinize' a document means to:",
                "choices": [
                    "Examine it very closely",
                    "Throw it away",
                    "Sign it quickly",
                    "Copy it"
                ],
                "correctAnswer": "Examine it very closely",
                "explanation": "Scrutinize means to examine or inspect closely and thoroughly."
            }
        ]
    },
    "epistemology": {
        "grade": 12,
        "videoUrl": "https://www.youtube.com/embed/G6jWcZ6w3rM",
        "title": "Sophisticated Scholarly Terms 🏛️",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Quintessential",
            "Kakotopia",
            "Anachronistic",
            "Cacophony",
            "Obfuscate"
        ],
        "topicId": "epistemology",
        "questions": [
            {
                "question": "What does 'quintessential' mean?",
                "choices": [
                    "Representing the perfect example of something",
                    "Very old",
                    "Rare",
                    "Five-sided"
                ],
                "correctAnswer": "Representing the perfect example of something",
                "explanation": "Quintessential represents the most perfect or typical example of a quality or class."
            },
            {
                "question": "What is a 'cacophony'?",
                "choices": [
                    "A harsh, discordant mixture of sounds",
                    "A beautiful song",
                    "A silent room",
                    "A megaphone"
                ],
                "correctAnswer": "A harsh, discordant mixture of sounds",
                "explanation": "Cacophony refers to a harsh, discordant, and unpleasant mixture of sounds."
            },
            {
                "question": "To 'obfuscate' the truth means to:",
                "choices": [
                    "Make it unclear / confuse it",
                    "Reveal it clearly",
                    "Lie under oath",
                    "Write it down"
                ],
                "correctAnswer": "Make it unclear / confuse it",
                "explanation": "Obfuscate means to render obscure, unclear, or unintelligible."
            },
            {
                "question": "Something that is out of its correct historical time is:",
                "choices": [
                    "Anachronistic",
                    "Quintessential",
                    "Cacophony",
                    "Obfuscate"
                ],
                "correctAnswer": "Anachronistic",
                "explanation": "Anachronistic means belonging or appropriate to a period other than that in which it exists."
            },
            {
                "question": "A state or place of extreme misery and corruption (opposite of utopia) is:",
                "choices": [
                    "Kakotopia / Dystopia",
                    "Quintessential",
                    "Utopia",
                    "Oasis"
                ],
                "correctAnswer": "Kakotopia / Dystopia",
                "explanation": "Kakotopia (or dystopia) is a state or society characterized by human misery, oppression, and disease."
            }
        ]
    },
    "epistemology-1": {
        "grade": 12,
        "videoUrl": "https://www.youtube.com/embed/G6jWcZ6w3rM",
        "title": "Sophisticated Scholarly Terms 🏛️",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Quintessential",
            "Kakotopia",
            "Anachronistic",
            "Cacophony",
            "Obfuscate"
        ],
        "topicId": "epistemology",
        "questions": [
            {
                "question": "What does 'quintessential' mean?",
                "choices": [
                    "Representing the perfect example of something",
                    "Very old",
                    "Rare",
                    "Five-sided"
                ],
                "correctAnswer": "Representing the perfect example of something",
                "explanation": "Quintessential represents the most perfect or typical example of a quality or class."
            },
            {
                "question": "What is a 'cacophony'?",
                "choices": [
                    "A harsh, discordant mixture of sounds",
                    "A beautiful song",
                    "A silent room",
                    "A megaphone"
                ],
                "correctAnswer": "A harsh, discordant mixture of sounds",
                "explanation": "Cacophony refers to a harsh, discordant, and unpleasant mixture of sounds."
            },
            {
                "question": "To 'obfuscate' the truth means to:",
                "choices": [
                    "Make it unclear / confuse it",
                    "Reveal it clearly",
                    "Lie under oath",
                    "Write it down"
                ],
                "correctAnswer": "Make it unclear / confuse it",
                "explanation": "Obfuscate means to render obscure, unclear, or unintelligible."
            },
            {
                "question": "Something that is out of its correct historical time is:",
                "choices": [
                    "Anachronistic",
                    "Quintessential",
                    "Cacophony",
                    "Obfuscate"
                ],
                "correctAnswer": "Anachronistic",
                "explanation": "Anachronistic means belonging or appropriate to a period other than that in which it exists."
            },
            {
                "question": "A state or place of extreme misery and corruption (opposite of utopia) is:",
                "choices": [
                    "Kakotopia / Dystopia",
                    "Quintessential",
                    "Utopia",
                    "Oasis"
                ],
                "correctAnswer": "Kakotopia / Dystopia",
                "explanation": "Kakotopia (or dystopia) is a state or society characterized by human misery, oppression, and disease."
            }
        ]
    },
    "farm-animals": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/HEV51Qee0M8",
        "title": "What is this called? #english #learnenglish #vocab...",
        "channel": "@EnglishMirage",
        "words": [
            "Bat",
            "Bear",
            "Buffalo",
            "Camel",
            "Crab"
        ],
        "topicId": "farm-animals",
        "questions": [
            {
                "question": "Which of these is a large, strong animal with horns, often found on farms or in the wild?",
                "choices": [
                    "Buffalo",
                    "Bear",
                    "Camel",
                    "Crab"
                ],
                "correctAnswer": "Buffalo",
                "explanation": "Buffaloes are large, heavy mammals with horns, commonly domesticated or found in the wild."
            },
            {
                "question": "Which animal is a flying mammal that is active at night?",
                "choices": [
                    "Bat",
                    "Bear",
                    "Buffalo",
                    "Camel"
                ],
                "correctAnswer": "Bat",
                "explanation": "Bats are the only mammals capable of true and sustained flight, and they are nocturnal."
            },
            {
                "question": "Which large mammal has thick fur and is known to hibernate in the winter?",
                "choices": [
                    "Bear",
                    "Camel",
                    "Buffalo",
                    "Crab"
                ],
                "correctAnswer": "Bear",
                "explanation": "Bears are large, heavy mammals with thick fur, and many species hibernate during cold winter months."
            },
            {
                "question": "Which animal has a hump on its back and lives in the desert?",
                "choices": [
                    "Camel",
                    "Bear",
                    "Buffalo",
                    "Crab"
                ],
                "correctAnswer": "Camel",
                "explanation": "Camels are famous desert animals known for the humps on their backs which store fat."
            },
            {
                "question": "Which sea creature has a hard shell and walks sideways?",
                "choices": [
                    "Crab",
                    "Bat",
                    "Bear",
                    "Camel"
                ],
                "correctAnswer": "Crab",
                "explanation": "Crabs are decapod crustaceans with a thick exoskeleton and are known to walk sideways."
            }
        ]
    },
    "farm-animals-1": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/HEV51Qee0M8",
        "title": "What is this called? #english #learnenglish #vocab...",
        "channel": "@EnglishMirage",
        "words": [
            "Bat",
            "Bear",
            "Buffalo",
            "Camel",
            "Crab"
        ],
        "topicId": "farm-animals",
        "questions": [
            {
                "question": "Which of these is a large, strong animal with horns, often found on farms or in the wild?",
                "choices": [
                    "Buffalo",
                    "Bear",
                    "Camel",
                    "Crab"
                ],
                "correctAnswer": "Buffalo",
                "explanation": "Buffaloes are large, heavy mammals with horns, commonly domesticated or found in the wild."
            },
            {
                "question": "Which animal is a flying mammal that is active at night?",
                "choices": [
                    "Bat",
                    "Bear",
                    "Buffalo",
                    "Camel"
                ],
                "correctAnswer": "Bat",
                "explanation": "Bats are the only mammals capable of true and sustained flight, and they are nocturnal."
            },
            {
                "question": "Which large mammal has thick fur and is known to hibernate in the winter?",
                "choices": [
                    "Bear",
                    "Camel",
                    "Buffalo",
                    "Crab"
                ],
                "correctAnswer": "Bear",
                "explanation": "Bears are large, heavy mammals with thick fur, and many species hibernate during cold winter months."
            },
            {
                "question": "Which animal has a hump on its back and lives in the desert?",
                "choices": [
                    "Camel",
                    "Bear",
                    "Buffalo",
                    "Crab"
                ],
                "correctAnswer": "Camel",
                "explanation": "Camels are famous desert animals known for the humps on their backs which store fat."
            },
            {
                "question": "Which sea creature has a hard shell and walks sideways?",
                "choices": [
                    "Crab",
                    "Bat",
                    "Bear",
                    "Camel"
                ],
                "correctAnswer": "Crab",
                "explanation": "Crabs are decapod crustaceans with a thick exoskeleton and are known to walk sideways."
            }
        ]
    },
    "farm-animals-2": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/HEV51Qee0M8",
        "title": "Animal names quiz | English vocabulary learning #...",
        "channel": "@EnglishWordsCorner",
        "words": [
            "Dog",
            "Cat",
            "Rabbit",
            "Elephant"
        ],
        "topicId": "farm-animals",
        "questions": [
            {
                "question": "Which of these is a very large mammal with a trunk and big ears?",
                "choices": [
                    "Elephant",
                    "Dog",
                    "Cat",
                    "Rabbit"
                ],
                "correctAnswer": "Elephant",
                "explanation": "Elephants are the largest existing land animals, recognized by their long trunks and large ears."
            },
            {
                "question": "Which pet is known for saying 'meow' and chasing mice?",
                "choices": [
                    "Cat",
                    "Dog",
                    "Rabbit",
                    "Elephant"
                ],
                "correctAnswer": "Cat",
                "explanation": "Cats are small domesticated carnivorous mammals known for meowing and catching mice."
            },
            {
                "question": "Which pet is known as man's best friend and barks?",
                "choices": [
                    "Dog",
                    "Cat",
                    "Rabbit",
                    "Elephant"
                ],
                "correctAnswer": "Dog",
                "explanation": "Dogs are domesticated canines known for loyalty and barking sounds."
            },
            {
                "question": "Which small animal has long ears and loves to eat carrots?",
                "choices": [
                    "Rabbit",
                    "Dog",
                    "Cat",
                    "Elephant"
                ],
                "correctAnswer": "Rabbit",
                "explanation": "Rabbits are small mammals with long ears and fluffy tails that love vegetables."
            }
        ]
    },
    "farm-animals-3": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/HEV51Qee0M8",
        "title": "Let's see if you know the English name of the last a...",
        "channel": "@EnglishWordsCorner",
        "words": [
            "Sheep",
            "Bat",
            "Fox",
            "Bird",
            "Bear"
        ],
        "topicId": "farm-animals",
        "questions": [
            {
                "question": "Which animal is covered in wool and says 'baa'?",
                "choices": [
                    "Sheep",
                    "Fox",
                    "Bird",
                    "Bear"
                ],
                "correctAnswer": "Sheep",
                "explanation": "Sheep are domesticated mammals covered in thick woolly fleece."
            },
            {
                "question": "Which wild animal is known for being clever and has a bushy tail?",
                "choices": [
                    "Fox",
                    "Sheep",
                    "Bird",
                    "Bear"
                ],
                "correctAnswer": "Fox",
                "explanation": "Foxes are small-to-medium-sized omnivorous mammals known for their intelligence."
            },
            {
                "question": "Which animal has wings, feathers, and can fly?",
                "choices": [
                    "Bird",
                    "Sheep",
                    "Fox",
                    "Bear"
                ],
                "correctAnswer": "Bird",
                "explanation": "Birds are feathered, winged animals that are generally able to fly."
            },
            {
                "question": "Which animal is a flying mammal?",
                "choices": [
                    "Bat",
                    "Sheep",
                    "Fox",
                    "Bear"
                ],
                "correctAnswer": "Bat",
                "explanation": "Bats are flying mammals."
            },
            {
                "question": "Which large animal is known to love honey and fish?",
                "choices": [
                    "Bear",
                    "Sheep",
                    "Fox",
                    "Bird"
                ],
                "correctAnswer": "Bear",
                "explanation": "Bears are large omnivores known for eating fish and honey."
            }
        ]
    },
    "farm-animals-4": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/HEV51Qee0M8",
        "title": "Learn English Words: animals #animalname #engli...",
        "channel": "@EnglishWordsCorner",
        "words": [
            "Cow",
            "Rat",
            "Pig",
            "Camel",
            "Animal"
        ],
        "topicId": "farm-animals",
        "questions": [
            {
                "question": "Which animal gives us milk and says 'moo'?",
                "choices": [
                    "Cow",
                    "Pig",
                    "Camel",
                    "Rat"
                ],
                "correctAnswer": "Cow",
                "explanation": "Cows are large farm animals raised for milk and beef."
            },
            {
                "question": "Which farm animal has a curly tail and loves playing in mud?",
                "choices": [
                    "Pig",
                    "Cow",
                    "Camel",
                    "Rat"
                ],
                "correctAnswer": "Pig",
                "explanation": "Pigs are omnivorous domesticated animals known for pink bodies and curly tails."
            },
            {
                "question": "Which desert animal has a hump?",
                "choices": [
                    "Camel",
                    "Cow",
                    "Pig",
                    "Rat"
                ],
                "correctAnswer": "Camel",
                "explanation": "Camels are desert animals that carry fat in their humps."
            },
            {
                "question": "Which of these is a small rodent with a long tail?",
                "choices": [
                    "Rat",
                    "Cow",
                    "Pig",
                    "Camel"
                ],
                "correctAnswer": "Rat",
                "explanation": "Rats are small rodents with long hairless tails."
            },
            {
                "question": "What general word refers to all living creatures that are not plants?",
                "choices": [
                    "Animal",
                    "Cow",
                    "Pig",
                    "Camel"
                ],
                "correctAnswer": "Animal",
                "explanation": "Animal is the general term for living organisms in the animal kingdom."
            }
        ]
    },
    "food-drinks": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/HbvG-nV4DaM",
        "title": "What Is This Called in English? 🇬🇧 | Tea & Coffee #16",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Coffee",
            "Teapot",
            "Moka pot",
            "Teacup",
            "Explore"
        ],
        "topicId": "food-drinks",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coffee",
                    "Teapot",
                    "Teacup",
                    "Moka pot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Coffee",
                "explanation": "\"Coffee\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/20130929/pexels-photo-20130929.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coffee",
                    "Moka pot",
                    "Teacup",
                    "Teapot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Teapot",
                "explanation": "\"Teapot\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/11532730/pexels-photo-11532730.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Moka pot",
                    "Coffee",
                    "Teapot",
                    "Teacup"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Moka pot",
                "explanation": "\"Moka pot\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5996061/pexels-photo-5996061.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coffee",
                    "Teapot",
                    "Teacup",
                    "Moka pot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Teacup",
                "explanation": "\"Teacup\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/35380303/pexels-photo-35380303.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Teapot",
                    "Explore",
                    "Moka pot",
                    "Coffee"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4640946/pexels-photo-4640946.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "food-drinks-1": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/HbvG-nV4DaM",
        "title": "What Is This Called in English? 🇬🇧 | Tea & Coffee #16",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Coffee",
            "Teapot",
            "Moka pot",
            "Teacup",
            "Explore"
        ],
        "topicId": "food-drinks",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coffee",
                    "Teapot",
                    "Teacup",
                    "Moka pot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Coffee",
                "explanation": "\"Coffee\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/20130929/pexels-photo-20130929.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coffee",
                    "Moka pot",
                    "Teacup",
                    "Teapot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Teapot",
                "explanation": "\"Teapot\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/11532730/pexels-photo-11532730.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Moka pot",
                    "Coffee",
                    "Teapot",
                    "Teacup"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Moka pot",
                "explanation": "\"Moka pot\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5996061/pexels-photo-5996061.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coffee",
                    "Teapot",
                    "Teacup",
                    "Moka pot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Teacup",
                "explanation": "\"Teacup\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/35380303/pexels-photo-35380303.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Teapot",
                    "Explore",
                    "Moka pot",
                    "Coffee"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4640946/pexels-photo-4640946.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "food-meals": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/Sf4zNup1rec",
        "title": "What Is This Called in English? 🇬🇧 | Snacks & Candy #17",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Onion ring",
            "Chicken",
            "Chewing",
            "Potato",
            "Explore"
        ],
        "topicId": "food-meals",
        "questions": [
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Potato",
                    "Onion ring",
                    "Chicken",
                    "Chewing"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Onion ring",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/8880733/pexels-photo-8880733.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Onion ring",
                    "Chicken",
                    "Chewing",
                    "Potato"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Chicken",
                "explanation": "\"Chicken\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/33809594/pexels-photo-33809594.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Chicken",
                    "Potato",
                    "Onion ring",
                    "Chewing"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Chewing",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/8422852/pexels-photo-8422852.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Onion ring",
                    "Potato",
                    "Chicken",
                    "Chewing"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Potato",
                "explanation": "\"Potato\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7774212/pexels-photo-7774212.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Explore",
                    "Onion ring",
                    "Chicken",
                    "Chewing"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/16319803/pexels-photo-16319803.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "food-meals-1": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/Sf4zNup1rec",
        "title": "What Is This Called in English? 🇬🇧 | Snacks & Candy #17",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Onion ring",
            "Chicken",
            "Chewing",
            "Potato",
            "Explore"
        ],
        "topicId": "food-meals",
        "questions": [
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Potato",
                    "Onion ring",
                    "Chicken",
                    "Chewing"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Onion ring",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/8880733/pexels-photo-8880733.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Onion ring",
                    "Chicken",
                    "Chewing",
                    "Potato"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Chicken",
                "explanation": "\"Chicken\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/33809594/pexels-photo-33809594.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Chicken",
                    "Potato",
                    "Onion ring",
                    "Chewing"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Chewing",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/8422852/pexels-photo-8422852.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Onion ring",
                    "Potato",
                    "Chicken",
                    "Chewing"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Potato",
                "explanation": "\"Potato\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7774212/pexels-photo-7774212.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Explore",
                    "Onion ring",
                    "Chicken",
                    "Chewing"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/16319803/pexels-photo-16319803.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "food-meals-2": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/xFeaApa5sHw",
        "title": "What Is This Called in English? | Learn English Word | 05",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Apple",
            "Orange",
            "Milk",
            "Egg",
            "Banana"
        ],
        "topicId": "food-meals",
        "questions": [
            {
                "question": "Which sweet, round fruit can be red, green, or yellow?",
                "choices": [
                    "Apple",
                    "Egg",
                    "Milk",
                    "Orange"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Apple",
                "explanation": "Apples grow on trees and make a nice, crunchy snack.",
                "imageUrl": "https://images.pexels.com/photos/17406436/pexels-photo-17406436.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What fruit shares its name with its bright color?",
                "choices": [
                    "Egg",
                    "Milk",
                    "Orange",
                    "Apple"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Orange",
                "explanation": "An orange is a citrus fruit that has a bright orange peel.",
                "imageUrl": "https://images.pexels.com/photos/5689624/pexels-photo-5689624.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Egg",
                    "Orange",
                    "Milk",
                    "Apple"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Milk",
                "explanation": "\"Milk\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/33789468/pexels-photo-33789468.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Apple",
                    "Egg",
                    "Milk",
                    "Orange"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Egg",
                "explanation": "\"Egg\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/32149473/pexels-photo-32149473.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Orange",
                    "Apple",
                    "Milk",
                    "Banana"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Banana",
                "explanation": "\"Banana\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/33653885/pexels-photo-33653885.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "food-meals-3": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/YJKIvSR_Wdw",
        "title": "What Is This Called in English? | Learn English Word | 02",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Guava",
            "Grape",
            "Honeydew",
            "Watermelon",
            "Kiwi"
        ],
        "topicId": "food-meals",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Watermelon",
                    "Honeydew",
                    "Guava",
                    "Grape"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Guava",
                "explanation": "\"Guava\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/28536571/pexels-photo-28536571.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Honeydew",
                    "Grape",
                    "Guava",
                    "Watermelon"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Grape",
                "explanation": "\"Grape\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/29195196/pexels-photo-29195196.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Grape",
                    "Guava",
                    "Honeydew",
                    "Watermelon"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Honeydew",
                "explanation": "\"Honeydew\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/4943056/pexels-photo-4943056.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Honeydew",
                    "Guava",
                    "Watermelon",
                    "Grape"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Watermelon",
                "explanation": "\"Watermelon\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/3429784/pexels-photo-3429784.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Honeydew",
                    "Grape",
                    "Guava",
                    "Kiwi"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Kiwi",
                "explanation": "\"Kiwi\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/30781384/pexels-photo-30781384.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "food-meals-4": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/r9p9SunFcMY",
        "title": "What Is This Called in English? | Learn English Word | 03",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Carrot",
            "Tomato",
            "Potato",
            "Lemon",
            "Pineapple"
        ],
        "topicId": "food-meals",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Carrot",
                    "Potato",
                    "Tomato",
                    "Lemon"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Carrot",
                "explanation": "\"Carrot\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7607823/pexels-photo-7607823.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Tomato",
                    "Lemon",
                    "Potato",
                    "Carrot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Tomato",
                "explanation": "\"Tomato\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/34993617/pexels-photo-34993617.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Potato",
                    "Lemon",
                    "Tomato",
                    "Carrot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Potato",
                "explanation": "\"Potato\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/27961865/pexels-photo-27961865.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Lemon",
                    "Tomato",
                    "Carrot",
                    "Potato"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Lemon",
                "explanation": "\"Lemon\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7195128/pexels-photo-7195128.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Potato",
                    "Pineapple",
                    "Carrot",
                    "Tomato"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pineapple",
                "explanation": "\"Pineapple\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/28870569/pexels-photo-28870569.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "food-meals-5": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/2-ZjXvMACEY",
        "title": "What Is This Called in English? | Learn English Word | 04",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Apple",
            "Orange",
            "Banana",
            "Mango",
            "Grape"
        ],
        "topicId": "food-meals",
        "questions": [
            {
                "question": "Which sweet, round fruit can be red, green, or yellow?",
                "choices": [
                    "Apple",
                    "Mango",
                    "Orange",
                    "Banana"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Apple",
                "explanation": "Apples grow on trees and make a nice, crunchy snack.",
                "imageUrl": "https://images.pexels.com/photos/8286692/pexels-photo-8286692.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What fruit shares its name with its bright color?",
                "choices": [
                    "Orange",
                    "Apple",
                    "Mango",
                    "Banana"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    "/bəˈnɑːnə/"
                ],
                "correctAnswer": "Orange",
                "explanation": "An orange is a citrus fruit that has a bright orange peel.",
                "imageUrl": "https://images.pexels.com/photos/11065671/pexels-photo-11065671.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Apple",
                    "Banana",
                    "Orange",
                    "Mango"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Banana",
                "explanation": "\"Banana\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/10899478/pexels-photo-10899478.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Orange",
                    "Apple",
                    "Banana",
                    "Mango"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Mango",
                "explanation": "\"Mango\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/32134957/pexels-photo-32134957.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Apple",
                    "Banana",
                    "Orange",
                    "Grape"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Grape",
                "explanation": "\"Grape\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6844554/pexels-photo-6844554.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "geography-travel": {
        "grade": 5,
        "videoUrl": "https://www.youtube.com/embed/OqgHpyqQzrc",
        "title": "Everyday Idioms and Phrases 🗣️",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Good luck",
            "Sick",
            "Face a difficulty",
            "Reveal a secret",
            "Very easy"
        ],
        "topicId": "geography-travel",
        "questions": [
            {
                "question": "What does it mean when someone says 'break a leg'?",
                "choices": [
                    "Good luck",
                    "Get hurt",
                    "Run fast",
                    "Sleep early"
                ],
                "correctAnswer": "Good luck",
                "explanation": "In theater and performance, saying 'break a leg' is an idiom wishing good luck!"
            },
            {
                "question": "If you are feeling 'under the weather', how do you feel?",
                "choices": [
                    "Sick / Unwell",
                    "Happy / Joyful",
                    "Cold",
                    "Super strong"
                ],
                "correctAnswer": "Sick / Unwell",
                "explanation": "To feel 'under the weather' is an idiom meaning you are feeling sick or slightly unwell."
            },
            {
                "question": "What does it mean to 'bite the bullet'?",
                "choices": [
                    "Face a difficult situation bravely",
                    "Eat quickly",
                    "Talk loudly",
                    "Shoot a gun"
                ],
                "correctAnswer": "Face a difficult situation bravely",
                "explanation": "To 'bite the bullet' means to get a tough task over with and face it courageously."
            },
            {
                "question": "What is the meaning of 'spill the beans'?",
                "choices": [
                    "Reveal a secret",
                    "Drop your food",
                    "Cook dinner",
                    "Clean up"
                ],
                "correctAnswer": "Reveal a secret",
                "explanation": "To 'spill the beans' is an idiom that means to let out a secret, often accidentally."
            },
            {
                "question": "If a task is a 'piece of cake', it is:",
                "choices": [
                    "Very easy",
                    "Delicious",
                    "Hard to do",
                    "Expensive"
                ],
                "correctAnswer": "Very easy",
                "explanation": "If something is a 'piece of cake', it is very simple and easy to complete!"
            }
        ]
    },
    "geography-travel-1": {
        "grade": 5,
        "videoUrl": "https://www.youtube.com/embed/OqgHpyqQzrc",
        "title": "Everyday Idioms and Phrases 🗣️",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Good luck",
            "Sick",
            "Face a difficulty",
            "Reveal a secret",
            "Very easy"
        ],
        "topicId": "geography-travel",
        "questions": [
            {
                "question": "What does it mean when someone says 'break a leg'?",
                "choices": [
                    "Good luck",
                    "Get hurt",
                    "Run fast",
                    "Sleep early"
                ],
                "correctAnswer": "Good luck",
                "explanation": "In theater and performance, saying 'break a leg' is an idiom wishing good luck!"
            },
            {
                "question": "If you are feeling 'under the weather', how do you feel?",
                "choices": [
                    "Sick / Unwell",
                    "Happy / Joyful",
                    "Cold",
                    "Super strong"
                ],
                "correctAnswer": "Sick / Unwell",
                "explanation": "To feel 'under the weather' is an idiom meaning you are feeling sick or slightly unwell."
            },
            {
                "question": "What does it mean to 'bite the bullet'?",
                "choices": [
                    "Face a difficult situation bravely",
                    "Eat quickly",
                    "Talk loudly",
                    "Shoot a gun"
                ],
                "correctAnswer": "Face a difficult situation bravely",
                "explanation": "To 'bite the bullet' means to get a tough task over with and face it courageously."
            },
            {
                "question": "What is the meaning of 'spill the beans'?",
                "choices": [
                    "Reveal a secret",
                    "Drop your food",
                    "Cook dinner",
                    "Clean up"
                ],
                "correctAnswer": "Reveal a secret",
                "explanation": "To 'spill the beans' is an idiom that means to let out a secret, often accidentally."
            },
            {
                "question": "If a task is a 'piece of cake', it is:",
                "choices": [
                    "Very easy",
                    "Delicious",
                    "Hard to do",
                    "Expensive"
                ],
                "correctAnswer": "Very easy",
                "explanation": "If something is a 'piece of cake', it is very simple and easy to complete!"
            }
        ]
    },
    "gre-mastery": {
        "grade": 12,
        "videoUrl": "https://www.youtube.com/embed/8tH8V5JocX8",
        "title": "Essential Rhetorical Figures 🎭",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Onomatopoeia",
            "Personification",
            "Metaphor",
            "Simile",
            "Symbolism"
        ],
        "topicId": "gre-mastery",
        "questions": [
            {
                "question": "Which device names a sound by imitating it, like 'buzz' or 'hiss'?",
                "choices": [
                    "Onomatopoeia",
                    "Metaphor",
                    "Personification",
                    "Simile"
                ],
                "correctAnswer": "Onomatopoeia",
                "explanation": "Onomatopoeia is the formation of a word from a sound associated with what is named."
            },
            {
                "question": "Giving human qualities to non-human things (like 'the wind whispered') is:",
                "choices": [
                    "Personification",
                    "Simile",
                    "Symbolism",
                    "Metaphor"
                ],
                "correctAnswer": "Personification",
                "explanation": "Personification attributes human characteristics to animals, objects, or concepts."
            },
            {
                "question": "A direct comparison NOT using 'like' or 'as' (e.g. 'time is a thief') is:",
                "choices": [
                    "Metaphor",
                    "Simile",
                    "Personification",
                    "Onomatopoeia"
                ],
                "correctAnswer": "Metaphor",
                "explanation": "A metaphor directly asserts that one thing is another, without comparison words."
            },
            {
                "question": "A comparison using 'like' or 'as' (e.g. 'brave as a lion') is:",
                "choices": [
                    "Simile",
                    "Metaphor",
                    "Symbolism",
                    "Personification"
                ],
                "correctAnswer": "Simile",
                "explanation": "A simile compares two things explicitly using terms such as 'like' or 'as'."
            },
            {
                "question": "Using an object or color to represent a deeper idea is:",
                "choices": [
                    "Symbolism",
                    "Simile",
                    "Personification",
                    "Metaphor"
                ],
                "correctAnswer": "Symbolism",
                "explanation": "Symbolism uses symbols to represent ideas or qualities beyond the literal meaning."
            }
        ]
    },
    "gre-mastery-1": {
        "grade": 12,
        "videoUrl": "https://www.youtube.com/embed/8tH8V5JocX8",
        "title": "Essential Rhetorical Figures 🎭",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Onomatopoeia",
            "Personification",
            "Metaphor",
            "Simile",
            "Symbolism"
        ],
        "topicId": "gre-mastery",
        "questions": [
            {
                "question": "Which device names a sound by imitating it, like 'buzz' or 'hiss'?",
                "choices": [
                    "Onomatopoeia",
                    "Metaphor",
                    "Personification",
                    "Simile"
                ],
                "correctAnswer": "Onomatopoeia",
                "explanation": "Onomatopoeia is the formation of a word from a sound associated with what is named."
            },
            {
                "question": "Giving human qualities to non-human things (like 'the wind whispered') is:",
                "choices": [
                    "Personification",
                    "Simile",
                    "Symbolism",
                    "Metaphor"
                ],
                "correctAnswer": "Personification",
                "explanation": "Personification attributes human characteristics to animals, objects, or concepts."
            },
            {
                "question": "A direct comparison NOT using 'like' or 'as' (e.g. 'time is a thief') is:",
                "choices": [
                    "Metaphor",
                    "Simile",
                    "Personification",
                    "Onomatopoeia"
                ],
                "correctAnswer": "Metaphor",
                "explanation": "A metaphor directly asserts that one thing is another, without comparison words."
            },
            {
                "question": "A comparison using 'like' or 'as' (e.g. 'brave as a lion') is:",
                "choices": [
                    "Simile",
                    "Metaphor",
                    "Symbolism",
                    "Personification"
                ],
                "correctAnswer": "Simile",
                "explanation": "A simile compares two things explicitly using terms such as 'like' or 'as'."
            },
            {
                "question": "Using an object or color to represent a deeper idea is:",
                "choices": [
                    "Symbolism",
                    "Simile",
                    "Personification",
                    "Metaphor"
                ],
                "correctAnswer": "Symbolism",
                "explanation": "Symbolism uses symbols to represent ideas or qualities beyond the literal meaning."
            }
        ]
    },
    "health-body": {
        "grade": 3,
        "videoUrl": "https://www.youtube.com/embed/VETWVYWsyko",
        "title": "What Is This Called in English? 🇬🇧 | Face Parts #8",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Nose",
            "Mouth",
            "Eye",
            "Ear",
            "Explore"
        ],
        "topicId": "health-body",
        "questions": [
            {
                "question": "Which organ on our face do we use to breathe and smell things?",
                "choices": [
                    "Mouth",
                    "Nose",
                    "Ear",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Nose",
                "explanation": "The nose is the organ on our face used for smelling and breathing.",
                "imageUrl": "https://images.pexels.com/photos/8727385/pexels-photo-8727385.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which body part do we use to eat, talk, and smile?",
                "choices": [
                    "Mouth",
                    "Nose",
                    "Ear",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Mouth",
                "explanation": "The mouth contains our teeth and tongue, helping us speak and eat.",
                "imageUrl": "https://images.pexels.com/photos/8727479/pexels-photo-8727479.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Ear",
                    "Nose",
                    "Mouth",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Eye",
                "explanation": "\"Eye\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/2440264/pexels-photo-2440264.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Eye",
                    "Ear",
                    "Mouth",
                    "Nose"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ear",
                "explanation": "\"Ear\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/13308389/pexels-photo-13308389.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Explore",
                    "Nose",
                    "Mouth",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4555538/pexels-photo-4555538.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "health-body-1": {
        "grade": 3,
        "videoUrl": "https://www.youtube.com/embed/VETWVYWsyko",
        "title": "What Is This Called in English? 🇬🇧 | Face Parts #8",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Nose",
            "Mouth",
            "Eye",
            "Ear",
            "Explore"
        ],
        "topicId": "health-body",
        "questions": [
            {
                "question": "Which organ on our face do we use to breathe and smell things?",
                "choices": [
                    "Mouth",
                    "Nose",
                    "Ear",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Nose",
                "explanation": "The nose is the organ on our face used for smelling and breathing.",
                "imageUrl": "https://images.pexels.com/photos/8727385/pexels-photo-8727385.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which body part do we use to eat, talk, and smile?",
                "choices": [
                    "Mouth",
                    "Nose",
                    "Ear",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Mouth",
                "explanation": "The mouth contains our teeth and tongue, helping us speak and eat.",
                "imageUrl": "https://images.pexels.com/photos/8727479/pexels-photo-8727479.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Ear",
                    "Nose",
                    "Mouth",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Eye",
                "explanation": "\"Eye\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/2440264/pexels-photo-2440264.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Eye",
                    "Ear",
                    "Mouth",
                    "Nose"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ear",
                "explanation": "\"Ear\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/13308389/pexels-photo-13308389.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Explore",
                    "Nose",
                    "Mouth",
                    "Eye"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4555538/pexels-photo-4555538.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "health-medicine": {
        "grade": 4,
        "videoUrl": "https://www.youtube.com/embed/ViGE5pjVdjU",
        "title": "What Is This Called in English? | Learn English Word | 01",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Chapped",
            "Scab",
            "Vitiligo",
            "Frenulum",
            "Explore"
        ],
        "topicId": "health-medicine",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Frenulum",
                    "Chapped",
                    "Scab",
                    "Vitiligo"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Chapped",
                "explanation": "\"Chapped\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/11487245/pexels-photo-11487245.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Vitiligo",
                    "Chapped",
                    "Frenulum",
                    "Scab"
                ],
                "choiceIpas": [
                    "",
                    "/tʃæpt/",
                    "/ˈfrɛnjələm/",
                    "/skæb/"
                ],
                "correctAnswer": "Scab",
                "explanation": "\"Scab\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7699355/pexels-photo-7699355.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Chapped",
                    "Frenulum",
                    "Vitiligo",
                    "Scab"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Vitiligo",
                "explanation": "\"Vitiligo\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5301539/pexels-photo-5301539.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Chapped",
                    "Vitiligo",
                    "Frenulum",
                    "Scab"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Frenulum",
                "explanation": "\"Frenulum\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/34529448/pexels-photo-34529448.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Vitiligo",
                    "Scab",
                    "Chapped",
                    "Explore"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/18569408/pexels-photo-18569408.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "health-medicine-1": {
        "grade": 4,
        "videoUrl": "https://www.youtube.com/embed/ViGE5pjVdjU",
        "title": "What Is This Called in English? | Learn English Word | 01",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Chapped",
            "Scab",
            "Vitiligo",
            "Frenulum",
            "Explore"
        ],
        "topicId": "health-medicine",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Frenulum",
                    "Chapped",
                    "Scab",
                    "Vitiligo"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Chapped",
                "explanation": "\"Chapped\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/11487245/pexels-photo-11487245.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Vitiligo",
                    "Chapped",
                    "Frenulum",
                    "Scab"
                ],
                "choiceIpas": [
                    "",
                    "/tʃæpt/",
                    "/ˈfrɛnjələm/",
                    "/skæb/"
                ],
                "correctAnswer": "Scab",
                "explanation": "\"Scab\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7699355/pexels-photo-7699355.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Chapped",
                    "Frenulum",
                    "Vitiligo",
                    "Scab"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Vitiligo",
                "explanation": "\"Vitiligo\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5301539/pexels-photo-5301539.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Chapped",
                    "Vitiligo",
                    "Frenulum",
                    "Scab"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Frenulum",
                "explanation": "\"Frenulum\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/34529448/pexels-photo-34529448.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Vitiligo",
                    "Scab",
                    "Chapped",
                    "Explore"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/18569408/pexels-photo-18569408.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "hobbies-games": {
        "grade": 3,
        "videoUrl": "https://www.youtube.com/embed/k5pTmDPDY8Q",
        "title": "What Is This Called in English? | Learn English Word | 06",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Balloon",
            "Party hat",
            "Decoration light",
            "Greeting",
            "Gift"
        ],
        "topicId": "hobbies-games",
        "questions": [
            {
                "question": "Which colorful toy floats high in the sky when filled with helium?",
                "choices": [
                    "Balloon",
                    "Party hat",
                    "Decoration light",
                    "Greeting"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Balloon",
                "explanation": "Balloons are made of rubber and expand when filled with air or gas.",
                "imageUrl": "https://images.pexels.com/photos/19326083/pexels-photo-19326083.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Balloon",
                    "Decoration light",
                    "Party hat",
                    "Greeting"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    "/ˈɡɹiːtɪŋ/"
                ],
                "correctAnswer": "Party hat",
                "explanation": "\"Party hat\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9628004/pexels-photo-9628004.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Greeting",
                    "Balloon",
                    "Decoration light",
                    "Party hat"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Decoration light",
                "explanation": "\"Decoration light\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/34649416/pexels-photo-34649416.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Greeting",
                    "Decoration light",
                    "Balloon",
                    "Party hat"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Greeting",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/5537978/pexels-photo-5537978.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Gift",
                    "Balloon",
                    "Party hat",
                    "Decoration light"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Gift",
                "explanation": "\"Gift\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6334844/pexels-photo-6334844.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "hobbies-games-1": {
        "grade": 3,
        "videoUrl": "https://www.youtube.com/embed/k5pTmDPDY8Q",
        "title": "What Is This Called in English? | Learn English Word | 06",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Balloon",
            "Party hat",
            "Decoration light",
            "Greeting",
            "Gift"
        ],
        "topicId": "hobbies-games",
        "questions": [
            {
                "question": "Which colorful toy floats high in the sky when filled with helium?",
                "choices": [
                    "Balloon",
                    "Party hat",
                    "Decoration light",
                    "Greeting"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Balloon",
                "explanation": "Balloons are made of rubber and expand when filled with air or gas.",
                "imageUrl": "https://images.pexels.com/photos/19326083/pexels-photo-19326083.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Balloon",
                    "Decoration light",
                    "Party hat",
                    "Greeting"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    "/ˈɡɹiːtɪŋ/"
                ],
                "correctAnswer": "Party hat",
                "explanation": "\"Party hat\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9628004/pexels-photo-9628004.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Greeting",
                    "Balloon",
                    "Decoration light",
                    "Party hat"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Decoration light",
                "explanation": "\"Decoration light\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/34649416/pexels-photo-34649416.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Greeting",
                    "Decoration light",
                    "Balloon",
                    "Party hat"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Greeting",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/5537978/pexels-photo-5537978.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Gift",
                    "Balloon",
                    "Party hat",
                    "Decoration light"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Gift",
                "explanation": "\"Gift\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6334844/pexels-photo-6334844.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "hygiene-grooming": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/-EvRsX91qLU",
        "title": "What Is This Called in English? 🇬🇧 | Bathroom Items #14",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Toilet",
            "Toothbrush",
            "Toothpaste",
            "Towel",
            "Explore"
        ],
        "topicId": "hygiene-grooming",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Toothbrush",
                    "Toilet",
                    "Towel",
                    "Toothpaste"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Toilet",
                "explanation": "\"Toilet\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/4239072/pexels-photo-4239072.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Towel",
                    "Toothpaste",
                    "Toothbrush",
                    "Toilet"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Toothbrush",
                "explanation": "\"Toothbrush\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6763784/pexels-photo-6763784.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Toothpaste",
                    "Towel",
                    "Toilet",
                    "Toothbrush"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Toothpaste",
                "explanation": "\"Toothpaste\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/27176881/pexels-photo-27176881.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Toothpaste",
                    "Toothbrush",
                    "Toilet",
                    "Towel"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Towel",
                "explanation": "\"Towel\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/2672634/pexels-photo-2672634.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Toilet",
                    "Toothpaste",
                    "Toothbrush",
                    "Explore"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4640947/pexels-photo-4640947.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "hygiene-grooming-1": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/-EvRsX91qLU",
        "title": "What Is This Called in English? 🇬🇧 | Bathroom Items #14",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Toilet",
            "Toothbrush",
            "Toothpaste",
            "Towel",
            "Explore"
        ],
        "topicId": "hygiene-grooming",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Toothbrush",
                    "Toilet",
                    "Towel",
                    "Toothpaste"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Toilet",
                "explanation": "\"Toilet\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/4239072/pexels-photo-4239072.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Towel",
                    "Toothpaste",
                    "Toothbrush",
                    "Toilet"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Toothbrush",
                "explanation": "\"Toothbrush\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6763784/pexels-photo-6763784.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Toothpaste",
                    "Towel",
                    "Toilet",
                    "Toothbrush"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Toothpaste",
                "explanation": "\"Toothpaste\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/27176881/pexels-photo-27176881.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Toothpaste",
                    "Toothbrush",
                    "Toilet",
                    "Towel"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Towel",
                "explanation": "\"Towel\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/2672634/pexels-photo-2672634.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Toilet",
                    "Toothpaste",
                    "Toothbrush",
                    "Explore"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4640947/pexels-photo-4640947.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "hygiene-grooming-2": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/7tbyXd0kxKc",
        "title": "What Is This Called in English? 🇬🇧 | Daily Objects #9",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Nail",
            "Razor",
            "Sponge",
            "Towel",
            "Explore"
        ],
        "topicId": "hygiene-grooming",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sponge",
                    "Razor",
                    "Nail",
                    "Towel"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Nail",
                "explanation": "\"Nail\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/34835304/pexels-photo-34835304.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Razor",
                    "Towel",
                    "Nail",
                    "Sponge"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Razor",
                "explanation": "\"Razor\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Towel",
                    "Nail",
                    "Sponge",
                    "Razor"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Sponge",
                "explanation": "\"Sponge\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9774860/pexels-photo-9774860.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Towel",
                    "Nail",
                    "Razor",
                    "Sponge"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Towel",
                "explanation": "\"Towel\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/4210314/pexels-photo-4210314.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Razor",
                    "Sponge",
                    "Nail",
                    "Explore"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/18569408/pexels-photo-18569408.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "hygiene-grooming-3": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/u1Q_qW6_Zsk",
        "title": "Bathroom Essentials Vocabulary 🧼",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Loofah",
            "Plunger",
            "Scale",
            "Toothpaste",
            "Faucet"
        ],
        "topicId": "hygiene-grooming",
        "questions": [
            {
                "question": "What spongy item do you use to scrub your body in the shower?",
                "choices": [
                    "Loofah",
                    "Plunger",
                    "Faucet",
                    "Scale"
                ],
                "correctAnswer": "Loofah",
                "explanation": "A loofah is a textured sponge-like mesh used for washing and exfoliating skin."
            },
            {
                "question": "What tool is used to clear blocks in toilets and sinks?",
                "choices": [
                    "Plunger",
                    "Scale",
                    "Toothpaste",
                    "Faucet"
                ],
                "correctAnswer": "Plunger",
                "explanation": "A plunger uses suction to clear blockages in pipes and drains."
            },
            {
                "question": "What device do you stand on to check your weight?",
                "choices": [
                    "Scale",
                    "Loofah",
                    "Toothpaste",
                    "Plunger"
                ],
                "correctAnswer": "Scale",
                "explanation": "A scale is used to measure the weight of an object or person."
            },
            {
                "question": "What minty paste is squeezed onto a toothbrush?",
                "choices": [
                    "Toothpaste",
                    "Loofah",
                    "Faucet",
                    "Plunger"
                ],
                "correctAnswer": "Toothpaste",
                "explanation": "Toothpaste cleans teeth, freshens breath, and prevents cavities."
            },
            {
                "question": "What is the fixture where water flows out of into the sink?",
                "choices": [
                    "Faucet",
                    "Scale",
                    "Toothpaste",
                    "Loofah"
                ],
                "correctAnswer": "Faucet",
                "explanation": "A faucet (or tap) controls the flow of water into a sink or tub."
            }
        ]
    },
    "jobs-occupations": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/0xKYNv73vtw",
        "title": "What Is This Called in English? 🇬🇧 | Law & Court #18",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Judge",
            "Cell",
            "Scale",
            "Courthouse",
            "Explore"
        ],
        "topicId": "jobs-occupations",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Cell",
                    "Scale",
                    "Judge",
                    "Courthouse"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Judge",
                "explanation": "\"Judge\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6077240/pexels-photo-6077240.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Judge",
                    "Courthouse",
                    "Cell",
                    "Scale"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Cell",
                "explanation": "\"Cell\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16882902/pexels-photo-16882902.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Courthouse",
                    "Judge",
                    "Scale",
                    "Cell"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Scale",
                "explanation": "\"Scale\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/8112195/pexels-photo-8112195.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Courthouse",
                    "Cell",
                    "Scale",
                    "Judge"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Courthouse",
                "explanation": "\"Courthouse\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16750823/pexels-photo-16750823.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Judge",
                    "Cell",
                    "Explore",
                    "Scale"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4641233/pexels-photo-4641233.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "jobs-occupations-1": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/0xKYNv73vtw",
        "title": "What Is This Called in English? 🇬🇧 | Law & Court #18",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Judge",
            "Cell",
            "Scale",
            "Courthouse",
            "Explore"
        ],
        "topicId": "jobs-occupations",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Cell",
                    "Scale",
                    "Judge",
                    "Courthouse"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Judge",
                "explanation": "\"Judge\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6077240/pexels-photo-6077240.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Judge",
                    "Courthouse",
                    "Cell",
                    "Scale"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Cell",
                "explanation": "\"Cell\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16882902/pexels-photo-16882902.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Courthouse",
                    "Judge",
                    "Scale",
                    "Cell"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Scale",
                "explanation": "\"Scale\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/8112195/pexels-photo-8112195.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Courthouse",
                    "Cell",
                    "Scale",
                    "Judge"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Courthouse",
                "explanation": "\"Courthouse\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16750823/pexels-photo-16750823.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Judge",
                    "Cell",
                    "Explore",
                    "Scale"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4641233/pexels-photo-4641233.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "literature-genres": {
        "grade": 7,
        "videoUrl": "https://www.youtube.com/embed/8-W_N411Kag",
        "title": "Essential Synonyms for Middle School 📚",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Abundant",
            "Trivial",
            "Obsolete",
            "Amicable",
            "Cluttered"
        ],
        "topicId": "literature-genres",
        "questions": [
            {
                "question": "What is a synonym for 'abundant'?",
                "choices": [
                    "Plentiful",
                    "Scarce",
                    "Empty",
                    "Dirty"
                ],
                "correctAnswer": "Plentiful",
                "explanation": "Abundant means existing or available in large quantities; plentiful."
            },
            {
                "question": "If something is 'trivial', it is:",
                "choices": [
                    "Unimportant",
                    "Crucial",
                    "Heavy",
                    "Old"
                ],
                "correctAnswer": "Unimportant",
                "explanation": "Trivial refers to details or facts that are of little value or importance."
            },
            {
                "question": "What does 'obsolete' mean?",
                "choices": [
                    "Outdated / No longer used",
                    "Brand new",
                    "Shining",
                    "Fast"
                ],
                "correctAnswer": "Outdated / No longer used",
                "explanation": "Obsolete means no longer produced or used; out of date."
            },
            {
                "question": "If a conversation was 'amicable', it was:",
                "choices": [
                    "Friendly",
                    "Hostile",
                    "Confusing",
                    "Quiet"
                ],
                "correctAnswer": "Friendly",
                "explanation": "Amicable relationships or negotiations are characterized by friendliness and goodwill."
            },
            {
                "question": "What does 'cluttered' mean?",
                "choices": [
                    "Messy / Full of things",
                    "Clean",
                    "Open",
                    "Dark"
                ],
                "correctAnswer": "Messy / Full of things",
                "explanation": "Cluttered describes a space crowded or untidily filled with items."
            }
        ]
    },
    "literature-genres-1": {
        "grade": 7,
        "videoUrl": "https://www.youtube.com/embed/8-W_N411Kag",
        "title": "Essential Synonyms for Middle School 📚",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Abundant",
            "Trivial",
            "Obsolete",
            "Amicable",
            "Cluttered"
        ],
        "topicId": "literature-genres",
        "questions": [
            {
                "question": "What is a synonym for 'abundant'?",
                "choices": [
                    "Plentiful",
                    "Scarce",
                    "Empty",
                    "Dirty"
                ],
                "correctAnswer": "Plentiful",
                "explanation": "Abundant means existing or available in large quantities; plentiful."
            },
            {
                "question": "If something is 'trivial', it is:",
                "choices": [
                    "Unimportant",
                    "Crucial",
                    "Heavy",
                    "Old"
                ],
                "correctAnswer": "Unimportant",
                "explanation": "Trivial refers to details or facts that are of little value or importance."
            },
            {
                "question": "What does 'obsolete' mean?",
                "choices": [
                    "Outdated / No longer used",
                    "Brand new",
                    "Shining",
                    "Fast"
                ],
                "correctAnswer": "Outdated / No longer used",
                "explanation": "Obsolete means no longer produced or used; out of date."
            },
            {
                "question": "If a conversation was 'amicable', it was:",
                "choices": [
                    "Friendly",
                    "Hostile",
                    "Confusing",
                    "Quiet"
                ],
                "correctAnswer": "Friendly",
                "explanation": "Amicable relationships or negotiations are characterized by friendliness and goodwill."
            },
            {
                "question": "What does 'cluttered' mean?",
                "choices": [
                    "Messy / Full of things",
                    "Clean",
                    "Open",
                    "Dark"
                ],
                "correctAnswer": "Messy / Full of things",
                "explanation": "Cluttered describes a space crowded or untidily filled with items."
            }
        ]
    },
    "playground-park": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/9b0l4iRZNXg",
        "title": "What Is This Called in English? 🇬🇧 | Park & City Words #19",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Swing",
            "Slide",
            "Seesaw",
            "Fountain",
            "Explore"
        ],
        "topicId": "playground-park",
        "questions": [
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Fountain",
                    "Slide",
                    "Swing",
                    "Seesaw"
                ],
                "choiceIpas": [
                    "[ˈfaʊn.ʔn̩]",
                    "/slaɪd/",
                    "/ˈswɪŋ/",
                    "/ˈsiːsɔː/"
                ],
                "correctAnswer": "Swing",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/30697294/pexels-photo-30697294.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈswɪŋ/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Fountain",
                    "Slide",
                    "Swing",
                    "Seesaw"
                ],
                "choiceIpas": [
                    "[ˈfaʊn.ʔn̩]",
                    "/slaɪd/",
                    "/ˈswɪŋ/",
                    "/ˈsiːsɔː/"
                ],
                "correctAnswer": "Slide",
                "explanation": "\"Slide\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7943718/pexels-photo-7943718.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/slaɪd/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Slide",
                    "Fountain",
                    "Seesaw",
                    "Swing"
                ],
                "choiceIpas": [
                    "/slaɪd/",
                    "[ˈfaʊn.ʔn̩]",
                    "/ˈsiːsɔː/",
                    "/ˈswɪŋ/"
                ],
                "correctAnswer": "Seesaw",
                "explanation": "\"Seesaw\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/17153903/pexels-photo-17153903.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈsiːsɔː/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Seesaw",
                    "Fountain",
                    "Swing",
                    "Slide"
                ],
                "choiceIpas": [
                    "/ˈsiːsɔː/",
                    "[ˈfaʊn.ʔn̩]",
                    "/ˈswɪŋ/",
                    "/slaɪd/"
                ],
                "correctAnswer": "Fountain",
                "explanation": "\"Fountain\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/35279443/pexels-photo-35279443.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "[ˈfaʊn.ʔn̩]",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Swing",
                    "Seesaw",
                    "Explore",
                    "Slide"
                ],
                "choiceIpas": [
                    "/ˈswɪŋ/",
                    "/ˈsiːsɔː/",
                    "/ɪkˈsplɔː/",
                    "/slaɪd/"
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/28811726/pexels-photo-28811726.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ɪkˈsplɔː/",
                "isMissingCustomIcon": false
            }
        ]
    },
    "playground-park-1": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/9b0l4iRZNXg",
        "title": "What Is This Called in English? 🇬🇧 | Park & City Words #19",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Swing",
            "Slide",
            "Seesaw",
            "Fountain",
            "Explore"
        ],
        "topicId": "playground-park",
        "questions": [
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Fountain",
                    "Slide",
                    "Swing",
                    "Seesaw"
                ],
                "choiceIpas": [
                    "[ˈfaʊn.ʔn̩]",
                    "/slaɪd/",
                    "/ˈswɪŋ/",
                    "/ˈsiːsɔː/"
                ],
                "correctAnswer": "Swing",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/30697294/pexels-photo-30697294.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈswɪŋ/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Fountain",
                    "Slide",
                    "Swing",
                    "Seesaw"
                ],
                "choiceIpas": [
                    "[ˈfaʊn.ʔn̩]",
                    "/slaɪd/",
                    "/ˈswɪŋ/",
                    "/ˈsiːsɔː/"
                ],
                "correctAnswer": "Slide",
                "explanation": "\"Slide\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7943718/pexels-photo-7943718.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/slaɪd/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Slide",
                    "Fountain",
                    "Seesaw",
                    "Swing"
                ],
                "choiceIpas": [
                    "/slaɪd/",
                    "[ˈfaʊn.ʔn̩]",
                    "/ˈsiːsɔː/",
                    "/ˈswɪŋ/"
                ],
                "correctAnswer": "Seesaw",
                "explanation": "\"Seesaw\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/17153903/pexels-photo-17153903.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈsiːsɔː/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Seesaw",
                    "Fountain",
                    "Swing",
                    "Slide"
                ],
                "choiceIpas": [
                    "/ˈsiːsɔː/",
                    "[ˈfaʊn.ʔn̩]",
                    "/ˈswɪŋ/",
                    "/slaɪd/"
                ],
                "correctAnswer": "Fountain",
                "explanation": "\"Fountain\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/35279443/pexels-photo-35279443.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "[ˈfaʊn.ʔn̩]",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Swing",
                    "Seesaw",
                    "Explore",
                    "Slide"
                ],
                "choiceIpas": [
                    "/ˈswɪŋ/",
                    "/ˈsiːsɔː/",
                    "/ɪkˈsplɔː/",
                    "/slaɪd/"
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/28811726/pexels-photo-28811726.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ɪkˈsplɔː/",
                "isMissingCustomIcon": false
            }
        ]
    },
    "sat-verbs": {
        "grade": 9,
        "videoUrl": "https://www.youtube.com/embed/782z161d9D4",
        "title": "Advanced Rhetoric and Literary Forms 📜",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Hyperbole",
            "Oxymoron",
            "Alliteration",
            "Euphemism",
            "Irony"
        ],
        "topicId": "sat-verbs",
        "questions": [
            {
                "question": "What is an extreme exaggeration called?",
                "choices": [
                    "Hyperbole",
                    "Oxymoron",
                    "Irony",
                    "Euphemism"
                ],
                "correctAnswer": "Hyperbole",
                "explanation": "Hyperbole is an exaggerated statement not meant to be taken literally."
            },
            {
                "question": "What do you call two opposite words put together, like 'deafening silence'?",
                "choices": [
                    "Oxymoron",
                    "Alliteration",
                    "Irony",
                    "Hyperbole"
                ],
                "correctAnswer": "Oxymoron",
                "explanation": "An oxymoron is a figure of speech in which contradictory terms appear side-by-side."
            },
            {
                "question": "What is the repetition of the same starting sound in words?",
                "choices": [
                    "Alliteration",
                    "Euphemism",
                    "Oxymoron",
                    "Irony"
                ],
                "correctAnswer": "Alliteration",
                "explanation": "Alliteration is the occurrence of the same letter or sound at the beginning of adjacent words."
            },
            {
                "question": "What is a milder or indirect word used instead of a harsh one?",
                "choices": [
                    "Euphemism",
                    "Hyperbole",
                    "Oxymoron",
                    "Alliteration"
                ],
                "correctAnswer": "Euphemism",
                "explanation": "A euphemism is a mild expression substituted for one considered too harsh or blunt."
            },
            {
                "question": "When the opposite of what is expected happens, it is:",
                "choices": [
                    "Irony",
                    "Alliteration",
                    "Euphemism",
                    "Hyperbole"
                ],
                "correctAnswer": "Irony",
                "explanation": "Irony is when the state of affairs or events is the reverse of what was expected."
            }
        ]
    },
    "sat-verbs-1": {
        "grade": 9,
        "videoUrl": "https://www.youtube.com/embed/782z161d9D4",
        "title": "Advanced Rhetoric and Literary Forms 📜",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Hyperbole",
            "Oxymoron",
            "Alliteration",
            "Euphemism",
            "Irony"
        ],
        "topicId": "sat-verbs",
        "questions": [
            {
                "question": "What is an extreme exaggeration called?",
                "choices": [
                    "Hyperbole",
                    "Oxymoron",
                    "Irony",
                    "Euphemism"
                ],
                "correctAnswer": "Hyperbole",
                "explanation": "Hyperbole is an exaggerated statement not meant to be taken literally."
            },
            {
                "question": "What do you call two opposite words put together, like 'deafening silence'?",
                "choices": [
                    "Oxymoron",
                    "Alliteration",
                    "Irony",
                    "Hyperbole"
                ],
                "correctAnswer": "Oxymoron",
                "explanation": "An oxymoron is a figure of speech in which contradictory terms appear side-by-side."
            },
            {
                "question": "What is the repetition of the same starting sound in words?",
                "choices": [
                    "Alliteration",
                    "Euphemism",
                    "Oxymoron",
                    "Irony"
                ],
                "correctAnswer": "Alliteration",
                "explanation": "Alliteration is the occurrence of the same letter or sound at the beginning of adjacent words."
            },
            {
                "question": "What is a milder or indirect word used instead of a harsh one?",
                "choices": [
                    "Euphemism",
                    "Hyperbole",
                    "Oxymoron",
                    "Alliteration"
                ],
                "correctAnswer": "Euphemism",
                "explanation": "A euphemism is a mild expression substituted for one considered too harsh or blunt."
            },
            {
                "question": "When the opposite of what is expected happens, it is:",
                "choices": [
                    "Irony",
                    "Alliteration",
                    "Euphemism",
                    "Hyperbole"
                ],
                "correctAnswer": "Irony",
                "explanation": "Irony is when the state of affairs or events is the reverse of what was expected."
            }
        ]
    },
    "science-lab": {
        "grade": 6,
        "videoUrl": "https://www.youtube.com/embed/m6g2w_H5Hts",
        "title": "Common Phrasal Verbs in English 🗣️",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Call off",
            "Put off",
            "Look up to",
            "Run out of",
            "Carry on"
        ],
        "topicId": "science-lab",
        "questions": [
            {
                "question": "What does it mean to 'call off' a meeting?",
                "choices": [
                    "Cancel it",
                    "Delay it",
                    "Start it",
                    "Record it"
                ],
                "correctAnswer": "Cancel it",
                "explanation": "To 'call off' means to cancel an event or agreement."
            },
            {
                "question": "If you 'put off' doing homework, what are you doing?",
                "choices": [
                    "Postponing / Procrastinating",
                    "Finishing it",
                    "Losing it",
                    "Sharing it"
                ],
                "correctAnswer": "Postponing / Procrastinating",
                "explanation": "To 'put off' means to delay or postpone doing something."
            },
            {
                "question": "When you 'look up to' someone, you:",
                "choices": [
                    "Respect / Admire them",
                    "Stand above them",
                    "Ignore them",
                    "Look at their head"
                ],
                "correctAnswer": "Respect / Admire them",
                "explanation": "To 'look up to' someone means to respect and admire them as a role model."
            },
            {
                "question": "What does 'run out of' sugar mean?",
                "choices": [
                    "Have none left",
                    "Buy more",
                    "Drop it",
                    "Find it"
                ],
                "correctAnswer": "Have none left",
                "explanation": "To 'run out of' something means to finish the supply so that none is left."
            },
            {
                "question": "What does it mean to 'carry on'?",
                "choices": [
                    "Continue doing something",
                    "Stop immediately",
                    "Lift something",
                    "Leave the room"
                ],
                "correctAnswer": "Continue doing something",
                "explanation": "To 'carry on' means to continue doing an activity despite difficulties."
            }
        ]
    },
    "science-lab-1": {
        "grade": 6,
        "videoUrl": "https://www.youtube.com/embed/m6g2w_H5Hts",
        "title": "Common Phrasal Verbs in English 🗣️",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Call off",
            "Put off",
            "Look up to",
            "Run out of",
            "Carry on"
        ],
        "topicId": "science-lab",
        "questions": [
            {
                "question": "What does it mean to 'call off' a meeting?",
                "choices": [
                    "Cancel it",
                    "Delay it",
                    "Start it",
                    "Record it"
                ],
                "correctAnswer": "Cancel it",
                "explanation": "To 'call off' means to cancel an event or agreement."
            },
            {
                "question": "If you 'put off' doing homework, what are you doing?",
                "choices": [
                    "Postponing / Procrastinating",
                    "Finishing it",
                    "Losing it",
                    "Sharing it"
                ],
                "correctAnswer": "Postponing / Procrastinating",
                "explanation": "To 'put off' means to delay or postpone doing something."
            },
            {
                "question": "When you 'look up to' someone, you:",
                "choices": [
                    "Respect / Admire them",
                    "Stand above them",
                    "Ignore them",
                    "Look at their head"
                ],
                "correctAnswer": "Respect / Admire them",
                "explanation": "To 'look up to' someone means to respect and admire them as a role model."
            },
            {
                "question": "What does 'run out of' sugar mean?",
                "choices": [
                    "Have none left",
                    "Buy more",
                    "Drop it",
                    "Find it"
                ],
                "correctAnswer": "Have none left",
                "explanation": "To 'run out of' something means to finish the supply so that none is left."
            },
            {
                "question": "What does it mean to 'carry on'?",
                "choices": [
                    "Continue doing something",
                    "Stop immediately",
                    "Lift something",
                    "Leave the room"
                ],
                "correctAnswer": "Continue doing something",
                "explanation": "To 'carry on' means to continue doing an activity despite difficulties."
            }
        ]
    },
    "shopping-money": {
        "grade": 4,
        "videoUrl": "https://www.youtube.com/embed/Qq0RPVzzWZk",
        "title": "What Is This Called in English? 🇬🇧 | Money Words #13",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Receipt",
            "Credit",
            "Coin",
            "Bill",
            "Explore"
        ],
        "topicId": "shopping-money",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Receipt",
                    "Bill",
                    "Credit",
                    "Coin"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Receipt",
                "explanation": "\"Receipt\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5242813/pexels-photo-5242813.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bill",
                    "Receipt",
                    "Credit",
                    "Coin"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Credit",
                "explanation": "\"Credit\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/4841691/pexels-photo-4841691.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Credit",
                    "Coin",
                    "Receipt",
                    "Bill"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Coin",
                "explanation": "\"Coin\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6777559/pexels-photo-6777559.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bill",
                    "Receipt",
                    "Coin",
                    "Credit"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Bill",
                "explanation": "\"Bill\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7651974/pexels-photo-7651974.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Credit",
                    "Receipt",
                    "Coin",
                    "Explore"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/16319803/pexels-photo-16319803.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "shopping-money-1": {
        "grade": 4,
        "videoUrl": "https://www.youtube.com/embed/Qq0RPVzzWZk",
        "title": "What Is This Called in English? 🇬🇧 | Money Words #13",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Receipt",
            "Credit",
            "Coin",
            "Bill",
            "Explore"
        ],
        "topicId": "shopping-money",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Receipt",
                    "Bill",
                    "Credit",
                    "Coin"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Receipt",
                "explanation": "\"Receipt\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5242813/pexels-photo-5242813.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bill",
                    "Receipt",
                    "Credit",
                    "Coin"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Credit",
                "explanation": "\"Credit\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/4841691/pexels-photo-4841691.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Credit",
                    "Coin",
                    "Receipt",
                    "Bill"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Coin",
                "explanation": "\"Coin\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6777559/pexels-photo-6777559.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bill",
                    "Receipt",
                    "Coin",
                    "Credit"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Bill",
                "explanation": "\"Bill\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7651974/pexels-photo-7651974.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Credit",
                    "Receipt",
                    "Coin",
                    "Explore"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/16319803/pexels-photo-16319803.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "vehicles-travel": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/UFHw7A3ovp8",
        "title": "What Is This Called in English? 🇬🇧 | Car Parts #15",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Steering",
            "Headlight",
            "Tail light",
            "Dashboard",
            "Explore"
        ],
        "topicId": "vehicles-travel",
        "questions": [
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Tail light",
                    "Dashboard",
                    "Headlight",
                    "Steering"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Steering",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/37421212/pexels-photo-37421212.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Dashboard",
                    "Steering",
                    "Headlight",
                    "Tail light"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Headlight",
                "explanation": "\"Headlight\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16040150/pexels-photo-16040150.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Headlight",
                    "Steering",
                    "Dashboard",
                    "Tail light"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Tail light",
                "explanation": "\"Tail light\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/28914526/pexels-photo-28914526.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Dashboard",
                    "Steering",
                    "Headlight",
                    "Tail light"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Dashboard",
                "explanation": "\"Dashboard\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9530906/pexels-photo-9530906.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Headlight",
                    "Steering",
                    "Tail light",
                    "Explore"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4640946/pexels-photo-4640946.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "vehicles-travel-1": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/UFHw7A3ovp8",
        "title": "What Is This Called in English? 🇬🇧 | Car Parts #15",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Steering",
            "Headlight",
            "Tail light",
            "Dashboard",
            "Explore"
        ],
        "topicId": "vehicles-travel",
        "questions": [
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Tail light",
                    "Dashboard",
                    "Headlight",
                    "Steering"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Steering",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/37421212/pexels-photo-37421212.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Dashboard",
                    "Steering",
                    "Headlight",
                    "Tail light"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Headlight",
                "explanation": "\"Headlight\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16040150/pexels-photo-16040150.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Headlight",
                    "Steering",
                    "Dashboard",
                    "Tail light"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Tail light",
                "explanation": "\"Tail light\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/28914526/pexels-photo-28914526.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Dashboard",
                    "Steering",
                    "Headlight",
                    "Tail light"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Dashboard",
                "explanation": "\"Dashboard\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9530906/pexels-photo-9530906.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word means to travel through a new area to learn about it?",
                "choices": [
                    "Headlight",
                    "Steering",
                    "Tail light",
                    "Explore"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Explore",
                "explanation": "To explore is to discover and examine new surroundings.",
                "imageUrl": "https://images.pexels.com/photos/4640946/pexels-photo-4640946.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "vehicles-travel-2": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/2W4eR4EngLo",
        "title": "What Is This Called in English? 🇬🇧 | Transportation #10",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Train",
            "Airplane",
            "Ship",
            "Bicycle",
            "Helicopter"
        ],
        "topicId": "vehicles-travel",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bicycle",
                    "Ship",
                    "Train",
                    "Airplane"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Train",
                "explanation": "\"Train\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16673166/pexels-photo-16673166.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Train",
                    "Airplane",
                    "Bicycle",
                    "Ship"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Airplane",
                "explanation": "\"Airplane\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/32325153/pexels-photo-32325153.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bicycle",
                    "Train",
                    "Ship",
                    "Airplane"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ship",
                "explanation": "\"Ship\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/27402391/pexels-photo-27402391.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Train",
                    "Bicycle",
                    "Ship",
                    "Airplane"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Bicycle",
                "explanation": "\"Bicycle\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/19353575/pexels-photo-19353575.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Train",
                    "Ship",
                    "Helicopter",
                    "Airplane"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Helicopter",
                "explanation": "\"Helicopter\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16863610/pexels-photo-16863610.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "weather-seasons": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/bN7zKzW2eUo",
        "title": "Weather and Atmospheric Elements 🌪️",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Breeze",
            "Blizzard",
            "Drizzle",
            "Hurricane",
            "Tornado"
        ],
        "topicId": "weather-seasons",
        "questions": [
            {
                "question": "What is a gentle, light wind called?",
                "choices": [
                    "Breeze",
                    "Blizzard",
                    "Hurricane",
                    "Tornado"
                ],
                "correctAnswer": "Breeze",
                "explanation": "A breeze is a soft, refreshing, light wind."
            },
            {
                "question": "What is a severe snowstorm with high winds and low visibility called?",
                "choices": [
                    "Blizzard",
                    "Drizzle",
                    "Tornado",
                    "Breeze"
                ],
                "correctAnswer": "Blizzard",
                "explanation": "A blizzard is a freezing, heavy snowstorm with powerful winds."
            },
            {
                "question": "What do we call very light rain falling in fine drops?",
                "choices": [
                    "Drizzle",
                    "Hurricane",
                    "Breeze",
                    "Blizzard"
                ],
                "correctAnswer": "Drizzle",
                "explanation": "Drizzle is light, misty rain that falls very softly."
            },
            {
                "question": "What is a violent tropical storm with circular winds over the ocean?",
                "choices": [
                    "Hurricane",
                    "Tornado",
                    "Drizzle",
                    "Breeze"
                ],
                "correctAnswer": "Hurricane",
                "explanation": "A hurricane is a massive spinning tropical storm that forms over warm waters."
            },
            {
                "question": "What is a fast-spinning column of air touching both a cloud and the ground?",
                "choices": [
                    "Tornado",
                    "Blizzard",
                    "Hurricane",
                    "Drizzle"
                ],
                "correctAnswer": "Tornado",
                "explanation": "A tornado is a destructive rotating funnel of air extending from a thunderstorm."
            }
        ]
    },
    "weather-seasons-1": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/bN7zKzW2eUo",
        "title": "Weather and Atmospheric Elements 🌪️",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Breeze",
            "Blizzard",
            "Drizzle",
            "Hurricane",
            "Tornado"
        ],
        "topicId": "weather-seasons",
        "questions": [
            {
                "question": "What is a gentle, light wind called?",
                "choices": [
                    "Breeze",
                    "Blizzard",
                    "Hurricane",
                    "Tornado"
                ],
                "correctAnswer": "Breeze",
                "explanation": "A breeze is a soft, refreshing, light wind."
            },
            {
                "question": "What is a severe snowstorm with high winds and low visibility called?",
                "choices": [
                    "Blizzard",
                    "Drizzle",
                    "Tornado",
                    "Breeze"
                ],
                "correctAnswer": "Blizzard",
                "explanation": "A blizzard is a freezing, heavy snowstorm with powerful winds."
            },
            {
                "question": "What do we call very light rain falling in fine drops?",
                "choices": [
                    "Drizzle",
                    "Hurricane",
                    "Breeze",
                    "Blizzard"
                ],
                "correctAnswer": "Drizzle",
                "explanation": "Drizzle is light, misty rain that falls very softly."
            },
            {
                "question": "What is a violent tropical storm with circular winds over the ocean?",
                "choices": [
                    "Hurricane",
                    "Tornado",
                    "Drizzle",
                    "Breeze"
                ],
                "correctAnswer": "Hurricane",
                "explanation": "A hurricane is a massive spinning tropical storm that forms over warm waters."
            },
            {
                "question": "What is a fast-spinning column of air touching both a cloud and the ground?",
                "choices": [
                    "Tornado",
                    "Blizzard",
                    "Hurricane",
                    "Drizzle"
                ],
                "correctAnswer": "Tornado",
                "explanation": "A tornado is a destructive rotating funnel of air extending from a thunderstorm."
            }
        ]
    },
    "wild-animals": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/UIEIkXJAoog",
        "title": "What Is This Called in English? | Learn English Word | 07",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Deer",
            "Fox",
            "Bear",
            "Wolf",
            "Panther"
        ],
        "topicId": "wild-animals",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Fox",
                    "Bear",
                    "Wolf",
                    "Deer"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Deer",
                "explanation": "\"Deer\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/31805554/pexels-photo-31805554.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bear",
                    "Deer",
                    "Fox",
                    "Wolf"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Fox",
                "explanation": "\"Fox\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9681754/pexels-photo-9681754.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Deer",
                    "Bear",
                    "Wolf",
                    "Fox"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Bear",
                "explanation": "\"Bear\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/17646625/pexels-photo-17646625.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Wolf",
                    "Deer",
                    "Fox",
                    "Bear"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Wolf",
                "explanation": "\"Wolf\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7249475/pexels-photo-7249475.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Deer",
                    "Fox",
                    "Panther",
                    "Bear"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Panther",
                "explanation": "\"Panther\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7867206/pexels-photo-7867206.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "wild-animals-1": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/UIEIkXJAoog",
        "title": "What Is This Called in English? | Learn English Word | 07",
        "channel": "@JourneyEnglishTalk",
        "words": [
            "Deer",
            "Fox",
            "Bear",
            "Wolf",
            "Panther"
        ],
        "topicId": "wild-animals",
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Fox",
                    "Bear",
                    "Wolf",
                    "Deer"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Deer",
                "explanation": "\"Deer\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/31805554/pexels-photo-31805554.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bear",
                    "Deer",
                    "Fox",
                    "Wolf"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Fox",
                "explanation": "\"Fox\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9681754/pexels-photo-9681754.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Deer",
                    "Bear",
                    "Wolf",
                    "Fox"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Bear",
                "explanation": "\"Bear\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/17646625/pexels-photo-17646625.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Wolf",
                    "Deer",
                    "Fox",
                    "Bear"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Wolf",
                "explanation": "\"Wolf\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7249475/pexels-photo-7249475.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Deer",
                    "Fox",
                    "Panther",
                    "Bear"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Panther",
                "explanation": "\"Panther\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7867206/pexels-photo-7867206.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "wild-animals-2": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/HEV51Qee0M8",
        "title": "English quiz: animals #animalname #animalsnamee...",
        "channel": "@EnglishWordsCorner",
        "words": [
            "Tiger",
            "Lion",
            "Chimpanzee",
            "Zebra"
        ],
        "topicId": "wild-animals",
        "questions": [
            {
                "question": "Which wild cat is known for its orange fur with black stripes?",
                "choices": [
                    "Tiger",
                    "Lion",
                    "Chimpanzee",
                    "Zebra"
                ],
                "correctAnswer": "Tiger",
                "explanation": "Tigers are the largest cat species, instantly recognizable by their black stripes on orange fur."
            },
            {
                "question": "Which animal is a primate, very intelligent, and lives in trees?",
                "choices": [
                    "Chimpanzee",
                    "Tiger",
                    "Lion",
                    "Zebra"
                ],
                "correctAnswer": "Chimpanzee",
                "explanation": "Chimpanzees are highly intelligent great apes native to forests and wet savannas of tropical Africa."
            },
            {
                "question": "Which animal has black and white stripes and looks like a horse?",
                "choices": [
                    "Zebra",
                    "Tiger",
                    "Lion",
                    "Chimpanzee"
                ],
                "correctAnswer": "Zebra",
                "explanation": "Zebras are African equines known for their distinctive black-and-white striped coats."
            },
            {
                "question": "Which animal is known as the King of the Jungle?",
                "choices": [
                    "Lion",
                    "Tiger",
                    "Chimpanzee",
                    "Zebra"
                ],
                "correctAnswer": "Lion",
                "explanation": "The lion is a large cat of the genus Panthera, native to Africa and India, often called the king of the jungle."
            }
        ]
    },
    "wild-animals-3": {
        "grade": 2,
        "videoUrl": "https://www.youtube.com/embed/HEV51Qee0M8",
        "title": "Animal Sounds and Names for Kids 🐯",
        "channel": "@PRES.ENGLISH",
        "words": [
            "Lion",
            "Monkey",
            "Elephant",
            "Giraffe",
            "Zebra"
        ],
        "topicId": "wild-animals",
        "questions": [
            {
                "question": "Which animal has black and white stripes?",
                "choices": [
                    "Zebra",
                    "Lion",
                    "Giraffe",
                    "Monkey"
                ],
                "correctAnswer": "Zebra",
                "explanation": "Zebras have beautiful black and white stripes all over their bodies!"
            },
            {
                "question": "Which animal is known as the King of the Jungle?",
                "choices": [
                    "Lion",
                    "Elephant",
                    "Zebra",
                    "Giraffe"
                ],
                "correctAnswer": "Lion",
                "explanation": "The mighty lion is famously known as the King of the Jungle!"
            },
            {
                "question": "Which animal has a very long neck to reach tall leaves?",
                "choices": [
                    "Giraffe",
                    "Monkey",
                    "Elephant",
                    "Zebra"
                ],
                "correctAnswer": "Giraffe",
                "explanation": "Giraffes have incredibly long necks to eat leaves from high trees!"
            },
            {
                "question": "Which animal loves to swing on trees and eat bananas?",
                "choices": [
                    "Monkey",
                    "Lion",
                    "Giraffe",
                    "Elephant"
                ],
                "correctAnswer": "Monkey",
                "explanation": "Monkeys are active swingers and love eating yummy bananas!"
            },
            {
                "question": "Which animal is the largest land mammal with big ears?",
                "choices": [
                    "Elephant",
                    "Zebra",
                    "Lion",
                    "Giraffe"
                ],
                "correctAnswer": "Elephant",
                "explanation": "The elephant is the largest mammal living on land!"
            }
        ]
    },
    "home-furniture-2": {
        "grade": 1,
        "topicId": "home-furniture",
        "videoUrl": "https://www.youtube.com/embed/0mhFqiADUWU",
        "title": "🛋️ Types of Furniture in English | Learn Home Vocabulary! #english #easyenglisheveryday",
        "channel": "@Speakwithconfidence4065",
        "transcriptText": "what is this called armchair what is this called ottoman what is this called Chas long what is this called coffee table what is this called wardrobe what is this called dresser what is this called nightstand what is this called recliner what is this called chest of drawers what is this called side table what is this called coat rack",
        "words": [
            "Armchair",
            "Ottoman",
            "Coffee table",
            "Side table",
            "Coat rack",
            "Wardrobe",
            "Dresser",
            "Nightstand",
            "Recliner",
            "Chest of drawers",
            "Side table",
            "Coat rack"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Ottoman",
                    "Side table",
                    "Armchair",
                    "Coffee table"
                ],
                "choiceIpas": [
                    "/ˈɒtəmən/",
                    "/saɪd/ /ˈteɪbəl/",
                    "/ˈɑː(ɹ)mtʃɛə(ɹ)/",
                    "/ˈkɑ.fi/ /ˈteɪbəl/"
                ],
                "correctAnswer": "Armchair",
                "explanation": "\"armchair\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/33646085/pexels-photo-33646085.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈɑː(ɹ)mtʃɛə(ɹ)/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Armchair",
                    "Side table",
                    "Coffee table",
                    "Ottoman"
                ],
                "choiceIpas": [
                    "",
                    "/saɪd/ /ˈteɪbəl/",
                    "/ˈkɑ.fi/ /ˈteɪbəl/",
                    "/ˈɒtəmən/"
                ],
                "correctAnswer": "Ottoman",
                "explanation": "\"ottoman\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7535017/pexels-photo-7535017.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈɒtəmən/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coffee table",
                    "Ottoman",
                    "Armchair",
                    "Side table"
                ],
                "choiceIpas": [
                    "/ˈkɑ.fi/ /ˈteɪbəl/",
                    "/ˈɒtəmən/",
                    "/ˈɑː(ɹ)mtʃɛə(ɹ)/",
                    "/saɪd/ /ˈteɪbəl/"
                ],
                "correctAnswer": "Coffee table",
                "explanation": "\"Coffee table\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/35741389/pexels-photo-35741389.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈkɑ.fi/ /ˈteɪbəl/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Side table",
                    "Coffee table",
                    "Armchair",
                    "Ottoman"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Side table",
                "explanation": "\"Side table\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/4846087/pexels-photo-4846087.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/saɪd/ /ˈteɪbəl/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Armchair",
                    "Coat rack",
                    "Ottoman",
                    "Coffee table"
                ],
                "choiceIpas": [
                    "/ˈɑː(ɹ)mtʃɛə(ɹ)/",
                    "/kəʊt/ /ɹæk/",
                    "/ˈɒtəmən/",
                    "/ˈkɑ.fi/ /ˈteɪbəl/"
                ],
                "correctAnswer": "Coat rack",
                "explanation": "\"Coat rack\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6032031/pexels-photo-6032031.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/kəʊt/ /ɹæk/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Ottoman",
                    "Armchair",
                    "Coffee table",
                    "Wardrobe"
                ],
                "choiceIpas": [
                    "/ˈɒtəmən/",
                    "/ˈɑː(ɹ)mtʃɛə(ɹ)/",
                    "",
                    ""
                ],
                "correctAnswer": "Wardrobe",
                "explanation": "\"wardrobe\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6580394/pexels-photo-6580394.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ ˈwɔːdɹəʊb/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Armchair",
                    "Coffee table",
                    "Dresser",
                    "Ottoman"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Dresser",
                "explanation": "\"dresser\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/37360094/pexels-photo-37360094.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Nightstand",
                    "Coffee table",
                    "Ottoman",
                    "Armchair"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Nightstand",
                "explanation": "\"nightstand\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5825694/pexels-photo-5825694.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coffee table",
                    "Armchair",
                    "Recliner",
                    "Ottoman"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Recliner",
                "explanation": "\"recliner\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/20020103/pexels-photo-20020103.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coffee table",
                    "Chest of drawers",
                    "Armchair",
                    "Ottoman"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Chest of drawers",
                "explanation": "\"chest of drawers\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6956842/pexels-photo-6956842.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Coat rack",
                    "Armchair",
                    "Ottoman",
                    "Coffee table"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Coat rack",
                "explanation": "\"coat rack\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/15945663/pexels-photo-15945663.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "home-furniture-3": {
        "grade": 1,
        "topicId": "home-furniture",
        "videoUrl": "https://www.youtube.com/embed/gOplRsEK-HM",
        "title": "Do you know home Furniture names in English? #vocabulary #englishlearning #viral #learnenglish",
        "channel": "@EnglishVocabularyPractice0",
        "transcriptText": "sofa chair table bed wardrobe desk bookshelf cabinet lamp curtains",
        "words": [
            "Bed",
            "Bookshelf",
            "Cabinet",
            "Sofa",
            "Chair",
            "Wardrobe"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bed",
                    "Bookshelf",
                    "Cabinet",
                    "Sofa"
                ],
                "choiceIpas": [
                    "/bed/",
                    "/ˈbʊkˌʃɛlf/",
                    "/ˈkæ.bɪ.nɪt/",
                    "/ˈsəʊfə/"
                ],
                "correctAnswer": "Bed",
                "explanation": "\"Bed\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6266189/pexels-photo-6266189.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/bed/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sofa",
                    "Bed",
                    "Cabinet",
                    "Bookshelf"
                ],
                "choiceIpas": [
                    "/ˈsəʊfə/",
                    "/bed/",
                    "/ˈkæ.bɪ.nɪt/",
                    "/ˈbʊkˌʃɛlf/"
                ],
                "correctAnswer": "Bookshelf",
                "explanation": "\"Bookshelf\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://pixabay.com/get/ge6ebc7614d8b7bec60fa16db2b29aaecd0127f073a806b3c3e20bb82af8831745111adbc1d7da2c025535e8c621d92af76bd8a82c449ac0cce679dd3f4cfd4e3_640.png",
                "ipa": "/ˈbʊkˌʃɛlf/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sofa",
                    "Cabinet",
                    "Bed",
                    "Bookshelf"
                ],
                "choiceIpas": [
                    "/ˈsəʊfə/",
                    "/ˈkæ.bɪ.nɪt/",
                    "/bed/",
                    "/ˈbʊkˌʃɛlf/"
                ],
                "correctAnswer": "Cabinet",
                "explanation": "\"Cabinet\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9462220/pexels-photo-9462220.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈkæ.bɪ.nɪt/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Cabinet",
                    "Bed",
                    "Sofa",
                    "Bookshelf"
                ],
                "choiceIpas": [
                    "/ˈkæ.bɪ.nɪt/",
                    "/bed/",
                    "/ˈsəʊfə/",
                    "/ˈbʊkˌʃɛlf/"
                ],
                "correctAnswer": "Sofa",
                "explanation": "\"Sofa\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/12273851/pexels-photo-12273851.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈsəʊfə/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Cabinet",
                    "Bed",
                    "Chair",
                    "Bookshelf"
                ],
                "choiceIpas": [
                    "/ˈkæ.bɪ.nɪt/",
                    "/bed/",
                    "/t͡ʃɛə(ɹ)/",
                    "/ˈbʊkˌʃɛlf/"
                ],
                "correctAnswer": "Chair",
                "explanation": "\"Chair\" is the correct vocabulary word for this picture.",
                "imageUrl": "iconify:https://api.iconify.design/noto/chair.svg?height=96",
                "ipa": "/t͡ʃɛə(ɹ)/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Wardrobe",
                    "Bookshelf",
                    "Cabinet",
                    "Bed"
                ],
                "choiceIpas": [
                    "/ ˈwɔːdɹəʊb/",
                    "/ˈbʊkˌʃɛlf/",
                    "/ˈkæ.bɪ.nɪt/",
                    "/bed/"
                ],
                "correctAnswer": "Wardrobe",
                "explanation": "\"Wardrobe\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7986061/pexels-photo-7986061.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ ˈwɔːdɹəʊb/",
                "isMissingCustomIcon": true
            }
        ]
    },
    "home-furniture-4": {
        "grade": 1,
        "topicId": "home-furniture",
        "videoUrl": "https://www.youtube.com/embed/ZVbjY1o4k8g",
        "title": "10 Basic Furniture Words in English | Learn Home Vocabulary Fast",
        "channel": "@EnglishwithMaya-z1i",
        "transcriptText": "sofa, pillow, blanket, armchair, chair, mirror, drawer, table, bed, wardrobe. Don't forget to subscribe to the",
        "words": [
            "Sofa",
            "Pillow",
            "Blanket",
            "Armchair",
            "Chair",
            "Mirror",
            "Drawer",
            "Table",
            "Bed",
            "Wardrobe."
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pillow",
                    "Blanket",
                    "Armchair",
                    "Sofa"
                ],
                "choiceIpas": [
                    "/ˈpɪləʊ/",
                    "/ˈblæŋkɪt/",
                    "/ˈɑː(ɹ)mtʃɛə(ɹ)/",
                    "/ˈsəʊfə/"
                ],
                "correctAnswer": "Sofa",
                "explanation": "\"sofa\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7018400/pexels-photo-7018400.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈsəʊfə/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Blanket",
                    "Armchair",
                    "Pillow",
                    "Sofa"
                ],
                "choiceIpas": [
                    "/ˈblæŋkɪt/",
                    "/ˈɑː(ɹ)mtʃɛə(ɹ)/",
                    "",
                    "/ˈsəʊfə/"
                ],
                "correctAnswer": "Pillow",
                "explanation": "\"pillow\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/12289352/pexels-photo-12289352.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈpɪləʊ/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sofa",
                    "Armchair",
                    "Blanket",
                    "Pillow"
                ],
                "choiceIpas": [
                    "/ˈsəʊfə/",
                    "/ˈɑː(ɹ)mtʃɛə(ɹ)/",
                    "/ˈblæŋkɪt/",
                    "/ˈpɪləʊ/"
                ],
                "correctAnswer": "Blanket",
                "explanation": "\"blanket\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/8238750/pexels-photo-8238750.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈblæŋkɪt/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Armchair",
                    "Pillow",
                    "Blanket",
                    "Sofa"
                ],
                "choiceIpas": [
                    "/ˈɑː(ɹ)mtʃɛə(ɹ)/",
                    "/ˈpɪləʊ/",
                    "",
                    ""
                ],
                "correctAnswer": "Armchair",
                "explanation": "\"armchair\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/30710413/pexels-photo-30710413.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈɑː(ɹ)mtʃɛə(ɹ)/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pillow",
                    "Chair",
                    "Sofa",
                    "Blanket"
                ],
                "choiceIpas": [
                    "/ˈpɪləʊ/",
                    "/t͡ʃɛə(ɹ)/",
                    "/ˈsəʊfə/",
                    "/ˈblæŋkɪt/"
                ],
                "correctAnswer": "Chair",
                "explanation": "\"chair\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9962719/pexels-photo-9962719.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/t͡ʃɛə(ɹ)/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sofa",
                    "Mirror",
                    "Pillow",
                    "Blanket"
                ],
                "choiceIpas": [
                    "/ˈsəʊfə/",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Mirror",
                "explanation": "\"mirror\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://pixabay.com/get/ga82bde0548a67091d03de29bd3a800dcfb477f25c8467c7e9353112c91f08b42554544ca36f9828b521d858027d2de025a85d5d2e6fed285f7668f87123c2be4_640.jpg",
                "ipa": "/ˈmɘ.ɹɘ/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Blanket",
                    "Pillow",
                    "Drawer",
                    "Sofa"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Drawer",
                "explanation": "\"drawer\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/11112745/pexels-photo-11112745.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/dɹɔː(ɹ)/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Table",
                    "Sofa",
                    "Blanket",
                    "Pillow"
                ],
                "choiceIpas": [
                    "/ˈteɪbəl/",
                    "/ˈsəʊfə/",
                    "/ˈblæŋkɪt/",
                    "/ˈpɪləʊ/"
                ],
                "correctAnswer": "Table",
                "explanation": "\"table\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/23541001/pexels-photo-23541001.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈteɪbəl/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bed",
                    "Blanket",
                    "Sofa",
                    "Pillow"
                ],
                "choiceIpas": [
                    "/bed/",
                    "/ˈblæŋkɪt/",
                    "/ˈsəʊfə/",
                    "/ˈpɪləʊ/"
                ],
                "correctAnswer": "Bed",
                "explanation": "\"bed\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/31967700/pexels-photo-31967700.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/bed/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pillow",
                    "Sofa",
                    "Wardrobe",
                    "Blanket"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Wardrobe",
                "explanation": "\"wardrobe.\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6316064/pexels-photo-6316064.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ ˈwɔːdɹəʊb/",
                "isMissingCustomIcon": false
            }
        ]
    },
    "home-furniture-5": {
        "grade": 1,
        "topicId": "home-furniture",
        "videoUrl": "https://www.youtube.com/embed/vQcx3X4Rz3Y",
        "title": "Furniture  - Vocabulary - English Club #englishvocabulary #vocabulary #beginnersenglish",
        "channel": "@English_club_",
        "transcriptText": "furniture wardrobe desk coffee table sofa dresser bench bedside table bunk bed",
        "words": [
            "Bunk bed",
            "Wardrobe",
            "Sofa",
            "Dresser",
            "Coffee table",
            "Bench",
            "Desk",
            "Bedside table"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Dresser",
                    "Wardrobe",
                    "Sofa",
                    "Bunk bed"
                ],
                "choiceIpas": [
                    "",
                    "/ ˈwɔːdɹəʊb/",
                    "",
                    ""
                ],
                "correctAnswer": "Bunk bed",
                "explanation": "\"Bunk bed\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/4907221/pexels-photo-4907221.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/bʌŋk/ /bed/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sofa",
                    "Bunk bed",
                    "Dresser",
                    "Wardrobe"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Wardrobe",
                "explanation": "\"Wardrobe\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7166550/pexels-photo-7166550.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ ˈwɔːdɹəʊb/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bunk bed",
                    "Sofa",
                    "Dresser",
                    "Wardrobe"
                ],
                "choiceIpas": [
                    "/bʌŋk/ /bed/",
                    "/ˈsəʊfə/",
                    "/ˈdɹɛsə/",
                    "/ ˈwɔːdɹəʊb/"
                ],
                "correctAnswer": "Sofa",
                "explanation": "\"Sofa\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6580416/pexels-photo-6580416.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈsəʊfə/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bunk bed",
                    "Dresser",
                    "Sofa",
                    "Wardrobe"
                ],
                "choiceIpas": [
                    "/bʌŋk/ /bed/",
                    "/ˈdɹɛsə/",
                    "/ˈsəʊfə/",
                    "/ ˈwɔːdɹəʊb/"
                ],
                "correctAnswer": "Dresser",
                "explanation": "\"Dresser\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/33609744/pexels-photo-33609744.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈdɹɛsə/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sofa",
                    "Wardrobe",
                    "Coffee table",
                    "Bunk bed"
                ],
                "choiceIpas": [
                    "/ˈsəʊfə/",
                    "/ ˈwɔːdɹəʊb/",
                    "/ˈkɑ.fi/ /ˈteɪbəl/",
                    "/bʌŋk/ /bed/"
                ],
                "correctAnswer": "Coffee table",
                "explanation": "\"Coffee table\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/15480366/pexels-photo-15480366.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈkɑ.fi/ /ˈteɪbəl/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bunk bed",
                    "Sofa",
                    "Bench",
                    "Wardrobe"
                ],
                "choiceIpas": [
                    "/bʌŋk/ /bed/",
                    "/ˈsəʊfə/",
                    "/bɛntʃ/",
                    "/ ˈwɔːdɹəʊb/"
                ],
                "correctAnswer": "Bench",
                "explanation": "\"Bench\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://pixabay.com/get/g9ed20f94948d66afbe5ff958b24b9c30b98c726420b2d3545f8827fca2dcee852ed63af5265a5a592b1ccee233408b05359e3bd4a44a9ec5c2f165b62e5afef2_640.png",
                "ipa": "/bɛntʃ/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Desk",
                    "Bunk bed",
                    "Sofa",
                    "Wardrobe"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Desk",
                "explanation": "\"Desk\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7970681/pexels-photo-7970681.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/dɛsk/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bedside table",
                    "Bunk bed",
                    "Wardrobe",
                    "Sofa"
                ],
                "choiceIpas": [
                    "/ˈteɪbəl/",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Bedside table",
                "explanation": "\"Bedside table\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5490288/pexels-photo-5490288.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈbɛdˌsaɪd/ /ˈteɪbəl/",
                "isMissingCustomIcon": true
            }
        ]
    },
    "home-furniture-6": {
        "grade": 1,
        "topicId": "home-furniture",
        "videoUrl": "https://www.youtube.com/embed/mfhQcSfpexY",
        "title": "home furniture #english #learnenglish #quiz #viral #trivia",
        "channel": "@johnsnow_show",
        "transcriptText": "What is this called? Bed. What is this called? Table. What is this called? The chair. What is this called? Sofa. What is this called? Wardrobe. What is this called? Bookshelf. What is this called? Desk. What is this called? Dining table. What is this called? Nightstand. What is this called? Mirror. What is this called? Mirror. Don't forget to tell me your score and comment.",
        "words": [
            "Mirror",
            "Dining",
            "Bed",
            "Table",
            "Dining table"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Dining",
                    "Table",
                    "Mirror",
                    "Bed"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Mirror",
                "explanation": "\"Mirror\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/36535598/pexels-photo-36535598.png?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Dining",
                    "Bed",
                    "Mirror",
                    "Table"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Dining",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/186769/pexels-photo-186769.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Table",
                    "Mirror",
                    "Bed",
                    "Dining"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Bed",
                "explanation": "\"Bed\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/13633262/pexels-photo-13633262.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Dining",
                    "Table",
                    "Mirror",
                    "Bed"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Table",
                "explanation": "\"Table\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/29459845/pexels-photo-29459845.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bed",
                    "Mirror",
                    "Dining",
                    "Dining table"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Dining table",
                "explanation": "\"Dining table\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5472818/pexels-photo-5472818.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "home-furniture-7": {
        "grade": 1,
        "topicId": "home-furniture",
        "videoUrl": "https://www.youtube.com/embed/HmfIRxgnpAE",
        "title": "Do you know what these Furniture called in English?#shorts#englishlanguage",
        "channel": "@Englishcoach-d5l",
        "transcriptText": "what is this called bench what is this called shelf what is this called ottoman what is this called armchair",
        "words": [
            "Bench",
            "Shelf",
            "Ottoman",
            "Armchair",
            "Furniture"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Shelf",
                    "Armchair",
                    "Bench",
                    "Ottoman"
                ],
                "choiceIpas": [
                    "/ʃɛlf/",
                    "/ˈɑː(ɹ)mtʃɛə(ɹ)/",
                    "/bɛntʃ/",
                    "/ˈɒtəmən/"
                ],
                "correctAnswer": "Bench",
                "explanation": "\"Bench\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://pixabay.com/get/g5fab6f72b42f6c6a8b6012b1b14021e3c34500eff3743ee68399964fb30edd6f1c1e86b0472df7c9996e1913f4b5abad1823fd68fd124fab3b8a7d490ab3f108_640.png",
                "ipa": "/bɛntʃ/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bench",
                    "Shelf",
                    "Ottoman",
                    "Armchair"
                ],
                "choiceIpas": [
                    "/bɛntʃ/",
                    "/ʃɛlf/",
                    "/ˈɒtəmən/",
                    "/ˈɑː(ɹ)mtʃɛə(ɹ)/"
                ],
                "correctAnswer": "Shelf",
                "explanation": "\"Shelf\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://pixabay.com/get/g7603b8f441df338db955698aa4285cfd104c07eec079a7127147589de5acdfebbd6edcf1386b99efb1c4b7d9e96946506ed378670275c658dac8f3b5f809d293_640.jpg",
                "ipa": "/ʃɛlf/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bench",
                    "Ottoman",
                    "Armchair",
                    "Shelf"
                ],
                "choiceIpas": [
                    "/bɛntʃ/",
                    "/ˈɒtəmən/",
                    "/ˈɑː(ɹ)mtʃɛə(ɹ)/",
                    "/ʃɛlf/"
                ],
                "correctAnswer": "Ottoman",
                "explanation": "\"Ottoman\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/19268316/pexels-photo-19268316.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈɒtəmən/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Ottoman",
                    "Shelf",
                    "Bench",
                    "Armchair"
                ],
                "choiceIpas": [
                    "/ˈɒtəmən/",
                    "/ʃɛlf/",
                    "/bɛntʃ/",
                    "/ˈɑː(ɹ)mtʃɛə(ɹ)/"
                ],
                "correctAnswer": "Armchair",
                "explanation": "\"Armchair\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/12269764/pexels-photo-12269764.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈɑː(ɹ)mtʃɛə(ɹ)/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bench",
                    "Shelf",
                    "Ottoman",
                    "Furniture"
                ],
                "choiceIpas": [
                    "/bɛntʃ/",
                    "/ʃɛlf/",
                    "/ˈɒtəmən/",
                    "/ˈfɜːnɪtʃə/"
                ],
                "correctAnswer": "Furniture",
                "explanation": "\"Furniture\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7546707/pexels-photo-7546707.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈfɜːnɪtʃə/",
                "isMissingCustomIcon": false
            }
        ]
    },
    "home-furniture-8": {
        "grade": 1,
        "topicId": "home-furniture",
        "videoUrl": "https://www.youtube.com/embed/c178kbMe7E0",
        "title": "What is This Called Common Furniture Items Couch, Coffee Table, Dresser, and More",
        "channel": "@LearnItFast-k6w",
        "transcriptText": "this is called a couch it's where you relax or hang out with friends and family this is a coffee table it's perfect for holding your drinks magazines or the TV remote this is a lamp it lights up the room making it cozy and inviting this is a rug it adds warmth and style to the floor of your living room this is a bookshelf it's where you can store your favorite books and decorative item this is an armchair it's a comfortable seat with armrests perfect for reading or relaxing these are curtains they provide privacy and can enhance the look of your windows this is a dresser it's where you store your clothes and other personal items in your bedroom more new material coming soon",
        "words": [
            "Perfect",
            "Comfortable seat",
            "Curtain",
            "Hang out",
            "Armrest perfect"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Comfortable seat",
                    "Hang out",
                    "Perfect",
                    "Curtain"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Perfect",
                "explanation": "\"Perfect\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/4717553/pexels-photo-4717553.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Comfortable seat",
                    "Perfect",
                    "Hang out",
                    "Curtain"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Comfortable seat",
                "explanation": "\"Comfortable seat\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/8886310/pexels-photo-8886310.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Hang out",
                    "Comfortable seat",
                    "Perfect",
                    "Curtain"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Curtain",
                "explanation": "\"Curtain\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/16752645/pexels-photo-16752645.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Curtain",
                    "Hang out",
                    "Perfect",
                    "Comfortable seat"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Hang out",
                "explanation": "\"Hang out\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/13723599/pexels-photo-13723599.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Curtain",
                    "Armrest perfect",
                    "Comfortable seat",
                    "Perfect"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Armrest perfect",
                "explanation": "\"Armrest perfect\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9401726/pexels-photo-9401726.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "home-furniture-9": {
        "grade": 1,
        "topicId": "home-furniture",
        "videoUrl": "https://www.youtube.com/embed/3DSMC-DLokw",
        "title": "Bedroom & Living Room Vocabulary – Learn Common Words Easily!",
        "channel": "@learnenglishonline-s6h",
        "transcriptText": "Blanket, cushion, pillow, mattress, bed, armchair, sofa. Uh,",
        "words": [
            "Mattress bed",
            "Living",
            "Blanket",
            "Easily",
            "Blanket cushion"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Living",
                    "Mattress bed",
                    "Easily",
                    "Blanket"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Mattress bed",
                "explanation": "\"Mattress bed\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6489093/pexels-photo-6489093.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Mattress bed",
                    "Living",
                    "Easily",
                    "Blanket"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Living",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/8418389/pexels-photo-8418389.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Blanket",
                    "Easily",
                    "Living",
                    "Mattress bed"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Blanket",
                "explanation": "\"Blanket\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/31542019/pexels-photo-31542019.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word describes how the action in this image is being performed?",
                "choices": [
                    "Easily",
                    "Blanket",
                    "Mattress bed",
                    "Living"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Easily",
                "explanation": "Adverbs ending in \"-ly\" explain how actions are carried out.",
                "imageUrl": "https://images.pexels.com/photos/7563673/pexels-photo-7563673.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Blanket cushion",
                    "Living",
                    "Blanket",
                    "Mattress bed"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Blanket cushion",
                "explanation": "\"Blanket cushion\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/27399644/pexels-photo-27399644.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "home-furniture-10": {
        "grade": 1,
        "topicId": "home-furniture",
        "videoUrl": "https://www.youtube.com/embed/xgL_x49dG20",
        "title": "Kitchen Utensils - English Vocabulary",
        "channel": "@EnglishinGeneral",
        "transcriptText": "cutting board Cutlery whisk Ladle spatula frying pan rolling pin peeler colander greater teapot",
        "words": [
            "Spatula frying",
            "Pan rolling",
            "Greater teapot",
            "Cutting",
            "Kitchen"
        ],
        "questions": [
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Greater teapot",
                    "Pan rolling",
                    "Spatula frying",
                    "Cutting"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Spatula frying",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/8250375/pexels-photo-8250375.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Spatula frying",
                    "Pan rolling",
                    "Cutting",
                    "Greater teapot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pan rolling",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/29037271/pexels-photo-29037271.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Cutting",
                    "Spatula frying",
                    "Pan rolling",
                    "Greater teapot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Greater teapot",
                "explanation": "\"Greater teapot\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/11532730/pexels-photo-11532730.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Greater teapot",
                    "Cutting",
                    "Spatula frying",
                    "Pan rolling"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Cutting",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/7015913/pexels-photo-7015913.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pan rolling",
                    "Greater teapot",
                    "Spatula frying",
                    "Kitchen"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Kitchen",
                "explanation": "\"Kitchen\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7746626/pexels-photo-7746626.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-17": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/GZPWhylI7xE",
        "title": "Kitchen Vocabulary — Cutlery, Crockery and Cookware 🍳 | Learn English",
        "channel": "@EnglishwithKhalid2.0",
        "transcriptText": "Spoon, knife, fork. These are called cutlery. Pot, pan, lid. These are called cookware. >> [music] >> Cup, plate, bowl. These are called crockery.",
        "words": [
            "Cutlery",
            "Crockery",
            "Cookware",
            "Pot",
            "Kitchen"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pot",
                    "Crockery",
                    "Cutlery",
                    "Cookware"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Cutlery",
                "explanation": "\"Cutlery\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/269257/pexels-photo-269257.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Cutlery",
                    "Crockery",
                    "Cookware",
                    "Pot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Crockery",
                "explanation": "\"Crockery\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/10589446/pexels-photo-10589446.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Crockery",
                    "Cookware",
                    "Cutlery",
                    "Pot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Cookware",
                "explanation": "\"Cookware\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/28704740/pexels-photo-28704740.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Cutlery",
                    "Crockery",
                    "Cookware",
                    "Pot"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pot",
                "explanation": "\"Pot\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/35295143/pexels-photo-35295143.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Cutlery",
                    "Kitchen",
                    "Cookware",
                    "Crockery"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Kitchen",
                "explanation": "\"Kitchen\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6375553/pexels-photo-6375553.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-18": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/9bV6oW3yNCs",
        "title": "What is this called??? #englishvocabulary ​ #FluentEnglish​ #​furniture ​ #shorts #chair",
        "channel": "@KidsFunLearning10",
        "transcriptText": "what is this called cheer what is this called rocking chair what is this called folding chair what is this called bean bag what is this called that chair",
        "words": [
            "Rocking",
            "Folding",
            "Rocking chair",
            "Folding chair",
            "Bean bag"
        ],
        "questions": [
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Rocking chair",
                    "Folding chair",
                    "Folding",
                    "Rocking"
                ],
                "choiceIpas": [
                    "",
                    "/ˈfəʊldɪŋ/ /t͡ʃɛə(ɹ)/",
                    "/ˈfəʊldɪŋ/",
                    ""
                ],
                "correctAnswer": "Rocking",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/29207571/pexels-photo-29207571.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word describes the action happening in this image?",
                "choices": [
                    "Rocking chair",
                    "Folding chair",
                    "Folding",
                    "Rocking"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Folding",
                "explanation": "Action verbs ending in \"-ing\" describe ongoing actions like the one shown here.",
                "imageUrl": "https://images.pexels.com/photos/18715192/pexels-photo-18715192.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Folding",
                    "Folding chair",
                    "Rocking chair",
                    "Rocking"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "/t͡ʃɛə(ɹ)/",
                    ""
                ],
                "correctAnswer": "Rocking chair",
                "explanation": "\"Rocking chair\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/36084338/pexels-photo-36084338.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Folding",
                    "Rocking",
                    "Folding chair",
                    "Rocking chair"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "/ˈfəʊldɪŋ/ /t͡ʃɛə(ɹ)/",
                    "/t͡ʃɛə(ɹ)/"
                ],
                "correctAnswer": "Folding chair",
                "explanation": "\"Folding chair\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/12737640/pexels-photo-12737640.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bean bag",
                    "Rocking",
                    "Rocking chair",
                    "Folding"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    "/ˈfəʊldɪŋ/"
                ],
                "correctAnswer": "Bean bag",
                "explanation": "\"Bean bag\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6444262/pexels-photo-6444262.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-1": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/41cJ0mqWses",
        "title": "School Supplies Song",
        "channel": "@EnglishTreeTV",
        "transcriptText": "[Música] pencil pencil sharpener sharpener eraser eraser ruler ruler Book book scissors scissors chare Cher desk desk pen pen b [Aplausos] [Música] b pencil pencil sharpener sharpener eraser eraser ruler ruler Book Book scissors scissors chair chair desk desk pen he Back [Aplausos] [Música] [Música] back [Música] Oh",
        "words": [
            "Pencil",
            "Sharpener",
            "Eraser",
            "Ruler",
            "Book",
            "Scissors",
            "Chair",
            "Desk",
            "Pen",
            "Backpack"
        ],
        "questions": [
            {
                "question": "What writing tool contains graphite and has an eraser on top?",
                "choices": [
                    "Sharpener",
                    "Pencil sharpener",
                    "Pencil",
                    "Eraser"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil",
                "explanation": "Pencils are perfect for schoolwork because you can erase mistakes.",
                "imageUrl": "https://images.pexels.com/photos/8386693/pexels-photo-8386693.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈpɛnsɪl/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sharpener",
                    "Eraser",
                    "Pencil",
                    "Pencil sharpener"
                ],
                "choiceIpas": [
                    "/ˈʃɑː(ɹ)pənə(ɹ)/",
                    "/ɪˈɹeɪzə/",
                    "/ˈpɛnsɪl/",
                    "/ˈpɛnsɪl/ /ˈʃɑː(ɹ)pənə(ɹ)/"
                ],
                "correctAnswer": "Sharpener",
                "explanation": "\"sharpener\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/237414/pexels-photo-237414.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈʃɑː(ɹ)pənə(ɹ)/",
                "isMissingCustomIcon": true
            },
            {
                "question": "What small rubber tool is used to remove pencil marks?",
                "choices": [
                    "Eraser",
                    "Pencil",
                    "Pencil sharpener",
                    "Sharpener"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "/ˈpɛnsɪl/",
                    ""
                ],
                "correctAnswer": "Eraser",
                "explanation": "An eraser rubs off pencil graphite to correct spelling mistakes.",
                "imageUrl": "https://images.pexels.com/photos/6193755/pexels-photo-6193755.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ɪˈɹeɪzə/",
                "isMissingCustomIcon": true
            },
            {
                "question": "What straight strip of plastic or wood is used to measure length?",
                "choices": [
                    "Pencil",
                    "Sharpener",
                    "Pencil sharpener",
                    "Ruler"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/",
                    "/ˈʃɑː(ɹ)pənə(ɹ)/",
                    "",
                    ""
                ],
                "correctAnswer": "Ruler",
                "explanation": "A ruler has marked measurements to help draw straight lines.",
                "imageUrl": "https://images.pexels.com/photos/29279407/pexels-photo-29279407.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈɹuːlə(ɹ)/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil sharpener",
                    "Pencil",
                    "Sharpener",
                    "Book"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Book",
                "explanation": "\"book\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5905439/pexels-photo-5905439.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/buːk/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil sharpener",
                    "Scissors",
                    "Pencil",
                    "Sharpener"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/",
                    "/ˈsɪzəz/",
                    "",
                    "/ˈʃɑː(ɹ)pənə(ɹ)/"
                ],
                "correctAnswer": "Scissors",
                "explanation": "\"scissors\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/1212183/pexels-photo-1212183.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈsɪzəz/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil sharpener",
                    "Chair",
                    "Sharpener",
                    "Pencil"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/ /ˈʃɑː(ɹ)pənə(ɹ)/",
                    "/t͡ʃɛə(ɹ)/",
                    "",
                    ""
                ],
                "correctAnswer": "Chair",
                "explanation": "\"chair\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/17466659/pexels-photo-17466659.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/t͡ʃɛə(ɹ)/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Desk",
                    "Pencil",
                    "Sharpener",
                    "Pencil sharpener"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Desk",
                "explanation": "\"desk\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://virco.com/wp-content/uploads/desk-280opnm-red70-brn96-gry02_0-1.png",
                "ipa": "/dɛsk/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sharpener",
                    "Pencil sharpener",
                    "Pencil",
                    "Pen"
                ],
                "choiceIpas": [
                    "/ˈʃɑː(ɹ)pənə(ɹ)/",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pen",
                "explanation": "\"pen\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/19364472/pexels-photo-19364472.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/pɛn/",
                "isMissingCustomIcon": true
            },
            {
                "question": "What bag do we wear on our backs to carry books and school supplies?",
                "choices": [
                    "Pencil",
                    "Sharpener",
                    "Pencil sharpener",
                    "Backpack"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Backpack",
                "explanation": "A backpack holds pencils, books, and other tools for learning.",
                "imageUrl": "https://images.pexels.com/photos/4907460/pexels-photo-4907460.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈbæk.pæk/",
                "isMissingCustomIcon": true
            }
        ]
    },
    "home-furniture": {
        "grade": 1,
        "topicId": "home-furniture",
        "videoUrl": "https://www.youtube.com/embed/Xc-3EYhpBlI",
        "title": "What Is This Called in English? 🇬🇧 | Bedroom Items #12",
        "channel": "@JourneyEnglishTalk",
        "transcriptText": "What is this called? >> [music] >> Pillow. What is this called? [music] Blanket. What is this called? >> [music] >> Bed sheet. What is this called? >> [music] >> Cushion. What is this called? Mattress. What is this called? [music] Wardrobe. What is this called? Hanger. >> [music] >> What is this called? Alarm clock. What is this [music] called? Pillow case. What is this called? Nightstand. [music]",
        "words": [
            "Blanket",
            "Bed",
            "Pillow",
            "Cushion"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Blanket",
                    "Bed",
                    "Cushion",
                    "Pillow"
                ],
                "choiceIpas": [
                    "/ˈblæŋkɪt/",
                    "/bed/",
                    "/ˈkʊʃən/",
                    "/ˈpɪləʊ/"
                ],
                "correctAnswer": "Blanket",
                "explanation": "\"Blanket\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/3944510/pexels-photo-3944510.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈblæŋkɪt/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pillow",
                    "Blanket",
                    "Cushion",
                    "Bed"
                ],
                "choiceIpas": [
                    "/ˈpɪləʊ/",
                    "/ˈblæŋkɪt/",
                    "/ˈkʊʃən/",
                    "/bed/"
                ],
                "correctAnswer": "Bed",
                "explanation": "\"Bed\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/36418598/pexels-photo-36418598.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/bed/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pillow",
                    "Cushion",
                    "Blanket",
                    "Bed"
                ],
                "choiceIpas": [
                    "/ˈpɪləʊ/",
                    "/ˈkʊʃən/",
                    "/ˈblæŋkɪt/",
                    "/bed/"
                ],
                "correctAnswer": "Pillow",
                "explanation": "\"Pillow\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7141039/pexels-photo-7141039.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈpɪləʊ/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bed",
                    "Pillow",
                    "Cushion",
                    "Blanket"
                ],
                "choiceIpas": [
                    "/bed/",
                    "/ˈpɪləʊ/",
                    "/ˈkʊʃən/",
                    "/ˈblæŋkɪt/"
                ],
                "correctAnswer": "Cushion",
                "explanation": "\"Cushion\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/28322689/pexels-photo-28322689.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈkʊʃən/",
                "isMissingCustomIcon": false
            }
        ]
    },
    "home-furniture-1": {
        "grade": 1,
        "topicId": "home-furniture",
        "videoUrl": "https://www.youtube.com/embed/Xc-3EYhpBlI",
        "title": "What Is This Called in English? 🇬🇧 | Bedroom Items #12",
        "channel": "@JourneyEnglishTalk",
        "transcriptText": "What is this called? >> [music] >> Pillow. What is this called? [music] Blanket. What is this called? >> [music] >> Bed sheet. What is this called? >> [music] >> Cushion. What is this called? Mattress. What is this called? [music] Wardrobe. What is this called? Hanger. >> [music] >> What is this called? Alarm clock. What is this [music] called? Pillow case. What is this called? Nightstand. [music]",
        "words": [
            "Blanket",
            "Bed",
            "Pillow",
            "Cushion"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Blanket",
                    "Bed",
                    "Cushion",
                    "Pillow"
                ],
                "choiceIpas": [
                    "/ˈblæŋkɪt/",
                    "/bed/",
                    "/ˈkʊʃən/",
                    "/ˈpɪləʊ/"
                ],
                "correctAnswer": "Blanket",
                "explanation": "\"Blanket\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/3944510/pexels-photo-3944510.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈblæŋkɪt/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pillow",
                    "Blanket",
                    "Cushion",
                    "Bed"
                ],
                "choiceIpas": [
                    "/ˈpɪləʊ/",
                    "/ˈblæŋkɪt/",
                    "/ˈkʊʃən/",
                    "/bed/"
                ],
                "correctAnswer": "Bed",
                "explanation": "\"Bed\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/36418598/pexels-photo-36418598.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/bed/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pillow",
                    "Cushion",
                    "Blanket",
                    "Bed"
                ],
                "choiceIpas": [
                    "/ˈpɪləʊ/",
                    "/ˈkʊʃən/",
                    "/ˈblæŋkɪt/",
                    "/bed/"
                ],
                "correctAnswer": "Pillow",
                "explanation": "\"Pillow\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7141039/pexels-photo-7141039.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈpɪləʊ/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bed",
                    "Pillow",
                    "Cushion",
                    "Blanket"
                ],
                "choiceIpas": [
                    "/bed/",
                    "/ˈpɪləʊ/",
                    "/ˈkʊʃən/",
                    "/ˈblæŋkɪt/"
                ],
                "correctAnswer": "Cushion",
                "explanation": "\"Cushion\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/28322689/pexels-photo-28322689.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈkʊʃən/",
                "isMissingCustomIcon": false
            }
        ]
    },
    "school-supplies-1": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/41cJ0mqWses",
        "title": "School Supplies Song",
        "channel": "@EnglishTreeTV",
        "transcriptText": "[Música] pencil pencil sharpener sharpener eraser eraser ruler ruler Book book scissors scissors chare Cher desk desk pen pen b [Aplausos] [Música] b pencil pencil sharpener sharpener eraser eraser ruler ruler Book Book scissors scissors chair chair desk desk pen he Back [Aplausos] [Música] [Música] back [Música] Oh",
        "words": [
            "Pencil",
            "Sharpener",
            "Eraser",
            "Ruler",
            "Book",
            "Scissors",
            "Chair",
            "Desk",
            "Pen",
            "Backpack"
        ],
        "questions": [
            {
                "question": "What writing tool contains graphite and has an eraser on top?",
                "choices": [
                    "Sharpener",
                    "Pencil sharpener",
                    "Pencil",
                    "Eraser"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil",
                "explanation": "Pencils are perfect for schoolwork because you can erase mistakes.",
                "imageUrl": "https://images.pexels.com/photos/8386693/pexels-photo-8386693.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈpɛnsɪl/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sharpener",
                    "Eraser",
                    "Pencil",
                    "Pencil sharpener"
                ],
                "choiceIpas": [
                    "/ˈʃɑː(ɹ)pənə(ɹ)/",
                    "/ɪˈɹeɪzə/",
                    "/ˈpɛnsɪl/",
                    "/ˈpɛnsɪl/ /ˈʃɑː(ɹ)pənə(ɹ)/"
                ],
                "correctAnswer": "Sharpener",
                "explanation": "\"sharpener\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/237414/pexels-photo-237414.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈʃɑː(ɹ)pənə(ɹ)/",
                "isMissingCustomIcon": true
            },
            {
                "question": "What small rubber tool is used to remove pencil marks?",
                "choices": [
                    "Eraser",
                    "Pencil",
                    "Pencil sharpener",
                    "Sharpener"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "/ˈpɛnsɪl/",
                    ""
                ],
                "correctAnswer": "Eraser",
                "explanation": "An eraser rubs off pencil graphite to correct spelling mistakes.",
                "imageUrl": "https://images.pexels.com/photos/6193755/pexels-photo-6193755.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ɪˈɹeɪzə/",
                "isMissingCustomIcon": true
            },
            {
                "question": "What straight strip of plastic or wood is used to measure length?",
                "choices": [
                    "Pencil",
                    "Sharpener",
                    "Pencil sharpener",
                    "Ruler"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/",
                    "/ˈʃɑː(ɹ)pənə(ɹ)/",
                    "",
                    ""
                ],
                "correctAnswer": "Ruler",
                "explanation": "A ruler has marked measurements to help draw straight lines.",
                "imageUrl": "https://images.pexels.com/photos/29279407/pexels-photo-29279407.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈɹuːlə(ɹ)/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil sharpener",
                    "Pencil",
                    "Sharpener",
                    "Book"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Book",
                "explanation": "\"book\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5905439/pexels-photo-5905439.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/buːk/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil sharpener",
                    "Scissors",
                    "Pencil",
                    "Sharpener"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/",
                    "/ˈsɪzəz/",
                    "",
                    "/ˈʃɑː(ɹ)pənə(ɹ)/"
                ],
                "correctAnswer": "Scissors",
                "explanation": "\"scissors\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/1212183/pexels-photo-1212183.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈsɪzəz/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil sharpener",
                    "Chair",
                    "Sharpener",
                    "Pencil"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/ /ˈʃɑː(ɹ)pənə(ɹ)/",
                    "/t͡ʃɛə(ɹ)/",
                    "",
                    ""
                ],
                "correctAnswer": "Chair",
                "explanation": "\"chair\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/17466659/pexels-photo-17466659.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/t͡ʃɛə(ɹ)/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Desk",
                    "Pencil",
                    "Sharpener",
                    "Pencil sharpener"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Desk",
                "explanation": "\"desk\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://virco.com/wp-content/uploads/desk-280opnm-red70-brn96-gry02_0-1.png",
                "ipa": "/dɛsk/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sharpener",
                    "Pencil sharpener",
                    "Pencil",
                    "Pen"
                ],
                "choiceIpas": [
                    "/ˈʃɑː(ɹ)pənə(ɹ)/",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pen",
                "explanation": "\"pen\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/19364472/pexels-photo-19364472.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/pɛn/",
                "isMissingCustomIcon": true
            },
            {
                "question": "What bag do we wear on our backs to carry books and school supplies?",
                "choices": [
                    "Pencil",
                    "Sharpener",
                    "Pencil sharpener",
                    "Backpack"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Backpack",
                "explanation": "A backpack holds pencils, books, and other tools for learning.",
                "imageUrl": "https://images.pexels.com/photos/4907460/pexels-photo-4907460.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈbæk.pæk/",
                "isMissingCustomIcon": true
            }
        ]
    },
    "school-supplies": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/41cJ0mqWses",
        "title": "School Supplies Song",
        "channel": "@EnglishTreeTV",
        "transcriptText": "[Música] pencil pencil sharpener sharpener eraser eraser ruler ruler Book book scissors scissors chare Cher desk desk pen pen b [Aplausos] [Música] b pencil pencil sharpener sharpener eraser eraser ruler ruler Book Book scissors scissors chair chair desk desk pen he Back [Aplausos] [Música] [Música] back [Música] Oh",
        "words": [
            "Pencil",
            "Sharpener",
            "Eraser",
            "Ruler",
            "Book",
            "Scissors",
            "Chair",
            "Desk",
            "Pen",
            "Backpack"
        ],
        "questions": [
            {
                "question": "What writing tool contains graphite and has an eraser on top?",
                "choices": [
                    "Sharpener",
                    "Pencil sharpener",
                    "Pencil",
                    "Eraser"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil",
                "explanation": "Pencils are perfect for schoolwork because you can erase mistakes.",
                "imageUrl": "https://images.pexels.com/photos/8386693/pexels-photo-8386693.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈpɛnsɪl/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sharpener",
                    "Eraser",
                    "Pencil",
                    "Pencil sharpener"
                ],
                "choiceIpas": [
                    "/ˈʃɑː(ɹ)pənə(ɹ)/",
                    "/ɪˈɹeɪzə/",
                    "/ˈpɛnsɪl/",
                    "/ˈpɛnsɪl/ /ˈʃɑː(ɹ)pənə(ɹ)/"
                ],
                "correctAnswer": "Sharpener",
                "explanation": "\"sharpener\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/237414/pexels-photo-237414.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈʃɑː(ɹ)pənə(ɹ)/",
                "isMissingCustomIcon": true
            },
            {
                "question": "What small rubber tool is used to remove pencil marks?",
                "choices": [
                    "Eraser",
                    "Pencil",
                    "Pencil sharpener",
                    "Sharpener"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "/ˈpɛnsɪl/",
                    ""
                ],
                "correctAnswer": "Eraser",
                "explanation": "An eraser rubs off pencil graphite to correct spelling mistakes.",
                "imageUrl": "https://images.pexels.com/photos/6193755/pexels-photo-6193755.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ɪˈɹeɪzə/",
                "isMissingCustomIcon": true
            },
            {
                "question": "What straight strip of plastic or wood is used to measure length?",
                "choices": [
                    "Pencil",
                    "Sharpener",
                    "Pencil sharpener",
                    "Ruler"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/",
                    "/ˈʃɑː(ɹ)pənə(ɹ)/",
                    "",
                    ""
                ],
                "correctAnswer": "Ruler",
                "explanation": "A ruler has marked measurements to help draw straight lines.",
                "imageUrl": "https://images.pexels.com/photos/29279407/pexels-photo-29279407.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈɹuːlə(ɹ)/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil sharpener",
                    "Pencil",
                    "Sharpener",
                    "Book"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Book",
                "explanation": "\"book\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/5905439/pexels-photo-5905439.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/buːk/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil sharpener",
                    "Scissors",
                    "Pencil",
                    "Sharpener"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/",
                    "/ˈsɪzəz/",
                    "",
                    "/ˈʃɑː(ɹ)pənə(ɹ)/"
                ],
                "correctAnswer": "Scissors",
                "explanation": "\"scissors\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/1212183/pexels-photo-1212183.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈsɪzəz/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil sharpener",
                    "Chair",
                    "Sharpener",
                    "Pencil"
                ],
                "choiceIpas": [
                    "/ˈpɛnsɪl/ /ˈʃɑː(ɹ)pənə(ɹ)/",
                    "/t͡ʃɛə(ɹ)/",
                    "",
                    ""
                ],
                "correctAnswer": "Chair",
                "explanation": "\"chair\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/17466659/pexels-photo-17466659.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/t͡ʃɛə(ɹ)/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Desk",
                    "Pencil",
                    "Sharpener",
                    "Pencil sharpener"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Desk",
                "explanation": "\"desk\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://virco.com/wp-content/uploads/desk-280opnm-red70-brn96-gry02_0-1.png",
                "ipa": "/dɛsk/",
                "isMissingCustomIcon": true
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Sharpener",
                    "Pencil sharpener",
                    "Pencil",
                    "Pen"
                ],
                "choiceIpas": [
                    "/ˈʃɑː(ɹ)pənə(ɹ)/",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pen",
                "explanation": "\"pen\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/19364472/pexels-photo-19364472.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/pɛn/",
                "isMissingCustomIcon": true
            },
            {
                "question": "What bag do we wear on our backs to carry books and school supplies?",
                "choices": [
                    "Pencil",
                    "Sharpener",
                    "Pencil sharpener",
                    "Backpack"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Backpack",
                "explanation": "A backpack holds pencils, books, and other tools for learning.",
                "imageUrl": "https://images.pexels.com/photos/4907460/pexels-photo-4907460.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈbæk.pæk/",
                "isMissingCustomIcon": true
            }
        ]
    },
    "school-supplies-3": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/g7kK989HiRQ",
        "title": "School Supplies | Talking Flashcards",
        "channel": "@Mapleleaflearning",
        "transcriptText": "[Music] Maple Leaf learning talking flashcards school book book book chair chair chair desk desk desk pencil case pencil case pencil case pen pen pen ruler ruler ruler pencil pencil pencil eraser eraser eraser clock clock clock crayon crayon crayon scissors scissors scissors sharpener sharpener sharpener stapler stapler stapler teacher teacher hey sit down and be quiet it's time to study I'm sorry Maple Leaf learning talking flashcards see you next time",
        "words": [
            "Pencil",
            "Ruler",
            "Eraser",
            "Crayon",
            "Pencil case"
        ],
        "questions": [
            {
                "question": "What writing tool contains graphite and has an eraser on top?",
                "choices": [
                    "Eraser",
                    "Ruler",
                    "Pencil",
                    "Crayon"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil",
                "explanation": "Pencils are perfect for schoolwork because you can erase mistakes.",
                "imageUrl": "https://images.pexels.com/photos/12969416/pexels-photo-12969416.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What straight strip of plastic or wood is used to measure length?",
                "choices": [
                    "Pencil",
                    "Crayon",
                    "Ruler",
                    "Eraser"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ruler",
                "explanation": "A ruler has marked measurements to help draw straight lines.",
                "imageUrl": "https://images.pexels.com/photos/6123262/pexels-photo-6123262.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What small rubber tool is used to remove pencil marks?",
                "choices": [
                    "Eraser",
                    "Ruler",
                    "Pencil",
                    "Crayon"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Eraser",
                "explanation": "An eraser rubs off pencil graphite to correct spelling mistakes.",
                "imageUrl": "https://images.pexels.com/photos/30663291/pexels-photo-30663291.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What colored wax stick do children use for drawing and coloring?",
                "choices": [
                    "Eraser",
                    "Ruler",
                    "Pencil",
                    "Crayon"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Crayon",
                "explanation": "Crayons are fun drawing tools that come in colorful boxes.",
                "imageUrl": "https://images.pexels.com/photos/28656153/pexels-photo-28656153.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Ruler",
                    "Pencil",
                    "Eraser",
                    "Pencil case"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil case",
                "explanation": "\"Pencil case\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/8580767/pexels-photo-8580767.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "school-supplies-4": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/6AgDtngHP6c",
        "title": "Kids vocabulary - School Supplies - Learn English for kids - English educational video #shorts",
        "channel": "@EnglishSingsing",
        "transcriptText": "foreign school supplies what's in your backpack it's my book I can read book book [Applause] it's my notebook I can write on it notebook [Music] notebook [Applause] these are my scissors I can cut the paper [Applause] [Music] scissors [Music] scissors it's my glue I can stick them with it glue [Music]",
        "words": [
            "Wwwyoutubecom",
            "User",
            "Backpack",
            "Music",
            "Music scissor"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Wwwyoutubecom",
                    "Backpack",
                    "Music",
                    "User"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Wwwyoutubecom",
                "explanation": "\"Wwwyoutubecom\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/3227986/pexels-photo-3227986.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "User",
                    "Backpack",
                    "Wwwyoutubecom",
                    "Music"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "User",
                "explanation": "\"User\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/33989917/pexels-photo-33989917.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What bag do we wear on our backs to carry books and school supplies?",
                "choices": [
                    "Wwwyoutubecom",
                    "Backpack",
                    "User",
                    "Music"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Backpack",
                "explanation": "A backpack holds pencils, books, and other tools for learning.",
                "imageUrl": "https://images.pexels.com/photos/16372801/pexels-photo-16372801.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Backpack",
                    "User",
                    "Wwwyoutubecom",
                    "Music"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Music",
                "explanation": "\"Music\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9418650/pexels-photo-9418650.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Backpack",
                    "User",
                    "Wwwyoutubecom",
                    "Music scissor"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Music scissor",
                "explanation": "\"Music scissor\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/11650293/pexels-photo-11650293.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "school-supplies-5": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/AYYzO36M0So",
        "title": "Easy Words 5 (Stationery Song) - Learn English vocabulary for kids - English song for Toddlers",
        "channel": "@EnglishSingsing",
        "transcriptText": "[Music] [Applause] pencil pencil pencil book book book ruler ruler ruler eraser eraser eraser [Music]",
        "words": [
            "Wwwyoutubecom",
            "User",
            "Pencil",
            "Ruler",
            "Eraser"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Ruler",
                    "User",
                    "Pencil",
                    "Wwwyoutubecom"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Wwwyoutubecom",
                "explanation": "\"Wwwyoutubecom\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/27680443/pexels-photo-27680443.png?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil",
                    "Ruler",
                    "User",
                    "Wwwyoutubecom"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "User",
                "explanation": "\"User\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/20896020/pexels-photo-20896020.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What writing tool contains graphite and has an eraser on top?",
                "choices": [
                    "Ruler",
                    "User",
                    "Wwwyoutubecom",
                    "Pencil"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil",
                "explanation": "Pencils are perfect for schoolwork because you can erase mistakes.",
                "imageUrl": "https://images.pexels.com/photos/8099373/pexels-photo-8099373.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What straight strip of plastic or wood is used to measure length?",
                "choices": [
                    "Ruler",
                    "Pencil",
                    "Wwwyoutubecom",
                    "User"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ruler",
                "explanation": "A ruler has marked measurements to help draw straight lines.",
                "imageUrl": "https://images.pexels.com/photos/17750881/pexels-photo-17750881.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What small rubber tool is used to remove pencil marks?",
                "choices": [
                    "Wwwyoutubecom",
                    "Eraser",
                    "User",
                    "Pencil"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Eraser",
                "explanation": "An eraser rubs off pencil graphite to correct spelling mistakes.",
                "imageUrl": "https://images.pexels.com/photos/5088023/pexels-photo-5088023.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "school-supplies-6": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/9LZPHvQJABQ",
        "title": "School Vocabulary I - Vocabulary for Kids",
        "channel": "@SmileandLearnEnglish",
        "transcriptText": "[Music] smile and learn hello friends today we're going to visit our school and we're going to learn many words related to this place are you ready to find out more about the school let's go for it [Music] the classroom is the place where students learn and do activities classroom the teacher teaches children in school thank you teacher teacher we can read books and learn many things book the alphabet is a set of letters in a fixed order a b c d e alphabet the desk is the table where pupils study and do their work desk the computer is an electronic device that allows us to look up information and create content and assignments we love learning using the computer computer we write or draw using the pencil i love it pencil the pencil case is used to keep some school supplies like the eraser the pencil the pen or the pencil sharpener pencil case the ruler is a tool used to draw straight lines or to measure ruler the clock indicates hours and minutes and tells us when our school day ends recess time clock let's see if you remember any of the words we learned who teaches children in school the teacher where do students learn and do classwork in class how do we recap the order of letters with the alphabet [Music] how do we call the table where students do their classwork the desk where do we keep the pencil the pen or the eraser in the pencil case what do we use to write the pencil [Applause] these have been some words related to school but there are so many more don't miss the second video about school [Music] did you like the video we have so many more subscribe by clicking on the seal ah and if you want to keep watching more videos click on the boxes [Music]",
        "words": [
            "Pencil",
            "Student",
            "Pencil case",
            "Eraser",
            "Ruler"
        ],
        "questions": [
            {
                "question": "What writing tool contains graphite and has an eraser on top?",
                "choices": [
                    "Student",
                    "Pencil",
                    "Eraser",
                    "Pencil case"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil",
                "explanation": "Pencils are perfect for schoolwork because you can erase mistakes.",
                "imageUrl": "https://images.pexels.com/photos/30583224/pexels-photo-30583224.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What do we call a person who is studying or learning in school?",
                "choices": [
                    "Eraser",
                    "Pencil case",
                    "Student",
                    "Pencil"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Student",
                "explanation": "Students attend school to gain knowledge and learn new skills.",
                "imageUrl": "https://images.pexels.com/photos/8199161/pexels-photo-8199161.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Student",
                    "Pencil",
                    "Pencil case",
                    "Eraser"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil case",
                "explanation": "\"Pencil case\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/3731255/pexels-photo-3731255.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What small rubber tool is used to remove pencil marks?",
                "choices": [
                    "Student",
                    "Pencil case",
                    "Pencil",
                    "Eraser"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Eraser",
                "explanation": "An eraser rubs off pencil graphite to correct spelling mistakes.",
                "imageUrl": "https://images.pexels.com/photos/5412134/pexels-photo-5412134.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What straight strip of plastic or wood is used to measure length?",
                "choices": [
                    "Pencil",
                    "Student",
                    "Ruler",
                    "Pencil case"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ruler",
                "explanation": "A ruler has marked measurements to help draw straight lines.",
                "imageUrl": "https://images.pexels.com/photos/34918663/pexels-photo-34918663.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "school-supplies-7": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/BK_wTEtB63U",
        "title": "What's this? – School supplies | English Vocabulary Guess the silhouette Game for kids (ESL)",
        "channel": "@beenglishkids1402",
        "transcriptText": "",
        "words": [
            "What is itDO",
            "Supplie",
            "Silhouette",
            "Game",
            "ESL"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Game",
                    "Silhouette",
                    "What is itDO",
                    "Supplie"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "What is itDO",
                "explanation": "\"What is itDO\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/1181598/pexels-photo-1181598.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "What is itDO",
                    "Supplie",
                    "Silhouette",
                    "Game"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Supplie",
                "explanation": "\"Supplie\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9714426/pexels-photo-9714426.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Game",
                    "Silhouette",
                    "Supplie",
                    "What is itDO"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Silhouette",
                "explanation": "\"Silhouette\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/18613638/pexels-photo-18613638.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Supplie",
                    "What is itDO",
                    "Game",
                    "Silhouette"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Game",
                "explanation": "\"Game\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9068972/pexels-photo-9068972.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "What is itDO",
                    "ESL",
                    "Supplie",
                    "Silhouette"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "ESL",
                "explanation": "\"ESL\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6929167/pexels-photo-6929167.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "school-supplies-8": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/aVSnDZHNEQc",
        "title": "What is In Your Bag? Song with Matt | School Classroom Items | Learn English Kids",
        "channel": "@DreamEnglishKids",
        "transcriptText": "woaaaah!! Dream English Kids Hi, friends. Are you ready to sing the What's in your bag? Song? Here we go! What's in your bag? It's my pencil. What's in your bag? It's my notebook. What's in your bag? It's my pet snake. You don't have a pet snake. Ahhh! What's in your bag? It's my ruler. What's in your bag? It's my eraser. What's in your bag? It's my pet spider. You don't have a pet spider. Ahhh! What's in your bag? It's my pencil case. What's in your bag? It's my book. What's in your bag? It's my pet dinosaur. You don't have a pet dinosaur. Ahhh! One more time! Faster! What's in your bag? It's my pencil. What's in your bag? It's my notebook. What's in your bag? It's my pet snake. You don't have a pet snake. Ahhh! What's in your bag? It's my ruler. What's in your bag? It's my eraser. What's in your bag? It's my pet spider. You don't have a pet spider. Ahhh! What's in your bag? It's my pencil case. What's in your bag? It's my book. What's in your bag? It's my pet dinosaur. You don't have a pet dinosaur. Ahhh! Great job! Hello. My name is Matt. What's your name? Let's learn some more!",
        "words": [
            "Bag",
            "Pet",
            "Song",
            "Lets",
            "Matt"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pet",
                    "Bag",
                    "Song",
                    "Lets"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Bag",
                "explanation": "\"Bag\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/6633602/pexels-photo-6633602.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈbæːɡ/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Lets",
                    "Song",
                    "Pet",
                    "Bag"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pet",
                "explanation": "\"Pet\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/30070537/pexels-photo-30070537.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/pɛt/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Bag",
                    "Pet",
                    "Lets",
                    "Song"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Song",
                "explanation": "\"Song\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/19262077/pexels-photo-19262077.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Lets",
                    "Song",
                    "Bag",
                    "Pet"
                ],
                "choiceIpas": [
                    "/lɛts/",
                    "/sɒŋ/",
                    "/ˈbæːɡ/",
                    "/pɛt/"
                ],
                "correctAnswer": "Lets",
                "explanation": "\"Lets\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/8879788/pexels-photo-8879788.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/lɛts/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pet",
                    "Matt",
                    "Song",
                    "Bag"
                ],
                "choiceIpas": [
                    "/pɛt/",
                    "",
                    "/sɒŋ/",
                    "/ˈbæːɡ/"
                ],
                "correctAnswer": "Matt",
                "explanation": "\"Matt\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7005061/pexels-photo-7005061.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "school-supplies-9": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/zo3NUvGNjLY",
        "title": "School Supplies Finger Family Song | Learn English Children",
        "channel": "@DreamEnglishKids",
        "transcriptText": "[Music] it's a five finger school supplies finger family wow cool dream english kids [Applause] hi friends are you ready for the school supplies finger family song here we go backpack finger backpack finger where are you here i am [Music] finger pencil finger where are you here i am here i am how do you do pencil [Music] pencil eraser finger eraser finger where are you here i am here i am eraser eraser ruler finger ruler finger where are you here i am here i am how do you do ruler [Music] ruler notebook finger notebook finger where are you here i am here i am how do you do [Music] no no this is a pencil no it's a banana oh [Music] this is a pencil no it's a notebook oh this is a pencil yes [Music] let's sing the family finger song one more time here we go backpack finger backpack finger where are you here i am here i am [Music] finger pencil finger where are you here i am here i am how do you do [Music] pencil [Music] pencil eraser finger eraser finger where are you here i am here i am how do you do eraser eraser ruler finger ruler finger where are you here i am here i am how do you do ruler ruler notebook finger notebook finger where are you here i am here i am how do you do [Music] nofa [Music] richa hello my name is matt what's your name it's great to see you what do you have in your backpack in my backpack i have a pencil [Music] an eraser [Music] a ruler and a notebook oh and there's one more thing in here a banana [Music] goodbye see you thank you goodbye [Music] [Applause] dream english kids let's have a look at another song [Music]",
        "words": [
            "Finger",
            "Music",
            "Pencil",
            "Eraser",
            "Ruler"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Eraser",
                    "Music",
                    "Finger",
                    "Pencil"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Finger",
                "explanation": "\"Finger\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/11731122/pexels-photo-11731122.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Eraser",
                    "Finger",
                    "Pencil",
                    "Music"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Music",
                "explanation": "\"Music\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7095510/pexels-photo-7095510.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What writing tool contains graphite and has an eraser on top?",
                "choices": [
                    "Pencil",
                    "Finger",
                    "Eraser",
                    "Music"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil",
                "explanation": "Pencils are perfect for schoolwork because you can erase mistakes.",
                "imageUrl": "https://images.pexels.com/photos/8386695/pexels-photo-8386695.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What small rubber tool is used to remove pencil marks?",
                "choices": [
                    "Finger",
                    "Eraser",
                    "Music",
                    "Pencil"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Eraser",
                "explanation": "An eraser rubs off pencil graphite to correct spelling mistakes.",
                "imageUrl": "https://images.pexels.com/photos/37121878/pexels-photo-37121878.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What straight strip of plastic or wood is used to measure length?",
                "choices": [
                    "Finger",
                    "Pencil",
                    "Ruler",
                    "Music"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ruler",
                "explanation": "A ruler has marked measurements to help draw straight lines.",
                "imageUrl": "https://images.pexels.com/photos/5412363/pexels-photo-5412363.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "school-supplies-10": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/JlNqWAZlcsc",
        "title": "Learn School Supplies | Talking Flashcards",
        "channel": "@Mapleleaflearning",
        "transcriptText": "talking flash cards school are you ready here we go a pencil a pencil an eraser [Music] an eraser a book [Music] a book a ruler a ruler a pen a pen [Music] a desk [Music] a desk a pencil case [Music] a pencil case a clock [Music] a clock a chair a chair a crayon a crayon a stapler a stapler a notebook a notebook [Music] a sharpener a sharpener a backpack a backpack glue [Music] glue scissors scissors you can get these flashcards and many many more at www.mapleleaflearning.com [Music] please come by and check out our site we have games flash cards songs and many many more activities to make your classroom more fun anyways hope to see you soon where's the stapler where is it where is it on the desk on the desk where's the broom where is it where is it in the box in the box where's the crayon where is it where is it under the chair under the chair on in and under yeah where's the pencil where is it where is it on the book on the book where's the glue where is it where is it in the basket in the basket where's the sharpener where is it where is it under the desk under the desk on in and under great the paintbrush where is it where is it on the chair on the chair where's the ruler where is it where is it in the bag in the bag where's the pen where is it where is it under the book under the book on in and under see you next time",
        "words": [
            "Http",
            "Pencil",
            "Music",
            "Under",
            "Ruler"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Pencil",
                    "Http",
                    "Music",
                    "Under"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Http",
                "explanation": "\"Http\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/270488/pexels-photo-270488.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What writing tool contains graphite and has an eraser on top?",
                "choices": [
                    "Music",
                    "Under",
                    "Pencil",
                    "Http"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Pencil",
                "explanation": "Pencils are perfect for schoolwork because you can erase mistakes.",
                "imageUrl": "https://images.pexels.com/photos/6952393/pexels-photo-6952393.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Under",
                    "Music",
                    "Http",
                    "Pencil"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Music",
                "explanation": "\"Music\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/1718380/pexels-photo-1718380.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Http",
                    "Pencil",
                    "Under",
                    "Music"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Under",
                "explanation": "\"Under\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7320698/pexels-photo-7320698.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What straight strip of plastic or wood is used to measure length?",
                "choices": [
                    "Music",
                    "Ruler",
                    "Http",
                    "Pencil"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Ruler",
                "explanation": "A ruler has marked measurements to help draw straight lines.",
                "imageUrl": "https://images.pexels.com/photos/35242187/pexels-photo-35242187.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-19": {
        "grade": 1,
        "videoUrl": "https://www.youtube.com/embed/2i4CbCINjWA",
        "title": "School (place) (v1) - Learn English for kids - English educational video",
        "channel": "@EnglishSingsing",
        "transcriptText": "English singsing school Let me show you around my school. Oh, there is our school bus. school bus school bus This is my school. There are a gym, an art room, a music room, a science room, a nurse’s office, a cafeteria, and many classrooms. school school We have PE class in the gym. gym gym We have art class in the art room. art room art room We have music class in the music room. music room music room We have science class in the science room. science room science room When you feel sick, you can rest in the nurse's office. nurse's office nurses office We have lunch in the cafeteria. cafeteria cafeteria This is our classroom. We study together here. There are a black board, chalks, desks, chairs, and a bulletin board. classroom classroom blackboard blackboard chalk chalk desk chair desk chair bulletin board bulletin board We learn a lot from our teacher. teacher teacher We are good students. student student These are my classmates. classmate classmate. My school is the best. Review school school bus gym art room music room science room nurse's office cafeteria classroom blackboard chalk desk chair bulletin board teacher student classmate",
        "words": [
            "Office",
            "Nurse office",
            "Student",
            "Desk chair",
            "Bulletin board"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Nurse office",
                    "Student",
                    "Office",
                    "Desk chair"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Office",
                "explanation": "\"Office\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/7535039/pexels-photo-7535039.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Student",
                    "Office",
                    "Desk chair",
                    "Nurse office"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Nurse office",
                "explanation": "\"Nurse office\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/31499386/pexels-photo-31499386.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "What do we call a person who is studying or learning in school?",
                "choices": [
                    "Nurse office",
                    "Office",
                    "Student",
                    "Desk chair"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Student",
                "explanation": "Students attend school to gain knowledge and learn new skills.",
                "imageUrl": "https://images.pexels.com/photos/12497063/pexels-photo-12497063.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Desk chair",
                    "Office",
                    "Nurse office",
                    "Student"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Desk chair",
                "explanation": "\"Desk chair\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/30281236/pexels-photo-30281236.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Student",
                    "Bulletin board",
                    "Nurse office",
                    "Office"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Bulletin board",
                "explanation": "\"Bulletin board\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/3782233/pexels-photo-3782233.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "1-2": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/-UP5ZcFqv_Y",
        "title": "What Is This Called in English? 🇬🇧 | Art & Colors #11",
        "channel": "@JourneyEnglishTalk",
        "transcriptText": "What is this called? >> [music] >> Paint. What is this called? [music] Canvas. What [music] is this called? Clay. What is this [music] called? Sculpture. What [music] is this called? Sketch. >> [music] >> What is this called? Portrait. What is [music] this called? Gallery. What is this called? >> [music] >> Museum. What is this called? >> [music] >> Charcoal. What is this called? Watercolor.",
        "words": [
            "Paint",
            "Canvas",
            "Clay",
            "Sculpture",
            "Sketch",
            "Portrait",
            "Gallery",
            "Museum",
            "Charcoal",
            "Watercolor"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Clay",
                    "Sculpture",
                    "Canvas",
                    "Paint"
                ],
                "choiceIpas": [
                    "/kleɪ/",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Paint",
                "explanation": "\"paint\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/13343865/pexels-photo-13343865.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/peɪnt/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Paint",
                    "Canvas",
                    "Clay",
                    "Sculpture"
                ],
                "choiceIpas": [
                    "/peɪnt/",
                    "/ˈkæn.vəs/",
                    "/kleɪ/",
                    ""
                ],
                "correctAnswer": "Canvas",
                "explanation": "\"canvas\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/31246805/pexels-photo-31246805.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈkæn.vəs/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Paint",
                    "Sculpture",
                    "Canvas",
                    "Clay"
                ],
                "choiceIpas": [
                    "/peɪnt/",
                    "/ˈskʌlptj(ʊ)ə/",
                    "/ˈkæn.vəs/",
                    "/kleɪ/"
                ],
                "correctAnswer": "Clay",
                "explanation": "\"clay\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9304544/pexels-photo-9304544.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/kleɪ/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Canvas",
                    "Sculpture",
                    "Paint",
                    "Clay"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Sculpture",
                "explanation": "\"sculpture\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/37109655/pexels-photo-37109655.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Clay",
                    "Paint",
                    "Sketch",
                    "Canvas"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Sketch",
                "explanation": "\"sketch\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/14849507/pexels-photo-14849507.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/skɛtʃ/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Portrait",
                    "Paint",
                    "Canvas",
                    "Clay"
                ],
                "choiceIpas": [
                    "/ˈpɔːtɹeɪt/",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Portrait",
                "explanation": "\"portrait\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/18853747/pexels-photo-18853747.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈpɔːtɹeɪt/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Clay",
                    "Canvas",
                    "Paint",
                    "Gallery"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Gallery",
                "explanation": "\"gallery\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/13432768/pexels-photo-13432768.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈɡæləɹi/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Clay",
                    "Museum",
                    "Paint",
                    "Canvas"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Museum",
                "explanation": "\"museum\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/20268598/pexels-photo-20268598.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/mjuːˈziːəm/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Charcoal",
                    "Clay",
                    "Paint",
                    "Canvas"
                ],
                "choiceIpas": [
                    "/ˈtʃɑː.kəʊl/",
                    "/kleɪ/",
                    "/peɪnt/",
                    "/ˈkæn.vəs/"
                ],
                "correctAnswer": "Charcoal",
                "explanation": "\"charcoal\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/8021316/pexels-photo-8021316.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈtʃɑː.kəʊl/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Watercolor",
                    "Paint",
                    "Clay",
                    "Canvas"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Watercolor",
                "explanation": "\"watercolor\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/30552130/pexels-photo-30552130.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    },
    "school-supplies-2": {
        "grade": 1,
        "topicId": "school-supplies",
        "videoUrl": "https://www.youtube.com/embed/-UP5ZcFqv_Y",
        "title": "What Is This Called in English? 🇬🇧 | Art & Colors #11",
        "channel": "@JourneyEnglishTalk",
        "transcriptText": "What is this called? >> [music] >> Paint. What is this called? [music] Canvas. What [music] is this called? Clay. What is this [music] called? Sculpture. What [music] is this called? Sketch. >> [music] >> What is this called? Portrait. What is [music] this called? Gallery. What is this called? >> [music] >> Museum. What is this called? >> [music] >> Charcoal. What is this called? Watercolor.",
        "words": [
            "Paint",
            "Canvas",
            "Clay",
            "Sculpture",
            "Sketch",
            "Portrait",
            "Gallery",
            "Museum",
            "Charcoal",
            "Watercolor"
        ],
        "questions": [
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Clay",
                    "Sculpture",
                    "Canvas",
                    "Paint"
                ],
                "choiceIpas": [
                    "/kleɪ/",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Paint",
                "explanation": "\"paint\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/13343865/pexels-photo-13343865.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/peɪnt/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Paint",
                    "Canvas",
                    "Clay",
                    "Sculpture"
                ],
                "choiceIpas": [
                    "/peɪnt/",
                    "/ˈkæn.vəs/",
                    "/kleɪ/",
                    ""
                ],
                "correctAnswer": "Canvas",
                "explanation": "\"canvas\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/31246805/pexels-photo-31246805.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈkæn.vəs/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Paint",
                    "Sculpture",
                    "Canvas",
                    "Clay"
                ],
                "choiceIpas": [
                    "/peɪnt/",
                    "/ˈskʌlptj(ʊ)ə/",
                    "/ˈkæn.vəs/",
                    "/kleɪ/"
                ],
                "correctAnswer": "Clay",
                "explanation": "\"clay\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/9304544/pexels-photo-9304544.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/kleɪ/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Canvas",
                    "Sculpture",
                    "Paint",
                    "Clay"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Sculpture",
                "explanation": "\"sculpture\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/37109655/pexels-photo-37109655.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Clay",
                    "Paint",
                    "Sketch",
                    "Canvas"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Sketch",
                "explanation": "\"sketch\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/14849507/pexels-photo-14849507.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/skɛtʃ/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Portrait",
                    "Paint",
                    "Canvas",
                    "Clay"
                ],
                "choiceIpas": [
                    "/ˈpɔːtɹeɪt/",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Portrait",
                "explanation": "\"portrait\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/18853747/pexels-photo-18853747.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈpɔːtɹeɪt/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Clay",
                    "Canvas",
                    "Paint",
                    "Gallery"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Gallery",
                "explanation": "\"gallery\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/13432768/pexels-photo-13432768.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈɡæləɹi/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Clay",
                    "Museum",
                    "Paint",
                    "Canvas"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Museum",
                "explanation": "\"museum\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/20268598/pexels-photo-20268598.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/mjuːˈziːəm/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Charcoal",
                    "Clay",
                    "Paint",
                    "Canvas"
                ],
                "choiceIpas": [
                    "/ˈtʃɑː.kəʊl/",
                    "/kleɪ/",
                    "/peɪnt/",
                    "/ˈkæn.vəs/"
                ],
                "correctAnswer": "Charcoal",
                "explanation": "\"charcoal\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/8021316/pexels-photo-8021316.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "/ˈtʃɑː.kəʊl/",
                "isMissingCustomIcon": false
            },
            {
                "question": "Which word best describes this image?",
                "choices": [
                    "Watercolor",
                    "Paint",
                    "Clay",
                    "Canvas"
                ],
                "choiceIpas": [
                    "",
                    "",
                    "",
                    ""
                ],
                "correctAnswer": "Watercolor",
                "explanation": "\"watercolor\" is the correct vocabulary word for this picture.",
                "imageUrl": "https://images.pexels.com/photos/30552130/pexels-photo-30552130.jpeg?auto=compress&cs=tinysrgb&h=350",
                "ipa": "",
                "isMissingCustomIcon": false
            }
        ]
    }
};

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
  const shortsMatch = url.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch) {
    videoId = shortsMatch[1];
  } else {
    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (watchMatch) {
      videoId = watchMatch[1];
    } else {
      const shareMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
      if (shareMatch) {
        videoId = shareMatch[1];
      } else {
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

  if (topicId) {
    const topicKey = `${topicId}-${levelId}`;
    if (db && db[topicKey]) {
      quest = { ...db[topicKey], grade: numericGrade };
      if (quest.videoUrl) quest.videoUrl = getYouTubeEmbedUrl(quest.videoUrl);
      return quest;
    }
  }

  const specificKey = `${numericGrade}-${levelId}`;
  if (db && db[specificKey]) {
    quest = { ...db[specificKey], grade: numericGrade };
  } else if (db && db[numericGrade as any]) {
    quest = { ...db[numericGrade as any], grade: numericGrade };
  } else if (db && db[`${numericGrade}-1`]) {
    quest = { ...db[`${numericGrade}-1`], grade: numericGrade };
  } else {
    const keys = Object.keys(db);
    const gradeKey = keys.find(k => k === String(numericGrade) || k.startsWith(`${numericGrade}-`));
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

  const gradeList = englishPool.filter(q => q.grade === numericGrade);
  if (gradeList.length > 0) return gradeList;

  if (englishPool.length > 0) return englishPool;

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
