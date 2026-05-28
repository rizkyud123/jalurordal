import React, { useState } from 'react';
import { galleryData } from '../data';
import { GalleryItem } from '../types';
import { ZoomIn, X, Camera, Compass } from 'lucide-react';

export const Documentation: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Absolute graphics */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-950/10 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-950/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="font-mono text-xs text-amber-500 tracking-wider font-bold uppercase block">
              Dokumentasi & Galeri Kegiatan
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 animate-fade-in">
            Aktivitas Pre-Departure & Pelatihan
          </h2>
          <p className="font-sans text-base md:text-lg text-slate-400">
            Intip keseruan rangkaian kegiatan luring, pendampingan uji coba wawancara intensif, dan bimbingan persiapan beasiswa yang diselenggarakan secara resmi oleh tim dan mitra akademis kami.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="bg-[#0F172A] rounded-2xl overflow-hidden border border-slate-800/80 shadow-md group cursor-pointer hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image box */}
              <div className="relative overflow-hidden aspect-video bg-slate-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-slate-900/95 text-white rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5 text-amber-500" />
                  </div>
                </div>
              </div>

              {/* Text box */}
              <div className="p-6">
                <div className="font-mono text-[10px] uppercase font-bold text-blue-400 tracking-widest mb-1 font-mono-bold">
                  {item.category}
                </div>
                <h3 className="font-sans font-bold text-white text-base leading-snug group-hover:text-amber-405 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Lightbox Popup Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md transition-all duration-300">
            <div className="relative max-w-4xl w-full select-none bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 animate-scale-up">
              
              {/* Close Button Pin */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-950/80 hover:bg-slate-950 text-white transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video relative bg-slate-950">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Lightbox Footer metadata */}
              <div className="p-6 bg-slate-950 border-t border-slate-900 text-left">
                <span className="font-mono text-[10px] text-amber-500 uppercase tracking-widest font-extrabold block mb-1">
                  {selectedPhoto.category}
                </span>
                <span className="font-sans text-white font-extrabold text-lg">
                  {selectedPhoto.title}
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
