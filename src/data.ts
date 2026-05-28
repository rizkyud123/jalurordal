import { Service, Package, Testimonial, FAQItem, GalleryItem, Scholarship } from './types';

export const servicesData: Service[] = [
  {
    id: 'overseas-scholarship',
    title: 'Mentoring Beasiswa Luar Negeri',
    title_id: 'Overseas Scholarship Mentoring',
    description: 'Bimbingan intensif pendaftaran beasiswa bergengsi dunia seperti LPDP, AAS, Chevening, MEXT, GKS, dan lainnya hingga lolos.',
    longDescription: 'Program bimbingan komprehensif 1-on-1 dan kelas kelompok yang dirancang khusus untuk memandu Anda menembus berbagai seleksi beasiswa internasional ternama. Mentor kami adalah alumni dan awardee aktif dari universitas top dunia.',
    iconName: 'GraduationCap',
    features: [
      'Bimbingan pembuatan Personal Statement & Study Plan',
      'Peer-review Essay berkali-kali sampai matang',
      'Simulasi dan latihan wawancara (Mock Interview)',
      'Konsultasi kecocokan jurusan dan prospek karir'
    ]
  },
  {
    id: 'domestic-scholarship',
    title: 'Persiapan Beasiswa Dalam Negeri',
    title_id: 'Domestic Scholarship Preparation',
    description: 'Program persiapan elit untuk memenangkan beasiswa nasional terpopuler seperti LPDP Dalam Negeri, Beasiswa Unggulan, KIP-K, dan beasiswa swasta/BUMN.',
    longDescription: 'Layanan baru unggulan kami untuk membantu Anda mengamankan pendanaan studi di perguruan tinggi terbaik di Indonesia. Mulai dari pemenuhan berkas administrasi, strategi penulisan esai nasional, hingga penguasaan tes bakat skolastik / wawancara.',
    iconName: 'BookmarkCheck',
    features: [
      'Pemetaan universitas negeri terkemuka (UI, ITB, UGM, dll)',
      'Review esai disesuaikan dengan fokus pembangunan nasional',
      'Trik lolos Tes Bakat Skolastik (TBS)',
      'Bimbingan wawancara khusus panelis nasional'
    ]
  },
  {
    id: 'overseas-education',
    title: 'Konsultasi Kuliah Luar Negeri',
    title_id: 'Overseas Education Consulting',
    description: 'Layanan pendaftaran dan pemilihan universitas di puluhan negara terbaik dunia (UK, USA, Australia, Eropa, Asia).',
    longDescription: 'Mulai dari analisis minat bakat, pemilihan negara ramah pelajar, pendaftaran berkas universitas resmi, koordinasi dengan pihak kampus, hingga pengkondisian keberangkatan.',
    iconName: 'Globe',
    features: [
      'Rekomendasi jurusan berbasis analisis potensi diri',
      'Penerjemahan dokumen & validasi kesiapan akreditasi',
      'Pengurusan akomodasi & penjemputan di bandara tujuan',
      'Pre-departure briefing (pembekalan budaya dan hidup hemat)'
    ]
  },
  {
    id: 'loa-assistance',
    title: 'Bantuan Jaminan LoA (Letter of Acceptance)',
    title_id: 'LoA Assistance Guarantee',
    description: 'Garansi dan pendampingan khusus hingga Anda mendapatkan Surat Penerimaan Resmi (LoA) dari universitas target.',
    longDescription: 'Kami membimbing Anda berkoordinasi secara taktis dengan profesor (untuk program riset) dan admisi kampus untuk menjamin peluang diterima setinggi mungkin secara legal dan profesional.',
    iconName: 'Award',
    features: [
      'Panduan menghubungi supervisor/profesor (Cold Emailing)',
      'Review draf proposal penelitian (Research Proposal)',
      'Tips melobi bagian admisi universitas dunia',
      'Bimbingan registrasi portal kampus anti-rejection'
    ]
  },
  {
    id: 'ielts-prep',
    title: 'Kursus Persiapan IELTS Eksklusif',
    title_id: 'IELTS Mastery Course',
    description: 'Program pembelajaran IELTS terarah dengan kurikulum teruji untuk meraih skor minimal 6.5 - 7.5 dengan cepat.',
    longDescription: 'Kelas bimbingan IELTS interaktif yang melatih 4 pilar kemampuan: Listening, Reading, Writing, dan Speaking. Dilengkapi dengan feedback mendalam harian untuk mendeteksi kelemahan spesifik Anda.',
    iconName: 'BookOpen',
    features: [
      'Evaluasi harian untuk Writing & Speaking berbasis kriteria IELTS',
      'Simulasi tes rutin berkala dengan umpan balik instan',
      'Bank soal terlengkap dan strategi menghemat waktu ujian',
      'Tips & trik langsung dari pengajar bersertifikat internasional'
    ]
  },
  {
    id: 'internship-global',
    title: 'Program Magang USA & Prancis',
    title_id: 'Certified Paid Internships',
    description: 'Kesempatan magang kerja berbayar di perusahaan-perusahaan global terpilih di Amerika Serikat dan Prancis.',
    longDescription: 'Kembangkan portofolio Anda di level internasional melalui program magang resmi J-1 (USA) atau visa magang profesional Prancis. Dapatkan kompensasi kompetitif dan relasi industri global.',
    iconName: 'Briefcase',
    features: [
      'Pemilihan industri magang sesuai jurusan akademik',
      'Bimbingan wawancara langsung dengan sponsor & perusahaan global',
      'Fasilitasi pengurusan dokumen visa magang resmi',
      'Pendampingan aklimatisasi tempat tinggal dan transportasi'
    ]
  },
  {
    id: 'study-tour-visa',
    title: 'Study Tour & Pengurusan Visa',
    title_id: 'Academic Tours & Visa Handling',
    description: 'Perjalanan akademik eksklusif mengunjungi kampus impian dan layanan pengurusan visa anti-ribet.',
    longDescription: 'Gabungkan pariwisata edukatif dengan kunjungan resmi ke berbagai kampus bergengsi demi menambah keyakinan studi Anda, dipadukan dengan jasa penyelesaian berkas dan wawancara visa negara maju.',
    iconName: 'Compass',
    features: [
      'Kunjungan kampus terpandu (Campus Immersion & Tour)',
      'Pertemuaan eksklusif dengan komunitas mahasiswa Indonesia di sana',
      'Penyusunan dokumen dukungan finansial untuk kedutaan',
      'Layanan penjaminan visa (Schengen, US Visa, UK, dll)'
    ]
  }
];

