import React from "react";
import SideBySideSection from "../../components/SideBySideSection/SideBySideSection";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <header className={styles.hero}>
        <img
          className={styles.heroImg}
          src="data:image/jpeg;base64,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" // reuse your hero or change path
          alt="Hero"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About us</h1>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <a href="/" className={styles.breadcrumbLink}>
              Home
            </a>
            <span className={styles.breadcrumbSep} />
            <span className={styles.breadcrumbCurrent}>About us</span>
          </nav>
        </div>
      </header>

      {/* ⭐ REUSABLE SECTION */}
      <SideBySideSection
        title="About Us"
        subtitle="Why Yash Denti Care?"
        content="
          At Yash Denti Care, we prioritize delivering the Best Dental Service in Hyderabad. Our commitment to excellence is evident in the exceptional dental care we provide, setting us apart as the Best Dental Clinic and Best Dental Hospital Near You. Here's what makes us the premier choice for individuals seeking top-quality dental services:
        "
        imageSrc="/images/clinic/inside-view.jpg"
      />

      {/* ⭐ FULL-WIDTH CONTENT */}
      <div className={styles.fullContent}>
        <h3>Renowned Dental Specialists:</h3>
        <p>
          Our dental team in Hyderabad comprises seasoned experts in various
          dental disciplines. From general dentistry to specialized procedures,
          our specialists possess the expertise and experience to deliver the
          highest quality of care. When you need a Dental Specialist in
          Hyderabad, we've got you covered.
        </p>

        <h3>Cutting-Edge Facilities:</h3>
        <p>
          We continuously invest in state-of-the-art dental technology and
          equipment to ensure that our patients receive the most advanced
          treatment. Our modern, well-equipped dental clinic is designed to
          provide a comfortable, stress-free environment for all your dental
          procedures. We aim to be your Best Dental Hospital Near Me with
          top-notch facilities.
        </p>

        <h3>Personalized Treatment:</h3>
        <p>
          We understand that each patient is unique, with specific dental needs
          and concerns. That's why we offer tailored treatment plans that
          address your individual requirements. Our dental specialists take the
          time to listen, answer your questions, and provide the personalized
          care you deserve. It's the essence of being the Best Dental Clinic
          Near You.
        </p>

        <h3>Comprehensive Dental Services:</h3>
        <p>
          From routine check-ups to intricate dental procedures, we offer a
          comprehensive range of dental services under one roof. Whether you
          need a dental cleaning, teeth whitening, dental implants, orthodontic
          treatment, or any other dental service, we've got you covered as the
          Best Dental Service in Hyderabad.
        </p>

        <h3>Patient-Centric Approach:</h3>
        <p>
          Your comfort and satisfaction are our top priorities. We are committed
          to creating a welcoming, patient-friendly environment in our dental
          clinic, ensuring that your visit is as pleasant as possible. Our staff
          is dedicated to making your experience with us truly exceptional,
          living up to our reputation as the Best Dental Hospital Near You.
        </p>

        <h3>Finding the Best Dental Specialist in Hyderabad:</h3>
        <p>
          Searching for a dental specialist in Hyderabad? Your search ends here
          at Yash Denti Care. Our clinic is home to some of the finest dental
          specialists in the city, including orthodontists, periodontists,
          endodontists, prosthodontists, and more. With their extensive training
          and experience, our specialists offer compassionate and effective
          solutions to address your dental concerns. We understand that dental
          issues can be a source of discomfort and anxiety, and our specialists
          are dedicated to providing the highest quality care.
        </p>

        <h3>Conveniently Located for You:</h3>
        <p>
          We appreciate that accessibility is paramount when it comes to dental
          care. Our strategic location ensures that patients from all corners of
          Hyderabad and its neighboring areas can easily access our top-notch
          dental services. When searching for the Best Dental Clinic Near Me or
          the Best Dental Hospital Near You, Yash Denti Care stands as the ideal
          choice, guaranteeing that you can effortlessly avail our superior
          dental services whenever the need arises.
        </p>
      </div>
    </div>
  );
}
