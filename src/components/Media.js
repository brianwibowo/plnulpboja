"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Media.module.css";

const galleryItems = [
  {
    id: 1,
    title: "Sosialisasi Keselamatan Kelistrikan",
    category: "Kegiatan Komunitas",
    image: "/gambar/pln_warga.png",
    sizeClass: styles.large,
    description: "Kegiatan sosialisasi keselamatan ketenagalistrikan dan pencegahan bahaya kebakaran akibat korsleting kepada warga Boja."
  },
  {
    id: 2,
    title: "Pemeliharaan Jaringan Transmisi",
    category: "Operasional",
    image: "/gambar/pln_naik tower.png",
    sizeClass: styles.tall,
    description: "Petugas PLN melakukan pemeliharaan berkala pada tower transmisi udara tegangan tinggi demi menjamin keandalan pasokan listrik."
  },
  {
    id: 3,
    title: "Kebersamaan ULP Boja",
    category: "Internal",
    image: "/gambar/pln_foto berasama.jpg",
    sizeClass: styles.wide,
    description: "Keluarga besar PLN ULP Boja berkomitmen terus meningkatkan kolaborasi dan keandalan pelayanan untuk kepuasan pelanggan."
  },
  {
    id: 4,
    title: "Pelayanan Keliling (Mobile Service)",
    category: "Layanan",
    image: "/gambar/pln_mobil keliling.jpg",
    sizeClass: styles.normal,
    description: "Unit pelayanan keliling PLN menjangkau desa-desa terpencil untuk memudahkan masyarakat membayar tagihan dan mengajukan permohonan."
  },
  {
    id: 5,
    title: "Pemeliharaan Gardu Hubung",
    category: "Pemeliharaan",
    image: "/gambar/pln_naik gardu.jpg",
    sizeClass: styles.normal,
    description: "Petugas teknis melakukan inspeksi keselamatan dan pembersihan rutin trafo gardu distribusi di wilayah Boja."
  },
  {
    id: 6,
    title: "Kerjasama Stakeholder Lokal",
    category: "Kemitraan",
    image: "/gambar/pln_kerjasama.jpg",
    sizeClass: styles.normal,
    description: "Koordinasi PLN ULP Boja dengan jajaran aparatur kecamatan Kendal untuk penyelarasan program pemeliharaan kelistrikan."
  }
];

export default function Media() {
  const [activeItem, setActiveItem] = useState(null);

  const openLightbox = (item) => {
    setActiveItem(item);
  };

  const closeLightbox = () => {
    setActiveItem(null);
  };

  return (
    <section id="media" className={styles.mediaSection}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Galeri & Dokumentasi</span>
          <h2 className="section-title">Aktivitas & Informasi Media</h2>
          <p className="section-subtitle">
            Dokumentasi komitmen PLN ULP Boja dalam menjaga keandalan pasokan listrik dan menjalin kebersamaan dengan masyarakat.
          </p>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className={styles.masonryGrid}>
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`${styles.gridItem} ${item.sizeClass}`}
              onClick={() => openLightbox(item)}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.galleryImage}
                />
                <div className={styles.imageOverlay}></div>
                
                <div className={styles.itemMeta}>
                  <span className={styles.itemCategory}>{item.category}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox}>&times;</button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxImageWrapper}>
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                width={800}
                height={600}
                className={styles.lightboxImage}
              />
            </div>
            <div className={styles.lightboxMeta}>
              <span className={styles.lightboxCategory}>{activeItem.category}</span>
              <h3 className={styles.lightboxTitle}>{activeItem.title}</h3>
              <p className={styles.lightboxDesc}>{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
