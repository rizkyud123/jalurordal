import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { Calculator } from './components/Calculator';
import { Testimonials } from './components/Testimonials';
import { Documentation } from './components/Documentation';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Track scroll position to update active navbar link automatically
  useEffect(() => {
    const sections = ['hero', 'services', 'packages', 'calculator', 'gallery', 'faq', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // Offset for navbar height
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId === 'gallery' ? 'gallery' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Dynamic Header navbar */}
      <Navbar 
        onScrollToSection={handleScrollToSection} 
        activeSection={activeSection} 
      />

      {/* Main Sections */}
      <main>
        
        {/* Home / Hero landing */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Premium services list (includes "Persiapan Beasiswa Dalam Negeri") */}
        <Services />

        {/* Exclusive packages & comparatives */}
        <Packages />

        {/* Smart Scholarship Eligibility Calculator */}
        <Calculator />

        {/* Photo evidence / Gallery */}
        <Documentation />

        {/* Awardee Success Stories */}
        <Testimonials />

        {/* Frequent questions accordion */}
        <FAQ />

        {/* Booking Form and admin contact */}
        <Contact />

      </main>

      {/* Full strategic info footer */}
      <Footer onScrollToSection={handleScrollToSection} />

    </div>
  );
}
