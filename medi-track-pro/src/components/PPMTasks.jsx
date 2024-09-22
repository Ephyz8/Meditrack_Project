import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './PPMTasks.module.css';

const PPMTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/v1/ppm-tasks/'); // Ensure this matches your API endpoint
        setTasks(response.data);
      } catch (err) {
        setError('Failed to fetch PPM tasks.');
        console.error('Error fetching PPM tasks:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Planned Preventive Maintenance Tasks</h2>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            <div className={styles.taskDate}>{task.scheduledDate}</div>
            <div className={styles.taskDescription}>{task.description}</div>
            <div className={styles.taskStatus}>{task.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PPMTasks;
