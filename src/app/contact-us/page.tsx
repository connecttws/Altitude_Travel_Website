import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Compass,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  HeartHandshake,
  ArrowRight,
  MessageSquare,
  ChevronRight,
  Headphones,
  Sliders,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Altitude Travel Co. | Tour & Travel Agency in Bazpur",
  description:
    "Contact Altitude Travel Co. for Indian and international tour packages, customised holidays, travel assistance and bookings. Call or WhatsApp us today.",
  keywords: [
    "Contact Altitude Travel Co.",
    "Tour & Travel Agency in Bazpur",
    "Tour operator in Uttarakhand",
    "custom tour packages",
    "international tour packages",
    "Indian holiday packages",
    "Bazpur travel agency",
  ],
  alternates: {
    canonical: "https://www.altitudetravelco.com/contact-us/",
  },
  openGraph: {
    title: "Contact Altitude Travel Co. | Tour & Travel Agency in Bazpur",
    description:
      "Contact Altitude Travel Co. for Indian and international tour packages, customised holidays, travel assistance and bookings. Call or WhatsApp us today.",
    url: "https://www.altitudetravelco.com/contact-us/",
    siteName: "Altitude Travel Co.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Altitude Travel Co. | Tour & Travel Agency in Bazpur",
    description:
      "Contact Altitude Travel Co. for Indian and international tour packages, customised holidays, travel assistance and bookings. Call or WhatsApp us today.",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Altitude Travel Co.",
  description:
    "Get in touch with Altitude Travel Co. for bespoke Indian and international tour packages, customized itineraries, and expert travel support.",
  url: "https://www.altitudetravelco.com/contact-us/",
  mainEntity: {
    "@type": "TravelAgency",
    name: "Altitude Travel Co.",
    url: "https://altitudetravel.in",
    logo: "https://altitudetravel.in/logo.jpg",
    telephone: "+919639320101",
    email: "Altitudetravelco@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bazpur, near Rudrapur, Nainital",
      addressLocality: "Bazpur",
      addressRegion: "Uttarakhand",
      postalCode: "262401",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "19:30",
      },
    ],
    sameAs: [
      "https://wa.me/919639320101",
      "https://www.altitudetravelco.com",
    ],
  },
};

