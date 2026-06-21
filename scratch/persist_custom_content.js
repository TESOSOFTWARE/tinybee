const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'tinybee_custom_content.json');
const videoQuestsPath = path.join(__dirname, '../src/data/video_quests.ts');
const mathQuestionsPath = path.join(__dirname, '../src/data/questions.ts');
const englishQuestionsPath = path.join(__dirname, '../src/data/english_questions.ts');

if (!fs.existsSync(jsonPath)) {
  console.error(`Error: Export file not found at ${jsonPath}`);
  console.log('Please export your custom content from the Local Admin UI (Export JSON) and save it to "scratch/tinybee_custom_content.json".');
  process.exit(1);
}

try {
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  console.log('Successfully loaded export file.');

  const capitalize = (str) => {
    if (!str || typeof str !== 'string') return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Sanitize data: Ensure all grade properties are numbers and capitalize vocabulary items
  if (data.videoQuests) {
    Object.keys(data.videoQuests).forEach(key => {
      const q = data.videoQuests[key];
      if (q) {
        if (q.grade !== undefined) {
          q.grade = q.grade === 'K' ? 0 : Number(q.grade);
        }
        if (Array.isArray(q.words)) {
          q.words = q.words.map(capitalize);
        }
        if (Array.isArray(q.questions)) {
          q.questions.forEach(quest => {
            if (quest.correctAnswer) {
              quest.correctAnswer = capitalize(quest.correctAnswer);
            }
            if (Array.isArray(quest.choices)) {
              quest.choices = quest.choices.map(capitalize);
            }
          });
        }
      }
    });
  }

  if (data.mathQuestions && Array.isArray(data.mathQuestions)) {
    data.mathQuestions.forEach(q => {
      if (q) {
        if (q.grade !== undefined) {
          q.grade = q.grade === 'K' ? 0 : Number(q.grade);
        }
        if (q.correctAnswer) {
          q.correctAnswer = capitalize(q.correctAnswer);
        }
        if (Array.isArray(q.choices)) {
          q.choices = q.choices.map(capitalize);
        }
      }
    });
  }

  if (data.englishQuestions && Array.isArray(data.englishQuestions)) {
    data.englishQuestions.forEach(q => {
      if (q) {
        if (q.grade !== undefined) {
          q.grade = q.grade === 'K' ? 0 : Number(q.grade);
        }
        if (q.correctAnswer) {
          q.correctAnswer = capitalize(q.correctAnswer);
        }
        if (Array.isArray(q.choices)) {
          q.choices = q.choices.map(capitalize);
        }
      }
    });
  }

  // 1. Persist videoQuests to video_quests.ts
  if (data.videoQuests && fs.existsSync(videoQuestsPath)) {
    console.log('Persisting videoQuests to video_quests.ts...');
    let content = fs.readFileSync(videoQuestsPath, 'utf8');
    const startTag = 'const STATIC_VIDEO_QUESTS_DATABASE: { [key: string]: VideoQuest } = ';
    const endTag = '};\n\nexport const VIDEO_QUESTS_DATABASE = new Proxy';
    
    const startIndex = content.indexOf(startTag);
    const endIndex = content.indexOf(endTag);
    
    if (startIndex !== -1 && endIndex !== -1) {
      const newPart = `${startTag}${JSON.stringify(data.videoQuests, null, 4)}`;
      content = content.substring(0, startIndex) + newPart + content.substring(endIndex + 1); // Keep the closing bracket
      fs.writeFileSync(videoQuestsPath, content);
      console.log('✅ Successfully updated video_quests.ts');
    } else {
      console.error('❌ Could not locate STATIC_VIDEO_QUESTS_DATABASE boundaries in video_quests.ts');
    }
  }

  // 2. Persist mathQuestions to questions.ts
  if (data.mathQuestions && fs.existsSync(mathQuestionsPath)) {
    console.log('Persisting mathQuestions to questions.ts...');
    let content = fs.readFileSync(mathQuestionsPath, 'utf8');
    const startTag = 'const STATIC_MATH_QUESTIONS: Question[] = ';
    const endTag = '];\n\nexport const mathQuestions = new Proxy(STATIC_MATH_QUESTIONS';
    
    const startIndex = content.indexOf(startTag);
    const endIndex = content.indexOf(endTag);
    
    if (startIndex !== -1 && endIndex !== -1) {
      const newPart = `${startTag}${JSON.stringify(data.mathQuestions, null, 4)}`;
      content = content.substring(0, startIndex) + newPart + content.substring(endIndex + 1); // Keep the closing bracket
      fs.writeFileSync(mathQuestionsPath, content);
      console.log('✅ Successfully updated questions.ts');
    } else {
      console.error('❌ Could not locate STATIC_MATH_QUESTIONS boundaries in questions.ts');
    }
  }

  // 3. Persist englishQuestions to english_questions.ts
  if (data.englishQuestions && fs.existsSync(englishQuestionsPath)) {
    console.log('Persisting englishQuestions to english_questions.ts...');
    let content = fs.readFileSync(englishQuestionsPath, 'utf8');
    const startTag = 'const STATIC_ENGLISH_QUESTIONS =';
    const endTag = ';\n\nexport const englishQuestions = new Proxy(STATIC_ENGLISH_QUESTIONS';
    
    const startIndex = content.indexOf(startTag);
    const endIndex = content.indexOf(endTag);
    
    if (startIndex !== -1 && endIndex !== -1) {
      const newPart = `${startTag} ${JSON.stringify(data.englishQuestions, null, 4)}`;
      content = content.substring(0, startIndex) + newPart + content.substring(endIndex);
      fs.writeFileSync(englishQuestionsPath, content);
      console.log('✅ Successfully updated english_questions.ts');
    } else {
      console.error('❌ Could not locate STATIC_ENGLISH_QUESTIONS boundaries in english_questions.ts');
    }
  }

  console.log('\n🎉 Persistence completed successfully! You can now commit and push the updated files.');
} catch (err) {
  console.error('Error during persistence:', err.message);
}
