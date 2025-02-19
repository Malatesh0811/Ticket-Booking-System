import React from "react";

const BookingList = ({ bookings, onRemove }) => {
  return (
    <div className="card p-3 shadow-sm">
      <h4 className="mb-3">Booked Events</h4>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul className="list-group">
          {bookings.map((booking) => (
            <li key={booking.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{booking.eventName}</strong> - {booking.tickets} Ticket(s)
                <br />
                <small>{booking.name} ({booking.email})</small>
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => onRemove(booking.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingList;
