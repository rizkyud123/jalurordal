import React, { useState } from 'react';
import { servicesData } from '../data';
import { Service } from '../types';
import { 
  GraduationCap, 
  BookmarkCheck, 
  Globe, 
  Award, 
  BookOpen, 
  Briefcase, 
  Compass, 
  X, 
  Check, 
  ChevronRight, 
  Smartphone 
} from 'lucide-react';

// Help map icons dynamically from strings
const IconMap: { [key: string]: React.FC<{ className?: string }> } = {
  GraduationCap,
  BookmarkCheck,
  Globe,
  Award,
  BookOpen,
  Briefcase,
  Compass,
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const renderIcon = (name: string, className = "w-8 h-8 text-amber-500") => {
    const Component = IconMap[name];
    if (Component) return <Component className={className} />;
    return <GraduationCap className={className} />; // standard fallback
  };

  return (
    <section id="services" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Decorative vector arches */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-950/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-950/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="font-mono text-xs text-amber-500 tracking-wider font-bold uppercase">
              Layanan Elit & Premium
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Portal Lengkap Pendampingan Akademik Anda
          </h2>
          <p className="font-sans text-base md:text-lg text-slate-400 leading-relaxed">
            Dari pemetaan awal hingga langkah keberangkatan, kami menuntun Anda dengan kurikulum teruji dan pengkondisian profesional di setiap mil perjalanan Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className={`p-8 bg-[#0F172A] rounded-2xl border border-slate-800/80 hover:border-blue-500/50 shadow-xl shadow-slate-950/30 hover:shadow-blue-950/10 transition-all duration-300 group flex flex-col justify-between transform hover:-translate-y-1.5 ${
                service.id === 'domestic-scholarship' ? 'ring-2 ring-amber-500/20 bg-amber-500/5' : ''
              }`}
            >
              <div>
                {/* Header Icon & Special Badge for domestic-scholarship */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3.5 bg-slate-900 rounded-xl group-hover:bg-blue-950/80 group-hover:text-blue-400 transition-colors duration-300 shadow-inner">
                    {renderIcon(service.iconName)}
                  </div>
                  {service.id === 'domestic-scholarship' && (
                    <span className="bg-amber-500/15 text-amber-400 text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full uppercase border border-amber-500/30">
                      Rilis Baru
                    </span>
                  )}
                </div>

                <h3 className="font-sans text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="font-sans text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="font-sans text-xs font-bold text-slate-300 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group/btn"
                >
                  Detail Layanan
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
                <span className="font-mono text-xs text-slate-600 font-bold">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Detailed Drawer Modal for Services */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300">
            <div className="bg-[#0F172A] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative transition-all duration-300 border border-slate-800 animate-slide-up">
              
              {/* Image banner or color theme bar on top of popup */}
              <div className="h-4 bg-gradient-to-r from-blue-600 via-amber-500 to-blue-800" />
              
              {/* Close pin */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-800 text-slate-450 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-950/60 text-blue-400 rounded-xl shadow-md border border-blue-900/40">
                    {renderIcon(selectedService.iconName, "w-8 h-8 text-blue-400")}
                  </div>
                  <div>
                    <h3 className="font-sans text-2xl font-extrabold text-white leading-tight">
                      {selectedService.title}
                    </h3>
                    <p className="font-mono text-xs text-slate-500 font-semibold uppercase tracking-wider">
                      {selectedService.title_id || 'Premium Mentoring Program'}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-amber-500 font-bold mb-2">
                    Deskripsi Lengkap
                  </h4>
                  <p className="font-sans text-slate-300 leading-relaxed text-sm">
                    {selectedService.longDescription}
                  </p>
                </div>

                <div className="mb-8 bg-slate-950/40 border border-slate-800/60 rounded-2xl p-6">
                  <h4 className="font-sans text-sm font-bold text-white mb-3.5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    Apa Saja yang Anda Dapatkan?
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-450 mt-2 shrink-0 animate-pulse" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action Inside popup */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                  <div className="text-left">
                    <div className="text-xs text-slate-550 font-mono">Dukungan Mentor Penuh</div>
                    <div className="text-sm font-bold text-slate-200">Grup / Sesi Privat Tersedia</div>
                  </div>
                  <a
                    href={`https://wa.me/6285993405632?text=Halo%20JalurOrdal.id,%20saya%2520tertarik%2520dengan%2520layanan%2520${encodeURIComponent(selectedService.title)}.%2520Bisa%252520jelaskan%252520bagaimana%252520prosedurnya?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-lg transition-all"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    Konsultasi Layanan Ini
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
