'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useGameState } from '@/hooks/useGameState';
import { Button } from '@/components/UI/Button';
import { Card } from '@/components/UI/Card';
import { XPBar } from '@/components/UI/XPBar';
import { ParentGate } from '@/components/Parent/ParentGate';
import { ShieldCheck, ShieldAlert, Award, Star, Compass, Sparkles, BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const { state, isLoading } = useGameState();
  const [showParentGate, setShowParentGate] = useState(false);
  const router = useRouter();

  const handleParentGateSuccess = () => {
    setShowParentGate(false);
    router.push('/parent-dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-playful-dots select-none">
      {/* Header / Navbar */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b-4 border-slate-100 px-4 py-3 sticky top-0 z-30">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl">🐝</span>
            <span className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
              TINY<span className="text-academy-blue font-bold">BEE</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Button
              variant="gray"
              size="sm"
              onClick={() => setShowParentGate(true)}
              className="text-xs md:text-sm font-bold flex items-center gap-1"
            >
              🔑 Parents
            </Button>
            
            {!isLoading && state.xp > 0 && (
              <Link href="/profile">
                <div className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 transition-colors px-3 py-1.5 rounded-2xl border-2 border-slate-200 cursor-pointer">
                  <span className="text-base">🐱</span>
                  <span className="text-xs md:text-sm font-extrabold text-slate-700">Lvl {state.level}</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-8 md:py-16 flex flex-col items-center text-center gap-12">
        <div className="space-y-6 max-w-2xl animate-pop-in">
          {/* Decorative Magic Badge */}
          <div className="inline-flex items-center gap-1.5 bg-yellow-100 border-2 border-yellow-300 text-yellow-800 px-4 py-1.5 rounded-full text-sm font-black shadow-sm animate-bounce-slow">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
            THE ULTIMATE MATH ADVENTURE
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-800 leading-tight tracking-tight">
            Solve Math. <br />
            <span className="text-academy-blue">Defeat Monsters.</span> <br />
            Earn Cute Pets!
          </h1>
          
          <p className="text-lg md:text-xl font-medium text-slate-500 max-w-lg mx-auto">
            Become a legendary math wizard! Practice counting, addition, subtraction, multiplication, and division to level up your magical companions.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm mx-auto">
            <Link href="/select-grade" className="w-full">
              <Button variant="green" size="lg" fullWidth className="text-xl md:text-2xl uppercase tracking-wider py-4 animate-pulse-slow">
                ⚔️ Start Playing Now
              </Button>
            </Link>
            {!isLoading && state.xp > 0 && (
              <Link href="/profile" className="w-full">
                <Button variant="purple" size="lg" fullWidth className="text-xl">
                  🎒 Open Backpack
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Live RPG stats container for returning wizards */}
        {!isLoading && state.xp > 0 && (
          <div className="w-full max-w-md animate-slide-up">
            <Card padding="md" className="space-y-4">
              <h3 className="text-lg font-bold text-slate-700 flex items-center justify-center gap-1.5">
                👋 Welcome Back, Young Adventurer!
              </h3>
              <XPBar xp={state.xp} level={state.level} />
              <div className="flex justify-around items-center pt-2 text-sm font-extrabold text-slate-600">
                <span className="flex items-center gap-1">🪙 {state.coins} Coins</span>
                <span className="flex items-center gap-1">🔥 {state.streak} Day Streak</span>
                <span className="flex items-center gap-1">🏆 {state.battleStats.correctAnswers} Solved</span>
              </div>
            </Card>
          </div>
        )}

        {/* Dynamic Graphic Mockup (SVG illustration) */}
        <div className="w-full max-w-xl bg-gradient-to-b from-sky-100 to-sky-50 border-4 border-slate-200 rounded-3xl p-6 shadow-lg relative overflow-hidden animate-slide-up">
          {/* Background grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#bae6fd_1px,transparent_1px)] bg-[size:16px_16px] opacity-40"></div>

          <div className="relative flex justify-between items-center gap-4 py-8">
            {/* Player's Leaf Kitten (SVG) */}
            <div className="text-center animate-float flex flex-col items-center">
              <svg className="w-24 h-24 drop-shadow" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="30" fill="#4ade80" stroke="#1e293b" strokeWidth="4" />
                <path d="M28 28L18 8L36 22Z" fill="#16a34a" stroke="#1e293b" strokeWidth="3" />
                <path d="M72 28L82 8L64 22Z" fill="#16a34a" stroke="#1e293b" strokeWidth="3" />
                <circle cx="40" cy="45" r="4" fill="#1e293b" />
                <circle cx="60" cy="45" r="4" fill="#1e293b" />
                <circle cx="38" cy="43" r="1" fill="white" />
                <circle cx="58" cy="43" r="1" fill="white" />
                <path d="M47 52C48 54 52 54 53 52" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="mt-2 text-xs font-black bg-slate-800 text-white px-2 py-0.5 rounded-full uppercase">Kitten</span>
            </div>

            {/* Combat Clash */}
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-4xl font-extrabold text-amber-500 animate-pulse">VS</span>
              <span className="px-3 py-1 bg-red-100 text-red-700 border-2 border-red-200 text-xs font-bold rounded-full">BATTLE STAGE</span>
            </div>

            {/* Cute Slime Monster (SVG) */}
            <div className="text-center animate-float-slow flex flex-col items-center">
              <svg className="w-24 h-24 drop-shadow" viewBox="0 0 100 100" fill="none">
                <ellipse cx="50" cy="50" rx="30" ry="25" fill="#c084fc" stroke="#1e293b" strokeWidth="4" />
                <circle cx="50" cy="45" r="10" fill="white" stroke="#1e293b" strokeWidth="3" />
                <circle cx="50" cy="45" r="4" fill="#0284c7" />
                <path d="M43 65L46 60L49 65H43Z" fill="white" stroke="#1e293b" strokeWidth="2" />
                <path d="M51 65L54 60L57 65H51Z" fill="white" stroke="#1e293b" strokeWidth="2" />
              </svg>
              <span className="mt-2 text-xs font-black bg-slate-800 text-white px-2 py-0.5 rounded-full uppercase">Slime</span>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur border-2 border-amber-200 p-3 rounded-2xl shadow-inner max-w-xs mx-auto text-sm font-extrabold text-amber-950 flex items-center justify-center gap-2">
            ✨ Solve <span className="bg-amber-100 px-2 py-0.5 rounded-lg text-amber-600">8 + 2 = ?</span> to strike!
          </div>
        </div>

        {/* Parent-Friendly Section */}
        <div className="w-full pt-10 border-t-4 border-slate-100">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-8">
            🛡️ Parents & Educators Love TinyBee
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card padding="md" className="text-left space-y-2">
              <div className="bg-emerald-100 text-emerald-600 rounded-2xl w-10 h-10 flex items-center justify-center text-xl font-bold">
                🎯
              </div>
              <h4 className="text-lg font-black text-slate-800">100% Educational</h4>
              <p className="text-sm text-slate-500 font-medium">
                Rigorous curriculum-aligned questions covering Grade K-5 arithmetic, conceptual number bonds, addition carry-overs, and divisions.
              </p>
            </Card>

            <Card padding="md" className="text-left space-y-2">
              <div className="bg-sky-100 text-sky-600 rounded-2xl w-10 h-10 flex items-center justify-center text-xl font-bold">
                🔒
              </div>
              <h4 className="text-lg font-black text-slate-800">Kid-Safe by Design</h4>
              <p className="text-sm text-slate-500 font-medium">
                Completely self-contained. No open chat features, no dynamic user content, zero advertising, and no commercial manipulation.
              </p>
            </Card>

            <Card padding="md" className="text-left space-y-2">
              <div className="bg-purple-100 text-purple-600 rounded-2xl w-10 h-10 flex items-center justify-center text-xl font-bold">
                💖
              </div>
              <h4 className="text-lg font-black text-slate-800">Positive Encouragement</h4>
              <p className="text-sm text-slate-500 font-medium">
                No harsh game-over punishments. An incorrect answer leads to a friendly wizard scroll explanation that makes complex math easy.
              </p>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-900 text-slate-400 py-8 px-4 text-center text-sm border-t-4 border-slate-950 font-medium">
        <div className="max-w-5xl mx-auto space-y-2">
          <p>© {new Date().getFullYear()} TinyBee. Built for young brave mathematicians.</p>
          <p className="text-xs text-slate-600">Educational gaming platform. All content generated originally.</p>
        </div>
      </footer>

      {/* Parent Gate Modal */}
      {showParentGate && (
        <ParentGate
          onSuccess={handleParentGateSuccess}
          onClose={() => setShowParentGate(false)}
        />
      )}
    </div>
  );
}
