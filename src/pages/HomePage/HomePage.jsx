import React, { useState, useEffect } from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import DoctorsSection from "../../components/DoctorsSection/DoctorsSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import BookingSection from "../../components/BookingSection/BookingSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection"; // Import Testimonials
import styles from "./HomePage.module.css";

// Define your hero images here.
const heroImages = [
  "/images/hero/Hero1.webp",
  "/images/hero/Hero2.webp",
  "/images/hero/Hero3.webp",
];

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleReadMore = () => {
    console.log("Navigating to About Page...");
    window.location.href = "/about";
  };

  const handleBookAppointment = () => {
    console.log("Navigating to Contact/Booking Page...");
    window.location.href = "/contact";
  };

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h2 className={styles.welcomeText}>Welcome To Ratnam Denti Care</h2>
            <h1 className={styles.mainHeading}>
              Your Gateway to Premier Dental Care in{" "}
              <span className={styles.highlight}>Hyderabad,Gachibowli</span>
            </h1>
            <p className={styles.description}>
              For the best dental service in Hyderabad, Ratnam Denti Care is
              your trusted destination. Our skilled specialists provide
              exceptional dental care, conveniently located for all your needs.
            </p>
          </div>

          <div className={styles.imageContainer}>
            {heroImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Dental Care Banner ${index + 1}`}
                className={`${styles.heroImage} ${
                  index === currentImageIndex ? styles.active : ""
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection onReadMore={handleReadMore} />

      {/* Doctors Section */}
      <DoctorsSection />

      {/* Services Section */}
      <ServicesSection />
      <BookingSection onBookNow={handleBookAppointment} />

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Booking Banner Section */}
    </div>
  );
}
