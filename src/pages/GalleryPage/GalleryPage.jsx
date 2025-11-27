import React from "react";
import GallerySection from "../../components/GallerySection/GallerySection"; // Import the new section
import styles from "./GalleryPage.module.css";

// Replace this with the path where you saved image_b20861.jpg
const headerBgImage = "/images/Blogbgmain.webp";

export default function GalleryPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* --- Page Header Banner --- */}
      <div
        className={styles.pageHeader}
        style={{ backgroundImage: `url(${headerBgImage})` }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Gallery</h1>
          <div className={styles.breadcrumb}>
            <a href="/" className={styles.breadcrumbLink}>
              Home
            </a>
            <span className={styles.separator}>|</span>
            <span>Gallery</span>
          </div>
        </div>
      </div>

      {/* --- Gallery Grid Section --- */}
      <GallerySection />
    </div>
  );
}
