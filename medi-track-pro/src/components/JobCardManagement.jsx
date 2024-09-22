import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./JobCardManagement.module.css"; // Import as a CSS module

const JobCardManagement = () => {
  // State for form fields
  const [jobCardData, setJobCardData] = useState({
    department: "",
    ward: "",
    reported_by: "",
    equipment_name: "",
    model: "",
    brand: "",
    serial_number: "",
    fault_reported: "",
    diagnosis: "",
    action_done: "",
    required_spare_parts: ""
  });

  // State for list of job cards
  const [jobCards, setJobCards] = useState([]);

  // State for errors
  const [error, setError] = useState(null);

  // Fetch existing job cards when the component loads
  useEffect(() => {
    fetchJobCards();
  }, []);

  const fetchJobCards = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/job-cards/");
      setJobCards(response.data); // Assuming API returns a list of job cards
    } catch (err) {
      console.error("Error fetching job cards:", err);
      setError("Error fetching job cards.");
    }
  };

  // Handle form submission for creating a job card
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/v1/job-cards/", jobCardData);
      setJobCards([...jobCards, response.data]); // Add the new job card to the list
      setJobCardData({
        department: "",
        ward: "",
        reported_by: "",
        equipment_name: "",
        model: "",
        brand: "",
        serial_number: "",
        fault_reported: "",
        diagnosis: "",
        action_done: "",
        required_spare_parts: ""
      }); // Reset form
    } catch (err) {
      console.error("Error creating job card:", err);
      setError("Error creating job card.");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setJobCardData({
      ...jobCardData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.jobCardManagement}>
      <h2>Manage Job Cards</h2>
      
      {/* Job Card Form */}
      <form onSubmit={handleSubmit} className={styles.jobCardForm}>
        <h3>Create a New Job Card</h3>
        {error && <p className={styles.errorMessage}>{error}</p>}
        
        {Object.keys(jobCardData).map((key) => (
          <div key={key}>
            <label>{key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ")}</label>
            {key.includes("reported") || key.includes("action") ? (
              <textarea 
                name={key} 
                value={jobCardData[key]} 
                onChange={handleChange} 
                required 
              />
            ) : (
              <input 
                type="text" 
                name={key} 
                value={jobCardData[key]} 
                onChange={handleChange} 
                required 
              />
            )}
          </div>
        ))}
        <button type="submit">Submit Job Card</button>
      </form>

      {/* Job Card List */}
      <h3>Job Card List</h3>
      <div className={styles.jobCardList}>
        {jobCards.length === 0 ? (
          <p>No job cards available.</p>
        ) : (
          <ul>
            {jobCards.map((jobCard) => (
              <li key={jobCard.job_number}>
                <p><strong>Job Number:</strong> {jobCard.job_number}</p>
                <p><strong>Request Number:</strong> {jobCard.request_number}</p>
                <p><strong>Reported By:</strong> {jobCard.reported_by}</p>
                <p><strong>Equipment Name:</strong> {jobCard.equipment_name}</p>
                <p><strong>Fault Reported:</strong> {jobCard.fault_reported}</p>
                <p><strong>Diagnosis:</strong> {jobCard.diagnosis}</p>
                <p><strong>Action Done:</strong> {jobCard.action_done}</p>
                <hr />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default JobCardManagement;
