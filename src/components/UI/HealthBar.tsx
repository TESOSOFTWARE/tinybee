import React from 'react';

interface HealthBarProps {
  hp: number; // 0 to 100
  maxHp?: number;
  name: string;
  isShaking?: boolean;
  heartIcon?: string; // cute custom icon
  colorClass?: string; // custom gradient/bg color
  avatarIcon?: string; // cute avatar icon next to the name
}

export const HealthBar: React.FC<HealthBarProps> = ({
  hp,
  maxHp = 100,
  name,
  isShaking = false,
  heartIcon = '💖',
  colorClass = 'bg-gradient-to-r from-emerald-400 to-teal-500',
  avatarIcon = '🥰'
}) => {
  const percentage = Math.min(100, Math.max(0, (hp / maxHp) * 100));

  return (
    <div className={`w-full select-none ${isShaking ? 'animate-shake' : ''}`}>
      <div className="flex justify-between items-center mb-1.5 font-black text-slate-700 text-xs md:text-sm uppercase tracking-wide">
        <span className="flex items-center gap-1.5">
          <span className="text-base select-none">{avatarIcon}</span>
          <span className="truncate max-w-[120px] md:max-w-none">{name}</span>
        </span>
        <span className="text-slate-500 font-bold">
          {Math.max(0, Math.round(hp))}/{maxHp}
        </span>
      </div>
      <div className="relative flex items-center">
        {/* Cute Heart/Icon badge */}
        <div className="absolute -left-2 z-10 bg-white border-2 border-slate-200 rounded-full w-9 h-9 flex items-center justify-center text-lg shadow-md animate-bounce-slow">
          {heartIcon}
        </div>
        
        {/* Health Track container */}
        <div className="w-full bg-slate-100 border-2 border-slate-200 rounded-full pl-6 overflow-hidden h-6 shadow-inner">
          <div
            className={`h-full rounded-full transition-all duration-300 ease-out shadow-[inset_0_1px_3px_rgba(255,255,255,0.4)] ${colorClass}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};
