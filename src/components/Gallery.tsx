import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'interior' | 'plating' | 'cellar'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all' as const, label: 'All Artifacts' },
    { id: 'interior' as const, label: 'Interior Salons' },
    { id: 'plating' as const, label: 'Plating Art' },
    { id: 'cellar' as const, label: 'Wine Archives' }
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (id: string) => {
    const globalIndex = GALLERY_ITEMS.findIndex(item => item.id === id);
    if (globalIndex !== -1) {
      setLightboxIndex(globalIndex);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIdx = (lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
      setLightboxIndex(nextIdx);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIdx = (lightboxIndex + 1) % GALLERY_ITEMS.length;
      setLightboxIndex(nextIdx);
    }
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-onyx relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] block">
            Visual Chronicles
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight">
            The Obsidian Gallery
          </h2>
          <div className="w-12 h-[2px] bg-crimson mx-auto mt-4" />
          <p className="text-neutral-400 text-sm font-light tracking-wide max-w-lg mx-auto">
            A photographic tour inside our crimson chambers, culinary workstations, and deep vintage vaults.
          </p>
        </div>

        {/* Gallery Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs font-mono uppercase tracking-[0.2em] transition-all duration-300 relative ${
                activeCategory === cat.id
                  ? 'text-white border border-crimson bg-velvet/30'
                  : 'text-neutral-500 hover:text-neutral-300 border border-transparent hover:border-white/5 bg-coal/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenLightbox(item.id)}
                className="aspect-[4/3] group relative overflow-hidden bg-coal border border-white/5 cursor-pointer hover:border-crimson/30 transition-all duration-500 shadow-xl"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay with text and Search Icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/95 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6 z-10">
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-crimson/80 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-400">
                    <Search className="w-4 h-4 text-white" />
                  </div>
                  
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold block mb-1">
                    {item.category === 'cellar' ? 'Wine Archives' : item.category === 'plating' ? 'Plating Art' : 'Interior Sanctuary'}
                  </span>
                  <h3 className="font-serif text-lg text-white font-light tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-[11px] font-light mt-1.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LIGHTBOX MODAL WITH FULL CONTROLS */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 md:p-8"
            >
              {/* Corner Close button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors z-50 focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors z-50 focus:outline-none"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Image Container with details */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full bg-coal border border-white/10 overflow-hidden relative shadow-2xl"
              >
                <div className="aspect-[16/10] sm:aspect-[16/9] bg-black relative">
                  <img
                    src={GALLERY_ITEMS[lightboxIndex].image}
                    alt={GALLERY_ITEMS[lightboxIndex].title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 bg-black border-t border-white/5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-crimson block mb-1">
                    {GALLERY_ITEMS[lightboxIndex].category.toUpperCase()} • PHOTOGRAPH
                  </span>
                  <h4 className="font-serif text-lg md:text-xl text-white font-light">
                    {GALLERY_ITEMS[lightboxIndex].title}
                  </h4>
                  <p className="text-neutral-400 text-xs font-light mt-2 leading-relaxed max-w-3xl">
                    {GALLERY_ITEMS[lightboxIndex].description}
                  </p>
                </div>
              </motion.div>

              {/* Next button */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors z-50 focus:outline-none"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
