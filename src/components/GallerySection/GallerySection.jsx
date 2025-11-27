import React from "react";
import styles from "./GallerySection.module.css";

// Using the 6 specific images you uploaded
const galleryItems = [
  { id: 1, src: "/images/gallery/Gallery1.webp", title: "Case 1" },
  { id: 2, src: "/images/gallery/Gallery2.webp", title: "Case 2" },
  { id: 3, src: "/images/gallery/Gallery3.webp", title: "Case 3" },
  { id: 4, src: "/images/gallery/Gallery4.webp", title: "Case 4" },
  { id: 5, src: "/images/gallery/Gallery5.webp", title: "Case 5" },
  { id: 6, src: "/images/gallery/Gallery6.webp", title: "Case 6" },
];

export default function GallerySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingWrapper}>
          <span className={styles.subHeading}>Gallery</span>
          {/* <h2 className={styles.mainHeading}>Smile Gallery</h2> */}
        </div>

        <div className={styles.grid}>
          {galleryItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <img
                src={item.src}
                alt={item.title}
                className={styles.image}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x450?text=Image+Not+Found";
                }}
              />
              {/* No text overlay here, as it's inside the image */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
