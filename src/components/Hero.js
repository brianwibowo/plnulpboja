"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      {/* Background blobs for glowing abstract aesthetic */}
      <div className={styles.glowBlob1}></div>
      <div className={styles.glowBlob2}></div>

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
              <span className={styles.featureIcon}>⚡</span>
              <span className={styles.featureText}>Layanan Cepat 24 Jam</span>
            </div>
            <div className={styles.heroFeatureItem}>
              <span className={styles.featureIcon}>🛡️</span>
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
                  <span className={styles.yellowSpark}>⚡</span>
                </div>
                <div>
                  <span className={styles.floatingTitle}>Komitmen Kami</span>
                  <span className={styles.floatingVal}>Listrik Aman</span>
                </div>
              </div>
            </div>
            {/* Visual background decorations */}
            <div className={styles.visualRing}></div>
            <div className={styles.visualGridPattern}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
