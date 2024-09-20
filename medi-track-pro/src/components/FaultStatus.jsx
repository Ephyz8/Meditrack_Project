// src/components/FaultStatus.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './FaultStatus.module.css';

const FaultStatus = () => {
  const [faultReports, setFaultReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFaultReports = async () => {
      try {
        const response = await axios.get('/api/v1/fault-reports/');
        setFaultReports(response.data);
      } catch (err) {
        setError('Failed to fetch fault reports.');
      } finally {
        setLoading(false);
      }
    };
    fetchFaultReports();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <h2>Fault Reports Status</h2>
      <ul className={styles.faultList}>
        {faultReports.map((report) => (
          <li key={report.id} className={styles.faultItem}>
            <p>Equipment: {report.equipment}</p>
            <p>Description: {report.faultDescription}</p>
            <p>Priority: {report.priority}</p>
            <p>Status: {report.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaultStatus;
