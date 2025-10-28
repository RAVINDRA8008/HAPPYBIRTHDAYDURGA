import { motion } from 'framer-motion';
import { useMemo } from 'react';

const FloatingPetals = () => {
  const petals = useMemo(() => {
    const items = [];
    const petalCount = 8; // Reduced from 15
    
    for (let i = 0; i < petalCount; i++) {
      items.push({
        id: i,
        startX: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 15 + Math.random() * 10,
        size: 15 + Math.random() * 15,
        rotation: Math.random() * 360,
      });
    }
    return items;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.startX}%`,
            top: '-50px',
          }}
          initial={{ 
            y: -50,
            x: 0,
            opacity: 0,
            rotate: petal.rotation,
          }}
          animate={{
            y: window.innerHeight + 100,
            x: [0, 50, -30, 40, 0],
            opacity: [0, 0.8, 0.9, 0.7, 0],
            rotate: [petal.rotation, petal.rotation + 360],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            ease: "linear",
            delay: petal.delay,
          }}
        >
          {/* Cherry Blossom Petal */}
          <svg width={petal.size} height={petal.size} viewBox="0 0 20 20">
            <path
              d="M10 2 Q15 8 10 10 Q5 8 10 2 M10 10 Q15 12 10 18 Q5 12 10 10"
              fill="rgba(255, 192, 203, 0.7)"
              stroke="rgba(255, 182, 193, 0.9)"
              strokeWidth="0.5"
            />
            <circle cx="10" cy="10" r="1.5" fill="rgba(255, 215, 0, 0.6)" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingPetals;
