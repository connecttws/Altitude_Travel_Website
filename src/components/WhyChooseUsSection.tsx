"use client";

import React, { useRef } from "react";
import Image from "next/image";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function WhyChooseUsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const pillars = [
    {
      icon: Sliders,
      title: "Itinerary Options That Fit Your Style",
      description:
        "Altitude Travel Co. offers different itinerary options for every destination, so you pick the trip that matches your interests instead of settling for one standard package.",
      tag: "Flexible Choices",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Sparkles,
      title: "Travel Beyond the Tourist Trail",
      description:
        "We combine iconic sights with hidden gems, local cafés, famous food spots, shopping streets and nightlife that today's travellers actually want to explore.",
      tag: "Hidden Discovery",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: CalendarCheck2,
      title: "A Free Day, Always",
      description:
        "Wherever possible, we keep one complete free day in your itinerary to shop, eat, explore or simply relax.",
      tag: "Signature Guarantee",
      featured: true,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Gem,
      title: "Curated Experiences, Not Just Tours",
      description:
        "We don't just sell tours. We curate the complete destination experience for both international and Indian trips.",
      tag: "Immersive Journeys",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Receipt,
      title: "Transparent Pricing",
      description:
        "Clear inclusions and exclusions, with no hidden costs.",
      tag: "100% Upfront",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Headphones,
      title: "Personal Support",
      description:
        "Our team assists you before, during, and after your trip.",
      tag: "Delhi 24/7 Desk",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Palette,
      title: "Customised Plans, Made for You",
      description:
        "Along with our curated itineraries, Altitude Travel Co. also offers custom tour packages. Share your dates, budget and interests, and we will tailor the trip to match.",
      tag: "Bespoke Craft",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="why-choose-us" className="py-10 sm:py-12 lg:py-14 bg-[#0C0A09] text-white relative overflow-hidden border-b border-[#BFA13B]/20">
      
      {/* Decorative Atmosphere Glows */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#BFA13B]/8 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.12em] sm:tracking-[0.22em] uppercase text-[#BFA13B] whitespace-nowrap">
            <Compass className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
            <span>Why Choose Us • The Altitude Standard</span>
          </div>

          {/* Clean Modern Website Style Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-white tracking-tight leading-tight">
            Why Altitude Travel Is the <span className="text-[#D4AF37]">Premier Choice in Delhi</span>
          </h2>

          {/* Short Supporting Copy: Crisp, highly legible */}
          <p className="text-[15px] sm:text-base text-stone-200 leading-relaxed font-normal">
            Altitude Travel Co. is a Delhi agency for travellers who want more than a standard sightseeing package — blending iconic landmarks with hidden gems and free time.
          </p>
        </div>

        {/* Horizontal Photo Carousel / Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            const isFeatured = pillar.featured;

            return (
              <div
                key={idx}
                className="w-[76vw] max-w-[290px] min-w-[255px] sm:w-[340px] lg:w-[360px] shrink-0 snap-start"
              >
                <div
                  className={`rounded-2xl overflow-hidden h-full flex flex-col justify-between transition-all duration-300 group border ${
                    isFeatured
                      ? "bg-[#141210] border-[#BFA13B] shadow-[0_12px_32px_rgba(191,161,59,0.22)] ring-1 ring-[#BFA13B]/50"
                      : "bg-[#141210] border-white/10 hover:border-[#BFA13B]/60 shadow-xs hover:shadow-xl"
                  }`}
                >
                  {/* Photo Header (Aspect 16/10) */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="360px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-stone-950/40 to-transparent pointer-events-none" />
                    
                    {/* Top Floating Tag & Number */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs ${
                          isFeatured
                            ? "bg-shining-gold text-stone-950 font-bold"
                            : "bg-white/95 backdrop-blur-md text-stone-950 border border-white/30 font-semibold"
                        }`}
                      >
                        {pillar.tag}
                      </span>
                      <span className="text-[10px] font-bold text-[#D4AF37] bg-stone-950/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#D4AF37]/30">
                        Pillar 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                            isFeatured
                              ? "bg-[#BFA13B] text-stone-950 shadow-md font-bold"
                              : "bg-[#BFA13B]/15 text-[#BFA13B] border border-[#BFA13B]/30"
                          }`}
                        >
                          <IconComponent className="w-4.5 h-4.5" />
                        </div>
                        <h3 className="text-base font-bold text-white group-hover:text-[#BFA13B] transition-colors leading-snug">
                          {pillar.title}
                        </h3>
                      </div>

                      <p className="text-[13px] sm:text-[13.5px] text-stone-300 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-medium text-stone-400">
                      <span>Altitude Guarantee</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Downside Carousel Controls (Hidden on Mobile Touch) */}
        <div className="hidden md:flex items-center justify-center gap-3 pt-6">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full border border-white/15 bg-white/5 hover:bg-[#BFA13B] text-white hover:text-stone-950 shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer hover:border-[#BFA13B]"
            aria-label="Previous standard pillars"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full border border-white/15 bg-white/5 hover:bg-[#BFA13B] text-white hover:text-stone-950 shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer hover:border-[#BFA13B]"
            aria-label="Next standard pillars"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom CTA Banner inside Dark Section */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-[#BFA13B]/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">Have a specific journey in mind?</h3>
            <p className="text-xs sm:text-sm text-stone-300">Share your dates, budget and wishlist with our Delhi consultants.</p>
          </div>
          <a
            href="#custom-tour"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold bg-[#BFA13B] hover:bg-[#A6832A] text-stone-950 rounded-xl shadow-md transition-all shrink-0 cursor-pointer"
          >
            <span>Plan Your Custom Trip</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
