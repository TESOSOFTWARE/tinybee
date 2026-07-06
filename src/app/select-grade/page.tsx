'use client';

import React, { useState, useEffect } from 'react';
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

import { WORLDS_DATABASE, WorldConfig } from '@/data/worlds';
import { APP_CONFIG } from '@/data/config';

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
        setHiddenGradeIds(Array.from(new Set([...APP_CONFIG.hiddenGradeIds, ...JSON.parse(savedHidden)])));
      } catch (e) {}
    }
    const savedWorlds = localStorage.getItem('tinybee_worlds_database');
    if (savedWorlds) {
      try {
        setCustomWorlds(JSON.parse(savedWorlds));
      } catch (e) {}
    }
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

  // Helper to group worlds by grade
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

    // Define standard grade titles and descriptions
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
        bg: world.bgStyle || "bg-slate-50 border-slate-300 hover:border-slate-400",
        text: world.textStyle || "text-slate-900",
        badge: world.badge
      });
    });

    // Sort by grade number (K first, then 1, 2, ...)
    return Object.values(gradesMap).sort((a, b) => {
      const aNum = a.gradeNum === 'K' ? 0 : Number(a.gradeNum);
      const bNum = b.gradeNum === 'K' ? 0 : Number(b.gradeNum);
      return aNum - bNum;
    });
  };

  const gradesList = getGradesList(selectedSubject);

  return (
    <div className="min-h-screen bg-playful-dots py-6 px-4 flex flex-col select-none">

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

      {/* Back navigation header */}
      <header className="max-w-4xl w-full mx-auto mb-6 flex items-center justify-between">
        <Link href="/">
          <Button variant="gray" size="sm" className="flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Home
          </Button>
        </Link>
        <h1 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
          🧙‍♂️ SELECT YOUR ARENA
        </h1>
        <div className="w-16"></div> {/* Spacer to keep header title centered */}
      </header>

      {/* Main registry panel */}
      <main className="max-w-4xl w-full mx-auto flex-grow flex flex-col gap-6 animate-pop-in">
        <div className="text-center space-y-2">
          <p className="text-sm font-bold text-indigo-500 uppercase tracking-wider">Spell Book Registry</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Choose Your {selectedSubject === 'math' ? 'Math' : 'English'} Arena
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm md:text-base font-medium">
            Each grade corresponds to different magical world maps. Scroll through topics or view all to embark on your {selectedSubject === 'math' ? 'math' : 'English'} battle campaign!
          </p>
        </div>

        {/* Dynamic Subject Switcher Tabs */}
        <div className="flex gap-4 max-w-md w-full mx-auto mb-2 bg-slate-100 p-2 rounded-3xl border-4 border-slate-200 shadow-sm">
          <button
            onClick={() => {
              handleSubjectChange('math');
              setViewAllGrade(null);
            }}
            className={`flex-1 py-3 px-4 sm:px-6 rounded-2xl font-black text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer ${selectedSubject === 'math'
                ? 'bg-amber-400 text-slate-800 shadow-md border-2 border-amber-500 scale-102 font-black'
                : 'bg-transparent text-slate-500 hover:text-slate-700 font-bold border-2 border-transparent'
              }`}
          >
            📐 Math Arena
          </button>
          <button
            onClick={() => {
              handleSubjectChange('english');
              setViewAllGrade(null);
            }}
            className={`flex-1 py-3 px-4 sm:px-6 rounded-2xl font-black text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer ${selectedSubject === 'english'
                ? 'bg-indigo-500 text-white shadow-md border-2 border-indigo-600 scale-102 font-black'
                : 'bg-transparent text-slate-500 hover:text-slate-700 font-bold border-2 border-transparent'
              }`}
          >
            🔤 English Arena
          </button>
        </div>

        {/* Grades list grid */}
        <div className="grid grid-cols-1 gap-6 pt-4">
          {gradesList.map((grade, idx) => (
            <Card
              key={`grade-${idx}`}
              className={`flex flex-col gap-3 relative overflow-hidden ${grade.isLocked ? 'opacity-70 bg-slate-50 border-dashed border-2' : 'border-4 border-slate-200 shadow-sm'
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
                  <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl font-black text-xl border-4 ${grade.isLocked
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
                Complete Quest Catalog • {viewAllGrade.topics.length} {selectedSubject === 'math' ? 'Math' : 'English'} Arenas
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
