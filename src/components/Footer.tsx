import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white border-t border-white/10 pt-16 pb-12 select-none" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-white/10">
          {/* Brand Tribute & Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-script text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Coca-Cola
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest bg-[#E41E2B] text-white px-2 py-0.5 rounded-full">
                Fan Tribute
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              An independent web experience dedicated to the heritage, iconic industrial design, and timeless refreshment of the world’s most recognized soda.
            </p>

            <div className="inline-flex items-center gap-1.5 text-xs text-white/60">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-[#E41E2B] fill-[#E41E2B]" />
              <span>for soda enthusiasts everywhere</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-white text-xs">Explore</p>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#story" className="hover:text-white transition-colors">
                    Our Story (1886)
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors">
                    Product Lineup
                  </a>
                </li>
                <li>
                  <a href="#locator" className="hover:text-white transition-colors">
                    Where to Buy
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-white text-xs">Community</p>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#sustainability" className="hover:text-white transition-colors">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#newsletter" className="hover:text-white transition-colors">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Official Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to top CTA */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-black font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full border border-white/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Legal Disclaimer & Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Exact required disclaimer verbatim */}
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-semibold text-white/90">
              An independent fan tribute. Coca-Cola is a trademark of The Coca-Cola Company.
            </p>
            <p className="text-[11px] text-white/50">
              This fan project is not affiliated with, sponsored by, or endorsed by The Coca-Cola Company.
            </p>
          </div>

          {/* Privacy Policy & Terms Links */}
          <div className="flex items-center space-x-6 text-xs text-white/70 font-medium">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white underline underline-offset-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white underline underline-offset-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              Terms of Use
            </button>
            <span className="text-white/40">© {new Date().getFullYear()} Fan Tribute</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
