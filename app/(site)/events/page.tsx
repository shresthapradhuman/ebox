import React from "react";
import EventsFilters from "./_components/EventsFilters";
import { getEventCategories } from "@/app/dashboard/events/helper";
import EventsList from "./_components/EventsList";
import MobileEventFilters from "./_components/MobileEventFilters";

const EventsPage = async () => {
  const categories = await getEventCategories();
  return (
    <div className="container mx-auto w-full p-4 sm:px-6 lg:px-8">
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
          <div className="hidden w-64 flex-shrink-0 lg:block">
            <div className="sticky top-20">
              <EventsFilters categories={categories} />
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4 lg:hidden">
              <MobileEventFilters categories={categories} />
            </div>
            <div className="overflow-auto">
              <EventsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
