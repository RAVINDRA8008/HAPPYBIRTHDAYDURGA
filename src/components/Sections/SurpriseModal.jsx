import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { GiftBoxSVG } from '../SVG/GiftBoxSVG';
import { Heart } from '../SVG/Decorations';

const SurpriseModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);

  const openGift = () => {
    setIsOpen(true);
    setTimeout(() => {
      setGiftOpened(true);
      createHeartBurst();
    }, 500);
  };

  const createHeartBurst = () => {
    const hearts = [...Array(10)].map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 300,
      y: 0,
    }));
    setFloatingHearts(hearts);

    setTimeout(() => {
      setFloatingHearts([]);
    }, 1500);
  };

  const sendWish = () => {
    const heart = {
      id: Date.now(),
      x: (Math.random() - 0.5) * 100,
      y: 0,
    };
    setFloatingHearts(prev => [...prev, heart]);

    setTimeout(() => {
      setFloatingHearts(prev => prev.filter(h => h.id !== heart.id));
    }, 2000);
  };

  const closeModal = () => {
    // Create soft confetti drizzle
    const confetti = [...Array(12)].map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * window.innerWidth,
      y: -20,
    }));
    setFloatingHearts(confetti);

    setTimeout(() => {
      setFloatingHearts([]);
      setIsOpen(false);
      setGiftOpened(false);
    }, 1200);
  };

  return (
    <section className="relative py-20 px-4 z-40">
      <div className="max-w-4xl mx-auto text-center">
        <motion.button
          className="glass-card rounded-full px-10 py-5 font-poppins text-xl font-bold relative overflow-hidden group cursor-pointer z-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openGift}
          style={{
            background: 'linear-gradient(135deg, #FFD6E8, #E7D1FF, #F8E1A1)',
            boxShadow: '0 8px 32px rgba(255, 214, 232, 0.5)',
            color: '#6B1B6B',
            border: '3px solid rgba(255, 255, 255, 0.8)',
            pointerEvents: 'all',
          }}
        >
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <span className="relative z-10 text-2xl" style={{ color: '#6B1B6B', fontWeight: 'bold' }}>
            🎁 Open Your Surprise!
          </span>
          
          {/* Orbiting sparkles */}
          {[...Array(2)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute text-xl"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: `${45 + i * 15}px center`,
              }}
            >
              ✨
            </motion.span>
          ))}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

              {/* Modal */}
              <motion.div
                className="relative neumorphic rounded-3xl p-8 max-w-md w-full"
                initial={{ scale: 0.8, y: 50, rotateX: -20 }}
                animate={{ scale: 1, y: 0, rotateX: 0 }}
                exit={{ scale: 0.8, y: 50, rotateX: 20 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1500px',
                }}
              >
                <div className="relative">
                  {/* Gift box */}
                  <motion.div
                    className="flex justify-center mb-6"
                    animate={!giftOpened ? {
                      rotate: [-2, 2, -2],
                      rotateY: [0, 5, 0, -5, 0],
                    } : {}}
                    transition={{
                      duration: 0.3,
                      repeat: giftOpened ? 0 : 5,
                    }}
                    whileHover={!giftOpened ? {
                      rotateY: 25,
                      rotateX: -10,
                      scale: 1.1,
                    } : {}}
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px',
                    }}
                  >
                    <GiftBoxSVG isOpen={giftOpened} />
                  </motion.div>

                  {/* Floating hearts from gift */}
                  <AnimatePresence>
                    {floatingHearts.map(heart => (
                      <motion.div
                        key={heart.id}
                        className="absolute pointer-events-none"
                        style={{ left: '50%', top: '50%' }}
                        initial={{ opacity: 1, scale: 0 }}
                        animate={{
                          opacity: [1, 1, 0],
                          y: [-150],
                          x: [heart.x],
                          scale: [0, 1, 0.8],
                          rotate: [0, Math.random() * 180],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      >
                        <Heart size={30} fill="#FFD6E8" />
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Message */}
                  <AnimatePresence>
                    {giftOpened && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p 
                          className="font-pacifico text-2xl mb-6 text-center"
                          style={{
                            background: 'linear-gradient(135deg, #FF1493, #9370DB, #FFD700)',
                            backgroundSize: '200% 200%',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          You're the sweetest gift in the world 💝
                        </p>
                        <p className="font-poppins text-lg font-semibold mb-6 text-center" style={{ color: '#6B1B6B' }}>
                          May your day be full of magic and joy!
                        </p>

                        <div className="flex gap-4 justify-center flex-wrap">
                          <motion.button
                            className="glass-card rounded-full px-6 py-3 font-poppins font-bold cursor-pointer"
                            style={{ 
                              color: '#6B1B6B',
                              border: '2px solid rgba(255, 255, 255, 0.8)',
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={sendWish}
                          >
                            💖 Send Wish
                          </motion.button>
                          <motion.button
                            className="glass-card rounded-full px-6 py-3 font-poppins font-bold cursor-pointer"
                            style={{ 
                              color: '#6B1B6B',
                              border: '2px solid rgba(255, 255, 255, 0.8)',
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={closeModal}
                          >
                            Close
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SurpriseModal;
