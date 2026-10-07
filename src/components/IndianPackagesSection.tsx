"use client";

import React, { useRef } from "react";
import { TourPackage, INDIAN_TOUR_PACKAGES } from "@/data/packages";
import PackageCard from "./PackageCard";
import { ChevronLeft, ChevronRight, MapPin, Bus, Palmtree, ArrowDown } from "lucide-react";

interface IndianPackagesSectionProps {
  onSelectPackage: (pkg: TourPackage) => void;
  onInquirePackage: (pkg: TourPackage) => void;
}

export default function IndianPackagesSection({
  onSelectPackage,
  onInquirePackage,
}: IndianPackagesSectionProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

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
    <section id="indian-packages" className="py-10 sm:py-12 lg:py-14 bg-[#EEF4FA] border-b border-sky-200/80 relative overflow-hidden">
      
      {/* Decorative Tree & Scenic Mountain Line Shapes */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="max-w-3xl space-y-3">
            
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200/80 text-sky-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
              <Bus className="w-3.5 h-3.5 text-sky-700" />
              <span>Luxury AC Coach, Cabs &amp; Stays From Delhi</span>
            </div>

            {/* Psychological Heading with 1 Clear Highlight */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
              Best Indian Tour Packages — <span className="text-sky-700">Discover India&apos;s Hidden Gems</span>
            </h2>

            {/* Short Supporting Description (1-2 lines) */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Thoughtfully planned escapes blending iconic heritage with regional cuisine, luxury coach travel from Delhi, and unhurried free time.
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-sky-800 shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Previous Indian tours"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-sky-800 shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Next Indian tours"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider with Curved Cards */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-3 pt-1 scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {INDIAN_TOUR_PACKAGES.map((pkg) => (
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
