import React from "react";
import styles from "../../pages/TreatmentItem/TreatmentItem.module.css";

/**
 * TreatmentItem
 * Props:
 *  - title: string
 *  - content: string (HTML allowed)
 *  - imageSrc: string (url)
 *  - imageAlt: string
 *  - imagePosition: "left" | "right"
 */
export default function TreatmentItem({
  title,
  content,
  imageSrc,
  imageAlt = "",
  imagePosition = "left",
}) {
  const isRight = imagePosition === "right";
  return (
    <article
      className={`${styles.treatmentItem} ${
        isRight ? styles.isRight : styles.isLeft
      }`}
      aria-label={title}
    >
      <div className={styles.treatmentInner}>
        <div className={styles.treatmentText}>
          <h3 className={styles.treatmentTitle}>{title}</h3>
          <div
            className={styles.treatmentContent}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        <div className={styles.treatmentImageWrap}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className={styles.treatmentImage}
          />
        </div>
      </div>

      <hr className={styles.sectionDivider} />
    </article>
  );
}
