import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RRR HVAC Rescue LLC | Heating & Cooling | Watertown, SD",
  description:
    "Fast, reliable HVAC repair, installation, and maintenance in Watertown, South Dakota. 24/7 emergency service. Call Mike today.",
  keywords:
    "HVAC Watertown SD, furnace repair Watertown, AC repair South Dakota, heating cooling Watertown",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* DM Serif Display + Geist Mono + Inter via Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Geist+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
