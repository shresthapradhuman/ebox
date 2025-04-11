"use client";
import { Accordion } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import EventsCategoriesFilters from "./EventsCategoriesFilters";
import { eventsFiltersSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { Category } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

type FormData = z.infer<typeof eventsFiltersSchema>;

const EventsFilters = ({ categories }: { categories: Category[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const form = useForm<FormData>({
    resolver: zodResolver(eventsFiltersSchema),
    defaultValues: {
      categories: [],
      priceRange: [0, 10000],
      startDate: undefined,
      endDate: undefined,
    },
  });
  const onSubmit = (values: FormData) => {
    const params = new URLSearchParams(searchParams.toString());
    if (values.categories && values.categories.length > 0) {
      params.set("categories", values.categories.join(","));
    } else {
      params.delete("categories");
    }

    // Update URL with new params
    router.push(`?${params.toString()}`);
  };
  const handleReset = () => {
    form.reset({
      categories: [],
      priceRange: [0, 1000],
      startDate: undefined,
      endDate: undefined,
    });

    // Clear URL params and navigate
    router.push(window.location.pathname);
  };
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium sm:text-lg">Filters</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 px-3 py-2 sm:space-y-6 sm:px-4 sm:py-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Accordion
              type="multiple"
              defaultValue={["categories", "price", "date"]}
              className="space-y-2"
            >
              <EventsCategoriesFilters categories={categories} form={form} />
            </Accordion>
            <div className="flex gap-2 pt-2">
              <Button type="button" variant="outline" className="w-1/2" onClick={handleReset}>
                Reset
              </Button>
              <Button type="submit" className="w-1/2">
                Apply Filters
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EventsFilters;
