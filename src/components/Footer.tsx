import React from 'react';
import { Logo } from './Navbar';
import { ShieldCheck, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection }) => {
  const scrollToTop = () => {
    onScrollToSection('hero');
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-14">
          
          {/* Column 1: Info and logo */}
          <div className="md:col-span-5 space-y-5">
            <div className="cursor-pointer inline-block" onClick={scrollToTop}>
              <Logo />
            </div>
            <p className="font-sans text-sm text-slate-400 leading-relaxed max-w-sm">
              Layanan bimbingan mentoring persiapan beasiswa dalam & luar negeri premium terpercaya. Kami membedah esai, strategi wawancara, dan membantumu lolos kampus ternama secara profesional.
            </p>
            {/* Partnership Badge info */}
            <div className="flex items-start gap-2.5 p-4 rounded-xl bg-slate-900/60 border border-slate-850 max-w-sm">
              <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="font-sans text-xs text-slate-400 leading-relaxed">
                <span className="text-white font-bold">Partner Strategis Resmi:</span><br />
                JalurOrdal.id dinakhodai secara sah oleh <span className="text-white font-semibold">Global Future Solution</span> (<a href="https://www.global-future-solution.com" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">www.global-future-solution.com</a>).
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans text-xs font-extrabold uppercase tracking-widest text-white">
              Tautan Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              {[
                { id: 'hero', label: 'Home Page' },
                { id: 'services', label: 'Layanan Premium' },
                { id: 'packages', label: 'Paket Program VIP' },
                { id: 'calculator', label: 'Cek Kelayakan Beasiswa' },
                { id: 'gallery', label: 'Dokumentasi & Galeri' },
                { id: 'faq', label: 'Frequent Q&A' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onScrollToSection(link.id)}
                    className="text-slate-400 hover:text-amber-500 transition-colors text-left font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details & Office info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans text-xs font-extrabold uppercase tracking-widest text-white">
              Saluran Informasi
            </h4>
            <ul className="space-y-3 text-sm font-sans text-slate-400">
              <li>
                <span className="font-bold text-white">JalurOrdal.id Support</span><br />
                WhatsApp: 0859-9340-5632 (Fast Response)
              </li>
              <li>
                <span className="font-bold text-white">Mitra Portal GFS</span><br />
                Situs Web: www.global-future-solution.com
              </li>
              <li>
                <span className="font-bold text-white">Waktu Bimbingan</span><br />
                Senin - Minggu (Sesuai kesepakatan mentor)
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-mono text-slate-500">
          <div>
            Copyright © {new Date().getFullYear()} <span className="text-slate-400 font-bold">JalurOrdal.id</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1.5 font-sans">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-current animate-pulse" /> in Indonesia
          </div>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-850 hover:border-slate-800 shadow-md transition-all flex items-center gap-1"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-[10px] pr-1 font-bold font-sans uppercase">Kembali ke Atas</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
