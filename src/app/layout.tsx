import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RRR HVAC Rescue LLC | Heating & Cooling | Watertown, SD",
  description: "Fast, reliable HVAC repair, installation, and maintenance in Watertown, South Dakota. 24/7 emergency service. Call Mike today.",
  keywords: "HVAC Watertown SD, furnace repair Watertown, AC repair South Dakota, heating cooling Watertown",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
