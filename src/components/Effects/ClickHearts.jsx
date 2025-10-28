import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Heart } from '../SVG/Decorations';

const ClickHearts = () => {
  const [hearts, setHearts] = useState([]);

  const handleClick = (e) => {
    const newHeart = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    };

    setHearts(prev => [...prev, newHeart]);

    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-10"
      onClick={handleClick}
      style={{ pointerEvents: 'all' }}
    >
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            className="fixed pointer-events-none"
            style={{
              left: heart.x - 20,
              top: heart.y - 20,
            }}
            initial={{ opacity: 1, scale: 0, y: 0 }}
            animate={{
              opacity: [1, 1, 0],
              scale: [0, 1.5, 1],
              y: -150,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
          >
            <Heart size={40} fill="#FFD6E8" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ClickHearts;
