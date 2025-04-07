import React from "react";
import { prisma } from "@/prisma/client";
import EventForm from "../_components/EventForm";

type PageProps = {
  params: Promise<{ id: string }>;
};

const DashboardEventEditPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const event = await prisma.event.findFirst({
    where: {
      id,
    },
  });
  return (
    <div className="container mx-auto flex flex-col p-4">
      {event ? (
        <EventForm event={event} />
      ) : (
        <p>Event not found.</p> // Fallback message if event is null
      )}
    </div>
  );
};

export default DashboardEventEditPage;
