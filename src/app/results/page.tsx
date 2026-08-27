'use client';

import React, { useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState';
import { ArrowRight, RotateCcw, Map as MapIcon, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

function ResultsContent() {
  const searchParams = useSearchParams();
  const { addXP, addCoins, completeLevel, updateStreak } = useGameState();

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
  let summarySubtitle = "Mistakes are how we learn. Keep practicing to improve your magical spells!";
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
      summarySubtitle = "You answered every question flawlessly! Your magical base is completely safe!";
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
      summarySubtitle = "You stood your ground! A bit more training will unlock 3-star legendary spell stats.";
      bannerEmoji = "⚔️";
    }
  }

  const earnedCoins = correctCount * 10;
  const earnedXP = correctCount * 20 + (accuracy === 100 ? 30 : 0);

  useEffect(() => {
    if (hasSavedRef.current) return;
    hasSavedRef.current = true;

    addCoins(earnedCoins);
    addXP(earnedXP);
    completeLevel(worldId, levelId, stars, accuracy, timeSpent, correctCount, totalCount);
    updateStreak();

    if (accuracy >= 50) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 60,
          origin: { x: 0 }
        });
      }, 250);
      
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 60,
          origin: { x: 1 }
        });
      }, 450);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextLevelId = parseInt(levelId) + 1;
  const hasNextLevel = nextLevelId <= 10;

  return (
    <div className="min-h-screen font-baloo text-slate-800 select-none relative py-8 px-4 flex flex-col justify-between items-center">
      {/* Vibrant Background Synchronized with Home Page */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 bg-cover bg-center -z-10" 
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0.5)), url(/home-cards/background.jpg)',
          backgroundColor: '#cdeafd'
        }}
      ></div>
      
      <header className="max-w-md w-full text-center mb-2 z-10 animate-fade-in">
        <span className="text-xs sm:text-sm font-black text-amber-600 uppercase tracking-widest bg-amber-100 border border-amber-300 px-4 py-1 rounded-full inline-block shadow-xs mb-2">
          {mode === 'racing' 
            ? 'Grand Prix Completed' 
            : mode === 'tower-defense' 
            ? 'Defense Completed' 
            : mode === 'tug-of-war'
            ? 'Tug of War Match Ended'
            : 'Battle Completed'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight drop-shadow-sm">
          {mode === 'racing' 
            ? '🏎️ RACING REPORT' 
            : mode === 'tower-defense' 
            ? '🏰 DEFENSE REPORT' 
            : mode === 'tug-of-war'
            ? '🏋️ TUG OF WAR REPORT'
            : '⚔️ BATTLE REPORT'}
        </h1>
      </header>

      {/* Main Results Celebratory 3D Card */}
      <main className="max-w-md w-full flex-grow flex flex-col justify-center gap-6 z-10 my-4">
        <div className="bg-white rounded-[3rem] border-[5px] border-amber-400 shadow-[0_16px_0_0_#d97706] p-6 sm:p-8 text-center space-y-6 animate-pop-in relative overflow-hidden">
          
          {/* Trophy / Banner */}
          <div className="mx-auto w-24 h-24 bg-gradient-to-b from-amber-100 to-amber-200 border-4 border-amber-400 rounded-3xl flex items-center justify-center text-5xl shadow-[0_6px_0_0_#d97706] animate-bounce-slow">
            {bannerEmoji}
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">{summaryMessage}</h2>
            <p className="text-sm sm:text-base text-slate-600 font-bold leading-relaxed px-2">{summarySubtitle}</p>
          </div>

          {/* Gold Stars Display */}
          <div className="flex justify-center gap-3 py-2 bg-amber-50/50 rounded-2xl border-2 border-amber-200/60 p-3">
            {[1, 2, 3].map((star) => (
              <Star
                key={`star-result-${star}`}
                className={`w-14 h-14 stroke-[2.5px] transition-all duration-500 ${
                  star <= stars
                    ? 'text-amber-400 fill-amber-400 scale-110 drop-shadow-md animate-pulse-slow'
                    : 'text-slate-200 stroke-slate-300'
                }`}
              />
            ))}
          </div>

          {/* Rewards Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-50 border-4 border-amber-300 p-4 rounded-2xl shadow-[0_6px_0_0_#fde68a] transform hover:scale-105 transition-transform">
              <span className="text-xs font-black text-amber-800 uppercase tracking-wider block">✨ XP Gained</span>
              <p className="text-2xl sm:text-3xl font-black text-amber-600 mt-1">+{earnedXP} <span className="text-sm">XP</span></p>
            </div>
            <div className="bg-emerald-50 border-4 border-emerald-300 p-4 rounded-2xl shadow-[0_6px_0_0_#a7f3d0] transform hover:scale-105 transition-transform">
              <span className="text-xs font-black text-emerald-800 uppercase tracking-wider block">🪙 Coins Earned</span>
              <p className="text-2xl sm:text-3xl font-black text-emerald-600 mt-1">+{earnedCoins}</p>
            </div>
          </div>

          {/* Stats breakdown */}
          <div className="grid grid-cols-2 gap-2 text-sm sm:text-base font-black text-slate-700 bg-slate-100 p-3 rounded-2xl border-2 border-slate-200">
            <div className="flex items-center justify-between border-r-2 border-slate-200 px-3">
              <span className="text-slate-500 font-bold">🎯 Accuracy:</span>
              <span className="text-indigo-600">{accuracy}%</span>
            </div>
            <div className="flex items-center justify-between px-3">
              <span className="text-slate-500 font-bold">⏱️ Time:</span>
              <span className="text-rose-600">{timeSpent}s</span>
            </div>
          </div>
        </div>

        {/* Navigation Tactile 3D CTAs */}
        <div className="flex flex-col gap-4 animate-slide-up mt-2">
          {accuracy >= 50 && hasNextLevel ? (
            <Link href={`/${mode}?worldId=${worldId}&levelId=${nextLevelId}`} className="w-full">
              <button className="w-full py-4 px-6 rounded-[1.6rem] font-black text-lg sm:text-xl bg-emerald-500 hover:bg-emerald-400 text-white border-4 border-emerald-300 shadow-[0_8px_0_0_#047857] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider">
                <span>{mode === 'racing' 
                  ? 'Next Race' 
                  : mode === 'tower-defense' 
                  ? 'Next Defense' 
                  : mode === 'tug-of-war'
                  ? 'Next Match'
                  : 'Next Battle'}</span>
                <ArrowRight className="w-6 h-6 stroke-[3]" />
              </button>
            </Link>
          ) : null}

          <Link href={`/${mode}?worldId=${worldId}&levelId=${levelId}`} className="w-full">
            <button className="w-full py-3.5 px-6 rounded-[1.4rem] font-black text-base sm:text-lg bg-sky-500 hover:bg-sky-400 text-white border-4 border-sky-300 shadow-[0_6px_0_0_#0369a1] active:translate-y-1.5 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider">
              <RotateCcw className="w-5 h-5 stroke-[3]" />
              <span>Practice Again</span>
            </button>
          </Link>

          <Link href={`/world-map?worldId=${worldId}`} className="w-full">
            <button className="w-full py-3 px-6 rounded-[1.4rem] font-black text-sm sm:text-base bg-white hover:bg-slate-50 text-slate-700 border-4 border-slate-300 shadow-[0_5px_0_0_#cbd5e1] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider">
              <MapIcon className="w-5 h-5 text-slate-500 stroke-[3]" />
              <span>Back to World Map</span>
            </button>
          </Link>
        </div>
      </main>

      <footer className="mt-8 py-2 text-center text-xs font-black text-amber-800/70 uppercase tracking-widest z-10">
        👑 Coins can be used to unlock mythical pets in the backpack shop!
      </footer>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-amber-50 font-baloo">
        <div className="text-center space-y-4">
          <span className="text-6xl animate-bounce-slow inline-block">🏆</span>
          <p className="text-xl font-black text-slate-700">Compiling Battle Report...</p>
        </div>
      </div>
    }>
      <ResultsContentWrapper />
    </Suspense>
  );
}

function ResultsContentWrapper() {
  return <ResultsContent />;
}
