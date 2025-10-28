import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 bg-gradient-to-r from-soft-pink via-lavender to-baby-blue">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-pacifico text-2xl md:text-3xl font-semibold" style={{ color: '#6B1B6B' }}>
            Made with
          </span>
          <motion.span
            className="text-4xl inline-block"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            💖
          </motion.span>
          <span className="font-pacifico text-2xl md:text-3xl font-semibold" style={{ color: '#6B1B6B' }}>
            just for you
          </span>
        </motion.div>

        <motion.div
          className="mt-6 font-poppins text-sm font-semibold"
          style={{ color: '#6B1B6B' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>May your special day be filled with endless joy and magic ✨</p>
        </motion.div>

        {/* Floating hearts */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              style={{
                left: `${25 + i * 25}%`,
                bottom: 0,
                willChange: 'transform',
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeOut",
              }}
            >
              💖
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
