'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Lock, X, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

import { WORLDS_DATABASE, WorldConfig } from '@/data/worlds';
import { APP_CONFIG } from '@/data/config';

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
  const [selectedSubject, setSelectedSubject] = useState<'math' | 'english'>('math');
  const [deletedWorldIds, setDeletedWorldIds] = useState<string[]>([]);
  const [hiddenGradeIds, setHiddenGradeIds] = useState<string[]>(APP_CONFIG.hiddenGradeIds);
  const [customWorlds, setCustomWorlds] = useState<{ [id: string]: WorldConfig }>({});

  useEffect(() => {
    const savedSubject = localStorage.getItem('selected_arena_subject');
    if (savedSubject === 'math' || savedSubject === 'english') {
      setSelectedSubject(savedSubject);
    }
    const savedDeleted = localStorage.getItem('deleted_world_ids');
    if (savedDeleted) {
      try {
        setDeletedWorldIds(JSON.parse(savedDeleted));
      } catch (e) {}
    }
    const savedHidden = localStorage.getItem('hidden_grade_ids');
    if (savedHidden) {
      try {
        setHiddenGradeIds(JSON.parse(savedHidden));
      } catch (e) {}
    }
    const savedWorlds = localStorage.getItem('tinybee_worlds_database');
    if (savedWorlds) {
      try {
        setCustomWorlds(JSON.parse(savedWorlds));
      } catch (e) {}
    }
    
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'hidden_grade_ids' && e.newValue) {
        try { setHiddenGradeIds(JSON.parse(e.newValue)); } catch (err) {}
      }
      if (e.key === 'deleted_world_ids' && e.newValue) {
        try { setDeletedWorldIds(JSON.parse(e.newValue)); } catch (err) {}
      }
      if (e.key === 'tinybee_worlds_database' && e.newValue) {
        try { setCustomWorlds(JSON.parse(e.newValue)); } catch (err) {}
      }
      if (e.key === 'selected_arena_subject' && (e.newValue === 'math' || e.newValue === 'english')) {
        setSelectedSubject(e.newValue as 'math' | 'english');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleSubjectChange = (subject: 'math' | 'english') => {
    setSelectedSubject(subject);
    localStorage.setItem('selected_arena_subject', subject);
  };

  const scrollSlider = (gradeNum: string | number, direction: 'left' | 'right') => {
    const slider = document.getElementById(`slider-${gradeNum}`);
    if (slider) {
      const scrollAmount = direction === 'left' ? -216 : 216; // width 200px + gap-4 (16px)
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getGradesList = (subject: 'math' | 'english'): GradeCardProps[] => {
    const allWorlds = { ...WORLDS_DATABASE, ...customWorlds };
    const worlds = Object.values(allWorlds).filter(w => {
      const isCorrectSubject = (w.subject || 'math') === subject;
      const isDeleted = deletedWorldIds.includes(w.id);
      const isHiddenWorld = !!w.isHidden;
      
      const gradeKey = w.grade.toString() === '0' ? 'K' : w.grade.toString();
      const isHidden = hiddenGradeIds.includes(gradeKey);
      
      return isCorrectSubject && !isDeleted && !isHiddenWorld && !isHidden;
    });
    const gradesMap: { [key: string]: GradeCardProps } = {};

    const gradeInfo: { [key: string]: { title: string, description: string } } = {
      'K': {
        title: "Kindergarten - Novice",
        description: subject === 'math'
          ? "Learn counting, number names, shapes, group comparisons, base-ten, and operations!"
          : "Explore the alphabet, sight words, and letter sounds in beautiful magical lands!"
      },
      '1': {
        title: "Grade 1 - Apprentice",
        description: subject === 'math'
          ? "Unlock single-digit addition, subtraction, place values, time, and basic partitions!"
          : "Learn essential spelling patterns and expand your vocabulary in nature!"
      },
      '2': {
        title: "Grade 2 - Mage",
        description: subject === 'math'
          ? "Command double-digit carries, borrowing regrouping, clock time, hundreds, and shape shares!"
          : "Master parts of speech, capitalization, punctuation, and sentence structures!"
      },
      '3': {
        title: "Grade 3 - Sorcerer",
        description: subject === 'math'
          ? "Master multiplication equations, equal sharing division, simple fractions, rounding, and areas!"
          : "Conquer advanced parts of speech and read stories to uncover their secrets!"
      },
      '4': {
        title: "Grade 4 - Archmage",
        description: subject === 'math'
          ? "Conquer complex double-digit multiplication, long division, like fractions, primes, and angles!"
          : "Explore synonyms, antonyms, homophones, and advanced punctuation rules!"
      },
      '5': {
        title: "Grade 5 - Grandmaster",
        description: subject === 'math'
          ? "Command decimal operations, box coordinate graphing, unlike fractions, algebra, and volumes!"
          : "Unlock figurative language and analyze prefixes, suffixes, and root words!"
      },
      '6': {
        title: "Grade 6 - Wizard",
        description: subject === 'math'
          ? "Master ratios, basic algebraic expressions, statistics, coordinates, and polygon areas!"
          : "Master pronoun-antecedent agreement and unlock word relationship analogies!"
      },
      '7': {
        title: "Grade 7 - Warlock",
        description: subject === 'math'
          ? "Conquer integers, equations with percents, probability scales, rates, and circle geometry!"
          : "Conquer dependent and independent clauses and expand your vocabulary range!"
      },
      '8': {
        title: "Grade 8 - Summoner",
        description: subject === 'math'
          ? "Command multi-step linear systems, exponents, and the Pythagoras Theorem!"
          : "Understand active and passive voices and master gerunds, participles, and infinitives!"
      },
      '9': {
        title: "Grade 9 - Alchemist",
        description: subject === 'math'
          ? "Command quadratic functions, systems of equinoxes, and absolute inequalities!"
          : "Analyze rhetorical appeals (ethos, pathos, logos) and spot logical fallacies!"
      },
      '10': {
        title: "Grade 10 - Necromancer",
        description: subject === 'math'
          ? "Master trigonometric ratios, circle coordinates, and graphing geometry!"
          : "Examine complex literary devices like situational irony, oxymorons, and allegories!"
      },
      '11': {
        title: "Grade 11 - Elder Mage",
        description: subject === 'math'
          ? "Conquer complex number realms, natural logarithms, and infinite series!"
          : "Craft sophisticated sentences using parallel structures and inverted syntax!"
      },
      '12': {
        title: "Grade 12 - Sage Supreme",
        description: subject === 'math'
          ? "Embark on advanced limits, differential derivatives, and integral calculus!"
          : "Analyze symbolic contrasts, subtle subtext, and tone vs. mood in complex texts!"
      }
    };

    worlds.forEach(world => {
      const gradeKey = world.grade.toString();
      if (!gradesMap[gradeKey]) {
        gradesMap[gradeKey] = {
          gradeNum: world.grade,
          title: gradeInfo[gradeKey]?.title || `Grade ${gradeKey}`,
          description: world.description || gradeInfo[gradeKey]?.description || "",
          topics: [],
          isLocked: false
        };
      }

      gradesMap[gradeKey].topics.push({
        name: world.name,
        worldId: world.id,
        icon: world.emoji,
        bg: world.bgStyle || "bg-slate-50 border-slate-300",
        text: world.textStyle || "text-slate-900",
        badge: world.badge
      });
    });

    return Object.values(gradesMap).sort((a, b) => {
      const aNum = a.gradeNum === 'K' ? 0 : Number(a.gradeNum);
      const bNum = b.gradeNum === 'K' ? 0 : Number(b.gradeNum);
      return aNum - bNum;
    });
  };

  const gradesList = getGradesList(selectedSubject);

  const GRADE_THEMES = [
    {
      card: "bg-white border-4 border-emerald-400 shadow-[0_10px_0_0_#10b981] rounded-[2.2rem]",
      badge: "bg-emerald-500 text-white border-4 border-emerald-200 shadow-[0_4px_0_0_#047857]",
      viewAllBtn: "bg-emerald-50 text-emerald-700 border-2 border-emerald-400 hover:bg-emerald-500 hover:text-white shadow-[0_4px_0_0_#10b981] active:translate-y-1 active:shadow-none",
      headerBorder: "border-b-2 border-emerald-100",
      textColor: "text-emerald-950",
      descColor: "text-emerald-700"
    },
    {
      card: "bg-white border-4 border-sky-400 shadow-[0_10px_0_0_#0ea5e9] rounded-[2.2rem]",
      badge: "bg-sky-500 text-white border-4 border-sky-200 shadow-[0_4px_0_0_#0369a1]",
      viewAllBtn: "bg-sky-50 text-sky-700 border-2 border-sky-400 hover:bg-sky-500 hover:text-white shadow-[0_4px_0_0_#0ea5e9] active:translate-y-1 active:shadow-none",
      headerBorder: "border-b-2 border-sky-100",
      textColor: "text-sky-950",
      descColor: "text-sky-700"
    },
    {
      card: "bg-white border-4 border-purple-400 shadow-[0_10px_0_0_#a855f7] rounded-[2.2rem]",
      badge: "bg-purple-500 text-white border-4 border-purple-200 shadow-[0_4px_0_0_#6b21a8]",
      viewAllBtn: "bg-purple-50 text-purple-700 border-2 border-purple-400 hover:bg-purple-500 hover:text-white shadow-[0_4px_0_0_#a855f7] active:translate-y-1 active:shadow-none",
      headerBorder: "border-b-2 border-purple-100",
      textColor: "text-purple-950",
      descColor: "text-purple-700"
    },
    {
      card: "bg-white border-4 border-amber-400 shadow-[0_10px_0_0_#f59e0b] rounded-[2.2rem]",
      badge: "bg-amber-500 text-white border-4 border-amber-200 shadow-[0_4px_0_0_#b45309]",
      viewAllBtn: "bg-amber-50 text-amber-800 border-2 border-amber-400 hover:bg-amber-500 hover:text-white shadow-[0_4px_0_0_#f59e0b] active:translate-y-1 active:shadow-none",
      headerBorder: "border-b-2 border-amber-100",
      textColor: "text-amber-950",
      descColor: "text-amber-800"
    },
    {
      card: "bg-white border-4 border-rose-400 shadow-[0_10px_0_0_#f43f5e] rounded-[2.2rem]",
      badge: "bg-rose-500 text-white border-4 border-rose-200 shadow-[0_4px_0_0_#be123c]",
      viewAllBtn: "bg-rose-50 text-rose-700 border-2 border-rose-400 hover:bg-rose-500 hover:text-white shadow-[0_4px_0_0_#f43f5e] active:translate-y-1 active:shadow-none",
      headerBorder: "border-b-2 border-rose-100",
      textColor: "text-rose-950",
      descColor: "text-rose-700"
    },
  ];

  const TOPIC_PALETTES = [
    {
      box: "bg-[#eff6ff] border-[3px] border-[#3b82f6] shadow-[0_6px_0_0_#3b82f6] group-hover:shadow-[0_10px_0_0_#3b82f6] text-[#1e40af]",
      badgeBg: "bg-[#dbeafe] text-[#1d4ed8] border border-[#93c5fd]",
      playBtn: "bg-[#3b82f6] text-white shadow-[0_3px_0_0_#1d4ed8]"
    },
    {
      box: "bg-[#f0fdf4] border-[3px] border-[#22c55e] shadow-[0_6px_0_0_#22c55e] group-hover:shadow-[0_10px_0_0_#22c55e] text-[#15803d]",
      badgeBg: "bg-[#dcfce7] text-[#15803d] border border-[#86efac]",
      playBtn: "bg-[#22c55e] text-white shadow-[0_3px_0_0_#15803d]"
    },
    {
      box: "bg-[#fffbeb] border-[3px] border-[#f59e0b] shadow-[0_6px_0_0_#f59e0b] group-hover:shadow-[0_10px_0_0_#f59e0b] text-[#92400e]",
      badgeBg: "bg-[#fef3c7] text-[#b45309] border border-[#fde68a]",
      playBtn: "bg-[#f59e0b] text-white shadow-[0_3px_0_0_#b45309]"
    },
    {
      box: "bg-[#faf5ff] border-[3px] border-[#a855f7] shadow-[0_6px_0_0_#a855f7] group-hover:shadow-[0_10px_0_0_#a855f7] text-[#6b21a8]",
      badgeBg: "bg-[#f3e8ff] text-[#7e22ce] border border-[#d8b4fe]",
      playBtn: "bg-[#a855f7] text-white shadow-[0_3px_0_0_#7e22ce]"
    },
    {
      box: "bg-[#fff1f2] border-[3px] border-[#f43f5e] shadow-[0_6px_0_0_#f43f5e] group-hover:shadow-[0_10px_0_0_#f43f5e] text-[#9f1239]",
      badgeBg: "bg-[#ffe4e6] text-[#be123c] border border-[#fda4af]",
      playBtn: "bg-[#f43f5e] text-white shadow-[0_3px_0_0_#be123c]"
    },
    {
      box: "bg-[#ecfeff] border-[3px] border-[#06b6d4] shadow-[0_6px_0_0_#06b6d4] group-hover:shadow-[0_10px_0_0_#06b6d4] text-[#0e7490]",
      badgeBg: "bg-[#cffafe] text-[#0e7490] border border-[#67e8f9]",
      playBtn: "bg-[#06b6d4] text-white shadow-[0_3px_0_0_#0e7490]"
    }
  ];

  return (
    <div className="relative min-h-screen font-baloo text-[#38345c] select-none flex flex-col">
      {/* Background with overlay */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 bg-cover bg-center -z-10" 
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0.5)), url(/home-cards/background.jpg)',
          backgroundColor: '#cdeafd'
        }}
      ></div>

      {/* Scrollbar hiding styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Header */}
      <header className="border-b border-white/40 sticky top-0 z-20 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link href="/">
            <button className="flex items-center gap-2 whitespace-nowrap rounded-full bg-white border-2 border-[#cbd5e1] px-4 py-1.5 text-sm font-extrabold hover:bg-slate-50 hover:border-slate-400 transition-all shadow-[0_3px_0_0_#cbd5e1] active:translate-y-0.5 active:shadow-none cursor-pointer text-[#38345c]">
              <ArrowLeft className="w-4 h-4 text-blue-500 stroke-[3]" />
              <span>Back Home</span>
            </button>
          </Link>
          <div className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
            <span>🧙‍♂️</span>
            <span className="hidden sm:inline">SELECT ARENA</span>
          </div>
          <div className="w-[110px]"></div> {/* Spacer */}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl w-full mx-auto flex-grow flex flex-col gap-6 pt-6 sm:pt-8 pb-16 px-4 sm:px-6 animate-pop-in">
        
        {/* Title */}
        <div className="text-center w-full">
          <p className="text-sm sm:text-base font-extrabold text-blue-600 uppercase tracking-[0.15em] drop-shadow-sm">Spell Book Registry</p>
          <h2 className="mt-1 text-3xl sm:text-5xl font-black text-slate-900 drop-shadow-sm">
            Choose Your {selectedSubject === 'math' ? 'Math' : 'English'} Arena
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm sm:text-base font-bold text-slate-700">
            Each grade corresponds to different magical world maps. Scroll through topics or view all to embark on your campaign!
          </p>
        </div>

        {/* Dynamic Subject Switcher Tabs */}
        <div className="flex gap-3 max-w-md w-full mx-auto mb-4 bg-white/90 p-2.5 rounded-full border-4 border-slate-300 shadow-[0_6px_0_0_#cbd5e1] backdrop-blur-sm">
          <button
            onClick={() => {
              handleSubjectChange('math');
              setViewAllGrade(null);
            }}
            className={`flex-1 py-3 px-4 sm:px-6 rounded-full font-black text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer ${
              selectedSubject === 'math'
                ? 'bg-[#16a34a] text-white shadow-[0_4px_0_0_#15803d] border-2 border-[#22c55e] scale-100'
                : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-black border-2 border-transparent'
            }`}
          >
            📐 Math Arena
          </button>
          <button
            onClick={() => {
              handleSubjectChange('english');
              setViewAllGrade(null);
            }}
            className={`flex-1 py-3 px-4 sm:px-6 rounded-full font-black text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer ${
              selectedSubject === 'english'
                ? 'bg-[#0284c7] text-white shadow-[0_4px_0_0_#0369a1] border-2 border-[#38bdf8] scale-100'
                : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-black border-2 border-transparent'
            }`}
          >
            🔤 English Arena
          </button>
        </div>

        {/* Grades list grid */}
        <div className="grid grid-cols-1 gap-8 pt-2">
          {gradesList.map((grade, idx) => {
            const theme = GRADE_THEMES[idx % GRADE_THEMES.length];
            return (
              <div
                key={`grade-${idx}`}
                className={`flex flex-col gap-4 relative overflow-hidden p-5 sm:p-6 transition-all duration-300 ${
                  grade.isLocked 
                    ? 'opacity-75 bg-slate-100/90 border-4 border-dashed border-slate-300 rounded-[2.2rem]' 
                    : theme.card
                }`}
              >
                {/* Corner ribbon for locks */}
                {grade.isLocked && (
                  <div className="absolute top-4 right-4 bg-slate-500 text-white p-2 rounded-full shadow-sm z-10">
                    <Lock className="w-4 h-4" />
                  </div>
                )}

                {/* Header Info */}
                <div className={`flex items-center justify-between pb-4 ${grade.isLocked ? 'border-b-2 border-slate-200' : theme.headerBorder}`}>
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center rounded-2xl font-black text-2xl sm:text-3xl transition-transform ${
                      grade.isLocked ? 'bg-slate-200 border-4 border-slate-300 text-slate-500' : `${theme.badge} animate-bounce-slow`
                    }`}>
                      {grade.gradeNum}
                    </div>

                    <div>
                      <h3 className={`text-lg sm:text-2xl font-black leading-tight ${grade.isLocked ? 'text-slate-700' : theme.textColor}`}>
                        {grade.title}
                      </h3>
                      <p className={`text-xs sm:text-sm font-bold leading-relaxed mt-1 line-clamp-2 ${grade.isLocked ? 'text-slate-500' : theme.descColor}`}>
                        {grade.description}
                      </p>
                    </div>
                  </div>

                  {/* View All Button */}
                  {!grade.isLocked && (
                    <button
                      onClick={() => setViewAllGrade(grade)}
                      className={`hidden sm:flex text-xs font-black items-center gap-1.5 transition-all uppercase py-2.5 px-4 rounded-2xl shrink-0 cursor-pointer ${theme.viewAllBtn}`}
                    >
                      View All <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                    </button>
                  )}
                </div>

                {/* Playable Topics Slider */}
                {!grade.isLocked && (
                  <div className="relative w-full pt-1">
                    <div className="flex items-center justify-between text-xs font-black text-slate-500 uppercase tracking-widest mb-3 px-1">
                      <span className="flex items-center gap-1">Swipe Quests <span className="text-sm">➔</span></span>
                      <span className="bg-slate-100 text-slate-700 font-extrabold px-2.5 py-0.5 rounded-full border border-slate-200">{grade.topics.length} Quests</span>
                    </div>

                    {/* Left scroll arrow button */}
                    <button
                      onClick={() => scrollSlider(grade.gradeNum, 'left')}
                      className="absolute -left-2 sm:-left-4 top-[65%] -translate-y-1/2 bg-white hover:bg-amber-100 text-slate-800 border-4 border-slate-300 hover:border-amber-400 shadow-[0_5px_0_0_#cbd5e1] hover:shadow-[0_5px_0_0_#f59e0b] active:shadow-none active:translate-y-1 p-2 sm:p-2.5 rounded-full z-20 transition-all flex items-center justify-center cursor-pointer"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] text-slate-800" />
                    </button>

                    {/* Right scroll arrow button */}
                    <button
                      onClick={() => scrollSlider(grade.gradeNum, 'right')}
                      className="absolute -right-2 sm:-right-4 top-[65%] -translate-y-1/2 bg-white hover:bg-amber-100 text-slate-800 border-4 border-slate-300 hover:border-amber-400 shadow-[0_5px_0_0_#cbd5e1] hover:shadow-[0_5px_0_0_#f59e0b] active:shadow-none active:translate-y-1 p-2 sm:p-2.5 rounded-full z-20 transition-all flex items-center justify-center cursor-pointer"
                      aria-label="Scroll right"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] text-slate-800" />
                    </button>

                    {/* Horizontal Scroll Slider Track */}
                    <div
                      id={`slider-${grade.gradeNum}`}
                      className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 pt-1 px-4 sm:px-6 scroll-smooth"
                    >
                      {grade.topics.map((topic, tIdx) => {
                        const palette = TOPIC_PALETTES[tIdx % TOPIC_PALETTES.length];
                        return (
                          <Link
                            key={`topic-${idx}-${tIdx}`}
                            href={`/world-map?worldId=${topic.worldId}`}
                            className="snap-start shrink-0 group perspective-1000"
                          >
                            <div className={`w-[210px] h-[140px] flex flex-col justify-between p-4 rounded-2xl cursor-pointer group-active:translate-y-1.5 group-active:shadow-none group-hover:-translate-y-1 transition-all duration-200 ${palette.box} gap-2 relative overflow-hidden`}>
                              
                              {/* Top: Icon + Title */}
                              <div className="flex items-start gap-3 relative z-10">
                                <span className="text-3xl shrink-0 drop-shadow group-hover:scale-110 group-hover:rotate-6 transition-all duration-200">{topic.icon}</span>
                                <div className="min-w-0 pt-0.5">
                                  <span className="text-sm font-black leading-tight block text-current">{topic.name}</span>
                                </div>
                              </div>

                              {/* Bottom: Quest badge & Action */}
                              <div className="flex justify-between items-center pt-2 mt-auto relative z-10">
                                {topic.badge ? (
                                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm truncate max-w-[110px] ${palette.badgeBg}`}>
                                    {topic.badge}
                                  </span>
                                ) : (
                                  <div />
                                )}
                                <span className={`text-[11px] font-black px-2.5 py-1 rounded-xl flex items-center gap-1 group-hover:scale-105 transition-transform shrink-0 ${palette.playBtn}`}>
                                  Play <span className="group-hover:translate-x-0.5 transition-transform">➔</span>
                                </span>
                              </div>

                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Locked Grade Block */}
                {grade.isLocked && (
                  <div className="py-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-sm font-black uppercase tracking-wide text-slate-500">
                      <Lock className="w-4 h-4" />
                      <span>Locked Territory</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold leading-normal text-slate-400 mt-2">This magic spellbook will be unlocked in a future semester!</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* View All Overlay Modal */}
      {viewAllGrade !== null && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="w-full max-w-4xl max-h-[90vh] flex flex-col relative animate-pop-in bg-white rounded-[2.5rem] shadow-[0_24px_64px_rgba(0,0,0,0.4)] border-4 border-slate-200 overflow-hidden">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-b from-slate-100 to-white p-6 text-center border-b-4 border-slate-200 relative">
              {/* Close button */}
              <button
                onClick={() => setViewAllGrade(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-slate-800 transition-all p-2 bg-white hover:bg-rose-100 border-2 border-slate-300 hover:border-rose-400 rounded-full shadow-[0_3px_0_0_#cbd5e1] hover:shadow-[0_3px_0_0_#f43f5e] active:translate-y-0.5 active:shadow-none cursor-pointer"
              >
                <X className="w-6 h-6 stroke-[3]" />
              </button>
              
              <span className="text-5xl animate-bounce-slow inline-block drop-shadow-md">📖</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">{viewAllGrade.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-black uppercase tracking-widest mt-1">
                Complete Quest Catalog • {viewAllGrade.topics.length} {selectedSubject === 'math' ? 'Math' : 'English'} Arenas
              </p>
            </div>

            {/* Expanded Quest Grid */}
            <div className="p-6 overflow-y-auto scrollbar-thin bg-slate-50/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-4">
                {viewAllGrade.topics.map((topic, tIdx) => {
                  const palette = TOPIC_PALETTES[tIdx % TOPIC_PALETTES.length];
                  return (
                    <Link
                      key={`expanded-topic-${tIdx}`}
                      href={`/world-map?worldId=${topic.worldId}`}
                      onClick={() => setViewAllGrade(null)}
                      className="group perspective-1000"
                    >
                      <div className={`w-full h-[140px] flex flex-col justify-between p-4 rounded-2xl cursor-pointer group-active:translate-y-1.5 group-active:shadow-none group-hover:-translate-y-1 transition-all duration-200 ${palette.box} gap-2 relative overflow-hidden`}>
                        
                        {/* Top Icon + Title */}
                        <div className="flex items-start gap-3 relative z-10">
                          <span className="text-3xl shrink-0 drop-shadow group-hover:scale-110 group-hover:rotate-6 transition-all duration-200">{topic.icon}</span>
                          <div className="min-w-0 pt-0.5">
                            <span className="text-sm font-black leading-tight block text-current">{topic.name}</span>
                          </div>
                        </div>

                        {/* Bottom Info */}
                        <div className="flex justify-between items-center pt-2 mt-auto relative z-10">
                          {topic.badge ? (
                            <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm truncate max-w-[120px] ${palette.badgeBg}`}>
                              {topic.badge}
                            </span>
                          ) : (
                            <div />
                          )}
                          <span className={`text-[11px] font-black px-2.5 py-1 rounded-xl flex items-center gap-1 group-hover:scale-105 transition-transform shrink-0 ${palette.playBtn}`}>
                            Play <span className="group-hover:translate-x-0.5 transition-transform">➔</span>
                          </span>
                        </div>

                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom action */}
            <div className="p-5 bg-white border-t-4 border-slate-200 text-center">
              <button
                onClick={() => setViewAllGrade(null)}
                className="font-black text-sm uppercase py-3 px-10 rounded-full bg-slate-800 text-white hover:bg-slate-700 hover:-translate-y-0.5 shadow-[0_6px_0_0_#334155] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
              >
                Close Spellbook
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Simple footer branding */}
      <footer className="mt-auto text-center text-slate-500 text-xs font-extrabold py-6 bg-white/70 backdrop-blur-md border-t border-white/40">
        🔒 TinyBee is a safe ad-free learning zone.
      </footer>
    </div>
  );
}
