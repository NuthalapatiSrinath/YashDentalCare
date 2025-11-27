import React from "react";
import styles from "./GallerySection.module.css";

// Sample Gallery Data
// Ideally, these would be high-quality clinic or smile photos
const galleryItems = [
  { id: 1, src: "/images/spotlight/image_c11042.jpg", title: "Pediatric Care" },
  { id: 2, src: "/images/spotlight/image_c10d76.jpg", title: "Happy Smiles" },
  {
    id: 3,
    src: "/images/spotlight/image_c11042.jpg",
    title: "Advanced Treatments",
  },
  {
    id: 4,
    src: "/images/spotlight/image_c10d76.jpg",
    title: "Comfortable Clinic",
  },
  { id: 5, src: "/images/spotlight/image_c11042.jpg", title: "Expert Team" },
  {
    id: 6,
    src: "/images/spotlight/image_c10d76.jpg",
    title: "Modern Equipment",
  },
  { id: 7, src: "/images/spotlight/image_c11042.jpg", title: "Patient Care" },
  { id: 8, src: "/images/spotlight/image_c10d76.jpg", title: "Dental Hygiene" },
];

export default function GallerySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingWrapper}>
          <span className={styles.subHeading}>OUR WORK</span>
          <h2 className={styles.mainHeading}>Smile Gallery</h2>
        </div>

        <div className={styles.grid}>
          {galleryItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <img src={item.src} alt={item.title} className={styles.image} />
              <div className={styles.overlay}>
                <span className={styles.caption}>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
