import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Clock, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Signature', href: '#featured' },
    { name: 'Menu', href: '#menu' },
    { name: 'Chefs', href: '#chefs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Critiques', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background transparent to dark obsidian
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view
      const scrollPosition = window.scrollY + 100;
      const sections = ['hero', 'about', 'featured', 'menu', 'chefs', 'gallery', 'testimonials', 'contact'];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro bar for luxury contact info */}
      <div className="bg-black/95 text-[10px] md:text-xs text-neutral-400 border-b border-white/5 py-1.5 px-4 md:px-8 flex justify-between items-center z-40 relative">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span className="font-mono text-neutral-300">17:00 – 23:30 Daily</span>
          </span>
          <span className="hidden sm:flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-gold" />
            <span className="font-mono text-neutral-300">+1 (800) 555-0199</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-neutral-300 font-mono tracking-wider uppercase">Accepting VIP Bookings</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-onyx/90 backdrop-blur-xl border-b border-crimson/25 shadow-lg shadow-black/80 py-3'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex flex-col items-start group"
          >
            <span className="font-serif text-xl md:text-2xl text-white tracking-[0.25em] font-light group-hover:text-gold transition-colors duration-300">
              L'ÉCLIPSE
            </span>
            <span className="text-[8px] md:text-[9px] tracking-[0.4em] uppercase text-crimson group-hover:text-white transition-colors duration-300 font-serif">
              GASTRONOMIE NOIRE
            </span>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`text-xs uppercase tracking-[0.2em] font-light transition-all duration-300 hover:text-white relative pb-1 ${
                  activeSection === link.href.substring(1)
                    ? 'text-white font-medium'
                    : 'text-neutral-400'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-crimson"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="flex items-center gap-4">
            <button
              id="nav-reservation-btn"
              onClick={onOpenReservation}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-velvet to-crimson hover:from-crimson hover:to-scarlet text-white text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-none border border-crimson/25 hover:border-crimson/50 shadow-lg shadow-crimson/15 transition-all duration-300 hover:scale-[1.02] active:scale-95 font-light"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Réserve a Table</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-neutral-400 hover:text-white p-1 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-nav-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-onyx border-b border-crimson/25 absolute left-0 right-0 top-full overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-5 border-t border-white/5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`text-sm uppercase tracking-[0.25em] py-2 border-b border-white/5 hover:text-gold transition-colors ${
                      activeSection === link.href.substring(1)
                        ? 'text-white border-l-2 border-crimson pl-3'
                        : 'text-neutral-400 pl-0'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                
                <button
                  id="mobile-reservation-btn"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenReservation();
                  }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-velvet to-crimson text-white text-xs uppercase tracking-[0.2em] py-3 mt-4 border border-crimson/30"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Réserve a Table</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
