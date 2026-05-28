import React from 'react';
import { testimonialsData } from '../data';
import { GraduationCap, Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Absolute graphic stars */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 bg-blue-950 border border-blue-800 rounded-full px-4 py-1.5 mb-4 shadow-md">
            <span className="font-mono text-xs text-blue-300 tracking-wider font-bold uppercase">
              Kisah Sukses Anak Didik
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Testimoni & Awardee Wall
          </h2>
          <p className="font-sans text-base md:text-lg text-slate-400">
            Mereka yang mempercayakan masa depan akademisnya bersama JalurOrdal.id dan kini menimba ilmu secara gratis di universitas kelas dunia.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700/60 rounded-3xl transition-all duration-300 shadow-xl flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                {/* Upper row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={test.avatarUrl}
                        alt={test.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-full object-cover border-2 border-amber-500/80 shadow-md group-hover:scale-105 transition-transform"
                      />
                      <span className="absolute -bottom-1 -right-1 bg-slate-950 px-1 py-0.5 rounded-full text-sm border border-slate-800 shadow-sm leading-none">
                        {test.flag}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-sans font-extrabold text-base text-white">
                        {test.name}
                      </h4>
                      <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                        {test.role}
                      </p>
                    </div>
                  </div>
                  
                  <Quote className="w-8 h-8 text-amber-500/20 group-hover:text-amber-500/35 transition-colors duration-200" />
                </div>

                {/* Score Stars */}
                <div className="flex gap-1 mb-4 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="font-sans text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{test.text}"
                </p>
              </div>

              {/* Verified academic targets */}
              <div className="pt-4 border-t border-slate-800/85 bg-slate-950/20 -mx-8 -mb-8 px-8 py-4 rounded-b-3xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <span className="font-sans font-bold text-xs text-slate-300">
                    {test.university}
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold tracking-wider text-amber-500 uppercase bg-amber-500/5 border border-amber-500/20 px-2.5 py-1 rounded-full">
                  {test.scholarship}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
