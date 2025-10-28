import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Heart, Star } from '../SVG/Decorations';
import { GiftBoxSVG } from '../SVG/GiftBoxSVG';

const LoadingAnimation = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showGift, setShowGift] = useState(true);

  useEffect(() => {
    // Animate progress from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowGift(false);
            setTimeout(onComplete, 500);
          }, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showGift && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-soft-pink via-lavender to-baby-blue" />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              {i % 2 === 0 ? (
                <Heart size={20} fill="#FFD6E8" />
              ) : (
                <Star size={20} fill="#F8E1A1" />
              )}
            </motion.div>
          ))}

          {/* Content */}
          <div className="relative z-10 text-center px-4">
            {/* Gift box with shake animation */}
            <motion.div
              className="flex justify-center mb-8"
              animate={{
                rotate: progress < 100 ? [-3, 3, -3] : 0,
                scale: progress >= 100 ? [1, 1.2, 0] : 1,
              }}
              transition={{
                rotate: {
                  duration: 0.5,
                  repeat: progress < 100 ? Infinity : 0,
                },
                scale: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
            >
              <GiftBoxSVG isOpen={progress >= 100} />
            </motion.div>

            {/* Loading text */}
            <motion.h2
              className="font-pacifico text-4xl md:text-5xl mb-6"
              style={{
                background: 'linear-gradient(135deg, #FF1493, #9370DB, #FFD700)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {progress < 100 ? 'Preparing your surprise...' : 'Ready! 🎉'}
            </motion.h2>

            {/* Progress bar */}
            <div className="w-64 h-4 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm mx-auto mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-soft-pink via-lavender to-gold-shimmer rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Percentage */}
            <motion.p
              className="font-poppins text-2xl font-semibold"
              style={{ color: '#8B008B' }}
              animate={{
                scale: progress >= 100 ? [1, 1.2, 1] : 1,
              }}
            >
              {progress}%
            </motion.p>

            {/* Sparkles burst when complete */}
            {progress >= 100 && (
              <>
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={`sparkle-${i}`}
                    className="absolute text-2xl"
                    style={{
                      left: '50%',
                      top: '30%',
                    }}
                    initial={{ opacity: 1, scale: 0 }}
                    animate={{
                      opacity: [1, 1, 0],
                      y: [0, -80 - Math.random() * 50],
                      x: [(Math.random() - 0.5) * 150],
                      scale: [0, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: i * 0.05,
                    }}
                  >
                    {i % 3 === 0 ? '✨' : i % 3 === 1 ? '💖' : '🌟'}
                  </motion.div>
                ))}
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
