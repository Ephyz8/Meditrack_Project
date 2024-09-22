import React from 'react';
import JobCardManagement from './JobCardManagement';
import InventoryManagement from './InventoryManagement';
import PPMManagement from './PPMManagement';
import styles from './EngineerDashboard.module.css'; // Import the CSS module

const EngineerDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.dashboardHeader}>Engineer Dashboard</h1>

      {/* Job Card Management Section */}
      <div className={styles.dashboardSection}>
        <h2 className={styles.dashboardSectionTitle}>Job Card Management</h2>
        <div className={styles.sectionContent}>
          <JobCardManagement />
        </div>
      </div>

      {/* Inventory Management Section */}
      <div className={styles.dashboardSection}>
        <h2 className={styles.dashboardSectionTitle}>Inventory Management</h2>
        <div className={styles.sectionContent}>
          <InventoryManagement />
        </div>
      </div>

      {/* PPM Management Section */}
      <div className={styles.dashboardSection}>
        <h2 className={styles.dashboardSectionTitle}>PPM Management</h2>
        <div className={styles.sectionContent}>
          <PPMManagement />
        </div>
      </div>
    </div>
  );
};

export default EngineerDashboard;
