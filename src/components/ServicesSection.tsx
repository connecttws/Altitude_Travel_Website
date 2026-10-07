"use client";

import React from "react";
import {
  Sparkles,
  Compass,
  Globe2,
  MapPin,
  Sliders,
  Headphones,
  ArrowRight,
  ArrowDown,
  Bus,
  Palmtree,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenCustomModal?: () => void;
}

export default function ServicesSection({ onOpenCustomModal }: ServicesSectionProps) {
  const services = [
    {
      icon: Compass,
      title: "Curated Itineraries for Every Traveller",
      description:
        "No two travellers are alike, and neither should their trips be. Altitude Travel Co. offers different itinerary options for every destination, so you can choose the experience that matches your travel style, whether that is relaxed sightseeing, offbeat exploration or a food-and-shopping-led holiday. Each itinerary mixes iconic sights with local discoveries and leaves room for your own time.",
      tag: "Tailored Focus",
      color: "from-sky-500 to-sky-700",
    },
    {
      icon: Globe2,
      title: "International Tour Packages",
      description:
        "Explore popular destinations across Asia, Europe, the Middle East and beyond with our international tour packages. We take care of flights, hotels, transfers, sightseeing and visa guidance, along with local recommendations for cafés, markets, nightlife and hidden spots you won't find in a generic brochure.",
      tag: "Global Holidays",
      color: "from-blue-600 to-indigo-700",
      anchor: "#international-packages",
    },
    {
      icon: MapPin,
      title: "Indian Tour Packages",
      description:
        "From the mountains of Kashmir and Himachal to the beaches of Goa and the heritage cities of Rajasthan, our Indian tour packages help you discover India beyond the usual tourist stops. Expect handpicked stays, comfortable transport, and authentic regional food, along with the must-visit highlights.",
      tag: "Incredible India",
      color: "from-emerald-500 to-teal-700",
      anchor: "#indian-packages",
    },
    {
      icon: Sliders,
      title: "Custom Tour Packages",
      description:
        "Have your own plan in mind? Our custom tour packages are built around your destination, dates, budget, hotel preference, and interests. Whether it is a honeymoon, family holiday, friends' getaway, or group trip, we design the itinerary with you and adjust it until it feels right.",
      tag: "Bespoke Plans",
      color: "from-amber-400 to-orange-500",
      action: onOpenCustomModal,
    },
    {
      icon: Headphones,
      title: "Support Before, During, and After Your Trip",
      description:
        "Our service does not end at booking. Our team is available to help you with itinerary changes, travel questions, and local recommendations throughout your journey. If you need help, you are just a message or call away.",
      tag: "24/7 Concierge",
      color: "from-sky-600 to-blue-800",
      anchor: "#contact-footer",
    },
  ];

  return (
    <section id="services" className="py-10 sm:py-12 lg:py-14 bg-[#EEF4FA] border-b border-sky-200/80 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200/80 text-sky-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-700" />
            <span>Comprehensive Travel Solutions</span>
          </div>

          {/* Heading with 1 Psychological Highlight */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
            Services We Offer — <span className="text-sky-700">Crafted for Every Journey</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            End-to-end travel craftsmanship tailored for modern travellers in Delhi and across India.
          </p>
        </div>

        {/* 5 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center transition-transform group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/70">
                      {srv.tag}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#08182B] mb-2 group-hover:text-sky-700 transition-colors leading-snug">
                    {srv.title}
                  </h3>

                  {/* Verbatim Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                  {srv.action ? (
                    <button
                      type="button"
                      onClick={srv.action}
                      className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                    >
                      <span>Customize Your Trip Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : srv.anchor ? (
                    <a
                      href={srv.anchor}
                      className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                    >
                      <span>Explore Options</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-slate-400">
                      Altitude Travel Experience
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
