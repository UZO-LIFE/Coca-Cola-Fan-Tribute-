import React, { useState, useMemo } from 'react';
import { Search, MapPin, Store, Navigation, Phone, Clock, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { StoreLocation } from '../types';

const defaultLocations: StoreLocation[] = [
  {
    id: 'loc-1',
    name: "Peachtree Market & Grocers",
    category: 'supermarket',
    address: '1280 Peachtree St NE',
    city: 'Atlanta',
    zip: '30309',
    distance: '0.4 mi',
    openUntil: 'Open until 11:00 PM',
    status: 'In Stock',
    stockItems: ['Classic Contour Glass', 'Zero Sugar 330ml', 'Cherry', 'Vanilla'],
    phone: '(404) 555-0192',
  },
  {
    id: 'loc-2',
    name: 'Midtown Express Corner Store',
    category: 'convenience',
    address: '848 Spring St NW',
    city: 'Atlanta',
    zip: '30308',
    distance: '0.8 mi',
    openUntil: 'Open 24 Hours',
    status: 'In Stock',
    stockItems: ['Classic 500ml', 'Zero Sugar Can', 'Diet Coke'],
    phone: '(404) 555-0144',
  },
  {
    id: 'loc-3',
    name: 'Fox Theatre Concessions & Soda Fountain',
    category: 'theater',
    address: '660 Peachtree St NE',
    city: 'Atlanta',
    zip: '30308',
    distance: '1.2 mi',
    openUntil: 'Open during performances',
    status: 'In Stock',
    stockItems: ['Fountain Draft Classic', 'Zero Sugar Draft', 'Cherry Fountain'],
    phone: '(404) 555-0188',
  },
  {
    id: 'loc-4',
    name: 'Metropolis Gourmet Foods',
    category: 'supermarket',
    address: '915 W Peachtree St NW',
    city: 'Atlanta',
    zip: '30309',
    distance: '1.5 mi',
    openUntil: 'Open until 10:00 PM',
    status: 'In Stock',
    stockItems: ['Classic Glass 6-Pack', 'Zero Sugar Sleek', 'Spiced Edition'],
    phone: '(404) 555-0176',
  },
  {
    id: 'loc-5',
    name: 'Piedmont Bistro & Soda Bar',
    category: 'dining',
    address: '400 Park Dr NE',
    city: 'Atlanta',
    zip: '30306',
    distance: '2.1 mi',
    openUntil: 'Open until 12:00 AM',
    status: 'Limited Stock',
    stockItems: ['Classic Contour Bottle', 'Zero Sugar Glass'],
    phone: '(404) 555-0120',
  },
  {
    id: 'loc-6',
    name: 'Broadway Fresh Mart',
    category: 'supermarket',
    address: '1500 Broadway',
    city: 'New York',
    zip: '10036',
    distance: '0.3 mi',
    openUntil: 'Open 24 Hours',
    status: 'In Stock',
    stockItems: ['Classic', 'Zero Sugar', 'Diet Coke', 'Cherry'],
    phone: '(212) 555-0189',
  },
  {
    id: 'loc-7',
    name: 'Michigan Avenue Food Hall',
    category: 'dining',
    address: '835 N Michigan Ave',
    city: 'Chicago',
    zip: '60611',
    distance: '0.6 mi',
    openUntil: 'Open until 9:00 PM',
    status: 'In Stock',
    stockItems: ['Classic Fountain', 'Zero Sugar Draft', 'Vanilla'],
    phone: '(312) 555-0165',
  },
];

export const WhereToBuy: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('Atlanta');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeStoreId, setActiveStoreId] = useState<string>('loc-1');
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const filteredStores = useMemo(() => {
    return defaultLocations.filter((store) => {
      const matchSearch =
        store.city.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        store.zip.includes(searchTerm.trim()) ||
        store.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        store.address.toLowerCase().includes(searchTerm.toLowerCase().trim());

      const matchCategory =
        selectedCategory === 'all' ? true : store.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [searchTerm, selectedCategory]);

  const activeStore = defaultLocations.find((s) => s.id === activeStoreId) || defaultLocations[0];

  const handleGetDirections = (store: StoreLocation) => {
    const query = encodeURIComponent(`${store.name}, ${store.address}, ${store.city}, ${store.zip}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank', 'noopener,noreferrer');
  };

  const handleQuickSearch = (city: string) => {
    setSearchTerm(city);
    const matched = defaultLocations.find((l) => l.city.toLowerCase() === city.toLowerCase());
    if (matched) {
      setActiveStoreId(matched.id);
    }
  };

  return (
    <section
      id="locator"
      className="py-20 lg:py-28 bg-white text-black relative overflow-hidden"
      aria-label="Where to Buy Store Locator"
    >
      {/* Top red border bar */}
      <div className="absolute top-0 inset-x-0 h-2 bg-[#E41E2B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E41E2B]/10 text-[#E41E2B] text-xs font-bold tracking-widest uppercase">
            <Store className="w-3.5 h-3.5" />
            <span>Store Locator</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black">
            Where To <span className="font-script text-[#E41E2B] text-5xl sm:text-6xl font-normal">Buy</span> An Ice-Cold Coke
          </h2>

          <p className="text-base sm:text-lg text-black/75 leading-relaxed">
            Find chilled contour glass bottles, cans, and fresh soda fountains near you. Search by city, zip code, or retail type.
          </p>

          {/* Quick City Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs font-bold text-black/50 uppercase tracking-wider mr-1">
              Popular:
            </span>
            {['Atlanta', 'New York', 'Chicago'].map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => handleQuickSearch(city)}
                className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${
                  searchTerm.toLowerCase() === city.toLowerCase()
                    ? 'bg-[#E41E2B] text-white'
                    : 'bg-black/5 text-black hover:bg-black/10'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-neutral-50 p-4 sm:p-6 rounded-3xl border border-black/10 shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-7 relative">
              <Search className="w-5 h-5 text-black/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter city, neighborhood, or 5-digit ZIP..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-black/15 text-black placeholder:text-black/40 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#E41E2B] transition-all"
                aria-label="Search for stores"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-black/40 hover:text-black"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="md:col-span-5 flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              <SlidersHorizontal className="w-4 h-4 text-black/50 shrink-0" />
              {[
                { id: 'all', label: 'All' },
                { id: 'supermarket', label: 'Supermarkets' },
                { id: 'convenience', label: 'Convenience' },
                { id: 'theater', label: 'Theaters' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs font-bold px-3.5 py-2.5 rounded-xl shrink-0 transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-black text-white shadow-md'
                      : 'bg-white text-black/75 hover:bg-neutral-200 border border-black/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Layout: Store List (Left) + Interactive Map & Preview (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Store List */}
          <div className="lg:col-span-6 space-y-4 max-h-[580px] overflow-y-auto pr-2">
            {filteredStores.length === 0 ? (
              <div className="text-center py-16 bg-neutral-50 rounded-3xl border border-black/10 p-8 space-y-3">
                <MapPin className="w-8 h-8 text-[#E41E2B] mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-black">No locations found</h4>
                <p className="text-xs text-black/60 max-w-xs mx-auto">
                  Try searching for "Atlanta", "New York", or reset the category filter to see available stores.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('Atlanta');
                    setSelectedCategory('all');
                  }}
                  className="bg-black text-white text-xs font-bold px-4 py-2 rounded-xl mt-2"
                >
                  Reset Search
                </button>
              </div>
            ) : (
              filteredStores.map((store) => {
                const isActive = store.id === activeStoreId;
                return (
                  <div
                    key={store.id}
                    onClick={() => setActiveStoreId(store.id)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-neutral-50 border-[#E41E2B] shadow-md ring-2 ring-[#E41E2B]/20'
                        : 'bg-white hover:bg-neutral-50/60 border-black/10'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-black text-base sm:text-lg text-black">{store.name}</h3>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              store.status === 'In Stock'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {store.status}
                          </span>
                        </div>
                        <p className="text-xs text-black/70 mt-1">
                          {store.address}, {store.city}, {store.zip}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-black text-[#E41E2B] bg-[#E41E2B]/10 px-2 py-1 rounded-lg">
                          {store.distance}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-black/60">
                      <span className="inline-flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-black/40" />
                        {store.openUntil}
                      </span>
                      <span className="inline-flex items-center gap-1 font-medium">
                        <Phone className="w-3.5 h-3.5 text-black/40" />
                        {store.phone}
                      </span>
                    </div>

                    {/* Stock items preview */}
                    <div className="mt-3 pt-3 border-t border-black/5 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {store.stockItems.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="text-[10px] font-semibold bg-white border border-black/10 px-2 py-0.5 rounded-md text-black/80"
                          >
                            ✓ {item}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleGetDirections(store);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-bold text-white bg-black hover:bg-neutral-800 px-3 py-1.5 rounded-lg transition-colors ml-2 shrink-0"
                      >
                        <Navigation className="w-3 h-3 text-white" />
                        <span>Navigate</span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Map Preview & Store Detail View (Right) */}
          <div className="lg:col-span-6 bg-black text-white p-6 sm:p-8 rounded-3xl border border-white/15 shadow-xl relative overflow-hidden flex flex-col justify-between">
            {/* Visual Simulated Map Display */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-neutral-900 border border-white/20 mb-6">
              {/* Map grid lines */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                  backgroundSize: '36px 36px',
                }}
              />

              {/* Roads graphic vector */}
              <svg className="absolute inset-0 w-full h-full stroke-white/20 fill-none" strokeWidth="2">
                <path d="M 0 80 Q 150 120 300 90 T 600 130" stroke="#E41E2B" strokeWidth="4" />
                <path d="M 120 0 Q 140 180 200 300" strokeWidth="3" />
                <path d="M 320 0 Q 300 160 380 300" strokeWidth="2" />
                <path d="M 0 200 Q 220 180 500 240" strokeWidth="2" />
              </svg>

              {/* Interactive Map Pins */}
              {filteredStores.map((store, idx) => {
                const isSelected = store.id === activeStoreId;
                // Distribute mock coordinates visually
                const leftPos = 20 + ((idx * 27) % 65);
                const topPos = 25 + ((idx * 23) % 55);

                return (
                  <button
                    key={store.id}
                    type="button"
                    onClick={() => setActiveStoreId(store.id)}
                    style={{ left: `${leftPos}%`, top: `${topPos}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 ${
                      isSelected ? 'z-30 scale-125' : 'z-10 hover:scale-110'
                    }`}
                    aria-label={`Select ${store.name}`}
                  >
                    <div
                      className={`p-2 rounded-full shadow-xl flex items-center justify-center ${
                        isSelected
                          ? 'bg-[#E41E2B] text-white ring-4 ring-white animate-bounce'
                          : 'bg-black text-white border border-white/40'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}

              {/* Map Overlay Badge */}
              <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold border border-white/20">
                Live Stock Radar • {filteredStores.length} Retailers
              </div>
            </div>

            {/* Selected Store Card Spotlight */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E41E2B]">
                    Active Selection
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                    {activeStore.name}
                  </h4>
                </div>
                <span className="text-sm font-bold bg-[#E41E2B] text-white px-3 py-1 rounded-full">
                  {activeStore.distance}
                </span>
              </div>

              <p className="text-sm text-white/80">
                {activeStore.address}, {activeStore.city}, {activeStore.zip}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                  <span className="text-white/60 block text-[10px] uppercase font-bold">Hours</span>
                  <span className="font-semibold text-white">{activeStore.openUntil}</span>
                </div>
                <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                  <span className="text-white/60 block text-[10px] uppercase font-bold">In-Stock Formats</span>
                  <span className="font-semibold text-white">{activeStore.stockItems.length} Products Ready</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => handleGetDirections(activeStore)}
                  className="flex-1 bg-white text-black hover:bg-neutral-100 font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-black" />
                  <span>Open Directions In Maps</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
