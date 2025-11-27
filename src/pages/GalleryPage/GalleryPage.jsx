import React, { useState, useEffect } from "react";
import styles from "./GalleryPage.module.css";

export default function GalleryPage() {
  const base = process.env.PUBLIC_URL;

  const images = [
    { src: `${base}/images/galleryimg1.png`, alt: "Gallery image 1" },
    { src: `${base}/images/galleryimg2.png`, alt: "Gallery image 2" },
    { src: `${base}/images/galleryimg3.png`, alt: "Gallery image 3" },
    { src: `${base}/images/galleryimg4.png`, alt: "Gallery image 4" },
    { src: `${base}/images/galleryimg5.png`, alt: "Gallery image 5" },
    { src: `${base}/images/galleryimg6.png`, alt: "Gallery image 6" },
    { src: `${base}/images/galleryimg7.png`, alt: "Gallery image 7" },
    { src: `${base}/images/galleryimg8.png`, alt: "Gallery image 8" },
    { src: `${base}/images/galleryimg9.png`, alt: "Gallery image 9" },

    { src: `${base}/images/galleryimg1.png`, alt: "Gallery image 10" },
    { src: `${base}/images/galleryimg2.png`, alt: "Gallery image 11" },
    { src: `${base}/images/galleryimg3.png`, alt: "Gallery image 12" },
    { src: `${base}/images/galleryimg4.png`, alt: "Gallery image 13" },
    { src: `${base}/images/galleryimg5.png`, alt: "Gallery image 14" },
    { src: `${base}/images/galleryimg6.png`, alt: "Gallery image 15" },
    { src: `${base}/images/galleryimg7.png`, alt: "Gallery image 16" },
    { src: `${base}/images/galleryimg8.png`, alt: "Gallery image 17" },
    { src: `${base}/images/galleryimg9.png`, alt: "Gallery image 18" },
    { src: `${base}/images/galleryimg9.png`, alt: "Gallery image 19" },
    { src: `${base}/images/galleryimg9.png`, alt: "Gallery image 20" },
  ];

  // SPECIFIC indexes for BEFORE (1-based index)
  const beforeIndexes = [1, 2, 3, 7, 8, 9, 13, 14, 15, 19];

  const getLabel = (index) => {
    return beforeIndexes.includes(index + 1) ? "before" : "after";
  };

  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const openModal = (i) => {
    setModalIndex(i);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className={styles.page}>
      {/* HERO */}
      <div
        className={styles.hero}
        style={{
          backgroundImage: `url(${images[0].src})`,
        }}
      >
        <div className={styles.heroInner}>
          <h1 className={styles.title}>Gallery</h1>
          <div className={styles.breadcrumbs}>
            <span>Home</span>
            <span className={styles.sep}>|</span>
            <span>Gallery</span>
          </div>
        </div>
      </div>

      {/* Heading */}
      <h2 className={styles.centerHeading}>Gallery</h2>

      {/* IMAGE GRID WITH LABELS */}
      <div className={styles.gridSection}>
        <div className={styles.grid}>
          {images.map((img, i) => {
            const label = getLabel(i); // "before" or "after"
            return (
              <div key={i} className={styles.card} onClick={() => openModal(i)}>
                {/* AFTER label = TOP */}
                {label === "after" && (
                  <div className={styles.afterTag}>After</div>
                )}

                <img src={img.src} className={styles.thumb} alt={img.alt} />

                {/* BEFORE label = BOTTOM */}
                {label === "before" && (
                  <div className={styles.beforeTag}>Before</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.modalClose} onClick={closeModal}>
              ✕
            </button>

            <img
              src={images[modalIndex].src}
              alt={images[modalIndex].alt}
              className={styles.modalImage}
            />

            <div className={styles.modalFooter}>
              {modalIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
