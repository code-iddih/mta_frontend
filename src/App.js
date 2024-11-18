import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; 
import AboutUs from './pages/AboutUs'; 
import Contact from './pages/Contact'; 
import SignIn from './Login'; 
import Register from './Register'; 
import Dashboard from './pages/Dashboard'; 
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handle login action
  const handleLogin = () => setIsAuthenticated(true);

  // Handle register action
  const handleRegister = () => {
    console.log("User registered successfully!");
    setIsAuthenticated(true);  // Automatically authenticate after registration
  };

  // Handle sign out action
  const handleSignOut = () => setIsAuthenticated(false);

  return (
    <Router>
      {/* Pass isAuthenticated and handleSignOut to Header */}
      <Header 
        isAuthenticated={isAuthenticated} 
        onSignOut={handleSignOut} 
      />
      
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Conditional rendering based on authentication */}
        <Route
          path="/sign-in"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignIn onLogin={handleLogin} />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register onRegister={handleRegister} />}
        />

        {/* Private route for Dashboard */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/sign-in" />}
        />
      </Routes>
    </Router>
  );
}

export default App;