export default function ContactUsPage() {
  const whyContactUs = [
    {
      title: "Personalised Travel Assistance",
      desc: "Get guidance based on your destination, travel preferences and budget.",
      icon: Headphones,
    },
    {
      title: "Indian & International Holidays",
      desc: "Explore travel options across popular Indian destinations and countries worldwide.",
      icon: Globe2,
    },
    {
      title: "Flexible Tour Planning",
      desc: "Choose from curated packages or discuss changes to suit your travel requirements.",
      icon: Sliders,
    },
    {
      title: "Clear Pricing & Guidance",
      desc: "Understand package inclusions, exclusions and travel arrangements before booking.",
      icon: ShieldCheck,
    },
    {
      title: "Support Throughout Your Journey",
      desc: "Get assistance with your travel arrangements before and during your holiday.",
      icon: HeartHandshake,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-24 bg-[#FAF9F6] min-h-screen text-stone-900 font-sans [font-feature-settings:'normal']">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-stone-500 font-medium overflow-x-auto no-scrollbar py-1">
            <Link
              href="/"
              className="text-[#7A5200] hover:text-stone-950 font-bold transition-colors shrink-0"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-900 font-bold truncate">
              Contact Altitude Travel Co.
            </span>
          </nav>

          {/* Hero Section */}
          <section className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 text-[#7A5200] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" />
              <span>Plan Your Trip • Get Expert Travel Assistance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-[1.18]">
              Get in Touch With <span className="bg-gradient-to-r from-[#7A5200] via-[#D4AF37] to-[#7A5200] bg-clip-text text-transparent drop-shadow-xs">Altitude Travel Co.</span>
            </h1>

            <div className="space-y-3 text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              <p>
                Planning your next holiday? Whether you are dreaming of a peaceful mountain escape, a relaxing beach vacation, an international adventure or a customised family trip, Altitude Travel Co. is here to help.
              </p>
              <p>
                Connect with our travel team to discuss your destination, travel dates, budget and preferences. We will help you find suitable tour packages and plan a journey that matches your expectations.
              </p>
            </div>
          </section>

          {/* Contact Information Cards (Grid of 4) */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Phone / WhatsApp Card */}
            <div className="bg-white rounded-2xl border border-[#E5E0D5] p-5 sm:p-6 shadow-xs hover:border-[#D4AF37] transition-all group flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] flex items-center justify-center text-[#7A5200] group-hover:bg-[#0C0A09] group-hover:text-[#F5D77F] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href="tel:+919639320101"
                    className="text-base sm:text-lg font-extrabold text-stone-950 hover:text-[#7A5200] transition-colors block leading-tight mt-1"
                  >
                    +91 96393 20101
                  </a>
                  <p className="text-xs text-stone-500 mt-1">
                    Call or chat directly for instant assistance.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                <a
                  href="https://wa.me/919639320101?text=Hello%20Altitude%20Travel,%20I%20would%20like%20to%20plan%20a%20tour%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email Address Card */}
            <div className="bg-white rounded-2xl border border-[#E5E0D5] p-5 sm:p-6 shadow-xs hover:border-[#D4AF37] transition-all group flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] flex items-center justify-center text-[#7A5200] group-hover:bg-[#0C0A09] group-hover:text-[#F5D77F] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                    Email Address
                  </span>
                  <a
                    href="mailto:Altitudetravelco@gmail.com"
                    className="text-base font-extrabold text-stone-950 hover:text-[#7A5200] transition-colors block leading-tight mt-1 break-all"
                  >
                    Altitudetravelco@gmail.com
                  </a>
                  <p className="text-xs text-stone-500 mt-1">
                    Send detailed itineraries, queries or group briefs.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-stone-100">
                <a
                  href="mailto:Altitudetravelco@gmail.com"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A5200] hover:text-stone-950"
                >
                  <span>Compose Email</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl border border-[#E5E0D5] p-5 sm:p-6 shadow-xs hover:border-[#D4AF37] transition-all group flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] flex items-center justify-center text-[#7A5200] group-hover:bg-[#0C0A09] group-hover:text-[#F5D77F] transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                    Head Office Location
                  </span>
                  <p className="text-sm sm:text-[15px] font-bold text-stone-950 leading-snug mt-1">
                    Bazpur, near Rudrapur, Nainital, Uttarakhand, India
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    PIN: 262401 • U.S. Nagar / Kumaon
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-stone-100">
                <span className="text-xs font-semibold text-stone-600">
                  Gateway to Kumaon & Nainital
                </span>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-2xl border border-[#E5E0D5] p-5 sm:p-6 shadow-xs hover:border-[#D4AF37] transition-all group flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] flex items-center justify-center text-[#7A5200] group-hover:bg-[#0C0A09] group-hover:text-[#F5D77F] transition-colors">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                    Business Hours
                  </span>
                  <div className="text-sm font-bold text-stone-950 mt-1 space-y-1">
                    <p className="leading-tight">Mon – Sat: 9:30 AM – 7:30 PM IST</p>
                    <p className="text-xs font-semibold text-stone-500">Sunday: Closed</p>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    WhatsApp concierge open for travelers on active trips.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-stone-700">Open for Inquiries</span>
              </div>
            </div>

          </section>

          {/* Let's Plan Your Next Journey & Visit Altitude Travel Co. (Balanced 2-Column Section) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            
            {/* Let's Plan Your Next Journey Card */}
            <div className="bg-white rounded-3xl border border-[#E5E0D5] p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xs hover:border-[#D4AF37]/50 transition-all space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#D4AF37]/30 text-[#7A5200] text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Let's Plan Your Next Journey</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight leading-snug">
                  Tailored Travel Designed Around You
                </h2>

                <div className="space-y-3 text-stone-700 text-sm sm:text-[15px] font-normal leading-relaxed">
                  <p>
                    Every traveller has a different idea of a perfect holiday. Tell us where you want to go, who you are travelling with and what kind of experience you are looking for.
                  </p>
                  <p>
                    Our team will assist you with suitable Indian and international tour packages, accommodation options, transportation, sightseeing and visa guidance.
                  </p>
                  <p className="font-semibold text-stone-950 pt-1">
                    Whether you have a destination in mind or need help choosing one, we are happy to assist.
                  </p>
                </div>

                {/* Service Highlights Pills */}
                <div className="pt-3 grid grid-cols-2 gap-2.5 text-xs font-semibold text-stone-800">
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF9F6] rounded-xl border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>Indian Holidays</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF9F6] rounded-xl border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>International Tours</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF9F6] rounded-xl border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>Private Cabs & Transfers</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF9F6] rounded-xl border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>Visa & Booking Guidance</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://wa.me/919639320101?text=Hello%20Altitude%20Travel,%20I%20am%20ready%20to%20plan%20my%20next%20journey.%20Please%20guide%20me%20with%20destinations%20and%20itineraries."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-shining-gold text-stone-950 hover:brightness-105 active:scale-95 shadow-[0_4px_16px_rgba(212,175,55,0.35)] transition-all flex items-center justify-center gap-2 border border-[#D4AF37]/60 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-stone-950" />
                  <span>Start Planning on WhatsApp</span>
                </a>

                <a
                  href="tel:+919639320101"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#FAF9F6] hover:bg-stone-100 text-stone-900 border border-[#E5E0D5] transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#7A5200]" />
                  <span>Call Us Directly</span>
                </a>
              </div>
            </div>

            {/* Visit Altitude Travel Co. Card */}
            <div className="bg-white rounded-3xl border border-[#E5E0D5] p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xs hover:border-[#D4AF37]/50 transition-all space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#D4AF37]/30 text-[#7A5200] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Visit Altitude Travel Co.</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight leading-snug">
                  Based in Bazpur, Uttarakhand
                </h2>

                <div className="space-y-3 text-stone-700 text-sm sm:text-[15px] font-normal leading-relaxed">
                  <p>
                    Our travel team is based in Bazpur, Uttarakhand. You can connect with us by phone, WhatsApp or email to discuss your upcoming holiday.
                  </p>
                  <p>
                    Whether you are planning a short domestic break or an international vacation, we look forward to helping you organise your next trip.
                  </p>
                </div>

                {/* Detail Summary Block */}
                <div className="p-4 sm:p-5 bg-[#FAF9F6] rounded-2xl border border-[#E5E0D5] space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5 text-stone-800">
                    <MapPin className="w-4 h-4 text-[#BFA13B] mt-0.5 shrink-0" />
                    <span>Bazpur, near Rudrapur, Nainital, Uttarakhand 262401, India</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-stone-800">
                    <Phone className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>Hotline / WhatsApp: +91 96393 20101</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-stone-800">
                    <Mail className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>Email: Altitudetravelco@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-stone-800">
                    <Clock className="w-4 h-4 text-[#BFA13B] shrink-0" />
                    <span>Working Hours: Mon – Sat: 9:30 AM – 7:30 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Direct Connect Buttons */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="tel:+919639320101"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#0C0A09] text-[#F5D77F] hover:bg-[#7A5200] hover:text-white transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 96393 20101</span>
                </a>

                <a
                  href="https://wa.me/919639320101?text=Hello%20Altitude%20Travel,%20I%20would%20like%20to%20visit%20or%20connect%20with%20your%20office%20in%20Bazpur."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </section>

          {/* Why Contact Altitude Travel Co.? (5 Pillar Feature Cards) */}
          <section className="space-y-8 pt-4">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D4AF37]/30 text-[#7A5200] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>Our Service Standards</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Why Contact Altitude Travel Co.?
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-normal">
                Here is how we take the stress out of holiday planning from your very first conversation with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {whyContactUs.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#E5E0D5] p-6 shadow-xs hover:border-[#D4AF37] hover:shadow-md transition-all space-y-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] flex items-center justify-center text-[#7A5200] group-hover:bg-[#0C0A09] group-hover:text-[#F5D77F] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-stone-950 tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Start Planning Your Next Holiday (Full-Width Brand CTA Banner) */}
          <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0C0A09] via-[#141210] to-[#1C1917] p-8 sm:p-12 border border-[#D4AF37]/40 shadow-xl text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="space-y-3 text-center md:text-left max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#F5D77F] text-xs font-bold border border-[#D4AF37]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Start Planning Your Next Holiday</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Your Next Memorable Journey Starts With a Conversation.
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
                  Contact Altitude Travel Co. today and let us help you plan a holiday that suits your travel style. Call or WhatsApp: <a href="tel:+919639320101" className="text-[#F5D77F] font-bold underline">+91 96393 20101</a>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href="https://wa.me/919639320101?text=Hello%20Altitude%20Travel,%20I%20am%20ready%20to%20plan%20my%20next%20holiday!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-shining-gold text-stone-950 hover:brightness-105 active:scale-95 shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]/60"
                >
                  <MessageSquare className="w-4 h-4 text-stone-950" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="tel:+919639320101"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#F5D77F]" />
                  <span>Call +91 96393 20101</span>
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
