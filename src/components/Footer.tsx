import { ArrowUp, Clock } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Facebook', href: 'https://facebook.com' },
    { name: 'Threads', href: 'https://threads.net' },
    { name: 'Michelin Guide', href: 'https://guide.michelin.com' }
  ];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 border-t border-white/5 py-16 px-4 md:px-8 relative z-10">
      
      {/* Footer Top Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/5 pb-12 mb-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-serif text-2xl text-white tracking-[0.25em] font-light">
            L'ÉCLIPSE
          </span>
          <span className="text-[8px] tracking-[0.4em] uppercase text-crimson font-serif mt-1 block">
            GASTRONOMIE NOIRE
          </span>
        </div>

        {/* Back to top dynamic button */}
        <button
          onClick={handleBackToTop}
          className="flex items-center gap-2 border border-white/10 hover:border-crimson hover:bg-velvet/25 text-neutral-500 hover:text-white px-4 py-2 font-mono text-[9px] uppercase tracking-[0.25em] transition-all focus:outline-none"
        >
          <span>Ascend to Zenith</span>
          <ArrowUp className="w-3.5 h-3.5 text-gold" />
        </button>
      </div>

      {/* Footer Main Links / Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        
        {/* Column 1: Philosophy links */}
        <div className="space-y-4">
          <h5 className="font-serif text-white tracking-widest text-xs uppercase">
            The Philosophy
          </h5>
          <ul className="space-y-2 text-xs font-light">
            <li>
              <a href="#about" className="hover:text-gold transition-colors">La Théâtralité</a>
            </li>
            <li>
              <a href="#featured" className="hover:text-gold transition-colors">Les Chef d’Œuvres</a>
            </li>
            <li>
              <a href="#menu" className="hover:text-gold transition-colors">Carte de Saisons</a>
            </li>
            <li>
              <a href="#chefs" className="hover:text-gold transition-colors">Culinary Directors</a>
            </li>
          </ul>
        </div>

        {/* Column 2: VIP & Dining services */}
        <div className="space-y-4">
          <h5 className="font-serif text-white tracking-widest text-xs uppercase">
            VIP Services
          </h5>
          <ul className="space-y-2 text-xs font-light">
            <li>
              <a href="#reservation" className="hover:text-gold transition-colors">Commission a Table</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gold transition-colors">Private Dining Salons</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gold transition-colors">Obsidian Cellar Tastings</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gold transition-colors">Bespoke Catering</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social feeds */}
        <div className="space-y-4">
          <h5 className="font-serif text-white tracking-widest text-xs uppercase">
            Social Coordinates
          </h5>
          <ul className="space-y-2 text-xs font-light">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter or subtle slogan */}
        <div className="space-y-4 col-span-2 md:col-span-1">
          <h5 className="font-serif text-white tracking-widest text-xs uppercase">
            The Celestial Bulletin
          </h5>
          <p className="text-xs text-neutral-500 leading-relaxed font-light">
            Subscribe to receive exclusive seating invitations, secret cellar releases, and announcements of guest-chef menus.
          </p>
          <div className="flex border border-white/15 bg-coal overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent border-none text-xs text-white px-3 py-2 w-full focus:outline-none"
            />
            <button className="bg-crimson hover:bg-scarlet text-white px-4 text-xs font-mono uppercase tracking-widest hover:text-gold transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom copyright */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-neutral-600">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} L'Éclipse. All Rights Reserved.</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-neutral-400">Security Charter</a>
          <a href="#" className="hover:text-neutral-400">VIP Access Protocols</a>
          <a href="#" className="hover:text-neutral-400">Maître d’ Rules</a>
        </div>
      </div>
    </footer>
  );
}
