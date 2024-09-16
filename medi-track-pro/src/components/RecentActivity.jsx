// src/components/RecentActivity.jsx
import React from 'react';
import styles from './RecentActivity.module.css';

const RecentActivity = () => {
  const activities = [
    { id: 1, action: "Reported a fault on X-ray machine", time: "2 hours ago" },
    { id: 2, action: "Completed maintenance on ultrasound", time: "4 hours ago" },
    { id: 3, action: "Job card #120 marked as completed", time: "6 hours ago" },
  ];

  return (
    <div className={styles.recentActivity}>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <p>{activity.action}</p>
            <span>{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
