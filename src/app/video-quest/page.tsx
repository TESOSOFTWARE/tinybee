'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState';
import { Button } from '@/components/UI/Button';
import { Card } from '@/components/UI/Card';
import { ArrowLeft, Play, Sparkles, AlertCircle, CheckCircle2, Award, Coins } from 'lucide-react';
import { WORLDS_DATABASE } from '@/data/worlds';
import { getVideoQuest, VideoQuest } from '@/data/video_quests';
import { VocabIcon } from '@/components/UI/VocabIcon';
import { speakText } from '@/utils/tts';

function VideoQuestContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { state, addXP, addCoins } = useGameState();

  const worldId = searchParams.get('worldId') || 'gk-alphabet';
  const world = WORLDS_DATABASE[worldId] || WORLDS_DATABASE['gk-alphabet'];
  const grade = Number(world.grade);
  const levelId = parseInt(searchParams.get('levelId') || '1');

  const [mounted, setMounted] = useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const quest: VideoQuest = getVideoQuest(grade, levelId, world.topicId);

  // Game states: 'watch' | 'quiz' | 'completed' | 'failed'
  const [stage, setStage] = useState<'watch' | 'quiz' | 'result'>('watch');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [rewardsAwarded, setRewardsAwarded] = useState(false);

  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-playful-dots bg-indigo-50">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-spin inline-block">📖</span>
          <p className="text-lg font-bold text-indigo-700">Loading Quest...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = quest.questions[currentQuestionIndex];

  const handleStartQuiz = () => {
    setStage('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setRewardsAwarded(false);
  };

  const handleAnswerSelect = (choice: string) => {
    if (isAnswered) return;
    setSelectedAnswer(choice);
    setIsAnswered(true);

    if (choice === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
      playTingTingSound();
      speakText(currentQuestion.correctAnswer, 'english');
    } else {
      playWrongSound();
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quest.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setStage('result');
      // If passed, award rewards once
      if (score >= 4 && !rewardsAwarded) {
        addXP(50);
        addCoins(20);
        setRewardsAwarded(true);
        // Persist completion flag locally
        localStorage.setItem(`video_quest_completed_${world.id}`, 'true');
      }
    }
  };

  return (
    <div className={`min-h-screen flex flex-col select-none ${world.bgClass}`}>
      {/* Navigation Header */}
      <header className="w-full bg-white/85 backdrop-blur border-b-4 border-slate-100 px-4 py-3 sticky top-0 z-30 animate-slide-down">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href={`/world-map?worldId=${world.id}`}>
            <Button variant="gray" size="sm" className="flex items-center gap-1 cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> Back to Map
            </Button>
          </Link>
          <div className="text-center">
            <span className="text-[10px] font-black bg-indigo-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
              📖 Learning Section
            </span>
            <h1 className="text-base md:text-lg font-black text-slate-800 tracking-tight mt-0.5">
              Grade {grade} Learning Section
            </h1>
          </div>
          <div className="flex items-center gap-2 bg-yellow-100 border-2 border-yellow-300 text-yellow-800 px-3 py-1.5 rounded-full font-black text-sm shadow-sm">
            🪙 {state.coins}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-md w-full mx-auto flex-grow flex flex-col justify-center px-4 py-6 gap-6">
        {stage === 'watch' && (
          <div className="space-y-4 animate-pop-in">
            <Card padding="md" className="border-4 border-slate-700/10 bg-white/70 backdrop-blur-sm text-center space-y-3">
              <h2 className="text-xl font-black text-slate-800 tracking-tight">
                🎬 Watch & Memorize!
              </h2>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">
                Watch the lesson <span className="text-indigo-600">"{quest.title}"</span> by <span className="text-indigo-650">{quest.channel}</span>. Pay close attention to the words shown in the video!
              </p>
            </Card>

            {/* Responsive 9:16 Shorts Player wrapper */}
            <div className="relative aspect-[9/16] w-full max-w-[280px] mx-auto rounded-3xl overflow-hidden border-4 border-slate-800 shadow-xl bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={quest.videoUrl}
                title={quest.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <Card padding="md" className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold bg-indigo-50/50 p-2.5 rounded-xl border border-indigo-100">
                <span className="flex items-center gap-1 text-indigo-700">🏆 Reward: +50 XP</span>
                <span className="flex items-center gap-1 text-amber-600">🪙 Bonus: +20 Coins</span>
              </div>

              <Button
                variant="green"
                size="lg"
                fullWidth
                onClick={handleStartQuiz}
                className="text-lg font-black tracking-wide py-4 animate-pulse-slow uppercase cursor-pointer"
              >
                🧠 Start Challenge!
              </Button>
            </Card>
          </div>
        )}

        {stage === 'quiz' && (
          <div className="space-y-4 animate-pop-in">
            {/* Progress indicator */}
            <div className="flex justify-between items-center text-xs font-black text-slate-500 px-1">
              <span>QUESTION {currentQuestionIndex + 1} OF {quest.questions.length}</span>
              <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">Score: {score}</span>
            </div>

            {/* Question Card */}
            <Card padding="lg" className="border-4 border-slate-700/10 bg-white/80 backdrop-blur-sm space-y-4 min-h-[140px] flex flex-col justify-center items-center">
              {(() => {
                const cleanWord = currentQuestion.correctAnswer.toLowerCase().trim().replace(/\s+/g, '_');
                const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uzgrmusaxsgirshvkwzx.supabase.co';
                const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || 'vocab-icons';
                const imgUrl = currentQuestion.imageUrl || `${supabaseUrl}/storage/v1/object/public/${bucketName}/${cleanWord}.png`;
                return <VocabIcon imageUrl={imgUrl} size={192} />;
              })()}
              <p className="text-base md:text-lg font-black text-slate-800 text-center leading-relaxed">
                {currentQuestion.question}
              </p>
            </Card>

            {/* Multiple Choice Answers */}
            <div className="grid grid-cols-1 gap-2.5">
              {currentQuestion.choices.map((choice, idx) => {
                const isSelected = selectedAnswer === choice;
                const isCorrectChoice = choice === currentQuestion.correctAnswer;

                let btnStyle = "border-slate-200 bg-white hover:border-slate-400 active:translate-y-0.5 text-slate-700";

                if (isAnswered) {
                  if (isCorrectChoice) {
                    btnStyle = "border-green-500 bg-green-50 text-green-700 font-extrabold ring-4 ring-green-100";
                  } else if (isSelected) {
                    btnStyle = "border-red-500 bg-red-50 text-red-700 font-extrabold ring-4 ring-red-100";
                  } else {
                    btnStyle = "border-slate-200 bg-white opacity-50 cursor-not-allowed text-slate-400";
                  }
                }

                return (
                  <button
                    key={choice}
                    disabled={isAnswered}
                    onClick={() => handleAnswerSelect(choice)}
                    className={`w-full p-4 text-sm md:text-base font-extrabold text-left border-2 rounded-2xl transition-all duration-150 cursor-pointer shadow-sm ${btnStyle}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>
                        {choice}
                        {currentQuestion.choiceIpas && currentQuestion.choiceIpas[idx] && (
                          <span className="ml-2 font-normal text-slate-400">
                            {currentQuestion.choiceIpas[idx]}
                          </span>
                        )}
                      </span>
                      {isAnswered && isCorrectChoice && <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />}
                      {isAnswered && isSelected && !isCorrectChoice && <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation Modal / Banner when answered */}
            {isAnswered && (
              <Card padding="md" className="border-2 border-indigo-200 bg-indigo-50/80 animate-slide-up space-y-3">
                <div className="space-y-1">
                  <h4 className="text-xs font-black text-indigo-800 uppercase tracking-widest">
                    {selectedAnswer === currentQuestion.correctAnswer ? '🎉 Correct!' : '💡 Keep Learning!'}
                  </h4>
                  <p className="text-xs text-indigo-950 font-bold leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
                <Button
                  variant="purple"
                  fullWidth
                  onClick={handleNextQuestion}
                  className="text-sm font-black tracking-wide py-2.5 uppercase cursor-pointer"
                >
                  {currentQuestionIndex < quest.questions.length - 1 ? 'Next Question ➔' : 'See Results ➔'}
                </Button>
              </Card>
            )}
          </div>
        )}

        {stage === 'result' && (
          <div className="space-y-4 animate-pop-in">
            {score >= 4 ? (
              // Success / Win View
              <Card padding="lg" className="border-4 border-green-400 bg-green-50/80 backdrop-blur-sm text-center space-y-6">
                <div className="relative inline-block">
                  <Award className="w-20 h-20 text-yellow-500 mx-auto fill-yellow-200 animate-bounce-slow" />
                  <span className="absolute -top-1 -right-1 text-3xl animate-pulse">✨</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-black text-green-900 tracking-tight">
                    Quest Completed!
                  </h2>
                  <p className="text-sm font-extrabold text-green-700">
                    Amazing memory! You scored {score} / {quest.questions.length} correct answers!
                  </p>
                </div>

                {/* Rewards Celebration Area */}
                <div className="bg-white/80 border-2 border-green-200 rounded-2xl p-4 flex justify-around items-center shadow-inner">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-black text-slate-500 uppercase">XP Gained</span>
                    <span className="text-xl font-black text-indigo-600 flex items-center gap-1">
                      <Sparkles className="w-5 h-5 text-indigo-500 fill-indigo-500" /> +50 XP
                    </span>
                  </div>
                  <div className="w-px h-10 bg-slate-200"></div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-black text-slate-500 uppercase">Coins Earned</span>
                    <span className="text-xl font-black text-amber-600 flex items-center gap-1">
                      <Coins className="w-5 h-5 text-amber-500 fill-amber-500" /> +20 Coins
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <Link href={`/world-map?worldId=${world.id}`}>
                    <Button variant="green" size="lg" fullWidth className="text-base font-black uppercase tracking-wider py-3.5 cursor-pointer">
                      🗺️ Back to World Map
                    </Button>
                  </Link>
                  <Button variant="gray" size="md" fullWidth onClick={handleStartQuiz} className="text-xs font-bold text-slate-600 cursor-pointer">
                    🔄 Play Quest Again
                  </Button>
                </div>
              </Card>
            ) : (
              // Failed View
              <Card padding="lg" className="border-4 border-red-400 bg-red-50/80 backdrop-blur-sm text-center space-y-6">
                <AlertCircle className="w-20 h-20 text-red-500 mx-auto animate-pulse" />

                <div className="space-y-2">
                  <h2 className="text-2xl font-black text-red-900 tracking-tight">
                    Almost Got It!
                  </h2>
                  <p className="text-sm font-extrabold text-red-700">
                    You got {score} / {quest.questions.length} correct. You need at least 4 correct to complete the quest.
                  </p>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed max-w-xs mx-auto">
                    No worries, young explorer! Watch the video lesson once more, pay close attention to the spelling and meanings, and try again!
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <Button variant="purple" size="lg" fullWidth onClick={() => setStage('watch')} className="text-base font-black uppercase tracking-wider py-3.5 cursor-pointer">
                    🎬 Watch Video Again
                  </Button>
                  <Link href={`/world-map?worldId=${world.id}`}>
                    <Button variant="gray" size="md" fullWidth className="text-xs font-bold text-slate-600 cursor-pointer">
                      🗺️ Return to Map
                    </Button>
                  </Link>
                </div>
              </Card>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default function VideoQuestPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-playful-dots">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-spin inline-block">📖</span>
          <p className="text-lg font-bold text-slate-500">Loading Learning Section...</p>
        </div>
      </div>
    }>
      <VideoQuestContent />
    </Suspense>
  );
}

const playTingTingSound = () => {
  if (typeof window === 'undefined') return;
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    
    const playTing = (time: number, freq: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);
      
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.08, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.25);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(time);
      osc.stop(time + 0.25);
    };
    
    const now = ctx.currentTime;
    playTing(now, 987.77); // B5
    playTing(now + 0.08, 1318.51); // E6
  } catch (e) {
    console.warn('Web Audio API success sound error:', e);
  }
};

const playWrongSound = () => {
  if (typeof window === 'undefined') return;
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(80, ctx.currentTime + 0.35);
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.05);
    gain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  } catch (e) {
    console.warn('Web Audio API error sound error:', e);
  }
};
