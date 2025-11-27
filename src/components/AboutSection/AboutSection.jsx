import React from "react";
import styles from "./AboutSection.module.css";
import StatsSection from "../StatsSection/StatsSection";

// You can replace this with the actual path to your uploaded image
// Ensure image_c1ead5.jpg is in public/images/
const clinicImage = "/images/Yashcare.webp";

export default function AboutSection({ onReadMore }) {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        {/* Left Side: Image with Badge */}
        <div className={styles.imageWrapper}>
          <img
            src={clinicImage}
            alt="Ratnam Denti Care Reception"
            className={styles.clinicImage}
          />

          {/* Floating Badge */}
          <div className={styles.experienceBadge}>
            <span className={styles.years}>13+</span>
            <div className={styles.badgeText}>
              Years of <br /> Experience
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className={styles.content}>
          <h4 className={styles.subHeading}>ABOUT US</h4>
          <h2 className={styles.mainHeading}>Ratnam Denti Care, Gachibowli</h2>

          <p className={styles.description}>
            At Ratnam Denti Care, we truly care for your dental health. With 13+
            years of experience, we are recognized as one of the best dental
            clinics in Gachibowli, providing world-class treatments with a
            personal touch. Our team of expert dentists in Gachibowli offers
            comprehensive services including root canal treatment, teeth
            whitening, braces, Invisalign, dental implants, pediatric dentistry,
            orthodontics, and cosmetic dentistry.
          </p>

          <p className={styles.description}>
            Whether you are a child, teen, or adult, we ensure you receive
            painless, affordable, and advanced care at our modern dental
            hospital in Gachibowli. We believe in building lasting relationships
            with patients and creating smiles that last a lifetime.
          </p>

          <button onClick={onReadMore} className={styles.readMoreBtn}>
            READ MORE
          </button>
        </div>
      </div>
      <StatsSection />
    </section>
  );
}
