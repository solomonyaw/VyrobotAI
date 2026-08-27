import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual Logo Badge */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 group`}>
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(0,102,255,0.6)] transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="60%" stopColor="#0047E0" />
              <stop offset="100%" stopColor="#002B9E" />
            </linearGradient>

            <linearGradient id="logoWhiteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="80%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <filter id="eyeGlowFilter" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Circle base */}
          <circle cx="250" cy="250" r="230" fill="url(#logoBgGrad)" />
          <circle cx="250" cy="250" r="226" stroke="#38BDF8" strokeWidth="3" opacity="0.4" />

          {/* Mascot Head */}
          <g transform="translate(250, 195)">
            {/* Antenna */}
            <line x1="0" y1="-65" x2="0" y2="-45" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
            <circle cx="0" cy="-68" r="8" fill="#00F0FF" filter="url(#eyeGlowFilter)" />

            {/* Side sensor ears */}
            <rect x="-68" y="-22" width="14" height="30" rx="7" fill="#E2E8F0" />
            <rect x="54" y="-22" width="14" height="30" rx="7" fill="#E2E8F0" />
            
            {/* Head container */}
            <rect x="-60" y="-45" width="120" height="90" rx="42" fill="#FFFFFF" />
            <rect x="-56" y="-41" width="112" height="82" rx="38" fill="#F8FAFC" />

            {/* Black/Blue Visor Faceplate */}
            <rect x="-44" y="-28" width="88" height="54" rx="22" fill="#06122E" stroke="#1E3A8A" strokeWidth="2" />

            {/* Glowing Cyan Eyes */}
            <rect x="-30" y="-12" width="22" height="14" rx="5" fill="#00F0FF" filter="url(#eyeGlowFilter)" />
            <rect x="8" y="-12" width="22" height="14" rx="5" fill="#00F0FF" filter="url(#eyeGlowFilter)" />
          </g>

          {/* Geometric Cyan Wings */}
          <path d="M150 250 L250 375 L205 375 L115 260 Z" fill="#00C8FF" opacity="0.8" />
          <path d="M175 270 L230 350 L200 350 L155 285 Z" fill="#38BDF8" opacity="0.9" />

          {/* Sharp 3D White 'V' Ascending Arrow */}
          <path
            d="M 120 260 L 210 260 L 250 375 L 340 230 L 320 230 L 355 190 L 395 240 L 365 240 L 265 405 L 235 405 Z"
            fill="url(#logoWhiteGrad)"
          />

          {/* Orbital Ring Sweeping Around Base */}
          <path
            d="M 130 345 C 160 380, 320 370, 360 290"
            stroke="#FFFFFF"
            strokeWidth="9"
            strokeLinecap="round"
            opacity="0.95"
          />
          <path
            d="M 130 345 C 160 380, 320 370, 360 290"
            stroke="#00F0FF"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#eyeGlowFilter)"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-extrabold tracking-tight font-sans ${textSizes[size]} bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent`}
          >
            Vyrobot
          </span>
          {size === 'xl' || size === 'lg' ? (
            <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400/80 -mt-1 font-semibold">
              AI Prediction Trading
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
};
