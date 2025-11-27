import React from "react";
import styles from "./BookingSection.module.css";

export default function BookingSection({ onBookNow }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.subHeading}>Book Dental Appointment</h3>
        <h2 className={styles.mainHeading}>
          We Are open And Welcoming Patients
        </h2>

        <button onClick={onBookNow} className={styles.bookBtn}>
          BOOK APPOINTMENT
        </button>
      </div>
    </section>
  );
}
