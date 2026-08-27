'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState';
import { ProgressBar } from '@/components/UI/ProgressBar';
import { ArrowLeft, Lock, Star, X } from 'lucide-react';

import { WORLDS_DATABASE } from '@/data/worlds';

function WorldMapContent() {
  const searchParams = useSearchParams();
  const { state, isLoading } = useGameState();
  const [selectedLvlNum, setSelectedLvlNum] = React.useState<number | null>(null);

  const worldId = searchParams.get('worldId') || 'g1-addition';
  const world = WORLDS_DATABASE[worldId] || WORLDS_DATABASE['g1-addition'];
  
  const [actualTotalLevels, setActualTotalLevels] = React.useState<number>(Math.min(world.totalLevels || 10, 10));

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem('tinybee_video_quests');
      if (stored) {
        const parsed = JSON.parse(stored);
        const prefix = `${world.topicId || world.id}-`;
        
        let count = 0;
        Object.keys(parsed).forEach(key => {
          if (key.startsWith(prefix)) {
            const num = parseInt(key.split('-').pop() || '0', 10);
            if (!isNaN(num) && num > 0) count++;
          }
        });
        
        setTimeout(() => {
          setActualTotalLevels(Math.max(1, Math.min(count, 10)));
        }, 0);
      }
    } catch (e) {
      console.error(e);
    }
  }, [world.topicId, world.id]);

  const totalLevels = actualTotalLevels;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-playful-dots font-baloo">
        <div className="text-center space-y-4">
          <span className="text-5xl animate-bounce-slow inline-block">🪄</span>
          <p className="text-xl font-black text-slate-700">Unrolling Magical Map...</p>
        </div>
      </div>
    );
  }

  const worldProg = state.worldProgression[world.id] || { unlockedLevels: 1, stars: {}, highScores: {} };
  const { stars } = worldProg;

  const totalStars = Object.values(stars).reduce((acc, curr) => acc + curr, 0);
  const completedLevels = Object.keys(stars).filter(levelId => (stars[levelId] || 0) > 0).length;

  const nodePositions = [
    { left: '76px', top: '90px' },     // Level 1
    { left: '228px', top: '175px' },   // Level 2
    { left: '114px', top: '260px' },   // Level 3
    { left: '266px', top: '345px' },   // Level 4
    { left: '150px', top: '430px' },   // Level 5
    { left: '76px', top: '515px' },    // Level 6
    { left: '228px', top: '600px' },   // Level 7
    { left: '114px', top: '685px' },   // Level 8
    { left: '266px', top: '770px' },   // Level 9
    { left: '190px', top: '855px' }    // Level 10 (Boss)
  ];

  return (
    <div className="min-h-screen flex flex-col select-none font-baloo text-slate-800 relative">
      {/* Vibrant background synchronized with Home Page */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 bg-cover bg-center -z-10" 
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0.5)), url(/home-cards/background.jpg)',
          backgroundColor: '#cdeafd'
        }}
      ></div>

      {/* Navbar header */}
      <header className="w-full bg-white/85 backdrop-blur-md border-b-2 border-slate-200 px-4 py-3 sticky top-0 z-30 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/select-grade">
            <button className="flex items-center gap-1.5 rounded-full bg-white border-2 border-[#cbd5e1] px-4 py-1.5 text-sm font-extrabold hover:bg-slate-50 hover:border-slate-400 transition-all shadow-[0_3px_0_0_#cbd5e1] active:translate-y-0.5 active:shadow-none cursor-pointer text-[#38345c]">
              <ArrowLeft className="w-4 h-4 text-blue-500 stroke-[3]" />
              <span>Back</span>
            </button>
          </Link>
          <div className="text-center">
            <span className="text-xs font-black text-blue-600 uppercase tracking-widest block drop-shadow-xs">Adventure Land</span>
            <h1 className="text-lg md:text-2xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-2">
              <span className="text-2xl animate-bounce-slow">{world.emoji}</span> {world.name} <span className="text-sm font-bold bg-slate-100 border border-slate-300 px-2 py-0.5 rounded-lg text-slate-700">G{world.grade}</span>
            </h1>
          </div>
          <div className="flex items-center gap-1.5 bg-amber-400 border-2 border-amber-200 text-amber-950 px-3.5 py-1.5 rounded-full font-black text-sm shadow-[0_3px_0_0_#b45309] animate-bounce-slow">
            🪙 {state.coins}
          </div>
        </div>
      </header>

      {/* Main progress & map area */}
      <main className="max-w-lg w-full mx-auto flex-grow flex flex-col px-4 py-6 gap-6 relative animate-pop-in">
        
        {/* Progress Tracker Card (Vibrant 3D style) */}
        <div className="bg-white rounded-[2rem] border-4 border-emerald-400 shadow-[0_8px_0_0_#10b981] p-5 space-y-3">
          <div className="flex justify-between items-center text-sm font-black text-slate-800">
            <span className="flex items-center gap-1.5 text-emerald-700">🗺️ <span className="text-slate-900">Map Progress</span></span>
            <span className="flex items-center gap-1 bg-amber-100 border border-amber-300 text-amber-800 px-2.5 py-0.5 rounded-full font-black text-xs shadow-xs">
              ⭐ {totalStars} Stars
            </span>
          </div>
          <ProgressBar value={completedLevels} max={totalLevels} color="bg-emerald-500" height="md" />
          <p className="text-xs text-slate-600 text-center font-bold leading-relaxed">
            Win {world.subject === 'english' ? 'English' : 'math'} battles to unlock new nodes. Defeat Level 10 to conquer {world.name}!
          </p>
        </div>

        {/* Bubbly RPG World Map Canvas */}
        <div className="w-full max-w-[380px] mx-auto rounded-[2.5rem] border-4 border-slate-300 bg-white/80 backdrop-blur-md p-4 relative min-h-[960px] overflow-hidden shadow-[0_12px_36px_rgba(56,52,92,0.12)] flex-grow">

          {/* Pathway SVG lines joining nodes exactly */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" strokeLinecap="round">
            <path
              d="M 133 35 Q 95 60 76 90 T 228 175 T 114 260 T 266 345 T 150 430 T 76 515 T 228 600 T 114 685 T 266 770 T 190 855"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="16"
            />
            <path
              d="M 133 35 Q 95 60 76 90 T 228 175 T 114 260 T 266 345 T 150 430 T 76 515 T 228 600 T 114 685 T 266 770 T 190 855"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="8"
              strokeDasharray="12 12"
            />
          </svg>

          {/* Decorative Adventure Background Elements */}
          <div className="absolute left-[30px] top-[175px] text-3xl opacity-40 select-none pointer-events-none animate-bounce-slow">🌲</div>
          <div className="absolute left-[330px] top-[250px] text-3xl opacity-40 select-none pointer-events-none animate-bounce-slow" style={{ animationDelay: '1s' }}>🌲</div>
          <div className="absolute left-[290px] top-[75px] text-3xl opacity-35 select-none pointer-events-none">🏔️</div>
          <div className="absolute left-[170px] top-[140px] text-2xl opacity-40 select-none pointer-events-none">🍄</div>
          <div className="absolute left-[280px] top-[430px] text-2xl opacity-45 select-none pointer-events-none">🪙</div>
          <div className="absolute left-[60px] top-[330px] text-2xl opacity-40 select-none pointer-events-none">🗝️</div>
          <div className="absolute left-[300px] top-[360px] text-3xl opacity-30 select-none pointer-events-none">☁️</div>
          <div className="absolute left-[30px] top-[25px] text-3xl opacity-30 select-none pointer-events-none">☁️</div>

          {/* START Node Flag */}
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
            style={{ left: '133px', top: '35px' }}
          >
            <div className="w-11 h-11 rounded-full border-4 border-white bg-amber-400 flex items-center justify-center text-xl shadow-[0_4px_0_0_#b45309] animate-bounce-slow">
              🚩
            </div>
            <span className="text-[9px] font-black bg-slate-900 text-amber-300 px-2 py-0.5 rounded-full uppercase tracking-wider shadow mt-1">
              START
            </span>
          </div>

          {/* Level Nodes */}
          {Array.from({ length: totalLevels }, (_, i) => i + 1).map((lvlNum) => {
            const isUnlocked = true;
            const levelStars = stars[lvlNum] || 0;
            const isBoss = lvlNum === 10;
            const pos = nodePositions[lvlNum - 1];

            return (
              <div
                key={`node-${lvlNum}`}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 group"
                style={{ left: pos.left, top: pos.top }}
              >
                {/* Node Level button triggering modal click */}
                <div
                  onClick={() => {
                    if (isUnlocked) {
                      setSelectedLvlNum(lvlNum);
                    }
                  }}
                  className={`w-16 h-16 rounded-full border-4 flex items-center justify-center text-2xl font-black cursor-pointer transition-all duration-200 ${isUnlocked
                    ? isBoss 
                      ? 'bg-rose-500 border-rose-200 text-white shadow-[0_6px_0_0_#be123c] group-hover:scale-110 group-active:translate-y-1 group-active:shadow-none animate-bounce-slow'
                      : 'bg-white border-sky-400 text-slate-800 shadow-[0_6px_0_0_#0ea5e9] group-hover:scale-110 group-active:translate-y-1 group-active:shadow-none animate-float-fast'
                    : 'bg-slate-200 border-slate-400 text-slate-400 cursor-not-allowed'
                    }`}
                >
                  {isUnlocked ? (
                    isBoss ? '👑' : lvlNum
                  ) : (
                    <Lock className="w-5 h-5 text-slate-400" />
                  )}
                </div>

                {/* Stars earned for this node */}
                {isUnlocked && (
                  <div className="flex gap-0.5 justify-center mt-2 bg-slate-900 px-2 py-0.5 rounded-full shadow border border-slate-700">
                    {[1, 2, 3].map((star) => (
                      <Star
                        key={`star-${lvlNum}-${star}`}
                        className={`w-3.5 h-3.5 ${star <= levelStars ? 'text-amber-400 fill-amber-400 drop-shadow-xs' : 'text-slate-600'
                          }`}
                      />
                    ))}
                  </div>
                )}

                {/* Boss Label */}
                {isBoss && isUnlocked && (
                  <span className="text-[10px] font-black bg-rose-500 text-white px-2.5 py-0.5 rounded-full uppercase border-2 border-rose-300 tracking-wider shadow-sm mt-1 animate-pulse-slow">
                    Boss Battle
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* Mode Selection Modal (Synchronized with Home Page Design) */}
      {selectedLvlNum !== null && (
        <div className="fixed inset-0 bg-slate-900/65 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 z-50 animate-fade-in font-baloo">
          <div className="w-full max-w-3xl max-h-[92vh] flex flex-col bg-white rounded-[2.5rem] border-4 border-slate-200 shadow-[0_24px_64px_rgba(0,0,0,0.5)] overflow-hidden relative animate-pop-in">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-b from-slate-100 to-white p-5 sm:p-6 text-center border-b-4 border-slate-200 relative shrink-0">
              <button
                onClick={() => setSelectedLvlNum(null)}
                className="absolute top-5 right-5 text-slate-500 hover:text-slate-800 transition-all p-2 bg-white hover:bg-rose-100 border-2 border-slate-300 hover:border-rose-400 rounded-full shadow-[0_3px_0_0_#cbd5e1] hover:shadow-[0_3px_0_0_#f43f5e] active:translate-y-0.5 active:shadow-none cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[3]" />
              </button>
              
              <div className="inline-flex items-center gap-1.5 bg-amber-400 border-2 border-amber-200 text-amber-950 px-3.5 py-1 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider shadow-xs mb-2">
                <span>⭐ Level {selectedLvlNum} Selected</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">HOW WOULD YOU LIKE TO PLAY?</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-extrabold mt-1">
                {world.name} • Master this topic to unlock rewards and upgrade your pets!
              </p>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-6 flex-grow overflow-y-auto scrollbar-thin bg-slate-50/70 space-y-6">

              {/* SECTION 1: WATCH & LEARN (Distinct Hero Banner for Video - English Arena Only) */}
              {world.subject === 'english' && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-indigo-900 uppercase tracking-wider">
                    <span className="bg-indigo-600 text-white px-2.5 py-0.5 rounded-full text-[11px] shadow-xs">STEP 1</span>
                    <span>📺 Watch & Learn (Recommended First Step)</span>
                  </div>

                  <Link href={`/video-quest?worldId=${world.id}&levelId=${selectedLvlNum}`} className="block group">
                    <div className="w-full bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-[2rem] border-4 border-amber-400 p-5 sm:p-6 shadow-[0_10px_0_0_#d97706] hover:shadow-[0_14px_0_0_#d97706] group-hover:-translate-y-1 group-active:translate-y-1 group-active:shadow-[0_4px_0_0_#d97706] transition-all relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-5 cursor-pointer">
                      
                      {/* Background glow decoration */}
                      <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"></div>

                      <div className="flex items-center gap-4 sm:gap-5 min-w-0 w-full sm:w-auto">
                        {/* Video Thumbnail Simulation */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-amber-500 to-rose-500 rounded-[1.4rem] border-2 border-white/60 flex flex-col items-center justify-center shadow-lg shrink-0 group-hover:scale-105 transition-transform relative">
                          <div className="w-10 h-10 rounded-full bg-white text-indigo-950 flex items-center justify-center pl-0.5 shadow-md text-lg">
                            ▶
                          </div>
                          <span className="text-[9px] font-black tracking-widest text-white uppercase mt-1 drop-shadow-xs">LESSON</span>
                        </div>

                        <div className="min-w-0 flex-grow">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="bg-amber-400 text-amber-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">🎬 Animated Video Lesson</span>
                          </div>
                          <h4 className="font-black text-amber-300 text-lg sm:text-xl leading-tight mt-1 group-hover:text-amber-200 transition-colors">
                            Interactive Learning Section
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-300 font-bold leading-snug mt-1">
                            Watch the engaging video cartoon first! Learn pronunciation and memorize vocabulary before fighting monsters.
                          </p>
                        </div>
                      </div>

                      <div className="w-full sm:w-auto shrink-0 flex justify-end sm:block">
                        <div className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-amber-400 group-hover:bg-amber-300 text-amber-950 font-black text-sm sm:text-base border-2 border-amber-200 shadow-[0_4px_0_0_#b45309] transition-all uppercase tracking-wider flex items-center justify-center gap-2">
                          <span>▶ PLAY LESSON</span>
                        </div>
                      </div>

                    </div>
                  </Link>
                </div>
              )}

              {/* Divider / Section Header */}
              <div className="flex items-center gap-4 py-1">
                <div className="h-0.5 bg-slate-200 flex-grow"></div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-slate-500 uppercase tracking-wider bg-white px-4 py-1.5 rounded-full border-2 border-slate-200 shadow-xs">
                  {world.subject === 'english' ? (
                    <>
                      <span className="bg-emerald-500 text-white px-2 py-0.5 rounded-full text-[10px]">STEP 2</span>
                      <span>⚔️ Select Practice Arena (Earn Coins & XP)</span>
                    </>
                  ) : (
                    <>
                      <span className="bg-emerald-500 text-white px-2.5 py-0.5 rounded-full text-[10px]">⚔️ ARENA</span>
                      <span>Select Battle Mode (Earn Coins & XP)</span>
                    </>
                  )}
                </div>
                <div className="h-0.5 bg-slate-200 flex-grow"></div>
              </div>

              {/* SECTION 2: BATTLE / GAME MODES GRID (Styled after Home Page feature cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                {/* Mode 1: RPG Battle */}
                <Link href={`/battle?worldId=${world.id}&levelId=${selectedLvlNum}`} className="group h-full block">
                  <div className="h-full bg-white rounded-[1.8rem] border-4 border-emerald-400 p-5 shadow-[0_8px_0_0_#10b981] group-hover:shadow-[0_12px_0_0_#10b981] group-hover:-translate-y-1.5 group-active:translate-y-1 group-active:shadow-[0_4px_0_0_#10b981] transition-all flex flex-col justify-between gap-4 cursor-pointer relative">
                    <span aria-hidden="true" className="absolute -top-3 right-6 h-4 w-16 -translate-x-1/2 rotate-[3deg] rounded-[6px] bg-emerald-400 border-2 border-emerald-200 shadow-xs"></span>
                    
                    <div className="flex items-start gap-3.5">
                      <div className="w-14 h-14 bg-emerald-100 border-2 border-emerald-300 text-3xl rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform shrink-0">
                        ⚔️
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-lg leading-tight">RPG Battle Mode</h4>
                        <p className="text-xs text-slate-600 font-bold leading-relaxed mt-1">
                          Defeat colorful monsters turn-by-turn by casting your magical pet spells!
                        </p>
                      </div>
                    </div>
                    
                    <div className="w-full py-2.5 rounded-full bg-emerald-500 group-hover:bg-emerald-400 text-white font-black text-xs uppercase tracking-wider text-center border-2 border-emerald-200 shadow-[0_3px_0_0_#047857] transition-all">
                      Play RPG Arena ➔
                    </div>
                  </div>
                </Link>

                {/* Mode 2: Tower Defense */}
                <Link href={`/tower-defense?worldId=${world.id}&levelId=${selectedLvlNum}`} className="group h-full block">
                  <div className="h-full bg-white rounded-[1.8rem] border-4 border-sky-400 p-5 shadow-[0_8px_0_0_#0ea5e9] group-hover:shadow-[0_12px_0_0_#0ea5e9] group-hover:-translate-y-1.5 group-active:translate-y-1 group-active:shadow-[0_4px_0_0_#0ea5e9] transition-all flex flex-col justify-between gap-4 cursor-pointer relative">
                    <span aria-hidden="true" className="absolute -top-3 right-6 h-4 w-16 -translate-x-1/2 rotate-[-3deg] rounded-[6px] bg-sky-400 border-2 border-sky-200 shadow-xs"></span>
                    
                    <div className="flex items-start gap-3.5">
                      <div className="w-14 h-14 bg-sky-100 border-2 border-sky-300 text-3xl rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform shrink-0">
                        🏰
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-lg leading-tight">Tower Defense</h4>
                        <p className="text-xs text-slate-600 font-bold leading-relaxed mt-1">
                          Protect your magic shields from marching slimes with elemental lightning!
                        </p>
                      </div>
                    </div>

                    <div className="w-full py-2.5 rounded-full bg-sky-500 group-hover:bg-sky-400 text-white font-black text-xs uppercase tracking-wider text-center border-2 border-sky-200 shadow-[0_3px_0_0_#0369a1] transition-all">
                      Play Defense ➔
                    </div>
                  </div>
                </Link>

                {/* Mode 3: Racing Car Game */}
                <Link href={`/racing?worldId=${world.id}&levelId=${selectedLvlNum}`} className="group h-full block">
                  <div className="h-full bg-white rounded-[1.8rem] border-4 border-amber-400 p-5 shadow-[0_8px_0_0_#f59e0b] group-hover:shadow-[0_12px_0_0_#f59e0b] group-hover:-translate-y-1.5 group-active:translate-y-1 group-active:shadow-[0_4px_0_0_#f59e0b] transition-all flex flex-col justify-between gap-4 cursor-pointer relative">
                    <span aria-hidden="true" className="absolute -top-3 right-6 h-4 w-16 -translate-x-1/2 rotate-[3deg] rounded-[6px] bg-amber-400 border-2 border-amber-200 shadow-xs"></span>
                    
                    <div className="flex items-start gap-3.5">
                      <div className="w-14 h-14 bg-amber-100 border-2 border-amber-300 text-3xl rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform shrink-0">
                        🏎️
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-lg leading-tight">Racing Car Mode</h4>
                        <p className="text-xs text-slate-600 font-bold leading-relaxed mt-1">
                          Speed up your pet turbo kart and overtake rival monster karts to the finish!
                        </p>
                      </div>
                    </div>

                    <div className="w-full py-2.5 rounded-full bg-amber-400 group-hover:bg-amber-300 text-amber-950 font-black text-xs uppercase tracking-wider text-center border-2 border-amber-200 shadow-[0_3px_0_0_#b45309] transition-all">
                      Start Race ➔
                    </div>
                  </div>
                </Link>

                {/* Mode 4: Tug of War */}
                <Link href={`/tug-of-war?worldId=${world.id}&levelId=${selectedLvlNum}`} className="group h-full block">
                  <div className="h-full bg-white rounded-[1.8rem] border-4 border-purple-400 p-5 shadow-[0_8px_0_0_#a855f7] group-hover:shadow-[0_12px_0_0_#a855f7] group-hover:-translate-y-1.5 group-active:translate-y-1 group-active:shadow-[0_4px_0_0_#a855f7] transition-all flex flex-col justify-between gap-4 cursor-pointer relative">
                    <span aria-hidden="true" className="absolute -top-3 right-6 h-4 w-16 -translate-x-1/2 rotate-[-3deg] rounded-[6px] bg-purple-400 border-2 border-purple-200 shadow-xs"></span>
                    
                    <div className="flex items-start gap-3.5">
                      <div className="w-14 h-14 bg-purple-100 border-2 border-purple-300 text-3xl rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform shrink-0">
                        🏋️
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-lg leading-tight">Tug of War Mode</h4>
                        <p className="text-xs text-slate-600 font-bold leading-relaxed mt-1">
                          Test your magical muscles! Pull giant monsters across the center trophy line!
                        </p>
                      </div>
                    </div>

                    <div className="w-full py-2.5 rounded-full bg-purple-500 group-hover:bg-purple-400 text-white font-black text-xs uppercase tracking-wider text-center border-2 border-purple-200 shadow-[0_3px_0_0_#6b21a8] transition-all">
                      Join Match ➔
                    </div>
                  </div>
                </Link>

                {/* Mode 5: Adventure Dash Runner */}
                <Link href={`/adventure-dash?worldId=${world.id}&levelId=${selectedLvlNum}`} className="group h-full block sm:col-span-2">
                  <div className="h-full bg-white rounded-[1.8rem] border-4 border-rose-400 p-5 shadow-[0_8px_0_0_#f43f5e] group-hover:shadow-[0_12px_0_0_#f43f5e] group-hover:-translate-y-1.5 group-active:translate-y-1 group-active:shadow-[0_4px_0_0_#f43f5e] transition-all flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer relative">
                    <span aria-hidden="true" className="absolute -top-3 right-12 h-4 w-16 -translate-x-1/2 rotate-[3deg] rounded-[6px] bg-rose-400 border-2 border-rose-200 shadow-xs hidden sm:block"></span>
                    
                    <div className="flex items-center gap-4 min-w-0 w-full sm:w-auto">
                      <div className="w-14 h-14 bg-rose-100 border-2 border-rose-300 text-3xl rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform shrink-0">
                        🏃‍♂️
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-black text-slate-900 text-lg leading-tight">Adventure Dash (Endless Runner)</h4>
                        <p className="text-xs text-slate-600 font-bold leading-relaxed mt-1">
                          Dash through ancient dungeons! Dodge traps by solving quick questions to collect rare gems!
                        </p>
                      </div>
                    </div>

                    <div className="w-full sm:w-auto shrink-0">
                      <div className="w-full sm:w-auto px-8 py-2.5 rounded-full bg-rose-500 group-hover:bg-rose-400 text-white font-black text-xs uppercase tracking-wider text-center border-2 border-rose-200 shadow-[0_3px_0_0_#be123c] transition-all">
                        Dash Now ➔
                      </div>
                    </div>
                  </div>
                </Link>

              </div>

            </div>

            {/* Cancel Footer */}
            <div className="p-4 bg-white border-t-4 border-slate-200 text-center shrink-0">
              <button
                onClick={() => setSelectedLvlNum(null)}
                className="font-black text-xs uppercase tracking-wider py-2.5 px-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border-2 border-slate-300 shadow-[0_3px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer inline-block"
              >
                ✖ Cancel & Return to Map
              </button>
            </div>

          </div>
        </div>
      )}

      <footer className="py-6 text-center text-slate-500 text-xs font-extrabold bg-white/60 backdrop-blur-md border-t border-slate-200 mt-auto">
        ⭐ Perfect Battles earn 3 Stars and double coins! • 🔒 Kid-Safe Learning Zone
      </footer>
    </div>
  );
}

export default function WorldMapPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-playful-dots font-baloo">
        <div className="text-center space-y-4">
          <span className="text-5xl animate-spin inline-block">🪄</span>
          <p className="text-xl font-black text-slate-700">Unrolling Magical Map...</p>
        </div>
      </div>
    }>
      <WorldMapContent />
    </Suspense>
  );
}
