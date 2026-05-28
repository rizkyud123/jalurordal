import React, { useState } from 'react';
import { scholarshipsData } from '../data';
import { Scholarship } from '../types';
import { Award, Compass, Search, GraduationCap, CheckCircle, Smartphone, Info } from 'lucide-react';

export const Calculator: React.FC = () => {
  // Input parameters
  const [gpa, setGpa] = useState<number>(3.2);
  const [ielts, setIelts] = useState<number | string>('6.5');
  const [scholarshipType, setScholarshipType] = useState<'Semua' | 'Dalam Negeri' | 'Luar Negeri'>('Semua');
  const [targetSearchCountry, setTargetSearchCountry] = useState<string>('');

  // Analysis result states
  const [analyzed, setAnalyzed] = useState<boolean>(false);
  const [filteredList, setFilteredList] = useState<Scholarship[]>([]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    const ieltsVal = ielts === '' ? 0 : parseFloat(ielts.toString());

    const matched = scholarshipsData.filter((sch) => {
      // 1. GPA check
      if (gpa < sch.gpamin) return false;

      // 2. IELTS check (only if scholarship explicitly specifies minimum IELTS)
      if (sch.ieltsmin !== null && ieltsVal < sch.ieltsmin) return false;

      // 3. Scholarship Destination type check
      if (scholarshipType !== 'Semua' && sch.type !== scholarshipType) return false;

      // 4. Target Country Text mapping check
      if (targetSearchCountry.trim() !== '') {
        const query = targetSearchCountry.toLowerCase().trim();
        const matchesCountry = sch.targetCountries.some((c) => c.toLowerCase().includes(query));
        const matchesProvider = sch.provider.toLowerCase().includes(query);
        const matchesName = sch.name.toLowerCase().includes(query);
        if (!matchesCountry && !matchesProvider && !matchesName) return false;
      }

      return true;
    });

    setFilteredList(matched);
    setAnalyzed(true);
  };

  return (
    <section id="calculator" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-blue-950/10 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-950/15 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="font-mono text-xs text-blue-400 tracking-wider font-bold uppercase">
              Asesmen Instan Digital
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Cek Kelayakan Beasiswa Anda
          </h2>
          <p className="font-sans text-base md:text-lg text-slate-400">
            Gunakan kalkulator analitik digital ini untuk memetakan peluang kelolosan profil akademik Anda ke berbagai beasiswa prestisius secara cepat.
          </p>
        </div>

        {/* Form and Results Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Form Card */}
          <div className="lg:col-span-5 bg-[#0F172A] rounded-3xl p-8 border border-slate-800/80 shadow-xl">
            <h3 className="font-sans text-xl font-extrabold text-white mb-6 flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-500" />
              Masukkan Parameter Profil Anda
            </h3>
            
            <form onSubmit={handleCalculate} className="space-y-6">
              
              {/* GPA Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-sans text-sm font-semibold text-slate-300">
                    IPK Kumulatif (GPA):
                  </label>
                  <span className="font-sans font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg text-sm border border-amber-500/30">
                    {gpa.toFixed(2)} / 4.00
                  </span>
                </div>
                <input
                  type="range"
                  min="2.00"
                  max="4.00"
                  step="0.05"
                  value={gpa}
                  onChange={(e) => setGpa(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>Min: 2.00</span>
                  <span>Maks: 4.00</span>
                </div>
              </div>

              {/* IELTS Score */}
              <div>
                <label className="block font-sans text-sm font-semibold text-slate-300 mb-2">
                  Skor Bahasa Inggris (IELTS / Setara):
                </label>
                <select
                  value={ielts}
                  onChange={(e) => setIelts(e.target.value)}
                  className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl font-sans text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                >
                  <option value="0" className="bg-[#0F172A]">Belum Ada / Nol</option>
                  <option value="5.0" className="bg-[#0F172A]">5.0 (Basic)</option>
                  <option value="5.5" className="bg-[#0F172A]">5.5 (Intermediate)</option>
                  <option value="6.0" className="bg-[#0F172A]">6.0 (Competent)</option>
                  <option value="6.5" className="bg-[#0F172A]">6.5 (Standard LPDP/AAS)</option>
                  <option value="7.0" className="bg-[#0F172A]">7.0 (Good)</option>
                  <option value="7.5" className="bg-[#0F172A]">7.5 (Academic Elite)</option>
                  <option value="8.0" className="bg-[#0F172A]">8.0+ (Superior)</option>
                </select>
              </div>

              {/* Scholarship Type Type */}
              <div>
                <label className="block font-sans text-sm font-semibold text-slate-300 mb-2.5">
                  Fokus Tujuan Studi:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Semua', 'Dalam Negeri', 'Luar Negeri'] as const).map((typeName) => (
                    <button
                      key={typeName}
                      type="button"
                      onClick={() => setScholarshipType(typeName)}
                      className={`py-2 px-3 rounded-lg font-sans text-xs font-semibold border transition-all ${
                        scholarshipType === typeName
                          ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-sm'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-900'
                      }`}
                    >
                      {typeName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search keywords / countries filter */}
              <div>
                <label className="block font-sans text-sm font-semibold text-slate-300 mb-2">
                  Negara Tujuan khusus (Opsional):
                </label>
                <div className="relative">
                  <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    value={targetSearchCountry}
                    onChange={(e) => setTargetSearchCountry(e.target.value)}
                    placeholder="misal: UK, Australia, Korea..."
                    className="w-full p-3 pl-10 bg-slate-950 border border-slate-800 rounded-xl font-sans text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Calculate Trigger button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-650 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-sans font-bold text-sm tracking-wider uppercase py-4 rounded-xl shadow-lg shadow-blue-500/10 transition-all hover:scale-[1.01]"
              >
                Mulai Kalkulasi Analisis
              </button>

            </form>
          </div>

          {/* Results Analysis Panel */}
          <div className="lg:col-span-7 bg-[#0F172A] rounded-3xl p-8 border border-slate-800 shadow-xl min-h-[480px] flex flex-col justify-between">
            {!analyzed ? (
              // Initial Prompt View
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="p-5 bg-amber-500/10 text-amber-500 rounded-full mb-6 animate-pulse">
                  <GraduationCap className="w-12 h-12" />
                </div>
                <h4 className="font-sans text-lg font-bold text-white mb-2">
                  Siap Mengecek Kelayakan Beasiswa?
                </h4>
                <p className="font-sans text-sm text-slate-400 max-w-sm mb-6">
                  Sesuaikan parameter di panel sebelah kiri lalu klik beasiswa impian untuk memverifikasi kecocokan akademis Anda saat ini.
                </p>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 bg-slate-950/60 border border-slate-800/80 px-4 py-1.5 rounded-full">
                  <Info className="w-3.5 h-3.5 text-blue-400" />
                  Menggunakan basis data ril bersertifikasi 2024-2025.
                </div>
              </div>
            ) : (
              // Analyzed Results View
              <div className="space-y-6">
                <div>
                  <h4 className="font-sans text-xl font-extrabold text-white mb-1 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Hasil Analisis kelayakan Beasiswa
                  </h4>
                  <p className="font-sans text-xs text-slate-500 uppercase tracking-widest font-mono">
                    Profil: IPK {gpa.toFixed(2)} &bull; IELTS: {ielts === '0' ? 'Nol/Dasar' : ielts} &bull; {scholarshipType}
                  </p>
                </div>

                {filteredList.length === 0 ? (
                  // No match results
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 text-center">
                    <p className="font-sans text-slate-300 text-sm font-medium mb-3">
                      Maaf, profil Anda saat ini belum memenuhi kualifikasi beasiswa di parameter pencarian yang dimasukkan.
                    </p>
                    <p className="font-sans text-xs text-slate-450 leading-relaxed">
                      Coba naikkan parameter IPK atau skor IELTS Anda, atau ubah segmentasi pencarian negara. Jangan berkecil hati! JalurOrdal.id bisa membimbing Anda dari nol!
                    </p>
                  </div>
                ) : (
                  // Match found list items
                  <div className="space-y-4 max-h-[320px] overflow-y-auto pr-2">
                    {filteredList.map((sch) => (
                      <div
                        key={sch.id}
                        className="p-5 rounded-2xl border border-slate-800/80 hover:border-blue-500/40 bg-slate-950/60 hover:bg-slate-900/40 transition-all shadow-sm group flex flex-col sm:flex-row justify-between sm:items-center gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1.5 animate-fade-in">
                            <span className="font-sans font-bold text-sm text-white group-hover:text-blue-400 transition-colors">
                              {sch.name}
                            </span>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                              sch.type === 'Luar Negeri'
                                ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                                : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            }`}>
                              {sch.type}
                            </span>
                          </div>
                          
                          <div className="text-xs text-slate-400 leading-relaxed font-sans">
                            <span className="font-semibold text-slate-300 text-xs">Pemberi:</span> {sch.provider}
                          </div>
                          
                          <div className="text-[11px] font-semibold text-rose-400 mt-1 font-mono">
                            Cakupan: {sch.coverage}
                          </div>
                        </div>

                        <a
                          href={sch.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-center font-sans text-xs font-bold text-blue-400 hover:text-blue-300 underline flex items-center gap-1"
                        >
                          Situs Resmi
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bottom encouragement / actions */}
                <div className="p-5 bg-gradient-to-r from-slate-950 to-slate-900 text-white rounded-2xl border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
                  <div>
                    <div className="text-sm font-bold mb-1">Butuh Pendampingan Khusus?</div>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                      Konsultasikan hasil analisis kelayakan Anda secara privat guna memoles esai dan strategi agar lolos administrasi.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/6285993405632?text=Halo%20JalurOrdal.id,%20saya%20sudah%20mencoba%20kalkulator%20kelayakan%20beasiswa.%20Ingin%20bimbingan%20lebih%20lanjut%20mematangkan%20peluang%20lolos%20saya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full shadow-lg"
                  >
                    <Smartphone className="w-4 h-4" />
                    Konsultasi Privat
                  </a>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
