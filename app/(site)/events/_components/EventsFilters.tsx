import EventsCategoryFilters from "./EventsCategoryFilters";
import EventsSortFilters from "./EventsSortFilters";
import { getEventCategories } from "@/app/dashboard/events/helper";

const EventsFilters = async () => {
  const categories = await getEventCategories();
  return (
    <div className="flex items-center gap-2">
      <EventsCategoryFilters categories={categories} />
      <EventsSortFilters />
    </div>
  );
};

export default EventsFilters;
