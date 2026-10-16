import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenPrivacy?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['story', 'products', 'locator', 'sustainability', 'newsletter', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Products', href: '#products' },
    { name: 'Where to Buy', href: '#locator' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#E41E2B]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3 border-b border-white/15'
          : 'bg-[#E41E2B] py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Wordmark */}
          <a
            href="#"
            className="flex items-baseline gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1"
            aria-label="Coca-Cola Fan Tribute Home"
          >
            <span className="font-script text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:scale-105 inline-block drop-shadow-sm">
              Coca-Cola
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-0.5 rounded-full border border-white/20">
              Tribute
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    isActive
                      ? 'bg-white text-[#E41E2B] shadow-sm'
                      : 'text-white/90 hover:text-white hover:bg-black/15'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <a
              href="#locator"
              className="hidden sm:inline-flex items-center gap-2 bg-black text-white hover:text-black font-semibold text-xs md:text-sm px-4 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-black/40 border border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white btn-fill-sweep-white group"
            >
              <MapPin className="w-3.5 h-3.5 text-white group-hover:text-black transition-colors" />
              <span>Find Nearby</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-[60px] bg-[#E41E2B] border-b border-white/20 shadow-2xl transition-all duration-300 max-h-[calc(100vh-60px)] overflow-y-auto"
          id="mobile-menu"
        >
          <div className="px-4 pt-4 pb-6 space-y-2 max-w-lg mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-black/20 transition-colors border border-transparent hover:border-white/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/15">
              <a
                href="#locator"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-black text-white py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg border border-white/20"
              >
                <MapPin className="w-4 h-4 text-white" />
                Find Store Locations
              </a>
              <p className="text-center text-[11px] text-white/70 mt-3">
                Independent Fan Project • 1886–Present
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
