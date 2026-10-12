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
    "Sri Lanka honeymoon packages",
  ],
  alternates: {
    canonical: "https://altitudetravel.in/kandy-bentota-tour-packages",
  },
  openGraph: {
    title: "Kandy Bentota Tour Packages | Explore Sri Lanka | Altitude Travel Co.",
    description:
      "Explore Kandy and Bentota with Altitude Travel Co. Discover temples, beaches, nature, local experiences, and customized Kandy Bentota tour packages.",
    url: "https://altitudetravel.in/kandy-bentota-tour-packages",
    siteName: "Altitude Travel Co.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Kandy Bentota Tour Packages - Altitude Travel Co.",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kandy Bentota Tour Packages | Explore Sri Lanka | Altitude Travel Co.",
    description:
      "Explore Kandy and Bentota with Altitude Travel Co. Discover temples, beaches, nature, local experiences, and customized Kandy Bentota tour packages.",
    images: ["https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristDestination",
      "name": "Kandy & Bentota, Sri Lanka",
      "description":
        "Experience the best of Sri Lanka with misty tea hills and the Sacred Tooth Relic in Kandy, followed by golden palm-fringed sands and water activities in Bentota.",
      "url": "https://altitudetravel.in/kandy-bentota-tour-packages",
    },
    {
      "@type": "Product",
      "name": "Kandy Bentota Tour Packages",
      "description":
        "Explore Kandy and Bentota with Altitude Travel Co. Discover temples, beaches, nature, local experiences, and customized Kandy Bentota tour packages.",
      "image": "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
      "brand": {
        "@type": "Brand",
        "name": "Altitude Travel Co.",
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "24999",
        "offerCount": "6",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "156",
      },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://altitudetravel.in",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "International Tour Packages",
          "item": "https://altitudetravel.in/#international-packages",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Kandy Bentota Tour Packages",
          "item": "https://altitudetravel.in/kandy-bentota-tour-packages",
        },
      ],
    },
  ],
};

export default function KandyBentotaTourPackagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KandyBentotaClientPage />
    </>
  );
}
