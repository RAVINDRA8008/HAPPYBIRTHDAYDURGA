import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import HeroSection from './components/Sections/HeroSection';
import AgeCounter from './components/Sections/AgeCounter';
import CakeInteractive from './components/Sections/CakeInteractive';
import SurpriseModal from './components/Sections/SurpriseModal';
import WishesCard from './components/Sections/WishesCard';
import Footer from './components/Sections/Footer';
import ParticlesLayer from './components/Effects/ParticlesLayer';
import ClickHearts from './components/Effects/ClickHearts';
import LoadingAnimation from './components/Effects/LoadingAnimation';
import ScrollParallax from './components/Effects/ScrollParallax';
import FloatingPetals from './components/Effects/FloatingPetals';
import CelebrationSequence from './components/Effects/CelebrationSequence';
import FloatingBalloons from './components/Effects/FloatingBalloons';
import SakuraPetals from './components/Effects/SakuraPetals';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
    // Trigger celebration after a brief moment
    setTimeout(() => {
      setShowCelebration(true);
    }, 300);
  };

  if (loading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  // Calculate background color based on scroll
  const getBackgroundColor = (progress) => {
    if (progress < 0.33) {
      // Pink to Lavender
      const localProgress = progress / 0.33;
      return `linear-gradient(135deg, 
        hsl(${340 - localProgress * 20}, ${100 - localProgress * 15}%, ${95 - localProgress * 5}%), 
        hsl(${280 + localProgress * 10}, ${85 + localProgress * 5}%, ${92 - localProgress * 3}%))`;
    } else if (progress < 0.66) {
      // Lavender to Blue
      const localProgress = (progress - 0.33) / 0.33;
      return `linear-gradient(135deg, 
        hsl(${280 - localProgress * 80}, ${90 - localProgress * 10}%, ${89 + localProgress * 3}%), 
        hsl(${200 + localProgress * 5}, ${95 - localProgress * 10}%, ${90 + localProgress * 5}%))`;
    } else {
      // Blue to Mint
      const localProgress = (progress - 0.66) / 0.34;
      return `linear-gradient(135deg, 
        hsl(${200 - localProgress * 30}, ${85 + localProgress * 10}%, ${95 - localProgress * 2}%), 
        hsl(${160 + localProgress * 10}, ${90 + localProgress * 5}%, ${95 - localProgress * 3}%))`;
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Celebration Sequence - Shows FIRST before main content */}
      <AnimatePresence mode="wait">
        {showCelebration && (
          <CelebrationSequence 
            onComplete={() => {
              console.log('🎯 Celebration callback fired, hiding celebration');
              setShowCelebration(false);
            }} 
          />
        )}
      </AnimatePresence>

      {/* Main content - Shows after celebration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showCelebration ? 0 : 1 }}
        transition={{ duration: 1, delay: showCelebration ? 0 : 0.5 }}
        className={showCelebration ? 'pointer-events-none' : ''}
        style={{ minHeight: '100vh' }}
      >
        {/* Dynamic color-shifting background */}
        <motion.div
          className="fixed inset-0 z-0"
          style={{
            background: getBackgroundColor(scrollProgress),
          }}
          animate={{
            background: getBackgroundColor(scrollProgress),
          }}
          transition={{ duration: 0.5 }}
        />

      {/* Animated Gradient Mesh - Morphing blobs with heartbeat */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Blob 1 - Pink */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(255, 105, 180, 0.8) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          animate={{
            x: ['-10%', '20%', '-10%'],
            y: ['10%', '30%', '10%'],
            scale: [1, 1.05, 1, 1.05, 1], // Heartbeat: beat-beat-pause
            opacity: [0.3, 0.35, 0.3, 0.35, 0.3],
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scale: {
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.15, 0.3, 0.45, 1], // Heartbeat rhythm
            },
            opacity: {
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.15, 0.3, 0.45, 1],
            },
          }}
        />

        {/* Blob 2 - Purple */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(147, 112, 219, 0.8) 0%, transparent 70%)',
            filter: 'blur(100px)',
            right: 0,
            top: '20%',
          }}
          animate={{
            x: ['10%', '-20%', '10%'],
            y: ['20%', '40%', '20%'],
            scale: [1, 1.05, 1, 1.05, 1], // Heartbeat
            opacity: [0.3, 0.35, 0.3, 0.35, 0.3],
          }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scale: {
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.15, 0.3, 0.45, 1],
              delay: 0.1, // Slightly offset for natural feel
            },
            opacity: {
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.15, 0.3, 0.45, 1],
              delay: 0.1,
            },
          }}
        />

        {/* Blob 3 - Blue */}
        <motion.div
          className="absolute w-[550px] h-[550px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(135, 206, 250, 0.8) 0%, transparent 70%)',
            filter: 'blur(100px)',
            left: '50%',
            bottom: '10%',
          }}
          animate={{
            x: ['-30%', '30%', '-30%'],
            y: ['10%', '-10%', '10%'],
            scale: [1, 1.05, 1, 1.05, 1], // Heartbeat
            opacity: [0.25, 0.3, 0.25, 0.3, 0.25],
          }}
          transition={{
            x: {
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scale: {
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.15, 0.3, 0.45, 1],
              delay: 0.2,
            },
            opacity: {
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.15, 0.3, 0.45, 1],
              delay: 0.2,
            },
          }}
        />

        {/* Blob 4 - Mint */}
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(152, 251, 152, 0.7) 0%, transparent 70%)',
            filter: 'blur(100px)',
            right: '20%',
            bottom: '30%',
          }}
          animate={{
            x: ['20%', '-10%', '20%'],
            y: ['30%', '10%', '30%'],
            scale: [1, 1.05, 1, 1.05, 1], // Heartbeat
            opacity: [0.25, 0.3, 0.25, 0.3, 0.25],
          }}
          transition={{
            x: {
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scale: {
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.15, 0.3, 0.45, 1],
              delay: 0.3,
            },
            opacity: {
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.15, 0.3, 0.45, 1],
              delay: 0.3,
            },
          }}
        />

        {/* Blob 5 - Gold */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.7) 0%, transparent 70%)',
            filter: 'blur(100px)',
            left: '30%',
            top: '50%',
          }}
          animate={{
            x: ['30%', '10%', '30%'],
            y: ['50%', '70%', '50%'],
            scale: [1, 1.05, 1, 1.05, 1], // Heartbeat
            opacity: [0.2, 0.25, 0.2, 0.25, 0.2],
          }}
          transition={{
            x: {
              duration: 23,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 23,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scale: {
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.15, 0.3, 0.45, 1],
              delay: 0.4,
            },
            opacity: {
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.15, 0.3, 0.45, 1],
              delay: 0.4,
            },
          }}
        />
      </div>

      {/* Watercolor texture overlay */}
      <div 
        className="fixed inset-0 -z-10 opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 214, 232, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(231, 209, 255, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(205, 235, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 90% 20%, rgba(214, 255, 242, 0.3) 0%, transparent 50%)
          `,
          filter: 'blur(60px)',
        }}
      />

      {/* Old animated gradient blobs removed - replaced with mesh above */}

      {/* NEW: Floating Birthday Balloons - Interactive! */}
      <FloatingBalloons />

      {/* NEW: Sakura Cherry Blossom Petals */}
      <SakuraPetals />

      {/* Floating particles layer */}
      <ParticlesLayer />

      {/* Floating cherry blossom petals */}
      <FloatingPetals />

      {/* Multi-layer parallax scrolling */}
      <ScrollParallax />

      {/* Click to spawn hearts */}
      <ClickHearts />

      {/* Main content */}
      <div className="relative z-20">
        <HeroSection />
        
        <div className="bg-gradient-to-b from-transparent via-mint/20 to-transparent">
          <AgeCounter />
        </div>

        <div className="bg-gradient-to-b from-transparent via-baby-blue/20 to-transparent">
          <CakeInteractive />
        </div>

        <SurpriseModal />

        <div className="bg-gradient-to-b from-transparent via-lavender/20 to-transparent">
          <WishesCard />
        </div>

        <Footer />
      </div>
      </motion.div> {/* Close main content wrapper */}
    </div>
  );
}

export default App;
