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

  const [activeTab, setActiveTab] = useState<'math' | 'english'>('math');

  // Calculate statistics
  const totalAnswered = state.battleStats.questionsAnswered;
  const totalCorrect = state.battleStats.correctAnswers;
  const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const totalMinutes = Math.round(state.battleStats.timePracticedSeconds / 60);

  const mathSyllabus = [
    {
      id: 'counting-arithmetic',
      name: 'Counting & Arithmetic',
      description: 'Addition, subtraction, multiplication, division, counting, base ten',
      color: 'bg-emerald-500',
      topics: ['counting', 'comparing', 'operations', 'addition', 'subtraction', 'multiplication', 'division', 'place-value', 'base-ten']
    },
    {
      id: 'geometry-measurement',
      name: 'Geometry & Measurement',
      description: 'Shapes, time, partitioning, dimensions',
      color: 'bg-purple-500',
      topics: ['geometry', 'measurement']
    }
  ];

  const englishSyllabus = [
    {
      id: 'foundational-skills',
      name: 'Foundational Skills',
      description: 'Alphabet, sight words, phonics, spelling',
      color: 'bg-indigo-500',
      topics: ['alphabet', 'sight-words', 'phonics', 'spelling']
    },
    {
      id: 'vocabulary-study',
      name: 'Vocabulary & Word Study',
      description: 'Word trees, roots, synonyms, analogies',
      color: 'bg-teal-500',
      topics: ['vocabulary', 'vocab', 'synonyms', 'roots', 'analogies']
    },
    {
      id: 'grammar-mechanics',
      name: 'Grammar & Mechanics',
      description: 'Clauses, parts of speech, pronouns, syntax, punctuation',
      color: 'bg-pink-500',
      topics: ['grammar', 'sentences', 'parts-of-speech', 'punctuation', 'pronouns', 'clauses', 'voice', 'verbals', 'syntax']
    },
    {
      id: 'reading-rhetoric',
      name: 'Reading & Figurative Language',
      description: 'Comprehension, metaphors, rhetoric, literary devices',
      color: 'bg-blue-500',
      topics: ['reading', 'figurative', 'rhetoric', 'literary']
    }
  ];

  const getSyllabusStats = (syllabusItems: typeof mathSyllabus) => {
    return syllabusItems.map(item => {
      let correct = 0;
      let total = 0;
      item.topics.forEach(t => {
        const stat = state.battleStats.topicAccuracy[t] || { correct: 0, total: 0 };
        correct += stat.correct;
        total += stat.total;
      });
      const acc = total > 0 ? Math.round((correct / total) * 100) : 0;
      return {
        ...item,
        correct,
        total,
        acc
      };
    });
  };

  const mathStats = getSyllabusStats(mathSyllabus);
  const englishStats = getSyllabusStats(englishSyllabus);
  const activeSyllabus = activeTab === 'math' ? mathStats : englishStats;

  // Dynamic recommendations
  const recommendations: string[] = [];
  mathStats.forEach(s => {
    if (s.total === 0) {
      recommendations.push(`Introduce Math - ${s.name}: Begin level challenges in this arena.`);
    } else {
      if (s.acc < 75) {
        recommendations.push(`Reinforce Math - ${s.name}: Replay early levels to build core understanding (Current accuracy: ${s.acc}%).`);
      } else if (s.acc >= 90 && s.total < 15) {
        recommendations.push(`Master Math - ${s.name}: Play more math game modes to lock in long-term mastery skills!`);
      }
    }
  });

  englishStats.forEach(s => {
    if (s.total === 0) {
      recommendations.push(`Introduce English - ${s.name}: Begin word challenges in this arena.`);
    } else {
      if (s.acc < 75) {
        recommendations.push(`Reinforce English - ${s.name}: Replay early levels to practice word mechanics (Current accuracy: ${s.acc}%).`);
      } else if (s.acc >= 90 && s.total < 15) {
        recommendations.push(`Master English - ${s.name}: Play more English game modes to lock in spelling and comprehension!`);
      }
    }
  });

  if (recommendations.length === 0) {
    recommendations.push("Amazing job! Your child has completed all modules with high accuracy. Keep up the regular practice!");
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
        <Link href="/admin">
          <Button variant="purple" size="sm" className="flex items-center gap-1 shadow-sm">
            🛠️ Content Panel
          </Button>
        </Link>
      </header>

      {/* Main dashboard panels */}
      <main className="max-w-4xl w-full mx-auto flex-grow flex flex-col gap-6 animate-pop-in">
        
        {/* Core summary grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card padding="sm" className="text-center bg-white border-slate-200">
            <span className="text-sm font-bold text-slate-400 uppercase">Overall Accuracy</span>
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

        {/* Tab Selection */}
        <div className="flex gap-2 justify-center border-b-2 border-slate-100 pb-1">
          <button
            onClick={() => setActiveTab('math')}
            className={`px-6 py-2.5 rounded-t-xl font-black text-sm transition-all duration-300 ${
              activeTab === 'math'
                ? 'bg-emerald-500 text-white shadow-sm border-b-4 border-emerald-600'
                : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200 border-b-0'
            }`}
          >
            🧮 Math Syllabus
          </button>
          <button
            onClick={() => setActiveTab('english')}
            className={`px-6 py-2.5 rounded-t-xl font-black text-sm transition-all duration-300 ${
              activeTab === 'english'
                ? 'bg-indigo-500 text-white shadow-sm border-b-4 border-indigo-600'
                : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200 border-b-0'
            }`}
          >
            🔤 English Syllabus
          </button>
        </div>

        {/* Breakdown details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Topic accuracy list */}
          <Card padding="md" className="space-y-4">
            <h3 className="text-lg font-black text-slate-800 border-b-2 border-slate-100 pb-1.5 flex items-center gap-1.5">
              <BarChart2 className="w-5 h-5 text-academy-blue" />
              {activeTab === 'math' ? 'Math' : 'English'} Syllabus Accuracy Overview
            </h3>

            <div className="space-y-4">
              {activeSyllabus.map(topic => {
                return (
                  <div key={`parent-breakdown-${topic.id}`} className="space-y-1">
                    <div className="flex justify-between items-center text-sm font-bold text-slate-700">
                      <div>
                        <span>{topic.name}</span>
                        <span className="text-xs text-slate-400 font-medium block">{topic.description}</span>
                      </div>
                      <span className="text-slate-800">
                        {topic.acc}% <span className="text-xs text-slate-400 font-medium">({topic.correct}/{topic.total})</span>
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3.5 border border-slate-200 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          topic.total === 0 ? 'bg-slate-200' : topic.color
                        }`}
                        style={{ width: `${topic.total === 0 ? 0 : topic.acc}%` }}
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
                {recommendations.slice(0, 4).map((rec, rIdx) => (
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
                Want to clear stars, unlocked pets, coins, and levels to let a child start their learning adventures from the beginning?
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
