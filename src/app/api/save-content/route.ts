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

    // Helper to sanitize grades to number
    const sanitizeQuests = (quests: any) => {
      if (!quests) return;
      Object.keys(quests).forEach(key => {
        const q = quests[key];
        if (q && q.grade !== undefined) {
          q.grade = q.grade === 'K' ? 0 : Number(q.grade);
        }
      });
    };

    const sanitizeQuestions = (questions: any) => {
      if (!questions || !Array.isArray(questions)) return;
      questions.forEach(q => {
        if (q && q.grade !== undefined) {
          q.grade = q.grade === 'K' ? 0 : Number(q.grade);
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

    return NextResponse.json({ success: true, updatedFiles });
  } catch (error: any) {
    console.error('Error in save-content:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
