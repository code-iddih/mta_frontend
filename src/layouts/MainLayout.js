// layouts/MainLayout.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function MainLayout({ children }) {
  const location = useLocation();

  // Check if the current page is the About Us page
  const isAboutPage = location.pathname === '/about-us';

  return (
    <>
      {/* Render the header only if not on the About Us page */}
      {!isAboutPage && (
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/help">Help</Link></li>
            </ul>
          </nav>
        </header>
      )}
      <main>
        {children}
      </main>
    </>
  );
}

export default MainLayout;
