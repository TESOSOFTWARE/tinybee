'use client';

import React, { useState, useEffect, Suspense, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState';
import { Button } from '@/components/UI/Button';
import { Card } from '@/components/UI/Card';
import { mathQuestions, Question } from '@/data/questions';
import { englishQuestions } from '@/data/english_questions';
import { HintModal } from '@/components/Battle/HintModal';
import { getQuestionsForGame } from '@/data/video_quests';
import { playBGM, stopBGM } from '@/utils/audio';
import { speakText, stopSpeech } from '@/utils/tts';
import { getScaledQuestions } from '@/utils/difficulty';
import { ArrowLeft, Flame, Shield, Volume2, VolumeX } from 'lucide-react';
import { WORLDS_DATABASE } from '@/data/worlds';
import { VocabIcon } from '@/components/UI/VocabIcon';

// =========================================================================
// 🛠️ TOWER DEFENSE GLOBAL DIFFICULTY CONFIGURATION
// =========================================================================
// Feel free to adjust these multipliers and parameters manually!
// - HP_MULTIPLIER: Increase to make slimes tankier (e.g. 1.2 for 20% more HP)
// - SPEED_MULTIPLIER: Increase to make slimes run faster (e.g. 1.2 for 20% faster)
// - SPACING_MULTIPLIER: Lower to make slimes spawn closer together (e.g. 0.8)
// - TURRET_FIRE_COOLDOWN_MS: Lower to make turrets shoot faster (e.g. 600)
// - TURRET_BULLET_DAMAGE: Increase to make bullets deal more damage (e.g. 35)
// =========================================================================
export const TD_DIFFICULTY_CONFIG = {
  HP_MULTIPLIER: 1.0,
  SPEED_MULTIPLIER: 1.2,
  SPACING_MULTIPLIER: 1.0,
  TURRET_FIRE_COOLDOWN_MS: 800,
  TURRET_BULLET_DAMAGE: 25,
};

// Winding cobblestone road percentage waypoints
const PATH_WAYPOINTS = [
  { x: 10, y: 15 },   // 0: Spawn Portal
  { x: 35, y: 12 },   // 1
  { x: 65, y: 22 },   // 2
  { x: 78, y: 44 },   // 3
  { x: 55, y: 64 },   // 4
  { x: 25, y: 58 },   // 5
  { x: 15, y: 76 },   // 6
  { x: 44, y: 88 },   // 7
  { x: 80, y: 82 }    // 8: Golden Crystal Target!
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

// Translate pathway percentages into exact 1024x576 Canvas pixels
const getCanvasWaypointPosition = (progress: number) => {
  const pctPos = getWaypointPosition(progress);
  return {
    x: (pctPos.x / 100) * 1024,
    y: (pctPos.y / 100) * 576
  };
};

// Monster themed emojis mapping
const MONSTER_EMOJIS: { [key: string]: string } = {
  muddy_slime: '🟢',
  fire_slime: '🔴',
  golden_slime: '🟡',
  forest_dryad: '🌱',
  crystal_golem: '💎',
  shadow_demon: '👿',
  lava_slime: '🌋',
  deep_sea_serpent: '🐍',
  storm_gryphon: '🦅',
  underworld_reaper: '💀',
  goblin_scout: '👺',
  orc_warrior: '👹',
  default: '👾'
};

// Canvas Tower Defense structural models
interface CanvasTower {
  x: number;
  y: number;
  angle: number;
  lastFire: number;
}

interface CanvasBullet {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface CanvasInvader {
  id: string;
  progress: number;
  hp: number;
  maxHp: number;
  monsterId: string;
  name: string;
  x: number;
  y: number;
  isDefeated: boolean;
}

interface CanvasParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
}

function TowerDefenseContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { state, pets, isLoading } = useGameState();

  const worldId = searchParams.get('worldId') || 'g1-addition';
  const levelId = parseInt(searchParams.get('levelId') || '1', 10);
  const worldInfo = WORLDS_DATABASE[worldId] || WORLDS_DATABASE['g1-addition'];

  // Game core state trackers
  const [questions, setQuestions] = useState<Question[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const [baseShield, setBaseShield] = useState(100);
  const [isRecharging, setIsRecharging] = useState(false);
  const [incorrectFeedback, setIncorrectFeedback] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  // HUD stats
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [monstersLeft, setMonstersLeft] = useState(12);
  const [isQuestionsCompleted, setIsQuestionsCompleted] = useState(false);

  // Visual effects toggles
  const [isHurt, setIsHurt] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [damageSplash, setDamageSplash] = useState<string | null>(null);

  // Audio state
  const [isBgmOn, setIsBgmOn] = useState(true);

  // Canvas Refs & Game Engine States
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const towersRef = useRef<CanvasTower[]>([]);
  const bulletsRef = useRef<CanvasBullet[]>([]);
  const invadersRef = useRef<CanvasInvader[]>([]);
  const particlesRef = useRef<CanvasParticle[]>([]);

  // Coordinates in 1024x576 pixel space
  const playerPosRef = useRef<{ x: number; y: number }>({ x: 512, y: 288 });
  const targetPosRef = useRef<{ x: number; y: number }>({ x: 512, y: 288 });
  const portalRotationRef = useRef(0);
  const victoryTriggeredRef = useRef(false);

  // Map the cute pet emoji
  const petEmoji = pets.find(p => p.id === state.activePetId)?.emoji || '🐝';

  // Map the monster emoji
  const primaryMonsterId = worldInfo.monsterIds?.[0] || 'muddy_slime';
  const invaderEmoji = MONSTER_EMOJIS[primaryMonsterId] || MONSTER_EMOJIS.default;

  // Background Music Controller
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

  // Monitor Defeat Redirection
  useEffect(() => {
    if (isGameOver && baseShield <= 0) {
      setTimeout(() => {
        router.push(`/results?mode=tower-defense&worldId=${worldId}&levelId=${levelId}&accuracy=0&timeSpent=${timeSpent}&correct=${correctCount}&total=5`);
      }, 2500);
    }
  }, [isGameOver, baseShield, correctCount, timeSpent, worldId, levelId, router]);

  // Monitor Victory Redirection (when all monsters are cleared)
  useEffect(() => {
    if (questions.length > 0 && monstersLeft === 0 && !isGameOver && !victoryTriggeredRef.current) {
      victoryTriggeredRef.current = true;
      const totalFaced = isQuestionsCompleted ? 5 : Math.max(1, qIndex);
      const finalAccuracy = Math.round((correctCount / totalFaced) * 100);
      router.push(`/results?mode=tower-defense&worldId=${worldId}&levelId=${levelId}&accuracy=${finalAccuracy}&timeSpent=${timeSpent}&correct=${correctCount}&total=${totalFaced}`);
    }
  }, [questions, monstersLeft, isGameOver, correctCount, timeSpent, worldId, levelId, router, qIndex, isQuestionsCompleted]);

  // Initialize Curriculum Level Data
  useEffect(() => {
    const gradeVal = worldInfo.grade;
    const topicName = worldInfo.topicId;

    const filtered = getQuestionsForGame(
      worldInfo.subject || 'english',
      gradeVal,
      levelId,
      topicName,
      mathQuestions,
      englishQuestions
    );
    const scaled = getScaledQuestions(filtered, levelId, 5);
    setQuestions(scaled);

    const primaryMonsterName = worldInfo.monsterNames?.[0] || 'Tiny Slime';

    const totalMonsters = 12;
    setMonstersLeft(totalMonsters);
    setIsQuestionsCompleted(false);
    victoryTriggeredRef.current = false;

    // Dynamic HP and Spacing difficulty scaling (steadily scales all the way up to Level 10 for an ultimate high-difficulty end-game challenge)
    const monsterHpMax = Math.round((70 + levelId * 13) * TD_DIFFICULTY_CONFIG.HP_MULTIPLIER); // Level 1 = 83 HP, Level 5 = 135 HP, Level 10 = 200 HP!
    const staggerProgressGap = Math.max(16, Math.round((44 - levelId * 2.8) * TD_DIFFICULTY_CONFIG.SPACING_MULTIPLIER)); // Level 1 = 41.2 spacing, Level 5 = 30 spacing, Level 10 = 16 spacing (tight train!)

    // Staggered spawning start positions along curved route path
    const spawnedInvaders: CanvasInvader[] = Array.from({ length: totalMonsters }).map((_, i) => ({
      id: `invader-${i}`,
      name: `${primaryMonsterName} #${i + 1}`,
      monsterId: primaryMonsterId,
      progress: -20 - i * staggerProgressGap, // pre-spawn stagger delay
      hp: monsterHpMax,
      maxHp: monsterHpMax,
      x: 0,
      y: 0,
      isDefeated: false,
    }));
    invadersRef.current = spawnedInvaders;

    // Clear other refs
    towersRef.current = [];
    bulletsRef.current = [];
    particlesRef.current = [];
    playerPosRef.current = { x: 819.2, y: 472.3 }; // Starts close to base crystal
    targetPosRef.current = { x: 819.2, y: 472.3 };
  }, [worldId, worldInfo, primaryMonsterId]);

  // Game play timer tick
  useEffect(() => {
    if (isGameOver) return;
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isGameOver]);

  // Auto-speak spells when questions refresh
  const currentQuestion = questions[qIndex] || questions[0];
  useEffect(() => {
    if (currentQuestion) {
      speakText(currentQuestion.question, worldInfo.subject);
    }
    return () => {
      stopSpeech();
    };
  }, [currentQuestion, worldInfo.subject]);

  // Real-time Canvas HTML5 2D Game Engine Update & Draw Loop (60fps requestAnimationFrame)
  useEffect(() => {
    let animationFrameId: number;

    const updateAndDraw = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        animationFrameId = requestAnimationFrame(updateAndDraw);
        return;
      }
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        animationFrameId = requestAnimationFrame(updateAndDraw);
        return;
      }

      // 1. UPDATE GAME OBJECTS (Only if game is active, not paused by hint mod)
      if (!isGameOver && !isRecharging && !incorrectFeedback && questions.length > 0) {

        // A. Glide Player Pet to touch target coordinates
        const px = playerPosRef.current.x;
        const py = playerPosRef.current.y;
        const tx = targetPosRef.current.x;
        const ty = targetPosRef.current.y;
        const dx = tx - px;
        const dy = ty - py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const petGlideSpeed = 7.5; // smooth gliding pixels per frame
        if (dist > petGlideSpeed) {
          playerPosRef.current.x += (dx / dist) * petGlideSpeed;
          playerPosRef.current.y += (dy / dist) * petGlideSpeed;
        } else {
          playerPosRef.current.x = tx;
          playerPosRef.current.y = ty;
        }

        // B. Update Invading Monsters Marching Progress
        let baseDamaged = false;
        invadersRef.current = invadersRef.current.map(inv => {
          if (inv.isDefeated) return inv;

          // Increment marching progress slightly (staggered delay flows into portal - steadily scales all the way to Level 10)
          const speedFactor = (0.05 + levelId * 0.0085) * TD_DIFFICULTY_CONFIG.SPEED_MULTIPLIER; // Level 1 = 0.0585 units, Level 5 = 0.0925 units, Level 10 = 0.135 progress units per frame!
          const nextProgress = inv.progress + speedFactor;

          if (nextProgress >= 0) {
            const canvasPos = getCanvasWaypointPosition(nextProgress);
            inv.x = canvasPos.x;
            inv.y = canvasPos.y;

            // Collision check: Reached crystal base target node at index 8
            if (nextProgress >= 100) {
              baseDamaged = true;
              setMonstersLeft(prev => Math.max(0, prev - 1));
              return { ...inv, progress: 100, isDefeated: true };
            }
          }

          return { ...inv, progress: nextProgress };
        });

        if (baseDamaged) {
          triggerBaseDamage();
        }

        // C. Update Towers aiming and automatic targeting core
        const now = Date.now();
        towersRef.current.forEach(tower => {
          // Identify nearest active enemy within range
          let nearestEnemy: CanvasInvader | null = null;
          let minDist = Infinity;

          for (const inv of invadersRef.current) {
            if (inv.isDefeated || inv.progress < 0) continue;
            const tdx = inv.x - tower.x;
            const tdy = inv.y - tower.y;
            const distSq = Math.sqrt(tdx * tdx + tdy * tdy);
            if (distSq < 280 && distSq < minDist) {
              minDist = distSq;
              nearestEnemy = inv;
            }
          }

          if (nearestEnemy) {
            // Track angle towards targeted monster
            const angle = Math.atan2(nearestEnemy.y - tower.y, nearestEnemy.x - tower.x);
            tower.angle = angle;

            // Auto-fire bullet projectile (cooled down based on config)
            if (now - tower.lastFire > TD_DIFFICULTY_CONFIG.TURRET_FIRE_COOLDOWN_MS) {
              const bulletSpeed = 9;
              bulletsRef.current.push({
                x: tower.x + Math.cos(angle) * 25,
                y: tower.y + Math.sin(angle) * 25,
                vx: Math.cos(angle) * bulletSpeed,
                vy: Math.sin(angle) * bulletSpeed
              });
              tower.lastFire = now;
            }
          }
        });

        // D. Update Bullets position and collision intersections
        bulletsRef.current = bulletsRef.current.filter(bullet => {
          bullet.x += bullet.vx;
          bullet.y += bullet.vy;

          // Prune offscreen bullets
          if (bullet.x < 0 || bullet.x > 1024 || bullet.y < 0 || bullet.y > 576) {
            return false;
          }

          let hitDetected = false;

          // Check intersection bounding boxes with invaders
          invadersRef.current = invadersRef.current.map(inv => {
            if (inv.isDefeated || inv.progress < 0) return inv;

            const bdx = inv.x - bullet.x;
            const bdy = inv.y - bullet.y;
            const distSq = Math.sqrt(bdx * bdx + bdy * bdy);

            if (distSq < 28) { // Collision bounds intersection radius
              hitDetected = true;
              const nextHp = inv.hp - TD_DIFFICULTY_CONFIG.TURRET_BULLET_DAMAGE;

              if (nextHp <= 0) {
                // Defeated! Trigger spectacular sparkle stars
                setMonstersLeft(prev => Math.max(0, prev - 1));
                for (let i = 0; i < 18; i++) {
                  particlesRef.current.push({
                    x: inv.x,
                    y: inv.y,
                    vx: (Math.random() - 0.5) * 8.5,
                    vy: (Math.random() - 0.5) * 8.5,
                    color: ['#facc15', '#fb923c', '#ef4444', '#f472b6'][Math.floor(Math.random() * 4)],
                    size: Math.random() * 4.5 + 2,
                    life: 1.0
                  });
                }
                setScore(prev => prev + 100);
                return { ...inv, hp: 0, isDefeated: true };
              } else {
                // Hit spark particle pop
                for (let i = 0; i < 5; i++) {
                  particlesRef.current.push({
                    x: bullet.x,
                    y: bullet.y,
                    vx: (Math.random() - 0.5) * 4,
                    vy: (Math.random() - 0.5) * 4,
                    color: '#38bdf8',
                    size: Math.random() * 3 + 1,
                    life: 0.8
                  });
                }
                return { ...inv, hp: nextHp };
              }
            }
            return inv;
          });

          return !hitDetected;
        });

        // E. Update Explosion Spark Particles
        particlesRef.current = particlesRef.current.filter(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 0.022; // fade coefficient
          return p.life > 0;
        });
      }

      // 2. RENDER STAGE CANVAS DRAWINGS
      ctx.clearRect(0, 0, 1024, 576);

      // A. Draw Winding Path Roadway (Cobblestone Borders and Dashed Marker Lines)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(51, 65, 85, 0.25)'; // outer wide base
      ctx.lineWidth = 42;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      let startPt = getCanvasWaypointPosition(0);
      ctx.moveTo(startPt.x, startPt.y);
      for (let p = 1; p <= 100; p++) {
        const pt = getCanvasWaypointPosition(p);
        ctx.lineTo(pt.x, pt.y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = '#e2e8f0'; // beautiful core road surface
      ctx.lineWidth = 32;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.moveTo(startPt.x, startPt.y);
      for (let p = 1; p <= 100; p++) {
        const pt = getCanvasWaypointPosition(p);
        ctx.lineTo(pt.x, pt.y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = '#cbd5e1'; // center dash road divider
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.setLineDash([12, 16]);
      ctx.moveTo(startPt.x, startPt.y);
      for (let p = 1; p <= 100; p++) {
        const pt = getCanvasWaypointPosition(p);
        ctx.lineTo(pt.x, pt.y);
      }
      ctx.stroke();
      ctx.setLineDash([]); // Reset dash for subsequent drawing shapes

      // B. Draw Spawn Portal (Top-Left 0%)
      const portalPos = getCanvasWaypointPosition(0);
      ctx.save();
      ctx.translate(portalPos.x, portalPos.y);
      portalRotationRef.current += 0.045;
      ctx.rotate(portalRotationRef.current);
      ctx.font = '54px Fredoka';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🌀', 0, 0);
      ctx.restore();

      // Portal Tag
      ctx.fillStyle = '#1e293b';
      ctx.font = '900 11px Fredoka';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('PORTAL', portalPos.x, portalPos.y + 36);

      // C. Draw Magical Defensive Crystal Base (Bottom-Right 100%)
      const basePos = getCanvasWaypointPosition(100);
      ctx.save();
      ctx.translate(basePos.x, basePos.y);

      // Floating glowing energy shield boundary
      ctx.beginPath();
      ctx.arc(0, 0, 68 + Math.sin(Date.now() / 250) * 4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.28)';
      ctx.lineWidth = 3.5;
      ctx.stroke();

      // Bouncing dynamic crystal bobbing effect
      const crystalBobY = Math.sin(Date.now() / 320) * 8;
      ctx.font = '64px Fredoka';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('💎', 0, crystalBobY);
      ctx.restore();

      ctx.fillStyle = '#4f46e5';
      ctx.font = '900 12px Fredoka';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('CRYSTAL BASE', basePos.x, basePos.y + 50);

      // D. Draw Magical Built Turrets
      towersRef.current.forEach(tower => {
        ctx.save();
        ctx.translate(tower.x, tower.y);

        // Tower pedestal base plate
        ctx.beginPath();
        ctx.arc(0, 0, 26, 0, Math.PI * 2);
        ctx.fillStyle = '#475569';
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();

        // Inner glowing core
        ctx.beginPath();
        ctx.arc(0, 0, 14, 0, Math.PI * 2);
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow

        // Turret directional rotating muzzle pointing towards targeted angle
        ctx.rotate(tower.angle);
        ctx.fillStyle = '#64748b';
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 2.5;
        ctx.fillRect(0, -6.5, 30, 13);
        ctx.strokeRect(0, -6.5, 30, 13);

        // Muzzle expansion tip (Gold)
        ctx.fillStyle = '#facc15';
        ctx.fillRect(26, -8.5, 6, 17);

        ctx.restore();
      });

      // E. Draw Projectile Bullets
      bulletsRef.current.forEach(bullet => {
        ctx.save();
        ctx.translate(bullet.x, bullet.y);
        ctx.beginPath();
        ctx.arc(0, 0, 6.5, 0, Math.PI * 2);
        ctx.fillStyle = '#facc15';
        ctx.shadowColor = '#fb923c';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      });

      // F. Draw Sparkle explosion particles
      particlesRef.current.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // G. Draw Marching Monsters (Slimes, Ogres with organic bouncing scales)
      invadersRef.current.forEach(inv => {
        if (inv.isDefeated || inv.progress < 0) return;

        ctx.save();
        ctx.translate(inv.x, inv.y);

        // Portal scale-in modifier
        const scaleVal = inv.progress < 20
          ? 0.25 + (inv.progress / 20) * 0.75
          : 1.0;

        // Squash-and-stretch organic walking bob
        const walkBobX = scaleVal * (1.0 + Math.sin(inv.progress * 4.5) * 0.11);
        const walkBobY = scaleVal * (1.0 - Math.sin(inv.progress * 4.5) * 0.11);
        ctx.scale(walkBobX, walkBobY);

        ctx.font = '40px Fredoka';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(invaderEmoji, 0, -4);

        ctx.restore(); // Restore before drawing HP bars to avoid distortion

        // Monster HP Overhead indicator
        const barWidth = 42;
        const barHeight = 5.5;
        const barX = inv.x - barWidth / 2;
        const barY = inv.y - 32;

        ctx.fillStyle = '#ef4444'; // Red negative health base
        ctx.fillRect(barX, barY, barWidth, barHeight);

        ctx.fillStyle = '#10b981'; // Green positive health filler
        ctx.fillRect(barX, barY, barWidth * (inv.hp / inv.maxHp), barHeight);

        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 1.2;
        ctx.strokeRect(barX, barY, barWidth, barHeight);
      });

      // H. Draw Player Companion Pet (Smooth Glide and Bobbing wings)
      const ppx = playerPosRef.current.x;
      const ppy = playerPosRef.current.y;
      ctx.save();
      ctx.translate(ppx, ppy);

      const petBobY = Math.sin(Date.now() / 160) * 6.5;
      ctx.font = '48px Fredoka';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(petEmoji, 0, petBobY);

      ctx.restore();

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    animationFrameId = requestAnimationFrame(updateAndDraw);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isGameOver, isRecharging, incorrectFeedback, questions, levelId, invaderEmoji, petEmoji]);

  // Canvas click coordinate capture to glide player
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || isGameOver || isRecharging || incorrectFeedback) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const clickY = ((e.clientY - rect.top) / rect.height) * canvas.height;

    // Set smooth glide destination coordinate target
    targetPosRef.current = { x: clickX, y: clickY };
  };

  // Base Damage Controller
  const triggerBaseDamage = () => {
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
  };

  // Recharging Shield Delay
  useEffect(() => {
    if (isRecharging) {
      const timeout = setTimeout(() => {
        setIsRecharging(false);
        // Warp monsters backwards along path so they don't immediately hit crystal base again
        invadersRef.current = invadersRef.current.map(inv => {
          if (!inv.isDefeated && inv.progress > 45) {
            return { ...inv, progress: -18 };
          }
          return inv;
        });
      }, 2200);
      return () => clearTimeout(timeout);
    }
  }, [isRecharging]);

  // Submit Answer Trigger
  const handleAnswerSubmit = (answer: string) => {
    if (isAnswered || isGameOver) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    const isCorrectAns = answer === currentQuestion.correctAnswer;

    if (isCorrectAns) {
      // 1. CORRECT ANSWER: Spawns a powerful math Turret at Player coordinate!
      setCorrectCount(prev => prev + 1);
      setCombo(prev => prev + 1);

      const pPos = playerPosRef.current;
      towersRef.current.push({
        x: pPos.x,
        y: pPos.y,
        angle: 0,
        lastFire: Date.now() - 400 // allows shooting soon
      });

      // Gold stars pop at pet coordinates
      for (let i = 0; i < 10; i++) {
        particlesRef.current.push({
          x: pPos.x,
          y: pPos.y,
          vx: (Math.random() - 0.5) * 5,
          vy: (Math.random() - 0.5) * 5,
          color: '#facc15',
          size: Math.random() * 4 + 2,
          life: 0.9
        });
      }

      setTimeout(() => {
        advanceQuestion();
      }, 1000);

    } else {
      // 2. INCORRECT ANSWER: Monsters speed surge and player takes damage
      setCombo(0);
      setIsHurt(true);
      setIsShaking(true);
      setDamageSplash("-20 Resistance! ⚠️");

      // Speed surge active invaders forward by 15% progress units
      let baseTookHit = false;
      invadersRef.current = invadersRef.current.map(inv => {
        if (inv.isDefeated) return inv;

        const nextProgress = Math.min(100, inv.progress + 15);
        if (nextProgress >= 100) {
          baseTookHit = true;
          setMonstersLeft(prev => Math.max(0, prev - 1));
          return { ...inv, progress: 100, isDefeated: true };
        }

        return { ...inv, progress: nextProgress };
      });

      if (baseTookHit) {
        setBaseShield(prevShield => {
          const nextShield = prevShield - 20;
          if (nextShield <= 0) {
            setIsGameOver(true);
            return 0;
          }
          return nextShield;
        });
      } else {
        // Direct hit on shield HP
        setBaseShield(prevShield => {
          const nextShield = prevShield - 20;
          if (nextShield <= 0) {
            setIsGameOver(true);
            return 0;
          }
          return nextShield;
        });
      }

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
      // Questions are complete! Let the player watch their built turrets clean up remaining monsters!
      setIsQuestionsCompleted(true);
    } else {
      setQIndex(prev => prev + 1);
    }
  };

  const handleCloseHint = () => {
    setIncorrectFeedback(false);
    advanceQuestion();
  };

  if (isLoading || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-playful-dots">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-bounce inline-block">🏰</span>
          <p className="text-lg font-bold text-slate-500 font-extrabold">Constructing Spell Towers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-playful-dots py-2 sm:py-4 px-2 sm:px-4 flex flex-col justify-between select-none">

      {/* Header HUD */}
      <header className="max-w-4xl w-full mx-auto flex items-center justify-between mb-1.5 sm:mb-2">
        <Link href={`/world-map?worldId=${worldId}`}>
          <Button variant="gray" size="sm" className="flex items-center gap-1 py-1 sm:py-1.5 text-xs sm:text-sm">
            <ArrowLeft className="w-4 h-4" /> Exit
          </Button>
        </Link>

        {/* Level stats */}
        <div className="text-center">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tower Defense</span>
          <h2 className="text-xs sm:text-base font-black text-slate-800 flex items-center gap-1 justify-center">
            🏰 Defend the Crystals (Lvl {levelId})
          </h2>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 select-none">
          {/* Speaker button */}
          <button
            onClick={() => setIsBgmOn(!isBgmOn)}
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl text-xs font-black transition-all flex items-center justify-center select-none shadow-sm cursor-pointer border ${isBgmOn
                ? 'bg-gradient-to-br from-emerald-400 to-teal-500 text-white border-emerald-500 hover:scale-105 active:scale-95'
                : 'bg-white hover:bg-slate-100 text-slate-400 border-slate-200'
              }`}
            title={isBgmOn ? "Mute Background Music" : "Play Synthesized BGM 🎵"}
          >
            {isBgmOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Combo Flame */}
          <div className="flex items-center gap-1 sm:gap-1.5 bg-indigo-100 border-2 border-indigo-300 text-indigo-800 px-2 py-0.5 sm:px-3.5 sm:py-1 rounded-full font-black text-[10px] sm:text-xs shadow-sm h-7 sm:h-8">
            <Flame className={`w-3.5 h-3.5 ${combo > 0 ? 'text-amber-500 fill-amber-500 animate-pulse' : 'text-indigo-400'}`} />
            Combo: {combo}
          </div>
        </div>
      </header>

      {/* Main Playing Arena Layout */}
      <main className="max-w-4xl w-full mx-auto flex-grow flex flex-col gap-3">

        {/* Play Canvas Container */}
        <div className={`relative w-full aspect-[16/9] bg-gradient-to-b from-sky-100 to-emerald-50 rounded-3xl border-4 transition-all duration-200 overflow-hidden ${isHurt
            ? 'border-red-500 ring-8 ring-red-500/20'
            : 'border-slate-700/10 shadow-inner'
          } ${isShaking
            ? 'animate-canvas-shake'
            : ''
          }`}>
          {/* Custom shake, float, shockwave, and alert styling keyframes */}
          <style dangerouslySetInnerHTML={{
            __html: `
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
            @keyframes progress-bar-recharge {
              0% { width: 0%; }
              100% { width: 100%; }
            }
            .animate-progress-bar {
              animation: progress-bar-recharge 2.2s linear forwards;
            }
          `}} />

          {/* Canvas Component Layer */}
          <canvas
            ref={canvasRef}
            width={1024}
            height={576}
            onClick={handleCanvasClick}
            className="w-full h-full block cursor-crosshair"
          />

          {/* Red vignette when taking hits */}
          {isHurt && (
            <div className="absolute inset-0 bg-red-500/20 border-8 border-red-500 rounded-3xl pointer-events-none z-40 animate-pulse"></div>
          )}

          {/* Floating red damage splash banner */}
          {damageSplash && (
            <div className="absolute right-[14%] bottom-[35%] z-50 animate-damage-float text-red-600 font-black text-xs md:text-sm drop-shadow bg-white/95 px-3.5 py-1.5 rounded-full border-2 border-red-400">
              {damageSplash}
            </div>
          )}

          {/* Top-left Defensive HUD Overlay */}
          <div className="absolute left-4 top-4 z-30 flex flex-col gap-2 drop-shadow-md">
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

            {/* Monsters Cleared Wave Progress HUD */}
            <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-xs px-3.5 py-1.5 rounded-2xl border border-white/20">
              <span className="text-xs">👾</span>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-indigo-300 uppercase tracking-wider">Defeated Waves</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="w-24 h-2 bg-slate-750 rounded-full overflow-hidden border border-slate-600/50 shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 transition-all duration-300"
                      style={{ width: `${((12 - monstersLeft) / 12) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] font-extrabold text-white">{12 - monstersLeft}/12 Cleared</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top-Right Score Counter HUD overlay */}
          <div className="absolute right-4 top-4 z-30 flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-xs px-3.5 py-1.5 rounded-2xl border border-white/20 text-white font-black text-[10px] md:text-xs">
            ⭐ Score: {score}
          </div>

          {/* Friendly Shield Recharging Overlay */}
          {isRecharging && (
            <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 z-45 animate-fade-in text-center">
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
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in text-center">
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

        </div>

        {/* Math Question Scroll panel */}
        <Card variant="scroll" padding="md" className="flex flex-col gap-3 sm:gap-4 shadow-md relative bg-[#fdf6e2]">

          {isQuestionsCompleted ? (
            <div className="text-center py-6 flex flex-col items-center justify-center gap-2 animate-bounce-slow">
              <span className="text-4xl animate-pulse">🎉</span>
              <h3 className="text-xl sm:text-2xl font-black text-indigo-900 animate-pulse">{worldInfo.subject === 'english' ? 'English Words' : 'Math Equations'} Complete!</h3>
              <p className="text-xs sm:text-sm font-bold text-indigo-850 leading-normal max-w-md">
                You have successfully cast all {worldInfo.subject === 'english' ? 'English' : 'math'} shield charms! Watch your built turrets defend the base and clear the remaining monsters.
              </p>
            </div>
          ) : (
            <>
              {/* Question Index Progress */}
              <div className="flex justify-between items-center text-xs font-extrabold text-amber-900 border-b border-amber-200/50 pb-1.5">
                <span className="flex items-center gap-1.5">
                  🧙‍♂️ Shield Spell Scroll
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakText(currentQuestion.question, worldInfo.subject);
                    }}
                    className="cursor-pointer hover:scale-115 active:scale-95 transition-transform flex items-center justify-center bg-amber-600/20 hover:bg-amber-600/35 p-0.5 rounded border border-amber-400/30"
                    title="Read Spell Out Loud 🔊"
                  >
                    <Volume2 className="w-3 h-3 text-amber-950" />
                  </button>
                </span>
                <span className="bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
                  Progress: {qIndex + 1} / 5
                </span>
              </div>

              {/* Math spell math Parchment question */}
              <div className="text-center py-0.5 sm:py-1 flex flex-col items-center justify-center">
                <p className="text-[10px] sm:text-sm font-bold text-amber-800 uppercase tracking-widest">CAST DEFENSE CHARM</p>
                 {currentQuestion.imageUrl && (
                  <VocabIcon imageUrl={currentQuestion.imageUrl} size={144} />
                )}
                <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-800 mt-1 sm:mt-1.5 leading-snug tracking-tight">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Grid of Choices Chunky Buttons */}
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
                      className={`text-base sm:text-xl md:text-2xl py-2 sm:py-3 ${isSelected ? 'ring-4 ring-indigo-400/30' : ''
                        }`}
                    >
                      {choice}
                    </Button>
                  );
                })}
              </div>
            </>
          )}

        </Card>

      </main>

      {/* Footer instruction guidelines */}
      <footer className="text-center text-slate-400 text-[10px] font-bold py-1">
        🏰 Tap on the grass map to guide your pet, and solve correct {worldInfo.subject === 'english' ? 'English spelling' : 'math'} spells to construct defense turrets!
      </footer>

      {/* Hints Explanation Modal for incorrect inputs */}
      {incorrectFeedback && (
        <HintModal
          questionData={currentQuestion}
          onClose={handleCloseHint}
          subject={worldInfo.subject}
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
          <p className="text-lg font-bold text-slate-500 font-extrabold">Constructing Spell Towers...</p>
        </div>
      </div>
    }>
      <TowerDefenseContent />
    </Suspense>
  );
}
