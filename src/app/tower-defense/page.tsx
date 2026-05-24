'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState';
import { Button } from '@/components/UI/Button';
import { Card } from '@/components/UI/Card';
import { mathQuestions, MathQuestion } from '@/data/questions';
import { MonsterAvatar } from '@/components/Battle/MonsterAvatar';
import { PlayerAvatar } from '@/components/Battle/PlayerAvatar';
import { HintModal } from '@/components/Battle/HintModal';
import { ArrowLeft, Star, Zap, Flame, Shield } from 'lucide-react';

interface Invader {
  id: string;
  name: string;
  monsterId: string;
  progress: number; // 0 to 100
  hp: number;
  isDefeated: boolean;
}

import { WORLDS_DATABASE } from '@/data/worlds';

// Math waypoints path coordinates: (x, y) % values relative to parent container
const PATH_WAYPOINTS = [
  { x: 10, y: 15 },   // 0: Spawn Portal
  { x: 35, y: 12 },   // 1
  { x: 65, y: 22 },   // 2
  { x: 78, y: 44 },   // 3
  { x: 55, y: 64 },   // 4
  { x: 25, y: 58 },   // 5
  { x: 15, y: 76 },   // 6
  { x: 44, y: 88 },   // 7
  { x: 80, y: 82 }    // 8: Crystal Base Target!
];

// Linear interpolation to translate slime positions along curved nodes
const getWaypointPosition = (progress: number) => {
  if (progress <= 0) return PATH_WAYPOINTS[0];
  if (progress >= 100) return PATH_WAYPOINTS[PATH_WAYPOINTS.length - 1];

  const totalSegments = PATH_WAYPOINTS.length - 1;
  const segmentProgress = 100 / totalSegments;
  const segmentIdx = Math.floor(progress / segmentProgress);
  const segmentPercent = (progress % segmentProgress) / segmentProgress;

  const start = PATH_WAYPOINTS[segmentIdx];
  const end = PATH_WAYPOINTS[segmentIdx + 1] || start;

  return {
    x: start.x + (end.x - start.x) * segmentPercent,
    y: start.y + (end.y - start.y) * segmentPercent
  };
};

