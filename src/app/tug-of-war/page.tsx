'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState';
import { MathQuestion, mathQuestions } from '@/data/questions';
import { Card } from '@/components/UI/Card';
import { Button } from '@/components/UI/Button';
import { MonsterAvatar } from '@/components/Battle/MonsterAvatar';
import { PlayerAvatar } from '@/components/Battle/PlayerAvatar';
import { QuestionCard } from '@/components/Battle/QuestionCard';
import { HintModal } from '@/components/Battle/HintModal';
import { ArrowLeft, Zap, Trophy, Flame, Volume2, VolumeX } from 'lucide-react';

import { playBGM, stopBGM } from '@/utils/audio';
import { WORLDS_DATABASE } from '@/data/worlds';

function TugOfWarContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { state } = useGameState();

  const worldId = searchParams.get('worldId') || 'g1-addition';
  const levelId = searchParams.get('levelId') || '1';
  const levelIndex = parseInt(levelId) - 1;

  const world = WORLDS_DATABASE[worldId] || WORLDS_DATABASE['g1-addition'];

  // Setup monster info based on level index
  const monsterName = world.monsterNames[levelIndex] || world.monsterNames[0];
  const monsterId = world.monsterIds[levelIndex] || world.monsterIds[0];

  // Game States
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [ropePosition, setRopePosition] = useState(50); // 0 (left - complete player win) to 100 (right - complete monster win)
  const [correctCount, setCorrectCount] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isAnsweringBlocked, setIsAnsweringBlocked] = useState(false);

  // Audio BGM State
  const [isBgmOn, setIsBgmOn] = useState(true); // Auto turn on background music by default

  // Animation States
  const [isPlayerPulling, setIsPlayerPulling] = useState(false);
  const [isMonsterSliding, setIsMonsterSliding] = useState(false);
  const [isMonsterPulling, setIsMonsterPulling] = useState(false);
  const [isPlayerSliding, setIsPlayerSliding] = useState(false);
  const [pullFeedback, setPullFeedback] = useState<{ text: string; positive: boolean } | null>(null);

  // Timer Ref
  const startTimeRef = useRef<number>(0);

  // Background BGM audio logic
  useEffect(() => {
    if (isBgmOn) {
      playBGM();
    } else {
      stopBGM();
    }
    return () => {
      stopBGM();
    };
  }, [isBgmOn]);

  // Load questions matching grade and topic
  useEffect(() => {
    startTimeRef.current = Date.now();
    const matched = mathQuestions.filter(
      q => q.grade === world.grade && q.topic === world.topicId
    );
    const shuffled = [...matched].sort(() => Math.random() - 0.5);
    
    // Guarantee a full deck of 10 questions (repeating elements if needed)
    let selected = shuffled.slice(0, 10);
    if (selected.length > 0 && selected.length < 10) {
      while (selected.length < 10) {
        selected = [...selected, ...shuffled].slice(0, 10);
      }
    }
    setQuestions(selected);
  }, [worldId, levelId, world.grade, world.topicId]);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-playful-dots">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-bounce inline-block">🎒</span>
          <p className="text-lg font-bold text-slate-500 font-sans">Spinning Tug Field...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIdx];

  const handleAnswerSelect = (selectedAnswer: string) => {
    if (isAnsweringBlocked || showHint) return;
    setIsAnsweringBlocked(true);

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    // Calculate new rope position with balanced step size (8 pull power)
    const nextPos = isCorrect 
      ? Math.max(10, ropePosition - 8) 
      : Math.min(90, ropePosition + 8);
      
    setRopePosition(nextPos);

    let isMatchEnded = false;
    let didPlayerWin = false;

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
      
      // Visual feedback: pet companion pulls back comically, slime slides forward
      setIsPlayerPulling(true);
      setIsMonsterSliding(true);
      
      if (nextPos <= 20) {
        isMatchEnded = true;
        didPlayerWin = true;
        setPullFeedback({ text: "🎉 VICTORY! MATCH WON!", positive: true });
      } else {
        setPullFeedback({ text: "+8 PULL POWER! ⚡", positive: true });
      }
    } else {
      // Visual feedback: monster pulls back comically, player slides forward
      setIsMonsterPulling(true);
      setIsPlayerSliding(true);
      
      if (nextPos >= 80) {
        isMatchEnded = true;
        didPlayerWin = false;
        setPullFeedback({ text: "🩹 DEFEAT! MATCH LOST!", positive: false });
      } else {
        setPullFeedback({ text: "-8 PULL POWER! 🩹", positive: false });
      }
    }

    // Reset animations and advance question or end game
    setTimeout(() => {
      setIsPlayerPulling(false);
      setIsMonsterSliding(false);
      setIsMonsterPulling(false);
      setIsPlayerSliding(false);
      setPullFeedback(null);

      const finalTime = Math.round((Date.now() - startTimeRef.current) / 1000);

      if (isMatchEnded) {
        // Early Ending
        if (didPlayerWin) {
          const finalAccuracy = Math.round(((correctCount + 1) / (currentIdx + 1)) * 100);
          router.push(
            `/results?mode=tug-of-war&worldId=${worldId}&levelId=${levelId}&accuracy=${finalAccuracy}&timeSpent=${finalTime}&correct=${correctCount + 1}&total=${currentIdx + 1}`
          );
        } else {
          router.push(
            `/results?mode=tug-of-war&worldId=${worldId}&levelId=${levelId}&accuracy=0&timeSpent=${finalTime}&correct=${correctCount}&total=${currentIdx + 1}`
          );
        }
      } else if (currentIdx < 9) {
        // Continue to next question in the 10-question deck
        setCurrentIdx(prev => prev + 1);
        setIsAnsweringBlocked(false);
      } else {
        // Last Question reached, check final rope balance
        const playerWonFinal = nextPos < 50;
        if (playerWonFinal) {
          const finalAccuracy = Math.round(((correctCount + (isCorrect ? 1 : 0)) / 10) * 100);
          router.push(
            `/results?mode=tug-of-war&worldId=${worldId}&levelId=${levelId}&accuracy=${finalAccuracy}&timeSpent=${finalTime}&correct=${correctCount + (isCorrect ? 1 : 0)}&total=10`
          );
        } else {
          router.push(
            `/results?mode=tug-of-war&worldId=${worldId}&levelId=${levelId}&accuracy=0&timeSpent=${finalTime}&correct=${correctCount}&total=10`
          );
        }
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-playful-dots py-2 sm:py-4 px-2 sm:px-4 flex flex-col justify-between select-none">
      
      {/* Symmetrical header */}
      <header className="max-w-xl w-full mx-auto flex items-center justify-between bg-white/90 backdrop-blur border-b-4 border-slate-100 p-2 sm:p-3 rounded-2xl shadow-sm z-30 select-none">
        <Link href={`/world-map?worldId=${worldId}`}>
          <Button variant="gray" size="sm" className="flex items-center gap-1 py-1 sm:py-1.5 text-xs sm:text-sm">
            <ArrowLeft className="w-4 h-4" /> Flee
          </Button>
        </Link>
        <span className="text-[10px] sm:text-xs font-black bg-violet-100 text-violet-800 border-2 border-violet-200 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider">
          🏋️ Level {levelId} / 5
        </span>
        
        {/* BGM Toggle button */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => setIsBgmOn(!isBgmOn)}
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl text-xs font-black transition-all flex items-center justify-center select-none shadow-sm cursor-pointer border ${
              isBgmOn 
                ? 'bg-gradient-to-br from-emerald-400 to-teal-500 text-white border-emerald-500 hover:scale-105 active:scale-95' 
                : 'bg-white hover:bg-slate-100 text-slate-400 border-slate-200'
            }`}
            title={isBgmOn ? "Mute Background Music" : "Play Synthesized BGM 🎵"}
          >
            {isBgmOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Tug Arena */}
      <main className="max-w-xl w-full mx-auto flex-grow flex flex-col justify-center gap-3 sm:gap-6 py-2 sm:py-4">
        
        {/* Dynamic Force Gauge Bar */}
        <div className="w-full bg-white/70 backdrop-blur-md p-2.5 sm:p-4 rounded-2xl border-2 border-slate-100 shadow-sm flex flex-col gap-1.5 sm:gap-2 select-none">
          <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-wider">
            <span className="text-emerald-600">Companion pull</span>
            <span className="text-rose-600">{monsterName} pull</span>
          </div>
          {/* Symmetrical Dual Progress Slider */}
          <div className="w-full h-4 sm:h-5 bg-slate-100 rounded-full border border-slate-200 relative overflow-hidden flex shadow-inner">
            {/* Player Side (Left) */}
            <div 
              style={{ width: `${100 - ropePosition}%` }} 
              className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-700" 
            />
            {/* Monster Side (Right) */}
            <div 
              style={{ width: `${ropePosition}%` }} 
              className="h-full bg-gradient-to-r from-pink-400 to-rose-400 transition-all duration-700" 
            />
            {/* Center Anchor line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-slate-400 z-10" />
            
            {/* Float Anchor Icon */}
            <div 
              style={{ left: `${100 - ropePosition}%` }} 
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-slate-700 bg-amber-400 shadow-md flex items-center justify-center text-xs sm:text-sm font-black transition-all duration-700 animate-pulse-slow"
            >
              🎗️
            </div>
          </div>
        </div>

        {/* Rope tug field arena */}
        <div className="w-full bg-gradient-to-b from-sky-100 to-emerald-50 rounded-3xl border-4 border-slate-700/10 shadow-inner relative h-36 sm:h-48 overflow-hidden flex flex-col justify-between py-2 sm:py-4">
          
          {/* Cartoon floating clouds */}
          <div className="absolute left-6 top-4 text-3xl opacity-20 select-none animate-bounce-slow">☁️</div>
          <div className="absolute right-12 top-2 text-4xl opacity-15 select-none animate-bounce-slow" style={{ animationDelay: '1s' }}>☁️</div>

          {/* Symmetrical Pull force indicator text */}
          {pullFeedback && (
            <div className="absolute left-1/2 top-4 -translate-x-1/2 z-30 animate-damage-float select-none pointer-events-none">
              <span className={`text-base font-black px-4 py-1.5 rounded-full shadow border-2 ${
                pullFeedback.positive 
                  ? 'bg-emerald-400 border-emerald-600 text-emerald-955' 
                  : 'bg-rose-400 border-rose-600 text-rose-955'
              }`}>
                {pullFeedback.text}
              </span>
            </div>
          )}

          {/* Tug of war physical rope */}
          <div className="absolute left-4 right-4 top-[60%] -translate-y-1/2 h-4 flex items-center z-10">
            {/* Rope segment line */}
            <div className="w-full h-2.5 bg-amber-800 border-y border-amber-900 shadow-inner rounded-full relative">
              {/* Red marker flag tied in the middle */}
              <div 
                style={{ left: `${100 - ropePosition}%` }} 
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-9 bg-rose-500 border-2 border-rose-700 rounded-b shadow-md transition-all duration-700"
              >
                {/* Visual fluttering indicator */}
                <div className="w-1.5 h-1.5 bg-rose-300 rounded-full mx-auto mt-0.5" />
              </div>
            </div>
          </div>

          {/* Symmetrical visual anchors of characters pulling */}
          <div className="w-full flex justify-between items-center px-8 z-20 flex-grow">
            
            {/* Left side: Player pet */}
            <div 
              style={{
                transform: isPlayerPulling 
                  ? 'translateX(-30px) translateY(-5px) scale(0.98)' 
                  : isPlayerSliding 
                  ? 'translateX(40px) rotate(-10deg)' 
                  : 'none'
              }}
              className="flex flex-col items-center transition-all duration-500 origin-bottom"
            >
              <div className="relative">
                <PlayerAvatar petId={state.activePetId} isAttacking={false} isHit={isPlayerSliding} />
                {isPlayerSliding && (
                  <span className="absolute -top-3 -right-2 text-lg animate-spin" style={{ animationDuration: '3s' }}>
                    💫
                  </span>
                )}
                {isPlayerPulling && (
                  <span className="absolute -top-4 -left-2 text-base animate-bounce">
                    💨
                  </span>
                )}
              </div>
              <span className="mt-1.5 text-[9px] font-black bg-emerald-500 text-white px-2 py-0.5 rounded-full uppercase border border-emerald-400 tracking-wider">
                Companion
              </span>
            </div>

            {/* Right side: Level monster */}
            <div 
              style={{
                transform: isMonsterPulling 
                  ? 'translateX(30px) translateY(-5px) scale(0.98)' 
                  : isMonsterSliding 
                  ? 'translateX(-40px) rotate(10deg)' 
                  : 'none'
              }}
              className="flex flex-col items-center transition-all duration-500 origin-bottom"
            >
              <div className="relative">
                <MonsterAvatar monsterId={monsterId} name={monsterName} isHit={isMonsterSliding} isDead={false} isAttacking={false} />
                {isMonsterSliding && (
                  <span className="absolute -top-3 -left-2 text-lg animate-spin" style={{ animationDuration: '3s' }}>
                    💫
                  </span>
                )}
                {isMonsterPulling && (
                  <span className="absolute -top-4 -right-2 text-base animate-bounce">
                    💨
                  </span>
                )}
              </div>
              <span className="mt-1.5 text-[9px] font-black bg-rose-500 text-white px-2 py-0.5 rounded-full uppercase border border-rose-400 tracking-wider">
                {monsterName}
              </span>
            </div>

          </div>

          {/* Grassy Meadow ground styling */}
          <div className="w-full h-6 sm:h-8 bg-emerald-600/35 border-t border-emerald-700/10 flex justify-around items-center text-[10px] text-emerald-850 shrink-0 font-medium">
            <span>🌿 Tug Meadow</span>
            <span>🍀 Green Zone</span>
          </div>

        </div>

        {/* Math Question Scroll card */}
        <div className="w-full">
          <QuestionCard
            questionData={currentQuestion}
            onAnswerSelect={handleAnswerSelect}
            disabled={isAnsweringBlocked || showHint}
          />
        </div>

        {/* Symmetrical question count tracker bubbles */}
        <div className="flex justify-center gap-1.5 items-center mt-2">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((dotIdx) => (
            <div
              key={`dot-${dotIdx}`}
              className={`w-3 h-3 rounded-full border-2 transition-all ${
                dotIdx < currentIdx
                  ? 'bg-violet-500 border-violet-600 scale-95'
                  : dotIdx === currentIdx
                  ? 'bg-white border-violet-500 scale-110 shadow-sm animate-pulse'
                  : 'bg-slate-200 border-slate-300'
              }`}
            />
          ))}
        </div>

      </main>

      <footer className="py-2 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        ⚡ Tugging answers correctly pulls the flag to your side!
      </footer>
    </div>
  );
}

export default function TugOfWarPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-playful-dots">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-spin inline-block">🏋️</span>
          <p className="text-lg font-bold text-slate-500 font-sans">Charging Tug Field...</p>
        </div>
      </div>
    }>
      <TugOfWarContent />
    </Suspense>
  );
}
