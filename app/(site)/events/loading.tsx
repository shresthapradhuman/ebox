import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LoadingEventPage = () => {
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
            <div className="relative w-full">
              <Skeleton className="w-full p-4" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Skeleton className="w-[200px] p-4" />
              <Skeleton className="w-8 p-4" />
              <Skeleton className="w-20 p-4" />
            </div>
          </div>
        </div>
        <div className={"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"}>
          <Skeleton className="h-96 w-full" />
          <Skeleton className="h-96 w-full" />
          <Skeleton className="h-96 w-full" />
          <Skeleton className="h-96 w-full" />
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    </div>
  );
};

export default LoadingEventPage;
