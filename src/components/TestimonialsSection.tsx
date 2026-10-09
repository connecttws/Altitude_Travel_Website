"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { TESTIMONIALS_DATA } from "@/data/packages";
import { Star, Quote, CheckCircle2, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
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
    <section id="testimonials" className="py-10 sm:py-12 lg:py-14 bg-[#FBF7EE] relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#BFA13B]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-6 sm:mb-8">
          
          {/* Eyebrow Micro-caps */}
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.12em] sm:tracking-[0.22em] uppercase text-[#7A5200] whitespace-nowrap">
            <Star className="w-3.5 h-3.5 fill-[#7A5200] text-[#7A5200] shrink-0" />
            <span>Verified Delhi Client Reviews</span>
          </div>

          {/* Clean Modern Website Style Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-stone-950 tracking-tight leading-tight">
            What Our Travellers Say About <span className="text-[#7A5200] drop-shadow-xs">Altitude Travel</span>
          </h2>

          {/* Short Supporting Description */}
          <p className="text-[15px] sm:text-base text-stone-800 leading-relaxed font-normal">
            Real stories from Delhi families and travellers who explored beyond the tourist trail with guaranteed free time.
          </p>
        </div>

        {/* Horizontal Slider with Nearby Side Arrows (Desktop) */}
        <div className="relative">
          
          {/* Desktop Left Nav Arrow */}
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous reviews"
            className={`hidden md:flex absolute left-1 md:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-[#E5E0D5] bg-white/95 text-stone-900 shadow-[0_4px_20px_rgba(28,25,23,0.15)] items-center justify-center transition-all duration-200 active:scale-95 backdrop-blur-sm group/btn ${
              canScrollLeft
                ? "opacity-100 cursor-pointer hover:bg-[#0C0A09] hover:text-[#BFA13B] hover:border-[#BFA13B]/50 hover:shadow-[0_6px_25px_rgba(191,161,59,0.3)]"
                : "opacity-35 cursor-not-allowed text-stone-400"
            }`}
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover/btn:-translate-x-0.5" />
          </button>

          {/* Horizontal Slider with Cards */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 items-stretch"
          >
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="w-[82vw] max-w-[340px] min-w-[270px] sm:w-[360px] lg:w-[390px] shrink-0 snap-start flex flex-col"
              >
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E5E0D5] shadow-xs hover:shadow-[0_16px_36px_-8px_rgba(28,25,23,0.1)] hover:border-[#BFA13B] transition-all duration-300 flex flex-col justify-between h-full relative group">
                  <div className="space-y-3.5">
                    
                    {/* Header: Client Avatar & Details */}
                    <div className="flex items-center gap-3">
                      
                      {/* Curated Client Portrait Avatar */}
                      <div className="relative w-12 h-12 rounded-full border-2 border-[#E5E0D5] overflow-hidden bg-stone-100 shrink-0 shadow-xs">
                        {t.avatarImage ? (
                          <Image
                            src={t.avatarImage}
                            alt={t.clientName}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#FAF9F6] text-[#7A5200] font-bold text-sm">
                            {t.avatarPlaceholderText}
                          </div>
                        )}
                      </div>

                      {/* Client Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h3 className="text-[15px] font-serif font-bold text-[#1C1917] truncate">
                            {t.clientName}
                          </h3>
                          <div className="flex items-center text-[#7A5200] shrink-0">
                            {[...Array(t.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-[#7A5200]" />
                            ))}
                          </div>
                        </div>

                        <div className="text-xs text-stone-500 font-normal truncate">
                          {t.location}
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-800 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{t.tripName}</span>
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <div className="relative pt-1 min-h-[64px]">
                      <Quote className="w-7 h-7 text-[#BFA13B]/20 absolute -top-2 -left-1.5 pointer-events-none" />
                      <p className="relative z-10 text-[13.5px] sm:text-[14px] text-stone-800 leading-relaxed font-normal">
                        &ldquo;{t.review}&rdquo;
                      </p>
                    </div>

                  </div>

                  {/* Date & Verified Badge */}
                  <div className="mt-4 pt-3 border-t border-[#E5E0D5] flex items-center justify-between text-xs text-stone-400">
                    <span className="font-medium text-stone-500">{t.date}</span>
                    <span className="text-[11px] font-semibold text-stone-900 bg-[#FAF9F6] px-2.5 py-0.5 rounded-full border border-[#BFA13B]/30 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" /> Verified Booking • Delhi Desk
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Right Nav Arrow */}
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next reviews"
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

