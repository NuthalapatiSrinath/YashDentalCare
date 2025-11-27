import React, { useState } from "react";
import styles from "./ContactUsPage.module.css";

/**
 * ContactUsPage
 * - Hero with title (left) + breadcrumbs
 * - Second centered "Contact Us" heading
 * - Appointment form with Toaster notification
 * - Responsive Google Map without horizontal scroll
 */

export default function ContactUsPage() {
  const [showToast, setShowToast] = useState(false);

  const query =
    "Plot no.117, yashpolyclinics, telecom nagar, Gachibowli, Hyderabad, Telangana-500032";
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    query
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show toast
    setShowToast(true);
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
    // Optional: Reset form here e.target.reset();
  };

  return (
    <div className={styles.page}>
      {/* TOASTER NOTIFICATION */}
      {showToast && (
        <div className={styles.toast}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Request Sent Successfully!</span>
        </div>
      )}

      {/* HERO */}
      <header className={styles.hero}>
        <img
          className={styles.heroImg}
          src="/images/Blogbgmain.webp"
          alt="Contact Us hero"
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>

          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <a href="/" className={styles.breadcrumbLink}>
              Home
            </a>
            <span className={styles.breadcrumbSep} />
            <span className={styles.breadcrumbCurrent}>Contact Us</span>
          </nav>
        </div>
      </header>

      {/* SECOND TITLE BELOW HERO */}
      <div className={styles.pageTitleWrap}>
        <h2 className={styles.pageTitle}>Contact Us</h2>
      </div>

      {/* MAIN TWO-COLUMN */}
      <main className={styles.container}>
        <section className={styles.leftColumn}>
          <div className={styles.formCard}>
            <h2 className={styles.formHeading}>Make Appointment</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row2}>
                <input
                  className={styles.input}
                  placeholder="Name"
                  aria-label="Name"
                  required
                />
                <input
                  className={styles.input}
                  placeholder="Email"
                  aria-label="Email"
                  type="email"
                  required
                />
              </div>

              <div className={styles.row2}>
                <input
                  className={styles.input}
                  placeholder="Phone No."
                  aria-label="Phone"
                  type="tel"
                  required
                />
                <input
                  className={styles.input}
                  placeholder="Treatment"
                  aria-label="Treatment"
                />
              </div>

              <textarea
                className={styles.textarea}
                placeholder="Message"
                aria-label="Message"
                required
              />

              <button type="submit" className={styles.submitBtn}>
                SUBMIT NOW
              </button>
            </form>
          </div>
        </section>

        <aside className={styles.rightColumn}>
          {/* Office Address */}
          <div className={styles.infoCard}>
            <div className={styles.iconWrap}>
              <svg
                className={styles.iconSvg}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M3 6.5v13L9 17l6 3 6-3V4.5L15 7 9 4 3 6.5z"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 4v13"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.infoBody}>
              <h3 className={styles.infoTitle}>Office Address</h3>
              <p className={styles.infoText}>
                Plot no.117, yashpolyclinics, telecom nagar, Gachibowli,
                Hyderabad, Telangana-500032
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className={styles.infoCard}>
            <div className={styles.iconWrap}>
              <svg
                className={styles.iconSvg}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.6"
                />
                <path
                  d="M12 7v6l4 2"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.infoBody}>
              <h3 className={styles.infoTitle}>Working Hours</h3>
              <p className={styles.infoText}>
                Monday to Saturday
                <br />
                10:00AM to 2:00PM, 5:00PM to 8:00PM
              </p>
            </div>
          </div>

          {/* Message Us */}
          <div className={styles.infoCard}>
            <div className={styles.iconWrap}>
              <svg
                className={styles.iconSvg}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="2.5"
                  y="5"
                  width="19"
                  height="14"
                  rx="2"
                  ry="2"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.6"
                />
                <path
                  d="M3.5 7.5l8.5 6 8.5-6"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.infoBody}>
              <h3 className={styles.infoTitle}>Message Us</h3>
              <p className={styles.infoText}>yashdenticare1@gmail.com</p>
            </div>
          </div>
        </aside>
      </main>

      {/* MAP SECTION – FULL-WIDTH IFRAME ONLY */}
      <section className={styles.mapFullWidth}>
        <iframe
          title="Office location map"
          src={embedUrl}
          className={styles.mapIframeFull}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
