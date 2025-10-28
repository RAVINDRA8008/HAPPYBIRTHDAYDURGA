import { motion } from 'framer-motion';

export const GiftBoxSVG = ({ isOpen = false, className = "" }) => (
  <svg width="120" height="140" viewBox="0 0 120 140" fill="none" className={className}>
    {/* Box body */}
    <rect x="20" y="50" width="80" height="70" rx="4" fill="#FFD6E8" />
    <rect x="20" y="50" width="80" height="70" rx="4" fill="url(#giftGradient)" opacity="0.7" />
    
    {/* Box lid */}
    <motion.g
      animate={isOpen ? { y: -30, rotateX: -20 } : { y: 0, rotateX: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <rect x="15" y="35" width="90" height="20" rx="4" fill="#E7D1FF" />
      <rect x="15" y="35" width="90" height="8" rx="4" fill="#F8E1A1" opacity="0.6" />
    </motion.g>
    
    {/* Ribbons */}
    <rect x="55" y="50" width="10" height="70" fill="#E7D1FF" opacity="0.8" />
    <rect x="20" y="82" width="80" height="10" fill="#E7D1FF" opacity="0.8" />
    
    {/* Bow on top */}
    <g transform="translate(60, 25)">
      <ellipse cx="-15" cy="0" rx="12" ry="10" fill="#F8E1A1" />
      <ellipse cx="15" cy="0" rx="12" ry="10" fill="#F8E1A1" />
      <circle cx="0" cy="0" r="8" fill="#F8E1A1" />
      <ellipse cx="-15" cy="0" rx="7" ry="6" fill="white" opacity="0.4" />
      <ellipse cx="15" cy="0" rx="7" ry="6" fill="white" opacity="0.4" />
    </g>
    
    {/* Shine effect */}
    <ellipse cx="35" cy="70" rx="12" ry="20" fill="white" opacity="0.2" />
    
    <defs>
      <linearGradient id="giftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD6E8" />
        <stop offset="100%" stopColor="#E7D1FF" />
      </linearGradient>
    </defs>
  </svg>
);
