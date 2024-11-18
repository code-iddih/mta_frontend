// src/pages/Home.js

import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home-container">
    {/* Hero Section */}
    <div className="hero-section">
      <h1>Secure & Reliable Global Money Transfers</h1>
      <p>
        Experience the security and affordability of Baller, your partner in
        international money transfers and specialist in money transfers to Africa.
      </p>
    </div>

    {/* Features Section */}
    <div className="features-section">
      <h2>Why Choose Baller?</h2>
      <div className="features">
        <div className="feature">
          <img 
            src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/06/Low-cost-transfers.jpg.webp" 
            alt="Low Cost Transfers feature"
            className="feature-image"
          />
          <h3 className="feature-title">Low Cost Transfers</h3>
          <p>* No Hidden Fees: What you see is what you pay.</p>
          <p>* Low Transfer Fees: Keep costs down without compromising service.</p>
          <p>* Instant Quick Quote: Know your costs upfront.</p>
        </div>
        <div className="feature">
          <img
            src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/06/Secure-delivery.jpg.webp"
            alt="Secure Delivery feature"
            className="feature-image"
          />
          <h3 className="feature-title">Secure Delivery</h3>
          <p>* Safe and Secure: Transactions protected with SSL and digital certificates.</p>
          <p>* Regulatory Compliance: Fully compliant with federal and state regulations.</p>
          <p>* Money-Back Guarantee: Complete confidence in your transactions.</p>
        </div>
        <div className="feature">
          <img
            src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/06/Fast-service.jpg.webp"
            alt="Fast Service feature"
            className="feature-image"
          />
          <h3 className="feature-title">Fast Service</h3>
          <p>* Fast and Easy Service: Simplify your money transfers.</p>
          <p>* Instant Transfers and Receipts: Immediate processing for all transactions.</p>
        </div>
        {/* Trusted by Millions */}
        <div className="feature trusted-feature">
          <img
            src="https://img.freepik.com/free-vector/trust-knob-button-switch-high-confidence-level-concept-technical-design-management-modern_1284-42415.jpg?t=st=1730963824~exp=1730967424~hmac=1d1cca9ed8c29b400a2a6542e83003b55402fe943395aee5ed7baf7a24327c17&w=740"
            alt="Trusted by Millions feature"
            className="feature-image"
          />
          <h3 className="feature-title">Trusted by Millions</h3>
          <p>* Over 50 years in the money transfer business, empowering communities across the Horn of Africa.</p>
          <p>* The United Nations describes Baller as “the only safe and efficient option to transfer funds to projects.”</p>
        </div>
      </div>
    </div>

    {/* Steps Section */}
    <div className="steps-section">
      <h2>Simple Steps to Send Money Globally</h2>
      <div className="steps-content">
        <div className="steps-text">
          <ol>
            <li>
              <strong>Input Amount:</strong> Specify the amount you'd like to transfer.
            </li>
            <li>
              <strong>Select Recipient:</strong> Choose either a new or saved recipient for quicker processing.
            </li>
            <li>
              <strong>Confirm Transaction:</strong> Review the details and confirm your transfer securely.
            </li>
          </ol>
        </div>
        <div className="steps-image">
          <img
            src="https://images.unsplash.com/photo-1616077168712-fc6c788db4af?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Simple Steps to Send Money"
            className="steps-image-img"
          />
        </div>
      </div>
    </div>

    {/* Footer CTA */}
    <div className="footer-cta">
      <h2>Get Started with Baller Today</h2>
      <p>Create your account quickly and start transferring money internationally with confidence and ease.</p>
      
      {/* Get Started Button */}
      <button
        onClick={() => window.location.href = '/register'}
        className="cta-button"
      >
        Get Started
      </button>
    </div>
  </div>
);

export default Home;
