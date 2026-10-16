import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { FizzParticles } from './FizzParticles';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Respect prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 15;
      const y = (e.clientY / innerHeight - 0.5) * 15;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#E41E2B] flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20 select-none"
      aria-label="Hero - Coca-Cola Tribute"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(255, 60, 75, 0.45) 0%, rgba(228, 30, 43, 0.95) 60%, #B50E1A 100%)',
        }}
        aria-hidden="true"
      />

      {/* Dynamic fizzy particles rising */}
      <FizzParticles />

      {/* Decorative large background watermark */}
      <div
        className="absolute -right-16 top-1/2 -translate-y-1/2 text-white/5 font-script text-[18vw] font-bold pointer-events-none select-none tracking-tighter"
        aria-hidden="true"
      >
        Delicious
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Tagline, CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Fan tribute badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-semibold tracking-wider uppercase border border-white/20 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
              <span>Independent Fan Tribute • Since 1886</span>
            </div>

            {/* Main Headline mixing Bold Sans & Spencerian Script */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] drop-shadow-md">
              <span className="block uppercase font-extrabold tracking-tight">Taste The</span>
              <span className="font-script text-white font-normal text-6xl sm:text-8xl md:text-9xl lg:text-[7.5rem] tracking-normal inline-block -rotate-2 -my-2 sm:-my-4 drop-shadow-lg">
                Feeling
              </span>
              <span className="block text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-white/95 mt-1">
                Of Real Magic
              </span>
            </h1>

            {/* Short Tagline with generous line height */}
            <p className="text-lg sm:text-xl md:text-2xl text-white font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-sm">
              Celebrating over 138 years of crisp effervescence, the world’s most recognizable contour glass, and the timeless joy of sharing an ice-cold refreshment.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-black text-white hover:text-black font-bold text-base px-8 py-4 rounded-full shadow-2xl hover:shadow-black/60 border-2 border-black transition-all duration-300 btn-fill-sweep-white group focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
              >
                <span>Explore Iconic Flavors</span>
                <Compass className="w-5 h-5 text-white group-hover:text-black group-hover:rotate-45 transition-all duration-300" />
              </a>

              <a
                href="#story"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-white hover:bg-white hover:text-[#E41E2B] font-bold text-base px-7 py-3.5 rounded-full border-2 border-white transition-all duration-300 shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
              >
                <span>Our 1886 Story</span>
              </a>
            </div>

            {/* Micro Badges / Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 text-white/90">
              <div className="bg-black/20 backdrop-blur-sm p-3 rounded-2xl border border-white/10 text-center">
                <span className="block text-xl font-extrabold text-white">1886</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                  Atlanta Birth
                </span>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-3 rounded-2xl border border-white/10 text-center">
                <span className="block text-xl font-extrabold text-white">3°C</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                  Perfect Chill
                </span>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-3 rounded-2xl border border-white/10 text-center">
                <span className="block text-xl font-extrabold text-white">200+</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                  Countries
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Bottle with Slow Float and Parallax */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Glowing red aura backing the bottle */}
            <div
              className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-white/20 blur-3xl -z-10 animate-pulse pointer-events-none"
              style={{
                transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
              }}
              aria-hidden="true"
            />

            {/* Bottle Image with Parallax & Floating Animation */}
            <div
              className="relative transition-transform duration-300 ease-out animate-float-slow max-w-sm sm:max-w-md"
              style={{
                transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
              }}
            >
              <div className="relative rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-white/20 via-transparent to-black/30 backdrop-blur-xs border border-white/25 shadow-2xl shadow-black/40">
                <img
                  src="/src/assets/images/coca_hero_bottle_1792176774623.jpg"
                  alt="Frosty contoured glass bottle of Coca-Cola with beaded ice condensation droplets, floating ice cubes, and rising effervescent bubbles"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-2xl drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] transform hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Floating pill badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/85 backdrop-blur-md text-white p-3 rounded-2xl border border-white/20 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
                    <div>
                      <p className="text-xs font-bold leading-tight">Original Formula</p>
                      <p className="text-[10px] text-white/70">Served Cold In Glass Since 1886</p>
                    </div>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-white/90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <a
        href="#story"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/80 hover:text-white flex flex-col items-center gap-1 transition-colors p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
        aria-label="Scroll to Our Story"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-white/70">Discover</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-white" />
      </a>
    </section>
  );
};
