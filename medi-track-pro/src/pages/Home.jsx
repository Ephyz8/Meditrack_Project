import React from "react";
import { Link } from "react-router-dom";
import EquipmentOverview from "../components/EquipmentOverview";
import FaultReporting from "../components/FaultReporting";
import JobCardSummary from "../components/JobCardSummary";
import PPMTasks from "../components/PPMTasks";
import DailyLogsOverview from "../components/DailyLogsOverview";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1>Welcome to MediTrack Pro</h1>
        <p className={styles.subtitle}>
          Streamlining Medical Equipment Management and Maintenance
        </p>
      </header>

      <section className={styles.dashboardOverview}>
        <div className={styles.dashboardCard}>
          <EquipmentOverview />
          <Link to="/inventory" className={styles.viewMoreLink}>
            View Inventory
          </Link>
        </div>

        <div className={styles.dashboardCard}>
          <FaultReporting />
          <Link to="/fault-reporting" className={styles.viewMoreLink}>
            Report Fault
          </Link>
        </div>

        <div className={styles.dashboardCard}>
          <JobCardSummary />
          <Link to="/job-cards" className={styles.viewMoreLink}>
            View Job Cards
          </Link>
        </div>

        <div className={styles.dashboardCard}>
          <PPMTasks />
          <Link to="/ppm-tasks" className={styles.viewMoreLink}>
            View Maintenance Tasks
          </Link>
        </div>

        <div className={styles.dashboardCard}>
          <DailyLogsOverview />
          <Link to="/daily-logs" className={styles.viewMoreLink}>
            View Daily Logs
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
