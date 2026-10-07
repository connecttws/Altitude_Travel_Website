"use client";

import React from "react";
import {
  Compass,
  Sliders,
  Sparkles,
  CalendarCheck2,
  Gem,
  Receipt,
  Headphones,
  Palette,
  ShieldCheck,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

export default function WhyChooseUsSection() {
  const pillars = [
    {
      icon: Sliders,
      title: "Itinerary Options That Fit Your Style",
      description:
        "Altitude Travel Co. offers different itinerary options for every destination, so you pick the trip that matches your interests instead of settling for one standard package.",
      tag: "Flexible Choices",
      color: "from-sky-500 to-sky-700",
    },
    {
      icon: Sparkles,
      title: "Travel Beyond the Tourist Trail",
      description:
        "We combine iconic sights with hidden gems, local cafés, famous food spots, shopping streets and nightlife that today's travellers actually want to explore.",
      tag: "Hidden Discovery",
      color: "from-amber-400 to-amber-600",
    },
    {
      icon: CalendarCheck2,
      title: "A Free Day, Always",
      description:
        "Wherever possible, we keep one complete free day in your itinerary to shop, eat, explore or simply relax.",
      tag: "Signature Guarantee",
      color: "from-emerald-500 to-teal-700",
      featured: true,
    },
    {
      icon: Gem,
      title: "Curated Experiences, Not Just Tours",
      description:
        "We don't just sell tours. We curate the complete destination experience for both international and Indian trips.",
      tag: "Immersive Journeys",
      color: "from-indigo-500 to-sky-700",
    },
    {
      icon: Receipt,
      title: "Transparent Pricing",
      description:
        "Clear inclusions and exclusions, with no hidden costs.",
      tag: "100% Upfront",
      color: "from-blue-500 to-sky-700",
    },
    {
      icon: Headphones,
      title: "Personal Support",
      description:
        "Our team assists you before, during, and after your trip.",
      tag: "Delhi 24/7 Desk",
      color: "from-sky-600 to-blue-800",
    },
    {
      icon: Palette,
      title: "Customised Plans, Made for You",
      description:
        "Along with our curated itineraries, Altitude Travel Co. also offers custom tour packages. Share your dates, budget and interests, and we will tailor the trip to match.",
      tag: "Bespoke Craft",
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section id="why-choose-us" className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#08182B] via-[#0B1E36] to-[#08182B] text-white relative overflow-hidden">
      
      {/* Decorative Atmosphere Glows */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-sky-950/80 border border-sky-400/20 text-sky-300 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Why Choose Us</span>
            <span className="text-amber-300">• The Altitude Commitment</span>
          </div>

          {/* Heading with 1 Psychological Highlight */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
            Why Altitude Travel Is the <span className="text-amber-400">Best Tour Agency in Delhi</span>
          </h2>

          {/* Short Supporting Copy (1-2 lines) */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Altitude Travel Co. is a Delhi agency for travellers who want more than a standard sightseeing package — blending iconic landmarks with hidden gems and free time.
          </p>
        </div>

        {/* 7 Pillars Grid in Sleek Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            const isFeatured = pillar.featured;

            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between group ${
                  isFeatured
                    ? "bg-gradient-to-br from-amber-400/15 via-white/[0.06] to-transparent border-2 border-amber-400/70 shadow-[0_8px_32px_rgba(245,158,11,0.18)]"
                    : "bg-white/[0.04] border border-white/10 hover:border-sky-400/50 hover:bg-white/[0.07] backdrop-blur-md shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isFeatured
                          ? "bg-amber-400 text-slate-950 shadow-md font-bold"
                          : "bg-sky-500/15 text-sky-300 border border-sky-400/20"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                        isFeatured
                          ? "bg-amber-400 text-slate-950 font-bold shadow-xs"
                          : "bg-white/10 text-slate-300 border border-white/10"
                      }`}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  <h3
                    className={`text-base sm:text-lg font-bold mb-2 leading-snug transition-colors ${
                      isFeatured
                        ? "text-white group-hover:text-amber-300"
                        : "text-white group-hover:text-sky-300"
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-medium text-slate-400">
                  <span>Pillar 0{idx + 1} of Altitude Guarantee</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner inside Dark Section */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">Have a specific journey in mind?</h3>
            <p className="text-xs sm:text-sm text-slate-300">Share your dates, budget and wishlist with our Delhi consultants.</p>
          </div>
          <a
            href="#custom-tour"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl shadow-md transition-all shrink-0 cursor-pointer"
          >
            <span>Plan Your Custom Trip</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
