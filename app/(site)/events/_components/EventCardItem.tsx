import { ArrowRightIcon, CalendarIcon, MapPinIcon, ShoppingBagIcon, UsersIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EventProps } from "./EventsList";
import CoverImage from "@/components/cover-image";
import Link from "next/link";

interface EventCardProps {
  event: EventProps;
}

const EventCardItem = ({ event }: EventCardProps) => {
  const formattedDate = new Date(event.date).toLocaleDateString("ja-JP", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedPrice = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(parseInt(event.price));

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 w-full">
        <CoverImage imageUrl={event.image || "/placeholder.svg"} title={event.title} />
        <div className="absolute right-2 top-2">
          <Badge variant="secondary" className="bg-white/90 text-black hover:bg-white/80">
            {event.category?.name}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <h3 className="line-clamp-2 text-xl font-bold">{event.title}</h3>
          <span className="font-bold text-green-600">{formattedPrice}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="mb-4 line-clamp-2 text-muted-foreground">{event.description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            <span>
              {formattedDate} ( {event.startTime} ~ {event.endTime} )
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4 text-muted-foreground" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center gap-2">
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
            <span>{event.orders?.length.toLocaleString()} attendees</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="mt-auto flex gap-2">
          <Button variant="outline" className="w-1/2 sm:w-auto">
            <ShoppingBagIcon />
            Add to cart
          </Button>
          <Button variant="ghost" size="sm" className="gap-1" asChild></Button>
          <Button className="w-1/2 sm:w-auto" asChild>
            <Link href={`/events/${event.id}`}>
              Check Details <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default EventCardItem;
