import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>MediTrack Pro</h1>
          <p className={styles.heroSubheading}>Streamline medical equipment management with ease</p>
          <Link to="/Register">
            <Button className={styles.heroButton}>Get Started</Button>
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1581091870679-1c2a36536229?crop=entropy&fit=crop&w=1500&h=800&q=80"
          alt="Medical equipment in a hospital"
          className={styles.heroBackground}
        />
      </header>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionHeading}>Key Features</h2>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <img
              src="https://images.unsplash.com/photo-1581091870682-a97e610f9475?crop=entropy&fit=crop&w=200&h=200&q=80"
              alt="Inventory Management"
              className={styles.featureIcon}
            />
            <h3 className={styles.featureTitle}>Equipment Inventory</h3>
            <p className={styles.featureDescription}>
              Keep track of all medical equipment with detailed records.
            </p>
          </div>
          <div className={styles.featureItem}>
            <img
              src="https://images.unsplash.com/photo-1557787164-4b43c6e5ef8e?crop=entropy&fit=crop&w=200&h=200&q=80"
              alt="Fault Reporting"
              className={styles.featureIcon}
            />
            <h3 className={styles.featureTitle}>Fault Reporting</h3>
            <p className={styles.featureDescription}>
              Submit and resolve fault reports with ease.
            </p>
          </div>
          <div className={styles.featureItem}>
            <img
              src="https://images.unsplash.com/photo-1599058917219-ada99dca1d27?crop=entropy&fit=crop&w=200&h=200&q=80"
              alt="Job Card Management"
              className={styles.featureIcon}
            />
            <h3 className={styles.featureTitle}>Job Card Management</h3>
            <p className={styles.featureDescription}>
              Assign and track maintenance tasks seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2 className={styles.sectionHeading}>What Our Users Say</h2>
        <div className={styles.testimonialList}>
          <div className={styles.testimonialItem}>
            <p className={styles.testimonialText}>
              "MediTrack Pro transformed the way we manage equipment at our hospital!"
            </p>
            <p className={styles.testimonialAuthor}>- Dr. Emily Smith</p>
          </div>
          <div className={styles.testimonialItem}>
            <p className={styles.testimonialText}>
              "Fault reporting and job card management have never been easier."
            </p>
            <p className={styles.testimonialAuthor}>- Ephraim Ziwoya, Biomedical Engineer</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactForm}>
        <h2 className={styles.sectionHeading}>Get in Touch</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <Button className={styles.submitButton}>Submit</Button>
        </form>
      </section>

    </div>
  );
};

export default LandingPage;
