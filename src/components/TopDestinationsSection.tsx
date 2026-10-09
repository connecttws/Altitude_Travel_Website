"use client";

import React, { useRef, useState, useEffect } from "react";
import { TourPackage, INDIAN_TOUR_PACKAGES, INTERNATIONAL_TOUR_PACKAGES } from "@/data/packages";
import PackageCard from "./PackageCard";
import { ChevronLeft, ChevronRight, Compass } from "lucide-react";

interface TopDestinationsSectionProps {
  onSelectPackage: (pkg: TourPackage) => void;
  onInquirePackage: (pkg: TourPackage) => void;
}

export default function TopDestinationsSection({
  onSelectPackage,
  onInquirePackage,
}: TopDestinationsSectionProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const allPackages = [
    ...INDIAN_TOUR_PACKAGES.slice(0, 3),
    ...INTERNATIONAL_TOUR_PACKAGES.slice(0, 3),
    ...INDIAN_TOUR_PACKAGES.slice(3),
    ...INTERNATIONAL_TOUR_PACKAGES.slice(3),
  ];

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    }
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 404;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="top-destinations" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-10 -right-20 w-96 h-96 bg-[#BFA13B]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-6 sm:mb-8">
          
          {/* Eyebrow Micro-caps with High-Contrast Deep Bronze-Gold */}
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.12em] sm:tracking-[0.22em] uppercase text-[#7A5200] whitespace-nowrap">
            <Compass className="w-3.5 h-3.5 text-[#7A5200] shrink-0" />
            <span>Curated Destinations • 1 Free Day Included</span>
          </div>

          {/* Clean Modern Website Style Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-stone-950 tracking-tight leading-tight">
            Top Destinations &amp; <span className="text-[#7A5200] drop-shadow-xs">Curated Escapes</span>
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

        {/* Horizontal Slider with Nearby Side Arrows (Desktop) */}
        <div className="relative">
          
          {/* Desktop Left Nav Arrow (Positioned beside first card) */}
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous destination cards"
            className={`hidden md:flex absolute left-1 md:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-[#E5E0D5] bg-white/95 text-stone-900 shadow-[0_4px_20px_rgba(28,25,23,0.15)] items-center justify-center transition-all duration-200 active:scale-95 backdrop-blur-sm group/btn ${
              canScrollLeft
                ? "opacity-100 cursor-pointer hover:bg-[#0C0A09] hover:text-[#BFA13B] hover:border-[#BFA13B]/50 hover:shadow-[0_6px_25px_rgba(191,161,59,0.3)]"
                : "opacity-35 cursor-not-allowed text-stone-400"
            }`}
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover/btn:-translate-x-0.5" />
          </button>

          {/* Horizontal Slider / Carousel with Curved Cards */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {allPackages.map((pkg) => (
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

          {/* Desktop Right Nav Arrow (Positioned beside last visible card) */}
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next destination cards"
            className={`hidden md:flex absolute right-1 md:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-[#E5E0D5] bg-white/95 text-stone-900 shadow-[0_4px_20px_rgba(28,25,23,0.15)] items-center justify-center transition-all duration-200 active:scale-95 backdrop-blur-sm group/btn ${
              canScrollRight
                ? "opacity-100 cursor-pointer hover:bg-[#0C0A09] hover:text-[#BFA13B] hover:border-[#BFA13B]/50 hover:shadow-[0_6px_25px_rgba(191,161,59,0.3)]"
                : "opacity-35 cursor-not-allowed text-stone-400"
            }`}
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover/btn:translate-x-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
