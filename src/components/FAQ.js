"use client";

import { useState } from "react";

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
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="12" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="14"></line><line x1="15" y1="22" x2="15" y2="14"></line><path d="M12 2v12"></path></svg>
    ),
    title: "Hindari Tumpukan Steker",
    desc: "Jangan memasang terlalu banyak steker pada satu stopkontak dinding untuk mencegah panas berlebih (overheat) yang dapat memicu kebakaran."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
    ),
    title: "Jauhkan Air dari Listrik",
    desc: "Jangan menyentuh sakelar, steker, atau stopkontak dengan tangan basah. Air adalah konduktor listrik yang baik dan sangat berbahaya."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12M12 12a5 5 0 1 0 0-10 5 5 0 1 0 0 10z"></path></svg>
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
    <section id="informasi" className="py-20 bg-pln-yellow/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-header mb-16 text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
          <span className="section-badge border border-zinc-200/50 bg-white text-zinc-800 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block">Informasi Pelanggan</span>
          <h2 className="section-title text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">Edukasi & Pertanyaan Umum</h2>
          <p className="section-subtitle text-zinc-500 text-sm sm:text-base leading-relaxed">
            Ketahui jawaban atas pertanyaan yang paling sering diajukan serta panduan keselamatan kelistrikan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* FAQ Accordion Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <h3 className="text-xl font-extrabold text-zinc-900 mb-8 tracking-tight">Frequently Asked Questions (FAQ)</h3>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className={`bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
                      isOpen ? "border-pln-blue/30 shadow-pln-blue/2" : "border-zinc-200/60 hover:border-zinc-300"
                    }`}
                  >
                    <button 
                      className="w-full flex justify-between items-center gap-4 px-6 py-5 bg-transparent border-none text-left cursor-pointer outline-none" 
                      onClick={() => toggleFAQ(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className={`font-bold text-sm sm:text-[15px] transition-colors duration-200 ${isOpen ? "text-pln-blue" : "text-zinc-900"}`}>{faq.question}</span>
                      <span className={`text-base font-medium flex-shrink-0 w-5 flex justify-center transition-colors duration-200 ${isOpen ? "text-pln-blue" : "text-zinc-400"}`}>{isOpen ? "−" : "+"}</span>
                    </button>
                    <div className={`transition-all duration-350 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-500 leading-relaxed font-medium">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Safety Tips Column */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <h3 className="text-xl font-extrabold text-zinc-900 mb-8 tracking-tight">Tips Keselamatan Kelistrikan</h3>
            <div className="flex flex-col gap-4 mb-6">
              {safetyTips.map((tip, idx) => (
                <div key={idx} className="bg-white border border-zinc-200/60 rounded-2xl p-5 flex gap-4 items-start shadow-sm hover:border-zinc-300 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 text-pln-blue flex items-center justify-center flex-shrink-0">
                    {tip.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-sm text-zinc-900 mb-1">{tip.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Banner info tambahan */}
            <div className="bg-white/90 border border-zinc-200/60 border-l-4 border-l-pln-blue p-5 rounded-r-2xl flex gap-3.5 items-start">
              <span className="text-pln-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </span>
              <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                <strong className="text-zinc-800 font-bold">Ingat 123!</strong> Simpan nomor Call Center PLN di kontak Anda untuk situasi darurat kelistrikan. Hubungi <strong className="text-pln-blue font-bold">(Kode Area) 123</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
