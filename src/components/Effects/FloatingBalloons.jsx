import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const FloatingBalloons = () => {
  const [balloons, setBalloons] = useState([]);
  const [nextId, setNextId] = useState(0);

  const balloonColors = ['#FFD6E8', '#E7D1FF', '#CDEBFF', '#D6FFF2', '#F8E1A1'];

  useEffect(() => {
    const interval = setInterval(() => {
      // Add new balloon every 5 seconds (reduced frequency)
      const newBalloon = {
        id: nextId,
        color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
        startX: Math.random() * 100, // Random horizontal position (0-100%)
        delay: Math.random() * 0.5,
        duration: 8 + Math.random() * 4, // 8-12 seconds to float up
      };
      
      setBalloons(prev => [...prev, newBalloon]);
      setNextId(prev => prev + 1);

      // Remove balloon after animation completes
      setTimeout(() => {
        setBalloons(prev => prev.filter(b => b.id !== newBalloon.id));
      }, (newBalloon.duration + 1) * 1000);
    }, 5000); // Changed from 3000 to 5000ms

    return () => clearInterval(interval);
  }, [nextId]);

  const handleBalloonClick = (id) => {
    // Remove balloon when clicked (pop effect)
    setBalloons(prev => prev.filter(b => b.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {balloons.map((balloon) => (
          <motion.div
            key={balloon.id}
            className="absolute pointer-events-auto cursor-pointer"
            style={{
              left: `${balloon.startX}%`,
              bottom: '-100px',
              willChange: 'transform, opacity',
            }}
            initial={{ y: 0, opacity: 0, scale: 0 }}
            animate={{
              y: -window.innerHeight - 200,
              opacity: [0, 1, 1, 1, 0],
              scale: [0, 1, 1, 1, 0.8],
              x: [0, Math.sin(balloon.id) * 30, Math.sin(balloon.id + 1) * -30, 0],
            }}
            exit={{
              scale: [1, 1.5, 0],
              opacity: [1, 1, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: balloon.duration,
              delay: balloon.delay,
              ease: 'linear',
              x: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            onClick={() => handleBalloonClick(balloon.id)}
            whileHover={{ scale: 1.2 }}
          >
            {/* Balloon SVG */}
            <svg
              width="60"
              height="80"
              viewBox="0 0 60 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* String */}
              <motion.path
                d="M30 70 Q28 90 30 110"
                stroke={balloon.color}
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Balloon body */}
              <ellipse
                cx="30"
                cy="35"
                rx="25"
                ry="30"
                fill={balloon.color}
                filter="url(#balloon-shadow)"
              />
              
              {/* Shine effect */}
              <ellipse
                cx="20"
                cy="25"
                rx="8"
                ry="12"
                fill="white"
                opacity="0.4"
              />
              
              {/* Knot */}
              <ellipse
                cx="30"
                cy="65"
                rx="3"
                ry="4"
                fill={balloon.color}
                style={{ filter: 'brightness(0.8)' }}
              />
              
              <defs>
                <filter id="balloon-shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                  <feOffset dx="2" dy="4" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>

            {/* Pop confetti effect */}
            <AnimatePresence>
              {/* This will be triggered when balloon is removed */}
            </AnimatePresence>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Confetti particles when balloon pops */}
      <AnimatePresence>
        {balloons.map((balloon) => (
          <motion.div key={`confetti-container-${balloon.id}`} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingBalloons;
