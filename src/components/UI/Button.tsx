import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'green' | 'yellow' | 'orange' | 'purple' | 'pink' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'blue',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyle = 'btn-chunky font-bold rounded-2xl flex items-center justify-center transition-all duration-100 outline-none select-none active:translate-y-1 whitespace-nowrap';
  
  const variantStyles = {
    blue: 'btn-chunky-blue text-white',
    green: 'btn-chunky-green text-white',
    yellow: 'btn-chunky-yellow text-amber-950',
    orange: 'btn-chunky-orange text-white',
    purple: 'btn-chunky-purple text-white',
    pink: 'btn-chunky-pink text-white',
    gray: 'btn-chunky-gray text-white'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-6 py-3 text-base rounded-2xl md:text-lg',
    lg: 'px-8 py-4 text-lg rounded-3xl md:text-xl'
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
