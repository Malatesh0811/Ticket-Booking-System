import React, { useState } from "react";
import EventCard from "../components/EventCard";
import { events } from "../utils/dummyData";
import FilterBar from "../components/FilterBar";

const Events = () => {
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleFilterChange = (category, location, date) => {
    let filtered = events;

    if (category) filtered = filtered.filter((event) => event.category === category);
    if (location) filtered = filtered.filter((event) => event.location === location);
    if (date) filtered = filtered.filter((event) => event.date === date);

    setFilteredEvents(filtered);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="row g-4">  {/* Added Bootstrap gutter for spacing */}
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p className="text-center w-100">No events found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
