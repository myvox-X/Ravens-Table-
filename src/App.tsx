import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedDishes from './components/FeaturedDishes';
import Menu from './components/Menu';
import Chefs from './components/Chefs';
import Reservation from './components/Reservation';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Focus effect to reset scroll position on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="app-container" className="bg-onyx text-neutral-200 select-none antialiased min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader-panel" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main-app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            {/* Header / Navbar */}
            <Navbar onOpenReservation={handleOpenReservation} />

            {/* Main Sections */}
            <main id="main-content">
              {/* Hero Section */}
              <Hero onOpenReservation={handleOpenReservation} />

              {/* About Section */}
              <About />

              {/* Featured Dishes Section */}
              <FeaturedDishes />

              {/* Interactive Menu Section */}
              <Menu />

              {/* Chefs Section */}
              <Chefs />

              {/* Seating & Reservation Section */}
              <Reservation />

              {/* Photo Gallery Section */}
              <Gallery />

              {/* Testimonials / Critiques Section */}
              <Testimonials />

              {/* Contact / Inquiries Section */}
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
