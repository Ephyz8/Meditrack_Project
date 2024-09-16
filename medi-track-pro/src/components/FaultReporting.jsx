// src/components/FaultReporting.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styles from './FaultReporting.module.css';

const FaultReporting = () => {
  const [equipment, setEquipment] = useState('');
  const [faultDescription, setFaultDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [status, setStatus] = useState('open');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axios.post('/api/v1/fault-reports/', {
        equipment,
        faultDescription,
        priority,
        status,
      });
      setMessage('Fault report submitted successfully.');
      setEquipment('');
      setFaultDescription('');
      setPriority('medium');
      setStatus('open');
    } catch (error) {
      setError('Failed to submit fault report.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Report a Fault</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="equipment" className={styles.label}>Equipment</label>
          <input
            type="text"
            id="equipment"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="faultDescription" className={styles.label}>Fault Description</label>
          <textarea
            id="faultDescription"
            value={faultDescription}
            onChange={(e) => setFaultDescription(e.target.value)}
            className={styles.textarea}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="priority" className={styles.label}>Priority</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className={styles.select}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="status" className={styles.label}>Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={styles.select}
          >
            <option value="open">Open</option>
            <option value="in progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {message && <div className={styles.message}>{message}</div>}
        {error && <div className={styles.error}>{error}</div>}
      </form>
    </div>
  );
};

export default FaultReporting;
