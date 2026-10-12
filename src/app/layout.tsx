import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Amiri } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://altitudetravel.in"),
  title: {
    default: "Tour and Travel Agency in Delhi | Altitude Travel Co.",
    template: "%s | Altitude Travel Co.",
  },
  description:
    "Altitude Travel Co. is a tour and travel agency in Delhi offering international tour packages, Indian tour packages, and custom trips. Plan yours today.",
  keywords: [
    "Tour and Travel Agency in Delhi",
    "best tour and travel agency in delhi",
    "international tour and travel agency",
    "international tour packages",
    "best tour operator in India",
    "custom tour packages",
    "indian tour packages",
  ],
  authors: [{ name: "Altitude Travel Co." }],
  alternates: {
    canonical: "https://altitudetravel.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Tour and Travel Agency in Delhi | Altitude Travel Co.",
    description:
      "Altitude Travel Co. is a tour and travel agency in Delhi offering international tour packages, Indian tour packages, and custom trips. Plan yours today.",
    url: "https://altitudetravel.in",
    siteName: "Altitude Travel Co.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour and Travel Agency in Delhi | Altitude Travel Co.",
    description:
      "Altitude Travel Co. is a tour and travel agency in Delhi offering international tour packages, Indian tour packages, and custom trips. Plan yours today.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable} ${amiri.variable} scroll-smooth`}>
      <head>
        <Script
          src="/crm-lead-tracker.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans antialiased bg-[#F8FBFF] text-slate-900 selection:bg-sky-200 selection:text-sky-950 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
