"use client";

import { useState } from "react";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    title: "Sosialisasi Keselamatan Listrik",
    category: "Komunitas",
    image: "/gambar/pln_warga.png",
    description: "Kegiatan sosialisasi keselamatan ketenagalistrikan dan pencegahan bahaya kebakaran akibat korsleting kepada warga Boja."
  },
  {
    id: 2,
    title: "Pemeliharaan Jalur Transmisi",
    category: "Operasional",
    image: "/gambar/pln_naik tower.png",
    description: "Petugas PLN melakukan pemeliharaan berkala pada tower transmisi udara tegangan tinggi demi menjamin keandalan pasokan listrik."
  },
  {
    id: 3,
    title: "Keluarga Besar PLN ULP Boja",
    category: "Internal",
    image: "/gambar/pln_foto berasama.jpg",
    description: "Keluarga besar PLN ULP Boja berkomitmen terus meningkatkan kolaborasi dan keandalan pelayanan untuk kepuasan pelanggan."
  },
  {
    id: 4,
    title: "Pelayanan Keliling (Mobile Service)",
    category: "Pelayanan",
    image: "/gambar/pln_mobil keliling.jpg",
    description: "Unit pelayanan keliling PLN menjangkau desa-desa terpencil untuk memudahkan masyarakat membayar tagihan dan mengajukan permohonan."
  },
  {
    id: 5,
    title: "Inspeksi Gardu Distribusi",
    category: "Pemeliharaan",
    image: "/gambar/pln_naik gardu.jpg",
    description: "Petugas teknis melakukan inspeksi keselamatan dan pembersihan rutin trafo gardu distribusi di wilayah Boja."
  },
  {
    id: 6,
    title: "Sinergi Stakeholder Kendal",
    category: "Kemitraan",
    image: "/gambar/pln_kerjasama.jpg",
    description: "Koordinasi PLN ULP Boja dengan jajaran aparatur kecamatan Kendal untuk penyelarasan program pemeliharaan kelistrikan."
  },
  {
    id: 7,
    title: "Gedung Kantor PLN ULP Boja",
    category: "Fasilitas",
    image: "/gambar/pln_foto gedung tak hd.jpg",
    description: "Gedung kantor operasional resmi PLN ULP Boja di Jalan Tampingan No. 3, Boja, Kendal."
  },
  {
    id: 8,
    title: "Area Pelayanan Pelanggan",
    category: "Fasilitas",
    image: "/gambar/pln_pelayanan_kantor.png",
    description: "Ruang pelayanan digital yang modern dan nyaman bagi pelanggan yang berkunjung ke kantor ULP Boja."
  },
  {
    id: 9,
    title: "Infrastruktur Gardu Modern",
    category: "Infrastruktur",
    image: "/gambar/pln_gardu_boja.png",
    description: "Infrastruktur gardu listrik modern ramah lingkungan penopang listrik stabil di wilayah Boja."
  }
];

export default function Media() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section id="media" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-header mb-16 text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
          <span className="section-badge border border-zinc-200/50 bg-zinc-50 text-zinc-855 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block">Galeri & Dokumentasi</span>
          <h2 className="section-title text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">Aktivitas & Informasi Media</h2>
          <p className="section-subtitle text-zinc-500 text-sm sm:text-base leading-relaxed">
            Dokumentasi komitmen PLN ULP Boja dalam menjaga keandalan pasokan listrik dan menjalin kebersamaan dengan masyarakat.
          </p>
        </div>

        {/* 3x3 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group rounded-2xl overflow-hidden border border-zinc-200/60 shadow-sm hover:shadow-lg hover:border-zinc-300 transition-all duration-300 cursor-pointer text-left bg-zinc-50 flex flex-col h-full"
              onClick={() => setActiveItem(item)}
            >
              <div className="relative w-full aspect-video overflow-hidden bg-zinc-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-pln-blue mb-2 block">{item.category}</span>
                  <h3 className="text-base font-extrabold text-zinc-900 mb-2 leading-snug group-hover:text-pln-blue transition-colors duration-200">{item.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed line-clamp-2 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md z-[2000] flex justify-center items-center p-4 animate-fade-in"
          onClick={() => setActiveItem(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white text-4xl font-light hover:text-pln-yellow transition-transform duration-200 hover:rotate-90 bg-transparent border-none cursor-pointer outline-none w-11 h-11 flex items-center justify-center" 
            onClick={() => setActiveItem(null)}
          >
            &times;
          </button>
          
          <div 
            className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl animate-scale-up text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video bg-zinc-950 flex justify-center items-center">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <span className="text-xs font-bold text-pln-blue uppercase tracking-wider block mb-2">{activeItem.category}</span>
              <h3 className="text-xl font-extrabold text-zinc-900 tracking-tight leading-snug mb-3">{activeItem.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-medium">{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
