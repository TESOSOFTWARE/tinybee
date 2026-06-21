'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Trash2, Plus, Download, Upload, RotateCcw, Edit3, Check, X, Film, HelpCircle, GraduationCap, Sparkles, Loader2, Search, Copy, Globe, ImageOff, RefreshCw, Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/UI/Button';
import { Card } from '@/components/UI/Card';
import { getYouTubeEmbedUrl } from '@/data/video_quests';
import { WorldConfig, WORLDS_DATABASE } from '@/data/worlds';

const normalizeGrade = (g: string | number | null | undefined): string => {
  if (g === null || g === undefined) return '';
  const s = String(g).trim();
  return (s === '0' || s.toUpperCase() === 'K') ? 'K' : s;
};

const getGradeOrder = (g: string | number | null | undefined): number => {
  const norm = normalizeGrade(g);
  if (!norm) return 999;
  if (norm === 'K') return 0;
  const num = parseInt(norm, 10);
  return isNaN(num) ? 999 : num;
};

const guessEmoji = (title: string, words: string[]): string => {
  const t = (title || '').toLowerCase();
  const w = (words || []).map(x => (x || '').toLowerCase());
  if (t.includes('school') || t.includes('class') || w.includes('pencil') || w.includes('book')) return '🎒';
  if (t.includes('home') || t.includes('room') || t.includes('house') || w.includes('bed') || w.includes('chair')) return '🏠';
  if (t.includes('food') || t.includes('eat') || w.includes('apple') || w.includes('banana')) return '🍎';
  if (t.includes('animal') || t.includes('pet') || w.includes('dog') || w.includes('cat')) return '🐱';
  if (t.includes('body') || t.includes('face') || w.includes('nose') || w.includes('eye')) return '👃';
  if (t.includes('nature') || t.includes('garden') || w.includes('tree') || w.includes('flower')) return '🌳';
  if (t.includes('clothes') || t.includes('wear') || w.includes('shirt') || w.includes('pants')) return '👕';
  if (t.includes('toy') || t.includes('game') || w.includes('doll') || w.includes('ball')) return '🧸';
  return '🌍';
};

