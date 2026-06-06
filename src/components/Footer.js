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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com/cc123pln" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://twitter.com/pln_123" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="https://youtube.com/PLNTV" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
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
            Call Center: (Kode Area) 123 <br />
            Layanan Pengaduan PLN Mobile (24 Jam)
          </p>
          <p className={styles.contactInfo}>
            Kantor ULP: Jl. Tampingan No. 3, Boja, Kendal, Jawa Tengah 51381
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
