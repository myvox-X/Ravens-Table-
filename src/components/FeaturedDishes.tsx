import { useState } from 'react';
import { Wine, BookOpen, ChevronRight, Info } from 'lucide-react';
import { FEATURED_DISHES } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function FeaturedDishes() {
  const [activeStoryId, setActiveStoryId] = useState<string | null>(null);
  const [activePairingId, setActivePairingId] = useState<string | null>(null);

  const toggleStory = (id: string) => {
    setActiveStoryId(activeStoryId === id ? null : id);
  };

  const togglePairing = (id: string) => {
    setActivePairingId(activePairingId === id ? null : id);
  };

  return (
    <section
      id="featured"
      className="py-24 bg-onyx relative overflow-hidden"
    >
      {/* Decorative vertical light lines */}
      <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-white/5 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-1/4 w-[1px] bg-white/5 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] block">
            Signature Masterpieces
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight">
            Les Éclipses de Saveur
          </h2>
          <div className="w-12 h-[2px] bg-crimson mx-auto mt-4" />
          <p className="text-neutral-400 text-sm font-light tracking-wide max-w-lg mx-auto">
            These dishes represent our ultimate expression of culinary art—where rare ingredients undergo theatrical transitions.
          </p>
        </div>

        {/* Dishes Staggered Layout Grid */}
        <div className="space-y-24">
          {FEATURED_DISHES.map((dish, index) => {
            const isEven = index % 2 === 0;
            const isStoryOpen = activeStoryId === dish.id;
            const isPairingOpen = activePairingId === dish.id;

            return (
              <div
                key={dish.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* 1. Dish Image Card with hover effects (Cols: 1-6) */}
                <div
                  className={`lg:col-span-6 relative overflow-hidden group border border-white/5 bg-coal shadow-2xl transition-all duration-700 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Subtle red outline glow on hover */}
                  <div className="absolute inset-0 border border-crimson/0 group-hover:border-crimson/50 transition-all duration-500 z-20 pointer-events-none" />
                  
                  {/* Aspect Ratio 4:3 Box */}
                  <div className="aspect-[4/3] overflow-hidden w-full relative">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Shadow scrim gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent z-10" />

                    {/* Price tag in modern JetBrains Mono */}
                    <div className="absolute bottom-6 right-6 z-20 bg-black/85 border border-crimson/30 px-4 py-2 flex items-center gap-1">
                      <span className="text-[10px] text-neutral-400 font-mono">USD</span>
                      <span className="text-lg text-white font-mono font-medium">${dish.price}</span>
                    </div>

                    {/* Left overlay tags */}
                    <div className="absolute top-6 left-6 z-20 flex gap-2">
                      {dish.tags?.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-crimson/90 border border-crimson/25 text-white text-[8px] tracking-[0.25em] uppercase font-mono px-3 py-1.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. Dish Content Details (Cols: 7-12) */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-gold uppercase tracking-[0.25em]">
                      Signature Dish 0{index + 1}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-4xl text-white font-light tracking-tight hover:text-gold transition-colors duration-300">
                      {dish.name}
                    </h3>
                  </div>

                  {/* Dietary labels */}
                  {dish.dietary && (
                    <div className="flex gap-2">
                      {dish.dietary.map((die) => (
                        <span
                          key={die}
                          className="text-[9px] font-mono border border-white/10 text-neutral-400 px-2 py-0.5"
                          title={
                            die === 'GF'
                              ? 'Gluten Free'
                              : die === 'V'
                              ? 'Vegetarian'
                              : die === 'VG'
                              ? 'Vegan'
                              : die === 'NF'
                              ? 'Nut Free'
                              : 'Dairy Free'
                          }
                        >
                          {die}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed tracking-wide font-light">
                    {dish.description}
                  </p>

                  {/* Interactive Accordion Toggles (Sommelier Wine pairing & Chef Story) */}
                  <div className="space-y-3 pt-3">
                    {/* SOMMELIER WINE PAIRING */}
                    <div className="border border-white/5 bg-coal">
                      <button
                        onClick={() => togglePairing(dish.id)}
                        className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-black/40 focus:outline-none"
                      >
                        <div className="flex items-center gap-3">
                          <Wine className="w-4 h-4 text-gold shrink-0" />
                          <span className="font-serif text-sm tracking-wide text-white font-light">
                            Sommelier Wine Pairing
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-500 text-xs">
                          <span className="font-mono text-[10px] hidden sm:inline text-gold-dark truncate max-w-[180px]">
                            {dish.winePairing}
                          </span>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isPairingOpen ? 'rotate-90 text-crimson' : ''
                            }`}
                          />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isPairingOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 pt-0 border-t border-white/5 space-y-3">
                              <div className="text-xs text-gold-light tracking-wide font-medium mt-3">
                                Pour: <span className="underline italic">{dish.winePairing}</span>
                              </div>
                              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                                {dish.sommelierNotes}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* CHEF'S STORY */}
                    <div className="border border-white/5 bg-coal">
                      <button
                        onClick={() => toggleStory(dish.id)}
                        className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-black/40 focus:outline-none"
                      >
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-4 h-4 text-gold shrink-0" />
                          <span className="font-serif text-sm tracking-wide text-white font-light">
                            The Culinary Narrative
                          </span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${
                            isStoryOpen ? 'rotate-90 text-crimson' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isStoryOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 pt-0 border-t border-white/5">
                              <p className="text-neutral-400 text-xs font-light leading-relaxed mt-3 italic pl-3 border-l border-crimson">
                                {dish.story}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
