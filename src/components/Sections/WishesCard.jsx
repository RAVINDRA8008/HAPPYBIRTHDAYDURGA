import { motion } from 'framer-motion';
import { Heart } from '../SVG/Decorations';

const WishesCard = () => {
  const wishes = [
    "May your dreams sparkle brighter than ever! ",
    "Wishing you endless laughter and joy! ",
    "Here's to another year of amazing adventures! ",
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="neumorphic rounded-3xl p-8 md:p-12 relative overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1500px',
          }}
        >
          {/* Floating hearts background */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                left: `%`,
                top: `%`,
                willChange: 'transform',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              <Heart size={30} fill="#FFD6E8" />
            </motion.div>
          ))}

          {/* Floating sparkles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`sparkle-`}
              className="absolute text-2xl pointer-events-none"
              style={{
                left: `%`,
                top: `%`,
                willChange: 'transform',
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 5 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              
            </motion.div>
          ))}

          <div className="relative z-10">
            <motion.h2
              className="font-pacifico text-4xl md:text-5xl mb-6 text-center flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span style={{
                background: 'linear-gradient(135deg, #FF1493, #9370DB, #FFD700)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Warm Wishes
              </span>
              <span style={{ WebkitTextFillColor: 'initial' }}>💕</span>
            </motion.h2>

            <motion.p
              className="font-poppins text-xl md:text-2xl text-center mb-8 leading-relaxed font-semibold"
              style={{ color: '#6B1B6B' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              From everyone who loves you — wishing you endless joy, laughter, and sparkly adventures ahead! 💖
            </motion.p>

            <div className="space-y-4">
              {wishes.map((wish, index) => (
                <motion.div
                  key={index}
                  className="neumorphic rounded-2xl px-6 py-4 text-center relative overflow-hidden"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.6 + index * 0.2,
                    type: 'spring',
                    stiffness: 80,
                    damping: 12,
                  }}
                  whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                    whileHover={{ 
                      opacity: [0, 0.3, 0],
                      x: ['-100%', '100%'],
                    }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  <p className="font-poppins text-lg font-semibold relative z-10" style={{ color: '#4A0E4E' }}>
                    {wish}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WishesCard;
