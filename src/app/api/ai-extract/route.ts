import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { transcriptText, aiProvider, aiApiKey } = body;

    if (!transcriptText || !aiProvider || !aiApiKey) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const prompt = `Extract exactly 5 important english vocabulary words from the following video transcript. Return them as a simple JSON array of strings (e.g. ["word1", "word2"]). Transcript: ${transcriptText}`;
    let parsedWords: string[] = [];

    if (aiProvider === 'gemini') {
      const aiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${aiApiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const aiData = await aiRes.json();
      if (aiData.error) throw new Error(aiData.error.message);
      const text = aiData.candidates?.[0]?.content?.parts?.[0]?.text || '[]';
      const jsonMatch = text.match(/\[[\s\S]*\]/);
      parsedWords = jsonMatch ? JSON.parse(jsonMatch[0]) : [];
    } else if (aiProvider === 'openai') {
      const aiRes = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${aiApiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }]
        })
      });
      const aiData = await aiRes.json();
      if (aiData.error) throw new Error(aiData.error.message);
      const text = aiData.choices?.[0]?.message?.content || '[]';
      const jsonMatch = text.match(/\[[\s\S]*\]/);
      parsedWords = jsonMatch ? JSON.parse(jsonMatch[0]) : [];
    } else {
      throw new Error('Unsupported AI provider');
    }

    return NextResponse.json({ words: parsedWords });
  } catch (error: any) {
    console.error('AI Extraction Route Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to extract AI vocabulary' }, { status: 500 });
  }
}
