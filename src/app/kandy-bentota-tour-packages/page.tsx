import React from "react";
import type { Metadata } from "next";
import KandyBentotaClientPage from "@/app/kandy-bentota-tour-packages/KandyBentotaClientPage";

export const metadata: Metadata = {
  title: "Kandy Bentota Tour Packages | Explore Sri Lanka | Altitude Travel Co.",
  description:
    "Explore Kandy and Bentota with Altitude Travel Co. Discover temples, beaches, nature, local experiences, and customized Kandy Bentota tour packages.",
  keywords: [
    "Kandy Bentota tour packages",
    "Kandy Bentota tour",
    "Kandy Bentota travel",
    "Kandy Bentota trip",
    "Kandy Bentota holiday packages",
    "Kandy Bentota Sri Lanka",
    "Kandy tour packages",
    "Bentota tour packages",
    "places to visit in Kandy",
    "places to visit in Bentota",
    "things to do in Kandy",
    "things to do in Bentota",
    "Sri Lanka tour packages",
  ],
  openGraph: {
    title: "Kandy Bentota Tour Packages | Explore Sri Lanka | Altitude Travel Co.",
    description:
      "Explore Kandy and Bentota with Altitude Travel Co. Discover temples, beaches, nature, local experiences, and customized Kandy Bentota tour packages.",
    type: "website",
    locale: "en_IN",
  },
};

export default function KandyBentotaTourPackagesPage() {
  return <KandyBentotaClientPage />;
}
