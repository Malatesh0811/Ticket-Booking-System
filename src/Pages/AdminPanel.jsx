import React, { useState, useEffect } from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import BookingsList from "../components/BookingList";
import AdminLogin from "../components/AdminLogin";

const AdminPanel = () => {
  const [events, setEvents] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [isEditingEvent, setIsEditingEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
      const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
      setEvents(storedEvents);
      setBookings(storedBookings);
    }
  }, [isAuthenticated]);

  const handleAddEventClick = () => {
    setIsAddingEvent(true);
    setIsEditingEvent(false);
    setSelectedEvent(null); // Clear selected event for adding new
  };

  const handleManageEventsClick = () => {
    setIsAddingEvent(false);
    setIsEditingEvent(true);
  };

  const handleEventFormSubmit = (newEvent) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setIsAddingEvent(false);
  };

  const handleEventUpdate = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setIsEditingEvent(false);
    setSelectedEvent(null); // Clear selected event after updating
  };

  const handleEventRemove = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const handleBookingRemove = (bookingId) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== bookingId);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  const handleAuthenticate = (authenticated) => setIsAuthenticated(authenticated);

  return (
    <div className="container my-5">
      {!isAuthenticated ? (
        <AdminLogin onAuthenticate={handleAuthenticate} />
      ) : (
        <>
          <h2 className="text-center mb-4">Admin Panel</h2>
          <button className="btn btn-success mb-3" onClick={handleAddEventClick}>
            Add New Event
          </button>
          <button className="btn btn-warning mb-3 mx-2" onClick={handleManageEventsClick}>
            Manage Events
          </button>
          {isAddingEvent ? (
            <EventForm onSubmit={handleEventFormSubmit} />
          ) : isEditingEvent ? (
            <>
              {selectedEvent && (
                <EventForm event={selectedEvent} onSubmit={handleEventUpdate} />
              )}
              <EventList
                events={events}
                onUpdate={(event) => {
                  setSelectedEvent(event);
                  setIsEditingEvent(true);
                }}
                onRemove={handleEventRemove}
              />
            </>
          ) : (
            <>
              <EventList
                events={events}
                onUpdate={(event) => {
                  setSelectedEvent(event);
                  setIsEditingEvent(true);
                }}
                onRemove={handleEventRemove}
              />
              <BookingsList bookings={bookings} onRemove={handleBookingRemove} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AdminPanel;
