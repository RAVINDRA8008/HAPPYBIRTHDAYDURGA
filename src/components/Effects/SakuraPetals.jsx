import { motion } from 'framer-motion';
import { useMemo } from 'react';

const SakuraPetals = () => {
  const petals = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({ // Reduced from 15 to 8
      id: i,
      startX: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6, // 8-14 seconds
      size: 15 + Math.random() * 15, // 15-30px
      rotation: Math.random() * 360,
      swayAmount: 30 + Math.random() * 50, // Horizontal sway
      isPink: Math.random() > 0.3, // 70% pink, 30% white
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.startX}%`,
            top: '-50px',
            willChange: 'transform',
          }}
          animate={{
            y: window.innerHeight + 100,
            x: [
              0,
              petal.swayAmount,
              -petal.swayAmount * 0.5,
              petal.swayAmount * 0.7,
              0,
            ],
            rotate: [
              petal.rotation,
              petal.rotation + 360,
              petal.rotation + 720,
            ],
          }}
          transition={{
            y: {
              duration: petal.duration,
              repeat: Infinity,
              delay: petal.delay,
              ease: 'linear',
            },
            x: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotate: {
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {/* Cherry Blossom Petal SVG */}
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#petal-shadow)">
              {/* Petal shape */}
              <path
                d="M15 5 Q20 10, 15 15 Q10 10, 15 5 Z"
                fill={petal.isPink ? '#FFB7D5' : '#FFF5FB'}
                opacity={petal.isPink ? 0.9 : 0.7}
              />
              <path
                d="M15 15 Q20 20, 15 25 Q10 20, 15 15 Z"
                fill={petal.isPink ? '#FFD6E8' : '#FFFFFF'}
                opacity={petal.isPink ? 0.8 : 0.6}
              />
              <path
                d="M5 15 Q10 10, 15 15 Q10 20, 5 15 Z"
                fill={petal.isPink ? '#FFC1DC' : '#FFF0F7'}
                opacity={petal.isPink ? 0.85 : 0.65}
              />
              <path
                d="M15 15 Q20 10, 25 15 Q20 20, 15 15 Z"
                fill={petal.isPink ? '#FFD6E8' : '#FFFFFF'}
                opacity={petal.isPink ? 0.8 : 0.6}
              />
              
              {/* Center detail */}
              <circle
                cx="15"
                cy="15"
                r="2"
                fill={petal.isPink ? '#FF69B4' : '#FFB7D5'}
                opacity="0.6"
              />
            </g>
            
            <defs>
              <filter id="petal-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
                <feOffset dx="0" dy="1" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.2" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default SakuraPetals;
