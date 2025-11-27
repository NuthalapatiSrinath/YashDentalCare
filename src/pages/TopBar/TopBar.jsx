import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";
import styles from "./TopBar.module.css";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll detection for sticky highlight
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onBookAppointment = () => {
    navigate("/contact");
    setIsMenuOpen(false);
  };

  // Updated Navigation Logic
  const handleNavigation = (path) => {
    setIsMenuOpen(false);

    if (path === "/") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <>
      {/* --- Top Dark Strip --- */}
      <div className={styles.topStrip}>
        <div className={styles.topStripContainer}>
          <div className={styles.contactInfo}>
            <a
              href="mailto:yashdenticare1@gmail.com"
              className={styles.contactItem}
            >
              <Mail size={16} />
              <span>yashdenticare1@gmail.com</span>
            </a>
            <a href="tel:+919030655888" className={styles.contactItem}>
              <Phone size={16} />
              <span>+91-9030655888</span>
            </a>
          </div>

          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook size={18} />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* --- Main Header --- */}
      <header
        className={`${styles.header} ${
          isScrolled ? styles.headerScrolled : ""
        }`}
      >
        <div className={styles.headerContainer}>
          {/* Logo Section */}
          <div
            className={styles.logoSection}
            onClick={() => handleNavigation("/")}
          >
            <span className={styles.logoYash}>YASH</span>
            <div className={styles.logoGroup}>
              <span className={styles.logoDenti}>
                <span className={styles.logoIcon}>🦷</span>enti
              </span>
              <span className={styles.logoCare}>care</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className={isMenuOpen ? styles.navMenuOpen : styles.navMenu}>
            <button
              onClick={() => handleNavigation("/")}
              className={styles.navLink}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/about")}
              className={styles.navLink}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation("/treatments")}
              className={styles.navLink}
            >
              Treatments
            </button>
            <button
              onClick={() => handleNavigation("/gallery")}
              className={styles.navLink}
            >
              Gallery
            </button>

            <button
              onClick={() => handleNavigation("/blogs")}
              className={styles.navLink}
            >
              Blogs
            </button>

            <button
              onClick={() => handleNavigation("/contact")}
              className={styles.navLink}
            >
              Contact Us
            </button>

            <button onClick={onBookAppointment} className={styles.btnBook}>
              BOOK AN APPOINTMENT
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>
    </>
  );
}
