import Link from "next/link";
import { CalendarX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function EventNotFound() {
  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16">
      <Card className="w-full max-w-md">
        <CardHeader className="pb-2 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <CalendarX className="h-6 w-6 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl">Event Not Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-center">
          <p className="text-muted-foreground">
            Sorry, we couldn't find the event you're looking for.
          </p>
          <p className="text-sm text-muted-foreground">
            The event may have been removed, sold out, or the link might be incorrect.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button asChild className="w-full">
            <Link href="/events">Browse Events</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/">Return Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
