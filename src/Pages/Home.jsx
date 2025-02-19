import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="hero text-center p-5 rounded shadow-lg text-white" style={{
        backgroundImage: "url('public/Hero.jpg')", // Event-related image
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "20px"
      }}>
        <h1 className="display-4 fw-bold" style={{ color: "#FFD700" }}>Book Your Tickets in One Click!</h1>
        <p className="lead fw-bold" style={{ color: "#f2f2f2" }}>Discover & Reserve Tickets for Concerts, Sports, Festivals, and More.</p>
        <Link to="/events" className="btn btn-warning btn-lg mt-3" style={{ backgroundColor: "#FF5733", borderColor: "#FF5733" }}>
          Explore Events
        </Link>
      </div>

      {/* About Project Section */}
      <div className="my-5">
        <h2 className="text-center" style={{ color: "#2C3E50" }}>Path to Your Happiness</h2>
        <p className="text-center" style={{ color: "#7F8C8D", fontSize: "1.1rem" }}>
          This is a full-fledged event booking platform designed to help you find and reserve tickets for various events, ranging from concerts to festivals, and more. 
          The platform allows users to:
        </p>
        <ul className="list-group my-4" style={{ fontSize: "1.1rem" }}>
          <li className="list-group-item">Easily Find Your events</li>
          <li className="list-group-item">Book tickets for Your favorite events</li>
          <li className="list-group-item">Manage Your bookings and proceed to secure payments</li>
        </ul>
        <p className="text-center" style={{ color: "#7F8C8D", fontSize: "1.1rem" }}>
          Whether you’re organizing a concert or attending a sports event, this platform makes it simple and secure.
        </p>
      </div>

      {/* Call-To-Action Section */}
      <div className="text-center my-5" style={{ backgroundColor: "#16A085", padding: "30px", borderRadius: "10px", color: "#fff" }}>
        <h3>Looking for an unforgettable experience?</h3>
        <p className="lead" style={{ color: "#f2f2f2" }}>Grab your tickets today and be part of something amazing.</p>
        <Link to="/events" className="btn btn-light btn-lg" style={{ backgroundColor: "#FFD700", color: "#333", borderColor: "#FFD700" }}>
          Find Events
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
