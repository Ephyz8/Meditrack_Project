// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css'; // Import CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>About Us</h2>
          <p className={styles.footerText}>
            MediTrack Pro is dedicated to providing innovative solutions for equipment management and fault reporting. Our platform helps streamline maintenance processes and improve operational efficiency.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Quick Links</h2>
          <ul className={styles.footerLinks}>
            <li><a href="/" className={styles.footerLink}>Home</a></li>
            <li><a href="/dashboard" className={styles.footerLink}>Dashboard</a></li>
            <li><a href="/equipment" className={styles.footerLink}>Equipment</a></li>
            <li><a href="/fault-reporting" className={styles.footerLink}>Fault Reporting</a></li>
            <li><a href="/job-cards" className={styles.footerLink}>Job Cards</a></li>
            <li><a href="/ppm-tasks" className={styles.footerLink}>PPM Tasks</a></li>
            <li><a href="/daily-logs" className={styles.footerLink}>Daily Logs</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Contact Us</h2>
          <p className={styles.footerText}>
            Email: <a href="mailto:support@meditrackpro.com" className={styles.footerLink}>support@meditrackpro.com</a><br />
            Phone: <a href="tel:+123456789" className={styles.footerLink}>+123 456 789</a>
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerText}>© 2024 MediTrack Pro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
