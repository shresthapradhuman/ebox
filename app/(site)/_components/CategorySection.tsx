import { getEventCategories } from "@/app/dashboard/events/helper";
import { Badge } from "@/components/ui/badge";
import { categoriesIcon } from "@/constant";
import Link from "next/link";
import React from "react";

const CategorySection = async () => {
  const categories = await getEventCategories();

  return (
    <section className="w-full bg-background py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="px-3 py-1">
              Popular Categories
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Browse Events by Category
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Discover events that match your interests and passions
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {categories.map(({ name, slug }) => (
            <Link
              key={name}
              href={`/events?category=${slug}`}
              className="group relative overflow-hidden rounded-lg border p-2 transition-colors hover:border-primary"
            >
              <div className="flex h-[140px] flex-col items-center justify-center p-4 text-center">
                <div className="mb-2 rounded-full bg-muted p-3 transition-colors group-hover:bg-primary/10">
                  {(() => {
                    const Icon = getIconByCategoryName(name); // Store the icon in a variable
                    return Icon ? <Icon /> : null; // Render the icon if it exists
                  })()}
                </div>
                <h3 className="text-base font-semibold">{name}</h3>
                {/* <p className="text-sm text-muted-foreground">{count} Events</p> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const getIconByCategoryName = (name: string) => {
  return categoriesIcon.find((cat) => cat.name.toLowerCase() == name.toLowerCase())?.icon;
};

export default CategorySection;
