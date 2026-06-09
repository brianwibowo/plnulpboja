"use client";

import { useState } from "react";
import Image from "next/image";

export default function QuickAccess() {
  const [activeCard, setActiveCard] = useState(null); // 'info' | 'pengaduan' | 'area' | null

  const cards = [
    {
      id: "info",
      title: "Info Layanan",
      image: "/gambar/pln_warga.png",
      spanClass: "md:col-span-6 md:row-span-2 min-h-[380px] md:min-h-[440px]",
      descTitle: "Informasi Pelayanan Kelistrikan",
      desc: "Dapatkan info lengkap mengenai pemasangan sambungan baru, penambahan daya, tarif listrik resmi, dan program promo kelistrikan nasional. Semua proses administrasi dapat diajukan dengan mudah tanpa biaya tambahan melalui aplikasi PLN Mobile.",
      actionText: "Lihat Portal Layanan",
      actionLink: "#layanan"
    },
    {
      id: "pengaduan",
      title: "Pengaduan Gangguan",
      image: "/gambar/pln_mobil keliling.jpg",
      spanClass: "md:col-span-6 min-h-[210px] md:min-h-[208px]",
      descTitle: "Layanan Siaga 24 Jam",
      desc: "Tim teknis kami siap menangani laporan padam listrik, kabel putus, trafo meledak, atau bahaya kelistrikan lainnya secara cepat melalui PLN Mobile atau Call Center 123.",
      actionText: "Laporkan Gangguan",
      actionLink: "#kontak"
    },
    {
      id: "area",
      title: "Area Layanan",
      image: "/gambar/pln_pelayanan_kantor.png",
      spanClass: "md:col-span-6 min-h-[210px] md:min-h-[208px]",
      descTitle: "Wilayah Operasional Boja",
      desc: "Meng-cover keandalan listrik untuk wilayah Kecamatan Boja, Singorojo, dan Limbangan guna mendukung aktivitas harian warga serta industri daerah.",
      actionText: "Lihat Detail Wilayah",
      actionLink: "#profil"
    }
  ];

  return (
    <section className="pt-24 pb-12 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Section Header & text */}
        <div className="lg:col-span-4 text-left flex flex-col items-start gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-pln-blue bg-zinc-50 border border-zinc-150 px-3 py-1.5 rounded-full inline-block">Portal Utama</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Akses Layanan Terpenting Kami
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-medium">
            PLN ULP Boja menyediakan portal informasi terpadu. Klik pada kartu layanan untuk membaca detail penjelasan atau accessing menu bantuan langsung.
          </p>
        </div>

        {/* Right column: Bento Grid cards */}
        <div className="lg:col-span-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
            {cards.map((card) => {
              const isActive = activeCard === card.id;
              return (
                <div
                  key={card.id}
                  onClick={() => setActiveCard(card.id)}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl border border-zinc-200/40 transition-all duration-350 ${card.spanClass}`}
                >
                  {/* Background Image */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103 -z-20"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />

                  {/* Gradient Mask Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent -z-10 transition-opacity duration-300"></div>

                  {/* Card Title & Arrow Icon at bottom */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10 transition-all duration-300">
                    <h3 className="font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none group-hover:text-pln-yellow transition-colors duration-250">
                      {card.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-pln-blue group-hover:border-pln-blue group-hover:scale-105">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  </div>

                  {/* Click Overlay (Penjelasan Singkat) */}
                  <div 
                    className={`absolute inset-0 bg-white/98 backdrop-blur-md p-5 sm:p-6 flex flex-col justify-between text-left transition-all duration-500 z-20 ${
                      isActive 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-full pointer-events-none"
                    }`}
                    onClick={(e) => {
                      // Prevent parent click triggering close
                      e.stopPropagation();
                    }}
                  >
                    <div>
                      {/* Header overlay */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-bold text-pln-blue uppercase tracking-widest bg-pln-blue/5 border border-pln-blue/10 px-3 py-1 rounded-full">{card.title}</span>
                        <button 
                          onClick={() => setActiveCard(null)}
                          className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-800 flex items-center justify-center transition-colors border-none outline-none cursor-pointer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                      </div>
                      <h4 className="text-base sm:text-lg font-extrabold text-zinc-900 mb-2 tracking-tight">{card.descTitle}</h4>
                      <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-medium">{card.desc}</p>
                    </div>

                    <div className="mt-4">
                      <a 
                        href={card.actionLink}
                        onClick={() => setActiveCard(null)}
                        className="inline-flex items-center justify-center gap-1.5 bg-pln-blue hover:bg-pln-blue-hover text-white text-xs font-bold px-5 py-3 rounded-full transition-all duration-250 shadow-sm"
                      >
                        {card.actionText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
