import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CalendarDaysIcon, MapPinIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-24">
      <div className="relative z-10 container mx-auto w-full p-4 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* content section */}
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl !leading-tight font-bold sm:text-5xl md:text-6xl">
              Discover Your <span className="text-primary">Unforgettable </span> Event Experience
            </h1>
            <p className="text-muted-foreground max-w-[600px] text-lg md:text-xl">
              Our platform offers a seamless experience for both{" "}
              <span className="font-semibold">Organizers And Attendees</span>. Book events, host
              your own event, and sell tickets with ease. Whether you&apos;re planing a gathering or
              searching for the perfect event to attend, we provide all the tools you need.{" "}
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="group" asChild>
                <Link href={"/admin/events/create"}>
                  Plan Your Event
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={"/events"}>Explore Events</Link>
              </Button>
            </div>

            <div className="flex flex-col space-y-3 pt-4 sm:flex-row sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <CalendarDaysIcon className="text-primary mr-2 h-5 w-5" />
                <span className="text-sm font-medium">300+ Events Managed</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="text-primary mr-2 h-5 w-5" />
                <span className="text-sm font-medium">Service All Over The Country</span>
              </div>
            </div>
          </div>
          {/* image section */}
          <div className="relative w-full">
            <Image
              src="/hero.png?height=600&width=600"
              alt="Event management showcase"
              width={600}
              height={600}
              className="h-full w-full object-cover"
              priority
              loading="eager"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
