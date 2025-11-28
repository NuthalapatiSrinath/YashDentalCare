import React from "react";
import { useParams } from "react-router-dom";
import styles from "./BlogDetailsPage.module.css";

const headerBgImage = "/images/Blogbgmain.webp";

// updated data with 6 entries for the 6 images
const blogData = [
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

// Sidebar Data - using the same 6 images
const recentBlogs = blogData;

export default function BlogDetailsPage() {
  const { id } = useParams();

  // Find the blog matching the ID from the URL
  // If no ID is found (e.g. just /blogs), default to the first one
  const currentBlog =
    blogData.find((b) => b.id === parseInt(id)) || blogData[0];

  const pageTitle = currentBlog.title;
  // Use the specific image for this blog
  const mainImage = currentBlog.image;

  return (
    <div className={styles.pageWrapper}>
      {/* --- Page Header Banner --- */}
      <div
        className={styles.pageHeader}
        style={{ backgroundImage: `url(${headerBgImage})` }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Blog Details</h1>
          <div className={styles.breadcrumb}>
            <a href="/" className={styles.breadcrumbLink}>
              Home
            </a>
            <span className={styles.separator}>|</span>
            <a href="/blogs" className={styles.breadcrumbLink}>
              Blogs
            </a>
            <span className={styles.separator}>|</span>
            <span>Details</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Column: Article */}
          <div className={styles.articleColumn}>
            {/* Dynamic Title */}
            <h1 className={styles.articleTitle}>{pageTitle}</h1>

            {/* Dynamic Main Image based on the specific blog */}
            <img src={mainImage} alt={pageTitle} className={styles.mainImage} />

            {/* Static Content (Same for all) */}
            <div className={styles.articleText}>
              <p>
                Looking for a trustworthy{" "}
                <strong>children's dentist in Gachibowli, Hyderabad</strong> who
                truly understands kids? Whether your child is due for their
                first dental checkup or needs specialized care, finding the
                right pediatric dental expert can make all the difference not
                just in their oral health, but in how they feel about the
                dentist for life.
              </p>
              <p>
                In this guide, we'll explore why a pediatric dentist is so
                essential, what services you can expect, and how to choose the
                best clinic in Gachibowli for your little one.
              </p>

              <h3 className={styles.sectionHeading}>
                Why Choose a Pediatric Dentist Over a General Dentist?
              </h3>
              <p>
                Children's dental needs are vastly different from those of
                adults. From baby teeth to braces, their oral journey is
                constantly evolving.
              </p>

              <h3 className={styles.sectionHeading}>
                Here’s what makes a pediatric dentist the better choice:
              </h3>
              <ul className={styles.list}>
                <li>
                  Specialized training to treat infants, toddlers, and teens
                </li>
                <li>Kid-friendly clinics that reduce fear and build trust</li>
                <li>
                  Behavioral management techniques to comfort anxious kids
                </li>
              </ul>

              <h3 className={styles.sectionHeading}>
                Is Your Child Nervous About the Dentist? Here’s What You Can Do
              </h3>
              <p>
                It's common for children to feel anxious. The right dentist
                makes all the difference.
              </p>
              <p>
                <strong>Tips to Help Prepare Your Child:</strong>
              </p>
              <ul className={styles.list}>
                <li>Talk positively about dental visits</li>
                <li>Read kid-friendly books about going to the dentist</li>
                <li>Avoid using words like "pain" or "needle"</li>
                <li>Let them bring a favorite toy or blanket for comfort</li>
              </ul>

              <h2 className={styles.articleTitle} style={{ marginTop: "40px" }}>
                How to Choose the Right Children’s Dentist in Gachibowli
              </h2>
              <p>
                There’s no shortage of options but not all dentists are created
                equal. Here’s what to look for:
              </p>
              <ul className={styles.list}>
                <li>Experience in pediatric dentistry</li>
                <li>A welcoming, playful clinic environment</li>
                <li>Positive online reviews from parents</li>
                <li>Transparent treatment process & communication</li>
                <li>Emergency services available</li>
              </ul>

              <p className={styles.proTip}>
                <strong>Pro Tip:</strong> Always schedule a consultation before
                the first visit to observe how the staff interacts with
                children.
              </p>
            </div>
          </div>

          {/* Right Column: Recent Blogs Sidebar */}
          <div className={styles.sidebarColumn}>
            <h3 className={styles.sidebarTitle}>Recent Blogs</h3>
            <div className={styles.recentPostsList}>
              {recentBlogs.map((blog) => (
                // UPDATED: Removed div wrapper, applied class directly to anchor tag
                // This allows 'display: flex' to work on the image and text immediately
                <a
                  key={blog.id}
                  href={`/blogs/${blog.id}`}
                  className={styles.recentPostCard}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className={styles.recentPostImage}
                  />
                  <p className={styles.recentPostTitle}>{blog.title}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
