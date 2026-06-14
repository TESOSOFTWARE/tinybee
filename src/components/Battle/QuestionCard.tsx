import React from 'react';
import { Question } from '@/data/questions';
import { Card } from '@/components/UI/Card';
import { Button } from '@/components/UI/Button';
import { Volume2 } from 'lucide-react';
import { speakText } from '@/utils/tts';
import { VocabIcon } from '@/components/UI/VocabIcon';

interface QuestionCardProps {
  questionData: Question;
  onAnswerSelect: (answer: string) => void;
  disabled?: boolean;
  subject?: 'math' | 'english';
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  questionData,
  onAnswerSelect,
  disabled = false,
  subject = 'math'
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
    <div className="w-full max-w-lg mx-auto flex flex-col gap-4 sm:gap-6 select-none animate-pop-in">
      {/* Mathematical scroll */}
      <Card variant="scroll" padding="md" className="text-center relative">
        {/* Ribbon decoration */}
        <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 border-2 text-white font-bold px-4 py-0.5 rounded-full text-xs shadow flex items-center gap-1.5 select-none ${
          subject === 'english'
            ? 'bg-indigo-500 border-indigo-600'
            : 'bg-amber-500 border-amber-600'
        }`}>
          {subject === 'english' ? '📜 ENGLISH SPELL' : '📜 MATH SPELL'}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              speakText(question);
            }}
            className={`cursor-pointer hover:scale-115 active:scale-95 transition-transform flex items-center justify-center p-0.5 rounded-md border ${
              subject === 'english'
                ? 'bg-indigo-600/60 hover:bg-indigo-700/80 border-indigo-400/50'
                : 'bg-amber-600/60 hover:bg-amber-700/80 border-amber-400/50'
            }`}
            title="Read Question Out Loud 🔊"
          >
            <Volume2 className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
        
        {/* Big crisp question text */}
        <div className="flex flex-col items-center justify-center gap-3">
          {questionData.imageUrl && (
            <div className="mt-2">
              <VocabIcon imageUrl={questionData.imageUrl} size={96} />
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide mt-2 mb-1 text-slate-800 animate-pulse-slow">
            {question}
          </h2>
        </div>
      </Card>

      {/* Chunky options list */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {choices.map((choice, index) => (
          <Button
            key={`${questionData.id}-choice-${index}`}
            variant={choiceBtnColors[index % choiceBtnColors.length]}
            size="lg"
            onClick={() => onAnswerSelect(choice)}
            disabled={disabled}
            className="text-lg sm:text-2xl md:text-3xl font-extrabold h-12 sm:h-16 md:h-20"
          >
            {choice}
          </Button>
        ))}
      </div>
    </div>
  );
};
