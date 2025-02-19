import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { events } from "../utils/dummyData";
import Notification from "./Notification"; // Import Notification

const BookingForm = () => {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === parseInt(eventId));

  const [formData, setFormData] = useState({ name: "", email: "", tickets: 1 });
  const [error, setError] = useState("");
  const [notification, setNotification] = useState(""); // Notification state

  if (!event) return <p className="text-center">Event not found.</p>;

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    console.log("Stored Bookings:", storedBookings);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, tickets } = formData;

    if (!name || !email || tickets < 1) {
      setError("All fields are required, and tickets must be at least 1.");
      return;
    }

    if (tickets > event.availableTickets) {
      setError(`Only ${event.availableTickets} tickets available.`);
      return;
    }

    const newBooking = {
      id: Date.now(),
      eventId: event.id,
      eventName: event.name,
      date: event.date,
      name,
      email,
      tickets,
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...existingBookings, newBooking]));

    setNotification(`Booking successful for ${tickets} ticket(s) to ${event.name}`);
    setFormData({ name: "", email: "", tickets: 1 });
    setError("");
  };

  return (
    <div className="card mx-auto p-4 shadow-sm" style={{ maxWidth: "500px" }}>
      <h4>{event.name}</h4>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Available Tickets:</strong> {event.availableTickets}</p>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Number of Tickets</label>
          <input type="number" name="tickets" value={formData.tickets} onChange={handleChange} className="form-control" min="1" max={event.availableTickets} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Confirm Booking</button>
      </form>

      {/* Show Notification */}
      <Notification message={notification} onClose={() => setNotification("")} />
    </div>
  );
};

export default BookingForm;
