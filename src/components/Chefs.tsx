import { Award, Star, Quote } from 'lucide-react';
import { CHEFS } from '../data';
import { motion } from 'motion/react';

export default function Chefs() {
  return (
    <section
      id="chefs"
      className="py-24 bg-onyx relative overflow-hidden"
    >
      {/* Visual background lines */}
      <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-white/5 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-1/3 w-[1px] bg-white/5 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] block">
            The Culinary Visionaries
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight">
            Les Maîtres de Cuisine
          </h2>
          <div className="w-12 h-[2px] bg-crimson mx-auto mt-4" />
          <p className="text-neutral-400 text-sm font-light tracking-wide max-w-lg mx-auto">
            Our kitchens are led by multi-award winning masters who view gastronomy as both an architectural science and a fine art.
          </p>
        </div>

        {/* Chefs Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHEFS.map((chef, idx) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-coal border border-white/5 flex flex-col h-full group hover:border-crimson/30 transition-all duration-500 relative"
            >
              {/* Corner fine visual tick */}
              <div className="absolute top-0 right-0 w-6 h-[1px] bg-crimson/40 group-hover:bg-crimson transition-colors" />
              <div className="absolute top-0 right-0 w-[1px] h-6 bg-crimson/40 group-hover:bg-crimson transition-colors" />

              {/* Chef Image Box with Hover Zoom */}
              <div className="aspect-[3/4] overflow-hidden bg-onyx relative">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-coal via-transparent to-black/10" />

                {/* Role Overlay tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md border border-white/10 p-3">
                  <span className="font-serif text-[10px] uppercase tracking-[0.15em] text-crimson block font-semibold">
                    {chef.role}
                  </span>
                  <h3 className="font-serif text-base text-white font-light tracking-wide mt-1">
                    {chef.name}
                  </h3>
                </div>
              </div>

              {/* Chef Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                
                {/* Bio text */}
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed tracking-wide">
                  {chef.bio}
                </p>

                {/* Accolades checklist */}
                <div className="space-y-2 border-t border-b border-white/5 py-4">
                  <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-mono block">
                    Distinctions & Accolades
                  </span>
                  <div className="space-y-1.5">
                    {chef.accolades.map((acc, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-neutral-300">
                        <Star className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span className="text-[11px] font-light leading-tight tracking-wide">{acc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chef Philosophy block */}
                <div className="bg-black/40 border-l-2 border-crimson p-4 italic relative">
                  <Quote className="absolute -top-1 right-2 w-10 h-10 text-white/5 pointer-events-none" />
                  <p className="text-neutral-400 text-xs font-serif leading-relaxed tracking-wide">
                    {chef.philosophy}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
