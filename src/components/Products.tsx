import React, { useState } from 'react';
import { Sparkles, Info, X, Check, Droplets, Flame, Coffee } from 'lucide-react';
import { ProductVariant } from '../types';

const productList: ProductVariant[] = [
  {
    id: 'classic',
    name: 'Coca-Cola Classic',
    subname: 'Original Taste Since 1886',
    category: 'classic',
    calories: '140 kcal',
    sugar: '39g',
    description:
      'The timeless original that defined carbonated refreshment. Perfectly balanced sweetness, secret natural aromas, and signature crisp carbonation served best ice-cold.',
    accentColor: '#E41E2B',
    textColor: '#ffffff',
    badge: 'The Original',
    flavorNotes: ['Madagascar Vanilla', 'Caramelized Sugar', 'Citrus Peel', 'Warm Spice'],
    formats: ['330ml Can', '250ml Glass Contour', '500ml rPET', 'Fountain Draft'],
    image: '/src/assets/images/coca_hero_bottle_1792176774623.jpg',
  },
  {
    id: 'zero',
    name: 'Coca-Cola Zero Sugar',
    subname: 'Real Magic, Zero Sugar',
    category: 'zero',
    calories: '0 kcal',
    sugar: '0g',
    description:
      'Engineered to deliver the iconic, full-bodied Coca-Cola classic taste with zero calories and zero sugar. Crisp, bold, and unapologetically refreshing.',
    accentColor: '#111111',
    textColor: '#ffffff',
    badge: 'Zero Sugar',
    flavorNotes: ['Original Cola Profile', 'Crisp effervescence', 'Zero Aftertaste', 'Subtle Citrus'],
    formats: ['330ml Sleek Can', '500ml Bottle', '6-Pack Contours', 'Fountain'],
    image: '/src/assets/images/coke_zero_bottle_1792176776309.jpg',
  },
  {
    id: 'cherry',
    name: 'Coca-Cola Cherry',
    subname: 'Vibrant Sweet Infusion',
    category: 'flavor',
    calories: '150 kcal',
    sugar: '42g',
    description:
      'A harmonious splash of ripe wild cherry blended into the classic Coca-Cola formula. Fruity, aromatic, and beloved by dessert and soda enthusiasts worldwide.',
    accentColor: '#990B15',
    textColor: '#ffffff',
    badge: 'Fan Favorite',
    flavorNotes: ['Wild Dark Cherry', 'Sweet Stonefruit', 'Caramel Effervescence'],
    formats: ['355ml Can', '500ml Bottle'],
  },
  {
    id: 'vanilla',
    name: 'Coca-Cola Vanilla',
    subname: 'Smooth & Velvety',
    category: 'flavor',
    calories: '150 kcal',
    sugar: '42g',
    description:
      'Infused with silky vanilla bean essence for a remarkably smooth, creamy mouthfeel and a comforting, nostalgic aroma on the finish.',
    accentColor: '#D99B52',
    textColor: '#111111',
    badge: 'Smooth Blend',
    flavorNotes: ['Bourbon Vanilla Bean', 'Creamy Caramel', 'Warm Molasses'],
    formats: ['355ml Can', '500ml Bottle'],
  },
  {
    id: 'diet',
    name: 'Diet Coke',
    subname: 'Crisp & Distinctive Taste',
    category: 'diet',
    calories: '0 kcal',
    sugar: '0g',
    description:
      'Born in 1982, Diet Coke carries its own distinctively light, bubbly, and zesty citrus-accented cola recipe. A legendary staple for mindful sippers.',
    accentColor: '#A0A0A0',
    textColor: '#ffffff',
    badge: 'Pioneer 1982',
    flavorNotes: ['Bright Citric Spark', 'Light Cola Essence', 'Ultra-Crisp Bite'],
    formats: ['330ml Can', '500ml Bottle'],
  },
  {
    id: 'spiced',
    name: 'Coca-Cola Spiced',
    subname: 'Raspberry & Warm Botanicals',
    category: 'flavor',
    calories: '140 kcal',
    sugar: '38g',
    description:
      'An adventurous modern expression uniting uplifting raspberry undertones with warm aromatic spices for an unforgettable sensory spark.',
    accentColor: '#800020',
    textColor: '#ffffff',
    badge: 'Modern Craft',
    flavorNotes: ['Tart Raspberry', 'Clove & Allspice', 'Crisp Bubbles'],
    formats: ['355ml Sleek Can'],
  },
];

