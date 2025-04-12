"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Category, Event, Order } from "@prisma/client";
import { EventListItem } from "./EventListItem";
import EventCardItem from "./EventCardItem";

export type EventProps = Event & {
  category: Category | null;
  orders: Order[];
};

export interface EventsListProps {
  events: EventProps[];
  viewMode: "grid" | "list";
}

const EventsList = ({ events, viewMode }: EventsListProps) => {
  return (
    <div
      className={cn("flex flex-col gap-4", {
        "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3": viewMode == "grid",
      })}
    >
      {events.map((event) =>
        viewMode === "grid" ? (
          <EventCardItem key={event.id} event={event} />
        ) : (
          <EventListItem key={event.id} event={event} />
        ),
      )}
    </div>
  );
};

export default EventsList;
