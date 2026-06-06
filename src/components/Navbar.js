"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
      isScrolled 
        ? "h-16 bg-white/80 backdrop-blur-md border-b border-zinc-200/50 shadow-sm" 
        : "h-20 bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 decoration-transparent">
          <div className={`transition-transform duration-300 ${isScrolled ? "scale-90" : "scale-100"}`}>
            <Image
              src="/gambar/Logo_PLN.png"
              alt="Logo PLN"
              width={30}
              height={42}
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-pln-blue tracking-wide leading-none">PLN ULP BOJA</span>
            <span className="text-[10px] text-zinc-400 font-semibold tracking-wider uppercase mt-1">Layanan Handal & Terpercaya</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-zinc-600 hover:text-pln-blue font-semibold text-sm transition-colors duration-200">Home</a>
          <a href="#profil" className="text-zinc-600 hover:text-pln-blue font-semibold text-sm transition-colors duration-200">Profil</a>
          <a href="#layanan" className="text-zinc-600 hover:text-pln-blue font-semibold text-sm transition-colors duration-200">Layanan</a>
          <a href="#informasi" className="text-zinc-600 hover:text-pln-blue font-semibold text-sm transition-colors duration-200">Informasi</a>
          <a href="#media" className="text-zinc-600 hover:text-pln-blue font-semibold text-sm transition-colors duration-200">Media</a>
          <a 
            href="#kontak" 
            className="bg-pln-blue hover:bg-pln-blue-hover text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-md shadow-pln-blue/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden flex flex-col justify-between w-6 h-4 bg-transparent border-none cursor-pointer z-50" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-full h-[2px] bg-zinc-800 rounded-full transition-transform duration-300 ${isOpen ? "translate-y-[6.5px] rotate-45" : ""}`}></span>
          <span className={`w-full h-[2px] bg-zinc-800 rounded-full transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-full h-[2px] bg-zinc-800 rounded-full transition-transform duration-300 ${isOpen ? "-translate-y-[7.5px] -rotate-45" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 w-full h-screen bg-white transition-all duration-300 z-40 px-6 pt-28 flex flex-col gap-6 md:hidden ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}>
        <div className="flex flex-col gap-6">
          <a href="#home" className="text-zinc-800 hover:text-pln-blue font-bold text-xl transition-all" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#profil" className="text-zinc-800 hover:text-pln-blue font-bold text-xl transition-all" onClick={() => setIsOpen(false)}>Profil</a>
          <a href="#layanan" className="text-zinc-800 hover:text-pln-blue font-bold text-xl transition-all" onClick={() => setIsOpen(false)}>Layanan</a>
          <a href="#informasi" className="text-zinc-800 hover:text-pln-blue font-bold text-xl transition-all" onClick={() => setIsOpen(false)}>Informasi</a>
          <a href="#media" className="text-zinc-800 hover:text-pln-blue font-bold text-xl transition-all" onClick={() => setIsOpen(false)}>Media</a>
          <a 
            href="#kontak" 
            className="bg-pln-blue hover:bg-pln-blue-hover text-white py-3.5 rounded-2xl font-bold text-base text-center shadow-lg shadow-pln-blue/20 mt-4" 
            onClick={() => setIsOpen(false)}
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </nav>
  );
}
