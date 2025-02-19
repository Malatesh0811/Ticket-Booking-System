import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Ticket Booking System. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://www.facebook.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x"></i> {/* Facebook icon */}
          </a>
          <a href="https://twitter.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i> {/* Twitter icon */}
          </a>
          <a href="https://www.instagram.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i> {/* Instagram icon */}
          </a>
        </div>
        <p className="mb-0">Contact Us: info@ticketbooking.com</p>
      </div>
    </footer>
  );
};

export default Footer;
