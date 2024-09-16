// src/components/EquipmentOverview.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './EquipmentOverview.module.css';

const EquipmentOverview = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await axios.get('/api/v1/equipment/');
        setEquipmentList(response.data);
      } catch (error) {
        setError('Failed to load equipment data.');
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Equipment Overview</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Serial Number</th>
            <th>Model</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {equipmentList.map((equipment) => (
            <tr key={equipment.id}>
              <td>{equipment.name}</td>
              <td>{equipment.serialNumber}</td>
              <td>{equipment.model}</td>
              <td>{equipment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentOverview;
