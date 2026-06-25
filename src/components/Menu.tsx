import { useState } from 'react';
import { ALL_DISHES } from '../data';
import { Wine, Info, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<'starters' | 'mains' | 'desserts' | 'cocktails'>('starters');
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const categories = [
    { id: 'starters' as const, label: 'Starters & Crudo', sublabel: 'L’Aube' },
    { id: 'mains' as const, label: 'Main Courses', sublabel: 'Le Zénith' },
    { id: 'desserts' as const, label: 'Gourmet Desserts', sublabel: 'Le Crépuscule' },
    { id: 'cocktails' as const, label: 'Obsidian Liquid Art', sublabel: 'La Nuit' },
  ];

  const filteredItems = ALL_DISHES.filter(item => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="py-24 bg-coal border-t border-b border-white/5 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] block">
            The Culinary Compendium
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight">
            Le Menu l'Éclipse
          </h2>
          <div className="w-12 h-[2px] bg-crimson mx-auto mt-4" />
          <p className="text-neutral-400 text-sm font-light tracking-wide max-w-lg mx-auto">
            Each item is freshly structured and prepared on demand. Select a category to explore our culinary landscape.
          </p>
        </div>

        {/* Category Tab Selector */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 border-b border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="flex flex-col items-center group focus:outline-none relative px-4 pb-2"
            >
              <span className="text-[10px] text-crimson font-serif tracking-[0.2em] uppercase italic group-hover:text-gold transition-colors duration-300">
                {cat.sublabel}
              </span>
              <span className={`text-xs md:text-sm uppercase tracking-[0.2em] mt-1 ${
                activeCategory === cat.id ? 'text-white font-medium' : 'text-neutral-500 hover:text-neutral-300'
              } transition-colors duration-300`}>
                {cat.label}
              </span>

              {/* Glowing red bar under active button */}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeMenuUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-crimson"
                  shadow-lg="true"
                  shadow-crimson="true"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 sm:gap-6 p-4 rounded-none transition-all duration-300 border border-transparent hover:border-white/5 hover:bg-black/20 group relative overflow-hidden"
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
              >
                {/* Image Thumbnail */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden relative border border-white/10 bg-onyx">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle red tint overlay on thumbnail hover */}
                  <div className="absolute inset-0 bg-crimson/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="space-y-1">
                    {/* Header: Name and Price connected with Dots */}
                    <div className="flex justify-between items-baseline gap-2">
                      <h3 className="font-serif text-sm sm:text-base text-white tracking-wide truncate group-hover:text-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      {/* Dotted border line filler */}
                      <div className="flex-1 border-b border-dotted border-white/10 h-0 mx-1" />
                      <span className="font-mono text-sm text-gold font-medium shrink-0">
                        ${item.price}
                      </span>
                    </div>

                    {/* Dietary markers & Tags */}
                    <div className="flex flex-wrap gap-2 items-center">
                      {item.tags?.includes('Signature') && (
                        <span className="inline-flex items-center gap-1 text-[8px] bg-crimson/20 text-white font-mono uppercase px-2 py-0.5 tracking-wider border border-crimson/30">
                          <Sparkles className="w-2 h-2 text-gold animate-pulse" /> Signature
                        </span>
                      )}
                      {item.dietary?.map((diet) => (
                        <span
                          key={diet}
                          className="text-[8px] font-mono text-neutral-400 bg-white/5 px-1.5 py-0.5"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 text-xs sm:text-sm font-light tracking-wide line-clamp-2 mt-2 group-hover:text-neutral-300 transition-colors">
                    {item.description}
                  </p>

                  {/* Sommelier Pairing Line */}
                  {item.winePairing && (
                    <div className="mt-3 flex items-center gap-1.5 text-[10px] text-neutral-400 font-serif italic border-t border-white/5 pt-2">
                      <Wine className="w-3.5 h-3.5 text-gold" />
                      <span className="text-neutral-500 uppercase font-mono tracking-wider text-[8px] not-italic mr-1">Pair:</span>
                      <span className="truncate text-gold-dark font-light group-hover:text-gold transition-colors">{item.winePairing}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Sommeliers Note */}
        <div className="mt-16 bg-onyx border border-white/5 p-6 flex flex-col sm:flex-row items-center gap-6 max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-crimson/15 border border-crimson/30 flex items-center justify-center shrink-0">
            <Wine className="w-6 h-6 text-gold" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-sm sm:text-base text-white tracking-wide">
              The Sommelier Pairing Philosophy
            </h4>
            <p className="text-neutral-400 text-xs font-light leading-relaxed tracking-wide">
              All prices include consultation with our resident wine stewards. Custom bottle service or wine flight upgrades can be added to any reservation or tailored tableside during your meal.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
