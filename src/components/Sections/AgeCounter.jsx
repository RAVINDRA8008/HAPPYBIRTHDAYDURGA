import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { calculateTimeSinceBirth } from '../../utils/timeHelpers';

const AgeCounter = () => {
  const birthDate = '2002-10-29';
  const [timeData, setTimeData] = useState(calculateTimeSinceBirth(birthDate));
  const [changedValues, setChangedValues] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = calculateTimeSinceBirth(birthDate);
      
      // Track which values changed
      const changed = {};
      Object.keys(newData).forEach(key => {
        if (newData[key] !== timeData[key]) {
          changed[key] = true;
          setTimeout(() => {
            setChangedValues(prev => ({ ...prev, [key]: false }));
          }, 300);
        }
      });
      
      setChangedValues(changed);
      setTimeData(newData);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeData]);

  const TimeUnit = ({ value, label, icon, hasChanged }) => (
    <motion.div
      className="neumorphic rounded-3xl px-3 py-4 relative overflow-hidden"
      animate={hasChanged ? {
        scale: [1, 1.08, 1],
        rotateY: [0, 8, 0],
      } : {}}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        boxShadow: `
          4px 4px 10px rgba(209, 193, 255, 0.4),
          -4px -4px 10px rgba(255, 255, 255, 1),
          inset 4px 4px 8px rgba(255, 255, 255, 0.6),
          inset -4px -4px 8px rgba(231, 209, 255, 0.4)
        `,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {hasChanged && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.5 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              initial={{ x: '50%', y: '50%', opacity: 1 }}
              animate={{
                x: `${50 + (Math.random() - 0.5) * 100}%`,
                y: `${50 + (Math.random() - 0.5) * 100}%`,
                opacity: 0,
              }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>
      )}
      
      <div className="flex flex-col items-center justify-center mb-2">
        <span className="text-2xl mb-1">{icon}</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{
              background: 'linear-gradient(135deg, #8B008B, #FF1493, #9370DB)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 4px rgba(139, 0, 139, 0.4))',
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <p 
        className="text-xs md:text-sm font-poppins font-semibold uppercase tracking-wider text-center"
        style={{ 
          background: 'linear-gradient(135deg, #6B1B6B, #8B008B)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '700',
        }}
      >
        {label}
      </p>
    </motion.div>
  );

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 
            className="font-pacifico text-4xl md:text-5xl mb-4 flex items-center justify-center gap-2"
          >
            <span style={{ WebkitTextFillColor: 'initial' }}>🎀</span>
            <span className="rainbow-shimmer">Since You Were Born</span>
          </h2>
          <p className="font-poppins text-lg md:text-xl font-semibold" style={{ color: '#6B1B6B' }}>
            Since October 29, 2002, you've brightened the world for...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
          style={{
            perspective: '1500px',
            transformStyle: 'preserve-3d',
          }}
        >
          <TimeUnit
            value={timeData.years}
            label="Years"
            icon="💗"
            hasChanged={changedValues.years}
          />
          <TimeUnit
            value={timeData.months}
            label="Months"
            icon="🌸"
            hasChanged={changedValues.months}
          />
          <TimeUnit
            value={timeData.totalDays}
            label="Days"
            icon="✨"
            hasChanged={changedValues.totalDays}
          />
          <TimeUnit
            value={timeData.hours}
            label="Hours"
            icon="🎀"
            hasChanged={changedValues.hours}
          />
          <TimeUnit
            value={timeData.minutes}
            label="Minutes"
            icon="💝"
            hasChanged={changedValues.minutes}
          />
          <TimeUnit
            value={timeData.seconds}
            label="Seconds"
            icon="🌟"
            hasChanged={changedValues.seconds}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AgeCounter;
