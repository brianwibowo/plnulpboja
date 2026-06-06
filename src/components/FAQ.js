"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "Bagaimana cara melakukan pengajuan Pasang Baru dan Tambah Daya secara resmi?",
    answer: "Pengajuan resmi dapat dilakukan dengan sangat mudah melalui aplikasi PLN Mobile. Anda cukup mengunduh aplikasi, memilih menu Pasang Baru atau Tambah Daya, mengisi data lokasi, memilih daya yang diinginkan, dan melakukan pembayaran secara cashless via transfer bank atau e-wallet yang tersedia."
  },
  {
    question: "Apa saja berkas/dokumen yang diperlukan untuk pendaftaran?",
    answer: "Untuk pelanggan perorangan, dokumen utama yang dibutuhkan adalah Kartu Tanda Penduduk (KTP) / NIK, alamat lengkap lokasi pemasangan, dan Sertifikat Laik Operasi (SLO) untuk memastikan instalasi kabel di dalam bangunan Anda sudah aman dialiri listrik."
  },
  {
    question: "Bagaimana cara melaporkan padam listrik atau gangguan kelistrikan di area Boja?",
    answer: "Untuk pengaduan gangguan 24 jam dengan respons tercepat, laporkan secara langsung melalui menu 'Pengaduan' di aplikasi PLN Mobile. Alternatif lain, Anda dapat menghubungi Call Center PLN di nomor (0294) 571 152 (Kantor Boja) atau melalui telepon seluler ke (Kode Area) 123 (misalnya (024) 123 untuk area Kendal/Semarang sekitarnya)."
  },
  {
    question: "Apa itu SLO (Sertifikat Laik Operasi) dan kenapa itu wajib?",
    answer: "SLO adalah sertifikat resmi yang diterbitkan oleh Lembaga Inspeksi Teknik (LIT) yang menyatakan bahwa instalasi listrik di dalam bangunan pelanggan telah sesuai dengan standar keselamatan yang berlaku. Ini sangat wajib sebelum PLN melakukan penyambungan daya, demi mencegah bahaya korsleting arus pendek dan kebakaran di kemudian hari."
  },
  {
    question: "Apakah ada biaya tambahan di luar biaya resmi yang tertera di aplikasi?",
    answer: "Tidak ada. PLN berkomitmen menjaga integritas penuh dan transparansi biaya. Seluruh tagihan resmi pendaftaran dikirimkan melalui nomor registrasi resmi dan dibayarkan secara online. Petugas di lapangan tidak diperbolehkan menerima pembayaran tunai (Pungutan Liar/Tip). Tolong laporkan jika ada oknum yang meminta biaya tambahan."
  }
];

const safetyTips = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="12" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="14"></line><line x1="15" y1="22" x2="15" y2="14"></line><path d="M12 2v12"></path></svg>
    ),
    title: "Hindari Tumpukan Steker",
    desc: "Jangan memasang terlalu banyak steker pada satu stopkontak dinding untuk mencegah panas berlebih (overheat) yang dapat memicu kebakaran."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
    ),
    title: "Jauhkan Air dari Listrik",
    desc: "Jangan menyentuh sakelar, steker, atau stopkontak dengan tangan basah. Air adalah konduktor listrik yang baik dan sangat berbahaya."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12M12 12a5 5 0 1 0 0-10 5 5 0 1 0 0 10z"></path></svg>
    ),
    title: "Jarak Aman Pohon & Jaringan",
    desc: "Pastikan jarak dahan pohon minimal 3 meter dari kabel transmisi PLN di luar rumah. Segera laporkan jika ada dahan yang mulai mendekati kabel."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="informasi" className="section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Informasi Pelanggan</span>
          <h2 className="section-title">Edukasi & Pertanyaan Umum</h2>
          <p className="section-subtitle">
            Ketahui jawaban atas pertanyaan yang paling sering diajukan serta panduan keselamatan kelistrikan.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* FAQ Accordion Column */}
          <div className={styles.faqCol}>
            <h3 className={styles.colTitle}>Frequently Asked Questions (FAQ)</h3>
            <div className={styles.accordion}>
              {faqs.map((faq, idx) => {
                const isOpen = activeIndex === idx;
                return (
                  <div key={idx} className={`${styles.accordionItem} ${isOpen ? styles.activeItem : ""}`}>
                    <button 
                      className={styles.accordionHeader} 
                      onClick={() => toggleFAQ(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.questionText}>{faq.question}</span>
                      <span className={styles.accordionIcon}>{isOpen ? "−" : "+"}</span>
                    </button>
                    <div className={styles.accordionBody}>
                      <div className={styles.accordionContent}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Safety Tips Column */}
          <div className={styles.tipsCol}>
            <h3 className={styles.colTitle}>Tips Keselamatan Kelistrikan</h3>
            <div className={styles.tipsList}>
              {safetyTips.map((tip, idx) => (
                <div key={idx} className={styles.tipCard}>
                  <div className={styles.tipIconWrapper}>{tip.icon}</div>
                  <div className={styles.tipContent}>
                    <h4 className={styles.tipTitle}>{tip.title}</h4>
                    <p className={styles.tipDesc}>{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Banner info tambahan */}
            <div className={styles.infoBanner}>
              <span className={styles.infoBannerIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-blue)' }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </span>
              <p className={styles.infoBannerText}>
                <strong>Ingat 123!</strong> Simpan nomor Call Center PLN di kontak Anda untuk situasi darurat kelistrikan. Hubungi <strong>(Kode Area) 123</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
