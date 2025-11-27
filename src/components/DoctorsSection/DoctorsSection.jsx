import React from "react";
import styles from "./DoctorsSection.module.css";

// Doctor Data
const doctors = [
  {
    id: 1,
    name: "Dr. Chandana Penmetsa",
    qualification: "BDS, MDS (Pedodontics & Preventive Dentistry)",
    designation: "SR. CONSULTANT – PEDIATRIC DENTISTRY",
    image: "/images/doctors/chandana.webp", // Make sure to save crop of left doctor here
  },
  {
    id: 2,
    name: "Dr. Prabhakara Rao",
    qualification: "ENT Surgeon",
    designation:
      "Specialist in advanced ENT procedures with extensive experience in ear, nose, and throat surgeries.",
    image: "/images/doctors/Prabhakhar.webp", // Make sure to save crop of right doctor here
  },
];

export default function DoctorsSection() {
  return (
    <section className={styles.section} id="doctors">
      <div className={styles.container}>
        <span className={styles.subHeading}>OUR EXPERTS</span>
        <h2 className={styles.mainHeading}>Meet Our Doctors</h2>

        <div className={styles.grid}>
          {doctors.map((doctor) => (
            <div key={doctor.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                {/* Fallback image source logic could be added here */}
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className={styles.doctorImage}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/350x350?text=Doctor";
                  }}
                />
              </div>
              <h3 className={styles.name}>{doctor.name}</h3>
              <p className={styles.qualification}>{doctor.qualification}</p>
              <p className={styles.designation}>{doctor.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
