import React from 'react';

interface MonsterAvatarProps {
  monsterId: string;
  name: string;
  isHit?: boolean;
  isDead?: boolean;
  isAttacking?: boolean;
  className?: string;
  hideLabel?: boolean;
}

export const MonsterAvatar: React.FC<MonsterAvatarProps> = ({
  monsterId,
  name,
  isHit = false,
  isDead = false,
  isAttacking = false,
  className = "w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32",
  hideLabel = false
}) => {
  // Simple float styles depending on monsterId
  const floatStyle = isDead
    ? 'scale-0 rotate-180 opacity-0 transition-all duration-1000'
    : isAttacking
    ? 'animate-monster-smack z-40'
    : isHit
    ? 'animate-shake'
    : 'animate-float-slow';

  // Render a specific SVG based on the ID
  const renderSVG = () => {
    switch (monsterId) {
      case 'muddy_slime': // Jiggly green slime
        return (
          <svg className="w-full h-full drop-shadow-lg mx-auto" viewBox="0 0 100 100" fill="none">
            {/* Shadow */}
            <ellipse cx="50" cy="85" rx="30" ry="8" fill="#e2e8f0" />
            {/* Slime Body */}
            <path
              d="M20 70C15 60 20 40 35 30C45 23 55 23 65 30C80 40 85 60 80 70C75 80 65 82 50 82C35 82 25 80 20 70Z"
              fill={isHit ? '#ef4444' : '#4ade80'}
              stroke="#1e293b"
              strokeWidth="4"
              className="transition-colors duration-200"
            />
            {/* Highlights */}
            <path d="M30 40C30 35 38 32 45 34" stroke="white" strokeWidth="3" strokeLinecap="round" />
            {/* Eyes */}
            <circle cx="40" cy="50" r="6" fill="#1e293b" />
            <circle cx="60" cy="50" r="6" fill="#1e293b" />
            <circle cx="38" cy="48" r="2.5" fill="white" />
            <circle cx="58" cy="48" r="2.5" fill="white" />
            {/* Blush */}
            <circle cx="33" cy="56" r="3" fill="#f472b6" opacity="0.6" />
            <circle cx="67" cy="56" r="3" fill="#f472b6" opacity="0.6" />
            {/* Cute Smile */}
            <path d="M46 62C46 65 54 65 54 62" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'fluffy_ogre': // Bubbly purple cute ogre
        return (
          <svg className="w-full h-full drop-shadow-lg mx-auto" viewBox="0 0 100 100" fill="none">
            {/* Shadow */}
            <ellipse cx="50" cy="88" rx="25" ry="6" fill="#e2e8f0" />
            {/* Horns */}
            <path d="M30 25C25 15 35 15 35 22Z" fill="#ffd54f" stroke="#1e293b" strokeWidth="3" />
            <path d="M70 25C75 15 65 15 65 22Z" fill="#ffd54f" stroke="#1e293b" strokeWidth="3" />
            {/* Body */}
            <circle
              cx="50"
              cy="55"
              r="30"
              fill={isHit ? '#ef4444' : '#c084fc'}
              stroke="#1e293b"
              strokeWidth="4"
              className="transition-colors duration-200"
            />
            {/* Big Single Eye */}
            <circle cx="50" cy="48" r="12" fill="white" stroke="#1e293b" strokeWidth="3" />
            <circle cx="50" cy="48" r="6" fill="#0284c7" />
            <circle cx="48" cy="45" r="2.5" fill="white" />
            {/* Cute Little Teeth */}
            <path d="M43 68L46 62L49 68H43Z" fill="white" stroke="#1e293b" strokeWidth="2" />
            <path d="M51 68L54 62L57 68H51Z" fill="white" stroke="#1e293b" strokeWidth="2" />
            {/* Body Spot details */}
            <circle cx="35" cy="45" r="3" fill="#a855f7" opacity="0.4" />
            <circle cx="65" cy="45" r="3" fill="#a855f7" opacity="0.4" />
            <circle cx="50" cy="72" r="4" fill="#a855f7" opacity="0.4" />
          </svg>
        );

      case 'ember_fox': // Warm orange fiery fox
        return (
          <svg className="w-full h-full drop-shadow-lg mx-auto" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="85" rx="28" ry="7" fill="#e2e8f0" />
            {/* Tail */}
            <path
              d="M70 70C85 65 90 40 80 30C75 40 70 55 65 65Z"
              fill="#fb923c"
              stroke="#1e293b"
              strokeWidth="3.5"
            />
            {/* Tail Flame Tip */}
            <path d="M80 30C83 25 78 20 75 25C73 28 75 35 80 30Z" fill="#fde68a" />
            {/* Ears */}
            <path d="M28 40L20 15L38 32Z" fill="#ea580c" stroke="#1e293b" strokeWidth="3" />
            <path d="M72 40L80 15L62 32Z" fill="#ea580c" stroke="#1e293b" strokeWidth="3" />
            <path d="M26 35L22 18L32 30Z" fill="#fecdd3" />
            <path d="M74 35L78 18L68 30Z" fill="#fecdd3" />
            {/* Face/Body */}
            <path
              d="M25 50C25 35 75 35 75 50C75 68 62 78 50 78C38 78 25 68 25 50Z"
              fill={isHit ? '#ef4444' : '#fb923c'}
              stroke="#1e293b"
              strokeWidth="4"
              className="transition-colors duration-200"
            />
            {/* Cheeks (White details) */}
            <path d="M27 55C32 58 38 52 38 50" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <path d="M73 55C68 58 62 52 62 50" stroke="white" strokeWidth="3" strokeLinecap="round" />
            {/* Eyes */}
            <circle cx="42" cy="48" r="4.5" fill="#1e293b" />
            <circle cx="58" cy="48" r="4.5" fill="#1e293b" />
            <circle cx="40" cy="46" r="1.5" fill="white" />
            <circle cx="56" cy="46" r="1.5" fill="white" />
            {/* Nose */}
            <polygon points="48,56 52,56 50,59" fill="#1e293b" />
            {/* Cute Smile */}
            <path d="M47 64C48 66 52 66 53 64" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      case 'bramble_golem': // Forest Stone Golem
        return (
          <svg className="w-full h-full drop-shadow-lg mx-auto" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="85" rx="32" ry="7" fill="#e2e8f0" />
            {/* Vines */}
            <path d="M25 30C15 45 12 70 30 78" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" />
            <path d="M75 30C85 45 88 70 70 78" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" />
            {/* Leaves */}
            <path d="M20 40C15 38 18 30 22 35Z" fill="#4ade80" stroke="#1e293b" strokeWidth="2" />
            <path d="M78 40C83 38 80 30 76 35Z" fill="#4ade80" stroke="#1e293b" strokeWidth="2" />
            {/* Golem Body */}
            <rect
              x="25"
              y="30"
              width="50"
              height="48"
              rx="18"
              fill={isHit ? '#ef4444' : '#94a3b8'}
              stroke="#1e293b"
              strokeWidth="4"
              className="transition-colors duration-200"
            />
            {/* Rock Cracks */}
            <path d="M32 38L38 41L34 46" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M68 64L62 61" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Yellow Flower on Head */}
            <circle cx="50" cy="22" r="4" fill="#facc15" stroke="#1e293b" strokeWidth="2" />
            <ellipse cx="45" cy="22" rx="3" ry="2" fill="#fde68a" />
            <ellipse cx="55" cy="22" rx="3" ry="2" fill="#fde68a" />
            <ellipse cx="50" cy="17" rx="2" ry="3" fill="#fde68a" />
            <ellipse cx="50" cy="27" rx="2" ry="3" fill="#fde68a" />
            {/* Eyes (Glowing Yellow) */}
            <circle cx="41" cy="48" r="5" fill="#facc15" stroke="#1e293b" strokeWidth="2" />
            <circle cx="59" cy="48" r="5" fill="#facc15" stroke="#1e293b" strokeWidth="2" />
            <circle cx="41" cy="48" r="1.5" fill="white" />
            <circle cx="59" cy="48" r="1.5" fill="white" />
            {/* Cute Rock mouth */}
            <rect x="46" y="58" width="8" height="4" rx="2" fill="#475569" />
          </svg>
        );

      case 'sparky_dragon': // Cute golden electric dragon
      default:
        return (
          <svg className="w-full h-full drop-shadow-lg mx-auto" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="88" rx="26" ry="6" fill="#e2e8f0" />
            {/* Wings */}
            <path d="M25 45C10 35 15 20 22 28C26 32 25 40 28 45Z" fill="#ea580c" stroke="#1e293b" strokeWidth="2.5" />
            <path d="M75 45C90 35 85 20 78 28C74 32 75 40 72 45Z" fill="#ea580c" stroke="#1e293b" strokeWidth="2.5" />
            {/* Tail */}
            <path d="M68 75C80 82 85 70 82 62C78 68 72 72 68 75Z" fill="#facc15" stroke="#1e293b" strokeWidth="2.5" />
            {/* Tail Lightning shape */}
            <polygon points="82,62 88,58 84,56 86,50 78,56 82,58" fill="#fb923c" />
            {/* Body */}
            <path
              d="M32 50C32 36 68 36 68 50C68 64 62 80 50 80C38 80 32 64 32 50Z"
              fill={isHit ? '#ef4444' : '#facc15'}
              stroke="#1e293b"
              strokeWidth="4"
              className="transition-colors duration-200"
            />
            {/* Belly (Orange patch) */}
            <ellipse cx="50" cy="67" rx="12" ry="9" fill="#fb923c" stroke="#1e293b" strokeWidth="2" />
            {/* Cheek horns */}
            <path d="M30 45L22 48L31 52Z" fill="#ea580c" />
            <path d="M70 45L78 48L69 52Z" fill="#ea580c" />
            {/* Eyes */}
            <circle cx="43" cy="47" r="5" fill="#1e293b" />
            <circle cx="57" cy="47" r="5" fill="#1e293b" />
            <circle cx="41" cy="45" r="2.5" fill="white" />
            <circle cx="55" cy="45" r="2.5" fill="white" />
            {/* Cute Smile */}
            <path d="M46 56C46 58 54 58 54 56" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        );
    }
  };

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className} ${floatStyle}`}>
      {isAttacking && (
        <div className="absolute -top-10 left-[-10px] text-5xl z-50 animate-stick-swing -scale-x-100 drop-shadow origin-bottom-left rotate-12">
          🦯
        </div>
      )}
      {isHit && (
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center select-none pointer-events-none animate-bounce">
          {/* Swelling cartoon hurt bump */}
          <div className="bg-red-500 border-2 border-white rounded-full w-7 h-7 flex items-center justify-center text-[10px] text-white font-black animate-pop-in shadow-lg">
            🩹
          </div>
          {/* Dizzy stars spinning above bump */}
          <div className="absolute -top-5 text-2xl select-none pointer-events-none">
            <div className="animate-dizzy-spin">💫</div>
          </div>
        </div>
      )}
      {renderSVG()}
      {!hideLabel && (
        <span className="mt-2 inline-block px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-full shadow border border-slate-700">
          Lv.1 {name}
        </span>
      )}
    </div>
  );
};
