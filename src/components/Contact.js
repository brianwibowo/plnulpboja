"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Pasang Baru",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "Pasang Baru",
        message: ""
      });
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="kontak" className={styles.contactSection}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Hubungi Kami</span>
          <h2 className="section-title">Selalu Siap Melayani Anda</h2>
          <p className="section-subtitle">
            Kunjungi kantor kami, hubungi saluran telepon resmi, atau kirimkan pesan langsung melalui formulir kontak.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Contact Information & Map Column */}
          <div className={styles.infoCol}>
            <div className={styles.infoCardsList}>
              {/* Address */}
              <div className={styles.infoCard}>
                <div className={styles.infoIconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className={styles.infoTitle}>Alamat Kantor</h4>
                  <p className={styles.infoText}>
                    Jalan Tampingan No. 3, Boja, Kabupaten Kendal, Jawa Tengah 51381
                  </p>
                </div>
              </div>

              {/* Call center & Telp */}
              <div className={styles.infoCard}>
                <div className={styles.infoIconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 className={styles.infoTitle}>Telepon & Layanan</h4>
                  <p className={styles.infoText}>
                    Kantor ULP: (0294) 571 152 <br />
                    Call Center Nasional: (Kode Area) 123
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className={styles.infoCard}>
                <div className={styles.infoIconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <h4 className={styles.infoTitle}>Jam Operasional Kantor</h4>
                  <p className={styles.infoText}>
                    Senin - Jumat: 08.00 - 16.00 WIB <br />
                    (Layanan Gangguan Lapangan Tetap Siaga 24 Jam)
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.0435165275815!2d110.27641217584144!3d-7.1209675698305765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70891461ffcb51%3A0xe2a8cb40f1a9b2d8!2sPLN%20ULP%20Boja!5e0!3m2!1sid!2sid!4v1717696349000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi PLN ULP Boja"
                className={styles.mapIframe}
              ></iframe>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h3 className={styles.formHeading}>Kirim Pesan Langsung</h3>
              <p className={styles.formSub}>Ada pertanyaan atau keluhan administratif? Tim kami akan segera merespons Anda.</p>
              
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    className={styles.input}
                  />
                </div>

                <div className={styles.rowInputs}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Nomor HP/WA</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="0812xxxx"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Kategori Pertanyaan</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="Pasang Baru">Pasang Baru</option>
                    <option value="Tambah Daya">Tambah Daya</option>
                    <option value="Pengaduan Gangguan">Pengaduan Gangguan</option>
                    <option value="Keuangan & Pembayaran">Keuangan & Pembayaran</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Pesan Anda</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan lengkap Anda di sini..."
                    rows="5"
                    className={styles.textarea}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </button>

                {submitSuccess && (
                  <div className={styles.successMessage}>
                    🎉 Terima kasih! Pesan Anda telah terkirim. Tim kami akan menghubungi Anda kembali secepatnya.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
