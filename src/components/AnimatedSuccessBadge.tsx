import React from 'react';

interface AnimatedSuccessBadgeProps {
  variant?: 'purple' | 'gold' | 'emerald';
  iconType?: 'check' | 'flame';
  className?: string;
}

export const AnimatedSuccessBadge: React.FC<AnimatedSuccessBadgeProps> = ({
  variant = 'purple',
  className = '',
}) => {
  const getGradient = () => {
    switch (variant) {
      case 'gold':
        return 'from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-amber-500/30';
      case 'emerald':
        return 'from-emerald-500 via-emerald-600 to-teal-700 text-white shadow-emerald-500/30';
      case 'purple':
      default:
        return 'from-purple-900 via-purple-800 to-indigo-950 text-amber-400 shadow-purple-950/30';
    }
  };

  const strokeColor = variant === 'purple' ? '#fbbf24' : '#ffffff';

  return (
    <div className={`relative flex items-center justify-center my-2 ${className}`}>
      {/* Background radiant ripple rings */}
      <div className="absolute w-20 h-20 rounded-full bg-purple-500/15 animate-success-ripple pointer-events-none" />
      <div 
        className="absolute w-24 h-24 rounded-full bg-amber-400/10 animate-success-ripple pointer-events-none" 
        style={{ animationDelay: '0.3s' }} 
      />

      {/* Main animated checkmark badge */}
      <div
        className={`relative w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr ${getGradient()} p-1 flex items-center justify-center shadow-xl animate-success-pop`}
      >
        <svg
          viewBox="0 0 52 52"
          className="w-12 h-12 sm:w-14 sm:h-14 overflow-visible"
          aria-hidden="true"
        >
          {/* Animated circular outline */}
          <circle
            cx="26"
            cy="26"
            r="23"
            fill="none"
            stroke={strokeColor}
            strokeWidth="3.2"
            strokeLinecap="round"
            className="animate-stroke-circle"
            style={{ opacity: 0.95 }}
          />

          {/* Animated checkmark stem */}
          <path
            fill="none"
            d="M15 27.5 L22.5 35 L37 19"
            stroke={strokeColor}
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-stroke-check"
          />
        </svg>
      </div>
    </div>
  );
};
