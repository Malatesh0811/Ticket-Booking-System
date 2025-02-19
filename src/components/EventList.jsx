import React from "react";

const EventList = ({ events, onUpdate, onRemove }) => {
  return (
    <div>
      <h4 className="mb-4">Manage Events</h4>
      <ul className="list-group">
        {events.map((event) => (
          <li key={event.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{event.name}</h5>
              <p>{event.date}</p>
            </div>
            <div>
              <button
                className="btn btn-warning me-2"
                onClick={() => onUpdate(event)}
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onRemove(event.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
