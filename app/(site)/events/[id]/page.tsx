import CoverImage from "@/components/cover-image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, MapPinIcon, Users } from "lucide-react";
import React from "react";
import EventNotFound from "../_components/EventNotFound";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { getEventById } from "@/app/dashboard/events/helper";
import CheckoutButton from "../_components/CheckoutButton";

type PageProps = {
  params: Promise<{ id: string }>;
};

const EventDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const event = await getEventById(id);
  return !event ? (
    <EventNotFound />
  ) : (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="mb-4 grid grid-cols-1 gap-8 md:grid-cols-2">
          <AspectRatio className="overflow-hidden rounded-lg bg-muted" ratio={16 / 9}>
            <CoverImage imageUrl={event.image} title={event.title} />
          </AspectRatio>
          <div className="flex flex-col space-y-6">
            <div>
              <Badge
                className={cn("mb-2 bg-gray-100 capitalize text-gray-800", {
                  "bg-green-100 text-green-800": event.status == "PUBLISHED",
                  "bg-red-100 text-red-800": event.status == "CANCELLED",
                })}
              >
                {event.status.toLowerCase()}
              </Badge>
              <h1 className="text-3xl font-bold md:text-4xl">{event.title}</h1>
              <div className="mt-2 flex items-center text-muted-foreground">
                by <span className="ml-2 capitalize">{event.organizer?.name}</span>
              </div>
            </div>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">Ticket Information</CardTitle>
                <CardDescription>Limited Tickets</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold md:text-3xl">
                    ¥ {parseInt(event.price) > 0 ? event.price : "Free"}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="mr-3 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-muted-foreground">
                        {event.date.toLocaleDateString("ja-JP", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                        {" ( "}
                        {event.date.toLocaleDateString("ja-JP", {
                          weekday: "long",
                        })}
                        {" )"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Clock className="mr-3 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Time</p>
                      <p className="text-muted-foreground">
                        <span>Starts: {event.startTime}</span>
                        <span className="mx-2">•</span>
                        <span>Ends: {event.endTime}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Users className="mr-3 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Capacity</p>
                      <p className="text-muted-foreground">{event.capacity} attendees</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="mr-3 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Venue</p>
                      <p className="text-muted-foreground">{event.venue} attendees</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <CheckoutButton />
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="prose">
          <h3 className="mb-2 text-xl font-semibold">Event Description</h3>
          <p>{event.description}</p>
        </div>
      </div>
    </section>
  );
};

export default EventDetailPage;
