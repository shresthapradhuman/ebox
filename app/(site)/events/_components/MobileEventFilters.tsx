import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Category } from "@prisma/client";
import { FilterIcon } from "lucide-react";
import EventsFilters from "./EventsFilters";

const MobileEventFilters = ({ categories }: { categories: Category[] }) => {
  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({
          size: "sm",
        })}
      >
        <FilterIcon className="h-4 w-4" />
        <span>Filters</span>
      </SheetTrigger>
      <SheetContent side="left" className="w-2/3 p-4 pt-10 sm:max-w-md">
        <SheetHeader className="px-4 pb-2">
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto">
          <EventsFilters categories={categories} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileEventFilters;
