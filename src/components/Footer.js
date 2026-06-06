"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Logo & Description Column */}
        <div className={styles.brandCol}>
          <div className={styles.logoWrapper}>
            <Image
              src="/gambar/Logo_PLN.png"
              alt="Logo PLN"
              width={32}
              height={44}
              className={styles.logo}
            />
            <div className={styles.logoText}>
              <span className={styles.brandName}>PLN ULP BOJA</span>
              <span className={styles.brandSub}>Unit Layanan Pelanggan</span>
            </div>
          </div>
          <p className={styles.brandDesc}>
            Menyediakan tenaga listrik secara andal, aman, dan memadai demi kenyamanan aktivitas harian Anda dan kemajuan pembangunan nasional.
          </p>
          <div className={styles.socials}>
            <a href="https://instagram.com/pln_id" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              📸
            </a>
            <a href="https://facebook.com/cc123pln" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              📘
            </a>
            <a href="https://twitter.com/pln_123" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
              🐦
            </a>
            <a href="https://youtube.com/PLNTV" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
              📺
            </a>
          </div>
        </div>

        {/* Navigation links Column */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Tautan Cepat</h4>
          <ul className={styles.linksList}>
            <li><a href="#home">Home</a></li>
            <li><a href="#profil">Profil Unit</a></li>
            <li><a href="#layanan">Layanan Kelistrikan</a></li>
            <li><a href="#informasi">Edukasi FAQ</a></li>
            <li><a href="#media">Galeri & Media</a></li>
          </ul>
        </div>

        {/* Services Links Column */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Layanan Terpopuler</h4>
          <ul className={styles.linksList}>
            <li><a href="#layanan">Pasang Baru Listrik</a></li>
            <li><a href="#layanan">Tambah Daya Listrik</a></li>
            <li><a href="#layanan">Pengaduan Gangguan</a></li>
            <li><a href="#layanan">Perubahan Data Pelanggan</a></li>
            <li><a href="#layanan">Aplikasi PLN Mobile</a></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Kontak Darurat</h4>
          <p className={styles.contactInfo}>
            📞 (Kode Area) 123 <br />
            📱 Layanan Pengaduan PLN Mobile (24 Jam)
          </p>
          <p className={styles.contactInfo}>
            📍 Jl. Tampingan No. 3, Boja, Kendal, Jawa Tengah 51381
          </p>
        </div>
      </div>

      {/* Footer Bottom copyright bar */}
      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContainer}`}>
          <p className={styles.copyright}>
            &copy; {currentYear} PLN ULP Boja. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#">Kebijakan Privasi</a>
            <span className={styles.divider}>•</span>
            <a href="#">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
