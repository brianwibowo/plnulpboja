"use client";

import styles from "./QuickAccess.module.css";

const services = [
  {
    icon: "⚡",
    title: "Pasang Baru",
    desc: "Pengajuan pemasangan sambungan baru listrik secara online dengan cepat.",
    link: "#layanan",
    color: "rgba(0, 91, 172, 0.06)"
  },
  {
    icon: "🔋",
    title: "Tambah Daya",
    desc: "Ubah daya listrik rumah atau industri Anda menyesuaikan kebutuhan energi.",
    link: "#layanan",
    color: "rgba(0, 174, 239, 0.06)"
  },
  {
    icon: "📱",
    title: "PLN Mobile",
    desc: "Aplikasi seluler terintegrasi untuk segala urusan kelistrikan dalam satu genggaman.",
    link: "#layanan",
    color: "rgba(255, 209, 0, 0.08)"
  },
  {
    icon: "📞",
    title: "Pengaduan",
    desc: "Hubungi keluhan gangguan listrik 24 jam dengan penanganan cepat di lapangan.",
    link: "#kontak",
    color: "rgba(239, 68, 68, 0.06)"
  },
  {
    icon: "📍",
    title: "Area Layanan",
    desc: "Cakupan wilayah operasional dan detail kantor ULP Boja Kendal.",
    link: "#profil",
    color: "rgba(16, 185, 129, 0.06)"
  },
  {
    icon: "📢",
    title: "Info Pelanggan",
    desc: "Informasi pemeliharaan berkala, edukasi hemat energi, dan pengumuman terbaru.",
    link: "#informasi",
    color: "rgba(139, 92, 246, 0.06)"
  }
];

export default function QuickAccess() {
  return (
    <section className={styles.quickAccessSection}>
      <div className="container">
        <div className={styles.gridContainer}>
          {services.map((item, index) => (
            <a 
              href={item.link} 
              key={index} 
              className={styles.card}
              style={{ "--card-glow": item.color }}
            >
              <div className={styles.iconBg}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
              <div className={styles.cardArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
