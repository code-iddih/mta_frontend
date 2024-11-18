import axios from "axios";

// Base URL for the API
const API_URL = process.env.REACT_APP_API_URL || "https://mta-backend-ff2w.onrender.com/api";

// Axios instance with default settings
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add JWT token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


api.interceptors.response.use(
  (response) => response, 
  (error) => {
 
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token"); 

      window.location.href = "/login";
    }
    return Promise.reject(error); 
  }
);

// Profile-related API functions
export const getProfile = () => api.get("/users/profile");
export const updateProfile = (profileData) => api.put("/users/profile", profileData);


export const getWallets = () => api.get("/wallets");
export const createTransaction = (transactionData) =>
  api.post("/transactions", transactionData);

export default api;
