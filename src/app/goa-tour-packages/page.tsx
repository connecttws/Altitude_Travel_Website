import React from "react";
import type { Metadata } from "next";
import GoaClientPage from "@/app/goa-tour-packages/GoaClientPage";

export const metadata: Metadata = {
  title: "Goa Tour Packages | Explore the Best of Goa | Altitude Travel Co.",
  description:
    "Plan your perfect Goa trip with Altitude Travel Co. Explore beaches, nightlife, adventure, sightseeing, and customized Goa tour packages.",
  keywords: [
    "Goa tour packages",
    "Goa tour and travel",
    "Goa travel packages",
    "Goa holiday packages",
    "Goa trip packages",
    "places to visit in Goa",
    "things to do in Goa",
    "Goa sightseeing",
    "Goa beach holiday",
    "Goa tour operator",
  ],
  alternates: {
    canonical: "https://altitudetravel.in/goa-tour-packages",
  },
  openGraph: {
    title: "Goa Tour Packages | Explore the Best of Goa | Altitude Travel Co.",
    description:
      "Plan your perfect Goa trip with Altitude Travel Co. Explore beaches, nightlife, adventure, sightseeing, and customized Goa tour packages.",
    url: "https://altitudetravel.in/goa-tour-packages",
    siteName: "Altitude Travel Co.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Goa Tour Packages - Altitude Travel Co.",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goa Tour Packages | Explore the Best of Goa | Altitude Travel Co.",
    description:
      "Plan your perfect Goa trip with Altitude Travel Co. Explore beaches, nightlife, adventure, sightseeing, and customized Goa tour packages.",
    images: ["https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristDestination",
      "name": "Goa",
      "description":
        "Goa is India's premier beach holiday destination, renowned for sun-kissed beaches, Portuguese Latin Quarter heritage, water activities, and vibrant coastal shacks.",
      "url": "https://altitudetravel.in/goa-tour-packages",
    },
    {
      "@type": "Product",
      "name": "Goa Tour Packages",
      "description":
        "Plan your perfect Goa trip with Altitude Travel Co. Explore beaches, nightlife, adventure, sightseeing, and customized Goa tour packages.",
      "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      "brand": {
        "@type": "Brand",
        "name": "Altitude Travel Co.",
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "12499",
        "offerCount": "7",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "162",
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
          "name": "Indian Tour Packages",
          "item": "https://altitudetravel.in/#indian-packages",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Goa Tour Packages",
          "item": "https://altitudetravel.in/goa-tour-packages",
        },
      ],
    },
  ],
};

export default function GoaTourPackagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GoaClientPage />
    </>
  );
}
