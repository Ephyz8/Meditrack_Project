// src/components/DailyLogsOverview.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './JobCardSummary.module.css'; // Updated to use JobCardSummary styles

const DailyLogsOverview = () => {
  const [dailyLogs, setDailyLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDailyLogs = async () => {
      try {
        const response = await axios.get('/api/v1/dailylogs/'); // Update with your API endpoint
        setDailyLogs(response.data);
      } catch (error) {
        setError('Failed to fetch daily logs.');
      } finally {
        setLoading(false);
      }
    };

    fetchDailyLogs();
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Daily Logs Overview</h2>
      <ul className={styles.logList}>
        {dailyLogs.map((log) => (
          <li key={log.id} className={styles.logItem}>
            <div className={styles.logDate}>{log.date}</div>
            <div className={styles.logDescription}>{log.description}</div>
            <div className={styles.logTime}>{log.timeSpent}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyLogsOverview;
