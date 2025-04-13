import { Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HelpCenter() {
  return (
    <div className="container mx-auto px-4 py-10 md:px-6">
      <div className="mb-10 flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          How can we help you?
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Find answers to common questions about our event marketplace
        </p>
        <div className="relative mt-4 w-full max-w-2xl">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search for answers..." className="w-full pl-10" />
        </div>
      </div>

      <Tabs defaultValue="attendees" className="mx-auto w-full max-w-4xl">
        <TabsList className="mb-8 grid w-full grid-cols-3">
          <TabsTrigger value="attendees">For Attendees</TabsTrigger>
          <TabsTrigger value="organizers">For Organizers</TabsTrigger>
          <TabsTrigger value="venues">For Venues</TabsTrigger>
        </TabsList>

        <TabsContent value="attendees" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CategoryCard
              title="Tickets & Registration"
              description="Learn about purchasing tickets and registration process"
              href="/help-center/tickets"
            />
            <CategoryCard
              title="Account Management"
              description="Manage your profile, preferences, and notifications"
              href="/help-center/account"
            />
            <CategoryCard
              title="Payments & Refunds"
              description="Information about payment methods and refund policies"
              href="/help-center/payments"
            />
            <CategoryCard
              title="Event Access"
              description="How to access events and use QR codes"
              href="/help-center/access"
            />
            <CategoryCard
              title="Cancellations"
              description="What happens if an event is cancelled"
              href="/help-center/cancellations"
            />
            <CategoryCard
              title="Mobile App"
              description="Using our mobile app for the best experience"
              href="/help-center/app"
            />
          </div>

          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <FaqItem
                question="How do I purchase tickets for an event?"
                answer="You can purchase tickets by navigating to the event page and clicking the 'Buy Tickets' button. Follow the checkout process to complete your purchase. You'll receive a confirmation email with your ticket details."
              />
              <FaqItem
                question="Can I transfer my ticket to someone else?"
                answer="Yes, you can transfer your ticket to another person. Go to 'My Tickets' in your account, select the ticket you want to transfer, and click on 'Transfer Ticket'. Enter the recipient's email address to complete the transfer."
              />
              <FaqItem
                question="What's your refund policy?"
                answer="Refund policies vary by event. Generally, tickets can be refunded up to 7 days before the event date. Check the specific event page for detailed refund information. Processing fees are typically non-refundable."
              />
              <FaqItem
                question="How do I access my tickets on the day of the event?"
                answer="You can access your tickets through your account on our website or mobile app. We'll also send you an email with a QR code that can be scanned at the event entrance. We recommend downloading tickets for offline access."
              />
              <FaqItem
                question="What happens if an event is cancelled?"
                answer="If an event is cancelled, you'll be automatically refunded the full ticket price including fees. You'll receive an email notification about the cancellation and refund process, which typically takes 5-10 business days."
              />
              <FaqItem
                question="Can I get a receipt for my purchase?"
                answer="Yes, a receipt is automatically sent to your email after completing a purchase. You can also find all your receipts in the 'Order History' section of your account."
              />
            </Accordion>
          </div>
        </TabsContent>

        <TabsContent value="organizers" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CategoryCard
              title="Creating Events"
              description="How to create and publish your events"
              href="/help-center/create-events"
            />
            <CategoryCard
              title="Ticket Management"
              description="Setting up ticket types, prices, and availability"
              href="/help-center/ticket-management"
            />
            <CategoryCard
              title="Promotion Tools"
              description="Tools to market and promote your events"
              href="/help-center/promotion"
            />
            <CategoryCard
              title="Attendee Management"
              description="Managing registrations and check-ins"
              href="/help-center/attendee-management"
            />
            <CategoryCard
              title="Payouts"
              description="How and when you'll receive your funds"
              href="/help-center/payouts"
            />
            <CategoryCard
              title="Analytics"
              description="Understanding your event performance metrics"
              href="/help-center/analytics"
            />
          </div>

          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <FaqItem
                question="How do I create a new event?"
                answer="To create a new event, log into your organizer account and click on 'Create Event'. Fill in the event details including title, date, location, description, and images. Set up your ticket types and prices, then publish when ready."
              />
              <FaqItem
                question="What fees do you charge organizers?"
                answer="We charge a 5% platform fee plus a fixed fee of $0.99 per ticket sold. Payment processing fees (typically 2.9% + $0.30) are also applied. Volume discounts are available for large events."
              />
              <FaqItem
                question="When will I receive my payout?"
                answer="Payouts are processed 5 business days after your event concludes. For multi-day events, payouts begin 5 days after the final day. Funds are transferred to the bank account specified in your organizer profile."
              />
              <FaqItem
                question="How can I track ticket sales?"
                answer="You can track ticket sales in real-time through your organizer dashboard. The analytics section provides detailed information on sales trends, attendee demographics, and marketing channel performance."
              />
              <FaqItem
                question="Can I offer discount codes?"
                answer="Yes, you can create multiple discount codes for your events. Go to your event management page, select 'Promotions', and create new discount codes with either percentage or fixed amount discounts. You can also set usage limits and expiration dates."
              />
              <FaqItem
                question="How do I manage check-ins at my event?"
                answer="You can use our mobile app or web dashboard for check-ins. Scan attendee QR codes or search by name. Multiple staff members can check in attendees simultaneously, and you'll get real-time attendance statistics."
              />
            </Accordion>
          </div>
        </TabsContent>

        <TabsContent value="venues" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CategoryCard
              title="Venue Listing"
              description="How to list your venue on our marketplace"
              href="/help-center/venue-listing"
            />
            <CategoryCard
              title="Booking Management"
              description="Managing venue availability and bookings"
              href="/help-center/booking-management"
            />
            <CategoryCard
              title="Venue Promotion"
              description="Tools to showcase and promote your venue"
              href="/help-center/venue-promotion"
            />
            <CategoryCard
              title="Payments & Fees"
              description="Understanding the payment structure"
              href="/help-center/venue-payments"
            />
            <CategoryCard
              title="Venue Requirements"
              description="Technical and legal requirements for venues"
              href="/help-center/venue-requirements"
            />
            <CategoryCard
              title="Support for Venues"
              description="Dedicated support for venue partners"
              href="/help-center/venue-support"
            />
          </div>

          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <FaqItem
                question="How do I list my venue on your platform?"
                answer="To list your venue, create a venue partner account and click 'Add Venue'. Provide detailed information about your space including capacity, amenities, photos, and availability. Our team will review your listing before it goes live."
              />
              <FaqItem
                question="What commission do you take from venue bookings?"
                answer="We charge a 10% commission on successful venue bookings. This fee is deducted from the total booking amount before the payout is processed. There are no upfront or monthly fees to list your venue."
              />
              <FaqItem
                question="How do I set my venue's availability?"
                answer="You can set your venue's availability through your venue dashboard. Use the calendar interface to block off dates that are already booked or unavailable. You can also set recurring availability patterns and special hours."
              />
              <FaqItem
                question="Can I offer different pricing for different days or times?"
                answer="Yes, you can set dynamic pricing based on days of the week, time of day, seasons, or special dates. Configure your pricing rules in the 'Pricing Settings' section of your venue management dashboard."
              />
              <FaqItem
                question="How are venue disputes handled?"
                answer="If there's a dispute between a venue and an organizer, our dedicated support team will mediate. We review the booking terms, communications, and circumstances to reach a fair resolution. Both parties can submit evidence to support their case."
              />
              <FaqItem
                question="Can I offer additional services with my venue?"
                answer="Yes, you can list additional services such as catering, equipment rental, staff, security, or cleaning. Create service packages in your venue profile with detailed descriptions and pricing for each service offered."
              />
            </Accordion>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mx-auto mt-16 max-w-4xl rounded-lg bg-muted p-8">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold">Still need help?</h2>
          <p className="text-muted-foreground">Our support team is ready to assist you</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from our customer service team</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Our support team is available 24/7 to help you with any questions or issues.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contact Support</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>Chat with a support agent in real-time</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Get immediate assistance through our live chat service during business hours.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="block">
      <Card className="h-full transition-all hover:shadow-md">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <p className="text-sm text-primary">Learn more →</p>
        </CardFooter>
      </Card>
    </Link>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <AccordionItem value={question}>
      <AccordionTrigger className="text-left">{question}</AccordionTrigger>
      <AccordionContent>
        <p className="text-muted-foreground">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
}
