import { getEvents } from "@/app/dashboard/events/helper";
import CoverImage from "@/components/cover-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

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
        <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {events.slice(0, 8).map((event) => (
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
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {event.orders.length} attending
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="gap-1" asChild>
                  <Link href={`/events/${event.id}`}>
                    Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button size="lg">View All Events</Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureEventSection;
