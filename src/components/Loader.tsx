import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Elegant staggered phrases
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 1800),
      setTimeout(() => onComplete(), 3200)
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="loader-screen"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.05,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-onyx text-white"
      >
        {/* Subtle animated deep red glow background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-velvet/35 opacity-60 pointer-events-none" />
        
        {/* Crimson fine accent lines in corners */}
        <div className="absolute top-8 left-8 w-12 h-[1px] bg-crimson/30" />
        <div className="absolute top-8 left-8 w-[1px] h-12 bg-crimson/30" />
        <div className="absolute top-8 right-8 w-12 h-[1px] bg-crimson/30" />
        <div className="absolute top-8 right-8 w-[1px] h-12 bg-crimson/30" />
        <div className="absolute bottom-8 left-8 w-12 h-[1px] bg-crimson/30" />
        <div className="absolute bottom-8 left-8 w-[1px] h-12 bg-crimson/30" />
        <div className="absolute bottom-8 right-8 w-12 h-[1px] bg-crimson/30" />
        <div className="absolute bottom-8 right-8 w-[1px] h-12 bg-crimson/30" />

        <div className="text-center z-10 px-4">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.p
                key="welcome"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="font-serif text-gold text-lg tracking-[0.2em] uppercase font-light"
              >
                Bienvenue à
              </motion.p>
            )}

            {step >= 1 && (
              <motion.div
                key="branding"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center"
              >
                <motion.h1
                  initial={{ tracking: '0.1em', opacity: 0 }}
                  animate={{ tracking: '0.35em', opacity: 1 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="font-serif text-4xl md:text-6xl text-white font-light mb-3"
                >
                  L’ÉCLIPSE
                </motion.h1>
                
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '80px' }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="h-[1px] bg-crimson"
                />

                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="font-serif italic text-gold-dark text-sm tracking-[0.15em] uppercase mt-3"
                >
                  Ombre et Lumière
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Loading progress meter at the bottom */}
        <div className="absolute bottom-20 w-48 h-[2px] bg-white/5 overflow-hidden">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ duration: 2.5, ease: 'easeInOut', repeat: Infinity }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-crimson to-transparent"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
