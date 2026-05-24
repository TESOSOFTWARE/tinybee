import React from 'react';

interface PlayerAvatarProps {
  petId: string;
  isAttacking?: boolean;
  isHit?: boolean;
}

export const PlayerAvatar: React.FC<PlayerAvatarProps> = ({
  petId,
  isAttacking = false,
  isHit = false
}) => {
  // Determine movement classes
  const animClass = isAttacking
    ? 'animate-player-smack z-40'
    : isHit
    ? 'animate-shake'
    : 'animate-float-fast hover:scale-105 transition-all duration-300';

  const renderPetSVG = () => {
    switch (petId) {
      case 'aqua_puppy': // Cute sky blue dog
        return (
          <svg className="w-32 h-32 drop-shadow-md mx-auto" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="85" rx="22" ry="6" fill="#cbd5e1" />
            {/* Floppy Ears */}
            <path d="M28 35C20 32 24 55 28 50Z" fill="#0284c7" stroke="#1e293b" strokeWidth="2.5" />
            <path d="M72 35C80 32 76 55 72 50Z" fill="#0284c7" stroke="#1e293b" strokeWidth="2.5" />
            {/* Body */}
            <circle cx="50" cy="52" r="24" fill="#38bdf8" stroke="#1e293b" strokeWidth="3.5" />
            <circle cx="50" cy="55" r="10" fill="white" />
            {/* Eyes */}
            <circle cx="42" cy="45" r="3.5" fill="#1e293b" />
            <circle cx="58" cy="45" r="3.5" fill="#1e293b" />
            <circle cx="40" cy="43.5" r="1" fill="white" />
            <circle cx="56" cy="43.5" r="1" fill="white" />
            {/* Nose (Cute button puppy snout) */}
            <ellipse cx="50" cy="51" rx="3.5" ry="2" fill="#1e293b" />
            <path d="M47 55C48 57 50 57 50 55C50 57 52 57 53 55" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            {/* Water bubbles floating */}
            <circle cx="28" cy="25" r="4" fill="#7dd3fc" opacity="0.7" />
            <circle cx="74" cy="20" r="3" fill="#7dd3fc" opacity="0.5" />
          </svg>
        );

      case 'pyrosaur': // Fiery red/orange little dino
        return (
          <svg className="w-32 h-32 drop-shadow-md mx-auto" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="85" rx="24" ry="6" fill="#cbd5e1" />
            {/* Back Spikes */}
            <path d="M30 35L22 28L32 32Z" fill="#ef4444" stroke="#1e293b" strokeWidth="2" />
            <path d="M40 28L35 18L45 23Z" fill="#ef4444" stroke="#1e293b" strokeWidth="2" />
            <path d="M54 28L54 18L60 23Z" fill="#ef4444" stroke="#1e293b" strokeWidth="2" />
            {/* Dino Body */}
            <path
              d="M30 65C25 50 30 32 50 32C70 32 75 50 70 65C68 75 32 75 30 65Z"
              fill="#fb923c"
              stroke="#1e293b"
              strokeWidth="3.5"
            />
            {/* Belly Patch (Yellow) */}
            <ellipse cx="50" cy="58" rx="11" ry="12" fill="#ffd54f" stroke="#1e293b" strokeWidth="2" />
            {/* Cheeks */}
            <circle cx="37" cy="48" r="3.5" fill="#f43f5e" opacity="0.4" />
            <circle cx="63" cy="48" r="3.5" fill="#f43f5e" opacity="0.4" />
            {/* Eyes */}
            <circle cx="43" cy="43" r="4" fill="#1e293b" />
            <circle cx="57" cy="43" r="4" fill="#1e293b" />
            <circle cx="41" cy="41" r="1.5" fill="white" />
            <circle cx="55" cy="41" r="1.5" fill="white" />
            {/* Dino Smile */}
            <path d="M47 51C47 53 53 53 53 51" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
            {/* Little fire sparkles */}
            <polygon points="20,40 24,35 22,30 26,35" fill="#ef4444" />
          </svg>
        );

      case 'star_bunny': // Magic purple bunny
        return (
          <svg className="w-32 h-32 drop-shadow-md mx-auto" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="85" rx="20" ry="5" fill="#cbd5e1" />
            {/* Long Bunny Ears */}
            <path d="M38 32C32 10 44 10 42 28Z" fill="#c084fc" stroke="#1e293b" strokeWidth="2.5" />
            <path d="M62 32C68 10 56 10 58 28Z" fill="#c084fc" stroke="#1e293b" strokeWidth="2.5" />
            <path d="M37 25C34 14 41 14 40 24Z" fill="#fbcfe8" />
            <path d="M63 25C66 14 59 14 60 24Z" fill="#fbcfe8" />
            {/* Bunny Body */}
            <circle cx="50" cy="54" r="20" fill="#c084fc" stroke="#1e293b" strokeWidth="3.5" />
            {/* Eyes */}
            <circle cx="43" cy="50" r="3" fill="#1e293b" />
            <circle cx="57" cy="50" r="3" fill="#1e293b" />
            <circle cx="42" cy="48.5" r="1" fill="white" />
            <circle cx="56" cy="48.5" r="1" fill="white" />
            {/* Nose and Teeth */}
            <polygon points="49,54 51,54 50,56" fill="#f472b6" />
            <rect x="47" y="57" width="6" height="3" fill="white" stroke="#1e293b" strokeWidth="1.5" />
            {/* Gold Star on Forehead */}
            <polygon points="50,38 52,42 56,42 53,44 54,48 50,46 46,48 47,44 44,42 48,42" fill="#ffd54f" />
          </svg>
        );

      case 'sparky_owl': // Wise lightning owl
        return (
          <svg className="w-32 h-32 drop-shadow-md mx-auto" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="85" rx="22" ry="6" fill="#cbd5e1" />
            {/* Wings */}
            <path d="M26 50C15 45 22 65 29 55Z" fill="#eab308" stroke="#1e293b" strokeWidth="2" />
            <path d="M74 50C85 45 78 65 71 55Z" fill="#eab308" stroke="#1e293b" strokeWidth="2" />
            {/* Owl Body */}
            <circle cx="50" cy="50" r="23" fill="#facc15" stroke="#1e293b" strokeWidth="3.5" />
            {/* Belly Scales */}
            <path d="M44 58C46 60 48 58 48 58M52 58C54 60 56 58 56 58" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
            {/* Big Eyes */}
            <circle cx="40" cy="44" r="7" fill="white" stroke="#1e293b" strokeWidth="2.5" />
            <circle cx="60" cy="44" r="7" fill="white" stroke="#1e293b" strokeWidth="2.5" />
            <circle cx="40" cy="44" r="3.5" fill="#1e293b" />
            <circle cx="60" cy="44" r="3.5" fill="#1e293b" />
            <circle cx="38.5" cy="42.5" r="1" fill="white" />
            <circle cx="58.5" cy="42.5" r="1" fill="white" />
            {/* Beak */}
            <polygon points="47,48 53,48 50,53" fill="#fb923c" stroke="#1e293b" strokeWidth="2" />
            {/* Lightning bolt indicator */}
            <path d="M49 20L44 26L48 26L46 32" stroke="#eab308" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'leaf_kitten': // Starting green kitten
      default:
        return (
          <svg className="w-32 h-32 drop-shadow-md mx-auto" viewBox="0 0 100 100" fill="none">
            {/* Shadow */}
            <ellipse cx="50" cy="85" rx="20" ry="5" fill="#cbd5e1" />
            {/* Ears */}
            <path d="M26 35L18 12L38 28Z" fill="#16a34a" stroke="#1e293b" strokeWidth="3" />
            <path d="M74 35L82 12L62 28Z" fill="#16a34a" stroke="#1e293b" strokeWidth="3" />
            <path d="M25 30L20 18L32 25Z" fill="#fecdd3" />
            <path d="M75 30L80 18L68 25Z" fill="#fecdd3" />
            {/* Body */}
            <circle cx="50" cy="52" r="22" fill="#4ade80" stroke="#1e293b" strokeWidth="3.5" />
            {/* Whiskers */}
            <path d="M25 50H15M25 54H17" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            <path d="M75 50H85M75 54H83" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            {/* Eyes */}
            <circle cx="42" cy="47" r="3.5" fill="#1e293b" />
            <circle cx="58" cy="47" r="3.5" fill="#1e293b" />
            <circle cx="40.5" cy="45.5" r="1" fill="white" />
            <circle cx="56.5" cy="45.5" r="1" fill="white" />
            {/* Snout */}
            <circle cx="50" cy="53" r="1.5" fill="#f472b6" />
            <path d="M47 56C48 58 50 58 50 56C50 58 52 58 53 56" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        );
    }
  };

  return (
    <div className={`relative flex items-center justify-center p-1 select-none ${animClass}`}>
      {isAttacking && (
        <div className="absolute -top-10 right-[-10px] text-5xl z-50 animate-stick-swing drop-shadow origin-bottom-left rotate-12">
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
      {renderPetSVG()}
    </div>
  );
};
