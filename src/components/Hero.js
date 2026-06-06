"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-[85vh] lg:min-h-[92vh] flex items-center pt-28 pb-16 bg-white relative overflow-hidden">
      {/* Subtle modern abstract background elements (Apple style halo) */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-pln-blue/5 via-pln-sky/5 to-pln-yellow/10 blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-zinc-50 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left animate-fade-in-up">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2.5 bg-zinc-50 border border-zinc-150 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider text-zinc-800 mb-6 shadow-sm shadow-zinc-100">
            <span className="w-2.5 h-2.5 bg-pln-sky rounded-full inline-block animate-ping"></span>
            <span className="text-pln-blue">BUMN Terpercaya</span>
            <span className="text-zinc-350">|</span>
            <span className="text-zinc-650">ULP Boja</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] lg:leading-[1.12] font-extrabold tracking-tight text-zinc-900 mb-6">
            Menerangi Setiap Langkah, <br />
            <span className="relative inline-block z-10">
              Menggerakkan
              <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-[10px] sm:h-[12px] bg-pln-yellow/45 z-[-1] rounded-full"></span>
            </span>{" "}
            <span className="text-pln-blue">Kemajuan Boja</span>
          </h1>
          
          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-500 leading-relaxed max-w-xl mb-8 font-medium">
            Komitmen keandalan listrik tanpa batas dari ULP Boja untuk menggerakkan roda ekonomi, mendukung pembangunan daerah, dan menerangi aktivitas harian masyarakat Kendal secara maksimal.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            <a 
              href="#layanan" 
              className="inline-flex items-center justify-center gap-2 bg-pln-blue hover:bg-pln-blue-hover text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pln-blue/20"
            >
              Layanan Kelistrikan
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </a>
            <a 
              href="#kontak" 
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 text-pln-blue border-2 border-pln-blue/80 hover:border-pln-blue px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-1"
            >
              Hubungi Petugas
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-4 border-t border-zinc-100 pt-6 w-full">
            <div className="flex items-center gap-3">
              <div className="text-pln-blue bg-pln-blue/5 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className="text-left">
                <span className="block text-[9px] uppercase tracking-wider text-zinc-400 font-bold leading-none mb-0.5">Layanan</span>
                <span className="block text-xs font-bold text-zinc-700">Reaksi Cepat 24 Jam</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-pln-blue bg-pln-blue/5 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div className="text-left">
                <span className="block text-[9px] uppercase tracking-wider text-zinc-400 font-bold leading-none mb-0.5">Prioritas</span>
                <span className="block text-xs font-bold text-zinc-700">Aman & Sesuai SLO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="lg:col-span-5 flex items-center justify-center w-full">
          <div className="relative w-full max-w-[440px] aspect-square">
            {/* Visual background abstract circular border grid */}
            <div className="absolute inset-[-15px] border border-dashed border-zinc-200 rounded-full pointer-events-none -z-10 animate-[spin_60s_linear_infinite]"></div>

            <div className="w-full h-full relative rounded-[28px] overflow-hidden border-2 border-white shadow-2xl shadow-zinc-200/50">
              <Image
                src="/gambar/pln_naik tower.png"
                alt="Petugas PLN memelihara jaringan transmisi"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-103"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              {/* Apple-style clean gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Floating Card 1: Network Status */}
              <div className="absolute bottom-6 left-[-16px] flex items-center gap-3.5 bg-white/95 backdrop-blur-md border border-zinc-200/60 p-4 rounded-2xl shadow-xl shadow-zinc-900/5">
                <div className="bg-pln-blue/5 text-pln-blue w-9 h-9 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-pln-blue"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <div className="text-left">
                  <span className="block text-[9px] text-zinc-400 font-bold uppercase tracking-wider mb-0.5">Status Sistem</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-pulse"></span>
                    <span className="text-xs font-bold text-zinc-800">Aktif & Stabil</span>
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Response metrics */}
              <div className="absolute top-8 right-[-16px] flex items-center gap-3.5 bg-white/95 backdrop-blur-md border border-zinc-200/60 p-4 rounded-2xl shadow-xl shadow-zinc-900/5">
                <div className="bg-pln-yellow/10 text-pln-blue w-9 h-9 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-pln-blue"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div className="text-left">
                  <span className="block text-[9px] text-zinc-400 font-bold uppercase tracking-wider mb-0.5">Kecepatan Respons</span>
                  <span className="block text-xs font-bold text-zinc-800">&lt; 20 Menit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
