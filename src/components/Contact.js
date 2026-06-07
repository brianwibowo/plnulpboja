"use client";

import { useState } from "react";

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
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-header mb-16 text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
          <span className="section-badge border border-zinc-200/60 bg-zinc-50 text-zinc-800 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block">Hubungi Kami</span>
          <h2 className="section-title text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">Selalu Siap Melayani Anda</h2>
          <p className="section-subtitle text-zinc-500 text-sm sm:text-base leading-relaxed">
            Kunjungi kantor kami, hubungi saluran telepon resmi, atau kirimkan pesan langsung melalui formulir kontak.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Information & Map Column */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="bg-zinc-50/50 border border-zinc-200/60 rounded-2xl p-6 flex gap-5 items-start shadow-sm hover:border-zinc-300 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 text-pln-blue flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm text-zinc-900 mb-1">Alamat Kantor</h4>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-medium">
                    Jalan Tampingan No. 3, Boja, Kabupaten Kendal, Jawa Tengah 51381
                  </p>
                </div>
              </div>

              {/* Call center & Telp */}
              <div className="bg-zinc-50/50 border border-zinc-200/60 rounded-2xl p-6 flex gap-5 items-start shadow-sm hover:border-zinc-300 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 text-pln-blue flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm text-zinc-900 mb-1">Telepon & Layanan</h4>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-medium">
                    Kantor ULP: (0294) 571 152 <br />
                    Call Center Nasional: (Kode Area) 123
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-zinc-50/50 border border-zinc-200/60 rounded-2xl p-6 flex gap-5 items-start shadow-sm hover:border-zinc-300 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 text-pln-blue flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm text-zinc-900 mb-1">Jam Operasional Kantor</h4>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-medium">
                    Senin - Jumat: 08.00 - 16.00 WIB <br />
                    (Layanan Gangguan Lapangan Tetap Siaga 24 Jam)
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="h-[320px] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.0435165275815!2d110.27641217584144!3d-7.1209675698305765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70891461ffcb51%3A0xe2a8cb40f1a9b2d8!2sPLN%20ULP%20Boja!5e0!3m2!1sid!2sid!4v1717696349000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi PLN ULP Boja"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 w-full">
            <div className="bg-zinc-50/50 border border-zinc-200/60 rounded-3xl p-8 sm:p-10 shadow-sm text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 mb-2 tracking-tight">Kirim Pesan Langsung</h3>
              <p className="text-zinc-500 text-xs sm:text-sm mb-6 font-medium">Ada pertanyaan atau keluhan administratif? Tim kami akan segera merespons Anda.</p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-zinc-850">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    className="font-medium text-sm text-zinc-900 p-3 bg-zinc-50 border border-zinc-200/50 rounded-xl outline-none focus:bg-white focus:border-pln-blue focus:ring-4 focus:ring-pln-blue/5 transition-all w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-zinc-850">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      className="font-medium text-sm text-zinc-900 p-3 bg-zinc-50 border border-zinc-200/50 rounded-xl outline-none focus:bg-white focus:border-pln-blue focus:ring-4 focus:ring-pln-blue/5 transition-all w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold text-zinc-850">Nomor HP/WA</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="0812xxxx"
                      className="font-medium text-sm text-zinc-900 p-3 bg-zinc-50 border border-zinc-200/50 rounded-xl outline-none focus:bg-white focus:border-pln-blue focus:ring-4 focus:ring-pln-blue/5 transition-all w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-bold text-zinc-850">Kategori Pertanyaan</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="font-medium text-sm text-zinc-900 p-3 bg-zinc-50 border border-zinc-200/50 rounded-xl outline-none focus:bg-white focus:border-pln-blue focus:ring-4 focus:ring-pln-blue/5 transition-all w-full appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2386868b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_16px_center] bg-no-repeat cursor-pointer"
                  >
                    <option value="Pasang Baru">Pasang Baru</option>
                    <option value="Tambah Daya">Tambah Daya</option>
                    <option value="Pengaduan Gangguan">Pengaduan Gangguan</option>
                    <option value="Keuangan & Pembayaran">Keuangan & Pembayaran</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-zinc-850">Pesan Anda</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan lengkap Anda di sini..."
                    rows={4}
                    className="font-medium text-sm text-zinc-900 p-3 bg-zinc-50 border border-zinc-200/50 rounded-xl outline-none focus:bg-white focus:border-pln-blue focus:ring-4 focus:ring-pln-blue/5 transition-all w-full resize-y"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-pln-blue hover:bg-pln-blue-hover disabled:opacity-60 text-white font-bold text-sm py-4 rounded-xl transition-colors duration-200 mt-2 shadow-md shadow-pln-blue/10"
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </button>

                {submitSuccess && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-150 text-emerald-800 text-xs sm:text-sm font-medium leading-relaxed animate-slide-down mt-2">
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
