import React from 'react';
import FaultReporting from './FaultReporting';
import FaultStatus from './FaultStatus';

const UserDashboard = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <FaultReporting />
      <FaultStatus />
    </div>
  );
};

export default UserDashboard;
