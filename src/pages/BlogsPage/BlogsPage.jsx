import React from "react";
import SpotlightSection from "../../components/SpotlightSection/SpotlightSection";
import styles from "./BlogsPage.module.css";

const headerBgImage = "/images/headers/blogs-bg.jpg";

export default function BlogsPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* --- Page Header Banner --- */}
      <div
        className={styles.pageHeader}
        style={{ backgroundImage: `url(${headerBgImage})` }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Blogs</h1>
          <div className={styles.breadcrumb}>
            <a href="/" className={styles.breadcrumbLink}>
              Home
            </a>
            <span className={styles.separator}>|</span>
            <span>Blogs</span>
          </div>
        </div>
      </div>

      {/* --- Spotlight Section (Bottom) --- */}
      {/* No props passed = Default "Spotlight" grid with 24 items */}
      <SpotlightSection />
    </div>
  );
}
