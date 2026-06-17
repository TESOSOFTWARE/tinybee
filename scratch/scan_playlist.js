const fs = require('fs');
const path = require('path');

const PLAYLIST_ID = 'PL8GLH_h_tdG4DXN3Tfw9r2leBgXBhNozf';
const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

async function main() {
  console.log(`Fetching playlist: ${PLAYLIST_ID}`);
  const playlistRes = await fetch(`${BASE_URL}/api/extract-playlist?playlistId=${PLAYLIST_ID}`);
  if (!playlistRes.ok) {
    console.error('Failed to fetch playlist items');
    return;
  }
  const playlistData = await playlistRes.json();
  const videos = playlistData.videos || [];
  console.log(`Found ${videos.length} videos in playlist.\n`);

  // Load WORLDS_DATABASE from src/data/worlds.ts
  const worldsFile = fs.readFileSync(path.join(__dirname, '../src/data/worlds.ts'), 'utf8');
  // Simple extraction of worlds
  // To avoid complex typescript parsing, let's define a basic category matcher or fetch from static worlds.
  // We can write a simple keyword classifier in this script matching the admin's categorizeVideoInWorld logic.
  
  // Here is the keyword map from admin/page.tsx
  const keywordMap = {
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
    'community-jobs': ['job', 'career', 'work', 'doctor', 'nurse', 'police', 'firefighter', 'teacher', 'chef', 'dentist', 'farmer', 'pilot', 'veterinarian'],
    'places-town': ['town', 'city', 'place', 'store', 'shop', 'hospital', 'station', 'school', 'park', 'library', 'market', 'bank', 'post office'],
    'seasons-weather': ['season', 'weather', 'spring', 'summer', 'autumn', 'fall', 'winter', 'hot', 'cold', 'warm', 'cool', 'rain', 'snow', 'wind', 'cloud', 'sun'],
    'transportation': ['transport', 'vehicle', 'car', 'bus', 'train', 'plane', 'boat', 'bicycle', 'motorcycle', 'truck', 'helicopter'],
    'body-illnesses': ['body', 'sick', 'illness', 'cold', 'flu', 'cough', 'fever', 'headache', 'stomachache', 'sore throat', 'medicine', 'doctor'],
    'ocean-sea': ['ocean', 'sea', 'water', 'fish', 'shark', 'whale', 'dolphin', 'octopus', 'crab', 'turtle', 'coral', 'shell'],
    'clothing-accessories': ['clothing', 'clothes', 'accessory', 'watch', 'ring', 'necklace', 'glasses', 'hat', 'bag', 'purse', 'wallet'],

    // Grade 3
    'classroom-objects': ['classroom', 'desk', 'chair', 'board', 'marker', 'clock', 'map', 'globe', 'shelf', 'bin'],
    'school-subjects': ['school', 'subject', 'math', 'english', 'science', 'art', 'music', 'history', 'geography', 'pe', 'sport'],
    'daily-routines': ['daily', 'routine', 'wake up', 'brush teeth', 'wash face', 'breakfast', 'school', 'homework', 'dinner', 'sleep'],
    'household-chores': ['household', 'chore', 'clean', 'wash', 'sweep', 'dust', 'mop', 'cook', 'tidy', 'laundry', 'dishes'],
    'fruits-vegetables': ['fruit', 'vegetable', 'veggies', 'apple', 'banana', 'orange', 'strawberry', 'grape', 'carrot', 'broccoli', 'potato'],
    'shapes-measurements': ['shape', 'measure', 'circle', 'square', 'triangle', 'rectangle', 'size', 'length', 'height', 'width', 'weight'],
    'nature-weather': ['nature', 'weather', 'rain', 'wind', 'sun', 'cloud', 'storm', 'thunder', 'lightning', 'fog', 'temperature'],
    'directions-maps': ['direction', 'map', 'left', 'right', 'straight', 'turn', 'north', 'south', 'east', 'west', 'compass'],
    'occupations-tools': ['job', 'tool', 'hammer', 'screwdriver', 'wrench', 'saw', 'drill', 'stethoscope', 'microscope', 'spatula'],
    'healthy-habits': ['health', 'habit', 'exercise', 'sleep', 'water', 'fruit', 'vegetable', 'wash hands', 'teeth', 'active'],

    // Grade 4
    'technology-media': ['tech', 'technology', 'media', 'computer', 'phone', 'tablet', 'internet', 'website', 'email', 'app', 'video'],
    'hobbies-interests': ['hobby', 'interest', 'music', 'reading', 'sports', 'gaming', 'art', 'dance', 'craft', 'collection'],
    'travel-tourism': ['travel', 'tourism', 'trip', 'holiday', 'vacation', 'hotel', 'flight', 'passport', 'luggage', 'camera'],
    'shopping-money': ['shop', 'money', 'buy', 'sell', 'price', 'cost', 'cash', 'coin', 'card', 'mall', 'store'],
    'inventions-discoveries': ['invention', 'discovery', 'invent', 'discover', 'new', 'science', 'history', 'machine', 'idea'],
    'my-neighborhood': ['neighborhood', 'neighbor', 'local', 'shop', 'park', 'street', 'library', 'center', 'community'],
    'feelings-relationships': ['feeling', 'relationship', 'friend', 'family', 'love', 'kind', 'happy', 'sad', 'angry', 'excited'],
    'animals-habitats': ['animal', 'habitat', 'forest', 'desert', 'jungle', 'ocean', 'grassland', 'arctic', 'mountain'],
    'human-body': ['body', 'human', 'heart', 'brain', 'lungs', 'stomach', 'bones', 'muscles', 'skin', 'blood'],
    'earth-space': ['earth', 'space', 'planet', 'star', 'sun', 'moon', 'galaxy', 'rocket', 'astronaut', 'sky'],

    // Grade 5
    'global-cultures': ['global', 'culture', 'country', 'language', 'food', 'tradition', 'festival', 'holiday', 'world'],
    'environmental-issues': ['environment', 'issue', 'pollution', 'recycle', 'greenhouse', 'warming', 'save', 'nature', 'trash'],
    'media-communications': ['media', 'communication', 'news', 'paper', 'radio', 'tv', 'internet', 'social', 'write', 'talk'],
    'careers-future': ['career', 'future', 'job', 'profession', 'work', 'study', 'university', 'college', 'dream'],
    'science-experiments': ['science', 'experiment', 'lab', 'test', 'chemical', 'physics', 'biology', 'microscope', 'measure'],
    'arts-entertainment': ['art', 'entertainment', 'movie', 'music', 'theater', 'painting', 'sculpture', 'dance', 'concert'],
    'sports-fitness': ['sport', 'fitness', 'exercise', 'gym', 'run', 'swim', 'game', 'team', 'coach', 'health'],
    'history-civilizations': ['history', 'civilization', 'ancient', 'past', 'empire', 'king', 'queen', 'ruins', 'museum'],
    'mysteries-legends': ['mystery', 'legend', 'story', 'myth', 'secret', 'clue', 'solve', 'magic', 'ghost'],
    'literature-writing': ['literature', 'writing', 'book', 'novel', 'poem', 'story', 'author', 'read', 'write', 'journal']
  };

  // Grade world mapping
  const worldGrades = {
    // Kindergarten
    'colors-shapes': 'K', 'family-pets': 'K', 'fruit-veggies': 'K', 'toys-games': 'K', 'body-parts': 'K', 'body-senses': 'K', 'nature-garden': 'K', 'my-house': 'K', 'basic-clothing': 'K', 'days-numbers': 'K',
    // Grade 1
    'home-furniture': '1', 'school-supplies': '1', 'farm-animals': '1', 'action-verbs': '1', 'actions': '1', 'clothing': '1', 'hygiene-grooming': '1', 'playground-park': '1', 'insects-bugs': '1', 'food-meals': '1', 'feelings-emotions': '1',
    // Grade 2
    'wild-animals': '2', 'food-drinks': '2', 'hobbies-sports': '2', 'community-jobs': '2', 'places-town': '2', 'seasons-weather': '2', 'transportation': '2', 'body-illnesses': '2', 'ocean-sea': '2', 'clothing-accessories': '2',
    // Grade 3
    'classroom-objects': '3', 'school-subjects': '3', 'daily-routines': '3', 'household-chores': '3', 'fruits-vegetables': '3', 'shapes-measurements': '3', 'nature-weather': '3', 'directions-maps': '3', 'occupations-tools': '3', 'healthy-habits': '3',
    // Grade 4
    'technology-media': '4', 'hobbies-interests': '4', 'travel-tourism': '4', 'shopping-money': '4', 'inventions-discoveries': '4', 'my-neighborhood': '4', 'feelings-relationships': '4', 'animals-habitats': '4', 'human-body': '4', 'earth-space': '4',
    // Grade 5
    'global-cultures': '5', 'environmental-issues': '5', 'media-communications': '5', 'careers-future': '5', 'science-experiments': '5', 'arts-entertainment': '5', 'sports-fitness': '5', 'history-civilizations': '5', 'mysteries-legends': '5', 'literature-writing': '5'
  };

  const results = [];

  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    console.log(`Processing [${i + 1}/${videos.length}] videoId: ${video.videoId}...`);
    
    try {
      const url = `${BASE_URL}/api/extract-video?videoUrl=${encodeURIComponent('https://www.youtube.com/watch?v=' + video.videoId)}`;
      const videoRes = await fetch(url);
      if (!videoRes.ok) {
        console.warn(`Failed to extract metadata for video ${video.videoId}`);
        continue;
      }
      const videoData = await videoRes.json();
      if (videoData.error) {
        console.warn(`API returned error for video ${video.videoId}: ${videoData.error}`);
        continue;
      }
      
      const title = videoData.title;
      const description = videoData.description || '';
      const words = videoData.words || [];
      const transcriptText = videoData.transcriptText || '';
      const channel = videoData.channel || '@PRES.ENGLISH';

      // Replicate categorizeVideoInWorld
      let bestWorldId = 'general';
      let bestScore = 0;
      
      const cleanTitle = title.toLowerCase();
      const cleanDesc = description.toLowerCase();
      const cleanWords = words.map(w => w.toLowerCase());
      
      Object.keys(keywordMap).forEach(worldId => {
        const keywords = keywordMap[worldId];
        let score = 0;
        
        keywords.forEach(keyword => {
          if (cleanTitle.includes(keyword)) score += 30;
          if (cleanDesc.includes(keyword)) score += 5;
          cleanWords.forEach(word => {
            if (word.includes(keyword) || keyword.includes(word)) score += 10;
          });
        });
        
        if (score > bestScore) {
          bestScore = score;
          bestWorldId = worldId;
        }
      });
      
      const targetGrade = worldGrades[bestWorldId] || '1';
      console.log(`  Title: "${title}"`);
      console.log(`  Words: ${words.join(', ')}`);
      console.log(`  Categorized World: ${bestWorldId} (Grade ${targetGrade}, Score: ${bestScore})`);
      
      results.push({
        videoId: video.videoId,
        title,
        channel,
        description,
        transcriptText,
        words,
        bestWorldId,
        targetGrade
      });
    } catch (err) {
      console.error(`Error processing video ${video.videoId}:`, err);
    }
  }

  fs.writeFileSync(path.join(__dirname, 'extracted_playlist.json'), JSON.stringify(results, null, 2));
  console.log('\nSaved extraction results to scratch/extracted_playlist.json');
}

main().catch(console.error);
