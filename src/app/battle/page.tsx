'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState';
import { mathQuestions, MathQuestion } from '@/data/questions';
import { Button } from '@/components/UI/Button';
import { Card } from '@/components/UI/Card';
import { HealthBar } from '@/components/UI/HealthBar';
import { MonsterAvatar } from '@/components/Battle/MonsterAvatar';
import { PlayerAvatar } from '@/components/Battle/PlayerAvatar';
import { QuestionCard } from '@/components/Battle/QuestionCard';
import { HintModal } from '@/components/Battle/HintModal';
import { ArrowLeft, Zap, Sparkles, Award, Volume2, VolumeX } from 'lucide-react';

import { playBGM, stopBGM } from '@/utils/audio';
import { WORLDS_DATABASE } from '@/data/worlds';

function BattleContent() {
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
  const [monsterHp, setMonsterHp] = useState(100);
  const [playerHp, setPlayerHp] = useState(100);
  const [combo, setCombo] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isAnsweringBlocked, setIsAnsweringBlocked] = useState(false);

  // Audio & Accessibility States
  const [isBgmOn, setIsBgmOn] = useState(true); // Auto turn on background music by default

  // Animations states
  const [isPlayerAttacking, setIsPlayerAttacking] = useState(false);
  const [isMonsterHit, setIsMonsterHit] = useState(false);
  const [isMonsterAttacking, setIsMonsterAttacking] = useState(false);
  const [isPlayerHit, setIsPlayerHit] = useState(false);
  const [damageText, setDamageText] = useState<{ text: string; critical: boolean } | null>(null);

  // Timer Ref
  const startTimeRef = useRef<number>(0);

  // Handle Background Music play state
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

  // Initialize Questions
  useEffect(() => {
    startTimeRef.current = Date.now();

    // Filter matching grade and topic
    const matched = mathQuestions.filter(
      q => q.grade === world.grade && q.topic === world.topicId
    );

    // Shuffle and pick exactly 5 questions
    const shuffled = [...matched].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 5));
  }, [worldId, levelId, world.grade, world.topicId]);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-playful-dots">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-bounce inline-block">🎒</span>
          <p className="text-lg font-bold text-slate-500 font-sans">Charging Mana Spells...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIdx];

  const handleAnswerSelect = (answer: string) => {
    if (isAnsweringBlocked) return;
    setIsAnsweringBlocked(true);

    const isCorrect = answer === currentQuestion.correctAnswer;

    if (isCorrect) {
      // 1. Correct Answer Loop
      const newCombo = combo + 1;
      setCombo(newCombo);
      setCorrectCount(prev => prev + 1);

      // Attack calculations
      const baseDamage = 20;
      const isCritical = newCombo >= 3;
      const finalDamage = isCritical ? baseDamage + 10 : baseDamage;

      // Dynamic combat float text
      setDamageText({
        text: isCritical ? `💥 SMACK! CRITICAL -${finalDamage} HP! 🪵` : `🪵 BAM! -${finalDamage} HP 💥`,
        critical: isCritical
      });

      // Trigger animations
      setIsPlayerAttacking(true);
      
      // Delay slightly for player attack leap to connect
      setTimeout(() => {
        setIsMonsterHit(true);
        setMonsterHp(prev => Math.max(0, prev - finalDamage));
        
        // Clean up visual alerts
        setTimeout(() => {
          setIsPlayerAttacking(false);
          setIsMonsterHit(false);
          setDamageText(null);
          
          // Advance question
          advanceQuestion();
        }, 800);
      }, 300);

    } else {
      // 2. Incorrect Answer Loop with Monster counterattack smack animation!
      setCombo(0);
      
      setDamageText({
        text: `🩹 OUCH! BUMP! 🥴`,
        critical: false
      });
      setIsMonsterAttacking(true);

      setTimeout(() => {
        setIsPlayerHit(true);
        setPlayerHp(prev => {
          const nextHp = Math.max(0, prev - 20);
          if (nextHp === 0) {
            // Trigger magical cartoon auto-heal!
            setTimeout(() => {
              setDamageText({
                text: `💖 HEAL SPARKLE! +100 HP ✨`,
                critical: true
              });
              setPlayerHp(100);
              setTimeout(() => {
                setDamageText(null);
              }, 1200);
            }, 850);
          }
          return nextHp;
        });
        
        setTimeout(() => {
          setIsMonsterAttacking(false);
          setIsPlayerHit(false);
          setDamageText(null);
          
          // Show hint scroll
          setShowHint(true);
        }, 800);
      }, 300);
    }
  };

  const advanceQuestion = () => {
    setIsAnsweringBlocked(false);
    if (currentIdx < 4) {
      setCurrentIdx(prev => prev + 1);
    } else {
      // End Battle! Route to Results screen
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      const accuracy = Math.round((correctCount / 5) * 100);
      
      router.push(
        `/results?mode=battle&worldId=${worldId}&levelId=${levelId}&accuracy=${accuracy}&timeSpent=${timeSpent}&correct=${correctCount}&total=5`
      );
    }
  };

  const handleHintClose = () => {
    setShowHint(false);
    advanceQuestion();
  };

  return (
    <div className="min-h-screen bg-forest-grid py-2 sm:py-4 px-2 sm:px-4 flex flex-col justify-between select-none">
      
      {/* Top Header navbar */}
      <header className="max-w-xl w-full mx-auto flex items-center justify-between bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-2xl border-2 border-slate-200 shadow-sm z-20">
        <Link href={`/world-map?worldId=${worldId}`}>
          <Button variant="gray" size="sm" className="flex items-center gap-0.5 py-1 sm:py-1.5 text-xs sm:text-sm">
            <ArrowLeft className="w-3.5 h-3.5" /> Flee
          </Button>
        </Link>
        
        {/* Level nodes indicator */}
        <span className="text-xs sm:text-sm font-black text-slate-700 uppercase tracking-wider flex items-center gap-1">
          🔮 Level {levelId}
        </span>

        {/* Audio Settings Panel */}
        <div className="flex items-center select-none shrink-0">
          {/* Synthesized BGM Toggle */}
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

        {/* Combo Counter Badge */}
        <div className={`flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border-2 text-[10px] sm:text-xs font-black transition-all ${
          combo >= 3 
            ? 'bg-amber-100 border-amber-300 text-amber-800 animate-bounce' 
            : combo > 0
            ? 'bg-orange-50 border-orange-200 text-orange-700'
            : 'bg-slate-100 border-slate-200 text-slate-400'
        }`}>
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>COMBO: {combo}</span>
        </div>
      </header>

      {/* Main RPG Battle Arena */}
      <main className="max-w-xl w-full mx-auto flex-grow flex flex-col justify-center gap-3 sm:gap-6 py-2 sm:py-4">
        
        {/* Symmetrical Dual Cute Health Tanks (Blood Tanks) */}
        <div className="w-full bg-white/70 backdrop-blur-md p-2.5 sm:p-4 rounded-2xl border-2 border-slate-100 shadow-sm flex flex-col md:flex-row gap-2 sm:gap-4 justify-between items-center select-none">
          {/* Player/Companion Blood Tank */}
          <div className="w-full md:w-[46%]">
            <HealthBar 
              hp={playerHp} 
              name="My Companion" 
              isShaking={isPlayerHit} 
              heartIcon="💖"
              avatarIcon="🧙‍♂️"
              colorClass="bg-gradient-to-r from-emerald-400 to-teal-400"
            />
          </div>
          
          {/* Symmetrical VS Badge */}
          <div className="hidden md:flex bg-slate-100/80 text-slate-400 border border-slate-200/80 text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-inner tracking-wider shrink-0 select-none">
            VS
          </div>

          {/* Monster Blood Tank */}
          <div className="w-full md:w-[46%]">
            <HealthBar 
              hp={monsterHp} 
              name={monsterName} 
              isShaking={isMonsterHit} 
              heartIcon="💚"
              avatarIcon="👾"
              colorClass="bg-gradient-to-r from-rose-400 to-pink-400"
            />
          </div>
        </div>

        {/* Dynamic Sprite battle ground */}
        <div className="w-full flex justify-between items-center px-6 relative h-32 sm:h-40">
          
          {/* Active Player Pet Companion (Leaf Kitten, etc.) */}
          <div className="w-1/2 flex justify-start">
            <div className="flex flex-col items-center">
              <PlayerAvatar petId={state.activePetId} isAttacking={isPlayerAttacking} isHit={isPlayerHit} />
              <span className="mt-1 text-[10px] font-black bg-emerald-500 text-white px-2 py-0.5 rounded-full uppercase border border-emerald-400">
                🧙‍♂️ MY Companion
              </span>
            </div>
          </div>

          {/* Damage Text Splash */}
          {damageText && (
            <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 z-30 animate-damage-float select-none pointer-events-none">
              <span className={`text-xl md:text-2xl font-black px-4 py-1.5 rounded-full shadow border-2 ${
                damageText.critical 
                  ? 'bg-yellow-400 border-yellow-600 text-amber-950 scale-125' 
                  : 'bg-red-500 border-red-600 text-white'
              }`}>
                {damageText.text}
              </span>
            </div>
          )}

          {/* Monster Sprite */}
          <div className="w-1/2 flex justify-end">
            <MonsterAvatar monsterId={monsterId} name={monsterName} isHit={isMonsterHit} isDead={monsterHp <= 0} isAttacking={isMonsterAttacking} />
          </div>
        </div>

        {/* Central Magical math card scroll */}
        <div className="w-full">
          <QuestionCard
            questionData={currentQuestion}
            onAnswerSelect={handleAnswerSelect}
            disabled={isAnsweringBlocked || showHint}
          />
        </div>

        {/* Question Counter tracker bubble */}
        <div className="flex justify-center gap-1.5 items-center mt-2">
          {[0, 1, 2, 3, 4].map((dotIdx) => (
            <div
              key={`dot-${dotIdx}`}
              className={`w-4 h-4 rounded-full border-2 transition-all ${
                dotIdx < currentIdx
                  ? 'bg-emerald-500 border-emerald-600 scale-95'
                  : dotIdx === currentIdx
                  ? 'bg-amber-400 border-amber-500 scale-125 animate-pulse'
                  : 'bg-slate-200 border-slate-300'
              }`}
            />
          ))}
        </div>
      </main>

      {/* Friendly Scroll modal details */}
      {showHint && (
        <HintModal
          questionData={currentQuestion}
          onClose={handleHintClose}
        />
      )}
    </div>
  );
}

export default function BattlePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-playful-dots">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-bounce inline-block">🎒</span>
          <p className="text-lg font-bold text-slate-500 font-sans">Charging Mana Spells...</p>
        </div>
      </div>
    }>
      <BattleContent />
    </Suspense>
  );
}
