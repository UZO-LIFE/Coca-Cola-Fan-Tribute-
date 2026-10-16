import React, { useState, useEffect, useRef } from 'react';
import { Clock, BookOpen, Sparkles, Award, MapPin } from 'lucide-react';
import { TimelineEvent } from '../types';

const timelineData: TimelineEvent[] = [
  {
    year: '1886',
    title: "Pemberton's Spark at Jacobs' Pharmacy",
    location: 'Atlanta, Georgia',
    tag: 'Origins',
    description:
      'Dr. John Stith Pemberton, an Atlanta pharmacist, formulated a distinctive caramel-colored syrup. Carried down the street to Jacobs’ Pharmacy, it was combined with carbonated water and sampled by patrons for five cents a glass.',
    highlight:
      'Pemberton’s bookkeeper, Frank M. Robinson, conceived the iconic name "Coca-Cola" and penned the famous Spencerian flowing script that remains beloved worldwide today.',
  },
  {
    year: '1899',
    title: 'The Bottling Innovation Revolution',
    location: 'Chattanooga, Tennessee',
    tag: 'Expansion',
    description:
      'Two Chattanooga attorneys, Benjamin F. Thomas and Joseph B. Whitehead, secured exclusive rights to bottle Coca-Cola across most of the United States for just one dollar, transforming a soda fountain favorite into a household staple.',
    highlight:
      'This historic agreement birthed the global Coca-Cola bottling franchise system, scaling refreshment to millions.',
  },
  {
    year: '1915',
    title: 'Birth of the Iconic Contour Bottle',
    location: 'Terre Haute, Indiana',
    tag: 'Design Icon',
    description:
      'To combat imitators, the Root Glass Company was tasked with creating a bottle so distinctive that a person could recognize it by feeling it in the dark, or even lying broken on the floor.',
    highlight:
      'Inspired by the curves of a cocoa pod, the patented Contour Bottle became one of the most celebrated packaging designs in human history.',
  },
  {
    year: '1931',
    title: 'Shaping The Modern Santa Claus',
    location: 'United States',
    tag: 'Culture',
    description:
      'Illustrator Haddon Sundblom created warm, grandfatherly portraits of Santa Claus for holiday advertisements, establishing the red-suited, white-bearded Santa known throughout popular culture.',
    highlight:
      'Sundblom’s paintings humanized Santa as jolly, warm, and real, immortalizing holiday magic.',
  },
  {
    year: '1971',
    title: '"I’d Like to Buy the World a Coke"',
    location: 'Hilltop, Italy',
    tag: 'Global Anthem',
    description:
      'A diverse choir of young people from all continents gathered on a picturesque hillside in Italy to sing about harmony, peace, and shared human connection.',
    highlight:
      'The Hilltop commercial captured the global imagination, cementing Coca-Cola as a timeless universal symbol of togetherness.',
  },
  {
    year: '1982',
    title: 'Diet Coke Arrives on the Scene',
    location: 'New York City',
    tag: 'Innovation',
    description:
      'Marking the first brand extension in the trademark’s century-long history, Diet Coke was unveiled at Radio City Music Hall and quickly skyrocketed to become the world’s leading low-calorie beverage.',
    highlight:
      'A revolutionary leap that paved the way for generations of mindful, sugar-free refreshment choices.',
  },
  {
    year: '2005',
    title: 'The Launch of Coca-Cola Zero',
    location: 'Worldwide',
    tag: 'Zero Sugar',
    description:
      'Engineered to replicate the full, bold, original Coca-Cola taste with zero sugar and zero calories. Later refined into Coca-Cola Zero Sugar, it became an instant modern favorite.',
    highlight:
      'Proven that delicious taste and mindful choices could live together in perfect effervescence.',
  },
  {
    year: 'Today',
    title: 'World Without Waste & Pure Refreshment',
    location: '200+ Countries',
    tag: 'Future',
    description:
      'Pioneering 100% recycled rPET bottles, replenishing over 1.5 trillion liters of fresh water, and connecting friends and families across every continent.',
    highlight:
      'Continuing the enduring mission: to refresh the world and make a tangible difference.',
  },
];

