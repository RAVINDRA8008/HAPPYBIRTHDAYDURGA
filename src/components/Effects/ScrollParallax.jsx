import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Layer 1 - Slowest (furthest) */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          transform: `translateY(${scrollY * 0.1}px) translateZ(-100px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`layer1-${i}`}
            className="absolute text-6xl opacity-20"
            style={{
              left: `${20 + i * 40}%`,
              top: `${30 + i * 30}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ✨
          </motion.div>
        ))}
      </motion.div>

      {/* Layer 2 - Medium speed (middle) */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          transform: `translateY(${scrollY * 0.2}px) translateZ(-50px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`layer2-${i}`}
            className="absolute text-5xl opacity-30"
            style={{
              left: `${10 + i * 40}%`,
              top: `${20 + i * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            💖
          </motion.div>
        ))}
      </motion.div>

      {/* Layer 3 - Fastest (closest) */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px) translateZ(0px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`layer3-${i}`}
            className="absolute text-4xl opacity-40"
            style={{
              left: `${15 + i * 40}%`,
              top: `${40 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🌸
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default ScrollParallax;
