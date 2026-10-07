import React from "react";
import type { Metadata } from "next";
import ThailandClientPage from "./ThailandClientPage";

export const metadata: Metadata = {
  title: "Thailand Tour Packages | Explore the Best of Thailand",
  description:
    "Explore Thailand with our Thailand tour packages. Visit Bangkok, Phuket, Krabi, Pattaya, and beautiful islands with flexible itineraries and comfortable stays.",
  keywords: [
    "Thailand tour packages",
    "Thailand tour",
    "Thailand trip",
    "Thailand tour and travel",
    "places to visit in Thailand",
    "things to do in Thailand",
    "Thailand honeymoon packages",
    "Thailand family tour packages",
    "Thailand beach holiday",
  ],
  openGraph: {
    title: "Thailand Tour Packages | Explore the Best of Thailand",
    description:
      "Explore Thailand with our Thailand tour packages. Visit Bangkok, Phuket, Krabi, Pattaya, and beautiful islands with flexible itineraries and comfortable stays.",
    type: "website",
    locale: "en_IN",
  },
};

export default function ThailandTourPackagesPage() {
  return <ThailandClientPage />;
}
