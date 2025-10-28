import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Balloon } from '../SVG/Decorations';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showSparkles, setShowSparkles] = useState(false);
  const fullText = "Wishing you the sweetest day ever, full of love and sparkle 💖";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setShowSparkles(true);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft-pink via-lavender to-baby-blue" />
      
      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 left-10"
        animate={{
          y: [0, -20, 0],
        }}
        whileHover={{
          scale: 1.2,
          rotateZ: 15,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(30px)',
        }}
      >
        <Balloon color="#FFD6E8" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-20"
        animate={{
          y: [0, -15, 0],
        }}
        whileHover={{
          scale: 1.2,
          rotateZ: -15,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(40px)',
        }}
      >
        <Balloon color="#E7D1FF" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-20"
        animate={{
          y: [0, -20, 0],
        }}
        whileHover={{
          scale: 1.2,
          rotateZ: 10,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(20px)',
        }}
      >
        <Balloon color="#CDEBFF" />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.h1
          className="font-fredoka text-5xl md:text-7xl lg:text-8xl mb-8 relative z-20 flex items-center justify-center gap-3"
          variants={itemVariants}
          style={{
            filter: 'drop-shadow(0 0 30px rgba(255, 20, 147, 0.3))',
          }}
        >
          <span style={{ 
            filter: 'none',
            background: 'none',
            WebkitTextFillColor: 'initial',
          }}>🎀</span>
          <span className="shimmer-text">Happy Birthday</span>
          <span style={{ 
            filter: 'none',
            background: 'none',
            WebkitTextFillColor: 'initial',
          }}>🎂</span>
        </motion.h1>

        <motion.div
          className="font-fredoka text-4xl md:text-6xl lg:text-7xl mb-8 flex justify-center gap-3 flex-wrap"
          variants={containerVariants}
        >
          {['P', 'r', 'a', 'n', 'j', 'a', 'l', 'i', ' ', 'T', 'a', 'm', 'b', 'e', '!'].map((letter, i) => (
            <motion.span
              key={i}
              className="shimmer-text"
              style={{
                display: 'inline-block',
                filter: 'drop-shadow(0 4px 12px rgba(255, 105, 180, 0.4))',
              }}
              variants={{
                hidden: { y: 50, opacity: 0, rotate: -10 },
                visible: {
                  y: 0,
                  opacity: 1,
                  rotate: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    delay: i * 0.1,
                  },
                },
              }}
              whileHover={{
                scale: 1.3,
                rotate: [0, -15, 15, 0],
                y: -10,
                filter: 'drop-shadow(0 8px 20px rgba(255, 105, 180, 0.8))',
                transition: { duration: 0.3 },
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="font-poppins text-xl md:text-2xl lg:text-3xl font-semibold mb-4 min-h-[100px] flex items-center justify-center"
          style={{ color: '#8B008B' }}
          variants={itemVariants}
        >
          <span className="inline-block">{displayedText}</span>
          {displayedText.length < fullText.length && (
            <motion.span
              className="inline-block w-1 h-8 bg-soft-pink ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
        </motion.div>

        {showSparkles && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 1] }}
            transition={{ duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="text-3xl"
              >
                ✨
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default HeroSection;
