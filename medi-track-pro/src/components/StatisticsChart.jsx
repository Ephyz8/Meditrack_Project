// src/components/StatisticsChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

const StatisticsChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Completed Jobs',
        data: [12, 19, 8, 15, 22, 30],
        backgroundColor: 'rgba(78, 115, 223, 0.8)',
      },
      {
        label: 'Pending Jobs',
        data: [5, 3, 12, 9, 6, 7],
        backgroundColor: 'rgba(231, 74, 59, 0.8)',
      },
    ],
  };

  return <Bar data={data} />;
};

export default StatisticsChart;
