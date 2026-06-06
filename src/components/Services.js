"use client";

import styles from "./Services.module.css";

const services = [
  {
    id: "pasang-baru",
    title: "Pasang Baru",
    tag: "Populer",
    desc: "Ajukan penyambungan baru untuk rumah tangga, bisnis, maupun industri. Proses mudah dan terintegrasi dengan penghitungan biaya transparan.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    ),
    class: styles.span2,
    action: "Mulai Pengajuan"
  },
  {
    id: "tambah-daya",
    title: "Tambah Daya",
    tag: "Layanan",
    desc: "Kebutuhan listrik meningkat? Naikkan daya listrik Anda secara aman dengan prosedur resmi.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    ),
    class: styles.span1,
    action: "Naik Daya"
  },
  {
    id: "migrasi-tarif",
    title: "Migrasi Tarif",
    tag: "Layanan",
    desc: "Perubahan golongan tarif listrik (misalnya dari prabayar ke pascabayar atau sebaliknya).",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3L21 7L17 11M7 21L3 17L7 13"></path><path d="M3 17H21M21 7H3"></path></svg>
    ),
    class: styles.span1,
    action: "Migrasi"
  },
  {
    id: "pengaduan-gangguan",
    title: "Pengaduan Gangguan",
    tag: "Darurat 24 Jam",
    desc: "Laporan padam listrik, korsleting, atau bahaya kelistrikan lainnya. Tim teknis reaksi cepat kami siap meluncur ke lokasi Anda kapan saja.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    ),
    class: styles.span2,
    action: "Laporkan Gangguan"
  },
  {
    id: "perubahan-data",
    title: "Perubahan Data",
    tag: "Administrasi",
    desc: "Perubahan nama pelanggan, alamat tarif, atau koreksi data administratif kepemilikan kWh meter.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
    ),
    class: styles.span1,
    action: "Ubah Data"
  },
  {
    id: "konsultasi",
    title: "Konsultasi Kelistrikan",
    tag: "Konsultasi",
    desc: "Dapatkan saran teknis dan rekomendasi instalasi kelistrikan yang aman, hemat, dan sesuai standar SLO (Sertifikat Laik Operasi) langsung dari ahlinya.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    ),
    class: styles.span2,
    action: "Konsultasi"
  }
];

export default function Services() {
  return (
    <section id="layanan" className={styles.servicesSection}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portal Layanan</span>
          <h2 className="section-title">Solusi Kelistrikan Terintegrasi</h2>
          <p className="section-subtitle">
            Segala pengajuan dapat Anda lakukan dengan mudah dan transparan secara online.
          </p>
        </div>

        {/* Bento Grid */}
        <div className={styles.bentoGrid}>
          {services.map((srv) => (
            <div key={srv.id} className={`${styles.bentoCard} ${srv.class}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{srv.icon}</div>
                <span className={styles.cardTag}>{srv.tag}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{srv.title}</h3>
                <p className={styles.cardDesc}>{srv.desc}</p>
              </div>
              <div className={styles.cardFooter}>
                <a href="#kontak" className={styles.actionBtn}>
                  {srv.action}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.btnArrow}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Promo PLN Mobile App */}
        <div className={styles.plnMobilePromo}>
          <div className={styles.promoContent}>
            <span className={styles.promoBadge}>Super App PLN</span>
            <h3 className={styles.promoTitle}>Segalanya Lebih Mudah di Aplikasi PLN Mobile</h3>
            <p className={styles.promoDesc}>
              Beli token, bayar tagihan, pengaduan gangguan, pasang baru, hingga tambah daya kini bisa dilakukan di mana saja dan kapan saja. Unduh sekarang juga!
            </p>
            <div className={styles.downloadButtons}>
              <a href="https://play.google.com/store/apps/details?id=co.id.pln.singlewindow&hl=id" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                Google Play Store
              </a>
              <a href="https://apps.apple.com/id/app/pln-mobile/id1299635030" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                Apple App Store
              </a>
            </div>
          </div>
          <div className={styles.promoVisual}>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneSpeaker}></div>
                <div className={styles.phoneLogo}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-blue)' }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <div className={styles.phoneTitle}>PLN Mobile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
