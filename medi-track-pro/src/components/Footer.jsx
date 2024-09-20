import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'; // Assuming a separate CSS file for footer styles

const Footer = () => {
  return (
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
            <img
              src="https://images.unsplash.com/photo-1581092332993-9b2f0e8524b9?crop=entropy&fit=crop&w=40&h=40&q=80"
              alt="LinkedIn"
            />
          </a>
          <a href="https://www.facebook.com">
            <img
              src="https://images.unsplash.com/photo-1581093361272-6e424c4de77e?crop=entropy&fit=crop&w=40&h=40&q=80"
              alt="Facebook"
            />
          </a>
        </div>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} MediTrack Pro. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
