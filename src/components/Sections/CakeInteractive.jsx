import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CakeSVG, Candle } from '../SVG/CakeSVG';
import { Heart, Star } from '../SVG/Decorations';

const CakeInteractive = () => {
  const [candles, setCandles] = useState([
    { id: 1, x: 75, y: 30, isLit: true },
    { id: 2, x: 95, y: 30, isLit: true },
    { id: 3, x: 115, y: 30, isLit: true },
  ]);
  const [showWish, setShowWish] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const handleCandleClick = (id) => {
    const newCandles = candles.map(candle =>
      candle.id === id ? { ...candle, isLit: false } : candle
    );
    setCandles(newCandles);

    // Create sparkle puff at candle position
    const candle = candles.find(c => c.id === id);
    const newSparkles = [...Array(4)].map((_, i) => ({
      id: Date.now() + i,
      x: candle.x,
      y: candle.y,
    }));
    setConfetti(prev => [...prev, ...newSparkles]);

    setTimeout(() => {
      setConfetti(prev => prev.filter(s => !newSparkles.find(ns => ns.id === s.id)));
    }, 1000);

    // Check if all candles are out
    if (newCandles.every(c => !c.isLit)) {
      setTimeout(() => {
        setShowWish(true);
        createConfettiBurst();
      }, 300);
    }
  };

  const createConfettiBurst = () => {
    const burst = [...Array(20)].map((_, i) => ({
      id: Date.now() + i,
      x: 100 + (Math.random() - 0.5) * 200,
      y: 110,
      type: ['heart', 'star', 'bow'][Math.floor(Math.random() * 3)],
    }));
    setConfetti(burst);

    setTimeout(() => {
      setConfetti([]);
    }, 2500);
  };

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="font-pacifico text-4xl md:text-5xl mb-8 flex items-center justify-center gap-2"
          >
            <span style={{ WebkitTextFillColor: 'initial' }}>🎂</span>
            <span className="rainbow-shimmer">Blow Out the Candles!</span>
          </h2>
          <p className="font-poppins text-lg font-semibold mb-12" style={{ color: '#6B1B6B' }}>
            Click each candle to make your wish come true ✨
          </p>
        </motion.div>

        <div className="relative inline-block">
          <motion.div
            animate={showWish ? {
              y: [0, -10, 0],
              scale: [1, 1.05, 1],
            } : {
              y: [0, -5, 0],
            }}
            transition={{
              duration: showWish ? 0.8 : 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              rotateY: 15,
              rotateX: -10,
              scale: 1.1,
            }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            <CakeSVG />
            <svg width="200" height="220" viewBox="0 0 200 220" className="absolute inset-0 pointer-events-auto" style={{ transformStyle: 'preserve-3d' }}>
              {candles.map(candle => (
                <Candle
                  key={candle.id}
                  x={candle.x}
                  y={candle.y}
                  isLit={candle.isLit}
                  onClick={() => handleCandleClick(candle.id)}
                />
              ))}
            </svg>
          </motion.div>

          {/* Confetti */}
          <AnimatePresence>
            {confetti.map(item => (
              <motion.div
                key={item.id}
                className="absolute pointer-events-none"
                style={{ left: item.x, top: item.y }}
                initial={{ opacity: 1, scale: 0 }}
                animate={{
                  opacity: [1, 1, 0],
                  y: [0, -100 - Math.random() * 100],
                  x: [(Math.random() - 0.5) * 100],
                  rotate: [0, Math.random() * 360],
                  scale: [0, 1, 0.8],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {item.type === 'heart' && <Heart size={20} fill="#FFD6E8" />}
                {item.type === 'star' && <Star size={20} fill="#F8E1A1" />}
                {item.type === 'bow' && <span className="text-2xl">🎀</span>}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showWish && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              className="mt-12"
            >
              <div className="glass-card rounded-3xl px-8 py-6 inline-block">
                <p 
                  className="font-pacifico text-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #FF1493, #9370DB, #FFD700)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Make a wish, birthday girl! ✨
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CakeInteractive;
