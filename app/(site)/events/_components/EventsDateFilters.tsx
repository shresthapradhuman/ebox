import { DatePicker } from "@/components/date-picker";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { eventsFiltersSchema } from "@/schema";
import { CalendarIcon } from "lucide-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type FormData = z.infer<typeof eventsFiltersSchema>;

const EventsDateFilters = ({ form }: { form: UseFormReturn<FormData> }) => {
  return (
    <AccordionItem value="date">
      <AccordionTrigger className="flex py-1.5 sm:py-2">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4" />
          <span className="text-sm sm:text-base">Date</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-2 pt-1">
        <div className="space-y-3 sm:space-y-4">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="space-y-1 sm:space-y-2">
                <FormLabel className="text-xs font-medium sm:text-sm">From</FormLabel>
                <FormControl>
                  <DatePicker value={field.value} onChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="space-y-1 sm:space-y-2">
                <FormLabel className="text-xs font-medium sm:text-sm">To</FormLabel>
                <FormControl>
                  <DatePicker value={field.value} onChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default EventsDateFilters;
