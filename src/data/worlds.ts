export interface WorldConfig {
  id: string;
  name: string;
  grade: number;
  topicId: string;
  bgClass: string;
  nodeColor: 'green' | 'purple' | 'blue' | 'orange' | 'yellow';
  emoji: string;
  monsterNames: string[];
  monsterIds: string[];
}

export const WORLDS_DATABASE: { [id: string]: WorldConfig } = {
  // === KINDERGARTEN ===
  'gk-counting': {
    id: 'gk-counting',
    name: 'Counting Meadow',
    grade: 0,
    topicId: 'counting',
    bgClass: 'bg-playful-dots bg-amber-50',
    nodeColor: 'yellow',
    emoji: '🐝',
    monsterNames: ['Baby Slime', 'Tiny Imp', 'Flower Pixie', 'Meadow Bunny', 'Golden Bee Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'muddy_slime', 'muddy_slime']
  },
  'gk-geometry': {
    id: 'gk-geometry',
    name: 'Shape Crystal Land',
    grade: 0,
    topicId: 'geometry',
    bgClass: 'bg-playful-dots bg-pink-50',
    nodeColor: 'orange',
    emoji: '💎',
    monsterNames: ['Ruby Slime', 'Crystal Imp', 'Prism Sprite', 'Shard Golem', 'Diamond Dragon Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'bramble_golem', 'sparky_dragon']
  },
  'gk-comparing': {
    id: 'gk-comparing',
    name: 'Comparing Valley',
    grade: 0,
    topicId: 'comparing',
    bgClass: 'bg-playful-dots bg-orange-50',
    nodeColor: 'orange',
    emoji: '⛰️',
    monsterNames: ['Valley Slime', 'Scale Imp', 'Weight Sprite', 'Ogre Scout', 'Titan Ogre Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'fluffy_ogre', 'fluffy_ogre']
  },
  'gk-operations': {
    id: 'gk-operations',
    name: 'Sum & Difference Oasis',
    grade: 0,
    topicId: 'operations',
    bgClass: 'bg-playful-dots bg-emerald-50',
    nodeColor: 'green',
    emoji: '🍎',
    monsterNames: ['Apple Slime', 'Math Imp', 'Berry Sprite', 'Oasis Bunny', 'Forest Druid Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'muddy_slime', 'muddy_slime']
  },
  'gk-base-ten': {
    id: 'gk-base-ten',
    name: 'Base Ten Meadows',
    grade: 0,
    topicId: 'base-ten',
    bgClass: 'bg-playful-dots bg-blue-50',
    nodeColor: 'blue',
    emoji: '🎒',
    monsterNames: ['Ten Slime', 'Unit Imp', 'Block Sprite', 'Pack Golem', 'Decade Dragon Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'bramble_golem', 'sparky_dragon']
  },

  // === GRADE 1 ===
  'g1-addition': {
    id: 'g1-addition',
    name: 'Number Forest',
    grade: 1,
    topicId: 'addition',
    bgClass: 'bg-forest-grid',
    nodeColor: 'green',
    emoji: '🌳',
    monsterNames: ['Bramble Slime', 'Moss Golem', 'Forest Imp', 'Wildwood Dryad', 'Bramble Golem Boss'],
    monsterIds: ['muddy_slime', 'bramble_golem', 'muddy_slime', 'bramble_golem', 'bramble_golem']
  },
  'g1-subtraction': {
    id: 'g1-subtraction',
    name: 'Subtraction Cave',
    grade: 1,
    topicId: 'subtraction',
    bgClass: 'bg-playful-dots bg-slate-100',
    nodeColor: 'purple',
    emoji: '🦇',
    monsterNames: ['Cave Slime', 'Fuzzy Ogre', 'Crystal Bat', 'Shadow Gargoyle', 'Fluffy Ogre Boss'],
    monsterIds: ['muddy_slime', 'fluffy_ogre', 'muddy_slime', 'fluffy_ogre', 'fluffy_ogre']
  },
  'g1-place-value': {
    id: 'g1-place-value',
    name: 'Place Value Castle',
    grade: 1,
    topicId: 'place-value',
    bgClass: 'bg-playful-dots bg-yellow-50',
    nodeColor: 'yellow',
    emoji: '🏰',
    monsterNames: ['Gold Slime', 'Brick Golem', 'Gate Keeper', 'Royal Knight', 'Castle Guard Boss'],
    monsterIds: ['muddy_slime', 'bramble_golem', 'sparky_dragon', 'sparky_dragon', 'sparky_dragon']
  },
  'g1-measurement': {
    id: 'g1-measurement',
    name: 'Time & Measure Cave',
    grade: 1,
    topicId: 'measurement',
    bgClass: 'bg-playful-dots bg-indigo-50',
    nodeColor: 'orange',
    emoji: '⏰',
    monsterNames: ['Tick Slime', 'Hour Imp', 'Ruler Sprite', 'Shadow Gargoyle', 'Ticking Golem Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'fluffy_ogre', 'bramble_golem']
  },
  'g1-geometry': {
    id: 'g1-geometry',
    name: 'Shape Partition Forest',
    grade: 1,
    topicId: 'geometry',
    bgClass: 'bg-forest-grid',
    nodeColor: 'green',
    emoji: '🍕',
    monsterNames: ['Half Slime', 'Quarter Imp', 'Cone Sprite', 'Forest Dryad', 'Bramble Golem Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'bramble_golem', 'bramble_golem']
  },

  // === GRADE 2 ===
  'g2-addition': {
    id: 'g2-addition',
    name: 'Addition Island',
    grade: 2,
    topicId: 'addition',
    bgClass: 'bg-playful-dots bg-sky-50',
    nodeColor: 'blue',
    emoji: '🏝️',
    monsterNames: ['Coral Slime', 'Salty Ogre', 'Aqua Dragon', 'Reef Crab', 'Sparky Dragon Boss'],
    monsterIds: ['muddy_slime', 'fluffy_ogre', 'sparky_dragon', 'muddy_slime', 'sparky_dragon']
  },
  'g2-subtraction': {
    id: 'g2-subtraction',
    name: 'Subtraction Cave',
    grade: 2,
    topicId: 'subtraction',
    bgClass: 'bg-playful-dots bg-slate-200',
    nodeColor: 'purple',
    emoji: '🧗',
    monsterNames: ['Cave Slime', 'Fuzzy Ogre', 'Crystal Bat', 'Shadow Gargoyle', 'Fluffy Ogre Boss'],
    monsterIds: ['muddy_slime', 'fluffy_ogre', 'muddy_slime', 'fluffy_ogre', 'fluffy_ogre']
  },
  'g2-measurement': {
    id: 'g2-measurement',
    name: 'Clock Time Tower',
    grade: 2,
    topicId: 'measurement',
    bgClass: 'bg-playful-dots bg-indigo-50',
    nodeColor: 'orange',
    emoji: '⏰',
    monsterNames: ['Time Slime', 'Gear Imp', 'Ticking Sprite', 'Hour Golem', 'Clockmaker Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'bramble_golem', 'bramble_golem']
  },
  'g2-base-ten': {
    id: 'g2-base-ten',
    name: 'Hundred Block Castle',
    grade: 2,
    topicId: 'base-ten',
    bgClass: 'bg-playful-dots bg-yellow-50',
    nodeColor: 'yellow',
    emoji: '🧱',
    monsterNames: ['Brick Slime', 'Salty Ogre', 'Aqua Dragon', 'Reef Crab', 'Sparky Dragon Boss'],
    monsterIds: ['muddy_slime', 'fluffy_ogre', 'sparky_dragon', 'muddy_slime', 'sparky_dragon']
  },
  'g2-geometry': {
    id: 'g2-geometry',
    name: 'Partition Cave',
    grade: 2,
    topicId: 'geometry',
    bgClass: 'bg-playful-dots bg-purple-50',
    nodeColor: 'purple',
    emoji: '🔷',
    monsterNames: ['Cave Slime', 'Fuzzy Ogre', 'Crystal Bat', 'Shadow Gargoyle', 'Fluffy Ogre Boss'],
    monsterIds: ['muddy_slime', 'fluffy_ogre', 'muddy_slime', 'fluffy_ogre', 'fluffy_ogre']
  },

  // === GRADE 3 ===
  'g3-multiplication': {
    id: 'g3-multiplication',
    name: 'Multiplication Mountain',
    grade: 3,
    topicId: 'multiplication',
    bgClass: 'bg-playful-dots bg-orange-50',
    nodeColor: 'orange',
    emoji: '🏔️',
    monsterNames: ['Volcano Slime', 'Ember Fox', 'Fire Drake', 'Ash Golem', 'Ember Fox Boss'],
    monsterIds: ['muddy_slime', 'ember_fox', 'sparky_dragon', 'bramble_golem', 'ember_fox']
  },
  'g3-division': {
    id: 'g3-division',
    name: 'Fraction Kingdom',
    grade: 3,
    topicId: 'division',
    bgClass: 'bg-playful-dots bg-amber-50',
    nodeColor: 'yellow',
    emoji: '👑',
    monsterNames: ['Gold Slime', 'Crown Knight', 'Jewel Wyvern', 'Star Golem', 'Sparky Dragon Boss'],
    monsterIds: ['muddy_slime', 'sparky_dragon', 'sparky_dragon', 'bramble_golem', 'sparky_dragon']
  },
  'g3-fractions': {
    id: 'g3-fractions',
    name: 'Fraction Alchemy Lab',
    grade: 3,
    topicId: 'fractions',
    bgClass: 'bg-playful-dots bg-rose-50',
    nodeColor: 'purple',
    emoji: '🧪',
    monsterNames: ['Acid Slime', 'Elixir Sprite', 'Brew Golem', 'Vial Drake', 'Alchemist Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'bramble_golem', 'sparky_dragon', 'sparky_dragon']
  },
  'g3-base-ten': {
    id: 'g3-base-ten',
    name: 'Rounding Peak',
    grade: 3,
    topicId: 'base-ten',
    bgClass: 'bg-playful-dots bg-indigo-50',
    nodeColor: 'blue',
    emoji: '🎯',
    monsterNames: ['Peak Slime', 'Apex Fox', 'Storm Sprite', 'Blizzard Golem', 'Summit Golem Boss'],
    monsterIds: ['muddy_slime', 'ember_fox', 'muddy_slime', 'bramble_golem', 'bramble_golem']
  },
  'g3-measurement': {
    id: 'g3-measurement',
    name: 'Area & Perimeter Ruins',
    grade: 3,
    topicId: 'measurement',
    bgClass: 'bg-playful-dots bg-amber-50',
    nodeColor: 'orange',
    emoji: '📏',
    monsterNames: ['Grid Slime', 'Scale Imp', 'Fence Sprite', 'Ruins Golem', 'Titan Balance Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'bramble_golem', 'fluffy_ogre']
  },
  'g3-geometry': {
    id: 'g3-geometry',
    name: 'Shape Matrix Lab',
    grade: 3,
    topicId: 'geometry',
    bgClass: 'bg-playful-dots bg-rose-50',
    nodeColor: 'purple',
    emoji: '📐',
    monsterNames: ['Acid Slime', 'Angle Sprite', 'Brew Golem', 'Vial Drake', 'Alchemist Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'bramble_golem', 'sparky_dragon', 'sparky_dragon']
  },

  // === GRADE 4 ===
  'g4-multiplication': {
    id: 'g4-multiplication',
    name: 'Long Multiplication Peak',
    grade: 4,
    topicId: 'multiplication',
    bgClass: 'bg-playful-dots bg-indigo-50',
    nodeColor: 'orange',
    emoji: '⚡',
    monsterNames: ['Volt Slime', 'Lightning Fox', 'Storm Golem', 'Thunder Drake', 'Volt Golem Boss'],
    monsterIds: ['muddy_slime', 'ember_fox', 'bramble_golem', 'sparky_dragon', 'bramble_golem']
  },
  'g4-division': {
    id: 'g4-division',
    name: 'Long Division Dungeon',
    grade: 4,
    topicId: 'division',
    bgClass: 'bg-playful-dots bg-purple-50',
    nodeColor: 'purple',
    emoji: '🧗',
    monsterNames: ['Dark Slime', 'Dungeon Ogre', 'Chain Gargoyle', 'Shadow Wyvern', 'Shadow Ogre Boss'],
    monsterIds: ['muddy_slime', 'fluffy_ogre', 'fluffy_ogre', 'sparky_dragon', 'fluffy_ogre']
  },
  'g4-fractions': {
    id: 'g4-fractions',
    name: 'Fraction Operations River',
    grade: 4,
    topicId: 'fractions',
    bgClass: 'bg-playful-dots bg-teal-50',
    nodeColor: 'blue',
    emoji: '💎',
    monsterNames: ['River Slime', 'Pebble Golem', 'Aqua Drake', 'Stream Dryad', 'Torrent Golem Boss'],
    monsterIds: ['muddy_slime', 'bramble_golem', 'sparky_dragon', 'bramble_golem', 'bramble_golem']
  },
  'g4-patterns': {
    id: 'g4-patterns',
    name: 'Factor Pattern Peak',
    grade: 4,
    topicId: 'patterns',
    bgClass: 'bg-playful-dots bg-sky-50',
    nodeColor: 'orange',
    emoji: '🌀',
    monsterNames: ['Pattern Slime', 'Lightning Fox', 'Storm Golem', 'Thunder Drake', 'Volt Golem Boss'],
    monsterIds: ['muddy_slime', 'ember_fox', 'bramble_golem', 'sparky_dragon', 'bramble_golem']
  },
  'g4-measurement': {
    id: 'g4-measurement',
    name: 'Angle & Unit Labyrinth',
    grade: 4,
    topicId: 'measurement',
    bgClass: 'bg-playful-dots bg-teal-50',
    nodeColor: 'blue',
    emoji: '🧭',
    monsterNames: ['Degree Slime', 'Pebble Golem', 'Aqua Drake', 'Stream Dryad', 'Torrent Golem Boss'],
    monsterIds: ['muddy_slime', 'bramble_golem', 'sparky_dragon', 'bramble_golem', 'bramble_golem']
  },
  'g4-geometry': {
    id: 'g4-geometry',
    name: 'Line & Symmetry Dungeon',
    grade: 4,
    topicId: 'geometry',
    bgClass: 'bg-playful-dots bg-purple-50',
    nodeColor: 'purple',
    emoji: '🦋',
    monsterNames: ['Mirror Slime', 'Dungeon Ogre', 'Chain Gargoyle', 'Shadow Wyvern', 'Shadow Ogre Boss'],
    monsterIds: ['muddy_slime', 'fluffy_ogre', 'fluffy_ogre', 'sparky_dragon', 'fluffy_ogre']
  },

  // === GRADE 5 ===
  'g5-decimals': {
    id: 'g5-decimals',
    name: 'Decimal Desert Oasis',
    grade: 5,
    topicId: 'decimals',
    bgClass: 'bg-playful-dots bg-sky-50',
    nodeColor: 'blue',
    emoji: '🏜️',
    monsterNames: ['Sand Slime', 'Dune Ogre', 'Desert Drake', 'Oasis Dryad', 'Sand Golem Boss'],
    monsterIds: ['muddy_slime', 'fluffy_ogre', 'sparky_dragon', 'bramble_golem', 'bramble_golem']
  },
  'g5-geometry': {
    id: 'g5-geometry',
    name: 'Volume Coordinate Matrix',
    grade: 5,
    topicId: 'geometry',
    bgClass: 'bg-playful-dots bg-teal-50',
    nodeColor: 'green',
    emoji: '📐',
    monsterNames: ['Matrix Slime', 'Grid Golem', 'Vector Drake', 'Angle Dryad', 'Matrix Boss'],
    monsterIds: ['muddy_slime', 'bramble_golem', 'sparky_dragon', 'bramble_golem', 'bramble_golem']
  },
  'g5-fractions': {
    id: 'g5-fractions',
    name: 'Unlike Denominator Summit',
    grade: 5,
    topicId: 'fractions',
    bgClass: 'bg-playful-dots bg-indigo-50',
    nodeColor: 'purple',
    emoji: '⚡',
    monsterNames: ['Summit Slime', 'Alpine Fox', 'Peak Wyvern', 'Blizzard Golem', 'Summit Golem Boss'],
    monsterIds: ['muddy_slime', 'ember_fox', 'sparky_dragon', 'bramble_golem', 'bramble_golem']
  },
  'g5-algebra': {
    id: 'g5-algebra',
    name: 'Expression Oasis',
    grade: 5,
    topicId: 'algebra',
    bgClass: 'bg-playful-dots bg-sky-50',
    nodeColor: 'orange',
    emoji: '🧪',
    monsterNames: ['Formula Slime', 'Dune Ogre', 'Desert Drake', 'Oasis Dryad', 'Sand Golem Boss'],
    monsterIds: ['muddy_slime', 'fluffy_ogre', 'sparky_dragon', 'bramble_golem', 'bramble_golem']
  },
  'g5-measurement': {
    id: 'g5-measurement',
    name: 'Volume Summit',
    grade: 5,
    topicId: 'measurement',
    bgClass: 'bg-playful-dots bg-indigo-50',
    nodeColor: 'blue',
    emoji: '📦',
    monsterNames: ['Volume Slime', 'Alpine Fox', 'Peak Wyvern', 'Blizzard Golem', 'Summit Golem Boss'],
    monsterIds: ['muddy_slime', 'ember_fox', 'sparky_dragon', 'bramble_golem', 'bramble_golem']
  },

  // === GRADE 6 ===
  'g6-ratios': {
    id: 'g6-ratios',
    name: 'Ratio & Rate Ruins',
    grade: 6,
    topicId: 'ratios',
    bgClass: 'bg-playful-dots bg-amber-50',
    nodeColor: 'yellow',
    emoji: '⚖️',
    monsterNames: ['Scale Slime', 'Ruins Imp', 'Ratio Sprite', 'Ogre Scout', 'Titan Balance Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'fluffy_ogre', 'fluffy_ogre']
  },
  'g6-algebra': {
    id: 'g6-algebra',
    name: 'Expression Dungeon',
    grade: 6,
    topicId: 'algebra',
    bgClass: 'bg-playful-dots bg-rose-50',
    nodeColor: 'orange',
    emoji: '📜',
    monsterNames: ['Formula Slime', 'Scroll Gargoyle', 'Variable Pixie', 'Gate Knight', 'Algebra Dragon Boss'],
    monsterIds: ['muddy_slime', 'fluffy_ogre', 'muddy_slime', 'sparky_dragon', 'sparky_dragon']
  },
  'g6-statistics': {
    id: 'g6-statistics',
    name: 'Stats Swamp',
    grade: 6,
    topicId: 'statistics',
    bgClass: 'bg-playful-dots bg-emerald-50',
    nodeColor: 'green',
    emoji: '📊',
    monsterNames: ['Mean Slime', 'Median Golem', 'Mode Imp', 'Swamp Sprite', 'Data Golem Boss'],
    monsterIds: ['muddy_slime', 'bramble_golem', 'muddy_slime', 'muddy_slime', 'bramble_golem']
  },
  'g6-number-system': {
    id: 'g6-number-system',
    name: 'Coordinate Ruins',
    grade: 6,
    topicId: 'number-system',
    bgClass: 'bg-playful-dots bg-amber-50',
    nodeColor: 'yellow',
    emoji: '🎯',
    monsterNames: ['Point Slime', 'Ruins Imp', 'Ratio Sprite', 'Ogre Scout', 'Titan Balance Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'fluffy_ogre', 'fluffy_ogre']
  },
  'g6-geometry': {
    id: 'g6-geometry',
    name: 'Area & Net Swamp',
    grade: 6,
    topicId: 'geometry',
    bgClass: 'bg-playful-dots bg-emerald-50',
    nodeColor: 'green',
    emoji: '📐',
    monsterNames: ['Area Slime', 'Median Golem', 'Mode Imp', 'Swamp Sprite', 'Data Golem Boss'],
    monsterIds: ['muddy_slime', 'bramble_golem', 'muddy_slime', 'muddy_slime', 'bramble_golem']
  },

  // === GRADE 7 ===
  'g7-integers': {
    id: 'g7-integers',
    name: 'Rational Pit',
    grade: 7,
    topicId: 'integers',
    bgClass: 'bg-playful-dots bg-indigo-50',
    nodeColor: 'blue',
    emoji: '🕳️',
    monsterNames: ['Negative Slime', 'Deep Imp', 'Integer Wyvern', 'Abyssal Golem', 'Zero Void Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'sparky_dragon', 'bramble_golem', 'bramble_golem']
  },
  'g7-percentages': {
    id: 'g7-percentages',
    name: 'Percent Pyramids',
    grade: 7,
    topicId: 'percentages',
    bgClass: 'bg-playful-dots bg-yellow-50',
    nodeColor: 'yellow',
    emoji: '📈',
    monsterNames: ['Fraction Slime', 'Decimal Mummy', 'Percent Sprite', 'Pharaoh Scout', 'Anubis Boss'],
    monsterIds: ['muddy_slime', 'fluffy_ogre', 'muddy_slime', 'fluffy_ogre', 'sparky_dragon']
  },
  'g7-probability': {
    id: 'g7-probability',
    name: 'Probability Casino',
    grade: 7,
    topicId: 'probability',
    bgClass: 'bg-playful-dots bg-pink-50',
    nodeColor: 'orange',
    emoji: '🎲',
    monsterNames: ['Chance Slime', 'Dice Sprite', 'Card Knight', 'Joker Golem', 'Lady Luck Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'sparky_dragon', 'bramble_golem', 'sparky_dragon']
  },
  'g7-proportions': {
    id: 'g7-proportions',
    name: 'Proportional Pyramids',
    grade: 7,
    topicId: 'proportions',
    bgClass: 'bg-playful-dots bg-yellow-50',
    nodeColor: 'yellow',
    emoji: '📈',
    monsterNames: ['Ratio Slime', 'Decimal Mummy', 'Percent Sprite', 'Pharaoh Scout', 'Anubis Boss'],
    monsterIds: ['muddy_slime', 'fluffy_ogre', 'muddy_slime', 'fluffy_ogre', 'sparky_dragon']
  },
  'g7-geometry': {
    id: 'g7-geometry',
    name: 'Scale & Circle Pit',
    grade: 7,
    topicId: 'geometry',
    bgClass: 'bg-playful-dots bg-indigo-50',
    nodeColor: 'blue',
    emoji: '⭕',
    monsterNames: ['Circle Slime', 'Deep Imp', 'Integer Wyvern', 'Abyssal Golem', 'Zero Void Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'sparky_dragon', 'bramble_golem', 'bramble_golem']
  },

  // === GRADE 8 ===
  'g8-equations': {
    id: 'g8-equations',
    name: 'Linear Volcano',
    grade: 8,
    topicId: 'equations',
    bgClass: 'bg-playful-dots bg-red-50',
    nodeColor: 'orange',
    emoji: '🌋',
    monsterNames: ['Slope Slime', 'Lava Fox', 'Linear Drake', 'Magma Golem', 'Eruption Boss'],
    monsterIds: ['muddy_slime', 'ember_fox', 'sparky_dragon', 'bramble_golem', 'ember_fox']
  },
  'g8-exponents': {
    id: 'g8-exponents',
    name: 'Exponent Space Void',
    grade: 8,
    topicId: 'exponents',
    bgClass: 'bg-playful-dots bg-sky-50',
    nodeColor: 'blue',
    emoji: '🌌',
    monsterNames: ['Power Slime', 'Space Imp', 'Void Sprite', 'Cosmic Gargoyle', 'Supernova Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'fluffy_ogre', 'sparky_dragon']
  },
  'g8-geometry': {
    id: 'g8-geometry',
    name: 'Pythagoras Pyramid',
    grade: 8,
    topicId: 'geometry',
    bgClass: 'bg-playful-dots bg-teal-50',
    nodeColor: 'green',
    emoji: '📐',
    monsterNames: ['Angle Slime', 'Hypotenuse Golem', 'Grid Sprite', 'Proof Dryad', 'Pythagorean Boss'],
    monsterIds: ['muddy_slime', 'bramble_golem', 'muddy_slime', 'bramble_golem', 'bramble_golem']
  },

  // === GRADE 9 ===
  'g9-quadratics': {
    id: 'g9-quadratics',
    name: 'Quadratic Quagmire',
    grade: 9,
    topicId: 'quadratics',
    bgClass: 'bg-playful-dots bg-purple-50',
    nodeColor: 'purple',
    emoji: '🧪',
    monsterNames: ['Parabola Slime', 'Acid Imp', 'Axis Sprite', 'Vertex Gargoyle', 'Quadratic Dragon Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'fluffy_ogre', 'sparky_dragon']
  },
  'g9-systems': {
    id: 'g9-systems',
    name: 'System of Equinoxes',
    grade: 9,
    topicId: 'systems',
    bgClass: 'bg-playful-dots bg-blue-50',
    nodeColor: 'blue',
    emoji: '🌀',
    monsterNames: ['System Slime', 'Equinox Golem', 'Matrix Sprite', 'Intersection Wyvern', 'Dual Core Boss'],
    monsterIds: ['muddy_slime', 'bramble_golem', 'muddy_slime', 'sparky_dragon', 'sparky_dragon']
  },
  'g9-inequalities': {
    id: 'g9-inequalities',
    name: 'Inequality Labyrinth',
    grade: 9,
    topicId: 'inequalities',
    bgClass: 'bg-playful-dots bg-orange-50',
    nodeColor: 'orange',
    emoji: '🚧',
    monsterNames: ['Boundary Slime', 'Maze Ogre', 'Interval Sprite', 'Shaded Gargoyle', 'Inequality Boss'],
    monsterIds: ['muddy_slime', 'fluffy_ogre', 'muddy_slime', 'fluffy_ogre', 'fluffy_ogre']
  },

  // === GRADE 10 ===
  'g10-trigonometry': {
    id: 'g10-trigonometry',
    name: 'Trigonometry Peak',
    grade: 10,
    topicId: 'trigonometry',
    bgClass: 'bg-playful-dots bg-sky-50',
    nodeColor: 'blue',
    emoji: '⛰️',
    monsterNames: ['Sine Slime', 'Cosine Fox', 'Tangent Wyvern', 'Peak Golem', 'Trig Sage Boss'],
    monsterIds: ['muddy_slime', 'ember_fox', 'sparky_dragon', 'bramble_golem', 'sparky_dragon']
  },
  'g10-circles': {
    id: 'g10-circles',
    name: 'Infinite Circles',
    grade: 10,
    topicId: 'circles',
    bgClass: 'bg-playful-dots bg-red-50',
    nodeColor: 'orange',
    emoji: '⭕',
    monsterNames: ['Radial Slime', 'Chord Imp', 'Secant Sprite', 'Sector Gargoyle', 'Pi Master Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'fluffy_ogre', 'fluffy_ogre']
  },
  'g10-geometry': {
    id: 'g10-geometry',
    name: 'Coordinate Crypt',
    grade: 10,
    topicId: 'geometry',
    bgClass: 'bg-playful-dots bg-slate-100',
    nodeColor: 'purple',
    emoji: '💀',
    monsterNames: ['Grid Slime', 'Tomb Imp', 'Axis Sprite', 'Catacomb Ogre', 'Necromancer Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'fluffy_ogre', 'fluffy_ogre']
  },

  // === GRADE 11 ===
  'g11-complex': {
    id: 'g11-complex',
    name: 'Complex Number Sea',
    grade: 11,
    topicId: 'complex',
    bgClass: 'bg-playful-dots bg-teal-50',
    nodeColor: 'blue',
    emoji: '🌊',
    monsterNames: ['i-Slime', 'Imaginary Sprite', 'Real Golem', 'Complex Wyvern', 'Elder Kraken Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'bramble_golem', 'sparky_dragon', 'sparky_dragon']
  },
  'g11-logarithms': {
    id: 'g11-logarithms',
    name: 'Log Lair',
    grade: 11,
    topicId: 'logarithms',
    bgClass: 'bg-playful-dots bg-amber-50',
    nodeColor: 'yellow',
    emoji: '🪵',
    monsterNames: ['Base Slime', 'Log Imp', 'Exponent Sprite', 'Natural Dryad', 'Logarithm Lord Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'bramble_golem', 'bramble_golem']
  },
  'g11-sequences': {
    id: 'g11-sequences',
    name: 'Sequence Springs',
    grade: 11,
    topicId: 'sequences',
    bgClass: 'bg-playful-dots bg-indigo-50',
    nodeColor: 'purple',
    emoji: '⛲',
    monsterNames: ['Series Slime', 'Limit Imp', 'Sigma Golem', 'Infinite Wyvern', 'Fibonacci Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'bramble_golem', 'sparky_dragon', 'sparky_dragon']
  },

  // === GRADE 12 ===
  'g12-limits': {
    id: 'g12-limits',
    name: 'Infinity Edge',
    grade: 12,
    topicId: 'limits',
    bgClass: 'bg-playful-dots bg-sky-50',
    nodeColor: 'blue',
    emoji: '☁️',
    monsterNames: ['Limit Slime', 'Infinity Sprite', 'Asymptote Gargoyle', 'Void Wyvern', 'Sage Supreme Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'fluffy_ogre', 'sparky_dragon', 'sparky_dragon']
  },
  'g12-derivatives': {
    id: 'g12-derivatives',
    name: 'Derivative Canyon',
    grade: 12,
    topicId: 'derivatives',
    bgClass: 'bg-playful-dots bg-red-50',
    nodeColor: 'orange',
    emoji: '📉',
    monsterNames: ['Tangent Slime', 'Slope Imp', 'Differential Sprite', 'Canyon Golem', 'Newton Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'bramble_golem', 'bramble_golem']
  },
  'g12-integrals': {
    id: 'g12-integrals',
    name: 'Integral Obelisk Field',
    grade: 12,
    topicId: 'integrals',
    bgClass: 'bg-playful-dots bg-yellow-50',
    nodeColor: 'yellow',
    emoji: '🏛️',
    monsterNames: ['Area Slime', 'Riemann Sprite', 'Volume Golem', 'Obelisk Knight', 'Leibniz Boss'],
    monsterIds: ['muddy_slime', 'muddy_slime', 'bramble_golem', 'sparky_dragon', 'sparky_dragon']
  }
};
