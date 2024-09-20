import React, { useState, useEffect } from "react";
import axios from "axios";
import "./JobCardManagement.module.css";

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
    <div className="job-card-management">
      <h2>Manage Job Cards</h2>
      
      {/* Job Card Form */}
      <form onSubmit={handleSubmit} className="job-card-form">
        <h3>Create a New Job Card</h3>
        {error && <p className="error-message">{error}</p>}
        
        <div>
          <label>Department</label>
          <input 
            type="text" 
            name="department" 
            value={jobCardData.department} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Ward</label>
          <input 
            type="text" 
            name="ward" 
            value={jobCardData.ward} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Reported By</label>
          <input 
            type="text" 
            name="reported_by" 
            value={jobCardData.reported_by} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Equipment Name</label>
          <input 
            type="text" 
            name="equipment_name" 
            value={jobCardData.equipment_name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Model</label>
          <input 
            type="text" 
            name="model" 
            value={jobCardData.model} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Brand</label>
          <input 
            type="text" 
            name="brand" 
            value={jobCardData.brand} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Serial Number</label>
          <input 
            type="text" 
            name="serial_number" 
            value={jobCardData.serial_number} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Fault Reported</label>
          <textarea 
            name="fault_reported" 
            value={jobCardData.fault_reported} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Diagnosis</label>
          <textarea 
            name="diagnosis" 
            value={jobCardData.diagnosis} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Action Done</label>
          <textarea 
            name="action_done" 
            value={jobCardData.action_done} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Required Spare Parts</label>
          <textarea 
            name="required_spare_parts" 
            value={jobCardData.required_spare_parts} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Submit Job Card</button>
      </form>

      {/* Job Card List */}
      <h3>Job Card List</h3>
      <div className="job-card-list">
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
