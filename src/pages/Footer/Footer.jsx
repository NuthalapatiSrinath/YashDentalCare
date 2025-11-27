import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./Footer.module.css";
// Ensure you have your logo image saved in public/images or src/assets
// import logoImg from "../../assets/logo.png";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Column 1: Brand / About */}
            <div className={styles.column}>
              {/* Replace src with your actual logo path */}
              <div className={styles.logoImage}>
                {/* Simple text fallback for logo visual if image is missing */}
                <h2
                  style={{
                    color: "#000",
                    margin: 0,
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#2563eb", fontSize: "24px" }}>
                    YASH
                  </span>
                  <span style={{ marginLeft: "5px" }}>🦷</span>
                </h2>
              </div>
              <p className={styles.brandDescription}>
                At Yash Denti Care, we’re dedicated to personalized, gentle
                dental care for kids, teens, and adults—making every visit
                comfortable and focused on your smile.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className={styles.column}>
              <h3 className={styles.columnHeading}>Quick Links</h3>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}>
                  <a href="/" className={styles.link}>
                    Home
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/about" className={styles.link}>
                    About Us
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/gallery" className={styles.link}>
                    Gallery
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/contact" className={styles.link}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Treatments */}
            <div className={styles.column}>
              <h3 className={styles.columnHeading}>Our Treatments</h3>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}>
                  <a href="/treatments/general" className={styles.link}>
                    General Dentistry
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/treatments/cosmetic" className={styles.link}>
                    Cosmetic Dentistry
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/treatments/restorative" className={styles.link}>
                    Restorative Dentistry
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/treatments/orthodontics" className={styles.link}>
                    Orthodontics
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/treatments/pediatric" className={styles.link}>
                    Pediatric Dentistry
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/treatments/periodontics" className={styles.link}>
                    Periodontics
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/treatments/endodontics" className={styles.link}>
                    Endodontics
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className={styles.column}>
              <h3 className={styles.columnHeading}>Contact Us</h3>
              <div className={styles.contactList}>
                {/* Email */}
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Mail size={20} color="white" />
                  </div>
                  <div className={styles.contactText}>
                    <a
                      href="mailto:yashdenticare1@gmail.com"
                      className={styles.contactLink}
                    >
                      yashdenticare1@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Phone size={20} color="white" />
                  </div>
                  <div className={styles.contactText}>
                    <a href="tel:+919030655888" className={styles.contactLink}>
                      +91-9030655888
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <MapPin size={20} color="white" />
                  </div>
                  <div className={styles.contactText}>
                    Plot No.117, Yash Polyclinics, <br />
                    Telecom Nagar, Gachibowli, <br />
                    Hyderabad, Telangana-500032.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Yash Denti Care. All Rights
            Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
