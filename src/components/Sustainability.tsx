import React, { useState } from 'react';
import { Leaf, Droplets, Users, Recycle, Globe, Award, Heart } from 'lucide-react';

export const Sustainability: React.FC = () => {
  const [bottlesRecycled, setBottlesRecycled] = useState<number>(25);

  // Impact calculations based on bottle count
  const plasticSavedKg = (bottlesRecycled * 0.024).toFixed(2);
  const co2OffsetKg = (bottlesRecycled * 0.05).toFixed(2);
  const energyKwh = (bottlesRecycled * 0.12).toFixed(1);

  return (
    <section
      id="sustainability"
      className="py-20 lg:py-28 bg-[#E41E2B] text-white relative overflow-hidden"
      aria-label="Sustainability and Community Section"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.12) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase border border-white/20">
            <Leaf className="w-3.5 h-3.5 text-white" />
            <span>Responsibility & Purpose</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Refreshing The World, <span className="font-script text-white text-6xl sm:text-7xl font-normal block sm:inline">Sustaining</span> Our Future
          </h2>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
            Real magic is caring for the planet and each other. From 100% recyclable bottles to 1.5 trillion liters of clean water returned to local communities.
          </p>
        </div>

        {/* Feature Grid: 2 AI Generated Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: 100% Recycled Bottles & Water Stewardship */}
          <div className="bg-white text-black rounded-3xl overflow-hidden shadow-2xl border border-black/10 flex flex-col justify-between group">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src="/src/assets/images/sustainability_clean_nature_1792176777749.jpg"
                alt="Clear 100% recycled beverage bottle on crystalline water ripples surrounded by lush green leaves and dewdrops"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                <Recycle className="w-3.5 h-3.5" />
                <span>World Without Waste</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="text-2xl font-black text-black">
                100% Recycled Packaging & Water Neutrality
              </h3>
              <p className="text-black/75 text-sm sm:text-base leading-relaxed">
                By investing in circular recycling infrastructure and 100% rPET bottles (excluding caps and labels), the goal is to collect and recycle a bottle or can for each one sold by 2030, while replenishing more water than used in production.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-neutral-100 rounded-2xl">
                  <span className="block text-2xl font-black text-[#E41E2B]">100%+</span>
                  <span className="text-[11px] font-bold uppercase text-black/60">Water Replenished</span>
                </div>
                <div className="p-3 bg-neutral-100 rounded-2xl">
                  <span className="block text-2xl font-black text-[#E41E2B]">1.5 Trillion</span>
                  <span className="text-[11px] font-bold uppercase text-black/60">Liters Returned</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Community & People */}
          <div className="bg-white text-black rounded-3xl overflow-hidden shadow-2xl border border-black/10 flex flex-col justify-between group">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src="/src/assets/images/friends_sharing_coke_1792176777240.jpg"
                alt="Diverse group of smiling friends toasting cold bottles of Coca-Cola outdoors during golden hour sunset"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>Global Community</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="text-2xl font-black text-black">
                Empowering Communities & Grassroots Champions
              </h3>
              <p className="text-black/75 text-sm sm:text-base leading-relaxed">
                Supporting women entrepreneurs through economic empowerment programs, funding local youth athletics, and providing immediate humanitarian disaster relief water distribution across regions in need.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-neutral-100 rounded-2xl">
                  <span className="block text-2xl font-black text-[#E41E2B]">5 Million+</span>
                  <span className="text-[11px] font-bold uppercase text-black/60">Women Empowered</span>
                </div>
                <div className="p-3 bg-neutral-100 rounded-2xl">
                  <span className="block text-2xl font-black text-[#E41E2B]">200+</span>
                  <span className="text-[11px] font-bold uppercase text-black/60">Local Watersheds</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Fan Impact Calculator */}
        <div className="bg-black text-white p-6 sm:p-10 rounded-3xl border border-white/20 shadow-2xl max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E41E2B]">
              <Recycle className="w-4 h-4" />
              <span>Interactive Fan Impact Calculator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              See the Power of Proper Recycling
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Every single bottle properly placed in the recycling bin creates fresh raw materials for a brand new bottle.
            </p>
          </div>

          {/* Slider */}
          <div className="space-y-4 max-w-lg mx-auto mb-8">
            <div className="flex items-center justify-between text-sm font-bold">
              <span>Bottles You Recycle Each Month:</span>
              <span className="text-[#E41E2B] text-xl font-black">{bottlesRecycled} bottles</span>
            </div>
            <input
              type="range"
              min="5"
              max="200"
              step="5"
              value={bottlesRecycled}
              onChange={(e) => setBottlesRecycled(Number(e.target.value))}
              className="w-full accent-[#E41E2B] cursor-pointer h-2 bg-white/20 rounded-lg"
              aria-label="Bottles recycled slider"
            />
            <div className="flex justify-between text-[11px] text-white/50 font-semibold">
              <span>5 bottles</span>
              <span>100 bottles</span>
              <span>200 bottles</span>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="block text-3xl font-black text-white">{plasticSavedKg} kg</span>
              <span className="text-xs uppercase font-bold text-white/60">Plastic Kept From Landfills</span>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="block text-3xl font-black text-[#E41E2B]">{co2OffsetKg} kg</span>
              <span className="text-xs uppercase font-bold text-white/60">CO₂ Equivalent Averted</span>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="block text-3xl font-black text-white">{energyKwh} kWh</span>
              <span className="text-xs uppercase font-bold text-white/60">Clean Manufacturing Energy Saved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
