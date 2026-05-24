'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useGameState } from '@/hooks/useGameState';
import { Button } from '@/components/UI/Button';
import { Card } from '@/components/UI/Card';
import { XPBar } from '@/components/UI/XPBar';
import { ArrowLeft, Coins, Flame, Award, ShoppingBag, Check } from 'lucide-react';

export default function ProfilePage() {
  const { state, pets, unlockPet, setActivePet, isLoading } = useGameState();
  const [purchaseError, setPurchaseError] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-playful-dots">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-bounce inline-block">🎒</span>
          <p className="text-lg font-bold text-slate-500">Unpacking Backpack...</p>
        </div>
      </div>
    );
  }

  const handleUnlockPet = (petId: string, cost: number) => {
    setPurchaseError(null);
    if (state.coins < cost) {
      setPurchaseError("Not enough gold coins! Win more math battles to collect coins.");
      setTimeout(() => setPurchaseError(null), 3000);
      return;
    }

    const success = unlockPet(petId);
    if (!success) {
      setPurchaseError("Failed to purchase pet. Please try again.");
      setTimeout(() => setPurchaseError(null), 3000);
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
      // Unpracticed recommendation
      weak.push(topic.toUpperCase());
    }
  });

  return (
    <div className="min-h-screen bg-playful-dots py-6 px-4 flex flex-col select-none">
      
      {/* Header bar */}
      <header className="max-w-4xl w-full mx-auto mb-6 flex items-center justify-between">
        <Link href="/">
          <Button variant="gray" size="sm" className="flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Home
          </Button>
        </Link>
        <h1 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
          🎒 MY BACKPACK & PROFILE
        </h1>
        <div className="w-16"></div>
      </header>

      {/* Main Profile Grid */}
      <main className="max-w-4xl w-full mx-auto flex-grow flex flex-col md:flex-row gap-6 animate-pop-in">
        
        {/* Left Column: Player Stats & Mastery Scroll */}
        <div className="w-full md:w-2/5 flex flex-col gap-6">
          {/* Wizard Card */}
          <Card padding="md" className="space-y-4">
            <div className="text-center pb-2">
              <span className="text-5xl animate-bounce-slow inline-block mt-2">🧙‍♂️</span>
              <h2 className="text-2xl font-black text-slate-800 mt-2">Apprentice Wizard</h2>
              <p className="text-xs text-slate-400 font-extrabold uppercase tracking-wide">TinyBee Math Academy</p>
            </div>

            <XPBar xp={state.xp} level={state.level} />

            <div className="grid grid-cols-2 gap-2 pt-2 text-sm font-bold text-slate-600">
              <div className="bg-slate-50 border-2 border-slate-200 p-2.5 rounded-2xl flex flex-col items-center shadow-inner">
                <span className="text-xl">🪙</span>
                <span className="text-xs text-slate-400 mt-1 uppercase">Coins</span>
                <span className="text-base font-black text-slate-800">{state.coins}</span>
              </div>
              <div className="bg-slate-50 border-2 border-slate-200 p-2.5 rounded-2xl flex flex-col items-center shadow-inner">
                <span className="text-xl animate-pulse">🔥</span>
                <span className="text-xs text-slate-400 mt-1 uppercase">Streak</span>
                <span className="text-base font-black text-slate-800">{state.streak} Days</span>
              </div>
            </div>
          </Card>

          {/* Mastery Scroll paper */}
          <Card variant="scroll" padding="md" className="space-y-4">
            <h3 className="text-lg font-black text-amber-950 border-b-2 border-amber-200 pb-1.5 flex items-center gap-1.5">
              📜 Spell Mastery Report
            </h3>
            
            {/* Mastered topics */}
            <div className="space-y-2">
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block">⭐ Mastered Spells</span>
              {mastered.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {mastered.map(topic => (
                    <span key={`master-${topic}`} className="px-2.5 py-1 bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-black rounded-lg uppercase tracking-wide flex items-center gap-1">
                      ✅ {topic}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs font-medium text-amber-800 italic">No topics fully mastered yet. Win battles with high accuracy to master spells!</p>
              )}
            </div>

            {/* Weak / Practice Recommended */}
            <div className="space-y-2">
              <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest block">📚 Practice Recommended</span>
              {weak.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {weak.map(topic => (
                    <span key={`weak-${topic}`} className="px-2.5 py-1 bg-amber-100 border border-amber-300 text-amber-800 text-xs font-black rounded-lg uppercase tracking-wide flex items-center gap-1">
                      🎒 {topic}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs font-medium text-emerald-800 italic">Excellent! You are balanced across all unlocked dimensions!</p>
              )}
            </div>
          </Card>
        </div>

        {/* Right Column: Pet Companion Backpack / Shop */}
        <div className="w-full md:w-3/5 flex flex-col gap-6">
          <Card padding="md" className="flex-grow flex flex-col gap-4">
            <div className="flex justify-between items-center border-b-2 border-slate-100 pb-2">
              <div>
                <h3 className="text-xl font-black text-slate-800 flex items-center gap-1.5">
                  <ShoppingBag className="w-5 h-5 text-academy-blue" />
                  Companion Pet Shop
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Collect coins to unlock legendary magical companions!</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 border border-yellow-200 px-3 py-1 rounded-full text-sm font-black flex items-center gap-1">
                🪙 {state.coins}
              </span>
            </div>

            {purchaseError && (
              <div className="p-3 bg-red-100 border-2 border-red-200 text-red-700 text-xs font-bold rounded-2xl text-center animate-shake">
                ⚠️ {purchaseError}
              </div>
            )}

            {/* Pets Shop List */}
            <div className="flex-grow flex flex-col gap-4 overflow-y-auto max-h-[460px] pr-1">
              {pets.map((pet) => {
                const isEquipped = state.activePetId === pet.id;
                
                return (
                  <div
                    key={`pet-shop-${pet.id}`}
                    className={`flex items-center justify-between p-4 rounded-3xl border-2 transition-all ${
                      isEquipped
                        ? 'bg-sky-50 border-sky-300 shadow-sm'
                        : pet.unlocked
                        ? 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Avatar SVG Preview bubble */}
                      <div
                        className="w-14 h-14 rounded-2xl border-2 flex items-center justify-center text-3xl shadow-sm"
                        style={{ backgroundColor: `${pet.color}20`, borderColor: pet.color }}
                      >
                        {pet.emoji}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-extrabold text-slate-800 text-base">{pet.name}</h4>
                          {pet.unlocked && (
                            <span className="text-[10px] font-black bg-slate-200 text-slate-600 px-2 py-0.2 rounded uppercase">Unlocked</span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 leading-tight mt-0.5 font-medium">{pet.description}</p>
                      </div>
                    </div>

                    <div>
                      {isEquipped ? (
                        <span className="inline-flex items-center gap-0.5 bg-sky-500 text-white font-bold px-3.5 py-1.5 rounded-full text-xs shadow-sm uppercase tracking-wide">
                          <Check className="w-3.5 h-3.5" /> Equipped
                        </span>
                      ) : pet.unlocked ? (
                        <Button
                          variant="blue"
                          size="sm"
                          onClick={() => setActivePet(pet.id)}
                          className="text-xs font-bold uppercase tracking-wide px-4 py-1.5"
                        >
                          Equip
                        </Button>
                      ) : (
                        <Button
                          variant="yellow"
                          size="sm"
                          onClick={() => handleUnlockPet(pet.id, pet.cost)}
                          className="text-xs font-black uppercase tracking-wide flex items-center gap-1 px-4 py-1.5"
                        >
                          <span>🪙 {pet.cost}</span>
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

      </main>
    </div>
  );
}
