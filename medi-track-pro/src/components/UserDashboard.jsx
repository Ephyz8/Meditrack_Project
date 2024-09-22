import React from 'react';
import FaultReporting from './FaultReporting';
import FaultStatus from './FaultStatus';
import styles from './UserDashboard.module.css'; // Assuming you have styles

const UserDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.title}>User Dashboard</h1>
      <section className={styles.faultReportingSection}>
        <h2>Report a Fault</h2>
        <FaultReporting />
      </section>
      <section className={styles.faultStatusSection}>
        <h2>Your Fault Reports</h2>
        <FaultStatus />
      </section>
    </div>
  );
};

export default UserDashboard;
