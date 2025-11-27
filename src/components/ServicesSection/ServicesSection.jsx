import React from "react";
import {
  Smile,
  Activity,
  Hammer,
  Stethoscope,
  HeartPulse,
  Scissors,
} from "lucide-react";
// Note: Lucide doesn't have specific 'tooth' icons, so I'm using metaphors.
// For a real project, you should import custom SVGs here.
import styles from "./ServicesSection.module.css";

const services = [
  {
    id: 1,
    title: "General Dentistry",
    description:
      "We offer check-ups, cleanings, fillings, extractions, and more. Our caring team ensures complete dental care for all ages using the latest tools and techniques to keep your smile healthy and bright.",
    icon: <Smile size={48} strokeWidth={1.5} />,
    link: "/services/general",
  },
  {
    id: 2,
    title: "Teeth Whitening",
    description:
      "Brighten your smile safely with our whitening treatments. Choose in-office or take-home options for visible results. We ensure a comfortable experience and long-lasting shine.",
    icon: <Activity size={48} strokeWidth={1.5} />, // Placeholder for Whitening
    link: "/services/whitening",
  },
  {
    id: 3,
    title: "Fillings",
    description:
      "Restore your teeth with strong, natural-looking fillings. We use high-quality materials to repair cavities and damage, providing lasting results and comfort while maintaining beauty.",
    icon: <Hammer size={48} strokeWidth={1.5} />, // Placeholder for Repair
    link: "/services/fillings",
  },
  {
    id: 4,
    title: "Root Canal Treatment",
    description:
      "Save infected teeth with our gentle root canal treatment. We remove the infection, relieve pain, and protect your tooth with precision and care—preserving your natural smile.",
    icon: <Stethoscope size={48} strokeWidth={1.5} />,
    link: "/services/root-canal",
  },
  {
    id: 5,
    title: "Periodontics",
    description:
      "Protect your gums with expert periodontal care. We treat gum disease through scaling, root planing, and maintenance therapy to prevent tooth loss and support your oral health.",
    icon: <HeartPulse size={48} strokeWidth={1.5} />,
    link: "/services/periodontics",
  },
  {
    id: 6,
    title: "Wisdom Tooth Extraction",
    description:
      "Remove impacted or painful wisdom teeth with ease. Our skilled team uses safe, modern methods to ensure a smooth, stress-free extraction and quick recovery.",
    icon: <Scissors size={48} strokeWidth={1.5} />,
    link: "/services/extraction",
  },
];

export default function ServicesSection() {
  const handleMoreClick = () => {
    console.log("Navigate to all treatments page");
    // window.location.href = "/services";
  };

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <span className={styles.subHeading}>OUR SERVICES</span>
        <h2 className={styles.mainHeading}>What We Provide</h2>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <a href={service.link} className={styles.knowMore}>
                Know More &rsaquo;
              </a>
            </div>
          ))}
        </div>

        <button onClick={handleMoreClick} className={styles.moreBtn}>
          MORE TREATMENTS
        </button>
      </div>
    </section>
  );
}
