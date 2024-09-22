import React from 'react';
import { Link } from 'react-router-dom';
import EquipmentOverview from '../components/EquipmentOverview';
import FaultReporting from '../components/FaultReporting';
import JobCardSummary from '../components/JobCardSummary';
import PPMTasks from '../components/PPMTasks';
import DailyLogsOverview from '../components/DailyLogsOverview';
import Button from '../components/Button';
import styles from './LandingPage.module.css'; // Using one unified style file

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      {/* Hero Section */}
      <header
        className={styles.hero}
        style={{ backgroundImage: `url(/images/hero.jpg)` }}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>MediTrack Pro</h1>
          <p className={styles.heroSubheading}>
            Streamline medical equipment management with ease
          </p>
          <Link to="/Register">
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
              src="https://source.unsplash.com/random/200x200/?medical,equipment"
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
              src="https://source.unsplash.com/random/200x200/?medical,hospital"
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
              src="https://source.unsplash.com/random/200x200/?medical,maintenance"
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

      {/* Dashboard Overview Section */}
      <section className={styles.dashboardOverview}>
        <h2 className={styles.sectionHeading}>Dashboard Overview</h2>
        <div className={styles.dashboardCard}>
          <EquipmentOverview />
          <Link to="/inventory" className={styles.viewMoreLink}>
            View Inventory
          </Link>
        </div>

        <div className={styles.dashboardCard}>
          <FaultReporting />
          <Link to="/fault-reporting" className={styles.viewMoreLink}>
            Report Fault
          </Link>
        </div>

        <div className={styles.dashboardCard}>
          <JobCardSummary />
          <Link to="/job-cards" className={styles.viewMoreLink}>
            View Job Cards
          </Link>
        </div>

        <div className={styles.dashboardCard}>
          <PPMTasks />
          <Link to="/ppm-tasks" className={styles.viewMoreLink}>
            View Maintenance Tasks
          </Link>
        </div>

        <div className={styles.dashboardCard}>
          <DailyLogsOverview />
          <Link to="/daily-logs" className={styles.viewMoreLink}>
            View Daily Logs
          </Link>
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
            <p className={styles.testimonialAuthor}>
              - Ephraim Ziwoya, Biomedical Engineer
            </p>
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
