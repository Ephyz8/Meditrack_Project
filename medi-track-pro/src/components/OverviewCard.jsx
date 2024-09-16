// src/components/OverviewCard.jsx
import React from 'react';
import styles from './OverviewCard.module.css';

const OverviewCard = ({ title, count, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
};

export default OverviewCard;
