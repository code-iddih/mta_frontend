import React, { useState } from 'react';
import './Register.css';  
import { register } from './utils/auth';  

function Register({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);  // To show loading state
  const [error, setError] = useState('');  // To show error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Starting to Load
    setError(''); // Clearing any previous errors

    try {
      // Sending only email and password to the backend
      const response = await register({ email, password });

      // If registration is successful, alert the user and call onRegister if needed
      if (response) {
        alert('User registered successfully!');
        onRegister(); // Call the onRegister prop if needed
      }
    } catch (error) {
      // Handling any errors
      setError('Registration failed. Please try again.');
      console.error('Error registering user:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error">{error}</p>} {/* Displaying error message */}

        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default Register;
