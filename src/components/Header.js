import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, onSignOut }) => (
  <header
    style={{
      backgroundColor: '#333333',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    {/* Left Side: Navigation Links */}
    <nav
      style={{
        display: 'flex',
        gap: '1.5rem',
      }}
    >
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
        Home
      </Link>
      <Link to="/about-us" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
        About Us
      </Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
        Contact
      </Link>

      {/* Dashboard link will only appear if user is authenticated */}
      {isAuthenticated && (
        <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
          Dashboard
        </Link>
      )}
    </nav>

    {/* Right Side: Conditional Sign In/Sign Out Buttons */}
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      {isAuthenticated ? (
        <button
          onClick={onSignOut}
          style={{
            color: 'white',
            backgroundColor: 'red',
            padding: '5px 15px',
            border: '1px solid white',
            borderRadius: '4px',
            fontSize: '15px',
          }}
        >
          Sign Out
        </button>
      ) : (
        <>
          <Link
            to="/sign-in"
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '5px 15px',
              border: '1px solid white',
              borderRadius: '4px',
              fontSize: '15px',
            }}
          >
            Sign In
          </Link>

          <Link
            to="/register"
            style={{
              color: 'white',
              backgroundColor: 'green',
              textDecoration: 'none',
              padding: '5px 15px',
              borderRadius: '4px',
              fontSize: '15px',
            }}
          >
            Register
          </Link>
        </>
      )}
    </div>
  </header>
);

export default Header;
