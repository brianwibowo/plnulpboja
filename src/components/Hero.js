"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full flex items-center justify-start overflow-hidden bg-zinc-950">
      {/* Background Image spanning the entire fullscreen */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gambar/pln_naik gardu.jpg"
          alt="Petugas PLN melakukan pemeliharaan gardu listrik"
          fill
          priority
          className="object-cover object-center opacity-90 transition-transform duration-1000 scale-101"
          sizes="100vw"
        />
      </div>

      {/* Modern Gradient Overlays for readability and depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
        <div className="max-w-2xl text-left flex flex-col items-start gap-6 animate-fade-in-up">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider text-white mb-2 shadow-sm">
            <span className="w-2.5 h-2.5 bg-pln-yellow rounded-full inline-block animate-pulse"></span>
            <span>BUMN Terpercaya</span>
            <span className="text-white/30">|</span>
            <span>ULP Boja</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Menerangi Setiap Langkah, <br />
            Menggerakkan{" "}
            <span className="relative inline-block z-10 text-pln-yellow">
              Kemajuan Boja
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed max-w-xl font-medium">
            Komitmen keandalan listrik tanpa batas dari ULP Boja untuk menggerakkan roda ekonomi, mendukung pembangunan daerah, dan menerangi aktivitas harian masyarakat Kendal secara maksimal.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-4">
            <a 
              href="#layanan" 
              className="inline-flex items-center justify-center gap-2 bg-pln-blue hover:bg-pln-blue-hover text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pln-blue/20"
            >
              Layanan Kelistrikan
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </a>
            <a 
              href="#kontak" 
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white/80 hover:border-white px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-1"
            >
              Hubungi Petugas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
