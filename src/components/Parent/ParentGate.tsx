import React, { useState, useEffect } from 'react';
import { Card } from '@/components/UI/Card';
import { Button } from '@/components/UI/Button';
import { X } from 'lucide-react';

interface ParentGateProps {
  onSuccess: () => void;
  onClose: () => void;
}

export const ParentGate: React.FC<ParentGateProps> = ({
  onSuccess,
  onClose
}) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState<'x' | '-' | '+'>('+');
  const [answer, setAnswer] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Generate a random mental math puzzle suited for adults but hard for younger kids
  const generatePuzzle = () => {
    const ops: ('x' | '-' | '+')[] = ['x', '-', '+'];
    const chosenOp = ops[Math.floor(Math.random() * ops.length)];
    setOperator(chosenOp);

    if (chosenOp === 'x') {
      // 6x7, 7x8, etc.
      setNum1(Math.floor(Math.random() * 4) + 6); // 6-9
      setNum2(Math.floor(Math.random() * 6) + 4); // 4-9
    } else if (chosenOp === '-') {
      // 74-29, 65-38, etc.
      setNum1(Math.floor(Math.random() * 40) + 50); // 50-89
      setNum2(Math.floor(Math.random() * 25) + 15); // 15-39
    } else {
      // 38+45, 56+27, etc.
      setNum1(Math.floor(Math.random() * 30) + 20); // 20-49
      setNum2(Math.floor(Math.random() * 30) + 25); // 25-54
    }
    setAnswer('');
    setErrorMsg('');
  };

  useEffect(() => {
    generatePuzzle();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Evaluate answer
    let expected = 0;
    if (operator === 'x') {
      expected = num1 * num2;
    } else if (operator === '-') {
      expected = num1 - num2;
    } else {
      expected = num1 + num2;
    }

    if (parseInt(answer.trim()) === expected) {
      onSuccess();
    } else {
      setErrorMsg('Oops! That was incorrect. Let\'s try another puzzle.');
      generatePuzzle();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm select-none">
      <Card padding="lg" className="w-full max-w-sm text-slate-800 shadow-2xl relative border-4 border-slate-700/10">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1 bg-slate-100 hover:bg-slate-200 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <span className="text-3xl">🔒</span>
          <h2 className="text-2xl font-bold text-slate-800 mt-2">Parent Gate</h2>
          <p className="text-sm text-slate-500 mt-1">
            Please solve this equation to verify you are a parent or guardian.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-slate-50 border-2 border-slate-200 p-6 rounded-2xl text-center">
            <p className="text-3xl font-extrabold text-slate-700 tracking-wider">
              {num1} {operator === 'x' ? '×' : operator} {num2} = ?
            </p>
          </div>

          <div>
            <input
              type="number"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your answer"
              className="w-full px-4 py-3 bg-white border-2 border-slate-200 focus:border-academy-blue rounded-xl text-center text-xl font-bold outline-none transition-colors"
              autoFocus
              required
            />
          </div>

          {errorMsg && (
            <p className="text-sm font-bold text-red-500 text-center animate-shake">
              {errorMsg}
            </p>
          )}

          <div className="flex gap-3">
            <Button
              type="button"
              variant="gray"
              onClick={onClose}
              fullWidth
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="blue"
              fullWidth
            >
              Unlock 🔓
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
