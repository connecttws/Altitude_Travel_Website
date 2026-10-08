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
    <section id="indian-packages" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] border-b border-[#E5E0D5] relative overflow-hidden">
      
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#BFA13B]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-6 sm:mb-8">
          
          {/* Eyebrow Micro-caps */}
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.12em] sm:tracking-[0.22em] uppercase text-[#BFA13B] whitespace-nowrap">
            <Bus className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
            <span>Luxury AC Coach, Cabs &amp; Stays From Delhi</span>
          </div>

          {/* Clean Modern Website Style Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-stone-950 tracking-tight leading-tight">
            Best Indian Tour Packages — <span className="text-[#A67C1E]">Hidden Gems</span>
          </h2>

          {/* Short Supporting Description: High contrast, easy to read */}
          <p className="text-[15px] sm:text-base text-stone-800 leading-relaxed font-normal">
            Thoughtfully planned escapes blending iconic heritage with regional cuisine, luxury coach travel from Delhi, and unhurried free time.
          </p>
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

        {/* Desktop Downside Carousel Controls (Hidden on Mobile Touch) */}
        <div className="hidden md:flex items-center justify-center gap-3 pt-6">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full border border-[#E5E0D5] bg-white hover:bg-[#0C0A09] text-stone-800 hover:text-[#BFA13B] shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer hover:border-[#BFA13B]/40 hover:shadow-md"
            aria-label="Previous Indian tours"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full border border-[#E5E0D5] bg-white hover:bg-[#0C0A09] text-stone-800 hover:text-[#BFA13B] shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer hover:border-[#BFA13B]/40 hover:shadow-md"
            aria-label="Next Indian tours"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
