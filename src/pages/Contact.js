import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

function Contact() {
  const navigate = useNavigate();

  // Function to handle email button click
  const handleEmailClick = () => {
    // Simulating a backend email send action
    console.log("Email sent to the backend!");
    alert("Your email request has been sent!");
  };

  return (
    <div className="contact-page">
      {/* Header Section with Background Image */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions about your online money transfer?</p>
        <p>Our team is here to help.</p>
      </div>

      {/* Main Contact Section */}
      <div className="contact-section">
        <div className="contact-option">
          <h2>Phone</h2>
          <p>Find your local number below and call us to answer your questions.</p>
        </div>
        <div className="contact-option">
          <h2>Email Us</h2>
          <p>Fill out the web form and our team will get back to you via email.</p>
        </div>
      </div>

      {/* Centered Email Button */}
      <div className="email-button-container">
        <button className="email-button" onClick={handleEmailClick}>
          Send Email
        </button>
      </div>

      <h2>Our Contact Information</h2>
      <p>
        Find the correct phone number for your country below. When you call, you will have the option to speak with our team in English or Somali. Please select your preferred language.
      </p>

      <div className="contact-details">
        <h3>US</h3>
        <p>+1(866)-428-7799</p>

        <h3>UK</h3>
        <p>08081960755</p>

        <h3>Europe</h3>
        <ul>
          <li>Belgium: 080049609</li>
          <li>France: +448081960755</li>
          <li>Greece: 00800123516</li>
          <li>Ireland: 1800856091</li>
          <li>Italy: 800978329</li>
          <li>Netherlands: 08000204607</li>
          <li>Portugal: 800856069</li>
          <li>Spain: +448081960755</li>
          <li>Switzerland: +448081960755</li>
          <li>Germany: +448081960755</li>
        </ul>

        <h3>Canada</h3>
        <p>(844)-785-0805</p>

        <h3>Somalia</h3>
        <p>From your Somtel: 777</p>
      </div>

      <h2>Headquarters</h2>
      <h3>Baller Headquarters, Dubai, UAE</h3>
      <p>
        DAMAC Park Towers<br />
        Level P7A, Office 11-12, Dubai International Financial Centre (DIFC)<br />
        P.O. Box 506897, Dubai, UAE
      </p>
      <p>
        Remittance Inquiry: +97142289273<br />
        Corporate Office: +97143598521
      </p>
      <p>
        Opening Hours:<br />
        Sun: Thu: 09:00 AM 10:00 PM<br />
        Fri: 02:30 PM 09:30 PM<br />
        Sat: 09:00 AM 10:00 PM
      </p>

      <h3>Baller Operation Centre, Hargeisa</h3>
      <p>
        Operation Centre, Hargeisa
      </p>
      <p>
        Telephone: +4767059805, +4767059825, +4767059824, +4767059818, +2522300305, +2522510303<br />
        Fax: +2522523001
      </p>
      <p>Support services available 24/7.</p>

      <div className="cta">
        <h2>Get Started with Baller Today</h2>
        <p>Create your account quickly and start transferring money internationally with confidence and ease.</p>
        <button
          className="get-started-button"
          onClick={() => navigate('/register')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Contact;
