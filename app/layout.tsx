import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Event Marketplace | Book Your Dream Event",
  description:
    "Discover and book unique events, conferences, and experiences tailored to your interests. Explore the ultimate event marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("relative font-sans antialiased", poppins.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
