"use client";

import React, { useRef, useState, useEffect } from "react";
import { TourPackage, INTERNATIONAL_TOUR_PACKAGES } from "@/data/packages";
import PackageCard from "./PackageCard";
import { ChevronLeft, ChevronRight, Globe2 } from "lucide-react";

interface InternationalPackagesSectionProps {
  onSelectPackage: (pkg: TourPackage) => void;
  onInquirePackage: (pkg: TourPackage) => void;
}

export default function InternationalPackagesSection({
  onSelectPackage,
  onInquirePackage,
}: InternationalPackagesSectionProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
    <section id="international-packages" className="py-10 sm:py-12 lg:py-14 bg-[#FBF7EE] relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#BFA13B]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-6 sm:mb-8">
          
          {/* Eyebrow Micro-caps */}
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.12em] sm:tracking-[0.22em] uppercase text-[#7A5200] whitespace-nowrap">
            <Globe2 className="w-3.5 h-3.5 text-[#7A5200] shrink-0" />
            <span>Worldwide Holidays • Visa Assistance &amp; 1 Free Day</span>
          </div>

          {/* Clean Modern Website Style Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-stone-950 tracking-tight leading-tight">
            Best International Tour Packages — <span className="text-[#7A5200] drop-shadow-xs">Beyond the Ordinary</span>
          </h2>

          {/* Short Supporting Description: High contrast, easy to read */}
          <p className="text-[15px] sm:text-base text-stone-800 leading-relaxed font-normal">
            World-class vacations combining iconic city skylines, emerald island bays, authentic dining, and dedicated visa assistance from Delhi.
          </p>
        </div>

        {/* Horizontal Slider with Nearby Side Arrows (Desktop) */}
        <div className="relative">
          
          {/* Desktop Left Nav Arrow (Positioned beside first card) */}
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous International tours"
            className={`hidden md:flex absolute left-1 md:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-[#E5E0D5] bg-white/95 text-stone-900 shadow-[0_4px_20px_rgba(28,25,23,0.15)] items-center justify-center transition-all duration-200 active:scale-95 backdrop-blur-sm group/btn ${
              canScrollLeft
                ? "opacity-100 cursor-pointer hover:bg-[#0C0A09] hover:text-[#BFA13B] hover:border-[#BFA13B]/50 hover:shadow-[0_6px_25px_rgba(191,161,59,0.3)]"
                : "opacity-35 cursor-not-allowed text-stone-400"
            }`}
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover/btn:-translate-x-0.5" />
          </button>

          {/* Horizontal Slider with Curved Cards */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {INTERNATIONAL_TOUR_PACKAGES.map((pkg) => (
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
            aria-label="Next International tours"
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
