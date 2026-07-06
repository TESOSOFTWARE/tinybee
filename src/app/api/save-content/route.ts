import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Not allowed in production' }, { status: 403 });
  }

  try {
    const data = await request.json();
    console.log('Received save-content request');

    const videoQuestsPath = path.join(process.cwd(), 'src/data/video_quests.ts');
    const mathQuestionsPath = path.join(process.cwd(), 'src/data/questions.ts');
    const englishQuestionsPath = path.join(process.cwd(), 'src/data/english_questions.ts');
    const worldsPath = path.join(process.cwd(), 'src/data/worlds.ts');
    const configPath = path.join(process.cwd(), 'src/data/config.ts');

    const capitalize = (str: string) => {
      if (!str || typeof str !== 'string') return str;
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // Helper to sanitize grades to number and capitalize vocabulary items
    const sanitizeQuests = (quests: any) => {
      if (!quests) return;
      Object.keys(quests).forEach(key => {
        const q = quests[key];
        if (q) {
          if (q.grade !== undefined) {
            q.grade = q.grade === 'K' ? 0 : Number(q.grade);
          }
          if (Array.isArray(q.words)) {
            q.words = q.words.map(capitalize);
          }
          if (Array.isArray(q.questions)) {
            q.questions.forEach((quest: any) => {
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
    };

    const sanitizeQuestions = (questions: any) => {
      if (!questions || !Array.isArray(questions)) return;
      questions.forEach(q => {
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
    };

    sanitizeQuests(data.videoQuests);
    sanitizeQuestions(data.mathQuestions);
    sanitizeQuestions(data.englishQuestions);

    let updatedFiles = [];

    // 1. Update video_quests.ts
    if (data.videoQuests && fs.existsSync(videoQuestsPath)) {
      let content = fs.readFileSync(videoQuestsPath, 'utf8');
      const startTag = 'const STATIC_VIDEO_QUESTS_DATABASE: { [key: string]: VideoQuest } = ';
      const endTag = '};\n\nexport const VIDEO_QUESTS_DATABASE = new Proxy';
      
      const startIndex = content.indexOf(startTag);
      const endIndex = content.indexOf(endTag);
      
      if (startIndex !== -1 && endIndex !== -1) {
        const newPart = `${startTag}${JSON.stringify(data.videoQuests, null, 4)}`;
        content = content.substring(0, startIndex) + newPart + content.substring(endIndex + 1);
        fs.writeFileSync(videoQuestsPath, content);
        updatedFiles.push('video_quests.ts');
      }
    }

    // 2. Update questions.ts
    if (data.mathQuestions && fs.existsSync(mathQuestionsPath)) {
      let content = fs.readFileSync(mathQuestionsPath, 'utf8');
      const startTag = 'const STATIC_MATH_QUESTIONS: Question[] = ';
      const endTag = '];\n\nexport const mathQuestions = new Proxy(STATIC_MATH_QUESTIONS';
      
      const startIndex = content.indexOf(startTag);
      const endIndex = content.indexOf(endTag);
      
      if (startIndex !== -1 && endIndex !== -1) {
        const newPart = `${startTag}${JSON.stringify(data.mathQuestions, null, 4)}`;
        content = content.substring(0, startIndex) + newPart + content.substring(endIndex + 1);
        fs.writeFileSync(mathQuestionsPath, content);
        updatedFiles.push('questions.ts');
      }
    }

    // 3. Update english_questions.ts
    if (data.englishQuestions && fs.existsSync(englishQuestionsPath)) {
      let content = fs.readFileSync(englishQuestionsPath, 'utf8');
      const startTag = 'const STATIC_ENGLISH_QUESTIONS =';
      const endTag = ';\n\nexport const englishQuestions = new Proxy(STATIC_ENGLISH_QUESTIONS';
      
      const startIndex = content.indexOf(startTag);
      const endIndex = content.indexOf(endTag);
      
      if (startIndex !== -1 && endIndex !== -1) {
        const newPart = `${startTag} ${JSON.stringify(data.englishQuestions, null, 4)}`;
        content = content.substring(0, startIndex) + newPart + content.substring(endIndex);
        fs.writeFileSync(englishQuestionsPath, content);
        updatedFiles.push('english_questions.ts');
      }
    }
    // 4. Update worlds.ts
    if (data.worlds && fs.existsSync(worldsPath)) {
      let content = fs.readFileSync(worldsPath, 'utf8');
      const startTag = 'export const STATIC_WORLDS_DATABASE: { [id: string]: WorldConfig } = ';
      const endTag = '};\n\n// Proxy to allow overrides from localStorage';
      
      const startIndex = content.indexOf(startTag);
      const endIndex = content.indexOf(endTag);
      
      if (startIndex !== -1 && endIndex !== -1) {
        const newPart = `${startTag}${JSON.stringify(data.worlds, null, 4)}`;
        content = content.substring(0, startIndex) + newPart + content.substring(endIndex + 1);
        fs.writeFileSync(worldsPath, content);
        updatedFiles.push('worlds.ts');
      }
    }

    // 5. Update config.ts
    if (data.hiddenGradeIds && fs.existsSync(configPath)) {
      let content = fs.readFileSync(configPath, 'utf8');
      const startTag = 'export const APP_CONFIG = {';
      const endTag = '};\n';
      
      const startIndex = content.indexOf(startTag);
      const endIndex = content.indexOf(endTag);
      
      if (startIndex !== -1 && endIndex !== -1) {
        const newPart = `export const APP_CONFIG = {\n  hiddenGradeIds: ${JSON.stringify(data.hiddenGradeIds, null, 2)}\n`;
        content = content.substring(0, startIndex) + newPart + content.substring(endIndex);
        fs.writeFileSync(configPath, content);
        updatedFiles.push('config.ts');
      } else {
        fs.writeFileSync(configPath, `export const APP_CONFIG = {\n  hiddenGradeIds: ${JSON.stringify(data.hiddenGradeIds, null, 2)}\n};\n`);
        updatedFiles.push('config.ts');
      }
    }

    return NextResponse.json({ success: true, updatedFiles });
  } catch (error: any) {
    console.error('Error in save-content:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
