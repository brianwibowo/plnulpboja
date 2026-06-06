"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 relative overflow-hidden border-t border-zinc-900">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-pln-blue via-pln-sky to-pln-yellow"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
        {/* Logo & Description Column */}
        <div className="lg:col-span-5 flex flex-col items-start text-left gap-5">
          <div className="flex items-center gap-3">
            <Image
              src="/gambar/Logo_PLN.png"
              alt="Logo PLN"
              width={26}
              height={36}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-base text-white tracking-wide leading-none">PLN ULP BOJA</span>
              <span className="text-[9px] text-zinc-500 font-semibold tracking-wider uppercase mt-1">Unit Layanan Pelanggan</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
            Menyediakan tenaga listrik secara andal, aman, dan memadai demi kenyamanan aktivitas harian Anda dan kemajuan pembangunan nasional.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="https://instagram.com/pln_id" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-pln-blue text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-350 hover:-translate-y-1" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com/cc123pln" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-pln-blue text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-350 hover:-translate-y-1" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://twitter.com/pln_123" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-pln-blue text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-350 hover:-translate-y-1" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="https://youtube.com/PLNTV" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-pln-blue text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-350 hover:-translate-y-1" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

        {/* Navigation links Column */}
        <div className="md:col-span-2 lg:col-span-2 flex flex-col items-start text-left gap-5">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Tautan Cepat</h4>
          <ul className="flex flex-col gap-3.5">
            <li><a href="#home" className="text-xs sm:text-sm font-medium text-zinc-450 hover:text-white transition-all hover:pl-1">Home</a></li>
            <li><a href="#profil" className="text-xs sm:text-sm font-medium text-zinc-450 hover:text-white transition-all hover:pl-1">Profil Unit</a></li>
            <li><a href="#layanan" className="text-xs sm:text-sm font-medium text-zinc-450 hover:text-white transition-all hover:pl-1">Layanan Listrik</a></li>
            <li><a href="#informasi" className="text-xs sm:text-sm font-medium text-zinc-450 hover:text-white transition-all hover:pl-1">Edukasi FAQ</a></li>
            <li><a href="#media" className="text-xs sm:text-sm font-medium text-zinc-450 hover:text-white transition-all hover:pl-1">Galeri & Media</a></li>
          </ul>
        </div>

        {/* Services Links Column */}
        <div className="md:col-span-2 lg:col-span-2 flex flex-col items-start text-left gap-5">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Layanan Terpopuler</h4>
          <ul className="flex flex-col gap-3.5">
            <li><a href="#layanan" className="text-xs sm:text-sm font-medium text-zinc-450 hover:text-white transition-all hover:pl-1">Pasang Baru Listrik</a></li>
            <li><a href="#layanan" className="text-xs sm:text-sm font-medium text-zinc-450 hover:text-white transition-all hover:pl-1">Tambah Daya Listrik</a></li>
            <li><a href="#layanan" className="text-xs sm:text-sm font-medium text-zinc-450 hover:text-white transition-all hover:pl-1">Pengaduan Gangguan</a></li>
            <li><a href="#layanan" className="text-xs sm:text-sm font-medium text-zinc-450 hover:text-white transition-all hover:pl-1">Ubah Data Pelanggan</a></li>
            <li><a href="#layanan" className="text-xs sm:text-sm font-medium text-zinc-450 hover:text-white transition-all hover:pl-1">Aplikasi PLN Mobile</a></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="lg:col-span-3 flex flex-col items-start text-left gap-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Kontak Darurat</h4>
          <p className="text-xs sm:text-sm text-zinc-450 leading-relaxed font-medium">
            Call Center: (Kode Area) 123 <br />
            Layanan Pengaduan PLN Mobile (24 Jam)
          </p>
          <p className="text-xs sm:text-sm text-zinc-450 leading-relaxed font-medium">
            Kantor ULP: Jl. Tampingan No. 3, Boja, Kendal, Jawa Tengah 51381
          </p>
        </div>
      </div>

      {/* Footer Bottom copyright bar */}
      <div className="border-t border-zinc-900/60 py-6 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-zinc-550 font-medium">
            &copy; {currentYear} PLN ULP Boja. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-4 text-[11px] font-medium">
            <a href="#" className="text-zinc-550 hover:text-zinc-450 transition-colors">Kebijakan Privasi</a>
            <span className="text-zinc-800">•</span>
            <a href="#" className="text-zinc-550 hover:text-zinc-450 transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
