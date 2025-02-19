// src/pages/PaymentPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { booking } = location.state || {}; // Get booking from navigation state

  const [paymentStatus, setPaymentStatus] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!booking) {
      navigate("/mybookings"); // If no booking, redirect to MyBookings page
    }
  }, [booking, navigate]);

  const handlePayment = () => {
    if (!booking) {
      setError("No booking found!");
      return;
    }

    // Simulate a successful payment after a delay
    setTimeout(() => {
      setPaymentStatus("Payment Successful!");
      // Update booking status to completed in localStorage
      const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
      const updatedBookings = storedBookings.map((b) =>
        b.id === booking.id ? { ...b, status: "Paid" } : b
      );
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));
      navigate("/mybookings"); // Redirect to MyBookings after payment
    }, 2000); // Simulate a 2-second payment process
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Payment Page</h2>
      <div className="card mx-auto p-4 shadow-sm" style={{ maxWidth: "500px" }}>
        <h4>{booking?.eventName}</h4>
        <p><strong>Date:</strong> {booking?.date}</p>
        <p><strong>Tickets:</strong> {booking?.tickets}</p>
        <p><strong>Total:</strong> ${booking?.tickets * 10} (Simulated price)</p>
        <button
          className="btn btn-primary w-100"
          onClick={handlePayment}
        >
          Proceed to Payment
        </button>
        {paymentStatus && <p className="text-success">{paymentStatus}</p>}
        {error && <p className="text-danger">{error}</p>}
      </div>
    </div>
  );
};

export default PaymentPage;
