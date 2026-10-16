/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { Products } from './components/Products';
import { WhereToBuy } from './components/WhereToBuy';
import { Sustainability } from './components/Sustainability';
import { Newsletter } from './components/Newsletter';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModals';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    // Subtle fade-and-rise reveal as each section scrolls into view
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      document.querySelectorAll('.reveal-section').forEach((el) => {
        el.classList.add('reveal-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    });

    const elements = document.querySelectorAll('.reveal-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#E41E2B] text-white flex flex-col relative selection:bg-black selection:text-white">
      {/* 1. Sticky Header with logo wordmark and mobile hamburger menu */}
      <Header onOpenPrivacy={() => setLegalModalType('privacy')} />

      {/* Main Content Sections In Requested Order */}
      <main className="flex-1">
        {/* 2. Full-screen Red Hero */}
        <Hero />

        {/* 3. Our Story Section with short brand history timeline starting in 1886 */}
        <div className="reveal-section transition-all duration-700 ease-out transform translate-y-6 opacity-0 [&.reveal-visible]:translate-y-0 [&.reveal-visible]:opacity-100">
          <OurStory />
        </div>

        {/* 4. Products Section with cards for Coca-Cola Classic, Zero Sugar and others */}
        <div className="reveal-section transition-all duration-700 ease-out transform translate-y-6 opacity-0 [&.reveal-visible]:translate-y-0 [&.reveal-visible]:opacity-100">
          <Products />
        </div>

        {/* 5. Where to Buy Store Locator Section */}
        <div className="reveal-section transition-all duration-700 ease-out transform translate-y-6 opacity-0 [&.reveal-visible]:translate-y-0 [&.reveal-visible]:opacity-100">
          <WhereToBuy />
        </div>

        {/* 6. Sustainability and Community Section */}
        <div className="reveal-section transition-all duration-700 ease-out transform translate-y-6 opacity-0 [&.reveal-visible]:translate-y-0 [&.reveal-visible]:opacity-100">
          <Sustainability />
        </div>

        {/* 7. Newsletter Signup Section with email field */}
        <div className="reveal-section transition-all duration-700 ease-out transform translate-y-6 opacity-0 [&.reveal-visible]:translate-y-0 [&.reveal-visible]:opacity-100">
          <Newsletter />
        </div>

        {/* 8. Contact Us Section with official links */}
        <div className="reveal-section transition-all duration-700 ease-out transform translate-y-6 opacity-0 [&.reveal-visible]:translate-y-0 [&.reveal-visible]:opacity-100">
          <ContactUs />
        </div>
      </main>

      {/* 9. Black Footer with Privacy Policy, Terms, and exact fan disclaimer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Legal Modals for Privacy Policy & Terms */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
