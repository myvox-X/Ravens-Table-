import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Simulate sending inquiry
    setFormSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-onyx relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] block">
            Location, Hours & Correspondence
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight">
            Connect With L'Éclipse
          </h2>
          <div className="w-12 h-[2px] bg-crimson mx-auto mt-4" />
          <p className="text-neutral-400 text-sm font-light tracking-wide max-w-lg mx-auto">
            Reach out for private hires, press relations, or bespoke events. Or visit us inside the city's historical theater district.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info & Opening Hours (Cols: 1-4) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Contact details */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-white font-light tracking-wide border-b border-white/5 pb-2">
                The Sanctuary
              </h3>
              
              <div className="space-y-4 font-light text-sm text-neutral-300">
                {/* Location */}
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 block">ADDRESS</span>
                    <p className="leading-relaxed mt-0.5 font-sans">
                      457 Obsidian Crescent, <br />
                      Theater District, NY 10019
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 block">RESERVATIONS HOTLINE</span>
                    <p className="leading-relaxed mt-0.5 font-mono text-white">
                      +1 (800) 555-0199
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 block">ELECTRONIC ENQUIRIES</span>
                    <p className="leading-relaxed mt-0.5 text-gold hover:text-white transition-colors">
                      maitre@leclipse-restaurant.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening hours */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-white font-light tracking-wide border-b border-white/5 pb-2">
                Operational Hours
              </h3>
              
              <div className="space-y-3 font-mono text-xs text-neutral-400">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-neutral-500">MON – FRI:</span>
                  <span className="text-white">17:00 – 23:30</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-neutral-500">SAT – SUN:</span>
                  <span className="text-white">16:30 – 00:00</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-neutral-500">COCKTAIL LOUNGE:</span>
                  <span className="text-crimson">Open until 02:00</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-neutral-500">HOLIDAYS:</span>
                  <span className="text-white">Closed Christmas Day</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Stylized Minimalist Map (Cols: 5-8) */}
          <div className="lg:col-span-4 bg-coal border border-white/5 p-6 h-full min-h-[380px] flex flex-col justify-between relative group">
            <div className="absolute top-0 right-0 w-6 h-[1px] bg-crimson/30" />
            <div className="absolute top-0 right-0 w-[1px] h-6 bg-crimson/30" />

            <div className="space-y-3">
              <span className="font-mono text-[10px] text-gold uppercase tracking-widest block">
                Sanctuary Coordinates
              </span>
              <h3 className="font-serif text-lg text-white font-light tracking-wide">
                District Location
              </h3>
            </div>

            {/* A beautiful custom black and red minimalist vector map drawing */}
            <div className="my-6 flex-1 bg-black/90 border border-white/10 relative overflow-hidden flex items-center justify-center min-h-[220px]">
              
              {/* Grid Lines */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10 pointer-events-none">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="border border-white/5" />
                ))}
              </div>

              {/* Vector Street drawing */}
              <div className="absolute top-1/4 left-0 right-0 h-4 bg-white/5 transform -rotate-6" />
              <div className="absolute top-2/3 left-0 right-0 h-6 bg-white/5 transform rotate-3" />
              <div className="absolute top-0 bottom-0 left-1/3 w-5 bg-white/5 transform rotate-12" />
              <div className="absolute top-0 bottom-0 left-2/3 w-4 bg-white/5 transform -rotate-12" />

              {/* River/Water vector block */}
              <div className="absolute bottom-0 right-0 left-1/2 top-3/4 bg-crimson/5 border-t border-crimson/20 -rotate-12" />

              {/* Radar Circle glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="block w-20 h-20 rounded-full bg-crimson/10 border border-crimson/30 animate-ping" style={{ animationDuration: '4s' }} />
                <span className="block w-12 h-12 rounded-full bg-crimson/20 border border-crimson/40 absolute top-4 left-4" />
              </div>

              {/* Pin representation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <MapPin className="w-6 h-6 text-gold drop-shadow-[0_4px_10px_rgba(136,8,8,0.5)] animate-bounce" />
                <span className="font-serif text-[9px] uppercase tracking-widest bg-black text-white px-2 py-0.5 border border-gold/30 mt-1 shadow-lg">
                  L'ÉCLIPSE
                </span>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 border border-white/10 hover:border-crimson/40 hover:bg-black/40 text-neutral-400 hover:text-white font-mono text-[10px] uppercase tracking-[0.2em] transition-all"
            >
              Access GPS Navigation
            </a>
          </div>

          {/* Column 3: Contact/Correspondence form (Cols: 9-12) */}
          <div className="lg:col-span-4 bg-coal border border-white/5 p-6 sm:p-8 relative">
            <div className="absolute top-0 left-0 w-6 h-[1px] bg-crimson/30" />
            <div className="absolute top-0 left-0 w-[1px] h-6 bg-crimson/30" />

            <h3 className="font-serif text-xl text-white font-light tracking-wide mb-6">
              Executive Correspondence
            </h3>

            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center space-y-4"
                >
                  <CheckCircle2 className="w-12 h-12 text-gold mx-auto animate-pulse" />
                  <div className="space-y-1">
                    <h4 className="font-serif text-base text-white tracking-wide">
                      Message Dispatched
                    </h4>
                    <p className="text-neutral-400 text-xs font-light leading-relaxed max-w-[240px] mx-auto">
                      Thank you. Your message has been logged directly inside the maître d's inbox. We will contact you within 12 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-onyx border border-white/10 px-3 py-2.5 text-xs text-white focus:border-crimson focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-onyx border border-white/10 px-3 py-2.5 text-xs text-white focus:border-crimson focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-onyx border border-white/10 px-3 py-2.5 text-xs text-neutral-400 focus:border-crimson focus:outline-none"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Private Hall Hires">Private Hall Hire (VIP)</option>
                      <option value="Press & Media">Press & Media Enquiries</option>
                      <option value="Careers">Culinary Career Applications</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <textarea
                      placeholder="Your message..."
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-onyx border border-white/10 px-3 py-2.5 text-xs text-white focus:border-crimson focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-velvet to-crimson hover:from-crimson hover:to-scarlet text-white border border-crimson/10 hover:border-crimson/30 text-[10px] uppercase tracking-[0.25em] py-3.5 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5 text-white" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
