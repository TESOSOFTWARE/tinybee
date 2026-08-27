'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useGameState } from '@/hooks/useGameState';
import { XPBar } from '@/components/UI/XPBar';
import { ArrowLeft, ShoppingBag, Check } from 'lucide-react';

export default function ProfilePage() {
  const { state, pets, unlockPet, setActivePet, isLoading } = useGameState();
  const [purchaseError, setPurchaseError] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-playful-dots font-baloo">
        <div className="text-center space-y-4">
          <span className="text-5xl animate-bounce-slow inline-block">🎒</span>
          <p className="text-xl font-black text-slate-700">Unpacking Backpack...</p>
        </div>
      </div>
    );
  }

  const handleUnlockPet = (petId: string, cost: number) => {
    setPurchaseError(null);
    if (state.coins < cost) {
      setPurchaseError("Not enough gold coins! Win more battles to collect coins.");
      setTimeout(() => setPurchaseError(null), 3500);
      return;
    }

    const success = unlockPet(petId);
    if (!success) {
      setPurchaseError("Failed to purchase pet. Please try again.");
      setTimeout(() => setPurchaseError(null), 3500);
    }
  };

  // Compile Mastered vs Weak topics
  const topics = ['addition', 'subtraction', 'multiplication', 'division'];
  const mastered: string[] = [];
  const weak: string[] = [];

  topics.forEach(topic => {
    const stat = state.battleStats.topicAccuracy[topic];
    if (stat && stat.total > 0) {
      const accuracy = (stat.correct / stat.total) * 100;
      if (accuracy >= 80 && stat.total >= 5) {
        mastered.push(topic.toUpperCase());
      } else if (accuracy < 70) {
        weak.push(topic.toUpperCase());
      }
    } else {
      weak.push(topic.toUpperCase());
    }
  });

  return (
    <div className="min-h-screen font-baloo text-slate-800 select-none relative pb-12 flex flex-col">
      {/* Vibrant Background Synchronized with Home Page */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 bg-cover bg-center -z-10" 
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0.5)), url(/home-cards/background.jpg)',
          backgroundColor: '#cdeafd'
        }}
      ></div>
      
      {/* Navbar Header */}
      <header className="w-full bg-white/85 backdrop-blur-md border-b-2 border-slate-200 px-4 py-3.5 sticky top-0 z-30 shadow-sm mb-6">
        <div className="max-w-5xl w-full mx-auto flex items-center justify-between">
          <Link href="/">
            <button className="flex items-center gap-1.5 rounded-full bg-white border-2 border-slate-300 px-4 py-1.5 text-sm font-black hover:bg-slate-50 hover:border-slate-400 transition-all shadow-[0_3px_0_0_#cbd5e1] active:translate-y-0.5 active:shadow-none cursor-pointer text-slate-800">
              <ArrowLeft className="w-4 h-4 text-blue-500 stroke-[3]" />
              <span>Home</span>
            </button>
          </Link>
          <h1 className="text-lg md:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span className="text-2xl animate-bounce-slow">🎒</span> MY BACKPACK & PROFILE
          </h1>
          <div className="flex items-center gap-1.5 bg-amber-400 border-2 border-amber-200 text-amber-950 px-3.5 py-1.5 rounded-full font-black text-sm shadow-[0_3px_0_0_#b45309]">
            🪙 {state.coins}
          </div>
        </div>
      </header>

      {/* Main Profile Grid */}
      <main className="max-w-5xl w-full mx-auto flex-grow flex flex-col lg:flex-row gap-8 px-4 animate-pop-in">
        
        {/* Left Column: Player Stats & Mastery Scroll */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6">
          
          {/* Wizard Card (Vibrant 3D Theme) */}
          <div className="bg-white rounded-[2.2rem] border-4 border-purple-400 shadow-[0_10px_0_0_#a855f7] p-6 space-y-5 relative overflow-hidden">
            <div className="text-center pb-2">
              <span className="text-6xl animate-bounce-slow inline-block mt-2 drop-shadow-md">🧙‍♂️</span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">Apprentice Wizard</h2>
              <p className="text-xs text-purple-600 font-black uppercase tracking-widest mt-0.5">TinyBee Math Academy</p>
            </div>

            <div className="px-2">
              <XPBar xp={state.xp} level={state.level} />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-amber-50 border-4 border-amber-300 p-3 rounded-2xl flex flex-col items-center shadow-[0_4px_0_0_#fde68a]">
                <span className="text-2xl">🪙</span>
                <span className="text-[11px] font-black text-amber-700 mt-1 uppercase tracking-wide">Gold Coins</span>
                <span className="text-lg font-black text-slate-900">{state.coins}</span>
              </div>
              <div className="bg-rose-50 border-4 border-rose-300 p-3 rounded-2xl flex flex-col items-center shadow-[0_4px_0_0_#fecdd3]">
                <span className="text-2xl animate-pulse">🔥</span>
                <span className="text-[11px] font-black text-rose-600 mt-1 uppercase tracking-wide">Day Streak</span>
                <span className="text-lg font-black text-slate-900">{state.streak} Days</span>
              </div>
            </div>
          </div>

          {/* Mastery Scroll Paper (Vibrant 3D Theme) */}
          <div className="bg-[#fffbeb] rounded-[2.2rem] border-4 border-amber-400 shadow-[0_10px_0_0_#d97706] p-6 space-y-4">
            <h3 className="text-xl font-black text-amber-950 border-b-2 border-amber-200/80 pb-2 flex items-center gap-2">
              <span>📜</span> Spell Mastery Report
            </h3>
            
            {/* Mastered topics */}
            <div className="space-y-2">
              <span className="text-xs font-black text-emerald-700 uppercase tracking-widest block">⭐ Mastered Spells</span>
              {mastered.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {mastered.map(topic => (
                    <span key={`master-${topic}`} className="px-3 py-1 bg-emerald-100 border-2 border-emerald-400 text-emerald-900 text-xs font-black rounded-xl uppercase tracking-wide flex items-center gap-1 shadow-xs">
                      ✅ {topic}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs font-bold text-amber-900/80 bg-amber-100/50 p-3 rounded-xl border border-amber-300">No topics fully mastered yet. Win battles with high accuracy to master spells!</p>
              )}
            </div>

            {/* Weak / Practice Recommended */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-black text-amber-700 uppercase tracking-widest block">📚 Practice Recommended</span>
              {weak.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {weak.map(topic => (
                    <span key={`weak-${topic}`} className="px-3 py-1 bg-amber-100 border-2 border-amber-400 text-amber-900 text-xs font-black rounded-xl uppercase tracking-wide flex items-center gap-1 shadow-xs">
                      🎒 {topic}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs font-bold text-emerald-900 bg-emerald-100/50 p-3 rounded-xl border border-emerald-300">Excellent! You are balanced across all unlocked spell domains!</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Pet Companion Backpack / Shop */}
        <div className="w-full lg:w-3/5 flex flex-col gap-6">
          <div className="bg-white rounded-[2.2rem] border-4 border-sky-400 shadow-[0_10px_0_0_#0ea5e9] p-6 flex-grow flex flex-col gap-5">
            <div className="flex justify-between items-center border-b-4 border-slate-100 pb-3">
              <div>
                <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <ShoppingBag className="w-6 h-6 text-sky-500 stroke-[3]" />
                  Companion Pet Shop
                </h3>
                <p className="text-xs sm:text-sm font-bold text-slate-600 mt-0.5">Collect coins in quests to unlock magical pet friends!</p>
              </div>
            </div>

            {purchaseError && (
              <div className="p-3.5 bg-rose-100 border-2 border-rose-400 text-rose-800 text-sm font-black rounded-2xl text-center shadow-xs animate-shake">
                ⚠️ {purchaseError}
              </div>
            )}

            {/* Pets Shop List */}
            <div className="flex-grow flex flex-col gap-4 overflow-y-auto max-h-[560px] pr-1 scrollbar-thin">
              {pets.map((pet) => {
                const isEquipped = state.activePetId === pet.id;
                
                return (
                  <div
                    key={`pet-shop-${pet.id}`}
                    className={`flex items-center justify-between p-4 sm:p-5 rounded-[1.8rem] border-4 transition-all ${
                      isEquipped
                        ? 'bg-gradient-to-r from-emerald-50/80 to-teal-50/80 border-emerald-400 shadow-[0_6px_0_0_#10b981]'
                        : pet.unlocked
                        ? 'bg-white border-sky-300 shadow-[0_4px_0_0_#38bdf8] hover:shadow-[0_8px_0_0_#38bdf8] hover:-translate-y-0.5'
                        : 'bg-white border-slate-200 shadow-[0_4px_0_0_#cbd5e1] opacity-90'
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0 pr-2">
                      {/* Avatar SVG Preview bubble */}
                      <div
                        className="w-16 h-16 rounded-2xl border-4 flex items-center justify-center text-4xl shadow-sm shrink-0"
                        style={{ backgroundColor: `${pet.color}25`, borderColor: pet.color }}
                      >
                        {pet.emoji}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-black text-slate-900 text-lg">{pet.name}</h4>
                          {pet.unlocked && (
                            <span className="text-[10px] font-black bg-slate-100 border border-slate-300 text-slate-700 px-2 py-0.5 rounded-full uppercase tracking-wider">Unlocked</span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 font-bold leading-tight mt-1 truncate">{pet.description}</p>
                      </div>
                    </div>

                    <div className="shrink-0">
                      {isEquipped ? (
                        <span className="inline-flex items-center gap-1 bg-emerald-500 text-white font-black px-4 py-2 rounded-full text-xs shadow-sm uppercase tracking-wide border-2 border-emerald-300">
                          <Check className="w-4 h-4 stroke-[3]" /> Equipped
                        </span>
                      ) : pet.unlocked ? (
                        <button
                          onClick={() => setActivePet(pet.id)}
                          className="text-xs font-black uppercase tracking-wider px-5 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-white border-2 border-sky-200 shadow-[0_4px_0_0_#0369a1] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                        >
                          Equip
                        </button>
                      ) : (
                        <button
                          onClick={() => handleUnlockPet(pet.id, pet.cost)}
                          className="text-sm font-black uppercase tracking-wider flex items-center gap-1.5 px-5 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-amber-950 border-2 border-amber-200 shadow-[0_4px_0_0_#b45309] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                        >
                          <span>🪙 {pet.cost}</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </main>

      <footer className="mt-12 py-4 text-center text-slate-500 text-xs font-black">
        🐱 Upgrade companions to gain powerful advantages in Math & English battles!
      </footer>
    </div>
  );
}
