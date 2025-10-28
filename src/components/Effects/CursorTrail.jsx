import { motion, AnimatePresence } from 'framer-motion';
import { useMousePosition, useSparkleTrail } from '../../hooks/useMouseEffects';

const CursorTrail = () => {
  const mousePosition = useMousePosition();
  const sparkles = useSparkleTrail(mousePosition);

  return (
    <>
      {/* Custom cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-2xl"
        >
          💖
        </motion.div>
      </motion.div>

      {/* Sparkle trail */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="fixed pointer-events-none z-40 text-xl"
            style={{
              left: sparkle.x - 8,
              top: sparkle.y - 8,
            }}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            ✨
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default CursorTrail;
