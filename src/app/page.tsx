'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState';
import { ParentGate } from '@/components/Parent/ParentGate';
import { Sword, BookOpen, Backpack, Flame, Lock, Sparkles } from 'lucide-react';

export default function LandingPage() {
  const { state, isLoading } = useGameState();
  const [showParentGate, setShowParentGate] = useState(false);
  const router = useRouter();

  const handleParentGateSuccess = () => {
    setShowParentGate(false);
    router.push('/parent-dashboard');
  };

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] font-baloo text-[#38345c] select-none">
      {/* Background with overlay */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 bg-cover bg-center -z-10" 
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0.5)), url(/home-cards/background.jpg)',
          backgroundColor: '#cdeafd'
        }}
      ></div>

      {/* Header */}
      <header className="border-b border-white/40 sticky top-0 z-20 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:rotate-12 transition-transform inline-block">🐝</span>
            <span className="text-xl font-black text-slate-900 tracking-tight">
              TINY<span className="text-blue-500">BEE</span>
            </span>
          </Link>
          
          <nav className="flex gap-3 sm:gap-4 items-center text-base">
            {!isLoading && state.xp > 0 && (
              <Link href="/profile">
                <div className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 transition-all px-3.5 py-1 rounded-full border-2 border-amber-300 shadow-[0_3px_0_0_#b45309] active:translate-y-0.5 active:shadow-none cursor-pointer">
                  <span className="text-base animate-bounce-slow">🐱</span>
                  <span className="text-xs md:text-sm font-black text-amber-950">Lvl {state.level}</span>
                </div>
              </Link>
            )}
            
            <button 
              onClick={() => setShowParentGate(true)}
              className="flex items-center gap-2 whitespace-nowrap rounded-full bg-white border-2 border-slate-300 px-4 py-1.5 text-sm font-black hover:bg-slate-50 hover:border-slate-400 transition-all shadow-[0_3px_0_0_#cbd5e1] active:translate-y-0.5 active:shadow-none cursor-pointer text-slate-800"
            >
              <Lock className="w-4 h-4 text-blue-600 stroke-[3]" />
              <span className="hidden sm:inline">Phụ huynh</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 lg:pt-8 pb-14 sm:pb-16 flex flex-col items-center animate-pop-in">
        
        {/* Hero Section */}
        <header className="text-center w-full">
          <p className="text-sm sm:text-base font-extrabold uppercase tracking-[0.2em] text-blue-600 drop-shadow-sm flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500 inline" /> TINYBEE FANTASY ARENA
          </p>
          <h1 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 drop-shadow-sm leading-tight">
            Solve Math & English.<br/>
            <span className="text-blue-600">Defeat Monsters.</span>
          </h1>
          <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-base sm:text-lg font-bold text-slate-700">
            Become a legendary wizard! Master counting, equations, and phonics to level up your magical companions.
          </p>
        </header>

        {/* Dynamic User Stats if logged in */}
        {!isLoading && state.xp > 0 && (
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm sm:text-base font-black text-slate-800 bg-white/95 backdrop-blur-sm px-6 py-2.5 rounded-full border-4 border-slate-300 shadow-[0_6px_0_0_#cbd5e1]">
            <span className="flex items-center gap-1.5 text-amber-700">🪙 <span className="text-slate-900">{state.coins} Coins</span></span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-rose-600">🔥 <span className="text-slate-900">{state.streak} Day Streak</span></span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-emerald-600">🏆 <span className="text-slate-900">{state.battleStats?.correctAnswers || 0} Solved</span></span>
          </div>
        )}

        {/* Feature Cards Grid (Vibrant 3D Gamified Cards) */}
        <div className="w-full mt-8 sm:mt-12 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-8">
          
          {/* Card 1: Math Battles */}
          <Link href="/select-grade" className="group relative flex flex-col lg:grid lg:grid-cols-[45%_1fr] lg:items-stretch rounded-[2.2rem] border-4 border-emerald-400 bg-white p-4 shadow-[0_12px_0_0_#10b981] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_16px_0_0_#10b981] active:translate-y-1 active:shadow-[0_4px_0_0_#10b981] gap-4 cursor-pointer">
            <span aria-hidden="true" className="absolute -top-3 left-1/2 h-5 w-20 -translate-x-1/2 rotate-[-3deg] rounded-[6px] bg-emerald-500 border-2 border-emerald-200 shadow-sm"></span>
            <div className="relative h-44 lg:h-full lg:min-h-[170px] overflow-hidden rounded-[1.5rem] border-2 border-emerald-100 bg-emerald-50">
              <div 
                className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
                style={{ backgroundImage: 'url(/home-cards/math-battles.jpg)' }}
              >
                <Sword className="w-16 h-16 text-emerald-500 hidden" />
              </div>
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></span>
            </div>
            <div className="flex flex-1 flex-col justify-between px-1 py-1 lg:py-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black leading-tight text-emerald-700">Math Battles</h2>
                <p className="mt-0.5 text-base font-black leading-tight text-slate-900">Chiến đấu Toán học</p>
                <p className="mt-2 text-sm sm:text-sm font-bold leading-relaxed text-slate-600">Giải các bài toán cộng trừ nhân chia để đánh bại quái vật Slime và nhận thưởng vàng.</p>
              </div>
              <div className="mt-4 flex justify-end">
                <span className="inline-flex items-center gap-1.5 text-sm font-black bg-emerald-500 text-white px-4 py-2 rounded-2xl shadow-[0_4px_0_0_#047857] group-hover:scale-105 transition-transform">
                  Vào chơi <span className="text-lg leading-none">→</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2: English Quests */}
          <Link href="/select-grade" className="group relative flex flex-col lg:grid lg:grid-cols-[45%_1fr] lg:items-stretch rounded-[2.2rem] border-4 border-sky-400 bg-white p-4 shadow-[0_12px_0_0_#0ea5e9] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_16px_0_0_#0ea5e9] active:translate-y-1 active:shadow-[0_4px_0_0_#0ea5e9] gap-4 cursor-pointer">
            <span aria-hidden="true" className="absolute -top-3 left-1/2 h-5 w-20 -translate-x-1/2 rotate-[3deg] rounded-[6px] bg-sky-500 border-2 border-sky-200 shadow-sm"></span>
            <div className="relative h-44 lg:h-full lg:min-h-[170px] overflow-hidden rounded-[1.5rem] border-2 border-sky-100 bg-sky-50">
              <div 
                className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
                style={{ backgroundImage: 'url(/home-cards/english-quests.jpg)' }}
              >
                <BookOpen className="w-16 h-16 text-sky-500 hidden" />
              </div>
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></span>
            </div>
            <div className="flex flex-1 flex-col justify-between px-1 py-1 lg:py-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black leading-tight text-sky-700">English Quests</h2>
                <p className="mt-0.5 text-base font-black leading-tight text-slate-900">Thử thách Tiếng Anh</p>
                <p className="mt-2 text-sm sm:text-sm font-bold leading-relaxed text-slate-600">Luyện tập từ vựng, ngữ pháp và phát âm để thu thập vật phẩm phép thuật.</p>
              </div>
              <div className="mt-4 flex justify-end">
                <span className="inline-flex items-center gap-1.5 text-sm font-black bg-sky-500 text-white px-4 py-2 rounded-2xl shadow-[0_4px_0_0_#0369a1] group-hover:scale-105 transition-transform">
                  Vào chơi <span className="text-lg leading-none">→</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Card 3: Magic Pets */}
          <Link href="/profile" className="group relative flex flex-col lg:grid lg:grid-cols-[45%_1fr] lg:items-stretch rounded-[2.2rem] border-4 border-amber-400 bg-white p-4 shadow-[0_12px_0_0_#f59e0b] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_16px_0_0_#f59e0b] active:translate-y-1 active:shadow-[0_4px_0_0_#f59e0b] gap-4 cursor-pointer">
            <span aria-hidden="true" className="absolute -top-3 left-1/2 h-5 w-20 -translate-x-1/2 rotate-[-2deg] rounded-[6px] bg-amber-500 border-2 border-amber-200 shadow-sm"></span>
            <div className="relative h-44 lg:h-full lg:min-h-[170px] overflow-hidden rounded-[1.5rem] border-2 border-amber-100 bg-amber-50">
              <div 
                className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
                style={{ backgroundImage: 'url(/home-cards/magic-pets.jpg)' }}
              >
                <Backpack className="w-16 h-16 text-amber-600 hidden" />
              </div>
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></span>
            </div>
            <div className="flex flex-1 flex-col justify-between px-1 py-1 lg:py-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black leading-tight text-amber-700">Magic Pets</h2>
                <p className="mt-0.5 text-base font-black leading-tight text-slate-900">Thú cưng Phép thuật</p>
                <p className="mt-2 text-sm sm:text-sm font-bold leading-relaxed text-slate-600">Mở ba lô, xem bộ sưu tập thú cưng đáng yêu của bạn và nâng cấp chúng mỗi ngày.</p>
              </div>
              <div className="mt-4 flex justify-end">
                <span className="inline-flex items-center gap-1.5 text-sm font-black bg-amber-500 text-white px-4 py-2 rounded-2xl shadow-[0_4px_0_0_#b45309] group-hover:scale-105 transition-transform">
                  Mở Ba lô <span className="text-lg leading-none">→</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Card 4: Daily Streaks */}
          <Link href="/select-grade" className="group relative flex flex-col lg:grid lg:grid-cols-[45%_1fr] lg:items-stretch rounded-[2.2rem] border-4 border-purple-400 bg-white p-4 shadow-[0_12px_0_0_#a855f7] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_16px_0_0_#a855f7] active:translate-y-1 active:shadow-[0_4px_0_0_#a855f7] gap-4 cursor-pointer">
            <span aria-hidden="true" className="absolute -top-3 left-1/2 h-5 w-20 -translate-x-1/2 rotate-[2deg] rounded-[6px] bg-purple-500 border-2 border-purple-200 shadow-sm"></span>
            <div className="relative h-44 lg:h-full lg:min-h-[170px] overflow-hidden rounded-[1.5rem] border-2 border-purple-100 bg-purple-50">
              <div 
                className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
                style={{ backgroundImage: 'url(/home-cards/daily-streaks.jpg)' }}
              >
                <Flame className="w-16 h-16 text-purple-500 hidden" />
              </div>
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></span>
            </div>
            <div className="flex flex-1 flex-col justify-between px-1 py-1 lg:py-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black leading-tight text-purple-700">Daily Streaks</h2>
                <p className="mt-0.5 text-base font-black leading-tight text-slate-900">Chuỗi ngày học tập</p>
                <p className="mt-2 text-sm sm:text-sm font-bold leading-relaxed text-slate-600">Giữ vững chuỗi ngày học tập để nhận những rương kho báu đặc biệt vào cuối tuần.</p>
              </div>
              <div className="mt-4 flex justify-end">
                <span className="inline-flex items-center gap-1.5 text-sm font-black bg-purple-500 text-white px-4 py-2 rounded-2xl shadow-[0_4px_0_0_#6b21a8] group-hover:scale-105 transition-transform">
                  {state.streak > 0 ? `🔥 Đang có ${state.streak} streak` : 'Bắt đầu ngay'} <span className="text-lg leading-none">→</span>
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Parent-Friendly Section (Vibrant 3D Theme) */}
        <div className="w-full pt-16 mt-14 border-t-4 border-slate-300/50 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 drop-shadow-sm">
            🛡️ Parents & Educators Love TinyBee
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            <div className="bg-white p-6 rounded-[2rem] border-4 border-emerald-400 shadow-[0_8px_0_0_#10b981] hover:-translate-y-1 transition-all">
              <div className="bg-emerald-500 text-white rounded-2xl w-14 h-14 flex items-center justify-center text-2xl font-bold mb-4 border-2 border-emerald-200 shadow-[0_4px_0_0_#047857]">
                🎯
              </div>
              <h4 className="text-xl font-black text-slate-900">100% Educational</h4>
              <p className="mt-2 text-sm text-slate-600 font-bold leading-relaxed">
                Rigorous curriculum-aligned questions covering Grade K-5 arithmetic and English phonics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[2rem] border-4 border-sky-400 shadow-[0_8px_0_0_#0ea5e9] hover:-translate-y-1 transition-all">
              <div className="bg-sky-500 text-white rounded-2xl w-14 h-14 flex items-center justify-center text-2xl font-bold mb-4 border-2 border-sky-200 shadow-[0_4px_0_0_#0369a1]">
                🔒
              </div>
              <h4 className="text-xl font-black text-slate-900">Kid-Safe by Design</h4>
              <p className="mt-2 text-sm text-slate-600 font-bold leading-relaxed">
                Completely self-contained. No open chat features, no advertising, and zero distractions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[2rem] border-4 border-purple-400 shadow-[0_8px_0_0_#a855f7] hover:-translate-y-1 transition-all">
              <div className="bg-purple-500 text-white rounded-2xl w-14 h-14 flex items-center justify-center text-2xl font-bold mb-4 border-2 border-purple-200 shadow-[0_4px_0_0_#6b21a8]">
                💖
              </div>
              <h4 className="text-xl font-black text-slate-900">Positive Play</h4>
              <p className="mt-2 text-sm text-slate-600 font-bold leading-relaxed">
                No harsh game-overs. Friendly wizard scrolls explain mistakes to make complex concepts easy.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="w-full bg-white/70 backdrop-blur-md border-t border-white/40 text-slate-600 py-8 px-4 text-center text-sm font-black">
        <div className="max-w-5xl mx-auto space-y-1">
          <p>🔒 TinyBee is a safe ad-free learning zone. © {new Date().getFullYear()} TinyBee.</p>
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
