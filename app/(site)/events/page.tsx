import React from "react";
import EventsSearchInput from "./_components/EventsSearchInput";
import EventsFilters from "./_components/EventsFilters";
import { getEventCategories } from "@/app/dashboard/events/helper";
import EventsViewModeToggle from "./_components/EventsViewModeToggle";
import EventsList from "./_components/EventsList";
import { prisma } from "@/prisma/client";

type PageProps = {
  searchParams: Promise<{ view: "grid" | "list"; sort: string; category: string; keyword: string }>;
};

const EventsListPage = async ({ searchParams }: PageProps) => {
  const { view, sort, keyword, category } = await searchParams;
  const viewMode = view || "grid";
  const cateogries = await getEventCategories();
  const events = await prisma.event.findMany({
    where: keyword
      ? {
          OR: [
            {
              title: {
                contains: keyword,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: keyword,
                mode: "insensitive",
              },
            },
          ],
        }
      : {},
    include: {
      category: {
        where: {
          slug: category,
        },
      },
      orders: true,
    },
    orderBy: {
      date: sort === "date-asc" ? "asc" : sort === "date-desc" ? "desc" : undefined,
      price: sort === "price-asc" ? "asc" : sort === "price-desc" ? "desc" : undefined,
    },
  });
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Discover Events</h1>
          <p className="text-muted-foreground">
            Find and book tickets for the best events in your area
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-1/3">
            <EventsSearchInput placeholder="Search events ..." />
          </div>
          <div className="flex items-center gap-4">
            <EventsFilters categories={cateogries} />
            <EventsViewModeToggle currentViewMode={viewMode} />
          </div>
        </div>
        <EventsList events={events} viewMode={viewMode} />
      </div>
    </div>
  );
};

export default EventsListPage;
