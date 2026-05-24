// Unified Background Music (BGM) Utility

class ChiptuneBGM {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: any = null;
  private notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]; // Harmonious C Major Pentatonic Scale

  start() {
    if (this.isPlaying) return;
    try {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.isPlaying = true;
      let step = 0;

      const playBeat = () => {
        if (!this.isPlaying || !this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        // Soft triangle wave provides a cute flute/music box sound
        osc.type = 'triangle';

        // Playful arpeggiated retro melody loop
        const melody = [0, 2, 4, 3, 1, 3, 5, 2];
        const freq = this.notes[melody[step % melody.length]];
        
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // Soft, non-intrusive envelope
        gain.gain.setValueAtTime(0, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.03, this.ctx.currentTime + 0.05); // Low volume background music
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.5);

        step++;
        this.timer = setTimeout(playBeat, 350); // Lively 170 BPM pace
      };

      playBeat();
    } catch (e) {
      console.warn('AudioContext not supported or blocked by user gesture:', e);
    }
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) clearTimeout(this.timer);
    if (this.ctx) {
      try {
        this.ctx.close();
      } catch (e) {}
      this.ctx = null;
    }
  }
}

// Singleton instances
let bgmInstance: ChiptuneBGM | null = null;

export const playBGM = () => {
  if (typeof window === 'undefined') return;
  if (!bgmInstance) {
    bgmInstance = new ChiptuneBGM();
  }
  bgmInstance.start();
};

export const stopBGM = () => {
  if (bgmInstance) {
    bgmInstance.stop();
  }
};
