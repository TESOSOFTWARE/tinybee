const fs = require('fs');
const path = require('path');

const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

const VIDEO_MAPPING = {
  "9b0l4iRZNXg": { topicId: "playground-park", grade: "1" },
  "0xKYNv73vtw": { topicId: "community-jobs", grade: "2" },
  "Sf4zNup1rec": { topicId: "food-meals", grade: "1" },
  "HbvG-nV4DaM": { topicId: "food-drinks", grade: "2" },
  "UFHw7A3ovp8": { topicId: "transportation", grade: "2" },
  "-EvRsX91qLU": { topicId: "hygiene-grooming", grade: "1" },
  "Qq0RPVzzWZk": { topicId: "shopping-money", grade: "4" },
  "Xc-3EYhpBlI": { topicId: "home-furniture", grade: "1" },
  "-UP5ZcFqv_Y": { topicId: "colors-shapes", grade: "K" }, // Or art and colors
  "2W4eR4EngLo": { topicId: "transportation", grade: "2", overrideWords: ["Train", "Airplane", "Ship", "Bicycle", "Helicopter"] },
  "7tbyXd0kxKc": { topicId: "hygiene-grooming", grade: "1" },
  "VETWVYWsyko": { topicId: "body-parts", grade: "K" },
  "UIEIkXJAoog": { topicId: "wild-animals", grade: "2" },
  "k5pTmDPDY8Q": { topicId: "toys-games", grade: "K" },
  "xFeaApa5sHw": { topicId: "fruit-veggies", grade: "K" },
  "2-ZjXvMACEY": { topicId: "fruit-veggies", grade: "K" },
  "r9p9SunFcMY": { topicId: "fruit-veggies", grade: "K" },
  "YJKIvSR_Wdw": { topicId: "fruit-veggies", grade: "K" },
  "ViGE5pjVdjU": { topicId: "body-illnesses", grade: "2" }
};

function cleanWord(word) {
  if (!word) return '';
  let w = word.replace(/^(music\s+|Music\s+)/i, '');
  w = w.replace(/(\s+music|\s+Music)$/i, '');
  w = w.trim();
  if (w.toLowerCase() === 'music') return '';
  // Capitalize first letter
  if (w) {
    w = w.charAt(0).toUpperCase() + w.slice(1);
  }
  return w;
}

async function main() {
  const extracted = JSON.parse(fs.readFileSync(path.join(__dirname, 'extracted_playlist.json'), 'utf8'));
  const finalQuests = {};
  
  // Track level counters for each topicId
  const topicLevelCounts = {};

  for (let i = 0; i < extracted.length; i++) {
    const item = extracted[i];
    const mapping = VIDEO_MAPPING[item.videoId];
    if (!mapping) {
      console.warn(`No mapping found for videoId: ${item.videoId}`);
      continue;
    }

    const { topicId, grade, overrideWords } = mapping;
    
    // Increment level counter
    topicLevelCounts[topicId] = (topicLevelCounts[topicId] || 0) + 1;
    const levelNum = topicLevelCounts[topicId];

    console.log(`[${i + 1}/${extracted.length}] Processing ${item.title} -> World: ${topicId}, Level: ${levelNum}, Grade: ${grade}...`);

    let words = overrideWords;
    if (!words) {
      // Clean extracted words
      words = (item.words || [])
        .map(cleanWord)
        .filter(Boolean);
      
      // Ensure we have unique words
      words = Array.from(new Set(words));
      
      // If we don't have exactly 5 words, fill with original words or fallback
      if (words.length < 5) {
        const fallbackWords = ["Explore", "Discover", "Curious", "Brilliant", "Create"];
        for (const fw of fallbackWords) {
          if (words.length >= 5) break;
          if (!words.includes(fw)) words.push(fw);
        }
      }
      // Keep exactly 5 words
      words = words.slice(0, 5);
    }

    console.log(`  Cleaned Words: ${words.join(', ')}`);

    try {
      const postRes = await fetch(`${BASE_URL}/api/extract-video`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          words,
          transcriptText: item.transcriptText,
          imageSource: 'pexels',
          title: item.title
        })
      });

      if (!postRes.ok) {
        throw new Error(`POST failed: ${postRes.statusText}`);
      }

      const postData = await postRes.json();
      if (postData.error) {
        throw new Error(postData.error);
      }

      const numericGrade = grade === 'K' ? 0 : parseInt(grade, 10);
      const questKey = `${topicId}-${levelNum}`;

      // Construct VideoQuest object
      const questObj = {
        grade: numericGrade,
        videoUrl: `https://www.youtube.com/embed/${item.videoId}`,
        title: item.title,
        channel: item.channel || '@JourneyEnglishTalk',
        words,
        questions: postData.questions || []
      };

      finalQuests[questKey] = questObj;

      // Also mirror the key as grade-level fallback: e.g. "1-2"
      // Wait, we can map to Grade-Level fallbacks if needed. But let's just output the main topic keys first!
      console.log(`  Success! Generated ${questObj.questions.length} questions for ${questKey}.`);

    } catch (err) {
      console.error(`  Error generating questions for ${item.videoId}:`, err);
    }
  }

  // Save final JSON
  fs.writeFileSync(path.join(__dirname, 'final_imported_quests.json'), JSON.stringify(finalQuests, null, 2));
  console.log(`\nSaved ${Object.keys(finalQuests).length} generated quests to scratch/final_imported_quests.json`);
}

main().catch(console.error);
