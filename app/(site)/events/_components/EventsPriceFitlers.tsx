import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { eventsFiltersSchema } from "@/schema";

import { DollarSignIcon } from "lucide-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type FormData = z.infer<typeof eventsFiltersSchema>;

const EventsPriceFitlers = ({ form }: { form: UseFormReturn<FormData> }) => {
  return (
    <AccordionItem value="price">
      <AccordionTrigger className="flex py-1.5 sm:py-2">
        <div className="flex items-center gap-2">
          <DollarSignIcon className="h-4 w-4" />
          <span className="text-sm sm:text-base">Price Range</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-2 pt-1">
        <FormField
          control={form.control}
          name="priceRange"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="space-y-3 p-2 sm:space-y-4">
                  <Slider
                    min={0}
                    max={10000}
                    step={200}
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm">${field.value[0]}</span>
                    <span className="text-xs sm:text-sm">${field.value[1]}+</span>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default EventsPriceFitlers;
