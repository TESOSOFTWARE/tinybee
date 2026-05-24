'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useGameState } from '@/hooks/useGameState';
import { PlayerAvatar } from '@/components/Battle/PlayerAvatar';
import { WORLDS_DATABASE } from '@/data/worlds';
import { mathQuestions } from '@/data/questions';
import { playBGM, stopBGM } from '@/utils/audio';
import { 
  Heart, 
  Coins, 
  Sparkles, 
  Trophy, 
  RotateCcw, 
  ArrowRight, 
  Home, 
  BookOpen, 
  Play, 
  HelpCircle,
  Volume2,
  VolumeX
} from 'lucide-react';

// Beautiful custom Explorer Hat SVG component to sit on top of the pet companion
const ExplorerHat: React.FC = () => {
  return (
    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-12 h-8 z-30 pointer-events-none drop-shadow-lg animate-float-slow">
      <svg viewBox="0 0 40 24" fill="none" className="w-full h-full">
        {/* Hat Crown */}
        <path d="M10 16C10 6 30 6 30 16Z" fill="#a16207" stroke="#1e293b" strokeWidth="2.5" />
        {/* Hat Band */}
        <rect x="9.5" y="13.5" width="21" height="3" fill="#facc15" stroke="#1e293b" strokeWidth="1" />
        {/* Hat Brim */}
        <ellipse cx="20" cy="18" rx="16" ry="4.5" fill="#854d0e" stroke="#1e293b" strokeWidth="2.5" />
        {/* Explorer Star Badge */}
        <polygon points="20,8 21.5,11 24.5,11 22,12.5 23,15.5 20,13.5 17,15.5 18,12.5 15.5,11 18.5,11" fill="#fbbf24" stroke="#78350f" strokeWidth="0.5" />
      </svg>
    </div>
  );
};

// Interface for questions used in Adventure Dash
interface DashQuestion {
  prompt: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
  hint: string;
}

// Fallback/Loading Spinner Component
const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white gap-4">
    <div className="w-12 h-12 border-4 border-rose-500 border-t-transparent rounded-full animate-spin"></div>
    <p className="font-extrabold text-sm uppercase tracking-widest text-slate-400">Entering Dungeon...</p>
  </div>
);

