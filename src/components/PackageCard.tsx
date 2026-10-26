"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TourPackage } from "@/data/packages";
import { MapPin, Clock, Star, ArrowRight, Heart, Sparkles, MessageSquare } from "lucide-react";

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
          ? "border-[#BFA13B] shadow-[0_8px_30px_-6px_rgba(191,161,59,0.22)] ring-1 ring-[#BFA13B]/50"
          : "border-[#E5E0D5] shadow-[0_2px_12px_-2px_rgba(28,25,23,0.05)] hover:shadow-[0_16px_36px_-8px_rgba(28,25,23,0.12)] hover:border-[#BFA13B]"
      }`}
    >
      {/* 1. HERO IMAGE (Aspect 16/10, subtle 1.04x scale hover) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/20 pointer-events-none" />
        
        {/* Specular Light Sweep across image on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

        {/* Top Floating Elements: Destination Pill / Featured Chip + Heart Wishlist Button */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="bg-white/95 backdrop-blur-md text-[#1C1917] font-semibold text-xs px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1.5 border border-[#E5E0D5]">
              <MapPin className="w-3.5 h-3.5 text-[#BFA13B]" />
              <span>{pkg.destination}</span>
            </span>
            {featured && (
              <span className="bg-shining-gold text-stone-950 font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                Signature
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
            className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-stone-700 hover:text-rose-500 shadow-xs border border-[#E5E0D5] transition-colors"
          >
            <Heart
              className={`w-4 h-4 transition-transform duration-200 ${
                isSaved ? "fill-rose-500 text-rose-500 scale-110" : "text-stone-600 hover:scale-105"
              }`}
            />
          </button>
        </div>

        {/* Bottom Floating Metadata: Duration & Rating */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
          <div className="flex items-center gap-1.5 text-xs font-medium bg-[#0C0A09]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#D4AF37]/25 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-[#F5D77F]" />
            <span>{pkg.duration}</span>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold bg-shining-gold text-stone-950 px-2 py-0.5 rounded-lg shadow-xs">
            <Star className="w-3 h-3 fill-stone-950" />
            <span>{pkg.rating.toFixed(1)}</span>
            <span className="text-[10px] font-medium opacity-80">({pkg.reviewsCount})</span>
          </div>
        </div>
      </div>

      {/* 2. CARD CONTENT BODY */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          {/* Eyebrow & Free Day Badge */}
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7A5200]">
              {pkg.tag ? pkg.tag : pkg.destination}
            </span>
            <span className="text-[10.5px] font-semibold text-[#7A5200] bg-[#FBF7EE] px-2 py-0.5 rounded-md border border-[#7A5200]/30 shadow-2xs">
              Best Price &amp; Service
            </span>
          </div>

          {/* Short Title: Modern clean sans font */}
          <h3 className="text-base sm:text-[17px] font-bold text-stone-900 group-hover:text-[#7A5200] transition-colors leading-snug line-clamp-1">
            {pkg.cardTitle || pkg.title}
          </h3>

          {/* Short Description: High contrast, easily readable */}
          <p className="text-[13px] sm:text-[13.5px] text-stone-700 line-clamp-2 font-normal leading-relaxed mt-1.5">
            {pkg.shortDescription || pkg.subtitle}
          </p>
        </div>

        {/* 3. FOOTER: Custom Itinerary & Explore Package CTA */}
        <div className="pt-3.5 border-t border-[#E5E0D5] flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-stone-700">
            <Sparkles className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
            <span className="text-xs font-semibold text-stone-800">Custom Itinerary</span>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={`https://wa.me/919639320101?text=${encodeURIComponent(
                `Hi Altitude Travel! I want to inquire about the "${pkg.title}" package (${pkg.duration}). Please share the customized itinerary and quote!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-2.5 py-2 text-xs font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white rounded-xl transition-all duration-200 border border-emerald-300 shadow-2xs"
              title="Inquire directly on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Inquire</span>
            </a>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(pkg);
              }}
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-bold bg-[#0C0A09] text-[#F5D77F] hover:bg-[#BFA13B] hover:text-stone-950 group-hover:border-[#BFA13B]/70 shining-sweep rounded-xl transition-all duration-200 border border-[#BFA13B]/30 cursor-pointer shadow-xs hover:shadow-[0_4px_16px_rgba(191,161,59,0.35)]"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
