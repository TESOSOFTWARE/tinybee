import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { transcriptText, aiProvider, aiApiKey } = body;

    if (!transcriptText || !aiProvider || !aiApiKey) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const prompt = `You are an expert ESL teacher. I will give you a video transcript. Extract ALL the key English vocabulary words taught or highlighted in this transcript.
Rules:
1. Return ONLY the core vocabulary words (e.g. "Rooster", "Hen", "Turkey").
2. Remove any sound effects, speaker names, brackets, or extra punctuation (e.g., remove "[Music]", ">>").
3. DO NOT group multiple words into a single string unless it is a compound noun.
4. Output EXACTLY a valid JSON array of strings, and nothing else.
Transcript: ${transcriptText}`;
    let parsedWords: string[] = [];

    if (aiProvider === 'gemini') {
      const aiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${aiApiKey}`, {
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
          model: 'gpt-4o',
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

    // Capitalize first letter and format words nicely
    parsedWords = parsedWords.map(w => {
      const trimmed = w.trim();
      if (!trimmed) return trimmed;
      return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    }).filter(Boolean);

    return NextResponse.json({ words: parsedWords });
  } catch (error: any) {
    console.error('AI Extraction Route Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to extract AI vocabulary' }, { status: 500 });
  }
}
