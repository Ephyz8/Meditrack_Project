// src/components/JobCardSummary.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './JobCardSummary.module.css';

const JobCardSummary = () => {
  const [jobCards, setJobCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobCards = async () => {
      try {
        const response = await axios.get('/api/v1/jobcards/'); // Update with your API endpoint
        setJobCards(response.data);
      } catch (error) {
        setError('Failed to fetch job cards.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobCards();
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Job Card Summary</h2>
      <ul className={styles.jobCardList}>
        {jobCards.map((jobCard) => (
          <li key={jobCard.id} className={styles.jobCardItem}>
            <div className={styles.jobCardTitle}>{jobCard.taskDescription}</div>
            <div className={styles.jobCardDetails}>
              <span className={styles.jobCardEngineer}>Assigned to: {jobCard.assignedEngineer}</span>
              <span className={styles.jobCardStatus}>Status: {jobCard.status}</span>
            </div>
            <div className={styles.jobCardDates}>
              <span>Start Date: {jobCard.startDate}</span>
              <span>Due Date: {jobCard.dueDate}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobCardSummary;
