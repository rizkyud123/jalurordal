import React, { useState } from 'react';
import { Mail, Phone, Instagram, Send, ExternalLink, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Mentoring Beasiswa Luar Negeri');
  const [planYear, setPlanYear] = useState('2026');
  const [additionalMsg, setAdditionalMsg] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Compile dynamic structured Whatsapp narrative
    const waText = `Halo JalurOrdal.id!\n\nSaya ingin berkonsultasi mengenai rencana studi & beasiswa.\nBerikut rincian data diri saya:\n\n- Nama: ${name}\n- Email: ${email || '-'}\n- No. WA: ${phone}\n- Layanan Diminati: ${service}\n- Rencana Studi: Tahun ${planYear}\n- Catatan Lain: ${additionalMsg || '-'}\n\nApakah saya bisa jadwalkan sesi diskusi pembuka? Terima kasih!`;
    const formattedWaLink = `https://wa.me/6285993405632?text=${encodeURIComponent(waText)}`;

    // Redirect to whatsapp endpoint
    window.open(formattedWaLink, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-950/10 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-950/15 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-4 shadow-sm animate-fade-in">
            <span className="font-mono text-xs text-amber-500 tracking-wider font-bold uppercase">
              Konsultasi Langsung & Fast Response
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Mulai Langkah Sukses Anda Sekarang
          </h2>
          <p className="font-sans text-base md:text-lg text-slate-400">
            Isi borang konsultasi digital untuk menyusun rancangan studi, atau hubungi langsung admin kami via jejaring sosial resmi.
          </p>
        </div>

        {/* Dual Form & Info Division */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left: Contact Info Channels */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col justify-between shadow-xl animate-fade-in">
            <div>
              <h3 className="font-sans text-2xl font-extrabold text-white mb-6">
                Hubungi JalurOrdal<span className="text-amber-500">.id</span>
              </h3>
              <p className="font-sans text-sm text-slate-400 leading-relaxed mb-8">
                Punya pertanyaan instan? Tim admin khusus kami siap mendampingi Anda meluruskan langkah administrasi beasiswa.
              </p>

              {/* Direct channels */}
              <div className="space-y-6">
                
                {/* Whatsapp info node */}
                <a
                  href="https://wa.me/6285993405632"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/40 hover:bg-slate-900 hover:border-amber-500/50 border border-slate-800 transition-all duration-300"
                >
                  <div className="p-3 bg-green-500/10 text-green-400 rounded-lg shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-sm text-white">Saluran WhatsApp</div>
                    <div className="font-sans text-xs text-slate-400 mt-0.5">0859-9340-5632 (Fast and Direct)</div>
                  </div>
                </a>

                {/* Instagram Handle */}
                <a
                  href="https://instagram.com/jalur_ordal_ln"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/40 hover:bg-slate-900 hover:border-amber-500/50 border border-slate-800 transition-all duration-300"
                >
                  <div className="p-3 bg-pink-500/10 text-pink-400 rounded-lg shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-sm text-white">Instagram Resmi</div>
                    <div className="font-sans text-xs text-slate-400 mt-0.5">@jalur_ordal_ln (Update Beasiswa harian)</div>
                  </div>
                </a>

                {/* TikTok Handle */}
                <a
                  href="https://tiktok.com/@jalurordal_id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/40 hover:bg-slate-900 hover:border-amber-500/50 border border-slate-800 transition-all duration-300"
                >
                  <div className="p-3 bg-slate-500/10 text-white rounded-lg shrink-0">
                    <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.6 4.22.95 1.13 2.27 1.83 3.68 2.07v3.97c-1.2-.02-2.39-.37-3.41-1.01-.58-.37-1.11-.84-1.54-1.39v7.1c-.05 2.1-.92 4.14-2.47 5.56-1.74 1.59-4.22 2.33-6.53 1.95-2.22-.36-4.23-1.84-5.18-3.92-1.07-2.34-.65-5.26 1.05-7.18 1.4-1.56 3.53-2.39 5.61-2.22v3.98c-1.12-.13-2.32.32-2.92 1.25-.63.99-.44 2.41.46 3.19.89.77 2.3.69 3.08-.21.41-.47.63-1.09.61-1.71V0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-sans font-bold text-sm text-white">TikTok</div>
                    <div className="font-sans text-xs text-slate-400 mt-0.5">@jalurordal_id (Konten edukasi kreatif)</div>
                  </div>
                </a>

              </div>
            </div>

            <div className="pt-8 border-t border-slate-800/80 mt-10 text-[11px] font-mono text-slate-500">
              Urus beasiswa aman terlindungi di bawah naungan partner strategis resmi Global Future Solution.
            </div>
          </div>

          {/* Right: Consultation Form */}
          <div className="lg:col-span-7 bg-[#0F172A] rounded-3xl p-8 sm:p-10 border border-slate-800/80 shadow-xl">
            <h3 className="font-sans text-xl font-extrabold text-white mb-6 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-amber-500" />
              Borang Konsultasi Digital
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Row Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs font-bold text-slate-350 uppercase tracking-wider mb-2">
                    Nama Lengkap Anda
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="misal: Lindayanti"
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl font-sans text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs font-bold text-slate-350 uppercase tracking-wider mb-2">
                    Kontak WhatsApp (Aktif)
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="misal: 081234567890"
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl font-sans text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs font-bold text-slate-350 uppercase tracking-wider mb-2">
                  Alamat Surat Elektronik (Email)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="misal: lindy@gmail.com"
                  className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl font-sans text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              {/* Row Selector Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs font-bold text-slate-350 uppercase tracking-wider mb-2">
                    Program Pilihan Yang Diminati
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl font-sans text-sm text-slate-200 focus:outline-none"
                  >
                    <option value="Mentoring Beasiswa Luar Negeri" className="bg-[#0F172A]">Mentoring Beasiswa Luar Negeri</option>
                    <option value="Persiapan Beasiswa Dalam Negeri" className="bg-[#0F172A]">Persiapan Beasiswa Dalam Negeri</option>
                    <option value="Konsultasi Kuliah Luar Negeri" className="bg-[#0F172A]">Konsultasi Kuliah Luar Negeri</option>
                    <option value="Bantuan Jaminan LoA" className="bg-[#0F172A]">Bantuan Jaminan LoA</option>
                    <option value="Kursus Persiapan IELTS Eksklusif" className="bg-[#0F172A]">Kursus Persiapan IELTS Eksklusif</option>
                    <option value="Program Magang USA / Prancis" className="bg-[#0F172A]">Program Magang USA / Prancis</option>
                    <option value="Study Tour & Pengurusan Visa" className="bg-[#0F172A]">Study Tour & Pengurusan Visa</option>
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-xs font-bold text-slate-350 uppercase tracking-wider mb-2">
                    Rencana Tahun Pendaftaran Studi
                  </label>
                  <select
                    value={planYear}
                    onChange={(e) => setPlanYear(e.target.value)}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl font-sans text-sm text-slate-200 focus:outline-none"
                  >
                    <option value="2026" className="bg-[#0F172A]">Tahun 2026</option>
                    <option value="2027" className="bg-[#0F172A]">Tahun 2027</option>
                    <option value="2028" className="bg-[#0F172A]">Tahun 2028 / Seterusnya</option>
                  </select>
                </div>
              </div>

              {/* Textarea notes */}
              <div>
                <label className="block font-sans text-xs font-bold text-slate-350 uppercase tracking-wider mb-2">
                  Catatan Kebutuhan Tambahan (Opsional)
                </label>
                <textarea
                  value={additionalMsg}
                  onChange={(e) => setAdditionalMsg(e.target.value)}
                  placeholder="Ceritakan singkat profil akademik (kampus incaran, status skor TOEFL/IELTS, dll.)"
                  rows={3}
                  className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl font-sans text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              {/* Submit trigger button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-sans font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all hover:scale-[1.01]"
              >
                Kirim Form & Konsultasi WhatsApp
                <ExternalLink className="w-4 h-4" />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
