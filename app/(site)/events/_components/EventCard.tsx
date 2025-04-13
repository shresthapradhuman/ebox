import CoverImage from "@/components/cover-image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRightIcon, Calendar, MapPin, UsersIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { EventProps } from "./EventsList";

const EventCard = ({ event }: { event: EventProps }) => {
  return (
    <Card key={event.title} className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <CoverImage imageUrl={event.image} title={event.title} />
          <div className="absolute right-2 top-2">
            {/* <Badge className="bg-primary text-primary-foreground">Category</Badge> */}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>
            {event.date.toLocaleDateString()} {`(${event.startTime} ~ ${event.endTime})`}
          </span>
        </div>
        <h3 className="truncate text-lg font-bold capitalize">{event.title}</h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{event.venue}</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="flex items-center gap-2">
          <UsersIcon className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{event.orders?.length} attending</span>
        </div>
        <Button size="sm" className="gap-1" asChild>
          <Link href={`/events/${event.id}`}>
            Details <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
