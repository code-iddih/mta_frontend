// auth.js
import api from "./api";

// Login function
export const login = async (email, password) => {
    try {
      const response = await api.post("https://mta-backend-ff2w.onrender.com/api/users/login", {
        email,
        password,
      });
  
      const { token } = response.data;
      localStorage.setItem("token", token);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Login error response:", error.response.data);
        throw new Error(error.response.data.message || "Failed to log in");
      } else {
        console.error("Login error:", error.message);
        throw new Error("Failed to log in");
      }
    }
  };

// Register function
export const register = async (userData) => {
  try {
    const response = await api.post("https://mta-backend-ff2w.onrender.com/api/users/register", {
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      first_name: userData.first_name,
      last_name: userData.last_name,
      phone_number: userData.phone_number,
      date_of_birth: userData.date_of_birth,
    });
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw new Error("Failed to register user");
  }
};

// Logout function
export const logout = () => {
  localStorage.removeItem("token");
};

// Password reset function
export const resetPassword = async (email) => {
  try {
    const response = await api.post("https://mta-backend-ff2w.onrender.com/api/auth/reset-password", { email });
    return response.data;
  } catch (error) {
    console.error("Password reset error:", error);
    throw new Error("Failed to reset password");
  }
};

// Checking authentication status function
export const checkAuthStatus = async () => {
  try {
    await api.get("https://mta-backend-ff2w.onrender.com/api/users/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return true;
  } catch (error) {
    console.error("Auth status check failed:", error);
    return false;
  }
};
