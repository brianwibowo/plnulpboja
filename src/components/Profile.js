"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Profile.module.css";

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

  // Format count back to locale string if needed
  const formattedCount = count.toLocaleString("id-ID");

  return <span ref={countRef}>{formattedCount}{suffix}</span>;
}

export default function Profile() {
  return (
    <section id="profil" className="section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Profil Unit</span>
          <h2 className="section-title">Kenali PLN ULP Boja</h2>
          <p className="section-subtitle">
            Melayani dengan integritas tinggi untuk memastikan pasokan listrik selalu tersedia bagi Anda.
          </p>
        </div>

        {/* Vision & Mission grid */}
        <div className={styles.visionMissionGrid}>
          {/* Visi */}
          <div className={styles.vmCard}>
            <div className={styles.vmBadge}>Visi Kami</div>
            <p className={styles.visionText}>
              "Menjadi Perusahaan Global Top 500 dan #1 Pilihan Pelanggan untuk Solusi Energi."
            </p>
            <div className={styles.motoWrapper}>
              <span className={styles.motoLabel}>Moto PLN</span>
              <p className={styles.motoText}>"Listrik untuk Kehidupan yang Lebih Baik"</p>
            </div>
          </div>

          {/* Misi */}
          <div className={styles.vmCard}>
            <div className={styles.vmBadge}>Misi Kami</div>
            <ul className={styles.misiList}>
              <li>
                <span className={styles.misiNum}>1</span>
                <p>Menjalankan bisnis kelistrikan berorientasi pada kepuasan pelanggan, anggota perusahaan, dan pemegang saham.</p>
              </li>
              <li>
                <span className={styles.misiNum}>2</span>
                <p>Menjadikan tenaga listrik sebagai media peningkatan kualitas kehidupan masyarakat.</p>
              </li>
              <li>
                <span className={styles.misiNum}>3</span>
                <p>Mengupayakan tenaga listrik sebagai pendorong kegiatan ekonomi.</p>
              </li>
              <li>
                <span className={styles.misiNum}>4</span>
                <p>Menjalankan usaha yang berwawasan lingkungan.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* About ULP & Stats grid */}
        <div className={styles.aboutGrid}>
          {/* Text block */}
          <div className={styles.aboutTextCol}>
            <h3 className={styles.subTitle}>Maksud & Tujuan Unit</h3>
            <p className={styles.aboutPara}>
              Kantor PLN ULP Boja berlokasi strategis di **Jalan Tampingan No. 3, Boja, Kabupaten Kendal, Jawa Tengah**. Kami berdedikasi penuh dalam menyediakan tenaga listrik secara memadai bagi kepentingan umum, sekaligus mendukung penuh laju pembangunan nasional secara berkelanjutan.
            </p>
            <p className={styles.aboutPara}>
              Melalui program modernisasi infrastruktur dan optimalisasi pelayanan digital (seperti PLN Mobile), kami terus berbenah demi menghadirkan layanan kelistrikan yang bersih, mudah diakses, dan responsif bagi seluruh pelanggan di wilayah kecamatan Boja dan sekitarnya.
            </p>
            
            <div className={styles.areaCoverage}>
              <h4 className={styles.coverageTitle}>Cakupan Wilayah Utama</h4>
              <div className={styles.tagsContainer}>
                <span className={styles.tag}>Kecamatan Boja</span>
                <span className={styles.tag}>Kecamatan Limbangan</span>
                <span className={styles.tag}>Kecamatan Singorojo</span>
                <span className={styles.tag}>Kabupaten Kendal</span>
              </div>
            </div>
          </div>

          {/* Stats cards columns */}
          <div className={styles.statsCol}>
            <div className={styles.statCard}>
              <span className={styles.statIcon}>👥</span>
              <div className={styles.statVal}>
                <Counter end="48500" suffix="+" />
              </div>
              <span className={styles.statLabel}>Pelanggan Aktif</span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statIcon}>🔌</span>
              <div className={styles.statVal}>
                <Counter end="182" suffix="" />
              </div>
              <span className={styles.statLabel}>Gardu Distribusi</span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statIcon}>📈</span>
              <div className={styles.statVal}>
                <Counter end="99" suffix=".8%" />
              </div>
              <span className={styles.statLabel}>Keandalan Jaringan (SAIDI)</span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statIcon}>⏱️</span>
              <div className={styles.statVal}>
                &lt; <Counter end="20" suffix=" Min" />
              </div>
              <span className={styles.statLabel}>Waktu Respons Petugas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
