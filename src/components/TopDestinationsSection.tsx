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
    <section id="top-destinations" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Soft Sky Glow & Wave Watermark */}
      <div className="absolute top-10 -right-20 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-5 sm:mb-8">
          <div className="max-w-3xl space-y-3">
            
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200/80 text-sky-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
              <Compass className="w-3.5 h-3.5 text-sky-700" />
              <span>Curated Destinations</span>
              <span className="text-amber-700">• 1 Free Day Included</span>
            </div>

            {/* Psychological Heading with 1 Clear Highlight */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
              Top Destinations &amp; <span className="text-sky-700">Curated Escapes</span>
            </h2>

            {/* Short Supporting Description (1-2 lines) */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Curated journeys designed around places you&apos;ll never forget — combining iconic sights, local food, and time to unwind.
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-sky-800 shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Previous tours"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-sky-800 shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Next tours"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Tabs in Sleek Editorial Pills */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8 overflow-x-auto pb-1.5 no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === "all"
                ? "bg-[#08182B] text-amber-300 shadow-xs border border-[#08182B]"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/80 shadow-xs"
            }`}
          >
            <span>All Featured Packages</span>
            <span className="text-[11px] opacity-75">({allPackages.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("indian")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === "indian"
                ? "bg-[#08182B] text-amber-300 shadow-xs border border-[#08182B]"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/80 shadow-xs"
            }`}
          >
            <Bus className="w-3.5 h-3.5" />
            <span>Indian Packages</span>
            <span className="text-[11px] opacity-75">({INDIAN_TOUR_PACKAGES.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("international")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === "international"
                ? "bg-[#08182B] text-amber-300 shadow-xs border border-[#08182B]"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/80 shadow-xs"
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
          className="flex gap-6 overflow-x-auto pb-3 pt-1 scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {displayedPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="w-[310px] sm:w-[350px] lg:w-[380px] shrink-0 snap-start"
            >
              <PackageCard
                pkg={pkg}
                onSelect={onSelectPackage}
                onInquire={onInquirePackage}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
