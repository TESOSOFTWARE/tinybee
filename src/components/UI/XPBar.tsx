import React from 'react';

interface XPBarProps {
  xp: number;
  level: number;
  height?: 'sm' | 'md' | 'lg';
}

export const XPBar: React.FC<XPBarProps> = ({
  xp,
  level,
  height = 'md'
}) => {
  // 500 XP per level
  const xpInCurrentLevel = xp % 500;
  const xpNeededForNextLevel = 500;
  const percentage = (xpInCurrentLevel / xpNeededForNextLevel) * 100;

  const heightStyles = {
    sm: 'h-2.5',
    md: 'h-5',
    lg: 'h-7'
  };

  return (
    <div className="w-full flex items-center gap-3 select-none bg-white/70 backdrop-blur-sm border-2 border-slate-200 p-2 rounded-2xl">
      {/* Level badge */}
      <div className="flex-shrink-0 bg-yellow-400 border-4 border-yellow-600/30 text-amber-950 font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm shadow-md animate-pulse-slow">
        Lvl {level}
      </div>

      {/* Progress Track */}
      <div className="flex-grow">
        <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-0.5 px-1">
          <span>XP: {xp}</span>
          <span>Next Lvl: {xpNeededForNextLevel - xpInCurrentLevel} XP</span>
        </div>
        <div className={`w-full bg-slate-200 border-2 border-slate-700/5 rounded-full overflow-hidden ${heightStyles[height]}`}>
          <div
            className="h-full bg-amber-400 rounded-full transition-all duration-500 ease-out shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)]"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      
      {/* Crown Icon */}
      <div className="text-xl flex-shrink-0 animate-bounce-slow">
        👑
      </div>
    </div>
  );
};
