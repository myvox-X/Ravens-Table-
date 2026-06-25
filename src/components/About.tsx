import { useState } from 'react';
import { Sparkles, Wine, Award, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'ingredients' | 'cellar'>('philosophy');

  const tabContents = {
    philosophy: {
      title: "The Symphony of Shadow & Crimson",
      subtitle: "La Théâtralité Culinaire",
      description: "At L’Éclipse, we view dining not as sustenance, but as a deliberate emotional journey. Our menus are orchestrated as a play of contrasts: high-heat charcoal sears next to cold, delicate gels; the deep, earthy black of squid ink paired with the sharp crimson of forest berries.",
      highlights: [
        { icon: Flame, text: "Binchotan charcoal woodsearing up to 900°C" },
        { icon: Award, text: "Curated contrasts of visual temperature and texture" }
      ],
      quote: "“The plate is an empty theater. We utilize the deepest blacks of the shadow and the rich reds of the vine to tell stories of earth and sea.”"
    },
    ingredients: {
      title: "Obsessively Sourced, Masterfully Honored",
      subtitle: "La Pureté des Ingrédients",
      description: "Our ingredients do not travel simply; they are hunted. From wild Bretonne Blue Lobsters caught in the ice-cold currents of Brittany, to A5 Miyazaki Wagyu reared under the guidance of multi-generational cattle masters in Japan.",
      highlights: [
        { icon: Sparkles, text: "100% direct-import Michelin level ingredients" },
        { icon: Award, text: "Micro-seasonal wild greens gathered at dawn" }
      ],
      quote: "“To honor an ingredient is to respect its lineage. We do not mask flavor; we build architectural temples around it.”"
    },
    cellar: {
      title: "The Subterranean Obsidian Vault",
      subtitle: "Les Grands Crus Classés",
      description: "Beneath our dining room lies the Obsidian Vault, a climate-regulated chamber housing 14,000 precious bottles. Guided by our lead sommeliers, we pair every signature dish with rare vintage Bordeaux, mature Burgundy, and hard-to-source grower Champagnes.",
      highlights: [
        { icon: Wine, text: "Private collectors' releases and historical vintages" },
        { icon: Sparkles, text: "Interactive blind pairings customized to your palate" }
      ],
      quote: "“A great wine is liquid time. We pour not just to match the plate, but to suspend the evening in memory.”"
    }
  };

  const currentContent = tabContents[activeTab];

  return (
    <section
      id="about"
      className="py-24 bg-coal border-t border-b border-white/5 relative overflow-hidden"
    >
      {/* Decorative dark red radial light leaks in background */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-crimson/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-velvet/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Big typography and branding story */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] block">
                The Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight">
                L'Éclipse <br />
                <span className="italic text-neutral-400 font-normal">Of Fine Gastronomy</span>
              </h2>
              <div className="w-16 h-[2px] bg-crimson mt-4" />
            </div>

            <p className="text-neutral-300 text-sm md:text-base leading-relaxed tracking-wide font-light">
              Founded under the creative vision of Michelin culinary legend Chef Antoine Dubois, 
              L'Éclipse is a sensory sanctuary. Housed within a custom-designed dark gothic vault in 
              the city's cultural heart, the restaurant pairs architectural beauty with absolute culinary focus.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-black/40 border border-white/5 px-4 py-3 min-w-[140px]">
                <span className="font-serif text-3xl text-gold font-light font-mono">03</span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest leading-tight">
                  Michelin<br />Stars Held
                </span>
              </div>

              <div className="flex items-center gap-3 bg-black/40 border border-white/5 px-4 py-3 min-w-[140px]">
                <span className="font-serif text-3xl text-gold font-light font-mono">14k</span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest leading-tight">
                  Vintage<br />Cellar Labels
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tabs Container */}
          <div className="lg:col-span-7 flex flex-col h-full bg-onyx border border-white/5 p-6 sm:p-10 relative">
            {/* Fine design accent lines */}
            <div className="absolute top-0 right-0 w-8 h-[1px] bg-crimson" />
            <div className="absolute top-0 right-0 w-[1px] h-8 bg-crimson" />

            {/* Tab Controls */}
            <div className="flex border-b border-white/5 pb-4 mb-8 overflow-x-auto gap-4 md:gap-8 whitespace-nowrap">
              {(['philosophy', 'ingredients', 'cellar'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`font-mono text-xs uppercase tracking-[0.2em] pb-3 transition-all duration-300 relative focus:outline-none ${
                    activeTab === tab
                      ? 'text-gold font-medium'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  {tab === 'philosophy' ? 'Culinary Drama' : tab === 'ingredients' ? 'Rare Sourcing' : 'The Cellar'}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-crimson"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content panel with transitions */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] md:text-xs text-crimson uppercase tracking-[0.2em] font-mono block">
                      {currentContent.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-white font-light">
                      {currentContent.title}
                    </h3>
                  </div>

                  <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
                    {currentContent.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {currentContent.highlights.map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={idx} className="flex items-center gap-3 text-neutral-300">
                          <div className="w-8 h-8 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center shrink-0">
                            <IconComponent className="w-4 h-4 text-gold" />
                          </div>
                          <span className="text-xs md:text-sm font-light tracking-wide">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Editorial Quote */}
                  <div className="border-l-2 border-gold/40 pl-6 py-2 bg-black/20 italic text-neutral-400 text-xs md:text-sm font-serif leading-relaxed">
                    {currentContent.quote}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
