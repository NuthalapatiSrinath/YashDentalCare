import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Column 1: Brand / About */}
            <div className={styles.column}>
              <div className={styles.logoImage}>
                <img
                  src="/images/logo.webp"
                  alt="Ratnam Denti Care"
                  className={styles.footerLogo}
                />
              </div>
              <p className={styles.brandDescription}>
                At Ratnam Care, we’re dedicated to personalized, gentle dental
                care for kids, teens, and adults—making every visit comfortable
                and focused on your smile.
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
                  <a href="/treatments" className={styles.link}>
                    Treatments
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/gallery" className={styles.link}>
                    Gallery
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/blogs" className={styles.link}>
                    Blogs
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
                  <a href="/treatments" className={styles.link}>
                    General Dentistry
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/treatments" className={styles.link}>
                    Cosmetic Dentistry
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/treatments" className={styles.link}>
                    Restorative Dentistry
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/treatments" className={styles.link}>
                    Orthodontics
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/treatments" className={styles.link}>
                    Pediatric Dentistry
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
                      href="mailto:ratnamdentalcare1@gmail.com"
                      className={styles.contactLink}
                    >
                      ratnamdentalcare1@gmail.com
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
                    Plot No.117, Ratnam Polyclinics, <br />
                    Telecom Nagar, Gachibowli, <br />
                    Hyderabad, Telangana-500032.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section - Centered */}
          <div className={styles.copyright}>
            Copyright © 2024 Ratnam Denti Care. All rights reserved. Designed &
            Developed By Panacea IT Services – +91 8686818384
          </div>
        </div>
      </footer>
    </div>
  );
}
