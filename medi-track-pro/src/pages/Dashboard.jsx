import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTools, FaClipboardList, FaCogs, FaChartPie } from 'react-icons/fa';
import styles from './Dashboard.module.css';
import OverviewCard from '../components/OverviewCard';
import RecentActivity from '../components/RecentActivity';
import StatisticsChart from '../components/StatisticsChart';
import UserDashboard from '../components/UserDashboard';
import EngineerDashboard from '../components/EngineerDashboard';
import AdminDashboard from '../components/AdminDashboard';

const Dashboard = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const userRole = localStorage.getItem('role');
    if (!userRole) {
      navigate('/login');
    } else {
      setRole(userRole);
    }
  }, [navigate]);

  // Render specific dashboard based on user role
  if (role === 'admin') {
    return <AdminDashboard />;
  } else if (role === 'engineer') {
    return <EngineerDashboard />;
  } else if (role === 'user') {
    return <UserDashboard />;
  } 

  // Default dashboard content if no specific role is rendered
  return (
    <div className={styles.dashboard}>
      <nav className={styles.navbar}>
        <h1 className={styles.navTitle}>MediTrack Pro Dashboard</h1>
        <div className={styles.navLinks}>
          <Link to="/job-cards">Job Cards</Link>
          <Link to="/equipment-inventory">Equipment Inventory</Link>
          <Link to="/fault-reports">Fault Reports</Link>
        </div>
      </nav>

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <ul>
            <li><Link to="/job-cards"><FaClipboardList /> Job Cards</Link></li>
            <li><Link to="/equipment-inventory"><FaCogs /> Equipment Inventory</Link></li>
            <li><Link to="/fault-reports"><FaTools /> Fault Reports</Link></li>
            <li><Link to="/statistics"><FaChartPie /> Statistics</Link></li>
          </ul>
        </aside>

        <main className={styles.main}>
          <section className={styles.overview}>
            <h2>Overview</h2>
            <div className={styles.overviewCards}>
              <OverviewCard title="Total Equipment" count={120} icon={<FaCogs />} />
              <OverviewCard title="Pending Jobs" count={15} icon={<FaClipboardList />} />
              <OverviewCard title="Completed Jobs" count={30} icon={<FaTools />} />
            </div>
          </section>

          <section className={styles.activity}>
            <h2>Recent Activity</h2>
            <RecentActivity />
          </section>

          <section className={styles.statistics}>
            <h2>Statistics</h2>
            <StatisticsChart />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
