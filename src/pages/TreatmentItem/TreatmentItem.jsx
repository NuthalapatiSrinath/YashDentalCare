import React from "react";
import styles from "./TreatmentItem.module.css";
import TreatmentItem from "../../components/TreatmentItem/TreatmentItem.jsx";

/**
 * TreatmentsPage — example page that uses TreatmentItem (dynamic)
 * Replace imageSrc values with your actual paths or urls.
 */

const treatmentsData = [
  {
    id: 1,
    title: "General Dentistry",
    content: `Welcome to Yash Denti Care, where brighter, healthier smiles are our priority! Our General Dentistry services are designed to provide comprehensive oral care for all ages, ensuring that every patient receives the best dental care possible. From routine check-ups and cleanings to fillings, extractions, and preventive treatments, our experienced team is committed to enhancing and maintaining your oral health. With a comfortable, welcoming environment and state-of-the-art technology, we make every visit a positive experience. Trust Yash Denti Care for all your general dentistry needs and enjoy a lifetime of beautiful, healthy smiles!`,
    imageSrc:
      "data:image/jpeg;base64,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", // replace with your image
    imageAlt: "General dentistry patient",
    imagePosition: "right",
  },
  {
    id: 2,
    title: "Pediatric Dentistry",
    content: `Welcome to Yash Denti Care — we make dental visits a positive and enjoyable experience for children with our specialized <strong>Pediatric Dentistry</strong> services. Our friendly team and kid-focused environment help young patients feel at ease while receiving gentle, expert care. From routine check-ups to preventive sealants, we build a foundation of healthy dental habits.`,
    imageSrc:
      "data:image/jpeg;base64,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", // replace with your image
    imageAlt: "Child dental check",
    imagePosition: "left",
  },

  {
    id: 3,
    title: "Teeth Whitening",
    content: `
    At Yash Denti Care, we offer professional teeth whitening services designed to 
    brighten your smile and boost your confidence. Whether you're dealing with stains 
    from coffee, wine, or smoking, our advanced whitening techniques provide safe and 
    effective results. We offer both in-office treatments for quick, noticeable 
    improvements and take-home options for gradual whitening at your convenience.

    Our experienced team ensures a comfortable and personalized experience, using 
    gentle methods that protect your dental health while delivering long-lasting, 
    natural-looking results. Trust Yash Denti Care to help you achieve a radiant, 
    confident smile.
  `,
    imageSrc: "/images/id3.jpg",
    imageAlt: "Teeth whitening treatment",
    imagePosition: "right",
  },

  {
    id: 4,
    title: "Fillings",
    content: `
    At Yash Denti Care, we provide high-quality dental fillings to restore teeth that 
    have been damaged by decay or injury. Our fillings are designed to blend seamlessly 
    with your natural teeth, ensuring both a functional and aesthetic solution.

    We use advanced materials such as composite resins, which offer durability, strength, 
    and a natural appearance. Whether you need a filling for a small cavity or a larger 
    area of decay, our skilled team will ensure that the treatment is comfortable, 
    precise, and tailored to your individual needs.

    Trust Yash Denti Care to restore the health and beauty of your smile with our 
    expert filling solutions.
  `,
    imageSrc: "/images/treatments/fillings.jpg", // update with your correct image path
    imageAlt: "Dental tooth fillings illustration",
    imagePosition: "left",
  },
  {
    id: 5,
    title: "Root Canal Treatment",
    content: `
    At Yash Denti Care, we offer expert Root Canal Treatment (RCT) to save severely 
    damaged or infected teeth and restore their function. When the pulp inside a tooth 
    becomes infected or inflamed due to deep decay, injury, or trauma, a root canal 
    can help prevent the need for extraction.

    Our skilled team uses advanced techniques and modern equipment to remove the infection, 
    clean the tooth, and seal it to prevent further damage. The procedure is virtually 
    pain-free, and we ensure your comfort throughout.

    After treatment, your tooth will be restored with a crown or filling, allowing you 
    to regain a healthy, functional smile. Trust Yash Denti Care for reliable, 
    compassionate root canal treatment that preserves your natural teeth.
  `,
    imageSrc: "/images/treatments/root-canal.jpg", // update with your correct image path
    imageAlt: "Root canal illustration",
    imagePosition: "right",
  },
  {
    id: 6,
    title: "Wisdom Tooth Extraction",
    content: `
    At Yash Denti Care, we specialize in safe and effective wisdom tooth extraction 
    to relieve discomfort and prevent future dental issues. Wisdom teeth, typically 
    the last set of molars, can often cause problems such as pain, infection, or 
    misalignment due to lack of space in the mouth.

    Our experienced dental team uses advanced techniques to ensure a smooth and 
    comfortable extraction process. Whether your wisdom teeth are impacted, 
    partially erupted, or causing other complications, we provide personalized 
    care to address your specific needs.

    After the procedure, we offer guidance on post-extraction care to ensure a 
    quick and easy recovery. Trust Yash Denti Care to help you maintain optimal 
    oral health with expert wisdom tooth extraction.
  `,
    imageSrc: "/images/treatments/wisdom-tooth-extraction.jpg", // update with correct path
    imageAlt: "Wisdom tooth extraction illustration",
    imagePosition: "left",
  },
  {
    id: 7,
    title: "Dental Crowns and Bridges",
    content: `
    At Yash Denti Care, we offer high-quality dental crowns and bridges to restore the 
    strength, function, and appearance of your smile. Dental crowns are custom-made 
    caps that cover damaged or weakened teeth, providing them with added protection 
    and a natural look.

    Whether you need a crown for a decayed, cracked, or root-canal-treated tooth, we 
    ensure a perfect fit that blends seamlessly with your surrounding teeth.

    For patients with missing teeth, our dental bridges offer a durable and aesthetic 
    solution by filling the gap with artificial teeth supported by crowns on adjacent teeth.
    
    Both crowns and bridges are designed for long-lasting durability, improving your 
    oral health, bite, and confidence.

    Trust Yash Denti Care for expert restorative care that helps you smile with ease.
  `,
    imageSrc: "/images/treatments/dental-crowns-bridges.jpg", // update path according to your project
    imageAlt: "Dental crowns and bridges model",
    imagePosition: "right",
  },
  {
    id: 8,
    title: "Complete Dentures",
    content: `
    At Yash Denti Care, we provide custom-made complete dentures to restore both the 
    function and appearance of your smile when you have lost all your natural teeth. 
    Our complete dentures are designed to fit comfortably and securely, helping you 
    eat, speak, and smile with confidence once again.

    Made from high-quality materials, our dentures are crafted to look natural and 
    provide a comfortable fit, enhancing your facial appearance and oral health. 
    Whether you need full dentures for the upper, lower, or both arches, our 
    experienced team will ensure they are tailored to your needs, providing a 
    solution that’s both durable and aesthetically pleasing.

    Trust Yash Denti Care for expert denture solutions that help you regain your 
    smile and confidence.
  `,
    imageSrc: "/images/treatments/complete-dentures.jpg",
    imageAlt: "Complete dentures model",
    imagePosition: "left",
  },
  {
    id: 8,
    title: "Clips and Braces",
    content: `
    At Yash Denti Care, we offer advanced clips and braces to help straighten teeth, 
    correct bite issues, and improve the overall alignment of your smile. Our team 
    provides personalized orthodontic treatments using high-quality materials to 
    ensure both effectiveness and comfort.

    Whether you're dealing with crowded, crooked, or misaligned teeth, our braces 
    and clips offer a reliable solution to achieve a straighter, healthier smile. 
    We use traditional metal braces, ceramic braces, and modern clear aligners, 
    depending on your needs and preferences.

    With expert care and precise adjustments, Yash Denti Care helps you achieve 
    a confident, well-aligned smile that improves both function and appearance.
  `,
    imageSrc: "/images/treatments/clips-and-braces.jpg",
    imageAlt: "Clips and braces orthodontic treatment",
    imagePosition: "right",
  },
  {
    id: 9,
    title: "Gum Diseases",
    content: `
    At Yash Denti Care, we specialize in the diagnosis and treatment of gum diseases 
    to help you maintain optimal oral health. Gum diseases, such as gingivitis and 
    periodontitis, are common conditions that can lead to tooth loss and other 
    serious health issues if left untreated.

    Symptoms like bleeding gums, bad breath, and gum recession may indicate the 
    presence of gum disease. Our experienced team uses advanced techniques to treat 
    gum infections and restore the health of your gums. Treatment options include 
    deep cleaning (scaling and root planing), antibiotics, and in severe cases, 
    surgical procedures.

    We focus on both treating existing gum disease and providing preventive care to 
    help you avoid future issues. Trust Yash Denti Care for expert gum disease 
    treatment and personalized care that keeps your gums healthy and your smile bright.
  `,
    imageSrc: "/images/treatments/gum-diseases.jpg",
    imageAlt: "Gum disease illustration",
    imagePosition: "left",
  },
  {
    id: 10,
    title: "Laser Treatments",
    content: `
    At Yash Denti Care, we offer advanced laser treatments to enhance the 
    precision, comfort, and effectiveness of various dental procedures. Laser 
    dentistry is a cutting-edge technology that allows us to perform a range of 
    treatments with minimal discomfort and faster healing times.

    Whether it's for soft tissue procedures such as gum contouring or treatment 
    for gum disease, or hard tissue treatments like cavity preparation, our laser 
    treatments are designed to be minimally invasive with reduced bleeding and 
    swelling.

    With laser technology, we can deliver highly accurate results while improving 
    your overall dental experience. Trust Yash Denti Care for innovative laser 
    solutions that provide quick, effective, and comfortable dental care.
  `,
    imageSrc: "/images/treatments/laser-treatments.jpg",
    imageAlt: "Laser dental treatment",
    imagePosition: "right",
  },
  {
    id: 11,
    title: "Dental Implants",
    content: `
    At Yash Denti Care, we offer advanced dental implant solutions to replace 
    missing or damaged teeth, restoring both function and aesthetics to your smile. 

    Dental implants are a durable and long-lasting alternative to traditional 
    dentures and bridges, providing a stable foundation for replacement teeth. 
    The process involves placing a titanium post into the jawbone, which acts as 
    a root for the artificial tooth, ensuring a secure fit and natural appearance.

    Whether you're missing a single tooth or multiple teeth, our skilled team will 
    customize the treatment to meet your needs, ensuring seamless integration with 
    your natural bite and smile. Trust Yash Denti Care for expert dental implant 
    services that help you regain your confidence and oral health.
  `,
    imageSrc: "/images/treatments/dental-implants.jpg",
    imageAlt: "Dental implant illustration",
    imagePosition: "left",
  },
  {
    id: 12,
    title: "Smile Designing",
    content: `
    At Yash Denti Care, we offer personalized smile designing services to help 
    you achieve the smile you've always dreamed of. Smile designing combines 
    various cosmetic dentistry techniques to enhance the appearance of your 
    teeth, gums, and overall facial aesthetics.

    Whether you're looking to brighten your teeth, correct misalignment, or 
    improve the shape and size of your teeth, our skilled team will create a 
    customized plan tailored to your facial features and natural beauty.

    Using advanced technology and high-quality materials, we deliver stunning, 
    natural-looking results that boost your confidence and leave a lasting 
    impression. Trust Yash Denti Care for a smile design that reflects your 
    personality and enhances your overall appearance.
  `,
    imageSrc: "/images/treatments/smile-designing.jpg",
    imageAlt: "Smile designing illustration",
    imagePosition: "right",
  },
  {
    id: 13,
    title: "Oral & Maxillo-Facial Surgery",
    content: `
    At Yash Denti Care, we specialize in Oral and Maxillofacial Surgery, offering 
    expert care for a wide range of complex dental and facial conditions.

    Our surgeons manage issues related to the mouth, jaw, teeth, and face, 
    including impacted wisdom teeth, jaw misalignment, facial injuries, cysts, 
    tumors, and other oral and facial concerns. We use advanced techniques and 
    equipment to ensure precise and minimally invasive procedures, promoting 
    faster healing and reduced discomfort.

    Whether you need infection treatment, reconstructive surgery, or trauma care, 
    our experienced team provides safe, effective solutions to restore your oral 
    health and facial aesthetics. Trust Yash Denti Care for compassionate, 
    high-quality surgical care.
  `,
    imageSrc: "/images/treatments/oral-maxillofacial-surgery.jpg",
    imageAlt: "Oral and maxillofacial surgery",
    imagePosition: "left",
  },

  // add more items as needed...
];

export default function TreatmentsPage() {
  return (
    <div className={styles.page}>
      {/* Hero (left title + breadcrumbs) */}
      <header className={styles.hero}>
        <img
          className={styles.heroImg}
          src="data:image/jpeg;base64,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" // reuse your hero or change path
          alt="Hero"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Treatments</h1>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <a href="/" className={styles.breadcrumbLink}>
              Home
            </a>
            <span className={styles.breadcrumbSep} />
            <span className={styles.breadcrumbCurrent}>Treatments</span>
          </nav>
        </div>
      </header>

      {/* Centered page heading */}
      <div className={styles.pageTitleWrap}>
        <h2 className={styles.pageTitle}>Treatments</h2>
      </div>

      {/* Treatments list */}
      <main className={styles.main}>
        <div className={styles.treatmentsWrap}>
          {treatmentsData.map((t) => (
            <TreatmentItem
              key={t.id}
              title={t.title}
              content={t.content}
              imageSrc={t.imageSrc}
              imageAlt={t.imageAlt}
              imagePosition={t.imagePosition}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
