/**
 * Text-to-Speech (TTS) Utility using Coqui XTTS v2 server (local)
 * with a seamless premium browser SpeechSynthesis fallback.
 */

let currentAudio: HTMLAudioElement | null = null;

/**
 * Reads the given text using local Coqui XTTS v2 server or browser Web Speech fallback.
 */
export const speakText = (text: string) => {
  // 1. Stop any ongoing voice playback
  stopSpeech();

  // 2. Sanitize text for reading (remove game-specific emojis, bracket calculations, etc.)
  const sanitizedText = text
    .replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDC00-\uDFFF]/g, '')
    .replace(/[⚔️🏰🏎️🏋️🏃‍♂️🐝🌲🎒⛰️🍎🌳🦇🎒🎒🎒🎒]/g, '')
    .trim();

  if (!sanitizedText) return;

  // Standard local Coqui XTTS API endpoint (default port 5002)
  const xttsUrl = `http://localhost:5002/api/tts?text=${encodeURIComponent(sanitizedText)}&language_id=en&speaker_id=female-en-1`;

  const audio = new Audio(xttsUrl);
  currentAudio = audio;

  // Attempt playing Coqui XTTS v2 natural voice stream
  audio.play()
    .then(() => {
      console.log("Coqui XTTS v2: Playing natural voice successfully.");
    })
    .catch((error) => {
      console.warn("Coqui XTTS v2 local server is not accessible. Falling back to native SpeechSynthesis.", error);
      
      // Fallback: Web Speech API (speechSynthesis)
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(sanitizedText);
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
    });
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
