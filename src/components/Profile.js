"use client";

import { useEffect, useState, useRef } from "react";

// Custom count-up component
function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const endValue = parseInt(end.replace(/,/g, ""), 10);
    if (start === endValue) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / endValue), 10);
    
    const timer = setInterval(() => {
      start += Math.ceil(endValue / (totalMiliseconds / incrementTime));
      if (start >= endValue) {
        clearInterval(timer);
        start = endValue;
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  const formattedCount = count.toLocaleString("id-ID");

  return <span ref={countRef}>{formattedCount}{suffix}</span>;
}

export default function Profile() {
  return (
    <>
      {/* Visi & Misi Section (White Background) */}
      <section id="profil" className="pt-12 pb-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-header mb-16 text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <span className="section-badge border border-zinc-200/60 bg-zinc-50 text-zinc-800 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block">Profil Unit</span>
            <h2 className="section-title text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">Kenali PLN ULP Boja</h2>
            <p className="section-subtitle text-zinc-500 text-sm sm:text-base leading-relaxed">
              Melayani dengan integritas tinggi untuk memastikan pasokan listrik selalu tersedia bagi Anda.
            </p>
          </div>

          {/* Vision & Mission grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Side: Visi & Moto (occupying 5 columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left gap-8">
              <div>
                <span className="text-xs font-bold text-pln-blue uppercase tracking-widest block mb-4">Visi Kami</span>
                <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 leading-tight tracking-tight">
                  “Menjadi Perusahaan Global Top 500 dan #1 Pilihan Pelanggan untuk Solusi Energi.”
                </p>
              </div>
              
              <div className="border-l-2 border-pln-yellow pl-4 py-2">
                <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block mb-1">Moto Utama</span>
                <p className="text-base font-extrabold text-pln-blue tracking-tight">"Listrik untuk Kehidupan yang Lebih Baik"</p>
              </div>
            </div>

            {/* Right Side: Misi (occupying 7 columns) */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <span className="text-xs font-bold text-pln-sky uppercase tracking-widest block mb-6">Misi Kami</span>
              <div className="flex flex-col">
                <div className="py-5 border-t border-zinc-200/80 flex gap-4 items-start">
                  <span className="font-mono text-xs font-bold text-pln-blue mt-0.5">01</span>
                  <p className="text-sm sm:text-base text-zinc-650 font-semibold leading-relaxed">
                    Menjalankan bisnis kelistrikan berorientasi pada kepuasan pelanggan, anggota perusahaan, dan pemegang saham.
                  </p>
                </div>
                <div className="py-5 border-t border-zinc-200/80 flex gap-4 items-start">
                  <span className="font-mono text-xs font-bold text-pln-blue mt-0.5">02</span>
                  <p className="text-sm sm:text-base text-zinc-650 font-semibold leading-relaxed">
                    Menjadikan tenaga listrik sebagai media peningkatan kualitas kehidupan masyarakat.
                  </p>
                </div>
                <div className="py-5 border-t border-zinc-200/80 flex gap-4 items-start">
                  <span className="font-mono text-xs font-bold text-pln-blue mt-0.5">03</span>
                  <p className="text-sm sm:text-base text-zinc-650 font-semibold leading-relaxed">
                    Mengupayakan tenaga listrik sebagai pendorong kegiatan ekonomi.
                  </p>
                </div>
                <div className="py-5 border-t border-b border-zinc-200/80 flex gap-4 items-start">
                  <span className="font-mono text-xs font-bold text-pln-blue mt-0.5">04</span>
                  <p className="text-sm sm:text-base text-zinc-650 font-semibold leading-relaxed">
                    Menjalankan usaha yang berwawasan lingkungan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maksud & Tujuan Section (Yellow Background) */}
      <section className="py-20 bg-pln-yellow relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* About ULP & Stats grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text block */}
            <div className="lg:col-span-6 text-left">
              <h3 className="text-2xl font-extrabold text-zinc-900 mb-6 tracking-tight">Maksud & Tujuan Unit</h3>
              <p className="text-sm sm:text-base text-zinc-800 leading-relaxed mb-4 font-semibold">
                Kantor PLN ULP Boja berlokasi strategis di <strong className="text-zinc-950 font-extrabold">Jalan Tampingan No. 3, Boja, Kabupaten Kendal, Jawa Tengah</strong>. Kami berdedikasi penuh dalam menyediakan tenaga listrik secara memadai bagi kepentingan umum, sekaligus mendukung penuh laju pembangunan nasional secara berkelanjutan.
              </p>
              <p className="text-sm sm:text-base text-zinc-800 leading-relaxed mb-8 font-semibold">
                Melalui program modernisasi infrastruktur dan pelayanan digital, kami terus berkomitmen menghadirkan keandalan listrik bagi pelanggan di seluruh wilayah kerja kecamatan Boja dan sekitarnya.
              </p>
              
              <div className="bg-white border border-zinc-200/60 rounded-xl p-6 shadow-sm">
                <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-wider mb-4">Cakupan Wilayah Utama</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-50 border border-zinc-150 text-zinc-600 font-bold text-xs px-3.5 py-1.5 rounded-full">Kecamatan Boja</span>
                  <span className="bg-zinc-50 border border-zinc-150 text-zinc-600 font-bold text-xs px-3.5 py-1.5 rounded-full">Kecamatan Limbangan</span>
                  <span className="bg-zinc-50 border border-zinc-150 text-zinc-600 font-bold text-xs px-3.5 py-1.5 rounded-full">Kecamatan Singorojo</span>
                  <span className="bg-zinc-50 border border-zinc-150 text-zinc-600 font-bold text-xs px-3.5 py-1.5 rounded-full">Kabupaten Kendal</span>
                </div>
              </div>
            </div>

            {/* Stats cards columns */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="bg-white border border-zinc-200/60 hover:border-zinc-300 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <span className="text-pln-blue mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </span>
                <div className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-none mb-2">
                  <Counter end="48500" suffix="+" />
                </div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Pelanggan Aktif</span>
              </div>

              <div className="bg-white border border-zinc-200/60 hover:border-zinc-300 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <span className="text-pln-blue mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><line x1="6" y1="22" x2="6" y2="17"></line><line x1="18" y1="22" x2="18" y2="17"></line><line x1="12" y1="22" x2="12" y2="17"></line></svg>
                </span>
                <div className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-none mb-2">
                  <Counter end="182" suffix="" />
                </div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Gardu Distribusi</span>
              </div>

              <div className="bg-white border border-zinc-200/60 hover:border-zinc-300 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <span className="text-pln-blue mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </span>
                <div className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-none mb-2">
                  <Counter end="99" suffix=".8%" />
                </div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Keandalan Jaringan</span>
              </div>

              <div className="bg-white border border-zinc-200/60 hover:border-zinc-300 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <span className="text-pln-blue mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </span>
                <div className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-none mb-2">
                  &lt; <Counter end="20" suffix=" Min" />
                </div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Waktu Respons Petugas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
