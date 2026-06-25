import { ArrowRight, ChevronDown } from 'lucide-react';
import { HERO_IMAGE } from '../data';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-onyx"
    >
      {/* Background Image with Rich Shading Overlays */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={HERO_IMAGE}
          alt="L'Éclipse Dining Room"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow brightness-50"
          style={{ animationDuration: '8s' }}
          referrerPolicy="no-referrer"
        />
        {/* Layered custom gradients for high text contrast and dramatic vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-transparent to-black/30" />
        {/* Deep red velvet ambient fog overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-velvet/20 to-transparent mix-blend-color-burn opacity-70" />
      </div>

      {/* Decorative luxury guidelines */}
      <div className="absolute inset-x-8 top-1/4 bottom-1/4 border-l border-r border-white/5 pointer-events-none hidden md:block z-10" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center mt-10 md:mt-0">
        
        {/* Elegant small crown banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-crimson/20 bg-black/40 backdrop-blur-md rounded-full mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-ping" />
          <span className="font-mono text-[9px] md:text-xs text-white uppercase tracking-[0.25em] font-light">
            A Three-Michelin Star Culinary Theatre
          </span>
        </motion.div>

        {/* Huge Luxury Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-8xl text-white font-light leading-tight tracking-tight mb-6"
        >
          Where Shadow <br className="hidden sm:block" />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-crimson via-red-200 to-scarlet font-normal">Meets Celestial</span> Culinary
        </motion.h1>

        {/* Dynamic description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mx-auto tracking-wide font-light leading-relaxed mb-10"
        >
          Step into a dark red and black sanctuary of progressive French gastronomy. 
          L'Éclipse pairs raw, ancestral fire techniques with elegant modern aesthetics to create an unforgettable drama of flavors.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            id="hero-reserve-btn"
            onClick={onOpenReservation}
            className="w-full sm:w-auto bg-gradient-to-r from-velvet via-crimson to-scarlet text-white text-xs uppercase tracking-[0.25em] px-8 py-4 rounded-none font-medium border border-crimson/25 shadow-xl shadow-crimson/25 hover:shadow-crimson/40 hover:border-crimson/50 hover:scale-[1.03] transition-all duration-300"
          >
            Commission a Table
          </button>
          
          <button
            id="hero-menu-btn"
            onClick={() => scrollToSection('menu')}
            className="w-full sm:w-auto bg-black/60 backdrop-blur-md text-white hover:text-white hover:bg-red-950/20 text-xs uppercase tracking-[0.25em] px-8 py-4 rounded-none font-light border border-white/10 hover:border-crimson/50 flex items-center justify-center gap-2 transition-all duration-300"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>

      {/* Micro-Details / Coordinates bar */}
      <div className="absolute bottom-12 left-4 md:left-8 z-10 hidden sm:flex items-center gap-3 font-mono text-[10px] text-neutral-500 tracking-wider">
        <span>EST. 2018</span>
        <span className="w-1.5 h-[1px] bg-neutral-600" />
        <span>40.7580° N, 73.9855° W</span>
      </div>

      <div className="absolute bottom-12 right-4 md:right-8 z-10 hidden sm:flex items-center gap-3 font-mono text-[10px] text-neutral-500 tracking-wider">
        <span className="text-crimson">OMBRÉ ET LUMIÈRE</span>
      </div>

      {/* Animated Arrow Scrolling Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <button
          id="hero-scroll-cue"
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-neutral-500 hover:text-white transition-colors duration-300 gap-1 focus:outline-none"
          aria-label="Scroll Down"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] mb-1">Begin</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-crimson" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
