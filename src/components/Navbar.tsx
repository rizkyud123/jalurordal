import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export const Logo: React.FC<{ className?: string }> = ({ className = 'h-9' }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="flex items-center gap-3">
      {!imgFailed ? (
        <img
          src="/assets/1040e983-1f46-4e57-acbe-06d6bc558a66.png"
          alt="JalurOrdal.id Logo"
          onError={() => setImgFailed(true)}
          className={`${className} object-contain transition-transform hover:scale-105 duration-300`}
          referrerPolicy="no-referrer"
        />
      ) : (
        // Premium Fallback Vector Logo
        <div className="flex items-center gap-2">
          <svg
            className="w-10 h-10 text-amber-500 fill-current drop-shadow-md filter"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#F59E0B" />
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="12" cy="7" r="2" fill="#1E3A8A" />
          </svg>
        </div>
      )}
      <span className="font-sans font-bold text-xl tracking-tight text-white">
        JalurOrdal<span className="text-amber-500">.id</span>
      </span>
    </div>
  );
};

export const Navbar: React.FC<NavbarProps> = ({ onScrollToSection, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Layanan' },
    { id: 'packages', label: 'Program Paket' },
    { id: 'calculator', label: 'Cek Kelayakan Beasiswa' },
    { id: 'gallery', label: 'Galeri' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleLinkClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-800/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => handleLinkClick('hero')}>
            <Logo />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-sans text-sm font-medium transition-colors hover:text-amber-400 relative py-1 ${
                  activeSection === link.id ? 'text-amber-500' : 'text-slate-300'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Consultation Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/6285993405632?text=Halo%20JalurOrdal.id,%20saya%20tertarik%20konsultasi%20mentoring%20beasiswa.%20Bisa%20diinfo%20lebih%20lanjut?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Smartphone className="w-3.5 h-3.5" />
              Konsultasi VIP
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 shadow-2xl transition-all duration-300">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`block w-full text-left font-sans text-base font-medium px-4 py-2.5 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-slate-800 text-amber-500'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-4 px-4 border-t border-slate-800">
            <a
              href="https://wa.me/6285993405632?text=Halo%20JalurOrdal.id,%20saya%20tertarik%20konsultasi%20mentoring%20beasiswa.%20Bisa%20diinfo%20lebih%20lanjut?"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-sans font-bold text-sm px-5 py-3 rounded-xl shadow-lg transition-colors"
            >
              <Smartphone className="w-4 h-4" />
              Konsultasi WhatsApp
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
