import React from "react";
import { Star } from "lucide-react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    id: 1,
    name: "Priya Ponnaveni",
    text: 'Dental Visit for Aarav "Dr. Chandana showed patience and care. Priya, "Aaarav truly had a great time during his visit."',
    rating: 5,
  },
  {
    id: 2,
    name: "Nikhil Cheemala",
    text: 'A Happy Visit for Little Vihaan "No tears, no fear – Dr. Chandana is amazing with kids!',
    rating: 5,
  },
  {
    id: 3,
    name: "Shruti Kasula",
    text: "Arjun's First Filling Done Right \"Dr. Chandana handled Arjun's cavity with care. Great dental care for kids.",
    rating: 5,
  },
  {
    id: 4,
    name: "Rahul Vemula",
    text: "Rahul's Teeth Cleaning \"Got my teeth cleaned by the best dentist in Hyderabad. Very professional!",
    rating: 5,
  },
  // Add more if needed to fill width before duplication
  {
    id: 5,
    name: "Sneha Reddy",
    text: "Excellent service and very hygienic clinic. The staff is polite and the doctors are very experienced.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <span className={styles.subHeading}>Testimonials</span>
        <h2 className={styles.mainHeading}>Our Success Stories</h2>
      </div>

      <div className={styles.scrollWrapper}>
        <div className={styles.scrollTrack}>
          {/* Render items twice for seamless infinite scroll */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <div key={`${item.id}-${index}`} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#fbbf24" strokeWidth={0} />
                ))}
              </div>
              <p className={styles.reviewText}>{item.text}</p>
              <h4 className={styles.author}>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