export const packagesData: Package[] = [
  {
    id: 'gold-group',
    title: 'STUDY ABROAD PREPARATION GOLD PACKAGE',
    subtitle: 'Group class mentoring & intensive prep',
    price: 'Rp 2.950.000',
    pricePeriod: 'full program',
    recommended: false,
    ctaText: 'Daftar Kelas Gold',
    badge: 'Paling Hemat',
    features: [
      'IELTS Preparation 12 session / 75 minutes (Group)',
      'Academic IELTS Writing & Speaking Strategy (Additional 1 special session in Group)',
      'Scholarship Interview Strategy (Additional 1 special session in Group)',
      'Diagnostic Test & Materials directly from Cambridge',
      'Scholarship Mentoring & Consultation (in Group cohort)',
      'In-depth Document Reviews (CV, Essay, Personal Statement)',
      'LOA Assistance (Letter of Acceptance) directly handled',
      'IELTS Assessment Report card for profile evaluation',
      'Garansi Mentorship 1 Tahun jika gagal lolos beasiswa dan kerja',
      'Fasilitas Sertifikat TOEFL/IELTS & Surat Rekomendasi Resmi JalurOrdal.id dan Mitra'
    ]
  },
  {
    id: 'platinum-private',
    title: 'STUDY ABROAD PREPARATION PLATINUM PACKAGE',
    subtitle: '1-on-1 private class mentoring',
    price: 'Rp 3.950.000',
    pricePeriod: 'full program',
    recommended: true,
    ctaText: 'Daftar Kelas Platinum',
    badge: 'Rekomendasi Utama',
    features: [
      'IELTS Preparation 12 session / 75 minutes (Private 1-on-1)',
      'Academic IELTS Writing & Speaking Strategy (Additional 1 special session in Private)',
      'Scholarship Interview Strategy (Additional 1 special session in Private)',
      'Diagnostic Test & Premium Cambridge Learning Materials',
      'Scholarship Mentoring Private Coach with top-tier awardee',
      'Unlimited Document Reviews (CV, Essay, Personal Statement)',
      'LOA Assistance (Letter of Acceptance) with guaranteed submission',
      'Accommodation & Health Insurance Advisory / Assistance',
      'Detailed IELTS Assessment Report and progress monitoring',
      'Garansi Mentorship 1 Tahun jika gagal lolos beasiswa dan kerja',
      'Fasilitas Sertifikat TOEFL/IELTS & Surat Rekomendasi Resmi JalurOrdal.id dan Mitra'
    ]
  },
  {
    id: 'exclusive-scholarship',
    title: 'EXCLUSIVE SCHOLARSHIP MENTORING',
    subtitle: 'Sesi privat 1-on-1 dengan mentor utama (Non-IELTS)',
    price: 'Rp 3.100.000',
    pricePeriod: 'full mentoring',
    recommended: false,
    ctaText: 'Daftar Mentoring Exclusive',
    badge: 'VIP Non-IELTS',
    features: [
      'Deep-Dive Profile Assessment & University Mapping (1-2 Sesi Privat)',
      'Comprehensive Essay & Motivation Letter Proofreading (Up to 3-5x Revisi)',
      'Recommendation Letter & CV/Resume Drafting Assistance',
      'Extra Scholarship Interview Simulations (3x Mock Interview)',
      'Direct University Application Handling (Aplikasi ke 3-5 Kampus Berbeda)',
      'Genuine Student (GS) Specialist Assistance',
      'Garansi Mentorship 1 Tahun jika gagal lolos beasiswa dan kerja',
      'Fasilitas Sertifikat TOEFL/IELTS & Surat Rekomendasi Resmi JalurOrdal.id dan Mitra'
    ]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ahmad Ghifari',
    role: 'Penerima Beasiswa LPDP 2024',
    university: 'University of Manchester, UK',
    scholarship: 'LPDP S2 Luar Negeri',
    text: 'Bimbingan 1-on-1 di JalurOrdal.id benar-benar menyelamatkan saya. Esai saya direview sampai 12 kali hingga akhirnya memiliki arah narasi yang kuat. Dukungan mentor yang siaga kapan saja adalah kunci saya lolos seleksi.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    flag: '🇬🇧'
  },
  {
    id: 'test-2',
    name: 'Sarah Fauziyah',
    role: 'Penerima Beasiswa AAS 2025',
    university: 'University of Melbourne, Australia',
    scholarship: 'Australia Awards Scholarship (AAS)',
    text: 'Sangat terbantu dengan simulasi wawancara (Mock Interview). Mentor memberikan detail gestur tubuh, intonasi, hingga strategi menjawab pertanyaan jebakan tentang kontribusi pasca studi. Berkat JalurOrdal saya berangkat tahun ini!',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    flag: '🇦🇺'
  },
  {
    id: 'test-3',
    name: 'Linda Rahmawati',
    role: 'Penerima Beasiswa Unggulan 2024',
    university: 'Universitas Indonesia (UI), Jakarta',
    scholarship: 'Beasiswa Unggulan Dalam Negeri',
    text: 'Ketika tahu JalurOrdal membuka layanan untuk Beasiswa Dalam Negeri, saya langsung daftar. Bimbingan pembuatan portofolio prestasi dan review esai nasional saya sangat diprioritaskan. Kini kuliah impian gratis total!',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    flag: '🇮🇩'
  },
  {
    id: 'test-4',
    name: 'Dika Wirya',
    role: 'Penerima Beasiswa Chevening 2024',
    university: 'University of Oxford, UK',
    scholarship: 'Chevening Scholarship S2',
    text: 'Layanan asistensi LoA dari JalurOrdal membantu saya yang tadinya minder karena IPK pas-pas-an. Mereka mengarahkan saya mengejar keunikan di portofolio magang dan mereview draft proposal riset sampai disukai prof di UK.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    flag: '🇬🇧'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Apa itu JalurOrdal.id?',
    answer: 'JalurOrdal.id adalah platform bimbingan dan konsultasi pendidikan premium. "Ordal" disini dikonotasikan secara positif sebagai representasi akses premium terhadap materi persiapan beasiswa, metode bimbingan intensif layaknya orang dalam yang membocori taktik sukses, dan jaringan alumni mentor berprestasi luar biasa (bukan orang dalam berkonotasi nepotisme).'
  },
  {
    id: 'faq-2',
    question: 'Apakah saya harus sudah memiliki sertifikat IELTS untuk bisa mendaftar mentoring?',
    answer: 'Sama sekali TIDAK WAJIB. Program Exclusive Scholarship Mentoring kami dirancang ramah untuk Anda yang masih memiliki skor IELTS dasar atau bahkan belum pernah tes sama sekali. Kami membantu membimbing persiapan IELTS Anda dari awal, sembari menggodok substansi berkas beasiswa esensial lainnya.'
  },
  {
    id: 'faq-3',
    question: 'Siapa sajakah mentor yang akan membimbing saya?',
    answer: 'Mentor di JalurOrdal.id adalah para awardee beasiswa aktif dan alumni lulusan universitas top global (seperti Oxford, Manchester, Melbourne, Kyoto, NUS) serta universitas terkemuka di Indonesia (UI, ITB, Gadjah Mada). Mereka berpengalaman meloloskan puluhan bimbingan sejenis.'
  },
  {
    id: 'faq-4',
    question: 'Apa saja beasiswa dalam negeri yang juga bisa dimentor di JalurOrdal?',
    answer: 'Kami meng-cover persiapan Beasiswa LPDP (Penerima Dalam Negeri), Beasiswa Unggulan Kemendikbudristek, Beasiswa KIP Kuliah Merdeka (jalur prestasi), Beasiswa Pertamina, Beasiswa Bank Indonesia (BI), dan beasiswa yayasan korporasi nasional terkemuka.'
  },
  {
    id: 'faq-5',
    question: 'Bagaimana sistem belajarnya?',
    answer: 'Untuk paket Gold, pembelajaran berjalan secara kelompok terpadu (cohort-based) via Zoom Meeting terjadwal. Untuk program Exclusive, sistem belajar adalah privat 1-on-1 yang jadwalnya bisa disesuaikan secara fleksibel langsung antara Anda dengan mentor pendamping.'
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Seminar Beasiswa Offline Jakarta',
    category: 'Event Seminar',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=450&fit=crop'
  },
  {
    id: 'g-2',
    title: 'Pre-Departure Briefing Awardee',
    category: 'Briefing Keberangkatan',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=450&fit=crop'
  },
  {
    id: 'g-3',
    title: 'Kelas Intensif IELTS Preparation',
    category: 'IELTS Course',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=450&fit=crop'
  },
  {
    id: 'g-4',
    title: 'Simulasi Wawancara Offline 1-on-1',
    category: 'Mock Interview',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop'
  },
  {
    id: 'g-5',
    title: 'MoU Penandatanganan Program Magang Resmi',
    category: 'Strategic Partnerships',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=450&fit=crop'
  },
  {
    id: 'g-6',
    title: 'Awardee Gathering Universitas Melbourne',
    category: 'Vibrant Community',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop'
  }
];

