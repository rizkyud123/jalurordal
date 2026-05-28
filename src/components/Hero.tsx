import React from 'react';
import { ChevronRight, ExternalLink, GraduationCap, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSection }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Premium Background Graphics */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.06),transparent_40%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-900/10 blur-[130px] rounded-full pointer-events-none" />
      
      {/* Decorative Grid Lining */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Strategic Partnership Notice */}
        <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/50 backdrop-blur-sm shadow-xl rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <ShieldCheck className="w-4 h-4 text-amber-500" />
          <span className="font-mono text-[11px] md:text-xs text-blue-200 tracking-wide font-medium">
            PARTNER RESMI: <span className="text-white font-semibold">Global Future Solution</span> (www.global-future-solution.com)
          </span>
        </div>

        {/* Main Hero Typography */}
        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none max-w-5xl mx-auto mb-6">
          Tembus Kampus & Beasiswa Impian Lewat{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 font-black relative">
            Jalur Ordal!
          </span>
        </h1>

        <p className="font-sans text-base md:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
          Ubah mimpi menjadi rencana nyata bergengsi. Mentoring privat 1-on-1 dari nol tanpa syarat IELTS, reviewer esai tanpa batas, bimbingan LoA, hingga wawancara oleh jajaran mentor awardee universitas top dunia.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-20">
          <a
            href="https://wa.me/6285993405632?text=Halo%20JalurOrdal.id,%20saya%20tertarik%20dengan%20program%20Exclusive%20Mentoring.%20Bisa%20diinfo%20lebih%20lanjut?"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-sans font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-amber-500/10 transition-all duration-300 hover:scale-[1.02]"
          >
            Konsultasi WhatsApp
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
          <button
            onClick={() => onScrollToSection('packages')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 font-sans font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl hover:border-slate-500 transition-all duration-300"
          >
            Lihat Paket Program
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic Core Stats Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10 border-t border-slate-800/80">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm shadow-md">
            <div className="flex justify-center mb-2">
              <GraduationCap className="w-6 h-6 text-amber-500" />
            </div>
            <div className="font-sans font-extrabold text-3xl text-white mb-0.5">150+</div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">Awardee Sukses</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm shadow-md">
            <div className="flex justify-center mb-2">
              <Award className="w-6 h-6 text-blue-500" />
            </div>
            <div className="font-sans font-extrabold text-3xl text-white mb-0.5">98%</div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">Kelolosan Berkas</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm shadow-md">
            <div className="flex justify-center mb-2">
              <HeartHandshake className="w-6 h-6 text-amber-500" />
            </div>
            <div className="font-sans font-extrabold text-3xl text-white mb-0.5">20+</div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">Negara Tujuan</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm shadow-md">
            <div className="flex justify-center mb-2">
              <ShieldCheck className="w-6 h-6 text-blue-500" />
            </div>
            <div className="font-sans font-extrabold text-3xl text-white mb-0.5">1-on-1</div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">VIP Private Coach</div>
          </div>
        </div>
      </div>
    </section>
  );
};
