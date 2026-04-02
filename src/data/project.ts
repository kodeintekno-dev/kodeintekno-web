import { type ProjectValue } from "@/components/PaginatedProjects";

export const projects: ProjectValue[] = [
  {
    id: 1,
    title: "Aviaventura",
    slug: "aviaventura",
    thumbnail: "/img/project/aviaventura.webp",
    category: "Company Profile",
    demo: "https://aviaventura.com/",
    year: "2024",
    client: "Aviaventura Group",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    fullDescription:
      "Website profil perusahaan Aviaventura dirancang dengan fokus pada kejelasan informasi layanan dan citra profesional. Menggunakan teknologi modern untuk memastikan performa yang cepat dan pengalaman pengguna yang mulus di berbagai perangkat.",
  },
  {
    id: 2,
    title: "WABlast Kodein",
    slug: "wablast-kodein",
    thumbnail: "/img/project/kodein-wablast.webp",
    category: "Web App",
    demo: "https://wablast.kodein.sch.id/",
    year: "2025",
    client: "Internal Kodeintekno",
    techStack: ["Node.js", "Express", "React"],
    fullDescription:
      "Aplikasi perpesanan masal (WhatsApp Blast) yang efisien untuk kebutuhan automasi komunikasi sekolah dan organisasi. Proyek ini mencakup fitur manajemen kontak, penjadwalan pesan, dan analitik pengiriman secara real-time.",
  },
  {
    id: 3,
    title: "KDNINV",
    slug: "kdninv",
    thumbnail: "/img/project/anggaran-kodein.webp",
    category: "Web App",
    demo: "https://anggaran.kodein.sch.id/",
    year: "2026",
    client: "Sekolah Developer Indonesia",
    techStack: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    fullDescription:
      "Sistem Informasi Manajemen Anggaran Sekolah Developer Indonesia yang komprehensif, memungkinkan transparansi dan akurasi dalam pelaporan keuangan yayasan serta pemantauan pengeluaran di setiap departemen secara otomatis.",
  },
  {
    id: 4,
    title: "Nusavy",
    slug: "nusavy",
    thumbnail: "/img/project/nusavy.webp",
    category: "Landing Page",
    demo: "https://nusavy.vercel.app",
    year: "2026",
    client: "Nusavy Tech",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    fullDescription:
      "Landing page modern untuk platform Nusavy yang mengutamakan visual yang kuat dan konversi tinggi. Didesain dengan animasi halus dan navigasi yang intuitif untuk menonjolkan fitur-fitur utama platform kepada calon pengguna.",
  },

  {
    id: 5,
    title: "Al-Wildan",
    slug: "al-wildan",
    thumbnail: "/img/project/al-wildan.webp",
    category: "Education",
    year: "2025",
    client: "Sekolah Al-Wildan",
    techStack: ["Next.js", "Tailwind CSS"],
    fullDescription:
      "Modernisasi website sekolah Al-Wildan untuk memberikan akses informasi pendidikan yang lebih baik bagi wali murid dan calon siswa.",
  },
];
