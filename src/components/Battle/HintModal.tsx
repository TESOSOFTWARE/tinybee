import { Question } from '@/data/questions';
import { Card } from '@/components/UI/Card';
import { Button } from '@/components/UI/Button';

interface HintModalProps {
  questionData: Question;
  onClose: () => void;
  subject?: 'math' | 'english';
}

export const HintModal: React.FC<HintModalProps> = ({
  questionData,
  onClose,
  subject = 'math'
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
        <div className={`absolute -top-6 left-1/2 -translate-x-1/2 border-4 rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-lg animate-bounce-slow ${
          subject === 'english' ? 'bg-indigo-400 border-indigo-600' : 'bg-amber-400 border-amber-600'
        }`}>
          💡
        </div>

        <div className="mt-4 text-center">
          <p className={`text-lg font-bold mb-2 ${
            subject === 'english' ? 'text-indigo-900' : 'text-amber-900'
          }`}>
            {encouragementText}
          </p>
          <hr className={`border-t-2 my-3 ${
            subject === 'english' ? 'border-indigo-200' : 'border-amber-200'
          }`} />
        </div>

        <div className="my-4 space-y-4">
          {/* Question and answer */}
          <div className={`${
            subject === 'english' ? 'bg-indigo-100/50 border-indigo-200' : 'bg-amber-100/50 border-amber-200'
          } p-4 rounded-2xl border-2 text-center`}>
            <p className={`text-sm font-semibold uppercase tracking-wide ${
              subject === 'english' ? 'text-indigo-800' : 'text-amber-800'
            }`}>
              {subject === 'english' ? 'The Question' : 'The Equation'}
            </p>
            <p className="text-2xl font-bold text-slate-800 my-1">{question}</p>
            <p className="text-base text-slate-600 mt-2">
              Correct Answer is: <span className="font-extrabold text-forest-green-dark text-xl px-2 py-0.5 bg-green-100 rounded-lg">{correctAnswer}</span>
            </p>
          </div>

          {/* Hint */}
          <div className="space-y-1">
            <span className={`text-xs font-bold uppercase tracking-wider ${
              subject === 'english' ? 'text-indigo-900' : 'text-amber-900'
            }`}>💡 Magic Hint</span>
            <p className={`text-base font-medium text-slate-700 bg-amber-50 border p-3 rounded-xl italic ${
              subject === 'english' ? 'border-indigo-100' : 'border-amber-100'
            }`}>
              {hint}
            </p>
          </div>

          {/* Explanation */}
          <div className="space-y-1">
            <span className={`text-xs font-bold uppercase tracking-wider ${
              subject === 'english' ? 'text-indigo-900' : 'text-amber-900'
            }`}>📖 Spell Explanation</span>
            <p className={`text-base text-slate-600 bg-amber-50 border p-3 rounded-xl ${
              subject === 'english' ? 'border-indigo-100' : 'border-amber-100'
            }`}>
              {explanation}
            </p>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-6">
          <Button
            variant={subject === 'english' ? 'blue' : 'yellow'}
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