const cleanWorldName = (title: string): string => {
  let name = (title || '')
    .replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF]/g, '') // remove emojis
    .replace(/for kids/gi, '')
    .replace(/vocabulary/gi, '')
    .replace(/words/gi, '')
    .replace(/learning/gi, '')
    .replace(/english/gi, '')
    .replace(/sticker/gi, '')
    .replace(/lesson/gi, '')
    .replace(/video/gi, '')
    .replace(/must-know/gi, '')
    .replace(/must know/gi, '')
    .replace(/[|&;$%@"<>()+,]/g, '') // remove special chars
    .trim();
  
  // Capitalize words nicely
  name = name.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
  
  if (!name || name.length < 3) {
    name = "New Topic";
  }
  return name;
};

const generateSlug = (name: string): string => {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};

const categorizeVideoInWorld = (
  title: string,
  description: string,
  words: string[],
  worlds: any[]
): string | undefined => {
  const cleanTitle = (title || '').toLowerCase();
  const cleanDesc = (description || '').toLowerCase();
  const cleanWords = (words || []).map(w => (w || '').toLowerCase());

  let bestWorldId: string | undefined = undefined;
  let bestScore = 0;

  const keywordMap: Record<string, string[]> = {
    // Kindergarten
    'colors-shapes': ['color', 'shape', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'circle', 'square', 'triangle', 'rectangle', 'oval', 'heart', 'star', 'diamond'],
    'family-pets': ['family', 'mother', 'father', 'brother', 'sister', 'grandma', 'grandpa', 'parent', 'baby', 'pet', 'dog', 'cat', 'bird', 'fish', 'rabbit', 'hamster', 'puppy', 'kitten'],
    'fruit-veggies': ['fruit', 'vegetable', 'veggies', 'apple', 'banana', 'orange', 'strawberry', 'grape', 'lemon', 'food', 'eat', 'carrot', 'broccoli', 'potato', 'tomato', 'onion'],
    'toys-games': ['toy', 'game', 'balloon', 'doll', 'puzzle', 'play', 'teddy', 'kite'],
    'body-parts': ['body', 'nose', 'ear', 'eye', 'hand', 'foot', 'mouth', 'face', 'tooth', 'teeth', 'hair', 'finger', 'toe', 'shoulder', 'knee'],
    'body-senses': ['sense', 'smell', 'taste', 'touch', 'hear', 'sight', 'feel', 'tongue', 'skin', 'nose', 'eyes', 'ears'],
    'nature-garden': ['garden', 'nature', 'sun', 'rain', 'tree', 'flower', 'grass', 'leaf', 'plant', 'dirt', 'soil', 'bug', 'bee'],
    'my-house': ['house', 'room', 'kitchen', 'bedroom', 'bathroom', 'living room', 'door', 'window', 'wall', 'floor', 'home'],
    'basic-clothing': ['clothes', 'clothing', 'sock', 'shoes', 'hat', 'shirt', 'pants', 'skirt', 'dress', 'jacket', 'wear'],
    'days-numbers': ['day', 'number', 'count', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'week', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],

    // Grade 1
    'home-furniture': ['home', 'furniture', 'house', 'room', 'chair', 'table', 'window', 'door', 'bed', 'sofa', 'kitchen', 'bathroom'],
    'school-supplies': ['school', 'pencil', 'eraser', 'notebook', 'ruler', 'backpack', 'crayon', 'classroom', 'teacher', 'student', 'book'],
    'farm-animals': ['animal', 'zoo', 'wild', 'farm', 'sea', 'lion', 'tiger', 'elephant', 'monkey', 'giraffe', 'zebra', 'bear', 'cow', 'sheep', 'pig', 'chicken'],
    'action-verbs': ['action', 'verb', 'run', 'jump', 'walk', 'sing', 'dance', 'read', 'write', 'draw', 'swim', 'fly', 'melting', 'spinning', 'bubbling', 'bouncing', 'floating'],
    'actions': ['action', 'verb', 'run', 'jump', 'walk', 'sing', 'dance', 'read', 'write', 'draw', 'swim', 'fly', 'melting', 'spinning', 'bubbling', 'bouncing', 'floating'],
    'clothing': ['clothing', 'clothes', 'shirt', 'pants', 'coat', 'jacket', 'shoes', 'socks', 'dress', 'skirt', 'wear'],
    'hygiene-grooming': ['hygiene', 'grooming', 'hair', 'nail', 'clipper', 'clip', 'grip', 'bud', 'comb', 'brush', 'soap', 'clean', 'wash', 'bath', 'shampoo', 'toothpaste', 'personal care'],
    'playground-park': ['playground', 'park', 'swing', 'slide', 'seesaw', 'sandbox', 'fountain', 'outdoor', 'play', 'bench'],
    'insects-bugs': ['insect', 'bug', 'ant', 'bee', 'spider', 'caterpillar', 'butterfly', 'ladybug', 'fly', 'beetle', 'worm'],
    'food-meals': ['food', 'meal', 'breakfast', 'lunch', 'dinner', 'snack', 'bread', 'rice', 'soup', 'egg', 'milk', 'water', 'fruit', 'vegetable'],
    'feelings-emotions': ['feeling', 'emotion', 'happy', 'sad', 'angry', 'scared', 'excited', 'tired', 'surprised', 'worried', 'proud'],

    // Grade 2
    'wild-animals': ['animal', 'zoo', 'wild', 'forest', 'jungle', 'lion', 'tiger', 'elephant', 'monkey', 'giraffe', 'zebra', 'bear', 'kangaroo', 'koala'],
    'food-drinks': ['food', 'drink', 'beverage', 'water', 'juice', 'milk', 'soda', 'tea', 'coffee', 'apple', 'banana', 'burger', 'pizza', 'sandwich', 'bread', 'cheese'],
    'hobbies-sports': ['hobby', 'sport', 'game', 'play', 'soccer', 'football', 'basketball', 'tennis', 'baseball', 'running', 'swimming', 'reading', 'drawing', 'painting'],
    'places-town': ['town', 'city', 'place', 'store', 'shop', 'school', 'library', 'hospital', 'park', 'station', 'bank', 'post office', 'supermarket'],
    'weather-seasons': ['weather', 'season', 'spring', 'summer', 'autumn', 'fall', 'winter', 'hot', 'cold', 'sunny', 'rainy', 'snowy', 'windy', 'cloudy'],
    'weather': ['weather', 'nature', 'sun', 'moon', 'star', 'cloud', 'rain', 'snow', 'wind', 'storm', 'breeze', 'blizzard', 'drizzle', 'hurricane', 'tornado'],
    'jobs-occupations': ['job', 'occupation', 'profession', 'teacher', 'doctor', 'nurse', 'firefighter', 'police', 'pilot', 'chef', 'artist', 'scientist', 'builder'],
    'vehicles-travel': ['vehicle', 'travel', 'car', 'bus', 'train', 'plane', 'airplane', 'boat', 'ship', 'truck', 'bicycle', 'motorcycle'],
    'plants-nature': ['plant', 'nature', 'tree', 'flower', 'grass', 'leaf', 'root', 'seed', 'garden', 'forest', 'soil'],
    'construction-materials': ['construct', 'build', 'material', 'brick', 'stone', 'wood', 'metal', 'steel', 'cement', 'concrete', 'glass', 'nail', 'hammer', 'tool'],
    'clothing-accessories': ['clothing', 'accessory', 'coat', 'jacket', 'shoes', 'boots', 'hat', 'scarf', 'gloves', 'belt', 'bag', 'wallet', 'umbrella', 'sunglasses'],

    // Grade 3
    'sea-creatures': ['sea', 'ocean', 'creature', 'fish', 'shark', 'whale', 'dolphin', 'octopus', 'crab', 'jellyfish', 'starfish', 'turtle', 'shell', 'coral'],
    'household-chores': ['chore', 'household', 'clean', 'sweep', 'dust', 'wash', 'vacuum', 'tidy', 'fold', 'iron', 'mop', 'trash', 'dishes'],
    'birds-insects': ['bird', 'insect', 'feather', 'wing', 'nest', 'robin', 'eagle', 'sparrow', 'owl', 'ant', 'bee', 'butterfly', 'beetle'],
    'hobbies-games': ['hobby', 'game', 'toy', 'play', 'board game', 'video game', 'chess', 'puzzle', 'craft', 'musical', 'instrument'],
    'places-nature': ['nature', 'place', 'mountain', 'river', 'lake', 'forest', 'valley', 'cave', 'camp', 'hike', 'trail', 'woods'],
    'health-body': ['health', 'body', 'fit', 'exercise', 'diet', 'vitamin', 'doctor', 'ill', 'sick', 'medicine', 'healthy', 'rest', 'sleep'],
    'school-subjects': ['school', 'subject', 'math', 'science', 'history', 'geography', 'reading', 'writing', 'art', 'music', 'physical education', 'pe'],

    // Grade 4
    'nature-landforms': ['landform', 'mountain', 'valley', 'canyon', 'plateau', 'plain', 'desert', 'river', 'waterfall', 'island', 'peninsula', 'earth', 'geography'],
    'cooking-utensils': ['cook', 'utensil', 'kitchen', 'recipe', 'pot', 'pan', 'knife', 'spoon', 'fork', 'bowl', 'plate', 'bake', 'boil', 'fry', 'stir'],
    'health-medicine': ['health', 'medicine', 'doctor', 'nurse', 'hospital', 'clinic', 'symptom', 'fever', 'cough', 'cold', 'pill', 'bandage', 'prescription'],
    'office-tech': ['office', 'technology', 'computer', 'laptop', 'keyboard', 'mouse', 'monitor', 'printer', 'desk', 'file', 'folder', 'email', 'internet'],
    'synonyms-antonyms': ['synonym', 'antonym', 'opposite', 'same', 'similar', 'meaning', 'word match', 'vocabulary'],
    'animal-habitats': ['habitat', 'biome', 'ecosystem', 'desert', 'forest', 'tundra', 'rainforest', 'grassland', 'wetland', 'cave', 'nest', 'burrow'],
    'shopping-money': ['shop', 'money', 'buy', 'sell', 'price', 'cost', 'store', 'market', 'cash', 'coin', 'bill', 'receipt', 'spend', 'save'],
    'space-planets': ['space', 'planet', 'solar system', 'sun', 'moon', 'star', 'orbit', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'],
    'safety-rules': ['safety', 'rule', 'warn', 'danger', 'hazard', 'caution', 'safe', 'sign', 'emergency', 'protect', 'prevent'],
    'holidays-festivals': ['holiday', 'festival', 'celebrate', 'party', 'custom', 'tradition', 'parade', 'feast', 'decoration', 'event', 'new year', 'christmas'],

    // Grade 5
    'space-astronomy': ['space', 'astronomy', 'universe', 'galaxy', 'star', 'telescope', 'astronaut', 'orbit', 'satellite', 'gravity', 'constellation', 'comet', 'asteroid'],
    'animals-habitats': ['animal', 'habitat', 'ecosystem', 'adaptation', 'predator', 'prey', 'wildlife', 'biodiversity'],
    'materials-textures': ['material', 'texture', 'rough', 'smooth', 'soft', 'hard', 'wood', 'stone', 'fabric', 'leather', 'metal', 'plastic', 'glass', 'cotton', 'wool'],
    'musical-instruments': ['musical', 'instrument', 'guitar', 'piano', 'violin', 'drum', 'flute', 'trumpet', 'horn', 'brass', 'string', 'wind', 'percussion', 'play'],
    'prefixes-suffixes': ['prefix', 'suffix', 'root word', 'morphology', 'linguistics', 'affix', 'grammar', 'spelling'],
    'weather-disasters': ['disaster', 'extreme weather', 'hurricane', 'tornado', 'earthquake', 'volcano', 'flood', 'drought', 'storm', 'tsunami', 'avalanche'],
    'occupations-careers': ['occupation', 'career', 'profession', 'business', 'office', 'corporate', 'manager', 'executive', 'hire', 'work', 'job'],
    'geography-travel': ['geography', 'travel', 'continent', 'country', 'city', 'map', 'atlas', 'voyage', 'journey', 'passport', 'border'],
    'hobbies-recreation': ['hobby', 'recreation', 'leisure', 'creative', 'art', 'photography', 'craft', 'hiking', 'camping', 'gardening', 'collecting'],
    'adjectives-adverbs': ['adjective', 'adverb', 'describe', 'modifier', 'grammar', 'parts of speech', 'qualifier', 'intensifier'],

    // Grade 6
    'descriptive-adjectives': ['adjective', 'describe', 'descriptor', 'trait', 'quality', 'characteristic', 'vivid', 'expressive'],
    'science-lab': ['science', 'lab', 'laboratory', 'experiment', 'beaker', 'flask', 'microscope', 'test tube', 'safety goggles', 'chemical', 'hypothesis', 'data'],
    'travel-adventure': ['travel', 'adventure', 'explore', 'journey', 'trip', 'expedition', 'passport', 'luggage', 'hotel', 'flight', 'destination'],
    'sports-recreation': ['sport', 'recreation', 'game', 'play', 'match', 'athlete', 'coach', 'tournament', 'score', 'team', 'fitness'],
    'compound-words': ['compound', 'word', 'combine', 'blend', 'linguistic', 'structure', 'grammar'],
    'digital-media': ['digital', 'media', 'internet', 'social media', 'online', 'website', 'stream', 'blog', 'video', 'network', 'software'],
    'architecture-buildings': ['architecture', 'building', 'structure', 'pillar', 'arch', 'monument', 'blueprint', 'design', 'construction', 'tower', 'bridge'],
    'environment-conservation': ['environment', 'conservation', 'save', 'protect', 'recycle', 'pollution', 'waste', 'energy', 'resources', 'green', 'sustainability'],
    'human-body-systems': ['system', 'body', 'anatomy', 'skeletal', 'muscular', 'respiratory', 'circulatory', 'digestive', 'nervous', 'organ', 'bone', 'muscle'],
    'hobbies-crafts': ['hobby', 'craft', 'diy', 'pottery', 'knitting', 'weaving', 'woodworking', 'design', 'make', 'create', 'artisan'],

    // Grade 7
    'environment-pollution': ['environment', 'pollution', 'global warming', 'climate change', 'waste', 'recycling', 'emissions', 'carbon footprint', 'ecosystem'],
    'media-communication': ['media', 'communication', 'journalism', 'press', 'report', 'broadcast', 'news', 'interview', 'advertising', 'public relations', 'speech'],
    'human-anatomy': ['anatomy', 'body', 'organ', 'brain', 'heart', 'lungs', 'stomach', 'liver', 'kidney', 'skeleton', 'tissue', 'cell'],
    'phrasal-verbs': ['verb', 'phrasal', 'idiom', 'grammar', 'preposition', 'particle', 'action'],
    'time-measurements': ['time', 'measurement', 'measure', 'unit', 'metric', 'scale', 'weight', 'height', 'volume', 'distance', 'second', 'minute', 'hour', 'calendar'],
    'social-issues': ['social', 'issue', 'society', 'community', 'empathy', 'volunteer', 'charity', 'philanthropy', 'diversity', 'equality', 'poverty'],
    'history-cultures': ['history', 'culture', 'heritage', 'civilization', 'ancient', 'monument', 'tradition', 'archaeology', 'dynasty', 'empire', 'historical'],
    'computer-science': ['computer', 'programming', 'code', 'algorithm', 'software', 'database', 'network', 'system', 'binary', 'logic', 'internet'],
    'literature-genres': ['literature', 'genre', 'fiction', 'nonfiction', 'prose', 'poetry', 'drama', 'biography', 'novel', 'short story', 'literary'],
    'debate-reasoning': ['debate', 'reasoning', 'logic', 'argument', 'claim', 'counterclaim', 'evidence', 'persuade', 'rhetoric', 'opinion'],

    // Grade 8
    'history-archaeology': ['history', 'archaeology', 'excavation', 'artifact', 'ancient', 'fossil', 'dynasty', 'era', 'historical', 'civilization'],
    'law-justice': ['law', 'justice', 'court', 'trial', 'judge', 'jury', 'verdict', 'legal', 'statute', 'constitution', 'rights', 'crime', 'attorney'],
    'advanced-verbs': ['verb', 'action', 'narrative', 'express', 'grammar', 'literary', 'academic'],
    'academic-collocations': ['academic', 'collocation', 'phrase', 'vocabulary', 'writing', 'scholarly'],
    'idioms-expressions': ['idiom', 'expression', 'phrase', 'figurative', 'meaning', 'slang', 'saying'],
    'psychology-behavior-g8': ['psychology', 'behavior', 'mind', 'mental', 'cognitive', 'motivation', 'personality', 'emotion', 'trait', 'brain'],
    'astronomy-physics': ['astronomy', 'physics', 'gravity', 'velocity', 'force', 'energy', 'matter', 'star', 'galaxy', 'universe', 'cosmic', 'orbit'],
    'global-economics': ['economics', 'global', 'trade', 'inflation', 'market', 'commerce', 'tariff', 'finance', 'import', 'export', 'economy'],
    'literary-analysis': ['literary', 'analysis', 'theme', 'motif', 'symbol', 'plot', 'character', 'setting', 'criticism', 'narrative', 'structure'],
    'rhetoric-speech': ['rhetoric', 'speech', 'persuasion', 'orator', 'debate', 'argument', 'discourse', 'delivery', 'elocution'],

    // Grade 9
    'literary-devices': ['literary', 'device', 'metaphor', 'simile', 'alliteration', 'hyperbole', 'personification', 'irony', 'symbolism', 'imagery'],
    'business-careers': ['business', 'career', 'corporate', 'office', 'profession', 'marketing', 'finance', 'management', 'industry', 'job', 'employment'],
    'art-design': ['art', 'design', 'aesthetic', 'medium', 'painting', 'sculpture', 'photography', 'composition', 'creativity', 'exhibition'],
    'tech-internet': ['technology', 'tech', 'internet', 'network', 'algorithm', 'software', 'data', 'encryption', 'security', 'digital', 'hardware'],
    'sat-verbs': ['sat', 'exam', 'test', 'verb', 'vocabulary', 'academic', 'high-frequency'],
    'philosophy-ethics': ['philosophy', 'ethics', 'moral', 'dilemma', 'virtue', 'logic', 'proof', 'reasoning', 'existential', 'truth', 'value'],
    'public-speaking': ['speech', 'speaking', 'presentation', 'oratory', 'keynote', 'audience', 'stage', 'delivery', 'rhetoric', 'microphone'],
    'environmental-science': ['environment', 'science', 'ecology', 'sustainability', 'biodiversity', 'conservation', 'climate', 'pollution', 'ecosystem'],
    'world-history': ['history', 'world', 'treaty', 'pact', 'alliance', 'dynasty', 'empire', 'sovereignty', 'revolution', 'colonialism'],
    'sociology-culture': ['sociology', 'culture', 'society', 'social', 'structure', 'norm', 'tradition', 'ritual', 'community', 'diversity'],

    // Grade 10
    'philosophy-beliefs': ['philosophy', 'belief', 'tenet', 'doctrine', 'creed', 'ideology', 'logic', 'truth', 'ethics', 'morality'],
    'global-issues': ['global', 'issue', 'humanitarian', 'treaty', 'rights', 'sovereignty', 'poverty', 'crisis', 'diplomacy', 'conflict'],
    'psychology-behavior': ['psychology', 'behavior', 'cognitive', 'mental', 'perception', 'therapy', 'motivation', 'mind', 'clinical'],
    'government-politics': ['government', 'politics', 'bill', 'law', 'constitution', 'vote', 'election', 'democracy', 'state', 'policy', 'senate', 'congress'],
    'sat-adjectives': ['sat', 'exam', 'test', 'adjective', 'vocabulary', 'academic', 'high-frequency'],
    'ethics-morality': ['ethics', 'morality', 'moral', 'virtue', 'right', 'wrong', 'duty', 'obligation', 'conduct', 'value', 'justice'],
    'media-literacy': ['media', 'literacy', 'bias', 'censor', 'journalism', 'news', 'report', 'source', 'propaganda', 'information', 'broadcast'],
    'scientific-vocabulary': ['scientific', 'vocabulary', 'research', 'experiment', 'hypothesis', 'variable', 'method', 'empirical', 'theory', 'data'],
    'microeconomics': ['economics', 'microeconomics', 'supply', 'demand', 'price', 'market', 'consumer', 'firm', 'production', 'cost', 'utility'],
    'advanced-composition': ['composition', 'writing', 'essay', 'thesis', 'citation', 'draft', 'outline', 'rhetoric', 'structure', 'argument'],

    // Grade 11
    'economics-finance': ['economics', 'finance', 'asset', 'inflation', 'stock', 'market', 'fiscal', 'monetary', 'capital', 'investment', 'budget'],
    'science-innovation': ['science', 'innovation', 'technology', 'invention', 'patent', 'discovery', 'research', 'engineering', 'development', 'design'],
    'culture-society': ['culture', 'society', 'social', 'ritual', 'tradition', 'norm', 'assimilation', 'diversity', 'custom', 'civilization'],
    'advanced-nouns': ['noun', 'grammar', 'abstract', 'concept', 'paradox', 'dilemma', 'synergy', 'archetype'],
    'sat-nouns': ['sat', 'exam', 'test', 'noun', 'vocabulary', 'academic', 'high-frequency'],
    'critical-theory': ['critical theory', 'theory', 'critique', 'structuralism', 'paradigm', 'analysis', 'literary criticism', 'deconstruction', 'analytical'],
    'academic-verbs': ['verb', 'academic', 'scholar', 'synthesize', 'evaluate', 'construct', 'substantiate', 'analyze', 'formulate', 'interpret'],
    'legal-terminology': ['legal', 'law', 'court', 'lawsuit', 'contract', 'tort', 'attorney', 'jurisdiction', 'liability', 'protocol'],
    'advanced-rhetoric': ['rhetoric', 'persuasion', 'logos', 'ethos', 'pathos', 'stylistic', 'oratory', 'discourse', 'argument'],
    'international-relations': ['international', 'relations', 'diplomacy', 'treaty', 'sovereignty', 'global', 'alliance', 'statecraft', 'policy'],

    // Grade 12
    'scholarly-jargon': ['scholarly', 'jargon', 'hermeneutics', 'paradigm', 'episteme', 'heuristic', 'academic', 'theory', 'critique', 'discourse'],
    'abstract-concepts': ['abstract', 'concept', 'duality', 'ambiguity', 'existentialism', 'subtext', 'essence', 'philosophical'],
    'professional-vocab': ['professional', 'vocabulary', 'career', 'delegation', 'synergy', 'milestone', 'strategy', 'leadership', 'management'],
    'advanced-synonyms': ['synonym', 'word match', 'vocabulary', 'nuance', 'connotation', 'academic', 'writing'],
    'gre-mastery': ['gre', 'sat', 'exam', 'test', 'vocabulary', 'mastery', 'scholarly', 'advanced'],
    'grammar': ['grammar', 'syntax', 'punctuation', 'usage', 'academic', 'structure', 'mechanics'],
    'epistemology': ['epistemology', 'knowledge', 'truth', 'belief', 'validation', 'justification', 'skepticism', 'cognition', 'philosophy'],
    'postmodern-vocab': ['postmodern', 'deconstruction', 'criticism', 'nihilism', 'pluralism', 'subjective', 'theory', 'critique'],
    'research-methodologies': ['research', 'methodology', 'qualitative', 'quantitative', 'mixed-methods', 'data', 'analysis', 'survey', 'empirical', 'study'],
    'scientific-paradigms': ['paradigm', 'scientific', 'theory', 'empirical', 'verification', 'shift', 'hypothesis', 'scientific logic', 'validation']
  };

  worlds.forEach(w => {
    let score = 0;
    const wName = (w.name || '').toLowerCase();
    const wTopic = (w.topicId || '').toLowerCase();
    const wDesc = (w.description || '').toLowerCase();

    const wNameWords = wName.split(/[\s&/,-]+/).filter((word: string) => word.length > 2);
    wNameWords.forEach((word: string) => {
      if (cleanTitle.includes(word)) score += 15;
      if (cleanDesc.includes(word)) score += 3;
      if (cleanWords.some(wrd => wrd.includes(word) || word.includes(wrd))) score += 10;
    });

    if (wTopic && wTopic.length > 2) {
      if (cleanTitle.includes(wTopic)) score += 15;
      if (cleanDesc.includes(wTopic)) score += 3;
      if (cleanWords.some(wrd => wrd.includes(wTopic) || wTopic.includes(wrd))) score += 10;
    }

    const wDescWords = wDesc.split(/[\s.,&/,-]+/).filter((word: string) => word.length > 3);
    wDescWords.forEach((word: string) => {
      if (cleanTitle.includes(word)) score += 5;
      if (cleanDesc.includes(word)) score += 1;
      if (cleanWords.some(wrd => wrd.includes(word) || word.includes(wrd))) score += 3;
    });

    Object.entries(keywordMap).forEach(([key, wordsList]) => {
      if (wTopic.includes(key) || wName.includes(key)) {
        wordsList.forEach(keyword => {
          if (cleanTitle.includes(keyword)) score += 12;
          if (cleanDesc.includes(keyword)) score += 2;
          if (cleanWords.some(wrd => wrd.includes(keyword) || keyword.includes(wrd))) score += 8;
        });
      }
    });

    if (score > bestScore) {
      bestScore = score;
      bestWorldId = w.topicId;
    }
  });

  return bestScore >= 8 ? bestWorldId : undefined;
};


// Local storage keys
const STORAGE_KEYS = {
  videoQuests: 'custom_video_quests',
  englishQuestions: 'custom_english_questions',
  mathQuestions: 'custom_math_questions',
  worlds: 'custom_worlds'
};

// Helper mock extractor database for YouTube analysis simulation
const mockExtractVideoData = (videoUrl: string, grade: number) => {
  // If it matches the demo short
  if (videoUrl.includes('uR7bSJYQEc0')) {
    return {
      title: "Household Vocabulary Stickers 🧸",
      channel: "@PRES.ENGLISH",
      words: ["Clothes pin", "Bobby pin", "Chapstick", "Q-tip", "Dustpan"],
      questions: [
        {
          question: "What do you use to hang wet clothes outside to dry?",
          choices: ["Clothes pin", "Bobby pin", "Chapstick", "Dustpan"],
          correctAnswer: "Clothes pin",
          explanation: "A clothes pin is used to clamp wet clothes on a line.",
          imageUrl: "/clothespin.png"
        },
        {
          question: "What small metal clip keeps loose hair in place?",
          choices: ["Clothes pin", "Bobby pin", "Chapstick", "Q-tip"],
          correctAnswer: "Bobby pin",
          explanation: "A bobby pin is a type of hairpin to hold hair in place.",
          imageUrl: "/bobbypin.png"
        },
        {
          question: "What soothing balm protects dry, chapped lips?",
          choices: ["Clothes pin", "Bobby pin", "Chapstick", "Dustpan"],
          correctAnswer: "Chapstick",
          explanation: "Chapstick is a brand of lip balm used to prevent dry lips.",
          imageUrl: "/chapstick.png"
        },
        {
          question: "What cotton swab is used for cleaning ears or detailed painting?",
          choices: ["Bobby pin", "Chapstick", "Q-tip", "Dustpan"],
          correctAnswer: "Q-tip",
          explanation: "A Q-tip is a cotton swab used for hygienic cleaning.",
          imageUrl: "/qtip.png"
        },
        {
          question: "What flat shovel helps sweep up dirt and dust from the floor?",
          choices: ["Clothes pin", "Bobby pin", "Chapstick", "Dustpan"],
          correctAnswer: "Dustpan",
          explanation: "A dustpan is a shovel-shaped pan for sweeping up dust.",
          imageUrl: "/dustpan.png"
        }
      ]
    };
  }

  // Grade-based mock items
  if (grade === 0) {
    return {
      title: "Kindergarten Phonics & Alphabet Blends 🎨",
      channel: "@BabyAcapellaPhonics",
      words: ["Apple", "Balloon", "Crayon", "Dolphin", "Elephant"],
      questions: [
        {
          question: "What delicious red fruit starts with the letter A?",
          choices: ["Apple", "Orange", "Banana", "Grape"],
          correctAnswer: "Apple",
          explanation: "Apple starts with the letter A and is red.",
          imageUrl: ""
        },
        {
          question: "Which colorful object floats in the air when filled with helium?",
          choices: ["Balloon", "Rock", "Book", "Chair"],
          correctAnswer: "Balloon",
          explanation: "A balloon is light and floats when filled with helium.",
          imageUrl: ""
        },
        {
          question: "What wax writing tool do you use to color pictures?",
          choices: ["Crayon", "Fork", "Key", "Spoon"],
          correctAnswer: "Crayon",
          explanation: "A crayon is a wax pencil used for coloring.",
          imageUrl: ""
        },
        {
          question: "Which friendly sea mammal loves jumping out of water?",
          choices: ["Dolphin", "Lion", "Rabbit", "Owl"],
          correctAnswer: "Dolphin",
          explanation: "Dolphins are intelligent aquatic mammals.",
          imageUrl: ""
        },
        {
          question: "What giant gray animal has large ears and a long trunk?",
          choices: ["Elephant", "Cat", "Bee", "Ant"],
          correctAnswer: "Elephant",
          explanation: "An elephant is a large mammal with a trunk.",
          imageUrl: ""
        }
      ]
    };
  } else if (grade >= 1 && grade <= 2) {
    return {
      title: "Classroom Objects & Basic Adjectives 🎒",
      channel: "@EnglishForKids",
      words: ["Backpack", "Sharpener", "Whiteboard", "Notebook", "Scissors"],
      questions: [
        {
          question: "What do you carry on your back to bring books to school?",
          choices: ["Backpack", "Desk", "Pencil", "Ruler"],
          correctAnswer: "Backpack",
          explanation: "A backpack is a pack worn on the back to carry school supplies.",
          imageUrl: ""
        },
        {
          question: "What tiny device makes dull wooden pencils sharp again?",
          choices: ["Sharpener", "Eraser", "Glue", "Tape"],
          correctAnswer: "Sharpener",
          explanation: "A sharpener shaves wooden pencils to a sharp point.",
          imageUrl: ""
        },
        {
          question: "Where does the teacher write with dry-erase markers?",
          choices: ["Whiteboard", "Floor", "Window", "Ceiling"],
          correctAnswer: "Whiteboard",
          explanation: "Whiteboards are smooth boards for markers.",
          imageUrl: ""
        },
        {
          question: "Where do you write notes and solve homework spelling tasks?",
          choices: ["Notebook", "Calendar", "Poster", "Map"],
          correctAnswer: "Notebook",
          explanation: "A notebook is a book with blank pages for notes.",
          imageUrl: ""
        },
        {
          question: "What dual-bladed cutting tool helps cut paper shapes?",
          choices: ["Scissors", "Hammer", "Screwdriver", "Wrench"],
          correctAnswer: "Scissors",
          explanation: "Scissors have two blades pivoted together to cut paper.",
          imageUrl: ""
        }
      ]
    };
  } else if (grade >= 3 && grade <= 5) {
    return {
      title: "Interactive Action Verbs Lesson ⚽",
      channel: "@BrainpopGrammar",
      words: ["Sprint", "Ponder", "Devour", "Ascend", "Construct"],
      questions: [
        {
          question: "Which word means to run at maximum speed for a short distance?",
          choices: ["Sprint", "Ponder", "Sleep", "Sit"],
          correctAnswer: "Sprint",
          explanation: "To sprint is to run very fast over a short distance.",
          imageUrl: ""
        },
        {
          question: "To think about something carefully and deeply is to:",
          choices: ["Ponder", "Sprint", "Throw", "Ignore"],
          correctAnswer: "Ponder",
          explanation: "Ponder means to weigh in the mind or reflect on.",
          imageUrl: ""
        },
        {
          question: "Which verb describes eating food hungrily and quickly?",
          choices: ["Devour", "Sip", "Cook", "Bake"],
          correctAnswer: "Devour",
          explanation: "Devour means to consume greedily or eat up ravenously.",
          imageUrl: ""
        },
        {
          question: "To go up or climb a mountain or stairs is to:",
          choices: ["Ascend", "Descend", "Fall", "Trip"],
          correctAnswer: "Ascend",
          explanation: "To ascend is to rise or climb upward.",
          imageUrl: ""
        },
        {
          question: "What is another word for building or putting together a structure?",
          choices: ["Construct", "Demolish", "Paint", "Sell"],
          correctAnswer: "Construct",
          explanation: "Construct means to build or form by putting parts together.",
          imageUrl: ""
        }
      ]
    };
  } else {
    return {
      title: "Advanced Reading Comprehension Vocabulary 🏛️",
      channel: "@CrashCourseLiterature",
      words: ["Scrutinize", "Kakotopia", "Anachronistic", "Obfuscate", "Cacophony"],
      questions: [
        {
          question: "What word means to examine or inspect something closely and thoroughly?",
          choices: ["Scrutinize", "Ignore", "Obfuscate", "Glance"],
          correctAnswer: "Scrutinize",
          explanation: "Scrutinize means to examine minutely or examine closely.",
          imageUrl: ""
        },
        {
          question: "A state or place of extreme misery and corruption (opposite of utopia) is:",
          choices: ["Kakotopia / Dystopia", "Utopia", "Oasis", "Quintessential"],
          correctAnswer: "Kakotopia / Dystopia",
          explanation: "Kakotopia (or dystopia) is characterized by extreme misery and oppression.",
          imageUrl: ""
        },
        {
          question: "Something that is out of its correct historical time period is:",
          choices: ["Anachronistic", "Contemporary", "Futuristic", "Ancient"],
          correctAnswer: "Anachronistic",
          explanation: "Anachronistic means out of chronological order or inappropriate to the time.",
          imageUrl: ""
        },
        {
          question: "To make something unclear, dark, or hard to understand is to:",
          choices: ["Obfuscate", "Clarify", "Scrutinize", "Illustrate"],
          correctAnswer: "Obfuscate",
          explanation: "Obfuscate means to render obscure, unclear, or unintelligible.",
          imageUrl: ""
        },
        {
          question: "A harsh, discordant mixture of loud sounds is a:",
          choices: ["Cacophony", "Symphony", "Melody", "Silence"],
          correctAnswer: "Cacophony",
          explanation: "A cacophony is a harsh, discordant mixture of sounds.",
          imageUrl: ""
        }
      ]
    };
  }
};

const migrateCustomQuests = (quests: any) => {
  if (!quests || typeof quests !== 'object') return quests;
  const updated = { ...quests };
  let modified = false;

  // Video mapping for all known videos (playlist and animal quizzes)
  const videoMapping: { [videoId: string]: { grade: number, topicId: string, level: number } } = {
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

  const getVidId = (url: string): string => {
    if (!url) return '';
    const m1 = url.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (m1) return m1[1];
    const m2 = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (m2) return m2[1];
    const m3 = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (m3) return m3[1];
    const m4 = url.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
    if (m4) return m4[1];
    return '';
  };

  const entriesToMigrate: { originalKey: string; quest: any; target: { grade: number; topicId: string; level: number } }[] = [];

  Object.entries(updated).forEach(([key, q]: [string, any]) => {
    if (!q || typeof q !== 'object') return;

    let target = null;
    const vidId = getVidId(q.videoUrl || '');
    
    if (vidId && videoMapping[vidId]) {
      target = videoMapping[vidId];
    } else if (q.channel === '@EnglishMirage' || (q.title && q.title.includes('EnglishMirage'))) {
      target = { grade: 1, topicId: "farm-animals", level: 1 };
    } else if (q.channel === '@EnglishWordsCorner' || (q.title && q.title.includes('EnglishWordsCorner'))) {
      const wordsLower = (q.words || []).map((w: string) => w.toLowerCase());
      if (wordsLower.includes('dog') || wordsLower.includes('cat')) {
        target = { grade: 1, topicId: "farm-animals", level: 2 };
      } else if (wordsLower.includes('tiger') || wordsLower.includes('lion')) {
        target = { grade: 2, topicId: "wild-animals", level: 2 };
      } else if (wordsLower.includes('sheep') || wordsLower.includes('fox')) {
        target = { grade: 1, topicId: "farm-animals", level: 3 };
      } else if (wordsLower.includes('cow') || wordsLower.includes('pig')) {
        target = { grade: 1, topicId: "farm-animals", level: 4 };
      }
    }

    if (target && (q.topicId !== target.topicId || q.grade !== target.grade)) {
      entriesToMigrate.push({
        originalKey: key,
        quest: q,
        target
      });
    }
  });

  if (entriesToMigrate.length === 0) return quests;

  entriesToMigrate.forEach(({ originalKey, quest, target }) => {
    delete updated[originalKey];
    const match = originalKey.match(/^(\d+)-(\d+)$/);
    if (match) {
      const g = match[1];
      const l = match[2];
      if (l === '1') {
        delete updated[g];
      }
    }

    const migratedQuest = {
      ...quest,
      grade: target.grade,
      topicId: target.topicId
    };

    const newTopicKey = `${target.topicId}-${target.level}`;
    updated[newTopicKey] = migratedQuest;

    if (target.level === 1) {
      updated[target.topicId] = migratedQuest;
      updated[String(target.grade)] = migratedQuest;
    }

    const fallbackKey = `${target.grade}-${target.level}`;
    updated[fallbackKey] = migratedQuest;
    modified = true;
  });

  return updated;
};

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'math' | 'english' | 'math-worlds' | 'english-worlds'>('english');
  const [englishSubTab, setEnglishSubTab] = useState<'learning' | 'standard'>('learning');

  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // States for data
  const [videoQuests, setVideoQuests] = useState<any>({});
  const [mathQuestions, setMathQuestions] = useState<any[]>([]);
  const [englishQuestions, setEnglishQuestions] = useState<any[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [customWorlds, setCustomWorlds] = useState<Record<string, WorldConfig>>({});
  const [poolSearchQuery, setPoolSearchQuery] = useState('');
  const [poolSelectedGrade, setPoolSelectedGrade] = useState('');
  const [poolSelectedWorld, setPoolSelectedWorld] = useState('');
  const [poolCurrentPage, setPoolCurrentPage] = useState(1);
  const [poolPageSize, setPoolPageSize] = useState<string>('20');
  const [selectedQuestKeys, setSelectedQuestKeys] = useState<string[]>([]);
  const [bulkTargetGrade, setBulkTargetGrade] = useState('1');
  const [bulkTargetWorld, setBulkTargetWorld] = useState('');
  const [deletedWorldIds, setDeletedWorldIds] = useState<string[]>([]);
  const [hiddenGradeIds, setHiddenGradeIds] = useState<string[]>([]);
  const [draggingLevelNum, setDraggingLevelNum] = useState<number | null>(null);
  const [draggedOverLevelNum, setDraggedOverLevelNum] = useState<number | null>(null);
  const [worldFilterGrade, setWorldFilterGrade] = useState<string>('');
  const [worldSearchQuery, setWorldSearchQuery] = useState<string>('');
  const [worldsViewMode, setWorldsViewMode] = useState<'grid' | 'drag'>('grid');
  const [dragOverGrade, setDragOverGrade] = useState<string | null>(null);
  const [dragViewFilterGrade, setDragViewFilterGrade] = useState<string>('');

  // Hierarchical selection states
  const [selectedSubject, setSelectedSubject] = useState<'math' | 'english'>('english');
  const [selectedGradeId, setSelectedGradeId] = useState<string | number | null>(null);
  const [selectedWorldId, setSelectedWorldId] = useState<string | null>(null);
  const [selectedLevelNum, setSelectedLevelNum] = useState<number | null>(null);

  // Metadata edit states
  const [editingGradeMetadata, setEditingGradeMetadata] = useState<{ grade: string | number, title: string, description: string } | null>(null);

  // AI Extraction states
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractionStep, setExtractionStep] = useState('');

  // Edit item states
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);
  const [questionForm, setQuestionForm] = useState({
    id: '',
    grade: 1,
    topic: 'vocabulary',
    difficulty: 'easy' as 'easy' | 'medium' | 'hard',
    question: '',
    choices: ['', '', '', ''],
    correctAnswer: '',
    hint: '',
    explanation: '',
    imageUrl: ''
  });

  const [isAddingQuestion, setIsAddingQuestion] = useState(false);

  // Learning quest edit states
  const [questForm, setQuestForm] = useState({
    grade: 1,
    videoUrl: '',
    title: '',
    channel: '',
    words: [] as string[],
    wordsInput: '',
    transcriptText: '',
    questions: [] as any[]
  });

  const [imageSource, setImageSource] = useState('antigravity');
  const [batchImageSource, setBatchImageSource] = useState('antigravity');
  const [singleImageSources, setSingleImageSources] = useState<Record<number, string>>({});
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);
  const [isRegeneratingBatch, setIsRegeneratingBatch] = useState(false);
  const [isRegeneratingSingle, setIsRegeneratingSingle] = useState<number | null>(null);
  const [missingIconsQueue, setMissingIconsQueue] = useState<string[]>([]);
  const [isUploadingImage, setIsUploadingImage] = useState<number | null>(null);
  const [extractionMethod, setExtractionMethod] = useState<'auto' | 'ai' | 'manual'>('auto');

  // Bulk playlist import states
  const [isBulkImportOpen, setIsBulkImportOpen] = useState(false);
  const [playlistInput, setPlaylistInput] = useState('');
  const [isFetchingPlaylist, setIsFetchingPlaylist] = useState(false);
  const [extractedPlaylistVideos, setExtractedPlaylistVideos] = useState<any[]>([]);
  const [selectedPlaylistVideos, setSelectedPlaylistVideos] = useState<number[]>([]);
  const [bulkStartingLevelNum, setBulkStartingLevelNum] = useState<number>(1);
  const [bulkImportGrade, setBulkImportGrade] = useState<string | number>('1');
  const [bulkImportWorld, setBulkImportWorld] = useState<string>('auto');
  const [bulkImportImageSource, setBulkImportImageSource] = useState<string>('antigravity');
  const [isImportingBulk, setIsImportingBulk] = useState(false);
  const [bulkImportProgress, setBulkImportProgress] = useState<{ current: number; total: number; log: string[] }>({
    current: 0,
    total: 0,
    log: []
  });

  const logEndRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [bulkImportProgress.log]);

  // Scan & Fix Broken Images state
  const [isScanningImages, setIsScanningImages] = useState(false);
  const [isShowingMissingIconsModal, setIsShowingMissingIconsModal] = useState(false);
  const [scanImageProgress, setScanImageProgress] = useState<{
    phase: 'idle' | 'scanning' | 'review' | 'fixing' | 'done';
    total: number;
    checked: number;
    fixed: number;
    log: string[];
  }>({
    phase: 'idle',
    total: 0,
    checked: 0,
    fixed: 0,
    log: []
  });
  // Full list of broken image entries discovered during scan
  const [brokenImageItems, setBrokenImageItems] = useState<{
    questKey: string;
    qIdx: number;
    word: string;
    imageUrl: string;
    questTitle: string;
    selected: boolean;
    imageSource: string;
    newImageUrl?: string; // set after regen
    status: 'pending' | 'fixing' | 'done' | 'error';
  }[]>([]);
  const scanLogEndRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scanLogEndRef.current) {
      scanLogEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scanImageProgress.log]);

  // World edit states
  const [editingWorldId, setEditingWorldId] = useState<string | null>(null);
  const [isAddingWorld, setIsAddingWorld] = useState(false);
  const [worldForm, setWorldForm] = useState<Partial<WorldConfig>>({
    id: '',
    name: '',
    grade: 'K',
    topicId: '',
    bgClass: 'bg-playful-dots bg-indigo-50',
    nodeColor: 'blue',
    emoji: '✨',
    monsterNames: ['', '', '', '', ''],
    monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'muddy_slime', 'sparky_dragon'],
    subject: 'math',
    totalLevels: 10,
    badge: '',
    bgStyle: '',
    textStyle: '',
    description: ''
  });
  const [aiProvider, setAiProvider] = useState<'gemini' | 'openai'>('gemini');
  const [aiApiKey, setAiApiKey] = useState('');

  // Hydrate data
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 1. Video Quests
      const savedQuests = localStorage.getItem(STORAGE_KEYS.videoQuests);
      if (savedQuests) {
        try {
          let parsed = JSON.parse(savedQuests);
          
          // Migrate any custom quests to their proper topicId/grade structures
          const migrated = migrateCustomQuests(parsed);
          let modified = migrated !== parsed;
          if (modified) {
            parsed = migrated;
          }

          const currentSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uzgrmusaxsgirshvkwzx.supabase.co';
          // Normalize all custom quests on load to use correct Supabase URL and bucket
          const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || 'vocab-icons';
          Object.keys(parsed).forEach(key => {
            if (parsed[key] && parsed[key].questions) {
              parsed[key].questions = parsed[key].questions.map((q: any) => {
                if (q.imageUrl) {
                  const match = q.imageUrl.match(/https?:\/\/[^\/]+\.supabase\.co\/storage\/v1\/(object|render\/image)\/public\/[^\/]+\/(.+)$/);
                  if (match) {
                    const filename = match[2];
                    const targetUrl = `${currentSupabaseUrl}/storage/v1/object/public/${bucketName}/${filename}`;
                    if (q.imageUrl !== targetUrl) {
                      q.imageUrl = targetUrl;
                      modified = true;
                    }
                  }
                }
                return q;
              });
            }
          });
          setVideoQuests(parsed);
          if (modified) {
            localStorage.setItem(STORAGE_KEYS.videoQuests, JSON.stringify(parsed));
          }
        } catch (e) { }
      } else {
        import('@/data/video_quests').then((mod) => {
          setVideoQuests(mod.VIDEO_QUESTS_DATABASE);
        });
      }

      const savedAiKey = localStorage.getItem('tinybee_ai_api_key');
      if (savedAiKey) {
        setAiApiKey(savedAiKey);
      }
      const savedAiProvider = localStorage.getItem('tinybee_ai_provider');
      if (savedAiProvider) {
        setAiProvider(savedAiProvider as 'gemini' | 'openai');
      }
      const savedExtractionMethod = localStorage.getItem('tinybee_extraction_method');
      if (savedExtractionMethod) {
        setExtractionMethod(savedExtractionMethod as 'auto' | 'ai' | 'manual');
      }

      const savedQueue = localStorage.getItem('tinybee_missing_icons');
      if (savedQueue) {
        try { setMissingIconsQueue(JSON.parse(savedQueue)); } catch (e) { }
      }

      // 2. Math
      const savedMath = localStorage.getItem(STORAGE_KEYS.mathQuestions);
      if (savedMath) {
        try { setMathQuestions(JSON.parse(savedMath)); } catch (e) { }
      } else {
        import('@/data/questions').then((mod) => {
          setMathQuestions(mod.mathQuestions);
        });
      }

      // 3. English
      const savedEnglish = localStorage.getItem(STORAGE_KEYS.englishQuestions);
      if (savedEnglish) {
        try { setEnglishQuestions(JSON.parse(savedEnglish)); } catch (e) { }
      } else {
        import('@/data/english_questions').then((mod) => {
          setEnglishQuestions(mod.englishQuestions);
        });
      }
      // 4. Worlds
      const savedWorlds = localStorage.getItem(STORAGE_KEYS.worlds);
      if (savedWorlds) {
        try { setCustomWorlds(JSON.parse(savedWorlds)); } catch (e) { }
      }
      const savedDeletedWorlds = localStorage.getItem('deleted_world_ids');
      if (savedDeletedWorlds) {
        try { setDeletedWorldIds(JSON.parse(savedDeletedWorlds)); } catch (e) { }
      }
      const savedHiddenGrades = localStorage.getItem('hidden_grade_ids');
      if (savedHiddenGrades) {
        try { setHiddenGradeIds(JSON.parse(savedHiddenGrades)); } catch (e) { }
      }
    }
  }, []);

  // Auto-select level and topic when subject or grade changes
  useEffect(() => {
    if (selectedGradeId !== null) {
      if (selectedLevelNum === null) {
        setSelectedLevelNum(1);
      }

      const currentSubject = (activeTab === 'math' || activeTab === 'math-worlds') ? 'math' : 'english';
      const availableWorlds = Object.values({ ...WORLDS_DATABASE, ...customWorlds })
        .filter(w => normalizeGrade(w.grade) === normalizeGrade(selectedGradeId) && (w.subject || 'math') === currentSubject && !deletedWorldIds.includes(w.id));

      if (availableWorlds.length > 0) {
        const isAlreadyValid = availableWorlds.some(w => w.topicId === selectedWorldId);
        if (!isAlreadyValid) {
          setSelectedWorldId(availableWorlds[0].topicId);
        }
      } else {
        setSelectedWorldId(null);
      }
    } else {
      if (selectedWorldId !== null) setSelectedWorldId(null);
      if (selectedLevelNum !== null) setSelectedLevelNum(null);
    }
  }, [selectedGradeId, selectedSubject, activeTab, customWorlds, deletedWorldIds]);

  // Synchronize poolSelectedGrade with selectedGradeId so that choosing a grade in the sidebar
  // updates the Quest Pools Dashboard filter and its Auto-Organize button.
  useEffect(() => {
    if (selectedGradeId !== null) {
      setPoolSelectedGrade(String(selectedGradeId));
    } else {
      setPoolSelectedGrade('');
    }
  }, [selectedGradeId]);

  // Load quest form fields on grade/level/world changes
  useEffect(() => {
    if (!selectedGradeId || !selectedLevelNum) return;
    const db = videoQuests;
    let q = null;

    // Try topic-scoped key first: e.g. 'spelling-3'
    if (selectedWorldId) {
      const topicKey = `${selectedWorldId}-${selectedLevelNum}`;
      if (db[topicKey]) q = db[topicKey];
    }

    // Fallback to grade-level key: e.g. '1-3'
    if (!q) {
      const specificKey = `${selectedGradeId}-${selectedLevelNum}`;
      if (db[specificKey]) {
        q = db[specificKey];
      } else if (selectedLevelNum === 1) {
        q = db[selectedGradeId] || db[`${selectedGradeId}-1`];
      }
    }

    if (q) {
      setQuestForm({
        grade: selectedGradeId === 'K' ? 0 : (Number(selectedGradeId) || 1),
        videoUrl: q.videoUrl || '',
        title: q.title || '',
        channel: q.channel || '',
        words: q.words || [],
        wordsInput: (q.words || []).join(', '),
        transcriptText: q.transcriptText || '',
        questions: q.questions || []
      });
    } else {
      setQuestForm({
        grade: selectedGradeId === 'K' ? 0 : (Number(selectedGradeId) || 1),
        videoUrl: '',
        title: '',
        channel: '',
        words: [],
        wordsInput: '',
        transcriptText: '',
        questions: []
      });
    }
  }, [selectedGradeId, selectedLevelNum, selectedWorldId, videoQuests]);

  const showNotification = (msg: string, isError = false) => {
    if (isError) {
      setErrorMsg(msg);
      setTimeout(() => setErrorMsg(null), 4000);
    } else {
      setSuccessMsg(msg);
      setTimeout(() => setSuccessMsg(null), 4000);
    }
  };

  // Step 1: Run AI Video Extractor to get Metadata & Words
  const handleAutoExtractStep1 = async () => {
    const rawUrl = questForm.videoUrl.trim();
    if (!rawUrl) {
      showNotification("Please enter a YouTube video URL first!", true);
      return;
    }

    const normalizedUrl = getYouTubeEmbedUrl(rawUrl);

    setIsExtracting(true);
    setExtractionStep("Fetching YouTube page details & metadata...");

    try {
      const fetchPromise = fetch(`/api/extract-video?videoUrl=${encodeURIComponent(normalizedUrl)}`)
        .then(res => {
          if (!res.ok) throw new Error("Failed to extract details from YouTube");
          return res.json();
        });

      await new Promise(resolve => setTimeout(resolve, 600));
      setExtractionStep("Analyzing video stream and metadata tags...");

      await new Promise(resolve => setTimeout(resolve, 600));
      setExtractionStep("Transcribing speech and extracting transcripts...");

      const data = await fetchPromise;

      if (data.error) {
        throw new Error(data.error);
      }

      let extractedWords = data.words || [];
      let finalWordsInput = extractedWords.join(', ');

      if (extractionMethod === 'manual') {
        // Do not overwrite words
        extractedWords = questForm.words;
        finalWordsInput = questForm.wordsInput;
        showNotification("Metadata extracted. Skipped vocabulary extraction (Manual mode).");
      } else if (extractionMethod === 'ai' && aiApiKey && data.transcriptText) {
        setExtractionStep("Asking AI to extract vocabulary...");
        try {
          const prompt = `Extract exactly 5 important english vocabulary words from the following video transcript. Return them as a simple JSON array of strings (e.g. ["word1", "word2"]). Transcript: ${data.transcriptText}`;
          const aiRes = await fetch('/api/ai-extract', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              transcriptText: data.transcriptText,
              aiProvider,
              aiApiKey
            })
          });
          const aiData = await aiRes.json();
          if (aiData.error) throw new Error(aiData.error);

          let parsedWords: string[] = aiData.words || [];

          if (parsedWords.length > 0) {
            extractedWords = parsedWords;
            finalWordsInput = parsedWords.join(', ');
            showNotification("AI successfully extracted vocabulary!");
          } else {
            showNotification("AI returned empty result, falling back to auto mode.", true);
          }
        } catch (err: any) {
          console.error("AI Extraction failed:", err);
          showNotification(`AI Extraction failed: ${err.message}. Falling back to auto mode.`, true);
        }
      } else if (extractionMethod === 'ai' && !aiApiKey) {
        showNotification("Missing AI API Key. Falling back to auto mode.", true);
      }

      setQuestForm({
        ...questForm,
        videoUrl: normalizedUrl,
        title: data.title || '',
        channel: data.channel || '',
        words: extractedWords,
        wordsInput: finalWordsInput,
        transcriptText: data.transcriptText || ''
        // preserve questions if any
      });

      // Auto-check the bucket for the newly extracted words
      if (extractedWords.length > 0) {
        try {
          const { supabase, BUCKET_NAME } = await import('@/lib/supabase');
          const { data: bucketData, error: bucketError } = await supabase.storage.from(BUCKET_NAME).list();
          if (!bucketError && bucketData) {
            const existingFiles = bucketData.map((f: any) => f.name);
            const newMissing: string[] = [];
            extractedWords.forEach((word: string) => {
              const expectedFileName = `${word.toLowerCase().trim().replace(/\s+/g, '_')}.png`;
              if (!existingFiles.includes(expectedFileName)) {
                newMissing.push(word);
              }
            });
            if (newMissing.length > 0) {
              // Merge with existing queue, avoiding duplicates
              const mergedQueue = Array.from(new Set([...missingIconsQueue, ...newMissing]));
              setMissingIconsQueue(mergedQueue);
              localStorage.setItem('tinybee_missing_icons', JSON.stringify(mergedQueue));
            }
          }
        } catch (err) {
          console.error("Failed silent bucket check", err);
        }
      }

      setIsExtracting(false);
      showNotification("Video content extracted! Please review words below.");
    } catch (e: any) {
      console.error(e);
      setIsExtracting(false);
      showNotification(e.message || "Failed to extract video content. Please try another URL.", true);
    }
  };

  // Step 2: Generate Questions
  const handleGenerateQuestionsStep2 = async () => {
    const wordsToProcess = questForm.wordsInput.split(',').map(w => w.trim()).filter(w => w.length > 0);
    if (wordsToProcess.length === 0) {
      showNotification("Please enter at least one vocabulary word.", true);
      return;
    }

    setIsExtracting(true);
    setExtractionStep("Generating AI quiz questions and fetching images...");

    try {
      const res = await fetch('/api/extract-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          words: wordsToProcess,
          transcriptText: questForm.transcriptText,
          imageSource,
          title: questForm.title
        })
      });

      if (!res.ok) throw new Error("Failed to generate questions");
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (data.missingWords && data.missingWords.length > 0) {
        setMissingIconsQueue(prev => {
          const updated = Array.from(new Set([...prev, ...data.missingWords]));
          localStorage.setItem('tinybee_missing_icons', JSON.stringify(updated));
          return updated;
        });
      }

      setQuestForm({
        ...questForm,
        wordsInput: wordsToProcess.join(', '),
        questions: data.questions || []
      });

      setIsExtracting(false);
      showNotification("Questions generated successfully!");
    } catch (e: any) {
      console.error(e);
      setIsExtracting(false);
      showNotification(e.message || "Failed to generate questions.", true);
    }
  };

  /**
   * Checks if an imageUrl is a working/visible image.
   * Handles iconify:, twemoji:, local (/...) and external URLs.
   */
  const isImageUrlBroken = async (imageUrl: string): Promise<boolean> => {
    if (!imageUrl) return true;
    // iconify/twemoji SVG URLs — extract real URL and check
    let testUrl = imageUrl;
    if (imageUrl.startsWith('iconify:')) {
      const firstUrl = imageUrl.substring(8).split('|')[0];
      testUrl = firstUrl;
    } else if (imageUrl.startsWith('twemoji:')) {
      testUrl = imageUrl.substring(8);
    } else if (imageUrl.startsWith('/')) {
      // Local static file — assume OK (can't HEAD check on server side from browser)
      return false;
    }
    if (!testUrl) return true;
    try {
      const res = await fetch(testUrl, { method: 'HEAD', signal: AbortSignal.timeout(5000) });
      return !res.ok;
    } catch {
      return true; // Network error = treat as broken
    }
  };

  const handleScanBrokenImages = async () => {
    const saved = localStorage.getItem(STORAGE_KEYS.videoQuests);
    if (!saved) {
      showNotification('No custom quests found in storage.', true);
      return;
    }
    let allQuests: Record<string, any>;
    try {
      allQuests = JSON.parse(saved);
    } catch {
      showNotification('Failed to parse saved quests.', true);
      return;
    }

    // Build a flat list of all question entries
    const entries: { questKey: string; qIdx: number; word: string; imageUrl: string; questTitle: string }[] = [];
    Object.entries(allQuests).forEach(([key, quest]: [string, any]) => {
      if (!quest || !Array.isArray(quest.questions)) return;
      quest.questions.forEach((q: any, idx: number) => {
        entries.push({
          questKey: key,
          qIdx: idx,
          word: q.correctAnswer || '',
          imageUrl: q.imageUrl || '',
          questTitle: quest.title || key
        });
      });
    });

    setScanImageProgress({ phase: 'scanning', total: entries.length, checked: 0, fixed: 0, log: [`🔍 Scanning ${entries.length} questions across all grades & levels...`] });
    setBrokenImageItems([]);

    const found: typeof brokenImageItems = [];
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const broken = await isImageUrlBroken(entry.imageUrl);
      if (broken) {
        found.push({
          ...entry,
          selected: true,
          imageSource: imageSource,
          status: 'pending'
        });
      }
      setScanImageProgress(prev => ({
        ...prev,
        checked: i + 1,
        log: (broken || i % 10 === 0)
          ? [...prev.log, broken
              ? `❌ "${entry.word}" — ${entry.questKey}`
              : `✓ ${i + 1}/${entries.length}`]
          : prev.log
      }));
    }

    setBrokenImageItems(found);
    setScanImageProgress(prev => ({
      ...prev,
      phase: 'review',
      log: [...prev.log, '', found.length === 0
        ? '🎉 All images are healthy! Nothing to fix.'
        : `⚠️ Found ${found.length} broken image(s). Review and select items to regenerate.`
      ]
    }));
  };

  const handleRegenerateSelected = async () => {
    const toFix = brokenImageItems.filter(it => it.selected);
    if (toFix.length === 0) {
      showNotification('No items selected.', true);
      return;
    }

    const saved = localStorage.getItem(STORAGE_KEYS.videoQuests);
    if (!saved) return;
    let allQuests: Record<string, any>;
    try { allQuests = JSON.parse(saved); } catch { return; }

    setScanImageProgress(prev => ({ ...prev, phase: 'fixing', fixed: 0, log: [...prev.log, '', `🔧 Regenerating ${toFix.length} selected image(s)...`] }));

    // Group selected items by questKey
    const byQuest = new Map<string, typeof toFix>();
    toFix.forEach(it => {
      if (!byQuest.has(it.questKey)) byQuest.set(it.questKey, []);
      byQuest.get(it.questKey)!.push(it);
    });

    let fixedCount = 0;
    const updatedQuests = { ...allQuests };

    for (const [questKey, items] of byQuest.entries()) {
      const quest = updatedQuests[questKey];
      if (!quest) continue;

      // Group by imageSource since user may have set different source per item
      const bySource = new Map<string, typeof items>();
      items.forEach(it => {
        if (!bySource.has(it.imageSource)) bySource.set(it.imageSource, []);
        bySource.get(it.imageSource)!.push(it);
      });

      for (const [src, srcItems] of bySource.entries()) {
        const words = srcItems.map(it => it.word).filter(Boolean);
        setScanImageProgress(prev => ({ ...prev, log: [...prev.log, `🔄 [${src}] "${questKey}": [${words.join(', ')}]`] }));

        // Mark as fixing
        setBrokenImageItems(prev => prev.map(it =>
          srcItems.some(s => s.questKey === it.questKey && s.qIdx === it.qIdx)
            ? { ...it, status: 'fixing' } : it
        ));

        try {
          const res = await fetch('/api/extract-video', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              words,
              transcriptText: quest.transcriptText || '',
              imageSource: src,
              title: quest.title || ''
            })
          });
          if (!res.ok) throw new Error(`API ${res.status}`);
          const data = await res.json();
          if (data.error) throw new Error(data.error);

          const regenMap: Record<string, string> = {};
          (data.questions || []).forEach((q: any) => {
            if (q.correctAnswer && q.imageUrl) regenMap[q.correctAnswer.toLowerCase()] = q.imageUrl;
          });

          srcItems.forEach(({ qIdx, word }) => {
            const newUrl = regenMap[word.toLowerCase()];
            if (newUrl && updatedQuests[questKey]?.questions?.[qIdx] !== undefined) {
              updatedQuests[questKey].questions[qIdx].imageUrl = newUrl;
              fixedCount++;
            }
          });

          // Mark as done with new URL
          setBrokenImageItems(prev => prev.map(it => {
            const match = srcItems.find(s => s.questKey === it.questKey && s.qIdx === it.qIdx);
            if (!match) return it;
            const newUrl = regenMap[it.word.toLowerCase()];
            return { ...it, status: newUrl ? 'done' : 'error', newImageUrl: newUrl };
          }));

          setScanImageProgress(prev => ({ ...prev, fixed: fixedCount, log: [...prev.log, `✅ Fixed ${srcItems.length} item(s) for "${questKey}"`] }));
        } catch (err: any) {
          setBrokenImageItems(prev => prev.map(it =>
            srcItems.some(s => s.questKey === it.questKey && s.qIdx === it.qIdx)
              ? { ...it, status: 'error' } : it
          ));
          setScanImageProgress(prev => ({ ...prev, log: [...prev.log, `⚠️ Failed for "${questKey}": ${err.message}`] }));
        }
      }
    }

    localStorage.setItem(STORAGE_KEYS.videoQuests, JSON.stringify(updatedQuests));
    setVideoQuests(updatedQuests);
    setScanImageProgress(prev => ({
      ...prev,
      phase: 'done',
      fixed: fixedCount,
      log: [...prev.log, '', `🎉 Done! Regenerated ${fixedCount} of ${toFix.length} selected image(s). Saved.`]
    }));
  };

  // Keep old auto-fix for reference (no longer used in UI)
  const handleScanAndFixBrokenImages = handleScanBrokenImages;

  const handleScanMissingIcons = async () => {
    try {
      const { supabase, BUCKET_NAME } = await import('@/lib/supabase');
      const { data, error } = await supabase.storage.from(BUCKET_NAME).list();

      if (error) throw error;

      const existingFiles = data.map((f: any) => f.name);
      const allMissing = new Set<string>();

      // Loop through all quests
      Object.values(videoQuests).forEach((quest: any) => {
        if (quest && quest.words) {
          quest.words.forEach((word: string) => {
            const expectedFileName = `${word.toLowerCase().trim().replace(/\s+/g, '_')}.png`;
            if (!existingFiles.includes(expectedFileName)) {
              allMissing.add(word);
            }
          });
        }
      });

      const missingArray = Array.from(allMissing);
      setMissingIconsQueue(missingArray);
      localStorage.setItem('tinybee_missing_icons', JSON.stringify(missingArray));

      showNotification(`Scan complete! Found ${missingArray.length} missing icons globally.`);
    } catch (e: any) {
      console.error(e);
      showNotification("Failed to scan missing icons.", true);
    }
  };

  // Save Learning Section changes
  const handleSaveQuest = () => {
    const finalVideoUrl = getYouTubeEmbedUrl(questForm.videoUrl);
    const updatedWords = questForm.wordsInput
      .split(',')
      .map(w => w.trim())
      .filter(w => w.length > 0);

    const newQuestObj = {
      grade: selectedGradeId,
      topicId: selectedWorldId || undefined,
      videoUrl: finalVideoUrl,
      title: questForm.title,
      channel: questForm.channel,
      transcriptText: questForm.transcriptText,
      words: updatedWords,
      questions: questForm.questions
    };

    // Update form state with the normalized URL
    setQuestForm(prev => ({ ...prev, videoUrl: finalVideoUrl }));

    const updatedQuests = { ...videoQuests };

    // Primary key: topic-scoped 'topicId-level' (e.g. 'spelling-3') — enables per-world levels
    if (selectedWorldId) {
      const topicKey = `${selectedWorldId}-${selectedLevelNum}`;
      updatedQuests[topicKey] = newQuestObj;
      // Also mirror level-1 under bare topicId key for fallback
      if (selectedLevelNum === 1) updatedQuests[selectedWorldId] = newQuestObj;
    }

    // Always also save grade-level key for backward compat (e.g. '1-3')
    const gradeKey = `${selectedGradeId}-${selectedLevelNum}`;
    updatedQuests[gradeKey] = newQuestObj;
    if (selectedLevelNum === 1) updatedQuests[selectedGradeId as string] = newQuestObj;

    setVideoQuests(updatedQuests);
    localStorage.setItem(STORAGE_KEYS.videoQuests, JSON.stringify(updatedQuests));
    const worldLabel = selectedWorldId ? ` (${selectedWorldId})` : '';
    showNotification(`Saved: Grade ${selectedGradeId}${worldLabel} Level ${selectedLevelNum}!`);
  };

  const handleReorderLevels = (sourceLvl: number, targetLvl: number) => {
    if (sourceLvl === targetLvl) return;

    const prefixKey = selectedWorldId ? selectedWorldId : String(selectedGradeId);
    
    // Get levels list
    const levelsWithContent: number[] = [];
    const prefix = selectedWorldId ? `${selectedWorldId}-` : `${selectedGradeId}-`;
    Object.keys(videoQuests).forEach(key => {
      if (key.startsWith(prefix)) {
        const parts = key.split('-');
        const num = parseInt(parts[parts.length - 1], 10);
        if (!isNaN(num)) {
          levelsWithContent.push(num);
        }
      }
    });
    const maxLvl = Math.max(10, ...levelsWithContent);
    const levels = Array.from({ length: maxLvl }, (_, i) => i + 1);

    // Get current quests
    const currentTopicQuests = levels.map(l => videoQuests[`${prefixKey}-${l}`] || null);

    // Move element helper
    const moveElement = <T,>(arr: T[], fromIndex: number, toIndex: number): T[] => {
      const element = arr[fromIndex];
      const newArr = [...arr];
      newArr.splice(fromIndex, 1);
      newArr.splice(toIndex, 0, element);
      return newArr;
    };

    const reorderedTopicQuests = moveElement(currentTopicQuests, sourceLvl - 1, targetLvl - 1);

    const updatedQuests = { ...videoQuests };

    // Update topic keys
    levels.forEach((l, idx) => {
      const newQuest = reorderedTopicQuests[idx];
      const key = `${prefixKey}-${l}`;
      if (newQuest) {
        updatedQuests[key] = newQuest;
      } else {
        delete updatedQuests[key];
      }
    });

    // Mirror topic level 1
    if (reorderedTopicQuests[0]) {
      updatedQuests[prefixKey] = reorderedTopicQuests[0];
    } else {
      delete updatedQuests[prefixKey];
    }

    // Update grade keys if worldId is set
    if (selectedWorldId) {
      const currentGradeQuests = levels.map(l => {
        const q = videoQuests[`${selectedGradeId}-${l}`];
        if (q && q.topicId === selectedWorldId) {
          return q;
        }
        return null;
      });

      const reorderedGradeQuests = moveElement(currentGradeQuests, sourceLvl - 1, targetLvl - 1);

      levels.forEach((l, idx) => {
        const newQuest = reorderedGradeQuests[idx];
        const key = `${selectedGradeId}-${l}`;
        if (newQuest) {
          updatedQuests[key] = newQuest;
        } else {
          const oldQuest = videoQuests[key];
          if (oldQuest && oldQuest.topicId === selectedWorldId) {
            delete updatedQuests[key];
          }
        }
      });

      // Mirror grade level 1
      const gKey = String(selectedGradeId);
      if (reorderedGradeQuests[0]) {
        updatedQuests[gKey] = reorderedGradeQuests[0];
      } else {
        const oldQuest = videoQuests[gKey];
        if (oldQuest && oldQuest.topicId === selectedWorldId) {
          delete updatedQuests[gKey];
        }
      }
    }

    setVideoQuests(updatedQuests);
    localStorage.setItem(STORAGE_KEYS.videoQuests, JSON.stringify(updatedQuests));
    
    // Automatically select the target level so the UI loads the dropped level's form
    setSelectedLevelNum(targetLvl);
    
    showNotification(`Reordered levels: Level ${sourceLvl} moved to Level ${targetLvl}`);
  };

  const getPlaylistId = (input: string): string => {
    if (!input) return '';
    input = input.trim();
    const match = input.match(/[&?]list=([^&]+)/);
    return match ? match[1] : input;
  };

  const handleFetchPlaylist = async () => {
    const pId = getPlaylistId(playlistInput);
    if (!pId) {
      showNotification("Please enter a YouTube playlist URL or ID!", true);
      return;
    }

    setIsFetchingPlaylist(true);
    setExtractedPlaylistVideos([]);
    setSelectedPlaylistVideos([]);
    try {
      const res = await fetch(`/api/extract-playlist?playlistId=${encodeURIComponent(pId)}`);
      if (!res.ok) {
        throw new Error(await res.text() || "Failed to fetch playlist items");
      }
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      if (!data.videos || data.videos.length === 0) {
        throw new Error("No videos found in this playlist.");
      }

      // Check existing video IDs to exclude from initial selection
      const existingIds = new Set<string>();
      Object.values(videoQuests).forEach((quest: any) => {
        if (quest && quest.videoUrl) {
          const match = quest.videoUrl.match(/(?:embed\/|v=|\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
          if (match) existingIds.add(match[1]);
        }
      });

      setExtractedPlaylistVideos(data.videos);
      
      const initialSelected: number[] = [];
      data.videos.forEach((video: any, idx: number) => {
        if (!existingIds.has(video.videoId)) {
          initialSelected.push(idx);
        }
      });
      setSelectedPlaylistVideos(initialSelected);
    } catch (e: any) {
      console.error(e);
      showNotification(e.message || "Failed to fetch playlist.", true);
    } finally {
      setIsFetchingPlaylist(false);
    }
  };

  const handleRunBulkImport = async () => {
    if (selectedPlaylistVideos.length === 0) {
      showNotification("No videos selected for import!", true);
      return;
    }

    setIsImportingBulk(true);
    setBulkImportProgress({
      current: 0,
      total: selectedPlaylistVideos.length,
      log: ["Starting bulk playlist import..."]
    });

    const updatedQuests = { ...videoQuests };

    // Get list of all English worlds for the target grade
    const targetWorldsForGrade = Object.values({ ...WORLDS_DATABASE, ...customWorlds })
      .filter(w => (w.subject || 'math') === 'english' && !deletedWorldIds.includes(w.id) && normalizeGrade(w.grade) === normalizeGrade(bulkImportGrade));

    try {
      for (let i = 0; i < selectedPlaylistVideos.length; i++) {
        const videoIdx = selectedPlaylistVideos[i];
        const video = extractedPlaylistVideos[videoIdx];
        
        try {
          // Check duplicates to prevent importing the same video multiple times
          const existingIds = new Set<string>();
          Object.values(updatedQuests).forEach((quest: any) => {
            if (quest && quest.videoUrl) {
              const match = quest.videoUrl.match(/(?:embed\/|v=|\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
              if (match) existingIds.add(match[1]);
            }
          });

          if (existingIds.has(video.videoId)) {
            setBulkImportProgress(prev => ({
              ...prev,
              log: [...prev.log, `⚠️ Skipping duplicate video: "${video.title}" (ID: ${video.videoId}) — already in library.`]
            }));
            continue;
          }

          // 1. Initial processing logs
          setBulkImportProgress(prev => ({
            ...prev,
            current: i + 1,
            log: [...prev.log, `[${i + 1}/${selectedPlaylistVideos.length}] Processing video: "${video.title}"...`]
          }));

          const videoUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
          const embedUrl = `https://www.youtube.com/embed/${video.videoId}`;

          // 2. Fetch video details & metadata from YouTube
          const extractRes = await fetch(`/api/extract-video?videoUrl=${encodeURIComponent(videoUrl)}&imageSource=${bulkImportImageSource}`);
          if (!extractRes.ok) {
            throw new Error(`Failed to extract video content for "${video.title}"`);
          }
          const extractData = await extractRes.json();
          if (extractData.error) throw new Error(extractData.error);

          // 3. Determine topic/world categorization
          let targetWorldId: string | undefined = undefined;
          let worldLabel = 'none';

          if (bulkImportWorld === 'auto') {
            const matchedWorldId = categorizeVideoInWorld(extractData.title, extractData.description || '', extractData.words || [], targetWorldsForGrade);
            if (matchedWorldId) {
              targetWorldId = matchedWorldId;
              const wName = targetWorldsForGrade.find(w => w.topicId === matchedWorldId)?.name || matchedWorldId;
              worldLabel = `${wName} (${matchedWorldId})`;
            } else {
              worldLabel = 'none';
            }
          } else if (bulkImportWorld !== 'none') {
            targetWorldId = bulkImportWorld;
            const wName = targetWorldsForGrade.find(w => w.topicId === bulkImportWorld)?.name || bulkImportWorld;
            worldLabel = `${wName} (${bulkImportWorld})`;
          }

          // 4. Find the next available level number
          let targetLevel = findNextAvailableLevel(
            String(bulkImportGrade),
            targetWorldId || '',
            updatedQuests,
            bulkStartingLevelNum
          );

          // Check target limit (totalLevels) dynamically
          const targetWorldObj = targetWorldId 
            ? Object.values({ ...WORLDS_DATABASE, ...customWorlds }).find(w => w.topicId === targetWorldId)
            : undefined;
          const maxWorldLevels = targetWorldObj?.totalLevels || 10;

          if (targetWorldId && (targetLevel === null || targetLevel > maxWorldLevels)) {
            // Topic has exceeded levels, demote to uncategorized (none)
            setBulkImportProgress(prev => ({
              ...prev,
              log: [...prev.log, `⚠️ World: ${worldLabel} has exceeded limit of ${maxWorldLevels} levels. Placing video without category...`]
            }));
            targetWorldId = undefined;
            worldLabel = 'none';
            targetLevel = findNextAvailableLevel(
              String(bulkImportGrade),
              '',
              updatedQuests,
              bulkStartingLevelNum
            );
          }

          if (targetLevel === null) {
            // If 1-10 is completely full for uncategorized too, look up to 1000
            for (let lvl = bulkStartingLevelNum; lvl <= 1000; lvl++) {
              const key = targetWorldId ? `${targetWorldId}-${lvl}` : `${bulkImportGrade}-${lvl}`;
              if (!updatedQuests[key]) {
                targetLevel = lvl;
                break;
              }
            }
          }

          if (targetLevel === null) {
            setBulkImportProgress(prev => ({
              ...prev,
              log: [...prev.log, `❌ Skipping video "${video.title}" because no available levels found (1-1000).`]
            }));
            continue;
          }

          // 5. Generate quiz questions
          const questionsRes = await fetch('/api/extract-video', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              words: extractData.words,
              transcriptText: extractData.transcriptText,
              imageSource: bulkImportImageSource,
              title: extractData.title
            })
          });
          if (!questionsRes.ok) {
            throw new Error(`Failed to generate quiz for "${extractData.title}"`);
          }
          const questionsData = await questionsRes.json();
          if (questionsData.error) throw new Error(questionsData.error);

          // Add any missing custom icons to queue
          if (questionsData.missingWords && questionsData.missingWords.length > 0) {
            setMissingIconsQueue(prev => {
              const updated = Array.from(new Set([...prev, ...questionsData.missingWords]));
              localStorage.setItem('tinybee_missing_icons', JSON.stringify(updated));
              return updated;
            });
          }

          // 6. Save quest object
          const numericGrade = bulkImportGrade === 'K' ? 0 : parseInt(String(bulkImportGrade), 10);
          const specificKey = targetWorldId
            ? `${targetWorldId}-${targetLevel}`
            : `${bulkImportGrade}-${targetLevel}`;

          const newQuestObj = {
            grade: numericGrade,
            topicId: targetWorldId || undefined,
            videoUrl: embedUrl,
            title: extractData.title || 'Lesson Video',
            channel: extractData.channel || '@YOUTUBE.CREATOR',
            transcriptText: extractData.transcriptText || '',
            words: extractData.words || [],
            questions: questionsData.questions || []
          };

          updatedQuests[specificKey] = newQuestObj;

          // Mirror under grade-level key if topic is set
          if (targetWorldId) {
            updatedQuests[`${bulkImportGrade}-${targetLevel}`] = newQuestObj;
          }

          if (targetLevel === 1) {
            if (targetWorldId) {
              updatedQuests[targetWorldId] = newQuestObj;
            }
            updatedQuests[bulkImportGrade as string] = newQuestObj;
          }

          setBulkImportProgress(prev => ({
            ...prev,
            log: [...prev.log, `✅ Success: Level ${targetLevel} in "${worldLabel}" (${extractData.words.length} words, ${questionsData.questions.length} questions)`]
          }));

        } catch (videoError: any) {
          console.error(`Error processing video:`, videoError);
          setBulkImportProgress(prev => ({
            ...prev,
            log: [...prev.log, `❌ Error processing "${video.title}": ${videoError.message || videoError}`]
          }));
        }
      }

      setVideoQuests(updatedQuests);
      localStorage.setItem(STORAGE_KEYS.videoQuests, JSON.stringify(updatedQuests));
      showNotification("Bulk import completed successfully!");

      setBulkImportProgress(prev => ({
        ...prev,
        log: [...prev.log, "🎉 All selected playlist items successfully imported! Reloading page in 2 seconds..."]
      }));

      setTimeout(() => {
        setIsBulkImportOpen(false);
        setIsImportingBulk(false);
        window.location.reload();
      }, 2000);

    } catch (e: any) {
      console.error("Bulk import error:", e);
      showNotification(e.message || "Bulk import failed.", true);
      setBulkImportProgress(prev => ({
        ...prev,
        log: [...prev.log, `❌ Error: ${e.message || 'Import failed.'}`]
      }));
      setIsImportingBulk(false);
    }
  };

  const handleRegenerateSelectedImages = async () => {
    if (selectedQuestions.length === 0) return;

    setIsRegeneratingBatch(true);
    showNotification("Generating new images for selected questions...");

    const wordsToProcess = selectedQuestions.map(idx => questForm.questions[idx].correctAnswer).filter(Boolean);

    try {
      const res = await fetch('/api/extract-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          words: wordsToProcess,
          transcriptText: questForm.transcriptText,
          imageSource: batchImageSource,
          title: questForm.title
        })
      });

      if (!res.ok) throw new Error("Failed to generate new images");
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Merge new image URLs safely
      const updatedQuestions = [...questForm.questions];

      data.questions?.forEach((newQ: any) => {
        // Find the index of the question that has this correctAnswer among the selected ones
        const targetIdx = selectedQuestions.find(idx => updatedQuestions[idx].correctAnswer === newQ.correctAnswer);
        if (targetIdx !== undefined && newQ.imageUrl) {
          updatedQuestions[targetIdx] = {
            ...updatedQuestions[targetIdx],
            imageUrl: newQ.imageUrl
          };
        }
      });

      if (data.missingWords && data.missingWords.length > 0) {
        setMissingIconsQueue(prev => {
          const updated = Array.from(new Set([...prev, ...data.missingWords]));
          localStorage.setItem('tinybee_missing_icons', JSON.stringify(updated));
          return updated;
        });
      }

      setQuestForm({ ...questForm, questions: updatedQuestions });
      setSelectedQuestions([]);
      showNotification("Images successfully regenerated for selected questions!");
    } catch (e: any) {
      console.error(e);
      showNotification(e.message || "Failed to regenerate images.", true);
    } finally {
      setIsRegeneratingBatch(false);
    }
  };

  const handleRegenerateSingleImage = async (qIdx: number) => {
    setIsRegeneratingSingle(qIdx);
    const wordToProcess = questForm.questions[qIdx].correctAnswer;
    if (!wordToProcess) {
      setIsRegeneratingSingle(null);
      return;
    }

    try {
      const res = await fetch('/api/extract-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          words: [wordToProcess],
          transcriptText: questForm.transcriptText,
          imageSource: singleImageSources[qIdx] || batchImageSource,
          title: questForm.title
        })
      });

      if (!res.ok) throw new Error("Failed to generate new image");
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (data.questions && data.questions.length > 0) {
        const newQ = data.questions[0];
        const updatedQuestions = [...questForm.questions];
        updatedQuestions[qIdx] = {
          ...updatedQuestions[qIdx],
          imageUrl: newQ.imageUrl,
          ipa: newQ.ipa
        };
        setQuestForm({ ...questForm, questions: updatedQuestions });
      }

      if (data.missingWords && data.missingWords.length > 0) {
        setMissingIconsQueue(prev => {
          const updated = Array.from(new Set([...prev, ...data.missingWords]));
          localStorage.setItem('tinybee_missing_icons', JSON.stringify(updated));
          return updated;
        });
      }
      showNotification("Successfully regenerated image!");
    } catch (e: any) {
      console.error(e);
      showNotification(e.message || "Failed to regenerate image", true);
    } finally {
      setIsRegeneratingSingle(null);
    }
  };

  const toggleQuestionSelection = (idx: number) => {
    setSelectedQuestions(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  // Quest questions
  const handleDeleteQuestQuestion = (qIdx: number) => {
    const updatedQs = questForm.questions.filter((_, idx) => idx !== qIdx);
    setQuestForm({ ...questForm, questions: updatedQs });
  };

  const handleAddQuestQuestion = () => {
    const newQ = {
      question: 'New Vocabulary Question?',
      choices: ['Choice A', 'Choice B', 'Choice C', 'Choice D'],
      correctAnswer: 'Choice A',
      explanation: 'Explanation text here.',
      imageUrl: ''
    };
    setQuestForm({ ...questForm, questions: [...questForm.questions, newQ] });
  };

  const handleQuestQuestionChange = (qIdx: number, field: string, value: any) => {
    const updatedQs = questForm.questions.map((q, idx) => {
      if (idx === qIdx) {
        return { ...q, [field]: value };
      }
      return q;
    });
    setQuestForm({ ...questForm, questions: updatedQs });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, qIdx: number, word: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      showNotification("Supabase is not configured yet. Please check .env.local", true);
      return;
    }

    setIsUploadingImage(qIdx);
    try {
      const { supabase, BUCKET_NAME } = await import('@/lib/supabase');

      const fileName = `${word.toLowerCase().trim().replace(/\s+/g, '_')}.png`;

      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(fileName, file, { upsert: true });

      if (error) throw error;

      const publicUrl = supabase.storage.from(BUCKET_NAME).getPublicUrl(fileName).data.publicUrl;

      handleQuestQuestionChange(qIdx, 'imageUrl', publicUrl);

      // Remove from missing queue if it was there
      setMissingIconsQueue(prev => {
        const newQueue = prev.filter(w => w !== word);
        localStorage.setItem('tinybee_missing_icons', JSON.stringify(newQueue));
        return newQueue;
      });

      showNotification(`Custom icon for "${word}" uploaded successfully!`);
    } catch (err: any) {
      console.error(err);
      showNotification("Failed to upload image: " + err.message, true);
    } finally {
      setIsUploadingImage(null);
    }
  };

  const handleQuestChoiceChange = (qIdx: number, cIdx: number, val: string) => {
    const updatedQs = questForm.questions.map((q, idx) => {
      if (idx === qIdx) {
        const newChoices = [...q.choices];
        newChoices[cIdx] = val;
        return { ...q, choices: newChoices };
      }
      return q;
    });
    setQuestForm({ ...questForm, questions: updatedQs });
  };

  // Manage Math/English questions pools
  const activeQuestions = activeTab === 'math' ? mathQuestions : englishQuestions;
  const filteredQuestions = activeQuestions.filter(
    q => normalizeGrade(q.grade) === normalizeGrade(selectedGradeId) && q.topic === selectedWorldId
  );

  const startEditQuestion = (q: any) => {
    setEditingQuestionId(q.id);
    setQuestionForm({
      id: q.id,
      grade: q.grade,
      topic: q.topic,
      difficulty: q.difficulty || 'easy',
      question: q.question,
      choices: q.choices && q.choices.length === 4 ? [...q.choices] : ['', '', '', ''],
      correctAnswer: q.correctAnswer,
      hint: q.hint || '',
      explanation: q.explanation || '',
      imageUrl: q.imageUrl || ''
    });
    setIsAddingQuestion(false);
  };

  const startAddQuestion = () => {
    setIsAddingQuestion(true);
    setEditingQuestionId(null);
    setQuestionForm({
      id: `${activeTab}-${selectedGradeId ?? 'x'}-${selectedWorldId ?? 'x'}-${Date.now()}`,
      grade: selectedGradeId === 'K' ? 0 : (Number(selectedGradeId) || 1),
      topic: selectedWorldId ?? '',
      difficulty: 'easy',
      question: '',
      choices: ['', '', '', ''],
      correctAnswer: '',
      hint: '',
      explanation: '',
      imageUrl: ''
    });
  };

  const handleDeleteQuestion = (qId: string) => {
    if (!window.confirm("Delete this question?")) return;

    if (activeTab === 'math') {
      const updated = mathQuestions.filter(q => q.id !== qId);
      setMathQuestions(updated);
      localStorage.setItem(STORAGE_KEYS.mathQuestions, JSON.stringify(updated));
    } else {
      const updated = englishQuestions.filter(q => q.id !== qId);
      setEnglishQuestions(updated);
      localStorage.setItem(STORAGE_KEYS.englishQuestions, JSON.stringify(updated));
    }
    showNotification("Question deleted!");
  };

  const saveQuestionForm = () => {
    if (!questionForm.question.trim()) {
      showNotification("Question text cannot be blank!", true);
      return;
    }
    if (questionForm.choices.some(c => !c.trim())) {
      showNotification("Please fill in all 4 options!", true);
      return;
    }
    if (!questionForm.choices.includes(questionForm.correctAnswer)) {
      showNotification("Correct answer must exactly equal one of the choices!", true);
      return;
    }

    if (isAddingQuestion) {
      if (activeTab === 'math') {
        const updated = [questionForm, ...mathQuestions];
        setMathQuestions(updated);
        localStorage.setItem(STORAGE_KEYS.mathQuestions, JSON.stringify(updated));
      } else {
        const updated = [questionForm, ...englishQuestions];
        setEnglishQuestions(updated);
        localStorage.setItem(STORAGE_KEYS.englishQuestions, JSON.stringify(updated));
      }
      setIsAddingQuestion(false);
      showNotification("Question added!");
    } else {
      if (activeTab === 'math') {
        const updated = mathQuestions.map(q => q.id === editingQuestionId ? { ...questionForm } : q);
        setMathQuestions(updated);
        localStorage.setItem(STORAGE_KEYS.mathQuestions, JSON.stringify(updated));
      } else {
        const updated = englishQuestions.map(q => q.id === editingQuestionId ? { ...questionForm } : q);
        setEnglishQuestions(updated);
        localStorage.setItem(STORAGE_KEYS.englishQuestions, JSON.stringify(updated));
      }
      setEditingQuestionId(null);
      showNotification("Question updated!");
    }
  };

  const handleResetToDefault = () => {
    if (!window.confirm("Are you sure you want to clear customizations and restore system default content?")) return;

    localStorage.removeItem(STORAGE_KEYS.videoQuests);
    localStorage.removeItem(STORAGE_KEYS.englishQuestions);
    localStorage.removeItem(STORAGE_KEYS.mathQuestions);
    window.location.reload();
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(
      JSON.stringify({ videoQuests, mathQuestions, englishQuestions }, null, 2)
    );
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `tinybee_custom_content_${Date.now()}.json`);
    dlAnchorElem.click();
    showNotification("Content exported as JSON!");
  };

  const handleSyncToCodebase = async () => {
    setIsSyncing(true);
    showNotification("Syncing content to codebase...");
    try {
      const res = await fetch('/api/save-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoQuests, mathQuestions, englishQuestions })
      });
      const result = await res.json();
      if (res.ok && result.success) {
        showNotification(`Codebase updated successfully! Files: ${result.updatedFiles.join(', ')}`);
      } else {
        showNotification(result.error || "Failed to sync to codebase.", true);
      }
    } catch (err: any) {
      console.error(err);
      showNotification(err.message || "Failed to sync to codebase.", true);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    const files = e.target.files;
    if (!files || files.length === 0) return;

    fileReader.readAsText(files[0], "UTF-8");
    fileReader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.videoQuests) {
          setVideoQuests(parsed.videoQuests);
          localStorage.setItem(STORAGE_KEYS.videoQuests, JSON.stringify(parsed.videoQuests));
        }
        if (parsed.mathQuestions) {
          setMathQuestions(parsed.mathQuestions);
          localStorage.setItem(STORAGE_KEYS.mathQuestions, JSON.stringify(parsed.mathQuestions));
        }
        if (parsed.englishQuestions) {
          setEnglishQuestions(parsed.englishQuestions);
          localStorage.setItem(STORAGE_KEYS.englishQuestions, JSON.stringify(parsed.englishQuestions));
        }
        showNotification("Content imported successfully! Reloading configuration...");
        setTimeout(() => window.location.reload(), 1200);
      } catch (err) {
        showNotification("Invalid configuration file format!", true);
      }
    };
  };

  const handleSaveWorld = () => {
    if (!worldForm.id || !worldForm.name) {
      showNotification("World ID and Name are required!", true);
      return;
    }

    const updatedWorlds = { ...customWorlds, [worldForm.id]: worldForm as WorldConfig };
    setCustomWorlds(updatedWorlds);
    localStorage.setItem(STORAGE_KEYS.worlds, JSON.stringify(updatedWorlds));
    setEditingWorldId(null);
    setIsAddingWorld(false);
    showNotification("World saved successfully!");
  };

  const handleDeleteWorld = (id: string) => {
    if (!confirm("Are you sure you want to delete this world?")) return;
    
    // Add to deletedWorldIds list
    const updatedDeleted = [...deletedWorldIds, id];
    setDeletedWorldIds(updatedDeleted);
    localStorage.setItem('deleted_world_ids', JSON.stringify(updatedDeleted));
    
    // Also remove from customWorlds
    const updatedCustom = { ...customWorlds };
    delete updatedCustom[id];
    setCustomWorlds(updatedCustom);
    localStorage.setItem(STORAGE_KEYS.worlds, JSON.stringify(updatedCustom));
    
    // Deselect if active
    if (selectedWorldId === id) {
      setSelectedWorldId(null);
    }
    
    showNotification("World deleted.");
  };

  const toggleGradeVisibility = (gradeKey: string) => {
    let updatedHidden: string[];
    if (hiddenGradeIds.includes(gradeKey)) {
      updatedHidden = hiddenGradeIds.filter(id => id !== gradeKey);
      showNotification(`Grade ${gradeKey === '0' || gradeKey === 'K' ? 'Kindergarten' : `Grade ${gradeKey}`} is now visible to students.`);
    } else {
      updatedHidden = [...hiddenGradeIds, gradeKey];
      showNotification(`Grade ${gradeKey === '0' || gradeKey === 'K' ? 'Kindergarten' : `Grade ${gradeKey}`} is now hidden from students.`);
    }
    setHiddenGradeIds(updatedHidden);
    localStorage.setItem('hidden_grade_ids', JSON.stringify(updatedHidden));
  };

  const handleDropWorld = (worldId: string, targetGrade: string) => {
    const allWorlds = { ...WORLDS_DATABASE, ...customWorlds };
    const worldToMove = allWorlds[worldId];
    if (!worldToMove) return;

    const gradeVal = targetGrade === 'K' ? 'K' : parseInt(targetGrade, 10);
    const updatedWorld = {
      ...worldToMove,
      grade: gradeVal,
    };

    const updatedCustom = { ...customWorlds, [worldId]: updatedWorld };
    setCustomWorlds(updatedCustom);
    localStorage.setItem(STORAGE_KEYS.worlds, JSON.stringify(updatedCustom));
    showNotification(`Moved "${worldToMove.name}" to Grade ${targetGrade === 'K' ? 'K' : targetGrade}`);
  };

  const handleWorldNameChange = (name: string) => {
    const slugify = (text: string) => {
      return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    };
    const topicSlug = slugify(name);
    const formGrade = worldForm.grade || 'K';
    const gradeStr = String(formGrade) === 'K' || String(formGrade) === '0' ? 'K' : String(formGrade);
    const generatedId = `g${gradeStr.toLowerCase()}-${topicSlug}`;
    setWorldForm(prev => ({
      ...prev,
      name,
      topicId: topicSlug,
      id: editingWorldId ? prev.id : generatedId,
    }));
  };

  const getAllQuests = () => {
    const list: any[] = [];
    const seenKeys = new Set<string>();

    Object.entries(videoQuests).forEach(([key, questObj]: [string, any]) => {
      if (!questObj || typeof questObj !== 'object') return;
      
      const match = key.match(/^(.+)-(\d+)$/);
      if (!match) return;

      const firstPart = match[1];
      const levelNum = parseInt(match[2], 10);

      const isGradeKey = firstPart === 'K' || !isNaN(Number(firstPart));
      const topicId = questObj.topicId || (isGradeKey ? '' : firstPart);
      const grade = questObj.grade !== undefined ? String(questObj.grade) : (isGradeKey ? firstPart : '');

      const canonicalKey = `${grade}_${topicId}_${levelNum}`;
      if (seenKeys.has(canonicalKey)) return;
      seenKeys.add(canonicalKey);

      list.push({
        originalKey: key,
        grade,
        topicId,
        levelNum,
        quest: questObj,
        title: questObj.title || 'Untitled Video Quest',
        channel: questObj.channel || 'Unknown Channel',
        words: questObj.words || [],
        questionsCount: questObj.questions ? questObj.questions.length : 0
      });
    });

    return list;
  };

  const findNextAvailableLevel = (
    grade: string, 
    topicId: string, 
    currentUpdatedQuests: any, 
    startFrom = 1,
    ignoreKeys: string[] = []
  ) => {
    let maxLevels = 10;
    if (topicId) {
      const wObj = Object.values({ ...WORLDS_DATABASE, ...customWorlds }).find(w => w.topicId === topicId);
      if (wObj && wObj.totalLevels) {
        maxLevels = wObj.totalLevels;
      }
    }

    for (let lvl = startFrom; lvl <= maxLevels; lvl++) {
      if (topicId) {
        // For topic-scoped quests, check if the topic-specific key is free.
        // We do not check/block on gradeKey because multiple topics in the same grade 
        // can coexist at the same level.
        const topicKey = `${topicId}-${lvl}`;
        if (!currentUpdatedQuests[topicKey] || ignoreKeys.includes(topicKey)) {
          return lvl;
        }
      } else {
        // For quests without a topic (none), check if the grade-level key is free.
        const gradeKey = `${grade}-${lvl}`;
        if (!currentUpdatedQuests[gradeKey] || ignoreKeys.includes(gradeKey)) {
          return lvl;
        }
      }
    }
    return null;
  };

  const handleMoveQuestInline = (q: any, newGrade: string, newTopicId: string) => {
    const numericGrade = newGrade === 'K' ? 0 : parseInt(newGrade, 10);
    const updatedQuests = { ...videoQuests };

    // 1. Find next available level in target, ignoring the quest's own current keys to prevent self-blocking
    const newLevelNum = findNextAvailableLevel(
      newGrade, 
      newTopicId, 
      updatedQuests, 
      1, 
      [q.originalKey, `${q.grade}-${q.levelNum}`, `${q.topicId}-${q.levelNum}`]
    );
    if (newLevelNum === null) {
      showNotification(`Cannot move quest. All 10 levels are full for Grade ${newGrade} ${newTopicId ? `World: ${newTopicId}` : ''}`, true);
      return;
    }

    // 2. Prepare the new quest object
    const oldQuestObj = updatedQuests[q.originalKey] || q.quest;
    const newQuestObj = {
      ...oldQuestObj,
      grade: numericGrade,
      topicId: newTopicId || undefined
    };

    // 3. Delete old keys to avoid duplicates/orphans
    delete updatedQuests[q.originalKey];
    delete updatedQuests[`${q.grade}-${q.levelNum}`];
    if (q.levelNum === 1) {
      delete updatedQuests[q.grade];
      if (q.topicId) {
        delete updatedQuests[q.topicId];
      }
    }

    // 4. Save new keys
    if (newTopicId) {
      const newTopicKey = `${newTopicId}-${newLevelNum}`;
      updatedQuests[newTopicKey] = newQuestObj;
      if (newLevelNum === 1) {
        updatedQuests[newTopicId] = newQuestObj;
      }
      // Also mirror under grade-level key as fallback
      updatedQuests[`${newGrade}-${newLevelNum}`] = newQuestObj;
    } else {
      const newGradeKey = `${newGrade}-${newLevelNum}`;
      updatedQuests[newGradeKey] = newQuestObj;
    }
    
    if (newLevelNum === 1) {
      updatedQuests[newGrade] = newQuestObj;
    }

    // 5. Update state and localStorage
    setVideoQuests(updatedQuests);
    localStorage.setItem(STORAGE_KEYS.videoQuests, JSON.stringify(updatedQuests));
    
    const worldLabel = newTopicId ? `World: ${newTopicId}` : '(none)';
    showNotification(`Moved quest to Grade ${newGrade} ${worldLabel} Level ${newLevelNum}!`);
  };

  const handleBulkMove = (targetGrade: string, targetTopicId: string) => {
    if (selectedQuestKeys.length === 0) return;
    
    const targetGradeVal = targetGrade === 'K' ? 0 : parseInt(targetGrade, 10);
    const targetGradeStr = targetGrade === 'K' ? 'K' : targetGrade;

    const updatedQuests = { ...videoQuests };
    const questsToMove = getAllQuests().filter(q => {
      const canonical = `${q.grade}_${q.topicId}_${q.levelNum}`;
      return selectedQuestKeys.includes(canonical);
    });

    let movedCount = 0;
    let failedCount = 0;
    let nextLvl = 1;

    const ignoreKeys = questsToMove.flatMap(qm => [
      qm.originalKey,
      `${qm.grade}-${qm.levelNum}`,
      `${qm.topicId}-${qm.levelNum}`
    ]);

    for (const q of questsToMove) {
      const availableLvl = findNextAvailableLevel(targetGradeStr, targetTopicId, updatedQuests, nextLvl, ignoreKeys);
      if (availableLvl === null) {
        failedCount++;
        continue;
      }
      nextLvl = availableLvl;

      const oldTopicKey = `${q.topicId}-${q.levelNum}`;
      const oldGradeKey = `${q.grade}-${q.levelNum}`;
      
      delete updatedQuests[oldTopicKey];
      delete updatedQuests[oldGradeKey];
      
      if (q.levelNum === 1) {
        delete updatedQuests[q.topicId];
        delete updatedQuests[String(q.grade)];
      }

      const movedQuestObj = {
        ...q.quest,
        grade: targetGradeVal,
        topicId: targetTopicId
      };

      const newTopicKey = `${targetTopicId}-${availableLvl}`;
      const newGradeKey = `${targetGradeStr}-${availableLvl}`;

      updatedQuests[newTopicKey] = movedQuestObj;
      updatedQuests[newGradeKey] = movedQuestObj;

      if (availableLvl === 1) {
        updatedQuests[targetTopicId] = movedQuestObj;
        updatedQuests[targetGradeStr] = movedQuestObj;
      }

      movedCount++;
    }

    setVideoQuests(updatedQuests);
    localStorage.setItem(STORAGE_KEYS.videoQuests, JSON.stringify(updatedQuests));
    setSelectedQuestKeys([]);
    
    if (failedCount > 0) {
      showNotification(`Moved ${movedCount} quest(s) successfully. ${failedCount} quest(s) could not be moved because the target world is full (10 levels max).`, true);
    } else {
      showNotification(`Successfully moved ${movedCount} quest(s) to Grade ${targetGradeStr} - ${targetTopicId}!`);
    }
  };

  const handleAutoOrganizeGrade = (targetGrade: string) => {
    if (!targetGrade) return;
    const gradeStr = normalizeGrade(targetGrade);
    const numericGrade = gradeStr === 'K' ? 0 : parseInt(gradeStr, 10);

    const allQuestsList = getAllQuests();
    const unorganized = allQuestsList.filter(
      q => normalizeGrade(q.grade) === gradeStr && (!q.topicId || q.topicId === '')
    );

    if (unorganized.length === 0) {
      showNotification(`No unorganized Grade ${gradeStr === 'K' ? 'K' : gradeStr} quests found!`, false);
      return;
    }

    const updatedQuests = { ...videoQuests };
    let localCustomWorlds = { ...customWorlds };
    let organizedCount = 0;
    let newWorldsCount = 0;

    const allWorldsList = Object.values({ ...WORLDS_DATABASE, ...localCustomWorlds })
      .filter(w => (w.subject || 'math') === 'english' && !deletedWorldIds.includes(w.id));
    const targetGradeWorlds = allWorldsList.filter(w => normalizeGrade(w.grade) === gradeStr);

    unorganized.forEach(q => {
      const desc = q.quest.transcriptText || q.quest.title || '';
      let targetTopicId = categorizeVideoInWorld(q.quest.title, desc, q.words, targetGradeWorlds);

      if (!targetTopicId) {
        const worldName = cleanWorldName(q.quest.title);
        const topicSlug = generateSlug(worldName);
        
        let finalSlug = topicSlug;
        let counter = 1;
        while (
          Object.values({ ...WORLDS_DATABASE, ...localCustomWorlds }).some(
            w => w.topicId === finalSlug
          )
        ) {
          finalSlug = `${topicSlug}-${counter}`;
          counter++;
        }

        const generatedWorldId = `custom-world-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
        const worldEmoji = guessEmoji(q.quest.title, q.quest.words);

        const newWorld: any = {
          id: generatedWorldId,
          name: worldName,
          grade: numericGrade,
          topicId: finalSlug,
          bgClass: 'bg-playful-dots bg-indigo-50',
          nodeColor: 'blue',
          emoji: worldEmoji,
          monsterNames: ['Imp', 'Pixie', 'Golem', 'Giant', 'Boss'],
          monsterIds: ['muddy_slime', 'muddy_slime', 'bramble_golem', 'bramble_golem', 'bramble_golem'],
          subject: 'english',
          badge: `${worldName} ${worldEmoji}`,
          bgStyle: 'bg-indigo-50 border-indigo-300 hover:border-indigo-400',
          textStyle: 'text-indigo-900',
          description: `Learn vocabulary from: ${q.quest.title}`
        };

        localCustomWorlds[generatedWorldId] = newWorld;
        targetTopicId = finalSlug;
        newWorldsCount++;
        
        // Add to our list so subsequent items can match it if suitable
        targetGradeWorlds.push(newWorld);
      }

      const newLevelNum = findNextAvailableLevel(gradeStr, targetTopicId, updatedQuests, 1, [
        q.originalKey,
        `${q.grade}-${q.levelNum}`,
        `${q.topicId}-${q.levelNum}`
      ]);
      if (newLevelNum !== null) {
        const oldQuestObj = updatedQuests[q.originalKey] || q.quest;
        const newQuestObj = {
          ...oldQuestObj,
          grade: numericGrade,
          topicId: targetTopicId || undefined
        };

        delete updatedQuests[q.originalKey];
        delete updatedQuests[`${gradeStr}-${q.levelNum}`];
        if (q.levelNum === 1) {
          delete updatedQuests[gradeStr];
          if (q.topicId) {
            delete updatedQuests[q.topicId];
          }
        }

        const newTopicKey = `${targetTopicId}-${newLevelNum}`;
        updatedQuests[newTopicKey] = newQuestObj;
        if (newLevelNum === 1) {
          updatedQuests[targetTopicId] = newQuestObj;
        }
        updatedQuests[`${gradeStr}-${newLevelNum}`] = newQuestObj;
        if (newLevelNum === 1) {
          updatedQuests[gradeStr] = newQuestObj;
        }

        organizedCount++;
      }
    });

    if (organizedCount > 0) {
      setVideoQuests(updatedQuests);
      localStorage.setItem(STORAGE_KEYS.videoQuests, JSON.stringify(updatedQuests));
      
      if (newWorldsCount > 0) {
        setCustomWorlds(localCustomWorlds);
        localStorage.setItem(STORAGE_KEYS.worlds, JSON.stringify(localCustomWorlds));
      }

      showNotification(
        `Success! Auto-organized ${organizedCount} Grade ${gradeStr === 'K' ? 'K' : gradeStr} quest(s). Created ${newWorldsCount} new custom world(s).`
      );
    } else {
      showNotification("Could not auto-organize quests. Slots might be full.", true);
    }
  };

  const handleEditQuestFromPool = (grade: string, topicId: string, levelNum: number) => {
    setActiveTab('english');
    setEnglishSubTab('learning');
    setSelectedGradeId(grade);
    setSelectedWorldId(topicId);
    setSelectedLevelNum(levelNum);
  };

  const handleDeleteQuestFromPool = (grade: string, topicId: string, levelNum: number) => {
    if (!confirm(`Are you sure you want to delete this quest (Grade ${grade}, Level ${levelNum})?`)) return;

    const updatedQuests = { ...videoQuests };

    const topicKey = `${topicId}-${levelNum}`;
    const gradeKey = `${grade}-${levelNum}`;
    
    delete updatedQuests[topicKey];
    delete updatedQuests[gradeKey];
    
    if (levelNum === 1) {
      delete updatedQuests[topicId];
      delete updatedQuests[String(grade)];
    }

    setVideoQuests(updatedQuests);
    localStorage.setItem(STORAGE_KEYS.videoQuests, JSON.stringify(updatedQuests));
    showNotification(`Deleted quest: Grade ${grade}, Level ${levelNum}.`);
  };

  const findWorldNameAndEmoji = (topicId: string, grade: string) => {
    const allWorlds = Object.values({ ...WORLDS_DATABASE, ...customWorlds });
    const world = allWorlds.find(w => w.topicId === topicId && normalizeGrade(w.grade) === normalizeGrade(grade));
    if (world) {
      return { name: world.name, emoji: world.emoji };
    }
    return { name: topicId, emoji: '🌍' };
  };

  const grades = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const mathTopics = ['counting', 'geometry', 'comparing', 'operations', 'base-ten', 'addition', 'subtraction', 'measurement', 'multiplication', 'division', 'fractions', 'patterns'];
  const englishTopics = ['alphabet', 'sight-words', 'phonics', 'spelling', 'vocabulary', 'reading-comprehension', 'parts-of-speech', 'sentence-structure', 'grammar', 'sentence-building', 'reading', 'writing', 'literature'];

  const isLearningSection = activeTab === 'english' && englishSubTab === 'learning';
  const isQuestionsPool = activeTab === 'math';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans select-none relative">
      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar {
          height: 10px;
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 8px;
          border: 2px solid #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}} />

      {/* AI Extraction Loading Overlay */}
      {isExtracting && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="bg-white border border-slate-200 max-w-sm w-full p-8 text-center space-y-4 shadow-2xl rounded-3xl animate-pop-in">
            <div className="flex justify-center">
              <div className="relative">
                <Loader2 className="w-12 h-12 text-indigo-650 animate-spin" />
                <Sparkles className="w-5 h-5 text-indigo-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
            </div>
            <h3 className="font-black text-slate-900 text-lg">AI Video Analysis</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed min-h-[40px]">
              {extractionStep}
            </p>
          </Card>
        </div>
      )}

      {/* Header bar */}
      <header className="w-full bg-white border-b-2 border-slate-200 px-6 py-4 sticky top-0 z-30 shadow-sm">
        <div className="max-w-[98%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/parent-dashboard">
              <Button variant="gray" size="sm" className="flex items-center gap-1.5 border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 cursor-pointer shadow-sm">
                <ArrowLeft className="w-4 h-4" /> Parent Report
              </Button>
            </Link>
            <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              🛠️ Content Control Panel
            </h1>
          </div>

          <div className="flex items-center gap-2.5">
            {process.env.NODE_ENV === 'development' && (
              <Button
                variant="gray"
                size="sm"
                onClick={handleSyncToCodebase}
                disabled={isSyncing}
                className="text-xs font-bold border border-violet-200 bg-violet-50 hover:bg-violet-100 text-violet-700 flex items-center gap-1.5 cursor-pointer shadow-sm disabled:opacity-50"
              >
                <Save className="w-3.5 h-3.5" /> {isSyncing ? "Syncing..." : "Sync to Codebase"}
              </Button>
            )}

            <Button
              variant="gray"
              size="sm"
              onClick={handleExportJSON}
              className="text-xs font-bold border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" /> Export JSON
            </Button>

            <label className="text-xs font-bold border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center gap-1.5 px-3 py-2.5 rounded-xl cursor-pointer transition-colors shadow-sm">
              <Upload className="w-3.5 h-3.5" /> Import
              <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
            </label>

            <Button
              variant="pink"
              size="sm"
              onClick={handleResetToDefault}
              className="text-xs font-black flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 cursor-pointer shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
            </Button>

            <Button
              variant="orange"
              size="sm"
              onClick={() => {
                setScanImageProgress({ phase: 'idle', total: 0, checked: 0, fixed: 0, log: [] });
                setIsScanningImages(true);
              }}
              className="text-xs font-black flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Scan all saved questions across every grade & level for broken images and auto-regenerate them"
            >
              <ImageOff className="w-3.5 h-3.5" /> Scan & Fix Images
            </Button>

            <Button
              variant="gray"
              size="sm"
              onClick={() => setIsShowingMissingIconsModal(true)}
              className="text-xs font-black flex items-center gap-1.5 cursor-pointer shadow-sm bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200"
              title="View the queue of words that are missing custom icons in Supabase"
            >
              <AlertTriangle className="w-3.5 h-3.5" /> Missing Icons ({missingIconsQueue.length})
            </Button>
          </div>
        </div>
      </header>

      {/* Grid Container */}
      <main className="max-w-[98%] w-full mx-auto px-4 py-8 flex-grow flex flex-col md:flex-row gap-6 animate-pop-in">

        {/* Left selection Sidebar */}
        <div className="w-full md:w-1/4 flex flex-col gap-5 shrink-0">

          {/* Menu Card - Subject Switcher */}
          <Card className="bg-white border border-slate-200 p-4 space-y-3.5 shadow-sm rounded-2xl">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
              Select Subject
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => { setSelectedSubject('english'); setActiveTab('english'); setEnglishSubTab('learning'); setSelectedGradeId(null); setSelectedWorldId(null); setSelectedLevelNum(null); }}
                className={`flex-1 py-3 px-4 rounded-xl font-extrabold text-sm transition-all text-center flex items-center justify-center gap-2.5 cursor-pointer ${selectedSubject === 'english'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                  }`}
              >
                🔤 English
              </button>

              <button
                onClick={() => { setSelectedSubject('math'); setActiveTab('math'); setSelectedGradeId(null); setSelectedWorldId(null); setSelectedLevelNum(null); }}
                className={`flex-1 py-3 px-4 rounded-xl font-extrabold text-sm transition-all text-center flex items-center justify-center gap-2.5 cursor-pointer ${selectedSubject === 'math'
                  ? 'bg-amber-500 text-slate-900 shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                  }`}
              >
                📐 Math
              </button>
            </div>
          </Card>

          {/* Grades List */}
          <Card className="bg-white border border-slate-200 p-4 space-y-4 shadow-sm rounded-2xl overflow-hidden flex flex-col max-h-[60vh]">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
              Grades
            </h3>
            <div className="flex flex-col gap-1 overflow-y-auto pr-1 custom-scrollbar">
              {grades.map(g => {
                const gradeKey = g === 0 ? 'K' : g.toString();
                const isSelected = selectedGradeId === gradeKey;

                // 1. Calculate number of topics (worlds) for the selected subject and grade
                const subjectsWorlds = Object.values({ ...WORLDS_DATABASE, ...customWorlds })
                  .filter(w => (w.subject || 'math') === selectedSubject && !deletedWorldIds.includes(w.id) && normalizeGrade(w.grade) === normalizeGrade(gradeKey));
                const numTopics = subjectsWorlds.length;

                // 2. Calculate number of questions for the selected subject and grade
                let numQuestions = 0;
                if (selectedSubject === 'math') {
                  numQuestions = mathQuestions.filter(q => normalizeGrade(q.grade) === normalizeGrade(gradeKey)).length;
                } else {
                  // For English, count the questions inside videoQuests
                  const gradeQuests = getAllQuests().filter(q => normalizeGrade(q.grade) === normalizeGrade(gradeKey));
                  gradeQuests.forEach(q => {
                    numQuestions += q.questionsCount;
                  });
                }

                const isHidden = hiddenGradeIds.includes(gradeKey);

                return (
                  <div
                    key={`grd-btn-${gradeKey}`}
                    className="group flex items-center justify-between gap-1.5 w-full animate-fade-in"
                  >
                    <button
                      onClick={() => {
                        setSelectedGradeId(gradeKey);
                        setSelectedWorldId(null);
                        setSelectedLevelNum(null);
                      }}
                      className={`flex-grow py-2.5 px-4 rounded-xl font-bold text-sm transition-all text-left flex items-center justify-between cursor-pointer min-w-0 ${isSelected
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : isHidden
                          ? 'bg-slate-100/60 text-slate-400 hover:bg-slate-100'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                      <div className="flex flex-col min-w-0 w-full">
                        <span className="truncate flex items-center gap-1.5">
                          {g === 0 ? 'Kindergarten' : `Grade ${g}`}
                          {isHidden && (
                            <span className="text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-rose-100 text-rose-600 shrink-0">
                              Hidden
                            </span>
                          )}
                        </span>
                        <span className={`text-[10px] block mt-0.5 font-bold truncate ${isSelected ? 'text-indigo-200' : 'text-slate-400'}`}>
                          {numTopics} {numTopics === 1 ? 'topic' : 'topics'} • {numQuestions} {numQuestions === 1 ? 'question' : 'questions'}
                        </span>
                      </div>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleGradeVisibility(gradeKey);
                      }}
                      className={`p-2 rounded-xl transition-all cursor-pointer border-2 shrink-0 ${isHidden
                        ? 'bg-rose-50 border-rose-200 text-rose-500 hover:bg-rose-100 hover:text-rose-600'
                        : 'bg-slate-50 border-slate-200 text-slate-400 hover:bg-slate-100 hover:text-indigo-600 hover:border-slate-350'
                        }`}
                      title={isHidden ? 'Hidden from students. Click to show.' : 'Visible to students. Click to hide.'}
                    >
                      {isHidden ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Content Panel */}
        <div className="flex-grow flex flex-col gap-4 min-w-0 overflow-hidden">

          {/* Secondary Sub-Tabs for English */}
          {(activeTab === 'english' || activeTab === 'english-worlds') && (
            <div className="flex gap-2 bg-slate-100 p-1 rounded-2xl self-start border border-slate-200/60 shadow-inner">
              <button
                onClick={() => { setActiveTab('english'); setEnglishSubTab('learning'); setEditingQuestionId(null); setIsAddingQuestion(false); }}
                className={`px-4 py-2 text-xs font-black rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === 'english' && englishSubTab === 'learning'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                <Film className="w-3.5 h-3.5" /> 📖 Learning Section Video Quests
              </button>

              <button
                onClick={() => { setActiveTab('english'); setEnglishSubTab('standard'); setEditingQuestionId(null); setIsAddingQuestion(false); }}
                className={`px-4 py-2 text-xs font-black rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === 'english' && englishSubTab === 'standard'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                <GraduationCap className="w-3.5 h-3.5" /> 🏆 Quest Pools
              </button>

              <button
                onClick={() => { setActiveTab('english-worlds'); setEditingQuestionId(null); setIsAddingQuestion(false); }}
                className={`px-4 py-2 text-xs font-black rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === 'english-worlds'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                <Globe className="w-3.5 h-3.5" /> 🌍 English Worlds
              </button>
            </div>
          )}

          {/* Secondary Sub-Tabs for Math */}
          {(activeTab === 'math' || activeTab === 'math-worlds') && (
            <div className="flex gap-2 bg-slate-100 p-1 rounded-2xl self-start border border-slate-200/60 shadow-inner">
              <button
                onClick={() => { setActiveTab('math'); setEditingQuestionId(null); setIsAddingQuestion(false); }}
                className={`px-4 py-2 text-xs font-black rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === 'math'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                <HelpCircle className="w-3.5 h-3.5" /> 📚 Math Questions Pool
              </button>

              <button
                onClick={() => { setActiveTab('math-worlds'); setEditingQuestionId(null); setIsAddingQuestion(false); }}
                className={`px-4 py-2 text-xs font-black rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === 'math-worlds'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                <Globe className="w-3.5 h-3.5" /> 🌍 Math Worlds
              </button>
            </div>
          )}

          {/* Notifications */}
          {successMsg && (
            <div className="w-full bg-emerald-50 border border-emerald-250 text-emerald-800 px-4 py-3 rounded-2xl font-bold text-sm shadow-sm flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" /> {successMsg}
            </div>
          )}
          {errorMsg && (
            <div className="w-full bg-rose-50 border border-rose-250 text-rose-800 px-4 py-3 rounded-2xl font-bold text-sm shadow-sm flex items-center gap-2">
              <X className="w-4 h-4 text-rose-600" /> {errorMsg}
            </div>
          )}

          {/* EDITORS */}

          {/* Welcome State if no Grade is selected */}
          {!selectedGradeId && ((activeTab === 'english' && englishSubTab !== 'standard') || activeTab === 'math') && (
            <Card className="bg-white border border-slate-200 p-8 text-center space-y-4 rounded-3xl shadow-sm">
              <span className="text-5xl block">🎒</span>
              <h3 className="text-xl font-black text-slate-900">Select a Grade</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto font-medium">
                Please select a grade from the sidebar to view and customize the {activeTab === 'math' ? 'Math' : 'English'} curriculum content.
              </p>
            </Card>
          )}

          {/* 1. LEARNING SECTION CONFIGURATION */}
          {isLearningSection && selectedGradeId && (() => {
            // Compute English worlds for this grade
            const englishWorldsForGrade = Object.values({ ...WORLDS_DATABASE, ...customWorlds })
              .filter(w => normalizeGrade(w.grade) === normalizeGrade(selectedGradeId) && (w.subject || 'math') === 'english' && !deletedWorldIds.includes(w.id));
            const activeWorld = englishWorldsForGrade.find(w => w.topicId === selectedWorldId);

            const prefixKey = selectedWorldId ? selectedWorldId : String(selectedGradeId);

            const getLevelsList = () => {
              const levelsWithContent: number[] = [];
              const prefix = selectedWorldId ? `${selectedWorldId}-` : `${selectedGradeId}-`;
              Object.keys(videoQuests).forEach(key => {
                if (key.startsWith(prefix)) {
                  const parts = key.split('-');
                  const num = parseInt(parts[parts.length - 1], 10);
                  if (!isNaN(num)) {
                    levelsWithContent.push(num);
                  }
                }
              });
              const maxLvl = Math.max(10, ...levelsWithContent);
              return Array.from({ length: maxLvl }, (_, i) => i + 1);
            };
            const levels = getLevelsList();

            return (
            <Card className="bg-white border border-slate-200 p-6 space-y-5 shadow-sm rounded-2xl">

              {/* ── Header row ── */}
              <div className="flex flex-col gap-4 border-b border-slate-100 pb-5">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-black text-slate-900">
                      📖 Grade {selectedGradeId} · {activeWorld ? activeWorld.name : 'Learning Section'}
                      {selectedLevelNum ? ` · Level ${selectedLevelNum}` : ''}
                    </h2>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">
                      Select a world and level below, then edit the video and quiz content.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <Button variant="purple" size="sm" onClick={handleSaveQuest} className="flex items-center gap-1.5 shadow-sm cursor-pointer">
                      <Save className="w-4 h-4 shrink-0" /> Save
                    </Button>
                    <Button
                      variant="gray"
                      size="sm"
                      onClick={() => {
                        setPlaylistInput('');
                        setExtractedPlaylistVideos([]);
                        setSelectedPlaylistVideos([]);
                        setBulkImportGrade(selectedGradeId || '1');
                        setBulkImportWorld(selectedWorldId || 'auto');
                        setBulkImportImageSource('antigravity');
                        setIsBulkImportOpen(true);
                      }}
                      className="flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Plus className="w-4 h-4 shrink-0" /> Bulk Import
                    </Button>
                  </div>
                </div>

                {/* ── World selector (English worlds for this grade) ── */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">World / Topic</span>
                    <button
                      onClick={() => {
                        setActiveTab('english-worlds');
                        if (selectedGradeId) {
                          setWorldFilterGrade(String(selectedGradeId));
                        }
                      }}
                      className="text-[10px] font-black text-indigo-650 hover:text-indigo-800 hover:underline cursor-pointer flex items-center gap-1"
                    >
                      ⚙️ Manage English Worlds
                    </button>
                  </div>

                  {englishWorldsForGrade.length > 0 ? (
                    <div className="flex flex-wrap gap-2 animate-fade-in">
                      {englishWorldsForGrade.map(w => {
                        const isActive = w.topicId === selectedWorldId;
                        const savedCount = Array.from({ length: 10 }, (_, i) => i + 1)
                          .filter(lvl => !!videoQuests[`${w.topicId}-${lvl}`])
                          .length;
                        return (
                          <button
                            key={w.id}
                            onClick={() => setSelectedWorldId(w.topicId)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer ${
                              isActive
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-sm'
                                : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-white'
                            }`}
                          >
                            <span className="text-base leading-none">{w.emoji}</span>
                            <span>{w.name}</span>
                            {savedCount > 0 && (
                              <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                                isActive ? 'bg-emerald-200 text-emerald-700' : 'bg-slate-200 text-slate-500'
                              }`}>{savedCount} lvl</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 text-xs font-bold text-amber-700 flex items-center justify-between gap-2 animate-fade-in">
                      <span className="flex items-center gap-2">⚠️ No English worlds found for Grade {selectedGradeId}.</span>
                      <button
                        onClick={() => {
                          setActiveTab('english-worlds');
                          if (selectedGradeId) {
                            setWorldFilterGrade(String(selectedGradeId));
                          }
                        }}
                        className="px-2.5 py-1 text-[11px] font-black text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg cursor-pointer transition-all active:translate-y-0.5"
                      >
                        Manage English Worlds
                      </button>
                    </div>
                  )}
                </div>

                {/* ── Level selector grid ── */}
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Level</span>
                  <div className="flex flex-wrap gap-2">
                    {levels.map(lvl => {
                      const hasTopicContent = !!(selectedWorldId && videoQuests[`${selectedWorldId}-${lvl}`]);
                      const hasGradeContent = !!videoQuests[`${selectedGradeId}-${lvl}`];
                      const hasContent = selectedWorldId ? hasTopicContent : hasGradeContent;
                      const isActive = selectedLevelNum === lvl;
                      return (
                        <button
                          key={lvl}
                          onClick={() => setSelectedLevelNum(lvl)}
                          className={`relative w-10 h-10 rounded-xl border-2 text-xs font-black transition-all cursor-pointer flex items-center justify-center ${
                            isActive
                              ? 'border-indigo-500 bg-indigo-600 text-white shadow-md scale-105'
                              : hasContent
                                ? 'border-emerald-400 bg-emerald-50 text-emerald-700 hover:border-emerald-500'
                                : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300'
                          }`}
                          title={`Level ${lvl}${hasTopicContent ? ' ✓ (world-specific)' : hasGradeContent ? ' ✓ (grade fallback)' : ' (empty)'}`}
                        >
                          {lvl}
                          {hasContent && !isActive && (
                            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 border border-white" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-1 align-middle" />has content &nbsp;
                    <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mr-1 align-middle" />currently editing
                  </p>
                </div>

                {/* ── Drag and Drop Reorder Levels Section ── */}
                <div className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-4 space-y-3 mt-4">
                  <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <span>🔄 Drag & Drop to Reorder Levels</span>
                    <span className="text-[9.5px] text-slate-400 font-semibold normal-case">
                      (Drag handle to rearrange; click card to select)
                    </span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[350px] overflow-y-auto pr-1">
                    {levels.map((lvl) => {
                      const quest = videoQuests[`${prefixKey}-${lvl}`];
                      const isDragging = draggingLevelNum === lvl;
                      const isDraggedOver = draggedOverLevelNum === lvl;
                      const isEditing = selectedLevelNum === lvl;
                      
                      return (
                        <div
                          key={`reorder-lvl-${lvl}`}
                          draggable
                          onDragStart={(e) => {
                            setDraggingLevelNum(lvl);
                            e.dataTransfer.effectAllowed = 'move';
                          }}
                          onDragOver={(e) => {
                            e.preventDefault();
                            if (draggingLevelNum !== lvl) {
                              setDraggedOverLevelNum(lvl);
                            }
                          }}
                          onDragLeave={() => {
                            if (draggedOverLevelNum === lvl) {
                              setDraggedOverLevelNum(null);
                            }
                          }}
                          onDrop={(e) => {
                            e.preventDefault();
                            if (draggingLevelNum !== null && draggingLevelNum !== lvl) {
                              handleReorderLevels(draggingLevelNum, lvl);
                            }
                            setDraggingLevelNum(null);
                            setDraggedOverLevelNum(null);
                          }}
                          onDragEnd={() => {
                            setDraggingLevelNum(null);
                            setDraggedOverLevelNum(null);
                          }}
                          onClick={() => setSelectedLevelNum(lvl)}
                          className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all cursor-pointer relative ${
                            isDragging ? 'opacity-40 border-dashed border-slate-350 bg-slate-50' :
                            isDraggedOver ? 'border-indigo-500 bg-indigo-50/50 scale-[1.01] shadow-md' :
                            isEditing ? 'border-indigo-500 bg-indigo-50/30' : 'border-slate-100 bg-white hover:bg-slate-50 hover:border-slate-250 shadow-sm'
                          }`}
                        >
                          {/* Drag Handle */}
                          <div className="cursor-grab text-slate-400 hover:text-slate-600 active:cursor-grabbing shrink-0 flex items-center justify-center p-1.5 rounded hover:bg-slate-100">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M7 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm0 6a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm0 6a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm6-12a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm0 6a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm0 6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/>
                            </svg>
                          </div>

                          {/* Level badge */}
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                            quest ? 'bg-emerald-100 text-emerald-850 border border-emerald-250' : 'bg-slate-100 text-slate-450 border border-slate-200'
                          }`}>
                            {lvl}
                          </div>

                          {/* Info */}
                          <div className="flex-grow min-w-0">
                            {quest ? (
                              <div className="space-y-1">
                                <h4 className="text-xs font-extrabold text-slate-800 truncate leading-snug">
                                  {quest.title || 'Untitled Video Quest'}
                                </h4>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-[9px] font-bold text-slate-400 truncate">
                                    {quest.channel || 'Unknown Channel'}
                                  </span>
                                  {quest.words && quest.words.length > 0 && (
                                    <div className="flex gap-1 flex-wrap max-w-full">
                                      {quest.words.slice(0, 3).map((w: string, idx: number) => (
                                        <span key={idx} className="text-[8.5px] font-black bg-indigo-50 text-indigo-600 px-1 py-0.5 rounded-md max-w-[65px] truncate border border-indigo-100/50">
                                          {w}
                                        </span>
                                      ))}
                                      {quest.words.length > 3 && (
                                        <span className="text-[8.5px] font-black bg-slate-100 text-slate-500 px-1 py-0.5 rounded-md border border-slate-200/50">
                                          +{quest.words.length - 3}
                                        </span>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ) : (
                              <span className="text-xs font-bold text-slate-400 italic">Empty level slot</span>
                            )}
                          </div>

                          {/* Icon indicating status */}
                          {quest && (
                            <div className="shrink-0 text-slate-450">
                              <Film className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>


              {/* Video configuration */}
              <div className="flex flex-col gap-4">

                {/* Row 1: YouTube Video URL */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center mb-1 flex-wrap gap-2">
                    <label className="text-xs font-black text-slate-500 block">YouTube Video URL</label>
                    <div className="flex gap-2 items-center flex-wrap">
                      <select
                        value={extractionMethod}
                        onChange={(e) => {
                          const val = e.target.value as 'auto' | 'ai' | 'manual';
                          setExtractionMethod(val);
                          localStorage.setItem('tinybee_extraction_method', val);
                        }}
                        className="text-[10px] font-bold text-slate-600 bg-slate-100 rounded px-1.5 py-1 border border-slate-200 outline-none cursor-pointer"
                      >
                        <option value="auto">Auto Extract</option>
                        <option value="ai">AI Extract (Gemini/OpenAI)</option>
                        <option value="manual">Manual (Skip Extraction)</option>
                      </select>
                      <button
                        onClick={handleAutoExtractStep1}
                        className="text-[10px] font-black text-indigo-650 hover:text-indigo-800 transition-colors flex items-center gap-1 cursor-pointer bg-indigo-50 hover:bg-indigo-100 px-2 py-0.5 rounded-lg border border-indigo-150"
                      >
                        <Sparkles className="w-3 h-3 text-indigo-650" /> Step 1: Extract Video Metadata
                      </button>
                    </div>
                  </div>
                  {extractionMethod === 'ai' && (
                    <div className="flex gap-2 items-center mb-2 p-2 bg-indigo-50/50 rounded-lg border border-indigo-100">
                      <select
                        value={aiProvider}
                        onChange={(e) => {
                          const val = e.target.value as 'gemini' | 'openai';
                          setAiProvider(val);
                          localStorage.setItem('tinybee_ai_provider', val);
                        }}
                        className="text-[10px] font-bold text-slate-600 bg-white rounded px-2 py-1.5 border border-slate-200 outline-none cursor-pointer"
                      >
                        <option value="gemini">Gemini API</option>
                        <option value="openai">OpenAI API</option>
                      </select>
                      <input
                        type="password"
                        placeholder="Enter API Key (saved locally)"
                        value={aiApiKey}
                        onChange={(e) => {
                          setAiApiKey(e.target.value);
                          localStorage.setItem('tinybee_ai_api_key', e.target.value);
                        }}
                        className="flex-1 bg-white border border-slate-200 rounded px-2 py-1 text-xs outline-none focus:border-indigo-500"
                      />
                    </div>
                  )}
                  <input
                    type="text"
                    value={questForm.videoUrl}
                    onChange={(e) => setQuestForm({ ...questForm, videoUrl: e.target.value })}
                    onBlur={(e) => {
                      const normalized = getYouTubeEmbedUrl(e.target.value);
                      if (normalized !== e.target.value) {
                        setQuestForm({ ...questForm, videoUrl: normalized });
                      }
                    }}
                    placeholder="https://www.youtube.com/embed/uR7bSJYQEc0"
                    className="w-full bg-white border-2 border-slate-200 rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500 focus:bg-slate-50/50 transition-all"
                  />
                  <span className="text-[10px] text-slate-400 font-bold block">Supports any YouTube video URL format (Shorts, Watch, Share, or Embed)</span>
                </div>

                {/* Row 2: Title and Channel */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-500 block">Lesson Title</label>
                    <input
                      type="text"
                      value={questForm.title}
                      onChange={(e) => setQuestForm({ ...questForm, title: e.target.value })}
                      placeholder="Essential Words"
                      className="w-full bg-white border-2 border-slate-200 rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500 focus:bg-slate-50/50 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-500 block">Channel / Author Handle</label>
                    <input
                      type="text"
                      value={questForm.channel}
                      onChange={(e) => setQuestForm({ ...questForm, channel: e.target.value })}
                      placeholder="@TINYBEE.ED"
                      className="w-full bg-white border-2 border-slate-200 rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500 focus:bg-slate-50/50 transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Vocabulary Words */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-black text-slate-500 block">Vocabulary Words (separated by comma)</label>
                    <div className="flex gap-2 items-center">
                      <select
                        value={imageSource}
                        onChange={(e) => setImageSource(e.target.value)}
                        className="text-[10px] font-bold text-slate-600 bg-slate-100 rounded px-1.5 py-1 border border-slate-200 outline-none cursor-pointer"
                      >
                        <option value="antigravity">Antigravity (Custom Cartoon)</option>
                        <option value="pexels">Pexels (Photos)</option>
                        <option value="pixabay">Pixabay (Vectors)</option>
                      </select>
                      <button
                        onClick={handleGenerateQuestionsStep2}
                        className="text-[10px] font-black text-white transition-colors flex items-center gap-1 cursor-pointer bg-indigo-600 hover:bg-indigo-700 px-2 py-1 rounded-lg"
                      >
                        <Sparkles className="w-3 h-3" /> Step 2: Generate Quiz & Images
                      </button>
                    </div>
                  </div>
                  <input
                    type="text"
                    value={questForm.wordsInput}
                    onChange={(e) => setQuestForm({ ...questForm, wordsInput: e.target.value })}
                    placeholder="word1, word2, word3"
                    className="w-full bg-white border-2 border-slate-200 rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500 focus:bg-slate-50/50 transition-all"
                  />
                </div>

                {/* Row 4: Extracted Transcript */}
                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-500 block">Extracted Transcript</label>
                  <textarea
                    value={questForm.transcriptText}
                    readOnly
                    placeholder="Video transcript will appear here after extraction..."
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-600 outline-none h-24 resize-y"
                  />
                </div>
              </div>

              {/* Memory questions editing */}
              <div className="space-y-4 border-t border-slate-100 pt-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Memory Challenge Quiz ({questForm.questions.length} items)</h3>
                    {questForm.questions.length > 0 && (
                      <label className="flex items-center gap-1.5 cursor-pointer bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md transition-colors">
                        <input
                          type="checkbox"
                          checked={selectedQuestions.length === questForm.questions.length && questForm.questions.length > 0}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedQuestions(questForm.questions.map((_, i) => i));
                            } else {
                              setSelectedQuestions([]);
                            }
                          }}
                          className="w-3.5 h-3.5 cursor-pointer accent-indigo-600"
                        />
                        <span className="text-[10px] font-bold text-slate-600 uppercase">Select All</span>
                      </label>
                    )}
                  </div>
                  <Button variant="gray" size="sm" onClick={handleAddQuestQuestion} className="text-xs font-bold border border-slate-200 bg-white hover:bg-slate-55 text-slate-700 shadow-sm cursor-pointer flex items-center gap-1.5">
                    <Plus className="w-4 h-4" /> Add Question
                  </Button>
                </div>

                {/* Batch Action Toolbar */}
                {selectedQuestions.length > 0 && (
                  <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-sm animate-slide-up mt-2 mb-4">
                    <div className="text-xs font-bold text-indigo-800">
                      <span className="bg-indigo-200 text-indigo-900 px-1.5 py-0.5 rounded-md mr-1">{selectedQuestions.length}</span> questions selected
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={batchImageSource}
                        onChange={(e) => setBatchImageSource(e.target.value)}
                        className="text-[10px] font-bold text-indigo-900 bg-white rounded-lg px-2 py-1.5 border border-indigo-200 outline-none cursor-pointer"
                        disabled={isRegeneratingBatch}
                      >
                        <option value="antigravity">Antigravity (Custom Cartoon)</option>
                        <option value="pexels">Pexels (Photos)</option>
                        <option value="pixabay">Pixabay (Vectors)</option>
                      </select>
                      <button
                        onClick={handleRegenerateSelectedImages}
                        disabled={isRegeneratingBatch}
                        className={`text-[10px] font-black text-white transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg shadow-sm ${isRegeneratingBatch ? 'bg-indigo-400 cursor-not-allowed' : 'cursor-pointer bg-indigo-600 hover:bg-indigo-700'}`}
                      >
                        {isRegeneratingBatch ? <Loader2 className="w-3.5 h-3.5 mr-1 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                        {isRegeneratingBatch ? 'Regenerating...' : 'Regenerate Images'}
                      </button>
                    </div>
                  </div>
                )}

                {questForm.questions.length === 0 ? (
                  <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold text-sm bg-slate-50/50">
                    No questions defined. Click "Add Question" above to start.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {questForm.questions.map((q, qIdx) => (
                      <div key={`qst-itm-${qIdx}`} className="border border-slate-250 bg-slate-55 p-4 rounded-2xl relative space-y-4 shadow-sm">
                        <button
                          onClick={() => handleDeleteQuestQuestion(qIdx)}
                          className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 className="w-4.5 h-4.5" />
                        </button>

                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedQuestions.includes(qIdx)}
                            onChange={() => toggleQuestionSelection(qIdx)}
                            className="w-4 h-4 cursor-pointer accent-indigo-600"
                          />
                          <div className="text-[10px] font-black text-indigo-650 uppercase tracking-wider">QUESTION CARD #{qIdx + 1}</div>
                        </div>

                        <div className="flex flex-col gap-3">
                          <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-500 uppercase">Question Prompt</label>
                            <input
                              type="text"
                              value={q.question}
                              onChange={(e) => handleQuestQuestionChange(qIdx, 'question', e.target.value)}
                              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 outline-none focus:border-indigo-500"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-500 uppercase flex items-center gap-1">
                              Vocabulary Icon URL
                              <span className="text-[9px] font-normal text-slate-400 normal-case">(Iconify or local path)</span>
                            </label>
                            <div className="flex gap-4 items-start">
                              {/* Live preview thumbnail */}
                              <div className="w-20 h-20 shrink-0 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden">
                                {q.imageUrl ? (
                                  q.imageUrl.startsWith('iconify:') ? (
                                    <div className="flex gap-1 items-center justify-center p-1">
                                      {q.imageUrl.substring(8).split('|').filter(Boolean).map((url: string, i: number) => (
                                        <img key={i} src={url} alt="" className="w-8 h-8 object-contain drop-shadow-sm" />
                                      ))}
                                    </div>
                                  ) : (
                                    <img src={q.imageUrl} alt="" className="max-w-full max-h-full object-contain p-1" />
                                  )
                                ) : (
                                  <span className="text-[28px]">🖼️</span>
                                )}
                              </div>
                              <div className="flex-1 space-y-1.5 mt-1">
                                <div className="flex gap-2 items-center flex-wrap">
                                  <input
                                    type="text"
                                    value={q.imageUrl || ''}
                                    onChange={(e) => handleQuestQuestionChange(qIdx, 'imageUrl', e.target.value)}
                                    placeholder="iconify:https://api.iconify.design/noto/automobile.svg?height=96"
                                    className="min-w-[200px] flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 outline-none focus:border-indigo-500"
                                  />
                                  <select
                                    value={singleImageSources[qIdx] || batchImageSource}
                                    onChange={(e) => setSingleImageSources(prev => ({ ...prev, [qIdx]: e.target.value }))}
                                    className="shrink-0 bg-slate-50 border border-slate-200 text-slate-700 px-3 py-2 rounded-xl text-xs font-bold outline-none focus:border-indigo-500 cursor-pointer shadow-sm"
                                  >
                                    <option value="antigravity">Antigravity (Custom Cartoon)</option>
                                    <option value="pexels">Pexels (Photos)</option>
                                    <option value="pixabay">Pixabay (Vectors)</option>
                                  </select>
                                  <button
                                    onClick={() => handleRegenerateSingleImage(qIdx)}
                                    disabled={isRegeneratingSingle === qIdx}
                                    className={`shrink-0 border px-3 py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-center whitespace-nowrap ${isRegeneratingSingle === qIdx ? 'bg-indigo-300 text-white cursor-not-allowed border-indigo-300' : 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100 hover:text-indigo-800 cursor-pointer shadow-sm'}`}
                                  >
                                    {isRegeneratingSingle === qIdx ? (
                                      <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                                    ) : (
                                      <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                                    )}
                                    Re-generate
                                  </button>
                                  <label className={`shrink-0 bg-slate-50 text-slate-700 border border-slate-200 px-3 py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-center whitespace-nowrap shadow-sm ${isUploadingImage === qIdx ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-slate-100 hover:text-slate-900'}`}>
                                    {isUploadingImage === qIdx ? (
                                      <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                                    ) : (
                                      <Upload className="w-3.5 h-3.5 mr-1.5" />
                                    )}
                                    {isUploadingImage === qIdx ? 'Uploading...' : 'Upload'}
                                    <input
                                      type="file"
                                      className="hidden"
                                      accept="image/*"
                                      disabled={isUploadingImage === qIdx}
                                      onChange={(e) => handleImageUpload(e, qIdx, q.correctAnswer)}
                                    />
                                  </label>
                                  {q.imageUrl && (
                                    <button
                                      onClick={() => handleQuestQuestionChange(qIdx, 'imageUrl', '')}
                                      className="shrink-0 bg-red-50 text-red-600 border border-red-200 p-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center cursor-pointer hover:bg-red-100 hover:text-red-700 shadow-sm"
                                      title="Remove Image"
                                    >
                                      <X className="w-4 h-4" />
                                    </button>
                                  )}
                                </div>
                                <p className="text-[9px] text-slate-400 leading-tight mt-1.5">
                                  Browse free icons at{' '}
                                  <a href="https://icones.js.org" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline font-semibold">icones.js.org</a>
                                  {' '}→ copy name → format:{' '}
                                  <code className="bg-slate-100 px-1 rounded text-[8px]">iconify:https://api.iconify.design/noto/ICON-NAME.svg?height=96</code>
                                  {'. For two icons side by side (e.g. object + state): separate with '}
                                  <code className="bg-slate-100 px-1 rounded text-[8px]">|</code>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {Array.from({ length: 4 }).map((_, cIdx) => (
                            <div key={`c-c-${cIdx}`} className="space-y-0.5">
                              <label className="text-[9px] font-black text-slate-400 uppercase">Option {cIdx + 1}</label>
                              <input
                                type="text"
                                value={q.choices[cIdx] || ''}
                                onChange={(e) => handleQuestChoiceChange(qIdx, cIdx, e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-850 outline-none focus:border-indigo-500"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-500 uppercase">Target Vocab</label>
                            <input
                              type="text"
                              value={q.correctAnswer}
                              onChange={(e) => handleQuestQuestionChange(qIdx, 'correctAnswer', e.target.value)}
                              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-indigo-750 outline-none focus:border-indigo-500"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-500 uppercase">IPA (Pronunciation)</label>
                            <input
                              type="text"
                              value={q.ipa || ''}
                              onChange={(e) => handleQuestQuestionChange(qIdx, 'ipa', e.target.value)}
                              placeholder="/ˈbæ.ɡet/"
                              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-teal-700 outline-none focus:border-indigo-500"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-500 uppercase">Explanation Hint</label>
                            <input
                              type="text"
                              value={q.explanation}
                              onChange={(e) => handleQuestQuestionChange(qIdx, 'explanation', e.target.value)}
                              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 outline-none focus:border-indigo-500"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                 )}
              </div>
            </Card>
            );
          })()}

          {/* 2. STANDARD QUESTIONS EDITOR */}
          {isQuestionsPool && selectedGradeId && (
            <div className="space-y-5 animate-slide-up">

              {/* Topic Selector Box */}
              <Card className="bg-white border border-slate-200 p-6 shadow-sm rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 flex-grow">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">
                    Select Topic / World
                  </label>
                  <select
                    value={selectedWorldId || ''}
                    onChange={(e) => {
                      setSelectedWorldId(e.target.value || null);
                      setEditingQuestionId(null);
                      setIsAddingQuestion(false);
                    }}
                    className="w-full md:w-80 bg-slate-50 border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500 cursor-pointer shadow-sm"
                  >
                    <option value="">-- Choose a Topic --</option>
                    {Object.values({ ...WORLDS_DATABASE, ...customWorlds })
                      .filter(w => normalizeGrade(w.grade) === normalizeGrade(selectedGradeId) && (w.subject || 'math') === (activeTab === 'math' ? 'math' : 'english'))
                      .map(w => (
                        <option key={w.id} value={w.topicId}>{w.emoji} {w.name} ({w.topicId})</option>
                      ))
                    }
                  </select>
                </div>
                {selectedWorldId && (
                  <div className="text-right text-xs text-slate-500 font-semibold md:self-end md:mb-2">
                    Editing custom questions for <span className="text-indigo-650 font-black">{selectedWorldId}</span>
                  </div>
                )}
              </Card>

              {/* Add/Edit Form Box */}
              {(editingQuestionId || isAddingQuestion) && (
                <Card className="bg-white border-2 border-indigo-500/20 p-6 space-y-6 shadow shadow-indigo-100 rounded-2xl">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-black text-slate-900 flex items-center gap-1">
                      {isAddingQuestion ? '➕ Create Question' : '📝 Modify Question Details'}
                    </h3>

                    <div className="flex gap-2">
                      <Button variant="gray" size="sm" onClick={() => { setEditingQuestionId(null); setIsAddingQuestion(false); }} className="text-xs font-bold border border-slate-200 bg-white hover:bg-slate-55 cursor-pointer">
                        <X className="w-3.5 h-3.5" /> Cancel
                      </Button>
                      <Button variant="green" size="sm" onClick={saveQuestionForm} className="text-xs font-black cursor-pointer flex items-center gap-1 shadow-sm">
                        <Check className="w-3.5 h-3.5" /> Save Question
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-500 block">Question ID</label>
                      <input
                        type="text"
                        value={questionForm.id}
                        disabled={!isAddingQuestion}
                        onChange={(e) => setQuestionForm({ ...questionForm, id: e.target.value })}
                        className="w-full bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500 disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-500 block">Difficulty Scaling</label>
                      <select
                        value={questionForm.difficulty}
                        onChange={(e) => setQuestionForm({ ...questionForm, difficulty: e.target.value as any })}
                        className="w-full bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500"
                      >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-500 block">Illustration Path Clue</label>
                      <input
                        type="text"
                        value={questionForm.imageUrl}
                        onChange={(e) => setQuestionForm({ ...questionForm, imageUrl: e.target.value })}
                        placeholder="/dustpan.png"
                        className="w-full bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-500 block">Question/Equation Spell Prompt</label>
                    <input
                      type="text"
                      value={questionForm.question}
                      onChange={(e) => setQuestionForm({ ...questionForm, question: e.target.value })}
                      placeholder="e.g. 5 + 3 = ?"
                      className="w-full bg-white border-2 border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-black text-slate-900 outline-none focus:border-indigo-500"
                    />
                  </div>

                  {/* Options List */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {Array.from({ length: 4 }).map((_, cIdx) => (
                      <div key={`opt-${cIdx}`} className="space-y-1">
                        <label className="text-[10px] font-black text-slate-400 uppercase">Option {cIdx + 1}</label>
                        <input
                          type="text"
                          value={questionForm.choices[cIdx]}
                          onChange={(e) => {
                            const newChoices = [...questionForm.choices];
                            newChoices[cIdx] = e.target.value;
                            setQuestionForm({ ...questionForm, choices: newChoices });
                          }}
                          placeholder={`Option ${cIdx + 1}`}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-500 block">Correct Answer Value</label>
                      <input
                        type="text"
                        value={questionForm.correctAnswer}
                        onChange={(e) => setQuestionForm({ ...questionForm, correctAnswer: e.target.value })}
                        placeholder="Must match correct option exactly"
                        className="w-full bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-bold text-emerald-655 outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-500 block">Spoken Audio Hint</label>
                      <input
                        type="text"
                        value={questionForm.hint}
                        onChange={(e) => setQuestionForm({ ...questionForm, hint: e.target.value })}
                        placeholder="Listen hint"
                        className="w-full bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-500 block">Scroll Explanatory Text</label>
                      <input
                        type="text"
                        value={questionForm.explanation}
                        onChange={(e) => setQuestionForm({ ...questionForm, explanation: e.target.value })}
                        placeholder="Explanation content"
                        className="w-full bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </Card>
              )}

              {/* Questions List Card */}
              <Card className="bg-white border border-slate-200 p-6 space-y-4 shadow-sm rounded-2xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h2 className="text-lg font-black text-slate-900">
                      📚 {activeTab === 'math' ? 'Math' : 'English'} Questions Pool
                    </h2>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">
                      Grade {selectedGradeId} • Topic: <span className="text-indigo-650 font-black">{selectedWorldId}</span> ({filteredQuestions.length} matches)
                    </p>
                  </div>

                  {selectedWorldId && (
                    <Button variant="green" size="sm" onClick={startAddQuestion} className="flex items-center gap-1 shadow-sm cursor-pointer">
                      <Plus className="w-4 h-4" /> Create Question
                    </Button>
                  )}
                </div>

                {!selectedWorldId ? (
                  <div className="text-center py-10 text-slate-400 font-bold text-sm bg-slate-55 rounded-xl border-2 border-dashed border-slate-200">
                    💡 Please select a topic from the dropdown above to manage its questions.
                  </div>
                ) : filteredQuestions.length === 0 ? (
                  <div className="text-center py-10 text-slate-400 font-bold text-sm bg-slate-55 rounded-xl border-2 border-dashed border-slate-200">
                    No questions matched this selection. Click Create Question to add one!
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-medium text-slate-650">
                      <thead className="bg-slate-50 uppercase font-black tracking-wider text-slate-500 border-b border-slate-200">
                        <tr>
                          <th className="px-4 py-3">ID</th>
                          <th className="px-4 py-3">Difficulty</th>
                          <th className="px-4 py-3">Question Prompt</th>
                          <th className="px-4 py-3">Correct Answer</th>
                          <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {filteredQuestions.map((q) => (
                          <tr key={`q-row-${q.id}`} className="hover:bg-slate-50/75 transition-colors">
                            <td className="px-4 py-3.5 font-bold text-slate-400">{q.id}</td>

                            <td className="px-4 py-3.5">
                              <span className={`px-2 py-0.5 rounded-full font-bold uppercase text-[9px] border ${q.difficulty === 'easy'
                                ? 'bg-emerald-50 border-emerald-250 text-emerald-700'
                                : q.difficulty === 'medium'
                                  ? 'bg-amber-50 border-amber-250 text-amber-700'
                                  : 'bg-rose-50 border-rose-250 text-rose-700'
                                }`}>
                                {q.difficulty || 'easy'}
                              </span>
                            </td>

                            <td className="px-4 py-3.5 max-w-xs truncate font-black text-slate-800">{q.question}</td>

                            <td className="px-4 py-3.5 font-extrabold text-emerald-600">{q.correctAnswer}</td>

                            <td className="px-4 py-3.5 text-right flex justify-end gap-1.5">
                              <button
                                onClick={() => startEditQuestion(q)}
                                className="p-1.5 text-slate-400 hover:text-indigo-650 transition-colors cursor-pointer"
                                title="Edit"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteQuestion(q.id)}
                                className="p-1.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </Card>
            </div>
          )}

          {activeTab === 'english' && englishSubTab === 'standard' && (() => {
            const allQuestsList = getAllQuests();
            
            const allWorldsList = Object.values({ ...WORLDS_DATABASE, ...customWorlds })
              .filter(w => (w.subject || 'math') === 'english' && !deletedWorldIds.includes(w.id));

            const filteredQuests = allQuestsList.filter(q => {
              if (poolSelectedGrade && normalizeGrade(q.grade) !== normalizeGrade(poolSelectedGrade)) return false;
              if (poolSelectedWorld) {
                if (poolSelectedWorld === 'none') {
                  if (q.topicId) return false;
                } else {
                  if (q.topicId !== poolSelectedWorld) return false;
                }
              }
              if (poolSearchQuery) {
                const query = poolSearchQuery.toLowerCase();
                const titleMatch = q.title.toLowerCase().includes(query);
                const channelMatch = q.channel.toLowerCase().includes(query);
                const wordsMatch = q.words.some((w: string) => w.toLowerCase().includes(query));
                if (!titleMatch && !channelMatch && !wordsMatch) return false;
              }
              return true;
            });

            const sortedQuests = [...filteredQuests].sort((a, b) => {
              const gradeA = getGradeOrder(a.grade);
              const gradeB = getGradeOrder(b.grade);
              if (gradeA !== gradeB) return gradeA - gradeB;

              const nameA = a.topicId ? findWorldNameAndEmoji(a.topicId, a.grade).name : '';
              const nameB = b.topicId ? findWorldNameAndEmoji(b.topicId, b.grade).name : '';
              const worldComp = nameA.localeCompare(nameB, undefined, { sensitivity: 'base' });
              if (worldComp !== 0) return worldComp;

              if (a.levelNum !== b.levelNum) return a.levelNum - b.levelNum;

              return (a.title || '').localeCompare(b.title || '', undefined, { sensitivity: 'base' });
            });

            const targetWorldsForMove = allWorldsList.filter(w => normalizeGrade(w.grade) === normalizeGrade(bulkTargetGrade));

            const totalItems = sortedQuests.length;
            const pageSizeNum = poolPageSize === 'all' ? totalItems : parseInt(poolPageSize, 10) || 20;
            const totalPages = Math.max(1, Math.ceil(totalItems / pageSizeNum));

            // Adjust current page if out of bounds
            const activePage = Math.min(poolCurrentPage, totalPages);
            const startIndex = (activePage - 1) * pageSizeNum;
            const paginatedQuests = sortedQuests.slice(startIndex, startIndex + pageSizeNum);

            const pageKeys = paginatedQuests.map(q => `${q.grade}_${q.topicId}_${q.levelNum}`);
            const isPageSelected = pageKeys.length > 0 && pageKeys.every(k => selectedQuestKeys.includes(k));

            return (
              <div className="space-y-5 animate-slide-up">
                {/* Dashboard Header with Bulk Import button */}
                <div className="flex justify-between items-center flex-wrap gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-lg font-black text-slate-900">
                      🏆 Quest Pools Dashboard
                    </h2>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">
                      Manage global video quests, search across worlds, and bulk import playlist videos.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <Button
                      variant="green"
                      size="sm"
                      disabled={!poolSelectedGrade}
                      onClick={() => handleAutoOrganizeGrade(poolSelectedGrade)}
                      className="flex items-center gap-1.5 shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      title={!poolSelectedGrade ? "Please select a Grade Filter below to organize" : ""}
                    >
                      🧙‍♂️ Auto-Organize {poolSelectedGrade ? `Grade ${poolSelectedGrade === 'K' ? 'K' : poolSelectedGrade}` : 'by Grade'}
                    </Button>
                    <Button
                      variant="purple"
                      size="sm"
                      onClick={() => {
                        setPlaylistInput('');
                        setExtractedPlaylistVideos([]);
                        setSelectedPlaylistVideos([]);
                        setBulkImportGrade(selectedGradeId || '1');
                        setBulkImportWorld('auto');
                        setBulkImportImageSource('antigravity');
                        setIsBulkImportOpen(true);
                      }}
                      className="flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Plus className="w-4 h-4 shrink-0" /> Bulk Import Playlist
                    </Button>
                  </div>
                </div>

                {/* Search & Filter Panel */}
                <Card className="bg-white border border-slate-200 p-6 shadow-sm rounded-2xl space-y-4">
                  <div className="flex flex-col md:flex-row gap-4 items-end">
                    <div className="flex-1 space-y-1">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest block">
                        Search Video Quests
                      </label>
                      <div className="relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          value={poolSearchQuery}
                          onChange={(e) => {
                            setPoolSearchQuery(e.target.value);
                            setPoolCurrentPage(1);
                          }}
                          placeholder="Search title, vocabulary, or channel..."
                          className="w-full bg-slate-50 border-2 border-slate-205 border-slate-200 rounded-xl pl-9 pr-3 py-2 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500 shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="w-full md:w-40 space-y-1">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest block">
                        Grade Filter
                      </label>
                      <select
                        value={poolSelectedGrade}
                        onChange={(e) => {
                          const val = e.target.value;
                          setPoolSelectedGrade(val);
                          setPoolSelectedWorld('');
                          setSelectedGradeId(val === '' ? null : val);
                          setPoolCurrentPage(1);
                        }}
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500 cursor-pointer shadow-sm"
                      >
                        <option value="">All Grades</option>
                        {grades.map(g => (
                          <option key={`filter-grd-${g}`} value={g === 0 ? 'K' : String(g)}>
                            {g === 0 ? 'Kindergarten' : `Grade ${g}`}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="w-full md:w-56 space-y-1">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest block">
                        World / Topic Filter
                      </label>
                      <select
                        value={poolSelectedWorld}
                        onChange={(e) => {
                          setPoolSelectedWorld(e.target.value);
                          setPoolCurrentPage(1);
                        }}
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500 cursor-pointer shadow-sm"
                      >
                        <option value="">All Worlds</option>
                        <option value="none">No World / Topic</option>
                        {allWorldsList
                          .filter(w => !poolSelectedGrade || normalizeGrade(w.grade) === normalizeGrade(poolSelectedGrade))
                          .map(w => (
                            <option key={`filter-world-${w.id}`} value={w.topicId}>
                              {w.emoji} {w.name} ({w.grade === 0 || w.grade === 'K' ? 'K' : `G${w.grade}`})
                            </option>
                          ))
                        }
                      </select>
                    </div>
                  </div>
                </Card>

                {/* Bulk Move Action Panel */}
                {selectedQuestKeys.length > 0 && (
                  <Card className="bg-gradient-to-r from-indigo-50 to-emerald-50 border-2 border-indigo-100 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 animate-pop-in">
                    <div className="space-y-1">
                      <h4 className="font-black text-indigo-950 text-sm flex items-center gap-1.5">
                        📦 Bulk Move Actions
                      </h4>
                      <p className="text-xs text-indigo-800/80 font-bold">
                        {selectedQuestKeys.length} quest(s) selected. Choose a target Grade and World to move them.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2">
                        <select
                          value={bulkTargetGrade}
                          onChange={(e) => {
                            setBulkTargetGrade(e.target.value);
                            const forGrade = allWorldsList.filter(w => normalizeGrade(w.grade) === normalizeGrade(e.target.value));
                            setBulkTargetWorld(forGrade.length > 0 ? forGrade[0].topicId : '');
                          }}
                          className="bg-white border-2 border-indigo-200 rounded-xl px-2.5 py-1.5 text-xs font-bold outline-none focus:border-indigo-500 cursor-pointer"
                        >
                          {grades.map(g => (
                            <option key={`bulk-grd-${g}`} value={g === 0 ? 'K' : String(g)}>
                              Grade {g === 0 ? 'K' : g}
                            </option>
                          ))}
                        </select>

                        <select
                          value={bulkTargetWorld}
                          onChange={(e) => setBulkTargetWorld(e.target.value)}
                          className="bg-white border-2 border-indigo-200 rounded-xl px-2.5 py-1.5 text-xs font-bold outline-none focus:border-indigo-500 cursor-pointer min-w-[140px]"
                        >
                          {targetWorldsForMove.length === 0 ? (
                            <option value="">No Worlds Found</option>
                          ) : (
                            targetWorldsForMove.map(w => (
                              <option key={`bulk-world-${w.id}`} value={w.topicId}>
                                {w.emoji} {w.name}
                              </option>
                            ))
                          )}
                        </select>
                      </div>

                      <Button
                        variant="green"
                        size="sm"
                        disabled={!bulkTargetWorld}
                        onClick={() => handleBulkMove(bulkTargetGrade, bulkTargetWorld)}
                        className="text-xs font-black shadow-sm"
                      >
                        Move selected here
                      </Button>
                    </div>
                  </Card>
                )}

                {/* Quests List Table */}
                <Card className="bg-white border border-slate-200 p-6 space-y-4 shadow-sm rounded-2xl">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 flex-wrap gap-2">
                    <div>
                      <h3 className="text-lg font-black text-slate-900">
                        🏆 Quest Pools Dashboard
                      </h3>
                      <p className="text-xs text-slate-500 font-semibold mt-0.5">
                        {totalItems > 0 ? (
                          `Showing ${startIndex + 1}-${Math.min(startIndex + pageSizeNum, totalItems)} of ${totalItems} video quests (Total: ${allQuestsList.length})`
                        ) : (
                          `Showing 0 of 0 video quests (Total: ${allQuestsList.length})`
                        )}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-500">Show:</span>
                      <select
                        value={poolPageSize}
                        onChange={(e) => {
                          setPoolPageSize(e.target.value);
                          setPoolCurrentPage(1);
                        }}
                        className="bg-slate-50 border-2 border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-700 outline-none focus:border-indigo-500 cursor-pointer shadow-sm"
                      >
                        <option value="10">10 videos</option>
                        <option value="20">20 videos</option>
                        <option value="50">50 videos</option>
                        <option value="100">100 videos</option>
                        <option value="all">All videos</option>
                      </select>
                    </div>
                  </div>

                  {filteredQuests.length === 0 ? (
                    <div className="text-center py-12 text-slate-400 font-bold text-sm bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                      No video quests matched your search criteria.
                    </div>
                  ) : (
                    <>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs font-medium text-slate-655">
                          <thead className="bg-slate-50 uppercase font-black tracking-wider text-slate-500 border-b border-slate-200">
                            <tr>
                              <th className="px-4 py-3 w-10">
                                <input
                                  type="checkbox"
                                  checked={isPageSelected}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setSelectedQuestKeys(prev => {
                                        const newSelection = [...prev];
                                        pageKeys.forEach(k => {
                                          if (!newSelection.includes(k)) newSelection.push(k);
                                        });
                                        return newSelection;
                                      });
                                    } else {
                                      setSelectedQuestKeys(prev => prev.filter(k => !pageKeys.includes(k)));
                                    }
                                  }}
                                  className="w-4 h-4 rounded accent-indigo-600 cursor-pointer"
                                />
                              </th>
                              <th className="px-4 py-3">Grade</th>
                              <th className="px-4 py-3">World / Topic</th>
                              <th className="px-4 py-3">Level</th>
                              <th className="px-4 py-3">Video Title & Channel</th>
                              <th className="px-4 py-3">Vocabulary Words</th>
                              <th className="px-4 py-3">Questions</th>
                              <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 bg-white">
                            {paginatedQuests.map((q) => {
                              const canonicalKey = `${q.grade}_${q.topicId}_${q.levelNum}`;
                              const isSelected = selectedQuestKeys.includes(canonicalKey);
                              const worldDetails = findWorldNameAndEmoji(q.topicId, q.grade);

                              return (
                                <tr key={`quest-row-${canonicalKey}`} className={`hover:bg-slate-50/75 transition-colors ${isSelected ? 'bg-indigo-50/20' : ''}`}>
                                  <td className="px-4 py-3.5">
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={(e) => {
                                        if (e.target.checked) {
                                          setSelectedQuestKeys(prev => [...prev, canonicalKey]);
                                        } else {
                                          setSelectedQuestKeys(prev => prev.filter(k => k !== canonicalKey));
                                        }
                                      }}
                                      className="w-4 h-4 rounded accent-indigo-600 cursor-pointer"
                                    />
                                  </td>

                                  <td className="px-4 py-2">
                                    <select
                                      value={normalizeGrade(q.grade)}
                                      onChange={(e) => {
                                        const newGrade = e.target.value;
                                        const newGradeWorlds = allWorldsList.filter(w => normalizeGrade(w.grade) === normalizeGrade(newGrade));
                                        const hasSameTopic = newGradeWorlds.some(w => w.topicId === q.topicId);
                                        const targetTopicId = hasSameTopic ? q.topicId : '';
                                        handleMoveQuestInline(q, newGrade, targetTopicId);
                                      }}
                                      className="bg-slate-50 border-2 border-slate-200 text-slate-700 font-bold px-2 py-1 rounded-xl text-xs outline-none focus:border-indigo-500 cursor-pointer shadow-sm"
                                    >
                                      {grades.map(g => (
                                        <option key={`row-grd-${q.originalKey}-${g}`} value={g === 0 ? 'K' : String(g)}>
                                          {g === 0 ? 'Kindergarten' : `Grade ${g}`}
                                        </option>
                                      ))}
                                    </select>
                                  </td>

                                  <td className="px-4 py-2">
                                    <select
                                      value={q.topicId || ''}
                                      onChange={(e) => {
                                        const newTopicId = e.target.value;
                                        handleMoveQuestInline(q, q.grade, newTopicId);
                                      }}
                                      className="bg-slate-50 border-2 border-slate-200 text-slate-700 font-black px-2 py-1 rounded-xl text-xs outline-none focus:border-indigo-500 cursor-pointer shadow-sm max-w-[170px]"
                                    >
                                      <option value="">(none)</option>
                                      {allWorldsList
                                        .filter(w => normalizeGrade(w.grade) === normalizeGrade(q.grade))
                                        .map(w => (
                                          <option key={`row-world-${q.originalKey}-${w.id}`} value={w.topicId}>
                                            {w.emoji} {w.name}
                                          </option>
                                        ))
                                      }
                                    </select>
                                  </td>

                                  <td className="px-4 py-2.5">
                                    <span className="bg-indigo-50 text-indigo-700 font-black px-2.5 py-0.5 rounded-full whitespace-nowrap">
                                      Lvl {q.levelNum}
                                    </span>
                                  </td>

                                  <td className="px-4 py-2.5 max-w-xs">
                                    <span className="font-black text-slate-800 block truncate" title={q.title}>
                                      {q.title}
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-semibold block truncate mt-0.5">
                                      {q.channel}
                                    </span>
                                  </td>

                                  <td className="px-4 py-2.5 max-w-xs">
                                    <div className="flex flex-wrap gap-1">
                                      {q.words.map((w: string, idx: number) => {
                                        const hasImageLink = q.quest.questions?.some(
                                          (questQ: any) => 
                                            questQ.correctAnswer?.toLowerCase().trim() === w.toLowerCase().trim() && 
                                            !!questQ.imageUrl
                                        );
                                        const isMissing = missingIconsQueue.some(
                                          m => m.toLowerCase().trim() === w.toLowerCase().trim()
                                        ) && !hasImageLink;
                                        return (
                                          <span
                                            key={idx}
                                            className={`font-bold px-1.5 py-0.5 rounded text-[10px] flex items-center gap-1 transition-colors ${
                                              isMissing
                                                ? 'bg-rose-50 text-rose-700 border border-dashed border-rose-200 hover:bg-rose-100/70 cursor-help'
                                                : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                                            }`}
                                            title={isMissing ? `Broken or missing image for "${w}"` : `Valid image for "${w}"`}
                                          >
                                            {isMissing && <ImageOff className="w-2.5 h-2.5 shrink-0 text-rose-500" />}
                                            {w}
                                          </span>
                                        );
                                      })}
                                    </div>
                                  </td>

                                  <td className="px-4 py-3.5 font-extrabold text-slate-700">
                                    {q.questionsCount} questions
                                  </td>

                                  <td className="px-4 py-3.5 text-right flex justify-end gap-1.5">
                                    <button
                                      onClick={() => handleEditQuestFromPool(q.grade, q.topicId, q.levelNum)}
                                      className="p-1.5 text-slate-400 hover:text-indigo-650 transition-colors cursor-pointer"
                                      title="Edit Video Quest"
                                    >
                                      <Edit3 className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={() => handleDeleteQuestFromPool(q.grade, q.topicId, q.levelNum)}
                                      className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                                      title="Delete Video Quest"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      {/* Pagination Controls */}
                      {totalPages > 1 && (
                        <div className="flex items-center justify-between border-t border-slate-100 pt-4 flex-wrap gap-2">
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                            <span>Page</span>
                            <select
                              value={String(activePage)}
                              onChange={(e) => setPoolCurrentPage(parseInt(e.target.value, 10))}
                              className="bg-slate-50 border-2 border-slate-200 rounded-lg px-2 py-0.5 text-xs font-bold text-slate-700 outline-none focus:border-indigo-500 cursor-pointer shadow-sm"
                            >
                              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(p => (
                                <option key={`pager-${p}`} value={String(p)}>
                                  {p}
                                </option>
                              ))}
                            </select>
                            <span>of {totalPages}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="gray"
                              size="sm"
                              disabled={activePage === 1}
                              onClick={() => setPoolCurrentPage(prev => Math.max(1, prev - 1))}
                              className="text-xs font-bold px-3 py-1 cursor-pointer disabled:opacity-50"
                            >
                              Previous
                            </Button>

                            {/* Render page numbers */}
                            {Array.from({ length: totalPages }, (_, idx) => idx + 1)
                              .filter(page => {
                                return page === 1 || page === totalPages || Math.abs(page - activePage) <= 1;
                              })
                              .map((page, idx, arr) => {
                                const showEllipsis = idx > 0 && page - arr[idx - 1] > 1;
                                return (
                                  <React.Fragment key={`page-btn-${page}`}>
                                    {showEllipsis && <span className="text-slate-400 px-1 font-bold text-xs">...</span>}
                                    <button
                                      onClick={() => setPoolCurrentPage(page)}
                                      className={`px-3 py-1 rounded-lg text-xs font-black transition-colors ${
                                        activePage === page
                                          ? 'bg-indigo-600 text-white shadow-sm'
                                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/60'
                                      }`}
                                    >
                                      {page}
                                    </button>
                                  </React.Fragment>
                                );
                              })}

                            <Button
                              variant="gray"
                              size="sm"
                              disabled={activePage === totalPages}
                              onClick={() => setPoolCurrentPage(prev => Math.min(totalPages, prev + 1))}
                              className="text-xs font-bold px-3 py-1 cursor-pointer disabled:opacity-50"
                            >
                              Next
                            </Button>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </Card>
              </div>
            );
          })()}

          {/* Worlds Tab */}
          {(activeTab === 'math-worlds' || activeTab === 'english-worlds') && (
            <div className="space-y-6">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <h2 className="text-2xl font-black text-slate-900">
                    Manage {activeTab === 'math-worlds' ? 'Math' : 'English'} Worlds
                  </h2>
                  <div className="flex bg-slate-100 p-0.5 rounded-xl border border-slate-200/60 shadow-inner shrink-0">
                    <button
                      onClick={() => setWorldsViewMode('grid')}
                      className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                        worldsViewMode === 'grid' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Grid View
                    </button>
                    <button
                      onClick={() => setWorldsViewMode('drag')}
                      className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                        worldsViewMode === 'drag' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Drag Organizer 🎴
                    </button>
                  </div>
                </div>
                <Button
                  variant="blue"
                  onClick={() => {
                    setIsAddingWorld(true);
                    setEditingWorldId(null);
                    setWorldForm({
                      id: '',
                      name: '',
                      grade: 'K',
                      topicId: '',
                      bgClass: 'bg-playful-dots bg-indigo-50',
                      nodeColor: 'blue',
                      emoji: '✨',
                      monsterNames: ['', '', '', '', ''],
                      monsterIds: ['muddy_slime', 'muddy_slime', 'muddy_slime', 'muddy_slime', 'sparky_dragon'],
                      subject: activeTab === 'math-worlds' ? 'math' : 'english',
                      totalLevels: 10,
                      badge: '',
                      bgStyle: '',
                      textStyle: '',
                      description: ''
                    });
                  }}
                  className="flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Add New {activeTab === 'math-worlds' ? 'Math' : 'English'} World
                </Button>
              </div>

              {(isAddingWorld || editingWorldId) && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                  <Card className="bg-white border-4 border-slate-200/80 p-6 space-y-6 shadow-2xl rounded-3xl animate-pop-in max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar">
                    <div className="flex justify-between items-center border-b border-slate-150 pb-4">
                      <h3 className="font-black text-slate-800 text-lg flex items-center gap-2">
                        🌎 {isAddingWorld ? 'Create New World' : `Editing World: ${editingWorldId}`}
                      </h3>
                      <button onClick={() => { setIsAddingWorld(false); setEditingWorldId(null); }} className="text-slate-400 hover:text-slate-650 cursor-pointer p-1 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors">
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-black text-slate-500 uppercase">World ID (Unique)</label>
                        <input
                          type="text"
                          value={worldForm.id}
                          onChange={(e) => setWorldForm({ ...worldForm, id: e.target.value })}
                          disabled={!!editingWorldId}
                          placeholder="e.g. g1-fractions"
                          className="w-full bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500 disabled:bg-slate-100"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-black text-slate-500 uppercase">Display Name</label>
                        <input
                          type="text"
                          value={worldForm.name}
                          onChange={(e) => handleWorldNameChange(e.target.value)}
                          placeholder="e.g. Fraction Forest"
                          className="w-full bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-black text-slate-500 uppercase">Grade</label>
                        <select
                          value={worldForm.grade}
                          onChange={(e) => {
                            const newGrade = e.target.value;
                            setWorldForm(prev => {
                              const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                              const topicSlug = slugify(prev.name || '');
                              const gradeStr = newGrade === 'K' || newGrade === '0' ? 'K' : newGrade;
                              const generatedId = `g${gradeStr.toLowerCase()}-${topicSlug}`;
                              return {
                                ...prev,
                                grade: newGrade,
                                id: editingWorldId ? prev.id : generatedId
                              };
                            });
                          }}
                          className="w-full bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500"
                        >
                          {grades.map(g => (
                            <option key={`form-grd-${g}`} value={g === 0 ? 'K' : g}>
                              {g === 0 ? 'Kindergarten' : `Grade ${g}`}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-black text-slate-500 uppercase">Topic ID</label>
                        <input
                          type="text"
                          value={worldForm.topicId}
                          onChange={(e) => setWorldForm({ ...worldForm, topicId: e.target.value })}
                          placeholder="e.g. fractions"
                          className="w-full bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-black text-slate-500 uppercase">Total Levels</label>
                        <input
                          type="number"
                          value={worldForm.totalLevels}
                          onChange={(e) => setWorldForm({ ...worldForm, totalLevels: parseInt(e.target.value) })}
                          className="w-full bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-black text-slate-500 uppercase">Emoji Icon</label>
                        <input
                          type="text"
                          value={worldForm.emoji}
                          onChange={(e) => setWorldForm({ ...worldForm, emoji: e.target.value })}
                          placeholder="✨"
                          className="w-full bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-black text-slate-500 uppercase">Node Color</label>
                        <select
                          value={worldForm.nodeColor}
                          onChange={(e) => setWorldForm({ ...worldForm, nodeColor: e.target.value as any })}
                          className="w-full bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500"
                        >
                          <option value="blue">Blue</option>
                          <option value="green">Green</option>
                          <option value="purple">Purple</option>
                          <option value="orange">Orange</option>
                          <option value="yellow">Yellow</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-black text-slate-500 uppercase">Badge Label</label>
                        <input
                          type="text"
                          value={worldForm.badge}
                          onChange={(e) => setWorldForm({ ...worldForm, badge: e.target.value })}
                          placeholder="Fractions 🍕"
                          className="w-full bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-500 uppercase">Description</label>
                      <textarea
                        value={worldForm.description}
                        onChange={(e) => setWorldForm({ ...worldForm, description: e.target.value })}
                        placeholder="Brief description of the world..."
                        className="w-full bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500 min-h-[80px]"
                      />
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-150">
                      <Button variant="gray" onClick={() => { setIsAddingWorld(false); setEditingWorldId(null); }} className="cursor-pointer">Cancel</Button>
                      <Button variant="blue" onClick={handleSaveWorld} className="flex items-center gap-2 cursor-pointer">
                        <Save className="w-4 h-4" /> Save World Configuration
                      </Button>
                    </div>
                  </Card>
                </div>
              )}

              {worldsViewMode === 'grid' ? (
                <>
                  {/* Search & Grade Filters for Worlds */}
                  <Card className="bg-white border border-slate-200 p-4 shadow-sm rounded-2xl flex flex-col sm:flex-row gap-4 items-center">
                    <div className="flex-1 w-full space-y-1">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Search Worlds</label>
                      <div className="relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          value={worldSearchQuery}
                          onChange={e => setWorldSearchQuery(e.target.value)}
                          placeholder="Search world name, description, or topic ID..."
                          className="w-full bg-slate-50 border-2 border-slate-205 border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs font-semibold outline-none focus:border-indigo-500 shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-48 space-y-1">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Filter by Grade</label>
                      <select
                        value={worldFilterGrade}
                        onChange={e => setWorldFilterGrade(e.target.value)}
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold outline-none focus:border-indigo-500 cursor-pointer shadow-sm"
                      >
                        <option value="">All Grades</option>
                        {grades.map(g => (
                          <option key={`world-filter-grd-${g}`} value={g === 0 ? 'K' : String(g)}>
                            {g === 0 ? 'Kindergarten' : `Grade ${g}`}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Combined list of static and custom worlds filtered by subject */}
                    {Object.entries({ ...WORLDS_DATABASE, ...customWorlds })
                      .filter(([_, world]) => {
                        const currentSubject = activeTab === 'math-worlds' ? 'math' : 'english';
                        if ((world.subject || 'math') !== currentSubject) return false;

                        // Filter out soft-deleted worlds
                        if (deletedWorldIds.includes(world.id)) return false;

                        // Filter by Grade
                        if (worldFilterGrade) {
                          const gradeStr = normalizeGrade(world.grade);
                          if (gradeStr !== worldFilterGrade) return false;
                        }

                        // Filter by Search Query
                        if (worldSearchQuery) {
                          const query = worldSearchQuery.toLowerCase();
                          const nameMatch = world.name?.toLowerCase().includes(query);
                          const descMatch = world.description?.toLowerCase().includes(query);
                          const topicMatch = world.topicId?.toLowerCase().includes(query);
                          if (!nameMatch && !descMatch && !topicMatch) return false;
                        }

                        return true;
                      })
                      .map(([id, world]) => (
                        <Card key={`world-card-${id}`} className="p-4 border border-slate-200 hover:border-indigo-300 transition-all group">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                              <span className="text-3xl">{world.emoji}</span>
                              <div>
                                <h4 className="font-black text-slate-900 leading-tight">{world.name}</h4>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                  {world.subject === 'english' ? '🔤 English' : '📐 Math'} • Grade {world.grade}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => {
                                  setEditingWorldId(id);
                                  setIsAddingWorld(false);
                                  setWorldForm({ ...world });
                                }}
                                className="p-1.5 text-slate-400 hover:text-indigo-650 hover:bg-slate-100 rounded-lg transition-colors"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              {customWorlds[id] && (
                                <button
                                  onClick={() => handleDeleteWorld(id)}
                                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </div>
                          <div className="text-[11px] text-slate-500 font-semibold line-clamp-2 mb-3">
                            {world.description || "No description provided."}
                          </div>
                          {(() => {
                            const savedLevelsCount = Array.from({ length: world.totalLevels || 10 }, (_, i) => i + 1)
                              .filter(lvl => !!videoQuests[`${world.topicId}-${lvl}`])
                              .length;
                            return (
                              <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase">
                                <span>{savedLevelsCount} / {world.totalLevels || 10} Levels Configured</span>
                                {customWorlds[id] && <span className="text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">Custom</span>}
                              </div>
                            );
                          })()}
                        </Card>
                      ))}
                  </div>
                </>
              ) : (
                /* Drag Organizer (Kanban Board) View */
                <div className="space-y-3">
                  <div className="bg-indigo-50 border border-indigo-150 rounded-2xl px-4 py-3 text-xs font-black text-indigo-750 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm select-none">
                    <span className="flex items-center gap-2 text-center md:text-left">💡 Drag-and-Drop worlds onto any grade lane. Filter or swipe/scroll horizontally to view all grades ➔</span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-black text-indigo-650 uppercase tracking-wider">Show:</span>
                      <select
                        value={dragViewFilterGrade}
                        onChange={(e) => setDragViewFilterGrade(e.target.value)}
                        className="bg-white border-2 border-indigo-200 text-indigo-800 rounded-xl px-2.5 py-1 text-xs font-bold outline-none cursor-pointer hover:border-indigo-400 transition-colors"
                      >
                        <option value="">All Lanes (13)</option>
                        {grades.map(g => (
                          <option key={`drag-lane-opt-${g}`} value={g === 0 ? 'K' : String(g)}>
                            {g === 0 ? 'Kindergarten' : `Grade ${g}`}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-4 overflow-x-auto pb-6 pt-2 custom-scrollbar snap-x min-h-[500px]">
                  {grades
                    .filter(g => {
                      if (!dragViewFilterGrade) return true;
                      const gradeKey = g === 0 ? 'K' : g.toString();
                      return gradeKey === dragViewFilterGrade;
                    })
                    .map(g => {
                    const gradeKey = g === 0 ? 'K' : g.toString();
                    const isDragOver = dragOverGrade === gradeKey;

                    const worldsInGrade = Object.entries({ ...WORLDS_DATABASE, ...customWorlds })
                      .filter(([_, world]) => {
                        const currentSubject = activeTab === 'math-worlds' ? 'math' : 'english';
                        if ((world.subject || 'math') !== currentSubject) return false;
                        if (deletedWorldIds.includes(world.id)) return false;
                        return normalizeGrade(world.grade) === gradeKey;
                      });

                    return (
                      <div
                        key={`drag-col-${gradeKey}`}
                        onDragOver={(e) => {
                          e.preventDefault();
                          if (dragOverGrade !== gradeKey) setDragOverGrade(gradeKey);
                        }}
                        onDragLeave={() => setDragOverGrade(null)}
                        onDrop={(e) => {
                          e.preventDefault();
                          setDragOverGrade(null);
                          const worldId = e.dataTransfer.getData('text/plain');
                          if (worldId) handleDropWorld(worldId, gradeKey);
                        }}
                        className={`flex-shrink-0 w-72 rounded-2xl p-4 transition-all duration-200 border-2 flex flex-col min-h-[400px] ${
                          isDragOver
                            ? 'border-dashed border-indigo-500 bg-indigo-50/50 scale-[1.01]'
                            : 'border-slate-200 bg-slate-50/50'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-black text-slate-800 text-sm">
                            {g === 0 ? 'Kindergarten' : `Grade ${g}`}
                          </h3>
                          <span className="text-[10px] font-black bg-slate-205 bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                            {worldsInGrade.length}
                          </span>
                        </div>

                        <div className="flex-1 space-y-3 overflow-y-auto custom-scrollbar max-h-[550px] pr-1">
                          {worldsInGrade.map(([id, world]) => (
                            <div
                              key={`draggable-world-${id}`}
                              draggable="true"
                              onDragStart={(e) => {
                                e.dataTransfer.setData('text/plain', id);
                                e.dataTransfer.effectAllowed = 'move';
                              }}
                              className="p-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 hover:shadow-sm cursor-grab active:cursor-grabbing transition-all select-none group"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="text-xl">{world.emoji}</span>
                                  <h4 className="font-bold text-slate-800 text-xs truncate max-w-[160px]">
                                    {world.name}
                                  </h4>
                                </div>
                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button
                                    onClick={() => {
                                      setEditingWorldId(id);
                                      setIsAddingWorld(false);
                                      setWorldForm({ ...world });
                                    }}
                                    className="p-1 text-slate-400 hover:text-indigo-650 hover:bg-slate-100 rounded"
                                  >
                                    <Edit3 className="w-3.5 h-3.5" />
                                  </button>
                                  {customWorlds[id] && (
                                    <button
                                      onClick={() => handleDeleteWorld(id)}
                                      className="p-1 text-slate-400 hover:text-rose-600 hover:bg-slate-100 rounded"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                </div>
                              </div>
                              {(() => {
                                const savedLevelsCount = Array.from({ length: world.totalLevels || 10 }, (_, i) => i + 1)
                                  .filter(lvl => !!videoQuests[`${world.topicId}-${lvl}`])
                                  .length;
                                return (
                                  <p className="text-[10px] text-slate-400 font-semibold mt-1">
                                    Topic: {world.topicId} • Levels: {savedLevelsCount}/{world.totalLevels || 10}
                                  </p>
                                );
                              })()}
                            </div>
                          ))}
                          {worldsInGrade.length === 0 && (
                            <div className="h-24 flex items-center justify-center border border-dashed border-slate-200 rounded-xl text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                              Drop Worlds Here
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            </div>
          )}
        </div>
      </main>

      {/* Bulk Playlist Import Modal */}
      {isBulkImportOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-45 flex items-center justify-center p-4">
          <Card className="bg-white border border-slate-200 max-w-2xl w-full p-6 text-left space-y-4 shadow-2xl rounded-3xl animate-pop-in flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  📂 Bulk Playlist Import
                </h3>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  Import video lessons and generate quizzes for multiple levels of Grade {selectedGradeId} at once.
                </p>
              </div>
              {!isImportingBulk && (
                <button 
                  onClick={() => setIsBulkImportOpen(false)} 
                  className="text-slate-400 hover:text-slate-600 cursor-pointer p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto pr-1 space-y-4 custom-scrollbar">
              {isImportingBulk ? (
                /* Import Progress State */
                <div className="space-y-4 py-4">
                  <div className="flex items-center justify-between text-sm font-bold text-slate-700">
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 text-indigo-650 animate-spin" />
                      Importing playlist videos...
                    </span>
                    <span>
                      {bulkImportProgress.current} / {bulkImportProgress.total}
                    </span>
                  </div>

                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
                    <div 
                      className="bg-indigo-650 h-full transition-all duration-300"
                      style={{ width: `${(bulkImportProgress.current / (bulkImportProgress.total || 1)) * 100}%` }}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                      Process Logs
                    </label>
                    <div className="h-[250px] overflow-y-auto bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-[11px] leading-relaxed space-y-1 custom-scrollbar shadow-inner">
                      {bulkImportProgress.log.map((logLine, idx) => (
                        <div key={`log-${idx}`} className="break-all whitespace-pre-wrap">
                          {logLine}
                        </div>
                      ))}
                      <div ref={logEndRef} />
                    </div>
                  </div>
                </div>
              ) : extractedPlaylistVideos.length === 0 ? (
                /* Search / Fetch State */
                <div className="space-y-4 py-4">
                  <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 flex gap-3 items-start">
                    <span className="text-xl">💡</span>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                      Retrieve video titles and IDs from a public YouTube playlist to automatically populate lesson levels for Grade {selectedGradeId}.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-500 block">
                      YouTube Playlist Link or ID
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. https://www.youtube.com/playlist?list=PLMC9KNkIncKseYxEr5HJ0LYHDsC6aqM_F"
                        value={playlistInput}
                        onChange={(e) => setPlaylistInput(e.target.value)}
                        disabled={isFetchingPlaylist}
                        className="flex-1 bg-white border-2 border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500 disabled:bg-slate-50 disabled:text-slate-400"
                      />
                      <Button
                        variant="blue"
                        onClick={handleFetchPlaylist}
                        disabled={isFetchingPlaylist || !playlistInput.trim()}
                        className="flex items-center gap-1.5 shadow-sm cursor-pointer whitespace-nowrap"
                      >
                        {isFetchingPlaylist ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Fetching...
                          </>
                        ) : (
                          "Fetch Videos"
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Selection / Run State */
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-black text-slate-500">
                    <span>Select videos to import: ({selectedPlaylistVideos.length} selected)</span>
                    <div className="flex gap-2.5">
                      <button 
                        type="button"
                        onClick={() => setSelectedPlaylistVideos(extractedPlaylistVideos.map((_, i) => i))}
                        className="text-indigo-650 hover:text-indigo-850 font-bold hover:underline cursor-pointer"
                      >
                        Select All
                      </button>
                      <span>•</span>
                      <button 
                        type="button"
                        onClick={() => setSelectedPlaylistVideos([])}
                        className="text-indigo-650 hover:text-indigo-850 font-bold hover:underline cursor-pointer"
                      >
                        Deselect All
                      </button>
                    </div>
                  </div>

                  <div className="max-h-[220px] overflow-y-auto border border-slate-200 rounded-2xl p-2.5 bg-slate-50 space-y-1.5 custom-scrollbar">
                    {(() => {
                      const existingVideoIds = new Set<string>();
                      Object.values(videoQuests).forEach((quest: any) => {
                        if (quest && quest.videoUrl) {
                          const match = quest.videoUrl.match(/(?:embed\/|v=|\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                          if (match) existingVideoIds.add(match[1]);
                        }
                      });

                      return extractedPlaylistVideos.map((video, idx) => {
                        const isAlreadyImported = existingVideoIds.has(video.videoId);
                        const isChecked = selectedPlaylistVideos.includes(idx);
                        return (
                          <label 
                            key={`bulk-vid-${video.videoId}-${idx}`}
                            className={`flex items-center gap-3 p-2 bg-white rounded-xl border transition-all ${
                              isAlreadyImported 
                                ? 'opacity-65 border-slate-100 bg-slate-50 cursor-not-allowed'
                                : isChecked 
                                ? 'border-indigo-200 bg-indigo-50/20 cursor-pointer' 
                                : 'border-slate-100 hover:border-slate-200 cursor-pointer'
                            }`}
                          >
                            <input 
                              type="checkbox"
                              checked={isChecked}
                              disabled={isAlreadyImported}
                              onChange={() => {
                                if (isAlreadyImported) return;
                                setSelectedPlaylistVideos(prev => 
                                  prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
                                );
                              }}
                              className="rounded border-slate-300 text-indigo-650 focus:ring-indigo-500 w-4 h-4 cursor-pointer disabled:cursor-not-allowed"
                            />
                            <div className="bg-slate-100 rounded-lg p-2 text-slate-500 shrink-0">
                              <Film className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-extrabold text-slate-800 truncate">{video.title}</p>
                              <p className="text-[10px] text-slate-400 font-semibold font-mono truncate flex items-center gap-1.5">
                                <span>ID: {video.videoId}</span>
                                {isAlreadyImported && (
                                  <span className="bg-amber-100 text-amber-800 font-extrabold px-1.5 py-0.5 rounded text-[8px] uppercase tracking-wider">
                                    Already in Library
                                  </span>
                                )}
                              </p>
                            </div>
                          </label>
                        );
                      });
                    })()}
                  </div>

                  <div className="bg-indigo-50/45 border border-indigo-100 rounded-2xl p-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {/* Grade Selector */}
                      <div className="space-y-1 col-span-1">
                        <label className="text-xs font-black text-indigo-900 block">Target Grade</label>
                        <select
                          value={bulkImportGrade}
                          onChange={(e) => {
                            const newG = e.target.value;
                            setBulkImportGrade(newG);
                            setBulkImportWorld('auto');
                          }}
                          className="w-full bg-white border-2 border-slate-200 text-slate-700 px-3 py-2 rounded-xl text-xs font-bold outline-none focus:border-indigo-500 cursor-pointer shadow-sm"
                        >
                          {grades.map(g => (
                            <option key={`bulk-import-grd-${g}`} value={g === 0 ? 'K' : String(g)}>
                              Grade {g === 0 ? 'K' : g}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* World/Topic Selector */}
                      <div className="space-y-1 col-span-1">
                        <label className="text-xs font-black text-indigo-900 block">Target World / Topic</label>
                        <select
                          value={bulkImportWorld}
                          onChange={(e) => setBulkImportWorld(e.target.value)}
                          className="w-full bg-white border-2 border-slate-200 text-slate-700 px-3 py-2 rounded-xl text-xs font-bold outline-none focus:border-indigo-500 cursor-pointer shadow-sm"
                        >
                          <option value="auto">⚡ Auto-Categorize (Detect)</option>
                          <option value="none">❌ None (Organize later)</option>
                          {Object.values({ ...WORLDS_DATABASE, ...customWorlds })
                            .filter(w => (w.subject || 'math') === 'english' && !deletedWorldIds.includes(w.id) && normalizeGrade(w.grade) === normalizeGrade(bulkImportGrade))
                            .map(w => (
                              <option key={`bulk-import-world-${w.id}`} value={w.topicId}>
                                {w.emoji} {w.name}
                              </option>
                            ))
                          }
                        </select>
                      </div>

                      {/* Starting Level Selector */}
                      <div className="space-y-1 col-span-1">
                        <label className="text-xs font-black text-indigo-900 block">Starting Level</label>
                        <select
                          value={bulkStartingLevelNum}
                          onChange={(e) => setBulkStartingLevelNum(Number(e.target.value))}
                          className="w-full bg-white border-2 border-slate-200 text-slate-700 px-3 py-2 rounded-xl text-xs font-bold outline-none focus:border-indigo-500 cursor-pointer shadow-sm"
                        >
                          {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                            <option key={`bulk-import-lvl-${num}`} value={num}>Level {num}</option>
                          ))}
                        </select>
                      </div>

                      {/* Image Generator Selector */}
                      <div className="space-y-1 col-span-1">
                        <label className="text-xs font-black text-indigo-900 block">Image Generator</label>
                        <select
                          value={bulkImportImageSource}
                          onChange={(e) => setBulkImportImageSource(e.target.value)}
                          className="w-full bg-white border-2 border-slate-200 text-slate-700 px-3 py-2 rounded-xl text-xs font-bold outline-none focus:border-indigo-500 cursor-pointer shadow-sm"
                        >
                          <option value="antigravity">Antigravity (Cartoon)</option>
                          <option value="pexels">Pexels (Photos)</option>
                          <option value="pixabay">Pixabay (Vectors)</option>
                        </select>
                      </div>
                    </div>

                    <p className="text-[10px] text-indigo-700 font-semibold leading-normal">
                      💡 Videos will be imported into Grade {bulkImportGrade === '0' || bulkImportGrade === 'K' || bulkImportGrade === 0 ? 'K' : bulkImportGrade}. 
                      {bulkImportWorld === 'auto' 
                        ? " The system will automatically analyze each video title/description to match it to a suitable world. Unmatched videos will be left uncategorized." 
                        : bulkImportWorld === 'none'
                        ? " All videos will be left uncategorized (none)."
                        : ` All videos will be placed in the "${Object.values({ ...WORLDS_DATABASE, ...customWorlds }).find(w => w.topicId === bulkImportWorld)?.name || bulkImportWorld}" world.`
                      } Levels will start from Level {bulkStartingLevelNum} and fill the next available levels up to Level 10.
                    </p>
                  </div>

                  <div className="bg-rose-50 border border-rose-100 rounded-xl p-3 flex gap-2 items-start">
                    <span className="text-xs">⚠️</span>
                    <p className="text-[10px] text-rose-700 font-bold leading-relaxed">
                      Existing content for the target levels will be overwritten. Bulk import executes video-by-video sequentially. Do not reload or close this page during import.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
              {!isImportingBulk && (
                <>
                  {extractedPlaylistVideos.length > 0 ? (
                    <Button 
                      variant="gray" 
                      onClick={() => {
                        setExtractedPlaylistVideos([]);
                        setSelectedPlaylistVideos([]);
                      }}
                      className="cursor-pointer"
                    >
                      Clear / Back
                    </Button>
                  ) : (
                    <Button 
                      variant="gray" 
                      onClick={() => setIsBulkImportOpen(false)}
                      className="cursor-pointer"
                    >
                      Cancel
                    </Button>
                  )}
                  {extractedPlaylistVideos.length > 0 && (
                    <Button
                      variant="green"
                      onClick={handleRunBulkImport}
                      disabled={selectedPlaylistVideos.length === 0}
                      className="flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      Start Import ({selectedPlaylistVideos.length} Videos)
                    </Button>
                  )}
                </>
              )}
            </div>
          </Card>
        </div>
      )}
      {/* Missing Custom Icons Queue Modal */}
      {isShowingMissingIconsModal && (
        <div className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="bg-white border border-slate-200 max-w-2xl w-full shadow-2xl rounded-3xl overflow-hidden flex flex-col animate-pop-in">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-white" />
                <div>
                  <h2 className="text-white font-black text-base leading-tight">⚠️ Missing Custom Icons Queue</h2>
                  <p className="text-white/80 text-[10px] font-semibold">
                    {missingIconsQueue.length} word(s) currently in the queue
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsShowingMissingIconsModal(false)} 
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 flex-grow overflow-y-auto">
              <p className="text-xs text-slate-650 font-semibold leading-relaxed">
                These words do not have custom icons in Supabase yet. Copy this list and paste it to Antigravity AI to generate them:
              </p>
              
              {missingIconsQueue.length > 0 ? (
                <code className="block p-4 bg-amber-50/60 rounded-2xl text-xs font-mono text-amber-950 overflow-x-auto whitespace-pre-wrap select-all border border-amber-200/50 max-h-[40vh] overflow-y-auto">
                  {missingIconsQueue.join(', ')}
                </code>
              ) : (
                <div className="text-center py-8 text-xs font-bold text-slate-450 uppercase tracking-wider">
                  🎉 No missing icons! The queue is empty.
                </div>
              )}
            </div>

            {/* Modal Footer / Actions */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                {missingIconsQueue.length > 0 && (
                  <>
                    <Button
                      variant="gray"
                      size="sm"
                      onClick={() => {
                        navigator.clipboard.writeText(missingIconsQueue.join(', '));
                        showNotification("Copied to clipboard!");
                      }}
                      className="text-xs font-bold border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Copy className="w-3.5 h-3.5" /> Copy List
                    </Button>
                    <Button
                      variant="gray"
                      size="sm"
                      onClick={() => {
                        handleScanMissingIcons();
                        showNotification("Scanning all quests for missing icons...");
                      }}
                      className="text-xs font-bold border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Search className="w-3.5 h-3.5" /> Scan All Quests
                    </Button>
                    <Button
                      variant="pink"
                      size="sm"
                      onClick={() => {
                        setMissingIconsQueue([]);
                        localStorage.removeItem('tinybee_missing_icons');
                        showNotification("Queue cleared!");
                      }}
                      className="text-xs font-black flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 cursor-pointer shadow-sm"
                    >
                      Clear Queue
                    </Button>
                  </>
                )}
              </div>
              <Button
                variant="orange"
                size="sm"
                onClick={() => setIsShowingMissingIconsModal(false)}
                className="text-xs font-black cursor-pointer shadow-sm"
              >
                Close
              </Button>
            </div>
          </Card>
        </div>
      )}
      {/* Scan & Fix Broken Images Modal — 3-step wizard */}
      {isScanningImages && (
        <div className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="bg-white border border-slate-200 max-w-3xl w-full shadow-2xl rounded-3xl overflow-hidden flex flex-col" style={{ maxHeight: '92vh' }}>

            {/* ── Modal Header ── */}
            <div className="bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                {scanImageProgress.phase === 'scanning' ? (
                  <Loader2 className="w-5 h-5 text-white animate-spin" />
                ) : scanImageProgress.phase === 'done' ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <ImageOff className="w-5 h-5 text-white" />
                )}
                <div>
                  <h2 className="text-white font-black text-base leading-tight">🔍 Scan & Fix Broken Images</h2>
                  <p className="text-white/70 text-[10px] font-semibold">
                    {scanImageProgress.phase === 'idle' && 'Scans every grade, level & topic'}
                    {scanImageProgress.phase === 'scanning' && `Scanning… ${scanImageProgress.checked} / ${scanImageProgress.total}`}
                    {scanImageProgress.phase === 'review' && `Found ${brokenImageItems.length} broken — select items to regenerate`}
                    {scanImageProgress.phase === 'fixing' && `Regenerating… ${scanImageProgress.fixed} fixed so far`}
                    {scanImageProgress.phase === 'done' && `Done — ${scanImageProgress.fixed} image(s) regenerated`}
                  </p>
                </div>
              </div>
              {(scanImageProgress.phase === 'idle' || scanImageProgress.phase === 'review' || scanImageProgress.phase === 'done') && (
                <button onClick={() => setIsScanningImages(false)} className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* ── Step pills ── */}
            <div className="flex items-center gap-0 bg-slate-50 border-b border-slate-200 px-6 py-2.5 shrink-0">
              {(['Scan', 'Review & Select', 'Regenerate'] as const).map((label, i) => {
                const activeIdx = scanImageProgress.phase === 'idle' || scanImageProgress.phase === 'scanning' ? 0
                  : scanImageProgress.phase === 'review' ? 1 : 2;
                return (
                  <React.Fragment key={label}>
                    <div className={`flex items-center gap-1.5 text-[11px] font-black px-3 py-1 rounded-full ${
                      i === activeIdx ? 'bg-orange-500 text-white' :
                      i < activeIdx ? 'text-emerald-600' : 'text-slate-400'
                    }`}>
                      {i < activeIdx ? <Check className="w-3 h-3" /> : <span className="w-4 h-4 rounded-full border-2 border-current flex items-center justify-center text-[9px]">{i+1}</span>}
                      {label}
                    </div>
                    {i < 2 && <div className="flex-1 h-px bg-slate-200 mx-1" />}
                  </React.Fragment>
                );
              })}
            </div>

            {/* ── Body ── */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">

              {/* STEP 1 — Idle: launch scan */}
              {scanImageProgress.phase === 'idle' && (
                <div className="space-y-4">
                  <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
                    <p className="text-xs font-black text-orange-900 mb-2">What happens:</p>
                    <ul className="text-xs text-orange-800 font-medium space-y-1 list-disc list-inside">
                      <li>Checks every <code className="bg-orange-100 px-1 rounded">imageUrl</code> in every saved quest (all grades + levels)</li>
                      <li>Broken or missing images appear in a list for you to review</li>
                      <li>You pick which items to fix and which generator to use</li>
                      <li>Only selected items are regenerated — nothing is changed automatically</li>
                    </ul>
                  </div>
                  <Button variant="orange" fullWidth onClick={handleScanBrokenImages}
                    className="font-black text-sm py-3 flex items-center justify-center gap-2 cursor-pointer">
                    <Search className="w-4 h-4" /> Start Scan
                  </Button>
                  <Button variant="gray" fullWidth onClick={() => setIsScanningImages(false)} className="text-sm cursor-pointer">
                    Cancel
                  </Button>
                </div>
              )}

              {/* STEP 1 — Scanning in progress */}
              {scanImageProgress.phase === 'scanning' && (
                <div className="space-y-4">
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-200"
                      style={{ width: `${scanImageProgress.total > 0 ? Math.round((scanImageProgress.checked / scanImageProgress.total) * 100) : 0}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs font-bold text-slate-500">
                    <span>Checked {scanImageProgress.checked} / {scanImageProgress.total}</span>
                    <span className="text-rose-500">{brokenImageItems.length} broken found</span>
                  </div>
                  <div className="bg-slate-900 rounded-2xl p-4 font-mono text-xs overflow-y-auto max-h-64">
                    {scanImageProgress.log.map((line, i) => (
                      <div key={i} className={`leading-relaxed ${
                        line.startsWith('❌') ? 'text-rose-400' : line.startsWith('✓') ? 'text-slate-500' : 'text-slate-300'
                      }`}>{line || '\u00a0'}</div>
                    ))}
                    <div ref={scanLogEndRef} />
                  </div>
                </div>
              )}

              {/* STEP 2 — Review & Select broken items */}
              {scanImageProgress.phase === 'review' && (
                <div className="space-y-4">
                  {brokenImageItems.length === 0 ? (
                    <div className="text-center py-10">
                      <span className="text-5xl">🎉</span>
                      <p className="mt-3 font-black text-emerald-700 text-lg">All images are healthy!</p>
                      <p className="text-sm text-slate-500 mt-1">Nothing needs to be regenerated.</p>
                      <Button variant="gray" className="mt-4 cursor-pointer" onClick={() => setIsScanningImages(false)}>Close</Button>
                    </div>
                  ) : (
                    <>
                      {/* Toolbar */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black text-slate-500">
                            {brokenImageItems.filter(i => i.selected).length} / {brokenImageItems.length} selected
                          </span>
                          <button
                            onClick={() => setBrokenImageItems(prev => prev.map(it => ({ ...it, selected: true })))}
                            className="text-[11px] font-black text-indigo-600 hover:text-indigo-800 cursor-pointer border border-indigo-200 bg-indigo-50 px-2 py-0.5 rounded-lg"
                          >Select All</button>
                          <button
                            onClick={() => setBrokenImageItems(prev => prev.map(it => ({ ...it, selected: false })))}
                            className="text-[11px] font-black text-slate-500 hover:text-slate-700 cursor-pointer border border-slate-200 bg-slate-50 px-2 py-0.5 rounded-lg"
                          >None</button>
                        </div>
                        {/* Global source picker */}
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Apply source to all:</span>
                          <select
                            className="text-xs font-bold bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 outline-none cursor-pointer"
                            onChange={e => setBrokenImageItems(prev => prev.map(it => ({ ...it, imageSource: e.target.value })))}
                            defaultValue=""
                          >
                            <option value="" disabled>— choose —</option>
                            <option value="antigravity">Antigravity AI</option>
                            <option value="pexels">Pexels Photos</option>
                            <option value="pixabay">Pixabay Illustrations</option>
                          </select>
                        </div>
                      </div>

                      {/* Broken image cards grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {brokenImageItems.map((item, idx) => (
                          <label
                            key={`broken-${item.questKey}-${item.qIdx}`}
                            className={`flex items-start gap-3 p-3 rounded-2xl border-2 cursor-pointer transition-all ${
                              item.selected
                                ? 'border-orange-400 bg-orange-50'
                                : 'border-slate-200 bg-white hover:border-slate-300'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={item.selected}
                              onChange={e => setBrokenImageItems(prev =>
                                prev.map((it, i) => i === idx ? { ...it, selected: e.target.checked } : it)
                              )}
                              className="mt-1 w-4 h-4 rounded accent-orange-500 cursor-pointer shrink-0"
                            />

                            {/* Broken image preview */}
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">
                              {item.imageUrl ? (
                                <img
                                  src={item.imageUrl.startsWith('iconify:') ? item.imageUrl.substring(8).split('|')[0] : item.imageUrl}
                                  alt=""
                                  className="w-full h-full object-contain opacity-30 grayscale"
                                  onError={e => { e.currentTarget.style.display = 'none'; }}
                                />
                              ) : (
                                <ImageOff className="w-5 h-5 text-slate-300" />
                              )}
                            </div>

                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-black text-slate-800 truncate">{item.word || '(no word)'}</p>
                              <p className="text-[10px] text-slate-400 font-mono truncate mt-0.5">{item.questKey}</p>
                              <p className="text-[10px] text-slate-500 truncate">{item.questTitle}</p>
                              {/* Per-item source picker */}
                              <select
                                value={item.imageSource}
                                onChange={e => setBrokenImageItems(prev =>
                                  prev.map((it, i) => i === idx ? { ...it, imageSource: e.target.value } : it)
                                )}
                                onClick={e => e.preventDefault()}
                                className="mt-1.5 text-[10px] font-bold bg-white border border-slate-200 rounded-lg px-1.5 py-0.5 outline-none cursor-pointer w-full"
                              >
                                <option value="antigravity">🤖 Antigravity AI</option>
                                <option value="pexels">📷 Pexels</option>
                                <option value="pixabay">🎨 Pixabay</option>
                              </select>
                            </div>
                          </label>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-3 pt-2">
                        <Button variant="gray" onClick={() => setIsScanningImages(false)} className="cursor-pointer">
                          Cancel
                        </Button>
                        <Button
                          variant="orange"
                          onClick={handleRegenerateSelected}
                          disabled={brokenImageItems.filter(i => i.selected).length === 0}
                          className="flex-1 font-black flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <RefreshCw className="w-4 h-4" />
                          Regenerate {brokenImageItems.filter(i => i.selected).length} Selected
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* STEP 3 — Fixing in progress + results */}
              {(scanImageProgress.phase === 'fixing' || scanImageProgress.phase === 'done') && (
                <div className="space-y-4">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-center">
                      <div className="text-2xl font-black text-slate-700">{brokenImageItems.filter(i => i.selected).length}</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Selected</div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 text-center">
                      <div className="text-2xl font-black text-emerald-600">{brokenImageItems.filter(i => i.status === 'done').length}</div>
                      <div className="text-[10px] font-black text-emerald-400 uppercase tracking-wider">Fixed ✓</div>
                    </div>
                    <div className="bg-rose-50 border border-rose-200 rounded-2xl p-3 text-center">
                      <div className="text-2xl font-black text-rose-500">{brokenImageItems.filter(i => i.status === 'error').length}</div>
                      <div className="text-[10px] font-black text-rose-400 uppercase tracking-wider">Failed ✗</div>
                    </div>
                  </div>

                  {/* Item results */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {brokenImageItems.filter(i => i.selected).map((item, idx) => (
                      <div key={`result-${idx}`} className={`flex items-center gap-3 p-2.5 rounded-xl border ${
                        item.status === 'done' ? 'bg-emerald-50 border-emerald-200' :
                        item.status === 'error' ? 'bg-rose-50 border-rose-200' :
                        item.status === 'fixing' ? 'bg-blue-50 border-blue-200 animate-pulse' :
                        'bg-slate-50 border-slate-200'
                      }`}>
                        <div className="w-10 h-10 shrink-0 rounded-lg bg-white border border-slate-200 flex items-center justify-center overflow-hidden">
                          {item.status === 'done' && item.newImageUrl ? (
                            <img
                              src={item.newImageUrl.startsWith('iconify:') ? item.newImageUrl.substring(8).split('|')[0] : item.newImageUrl}
                              alt=""
                              className="w-full h-full object-contain"
                            />
                          ) : item.status === 'fixing' ? (
                            <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                          ) : item.status === 'error' ? (
                            <X className="w-4 h-4 text-rose-400" />
                          ) : (
                            <ImageOff className="w-4 h-4 text-slate-300" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-black text-slate-700 truncate">{item.word}</p>
                          <p className="text-[10px] text-slate-400 font-mono truncate">{item.questKey}</p>
                        </div>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                          item.status === 'done' ? 'bg-emerald-100 text-emerald-700' :
                          item.status === 'error' ? 'bg-rose-100 text-rose-600' :
                          item.status === 'fixing' ? 'bg-blue-100 text-blue-600' :
                          'bg-slate-100 text-slate-400'
                        }`}>
                          {item.status === 'done' ? '✓ Fixed' : item.status === 'error' ? '✗ Error' : item.status === 'fixing' ? 'Fixing…' : 'Pending'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Live log */}
                  <div className="bg-slate-900 rounded-2xl p-3 font-mono text-xs overflow-y-auto max-h-36">
                    {scanImageProgress.log.slice(-30).map((line, i) => (
                      <div key={i} className={`leading-relaxed ${
                        line.startsWith('❌') ? 'text-rose-400' :
                        line.startsWith('✅') || line.startsWith('🎉') ? 'text-emerald-400' :
                        line.startsWith('⚠️') ? 'text-yellow-400' :
                        line.startsWith('🔄') ? 'text-orange-400' :
                        'text-slate-400'
                      }`}>{line || '\u00a0'}</div>
                    ))}
                    <div ref={scanLogEndRef} />
                  </div>

                  {scanImageProgress.phase === 'done' && (
                    <Button variant="green" fullWidth onClick={() => setIsScanningImages(false)} className="font-black text-sm py-3 cursor-pointer">
                      ✓ Done — Close
                    </Button>
                  )}
                </div>
              )}

            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
