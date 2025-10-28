import { motion } from 'framer-motion';
import { useEffect } from 'react';

const CelebrationSequence = ({ onComplete }) => {
  useEffect(() => {
    console.log('🎉 CELEBRATION STARTED!');
    const timer = setTimeout(() => {
      console.log('🎉 CELEBRATION COMPLETE!');
      if (onComplete) onComplete();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      
      {/* Pastel Gradient Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          background: 'linear-gradient(135deg, #FFD6E8, #E7D1FF, #CDEBFF, #FFF9F9)',
        }}
      />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, rgba(255, 182, 193, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 30%, rgba(221, 160, 221, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 70%, rgba(173, 216, 230, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 50%, rgba(255, 182, 193, 0.4) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Confetti from TOP */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`top-${i}`}
          className="absolute text-5xl md:text-7xl"
          style={{ left: `${i * 6.66}%`, top: 0 }}
          initial={{ y: -50, scale: 0, rotate: 0, opacity: 0 }}
          animate={{ 
            y: window.innerHeight + 50, 
            scale: 1.5, 
            rotate: 720, 
            opacity: [0, 1, 1, 0] 
          }}
          transition={{
            duration: 4,
            ease: "linear",
            delay: i * 0.08,
          }}
        >
          {['🎈', '🎂', '🎁', '🎀', '💕', '⭐', '✨', '🌸', '💝', '🎉', '🎊', '💖', '🌟', '💫', '🎁'][i]}
        </motion.div>
      ))}

      {/* Confetti from BOTTOM */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`bottom-${i}`}
          className="absolute text-5xl md:text-7xl"
          style={{ left: `${i * 6.66}%`, bottom: 0 }}
          initial={{ y: 50, scale: 0, rotate: 0, opacity: 0 }}
          animate={{ 
            y: -window.innerHeight - 50, 
            scale: 1.5, 
            rotate: -720, 
            opacity: [0, 1, 1, 0] 
          }}
          transition={{
            duration: 4,
            ease: "easeOut",
            delay: 0.2 + i * 0.08,
          }}
        >
          {['🎁', '🎈', '🎂', '💖', '🎀', '✨', '⭐', '💝', '🌺', '🎉', '🎊', '💕', '🌟', '💫', '🌸'][i]}
        </motion.div>
      ))}

      {/* Confetti from LEFT */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`left-${i}`}
          className="absolute text-5xl md:text-7xl"
          style={{ left: 0, top: `${i * 8.33}%` }}
          initial={{ x: -50, scale: 0, rotate: 0, opacity: 0 }}
          animate={{ 
            x: window.innerWidth + 50, 
            scale: 1.5, 
            rotate: 360, 
            opacity: [0, 1, 1, 0] 
          }}
          transition={{
            duration: 3.5,
            ease: "easeOut",
            delay: 0.5 + i * 0.1,
          }}
        >
          {['💝', '🌸', '⭐', '🎁', '💖', '🎊', '✨', '💕', '🎉', '🎀', '💫', '🌟'][i]}
        </motion.div>
      ))}

      {/* Confetti from RIGHT */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`right-${i}`}
          className="absolute text-5xl md:text-7xl"
          style={{ right: 0, top: `${i * 8.33}%` }}
          initial={{ x: 50, scale: 0, rotate: 0, opacity: 0 }}
          animate={{ 
            x: -window.innerWidth - 50, 
            scale: 1.5, 
            rotate: -360, 
            opacity: [0, 1, 1, 0] 
          }}
          transition={{
            duration: 3.5,
            ease: "easeOut",
            delay: 0.7 + i * 0.1,
          }}
        >
          {['🎉', '💫', '🎈', '🌟', '🎀', '💗', '🎂', '✨', '💕', '🎊', '⭐', '🌸'][i]}
        </motion.div>
      ))}

      {/* Center Explosion */}
      {[...Array(40)].map((_, i) => {
        const angle = (i / 40) * Math.PI * 2;
        const distance = 150 + Math.random() * 300;
        const confetti = ['🎊', '🎉', '🎀', '💕', '⭐', '✨', '💝', '🌸'];
        
        return (
          <motion.div
            key={`center-${i}`}
            className="absolute text-4xl md:text-6xl"
            style={{ 
              left: '50%', 
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ x: 0, y: 0, scale: 0, rotate: 0, opacity: 0 }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              scale: 1.8,
              rotate: 720,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: 2 + Math.random() * 0.5,
              ease: 'easeOut',
            }}
          >
            {confetti[i % confetti.length]}
          </motion.div>
        );
      })}

      {/* Heart Explosion */}
      {[...Array(20)].map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const distance = 120 + Math.random() * 180;
        const hearts = ['💕', '💖', '💝', '💗'];
        
        return (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-5xl md:text-7xl"
            style={{ 
              left: '50%', 
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ x: 0, y: 0, scale: 0, rotate: 0, opacity: 0 }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              scale: 2.5,
              rotate: 360,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              delay: 3.2 + Math.random() * 1.6,
              ease: 'easeOut',
            }}
          >
            {hearts[i % hearts.length]}
          </motion.div>
        );
      })}

      {/* GRAND CELEBRATION TEXT */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-[300]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 1, 1, 0], 
          scale: [0.3, 1.4, 1.1, 0.9],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 3.5,
          delay: 5.5,
        }}
      >
        <div className="text-center relative">
          {/* Glowing background */}
          <motion.div
            className="absolute inset-0 blur-3xl opacity-60"
            animate={{
              background: [
                'radial-gradient(circle, rgba(255,20,147,0.8) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(255,215,0,0.8) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(147,112,219,0.8) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(255,20,147,0.8) 0%, transparent 70%)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: 1,
            }}
          />
          
          <motion.h1 
            className="font-fredoka text-6xl md:text-9xl font-bold px-4 mb-4 relative z-10"
            style={{
              background: 'linear-gradient(135deg, #FF1493, #FFD700, #9370DB, #FF69B4, #00CED1)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 8px 25px rgba(255, 20, 147, 0.9))',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: 2,
            }}
          >
            🎉 HAPPY BIRTHDAY! 🎉
          </motion.h1>
          
          <motion.p
            className="font-pacifico text-4xl md:text-6xl relative z-10"
            style={{
              background: 'linear-gradient(135deg, #FF69B4, #FFD700, #FF1493)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 6px 15px rgba(255, 105, 180, 0.8))',
            }}
            animate={{
              scale: [1, 1.15, 1],
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 1.5,
              repeat: 2,
            }}
          >
            Durga! 💕✨
          </motion.p>
          
          {/* Sparkle bursts */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const radius = 250;
            
            return (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute text-4xl"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{
                  x: Math.cos(angle) * radius,
                  y: Math.sin(angle) * radius,
                  scale: 2,
                  opacity: [0, 1, 0],
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  delay: 5.8 + i * 0.1,
                  ease: "easeOut",
                }}
              >
                ✨
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      
      {/* Final Confetti Shower */}
      {[...Array(20)].map((_, i) => {
        const confetti = ['🎊', '🎉', '🎀', '💕', '⭐', '✨', '💝', '🌸', '💖'];
        
        return (
          <motion.div
            key={`shower-${i}`}
            className="absolute text-5xl md:text-7xl"
            style={{ left: `${Math.random() * 100}%`, top: 0 }}
            initial={{ y: -100, scale: 0, rotate: 0, opacity: 0 }}
            animate={{
              y: window.innerHeight + 100,
              scale: 2,
              rotate: 720,
              opacity: [0, 1, 1, 0.7, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeIn",
              delay: 6.5 + Math.random() * 1,
            }}
          >
            {confetti[i % confetti.length]}
          </motion.div>
        );
      })}
    </div>
  );
};

export default CelebrationSequence;
