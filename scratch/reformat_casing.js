const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'tinybee_custom_content.json');

if (!fs.existsSync(jsonPath)) {
  console.error(`Error: Export file not found at ${jsonPath}`);
  process.exit(1);
}

try {
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  console.log('Loaded custom content for formatting.');

  const capitalize = (str) => {
    if (!str || typeof str !== 'string') return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // 1. Reformat videoQuests
  if (data.videoQuests) {
    console.log('Capitalizing videoQuests...');
    Object.keys(data.videoQuests).forEach(key => {
      const quest = data.videoQuests[key];
      if (quest) {
        if (Array.isArray(quest.words)) {
          quest.words = quest.words.map(capitalize);
        }
        if (Array.isArray(quest.questions)) {
          quest.questions.forEach(q => {
            if (q.correctAnswer) {
              q.correctAnswer = capitalize(q.correctAnswer);
            }
            if (Array.isArray(q.choices)) {
              q.choices = q.choices.map(capitalize);
            }
          });
        }
      }
    });
  }

  // 2. Reformat mathQuestions
  if (data.mathQuestions && Array.isArray(data.mathQuestions)) {
    console.log('Capitalizing mathQuestions...');
    data.mathQuestions.forEach(q => {
      if (q.correctAnswer) {
        q.correctAnswer = capitalize(q.correctAnswer);
      }
      if (Array.isArray(q.choices)) {
        q.choices = q.choices.map(capitalize);
      }
    });
  }

  // 3. Reformat englishQuestions
  if (data.englishQuestions && Array.isArray(data.englishQuestions)) {
    console.log('Capitalizing englishQuestions...');
    data.englishQuestions.forEach(q => {
      if (q.correctAnswer) {
        q.correctAnswer = capitalize(q.correctAnswer);
      }
      if (Array.isArray(q.choices)) {
        q.choices = q.choices.map(capitalize);
      }
    });
  }

  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
  console.log('✅ Successfully reformatted and capitalized all custom content!');
} catch (err) {
  console.error('Error during formatting:', err.message);
}
