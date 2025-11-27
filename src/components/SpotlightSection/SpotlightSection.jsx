import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SpotlightSection.module.css";

// Default data - Updated with your 6 Blog images
const defaultCards = [
  {
    id: 1,
    title:
      "Gachibowli Pediatric Dentist Caring for Baby Teeth & Childhood Dental Health",
    image: "/images/blog/Blog1.webp",
  },
  {
    id: 2,
    title: "Children’s Dental Care in Gachibowli Keeping Baby Teeth Healthy",
    image: "/images/blog/Blog2.webp",
  },
  {
    id: 3,
    title: "Best Pediatric Dentist in Gachibowli Expert Dental Care for Kids",
    image: "/images/blog/Blog3.webp",
  },
  {
    id: 4,
    title:
      "Top 5 Tips for Preparing Your Child for Their First Dental Appointment",
    image: "/images/blog/Blog4.webp",
  },
  {
    id: 5,
    title: "Preventive Dental Care: Why It Matters for Your Child",
    image: "/images/blog/Blog5.webp",
  },
  {
    id: 6,
    title: "Common Dental Issues in Kids and How to Treat Them",
    image: "/images/blog/Blog6.webp",
  },
];

// Helper to generate array if needed, otherwise use passed array
const getCards = (cards) => {
  if (cards && cards.length > 0) return cards;

  // If no cards passed, generate 24 items by cycling through the 6 default cards
  return Array.from({ length: 24 }, (_, i) => ({
    ...defaultCards[i % defaultCards.length],
    id: i + 1, // Unique ID for key prop
  }));
};

export default function SpotlightSection({
  title,
  subtitle,
  cards,
  onCardClick,
}) {
  const navigate = useNavigate();
  const displayCards = cards || getCards(); // Use props or default generator

  const handleCardClick = (id) => {
    if (onCardClick) {
      onCardClick(id);
    } else {
      // Logic to handle navigation:
      // Since we generate 24 cards but only have 6 unique blog contents,
      // we map the clicked ID back to the original 1-6 range.
      const originalId = ((id - 1) % defaultCards.length) + 1;
      navigate(`/blogs/${originalId}`);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Render Title/Subtitle if provided */}
        {(title || subtitle) && (
          <div style={{ marginBottom: "40px", textAlign: "center" }}>
            {title && (
              <h2
                className={styles.title}
                style={{ fontSize: "36px", color: "#1e3a8a" }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p style={{ color: "#64748b", marginTop: "10px" }}>{subtitle}</p>
            )}
          </div>
        )}

        <div className={styles.grid}>
          {displayCards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={card.image}
                  alt={card.title}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{card.title}</h3>
                <button
                  className={styles.readMoreBtn}
                  onClick={() => handleCardClick(card.id)}
                >
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
