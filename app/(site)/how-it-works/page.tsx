import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Search, Ticket, Users, CreditCard, CheckCircle, Upload } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">How It Works</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Our platform makes it easy to create, discover, and attend events. Choose your path below.
        </p>
      </div>

      <Tabs defaultValue="attendees" className="mx-auto max-w-4xl">
        <TabsList className="mb-12 grid w-full grid-cols-2">
          <TabsTrigger value="attendees">For Attendees</TabsTrigger>
          <TabsTrigger value="organizers">For Organizers</TabsTrigger>
        </TabsList>

        <TabsContent value="attendees" className="space-y-20">
          <div className="grid gap-8 md:grid-cols-3">
            <StepCard
              icon={<Search className="h-12 w-12 text-primary" />}
              title="Discover Events"
              description="Browse through thousands of events or use our smart search to find events that match your interests."
              number={1}
            />
            <StepCard
              icon={<Ticket className="h-12 w-12 text-primary" />}
              title="Book Tickets"
              description="Select your preferred tickets and secure your spot with our easy checkout process."
              number={2}
            />
            <StepCard
              icon={<Calendar className="h-12 w-12 text-primary" />}
              title="Attend & Enjoy"
              description="Get reminders before the event and access your tickets easily on the day."
              number={3}
            />
          </div>

          <div className="rounded-xl bg-muted p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">Find Your Next Experience</h2>
                <p className="mb-6 text-muted-foreground">
                  From concerts and workshops to conferences and community meetups, find events that
                  match your interests and fit your schedule.
                </p>
                <ul className="space-y-3">
                  <FeatureItem text="Personalized recommendations based on your interests" />
                  <FeatureItem text="Filter by date, location, category, and price" />
                  <FeatureItem text="Read reviews from past attendees" />
                  <FeatureItem text="Save events to your wishlist" />
                </ul>
                <Link
                  href="/events"
                  className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Explore Events
                </Link>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/how-it-works.png?height=600&width=800"
                  alt="People enjoying an event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Ready to discover amazing events?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Join thousands of people who use our platform to discover and attend events that match
              their interests.
            </p>
            <Link
              href="/dashboard/events/create"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Plan Your Event
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="organizers" className="space-y-20">
          <div className="grid gap-6 md:grid-cols-4">
            <StepCard
              icon={<Upload className="h-12 w-12 text-primary" />}
              title="Create Event"
              description="Set up your event with all details, tickets, and a compelling description."
              number={1}
            />
            <StepCard
              icon={<Users className="h-12 w-12 text-primary" />}
              title="Promote"
              description="Share your event through our marketplace and your own channels."
              number={2}
            />
            <StepCard
              icon={<CreditCard className="h-12 w-12 text-primary" />}
              title="Sell Tickets"
              description="Manage sales, track attendance, and process secure payments."
              number={3}
            />
            <StepCard
              icon={<CheckCircle className="h-12 w-12 text-primary" />}
              title="Host Event"
              description="Use our tools to check in attendees and make your event a success."
              number={4}
            />
          </div>

          <div className="rounded-xl bg-muted p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="relative order-2 h-[400px] overflow-hidden rounded-lg md:order-1">
                <Image
                  src="/how-it-works-organizer.png?height=600&width=800"
                  alt="Event organizer dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                  Powerful Tools for Organizers
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Our platform provides everything you need to create, manage, and grow successful
                  events.
                </p>
                <ul className="space-y-3">
                  <FeatureItem text="Customizable event pages" />
                  <FeatureItem text="Multiple ticket types and pricing options" />
                  <FeatureItem text="Real-time sales and attendance analytics" />
                  <FeatureItem text="Integrated marketing and promotion tools" />
                  <FeatureItem text="Mobile check-in and attendee management" />
                </ul>
                <Link
                  href="/dashboard/events/create"
                  className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Ready For An Event
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-center text-2xl font-bold md:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <FaqItem
                question="How much does it cost to list an event?"
                answer="We charge a small percentage of each ticket sold. There are no upfront costs or monthly fees to list your events on our platform."
              />
              <FaqItem
                question="When do I receive my payout?"
                answer="Payouts are typically processed within 5-7 business days after your event has concluded, ensuring a smooth and reliable payment process."
              />
              <FaqItem
                question="Can I offer different ticket types?"
                answer="Yes! You can create multiple ticket types with different prices, availability, and perks to offer various options to your attendees."
              />
              <FaqItem
                question="How do attendees check in?"
                answer="Attendees can show their digital tickets for scanning, or you can use our organizer app to check them in manually or via QR code."
              />
            </div>
          </div>

          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ready to host your first event?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Join thousands of successful event organizers who use our platform to create memorable
              experiences.
            </p>
            <Link
              href="/dashboard/events/create"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get Started
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function StepCard({
  icon,
  title,
  description,
  number,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}) {
  return (
    <div className="relative rounded-xl border bg-background p-6 shadow-sm">
      <div className="absolute -left-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
        {number}
      </div>
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-primary" />
      <span>{text}</span>
    </li>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-lg border bg-background p-6 shadow-sm">
      <h3 className="mb-2 text-lg font-bold">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
}
