import React, { useState } from "react";
import { Plus } from "lucide-react";
import styles from "./FAQSection.module.css";

// Use the uploaded image_c179d9.jpg for the left side
const faqImage = "/images/faq/image_c179d9.jpg";

const faqs = [
  {
    id: 1,
    question:
      "What makes Yash Denti Care the best dental clinic in Gachibowli?",
    answer:
      "We prioritize patient comfort with advanced technology, experienced specialists, and personalized care plans that ensure the best outcomes for your dental health.",
  },
  {
    id: 2,
    question:
      "What dental services are available at your dental hospital in Gachibowli?",
    answer:
      "We offer comprehensive services including Root Canal Treatment, Teeth Whitening, Orthodontics (Braces & Invisalign), Dental Implants, Pediatric Dentistry, and Cosmetic makeovers.",
  },
  {
    id: 3,
    question: "Do you offer painless root canal treatment in Gachibowli?",
    answer:
      "Yes, we utilize the latest rotary endodontics and local anesthesia techniques to ensure your root canal procedure is as comfortable and painless as possible.",
  },
  {
    id: 4,
    question: "Can I get braces or Invisalign at Yash Denti Care?",
    answer:
      "Absolutely. We offer both traditional metal/ceramic braces and modern clear aligners like Invisalign to straighten your teeth discreetly and effectively.",
  },
  {
    id: 5,
    question: "Do you provide dental implants in Gachibowli?",
    answer:
      "Yes, we specialize in high-quality dental implants to restore missing teeth, providing a permanent and natural-looking solution for your smile.",
  },
  {
    id: 6,
    question: "Is there a pediatric dentist in Gachibowli at Yash Denti Care?",
    answer:
      "Yes, we have senior pediatric dental consultants dedicated to treating children with gentle care, ensuring a positive dental experience from a young age.",
  },
  {
    id: 7,
    question: "What makes your cosmetic dentistry in Gachibowli special?",
    answer:
      "We combine artistic precision with dental science to design smiles that are not only beautiful but also functionally healthy, tailored specifically to your facial features.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(2); // Default open item (e.g., index 2)

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section} id="faqs">
      <div className={styles.container}>
        {/* Left Side: Image */}
        <div className={styles.imageWrapper}>
          <img
            src={faqImage}
            alt="Happy Dental Patient"
            className={styles.faqImage}
          />
        </div>

        {/* Right Side: Accordion */}
        <div className={styles.content}>
          <h2 className={styles.mainHeading}>
            FAQs –{" "}
            <span className={styles.highlight}>
              Yash Denti Care, Gachibowli
            </span>
          </h2>

          <div className={styles.accordion}>
            {faqs.map((faq) => (
              <div key={faq.id} className={styles.item}>
                <button
                  className={styles.questionBtn}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  {faq.question}
                  <Plus
                    className={`${styles.icon} ${
                      openId === faq.id ? styles.rotate : ""
                    }`}
                  />
                </button>
                <div
                  className={`${styles.answer} ${
                    openId === faq.id ? styles.open : ""
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
