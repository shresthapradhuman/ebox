import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "500", "900"],
});

export const metadata: Metadata = {
  title: "Event Box",
  description: "Create, manage, and sell event tickets easily on our online marketplace. Join now!",
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
