import React from "react";
import styles from "./TreatmentItem.module.css";
import TreatmentItem from "../../components/TreatmentItem/TreatmentItem.jsx";

/**
 * TreatmentsPage — example page that uses TreatmentItem (dynamic)
 * Updated with specific .webp images from the treatments folder.
 */

const treatmentsData = [
  {
    id: 1,
    title: "General Dentistry",
    content: `Welcome to Yash Denti Care, where brighter, healthier smiles are our priority! Our General Dentistry services are designed to provide comprehensive oral care for all ages, ensuring that every patient receives the best dental care possible. From routine check-ups and cleanings to fillings, extractions, and preventive treatments, our experienced team is committed to enhancing and maintaining your oral health. With a comfortable, welcoming environment and state-of-the-art technology, we make every visit a positive experience. Trust Yash Denti Care for all your general dentistry needs and enjoy a lifetime of beautiful, healthy smiles!`,
    imageSrc: "/images/treatments/General Dentistry_11zon.webp",
    imageAlt: "General dentistry patient",
    imagePosition: "right",
  },
  {
    id: 2,
    title: "Pediatric Dentistry",
    content: `Welcome to Yash Denti Care — we make dental visits a positive and enjoyable experience for children with our specialized <strong>Pediatric Dentistry</strong> services. Our friendly team and kid-focused environment help young patients feel at ease while receiving gentle, expert care. From routine check-ups to preventive sealants, we build a foundation of healthy dental habits.`,
    imageSrc: "/images/treatments/Pediatric Dentistry.webp",
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
    imageSrc: "/images/treatments/Teeth Whitening.webp",
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
    imageSrc: "/images/treatments/Fillings_11zon.webp",
    imageAlt: "Dental tooth fillings",
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
    imageSrc: "/images/treatments/Root Canal Treatment.webp",
    imageAlt: "Root canal treatment",
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
    imageSrc: "/images/treatments/wisdom tooth extraction.webp",
    imageAlt: "Wisdom tooth extraction",
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
    imageSrc: "/images/treatments/Dental Crowns and Bridges_11zon.webp",
    imageAlt: "Dental crowns and bridges",
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
    imageSrc: "/images/treatments/Complete Dentures.webp",
    imageAlt: "Complete dentures",
    imagePosition: "left",
  },
  {
    id: 9,
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
    imageSrc: "/images/treatments/Clips and Braces.webp",
    imageAlt: "Clips and braces",
    imagePosition: "right",
  },
  {
    id: 10,
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
    imageSrc: "/images/treatments/Gum Diseases.webp",
    imageAlt: "Gum disease treatment",
    imagePosition: "left",
  },
  {
    id: 11,
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
    imageSrc: "/images/treatments/Laser Treatments.webp",
    imageAlt: "Laser dental treatment",
    imagePosition: "right",
  },
  {
    id: 12,
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
    imageSrc: "/images/treatments/Dental Implants_11zon.webp",
    imageAlt: "Dental implants",
    imagePosition: "left",
  },
  {
    id: 13,
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
    imageSrc: "/images/treatments/Smile Designing.webp",
    imageAlt: "Smile designing",
    imagePosition: "right",
  },
  {
    id: 14,
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
    imageSrc: "/images/treatments/Oral & Maxillo-Facial Surgery.webp",
    imageAlt: "Oral and maxillofacial surgery",
    imagePosition: "left",
  },
];

