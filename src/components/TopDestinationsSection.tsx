"use client";

import React, { useRef, useState } from "react";
import { TourPackage, INDIAN_TOUR_PACKAGES, INTERNATIONAL_TOUR_PACKAGES } from "@/data/packages";
import PackageCard from "./PackageCard";
import { ChevronLeft, ChevronRight, Sparkles, Compass, Palmtree, Bus, Plane, ArrowDown } from "lucide-react";

interface TopDestinationsSectionProps {
  onSelectPackage: (pkg: TourPackage) => void;
  onInquirePackage: (pkg: TourPackage) => void;
}

export default function TopDestinationsSection({
  onSelectPackage,
  onInquirePackage,
}: TopDestinationsSectionProps) {
  const [activeTab, setActiveTab] = useState<"all" | "indian" | "international">("all");
  const sliderRef = useRef<HTMLDivElement>(null);

  const allPackages = [
    ...INDIAN_TOUR_PACKAGES.slice(0, 3),
    ...INTERNATIONAL_TOUR_PACKAGES.slice(0, 3),
    ...INDIAN_TOUR_PACKAGES.slice(3),
    ...INTERNATIONAL_TOUR_PACKAGES.slice(3),
  ];

  const displayedPackages =
    activeTab === "indian"
      ? INDIAN_TOUR_PACKAGES
      : activeTab === "international"
      ? INTERNATIONAL_TOUR_PACKAGES
      : allPackages;

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 390;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="top-destinations" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] border-b border-[#E5E0D5] relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-10 -right-20 w-96 h-96 bg-[#BFA13B]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-5 sm:mb-8">
          
          {/* Eyebrow Micro-caps */}
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.12em] sm:tracking-[0.22em] uppercase text-[#BFA13B] whitespace-nowrap">
            <Compass className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
            <span>Curated Destinations • 1 Free Day Included</span>
          </div>

          {/* Clean Modern Website Style Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-stone-950 tracking-tight leading-tight">
            Top Destinations &amp; <span className="text-[#A67C1E]">Curated Escapes</span>
          </h2>

          {/* Dynamic Moving Accent Line */}
          <div className="moving-line-track max-w-[200px]">
            <div className="moving-line-beam" />
          </div>

          {/* Short Supporting Description: High contrast, easy to read */}
          <p className="text-[15px] sm:text-base text-stone-800 leading-relaxed font-normal">
            Curated journeys designed around places you&apos;ll never forget — combining iconic sights, local food, and time to unwind.
          </p>
        </div>

        {/* Filter Tabs in Sleek Editorial Pills */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8 overflow-x-auto pb-1.5 no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === "all"
                ? "bg-[#0C0A09] text-[#BFA13B] shadow-xs border border-[#BFA13B]/40"
                : "bg-white text-stone-700 hover:text-[#BFA13B] hover:bg-[#FBF7EE] border border-[#E5E0D5] shadow-xs"
            }`}
          >
            <span>All Featured Packages</span>
            <span className="text-[11px] opacity-75">({allPackages.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("indian")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === "indian"
                ? "bg-[#0C0A09] text-[#BFA13B] shadow-xs border border-[#BFA13B]/40"
                : "bg-white text-stone-700 hover:text-[#BFA13B] hover:bg-[#FBF7EE] border border-[#E5E0D5] shadow-xs"
            }`}
          >
            <Bus className="w-3.5 h-3.5" />
            <span>Indian Packages</span>
            <span className="text-[11px] opacity-75">({INDIAN_TOUR_PACKAGES.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("international")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === "international"
                ? "bg-[#0C0A09] text-[#BFA13B] shadow-xs border border-[#BFA13B]/40"
                : "bg-white text-stone-700 hover:text-[#BFA13B] hover:bg-[#FBF7EE] border border-[#E5E0D5] shadow-xs"
            }`}
          >
            <Plane className="w-3.5 h-3.5" />
            <span>International Packages</span>
            <span className="text-[11px] opacity-75">({INTERNATIONAL_TOUR_PACKAGES.length})</span>
          </button>
        </div>

        {/* Horizontal Slider / Carousel with Curved Cards */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {displayedPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="w-[76vw] max-w-[290px] min-w-[255px] sm:w-[340px] lg:w-[380px] shrink-0 snap-start"
            >
              <PackageCard
                pkg={pkg}
                onSelect={onSelectPackage}
                onInquire={onInquirePackage}
              />
            </div>
          ))}
        </div>

        {/* Desktop Downside Carousel Controls (Hidden on Mobile Touch) */}
        <div className="hidden md:flex items-center justify-center gap-3 pt-6">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full border border-[#E5E0D5] bg-white hover:bg-[#0C0A09] text-stone-800 hover:text-[#BFA13B] shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer hover:border-[#BFA13B]/40 hover:shadow-md"
            aria-label="Previous destination cards"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full border border-[#E5E0D5] bg-white hover:bg-[#0C0A09] text-stone-800 hover:text-[#BFA13B] shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer hover:border-[#BFA13B]/40 hover:shadow-md"
            aria-label="Next destination cards"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
