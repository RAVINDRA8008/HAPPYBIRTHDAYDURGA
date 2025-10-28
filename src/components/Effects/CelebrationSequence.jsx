import { motion } from 'framer-motion';
import { useEffect } from 'react';

const CelebrationSequence = ({ onComplete }) => {
  useEffect(() => {
    console.log('🎉 CELEBRATION STARTED!');
    const timer = setTimeout(() => {
      console.log('🎉 CELEBRATION COMPLETE!');
      if (onComplete) onComplete();
    }, 11000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // CUTE birthday emojis - perfectly safe!
  const cakeEmojis = ['🎂', '🍰', '🧁'];
  const giftEmojis = ['🎁', '🎀', '💝'];
  const partyEmojis = ['🎈', '🎊', '🎉'];
  const sparkleEmojis = ['✨', '💖', '⭐', '💫', '🌟'];
  const heartEmojis = ['💕', '💗', '💓', '💖', '💝'];
  const flowerEmojis = ['🌸', '🌺', '🌼', '🌷'];
  const magicEmojis = ['✨', '⭐', '🌟', '💫', '🎊'];

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      
      {/* LEGENDARY ENTRANCE - CURTAIN OPENING */}
      <motion.div
        className="absolute inset-0 z-[400]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: [0.65, 0, 0.35, 1],
        }}
        style={{ 
          transformOrigin: 'top',
          background: 'linear-gradient(180deg, #9370DB 0%, #FF69B4 50%, #FFD700 100%)',
        }}
      />

      <motion.div
        className="absolute inset-0 z-[400]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: [0.65, 0, 0.35, 1],
        }}
        style={{ 
          transformOrigin: 'bottom',
          background: 'linear-gradient(0deg, #9370DB 0%, #FF69B4 50%, #FFD700 100%)',
        }}
      />

      {/* LEGENDARY FLASH OF LIGHT */}
      <motion.div
        className="absolute inset-0 z-[350]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0] }}
        transition={{
          duration: 0.6,
          delay: 1.5,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,215,0,0.5) 50%, transparent 100%)',
        }}
      />

      {/* GOLDEN SHIMMER WAVES */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`shimmer-${i}`}
          className="absolute inset-0 z-[340]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            scale: [0.5, 2.5, 4],
          }}
          transition={{
            duration: 1.5,
            delay: 1.6 + i * 0.2,
            ease: 'easeOut',
          }}
          style={{
            background: 'radial-gradient(circle, rgba(255,215,0,0.4) 0%, transparent 60%)',
          }}
        />
      ))}
      
      {/* Soft Blurred Background Overlay */}
      <motion.div
        className="absolute inset-0 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.95 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, rgba(255, 214, 232, 0.95), rgba(231, 209, 255, 0.95), rgba(205, 235, 255, 0.95), rgba(255, 249, 249, 0.95))',
        }}
      />

      {/* Animated Soft Glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, rgba(255, 215, 0, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 50%, rgba(255, 105, 180, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 50%, rgba(255, 215, 0, 0.2) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* ===== CUTE FLOATING FLOWERS - KAWAII! ===== */}
      {[...Array(12)].map((_, i) => {
        const flower = flowerEmojis[i % flowerEmojis.length];
        const startX = (i / 12) * 100;
        const startY = Math.random() * 70 + 10;
        const floatX = (Math.random() - 0.5) * 100;
        const floatY = (Math.random() - 0.5) * 80;
        
        return (
          <motion.div
            key={`flower-${i}`}
            className="absolute text-4xl sm:text-5xl md:text-6xl"
            style={{ 
              left: `${startX}%`, 
              top: `${startY}%`,
              filter: 'drop-shadow(0 0 20px rgba(255, 182, 217, 0.8))',
              willChange: 'transform',
            }}
            initial={{ 
              scale: 0, 
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              x: [0, floatX, -floatX * 0.6, floatX * 0.3, 0],
              y: [0, floatY, -floatY * 0.6, floatY * 0.4, 0],
              scale: [0, 1.6, 1.4, 1.6, 1.4, 0],
              opacity: [0, 1, 1, 1, 0],
              rotate: [0, 360, 720, 1080],
            }}
            transition={{
              duration: 6,
              delay: 2 + i * 0.2,
              ease: 'easeInOut',
            }}
          >
            {flower}
          </motion.div>
        );
      })}

      {/* ===== BOUNCING HEARTS - SUPER CUTE! ===== */}
      {[...Array(15)].map((_, i) => {
        const heart = heartEmojis[i % heartEmojis.length];
        const startX = Math.random() * 90 + 5;
        const bounceHeight = 60 + Math.random() * 40;
        
        return (
          <motion.div
            key={`heart-bounce-${i}`}
            className="absolute text-3xl sm:text-4xl md:text-5xl"
            style={{ 
              left: `${startX}%`,
              bottom: -50,
              filter: 'drop-shadow(0 0 15px rgba(255, 105, 180, 0.9))',
              willChange: 'transform',
            }}
            initial={{ 
              y: 0,
              scale: 0, 
              opacity: 0,
            }}
            animate={{
              y: [0, -bounceHeight, -bounceHeight * 1.8, -bounceHeight * 2.5, -window.innerHeight - 100],
              scale: [0, 1.3, 1.5, 1.3, 0],
              opacity: [0, 1, 1, 1, 0],
              rotate: [0, 20, -20, 20, 0],
            }}
            transition={{
              duration: 5,
              delay: 2.5 + i * 0.2,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            {heart}
          </motion.div>
        );
      })}

      {/* ===== TWINKLING MAGIC STARS - ADORABLE! ===== */}
      {[...Array(20)].map((_, i) => {
        const magic = magicEmojis[i % magicEmojis.length];
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        return (
          <motion.div
            key={`twinkle-${i}`}
            className="absolute text-3xl sm:text-4xl md:text-5xl"
            style={{ 
              left: `${startX}%`,
              top: `${startY}%`,
              filter: 'drop-shadow(0 0 12px rgba(255, 215, 0, 1))',
              willChange: 'transform',
            }}
            initial={{ 
              scale: 0, 
              opacity: 0,
            }}
            animate={{
              scale: [0, 1.8, 0.8, 1.8, 0.8, 1.8, 0],
              opacity: [0, 1, 0.6, 1, 0.6, 1, 0],
              rotate: [0, 180, 360, 540, 720],
            }}
            transition={{
              duration: 4,
              delay: 1.5 + i * 0.15,
              ease: 'easeInOut',
            }}
          >
            {magic}
          </motion.div>
        );
      })}

      {/* ===== CUTE CAKE RAIN - RESPONSIVE! ===== */}
      {[...Array(8)].map((_, i) => {
        const xPos = (i / 8) * 100;
        const cake = cakeEmojis[i % cakeEmojis.length];
        
        return (
          <motion.div
            key={`cake-${i}`}
            className="absolute text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ 
              left: `${xPos}%`, 
              top: -100,
              filter: 'drop-shadow(0 0 25px rgba(255, 105, 180, 1))',
              willChange: 'transform',
            }}
            initial={{ 
              y: 0,
              scale: 0, 
              opacity: 0,
            }}
            animate={{
              y: window.innerHeight + 100,
              scale: [0, 1.8, 1.6, 0],
              opacity: [0, 1, 1, 0],
              rotate: [0, 360, 720],
            }}
            transition={{
              duration: 4.5,
              delay: 2.5 + i * 0.3,
              ease: 'linear',
            }}
          >
            {cake}
          </motion.div>
        );
      })}

      {/* ===== CUTE GIFT & BALLOON FLOAT - RESPONSIVE! ===== */}
      {[...Array(10)].map((_, i) => {
        const xPos = (i / 10) * 100;
        const gift = giftEmojis[i % giftEmojis.length];
        
        return (
          <motion.div
            key={`balloon-${i}`}
            className="absolute text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ 
              left: `${xPos}%`, 
              bottom: -100,
              filter: 'drop-shadow(0 0 20px rgba(255, 20, 147, 0.9))',
              willChange: 'transform',
            }}
            initial={{ 
              y: 0,
              scale: 0, 
              opacity: 0,
            }}
            animate={{
              y: -window.innerHeight - 150,
              x: (Math.random() - 0.5) * 60,
              scale: [0, 1.7, 1.5, 0],
              opacity: [0, 1, 1, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 5.5,
              delay: 3 + i * 0.25,
              ease: 'easeOut',
            }}
          >
            {gift}
          </motion.div>
        );
      })}

      {/* ===== SPARKLE BURST - RESPONSIVE & CUTE! ===== */}
      {[...Array(20)].map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const distance = 150 + Math.random() * 150;
        
        return (
          <motion.div
            key={`sparkle-wave-${i}`}
            className="absolute text-4xl sm:text-5xl md:text-6xl"
            style={{ 
              left: '50%', 
              top: '50%',
              filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 1))',
              willChange: 'transform',
            }}
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 0, 
              opacity: 0,
            }}
            animate={{
              x: Math.cos(angle) * distance * 2.5,
              y: Math.sin(angle) * distance * 2.5,
              scale: [0, 2.2, 1.8, 0],
              opacity: [0, 1, 0.9, 0],
              rotate: [0, 360, 720],
            }}
            transition={{
              duration: 2.5,
              delay: 2.2 + i * 0.06,
              ease: 'easeOut',
            }}
          >
            ✨
          </motion.div>
        );
      })}

      {/* ===== CUTE PARTY POPPERS - LEFT & RIGHT! ===== */}
      {[...Array(12)].map((_, i) => {
        const isLeft = i % 2 === 0;
        const yPos = (i / 12) * 100;
        const party = partyEmojis[i % partyEmojis.length];
        
        return (
          <motion.div
            key={`party-${i}`}
            className="absolute text-4xl sm:text-5xl md:text-6xl"
            style={{ 
              [isLeft ? 'left' : 'right']: 0,
              top: `${yPos}%`,
              filter: 'drop-shadow(0 0 18px rgba(255, 215, 0, 0.9))',
              willChange: 'transform',
            }}
            initial={{ 
              x: 0,
              scale: 0, 
              opacity: 0,
            }}
            animate={{
              x: isLeft ? [0, 120, 200, 300] : [0, -120, -200, -300],
              y: [0, -30, -60, -100],
              scale: [0, 1.6, 1.4, 0],
              opacity: [0, 1, 1, 0],
              rotate: isLeft ? [0, 180, 360] : [0, -180, -360],
            }}
            transition={{
              duration: 3,
              delay: 1 + i * 0.15,
              ease: 'easeOut',
            }}
          >
            {party}
          </motion.div>
        );
      })}

      {/* ===== EPIC BIRTHDAY TEXT - RESPONSIVE! ===== */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-[300]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 1, 1, 1, 1, 0.8], 
          scale: [0.3, 1.3, 1.15, 1.15, 1.15, 1],
        }}
        transition={{
          duration: 6,
          delay: 4,
        }}
      >
        <div className="text-center relative">
          {/* Mega Glow */}
          <motion.div
            className="absolute inset-0 blur-3xl opacity-80"
            animate={{
              background: [
                'radial-gradient(circle, rgba(255,20,147,0.9) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(255,215,0,0.9) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(147,112,219,0.9) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(255,105,180,0.9) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(255,20,147,0.9) 0%, transparent 70%)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: 2,
            }}
          />
          
          <motion.h1 
            className="font-fredoka text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold px-4 mb-4 sm:mb-6 relative z-10"
            style={{
              color: '#FF1493',
              textShadow: `
                0 0 20px rgba(255, 215, 0, 1),
                0 0 40px rgba(255, 105, 180, 0.8),
                0 0 60px rgba(147, 112, 219, 0.6),
                4px 4px 0px rgba(255, 255, 255, 0.9),
                -2px -2px 0px rgba(255, 215, 0, 0.5)
              `,
            }}
            animate={{
              scale: [1, 1.15, 1.05, 1.15, 1.05, 1.15, 1],
            }}
            transition={{
              duration: 4,
              repeat: 1,
            }}
          >
            🎉 HAPPY BIRTHDAY! 🎉
          </motion.h1>
          
          <motion.p
            className="font-pacifico text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl relative z-10 mb-3 sm:mb-4"
            style={{
              color: '#9370DB',
              textShadow: `
                0 0 25px rgba(255, 215, 0, 1),
                0 0 45px rgba(255, 105, 180, 0.9),
                3px 3px 0px rgba(255, 255, 255, 1),
                -2px -2px 0px rgba(255, 20, 147, 0.6)
              `,
            }}
            animate={{
              scale: [1, 1.25, 1.15, 1.25, 1.15, 1.25, 1.1],
            }}
            transition={{
              duration: 3.5,
              repeat: 1,
            }}
          >
            Jasmine! 💕
          </motion.p>

          <motion.p
            className="font-fredoka text-3xl sm:text-4xl md:text-5xl lg:text-6xl relative z-10 font-bold"
            style={{
              color: '#FFD700',
              textShadow: `
                0 0 20px rgba(255, 105, 180, 1),
                0 0 35px rgba(147, 112, 219, 0.8),
                2px 2px 0px rgba(255, 255, 255, 0.9),
                -1px -1px 0px rgba(255, 20, 147, 0.5)
              `,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 1, 1, 1],
              y: [20, 0, 0, 0, 0],
              scale: [0.8, 1.1, 1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              delay: 5,
            }}
          >
            {/* Make a wish text removed per user request */}
          </motion.p>
          
          {/* Sparkle Ring - RESPONSIVE! */}
          {[...Array(16)].map((_, i) => {
            const angle = (i / 16) * Math.PI * 2;
            const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 180 : 320;
            
            return (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{
                  left: '50%',
                  top: '50%',
                  filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 1))',
                }}
                initial={{ 
                  x: 0, 
                  y: 0, 
                  scale: 0, 
                  opacity: 0 
                }}
                animate={{
                  x: Math.cos(angle) * radius,
                  y: Math.sin(angle) * radius,
                  scale: [0, 2.8, 2.5, 0],
                  opacity: [0, 1, 1, 0],
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  delay: 4.5 + i * 0.12,
                  ease: "easeOut",
                }}
              >
                ✨
              </motion.div>
            );
          })}

          {/* Heart Burst - RESPONSIVE! */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 150 : 250;
            
            return (
              <motion.div
                key={`heart-${i}`}
                className="absolute text-3xl sm:text-4xl md:text-5xl"
                style={{
                  left: '50%',
                  top: '50%',
                  filter: 'drop-shadow(0 0 12px rgba(255, 105, 180, 1))',
                }}
                initial={{ 
                  x: 0, 
                  y: 0, 
                  scale: 0, 
                  opacity: 0 
                }}
                animate={{
                  x: Math.cos(angle) * radius,
                  y: Math.sin(angle) * radius,
                  scale: [0, 2, 1.8, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: 5.5 + i * 0.1,
                  ease: "easeOut",
                }}
              >
                💖
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default CelebrationSequence;
