import React from 'react';
import { MathQuestion } from '@/data/questions';
import { Card } from '@/components/UI/Card';
import { Button } from '@/components/UI/Button';

interface QuestionCardProps {
  questionData: MathQuestion;
  onAnswerSelect: (answer: string) => void;
  disabled?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  questionData,
  onAnswerSelect,
  disabled = false
}) => {
  const { question, choices } = questionData;

  // Colorful choice button mapping
  const choiceBtnColors: ('blue' | 'green' | 'yellow' | 'orange')[] = [
    'blue',
    'green',
    'yellow',
    'orange'
  ];

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-6 select-none animate-pop-in">
      {/* Mathematical scroll */}
      <Card variant="scroll" padding="lg" className="text-center relative">
        {/* Ribbon decoration */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 border-2 border-amber-600 text-white font-bold px-4 py-0.5 rounded-full text-xs shadow">
          📜 MATH SPELL
        </div>
        
        {/* Big crisp question text */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide mt-4 mb-2 text-slate-800 animate-pulse-slow">
          {question}
        </h2>
      </Card>

      {/* Chunky options list */}
      <div className="grid grid-cols-2 gap-4">
        {choices.map((choice, index) => (
          <Button
            key={`${questionData.id}-choice-${index}`}
            variant={choiceBtnColors[index % choiceBtnColors.length]}
            size="lg"
            onClick={() => onAnswerSelect(choice)}
            disabled={disabled}
            className="text-2xl md:text-3xl font-extrabold h-16 md:h-20"
          >
            {choice}
          </Button>
        ))}
      </div>
    </div>
  );
};
