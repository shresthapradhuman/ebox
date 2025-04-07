import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { prisma } from "@/prisma/client";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

const FeatureEventSection = async () => {
  return (
    <section className="w-full bg-muted py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <span className="px-3 py-1">
              Featured Events
            </span>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trending This Week</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Don't miss out on these popular events happening soon
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        </div>
        <div className="mt-8 flex justify-center">
          <Button size="lg">View All Events</Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureEventSection;
