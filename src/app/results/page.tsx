'use client';

import React, { useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState';
import { Button } from '@/components/UI/Button';
import { Card } from '@/components/UI/Card';
import { ArrowRight, RotateCcw, Map, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addXP, addCoins, completeLevel, state, updateStreak } = useGameState();

  const worldId = searchParams.get('worldId') || 'g1-addition';
  const levelId = searchParams.get('levelId') || '1';
  const accuracyRaw = searchParams.get('accuracy') || '100';
  const timeSpentRaw = searchParams.get('timeSpent') || '30';
  const correctRaw = searchParams.get('correct') || '5';
  const totalRaw = searchParams.get('total') || '5';
  const mode = searchParams.get('mode') || 'battle';

  const accuracy = parseInt(accuracyRaw);
  const timeSpent = parseInt(timeSpentRaw);
  const correctCount = parseInt(correctRaw);
  const totalCount = parseInt(totalRaw);

  const hasSavedRef = useRef(false);

  // Calculate Rewards
  let stars = 0;
  let summaryMessage = "Awesome Effort! Let's try again! 🌟";
  let summarySubtitle = "Mistakes are how we learn. Keep practicing to improve your skills!";
  let bannerEmoji = "💪";

  if (mode === 'racing') {
    if (accuracy >= 90) {
      stars = 3;
      summaryMessage = "Perfect Race! Grand Prix Champion! 👑";
      summarySubtitle = "You answered every question flawlessly! Your kart flew past the checkered flag!";
      bannerEmoji = "🏎️";
    } else if (accuracy >= 70) {
      stars = 2;
      summaryMessage = "Amazing Finish! Pro Racer Rank! 🌟";
      summarySubtitle = "Incredible driving! You successfully crossed the finish line with high accuracy.";
      bannerEmoji = "🏆";
    } else if (accuracy >= 50) {
      stars = 1;
      summaryMessage = "Great Job, Speed Apprentice! 🏁";
      summarySubtitle = "You successfully completed the race! A bit more practice will unlock legendary speed.";
      bannerEmoji = "🏁";
    }
  } else if (mode === 'tower-defense') {
    if (accuracy >= 90) {
      stars = 3;
      summaryMessage = "Perfect Defense! Ultimate General! 👑";
      summarySubtitle = "You answered every question flawlessly! Your base is completely safe!";
      bannerEmoji = "🏰";
    } else if (accuracy >= 70) {
      stars = 2;
      summaryMessage = "Amazing Victory! Tactician Rank! 🌟";
      summarySubtitle = "Incredible defense! You successfully stopped the monsters from entering your base.";
      bannerEmoji = "🏆";
    } else if (accuracy >= 50) {
      stars = 1;
      summaryMessage = "Great Job, Defender! 🛡️";
      summarySubtitle = "You stood your ground! A bit more training will lock down a 3-star victory.";
      bannerEmoji = "🛡️";
    }
  } else if (mode === 'tug-of-war') {
    if (accuracy >= 90) {
      stars = 3;
      summaryMessage = "Unstoppable Pull! Tug of War Champion! 👑";
      summarySubtitle = "You answered every question flawlessly! You pulled the monster clean over the line!";
      bannerEmoji = "🏋️";
    } else if (accuracy >= 70) {
      stars = 2;
      summaryMessage = "Amazing Pull! Legendary Athlete! 🌟";
      summarySubtitle = "Incredible tugging! You successfully won the match with high accuracy!";
      bannerEmoji = "🏆";
    } else if (accuracy >= 50) {
      stars = 1;
      summaryMessage = "Great Match, Rope Apprentice! 🎗️";
      summarySubtitle = "You stood your ground and won! A bit more training will unlock a 3-star victory.";
      bannerEmoji = "🎗️";
    }
  } else {
    // Default Battle
    if (accuracy >= 90) {
      stars = 3;
      summaryMessage = "Perfect Battle! Legendary Wizard! 👑";
      summarySubtitle = "You answered every question flawlessly! The monster has been completely vanquished!";
      bannerEmoji = "👑";
    } else if (accuracy >= 70) {
      stars = 2;
      summaryMessage = "Amazing Victory! Mage Rank! 🌟";
      summarySubtitle = "Incredible spellcasting! You successfully defeated the monster with high accuracy.";
      bannerEmoji = "🏆";
    } else if (accuracy >= 50) {
      stars = 1;
      summaryMessage = "Great Job, Brave Apprentice! ⚔️";
      summarySubtitle = "You stood your ground! A bit more training will unlock 3-star legendary stats.";
      bannerEmoji = "⚔️";
    }
  }

  const earnedCoins = correctCount * 10;
  // XP = correct answers * 20 + perfect combo bonus (+30 XP if 100% accuracy)
  const earnedXP = correctCount * 20 + (accuracy === 100 ? 30 : 0);

  useEffect(() => {
    // Prevent double state updates due to React 18 double-effects in development
    if (hasSavedRef.current) return;
    hasSavedRef.current = true;

    // Trigger state changes
    addCoins(earnedCoins);
    const { leveledUp, newLevel } = addXP(earnedXP);
    completeLevel(worldId, levelId, stars, accuracy, timeSpent, correctCount, totalCount);
    updateStreak();

    // Trigger confetti explosion on successful completion (>= 50% accuracy)
    if (accuracy >= 50) {
      // Primary splash
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Side fireworks splash
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
      }, 250);
      
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 400);
    }
  }, []);

  const nextLevelId = parseInt(levelId) + 1;
  const hasNextLevel = nextLevelId <= 5;

  return (
    <div className="min-h-screen bg-playful-dots py-6 px-4 flex flex-col justify-between select-none">
      
      <header className="max-w-md w-full mx-auto mb-4 text-center">
        <span className="text-sm font-bold text-academy-blue uppercase tracking-widest">
          {mode === 'racing' 
            ? 'Grand Prix Completed' 
            : mode === 'tower-defense' 
            ? 'Defense Completed' 
            : mode === 'tug-of-war'
            ? 'Tug of War Match Ended'
            : 'Battle Completed'}
        </span>
        <h1 className="text-2xl font-black text-slate-800 tracking-tight">
          {mode === 'racing' 
            ? '🏎️ RACING REPORT' 
            : mode === 'tower-defense' 
            ? '🏰 DEFENSE REPORT' 
            : mode === 'tug-of-war'
            ? '🏋️ TUG OF WAR REPORT'
            : '⚔️ BATTLE REPORT'}
        </h1>
      </header>

      {/* Main Results Card */}
      <main className="max-w-md w-full mx-auto flex-grow flex flex-col justify-center gap-6">
        <Card padding="lg" className="text-center space-y-6 animate-pop-in">
          
          {/* Trophy / Banner */}
          <div className="mx-auto w-20 h-20 bg-yellow-100 border-4 border-yellow-300 rounded-full flex items-center justify-center text-4xl shadow-md animate-bounce-slow">
            {bannerEmoji}
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-800">{summaryMessage}</h2>
            <p className="text-xs text-slate-500 font-medium leading-relaxed px-4">{summarySubtitle}</p>
          </div>

          {/* Gold Stars Display */}
          <div className="flex justify-center gap-2 py-2">
            {[1, 2, 3].map((star) => (
              <Star
                key={`star-result-${star}`}
                className={`w-12 h-12 stroke-[2px] transition-all duration-500 ${
                  star <= stars
                    ? 'text-yellow-400 fill-yellow-400 scale-110 drop-shadow-md animate-pulse-slow'
                    : 'text-slate-200'
                }`}
              />
            ))}
          </div>

          {/* Rewards Grid */}
          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border-2 border-slate-200 shadow-inner">
            <div className="text-center">
              <span className="text-xs font-bold text-slate-400 uppercase">XP Gained</span>
              <p className="text-2xl font-black text-amber-500 mt-0.5">+{earnedXP} XP</p>
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-slate-400 uppercase">Coins Earned</span>
              <p className="text-2xl font-black text-yellow-500 mt-0.5">+{earnedCoins} 🪙</p>
            </div>
          </div>

          {/* Stats breakdown */}
          <div className="grid grid-cols-2 gap-2 text-sm font-extrabold text-slate-600">
            <div className="flex items-center justify-between border-r-2 border-slate-100 px-3">
              <span>🎯 Accuracy:</span>
              <span className="text-slate-800 font-black">{accuracy}%</span>
            </div>
            <div className="flex items-center justify-between px-3">
              <span>⏱️ Time:</span>
              <span className="text-slate-800 font-black">{timeSpent}s</span>
            </div>
          </div>
        </Card>

        {/* Navigation CTAs */}
        <div className="flex flex-col gap-3 animate-slide-up">
          {accuracy >= 50 && hasNextLevel ? (
            <Link href={`/${mode}?worldId=${worldId}&levelId=${nextLevelId}`} className="w-full">
              <Button variant="green" size="lg" fullWidth className="text-xl uppercase tracking-wider">
                {mode === 'racing' 
                  ? 'Next Race' 
                  : mode === 'tower-defense' 
                  ? 'Next Defense' 
                  : mode === 'tug-of-war'
                  ? 'Next Match'
                  : 'Next Battle'} <ArrowRight className="ml-1 w-5 h-5" />
              </Button>
            </Link>
          ) : null}

          <Link href={`/${mode}?worldId=${worldId}&levelId=${levelId}`} className="w-full">
            <Button variant="blue" size="lg" fullWidth className="text-lg">
              <RotateCcw className="mr-1 w-4 h-4" /> Practice Again
            </Button>
          </Link>

          <Link href={`/world-map?worldId=${worldId}`} className="w-full">
            <Button variant="gray" size="lg" fullWidth className="text-lg">
              <Map className="mr-1 w-4 h-4" /> Back to World Map
            </Button>
          </Link>
        </div>
      </main>

      <footer className="mt-6 py-2 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        👑 Coins can be used to unlock mythical pets in the backpack shop!
      </footer>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-playful-dots">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-bounce inline-block">🏆</span>
          <p className="text-lg font-bold text-slate-500 font-sans">Compiling Battle Report...</p>
        </div>
      </div>
    }>
      <WorldMapContentWrapper />
    </Suspense>
  );
}

// Rename Content component to prevent conflicts or keep it clean:
function WorldMapContentWrapper() {
  return <ResultsContent />;
}
