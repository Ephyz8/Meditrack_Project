// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaClipboardList, FaCogs, FaChartPie } from 'react-icons/fa';
import styles from './Dashboard.module.css';
import OverviewCard from '../components/OverviewCard';
import RecentActivity from '../components/RecentActivity';
import StatisticsChart from '../components/StatisticsChart';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <h1 className={styles.navTitle}>MediTrack Pro Dashboard</h1>
        <div className={styles.navLinks}>
          <Link to="/job-cards">Job Cards</Link>
          <Link to="/equipment-inventory">Equipment Inventory</Link>
          <Link to="/fault-reports">Fault Reports</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <ul>
            <li><Link to="/job-cards"><FaClipboardList /> Job Cards</Link></li>
            <li><Link to="/equipment-inventory"><FaCogs /> Equipment Inventory</Link></li>
            <li><Link to="/fault-reports"><FaTools /> Fault Reports</Link></li>
            <li><Link to="/statistics"><FaChartPie /> Statistics</Link></li>
          </ul>
        </aside>

        {/* Dashboard Main */}
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
