import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Heart, Star, Sparkle } from '../SVG/Decorations';

const ParticlesLayer = () => {
  // Generate particles with fixed positions and animations
  const particles = useMemo(() => {
    const items = [];
    const particleCount = window.innerWidth < 768 ? 3 : 6; // Reduced from 5/10
    
    for (let i = 0; i < particleCount; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        type: ['heart', 'star', 'sparkle'][Math.floor(Math.random() * 3)],
        delay: Math.random() * 5,
        duration: 6 + Math.random() * 4,
        size: 15 + Math.random() * 15,
      });
    }
    return items;
  }, []);

  const renderParticle = (particle) => {
    switch (particle.type) {
      case 'heart':
        return <Heart size={particle.size} fill="#FFD6E8" />;
      case 'star':
        return <Star size={particle.size} fill="#F8E1A1" />;
      case 'sparkle':
        return <Sparkle size={particle.size} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            willChange: 'transform',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(particle.id) * 20, 0],
            opacity: [0.15, 0.4, 0.15],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        >
          {renderParticle(particle)}
        </motion.div>
      ))}
    </div>
  );
};

export default ParticlesLayer;