export const OurStory: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = rect.height + windowHeight;
      const currentDist = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentDist / totalDist, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white text-black relative overflow-hidden"
      aria-label="Our Story - History Timeline"
    >
      {/* Red accent line top */}
      <div className="absolute top-0 inset-x-0 h-2 bg-[#E41E2B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E41E2B]/10 text-[#E41E2B] text-xs font-bold tracking-widest uppercase">
            <Clock className="w-3.5 h-3.5" />
            <span>Timeless Heritage</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black">
            Crafting Real Magic <span className="font-script text-[#E41E2B] text-5xl sm:text-6xl md:text-7xl font-normal block sm:inline">Since 1886</span>
          </h2>

          <p className="text-base sm:text-lg text-black/75 leading-relaxed font-normal">
            From nine drinks a day at an Atlanta apothecary counter to billions of daily toasts worldwide.
            Explore the milestones that defined a century of refreshment.
          </p>
        </div>

        {/* Vintage Apothecary Visual Feature Card */}
        <div className="mb-20 bg-[#E41E2B] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[440px] overflow-hidden">
            <img
              src="/src/assets/images/vintage_soda_fountain_1792176776553.jpg"
              alt="1886 Jacobs' Pharmacy vintage soda fountain counter with polished brass dispensers, dark wood counter, and antique glass bottles in Atlanta"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-4 left-4 lg:hidden bg-black/80 px-3 py-1 rounded-full text-xs font-semibold">
              Jacobs’ Pharmacy, Atlanta • May 8, 1886
            </div>
          </div>

          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-white" />
                <span>The Origin Point</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Where the Secret Formula Began
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                In May 1886, Dr. John Pemberton blended his signature formula in a three-legged brass kettle in his Atlanta backyard. When paired with chilled soda fountain water, the brisk, invigorating taste instantly captured the city’s heart.
              </p>
              <div className="p-4 rounded-2xl bg-black/20 border border-white/15">
                <p className="font-script text-2xl text-white">
                  "Delicious! Refreshing! Exhilarating! Invigorating!"
                </p>
                <p className="text-[11px] uppercase font-bold text-white/80 mt-1">
                  — The Atlanta Journal (1886)
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-white/80">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-white" />
                <span>Atlanta, Georgia</span>
              </div>
              <span className="text-white/30">•</span>
              <span>5 Cents Per Glass</span>
            </div>
          </div>
        </div>

        {/* Interactive Scroll-Animated Timeline */}
        <div className="relative">
          {/* Animated SVG / CSS Timeline Track */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-black/10 rounded-full"
            aria-hidden="true"
          >
            <div
              className="w-full bg-[#E41E2B] rounded-full transition-all duration-300 ease-out"
              style={{ height: `${Math.min(scrollProgress * 110, 100)}%` }}
            />
          </div>

          {/* Timeline Cards */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isSelected = selectedMilestone === index;

              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline node in center */}
                  <button
                    type="button"
                    onClick={() => setSelectedMilestone(index)}
                    className={`hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full items-center justify-center font-bold text-xs shadow-lg transition-transform duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-black text-white scale-125 ring-4 ring-[#E41E2B]'
                        : 'bg-[#E41E2B] text-white hover:scale-110'
                    }`}
                    aria-label={`View milestone ${item.year}`}
                  >
                    {item.year === 'Today' ? 'Now' : item.year.slice(2)}
                  </button>

                  {/* Content card */}
                  <div className="w-full md:w-[45%]">
                    <div
                      onClick={() => setSelectedMilestone(index)}
                      className={`p-6 sm:p-8 rounded-3xl border transition-all duration-400 cursor-pointer ${
                        isSelected
                          ? 'bg-[#E41E2B] text-white shadow-xl border-[#E41E2B] scale-[1.02]'
                          : 'bg-white hover:bg-neutral-50 text-black shadow-md border-black/10 hover:border-black/20'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span
                          className={`text-2xl sm:text-3xl font-black tracking-tight ${
                            isSelected ? 'text-white' : 'text-[#E41E2B]'
                          }`}
                        >
                          {item.year}
                        </span>
                        <span
                          className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                            isSelected
                              ? 'bg-black text-white border border-white/20'
                              : 'bg-black/5 text-black'
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>

                      <h4
                        className={`text-xl sm:text-2xl font-bold mb-2 ${
                          isSelected ? 'text-white' : 'text-black'
                        }`}
                      >
                        {item.title}
                      </h4>

                      <p
                        className={`text-sm sm:text-base leading-relaxed mb-4 ${
                          isSelected ? 'text-white/95' : 'text-black/75'
                        }`}
                      >
                        {item.description}
                      </p>

                      <div
                        className={`p-3.5 rounded-2xl text-xs sm:text-sm font-medium ${
                          isSelected
                            ? 'bg-black/25 text-white border border-white/15'
                            : 'bg-black/5 text-black/85 border border-black/5'
                        }`}
                      >
                        <p className="font-semibold">{item.highlight}</p>
                      </div>

                      <div className="mt-4 flex items-center justify-between text-xs font-semibold">
                        <span className={isSelected ? 'text-white/80' : 'text-black/60'}>
                          📍 {item.location}
                        </span>
                        <span className={isSelected ? 'text-white' : 'text-[#E41E2B]'}>
                          {isSelected ? 'Viewing' : 'Click to highlight'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Story Quote Banner */}
        <div className="mt-16 text-center bg-black text-white p-8 sm:p-12 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <BookOpen className="w-8 h-8 text-[#E41E2B] mx-auto" />
            <p className="font-script text-3xl sm:text-4xl text-white">
              "The brand that brings people together, glass by glass, year after year."
            </p>
            <p className="text-xs uppercase tracking-widest text-white/70 font-semibold">
              An Enduring Legacy of Real Togetherness
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
