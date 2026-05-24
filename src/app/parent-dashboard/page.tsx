'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useGameState } from '@/hooks/useGameState';
import { Button } from '@/components/UI/Button';
import { Card } from '@/components/UI/Card';
import { ProgressBar } from '@/components/UI/ProgressBar';
import { ArrowLeft, BarChart2, ShieldAlert, Clock, Award, Trash2 } from 'lucide-react';

export default function ParentDashboardPage() {
  const { state, resetGame, isLoading } = useGameState();
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [resetInput, setResetInput] = useState('');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-playful-dots">
        <div className="text-center space-y-4">
          <span className="text-4xl animate-bounce inline-block">🔒</span>
          <p className="text-lg font-bold text-slate-500">Decrypting Parent Dashboard...</p>
        </div>
      </div>
    );
  }

  // Calculate statistics
  const totalAnswered = state.battleStats.questionsAnswered;
  const totalCorrect = state.battleStats.correctAnswers;
  const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const totalMinutes = Math.round(state.battleStats.timePracticedSeconds / 60);

  const topics = [
    { id: 'addition', name: 'Addition Spells', description: 'Number bonds, carries, double digits', color: 'bg-emerald-450' },
    { id: 'subtraction', name: 'Subtraction Spells', description: 'Counting back, regrouping, cave navigation', color: 'bg-purple-400' },
    { id: 'multiplication', name: 'Multiplication Spells', description: 'Times tables, scaling, arrays', color: 'bg-orange-400' },
    { id: 'division', name: 'Division & Sharing Spells', description: 'Equal distribution, inverse arrays', color: 'bg-amber-400' }
  ];

  // Dynamic recommendations
  const recommendations: string[] = [];
  topics.forEach(t => {
    const stat = state.battleStats.topicAccuracy[t.id] || { correct: 0, total: 0 };
    if (stat.total === 0) {
      recommendations.push(`Introduce ${t.name}: Embark on new arena challenges!`);
    } else {
      const acc = (stat.correct / stat.total) * 100;
      if (acc < 75) {
        recommendations.push(`Reinforce ${t.name}: Replay early levels to solidfy core understanding (Current accuracy: ${Math.round(acc)}%).`);
      } else if (acc >= 90 && stat.total < 15) {
        recommendations.push(`Master ${t.name}: Practice more battles to lock in long-term mastery skills!`);
      }
    }
  });

  if (recommendations.length === 0) {
    recommendations.push("Excellent work! Encourage your child to practice higher-grade topics or collect remaining level stars!");
  }

  const handleResetGame = () => {
    if (resetInput.trim().toUpperCase() === 'RESET') {
      resetGame();
      setShowConfirmReset(false);
      setResetInput('');
      window.location.href = '/'; // Redirect to landing
    }
  };

  return (
    <div className="min-h-screen bg-playful-dots py-6 px-4 flex flex-col select-none">
      
      {/* Header bar */}
      <header className="max-w-4xl w-full mx-auto mb-6 flex items-center justify-between">
        <Link href="/">
          <Button variant="gray" size="sm" className="flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Exit Dashboard
          </Button>
        </Link>
        <h1 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight flex items-center gap-1.5">
          🔑 PARENT PROGRESS REPORT
        </h1>
        <div className="w-16"></div>
      </header>

      {/* Main dashboard panels */}
      <main className="max-w-4xl w-full mx-auto flex-grow flex flex-col gap-6 animate-pop-in">
        
        {/* Core summary grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card padding="sm" className="text-center bg-white border-slate-200">
            <span className="text-sm font-bold text-slate-400 uppercase">Math Accuracy</span>
            <p className="text-3xl font-black text-emerald-500 mt-1">{overallAccuracy}%</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Average Correct Ratio</p>
          </Card>
          <Card padding="sm" className="text-center bg-white border-slate-200">
            <span className="text-sm font-bold text-slate-400 uppercase">Questions Solved</span>
            <p className="text-3xl font-black text-sky-500 mt-1">{totalCorrect} / {totalAnswered}</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Accuracy Tracker</p>
          </Card>
          <Card padding="sm" className="text-center bg-white border-slate-200">
            <span className="text-sm font-bold text-slate-400 uppercase">Duration Practiced</span>
            <p className="text-3xl font-black text-orange-500 mt-1">{totalMinutes} min</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Active Study Minutes</p>
          </Card>
          <Card padding="sm" className="text-center bg-white border-slate-200">
            <span className="text-sm font-bold text-slate-400 uppercase">Academic Rank</span>
            <p className="text-3xl font-black text-purple-500 mt-1">Lvl {state.level}</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Apprentice Wizard</p>
          </Card>
        </div>

        {/* Breakdown details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Topic accuracy list */}
          <Card padding="md" className="space-y-4">
            <h3 className="text-lg font-black text-slate-800 border-b-2 border-slate-100 pb-1.5 flex items-center gap-1.5">
              <BarChart2 className="w-5 h-5 text-academy-blue" />
              Syllabus Accuracy Overview
            </h3>

            <div className="space-y-4">
              {topics.map(topic => {
                const stat = state.battleStats.topicAccuracy[topic.id] || { correct: 0, total: 0 };
                const acc = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
                
                return (
                  <div key={`parent-breakdown-${topic.id}`} className="space-y-1">
                    <div className="flex justify-between items-center text-sm font-bold text-slate-700">
                      <div>
                        <span>{topic.name}</span>
                        <span className="text-xs text-slate-400 font-medium block">{topic.description}</span>
                      </div>
                      <span className="text-slate-800">
                        {acc}% <span className="text-xs text-slate-400 font-medium">({stat.correct}/{stat.total})</span>
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3.5 border border-slate-200 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          stat.total === 0 ? 'bg-slate-200' : topic.color
                        }`}
                        style={{ width: `${stat.total === 0 ? 0 : acc}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Curriculum Advisory & Advanced Actions */}
          <div className="flex flex-col gap-6">
            <Card padding="md" className="space-y-3 flex-grow">
              <h3 className="text-lg font-black text-slate-800 border-b-2 border-slate-100 pb-1.5 flex items-center gap-1.5">
                💡 Learning Action Items
              </h3>
              
              <ul className="space-y-3 text-sm font-medium text-slate-600">
                {recommendations.map((rec, rIdx) => (
                  <li key={`rec-${rIdx}`} className="flex gap-2 items-start bg-slate-50 border border-slate-100 p-3 rounded-xl leading-relaxed shadow-sm">
                    <span className="text-amber-500">🎯</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Reset Stats Panel */}
            <Card padding="md" className="border-dashed border-red-200 bg-red-50/40 space-y-3">
              <h4 className="text-sm font-black text-red-800 flex items-center gap-1">
                <Trash2 className="w-4 h-4" /> Reset Learning Campaign
              </h4>
              <p className="text-xs text-slate-500 font-medium leading-normal">
                Want to clear stars, unlocked pets, coins, and levels to let a child start their math adventures from the beginning?
              </p>
              <div>
                <Button
                  variant="pink"
                  size="sm"
                  onClick={() => setShowConfirmReset(true)}
                  className="font-bold text-xs"
                >
                  Reset Child Profile Data
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Confirmation reset Modal overlay */}
      {showConfirmConfirmModal()}

    </div>
  );

  function showConfirmConfirmModal() {
    if (!showConfirmReset) return null;
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <Card padding="lg" className="w-full max-w-sm text-slate-800 shadow-2xl relative border-4 border-red-200">
          
          <div className="text-center mb-4 text-red-600">
            <ShieldAlert className="w-12 h-12 mx-auto animate-bounce" />
            <h3 className="text-xl font-black mt-2">DANGER STATE</h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
              This action is permanent and will delete all progress, high scores, streaks, coins, and custom unlocked companion pets!
            </p>
          </div>

          <div className="space-y-3 my-4">
            <p className="text-xs font-bold text-slate-600 text-center uppercase tracking-wide">
              Type <span className="text-red-600 font-black">RESET</span> below to confirm:
            </p>
            <input
              type="text"
              value={resetInput}
              onChange={(e) => setResetInput(e.target.value)}
              placeholder="RESET"
              className="w-full px-4 py-2 border-2 border-slate-200 focus:border-red-500 rounded-xl text-center font-bold text-lg outline-none"
            />
          </div>

          <div className="flex gap-2">
            <Button
              variant="gray"
              onClick={() => {
                setShowConfirmReset(false);
                setResetInput('');
              }}
              fullWidth
            >
              Cancel
            </Button>
            <Button
              variant="pink"
              disabled={resetInput.trim().toUpperCase() !== 'RESET'}
              onClick={handleResetGame}
              fullWidth
            >
              Reset 💥
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}
