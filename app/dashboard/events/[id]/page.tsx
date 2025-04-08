import React from "react";
import EventForm from "../_components/EventForm";
import { getEventById, getEventCategories } from "../helper";

type PageProps = {
  params: Promise<{ id: string }>;
};

const DashboardEventEditPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const event = await getEventById(id);
  const categories = await getEventCategories();
  return (
    <div className="container mx-auto flex flex-col p-4">
      {event ? (
        <EventForm event={event} categories={categories} />
      ) : (
        <p>Event not found.</p> // Fallback message if event is null
      )}
    </div>
  );
};

export default DashboardEventEditPage;
