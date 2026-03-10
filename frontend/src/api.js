import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000"
});

// Get all job applications
export const getApplications = () => API.get("/applications");

// Add new job application
export const addApplication = (data) => API.post("/applications", data);

// Delete job application
export const deleteApplication = (id) => API.delete(`/applications/${id}`);
