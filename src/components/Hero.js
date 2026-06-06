"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        {/* Left Content Column */}
        <div className={`${styles.heroContent} animate-fade-in-up`}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            PLN Unit Layanan Pelanggan Boja
          </div>
          
          <h1 className={styles.headline}>
            Menerangi Setiap Langkah, <br />
            <span className={styles.highlightText}>Menggerakkan Kemajuan Boja</span>
          </h1>
          
          <p className={styles.description}>
            Kami berkomitmen menyediakan pasokan listrik yang andal, aman, dan berkelanjutan untuk mendorong pertumbuhan ekonomi dan meningkatkan kualitas hidup masyarakat Boja dan sekitarnya.
          </p>
          
          <div className={styles.ctaContainer}>
            <a href="#layanan" className={styles.primaryCta}>
              Jelajahi Layanan
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#kontak" className={styles.secondaryCta}>
              Kontak Darurat
            </a>
          </div>

          <div className={styles.heroFeatures}>
            <div className={styles.heroFeatureItem}>
              <span className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </span>
              <span className={styles.featureText}>Layanan Cepat 24 Jam</span>
            </div>
            <div className={styles.heroFeatureItem}>
              <span className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </span>
              <span className={styles.featureText}>Prioritas Keselamatan</span>
            </div>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className={styles.heroVisual}>
          <div className={styles.imageCardWrapper}>
            <div className={styles.imageCard}>
              <Image
                src="/gambar/pln_naik tower.png"
                alt="Petugas PLN memelihara jaringan transmisi"
                fill
                priority
                className={styles.heroImage}
                sizes="(max-width: 768px) 100vw, 550px"
              />
              <div className={styles.imageOverlayGradient}></div>
              
              {/* Floating Glassmorphic Stats Info */}
              <div className={`${styles.floatingCard} ${styles.float1}`}>
                <div className={styles.floatingIconBg}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <div>
                  <span className={styles.floatingTitle}>Status Jaringan</span>
                  <span className={styles.floatingVal}>Optimal & Stabil</span>
                </div>
              </div>

              <div className={`${styles.floatingCard} ${styles.float2}`}>
                <div className={styles.floatingIconBgYellow}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <span className={styles.floatingTitle}>Komitmen Kami</span>
                  <span className={styles.floatingVal}>Listrik Aman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
