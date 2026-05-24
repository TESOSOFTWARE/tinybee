import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'white' | 'glass' | 'scroll' | 'blue' | 'green' | 'yellow';
  interactive?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'white',
  interactive = false,
  padding = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyle = 'rounded-3xl border-4 transition-all duration-200 select-none';
  
  const variantStyles = {
    white: 'bg-white border-slate-200 shadow-[0_8px_0_0_#cbd5e1] text-slate-800',
    glass: 'bg-white/90 backdrop-blur-md border-white/60 shadow-[0_8px_0_0_rgba(148,163,184,0.15)] text-slate-800',
    scroll: 'paper-scroll text-amber-950',
    blue: 'bg-sky-50 border-sky-200 shadow-[0_8px_0_0_#bae6fd] text-sky-950',
    green: 'bg-emerald-50 border-emerald-200 shadow-[0_8px_0_0_#a7f3d0] text-emerald-950',
    yellow: 'bg-amber-50 border-amber-200 shadow-[0_8px_0_0_#fde68a] text-amber-950'
  };

  const interactiveStyle = interactive ? 'card-bubble-interactive cursor-pointer hover:-translate-y-1 hover:shadow-[0_12px_0_0_#94a3b8] active:translate-y-1 active:shadow-[0_4px_0_0_#94a3b8]' : '';
  
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8 md:p-10'
  };

  return (
    <div
      className={`${baseStyle} ${variantStyles[variant]} ${interactiveStyle} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
