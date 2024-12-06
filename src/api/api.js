import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Replace with your Render backend URL
});

const API_BASE_URL = "http://localhost:5000";
export const createForm = (formData) => API.post("/forms", formData);
export const getForm = (formId) => API.get(`/forms/${formId}`);
export const submitResponses = (formId, responses) =>
  API.post(`/forms/${formId}/responses`, { responses });

// Fetch a Form
export const fetchForm = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/forms/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching form:", error);
    throw error;
  }
};

// Submit Form Responses
export const SubmitResponses = async (id, responses) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/forms/${id}/responses`,
      { responses }
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting responses:", error);
    throw error;
  }
};
