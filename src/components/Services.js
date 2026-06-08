"use client";

import Image from "next/image";

const services = [
  {
    id: "pasang-baru",
    title: "Pasang Baru",
    tag: "Populer",
    image: "/gambar/pasang baru.png",
    desc: "Ajukan penyambungan baru untuk rumah tangga, bisnis, maupun industri. Proses mudah dan terintegrasi dengan penghitungan biaya transparan.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    ),
    spanClass: "lg:col-span-2",
    action: "Mulai Pengajuan"
  },
  {
    id: "tambah-daya",
    title: "Tambah Daya",
    tag: "Layanan",
    image: "/gambar/tambah daya.png",
    desc: "Kebutuhan listrik meningkat? Naikkan daya listrik Anda secara aman dengan prosedur resmi.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    ),
    spanClass: "lg:col-span-1",
    action: "Naik Daya"
  },
  {
    id: "migrasi-tarif",
    title: "Migrasi Tarif",
    tag: "Layanan",
    image: "/gambar/migrasi tarif.png",
    desc: "Perubahan golongan tarif listrik (misalnya dari prabayar ke pascabayar atau sebaliknya).",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3L21 7L17 11M7 21L3 17L7 13"></path><path d="M3 17H21M21 7H3"></path></svg>
    ),
    spanClass: "lg:col-span-1",
    action: "Migrasi"
  },
  {
    id: "pengaduan-gangguan",
    title: "Pengaduan Gangguan",
    tag: "Darurat 24 Jam",
    image: "/gambar/pengaduan gangguan.png",
    desc: "Laporan padam listrik, korsleting, atau bahaya kelistrikan lainnya. Tim teknis reaksi cepat kami siap meluncur ke lokasi Anda kapan saja.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    ),
    spanClass: "lg:col-span-2",
    action: "Laporkan Gangguan"
  },
  {
    id: "perubahan-data",
    title: "Perubahan Data",
    tag: "Administrasi",
    image: "/gambar/perubahan data.png",
    desc: "Perubahan nama pelanggan, alamat tarif, atau koreksi data administratif kepemilikan kWh meter.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
    ),
    spanClass: "lg:col-span-1",
    action: "Ubah Data"
  },
  {
    id: "konsultasi",
    title: "Konsultasi Kelistrikan",
    tag: "Konsultasi",
    image: "/gambar/konsultasi kelistrikan.png",
    desc: "Dapatkan saran teknis dan rekomendasi instalasi kelistrikan yang aman, hemat, dan sesuai standar SLO (Sertifikat Laik Operasi) langsung dari ahlinya.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    ),
    spanClass: "lg:col-span-2",
    action: "Konsultasi"
  }
];

export default function Services() {
  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-header mb-16 text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
          <span className="section-badge border border-zinc-200/50 bg-zinc-50 text-zinc-850 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block">Portal Layanan</span>
          <h2 className="section-title text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">Solusi Kelistrikan Terintegrasi</h2>
          <p className="section-subtitle text-zinc-500 text-sm sm:text-base leading-relaxed">
            Segala pengajuan dapat Anda lakukan dengan mudah dan transparan secara online.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {services.map((srv) => (
            <div 
              key={srv.id} 
              className={`group relative min-h-[320px] rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl border border-zinc-200/40 transition-all duration-350 ${srv.spanClass}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20 z-10"></div>

              {/* Card Header (Icon & Tag) */}
              <div className="relative z-20 flex justify-between items-center mb-6">
                <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center">
                  {srv.icon}
                </div>
                <span className="bg-white/15 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-pln-yellow">
                  {srv.tag}
                </span>
              </div>

              {/* Card Body (Title, Desc & CTA) */}
              <div className="relative z-20 mt-auto text-left">
                <h3 className="text-xl font-extrabold text-white mb-2.5 tracking-tight group-hover:text-pln-yellow transition-colors duration-250">
                  {srv.title}
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                  {srv.desc}
                </p>
                <div>
                  <a 
                    href="#kontak" 
                    className="inline-flex items-center gap-1.5 font-bold text-xs text-pln-yellow hover:text-white transition-colors duration-200 group/link"
                  >
                    {srv.action}
                    <svg xmlns="http://www.w3.org/2005/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover/link:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promo PLN Mobile App */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-zinc-900 rounded-3xl p-8 sm:p-12 lg:p-14 text-white items-center gap-10 overflow-hidden relative">
          <div className="lg:col-span-7 text-left relative z-10">
            <span className="bg-white/10 text-pln-yellow text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-6">Super App PLN</span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug mb-4">Segalanya Lebih Mudah di Aplikasi PLN Mobile</h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-medium">
              Beli token, bayar tagihan, pengaduan gangguan, pasang baru, hingga tambah daya kini bisa dilakukan di mana saja dan kapan saja. Unduh sekarang juga!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://play.google.com/store/apps/details?id=com.icon.pln123&pli=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white hover:bg-zinc-100 text-zinc-900 text-center px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all duration-200"
              >
                Google Play Store
              </a>
              <a 
                href="https://apps.apple.com/id/app/pln-mobile/id1299635030" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white hover:bg-zinc-100 text-zinc-900 text-center px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all duration-200"
              >
                Apple App Store
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center items-center relative z-10 w-full min-h-[350px] lg:min-h-[400px] mt-8 lg:mt-0 overflow-visible">
            {/* Staggered Bleeding Phone Mockups */}
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-5 lg:-mr-10 xl:-mr-16 overflow-visible w-full">
              {/* Phone 1 (Kiri) */}
              <div className="relative w-[100px] h-[200px] sm:w-[130px] sm:h-[260px] lg:w-[145px] lg:h-[290px] xl:w-[165px] xl:h-[330px] border-4 border-zinc-850 bg-zinc-950 rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-xl transform translate-y-6 hover:translate-y-2 transition-all duration-500 flex-shrink-0">
                <Image
                  src="/gambar/pln_mobile.png"
                  alt="PLN Mobile Screenshot 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100px, (max-width: 1024px) 130px, 165px"
                />
              </div>

              {/* Phone 2 (Tengah) */}
              <div className="relative w-[110px] h-[220px] sm:w-[140px] sm:h-[280px] lg:w-[155px] lg:h-[310px] xl:w-[175px] xl:h-[350px] border-4 border-zinc-850 bg-zinc-950 rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-2xl transform -translate-y-4 hover:-translate-y-8 transition-all duration-500 z-10 animate-float flex-shrink-0">
                <Image
                  src="/gambar/plnmobile2.png"
                  alt="PLN Mobile Screenshot 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 110px, (max-width: 1024px) 140px, 175px"
                />
              </div>

              {/* Phone 3 (Kanan) */}
              <div className="hidden sm:block relative w-[100px] h-[200px] sm:w-[130px] sm:h-[260px] lg:w-[145px] lg:h-[290px] xl:w-[165px] xl:h-[330px] border-4 border-zinc-850 bg-zinc-950 rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-xl transform translate-y-12 hover:translate-y-8 transition-all duration-500 flex-shrink-0">
                <Image
                  src="/gambar/plnmobile3.png"
                  alt="PLN Mobile Screenshot 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100px, (max-width: 1024px) 130px, 165px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
