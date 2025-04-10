import React from "react";
import EventList from "./_components/EventList";
import EventFilters from "./_components/EventFilters";

const EventsPage = () => {
  return (
    <div className="container mx-auto max-w-screen-xl p-4 sm:px-6 lg:px-8">
      <div className="flex flex-col space-y-6">
        {/* title section */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold md:text-4xl">Discover Events</h1>
          <p className="text-muted-foreground">
            Find and book tickets for the best events in your area
          </p>
        </div>
        {/* content section */}
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-full md:w-64 md:flex-shrink-0">
            <EventFilters />
          </div>
          <div className="flex-1">
            <EventList />
          </div>
        </div>
      </div>
      <EventList />
    </div>
  );
};

export default EventsPage;
