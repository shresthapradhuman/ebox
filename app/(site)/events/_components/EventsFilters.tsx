"use client";
import { Accordion } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect } from "react";
import EventsCategoriesFilters from "./EventsCategoriesFilters";
import { eventsFiltersSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { Category } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import EventsPriceFitlers from "./EventsPriceFitlers";
import EventsDateFilters from "./EventsDateFilters";

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
  useEffect(() => {
    const categoriesParam = searchParams.get("categories");
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    const startDateParam = searchParams.get("startDate");
    const endDateParam = searchParams.get("endDate");

    const formValues: Partial<FormData> = {};

    if (categoriesParam) {
      formValues.categories = categoriesParam.split(",");
    }

    if (minPriceParam && maxPriceParam) {
      formValues.priceRange = [Number.parseInt(minPriceParam), Number.parseInt(maxPriceParam)];
    }

    if (startDateParam) {
      formValues.startDate = new Date(startDateParam);
    }

    if (endDateParam) {
      formValues.endDate = new Date(endDateParam);
    }

    form.reset(formValues);
  }, [searchParams, form]);

  const onSubmit = (values: FormData) => {
    const params = new URLSearchParams(searchParams.toString());
    if (values.categories && values.categories.length > 0) {
      params.set("categories", values.categories.join(","));
    } else {
      params.delete("categories");
    }

    params.set("minPrice", values.priceRange[0].toString());
    params.set("maxPrice", values.priceRange[1].toString());

    // Update or remove date params
    if (values.startDate) {
      params.set("startDate", values.startDate.toISOString().split("T")[0]);
    } else {
      params.delete("startDate");
    }

    if (values.endDate) {
      params.set("endDate", values.endDate.toISOString().split("T")[0]);
    } else {
      params.delete("endDate");
    }

    // Update URL with new params
    router.push(`?${params.toString()}`);
  };
  const handleReset = () => {
    form.reset({
      categories: [],
      priceRange: [0, 10000],
      startDate: undefined,
      endDate: undefined,
    });

    // Clear URL params and navigate
    router.push(window.location.pathname);
  };
  return (
    <Card>
      <CardHeader className="px-3 py-2 sm:px-4 sm:pb-0 sm:pt-4">
        <CardTitle className="text-base font-semibold sm:text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 px-3 py-2 sm:space-y-8 sm:px-4 sm:pb-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Accordion
              type="multiple"
              defaultValue={["categories", "price", "date"]}
              className="mb-8 space-y-3"
            >
              <EventsCategoriesFilters categories={categories} form={form} />
              <EventsPriceFitlers form={form} />
              <EventsDateFilters form={form} />
            </Accordion>
            <div className="flex gap-2">
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
