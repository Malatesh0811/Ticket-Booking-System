import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="col-md-4 d-flex align-items-stretch mb-4">
      <div className="card shadow-sm w-100" style={{ minHeight: "100%" }}>
        <img
          src={event.image}
          alt={event.name}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{event.name}</h5>
          <p className="card-text">{event.description}</p>
          <p className="card-text">
            <strong>Date:</strong> {event.date}
          </p>
          <p className="card-text">
            <strong>Available Tickets:</strong> {event.availableTickets}
          </p>
          <div className="mt-auto">
            <Link to={`/booking/${event.id}`} className="btn btn-primary w-100">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