function TowerDefenseContent() {
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

  const [invaders, setInvaders] = useState<Invader[]>([]);
  const [baseShield, setBaseShield] = useState(100);
  const [isRecharging, setIsRecharging] = useState(false);
  const [incorrectFeedback, setIncorrectFeedback] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  // Animations & FX states
  const [activeLaser, setActiveLaser] = useState<{ from: { x: number; y: number }; to: { x: number; y: number } } | null>(null);
  const [activeExplosion, setActiveExplosion] = useState<{ x: number; y: number } | null>(null);
  const [activeProjectile, setActiveProjectile] = useState<{ x: number; y: number } | null>(null);
  const [isCannonRecoiling, setIsCannonRecoiling] = useState(false);
  const [isPetAttacking, setIsPetAttacking] = useState(false);
  const [isHurt, setIsHurt] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [damageSplash, setDamageSplash] = useState<string | null>(null);
  const [combo, setCombo] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);

  // Monitor Game Over Defeat
  useEffect(() => {
    if (isGameOver && baseShield <= 0) {
      setTimeout(() => {
        const finalAccuracy = Math.round((correctCount / 5) * 100);
        router.push(`/results?mode=tower-defense&worldId=${worldId}&levelId=${levelId}&accuracy=0&timeSpent=${timeSpent}&correct=${correctCount}&total=5`);
      }, 2500);
    }
  }, [isGameOver, baseShield, correctCount, timeSpent, worldId, levelId, router]);

  // Initialize Game Data
  useEffect(() => {
    // 1. Filter and choose 5 randomized questions
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

    // 2. Initialize 5 invaders with staggered marching start progress values
    const primaryMonsterName = worldInfo.monsterNames?.[0] || 'Tiny Slime';
    const primaryMonsterId = worldInfo.monsterIds?.[0] || 'muddy_slime';

    const spawnedInvaders: Invader[] = Array.from({ length: 5 }).map((_, i) => ({
      id: `slime-${i}`,
      name: `${primaryMonsterName} #${i + 1}`,
      monsterId: primaryMonsterId,
      progress: -20 - i * 25, // staggered starts
      hp: 100,
      isDefeated: false,
    }));
    setInvaders(spawnedInvaders);
  }, [worldId, worldInfo]);

  // Game timer tracking
  useEffect(() => {
    if (isGameOver) return;
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isGameOver]);

  // Main Ticking march loop (40ms ticks)
  useEffect(() => {
    if (isGameOver || isRecharging || incorrectFeedback || questions.length === 0 || qIndex >= 5) return;

    const interval = setInterval(() => {
      setInvaders(prev => {
        let baseTookDamage = false;

        const updated = prev.map(inv => {
          if (inv.isDefeated) return inv;

          // Increment marching progress slightly (allows pre-spawn staggering to march up to 0)
          const nextProgress = inv.progress + 0.35;

          // Only calculate circle collision and base hits if the monster has emerged from the portal
          if (nextProgress >= 0) {
            const pos = getWaypointPosition(nextProgress);
            const dx = pos.x - 80;
            const dy = (pos.y - 82) * 0.5625; // Normalize for 16:9 aspect-ratio to match visual circle
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance <= 11.5) { // Visual circle radius is 11% of width
              // Touched the defensive circle!
              baseTookDamage = true;
              return { ...inv, progress: nextProgress, isDefeated: true };
            }

            if (nextProgress >= 100) {
              baseTookDamage = true;
              return { ...inv, progress: 100, isDefeated: true };
            }
          }

          return { ...inv, progress: nextProgress };
        });

        if (baseTookDamage) {
          setPetActionDamage();
          setIsHurt(true);
          setIsShaking(true);
          setDamageSplash("-20 Resistance! ⚠️");

          setTimeout(() => {
            setIsHurt(false);
            setIsShaking(false);
            setDamageSplash(null);
          }, 950);

          setBaseShield(prevShield => {
            const nextShield = prevShield - 20;
            if (nextShield <= 0) {
              setIsGameOver(true);
              return 0;
            }
            return nextShield;
          });
        }

        return updated;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [isGameOver, isRecharging, incorrectFeedback, questions, qIndex]);

  // Shield Recharge controller (delay reset)
  useEffect(() => {
    if (isRecharging) {
      const timeout = setTimeout(() => {
        setIsRecharging(false);
        // Reset close slimes backward in path so they don't immediately hit again
        setInvaders(prev => prev.map(inv => {
          if (!inv.isDefeated && inv.progress > 40) {
            return { ...inv, progress: -15 };
          }
          return inv;
        }));
      }, 2200);
      return () => clearTimeout(timeout);
    }
  }, [isRecharging]);

  const setPetActionDamage = () => {
    // Companion registers brief flash or jump upon base hit
    setIsPetAttacking(true);
    setTimeout(() => setIsPetAttacking(false), 400);
  };

  if (isLoading || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-playful-dots">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-bounce inline-block">🏰</span>
          <p className="text-lg font-bold text-slate-500 font-extrabold">Constructing Math Lasers...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[qIndex] || questions[0];

  // Submit Answer Trigger
  const handleAnswerSubmit = (answer: string) => {
    if (isAnswered || isGameOver) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    const isCorrectAns = answer === currentQuestion.correctAnswer;

    if (isCorrectAns) {
      // 1. Correct Answer: Zap lead monster!
      setCorrectCount(prev => prev + 1);
      setCombo(prev => prev + 1);
      setIsPetAttacking(true);
      setIsCannonRecoiling(true);

      // Find leading visible invader
      const activeInvaders = invaders.filter(inv => !inv.isDefeated && inv.progress > 0);
      const leadInvader = activeInvaders.reduce((lead, curr) => {
        if (!lead) return curr;
        return curr.progress > lead.progress ? curr : lead;
      }, null as Invader | null);

      if (leadInvader) {
        const slimePos = getWaypointPosition(leadInvader.progress);
        
        // Spawn flying projectile at Spell Cannon muzzle coordinates (approx 74, 76)
        setActiveProjectile({ x: 74, y: 76 });
        
        // Let it fly to target coordinate using CSS transitions over 350ms
        setTimeout(() => {
          setActiveProjectile(slimePos);
        }, 50);

        // Terminate slime after projectile hits
        setTimeout(() => {
          setActiveProjectile(null);
          setIsCannonRecoiling(false);
          setActiveExplosion(slimePos);
          setIsPetAttacking(false);
          setInvaders(prev => prev.map(inv => {
            if (inv.id === leadInvader.id) return { ...inv, isDefeated: true };
            return inv;
          }));
        }, 400);

        // Clear explosion particles
        setTimeout(() => {
          setActiveExplosion(null);
        }, 950);

      } else {
        // No active slimes in grid, zap spawn portal directly!
        setActiveProjectile({ x: 74, y: 76 });
        setTimeout(() => {
          setActiveProjectile(PATH_WAYPOINTS[0]);
        }, 50);

        setTimeout(() => {
          setActiveProjectile(null);
          setIsCannonRecoiling(false);
          setActiveExplosion(PATH_WAYPOINTS[0]);
          setIsPetAttacking(false);
        }, 400);

        setTimeout(() => {
          setActiveExplosion(null);
        }, 950);
      }

      // Next Question transition
      setTimeout(() => {
        advanceQuestion();
      }, 1000);

    } else {
      // 2. Incorrect Answer: User gets "HURT"!
      setCombo(0);
      setIsHurt(true);
      setIsShaking(true);
      setDamageSplash("-20 Resistance! ⚠️");

      // Surge active monsters forward closer to the base!
      setInvaders(prev => {
        let baseTookDamage = false;
        const updated = prev.map(inv => {
          if (inv.isDefeated) return inv;
          
          // leap forward by 15% progress units
          const nextProgress = Math.min(100, inv.progress + 15);
          if (nextProgress >= 0) {
            const pos = getWaypointPosition(nextProgress);
            const dx = pos.x - 80;
            const dy = (pos.y - 82) * 0.5625; // Normalize for 16:9 aspect-ratio to match visual circle
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance <= 11.5 || nextProgress >= 100) {
              baseTookDamage = true;
              return { ...inv, progress: nextProgress, isDefeated: true };
            }
          }
          return { ...inv, progress: nextProgress };
        });

        if (baseTookDamage) {
          setBaseShield(prevShield => {
            const nextShield = prevShield - 20;
            if (nextShield <= 0) {
              setIsGameOver(true);
              return 0;
            }
            return nextShield;
          });
        }

        return updated;
      });

      // Reduce shield HP directly by 20 points
      setBaseShield(prevShield => {
        const nextShield = prevShield - 20;
        if (nextShield <= 0) {
          setIsGameOver(true);
          return 0;
        }
        return nextShield;
      });

      // Clear alerts and open explanation hint modal after 950ms
      setTimeout(() => {
        setIsHurt(false);
        setIsShaking(false);
        setDamageSplash(null);
        setIncorrectFeedback(true);
      }, 950);
    }
  };

  const advanceQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);

    if (qIndex === 4) {
      // Finished Game! Route to Results screen where rewards are calculated and committed
      const finalAccuracy = Math.round((correctCount / 5) * 100);
      
      router.push(`/results?mode=tower-defense&worldId=${worldId}&levelId=${levelId}&accuracy=${finalAccuracy}&timeSpent=${timeSpent}&correct=${correctCount}&total=5`);
    } else {
      setQIndex(prev => prev + 1);
    }
  };

  const handleCloseHint = () => {
    setIncorrectFeedback(false);
    advanceQuestion();
  };

  return (
    <div className="min-h-screen bg-playful-dots py-4 px-4 flex flex-col justify-between select-none">
      
      {/* Header HUD */}
      <header className="max-w-4xl w-full mx-auto flex items-center justify-between mb-2">
        <Link href={`/world-map?worldId=${worldId}`}>
          <Button variant="gray" size="sm" className="flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Exit
          </Button>
        </Link>

        {/* Level stats */}
        <div className="text-center">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tower Defense</span>
          <h2 className="text-base font-black text-slate-800 flex items-center gap-1">
            🏰 Defend the Crystals (Lvl {levelId})
          </h2>
        </div>

        {/* Combo Multiplier */}
        <div className="flex items-center gap-1.5 bg-indigo-100 border-2 border-indigo-300 text-indigo-800 px-3.5 py-1 rounded-full font-black text-xs shadow-sm">
          <Flame className={`w-4 h-4 ${combo > 0 ? 'text-amber-500 fill-amber-500 animate-pulse' : 'text-indigo-400'}`} />
          Combo: {combo}
        </div>
      </header>

      {/* Main Playing Arena Layout */}
      <main className="max-w-4xl w-full mx-auto flex-grow flex flex-col gap-3">
        
        {/* Play Canvas Container */}
        <div className={`relative w-full aspect-[4/3] md:aspect-[16/9] bg-gradient-to-b from-sky-100 to-emerald-50 rounded-3xl border-4 transition-all duration-200 overflow-hidden flex flex-col justify-between p-4 ${
          isHurt 
            ? 'border-red-500 ring-8 ring-red-500/20' 
            : 'border-slate-700/10 shadow-inner'
        } ${
          isShaking 
            ? 'animate-canvas-shake' 
            : ''
        }`}>
          {/* Custom shake and float keyframe stylings */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes canvas-shake {
              0% { transform: translate(1px, 1px) rotate(0deg); }
              10% { transform: translate(-1px, -2px) rotate(-1deg); }
              20% { transform: translate(-3px, 0px) rotate(1deg); }
              30% { transform: translate(0px, 2px) rotate(0deg); }
              40% { transform: translate(1px, -1px) rotate(1deg); }
              50% { transform: translate(-1px, 2px) rotate(-1deg); }
              60% { transform: translate(-3px, 1px) rotate(0deg); }
              70% { transform: translate(2px, 1px) rotate(-1deg); }
              80% { transform: translate(-1px, -1px) rotate(1deg); }
              90% { transform: translate(2px, 2px) rotate(0deg); }
              100% { transform: translate(1px, -2px) rotate(-1deg); }
            }
            .animate-canvas-shake {
              animation: canvas-shake 0.4s ease-in-out infinite;
            }
            @keyframes float-damage {
              0% { transform: translateY(0) scale(1); opacity: 1; }
              50% { transform: translateY(-15px) scale(1.1); opacity: 1; }
              100% { transform: translateY(-30px) scale(0.9); opacity: 0; }
            }
            .animate-damage-float {
              animation: float-damage 0.9s ease-out forwards;
            }
            @keyframes shockwave {
              0% { transform: scale(0.2); opacity: 1; }
              100% { transform: scale(1.8); opacity: 0; }
            }
            .animate-shockwave {
              animation: shockwave 0.5s ease-out forwards;
            }
            @keyframes float-spark-1 {
              0% { transform: translate(0, 0) scale(0.5); opacity: 1; }
              100% { transform: translate(-25px, -30px) scale(1.2); opacity: 0; }
            }
            .animate-float-spark-1 {
              animation: float-spark-1 0.6s ease-out forwards;
            }
            @keyframes float-spark-2 {
              0% { transform: translate(0, 0) scale(0.5); opacity: 1; }
              100% { transform: translate(30px, 25px) scale(1.2); opacity: 0; }
            }
            .animate-float-spark-2 {
              animation: float-spark-2 0.6s ease-out forwards;
            }
            @keyframes float-spark-3 {
              0% { transform: translate(0, 0) scale(0.5); opacity: 1; }
              100% { transform: translate(25px, -30px) scale(1.2); opacity: 0; }
            }
            .animate-float-spark-3 {
              animation: float-spark-3 0.6s ease-out forwards;
            }
            @keyframes spin-slow {
              0% { transform: translate(-50%, -50%) rotate(0deg); }
              100% { transform: translate(-50%, -50%) rotate(360deg); }
            }
            .animate-spin-slow {
              animation: spin-slow 15s linear infinite;
            }
            @keyframes pulse-slow {
              0%, 100% { opacity: 0.15; }
              50% { opacity: 0.35; }
            }
            .animate-pulse-slow {
              animation: pulse-slow 3s ease-in-out infinite;
            }
          `}} />

          {/* Red inner vignette overlay when hurt */}
          {isHurt && (
            <div className="absolute inset-0 bg-red-500/20 border-8 border-red-500 rounded-3xl pointer-events-none z-40 animate-pulse"></div>
          )}

          {/* Floating red damage splash banner */}
          {damageSplash && (
            <div className="absolute right-[12%] bottom-[35%] z-50 animate-damage-float text-red-600 font-black text-xs md:text-sm drop-shadow bg-white/95 px-3 py-1.5 rounded-full border-2 border-red-400">
              {damageSplash}
            </div>
          )}

          {/* Top-left Defensive Stats HUD overlay */}
          <div className="absolute left-4 top-4 z-30 flex flex-col gap-1 drop-shadow-md">
            <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-xs px-3.5 py-1.5 rounded-2xl border border-white/20">
              <Shield className="w-4 h-4 text-rose-400 fill-rose-500" />
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-rose-300 uppercase tracking-wider">Castle Resistance</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="w-24 h-2 bg-slate-750 rounded-full overflow-hidden border border-slate-600/50 shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-rose-500 to-amber-500 transition-all duration-300"
                      style={{ width: `${baseShield}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] font-extrabold text-white">{baseShield}/100</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle grid background grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-[size:20px_20px] opacity-30"></div>

          {/* SVG Marching dashed pathway */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-dashed" stroke="#cbd5e1" strokeWidth="8" strokeDasharray="16 16" strokeLinecap="round">
            <path
              d={`M ${PATH_WAYPOINTS[0].x}% ${PATH_WAYPOINTS[0].y}% 
                 C ${PATH_WAYPOINTS[1].x}% ${PATH_WAYPOINTS[1].y}%, ${PATH_WAYPOINTS[2].x}% ${PATH_WAYPOINTS[2].y}%, ${PATH_WAYPOINTS[3].x}% ${PATH_WAYPOINTS[3].y}%
                 S ${PATH_WAYPOINTS[5].x}% ${PATH_WAYPOINTS[5].y}%, ${PATH_WAYPOINTS[6].x}% ${PATH_WAYPOINTS[6].y}%
                 S ${PATH_WAYPOINTS[7].x}% ${PATH_WAYPOINTS[7].y}%, ${PATH_WAYPOINTS[8].x}% ${PATH_WAYPOINTS[8].y}%`}
              fill="none"
            />
          </svg>

          {/* Spawn Portal Node (Top-Left) */}
          <div className="absolute left-[5%] top-[10%] z-20 flex flex-col items-center">
            <div className="w-10 h-10 bg-indigo-500/20 border-4 border-indigo-400 rounded-full flex items-center justify-center animate-pulse-slow">
              🌀
            </div>
            <span className="text-[9px] font-black bg-slate-800 text-white px-2 py-0.5 rounded-full uppercase tracking-wider scale-90">Portal</span>
          </div>

          {/* Defensive Magical Circle Boundary (Radius 15%) */}
          <div 
            className="absolute w-[22%] aspect-square border-4 border-indigo-400/40 border-dashed rounded-full pointer-events-none z-10 flex items-center justify-center animate-spin-slow"
            style={{
              left: '80%',
              top: '82%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Soft magic pulsing core */}
            <div className="absolute inset-1 bg-indigo-500/[0.04] rounded-full animate-pulse-slow"></div>
          </div>

          {/* Magic Base Castle Towers (Bottom-Right) */}
          <div className={`absolute right-[12%] bottom-[10%] z-20 flex flex-col items-center gap-1 scale-95 md:scale-105 transition-all duration-200 ${
            isHurt ? 'animate-bounce scale-110 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]' : ''
          }`}>
            {/* Active Companion Pet */}
            <div className="animate-float">
              <PlayerAvatar petId={state.activePetId} />
            </div>
            
            {/* Castle Wizard Defensive Tower */}
            <div className={`w-16 h-20 bg-slate-200 border-4 rounded-2xl flex flex-col items-center justify-between shadow-xl relative overflow-visible transition-all duration-200 ${
              isHurt ? 'border-red-500 bg-red-100' : 'border-slate-700/20'
            }`}>
              {/* Castle Merlons battlements atop the castle tower */}
              <div className="absolute -top-2 flex gap-1 justify-center w-full px-1">
                <div className="w-3 h-3 bg-slate-300 border border-slate-400 rounded-sm"></div>
                <div className="w-3 h-3 bg-slate-300 border border-slate-400 rounded-sm"></div>
                <div className="w-3 h-3 bg-slate-300 border border-slate-400 rounded-sm"></div>
              </div>
              
              {/* Wizard Tower Magic window slits */}
              <div className="flex gap-1.5 justify-center mt-3.5">
                <div className="w-2.5 h-3 bg-indigo-950/80 rounded-t-full border border-indigo-400/50"></div>
                <div className="w-2.5 h-3 bg-indigo-950/80 rounded-t-full border border-indigo-400/50"></div>
              </div>
              
              {/* Glowing crystal */}
              <div className="text-3xl animate-bounce-slow drop-shadow-sm z-10 mb-2">💎</div>

              {/* Base Health indicator */}
              <div className="absolute -bottom-2 bg-rose-500 border border-rose-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full shadow flex items-center gap-0.5 whitespace-nowrap">
                <Shield className="w-2.5 h-2.5 fill-white" /> HP: {baseShield}
              </div>
            </div>
          </div>

          {/* Dynamic Recoiling Spell Cannon mounting */}
          <div className={`absolute right-[26%] bottom-[13%] z-25 transition-all ${
            isCannonRecoiling 
              ? '-translate-x-3 translate-y-1.5 rotate-12 scale-90 duration-75' 
              : 'duration-300'
          }`}>
            <svg className="w-12 h-10 drop-shadow-lg" viewBox="0 0 50 40" fill="none">
              {/* Cannon Wheel */}
              <circle cx="15" cy="28" r="8" fill="#475569" stroke="#1e293b" strokeWidth="2" />
              <circle cx="15" cy="28" r="3" fill="#cbd5e1" />
              
              {/* Cannon Carriage Body */}
              <path d="M 5 22 L 30 14 L 32 24 L 8 28 Z" fill="#334155" stroke="#1e293b" strokeWidth="2" />
              {/* Cannon Muzzle Barrel pointing up-left */}
              <path d="M 28 10 L 42 6 L 44 14 L 30 18 Z" fill="#475569" stroke="#1e293b" strokeWidth="2.5" />
              {/* Golden Cannon Ring tip */}
              <ellipse cx="36" cy="12" rx="3" ry="5" fill="#facc15" stroke="#1e293b" strokeWidth="1" transform="rotate(15 36 12)" />
              
              {/* Cannon Fuse spark */}
              <path d="M 8 16 Q 4 10 2 12" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
              <circle cx="2" cy="12" r="1.5" fill="#f97316" className="animate-ping" />
            </svg>
          </div>

          {/* Golden Spell projectile ball flying along the grid */}
          {activeProjectile && (
            <div
              className="absolute w-7 h-7 bg-gradient-to-r from-amber-400 to-yellow-300 border-2 border-amber-600 rounded-full shadow-lg z-35 flex items-center justify-center text-xs pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out animate-pulse"
              style={{ left: `${activeProjectile.x}%`, top: `${activeProjectile.y}%` }}
            >
              <span className="animate-spin text-[10px]">⚡</span>
            </div>
          )}

          {/* Invading Slimes marching down the coordinates (Small-To-Big portal scaling) */}
          {invaders.map((inv) => {
            if (inv.isDefeated || inv.progress < 0) return null;

            const pos = getWaypointPosition(inv.progress);

            // Scale up dynamically from portal (emerges small to big for progress < 20)
            const scaleMultiplier = inv.progress < 20
              ? 0.25 + (inv.progress / 20) * 0.75
              : 1.0;

            return (
              <div
                key={inv.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-75 flex flex-col items-center cursor-pointer"
                style={{ 
                  left: `${pos.x}%`, 
                  top: `${pos.y}%`,
                  transform: `translate(-50%, -50%) scale(${scaleMultiplier})`
                }}
              >
                {/* Slimy Avatar */}
                <div className="w-11 h-11">
                  <MonsterAvatar monsterId={inv.monsterId} name={inv.name} />
                </div>
                {/* Invader Mini HP Bar */}
                <div className="w-8 h-1.5 bg-slate-200 border border-slate-300 rounded-full overflow-hidden mt-0.5 shadow-inner">
                  <div className="h-full bg-emerald-400" style={{ width: '100%' }}></div>
                </div>
              </div>
            );
          })}

          {/* SVG laser firing zapping overlays */}
          {activeLaser && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-30">
              <line
                x1={`${activeLaser.from.x}%`}
                y1={`${activeLaser.from.y}%`}
                x2={`${activeLaser.to.x}%`}
                y2={`${activeLaser.to.y}%`}
                stroke="#6366f1"
                strokeWidth="6"
                strokeLinecap="round"
                className="animate-pulse"
              />
              <line
                x1={`${activeLaser.from.x}%`}
                y1={`${activeLaser.from.y}%`}
                x2={`${activeLaser.to.x}%`}
                y2={`${activeLaser.to.y}%`}
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          )}

          {/* Dynamic Laser/Cannon explosion pops with expanding shockwaves */}
          {activeExplosion && (
            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none flex items-center justify-center"
              style={{ left: `${activeExplosion.x}%`, top: `${activeExplosion.y}%` }}
            >
              {/* Central explosive blast bubble */}
              <div className="text-5xl animate-bounce-fast z-10 drop-shadow-md">💥</div>
              
              {/* Animated expanding magical shockwave rings */}
              <div className="absolute w-20 h-20 border-4 border-indigo-400 rounded-full animate-shockwave opacity-80"></div>
              <div className="absolute w-12 h-12 border-2 border-amber-300 rounded-full animate-shockwave delay-100 opacity-60"></div>
              
              {/* Floating magic spark particles */}
              <div className="absolute -top-7 -left-7 text-sm animate-float-spark-1">✨</div>
              <div className="absolute -bottom-7 -right-7 text-sm animate-float-spark-2">🌟</div>
              <div className="absolute top-7 -right-7 text-sm animate-float-spark-3">⚡</div>
            </div>
          )}

          {/* Friendly Shield Recharging Overlay */}
          {isRecharging && (
            <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 z-40 animate-fade-in text-center">
              <Card padding="md" className="max-w-xs border-4 border-indigo-400 bg-white">
                <span className="text-4xl animate-spin inline-block">🪄</span>
                <h4 className="text-lg font-black text-indigo-900 mt-2">SHIELD RECHARGING</h4>
                <p className="text-xs font-bold leading-normal text-slate-500 mt-1">
                  Casting defensive shield restoration spells! Crystals are returning to maximum power.
                </p>
                <div className="mt-3 w-full bg-slate-100 rounded-full h-3.5 overflow-hidden border border-slate-200">
                  <div className="bg-indigo-500 h-full animate-progress-bar"></div>
                </div>
              </Card>
            </div>
          )}

          {/* Defeat/Game Over Screen Overlay */}
          {isGameOver && baseShield <= 0 && (
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 z-45 animate-fade-in text-center">
              <Card padding="lg" className="max-w-sm border-4 border-red-500 bg-white flex flex-col items-center gap-3">
                <span className="text-5xl animate-bounce">💥</span>
                <h4 className="text-xl font-black text-red-600 uppercase tracking-wide">TOWER DESTROYED</h4>
                <p className="text-xs font-bold leading-normal text-slate-500">
                  Your defensive resistance has been completely depleted by the invaders!
                </p>
                <div className="text-[10px] font-extrabold bg-red-50 text-red-500 px-3 py-1 rounded-full border border-red-200 uppercase mt-1">
                  Returning to Spell Book...
                </div>
              </Card>
            </div>
          )}

          {/* Decors (Rocks & Grasses) */}
          <div className="absolute left-[30%] top-[40%] text-xl opacity-30 select-none">🪨</div>
          <div className="absolute left-[80%] top-[25%] text-xl opacity-30 select-none">🍄</div>
          <div className="absolute left-[50%] top-[80%] text-xl opacity-30 select-none">🌿</div>
          <div className="absolute left-[20%] top-[85%] text-xl opacity-30 select-none">🌳</div>

        </div>

        {/* Math Question Scroll panel */}
        <Card variant="scroll" padding="md" className="flex flex-col gap-4 shadow-md relative bg-[#fdf6e2]">
          
          {/* Question Index Progress */}
          <div className="flex justify-between items-center text-xs font-extrabold text-amber-900 border-b border-amber-200/50 pb-1.5">
            <span>🧙‍♂️ Shield Spell Scroll</span>
            <span className="bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
              Progress: {qIndex + 1} / 5
            </span>
          </div>

          {/* Math spell math Parchment question */}
          <div className="text-center py-1">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-widest">CAST DEFENSE CHARM</p>
            <h3 className="text-3xl md:text-4xl font-black text-slate-800 mt-1.5 leading-snug tracking-tight">
              {currentQuestion.question}
            </h3>
          </div>

          {/* Grid of Choices Chunky Buttons */}
          <div className="grid grid-cols-2 gap-3">
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
                  className={`text-xl md:text-2xl py-3 ${
                    isSelected ? 'ring-4 ring-indigo-400/30' : ''
                  }`}
                >
                  {choice}
                </Button>
              );
            })}
          </div>

        </Card>

      </main>

      {/* Spacing footer */}
      <footer className="text-center text-slate-400 text-[10px] font-bold py-1">
        🏰 Tap the correct answer to zaps invaders with math magic lasers!
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

export default function TowerDefensePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-playful-dots">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-spin inline-block">🏰</span>
          <p className="text-lg font-bold text-slate-500 font-extrabold">Constructing Math Lasers...</p>
        </div>
      </div>
    }>
      <TowerDefenseContent />
    </Suspense>
  );
}