// Inner page component that safely consumes useSearchParams
const AdventureDashContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Resolve world context
  const worldId = searchParams.get('worldId') || 'g1-addition';
  const levelId = searchParams.get('levelId') || '1';
  const worldInfo = WORLDS_DATABASE[worldId] || WORLDS_DATABASE['g1-addition'];

  const { state, addCoins, addXP, completeLevel } = useGameState();

  // Mode and Question states
  const [isClassicMode, setIsClassicMode] = useState(false);
  const [questions, setQuestions] = useState<DashQuestion[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [score, setScore] = useState(0);
  const [coinsEarned, setCoinsEarned] = useState(0);
  const [collectedGems, setCollectedGems] = useState<string[]>([]); // 'ruby', 'emerald', 'sapphire'

  // Play animations state
  const [activeLane, setActiveLane] = useState(1); // 0: Top, 1: Middle, 2: Bottom
  const [isJumping, setIsJumping] = useState(false);
  const [isDizzy, setIsDizzy] = useState(false);
  const [isDashing, setIsDashing] = useState(false);
  const [selectedChoiceIdx, setSelectedChoiceIdx] = useState<number | null>(null);

  // Modals & Feedback
  const [showHint, setShowHint] = useState(false);
  const [hintContent, setHintContent] = useState<string>('');
  const [explanationContent, setExplanationContent] = useState<string>('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [isVictory, setIsVictory] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);

  // Audio BGM State and Effect
  const [isBgmOn, setIsBgmOn] = useState(true);

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

  // 1. Shuffling Questions & Classic Mode generation
  useEffect(() => {
    generateQuestions(isClassicMode);
  }, [worldId, levelId, isClassicMode]);

  // Track time
  useEffect(() => {
    if (isGameOver || isVictory) return;
    const timer = setInterval(() => setTimeSpent(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [isGameOver, isVictory]);

  const generateQuestions = (classicEvenOdd: boolean) => {
    if (classicEvenOdd) {
      // Classic Mode: Pure dynamic Even vs Odd sorting
      const newQuestions: DashQuestion[] = Array.from({ length: 5 }, (_, idx) => {
        const wantEven = Math.random() > 0.5;
        const prompt = wantEven ? "DASH TO THE EVEN NUMBER!" : "DASH TO THE ODD NUMBER!";
        
        // Generate choices: one correct, two incorrect
        let correctNum: number;
        let wrongNum1: number;
        let wrongNum2: number;

        if (wantEven) {
          correctNum = Math.floor(Math.random() * 45) * 2 + 2; // Even [2, 90]
          wrongNum1 = Math.floor(Math.random() * 45) * 2 + 1; // Odd [1, 89]
          wrongNum2 = Math.floor(Math.random() * 45) * 2 + 1;
          while (wrongNum2 === wrongNum1) {
            wrongNum2 = Math.floor(Math.random() * 45) * 2 + 1;
          }
        } else {
          correctNum = Math.floor(Math.random() * 45) * 2 + 1; // Odd [1, 89]
          wrongNum1 = Math.floor(Math.random() * 45) * 2 + 2; // Even [2, 90]
          wrongNum2 = Math.floor(Math.random() * 45) * 2 + 2;
          while (wrongNum2 === wrongNum1) {
            wrongNum2 = Math.floor(Math.random() * 45) * 2 + 2;
          }
        }

        // Shuffled choices
        const choicesList = [correctNum, wrongNum1, wrongNum2].map(String);
        const choices = [...choicesList].sort(() => Math.random() - 0.5);

        return {
          prompt,
          choices,
          correctAnswer: String(correctNum),
          explanation: wantEven 
            ? `Even numbers always end in 0, 2, 4, 6, or 8! ${correctNum} ends in ${correctNum % 10}, making it even.`
            : `Odd numbers always end in 1, 3, 5, 7, or 9! ${correctNum} ends in ${correctNum % 10}, making it odd.`,
          hint: wantEven
            ? "Look for a number ending in 0, 2, 4, 6, or 8!"
            : "Look for a number ending in 1, 3, 5, 7, or 9!"
        };
      });
      setQuestions(newQuestions);
    } else {
      // Curriculum Mode: Fetch level math questions from standard database
      const topicName = worldId.split('-')[1];
      const getGradeFromWorldId = (wId: string): number => {
        if (wId.startsWith('gk')) return 0;
        const match = wId.match(/^g(\d+)-/);
        return match ? parseInt(match[1]) : 1;
      };
      const gradeVal = getGradeFromWorldId(worldId);

      const filtered = mathQuestions.filter(q => q.grade === gradeVal && q.topic === topicName);
      const shuffled = [...filtered].sort(() => 0.5 - Math.random()).slice(0, 5);

      const resolvedQuestions = shuffled.map(q => {
        // Build clear answer choices (maximum 3 choices for the 3 lanes)
        const wrongAnswers = q.choices.filter(c => c !== q.correctAnswer);
        const selectedWrongs = [...wrongAnswers].sort(() => 0.5 - Math.random()).slice(0, 2);
        const choices = [...selectedWrongs, q.correctAnswer].sort(() => Math.random() - 0.5);

        return {
          prompt: `SOLVE: ${q.question}`,
          choices,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation || `The correct mathematical answer is ${q.correctAnswer}!`,
          hint: q.hint || "Take your time to work out the arithmetic step by step!"
        };
      });

      // Handle fallback questions if empty
      if (resolvedQuestions.length === 0) {
        setQuestions([
          {
            prompt: "DASH TO THE EVEN NUMBER!",
            choices: ["15", "24", "33"],
            correctAnswer: "24",
            explanation: "24 ends in 4, making it an even number!",
            hint: "Even numbers always end in 0, 2, 4, 6, or 8."
          },
          {
            prompt: "DASH TO THE ODD NUMBER!",
            choices: ["10", "18", "27"],
            correctAnswer: "27",
            explanation: "27 ends in 7, making it an odd number!",
            hint: "Odd numbers always end in 1, 3, 5, 7, or 9."
          }
        ]);
      } else {
        setQuestions(resolvedQuestions);
      }
    }

    // Reset loop
    setQIndex(0);
    setHearts(3);
    setScore(0);
    setCoinsEarned(0);
    setCollectedGems([]);
    setActiveLane(1);
    setIsGameOver(false);
    setIsVictory(false);
    setCorrectAnswersCount(0);
  };

  // 2. Dash/Lane Choice Selection
  const handleDashSelection = (choiceIndex: number, laneIndex: number) => {
    if (isJumping || isDizzy || isDashing || isGameOver || isVictory) return;

    setSelectedChoiceIdx(choiceIndex);
    setActiveLane(laneIndex);
    setIsJumping(true);

    const activeQuestion = questions[qIndex];
    const isCorrect = activeQuestion.choices[choiceIndex] === activeQuestion.correctAnswer;

    // Trigger jump-to-lane delay
    setTimeout(() => {
      setIsJumping(false);
      
      if (isCorrect) {
        // Correct answer - trigger nitro forward dash!
        setIsDashing(true);
        setCorrectAnswersCount(prev => prev + 1);
        setScore(prev => prev + 20);

        // Earn coins
        const baseReward = 15;
        setCoinsEarned(prev => prev + baseReward);

        // Gem collection benchmarks: Gate 1 (idx 0) -> Ruby, Gate 3 (idx 2) -> Emerald, Gate 5 (idx 4) -> Sapphire
        let gemCollected = "";
        if (qIndex === 0 && !collectedGems.includes('ruby')) {
          gemCollected = "ruby";
        } else if (qIndex === 2 && !collectedGems.includes('emerald')) {
          gemCollected = "emerald";
        } else if (qIndex === 4 && !collectedGems.includes('sapphire')) {
          gemCollected = "sapphire";
        }

        if (gemCollected) {
          setCollectedGems(prev => [...prev, gemCollected]);
        }

        // Delay to speed up scroll transition
        setTimeout(() => {
          setIsDashing(false);
          setSelectedChoiceIdx(null);
          
          if (qIndex >= questions.length - 1) {
            // Victory Escape!
            handleVictoryEscape();
          } else {
            setQIndex(prev => prev + 1);
          }
        }, 1200);

      } else {
        // Incorrect Choice - trigger wall collide crash!
        setIsDizzy(true);
        setHearts(prev => {
          const nextHearts = prev - 1;
          if (nextHearts <= 0) {
            setTimeout(() => {
              setIsDizzy(false);
              setIsGameOver(true);
            }, 1000);
          }
          return nextHearts;
        });

        // Set educational hint content and display scroll
        setHintContent(activeQuestion.hint);
        setExplanationContent(activeQuestion.explanation);
        
        setTimeout(() => {
          setIsDizzy(false);
          setShowHint(true);
        }, 1000);
      }
    }, 500);
  };

  const handleNextAfterHint = () => {
    setShowHint(false);
    setSelectedChoiceIdx(null);

    // Skip to next gate or check game over
    if (hearts <= 0) {
      setIsGameOver(true);
    } else if (qIndex >= questions.length - 1) {
      handleVictoryEscape();
    } else {
      setQIndex(prev => prev + 1);
    }
  };

  const handleVictoryEscape = () => {
    setIsVictory(true);
    
    // Save progression
    const finalAccuracy = Math.round((correctAnswersCount / questions.length) * 100);
    const starScore = hearts === 3 ? 3 : hearts === 2 ? 2 : 1;
    
    // Add rewards to local storage context
    addCoins(coinsEarned);
    addXP(score);
    completeLevel(worldId, levelId, starScore, finalAccuracy, timeSpent, correctAnswersCount, questions.length);
  };

  const currentQuestion = questions[qIndex];

  return (
    <div className={`min-h-screen ${worldInfo.bgClass || 'bg-playful-dots bg-slate-50'} py-2 sm:py-4 px-2 sm:px-4 flex flex-col justify-between select-none font-sans overflow-x-hidden text-slate-800`}>
      
      {/* 1. TOP NAVBAR HEADER PANEL */}
      <header className="max-w-4xl w-full mx-auto flex items-center justify-between bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl border-2 border-slate-200 shadow-sm z-20">
        <Link href={`/world-map?worldId=${worldId}`}>
          <button className="bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-xl transition-all shadow-sm active:translate-y-0.5 text-xs sm:text-sm font-black text-slate-600 flex items-center gap-1 cursor-pointer">
            ➔ Exit
          </button>
        </Link>
        
        <div className="text-center">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block animate-pulse">Adventure Run</span>
          <h2 className="text-xs sm:text-base font-black text-slate-800 flex items-center gap-1 justify-center leading-none">
            🏃‍♂️ Dungeon Escape (Level {levelId})
          </h2>
        </div>

        <div className="flex items-center gap-1.5 select-none">
          {/* Audio BGM Toggle */}
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

          <button 
            onClick={() => setIsClassicMode(prev => !prev)}
            className={`px-3 py-1.5 rounded-xl border text-[9px] sm:text-xs font-black uppercase tracking-wider transition-all shadow-sm active:translate-y-0.5 flex items-center gap-1 cursor-pointer ${
              isClassicMode 
                ? 'bg-rose-500 border-rose-400 text-white shadow-rose-900/35 animate-pulse'
                : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-500'
            }`}
          >
            {isClassicMode ? 'Classic On 🏃‍♂️' : 'Classic Mode'}
          </button>
        </div>
      </header>

      {/* 2. MAIN CORE LAYOUT AREA */}
      <main className="max-w-4xl w-full mx-auto flex-grow flex flex-col justify-center gap-3 my-2.5 sm:my-3">
        
        {/* Dynamic HUD: Hearts, Gate Dots, Coins, and Gems */}
        <div className="w-full bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl border-2 border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3 justify-between items-center select-none z-10">
          {/* Hearts container */}
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl shadow-inner shrink-0">
            {Array.from({ length: 3 }).map((_, i) => (
              <Heart 
                key={i} 
                className={`w-4.5 h-4.5 transition-transform duration-300 ${
                  i < hearts 
                    ? 'fill-rose-500 text-rose-500 scale-110 drop-shadow animate-float' 
                    : 'text-slate-200 scale-90'
                }`} 
              />
            ))}
          </div>

          {/* Gate dots progress */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: questions.length }).map((_, i) => (
              <div 
                key={i} 
                className={`w-2.5 h-2.5 rounded-full border transition-all ${
                  i < qIndex 
                    ? 'bg-emerald-400 border-emerald-300 scale-105 shadow shadow-emerald-500'
                    : i === qIndex 
                    ? 'bg-rose-500 border-rose-400 scale-110 shadow shadow-rose-400 animate-ping-slow'
                    : 'bg-slate-200 border-slate-300'
                }`}
              />
            ))}
          </div>

          {/* Symmetrical Gem and Gold HUD */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Gems */}
            <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-2 py-1 rounded-xl shadow-inner">
              <div className={`w-6 h-6 rounded flex items-center justify-center text-[10px] border ${collectedGems.includes('ruby') ? 'bg-red-500/10 border-red-400 text-red-500 font-bold' : 'bg-transparent border-transparent text-slate-300'}`}>♦️</div>
              <div className={`w-6 h-6 rounded flex items-center justify-center text-[10px] border ${collectedGems.includes('emerald') ? 'bg-emerald-500/10 border-emerald-400 text-emerald-500 font-bold' : 'bg-transparent border-transparent text-slate-300'}`}>♣️</div>
              <div className={`w-6 h-6 rounded flex items-center justify-center text-[10px] border ${collectedGems.includes('sapphire') ? 'bg-blue-500/10 border-blue-400 text-blue-500 font-bold' : 'bg-transparent border-transparent text-slate-300'}`}>♠️</div>
            </div>

            {/* Coins HUD */}
            <div className="flex items-center gap-1 bg-amber-100 border border-amber-300 px-2.5 py-1.5 rounded-xl shadow-sm text-amber-800 font-black text-xs">
              <Coins className="w-4 h-4 fill-amber-500 text-amber-500 animate-spin-slow" />
              <span>{coinsEarned}</span>
            </div>
          </div>
        </div>

        {/* Scroll parchment math question prompt card */}
        {currentQuestion && (
          <div className="w-full bg-[#fefcf0] border-2 border-amber-400 rounded-2xl py-2 px-4 shadow-sm flex flex-col items-center justify-center relative">
            <h3 className="text-amber-700 font-black text-[9px] sm:text-[10px] tracking-widest uppercase mb-0.5">
              📜 Active Prompt
            </h3>
            <p className="text-slate-800 text-sm sm:text-base font-black text-center mt-0.5 leading-snug">
              {currentQuestion.prompt}
            </p>
          </div>
        )}

        {/* 3. PARALLAX SIDE-SCROLLING DUNGEON GRAPHICS ENGINE VIEWPORT CARD */}
        <div className="w-full relative aspect-[16/9] md:h-[350px] bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 rounded-3xl border-4 border-slate-700/15 shadow-2xl overflow-hidden p-4 flex flex-col justify-end">
          
          {/* Parallax Layer 1: Brick wall background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-purple-950 z-0" />
          
          {/* Tiled parallax wall panel strips */}
          <div className="absolute top-0 bottom-0 left-0 right-0 z-0 pointer-events-none opacity-15 overflow-hidden">
            <div className="absolute w-[300%] h-full flex animate-infinite-scroll-fast">
              <div className="w-1/3 h-full border-r border-dashed border-indigo-500/20 bg-grid-bricks" />
              <div className="w-1/3 h-full border-r border-dashed border-indigo-500/20 bg-grid-bricks" />
              <div className="w-1/3 h-full bg-grid-bricks" />
            </div>
          </div>

          {/* Neon blue torches lighting up the dungeon */}
          <div className="absolute inset-0 z-0 pointer-events-none flex justify-around items-center opacity-70">
            <div className="absolute top-[20%] left-[10%] flex flex-col items-center">
              <div className="w-3 h-9 bg-amber-800 rounded border border-amber-950 rotate-12 shadow" />
              <div className="w-4 h-4 bg-cyan-400 rounded-full animate-ping absolute -top-2.5 filter blur-xs" />
              <div className="w-5 h-5 bg-blue-500 rounded-full absolute -top-3 shadow-inner border border-blue-400" />
            </div>
            <div className="absolute top-[20%] right-[10%] flex flex-col items-center">
              <div className="w-3 h-9 bg-amber-800 rounded border border-amber-950 -rotate-12 shadow" />
              <div className="w-4 h-4 bg-cyan-400 rounded-full animate-ping absolute -top-2.5 filter blur-xs" />
              <div className="w-5 h-5 bg-blue-500 rounded-full absolute -top-3 shadow-inner border border-blue-400" />
            </div>
          </div>

          {/* Parallax scrolling dungeon flooring grid */}
          <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-slate-950 to-transparent z-0 pointer-events-none border-t border-slate-800/30 overflow-hidden">
            <div 
              className={`absolute inset-0 bg-stone-tiles w-[300%] h-full flex ${
                isDashing ? 'animate-infinite-scroll-fast' : 'animate-infinite-scroll-slow'
              }`}
            >
              <div className="w-1/3 h-full border-r border-slate-800/40" />
              <div className="w-1/3 h-full border-r border-slate-800/40" />
              <div className="w-1/3 h-full" />
            </div>
          </div>

          {/* 4. ACTIVE KART RUNNER & THE THREE TRACK LANES */}
          <div className="w-full h-full relative z-10 flex items-center justify-between px-2 sm:px-8">
            
            {/* LANES CONTAINER */}
            <div className="absolute inset-y-0 left-0 right-0 flex flex-col justify-between py-6 pointer-events-none">
              {[0, 1, 2].map((lane) => (
                <div 
                  key={lane} 
                  className={`w-full h-8 bg-slate-900/45 border-y border-dashed transition-colors duration-300 relative ${
                    activeLane === lane 
                      ? 'border-rose-500/30 bg-rose-950/10' 
                      : 'border-slate-800/40'
                  }`}
                />
              ))}
            </div>

            {/* ACTIVE COMPANER PLAYER RUNNER */}
          <div 
            className={`absolute left-[10%] sm:left-[18%] z-20 flex flex-col items-center transition-all duration-500 origin-bottom select-none pointer-events-none`}
            style={{ 
              transform: `translateY(${(activeLane - 1) * 85}px) scale(${
                isJumping ? 1.25 : isDashing ? 1.1 : 1
              }) rotate(${isJumping ? '15deg' : isDizzy ? '-15deg' : '0deg'})`,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="relative">
              {/* Explorer adventurer hat 🤠 placed dynamically above pet companion head */}
              <ExplorerHat />

              {/* The Player companion character avatar */}
              <PlayerAvatar 
                petId={state.activePetId} 
                isAttacking={false}
                isHit={isDizzy} 
                className="w-16 h-16 sm:w-20 sm:h-20"
              />

              {/* Boost fire particles for speed-boosting */}
              {isDashing && (
                <div className="absolute -left-6 bottom-0 flex gap-0.5 animate-pulse-slow">
                  <div className="w-2.5 h-6 bg-cyan-400 rounded-full animate-pulse filter blur-xs" />
                  <div className="w-3.5 h-8 bg-rose-500 rounded-full animate-bounce filter blur-xs" />
                </div>
              )}
            </div>
            
            {/* Explorer badge under the character */}
            <span className="text-[7px] font-black bg-rose-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider shadow border border-rose-400 mt-1">
              Explorer
            </span>
          </div>

          {/* FLOATING STONE PLATFORM DECISION CHOICE GATES */}
          {currentQuestion && (
            <div className="absolute right-[4%] sm:right-[10%] inset-y-0 w-44 sm:w-56 flex flex-col justify-between py-2 z-20">
              {[0, 1, 2].map((laneIndex) => {
                const choiceText = currentQuestion.choices[laneIndex];
                if (!choiceText) return null;

                const isSelected = selectedChoiceIdx === laneIndex;
                const isCorrect = choiceText === currentQuestion.correctAnswer;

                // Benchmarks gates: Gates 1, 3, 5 show dynamic chests on correct platforms
                const showChest = (qIndex === 0 || qIndex === 2 || qIndex === 4) && isCorrect;

                return (
                  <button 
                    key={laneIndex}
                    onClick={() => handleDashSelection(laneIndex, laneIndex)}
                    disabled={isJumping || isDizzy || isDashing}
                    className={`w-full group rounded-2xl border-3 text-left p-3 flex items-center justify-between transition-all duration-300 relative shadow-lg ${
                      isSelected
                        ? isCorrect
                          ? 'bg-emerald-950/90 border-emerald-400 scale-105 shadow-emerald-900/60'
                          : 'bg-rose-950/90 border-rose-500 scale-95'
                        : 'bg-slate-900/90 border-slate-700 hover:border-cyan-400 hover:scale-103 hover:shadow-cyan-900/35 cursor-pointer active:translate-y-0.5'
                    }`}
                  >
                    {/* Platform Lane Identifier badge */}
                    <div className="absolute -top-3 -left-2 bg-slate-950 border border-slate-800 text-slate-400 text-[8px] font-black px-1.5 py-0.5 rounded-md uppercase">
                      Path {laneIndex === 0 ? 'A' : laneIndex === 1 ? 'B' : 'C'}
                    </div>

                    {/* Numeric/Option label inside platform */}
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-[8px] font-extrabold uppercase tracking-widest mt-0.5">Dungeon Gate</span>
                      <span className="text-white font-extrabold text-sm sm:text-base leading-none mt-1">
                        {choiceText}
                      </span>
                    </div>

                    {/* Render visual gate chest/emoji decoration */}
                    <div className="flex items-center gap-1">
                      {showChest ? (
                        <div className="text-2xl animate-bounce-slow shrink-0" title="Magical Gate Chest!">
                          {collectedGems.length >= (qIndex === 0 ? 1 : qIndex === 2 ? 2 : 3) ? '🔓' : '🎁'}
                        </div>
                      ) : (
                        <span className="text-xs font-black text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0">➔</span>
                      )}
                    </div>

                    {/* Left side lane alignment marker */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-700 rounded-l-md group-hover:bg-cyan-400 transition-colors" />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

    </main>

      {/* 5. EDUCATIONAL HINT SCROLL MODAL DRAWER */}
      {showHint && (
        <div className="absolute inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-lg bg-[#f6ecd2] border-4 border-[#854d0e] rounded-3xl p-6 shadow-2xl relative animate-pop-in flex flex-col items-center">
            
            {/* Visual Header */}
            <div className="w-16 h-16 bg-rose-100 border-2 border-[#854d0e] rounded-full flex items-center justify-center text-3xl shadow-inner -mt-12 animate-float">
              🤕
            </div>

            <h3 className="font-extrabold text-[#854d0e] text-lg tracking-wider uppercase mt-4 flex items-center gap-1.5">
              💥 Ouch! Bunted the barrier!
            </h3>
            
            {/* Heart lost notification */}
            <div className="bg-rose-100 border border-rose-300 text-rose-800 text-xs font-bold px-3 py-1 rounded-full mt-2 flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse" /> 1 Heart Lost! Remaining: {hearts}
            </div>

            <div className="w-full h-px bg-[#854d0e]/25 my-4" />

            {/* Explanation box */}
            <div className="bg-amber-100/60 border border-[#854d0e]/30 rounded-2xl p-4 w-full text-[#78350f] text-sm leading-relaxed">
              <h4 className="font-black text-xs uppercase tracking-widest text-[#854d0e] flex items-center gap-1 mb-1">
                <BookOpen className="w-4 h-4" /> Educational Scroll Hint
              </h4>
              <p className="font-bold">{hintContent}</p>
              <p className="mt-2 text-xs italic opacity-90 border-t border-[#854d0e]/10 pt-2 leading-relaxed">
                {explanationContent}
              </p>
            </div>

            {/* Advance Button */}
            <button 
              onClick={handleNextAfterHint}
              className="mt-5 w-full bg-[#854d0e] hover:bg-[#9a5d14] text-white font-extrabold py-3.5 px-6 rounded-2xl transition-all shadow-md active:translate-y-0.5 flex items-center justify-center gap-2 text-sm uppercase tracking-wider border-b-4 border-amber-900"
            >
              Resume Adventure Dash <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 6. GAME OVER / DEFEAT MODAL SCREEN */}
      {isGameOver && (
        <div className="absolute inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-slate-900 border-4 border-rose-500/80 rounded-3xl p-6 text-center shadow-2xl relative flex flex-col items-center">
            
            <div className="w-20 h-20 bg-rose-950/60 border-2 border-rose-500 rounded-full flex items-center justify-center text-4xl shadow-inner -mt-16 animate-pulse">
              💀
            </div>

            <h2 className="font-black text-rose-400 text-2xl uppercase tracking-wider mt-4">
              Dungeon Defeat!
            </h2>
            <p className="text-slate-400 text-xs font-semibold mt-1 max-w-xs">
              The barriers got the best of you this time, but real explorers never give up! Let's practice again!
            </p>

            <div className="w-full bg-slate-950/60 rounded-2xl p-4 my-5 flex justify-around border border-slate-800 text-left">
              <div>
                <span className="block text-[9px] font-black text-slate-500 uppercase tracking-wider">Gates Answered</span>
                <span className="font-extrabold text-white text-base">{qIndex} / 5</span>
              </div>
              <div className="w-px bg-slate-800" />
              <div>
                <span className="block text-[9px] font-black text-slate-500 uppercase tracking-wider">Accuracy Score</span>
                <span className="font-extrabold text-rose-500 text-base">{Math.round((correctAnswersCount / (qIndex || 1)) * 100)}%</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 w-full">
              <button 
                onClick={() => generateQuestions(isClassicMode)}
                className="w-full bg-rose-600 hover:bg-rose-500 text-white font-extrabold py-3.5 px-6 rounded-2xl transition-all shadow-lg shadow-rose-950/40 active:translate-y-0.5 flex items-center justify-center gap-2 text-sm uppercase tracking-wider border-b-4 border-rose-800"
              >
                <RotateCcw className="w-4 h-4" /> Retry Dungeon Dash
              </button>
              
              <Link href={`/world-map?worldId=${worldId}`} className="w-full">
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-black py-3 px-6 rounded-2xl transition-all text-xs uppercase tracking-wider border border-slate-700">
                  Return to Map
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 7. ESCAPE VICTORY MODAL SCREEN */}
      {isVictory && (
        <div className="absolute inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-slate-900 border-4 border-emerald-500/80 rounded-3xl p-6 text-center shadow-2xl relative flex flex-col items-center animate-pop-in">
            
            {/* Star Sparkle Confetti overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              <div className="absolute top-[20%] left-[15%] text-2xl animate-float">✨</div>
              <div className="absolute top-[15%] right-[20%] text-xl animate-float-slow">⭐</div>
              <div className="absolute bottom-[30%] left-[25%] text-2xl animate-float-fast">✨</div>
            </div>

            <div className="w-20 h-20 bg-emerald-950/60 border-2 border-emerald-500 rounded-full flex items-center justify-center text-4xl shadow-inner -mt-16 animate-bounce-slow">
              🏆
            </div>

            <h2 className="font-black text-emerald-400 text-2xl uppercase tracking-widest mt-4 flex items-center gap-1.5">
              🏰 Dungeon Escaped!
            </h2>
            <p className="text-slate-400 text-xs font-semibold mt-1">
              Spectacular run! You categorized every gate correctly and unlocked the exits!
            </p>

            {/* Gems escapes display */}
            <div className="flex items-center justify-center gap-3 my-4">
              <div className="w-10 h-10 bg-red-900/60 border border-red-500 rounded-xl flex items-center justify-center text-xl shadow animate-bounce-slow">♦️</div>
              <div className="w-10 h-10 bg-emerald-900/60 border border-emerald-500 rounded-xl flex items-center justify-center text-xl shadow animate-bounce-slow delay-100">♣️</div>
              <div className="w-10 h-10 bg-blue-900/60 border border-blue-500 rounded-xl flex items-center justify-center text-xl shadow animate-bounce-slow delay-200">♠️</div>
            </div>

            {/* Score HUD summary */}
            <div className="w-full bg-slate-950/60 rounded-2xl p-4 mb-5 border border-slate-800 flex justify-around text-left">
              <div>
                <span className="block text-[8px] font-black text-slate-500 uppercase tracking-wider">XP Gained</span>
                <span className="font-extrabold text-cyan-400 text-base flex items-center gap-1 mt-0.5">
                  <Sparkles className="w-4 h-4 fill-cyan-400 text-cyan-400" /> +{score} XP
                </span>
              </div>
              <div className="w-px bg-slate-800" />
              <div>
                <span className="block text-[8px] font-black text-slate-500 uppercase tracking-wider">Coins Looted</span>
                <span className="font-extrabold text-amber-400 text-base flex items-center gap-1 mt-0.5">
                  <Coins className="w-4 h-4 fill-amber-400 text-amber-400" /> +{coinsEarned}
                </span>
              </div>
              <div className="w-px bg-slate-800" />
              <div>
                <span className="block text-[8px] font-black text-slate-500 uppercase tracking-wider">Hearts Saved</span>
                <span className="font-extrabold text-rose-500 text-base flex items-center gap-1 mt-0.5">
                  <Heart className="w-4 h-4 fill-rose-500 text-rose-500" /> {hearts}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 w-full">
              <Link href={`/world-map?worldId=${worldId}`} className="w-full">
                <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 px-6 rounded-2xl transition-all shadow-lg shadow-emerald-950/40 active:translate-y-0.5 flex items-center justify-center gap-2 text-sm uppercase tracking-wider border-b-4 border-emerald-800">
                  Escape to World Map <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <button 
                onClick={() => generateQuestions(isClassicMode)}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-black py-3 px-6 rounded-2xl transition-all text-xs uppercase tracking-wider border border-slate-700"
              >
                <RotateCcw className="w-3.5 h-3.5 inline mr-1" /> Replay Dungeon
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

// Main Export Component wrapped in Suspense for Next.js useSearchParams safety
const AdventureDashPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AdventureDashContent />
    </Suspense>
  );
};

export default AdventureDashPage;
