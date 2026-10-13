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
    "Phuket tour packages",
    "Bangkok tour packages",
    "Krabi holiday packages",
  ],
  alternates: {
    canonical: "https://altitudetravel.in/thailand-tour-packages",
  },
  openGraph: {
    title: "Thailand Tour Packages | Explore the Best of Thailand",
    description:
      "Explore Thailand with our Thailand tour packages. Visit Bangkok, Phuket, Krabi, Pattaya, and beautiful islands with flexible itineraries and comfortable stays.",
    url: "https://altitudetravel.in/thailand-tour-packages",
    siteName: "Altitude Travel Co.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Thailand Tour Packages - Altitude Travel Co.",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thailand Tour Packages | Explore the Best of Thailand",
    description:
      "Explore Thailand with our Thailand tour packages. Visit Bangkok, Phuket, Krabi, Pattaya, and beautiful islands with flexible itineraries and comfortable stays.",
    images: ["https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristDestination",
      "name": "Thailand",
      "description":
        "Thailand is a premier Southeast Asian destination known for Bangkok temples, Phuket beaches, Krabi limestone cliffs, and tropical island hopping.",
      "url": "https://altitudetravel.in/thailand-tour-packages",
    },
    {
      "@type": "Product",
      "name": "Thailand Tour Packages",
      "description":
        "Explore Thailand with our Thailand tour packages. Visit Bangkok, Phuket, Krabi, Pattaya, and beautiful islands with flexible itineraries and comfortable stays.",
      "image": "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
      "brand": {
        "@type": "Brand",
        "name": "Altitude Travel Co.",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "184",
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
          "name": "Thailand Tour Packages",
          "item": "https://altitudetravel.in/thailand-tour-packages",
        },
      ],
    },
  ],
};

export default function ThailandTourPackagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ThailandClientPage />
    </>
  );
}
