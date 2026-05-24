'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState';
import { Button } from '@/components/UI/Button';
import { Card } from '@/components/UI/Card';
import { mathQuestions, MathQuestion } from '@/data/questions';
import { MonsterAvatar } from '@/components/Battle/MonsterAvatar';
import { PlayerAvatar } from '@/components/Battle/PlayerAvatar';
import { HintModal } from '@/components/Battle/HintModal';
import { ArrowLeft, Shield, Flame, Award, Trophy } from 'lucide-react';

interface Opponent {
  id: string;
  name: string;
  monsterId: string;
  progress: number; // 0 to 100
  lane: 'left' | 'right';
  speed: number;
}

import { WORLDS_DATABASE } from '@/data/worlds';

function RacingGameContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { state, isLoading } = useGameState();

  const worldId = searchParams.get('worldId') || 'g1-addition';
  const levelId = parseInt(searchParams.get('levelId') || '1', 10);
  const worldInfo = WORLDS_DATABASE[worldId] || WORLDS_DATABASE['g1-addition'];

  // Game States
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const [playerProgress, setPlayerProgress] = useState(0); // 0 to 100
  const [opponents, setOpponents] = useState<Opponent[]>([]);
  const [baseShield, setBaseShield] = useState(100);
  const [isRecharging, setIsRecharging] = useState(false);
  const [incorrectFeedback, setIncorrectFeedback] = useState(false);

  const [isGameOver, setIsGameOver] = useState(false);
  const playerProgressRef = useRef(0);

  // Keep playerProgressRef synchronized to avoid stale state in interval
  useEffect(() => {
    playerProgressRef.current = playerProgress;
  }, [playerProgress]);

  // Animations & FX states
  const [isNitroActive, setIsNitroActive] = useState(false);
  const [isSkidding, setIsSkidding] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1.0); // controls road scroll speed
  const [damageSplash, setDamageSplash] = useState<string | null>(null);
  const [boostIndicator, setBoostIndicator] = useState<string | null>(null);
  
  const [combo, setCombo] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);

  // Monitor player progress for instant victory crossing
  useEffect(() => {
    if (playerProgress >= 100 && !isGameOver) {
      setIsGameOver(true);
      setSpeedMultiplier(0); // Freeze lanes
      setBoostIndicator("🏁 VICTORY! You crossed the finish line!");
      
      setTimeout(() => {
        const finalAccuracy = Math.round((correctCount / 5) * 100);
        router.push(
          `/results?mode=racing&worldId=${worldId}&levelId=${levelId}&accuracy=${finalAccuracy}&timeSpent=${timeSpent}&correct=${correctCount}&total=5`
        );
      }, 1500);
    }
  }, [playerProgress, isGameOver, correctCount, timeSpent, worldId, levelId, router]);

  // Initialize Racing Game Data
  useEffect(() => {
    // 1. Shuffled Questions
    const topicName = worldId.split('-')[1] as any;
    const getGradeFromWorldId = (wId: string): number => {
      if (wId.startsWith('gk')) return 0;
      const match = wId.match(/^g(\d+)-/);
      return match ? parseInt(match[1]) : 1;
    };
    const gradeVal = getGradeFromWorldId(worldId);

    const filtered = mathQuestions.filter(q => q.grade === gradeVal && q.topic === topicName);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random()).slice(0, 5);
    setQuestions(shuffled);

    // 2. Initialize Opponent Monster Karts
    const primaryMonsterName = worldInfo.monsterNames?.[0] || 'Tiny Slime';
    const primaryMonsterId = worldInfo.monsterIds?.[0] || 'muddy_slime';

    setOpponents([
      { id: 'opp-1', name: `Speedy ${primaryMonsterName}`, monsterId: primaryMonsterId, progress: 0, lane: 'left', speed: 0.12 },
      { id: 'opp-2', name: `Turbo Ogre`, monsterId: 'fluffy_ogre', progress: 0, lane: 'right', speed: 0.10 }
    ]);
  }, [worldId, worldInfo]);

  // Race Clock
  useEffect(() => {
    if (isGameOver) return;
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isGameOver]);

  // Main high-speed highway simulation loop (40ms ticks)
  useEffect(() => {
    if (isGameOver || isRecharging || incorrectFeedback || questions.length === 0 || qIndex >= 5) return;

    const interval = setInterval(() => {
      // 1. Move Opponents forward slightly
      setOpponents(prev => {
        const nextOpps = prev.map(opp => {
          if (opp.progress >= 100) return { ...opp, progress: 100 };
          
          // Random slight speed fluctuations to simulate racing
          const variance = (Math.random() - 0.5) * 0.05;
          const currentSpeed = Math.max(0.04, opp.speed + variance);
          
          return { ...opp, progress: opp.progress + currentSpeed };
        });

        // Check if any opponent kart crossed the finish line first
        const winningOpponent = nextOpps.find(opp => opp.progress >= 100);
        if (winningOpponent && playerProgressRef.current < 100 && !isGameOver) {
          setIsGameOver(true);
          setSpeedMultiplier(0); // Freeze lanes
          setDamageSplash("🏁 DEFEAT! Opponent crossed the finish line first!");
          
          setTimeout(() => {
            const finalAccuracy = Math.round((correctCount / 5) * 100);
            router.push(
              `/results?mode=racing&worldId=${worldId}&levelId=${levelId}&accuracy=${finalAccuracy}&timeSpent=${timeSpent}&correct=${correctCount}&total=5`
            );
          }, 2000);
        }

        return nextOpps;
      });

      // 2. Continuous passive player roll if speedMultiplier is normal
      setPlayerProgress(prev => {
        if (prev >= 100) return 100;
        // passive rolling speed based on correct answers
        const passiveSpeed = 0.06 * speedMultiplier;
        return prev + passiveSpeed;
      });

    }, 40);

    return () => clearInterval(interval);
  }, [isGameOver, isRecharging, incorrectFeedback, questions, qIndex, speedMultiplier, correctCount, timeSpent, worldId, levelId]);

  // Shield spell recharge logic
  useEffect(() => {
    if (isRecharging) {
      const timeout = setTimeout(() => {
        setIsRecharging(false);
        setSpeedMultiplier(1.0);
        // Catch up player kart slightly so they don't lose motivation
        setPlayerProgress(prev => Math.max(prev, Math.max(...opponents.map(o => o.progress)) - 10));
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isRecharging, opponents]);

  const handleAnswerSubmit = (answer: string) => {
    if (isAnswered || isGameOver) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    const isCorrectAns = answer === currentQuestion.correctAnswer;

    if (isCorrectAns) {
      // 1. Correct Answer: NITRO BOOST!
      setCorrectCount(prev => prev + 1);
      setCombo(prev => prev + 1);
      
      setIsNitroActive(true);
      setSpeedMultiplier(2.5); // Speed up lane scrolling
      setBoostIndicator("🚀 NITRO ACCEL! +20%");

      // Instantly accelerate progress bar position
      setPlayerProgress(prev => {
        const nextProg = Math.min(100, prev + 20);
        return nextProg;
      });

      // Turn off nitro thruster animation after 600ms
      setTimeout(() => {
        setIsNitroActive(false);
        setSpeedMultiplier(1.2); // Settle into nice cruising speed
        setBoostIndicator(null);
      }, 700);

      // Transition questions
      setTimeout(() => {
        advanceQuestion();
      }, 1000);

    } else {
      // 2. Incorrect Answer: Slip / SKID!
      setCombo(0);
      setIsSkidding(true);
      setSpeedMultiplier(0.2); // Slow down track dramatically
      setDamageSplash("⚠️ Skidded in Mud! -20 Shield");
      
      // Decelerate HP shield
      setBaseShield(prev => {
        const nextShield = prev - 20;
        if (nextShield <= 0) {
          setIsRecharging(true);
          return 100;
        }
        return nextShield;
      });

      // Let Opponents speed past!
      setOpponents(prev => prev.map(opp => ({
        ...opp,
        progress: Math.min(95, opp.progress + 15) // Surge opponents ahead
      })));

      // Recover from skid rotate
      setTimeout(() => {
        setIsSkidding(false);
        setDamageSplash(null);
        setIncorrectFeedback(true);
      }, 950);
    }
  };

  const advanceQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);

    if (qIndex === 4) {
      // Cross Checkered Flag! Overtake final lap
      setPlayerProgress(100);
    } else {
      setQIndex(prev => prev + 1);
    }
  };

  const handleCloseHint = () => {
    setIncorrectFeedback(false);
    setSpeedMultiplier(1.0);
    advanceQuestion();
  };

  if (isLoading || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-playful-dots">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-bounce inline-block">🏎️</span>
          <p className="text-lg font-bold text-slate-500 font-extrabold">Constructing Racing Tracks...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[qIndex] || questions[0];

  // Dynamic road scrolling speed based on current state
  const scrollDuration = isNitroActive ? '0.1s' : isSkidding ? '1.5s' : '0.4s';

  return (
    <div className="min-h-screen bg-playful-dots py-2 sm:py-4 px-2 sm:px-4 flex flex-col justify-between select-none">
      
      {/* Header HUD */}
      <header className="max-w-4xl w-full mx-auto flex items-center justify-between mb-1.5 sm:mb-2">
        <Link href={`/world-map?worldId=${worldId}`}>
          <Button variant="gray" size="sm" className="flex items-center gap-1 py-1 sm:py-1.5 text-xs sm:text-sm">
            <ArrowLeft className="w-4 h-4" /> Exit
          </Button>
        </Link>

        {/* HUD Stats */}
        <div className="text-center">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Grand Prix</span>
          <h2 className="text-xs sm:text-base font-black text-slate-800 flex items-center gap-1 justify-center">
            🏎️ Pet Racing Academy (Level {levelId})
          </h2>
        </div>

        {/* Combo flame */}
        <div className="flex items-center gap-1 sm:gap-1.5 bg-yellow-100 border-2 border-yellow-300 text-yellow-800 px-2 py-0.5 sm:px-3.5 sm:py-1 rounded-full font-black text-[10px] sm:text-xs shadow-sm">
          <Flame className={`w-3.5 h-3.5 ${combo > 0 ? 'text-orange-500 fill-orange-400 animate-pulse' : 'text-yellow-400'}`} />
          Streak: {combo}
        </div>
      </header>

      {/* Main Gameplay Screen Layout */}
      <main className="max-w-4xl w-full mx-auto flex-grow flex flex-col lg:flex-row gap-4">
        
        {/* Play highway canvas card */}
        <div className="flex-grow relative aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[350px] bg-gradient-to-b from-sky-200 to-sky-50 rounded-3xl border-4 border-slate-700/10 shadow-inner overflow-hidden p-4 flex justify-between">
          
          {/* Style Injector for scrolling lanes and skidding smoke */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes road-slide-down {
              0% { background-position-y: 0px; }
              100% { background-position-y: 100px; }
            }
            .animate-scrolling-road {
              background: linear-gradient(90deg, #1e293b 0%, #334155 3%, #0f172a 5%, #0f172a 95%, #334155 97%, #1e293b 100%);
              background-size: 100% 100px;
              animation: road-slide-down ${scrollDuration} linear infinite;
            }
            @keyframes smoke-fade {
              0% { transform: scale(0.4) translateY(0); opacity: 0.8; }
              100% { transform: scale(1.6) translateY(20px); opacity: 0; }
            }
            .animate-tire-smoke {
              animation: smoke-fade 0.5s ease-out forwards;
            }
            @keyframes scale-boost {
              0% { transform: scale(1); filter: brightness(1); }
              50% { transform: scale(1.08) translateY(-4px); filter: brightness(1.2); }
              100% { transform: scale(1); filter: brightness(1); }
            }
            .animate-pet-boost {
              animation: scale-boost 0.6s ease-out;
            }
            @keyframes skid-spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .animate-kart-skid {
              animation: skid-spin 0.6s ease-out forwards;
            }
            @keyframes barrier-move {
              0% { transform: translateY(-50px); }
              100% { transform: translateY(400px); }
            }
            .animate-shoulder-element {
              animation: barrier-move 1.2s linear infinite;
            }
          `}} />

          {/* Side barrier shoulders */}
          <div className="absolute inset-y-0 left-0 w-[8%] bg-emerald-600 border-r-4 border-slate-700/10 flex flex-col justify-around overflow-hidden z-10 select-none text-xs">
            <div className="animate-shoulder-element delay-100">🌿</div>
            <div className="animate-shoulder-element delay-500">🪨</div>
          </div>
          <div className="absolute inset-y-0 right-0 w-[8%] bg-emerald-600 border-l-4 border-slate-700/10 flex flex-col justify-around overflow-hidden z-10 select-none text-xs text-right">
            <div className="animate-shoulder-element delay-300">🌸</div>
            <div className="animate-shoulder-element delay-700">🌳</div>
          </div>

          {/* Road highway container */}
          <div className="absolute inset-y-0 left-[8%] right-[8%] animate-scrolling-road z-0">
            {/* Custom dashed yellow lane dividers */}
            <div className="absolute inset-y-0 left-[33%] w-1 bg-dashed border-r border-yellow-400 opacity-60"></div>
            <div className="absolute inset-y-0 left-[66%] w-1 bg-dashed border-r border-yellow-400 opacity-60"></div>
          </div>

          {/* Active Player kart in the Center Lane */}
          <div
            className={`absolute left-[50%] transform -translate-x-1/2 bottom-[14%] z-20 flex flex-col items-center transition-all ${
              isNitroActive ? 'animate-pet-boost' : ''
            } ${
              isSkidding ? 'animate-kart-skid' : ''
            }`}
            style={{ 
              transitionDuration: isNitroActive ? '0.3s' : '0.8s',
              // Visual push ahead on correct, drop back on skids
              bottom: isNitroActive ? '35%' : isSkidding ? '8%' : '14%'
            }}
          >
            {/* Active companion pet seated inside kart */}
            <div className="w-12 h-12 relative animate-float flex items-center justify-center">
              <PlayerAvatar petId={state.activePetId} className="w-full h-full" />
            </div>

            {/* Custom 3D SVG Racing Kart */}
            <div className="relative">
              <svg className="w-16 h-12 drop-shadow-md" viewBox="0 0 60 40" fill="none">
                {/* Rear Spoiler Wings */}
                <rect x="5" y="4" width="50" height="6" rx="2" fill="#ef4444" stroke="#1e293b" strokeWidth="2" />
                <path d="M 12 10 L 8 4 M 48 10 L 52 4" stroke="#1e293b" strokeWidth="2" />
                
                {/* Kart Body chassis */}
                <path d="M 10 24 L 15 10 L 45 10 L 50 24 L 40 32 L 20 32 Z" fill="#facc15" stroke="#1e293b" strokeWidth="2.5" />
                {/* Front Bumper hood */}
                <path d="M 18 32 L 42 32 L 40 36 L 20 36 Z" fill="#ef4444" stroke="#1e293b" strokeWidth="1.5" />
                
                {/* Tires */}
                <rect x="4" y="22" width="8" height="12" rx="2" fill="#1e293b" />
                <rect x="48" y="22" width="8" height="12" rx="2" fill="#1e293b" />
                <rect x="8" y="8" width="6" height="8" rx="1.5" fill="#334155" />
                <rect x="46" y="8" width="6" height="8" rx="1.5" fill="#334155" />
                
                {/* Steering wheel */}
                <circle cx="30" cy="16" r="4" fill="none" stroke="#475569" strokeWidth="2" />
                {/* Race number plate */}
                <rect x="23" y="20" width="14" height="10" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
                <text x="30" y="28" fill="#1e293b" fontSize="8" fontWeight="black" textAnchor="middle">1</text>
              </svg>

              {/* Blue Nitro Thruster Flames (Rear) */}
              {isNitroActive && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
                  <div className="w-2.5 h-7 bg-cyan-400 rounded-full animate-pulse-slow shadow-inner border border-cyan-300"></div>
                  <div className="w-3.5 h-9 bg-blue-500 rounded-full animate-bounce shadow-inner border border-blue-400"></div>
                  <div className="w-2.5 h-7 bg-cyan-400 rounded-full animate-pulse-slow shadow-inner border border-cyan-300"></div>
                </div>
              )}

              {/* Skid Exhaust Smoke Particles */}
              {isSkidding && (
                <div className="absolute -top-4 -left-6 z-10 flex gap-2 animate-tire-smoke">
                  <div className="w-5 h-5 bg-slate-350 rounded-full filter blur-xs opacity-60"></div>
                  <div className="w-7 h-7 bg-slate-300 rounded-full filter blur-sm opacity-50"></div>
                </div>
              )}
            </div>

            {/* Health Shield Indicator overlay */}
            <div className="bg-slate-900/80 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full mt-2 shadow border border-slate-700 flex items-center gap-0.5 whitespace-nowrap">
              <Shield className="w-2.5 h-2.5 fill-white text-rose-500" /> Shield: {baseShield}
            </div>
          </div>

          {/* Left Lane: Opponent #1 (Speedy Slime) */}
          <div
            className="absolute left-[20%] transform -translate-x-1/2 z-20 flex flex-col items-center transition-all duration-500"
            style={{ 
              bottom: `${Math.max(10, Math.min(80, 20 + (opponents[0]?.progress || 0) - playerProgress))}%` 
            }}
          >
            <div className="w-8 h-8 scale-75 animate-bounce-slow flex items-center justify-center">
              <MonsterAvatar monsterId={worldInfo.monsterIds?.[0] || 'muddy_slime'} name={worldInfo.monsterNames?.[0] || 'Tiny Slime'} className="w-full h-full" hideLabel={true} />
            </div>
            <svg className="w-12 h-9 drop-shadow" viewBox="0 0 60 40" fill="none">
              <rect x="5" y="4" width="50" height="6" rx="2" fill="#22c55e" stroke="#1e293b" strokeWidth="2" />
              <path d="M 10 24 L 15 10 L 45 10 L 50 24 L 40 32 L 20 32 Z" fill="#15803d" stroke="#1e293b" strokeWidth="2.5" />
              <rect x="4" y="22" width="8" height="12" rx="2" fill="#1e293b" />
              <rect x="48" y="22" width="8" height="12" rx="2" fill="#1e293b" />
            </svg>
            <span className="text-[7px] font-extrabold bg-slate-800 text-white px-1 py-0.5 rounded-full uppercase mt-1">Slime Kart</span>
          </div>

          {/* Right Lane: Opponent #2 (Turbo Ogre) */}
          <div
            className="absolute left-[80%] transform -translate-x-1/2 z-20 flex flex-col items-center transition-all duration-500"
            style={{ 
              bottom: `${Math.max(10, Math.min(80, 20 + (opponents[1]?.progress || 0) - playerProgress))}%` 
            }}
          >
            <div className="w-8 h-8 scale-75 animate-bounce-slow flex items-center justify-center">
              <MonsterAvatar monsterId="fluffy_ogre" name="Turbo Ogre" className="w-full h-full" hideLabel={true} />
            </div>
            <svg className="w-12 h-9 drop-shadow" viewBox="0 0 60 40" fill="none">
              <rect x="5" y="4" width="50" height="6" rx="2" fill="#a855f7" stroke="#1e293b" strokeWidth="2" />
              <path d="M 10 24 L 15 10 L 45 10 L 50 24 L 40 32 L 20 32 Z" fill="#6b21a8" stroke="#1e293b" strokeWidth="2.5" />
              <rect x="4" y="22" width="8" height="12" rx="2" fill="#1e293b" />
              <rect x="48" y="22" width="8" height="12" rx="2" fill="#1e293b" />
            </svg>
            <span className="text-[7px] font-extrabold bg-slate-800 text-white px-1 py-0.5 rounded-full uppercase mt-1">Ogre Kart</span>
          </div>

          {/* Active Overlay Alerts */}
          {boostIndicator && (
            <div className="absolute inset-x-0 top-[20%] mx-auto w-max bg-amber-500 text-white border-2 border-amber-400 font-black text-xs md:text-sm px-4 py-1.5 rounded-full shadow-lg z-30 animate-bounce-slow">
              {boostIndicator}
            </div>
          )}

          {damageSplash && (
            <div className="absolute inset-x-0 top-[20%] mx-auto w-max bg-rose-600 text-white border-2 border-rose-500 font-black text-xs md:text-sm px-4 py-1.5 rounded-full shadow-lg z-30 animate-bounce-slow">
              {damageSplash}
            </div>
          )}

          {/* Shield Recharge safe overlay */}
          {isRecharging && (
            <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 z-40 animate-fade-in text-center">
              <Card padding="md" className="max-w-xs border-4 border-yellow-400 bg-white">
                <span className="text-4xl animate-bounce inline-block">🛠️</span>
                <h4 className="text-base font-black text-slate-800 mt-2">PIT STOP SPELL</h4>
                <p className="text-xs font-bold leading-normal text-slate-500 mt-1">
                  Casting magical repair charms! Karts are returning to full racing speed.
                </p>
                <div className="mt-3 w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
                  <div className="bg-yellow-500 h-full animate-progress-bar"></div>
                </div>
              </Card>
            </div>
          )}

        </div>

        {/* Side Mini Progress Track Card (checkered flag 🏁 HUD) */}
        <Card padding="md" className="w-full lg:w-44 flex flex-col gap-3 justify-between border-4 border-slate-700/10 shadow-md">
          <div className="text-xs font-black text-slate-500 uppercase tracking-widest text-center border-b border-slate-100 pb-2">
            🏁 Lap Progress
          </div>

          {/* Vertical Progress lines */}
          <div className="flex-grow flex lg:flex-col-reverse justify-around lg:justify-between items-center px-2 py-1 gap-2 min-h-[60px] lg:min-h-[200px] relative">
            {/* Start flag */}
            <span className="text-xs opacity-50 shrink-0 select-none">🚦 Start</span>
            
            {/* The Lane Tube */}
            <div className="flex-grow w-full lg:w-3 bg-slate-100 rounded-full border border-slate-200 relative min-w-[120px] lg:min-w-0 h-4 lg:h-36 overflow-visible shadow-inner flex items-center lg:justify-center">
              
              {/* Player Progress Marker */}
              <div 
                className="absolute w-5 h-5 bg-yellow-400 border border-yellow-600 rounded-full shadow flex items-center justify-center text-[10px] z-30 transition-all duration-300"
                style={{
                  left: typeof window !== 'undefined' && window.innerWidth < 1024 ? `${playerProgress}%` : '50%',
                  bottom: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `${playerProgress}%` : '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                🐱
              </div>

              {/* Slime Monster Progress Marker */}
              <div 
                className="absolute w-5 h-5 bg-emerald-400 border border-emerald-600 rounded-full shadow flex items-center justify-center text-[10px] z-20 transition-all duration-300"
                style={{
                  left: typeof window !== 'undefined' && window.innerWidth < 1024 ? `${opponents[0]?.progress || 0}%` : '50%',
                  bottom: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `${opponents[0]?.progress || 0}%` : '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                🟢
              </div>

              {/* Ogre Monster Progress Marker */}
              <div 
                className="absolute w-5 h-5 bg-purple-400 border border-purple-600 rounded-full shadow flex items-center justify-center text-[10px] z-10 transition-all duration-300"
                style={{
                  left: typeof window !== 'undefined' && window.innerWidth < 1024 ? `${opponents[1]?.progress || 0}%` : '50%',
                  bottom: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `${opponents[1]?.progress || 0}%` : '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                👿
              </div>
            </div>

            {/* Checkered flag goal */}
            <div className="flex flex-col items-center shrink-0">
              <span className="text-lg">🏁</span>
              <span className="text-[8px] font-black text-slate-400 uppercase">Goal</span>
            </div>
          </div>

          <div className="text-center text-[9px] font-bold text-slate-400 leading-normal border-t border-slate-100 pt-2 uppercase">
            Quest Lap {qIndex + 1} / 5
          </div>
        </Card>

      </main>

      {/* Math Scroll scroll scroll */}
      <footer className="max-w-4xl w-full mx-auto flex flex-col gap-3 mt-1.5 sm:mt-3">
        <Card variant="scroll" padding="md" className="flex flex-col gap-3 sm:gap-4 shadow-md bg-[#fdf6e2]">
          
          <div className="flex justify-between items-center text-xs font-extrabold text-amber-900 border-b border-amber-200/50 pb-1.5">
            <span>🧙‍♂️ Nitro Spell Scroll</span>
            <span className="bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
              Equation: {qIndex + 1} / 5
            </span>
          </div>

          <div className="text-center py-0.5 sm:py-1">
            <p className="text-[10px] sm:text-sm font-bold text-amber-800 uppercase tracking-widest">CAST ACCEL CHARM</p>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-800 mt-1 sm:mt-1.5 leading-snug tracking-tight">
              {currentQuestion.question}
            </h3>
          </div>

          {/* Multi Chunky buttons */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {currentQuestion.choices.map((choice, idx) => {
              const isSelected = selectedAnswer === choice;
              let choiceBtnVariant: 'blue' | 'green' | 'pink' | 'yellow' | 'gray' = 'yellow';

              if (isAnswered) {
                if (choice === currentQuestion.correctAnswer) {
                  choiceBtnVariant = 'green';
                } else if (isSelected) {
                  choiceBtnVariant = 'pink';
                } else {
                  choiceBtnVariant = 'gray';
                }
              }

              return (
                <Button
                  key={`choice-${idx}`}
                  variant={choiceBtnVariant}
                  fullWidth
                  onClick={() => handleAnswerSubmit(choice)}
                  disabled={isAnswered}
                  className={`text-base sm:text-xl md:text-2xl py-2 sm:py-3 ${
                    isSelected ? 'ring-4 ring-indigo-400/30' : ''
                  }`}
                >
                  {choice}
                </Button>
              );
            })}
          </div>

        </Card>

        <p className="text-center text-slate-400 text-[10px] font-bold py-0.5">
          🏎️ Solve correctly to trigger Nitro Fire Boosts and conquer the monster racers!
        </p>
      </footer>

      {/* Hints Explanation Modal for incorrect inputs */}
      {incorrectFeedback && (
        <HintModal
          questionData={currentQuestion}
          onClose={handleCloseHint}
        />
      )}

    </div>
  );
}

export default function RacingGamePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-playful-dots">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-spin inline-block">🏎️</span>
          <p className="text-lg font-bold text-slate-500 font-extrabold">Constructing Racing Tracks...</p>
        </div>
      </div>
    }>
      <RacingGameContent />
    </Suspense>
  );
}
