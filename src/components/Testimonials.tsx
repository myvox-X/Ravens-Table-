import { Star, Quote, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-coal border-t border-b border-white/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-crimson/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-5 w-80 h-80 bg-velvet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] block">
            MICHELIN CRITIQUES & PATRON FEEDBACK
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight">
            Les Éloges de l'Éclipse
          </h2>
          <div className="w-12 h-[2px] bg-crimson mx-auto mt-4" />
          <p className="text-neutral-400 text-sm font-light tracking-wide max-w-lg mx-auto">
            Read critical notes published in international food reviews and stories shared by our regular VIP guests.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-onyx border border-white/5 p-8 relative flex flex-col justify-between h-full group hover:border-crimson/25 transition-all duration-300"
            >
              {/* Corner fine visual tick */}
              <div className="absolute top-0 right-0 w-6 h-[1px] bg-crimson/30" />
              <div className="absolute top-0 right-0 w-[1px] h-6 bg-crimson/30" />

              {/* Top Row: Stars and Quote */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-white/5 group-hover:text-crimson/20 transition-all duration-300" />
                </div>

                {/* Comment */}
                <p className="text-neutral-300 text-sm font-light leading-relaxed tracking-wide italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Bottom Row: Author details & recommendation */}
              <div className="pt-6 mt-6 border-t border-white/5 space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-serif text-white font-light tracking-wide text-sm">
                      {review.name}
                    </h4>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-crimson block mt-0.5">
                      {review.role}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-neutral-500">
                    {review.date}
                  </span>
                </div>

                {/* Dish recommendation tag */}
                <div className="bg-coal border border-white/5 p-2.5 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-crimson/10 border border-crimson/30 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3 h-3 text-gold" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[8px] text-neutral-500 font-mono block leading-none uppercase">Recommended Selection</span>
                    <span className="text-[11px] text-gold truncate block font-serif italic mt-0.5 leading-none">
                      {review.dishRecommendation}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big visual quote divider at the bottom */}
        <div className="mt-20 text-center max-w-3xl mx-auto border-t border-b border-white/5 py-12 relative">
          <Quote className="w-16 h-16 text-white/5 mx-auto absolute -top-8 left-1/2 -translate-x-1/2" />
          <p className="font-serif text-lg md:text-2xl text-neutral-300 italic tracking-wide font-light leading-relaxed">
            "To gather at L'Éclipse is to suspend the passing of the sun. In our darkness, we celebrate the absolute fire of culinary precision."
          </p>
          <span className="font-mono text-[10px] text-gold tracking-[0.3em] uppercase block mt-4">
            — Chef Antoine Dubois
          </span>
        </div>

      </div>
    </section>
  );
}
