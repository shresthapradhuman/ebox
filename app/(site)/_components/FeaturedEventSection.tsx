import { getEvents } from "@/app/dashboard/events/helper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import EventCardItem from "../events/_components/EventCardItem";

const FeatureEventSection = async () => {
  const events = await getEvents();
  return (
    <section className="w-full bg-muted py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="px-3 py-1">
              Featured Events
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trending This Week</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Don't miss out on these popular events happening soon
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 8).map((event) => (
            <EventCardItem key={event.id} event={event} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild>
            <Link href={"/events"}>View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureEventSection;
