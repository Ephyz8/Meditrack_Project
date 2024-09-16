// src/pages/LandingPage.jsx
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
          <Link to="/get-started">
            <Button className={styles.heroButton}>Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionHeading}>Key Features</h2>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <img
              src="/images/inventory-icon.png"
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
              src="/images/fault-report-icon.png"
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
              src="/images/job-cards-icon.png"
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
            <p className={styles.testimonialAuthor}>- John Doe, Biomedical Engineer</p>
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

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>About MediTrack Pro</h3>
            <p>Your solution to efficient medical equipment management.</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Links</h3>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className={styles.footerSection}>
            <h3>Follow Us</h3>
            <a href="https://www.linkedin.com">
              <img src="/images/linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com">
              <img src="/images/facebook-icon.png" alt="Facebook" />
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          &copy; 2024 MediTrack Pro. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
