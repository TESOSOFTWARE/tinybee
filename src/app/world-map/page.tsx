'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState';
import { Button } from '@/components/UI/Button';
import { Card } from '@/components/UI/Card';
import { ProgressBar } from '@/components/UI/ProgressBar';
import { ArrowLeft, Lock, Star, Sparkles, X } from 'lucide-react';

import { WORLDS_DATABASE } from '@/data/worlds';

function WorldMapContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
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
        
        // Use the actual count of levels configured (max 10), minimum 1 so the start node isn't entirely alone
        setActualTotalLevels(Math.max(1, Math.min(count, 10)));
      }
    } catch (e) {
      console.error(e);
    }
  }, [world.topicId, world.id]);

  const totalLevels = actualTotalLevels;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-playful-dots">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-spin inline-block">🪄</span>
          <p className="text-lg font-bold text-slate-500">Unrolling Magical Map...</p>
        </div>
      </div>
    );
  }

  // Get current world progression from local storage hook
  const worldProg = state.worldProgression[world.id] || { unlockedLevels: 1, stars: {}, highScores: {} };
  const { unlockedLevels, stars } = worldProg;

  // Calculate totals
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
    <div className={`min-h-screen flex flex-col select-none ${world.bgClass}`}>
      {/* Navbar header */}
      <header className="w-full bg-white/85 backdrop-blur border-b-4 border-slate-100 px-4 py-3 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/select-grade">
            <Button variant="gray" size="sm" className="flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
          </Link>
          <div className="text-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Adventure Land</span>
            <h1 className="text-lg md:text-xl font-black text-slate-800 tracking-tight flex items-center justify-center gap-1.5">
              {world.emoji} {world.name} (G{world.grade})
            </h1>
          </div>
          <div className="flex items-center gap-2 bg-yellow-100 border-2 border-yellow-300 text-yellow-800 px-3 py-1.5 rounded-full font-black text-sm shadow-sm animate-bounce-slow">
            🪙 {state.coins}
          </div>
        </div>
      </header>

      {/* Main progress & map area */}
      <main className="max-w-lg w-full mx-auto flex-grow flex flex-col px-4 py-6 gap-6 relative">
        {/* Progress Tracker Card */}
        <Card padding="md" className="space-y-3">
          <div className="flex justify-between items-center text-sm font-extrabold text-slate-600">
            <span className="flex items-center gap-1">🗺️ Map Progress</span>
            <span className="flex items-center gap-1 text-yellow-500">⭐ {totalStars} Stars</span>
          </div>
          <ProgressBar value={completedLevels} max={totalLevels} color="bg-forest-green" height="sm" />
          <p className="text-xs text-slate-400 text-center font-medium leading-relaxed">
            Win {world.subject === 'english' ? 'English' : 'math'} battles to unlock new nodes. Defeat Level 10 to conquer {world.name}!
          </p>
        </Card>


        {/* Bubbly RPG World Map Canvas */}
        <div className="w-full max-w-[380px] mx-auto rounded-3xl border-4 border-slate-700/10 bg-white/40 backdrop-blur-sm p-4 relative min-h-[960px] overflow-hidden shadow-inner flex-grow">

          {/* Pathway SVG lines joining nodes exactly */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" strokeLinecap="round">
            {/* Outer thick road backing */}
            <path
              d="M 133 35 Q 95 60 76 90 T 228 175 T 114 260 T 266 345 T 150 430 T 76 515 T 228 600 T 114 685 T 266 770 T 190 855"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="12"
            />
            {/* Inner dashed road divider */}
            <path
              d="M 133 35 Q 95 60 76 90 T 228 175 T 114 260 T 266 345 T 150 430 T 76 515 T 228 600 T 114 685 T 266 770 T 190 855"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="4"
              strokeDasharray="8 8"
            />
          </svg>

          {/* Decorative Adventure Background Elements */}
          <div className="absolute left-[30px] top-[175px] text-3xl opacity-25 select-none pointer-events-none animate-bounce-slow">🌲</div>
          <div className="absolute left-[330px] top-[250px] text-3xl opacity-25 select-none pointer-events-none animate-bounce-slow" style={{ animationDelay: '1s' }}>🌲</div>
          <div className="absolute left-[290px] top-[75px] text-3xl opacity-20 select-none pointer-events-none">🏔️</div>
          <div className="absolute left-[170px] top-[140px] text-2xl opacity-20 select-none pointer-events-none">🍄</div>
          <div className="absolute left-[280px] top-[430px] text-2xl opacity-25 select-none pointer-events-none">🪙</div>
          <div className="absolute left-[60px] top-[330px] text-2xl opacity-20 select-none pointer-events-none">🗝️</div>
          <div className="absolute left-[300px] top-[360px] text-3xl opacity-15 select-none pointer-events-none">☁️</div>
          <div className="absolute left-[30px] top-[25px] text-3xl opacity-15 select-none pointer-events-none">☁️</div>

          {/* START Node Flag */}
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
            style={{ left: '133px', top: '35px' }}
          >
            <div className="w-10 h-10 rounded-full border-4 border-slate-700 bg-amber-400 flex items-center justify-center text-lg shadow-md animate-bounce-slow">
              🚩
            </div>
            <span className="text-[8px] font-black bg-slate-800 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wider shadow mt-0.5 animate-pulse-slow">
              START
            </span>
          </div>

          {/* Level Nodes */}
          {Array.from({ length: totalLevels }, (_, i) => i + 1).map((lvlNum) => {
            const isUnlocked = true; // lvlNum <= unlockedLevels; (Unlocked all levels for monetization phase!)
            const levelStars = stars[lvlNum] || 0;
            const isBoss = lvlNum === 10;
            const pos = nodePositions[lvlNum - 1];

            // Setup buttons styled uniquely
            let nodeBtnVariant: 'green' | 'purple' | 'blue' | 'orange' | 'yellow' | 'gray' = 'gray';
            if (isUnlocked) {
              nodeBtnVariant = world.nodeColor;
            }

            return (
              <div
                key={`node-${lvlNum}`}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
                style={{ left: pos.left, top: pos.top }}
              >
                {/* Node Level button triggering modal click */}
                <div
                  onClick={() => {
                    if (isUnlocked) {
                      setSelectedLvlNum(lvlNum);
                    }
                  }}
                  className={`w-16 h-16 rounded-full border-4 flex items-center justify-center text-2xl font-black shadow-md cursor-pointer transition-all duration-200 ${isUnlocked
                    ? 'bg-white border-slate-700 text-slate-800 scale-105 active:scale-95 animate-float-fast hover:-translate-y-1 hover:shadow-lg'
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
                  <div className="flex gap-0.5 justify-center mt-1.5 bg-slate-800/80 px-2 py-0.5 rounded-full shadow border border-slate-700">
                    {[1, 2, 3].map((star) => (
                      <Star
                        key={`star-${lvlNum}-${star}`}
                        className={`w-3.5 h-3.5 ${star <= levelStars ? 'text-yellow-400 fill-yellow-400' : 'text-slate-500'
                          }`}
                      />
                    ))}
                  </div>
                )}

                {/* Boss Label */}
                {isBoss && isUnlocked && (
                  <span className="text-[10px] font-black bg-red-500 text-white px-2 py-0.5 rounded-full uppercase border border-red-400 tracking-wider shadow mt-1 animate-pulse-slow">
                    Boss
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* Mode Selection Modal */}
      {selectedLvlNum !== null && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <Card padding="lg" className="w-full max-w-sm relative overflow-hidden animate-pop-in border-4 border-slate-800/20 bg-white">
            {/* Close button */}
            <button
              onClick={() => setSelectedLvlNum(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors p-1"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="text-center pb-4 border-b-2 border-slate-100">
              <span className="text-4xl animate-bounce-slow inline-block">🔮</span>
              <h3 className="text-xl font-black text-slate-800 mt-2">SELECT QUEST MODE</h3>
              <p className="text-xs text-slate-450 font-extrabold uppercase tracking-wider mt-0.5">Level {selectedLvlNum} • {world.name}</p>
            </div>

            {/* Mode Choices Grid */}
            <div className="flex flex-col gap-3 py-5">

              {/* Mode 0: Learning Section (Only for English) */}
              {world.subject === 'english' && (
                <Link href={`/video-quest?worldId=${world.id}&levelId=${selectedLvlNum}`} className="w-full">
                  <div className="group w-full p-3.5 rounded-2xl border-2 border-indigo-300 hover:border-indigo-500 bg-indigo-50/50 hover:bg-indigo-50 active:translate-y-0.5 transition-all text-left flex items-center gap-3 cursor-pointer shadow-sm">
                    <div className="w-12 h-12 bg-indigo-100 border border-indigo-300 text-2xl rounded-xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
                      📖
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-extrabold text-indigo-900 text-sm">📖 Learning Section Video</h4>
                        <span className="bg-indigo-200 text-indigo-800 text-[8px] font-black uppercase px-1 rounded">START HERE</span>
                      </div>
                      <p className="text-[10px] text-indigo-700 font-medium leading-relaxed mt-0.5">Watch the lesson video and practice memorizing the vocabulary words!</p>
                    </div>
                    <span className="text-base font-black text-indigo-500 shrink-0">➔</span>
                  </div>
                </Link>
              )}

              {/* Mode 1: RPG Battle */}
              <Link href={`/battle?worldId=${world.id}&levelId=${selectedLvlNum}`} className="w-full">
                <div className="group w-full p-3.5 rounded-2xl border-2 border-emerald-300 hover:border-emerald-500 bg-emerald-50/50 hover:bg-emerald-50 active:translate-y-0.5 transition-all text-left flex items-center gap-3 cursor-pointer shadow-sm">
                  <div className="w-12 h-12 bg-emerald-100 border border-emerald-300 text-2xl rounded-xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
                    ⚔️
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="font-extrabold text-emerald-900 text-sm">⚔️ RPG Battle Mode</h4>
                    <p className="text-[10px] text-emerald-700 font-medium leading-relaxed mt-0.5">Defeat monsters turn-by-turn with your pet spells!</p>
                  </div>
                  <span className="text-base font-black text-emerald-500 shrink-0">➔</span>
                </div>
              </Link>

              {/* Mode 2: Tower Defense */}
              <Link href={`/tower-defense?worldId=${world.id}&levelId=${selectedLvlNum}`} className="w-full">
                <div className="group w-full p-3.5 rounded-2xl border-2 border-indigo-300 hover:border-indigo-500 bg-indigo-50/50 hover:bg-indigo-50 active:translate-y-0.5 transition-all text-left flex items-center gap-3 cursor-pointer shadow-sm">
                  <div className="w-12 h-12 bg-indigo-100 border border-indigo-300 text-2xl rounded-xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
                    🏰
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="font-extrabold text-indigo-900 text-sm">🏰 Tower Defense</h4>
                    <p className="text-[10px] text-indigo-700 font-medium leading-relaxed mt-0.5">Protect base shields from marching slimes with lasers!</p>
                  </div>
                  <span className="text-base font-black text-indigo-500 shrink-0">➔</span>
                </div>
              </Link>

              {/* Mode 3: Racing Car Game */}
              <Link href={`/racing?worldId=${world.id}&levelId=${selectedLvlNum}`} className="w-full">
                <div className="group w-full p-3.5 rounded-2xl border-2 border-amber-300 hover:border-amber-500 bg-amber-50/50 hover:bg-amber-50 active:translate-y-0.5 transition-all text-left flex items-center gap-3 cursor-pointer shadow-sm">
                  <div className="w-12 h-12 bg-amber-100 border border-amber-300 text-2xl rounded-xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
                    🏎️
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="font-extrabold text-amber-900 text-sm">🏎️ Racing Car Mode</h4>
                    <p className="text-[10px] text-amber-700 font-medium leading-relaxed mt-0.5">Speed up your pet kart and race past cute monster karts!</p>
                  </div>
                  <span className="text-base font-black text-amber-500 shrink-0">➔</span>
                </div>
              </Link>

              {/* Mode 4: Tug of War */}
              <Link href={`/tug-of-war?worldId=${world.id}&levelId=${selectedLvlNum}`} className="w-full">
                <div className="group w-full p-3.5 rounded-2xl border-2 border-violet-300 hover:border-violet-500 bg-violet-50/50 hover:bg-violet-50 active:translate-y-0.5 transition-all text-left flex items-center gap-3 cursor-pointer shadow-sm">
                  <div className="w-12 h-12 bg-violet-100 border border-violet-300 text-2xl rounded-xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
                    🏋️
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="font-extrabold text-violet-900 text-sm">🏋️ Tug of War Mode</h4>
                    <p className="text-[10px] text-violet-700 font-medium leading-relaxed mt-0.5">
                      Pull the level monster over the line using your {world.subject === 'english' ? 'English' : 'math'} spell power!
                    </p>
                  </div>
                  <span className="text-base font-black text-violet-500 shrink-0">➔</span>
                </div>
              </Link>

              {/* Mode 5: Adventure Dash Runner */}
              <Link href={`/adventure-dash?worldId=${world.id}&levelId=${selectedLvlNum}`} className="w-full">
                <div className="group w-full p-3.5 rounded-2xl border-2 border-rose-300 hover:border-rose-500 bg-rose-50/50 hover:bg-rose-50 active:translate-y-0.5 transition-all text-left flex items-center gap-3 cursor-pointer shadow-sm">
                  <div className="w-12 h-12 bg-rose-100 border border-rose-300 text-2xl rounded-xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
                    🏃‍♂️
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="font-extrabold text-rose-900 text-sm">🏃‍♂️ Adventure Dash</h4>
                    <p className="text-[10px] text-rose-700 font-medium leading-relaxed mt-0.5">
                      {world.subject === 'english'
                        ? 'Dash through the dungeon choosing correct letters or words to escape with magical gems!'
                        : 'Dash through the dungeon choosing even, odd, or other number types to escape with magical gems!'}
                    </p>
                  </div>
                  <span className="text-base font-black text-rose-500 shrink-0">➔</span>
                </div>
              </Link>

            </div>

            {/* Cancel Button */}
            <Button
              variant="gray"
              fullWidth
              onClick={() => setSelectedLvlNum(null)}
              className="font-bold text-xs uppercase py-2"
            >
              Cancel
            </Button>
          </Card>
        </div>
      )}

      <footer className="py-6 text-center text-slate-400 text-xs font-semibold">
        ⭐ Perfect Battles earn 3 Stars and double coins!
      </footer>
    </div>
  );
}

export default function WorldMapPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-playful-dots">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-spin inline-block">🪄</span>
          <p className="text-lg font-bold text-slate-500">Unrolling Magical Map...</p>
        </div>
      </div>
    }>
      <WorldMapContent />
    </Suspense>
  );
}
