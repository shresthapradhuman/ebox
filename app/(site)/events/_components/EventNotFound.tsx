import Link from "next/link";
import { Calendar, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function EventNotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
        <Calendar className="h-12 w-12 text-muted-foreground" aria-hidden="true" />
      </div>
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Events not found</h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        We couldn't find the events you're looking for. It may have been moved or the URL might be
        incorrect.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button asChild variant="default" size="lg">
          <Link href="/events">
            <Calendar className="mr-2 h-4 w-4" />
            Browse events
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
