import React from 'react';

interface ProgressBarProps {
  value: number; // 0 to max
  max: number;
  color?: string; // Tailwind bg color class
  height?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  label?: string;
  animate?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  color = 'bg-academy-blue',
  height = 'md',
  showLabel = false,
  label = '',
  animate = true
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const heightStyles = {
    sm: 'h-3',
    md: 'h-6',
    lg: 'h-8'
  };

  return (
    <div className="w-full select-none">
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-1.5 text-sm md:text-base font-bold text-slate-600">
          <span>{label}</span>
          <span>{Math.round(value)} / {Math.round(max)}</span>
        </div>
      )}
      <div className={`w-full bg-slate-200 border-4 border-slate-700/10 rounded-full overflow-hidden ${heightStyles[height]}`}>
        <div
          className={`h-full rounded-full transition-all duration-300 ease-out shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)] ${color} ${
            animate ? 'animate-pulse-slow' : ''
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
