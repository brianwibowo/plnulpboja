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
        ? "h-16 bg-white/90 backdrop-blur-md border-b border-zinc-200/50 shadow-sm" 
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
            <span className={`font-extrabold text-lg tracking-wide leading-none transition-colors duration-300 ${
              isScrolled ? "text-pln-blue" : "text-white"
            }`}>PLN ULP BOJA</span>
            <span className={`text-[10px] font-semibold tracking-wider uppercase mt-1 transition-colors duration-300 ${
              isScrolled ? "text-zinc-400" : "text-white/60"
            }`}>Layanan Handal & Terpercaya</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className={`font-semibold text-sm transition-colors duration-200 ${
            isScrolled ? "text-zinc-600 hover:text-pln-blue" : "text-white/80 hover:text-white"
          }`}>Home</a>
          <a href="#profil" className={`font-semibold text-sm transition-colors duration-200 ${
            isScrolled ? "text-zinc-600 hover:text-pln-blue" : "text-white/80 hover:text-white"
          }`}>Profil</a>
          <a href="#layanan" className={`font-semibold text-sm transition-colors duration-200 ${
            isScrolled ? "text-zinc-600 hover:text-pln-blue" : "text-white/80 hover:text-white"
          }`}>Layanan</a>
          <a href="#informasi" className={`font-semibold text-sm transition-colors duration-200 ${
            isScrolled ? "text-zinc-600 hover:text-pln-blue" : "text-white/80 hover:text-white"
          }`}>Informasi</a>
          <a href="#media" className={`font-semibold text-sm transition-colors duration-200 ${
            isScrolled ? "text-zinc-600 hover:text-pln-blue" : "text-white/80 hover:text-white"
          }`}>Media</a>
          <a 
            href="#kontak" 
            className={`px-5 py-2.5 rounded-full font-bold text-xs shadow-md transition-all duration-300 hover:-translate-y-0.5 ${
              isScrolled 
                ? "bg-pln-blue hover:bg-pln-blue-hover text-white shadow-pln-blue/10" 
                : "bg-white hover:bg-zinc-50 text-pln-blue shadow-white/5"
            }`}
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
          <span className={`w-full h-[2px] rounded-full transition-all duration-300 ${
            isScrolled ? "bg-zinc-800" : "bg-white"
          } ${isOpen ? "translate-y-[6.5px] rotate-45" : ""}`}></span>
          <span className={`w-full h-[2px] rounded-full transition-opacity duration-200 ${
            isScrolled ? "bg-zinc-800" : "bg-white"
          } ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-full h-[2px] rounded-full transition-all duration-300 ${
            isScrolled ? "bg-zinc-800" : "bg-white"
          } ${isOpen ? "-translate-y-[7.5px] -rotate-45" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-xs z-30 md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Navigation Drawer (Transparan/Glassmorphism, Setengah Layar, Tombol Silang) */}
      <div className={`fixed top-0 right-0 h-screen w-[280px] bg-white/90 backdrop-blur-xl border-l border-zinc-200/50 shadow-2xl z-45 transition-transform duration-300 ease-in-out px-8 pt-24 flex flex-col md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col gap-6 text-left mt-4">
          <a href="#home" className="text-zinc-800 hover:text-pln-blue font-bold text-lg transition-colors duration-200" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#profil" className="text-zinc-800 hover:text-pln-blue font-bold text-lg transition-colors duration-200" onClick={() => setIsOpen(false)}>Profil</a>
          <a href="#layanan" className="text-zinc-800 hover:text-pln-blue font-bold text-lg transition-colors duration-200" onClick={() => setIsOpen(false)}>Layanan</a>
          <a href="#informasi" className="text-zinc-800 hover:text-pln-blue font-bold text-lg transition-colors duration-200" onClick={() => setIsOpen(false)}>Informasi</a>
          <a href="#media" className="text-zinc-800 hover:text-pln-blue font-bold text-lg transition-colors duration-200" onClick={() => setIsOpen(false)}>Media</a>
          <a 
            href="#kontak" 
            className="bg-pln-blue hover:bg-pln-blue-hover text-white py-3 px-5 rounded-full font-bold text-sm text-center shadow-md shadow-pln-blue/15 mt-6 transition-all duration-200 hover:-translate-y-0.5" 
            onClick={() => setIsOpen(false)}
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </nav>
  );
}
