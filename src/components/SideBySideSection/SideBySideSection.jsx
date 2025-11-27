import React from "react";
import styles from "./SideBySideSection.module.css";

export default function SideBySideSection({
  title,
  subtitle,
  content,
  imageSrc,
  reverse = false,
}) {
  return (
    <section className={`${styles.section} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.textBlock}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
        <p className={styles.content}>{content}</p>
      </div>

      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt={title} className={styles.image} />
      </div>
    </section>
  );
}
