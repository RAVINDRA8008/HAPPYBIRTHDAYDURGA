import { motion } from 'framer-motion';

export const CakeSVG = ({ className = "" }) => (
  <svg width="200" height="220" viewBox="0 0 200 220" fill="none" className={className}>
    {/* Bottom layer */}
    <rect x="30" y="140" width="140" height="60" rx="8" fill="#FFD6E8" />
    <rect x="30" y="140" width="140" height="15" rx="8" fill="#F8E1A1" />
    <ellipse cx="50" cy="155" rx="8" ry="12" fill="white" opacity="0.3" />
    
    {/* Middle layer */}
    <rect x="45" y="90" width="110" height="50" rx="8" fill="#E7D1FF" />
    <rect x="45" y="90" width="110" height="12" rx="8" fill="#F8E1A1" />
    <ellipse cx="65" cy="105" rx="8" ry="10" fill="white" opacity="0.3" />
    
    {/* Top layer */}
    <rect x="60" y="50" width="80" height="40" rx="8" fill="#CDEBFF" />
    <rect x="60" y="50" width="80" height="10" rx="8" fill="#F8E1A1" />
    <ellipse cx="80" cy="62" rx="6" ry="8" fill="white" opacity="0.3" />
    
    {/* Decorative dots */}
    <circle cx="60" cy="165" r="4" fill="#E7D1FF" />
    <circle cx="80" cy="170" r="4" fill="#E7D1FF" />
    <circle cx="100" cy="165" r="4" fill="#E7D1FF" />
    <circle cx="120" cy="170" r="4" fill="#E7D1FF" />
    <circle cx="140" cy="165" r="4" fill="#E7D1FF" />
    
    <circle cx="70" cy="115" r="4" fill="#FFD6E8" />
    <circle cx="90" cy="120" r="4" fill="#FFD6E8" />
    <circle cx="110" cy="115" r="4" fill="#FFD6E8" />
    <circle cx="130" cy="120" r="4" fill="#FFD6E8" />
  </svg>
);

export const Candle = ({ x, y, isLit, onClick }) => (
  <g onClick={onClick} style={{ cursor: 'pointer' }}>
    {/* Candle stick */}
    <rect x={x} y={y} width="8" height="25" rx="2" fill="#F8E1A1" />
    <rect x={x} y={y} width="8" height="5" rx="2" fill="#FFD6E8" opacity="0.5" />
    
    {/* Wick (black when not lit) */}
    {!isLit && (
      <rect x={x + 3} y={y - 4} width="2" height="5" fill="#2C1810" opacity="0.8" />
    )}
    
    {/* Realistic Flickering Flame - OPTIMIZED */}
    {isLit && (
      <>
        {/* Main flame body */}
        <motion.ellipse
          cx={x + 4}
          cy={y - 5}
          rx="6"
          ry="10"
          fill="url(#flameGradient)"
          animate={{
            opacity: [0.9, 1, 0.9],
            y: [0, -1.5, 0],
            scaleX: [1, 0.95, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Inner flame core */}
        <motion.ellipse
          cx={x + 4}
          cy={y - 3}
          rx="3"
          ry="6"
          fill="white"
          opacity="0.9"
          animate={{
            scaleY: [1, 1.1, 1],
          }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </>
    )}
    
    {/* Simplified flame gradient */}
    <defs>
      <radialGradient id="flameGradient" cx="50%" cy="60%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FF8C00" />
      </radialGradient>
    </defs>
  </g>
);