export const scholarshipsData: Scholarship[] = [
  {
    id: 's-lpdp-ln',
    name: 'LPDP S2/S3 Luar Negeri',
    provider: 'Lembaga Pengelola Dana Pendidikan (Kemenkeu RI)',
    type: 'Luar Negeri',
    coverage: 'Fully Funded (Dana Kuliah, Biaya Hidup, Tiket PP, Visa, Buku)',
    gpamin: 3.0,
    ieltsmin: 6.5,
    targetCountries: ['UK', 'USA', 'Australia', 'Japan', 'Singapore', 'Canada', 'Europe'],
    link: 'https://lpdp.kemenkeu.go.id'
  },
  {
    id: 's-lpdp-dn',
    name: 'LPDP S2/S3 Dalam Negeri',
    provider: 'Lembaga Pengelola Dana Pendidikan (Kemenkeu RI)',
    type: 'Dalam Negeri',
    coverage: 'Fully Funded (Dana Kuliah, Biaya Hidup Saku Bulanan, Tunjangan Buku)',
    gpamin: 3.0,
    ieltsmin: null, // many domestic paths don't strictly require IELTS, or accept TOEFL ITP/CEPT
    targetCountries: ['Indonesia'],
    link: 'https://lpdp.kemenkeu.go.id'
  },
  {
    id: 's-aas',
    name: 'Australia Awards Scholarship (AAS)',
    provider: 'Australian Government',
    type: 'Luar Negeri',
    coverage: 'Fully Funded (Biaya Kuliah, Tunjangan Hidup, Asuransi Kesehatan, Tiket Pesawat)',
    gpamin: 2.9,
    ieltsmin: 5.5,
    targetCountries: ['Australia'],
    link: 'https://australiaawardswestjava.org'
  },
  {
    id: 's-chevening',
    name: 'Chevening Scholarship S2',
    provider: 'British Government',
    type: 'Luar Negeri',
    coverage: 'Fully Funded (Biaya Kuliah Penuh, Tunjangan Hidup Bulanan, Tiket PP UK)',
    gpamin: 3.0,
    ieltsmin: null, // Chevening removed the global English language requirement
    targetCountries: ['UK'],
    link: 'https://www.chevening.org'
  },
  {
    id: 's-gks',
    name: 'Global Korea Scholarship (GKS)',
    provider: 'Korean Government',
    type: 'Luar Negeri',
    coverage: 'Fully Funded (Dana Kuliah, Kelas Bahasa Korea 1 Tahun, Tiket Pesawat, Uang Saku Bulanan)',
    gpamin: 3.1,
    ieltsmin: null, // Accept alternative English certificates, or benefit from Korean proficiency
    targetCountries: ['South Korea'],
    link: 'https://www.studyinkorea.go.kr'
  },
  {
    id: 's-mext',
    name: 'MEXT Monbukagakusho Beasiswa Jepang',
    provider: 'Japanese Government',
    type: 'Luar Negeri',
    coverage: 'Fully Funded (Biaya Kuliah, Tunjangan Bulanan Mewah, Tiket Pesawat PP)',
    gpamin: 3.2,
    ieltsmin: null, // Competes on English or Japanese ability tests
    targetCountries: ['Japan'],
    link: 'https://www.id.emb-japan.go.jp'
  },
  {
    id: 's-bu',
    name: 'Beasiswa Unggulan Kemendikbudristek',
    provider: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI',
    type: 'Dalam Negeri',
    coverage: 'Fully Funded (Biaya SPP Kuliah, Biaya Hidup Bulanan, Tunjangan Materi/Mata Kuliah)',
    gpamin: 3.25,
    ieltsmin: null, // TPA + Indonesian profile matches, IELTS secondary
    targetCountries: ['Indonesia'],
    link: 'https://beasiswaunggulan.kemdikbud.go.id'
  }
];
