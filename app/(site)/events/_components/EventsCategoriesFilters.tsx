import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { TagIcon } from "lucide-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { eventsFiltersSchema } from "@/schema";
import { Checkbox } from "@/components/ui/checkbox";
import { Category } from "@prisma/client";

type FormData = z.infer<typeof eventsFiltersSchema>;

const EventsCategoriesFilters = ({
  form,
  categories,
}: {
  form: UseFormReturn<FormData>;
  categories: Category[];
}) => {
  return (
    <AccordionItem value="categories">
      <AccordionTrigger className="flex py-1.5 sm:py-2">
        <div className="flex items-center gap-2">
          <TagIcon className="h-4 w-4" />
          <span className="text-sm sm:text-base">Categories</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-2 pt-1">
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-1 sm:gap-2">
          {categories.map((category) => (
            <FormField
              key={category.id}
              control={form.control}
              name="categories"
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(category.slug)}
                        onCheckedChange={(checked) => {
                          const currentValues = field.value || [];
                          return checked
                            ? field.onChange([...currentValues, category.slug])
                            : field.onChange(
                                currentValues.filter((value) => value !== category.slug),
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="cursor-pointer text-xs font-medium capitalize sm:text-sm">
                      {category.name}
                    </FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default EventsCategoriesFilters;
