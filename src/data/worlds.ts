export interface LevelConfig {
  level: number;
  gameMode: 'racing' | 'quiz' | 'boss' | 'tower-defense' | 'tug-of-war';
  videoId?: string;
  topicId?: string; // for standard quiz
}

export interface WorldConfig {
  id: string;
  name: string;
  grade: number | string;
  topicId: string;
  bgClass: string;
  nodeColor: 'green' | 'purple' | 'blue' | 'orange' | 'yellow';
  emoji: string;
  monsterNames: string[];
  monsterIds: string[];
  subject?: 'math' | 'english';
  totalLevels?: number;
  badge?: string;
  bgStyle?: string;
  textStyle?: string;
  description?: string;
  levels?: LevelConfig[];
  isHidden?: boolean;
}

export const STATIC_WORLDS_DATABASE: { [id: string]: WorldConfig } = {
    "gk-counting": {
        "id": "gk-counting",
        "name": "Counting Meadow",
        "grade": 0,
        "topicId": "counting",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🐝",
        "monsterNames": [
            "Baby Slime",
            "Tiny Imp",
            "Flower Pixie",
            "Meadow Bunny",
            "Golden Bee Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "muddy_slime"
        ]
    },
    "gk-geometry": {
        "id": "gk-geometry",
        "name": "Shape Crystal Land",
        "grade": 0,
        "topicId": "geometry",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "💎",
        "monsterNames": [
            "Ruby Slime",
            "Crystal Imp",
            "Prism Sprite",
            "Shard Golem",
            "Diamond Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ]
    },
    "gk-comparing": {
        "id": "gk-comparing",
        "name": "Comparing Valley",
        "grade": 0,
        "topicId": "comparing",
        "bgClass": "bg-playful-dots bg-orange-50",
        "nodeColor": "orange",
        "emoji": "⛰️",
        "monsterNames": [
            "Valley Slime",
            "Scale Imp",
            "Weight Sprite",
            "Ogre Scout",
            "Titan Ogre Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre"
        ]
    },
    "gk-operations": {
        "id": "gk-operations",
        "name": "Sum & Difference Oasis",
        "grade": 0,
        "topicId": "operations",
        "bgClass": "bg-playful-dots bg-emerald-50",
        "nodeColor": "green",
        "emoji": "🍎",
        "monsterNames": [
            "Apple Slime",
            "Math Imp",
            "Berry Sprite",
            "Oasis Bunny",
            "Forest Druid Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "muddy_slime"
        ]
    },
    "gk-base-ten": {
        "id": "gk-base-ten",
        "name": "Base Ten Meadows",
        "grade": 0,
        "topicId": "base-ten",
        "bgClass": "bg-playful-dots bg-blue-50",
        "nodeColor": "blue",
        "emoji": "🎒",
        "monsterNames": [
            "Ten Slime",
            "Unit Imp",
            "Block Sprite",
            "Pack Golem",
            "Decade Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ]
    },
    "g1-addition": {
        "id": "g1-addition",
        "name": "Number Forest",
        "grade": 1,
        "topicId": "addition",
        "bgClass": "bg-forest-grid",
        "nodeColor": "green",
        "emoji": "🌳",
        "monsterNames": [
            "Bramble Slime",
            "Moss Golem",
            "Forest Imp",
            "Wildwood Dryad",
            "Bramble Golem Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "bramble_golem",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g1-subtraction": {
        "id": "g1-subtraction",
        "name": "Subtraction Cave",
        "grade": 1,
        "topicId": "subtraction",
        "bgClass": "bg-playful-dots bg-slate-100",
        "nodeColor": "purple",
        "emoji": "🦇",
        "monsterNames": [
            "Cave Slime",
            "Fuzzy Ogre",
            "Crystal Bat",
            "Shadow Gargoyle",
            "Fluffy Ogre Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "fluffy_ogre",
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre"
        ]
    },
    "g1-place-value": {
        "id": "g1-place-value",
        "name": "Place Value Castle",
        "grade": 1,
        "topicId": "place-value",
        "bgClass": "bg-playful-dots bg-yellow-50",
        "nodeColor": "yellow",
        "emoji": "🏰",
        "monsterNames": [
            "Gold Slime",
            "Brick Golem",
            "Gate Keeper",
            "Royal Knight",
            "Castle Guard Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ]
    },
    "g1-measurement": {
        "id": "g1-measurement",
        "name": "Time & Measure Cave",
        "grade": 1,
        "topicId": "measurement",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "orange",
        "emoji": "⏰",
        "monsterNames": [
            "Tick Slime",
            "Hour Imp",
            "Ruler Sprite",
            "Shadow Gargoyle",
            "Ticking Golem Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "bramble_golem"
        ]
    },
    "g1-geometry": {
        "id": "g1-geometry",
        "name": "Shape Partition Forest",
        "grade": 1,
        "topicId": "geometry",
        "bgClass": "bg-forest-grid",
        "nodeColor": "green",
        "emoji": "🍕",
        "monsterNames": [
            "Half Slime",
            "Quarter Imp",
            "Cone Sprite",
            "Forest Dryad",
            "Bramble Golem Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g2-addition": {
        "id": "g2-addition",
        "name": "Addition Island",
        "grade": 2,
        "topicId": "addition",
        "bgClass": "bg-playful-dots bg-sky-50",
        "nodeColor": "blue",
        "emoji": "🏝️",
        "monsterNames": [
            "Coral Slime",
            "Salty Ogre",
            "Aqua Dragon",
            "Reef Crab",
            "Sparky Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon",
            "muddy_slime",
            "sparky_dragon"
        ]
    },
    "g2-subtraction": {
        "id": "g2-subtraction",
        "name": "Subtraction Cave",
        "grade": 2,
        "topicId": "subtraction",
        "bgClass": "bg-playful-dots bg-slate-200",
        "nodeColor": "purple",
        "emoji": "🧗",
        "monsterNames": [
            "Cave Slime",
            "Fuzzy Ogre",
            "Crystal Bat",
            "Shadow Gargoyle",
            "Fluffy Ogre Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "fluffy_ogre",
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre"
        ]
    },
    "g2-measurement": {
        "id": "g2-measurement",
        "name": "Clock Time Tower",
        "grade": 2,
        "topicId": "measurement",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "orange",
        "emoji": "⏰",
        "monsterNames": [
            "Time Slime",
            "Gear Imp",
            "Ticking Sprite",
            "Hour Golem",
            "Clockmaker Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g2-base-ten": {
        "id": "g2-base-ten",
        "name": "Hundred Block Castle",
        "grade": 2,
        "topicId": "base-ten",
        "bgClass": "bg-playful-dots bg-yellow-50",
        "nodeColor": "yellow",
        "emoji": "🧱",
        "monsterNames": [
            "Brick Slime",
            "Salty Ogre",
            "Aqua Dragon",
            "Reef Crab",
            "Sparky Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon",
            "muddy_slime",
            "sparky_dragon"
        ]
    },
    "g2-geometry": {
        "id": "g2-geometry",
        "name": "Partition Cave",
        "grade": 2,
        "topicId": "geometry",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🔷",
        "monsterNames": [
            "Cave Slime",
            "Fuzzy Ogre",
            "Crystal Bat",
            "Shadow Gargoyle",
            "Fluffy Ogre Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "fluffy_ogre",
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre"
        ]
    },
    "g3-multiplication": {
        "id": "g3-multiplication",
        "name": "Multiplication Mountain",
        "grade": 3,
        "topicId": "multiplication",
        "bgClass": "bg-playful-dots bg-orange-50",
        "nodeColor": "orange",
        "emoji": "🏔️",
        "monsterNames": [
            "Volcano Slime",
            "Ember Fox",
            "Fire Drake",
            "Ash Golem",
            "Ember Fox Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "ember_fox",
            "sparky_dragon",
            "bramble_golem",
            "ember_fox"
        ]
    },
    "g3-division": {
        "id": "g3-division",
        "name": "Fraction Kingdom",
        "grade": 3,
        "topicId": "division",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "👑",
        "monsterNames": [
            "Gold Slime",
            "Crown Knight",
            "Jewel Wyvern",
            "Star Golem",
            "Sparky Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "bramble_golem",
            "sparky_dragon"
        ]
    },
    "g3-fractions": {
        "id": "g3-fractions",
        "name": "Fraction Alchemy Lab",
        "grade": 3,
        "topicId": "fractions",
        "bgClass": "bg-playful-dots bg-rose-50",
        "nodeColor": "purple",
        "emoji": "🧪",
        "monsterNames": [
            "Acid Slime",
            "Elixir Sprite",
            "Brew Golem",
            "Vial Drake",
            "Alchemist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "sparky_dragon"
        ]
    },
    "g3-base-ten": {
        "id": "g3-base-ten",
        "name": "Rounding Peak",
        "grade": 3,
        "topicId": "base-ten",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🎯",
        "monsterNames": [
            "Peak Slime",
            "Apex Fox",
            "Storm Sprite",
            "Blizzard Golem",
            "Summit Golem Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "ember_fox",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g3-measurement": {
        "id": "g3-measurement",
        "name": "Area & Perimeter Ruins",
        "grade": 3,
        "topicId": "measurement",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "orange",
        "emoji": "📏",
        "monsterNames": [
            "Grid Slime",
            "Scale Imp",
            "Fence Sprite",
            "Ruins Golem",
            "Titan Balance Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "fluffy_ogre"
        ]
    },
    "g3-geometry": {
        "id": "g3-geometry",
        "name": "Shape Matrix Lab",
        "grade": 3,
        "topicId": "geometry",
        "bgClass": "bg-playful-dots bg-rose-50",
        "nodeColor": "purple",
        "emoji": "📐",
        "monsterNames": [
            "Acid Slime",
            "Angle Sprite",
            "Brew Golem",
            "Vial Drake",
            "Alchemist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "sparky_dragon"
        ]
    },
    "g4-multiplication": {
        "id": "g4-multiplication",
        "name": "Long Multiplication Peak",
        "grade": 4,
        "topicId": "multiplication",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "orange",
        "emoji": "⚡",
        "monsterNames": [
            "Volt Slime",
            "Lightning Fox",
            "Storm Golem",
            "Thunder Drake",
            "Volt Golem Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "ember_fox",
            "bramble_golem",
            "sparky_dragon",
            "bramble_golem"
        ]
    },
    "g4-division": {
        "id": "g4-division",
        "name": "Long Division Dungeon",
        "grade": 4,
        "topicId": "division",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🧗",
        "monsterNames": [
            "Dark Slime",
            "Dungeon Ogre",
            "Chain Gargoyle",
            "Shadow Wyvern",
            "Shadow Ogre Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre",
            "sparky_dragon",
            "fluffy_ogre"
        ]
    },
    "g4-fractions": {
        "id": "g4-fractions",
        "name": "Fraction Operations River",
        "grade": 4,
        "topicId": "fractions",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "blue",
        "emoji": "💎",
        "monsterNames": [
            "River Slime",
            "Pebble Golem",
            "Aqua Drake",
            "Stream Dryad",
            "Torrent Golem Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g4-patterns": {
        "id": "g4-patterns",
        "name": "Factor Pattern Peak",
        "grade": 4,
        "topicId": "patterns",
        "bgClass": "bg-playful-dots bg-sky-50",
        "nodeColor": "orange",
        "emoji": "🌀",
        "monsterNames": [
            "Pattern Slime",
            "Lightning Fox",
            "Storm Golem",
            "Thunder Drake",
            "Volt Golem Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "ember_fox",
            "bramble_golem",
            "sparky_dragon",
            "bramble_golem"
        ]
    },
    "g4-measurement": {
        "id": "g4-measurement",
        "name": "Angle & Unit Labyrinth",
        "grade": 4,
        "topicId": "measurement",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "blue",
        "emoji": "🧭",
        "monsterNames": [
            "Degree Slime",
            "Pebble Golem",
            "Aqua Drake",
            "Stream Dryad",
            "Torrent Golem Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g4-geometry": {
        "id": "g4-geometry",
        "name": "Line & Symmetry Dungeon",
        "grade": 4,
        "topicId": "geometry",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🦋",
        "monsterNames": [
            "Mirror Slime",
            "Dungeon Ogre",
            "Chain Gargoyle",
            "Shadow Wyvern",
            "Shadow Ogre Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre",
            "sparky_dragon",
            "fluffy_ogre"
        ]
    },
    "g5-decimals": {
        "id": "g5-decimals",
        "name": "Decimal Desert Oasis",
        "grade": 5,
        "topicId": "decimals",
        "bgClass": "bg-playful-dots bg-sky-50",
        "nodeColor": "blue",
        "emoji": "🏜️",
        "monsterNames": [
            "Sand Slime",
            "Dune Ogre",
            "Desert Drake",
            "Oasis Dryad",
            "Sand Golem Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g5-geometry": {
        "id": "g5-geometry",
        "name": "Volume Coordinate Matrix",
        "grade": 5,
        "topicId": "geometry",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "📐",
        "monsterNames": [
            "Matrix Slime",
            "Grid Golem",
            "Vector Drake",
            "Angle Dryad",
            "Matrix Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g5-fractions": {
        "id": "g5-fractions",
        "name": "Unlike Denominator Summit",
        "grade": 5,
        "topicId": "fractions",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "purple",
        "emoji": "⚡",
        "monsterNames": [
            "Summit Slime",
            "Alpine Fox",
            "Peak Wyvern",
            "Blizzard Golem",
            "Summit Golem Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "ember_fox",
            "sparky_dragon",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g5-algebra": {
        "id": "g5-algebra",
        "name": "Expression Oasis",
        "grade": 5,
        "topicId": "algebra",
        "bgClass": "bg-playful-dots bg-sky-50",
        "nodeColor": "orange",
        "emoji": "🧪",
        "monsterNames": [
            "Formula Slime",
            "Dune Ogre",
            "Desert Drake",
            "Oasis Dryad",
            "Sand Golem Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g5-measurement": {
        "id": "g5-measurement",
        "name": "Volume Summit",
        "grade": 5,
        "topicId": "measurement",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "📦",
        "monsterNames": [
            "Volume Slime",
            "Alpine Fox",
            "Peak Wyvern",
            "Blizzard Golem",
            "Summit Golem Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "ember_fox",
            "sparky_dragon",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g6-ratios": {
        "id": "g6-ratios",
        "name": "Ratio & Rate Ruins",
        "grade": 6,
        "topicId": "ratios",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "⚖️",
        "monsterNames": [
            "Scale Slime",
            "Ruins Imp",
            "Ratio Sprite",
            "Ogre Scout",
            "Titan Balance Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre"
        ]
    },
    "g6-algebra": {
        "id": "g6-algebra",
        "name": "Expression Dungeon",
        "grade": 6,
        "topicId": "algebra",
        "bgClass": "bg-playful-dots bg-rose-50",
        "nodeColor": "orange",
        "emoji": "📜",
        "monsterNames": [
            "Formula Slime",
            "Scroll Gargoyle",
            "Variable Pixie",
            "Gate Knight",
            "Algebra Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "fluffy_ogre",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon"
        ]
    },
    "g6-statistics": {
        "id": "g6-statistics",
        "name": "Stats Swamp",
        "grade": 6,
        "topicId": "statistics",
        "bgClass": "bg-playful-dots bg-emerald-50",
        "nodeColor": "green",
        "emoji": "📊",
        "monsterNames": [
            "Mean Slime",
            "Median Golem",
            "Mode Imp",
            "Swamp Sprite",
            "Data Golem Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "bramble_golem",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem"
        ]
    },
    "g6-number-system": {
        "id": "g6-number-system",
        "name": "Coordinate Ruins",
        "grade": 6,
        "topicId": "number-system",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🎯",
        "monsterNames": [
            "Point Slime",
            "Ruins Imp",
            "Ratio Sprite",
            "Ogre Scout",
            "Titan Balance Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre"
        ]
    },
    "g6-geometry": {
        "id": "g6-geometry",
        "name": "Area & Net Swamp",
        "grade": 6,
        "topicId": "geometry",
        "bgClass": "bg-playful-dots bg-emerald-50",
        "nodeColor": "green",
        "emoji": "📐",
        "monsterNames": [
            "Area Slime",
            "Median Golem",
            "Mode Imp",
            "Swamp Sprite",
            "Data Golem Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "bramble_golem",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem"
        ]
    },
    "g7-integers": {
        "id": "g7-integers",
        "name": "Rational Pit",
        "grade": 7,
        "topicId": "integers",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🕳️",
        "monsterNames": [
            "Negative Slime",
            "Deep Imp",
            "Integer Wyvern",
            "Abyssal Golem",
            "Zero Void Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g7-percentages": {
        "id": "g7-percentages",
        "name": "Percent Pyramids",
        "grade": 7,
        "topicId": "percentages",
        "bgClass": "bg-playful-dots bg-yellow-50",
        "nodeColor": "yellow",
        "emoji": "📈",
        "monsterNames": [
            "Fraction Slime",
            "Decimal Mummy",
            "Percent Sprite",
            "Pharaoh Scout",
            "Anubis Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "fluffy_ogre",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ]
    },
    "g7-probability": {
        "id": "g7-probability",
        "name": "Probability Casino",
        "grade": 7,
        "topicId": "probability",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🎲",
        "monsterNames": [
            "Chance Slime",
            "Dice Sprite",
            "Card Knight",
            "Joker Golem",
            "Lady Luck Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "bramble_golem",
            "sparky_dragon"
        ]
    },
    "g7-proportions": {
        "id": "g7-proportions",
        "name": "Proportional Pyramids",
        "grade": 7,
        "topicId": "proportions",
        "bgClass": "bg-playful-dots bg-yellow-50",
        "nodeColor": "yellow",
        "emoji": "📈",
        "monsterNames": [
            "Ratio Slime",
            "Decimal Mummy",
            "Percent Sprite",
            "Pharaoh Scout",
            "Anubis Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "fluffy_ogre",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ]
    },
    "g7-geometry": {
        "id": "g7-geometry",
        "name": "Scale & Circle Pit",
        "grade": 7,
        "topicId": "geometry",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "⭕",
        "monsterNames": [
            "Circle Slime",
            "Deep Imp",
            "Integer Wyvern",
            "Abyssal Golem",
            "Zero Void Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g8-equations": {
        "id": "g8-equations",
        "name": "Linear Volcano",
        "grade": 8,
        "topicId": "equations",
        "bgClass": "bg-playful-dots bg-red-50",
        "nodeColor": "orange",
        "emoji": "🌋",
        "monsterNames": [
            "Slope Slime",
            "Lava Fox",
            "Linear Drake",
            "Magma Golem",
            "Eruption Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "ember_fox",
            "sparky_dragon",
            "bramble_golem",
            "ember_fox"
        ]
    },
    "g8-exponents": {
        "id": "g8-exponents",
        "name": "Exponent Space Void",
        "grade": 8,
        "topicId": "exponents",
        "bgClass": "bg-playful-dots bg-sky-50",
        "nodeColor": "blue",
        "emoji": "🌌",
        "monsterNames": [
            "Power Slime",
            "Space Imp",
            "Void Sprite",
            "Cosmic Gargoyle",
            "Supernova Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ]
    },
    "g8-geometry": {
        "id": "g8-geometry",
        "name": "Pythagoras Pyramid",
        "grade": 8,
        "topicId": "geometry",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "📐",
        "monsterNames": [
            "Angle Slime",
            "Hypotenuse Golem",
            "Grid Sprite",
            "Proof Dryad",
            "Pythagorean Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "bramble_golem",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g9-quadratics": {
        "id": "g9-quadratics",
        "name": "Quadratic Quagmire",
        "grade": 9,
        "topicId": "quadratics",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🧪",
        "monsterNames": [
            "Parabola Slime",
            "Acid Imp",
            "Axis Sprite",
            "Vertex Gargoyle",
            "Quadratic Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ]
    },
    "g9-systems": {
        "id": "g9-systems",
        "name": "System of Equinoxes",
        "grade": 9,
        "topicId": "systems",
        "bgClass": "bg-playful-dots bg-blue-50",
        "nodeColor": "blue",
        "emoji": "🌀",
        "monsterNames": [
            "System Slime",
            "Equinox Golem",
            "Matrix Sprite",
            "Intersection Wyvern",
            "Dual Core Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "bramble_golem",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon"
        ]
    },
    "g9-inequalities": {
        "id": "g9-inequalities",
        "name": "Inequality Labyrinth",
        "grade": 9,
        "topicId": "inequalities",
        "bgClass": "bg-playful-dots bg-orange-50",
        "nodeColor": "orange",
        "emoji": "🚧",
        "monsterNames": [
            "Boundary Slime",
            "Maze Ogre",
            "Interval Sprite",
            "Shaded Gargoyle",
            "Inequality Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "fluffy_ogre",
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre"
        ]
    },
    "g10-trigonometry": {
        "id": "g10-trigonometry",
        "name": "Trigonometry Peak",
        "grade": 10,
        "topicId": "trigonometry",
        "bgClass": "bg-playful-dots bg-sky-50",
        "nodeColor": "blue",
        "emoji": "⛰️",
        "monsterNames": [
            "Sine Slime",
            "Cosine Fox",
            "Tangent Wyvern",
            "Peak Golem",
            "Trig Sage Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "ember_fox",
            "sparky_dragon",
            "bramble_golem",
            "sparky_dragon"
        ]
    },
    "g10-circles": {
        "id": "g10-circles",
        "name": "Infinite Circles",
        "grade": 10,
        "topicId": "circles",
        "bgClass": "bg-playful-dots bg-red-50",
        "nodeColor": "orange",
        "emoji": "⭕",
        "monsterNames": [
            "Radial Slime",
            "Chord Imp",
            "Secant Sprite",
            "Sector Gargoyle",
            "Pi Master Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre"
        ]
    },
    "g10-geometry": {
        "id": "g10-geometry",
        "name": "Coordinate Crypt",
        "grade": 10,
        "topicId": "geometry",
        "bgClass": "bg-playful-dots bg-slate-100",
        "nodeColor": "purple",
        "emoji": "💀",
        "monsterNames": [
            "Grid Slime",
            "Tomb Imp",
            "Axis Sprite",
            "Catacomb Ogre",
            "Necromancer Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre"
        ]
    },
    "g11-complex": {
        "id": "g11-complex",
        "name": "Complex Number Sea",
        "grade": 11,
        "topicId": "complex",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "blue",
        "emoji": "🌊",
        "monsterNames": [
            "i-Slime",
            "Imaginary Sprite",
            "Real Golem",
            "Complex Wyvern",
            "Elder Kraken Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "sparky_dragon"
        ]
    },
    "g11-logarithms": {
        "id": "g11-logarithms",
        "name": "Log Lair",
        "grade": 11,
        "topicId": "logarithms",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🪵",
        "monsterNames": [
            "Base Slime",
            "Log Imp",
            "Exponent Sprite",
            "Natural Dryad",
            "Logarithm Lord Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g11-sequences": {
        "id": "g11-sequences",
        "name": "Sequence Springs",
        "grade": 11,
        "topicId": "sequences",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "purple",
        "emoji": "⛲",
        "monsterNames": [
            "Series Slime",
            "Limit Imp",
            "Sigma Golem",
            "Infinite Wyvern",
            "Fibonacci Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "sparky_dragon"
        ]
    },
    "g12-limits": {
        "id": "g12-limits",
        "name": "Infinity Edge",
        "grade": 12,
        "topicId": "limits",
        "bgClass": "bg-playful-dots bg-sky-50",
        "nodeColor": "blue",
        "emoji": "☁️",
        "monsterNames": [
            "Limit Slime",
            "Infinity Sprite",
            "Asymptote Gargoyle",
            "Void Wyvern",
            "Sage Supreme Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon",
            "sparky_dragon"
        ]
    },
    "g12-derivatives": {
        "id": "g12-derivatives",
        "name": "Derivative Canyon",
        "grade": 12,
        "topicId": "derivatives",
        "bgClass": "bg-playful-dots bg-red-50",
        "nodeColor": "orange",
        "emoji": "📉",
        "monsterNames": [
            "Tangent Slime",
            "Slope Imp",
            "Differential Sprite",
            "Canyon Golem",
            "Newton Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ]
    },
    "g12-integrals": {
        "id": "g12-integrals",
        "name": "Integral Obelisk Field",
        "grade": 12,
        "topicId": "integrals",
        "bgClass": "bg-playful-dots bg-yellow-50",
        "nodeColor": "yellow",
        "emoji": "🏛️",
        "monsterNames": [
            "Area Slime",
            "Obelisk Sprite",
            "Sum Golem",
            "Curve Wyvern",
            "Leibniz Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "sparky_dragon"
        ]
    },
    "gk-colors-shapes": {
        "id": "gk-colors-shapes",
        "name": "Colors & Shapes",
        "grade": "K",
        "topicId": "colors-shapes",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🔴",
        "monsterNames": [
            "Alphabet Slime",
            "Letter Imp",
            "Meadow Pixie",
            "A-B-C Bunny",
            "Word Drake Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Colors & Shapes 🔴",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Learn the names of vibrant colors and basic shapes in a playful wonderland!"
    },
    "gk-family-pets": {
        "id": "gk-family-pets",
        "name": "Family & Pets",
        "grade": "K",
        "topicId": "family-pets",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🐶",
        "monsterNames": [
            "Sight Slime",
            "Visual Imp",
            "Flash Sprite",
            "Garden Golem",
            "Insight Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Family & Pets 🐶",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Discover vocabulary for your family members and cute household pets."
    },
    "gk-fruit-veggies": {
        "id": "gk-fruit-veggies",
        "name": "Fruit & Vegetables",
        "grade": "K",
        "topicId": "fruit-veggies",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🍎",
        "monsterNames": [
            "Sound Slime",
            "Echo Sprite",
            "Vowel Pixie",
            "Sonic Golem",
            "Chorus Griffin Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Fruit & Veggies 🍎",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Explore names of healthy fruits and vegetables in a colorful orchard."
    },
    "gk-toys-games": {
        "id": "gk-toys-games",
        "name": "Toys & Games",
        "grade": "K",
        "topicId": "toys-games",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🧸",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Toys & Games 🧸",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Identify common toys and playground games in the playroom."
    },
    "gk-body-parts": {
        "id": "gk-body-parts",
        "name": "My Body Parts",
        "grade": "K",
        "topicId": "body-parts",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "👃",
        "monsterNames": [
            "Noun Slime",
            "Verb Imp",
            "Synonym Sprite",
            "Word Golem",
            "Lexicon Druid Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ],
        "subject": "english",
        "badge": "Body Parts 👃",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Learn the basic names of human body parts and senses."
    },
    "gk-body-senses": {
        "id": "gk-body-senses",
        "name": "Body & Senses",
        "grade": "K",
        "topicId": "body-senses",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "👀",
        "monsterNames": [
            "Alphabet Slime",
            "Letter Imp",
            "Meadow Pixie",
            "A-B-C Bunny",
            "Word Drake Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Body & Senses 👀",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Learn about your five senses and how you interact with the world around you."
    },
    "gk-nature-garden": {
        "id": "gk-nature-garden",
        "name": "Nature & Garden",
        "grade": "K",
        "topicId": "nature-garden",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🌳",
        "monsterNames": [
            "Sight Slime",
            "Visual Imp",
            "Flash Sprite",
            "Garden Golem",
            "Insight Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Nature & Garden 🌳",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Discover the basic elements of nature, like trees, flowers, sun, rain, and grass."
    },
    "gk-my-house": {
        "id": "gk-my-house",
        "name": "Rooms in House",
        "grade": "K",
        "topicId": "my-house",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🛋️",
        "monsterNames": [
            "Sound Slime",
            "Echo Sprite",
            "Vowel Pixie",
            "Sonic Golem",
            "Chorus Griffin Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Rooms in House 🛋️",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Explore the different rooms in a house, like the bedroom, kitchen, and bathroom."
    },
    "gk-basic-clothing": {
        "id": "gk-basic-clothing",
        "name": "Basic Clothing",
        "grade": "K",
        "topicId": "basic-clothing",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🧦",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Basic Clothing 🧦",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Learn the basic items of clothing we wear every day, like shoes, socks, and hats."
    },
    "gk-days-numbers": {
        "id": "gk-days-numbers",
        "name": "Days & Numbers",
        "grade": "K",
        "topicId": "days-numbers",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🔢",
        "monsterNames": [
            "Noun Slime",
            "Verb Imp",
            "Synonym Sprite",
            "Word Golem",
            "Lexicon Druid Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ],
        "subject": "english",
        "badge": "Days & Numbers 🔢",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Learn to count numbers from 1 to 10 and name the days of the week."
    },
    "g1-home-furniture": {
        "id": "g1-home-furniture",
        "name": "Home & Furniture",
        "grade": 1,
        "topicId": "home-furniture",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🏠",
        "monsterNames": [
            "Letter Slime",
            "Vowel Golem",
            "Consonant Imp",
            "Forest Dryad",
            "Dictation Lord Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "bramble_golem",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ],
        "subject": "english",
        "badge": "Home & Furniture 🏠",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Explore different rooms and common furniture objects inside a house."
    },
    "g1-school-supplies": {
        "id": "g1-school-supplies",
        "name": "School Supplies",
        "grade": 1,
        "topicId": "school-supplies",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🎒",
        "monsterNames": [
            "Noun Slime",
            "Verb Imp",
            "Synonym Sprite",
            "Word Golem",
            "Lexicon Druid Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ],
        "subject": "english",
        "badge": "School Supplies 🎒",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Learn vocabulary for school bags, stationery, and classroom items."
    },
    "g1-farm-animals": {
        "id": "g1-farm-animals",
        "name": "Farm Animals",
        "grade": 1,
        "topicId": "farm-animals",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🐷",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Farm Animals 🐷",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Meet cute farm animals and learn their names and sounds."
    },
    "g1-action-verbs": {
        "id": "g1-action-verbs",
        "name": "Action & Verbs",
        "grade": 1,
        "topicId": "action-verbs",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🏃",
        "monsterNames": [
            "Pronoun Slime",
            "Tense Imp",
            "Grammar Guard",
            "Adjective Ogre",
            "Sintax Sea Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Action Verbs 🏃",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Master basic action words like run, jump, climb, and draw."
    },
    "g1-clothing": {
        "id": "g1-clothing",
        "name": "My Clothing",
        "grade": 1,
        "topicId": "clothing",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "👕",
        "monsterNames": [
            "Sound Slime",
            "Echo Sprite",
            "Vowel Pixie",
            "Sonic Golem",
            "Chorus Griffin Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Clothing 👕",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Discover vocabulary for hats, coats, shirts, shoes, and socks."
    },
    "g1-hygiene-grooming": {
        "id": "g1-hygiene-grooming",
        "name": "Hygiene & Grooming",
        "grade": 1,
        "topicId": "hygiene-grooming",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🧼",
        "monsterNames": [
            "Soap Slime",
            "Suds Sprite",
            "Bubble Imp",
            "Brush Golem",
            "Hygiene Hero Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Hygiene & Grooming 🧼",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Learn words for personal care, cleanliness, and grooming tools.",
        "isHidden": true
    },
    "g1-playground-park": {
        "id": "g1-playground-park",
        "name": "Playground & Park",
        "grade": 1,
        "topicId": "playground-park",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🛝",
        "monsterNames": [
            "Swing Slime",
            "Slide Sprite",
            "Sandbox Imp",
            "Fountain Golem",
            "Playground King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Playground & Park 🛝",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Discover vocabulary for park equipment, outdoor fun, and playground games.",
        "isHidden": true
    },
    "g1-insects-bugs": {
        "id": "g1-insects-bugs",
        "name": "Insects & Bugs",
        "grade": 1,
        "topicId": "insects-bugs",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🐜",
        "monsterNames": [
            "Larva Slime",
            "Caterpillar Sprite",
            "Wasp Imp",
            "Hive Golem",
            "Queen Bee Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Insects & Bugs 🐜",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Learn the names of common garden insects, crawly bugs, and flying beetles.",
        "isHidden": true
    },
    "g1-food-meals": {
        "id": "g1-food-meals",
        "name": "Food & Meals",
        "grade": 1,
        "topicId": "food-meals",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🍌",
        "monsterNames": [
            "Soap Slime",
            "Suds Sprite",
            "Bubble Imp",
            "Brush Golem",
            "Hygiene Hero Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Food & Meals 🍌",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Learn vocabulary for common food items, breakfast meals, lunches, and sweet treats.",
        "isHidden": true
    },
    "g1-feelings-emotions": {
        "id": "g1-feelings-emotions",
        "name": "Feelings & Emotions",
        "grade": 1,
        "topicId": "feelings-emotions",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "😄",
        "monsterNames": [
            "Moody Slime",
            "Silly Sprite",
            "Grumpy Imp",
            "Gloomy Golem",
            "Empathetic Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Feelings & Emotions 😄",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Express your feelings and emotions, like being happy, sad, excited, or scared.",
        "isHidden": true
    },
    "g2-wild-animals": {
        "id": "g2-wild-animals",
        "name": "Wild Animals",
        "grade": 2,
        "topicId": "wild-animals",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🦁",
        "monsterNames": [
            "Pronoun Slime",
            "Tense Imp",
            "Grammar Guard",
            "Adjective Ogre",
            "Sintax Sea Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Wild Animals 🦁",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Explore vocabulary for exotic jungle, forest, and desert animals."
    },
    "g2-food-drinks": {
        "id": "g2-food-drinks",
        "name": "Food & Drinks",
        "grade": 2,
        "topicId": "food-drinks",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🍔",
        "monsterNames": [
            "Clause Slime",
            "Phrase Bat",
            "Subject Gargoyle",
            "Predicate Ogre",
            "Sentence Sorcerer Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre",
            "fluffy_ogre"
        ],
        "subject": "english",
        "badge": "Food & Drinks 🍔",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Learn terms for healthy foods, sweet snacks, and common drinks.",
        "isHidden": false
    },
    "g2-hobbies-sports": {
        "id": "g2-hobbies-sports",
        "name": "Hobbies & Sports",
        "grade": 2,
        "topicId": "hobbies-sports",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "⚽",
        "monsterNames": [
            "Letter Slime",
            "Vowel Golem",
            "Consonant Imp",
            "Forest Dryad",
            "Dictation Lord Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "bramble_golem",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ],
        "subject": "english",
        "badge": "Hobbies & Sports ⚽",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Describe sports equipment, outdoor activities, and creative hobbies.",
        "isHidden": true
    },
    "g2-places-town": {
        "id": "g2-places-town",
        "name": "Places in Town",
        "grade": 2,
        "topicId": "places-town",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🏢",
        "monsterNames": [
            "Noun Slime",
            "Verb Imp",
            "Synonym Sprite",
            "Word Golem",
            "Lexicon Druid Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ],
        "subject": "english",
        "badge": "Places in Town 🏢",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Identify common town locations like schools, shops, parks, and libraries.",
        "isHidden": true
    },
    "g2-weather-seasons": {
        "id": "g2-weather-seasons",
        "name": "Weather & Seasons",
        "grade": 2,
        "topicId": "weather-seasons",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "☀️",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Weather & Seasons ☀️",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Learn to describe the weather and seasonal changes throughout the year.",
        "isHidden": true
    },
    "g2-jobs-occupations": {
        "id": "g2-jobs-occupations",
        "name": "Jobs & Occupations",
        "grade": 2,
        "topicId": "jobs-occupations",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🧑‍🚒",
        "monsterNames": [
            "Apprentice Slime",
            "Worker Sprite",
            "Officer Imp",
            "Builder Golem",
            "Boss Director Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Jobs & Occupations 🧑‍🚒",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Learn names of different jobs, professions, and community helpers.",
        "isHidden": true
    },
    "g2-vehicles-travel": {
        "id": "g2-vehicles-travel",
        "name": "Vehicles & Travel",
        "grade": 2,
        "topicId": "vehicles-travel",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "✈️",
        "monsterNames": [
            "Scooter Slime",
            "Driver Sprite",
            "Pilot Imp",
            "Engine Golem",
            "Captain Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Vehicles & Travel ✈️",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Discover vocabulary for land, air, and water transportation.",
        "isHidden": true
    },
    "g2-plants-nature": {
        "id": "g2-plants-nature",
        "name": "Plants & Nature",
        "grade": 2,
        "topicId": "plants-nature",
        "bgClass": "bg-playful-dots bg-emerald-50",
        "nodeColor": "green",
        "emoji": "🌱",
        "monsterNames": [
            "Sprout Slime",
            "Seed Sprite",
            "Flower Imp",
            "Oak Golem",
            "Forest Spirit Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Plants & Nature 🌱",
        "bgStyle": "bg-emerald-50 border-emerald-300 hover:border-emerald-400",
        "textStyle": "text-emerald-900",
        "description": "Learn names of different plants, trees, flowers, and natural elements.",
        "isHidden": true
    },
    "g2-construction-materials": {
        "id": "g2-construction-materials",
        "name": "Construction & Materials",
        "grade": 2,
        "topicId": "construction-materials",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "orange",
        "emoji": "🧱",
        "monsterNames": [
            "Clay Slime",
            "Brick Sprite",
            "Iron Imp",
            "Stone Golem",
            "Steel Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Construction & Materials 🧱",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Discover vocabulary for building materials, tools, and construction sites.",
        "isHidden": true
    },
    "g2-clothing-accessories": {
        "id": "g2-clothing-accessories",
        "name": "Clothing & Accessories",
        "grade": 2,
        "topicId": "clothing-accessories",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "purple",
        "emoji": "🧥",
        "monsterNames": [
            "Thread Slime",
            "Button Sprite",
            "Zipper Imp",
            "Armor Golem",
            "Fashion Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Clothing & Accessories 🧥",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Explore vocabulary for outerwear, boots, bags, wallets, and warm accessories.",
        "isHidden": true
    },
    "g3-sea-creatures": {
        "id": "g3-sea-creatures",
        "name": "Sea Creatures",
        "grade": 3,
        "topicId": "sea-creatures",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🐙",
        "monsterNames": [
            "Adverb Slime",
            "Preposition Imp",
            "Conjunction Sprite",
            "Noun Ogre",
            "Grammarian Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre"
        ],
        "subject": "english",
        "badge": "Sea Creatures 🐙",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Dive deep into vocabulary for oceanic life, fish, mammals, and coral reefs."
    },
    "g3-jobs-occupations": {
        "id": "g3-jobs-occupations",
        "name": "Jobs & Occupations",
        "grade": 3,
        "topicId": "jobs-occupations",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "👩‍⚕️",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Jobs & Occupations 👩‍⚕️",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Discover diverse professions, from doctors and teachers to pilots and artists."
    },
    "g3-household-chores": {
        "id": "g3-household-chores",
        "name": "Household Chores",
        "grade": 3,
        "topicId": "household-chores",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🧹",
        "monsterNames": [
            "Pronoun Slime",
            "Tense Imp",
            "Grammar Guard",
            "Adjective Ogre",
            "Sintax Sea Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Household Chores 🧹",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Master verbs related to home cleaning, cooking, gardening, and tidy habits."
    },
    "g3-transport-travel": {
        "id": "g3-transport-travel",
        "name": "Transport & Travel",
        "grade": 3,
        "topicId": "transport-travel",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "✈️",
        "monsterNames": [
            "Noun Slime",
            "Verb Imp",
            "Synonym Sprite",
            "Word Golem",
            "Lexicon Druid Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ],
        "subject": "english",
        "badge": "Transport & Travel ✈️",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Explore modes of travel by road, rail, air, and sea."
    },
    "g3-feelings-emotions": {
        "id": "g3-feelings-emotions",
        "name": "Feelings & Emotions",
        "grade": 3,
        "topicId": "feelings-emotions",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "😊",
        "monsterNames": [
            "Acid Slime",
            "Elixir Sprite",
            "Brew Golem",
            "Vial Drake",
            "Alchemist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Feelings & Emotions 😊",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Acquire precise vocabulary to express a wide range of emotions and moods."
    },
    "g3-birds-insects": {
        "id": "g3-birds-insects",
        "name": "Birds & Insects",
        "grade": 3,
        "topicId": "birds-insects",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🐦",
        "monsterNames": [
            "Alphabet Slime",
            "Letter Imp",
            "Meadow Pixie",
            "A-B-C Bunny",
            "Word Drake Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Birds & Insects 🐦",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Learn names of backyard birds, feathers, nests, and various flying bugs."
    },
    "g3-hobbies-games": {
        "id": "g3-hobbies-games",
        "name": "Hobbies & Games",
        "grade": 3,
        "topicId": "hobbies-games",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🎮",
        "monsterNames": [
            "Sight Slime",
            "Visual Imp",
            "Flash Sprite",
            "Garden Golem",
            "Insight Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Hobbies & Games 🎮",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Discover vocabulary for creative crafts, board games, video games, and sports hobbies."
    },
    "g3-places-nature": {
        "id": "g3-places-nature",
        "name": "Places in Nature",
        "grade": 3,
        "topicId": "places-nature",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🏕️",
        "monsterNames": [
            "Sound Slime",
            "Echo Sprite",
            "Vowel Pixie",
            "Sonic Golem",
            "Chorus Griffin Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Places in Nature 🏕️",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Explore the vocabulary of natural spaces: mountains, rivers, lakes, and camping gear."
    },
    "g3-health-body": {
        "id": "g3-health-body",
        "name": "Health & Body",
        "grade": 3,
        "topicId": "health-body",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🏥",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Health & Body 🏥",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Understand names for general health routines, simple body organs, and fitness activities."
    },
    "g3-school-subjects": {
        "id": "g3-school-subjects",
        "name": "School Subjects",
        "grade": 3,
        "topicId": "school-subjects",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🧪",
        "monsterNames": [
            "Noun Slime",
            "Verb Imp",
            "Synonym Sprite",
            "Word Golem",
            "Lexicon Druid Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ],
        "subject": "english",
        "badge": "School Subjects 🧪",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Learn terms for school subjects like math, science, history, reading, and geography."
    },
    "g4-nature-landforms": {
        "id": "g4-nature-landforms",
        "name": "Nature & Landforms",
        "grade": 4,
        "topicId": "nature-landforms",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🏔️",
        "monsterNames": [
            "Antonym Slime",
            "Synonym Sprite",
            "Homophone Imp",
            "River Golem",
            "Kraken Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Nature & Landforms 🏔️",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Learn descriptive terms for canyons, oceans, plateaus, valleys, and nature."
    },
    "g4-cooking-utensils": {
        "id": "g4-cooking-utensils",
        "name": "Cooking & Utensils",
        "grade": 4,
        "topicId": "cooking-utensils",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🍳",
        "monsterNames": [
            "Comma Slime",
            "Apostrophe Imp",
            "Hyphen Gargoyle",
            "Colon Minotaur",
            "Period Lord Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre",
            "fluffy_ogre"
        ],
        "subject": "english",
        "badge": "Cooking & Utensils 🍳",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Acquire names for kitchen tools, utensils, actions, and cooking techniques."
    },
    "g4-health-medicine": {
        "id": "g4-health-medicine",
        "name": "Health & Medicine",
        "grade": 4,
        "topicId": "health-medicine",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🩺",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Health & Medicine 🩺",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Learn terms for common symptoms, medical tools, and healthy habits."
    },
    "g4-office-tech": {
        "id": "g4-office-tech",
        "name": "Office & Technology",
        "grade": 4,
        "topicId": "office-tech",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "💻",
        "monsterNames": [
            "Pronoun Slime",
            "Tense Imp",
            "Grammar Guard",
            "Adjective Ogre",
            "Sintax Sea Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Office & Tech 💻",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Identify workspace objects, hardware accessories, and digital tasks."
    },
    "g4-synonyms-antonyms": {
        "id": "g4-synonyms-antonyms",
        "name": "Synonyms & Antonyms",
        "grade": 4,
        "topicId": "synonyms-antonyms",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🔄",
        "monsterNames": [
            "Acid Slime",
            "Elixir Sprite",
            "Brew Golem",
            "Vial Drake",
            "Alchemist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Synonyms & Antonyms 🔄",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Expand your word range by learning exact opposites and word matches."
    },
    "g4-animal-habitats": {
        "id": "g4-animal-habitats",
        "name": "Animal Habitats",
        "grade": 4,
        "topicId": "animal-habitats",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "⛰️",
        "monsterNames": [
            "Alphabet Slime",
            "Letter Imp",
            "Meadow Pixie",
            "A-B-C Bunny",
            "Word Drake Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Animal Habitats ⛰️",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Explore the words for animal homes, biomes, nests, caves, and natural adaptations."
    },
    "g4-shopping-money": {
        "id": "g4-shopping-money",
        "name": "Shopping & Money",
        "grade": 4,
        "topicId": "shopping-money",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🛒",
        "monsterNames": [
            "Sight Slime",
            "Visual Imp",
            "Flash Sprite",
            "Garden Golem",
            "Insight Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Shopping & Money 🛒",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Learn terms for currency, shopping lists, buying, selling, prices, and store types."
    },
    "g4-space-planets": {
        "id": "g4-space-planets",
        "name": "Space & Planets",
        "grade": 4,
        "topicId": "space-planets",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🪐",
        "monsterNames": [
            "Sound Slime",
            "Echo Sprite",
            "Vowel Pixie",
            "Sonic Golem",
            "Chorus Griffin Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Space & Planets 🪐",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Discover the names of solar system planets, orbits, stars, and space travel."
    },
    "g4-safety-rules": {
        "id": "g4-safety-rules",
        "name": "Safety & Rules",
        "grade": 4,
        "topicId": "safety-rules",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🚨",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Safety & Rules 🚨",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Master rules and safety terms, street signs, emergencies, and caution signals."
    },
    "g4-holidays-festivals": {
        "id": "g4-holidays-festivals",
        "name": "Holidays & Festivals",
        "grade": 4,
        "topicId": "holidays-festivals",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🎉",
        "monsterNames": [
            "Noun Slime",
            "Verb Imp",
            "Synonym Sprite",
            "Word Golem",
            "Lexicon Druid Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ],
        "subject": "english",
        "badge": "Holidays & Festivals 🎉",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Explore vocabulary for celebrations, custom decorations, holidays, and cultural events."
    },
    "g5-space-astronomy": {
        "id": "g5-space-astronomy",
        "name": "Space & Astronomy",
        "grade": 5,
        "topicId": "space-astronomy",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🚀",
        "monsterNames": [
            "Simile Slime",
            "Metaphor Sprite",
            "Idiom Golem",
            "Hyperbole Bandit",
            "Oasis Sphinx Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "fluffy_ogre",
            "fluffy_ogre"
        ],
        "subject": "english",
        "badge": "Space & Astronomy 🚀",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Travel through words for planets, satellites, meteorites, and constellations."
    },
    "g5-animals-habitats": {
        "id": "g5-animals-habitats",
        "name": "Animals & Habitats",
        "grade": 5,
        "topicId": "animals-habitats",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🌲",
        "monsterNames": [
            "Root Slime",
            "Prefix Sprite",
            "Suffix Imp",
            "Summit Wyvern",
            "Etymology Titan Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Animals & Habitats 🌲",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Understand ecological vocab: ecosystems, adaptations, prey, and predators."
    },
    "g5-materials-textures": {
        "id": "g5-materials-textures",
        "name": "Materials & Textures",
        "grade": 5,
        "topicId": "materials-textures",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🪵",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Materials 🪵",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Describe substances like leather, marble, rough textures, and smooth fabrics."
    },
    "g5-musical-instruments": {
        "id": "g5-musical-instruments",
        "name": "Musical Instruments",
        "grade": 5,
        "topicId": "musical-instruments",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🎸",
        "monsterNames": [
            "Pronoun Slime",
            "Tense Imp",
            "Grammar Guard",
            "Adjective Ogre",
            "Sintax Sea Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Music & Instruments 🎸",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Identify wind, percussion, brass, and string musical instruments."
    },
    "g5-prefixes-suffixes": {
        "id": "g5-prefixes-suffixes",
        "name": "Prefixes & Suffixes",
        "grade": 5,
        "topicId": "prefixes-suffixes",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "⚡",
        "monsterNames": [
            "Acid Slime",
            "Elixir Sprite",
            "Brew Golem",
            "Vial Drake",
            "Alchemist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Prefix & Suffix ⚡",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Deconstruct vocabulary using Greek/Latin roots, prefixes, and suffixes."
    },
    "g5-weather-disasters": {
        "id": "g5-weather-disasters",
        "name": "Weather Disasters",
        "grade": 5,
        "topicId": "weather-disasters",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🌪️",
        "monsterNames": [
            "Alphabet Slime",
            "Letter Imp",
            "Meadow Pixie",
            "A-B-C Bunny",
            "Word Drake Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Weather Disasters 🌪️",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Learn words for extreme weather, hurricanes, volcanic eruptions, earthquakes, and tsunamis."
    },
    "g5-occupations-careers": {
        "id": "g5-occupations-careers",
        "name": "Occupations & Careers",
        "grade": 5,
        "topicId": "occupations-careers",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "💼",
        "monsterNames": [
            "Sight Slime",
            "Visual Imp",
            "Flash Sprite",
            "Garden Golem",
            "Insight Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Occupations & Careers 💼",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Discover advanced vocabulary for professional office careers, business tools, and workplaces."
    },
    "g5-geography-travel": {
        "id": "g5-geography-travel",
        "name": "Geography & Travel",
        "grade": 5,
        "topicId": "geography-travel",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🗺️",
        "monsterNames": [
            "Sound Slime",
            "Echo Sprite",
            "Vowel Pixie",
            "Sonic Golem",
            "Chorus Griffin Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Geography & Travel 🗺️",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Explore words for continents, countries, capital cities, map markings, and global travel."
    },
    "g5-hobbies-recreation": {
        "id": "g5-hobbies-recreation",
        "name": "Hobbies & Recreation",
        "grade": 5,
        "topicId": "hobbies-recreation",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🎨",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Hobbies & Recreation 🎨",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Learn terms for creative arts, painting, photography, recreational sports, and collections."
    },
    "g5-adjectives-adverbs": {
        "id": "g5-adjectives-adverbs",
        "name": "Adjectives & Adverbs",
        "grade": 5,
        "topicId": "adjectives-adverbs",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "📝",
        "monsterNames": [
            "Noun Slime",
            "Verb Imp",
            "Synonym Sprite",
            "Word Golem",
            "Lexicon Druid Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ],
        "subject": "english",
        "badge": "Adjectives & Adverbs 📝",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Acquire descriptive adjectives and adverbs to enrich your narrative quality."
    },
    "g6-descriptive-adjectives": {
        "id": "g6-descriptive-adjectives",
        "name": "Descriptive Adjectives",
        "grade": 6,
        "topicId": "descriptive-adjectives",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🎨",
        "monsterNames": [
            "Antecedent Slime",
            "Case Imp",
            "Agreement Sprite",
            "Ruin Golem",
            "Pronoun King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ],
        "subject": "english",
        "badge": "Adjectives 🎨",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Acquire rich descriptive adjectives to color your writing and storytelling."
    },
    "g6-science-lab": {
        "id": "g6-science-lab",
        "name": "Science & Lab Equipment",
        "grade": 6,
        "topicId": "science-lab",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🧪",
        "monsterNames": [
            "Relation Slime",
            "Logic Imp",
            "Ratio Sprite",
            "Swamp Lurker",
            "Analogy Hydra Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Science Lab 🧪",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Learn terms for science lab items: beakers, funnels, microscopes, and slides."
    },
    "g6-travel-adventure": {
        "id": "g6-travel-adventure",
        "name": "Travel & Adventure",
        "grade": 6,
        "topicId": "travel-adventure",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🗺️",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Travel 🗺️",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-855",
        "description": "Learn words related to hotels, luggage, customs, maps, and exploration."
    },
    "g6-sports-recreation": {
        "id": "g6-sports-recreation",
        "name": "Sports & Recreation",
        "grade": 6,
        "topicId": "sports-recreation",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🏆",
        "monsterNames": [
            "Pronoun Slime",
            "Tense Imp",
            "Grammar Guard",
            "Adjective Ogre",
            "Sintax Sea Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Sports 🏆",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Explore vocabulary for athletic sports, matches, scores, and leisure hobbies."
    },
    "g6-compound-words": {
        "id": "g6-compound-words",
        "name": "Compound Words",
        "grade": 6,
        "topicId": "compound-words",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🧩",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Compound Words 🧩",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Deconstruct complex compound nouns and adjectives in daily context."
    },
    "g6-digital-media": {
        "id": "g6-digital-media",
        "name": "Digital Media",
        "grade": 6,
        "topicId": "digital-media",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "📱",
        "monsterNames": [
            "Alphabet Slime",
            "Letter Imp",
            "Meadow Pixie",
            "A-B-C Bunny",
            "Word Drake Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Digital Media 📱",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Understand vocabulary for online streaming, social networks, and modern blogging."
    },
    "g6-architecture-buildings": {
        "id": "g6-architecture-buildings",
        "name": "Architecture & Buildings",
        "grade": 6,
        "topicId": "architecture-buildings",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🏛️",
        "monsterNames": [
            "Sight Slime",
            "Visual Imp",
            "Flash Sprite",
            "Garden Golem",
            "Insight Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Architecture 🏛️",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Discover architectural terms: blueprints, arches, monuments, pillars, and structures."
    },
    "g6-environment-conservation": {
        "id": "g6-environment-conservation",
        "name": "Environment & Conservation",
        "grade": 6,
        "topicId": "environment-conservation",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🌱",
        "monsterNames": [
            "Sound Slime",
            "Echo Sprite",
            "Vowel Pixie",
            "Sonic Golem",
            "Chorus Griffin Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Conservation 🌱",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Learn terms for resource conservation, recycling habits, and protecting ecosystems."
    },
    "g6-human-body-systems": {
        "id": "g6-human-body-systems",
        "name": "Human Body Systems",
        "grade": 6,
        "topicId": "human-body-systems",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🫁",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Body Systems 🫁",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Identify systems of the human body: skeletal, muscular, respiratory, and digestive."
    },
    "g6-hobbies-crafts": {
        "id": "g6-hobbies-crafts",
        "name": "Hobbies & Crafts",
        "grade": 6,
        "topicId": "hobbies-crafts",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🧶",
        "monsterNames": [
            "Noun Slime",
            "Verb Imp",
            "Synonym Sprite",
            "Word Golem",
            "Lexicon Druid Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ],
        "subject": "english",
        "badge": "Hobbies & Crafts 🧶",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Explore words for pottery, knitting, woodcraft, design tools, and creative hobbies."
    },
    "g7-environment-pollution": {
        "id": "g7-environment-pollution",
        "name": "Environment & Pollution",
        "grade": 7,
        "topicId": "environment-pollution",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🌍",
        "monsterNames": [
            "Dependent Slime",
            "Independent Imp",
            "Subordinating Sprite",
            "Pit Golem",
            "Clause Overlord Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ],
        "subject": "english",
        "badge": "Environment 🌍",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Learn terms for global warming, recycling, emissions, and ecological habitats."
    },
    "g7-media-communication": {
        "id": "g7-media-communication",
        "name": "Media & Communication",
        "grade": 7,
        "topicId": "media-communication",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "📱",
        "monsterNames": [
            "Mummy Slime",
            "Hieroglyph Imp",
            "Scribe Sprite",
            "Pyramid Golem",
            "Pharaoh Lexicon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Media & Comm 📱",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Discuss journalistic tools, advertising media, digital networks, and reports."
    },
    "g7-human-anatomy": {
        "id": "g7-human-anatomy",
        "name": "Human Anatomy",
        "grade": 7,
        "topicId": "human-anatomy",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🧠",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Anatomy 🧠",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Learn specific vocabulary for human internal organs, bones, and body systems."
    },
    "g7-phrasal-verbs": {
        "id": "g7-phrasal-verbs",
        "name": "Phrasal Verbs",
        "grade": 7,
        "topicId": "phrasal-verbs",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🗣️",
        "monsterNames": [
            "Pronoun Slime",
            "Tense Imp",
            "Grammar Guard",
            "Adjective Ogre",
            "Sintax Sea Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Phrasal Verbs 🗣️",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Master common phrasal verbs used in casual and formal conversations."
    },
    "g7-time-measurements": {
        "id": "g7-time-measurements",
        "name": "Time & Measurements",
        "grade": 7,
        "topicId": "time-measurements",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "📏",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Measurements 📏",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Discover metric units, scientific weights, scale units, and time divisions."
    },
    "g7-social-issues": {
        "id": "g7-social-issues",
        "name": "Social Issues",
        "grade": 7,
        "topicId": "social-issues",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🤝",
        "monsterNames": [
            "Alphabet Slime",
            "Letter Imp",
            "Meadow Pixie",
            "A-B-C Bunny",
            "Word Drake Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Social Issues 🤝",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Examine vocabulary for social empathy, volunteering, philanthropy, and community diversity."
    },
    "g7-history-cultures": {
        "id": "g7-history-cultures",
        "name": "History & Cultures",
        "grade": 7,
        "topicId": "history-cultures",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🏺",
        "monsterNames": [
            "Sight Slime",
            "Visual Imp",
            "Flash Sprite",
            "Garden Golem",
            "Insight Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "History & Cultures 🏺",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Learn terms for historical civilizations, monuments, heritage, and antiquities."
    },
    "g7-computer-science": {
        "id": "g7-computer-science",
        "name": "Computer Science",
        "grade": 7,
        "topicId": "computer-science",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "💻",
        "monsterNames": [
            "Sound Slime",
            "Echo Sprite",
            "Vowel Pixie",
            "Sonic Golem",
            "Chorus Griffin Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Computer Science 💻",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Discover programming vocabulary: algorithms, databases, parameters, and networks."
    },
    "g7-literature-genres": {
        "id": "g7-literature-genres",
        "name": "Literature & Genres",
        "grade": 7,
        "topicId": "literature-genres",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "📚",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Literature 📚",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Master terminology for literary formats: prose, poetry, drama, fantasy, and biographies."
    },
    "g7-debate-reasoning": {
        "id": "g7-debate-reasoning",
        "name": "Debate & Reasoning",
        "grade": 7,
        "topicId": "debate-reasoning",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🗣️",
        "monsterNames": [
            "Noun Slime",
            "Verb Imp",
            "Synonym Sprite",
            "Word Golem",
            "Lexicon Druid Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ],
        "subject": "english",
        "badge": "Debate & Reasoning 🗣️",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Acquire words to form logical arguments, assert claims, evaluate counter-claims, and debate."
    },
    "g8-history-archaeology": {
        "id": "g8-history-archaeology",
        "name": "History & Archaeology",
        "grade": 8,
        "topicId": "history-archaeology",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🏺",
        "monsterNames": [
            "Active Slime",
            "Passive Sprite",
            "Auxiliary Imp",
            "Lava Golem",
            "Volcano Overlord Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "History 🏺",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Learn terms for historical artifacts, excavations, eras, and dynastic periods."
    },
    "g8-law-justice": {
        "id": "g8-law-justice",
        "name": "Law & Justice",
        "grade": 8,
        "topicId": "law-justice",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "⚖️",
        "monsterNames": [
            "Gerund Slime",
            "Participle Imp",
            "Infinitive Sprite",
            "Void Wyvern",
            "Galaxy Sage Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Law & Justice ⚖️",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Explore legal jargon: courts, trials, verdicts, jury duties, and statutes."
    },
    "g8-advanced-verbs": {
        "id": "g8-advanced-verbs",
        "name": "Advanced Verbs",
        "grade": 8,
        "topicId": "advanced-verbs",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "⚡",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Advanced Verbs ⚡",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-855",
        "description": "Master powerful narrative verbs to convey action with precision."
    },
    "g8-academic-collocations": {
        "id": "g8-academic-collocations",
        "name": "Academic Collocations",
        "grade": 8,
        "topicId": "academic-collocations",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "📚",
        "monsterNames": [
            "Pronoun Slime",
            "Tense Imp",
            "Grammar Guard",
            "Adjective Ogre",
            "Sintax Sea Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Collocations 📚",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Learn words that naturally go together in academic and scholarly texts."
    },
    "g8-idioms-expressions": {
        "id": "g8-idioms-expressions",
        "name": "Idioms & Expressions",
        "grade": 8,
        "topicId": "idioms-expressions",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "💬",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Idioms 💬",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Acquire colorful idioms and expressions to express abstract ideas."
    },
    "g8-psychology-behavior-g8": {
        "id": "g8-psychology-behavior-g8",
        "name": "Psychology & Behavior",
        "grade": 8,
        "topicId": "psychology-behavior-g8",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🧠",
        "monsterNames": [
            "Cognitive Slime",
            "Motive Sprite",
            "Behavioral Imp",
            "Synapse Wyvern",
            "Psych Master Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Psychology 🧠",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Explore how motivation, cognitive traits, and behaviors influence human actions."
    },
    "g8-astronomy-physics": {
        "id": "g8-astronomy-physics",
        "name": "Astronomy & Physics",
        "grade": 8,
        "topicId": "astronomy-physics",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🔭",
        "monsterNames": [
            "Gravity Slime",
            "Velocity Imp",
            "Orbital Sprite",
            "Cosmic Gargoyle",
            "Newton Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Astronomy 🔭",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Discover words for gravity, light years, velocity, cosmic matter, and the physical universe."
    },
    "g8-global-economics": {
        "id": "g8-global-economics",
        "name": "Global Economics",
        "grade": 8,
        "topicId": "global-economics",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "📈",
        "monsterNames": [
            "Market Slime",
            "Tariff Imp",
            "Inflation Sprite",
            "Commerce Golem",
            "Trade Master Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Global Economics 📈",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-855",
        "description": "Understand terminology for trade, inflation, markets, and international commerce."
    },
    "g8-literary-analysis": {
        "id": "g8-literary-analysis",
        "name": "Literary Analysis",
        "grade": 8,
        "topicId": "literary-analysis",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🖋️",
        "monsterNames": [
            "Theme Slime",
            "Motif Sprite",
            "Symbol Imp",
            "Plot Golem",
            "Critic Overlord Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Literary Analysis 🖋️",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Master terms for themes, motifs, symbols, and plot structures in literature."
    },
    "g8-rhetoric-speech": {
        "id": "g8-rhetoric-speech",
        "name": "Rhetoric & Speech",
        "grade": 8,
        "topicId": "rhetoric-speech",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🎙️",
        "monsterNames": [
            "Orator Slime",
            "Speech Imp",
            "Delivery Sprite",
            "Debate Golem",
            "Rhetoric Sage Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Rhetoric 🎙️",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Learn terminology for persuasion styles, structuring speeches, and delivery techniques."
    },
    "g9-literary-devices": {
        "id": "g9-literary-devices",
        "name": "Literary Devices Vocab",
        "grade": 9,
        "topicId": "literary-devices",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "📖",
        "monsterNames": [
            "Ethos Slime",
            "Pathos Sprite",
            "Logos Imp",
            "Quagmire Lurker",
            "Sophist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre"
        ],
        "subject": "english",
        "badge": "Literary Devices 📖",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Identify rhetorical techniques: metonymy, oxymorons, symbols, and tone."
    },
    "g9-business-careers": {
        "id": "g9-business-careers",
        "name": "Business & Careers",
        "grade": 9,
        "topicId": "business-careers",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "💼",
        "monsterNames": [
            "Pronoun Slime",
            "Tense Imp",
            "Grammar Guard",
            "Adjective Ogre",
            "Sintax Sea Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Business 💼",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Master commercial jargon: profits, branding, logistics, and employment."
    },
    "g9-art-design": {
        "id": "g9-art-design",
        "name": "Art & Design",
        "grade": 9,
        "topicId": "art-design",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🎨",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Art & Design 🎨",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-855",
        "description": "Learn vocabulary for painting mediums, photography, and structural design."
    },
    "g9-tech-internet": {
        "id": "g9-tech-internet",
        "name": "Technology & Internet",
        "grade": 9,
        "topicId": "tech-internet",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🌐",
        "monsterNames": [
            "Noun Slime",
            "Verb Imp",
            "Synonym Sprite",
            "Word Golem",
            "Lexicon Druid Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "bramble_golem"
        ],
        "subject": "english",
        "badge": "Tech & Net 🌐",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Understand modern vocabulary: algorithm, bandwidth, firewalls, and encryption."
    },
    "g9-sat-verbs": {
        "id": "g9-sat-verbs",
        "name": "SAT High-Frequency Verbs",
        "grade": 9,
        "topicId": "sat-verbs",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🧠",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "SAT Verbs 🧠",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Acquire powerful high-frequency academic verbs tested in SAT exams."
    },
    "g9-philosophy-ethics": {
        "id": "g9-philosophy-ethics",
        "name": "Philosophy & Ethics",
        "grade": 9,
        "topicId": "philosophy-ethics",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "⚖️",
        "monsterNames": [
            "Logic Slime",
            "Proof Imp",
            "Ethical Sprite",
            "Socrates Golem",
            "Reasoning Sage Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Philosophy ⚖️",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Examine moral dilemmas, logical proofs, ethical values, and philosophical reasoning."
    },
    "g9-public-speaking": {
        "id": "g9-public-speaking",
        "name": "Public Speaking",
        "grade": 9,
        "topicId": "public-speaking",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🎤",
        "monsterNames": [
            "Vocal Slime",
            "Tone Sprite",
            "Stage Imp",
            "Presentation Golem",
            "Keynote King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Public Speaking 🎤",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Master the art of presentation, rhetorical delivery, slide organization, and speaking style."
    },
    "g9-environmental-science": {
        "id": "g9-environmental-science",
        "name": "Environmental Science",
        "grade": 9,
        "topicId": "environmental-science",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🌿",
        "monsterNames": [
            "Eco Slime",
            "Biodiversity Imp",
            "Sustain Sprite",
            "Forest Golem",
            "Ecosystem Lord Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Eco Science 🌿",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-855",
        "description": "Learn advanced terminology for sustainability, ecology paradigms, and ecosystem conservation."
    },
    "g9-world-history": {
        "id": "g9-world-history",
        "name": "World History",
        "grade": 9,
        "topicId": "world-history",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🌍",
        "monsterNames": [
            "Treaty Slime",
            "Pact Sprite",
            "Alliance Imp",
            "Dynasty Golem",
            "Chronicle Emperor Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "World History 🌍",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Discuss vocabulary for global treaties, historical alliances, and ancient trade routes."
    },
    "g9-sociology-culture": {
        "id": "g9-sociology-culture",
        "name": "Sociology & Culture",
        "grade": 9,
        "topicId": "sociology-culture",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "👥",
        "monsterNames": [
            "Norm Slime",
            "Ritual Sprite",
            "Structure Imp",
            "Society Golem",
            "Culture Guardian Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Sociology 👥",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Explore words relating to social structures, cultural traditions, and community norms."
    },
    "g10-philosophy-beliefs": {
        "id": "g10-philosophy-beliefs",
        "name": "Philosophy & Beliefs",
        "grade": 10,
        "topicId": "philosophy-beliefs",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🧘",
        "monsterNames": [
            "Alliteration Slime",
            "Oxymoron Sprite",
            "Irony Golem",
            "Climax Wyvern",
            "Poet Laureate Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Philosophy 🧘",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Discuss moral values, logic, philosophical schools, and tenets."
    },
    "g10-global-issues": {
        "id": "g10-global-issues",
        "name": "Global Issues",
        "grade": 10,
        "topicId": "global-issues",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🌎",
        "monsterNames": [
            "Pronoun Slime",
            "Tense Imp",
            "Grammar Guard",
            "Adjective Ogre",
            "Sintax Sea Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Global Issues 🌎",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Discuss humanitarian crises, economic gaps, treaties, and human rights."
    },
    "g10-psychology-behavior": {
        "id": "g10-psychology-behavior",
        "name": "Psychology & Behavior",
        "grade": 10,
        "topicId": "psychology-behavior",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🕵️",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Psychology 🕵️",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-850",
        "description": "Explore words for cognitive styles, behavioral quirks, and motivation theories."
    },
    "g10-government-politics": {
        "id": "g10-government-politics",
        "name": "Government & Politics",
        "grade": 10,
        "topicId": "government-politics",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🏛️",
        "monsterNames": [
            "Ethos Slime",
            "Pathos Sprite",
            "Logos Imp",
            "Quagmire Lurker",
            "Sophist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "fluffy_ogre"
        ],
        "subject": "english",
        "badge": "Gov & Politics 🏛️",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Learn terms for bills, executive powers, voting, and constitutions."
    },
    "g10-sat-adjectives": {
        "id": "g10-sat-adjectives",
        "name": "SAT High-Frequency Adjectives",
        "grade": 10,
        "topicId": "sat-adjectives",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🎯",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "SAT Adjectives 🎯",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Master SAT adjectives: ephemeral, pragmatical, and resilient."
    },
    "g10-ethics-morality": {
        "id": "g10-ethics-morality",
        "name": "Ethics & Morality",
        "grade": 10,
        "topicId": "ethics-morality",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🕊️",
        "monsterNames": [
            "Virtue Slime",
            "Duty Sprite",
            "Code Imp",
            "Framework Golem",
            "Ethicist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Ethics 🕊️",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Discuss codes of conduct, ethical dilemmas, rights, duties, and moral frameworks."
    },
    "g10-media-literacy": {
        "id": "g10-media-literacy",
        "name": "Media Literacy",
        "grade": 10,
        "topicId": "media-literacy",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "📰",
        "monsterNames": [
            "Bias Slime",
            "Censor Sprite",
            "Source Imp",
            "Broadcast Golem",
            "Journalist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Media Literacy 📰",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Examine news bias, reporting standards, media censorship, and information dissemination."
    },
    "g10-scientific-vocabulary": {
        "id": "g10-scientific-vocabulary",
        "name": "Scientific Vocabulary",
        "grade": 10,
        "topicId": "scientific-vocabulary",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🔬",
        "monsterNames": [
            "Variable Slime",
            "Control Sprite",
            "Hypothesis Imp",
            "Lab Golem",
            "Researcher Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Scientific Vocab 🔬",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-855",
        "description": "Learn academic words for scientific research, variable control, and experimental methods."
    },
    "g10-microeconomics": {
        "id": "g10-microeconomics",
        "name": "Microeconomics",
        "grade": 10,
        "topicId": "microeconomics",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "📊",
        "monsterNames": [
            "Supply Slime",
            "Demand Sprite",
            "Price Imp",
            "Market Golem",
            "Economist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Microeconomics 📊",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Explore microeconomic terms for supply, demand, market pricing, and commercial decisions."
    },
    "g10-advanced-composition": {
        "id": "g10-advanced-composition",
        "name": "Advanced Composition",
        "grade": 10,
        "topicId": "advanced-composition",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "✒️",
        "monsterNames": [
            "Thesis Slime",
            "Citation Sprite",
            "Outline Imp",
            "Draft Golem",
            "Academic Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Composition ✒️",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Master terms for academic citation, thesis development, and structured essay writing."
    },
    "g11-economics-finance": {
        "id": "g11-economics-finance",
        "name": "Economics & Finance",
        "grade": 11,
        "topicId": "economics-finance",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "💰",
        "monsterNames": [
            "Inversion Slime",
            "Parallelism Imp",
            "Structure Golem",
            "Syntax Wyvern",
            "Sea Mage Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Economics 💰",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Discuss asset values, inflation, stock markets, and fiscal models."
    },
    "g11-science-innovation": {
        "id": "g11-science-innovation",
        "name": "Science & Innovation",
        "grade": 11,
        "topicId": "science-innovation",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "💡",
        "monsterNames": [
            "Pronoun Slime",
            "Tense Imp",
            "Grammar Guard",
            "Adjective Ogre",
            "Sintax Sea Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Innovation 💡",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Learn terms for genetic engineering, physics paradigms, and technical patents."
    },
    "g11-culture-society": {
        "id": "g11-culture-society",
        "name": "Culture & Society",
        "grade": 11,
        "topicId": "culture-society",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "🎭",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Culture & Society 🎭",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-855",
        "description": "Examine cultural patterns: assimilation, societal rituals, and diversity."
    },
    "g11-advanced-nouns": {
        "id": "g11-advanced-nouns",
        "name": "Advanced Nouns",
        "grade": 11,
        "topicId": "advanced-nouns",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "📝",
        "monsterNames": [
            "Acid Slime",
            "Elixir Sprite",
            "Brew Golem",
            "Vial Drake",
            "Alchemist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Advanced Nouns 📝",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Discuss abstract nouns: paradox, dilemma, synergy, and archetype."
    },
    "g11-sat-nouns": {
        "id": "g11-sat-nouns",
        "name": "SAT High-Frequency Nouns",
        "grade": 11,
        "topicId": "sat-nouns",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🏆",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "SAT Nouns 🏆",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Acquire high-scoring nouns tested in standard college entrance examinations."
    },
    "g11-critical-theory": {
        "id": "g11-critical-theory",
        "name": "Critical Theory",
        "grade": 11,
        "topicId": "critical-theory",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🧐",
        "monsterNames": [
            "Paradigm Slime",
            "Critique Sprite",
            "Structural Imp",
            "Deconstruction Golem",
            "Theorist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Critical Theory 🧐",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Study analytical paradigms, structuralism, literary critiques, and theoretical perspectives."
    },
    "g11-academic-verbs": {
        "id": "g11-academic-verbs",
        "name": "Academic Verbs",
        "grade": 11,
        "topicId": "academic-verbs",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "✍️",
        "monsterNames": [
            "Evaluate Slime",
            "Synthesize Sprite",
            "Substantiate Imp",
            "Construct Golem",
            "Scholar Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Academic Verbs ✍️",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Acquire scholarly verbs like synthesize, evaluate, construct, and substantiate."
    },
    "g11-legal-terminology": {
        "id": "g11-legal-terminology",
        "name": "Legal Terminology",
        "grade": 11,
        "topicId": "legal-terminology",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "⚖️",
        "monsterNames": [
            "Lawsuit Slime",
            "Contract Sprite",
            "Tort Imp",
            "Protocol Golem",
            "Attorney Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Legal Terms ⚖️",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-855",
        "description": "Learn precise terms for lawsuits, business contracts, torts, and legal protocols."
    },
    "g11-advanced-rhetoric": {
        "id": "g11-advanced-rhetoric",
        "name": "Advanced Rhetoric",
        "grade": 11,
        "topicId": "advanced-rhetoric",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🗣️",
        "monsterNames": [
            "Logos Slime",
            "Ethos Sprite",
            "Pathos Imp",
            "Persuasion Golem",
            "Rhetorician Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Advanced Rhetoric 🗣️",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Explore advanced persuasion models: logos, ethos, pathos, and stylistic devices."
    },
    "g11-international-relations": {
        "id": "g11-international-relations",
        "name": "International Relations",
        "grade": 11,
        "topicId": "international-relations",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🌐",
        "monsterNames": [
            "Sovereign Slime",
            "Treaty Sprite",
            "Alliance Imp",
            "Diplomatic Golem",
            "Ambassador Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Int Relations 🌐",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Discuss diplomacy, global alliances, treaties, and international sovereignty."
    },
    "g12-scholarly-jargon": {
        "id": "g12-scholarly-jargon",
        "name": "Scholarly Jargon",
        "grade": 12,
        "topicId": "scholarly-jargon",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "🏛️",
        "monsterNames": [
            "Inference Slime",
            "Theme Sprite",
            "Symbol Gargoyle",
            "Library Guardian",
            "Chief Archivist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Scholarly Jargon 🏛️",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Discuss high-level concepts: hermeneutics, paradigm, episteme, and heuristic."
    },
    "g12-abstract-concepts": {
        "id": "g12-abstract-concepts",
        "name": "Abstract Concepts",
        "grade": 12,
        "topicId": "abstract-concepts",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🌀",
        "monsterNames": [
            "Comprehension Slime",
            "Plot Imp",
            "Detail Knight",
            "Summary Wyvern",
            "Story King Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "sparky_dragon",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Abstract Concepts 🌀",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Express compound abstractions: duality, ambiguity, existentialism, and subtext."
    },
    "g12-professional-vocab": {
        "id": "g12-professional-vocab",
        "name": "Professional Vocab",
        "grade": 12,
        "topicId": "professional-vocab",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "👔",
        "monsterNames": [
            "Acid Slime",
            "Elixir Sprite",
            "Brew Golem",
            "Vial Drake",
            "Alchemist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Professional Vocab 👔",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-855",
        "description": "Equip yourself with professional vocabulary: delegation, synergy, and milestones."
    },
    "g12-advanced-synonyms": {
        "id": "g12-advanced-synonyms",
        "name": "Advanced Synonyms",
        "grade": 12,
        "topicId": "advanced-synonyms",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🔄",
        "monsterNames": [
            "Inversion Slime",
            "Parallelism Imp",
            "Structure Golem",
            "Syntax Wyvern",
            "Sea Mage Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Advanced Synonyms 🔄",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Learn sophisticated synonyms to convey subtle nuances in critical essays."
    },
    "g12-gre-mastery": {
        "id": "g12-gre-mastery",
        "name": "GRE/SAT Mastery Vocab",
        "grade": 12,
        "topicId": "gre-mastery",
        "bgClass": "bg-playful-dots bg-amber-50",
        "nodeColor": "yellow",
        "emoji": "🎓",
        "monsterNames": [
            "Pronoun Slime",
            "Tense Imp",
            "Grammar Guard",
            "Adjective Ogre",
            "Sintax Sea Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "GRE Vocab 🎓",
        "bgStyle": "bg-amber-50 border-amber-300 hover:border-amber-400",
        "textStyle": "text-amber-900",
        "description": "Acquire high-tier scholarly vocabulary required for advanced academic mastery."
    },
    "g12-grammar": {
        "id": "g12-grammar",
        "name": "Scholarly Grammar",
        "grade": 12,
        "topicId": "grammar",
        "bgClass": "bg-playful-dots bg-red-50",
        "nodeColor": "orange",
        "emoji": "🏛️",
        "monsterNames": [
            "Pronoun Slime",
            "Tense Imp",
            "Grammar Guard",
            "Adjective Ogre",
            "Sintax Sea Dragon Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "fluffy_ogre",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Grammar 🏛️",
        "bgStyle": "bg-red-50 border-red-300 hover:border-red-400",
        "textStyle": "text-red-900",
        "description": "Review comprehensive English usage rules for advanced writing and scholarship."
    },
    "g12-epistemology": {
        "id": "g12-epistemology",
        "name": "Epistemology",
        "grade": 12,
        "topicId": "epistemology",
        "bgClass": "bg-playful-dots bg-indigo-50",
        "nodeColor": "blue",
        "emoji": "💭",
        "monsterNames": [
            "Belief Slime",
            "Truth Sprite",
            "Knowledge Imp",
            "Cognitive Golem",
            "Philosopher Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Epistemology 💭",
        "bgStyle": "bg-indigo-50 border-indigo-300 hover:border-indigo-400",
        "textStyle": "text-indigo-900",
        "description": "Examine theories of knowledge, truth models, belief validation, and cognitive paradigms."
    },
    "g12-postmodern-vocab": {
        "id": "g12-postmodern-vocab",
        "name": "Post-Modern Vocabulary",
        "grade": 12,
        "topicId": "postmodern-vocab",
        "bgClass": "bg-playful-dots bg-teal-50",
        "nodeColor": "green",
        "emoji": "🎨",
        "monsterNames": [
            "Abstract Slime",
            "Deconstruction Sprite",
            "Critique Imp",
            "Irony Golem",
            "Postmodernist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Postmodern Vocab 🎨",
        "bgStyle": "bg-teal-50 border-teal-300 hover:border-teal-400",
        "textStyle": "text-teal-900",
        "description": "Discuss postmodern and deconstructive terminology for literary and artistic criticism."
    },
    "g12-research-methodologies": {
        "id": "g12-research-methodologies",
        "name": "Research Methodologies",
        "grade": 12,
        "topicId": "research-methodologies",
        "bgClass": "bg-playful-dots bg-pink-50",
        "nodeColor": "orange",
        "emoji": "📊",
        "monsterNames": [
            "Qualitative Slime",
            "Quantitative Sprite",
            "Model Imp",
            "Data Golem",
            "Methodologist Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Research Methods 📊",
        "bgStyle": "bg-pink-50 border-pink-300 hover:border-pink-400",
        "textStyle": "text-pink-855",
        "description": "Understand qualitative, quantitative, and mixed-methods research designs and data modeling."
    },
    "g12-scientific-paradigms": {
        "id": "g12-scientific-paradigms",
        "name": "Scientific Paradigms",
        "grade": 12,
        "topicId": "scientific-paradigms",
        "bgClass": "bg-playful-dots bg-purple-50",
        "nodeColor": "purple",
        "emoji": "🧬",
        "monsterNames": [
            "Paradigm Slime",
            "Theory Sprite",
            "Empirical Imp",
            "Validation Golem",
            "Academician Boss"
        ],
        "monsterIds": [
            "muddy_slime",
            "muddy_slime",
            "muddy_slime",
            "bramble_golem",
            "sparky_dragon"
        ],
        "subject": "english",
        "badge": "Scientific Paradigms 🧬",
        "bgStyle": "bg-purple-50 border-purple-300 hover:border-purple-400",
        "textStyle": "text-purple-900",
        "description": "Analyze scientific paradigm shifts, theories, validation, and empirical reasoning."
    }
};

// Proxy to allow overrides from localStorage
export const WORLDS_DATABASE = new Proxy(STATIC_WORLDS_DATABASE, {
  get(target, prop: string) {
    if (typeof window === 'undefined') return target[prop];

    const customWorlds = JSON.parse(localStorage.getItem('custom_worlds') || '{}');
    if (customWorlds[prop]) {
      return customWorlds[prop];
    }

    return target[prop];
  },
  getOwnPropertyDescriptor(target, prop) {
    return {
      enumerable: true,
      configurable: true,
    };
  },
  ownKeys(target) {
    if (typeof window === 'undefined') return Object.keys(target);

    const customWorlds = JSON.parse(localStorage.getItem('custom_worlds') || '{}');
    return Array.from(new Set([...Object.keys(target), ...Object.keys(customWorlds)]));
  }
}) as unknown as { [id: string]: WorldConfig };
