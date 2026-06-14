/**
 * Text-to-Speech (TTS) Utility using Coqui XTTS v2 server (local)
 * with a seamless premium browser SpeechSynthesis fallback.
 */

let currentAudio: HTMLAudioElement | null = null;

/**
 * Reads the given text using local Coqui XTTS v2 server or browser Web Speech fallback.
 */
const playNativeSpeech = (spokenText: string) => {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    // Stop any ongoing speech first
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(spokenText);
    utterance.lang = 'en-US';
    
    // Find child-friendly or premium natural English voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => 
      v.lang.startsWith('en') && 
      (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Premium'))
    );
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    
    utterance.rate = 0.95; // Child-friendly, clear pacing
    window.speechSynthesis.speak(utterance);
  }
};

export const speakText = (text: string, subject: 'math' | 'english' = 'math') => {
  // 1. Stop any ongoing voice playback
  stopSpeech();

  // 2. Sanitize text for reading (remove game-specific emojis, bracket calculations, etc.)
  const sanitizedText = text
    .replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDC00-\uDFFF]/g, '')
    .replace(/[⚔️🏰🏎️🏋️🏃‍♂️🐝🌲🎒⛰️🍎🌳🦇🎒🎒🎒🎒]/g, '')
    .trim();

  if (!sanitizedText) return;

  // 3. Pre-process text/operators so the TTS reads them correctly in child-friendly spoken English
  let spokenText = sanitizedText;

  if (subject === 'math') {
    spokenText = spokenText
      // Context-aware translations: first translate placeholders in equations
      .replace(/=\s*\?/g, ' equals what ')
      .replace(/=\s*__/g, ' equals what ')
      .replace(/\?\s*=/g, ' what equals ')
      .replace(/__\s*=/g, ' what equals ')
      .replace(/\+\s*\?/g, ' plus what ')
      .replace(/\-\s*\?/g, ' minus what ')
      // Translate standard operators
      .replace(/\+/g, ' plus ')
      .replace(/\-/g, ' minus ')
      .replace(/[\u00D7\u2715\u2A09\u2716]/g, ' times ') // ×, ✕, ✖
      .replace(/[\u00F7\u2215\/]/g, ' divided by ') // ÷, ∕, /
      .replace(/\*/g, ' times ')
      .replace(/=/g, ' equals ')
      .replace(/__/g, ' what ')
      .replace(/_/g, ' ')
      .replace(/\s+/g, ' ') // collapse multiple spaces
      .trim();
  } else {
    // English-specific formatting
    spokenText = spokenText
      // Replace underscores (e.g. blanks in sentences) with 'blank'
      .replace(/___+/g, ' blank ')
      .replace(/__/g, ' blank ')
      .replace(/_ _/g, ' blank ')
      // Replace isolated underscores or leading/trailing dashes
      .replace(/\s_\s/g, ' blank ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  const useLocalXtts = typeof window !== 'undefined' && localStorage.getItem('use_local_xtts') === 'true';

  if (useLocalXtts) {
    // Standard local Coqui XTTS API endpoint (default port 5002)
    const xttsUrl = `http://localhost:5002/api/tts?text=${encodeURIComponent(spokenText)}&language_id=en&speaker_id=female-en-1`;
    const audio = new Audio(xttsUrl);
    currentAudio = audio;

    // Attempt playing Coqui XTTS v2 natural voice stream
    audio.play()
      .then(() => {
        console.log("Coqui XTTS v2: Playing natural voice successfully.");
      })
      .catch((error) => {
        console.warn("Coqui XTTS v2 local server is not accessible. Falling back to native SpeechSynthesis.", error);
        playNativeSpeech(spokenText);
      });
  } else {
    playNativeSpeech(spokenText);
  }
};

/**
 * Halts any active text-to-speech audio immediately.
 */
export const stopSpeech = () => {
  if (currentAudio) {
    try {
      currentAudio.pause();
    } catch (e) {
      // Ignore audio pausing error if it was not started
    }
    currentAudio = null;
  }
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
};
