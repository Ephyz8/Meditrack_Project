// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import EquipmentOverview from "./components/EquipmentOverview";
import FaultReporting from "./components/FaultReporting";
import JobCardSummary from "./components/JobCardSummary";
import PPMTasks from "./components/PPMTasks";
import DailyLogsOverview from "./components/DailyLogsOverview";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css"; 

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/equipment" element={<EquipmentOverview />} />
          <Route path="/fault-reporting" element={<FaultReporting />} />
          <Route path="/job-cards" element={<JobCardSummary />} />
          <Route path="/ppm-tasks" element={<PPMTasks />} />
          <Route path="/daily-logs" element={<DailyLogsOverview />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