export const Products: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'classic' | 'zero' | 'flavor'>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductVariant | null>(null);

  const filteredProducts = productList.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'flavor') return p.category === 'flavor' || p.category === 'diet';
    return p.category === filter;
  });

  return (
    <section
      id="products"
      className="py-20 lg:py-28 bg-[#E41E2B] text-white relative overflow-hidden"
      aria-label="Products Section"
    >
      {/* Background radial accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Legendary Lineup</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            The Iconic <span className="font-script text-white text-6xl sm:text-7xl font-normal">Flavors</span>
          </h2>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed">
            From Pemberton’s 1886 original recipe to zero-calorie craftsmanship. Discover the effervescent creations that inspire millions of smiles each day.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Variants' },
              { id: 'classic', label: 'Coca-Cola Classic' },
              { id: 'zero', label: 'Zero Sugar' },
              { id: 'flavor', label: 'Flavor Editions' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  filter === tab.id
                    ? 'bg-black text-white shadow-lg border border-white/30 scale-105'
                    : 'bg-white/15 text-white hover:bg-white/25 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid with Lift & Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card-hover-tilt bg-white text-black rounded-3xl overflow-hidden shadow-2xl border border-black/10 flex flex-col justify-between group transition-all duration-500 ease-out"
            >
              {/* Product Card Top Visual */}
              <div className="relative h-64 sm:h-72 bg-neutral-100 overflow-hidden flex items-center justify-center p-4">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={`${product.name} product bottle beaded with frosty condensation and bubbles`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div
                    className="w-full h-full rounded-2xl flex flex-col items-center justify-center p-6 text-center text-white relative overflow-hidden"
                    style={{ backgroundColor: product.accentColor }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    <span className="font-script text-5xl sm:text-6xl text-white relative z-10 drop-shadow-md">
                      Coca-Cola
                    </span>
                    <span className="text-xs uppercase font-extrabold tracking-widest mt-2 px-3 py-1 bg-black text-white rounded-full relative z-10 border border-white/20">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md border border-white/20">
                    {product.badge}
                  </span>
                </div>

                {/* Quick nutrition pill */}
                <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  {product.calories} • {product.sugar} Sugar
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-black text-black group-hover:text-[#E41E2B] transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-xs font-bold text-[#E41E2B] uppercase tracking-wider mb-3">
                    {product.subname}
                  </p>
                  <p className="text-sm text-black/75 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Flavor Notes Tags */}
                <div>
                  <p className="text-[11px] uppercase font-bold text-black/50 tracking-wider mb-2">
                    Aroma & Notes
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.flavorNotes.map((note) => (
                      <span
                        key={note}
                        className="text-[11px] font-semibold bg-neutral-100 text-black px-2.5 py-1 rounded-lg border border-black/5"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalProduct(product)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-black text-white hover:text-black font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-md transition-all duration-300 btn-fill-sweep-white border border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E41E2B]"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Nutrition & Specs</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {activeModalProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-white text-black rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-black/20 relative animate-in fade-in zoom-in-95 duration-200">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E41E2B] text-white">
                  {activeModalProduct.badge}
                </span>
                <h3 id="modal-title" className="text-2xl sm:text-3xl font-black text-black mt-2">
                  {activeModalProduct.name}
                </h3>
                <p className="text-sm font-semibold text-[#E41E2B] uppercase tracking-wide">
                  {activeModalProduct.subname}
                </p>
              </div>

              <p className="text-sm text-black/80 leading-relaxed">
                {activeModalProduct.description}
              </p>

              {/* Nutrition Quick Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-neutral-100 rounded-2xl text-center">
                  <Flame className="w-4 h-4 text-[#E41E2B] mx-auto mb-1" />
                  <span className="block text-lg font-black text-black">{activeModalProduct.calories}</span>
                  <span className="text-[10px] uppercase font-bold text-black/60">Calories</span>
                </div>
                <div className="p-3 bg-neutral-100 rounded-2xl text-center">
                  <Droplets className="w-4 h-4 text-[#E41E2B] mx-auto mb-1" />
                  <span className="block text-lg font-black text-black">{activeModalProduct.sugar}</span>
                  <span className="text-[10px] uppercase font-bold text-black/60">Sugar</span>
                </div>
                <div className="p-3 bg-neutral-100 rounded-2xl text-center">
                  <Coffee className="w-4 h-4 text-[#E41E2B] mx-auto mb-1" />
                  <span className="block text-lg font-black text-black">34 mg</span>
                  <span className="text-[10px] uppercase font-bold text-black/60">Caffeine</span>
                </div>
              </div>

              {/* Available Formats */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-black/60 mb-2">
                  Serving Formats
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProduct.formats.map((fmt) => (
                    <span
                      key={fmt}
                      className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#E41E2B]/10 text-[#E41E2B] px-3 py-1.5 rounded-xl border border-[#E41E2B]/20"
                    >
                      <Check className="w-3.5 h-3.5" />
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ideal Serving Recommendation */}
              <div className="p-4 bg-neutral-900 text-white rounded-2xl flex items-center gap-3">
                <span className="text-2xl">🧊</span>
                <div className="text-xs">
                  <p className="font-bold">Master Sommelier Serving Tip</p>
                  <p className="text-white/70">
                    Serve chilled at exactly 3°C (37°F) over clear ice in an authentic contoured glass with a fresh twist of citrus.
                  </p>
                </div>
              </div>

              {/* Modal Close CTA */}
              <button
                type="button"
                onClick={() => setActiveModalProduct(null)}
                className="w-full bg-black text-white hover:bg-neutral-800 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors"
              >
                Close Tasting Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
