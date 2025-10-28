export const Heart = ({ className = "", size = 24, fill = "#FFD6E8" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill={fill}
    />
  </svg>
);

export const Star = ({ className = "", size = 24, fill = "#F8E1A1" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill={fill}
    />
  </svg>
);

export const Sparkle = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path
      d="M8 0l1.5 6.5L16 8l-6.5 1.5L8 16l-1.5-6.5L0 8l6.5-1.5L8 0z"
      fill="url(#sparkleGradient)"
    />
    <defs>
      <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F8E1A1" />
        <stop offset="100%" stopColor="#FFD6E8" />
      </linearGradient>
    </defs>
  </svg>
);

export const Balloon = ({ className = "", color = "#FFD6E8" }) => (
  <svg width="60" height="90" viewBox="0 0 60 90" fill="none" className={className}>
    <ellipse cx="30" cy="35" rx="25" ry="30" fill={color} opacity="0.9" />
    <ellipse cx="22" cy="28" rx="8" ry="10" fill="white" opacity="0.4" />
    <line x1="30" y1="65" x2="30" y2="90" stroke={color} strokeWidth="2" />
    <path d="M30 90 Q25 85 20 90" stroke={color} strokeWidth="2" fill="none" />
  </svg>
);

export const Bow = ({ className = "", size = 40, color = "#E7D1FF" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
    <ellipse cx="12" cy="20" rx="10" ry="12" fill={color} />
    <ellipse cx="28" cy="20" rx="10" ry="12" fill={color} />
    <circle cx="20" cy="20" r="6" fill={color} />
    <ellipse cx="12" cy="20" rx="6" ry="8" fill="white" opacity="0.3" />
    <ellipse cx="28" cy="20" rx="6" ry="8" fill="white" opacity="0.3" />
  </svg>
);

export const Ribbon = ({ className = "", color = "#CDEBFF" }) => (
  <svg width="100" height="20" viewBox="0 0 100 20" fill="none" className={className}>
    <path
      d="M0 10 Q25 0, 50 10 T100 10"
      stroke={color}
      strokeWidth="8"
      fill="none"
      opacity="0.7"
    />
  </svg>
);
