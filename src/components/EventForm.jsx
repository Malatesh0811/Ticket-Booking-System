import React, { useState, useEffect } from "react";
import { events } from "../utils/dummyData";  // Example of importing dummy data


const EventForm = ({ event = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: event.name || "",
    date: event.date || "",
    location: event.location || "",
    availableTickets: event.availableTickets || 1,
    category: event.category || "",
    description: event.description || "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.date || !formData.location || !formData.category) {
      setError("All fields are required.");
      return;
    }

    const newEvent = {
      ...formData,
      id: event.id || Date.now(), // Use existing ID or generate a new one
    };

    onSubmit(newEvent);
  };

  return (
    <div className="card mx-auto p-4 shadow-sm" style={{ maxWidth: "500px" }}>
      <h4>{event.id ? "Update Event" : "Add Event"}</h4>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Event Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Available Tickets</label>
          <input
            type="number"
            name="availableTickets"
            value={formData.availableTickets}
            onChange={handleChange}
            className="form-control"
            min="1"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {event.id ? "Update Event" : "Add Event"}
        </button>
      </form>
    </div>
  );
};

export default EventForm;
