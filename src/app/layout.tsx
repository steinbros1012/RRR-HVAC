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
        {/* Clash Display (headlines) + Satoshi (body) via Fontshare */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500&f[]=satoshi@400,500,700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