export default function TreatmentsPage() {
  return (
    <div className={styles.page}>
      {/* Hero (left title + breadcrumbs) */}
      <header className={styles.hero}>
        <img
          className={styles.heroImg}
          src="/images/Blogbgmain.webp"
          // src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMSFRISFRUVFRUVEBAVFRUQFRUWFhUXFRYYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGisiHx8tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADwQAAEDAgMFBgMHAwQDAQAAAAEAAgMEEQUhMQYSQVFhEyJxgZGhMkKxBxRScsHR8CNi4TOSotJDgvEV/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQIDBAUABv/EACsRAAICAQQBAwMDBQAAAAAAAAABAhEDBBIhMUETIlEFYXEUI5EyQlKh4f/aAAwDAQACEQMRAD8A9Za5IpkSJaxeWxwlkRek6INxd3USGJr2qR6TarBvBHJileFGWrMyxaZKmJqmaomhTNClwAkOXE4BLdVyiMYpGttqu2AzULpLrX0P0+/3MhVz6jbwjsjkxJxTSVuJUqRnSk27Z1z1xhuqyplLXdEXTSKVwpCKVsIkNgqmpqBdHVstmrPxv3nlNjj5BJh1NL3lbMKpIxZ6t4yjNCxZI5B1FQA6yJc5Z2qlL5gBwXQjYZujQXyVXjAIG8OGqsL5BRS2cCDoUrjYmaHqQaMNVVQde51UUBact71CnxbD9x5sO7qqcuscrqGcKPOuU4yqXgsn04IyI81ZYRQk6WPNVNEHuNjp1WqoC1g4DLVJTJscYN7ujr2Nh0yvq3hfoFMyqFr3yVNiNWXutfLn+yHmnDRrc+KRwsm/UKF/CLDFq8PbuN8yqdke467Lg8TfQqB1cG3N+97BVdTil8mnXU80zW1UNpcEtVP1Hwvk0E+0krBuhwLvxbouPNVFbj00jSx5a4Hm0XHgVUdsmByMMdd9m+5cUnwiWySmZTkhJSgPbaco6MKvpkfGvJ6Ho2cvZKQoZFKSoZFfzL2kUQcpbq6QurDnibbJxgCkam2Tgux4mmBjwuk2Td62aCq63dFz6Ld0Oiv3zKmfNt4XZNNJdRMKqanGw0d7dF+qJw/EGPGS3FSVGdK27ZYgpqa14UgXClNjBsuUFSubROs1VlDKrUVcCFupFli1V3VXYTmU7EjkuYQuSqILuRYub3grFgyQEkgujoZLhJLokXZDVy7rSqPCCHSF3VF49PusKp9m5NT1TwXAk37kjVPKGkKeHZKJwulGBKiMOFiLrO1+Cm+9GfJaV6gkCLSfDK+bBDJ/UjK/ezHk4G6hfVPk0vZaSoia74gCq2WhaNMknpfBRloG33aK9rnMzcbearqzEtbKwrYL6qompEHjryT49Dj/ALlZXzTudrpyXASiRTKeOnCjo04qlSBooiUbDTp7AApWo0GwhpACSgskjR249rjispwoZJLId1WFgwxKPRruVh5co3FAGrUjJrqSUbQidBW6u7iUZT3EDVR+hEbeQuTXyAaoLEMXjiBLiPVYvG9u2tNmi5Og4+ieGLHF3IVyk+Im1ln5ELMbQYwGXDc3205LJRY5V1LrMv0DQtFQbGTy96d4bfUDN3mVPPVqtsELDTO902YXFayR5vcg+P0Q9PtBNDYNe649F6vF9n9L8+87xdb6Jzvs/oLW7L/m5V1kkTPHExeFfaERYTW8Rr6L0DC8ZjmYHMcD4FU9T9mlE4d0PafzX+qrRsZUUpLoHB7eIGRPlzVnFq2nUuivl0qauJdY9LvBUlDUWcAooppDdsgII4EWKDjfaQeK3sVOPBiZbjLk0uIHuhR0T7LtWbsCipEvgbyHsBcVcRR7rVBQQ5XRM7rBQyduiWKMntXUWFlDs4LNQm1Et3W6qxwNtmBTpVEhu5FzG9cD1Gx2abKUjQ6YpJLqO6j4pxRoFkcjLoGoisrAlC1JuuOKSoYgJmK2mYgZo0skGLKxzVwIx0Ki7JR1RLdkQCnY1IMUrAu7B0N3UlLZJcdZ6piM9gVnnYjmtNW0m8qd2Ei+ixGmayoC+/Kyoqm6hOGDknGHcsBx+iHIS3ZWZZeqotpNpI4GHPek5A6KtxvGxGDGzN/PgFlW4PU1Li5kUj26kgZX8dEG34HjDyyvrcRkkvNISSTZreAQuB4PJUzBg+J2b3cgeHRWWLUD2bsb2lpaNCCMybD6rb/ZthIjiMhHee459BooiZI0OAYFFTMDWNF7C7uJKuAEmhQV1ayJu882HuT0TJURttsnITHOCzNTj80lxDGQ3m4G5/ZMp5ag5uKRzSJY4n5NK9yBrassF0VRZjPVPnpGOFjp0K6m1aOtRdMwmNYq55sIg46X4qlloprh5icADe4zy8F6bFg0QOQPqocUou44Rv3XWIBIDm36hWMGozYf6XwQZsGHNw1yZR8gMYITsPbcrK//ALjhM6KVrYntJDhvd024g8SRbhxWvwWzgCFu4cyyw3GJmwvFkov6c2CirZclMwZKtxaWzSuStgbpGKxqS8nmrzCXd0LMVkl5PNaLCpO6rDRXi+Sz381JK5CSuUwdcJWh7IyUi5Mukuo5scHKOQLl1IMwuaOTAXxEqI0pVxHEEnMCjY9FC+mQ0kFlezMQksK4PRUGNNsrB8SiMKWqGsGXET2SS4B7E+NRfdb8EWnbyyDWAHUZ5KsrcJmffd3QSLC50V66YJjqoJWkFWZfBdhmNcZKk9q8m4b8g8ea1zYw0brQABoALAIR9aFEMQAOa5Ugu32V+1+AmqhIAb2jS0sOmhBIvyIT8EojDGGOFiEccQB8E904c26jnFPkeMmlTGyShoJPBVUNJ2pMkgvfQcA3giaiJ0m61oNiczwDRzKWMOMMd7gC1t/gwcSb8hc+SiptWTKo8eSuxavZC1zjuhrPicTZrehPE5jIA+Swke3zTKARZgvc+Lsju62sOPNRyRS4tJZm9HQRGzDn/UcL3fzcczn73V/QbEUsYsyBrjxc8An3yHkEkoxXfZLGUn+DUYHWMljDmkEOzFiCrQDLxKrMHwpkDbNDW9GgAIt9RYm+gXJ0uRZLdLgixvE46SnfPM7dYwXJ9gBzJJAA6rI4dtUaqJ8oifG1jiAHEEvaG718uPCyK2rws4kI4N4tiZM2SSwvvtYDZt+GZB8lbjBGNaGtG61uQHJLJ7lwSwSx8S7Mfs5LFisDXPjYJONxoR+E6rXUOCiJtgR7ocYe2N28wtabkmzbXJ1vZFsrSMnKXDnnhuvJHn00M1Wjs8oYM1msWrN69lo6pge0jgQsniFIWbwGYAv1A6j9VtaPUxy8PhmLrtJLDyuV/sy0x7/mtFhWizUp7/mtBhT8lpGWizlKkp33CGkcu0z0K4GvkmvmnXUMhXA9LQbHvXWvTCVGHIsCDxMkZEI1ycZFG4kqZMc0x7Uxsqd2oQo6yF0Sj7FE7y4M0GgoDMa6iixcQCegy1gCElxQDUoWogc7UEdVU1eEy6g3HVYcmzcjt8ljNivJBy4mefugYcKnJsXBo90ZHs43VxLj1KTkdpA7sUv8w9U4YgPxIsYLEOAUgo4m8B6JhOAVteDpc+AUsrpXt3WuLBzte6kDRfKy721j0XABIKyqi/vbzafqCjMQxRk8LoKhh3ZG2IIIuLj5houM1u3MdEbGPxAeea7oFENC6JrQ1ga1jQAALBoHAC2is47cLLPVLKcE/Kf7Tb20XIt4ZxyA+OR9QoVtLcseWro0T3IOnIMhB4i6rTikjfjaSOevuFLSVkZeHhxGViMiEJRbaoWM1FNS4ZoWRADIAKpxCsJduRtLnch9T0SxjGGsjLm96/IEoGoxNlHRvrdZd0Xa4nN5Ng0DhqnrmkGFRW983wvz9y0fhUTGdpUSkC3eu4Mbc+/uqeeluC+nmMsdr9m8d639juPgfUrymXaOorZ+0nfe5sGgWY0cA0A++q9R2WqWxQGSRzWRjLedkCeQJ18kO3SXBI3OMdzlb+PBDS4kLNOrS4ZcwMyPb3R8mMRz2MwsxwLTYXIacslmJKuN00gifvMe7fjcMrPPxN0sRmfJXUeEMe1pcS4DPdsACbcbeKbHNQ9vkg1GN5GpLoY/YijmzgqHB3Ilpz6g5qIbGVEWhY9vMG3qFkaitkp5nMubNcQM+HD2Wjwfa14ycXEdcxe61lPUQV9r+f8ApjOGnk66f8D6nD5mfFG7yF+XLxCBhks5bOi2iZJrY+B/T/2Xa+ghqBvAC/BzRmLZDyFwPFPj11cTQk9H/izKTFQh6OxPD3xa5t4OGnnyVaCrsZKStFRxcXTCo3jiuvA4KFqOpsKnk+CJ5HMjdHq6wRbS7YEm+EgYFIhX1PslKfjexvQXcf0HujmbLRjWR58A0fuq0tTiXksx0+R+DJWSDCtednYP7/8Ad/hMOzTfle4Dq0H6WSLV42O9LkRlmMKka2y0Z2cdwkHm0/ugMQwl8Y3jZzeYvl4hMs0JOkxXhnFW0Vq6mF6Slois3Es4QclSELM4oORrjwKwmzcSQZLXAIWXFrnJCvw1zuJCCfhcl/jsPdJKySNB02I2zJshhXuf8DXO9giKbCWDXvHqrEMY3Sy5WK6QHT00ztSGg8hn6qxhw9jc3EuPU39k0VgCHmrd74c+vBMIw6WdoGSosRxsC4afEqeoka1pc86fVYiuqd5xPMkqHLJrhF3R4oye6XgIbWOe8m51V7RPcs3h7c1pqJV0jQnkDHXIQm4GvbvDI35jP+XVvBGp5sPDx14eKLi+0VpTT4ZnaOomfVOigcBG0Bzw43Njy/ys7t3tDTuk7CoimduWIcHtY8Ag5tGbXDXUcFpanApQ9zobBzyN/vFrgALENI4HJYqX7NcQnlLpHRtDie8+VzyGX7oyGdgpoO+yCUI3aK7DjQNcJPvD9xtz2csD7kgZAujuCL2vpkjZMAxPFHh4c/shk187RFG1nAQQtzDfIXW72T+zanpSJJT28ozBc2zGn+1mfqbrdOAAyClulwI2l9zzbB/s3fB2bnVJc+M71uzs05EEa8itZTd0FpVlMSq6ohIzGqgly7JLbRgduaTdlbINHix/M3/B9lWYc5a3a+DtKdx4sIf6ZH2JWLoHr0egyb8S+3B5rX49mV/fkvCBroeYyKs8IxsxkNcegPsAeuZ9yqgHJQbwvYqbLp45F9yvi1Esf4PTqSobMLZEn5eBvy6foE0bGRF+85zg38Dba/m5dFndia7sqgNce49rmi+rXmxFuhsR6LfTVA5rLlvwSro1IbMyvs5R4bBAP6bGtPPV3+45qV1QOH8CqZq2wNyB1upqKne8AnuN/wCX+PNV3JyfJYUVFBElSOac1rnaC3U5KeKBjcwM+ZzKbJUBCg38EP3YjMu9lMZeFghZqrJV0lZnqltIarLnfTHsDsuBQ8BJaCeP0UzUyYrM9UbNP3juObu3yBvcBcWiLl1WFqsnyQfpsfwVIfyI80ySdo11Qhd/LoaoaTxKq2WaCZ65o4hV8uIhQOowdSfdRPom8z6pXY6aRN9/JOqf2znfDn14KvFGL3I91b07mgZ2AAQVnSrsY2mv8Zv04ILGcdhpI9+ZwaPlb8zjyaOKzG1X2iRQkxU1pZNC6/8ATafH5j0C8pxXEpaiUySuL3E2udABwA4DonSEs9Cn2tdUPJPdZ8rb6DmeZUrZd7NYfDJeHVavDZLi3JVci5L+nnSo02GsWjomrPYWVpqIKNE0mWtO1HxoKFFscnK7CN0a8VK1QNcpGuRQjJLpOK4uEprFI3hQPaOKfPIgJamyRskQFiEAO80/C4EHwIXmTIjG9zHatcWnyXp09RdYTamMNma8f+Ruf5m5X9N1af0vLU3D5Mz6piuCn8HWSZIXe7yTJMkOZM1vJmDRcwyZLdOo6l5Z93lBbZu+2VpcwtIHea7UO462PusNgFKZ5mRXtvHM8mgXcfGwK9hpmMiY1jbNY0WGfALP17VpGhoE6bKrD8CDH9rK4uI+EHQeDeCuDOBc6AISoxKJuh3j45LOYztKxuT3AA/C1oJc63JouSs00bs0slSGsuddFTVGJtaLkgDmTYKppX1VUAGsdFFf4n27Qjo35VfYds/DEQ5w35B8zyXEHpfTySsdfcBp5pJj/TY4t/GbtZ6nM+QKOhwqxBkfe3ytFgehJuT7KzfMAgqmrACVoZSC5JwUzth/OmaoZMST4aonM8f5bxK7cBxLftQkgQ/ne/QZLqFgooYpRxAKIuzkfIqjirBo6/iD+inFW3xHmCgmO0WRkYNC4eIv9ELJLfj7IOoq2MaXOdZoBJJ4ALy/aL7QpHkspbxszG+QC5w5gfKmXIp6Bju0lPSC8rwXnRjbF58uHmvM9pNtZ6rea0mOHQMBzd+cj6BZSWVz3FziXOOZJJJJ8U/QAefnwRoA6Ee31XC21vNPiXZGboHO/wCiF8jUWeGsJWkobiyoMEqCHNZubwcfQc1qex4gZKtN8lnH1waDC5VqKKVYmhkstFRTqInvg1EUyKjkVHDOjIZ0yEZctenteq5k6k7dMIHmRRPnQbqhCzVSBwRU1aq56hMlluh3vS1YbFLMVk9q5rmIcRvemSvayqACw2NVhdMf7bAfX9Vf+nw/d3fBQ+oT/ar5DIpclG5+aGilyXS9ehs8/RdYbWuic2Rhs5huCtc/bnebYxOc82AAcLE9Mr+Vl5/HJkjcHrmxTxyPF2tdc+Gl/K9/JRZscZq2romw5JQdJ1ZtGNqp8nbsYPysGYHVx/RaDBtn4ou8/vP5uNyhabEIiN5jmkHiClNjDBkHXPIZrIbbNVUjT/eGtFhYKGeq7pdcWWWfiMjjZrD5mykdQVEoAc4Nbe9mk/VI0MnYTXYyxnxOA8SM1XOxoyAiOOR5JFjulrbeJVrQ4DCzMtBdxJzPurA7rRkAEjslVFLSULiN6Sw6D+Zo9gHn/Mgo5prnomGQBKFhe8OvlaySED0lwDCCe2uibPicTGlxLrNFzkPrdRzQtb8Xu79AsntNXXbuNyHJJFDSZVbYbUSTnsm9yLUi/ed+Y8uiyylqzd/ko7KdpLoSLbXImBPefdIZBJ6ASembofVT1TLlCRSluYRBqAehNkjTskTVF5s26y2kUjYonSO5ElefUGIsi5l3KyNqMZdMA05NHAfqq04Nss48kYxLXDMScT3uf8C1NBVLJYeGkZK6pLhLIKZrIJ0dFIqCklOSt6aVKEs2SJxmULCk9iO4FHZJ0K+W6c6EqJ0BXbgNDXygKsrMSAyGZ5AE/RXTMJJ70nk3/t16IptEGi4AHormPSykrlwUMusjB1FWY9kMkhuWu8FVV2y1U+VzmsADjcEvaOC9GEdtP0REFKTmeHoruHF6XKKObUPLw0eR1uEVEH+rGQ38Qs5v+4aeaE7Re5sguCA0HmCBn5LznafZbdcXxANNydzRp/Ly+ngrkct8MqyhRlxIuiVCSuLSQQQRkQdQU0SqXcJtDxKjsMxN0Lt4WPMHiqYPVxgmGGY3cbMGvM+CMqapgVp2jWUm2bBrFbzujxt1EeY8j+yp6nC4C3dADbcQc1RVWEObm1wcPQqv6GKRP+oyI379sIy3uEnM3O6dOAzQw2ka87t7E88h6rz2OV7DxH0VlBOHi9vHooMunUOe0WMeoc+PJta6v7Nhe74Wi5N8yeg48gFVjaeK9nF46GN/1tYKlfKSA3eLmtNw0nQoqh7Im7hn1VLIqft6LMJuvcXrMdYRdslhwAGSSnhoqewyb7JKK2S7kYDEKs53KyeJvuepRtZUuDrEdc1VVEhDXOOpyCtRwOPLIJZlLhFJObvK6Ao2m5Up4eKil2Troa7h/OKTjl5Bcl4JfsgE7GLhSNCYHLpdYE8SuAQTOzTo6hwURXE9IWy+wrFLGxK1+G1wPFeZtNldYZiZaRdQZMXwTY8h6vRvBVxBGsXguJBwGa11DNpmqjVFtO0WkTSimR35psNijYmDkijmDil8UfTUIZ3jfe4DW3+UTTxAZkZp8sgGv/xX9Pp690jN1Opv2x6BxBfMoeoHAKSepvpoh2Rk6K+jNbHQQZ/zM8gjbfKFHG3dyGbjqf2REbLINhSHRtXZYmPG64A+IUb5VG2TNAJn8Z2KppzctLH8HMNvUaFZLEfs2mbcwyNeOThun1FwvUXZ/umCTgfVOpyQKR4XiOCVUA78ElubW7w9l3Z/F5N50JBb8wOYy69V7qWgoKqw2KTJzGnxAXeo20I4GNo3gsF7EldqIm8lfv2bjHwFzel7hQuwlwBGTuR0Ph1Ck3oTYzFV0N72PqqxkhicDnbjYZei3FZhxJN2Oz6D1VZNgt9AfQ+i520GL2voopKtt8r5+YRkFS38Q9bqGqwB3y3afA6+Cr5BJD/qAhv4tW+pOXmqM8comhjyxkaMT+PokqVlS0jX3H/VcURJRn6l4ed52vRUeJz72nwtHuupKxkm3wQ4oKyrY39FLLw8V1JVX2XBtUPYlR30SSXLo4QK5M7QLiSK7A+iMpJJJxBBP/RJJAKLbBcVMbgDovTsDxLeASSVXPFFnDJmpo6lX1GbgHgVxJHRxUp8+CPWTcYceQ0yqCRt9SkktQyWNELU/ftkNSkkiKOa4DXVRSVa6kuRzdELqi64x9/BdSRBYYx6ZIUkkEMyMVG7kVLvpJLmgRYt9M3kkkBhr7KF8YKSS6zgOWgaUNLh4tY2IPO2iSS7cwUipfs1CTfdI6AkAeAvkkkkhtXwNvl8n//Z"
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
