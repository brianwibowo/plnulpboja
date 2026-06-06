"use client";

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    ),
    title: "Pasang Baru",
    desc: "Pengajuan pemasangan sambungan baru listrik secara online dengan cepat.",
    link: "#layanan"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    ),
    title: "Tambah Daya",
    desc: "Ubah daya listrik rumah atau industri Anda menyesuaikan kebutuhan energi.",
    link: "#layanan"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
    ),
    title: "PLN Mobile",
    desc: "Aplikasi seluler terintegrasi untuk segala urusan kelistrikan dalam satu genggaman.",
    link: "#layanan"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    ),
    title: "Pengaduan",
    desc: "Hubungi keluhan gangguan listrik 24 jam dengan penanganan cepat di lapangan.",
    link: "#kontak"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    ),
    title: "Area Layanan",
    desc: "Cakupan wilayah operasional dan detail kantor ULP Boja Kendal.",
    link: "#profil"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
    ),
    title: "Info Pelanggan",
    desc: "Informasi pemeliharaan berkala, edukasi hemat energi, dan pengumuman terbaru.",
    link: "#informasi"
  }
];

export default function QuickAccess() {
  return (
    <section className="py-6 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <a 
              href={item.link} 
              key={index} 
              className="group flex items-start gap-4 bg-white border border-zinc-200/60 hover:border-zinc-300 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-zinc-50 group-hover:bg-pln-blue text-pln-blue group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <span className="flex items-center justify-center">{item.icon}</span>
              </div>
              <div className="flex-grow text-left">
                <h3 className="font-bold text-[15px] text-zinc-900 group-hover:text-pln-blue mb-1 transition-colors duration-200">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
              <div className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-pln-blue flex items-center justify-center flex-shrink-0 transition-all duration-300 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
