"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TourPackage } from "@/data/packages";
import { MapPin, Clock, Star, ArrowRight, Heart } from "lucide-react";

interface PackageCardProps {
  pkg: TourPackage;
  onSelect: (pkg: TourPackage) => void;
  onInquire: (pkg: TourPackage) => void;
  featured?: boolean;
}

export default function PackageCard({ pkg, onSelect, onInquire, featured = false }: PackageCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div
      onClick={() => onSelect(pkg)}
      className={`group bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col h-full cursor-pointer ${
        featured
          ? "border-amber-300 shadow-[0_6px_24px_-4px_rgba(245,158,11,0.15)] ring-1 ring-amber-300/60"
          : "border-slate-200/90 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_30px_-6px_rgba(15,23,42,0.12)] hover:border-sky-300/80"
      }`}
    >
      {/* 1. HERO IMAGE (35–50% Visual Attention, Aspect 16/10, subtle 1.03x scale hover) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-black/20 pointer-events-none" />

        {/* Top Floating Elements: Destination Pill / Featured Chip + Heart Wishlist Button */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="bg-white/95 backdrop-blur-md text-[#08182B] font-semibold text-xs px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1.5 border border-white/60">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>{pkg.destination}</span>
            </span>
            {featured && (
              <span className="bg-amber-400 text-slate-950 font-bold text-[11px] px-2.5 py-0.5 rounded-full shadow-xs">
                Featured
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsSaved(!isSaved);
            }}
            aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
            className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-rose-500 shadow-xs border border-white/60 transition-colors"
          >
            <Heart
              className={`w-4 h-4 transition-transform duration-200 ${
                isSaved ? "fill-rose-500 text-rose-500 scale-110" : "text-slate-600 hover:scale-105"
              }`}
            />
          </button>
        </div>

        {/* Bottom Floating Metadata: Duration & Rating */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
          <div className="flex items-center gap-1.5 text-xs font-medium bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
            <Clock className="w-3.5 h-3.5 text-sky-300" />
            <span>{pkg.duration}</span>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded-lg shadow-xs">
            <Star className="w-3 h-3 fill-slate-950" />
            <span>{pkg.rating.toFixed(1)}</span>
            <span className="text-[10px] font-medium opacity-75">({pkg.reviewsCount})</span>
          </div>
        </div>
      </div>

      {/* 2. CARD CONTENT BODY (Short, Emotional, Clear Visual Hierarchy) */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          {/* Eyebrow & Free Day Badge */}
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
              {pkg.tag ? pkg.tag : pkg.destination}
            </span>
            <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
              1 Free Day
            </span>
          </div>

          {/* Short Title (3–8 Words) */}
          <h3 className="text-base sm:text-[17px] font-bold text-[#08182B] group-hover:text-sky-700 transition-colors leading-snug line-clamp-1">
            {pkg.cardTitle || pkg.title}
          </h3>

          {/* Short Emotional Description (1–2 lines desktop, protected by line-clamp-2) */}
          <p className="text-xs sm:text-[13px] text-slate-500 line-clamp-2 font-normal leading-relaxed mt-1.5">
            {pkg.shortDescription || pkg.subtitle}
          </p>
        </div>

        {/* 3. FOOTER: Clear Starting Price + Explore Package CTA */}
        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
              Starting From
            </span>
            <div className="text-base sm:text-lg font-extrabold text-[#08182B] tracking-tight">
              {pkg.priceStarting}
              <span className="text-[11px] font-normal text-slate-500"> /person</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(pkg);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold bg-[#08182B] text-white rounded-xl shadow-xs hover:bg-sky-800 transition-all duration-200 group-hover:bg-sky-800"
            >
              <span>Explore Package</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
