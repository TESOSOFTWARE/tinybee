import React from 'react';
import { MathQuestion } from '@/data/questions';
import { Card } from '@/components/UI/Card';
import { Button } from '@/components/UI/Button';

interface HintModalProps {
  questionData: MathQuestion;
  onClose: () => void;
}

export const HintModal: React.FC<HintModalProps> = ({
  questionData,
  onClose
}) => {
  const { question, correctAnswer, hint, explanation } = questionData;

  const encouragements = [
    "Mistakes help our brains grow! Let's learn! 🌱",
    "Nice try! You are getting closer! 💫",
    "Awesome attempt! Let's look at the magic trick: ✨",
    "No worries, adventurer! Let's review this spell: 🧙‍♂️"
  ];

  // Randomize encouragement based on question ID to keep it fresh but stable
  const encouragementText = encouragements[questionData.id.charCodeAt(0) % encouragements.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-pop-in select-none">
      <Card variant="scroll" padding="lg" className="w-full max-w-md text-slate-800 shadow-2xl relative">
        
        {/* Magic seal decoration */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber-400 border-4 border-amber-600 rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-lg animate-bounce-slow">
          💡
        </div>

        <div className="mt-4 text-center">
          <p className="text-lg font-bold text-amber-900 mb-2">
            {encouragementText}
          </p>
          <hr className="border-amber-200 border-t-2 my-3" />
        </div>

        <div className="my-4 space-y-4">
          {/* Question and answer */}
          <div className="bg-amber-100/50 p-4 rounded-2xl border-2 border-amber-200 text-center">
            <p className="text-sm font-semibold text-amber-800 uppercase tracking-wide">The Equation</p>
            <p className="text-2xl font-bold text-slate-800 my-1">{question}</p>
            <p className="text-base text-slate-600 mt-2">
              Correct Answer is: <span className="font-extrabold text-forest-green-dark text-xl px-2 py-0.5 bg-green-100 rounded-lg">{correctAnswer}</span>
            </p>
          </div>

          {/* Hint */}
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">💡 Magic Hint</span>
            <p className="text-base font-medium text-slate-700 bg-amber-50 border border-amber-100 p-3 rounded-xl italic">
              {hint}
            </p>
          </div>

          {/* Explanation */}
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">📖 Spell Explanation</span>
            <p className="text-base text-slate-600 bg-amber-50 border border-amber-100 p-3 rounded-xl">
              {explanation}
            </p>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-6">
          <Button
            variant="yellow"
            fullWidth
            size="lg"
            onClick={onClose}
            className="text-xl font-bold uppercase tracking-wide"
          >
            Got It! Next Question 🚀
          </Button>
        </div>
      </Card>
    </div>
  );
};
