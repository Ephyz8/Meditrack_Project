// src/components/PPMManagement.jsx
import React from 'react';
import styles from './PPMTasks.module.css'; // Importing the CSS module
import PPMTasks from './PPMTasks'; // Assuming you have the PPMTasks component

const PPMManagement = () => {
  return (
    <div className={styles.dashboardSection}>
      <h2 className={styles.dashboardSectionTitle}>PPM Management</h2>
      <div className={styles.sectionContent}>
        <PPMTasks />
      </div>
    </div>
  );
};

export default PPMManagement;
