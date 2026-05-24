'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/UI/Card';
import { Button } from '@/components/UI/Button';
import { ArrowLeft, Lock, ShieldAlert, X, Sparkles, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

interface Topic {
  name: string;
  worldId: string;
  icon: string;
  bg: string;
  text: string;
  badge?: string;
}

interface GradeCardProps {
  gradeNum: number | string;
  title: string;
  description: string;
  topics: Topic[];
  isLocked?: boolean;
}

export default function SelectGradePage() {
  const [viewAllGrade, setViewAllGrade] = useState<GradeCardProps | null>(null);

  const scrollSlider = (gradeNum: string | number, direction: 'left' | 'right') => {
    const slider = document.getElementById(`slider-${gradeNum}`);
    if (slider) {
      const scrollAmount = direction === 'left' ? -216 : 216; // width 200px + gap-4 (16px)
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const gradesList: GradeCardProps[] = [
    {
      gradeNum: "K",
      title: "Kindergarten - Novice",
      description: "Learn counting, number names, shapes, group comparisons, base-ten, and operations!",
      isLocked: false,
      topics: [
        { name: "Counting Stars (Meadow)", worldId: "gk-counting", icon: "🐝", bg: "bg-amber-50 border-amber-300 hover:border-amber-400", text: "text-amber-900", badge: "Counting 🐝" },
        { name: "Shape Match (Crystal)", worldId: "gk-geometry", icon: "💎", bg: "bg-pink-50 border-pink-300 hover:border-pink-400", text: "text-pink-850", badge: "Shapes 💎" },
        { name: "Comparing Sets (Valley)", worldId: "gk-comparing", icon: "⛰️", bg: "bg-orange-50 border-orange-300 hover:border-orange-400", text: "text-orange-900", badge: "Comparing ⛰️" },
        { name: "Sum & Difference Oasis", worldId: "gk-operations", icon: "🍎", bg: "bg-emerald-50 border-emerald-300 hover:border-emerald-400", text: "text-emerald-800", badge: "Operations 🍎" },
        { name: "Base Ten Meadows", worldId: "gk-base-ten", icon: "🎒", bg: "bg-blue-50 border-blue-300 hover:border-blue-400", text: "text-blue-800", badge: "Base Ten 🎒" }
      ]
    },
    {
      gradeNum: 1,
      title: "Grade 1 - Apprentice",
      description: "Unlock single-digit addition, subtraction, place values, time, and basic partitions!",
      topics: [
        { name: "Addition (Number Forest)", worldId: "g1-addition", icon: "🌳", bg: "bg-emerald-50 border-emerald-300 hover:border-emerald-400", text: "text-emerald-800", badge: "Addition 🌳" },
        { name: "Subtraction (Cave)", worldId: "g1-subtraction", icon: "🦇", bg: "bg-purple-50 border-purple-300 hover:border-purple-400", text: "text-purple-800", badge: "Subtraction 🦇" },
        { name: "Place Values (Castle)", worldId: "g1-place-value", icon: "🏰", bg: "bg-yellow-50 border-yellow-300 hover:border-yellow-400", text: "text-yellow-850", badge: "Tens & Ones 🏰" },
        { name: "Time & Measure Cave", worldId: "g1-measurement", icon: "⏰", bg: "bg-indigo-50 border-indigo-300 hover:border-indigo-400", text: "text-indigo-900", badge: "Time ⏰" },
        { name: "Shape Partition Forest", worldId: "g1-geometry", icon: "🍕", bg: "bg-emerald-50 border-emerald-300 hover:border-emerald-400", text: "text-emerald-800", badge: "Partitions 🍕" }
      ]
    },
    {
      gradeNum: 2,
      title: "Grade 2 - Mage",
      description: "Command double-digit carries, borrowing regrouping, clock time, hundreds, and shape shares!",
      topics: [
        { name: "Double addition (Island)", worldId: "g2-addition", icon: "🏝️", bg: "bg-sky-50 border-sky-300 hover:border-sky-400", text: "text-sky-800", badge: "Carries 🏝️" },
        { name: "Double Subtraction (Cave)", worldId: "g2-subtraction", icon: "🧗", bg: "bg-purple-50 border-purple-300 hover:border-purple-400", text: "text-purple-800", badge: "Regrouping 🧗" },
        { name: "Clock Spells (Time Tower)", worldId: "g2-measurement", icon: "⏰", bg: "bg-indigo-50 border-indigo-300 hover:border-indigo-400", text: "text-indigo-900", badge: "Time ⏰" },
        { name: "Hundred Block Castle", worldId: "g2-base-ten", icon: "🧱", bg: "bg-yellow-50 border-yellow-300 hover:border-yellow-400", text: "text-yellow-850", badge: "Hundreds 🧱" },
        { name: "Partition Cave", worldId: "g2-geometry", icon: "🔷", bg: "bg-purple-50 border-purple-300 hover:border-purple-400", text: "text-purple-800", badge: "Geometry 🔷" }
      ]
    },
    {
      gradeNum: 3,
      title: "Grade 3 - Sorcerer",
      description: "Master multiplication equations, equal sharing division, simple fractions, rounding, and areas!",
      topics: [
        { name: "Multiplication (Mountain)", worldId: "g3-multiplication", icon: "🏔️", bg: "bg-orange-50 border-orange-300 hover:border-orange-400", text: "text-orange-855", badge: "Equations 🏔️" },
        { name: "Division sharing (Kingdom)", worldId: "g3-division", icon: "👑", bg: "bg-yellow-50 border-yellow-300 hover:border-yellow-400", text: "text-yellow-805", badge: "Sharing 👑" },
        { name: "Fraction Potions (Lab)", worldId: "g3-fractions", icon: "🧪", bg: "bg-rose-50 border-rose-300 hover:border-rose-400", text: "text-rose-900", badge: "Equivalent 🧪" },
        { name: "Rounding Peak", worldId: "g3-base-ten", icon: "🎯", bg: "bg-indigo-50 border-indigo-300 hover:border-indigo-400", text: "text-indigo-900", badge: "Rounding 🎯" },
        { name: "Area & Perimeter Ruins", worldId: "g3-measurement", icon: "📏", bg: "bg-orange-50 border-orange-300 hover:border-orange-400", text: "text-orange-900", badge: "Perimeter 📏" },
        { name: "Shape Matrix Lab", worldId: "g3-geometry", icon: "📐", bg: "bg-rose-50 border-rose-300 hover:border-rose-400", text: "text-rose-900", badge: "Shapes 📐" }
      ]
    },
    {
      gradeNum: 4,
      title: "Grade 4 - Archmage",
      description: "Conquer complex double-digit multiplication, long division, like fractions, primes, and angles!",
      isLocked: false,
      topics: [
        { name: "Long Multiplication Peak", worldId: "g4-multiplication", icon: "⚡", bg: "bg-indigo-50 border-indigo-300 hover:border-indigo-400", text: "text-indigo-900", badge: "Multi-Digit ⚡" },
        { name: "Long Division Dungeon", worldId: "g4-division", icon: "🧗", bg: "bg-purple-50 border-purple-300 hover:border-purple-400", text: "text-purple-800", badge: "Remainders 🧗" },
        { name: "Fraction Operations River", worldId: "g4-fractions", icon: "💎", bg: "bg-teal-50 border-teal-300 hover:border-teal-400", text: "text-teal-900", badge: "Like Denom 💎" },
        { name: "Factor Pattern Peak", worldId: "g4-patterns", icon: "🌀", bg: "bg-sky-50 border-sky-300 hover:border-sky-400", text: "text-sky-800", badge: "Patterns 🌀" },
        { name: "Angle & Unit Labyrinth", worldId: "g4-measurement", icon: "🧭", bg: "bg-teal-50 border-teal-300 hover:border-teal-400", text: "text-teal-900", badge: "Angles 🧭" },
        { name: "Line & Symmetry Dungeon", worldId: "g4-geometry", icon: "🦋", bg: "bg-purple-50 border-purple-300 hover:border-purple-400", text: "text-purple-800", badge: "Symmetry 🦋" }
      ]
    },
    {
      gradeNum: 5,
      title: "Grade 5 - Grandmaster",
      description: "Command decimal operations, box coordinate graphing, unlike fractions, algebra, and volumes!",
      isLocked: false,
      topics: [
        { name: "Decimal Desert Oasis", worldId: "g5-decimals", icon: "🏜️", bg: "bg-sky-50 border-sky-300 hover:border-sky-400", text: "text-sky-800", badge: "Operations 🏜️" },
        { name: "Volume Coordinate Matrix", worldId: "g5-geometry", icon: "📐", bg: "bg-teal-50 border-teal-300 hover:border-teal-400", text: "text-teal-900", badge: "Graphing 📐" },
        { name: "Unlike Denominator Summit", worldId: "g5-fractions", icon: "⚡", bg: "bg-indigo-50 border-indigo-300 hover:border-indigo-400", text: "text-indigo-900", badge: "Advanced Sums ⚡" },
        { name: "Expression Oasis", worldId: "g5-algebra", icon: "🧪", bg: "bg-sky-50 border-sky-300 hover:border-sky-400", text: "text-sky-800", badge: "Algebra 🧪" },
        { name: "Volume Summit", worldId: "g5-measurement", icon: "📦", bg: "bg-indigo-50 border-indigo-300 hover:border-indigo-400", text: "text-indigo-900", badge: "Volume 📦" }
      ]
    },
    {
      gradeNum: 6,
      title: "Grade 6 - Wizard",
      description: "Master ratios, basic algebraic expressions, statistics, coordinates, and polygon areas!",
      topics: [
        { name: "Ratio & Rate Ruins", worldId: "g6-ratios", icon: "⚖️", bg: "bg-amber-50 border-amber-300 hover:border-amber-400", text: "text-amber-900", badge: "Ratios ⚖️" },
        { name: "Expression Dungeon", worldId: "g6-algebra", icon: "📜", bg: "bg-rose-50 border-rose-300 hover:border-rose-400", text: "text-rose-900", badge: "Algebra 📜" },
        { name: "Stats Swamp", worldId: "g6-statistics", icon: "📊", bg: "bg-emerald-50 border-emerald-300 hover:border-emerald-400", text: "text-emerald-800", badge: "Statistics 📊" },
        { name: "Coordinate Ruins", worldId: "g6-number-system", icon: "🎯", bg: "bg-amber-50 border-amber-300 hover:border-amber-400", text: "text-amber-900", badge: "Coordinates 🎯" },
        { name: "Area & Net Swamp", worldId: "g6-geometry", icon: "📐", bg: "bg-emerald-50 border-emerald-300 hover:border-emerald-400", text: "text-emerald-800", badge: "Nets 📐" }
      ]
    },
    {
      gradeNum: 7,
      title: "Grade 7 - Warlock",
      description: "Conquer integers, equations with percents, probability scales, rates, and circle geometry!",
      topics: [
        { name: "Rational Pit", worldId: "g7-integers", icon: "🕳️", bg: "bg-indigo-50 border-indigo-300 hover:border-indigo-400", text: "text-indigo-900", badge: "Integers 🕳️" },
        { name: "Percent Pyramids", worldId: "g7-percentages", icon: "📈", bg: "bg-yellow-50 border-yellow-300 hover:border-yellow-400", text: "text-yellow-850", badge: "Percents 📈" },
        { name: "Probability Casino", worldId: "g7-probability", icon: "🎲", bg: "bg-pink-50 border-pink-300 hover:border-pink-400", text: "text-pink-850", badge: "Probability 🎲" },
        { name: "Proportional Pyramids", worldId: "g7-proportions", icon: "📈", bg: "bg-yellow-50 border-yellow-300 hover:border-yellow-400", text: "text-yellow-850", badge: "Proportions 📈" },
        { name: "Scale & Circle Pit", worldId: "g7-geometry", icon: "⭕", bg: "bg-indigo-50 border-indigo-300 hover:border-indigo-400", text: "text-indigo-900", badge: "Circles ⭕" }
      ]
    },
    {
      gradeNum: 8,
      title: "Grade 8 - Summoner",
      description: "Command multi-step linear systems, exponents, and the Pythagoras Theorem!",
      topics: [
        { name: "Linear Volcano", worldId: "g8-equations", icon: "🌋", bg: "bg-red-50 border-red-300 hover:border-red-400", text: "text-red-900", badge: "Equations 🌋" },
        { name: "Exponent Space Void", worldId: "g8-exponents", icon: "🌌", bg: "bg-sky-50 border-sky-300 hover:border-sky-400", text: "text-sky-800", badge: "Exponents 🌌" },
        { name: "Pythagoras Pyramid", worldId: "g8-geometry", icon: "📐", bg: "bg-teal-50 border-teal-300 hover:border-teal-400", text: "text-teal-900", badge: "Pythagoras 📐" }
      ]
    },
    {
      gradeNum: 9,
      title: "Grade 9 - Alchemist",
      description: "Command quadratic functions, systems of equinoxes, and absolute inequalities!",
      topics: [
        { name: "Quadratic Quagmire", worldId: "g9-quadratics", icon: "🧪", bg: "bg-purple-50 border-purple-300 hover:border-purple-400", text: "text-purple-800", badge: "Quadratics 🧪" },
        { name: "System of Equinoxes", worldId: "g9-systems", icon: "🌀", bg: "bg-blue-50 border-blue-300 hover:border-blue-400", text: "text-blue-800", badge: "Systems 🌀" },
        { name: "Inequality Labyrinth", worldId: "g9-inequalities", icon: "🚧", bg: "bg-orange-50 border-orange-300 hover:border-orange-400", text: "text-orange-900", badge: "Inequalities 🚧" }
      ]
    },
    {
      gradeNum: 10,
      title: "Grade 10 - Necromancer",
      description: "Master trigonometric ratios, circle coordinates, and graphing geometry!",
      topics: [
        { name: "Trigonometry Peak", worldId: "g10-trigonometry", icon: "⛰️", bg: "bg-sky-50 border-sky-300 hover:border-sky-400", text: "text-sky-850", badge: "Trig ⛰️" },
        { name: "Infinite Circles", worldId: "g10-circles", icon: "⭕", bg: "bg-red-50 border-red-300 hover:border-red-400", text: "text-red-900", badge: "Circles ⭕" },
        { name: "Coordinate Crypt", worldId: "g10-geometry", icon: "💀", bg: "bg-slate-100 border-slate-300 hover:border-slate-400", text: "text-slate-905", badge: "Coordinates 💀" }
      ]
    },
    {
      gradeNum: 11,
      title: "Grade 11 - Elder Mage",
      description: "Conquer complex number realms, natural logarithms, and infinite series!",
      topics: [
        { name: "Complex Number Sea", worldId: "g11-complex", icon: "🌊", bg: "bg-teal-50 border-teal-300 hover:border-teal-400", text: "text-teal-900", badge: "Complex 🌊" },
        { name: "Log Lair", worldId: "g11-logarithms", icon: "🪵", bg: "bg-amber-50 border-amber-300 hover:border-amber-400", text: "text-amber-900", badge: "Logarithms 🪵" },
        { name: "Sequence Springs", worldId: "g11-sequences", icon: "⛲", bg: "bg-indigo-50 border-indigo-300 hover:border-indigo-400", text: "text-indigo-900", badge: "Sequences ⛲" }
      ]
    },
    {
      gradeNum: 12,
      title: "Grade 12 - Sage Supreme",
      description: "Embark on advanced limits, differential derivatives, and integral calculus!",
      topics: [
        { name: "Infinity Edge", worldId: "g12-limits", icon: "☁️", bg: "bg-sky-50 border-sky-300 hover:border-sky-400", text: "text-sky-800", badge: "Limits ☁️" },
        { name: "Derivative Canyon", worldId: "g12-derivatives", icon: "📉", bg: "bg-red-50 border-red-300 hover:border-red-400", text: "text-red-900", badge: "Derivatives 📉" },
        { name: "Integral Obelisk Field", worldId: "g12-integrals", icon: "🏛️", bg: "bg-yellow-50 border-yellow-300 hover:border-yellow-400", text: "text-yellow-850", badge: "Integrals 🏛️" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-playful-dots py-6 px-4 flex flex-col select-none">
      
      {/* Scrollbar hiding styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Back navigation header */}
      <header className="max-w-4xl w-full mx-auto mb-6 flex items-center justify-between">
        <Link href="/">
          <Button variant="gray" size="sm" className="flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Home
          </Button>
        </Link>
        <h1 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
          🧙‍♂️ SELECT YOUR GRADE
        </h1>
        <div className="w-16"></div> {/* Spacer to keep header title centered */}
      </header>

      {/* Main registry panel */}
      <main className="max-w-4xl w-full mx-auto flex-grow flex flex-col gap-6 animate-pop-in">
        <div className="text-center space-y-2">
          <p className="text-sm font-bold text-indigo-500 uppercase tracking-wider">Spell Book Registry</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">Choose Your Math Arena</h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm md:text-base font-medium">
            Each grade corresponds to different magical world maps. Scroll through topics or view all to embark on your math battle campaign!
          </p>
        </div>

        {/* Grades list grid */}
        <div className="grid grid-cols-1 gap-6 pt-4">
          {gradesList.map((grade, idx) => (
            <Card
              key={`grade-${idx}`}
              className={`flex flex-col gap-3 relative overflow-hidden ${
                grade.isLocked ? 'opacity-70 bg-slate-50 border-dashed border-2' : 'border-4 border-slate-200 shadow-sm'
              }`}
            >
              {/* Corner ribbon for locks */}
              {grade.isLocked && (
                <div className="absolute top-4 right-4 bg-slate-400 text-white p-1.5 rounded-full shadow-sm z-10">
                  <Lock className="w-4 h-4" />
                </div>
              )}

              {/* Header Info */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl font-black text-xl border-4 ${
                    grade.isLocked 
                      ? 'bg-slate-200 border-slate-300 text-slate-500' 
                      : grade.gradeNum === 1
                      ? 'bg-emerald-100 border-emerald-300 text-emerald-600 animate-float-fast'
                      : grade.gradeNum === 2
                      ? 'bg-sky-100 border-sky-300 text-sky-600 animate-float'
                      : 'bg-orange-100 border-orange-300 text-orange-600 animate-float-slow'
                  }`}>
                    {grade.gradeNum}
                  </div>
                  
                  <div>
                    <h3 className="text-base font-black text-slate-800">{grade.title}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed mt-0.5">{grade.description}</p>
                  </div>
                </div>

                {/* View All Button */}
                {!grade.isLocked && (
                  <Button
                    variant="gray"
                    size="sm"
                    onClick={() => setViewAllGrade(grade)}
                    className="text-xs font-black flex items-center gap-1 hover:bg-slate-200 transition-colors uppercase py-1.5 px-3 shrink-0"
                  >
                    View All <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                  </Button>
                )}
              </div>

              {/* Playable Topics Slider */}
              {!grade.isLocked && (
                <div className="relative w-full">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                    <span>Swipe Quests ➔</span>
                    <span>{grade.topics.length} Available</span>
                  </div>
                  
                  {/* Left scroll arrow button */}
                  <button
                    onClick={() => scrollSlider(grade.gradeNum, 'left')}
                    className="absolute left-1 top-[60%] -translate-y-1/2 bg-white/95 hover:bg-white text-slate-700 hover:text-indigo-600 border-2 border-slate-200 hover:border-indigo-300 shadow-md p-1.5 rounded-full z-10 transition-all hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Right scroll arrow button */}
                  <button
                    onClick={() => scrollSlider(grade.gradeNum, 'right')}
                    className="absolute right-1 top-[60%] -translate-y-1/2 bg-white/95 hover:bg-white text-slate-700 hover:text-indigo-600 border-2 border-slate-200 hover:border-indigo-300 shadow-md p-1.5 rounded-full z-10 transition-all hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Horizontal Scroll Slider Track */}
                  <div 
                    id={`slider-${grade.gradeNum}`}
                    className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-3 px-8 scroll-smooth"
                  >
                    {grade.topics.map((topic, tIdx) => (
                      <Link
                        key={`topic-${idx}-${tIdx}`}
                        href={`/world-map?worldId=${topic.worldId}`}
                        className="snap-start shrink-0"
                      >
                        <div className={`w-[200px] h-[120px] flex flex-col justify-between p-3.5 rounded-2xl border-2 cursor-pointer shadow-sm active:translate-y-0.5 transition-all ${topic.bg} hover:shadow-inner gap-2`}>
                          
                          {/* Top: Icon + Title */}
                          <div className="flex items-start gap-2.5">
                            <span className="text-2xl shrink-0">{topic.icon}</span>
                            <div className="min-w-0">
                              <span className={`text-xs font-black leading-tight block truncate ${topic.text}`}>{topic.name}</span>
                            </div>
                          </div>

                          {/* Bottom: Quest badge & Action */}
                          <div className="flex justify-between items-center border-t border-slate-700/5 pt-2 mt-auto">
                            {topic.badge ? (
                              <span className="text-[8px] font-black bg-white/70 px-1.5 py-0.5 rounded-full uppercase tracking-wider text-slate-650 shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-slate-200/50">
                                {topic.badge}
                              </span>
                            ) : (
                              <div />
                            )}
                            <span className="text-[9px] font-bold text-indigo-600 flex items-center gap-0.5">
                              Play ➔
                            </span>
                          </div>

                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Locked Grade Block */}
              {grade.isLocked && (
                <div className="py-4 text-center text-slate-400">
                  <div className="flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wide">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Locked Territory</span>
                  </div>
                  <p className="text-[10px] font-medium leading-normal text-slate-400 mt-1">This magic spellbook will be unlocked in a future semester!</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </main>

      {/* View All Overlay Modal */}
      {viewAllGrade !== null && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <Card padding="lg" className="w-full max-w-2xl max-h-[85vh] overflow-y-auto relative animate-pop-in border-4 border-slate-800/20 bg-white flex flex-col gap-4">
            
            {/* Close button */}
            <button
              onClick={() => setViewAllGrade(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center pb-4 border-b-2 border-slate-150">
              <span className="text-4xl animate-bounce-slow inline-block">📖</span>
              <h3 className="text-xl font-black text-slate-800 mt-1">{viewAllGrade.title}</h3>
              <p className="text-xs text-slate-400 font-extrabold uppercase tracking-wider mt-0.5">
                Complete Quest Catalog • {viewAllGrade.topics.length} Math Arenas
              </p>
            </div>

            {/* Expanded Quest Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 overflow-y-auto max-h-[45vh] pr-1 scrollbar-thin">
              {viewAllGrade.topics.map((topic, tIdx) => (
                <Link
                  key={`expanded-topic-${tIdx}`}
                  href={`/world-map?worldId=${topic.worldId}`}
                  onClick={() => setViewAllGrade(null)}
                >
                  <div className={`flex flex-col justify-between p-4 rounded-2xl border-2 cursor-pointer shadow-sm active:translate-y-0.5 hover:shadow-inner transition-all h-[130px] ${topic.bg} gap-2`}>
                    
                    {/* Top Icon + Title */}
                    <div className="flex items-start gap-2.5">
                      <span className="text-3xl shrink-0">{topic.icon}</span>
                      <div className="min-w-0">
                        <span className={`text-xs font-black leading-tight block ${topic.text}`}>{topic.name}</span>
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="flex justify-between items-center border-t border-slate-700/5 pt-2 mt-auto">
                      {topic.badge ? (
                        <span className="text-[8px] font-black bg-white/70 px-1.5 py-0.5 rounded-full uppercase tracking-wider text-slate-650 border border-slate-205">
                          {topic.badge}
                        </span>
                      ) : (
                        <div />
                      )}
                      <span className="text-[9px] font-bold text-indigo-600">
                        Play ➔
                      </span>
                    </div>

                  </div>
                </Link>
              ))}
            </div>

            {/* Close spellbook CTA */}
            <Button
              variant="gray"
              fullWidth
              onClick={() => setViewAllGrade(null)}
              className="font-black text-xs uppercase py-2.5"
            >
              Close Spellbook 📖
            </Button>
          </Card>
        </div>
      )}

      {/* Simple footer branding */}
      <footer className="mt-12 text-center text-slate-400 text-xs font-medium py-4">
        🔒 TinyBee is a safe ad-free learning zone.
      </footer>
    </div>
  );
}
