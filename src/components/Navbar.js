"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${isOpen ? styles.menuOpen : ""}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logoContainer} onClick={closeMenu}>
          <div className={styles.logoWrapper}>
            <Image
              src="/gambar/Logo_PLN.png"
              alt="Logo PLN"
              width={36}
              height={50}
              priority
              className={styles.logo}
            />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>PLN ULP BOJA</span>
            <span className={styles.logoSubTitle}>Listrik untuk Kehidupan yang Lebih Baik</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#profil" className={styles.navLink}>Profil</a>
          <a href="#layanan" className={styles.navLink}>Layanan</a>
          <a href="#informasi" className={styles.navLink}>Informasi</a>
          <a href="#media" className={styles.navLink}>Media</a>
          <a href="#kontak" className={styles.contactBtn}>Hubungi Kami</a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileLinks}>
          <a href="#home" className={styles.mobileLink} onClick={closeMenu}>Home</a>
          <a href="#profil" className={styles.mobileLink} onClick={closeMenu}>Profil</a>
          <a href="#layanan" className={styles.mobileLink} onClick={closeMenu}>Layanan</a>
          <a href="#informasi" className={styles.mobileLink} onClick={closeMenu}>Informasi</a>
          <a href="#media" className={styles.mobileLink} onClick={closeMenu}>Media</a>
          <a href="#kontak" className={styles.mobileContactBtn} onClick={closeMenu}>Hubungi Kami</a>
        </div>
      </div>
    </nav>
  );
}
