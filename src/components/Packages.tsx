import React, { useState } from 'react';
import { packagesData } from '../data';
import { Check, Info, Smartphone, FileCheck } from 'lucide-react';

export const Packages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'compare'>('all');

  const comparisonFeatures = [
    { 
      title: 'Sistem Pembelajaran', 
      gold: 'Grup / Cohort-Based', 
      platinum: 'Privat 1-on-1 (Private Coach)', 
      exclusive: 'Privat 1-on-1 (Mentor Utama)' 
    },
    { 
      title: 'Persiapan IELTS', 
      gold: '12 Sesi Grup (75 Mins)', 
      platinum: '12 Sesi Privat (75 Mins)', 
      exclusive: 'Fokus Berkas & Mentoring S3/S2' 
    },
    { 
      title: 'Persyaratan Awal', 
      gold: 'Wajib menguasai dasar', 
      platinum: 'Bisa dari NOL (Dibimbing penuh)', 
      exclusive: 'Bisa dari NOL (Bantu Jaminan LoA)' 
    },
    { 
      title: 'Evaluasi Dokumen & Esai', 
      gold: 'Review Esai Kelompok oleh Mentor', 
      platinum: 'Unlimited Review Esai & CV', 
      exclusive: 'Comprehensive Proofreading (3-5x Revisi)' 
    },
    { 
      title: 'Asistensi Universitas & LoA', 
      gold: 'Asistensi LoA Standar', 
      platinum: 'Asistensi LoA Premium', 
      exclusive: 'Direct Application (3-5 Kampus)' 
    },
    { 
      title: 'Simulasi Wawancara', 
      gold: '1x Simulasi Kelompok', 
      platinum: 'Simulasi Privat Menyeluruh', 
      exclusive: '3x VIP Mock Interview Khas Panelis' 
    },
    { 
      title: 'Hubungi Mentor Luar Sesi', 
      gold: 'Hanya saat sesi live berjalan', 
      platinum: 'Bebas Tanya di WhatsApp 24/7', 
      exclusive: 'Kontak Langsung Mentor Utama 24/7' 
    },
    { 
      title: 'Cakupan Proteksi Garansi', 
      gold: '1 Tahun Full Mentorship', 
      platinum: '1 Tahun Full Mentorship', 
      exclusive: '1 Tahun Full Mentorship' 
    },
    { 
      title: 'Sertifikasi Hasil Belajar', 
      gold: 'Ya (IELTS Assessment Report)', 
      platinum: 'Ya (IELTS Assessment Report)', 
      exclusive: 'Ya (Sertifikat TOEFL/IELTS & Rekomendasi)' 
    }
  ];

  return (
    <section id="packages" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Glow graphics */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 bg-blue-950 border border-blue-800 rounded-full px-4 py-1.5 mb-4 shadow-md">
            <span className="font-mono text-xs text-blue-300 tracking-wider font-bold uppercase">
              Investasi Masa Depan Akademik
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 animate-fade-in">
            Pilih Jalur Sukses Mentoring Anda
          </h2>
          <p className="font-sans text-base md:text-lg text-slate-400">
            Daftar paket program terlaris kami yang dikonsepkan khusus demi mencetak para pemenang beasiswa dalam dan luar negeri setiap tahun.
          </p>

          {/* Interactive Navigation Tab for comparison view vs basic cards */}
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-full mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`font-sans text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Paket Program
            </button>
            <button
              onClick={() => setActiveTab('compare')}
              className={`font-sans text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 ${
                activeTab === 'compare'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Bandingkan Fitur VIP
            </button>
          </div>
        </div>

        {/* Special Double Guarantee Info Banner */}
        <div className="max-w-5xl mx-auto mb-12 p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-500/15 to-blue-500/10 border border-amber-500/20 text-center animate-fade-in relative overflow-hidden shadow-lg shadow-amber-500/5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 text-left">
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded-2xl shrink-0 border border-amber-500/20 flex items-center justify-center">
              <FileCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-sans text-base font-bold text-amber-400 mb-1">
                Sistem Jaminan Proteksi Karir & Akademik Resmi (JalurOrdal.id)
              </h4>
              <p className="font-sans text-xs md:text-sm text-slate-300 leading-relaxed">
                Apabila Anda masih belum berhasil lolos ketetapan seleksi beasiswa impian maupun kesempatan kerja global, Anda otomatis terproteksi oleh <span className="font-semibold text-white">Garansi Mentorship 1 Tahun Penuh</span>. Selama masa garansi berjalan, Anda akan tetap dibimbing gratis serta berhak memperoleh <span className="font-semibold text-white">Sertifikat TOEFL/IELTS Resmi</span> dan <span className="font-semibold text-white">Surat Rekomendasi Beasiswa Eksklusif</span> dari JalurOrdal.id beserta jajaran Mitra Strategis kami.
              </p>
            </div>
          </div>
        </div>

        {/* Tab 1: Packages List Grid */}
        {activeTab === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.recommended
                    ? 'bg-slate-900/90 border-amber-500 shadow-2xl shadow-amber-500/5 ring-1 ring-amber-500/50 lg:scale-[1.02]'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 shadow-xl shadow-slate-950/20'
                }`}
              >
                {/* Badge decoration */}
                {pkg.badge && (
                  <span className={`absolute -top-3.5 right-6 px-4 py-1.5 rounded-full font-mono text-[10px] font-bold tracking-wider uppercase shadow-md ${
                    pkg.recommended 
                      ? 'bg-amber-500 text-slate-950 border border-amber-300' 
                      : 'bg-indigo-600 text-white border border-indigo-500/50'
                  }`}>
                    {pkg.badge}
                  </span>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="font-sans text-xl font-extrabold text-white mb-1.5 tracking-tight min-h-[56px] flex items-center">
                      {pkg.title}
                    </h3>
                    <p className="font-mono text-xs text-slate-400 font-medium h-4">
                      {pkg.subtitle}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2 mb-8 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/60 shadow-inner">
                    <span className="font-sans text-3xl font-extrabold text-amber-500 animate-pulse">
                      {pkg.price}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      / {pkg.pricePeriod}
                    </span>
                  </div>

                  <div className="space-y-3.5 mb-8">
                    <div className="font-sans text-xs uppercase tracking-wider text-slate-300 font-bold mb-2">
                      Fasilitas Utama:
                    </div>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                        <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 mt-auto">
                  <a
                    href={`https://wa.me/6285993405632?text=Halo%20JalurOrdal.id,%20saya%20tertarik%20mendaftar%20program%20${encodeURIComponent(pkg.title)}.%20Bisa%20diinfo%20lebih%20lanjut?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 font-sans font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.01] ${
                      pkg.recommended
                        ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-lg shadow-amber-500/10'
                        : 'bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    {pkg.ctaText}
                  </a>
                  <div className="text-center mt-3 flex items-center justify-center gap-1.5 font-mono text-[9px] text-slate-550">
                    <Info className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    Ada Garansi Mentorship 1 Tahun & Sertifikasi
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Feature Comparison View */}
        {activeTab === 'compare' && (
          <div className="max-w-6xl mx-auto overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900">
                  <th className="p-6 font-sans text-xs font-bold uppercase tracking-wider text-slate-400 w-1/4">
                    Detail Fitur & Fasilitas
                  </th>
                  <th className="p-6 font-sans text-xs font-bold uppercase tracking-wider text-slate-300 w-1/4">
                    Gold Package
                  </th>
                  <th className="p-6 font-sans text-xs font-bold uppercase tracking-wider text-indigo-400 w-1/4">
                    Platinum Package
                  </th>
                  <th className="p-6 font-sans text-xs font-bold uppercase tracking-wider text-amber-500 w-1/4">
                    Exclusive Mentoring
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {comparisonFeatures.map((feat, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/20 transition-colors">
                    <td className="p-6 font-sans text-sm font-semibold text-slate-200">
                      {feat.title}
                    </td>
                    <td className="p-6 font-sans text-xs text-slate-450">
                      {feat.gold}
                    </td>
                    <td className="p-6 font-sans text-xs text-indigo-300/90">
                      {feat.platinum}
                    </td>
                    <td className="p-6 font-sans text-xs font-bold text-amber-400 bg-amber-500/5">
                      {feat.exclusive}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="p-8 bg-slate-900/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <div className="text-xs font-mono text-slate-400 mb-1 font-semibold uppercase tracking-wider">Garansi Terproteksi Penuh</div>
                <div className="text-sm font-bold text-white leading-relaxed">Semua paket dilengkapi Garansi Mentorship 1 tahun penuh, sertifikasi TOEFL/IELTS, dan surat rekomendasi.</div>
              </div>
              <a
                href="https://wa.me/6285993405632?text=Halo%20JalurOrdal.id,%20saya%2520tertarik%2520konsultasi%2520paket%2520mentoring%2520setelah%2520melihat%2520perbandingan%2520fitur."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <Smartphone className="w-4 h-4" />
                Daftar Mentoring Sekarang
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
