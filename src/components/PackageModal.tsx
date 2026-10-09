"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TourPackage } from "@/data/packages";
import {
  X,
  MapPin,
  Clock,
  Star,
  Check,
  Sparkles,
  Send,
  Calendar,
  Users,
  ShieldCheck,
  CheckCircle2,
  Bus,
  Palmtree,
  Phone,
} from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
    </svg>
  );
}

interface PackageModalProps {
  pkg: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PackageModal({ pkg, isOpen, onClose }: PackageModalProps) {
  if (!isOpen || !pkg) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0C0A09]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="relative bg-[#FAF9F6] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E5E0D5]">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#0C0A09]/80 hover:bg-[#0C0A09] text-white border border-[#BFA13B]/30 flex items-center justify-center transition-colors shadow-md cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4.5 h-4.5" />
        </button>

        {/* Modal Hero Banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-stone-950">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09] via-[#0C0A09]/40 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 text-white space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#BFA13B] text-stone-950 font-bold text-xs px-2.5 py-0.5 rounded-full shadow-xs">
                {pkg.category === "indian" ? "Indian Tour Package" : "International Tour Package"}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white font-medium text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-white/20">
                <MapPin className="w-3 h-3 text-[#E8D08D]" />
                {pkg.destination}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white font-medium text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-white/20">
                <Clock className="w-3 h-3 text-[#E8D08D]" />
                {pkg.duration}
              </span>
            </div>

            <h2 className="text-xl sm:2xl font-serif font-bold text-white tracking-tight">
              {pkg.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-200/90 font-normal">
              {pkg.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Content Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Itinerary & Inclusions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Overview */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7A5200] mb-2">
                Trip Overview
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                {pkg.overview}
              </p>
            </div>

            {/* Signature Features */}
            <div className="bg-[#FBF7EE] border border-[#BFA13B]/30 rounded-2xl p-4.5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#7A5200]" />
                <span>Altitude Signature Travel Experience:</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 font-medium">
                🎯 <strong>Free Day:</strong> {pkg.freeDayNote}
              </p>
              <p className="text-xs sm:text-sm text-stone-700 font-medium">
                🍲 <strong>Local Cuisine:</strong> {pkg.localFoodHighlight}
              </p>
            </div>

            {/* Day by Day Itinerary */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7A5200] mb-3">
                Day-by-Day Journey Itinerary
              </h3>
              <div className="space-y-3">
                {pkg.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="p-4 rounded-2xl border border-[#E5E0D5] bg-white flex gap-3.5 shadow-2xs"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#0C0A09] text-[#E8D08D] font-serif font-bold text-xs flex items-center justify-center shrink-0 border border-[#BFA13B]/30 shadow-xs">
                      D{day.day}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-serif font-bold text-stone-900">
                        {day.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed font-normal">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white border border-[#E5E0D5] rounded-2xl p-4 space-y-2 shadow-2xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  What&apos;s Included:
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-700 font-medium">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#7A5200] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#E5E0D5] rounded-2xl p-4 space-y-2 shadow-2xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Exclusions:
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-stone-300 text-xs shrink-0">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Right Column: Pricing & Quick Booking Form */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Price Box */}
            <div className="bg-[#0C0A09] text-white rounded-[24px] p-5 shadow-xl space-y-1 text-center border border-[#BFA13B]/30">
              <span className="text-[11px] uppercase tracking-widest text-[#E8D08D] font-bold">
                Special Package Pricing
              </span>
              <div className="text-3xl font-serif font-bold text-white">
                {pkg.priceStarting}
                <span className="text-xs font-sans font-normal text-stone-400"> / person</span>
              </div>
              <p className="text-[11px] text-stone-300">
                Includes Handpicked Stays, Transfers &amp; Breakfast
              </p>
            </div>

            {/* 100% Form-Free WhatsApp & Direct Call Booking Hub */}
            <div className="bg-white border border-[#E5E0D5] rounded-[24px] p-5 sm:p-6 shadow-sm space-y-4">
              <div className="text-center space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10.5px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Delhi Desk Online • Instant WhatsApp Reply</span>
                </div>
                <h4 className="text-lg font-bold text-stone-900 tracking-tight">
                  Inquire for This Package
                </h4>
                <p className="text-xs text-stone-600 font-normal">
                  Connect with our Connaught Place travel planners. Get the customized day-by-day plan, hotel upgrades &amp; best quotes directly on WhatsApp.
                </p>
              </div>

              {/* Package Snapshot Pill */}
              <div className="bg-[#FAF9F6] p-3 rounded-xl border border-[#E5E0D5] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-stone-900 block truncate max-w-[200px]">{pkg.title}</span>
                  <span className="text-stone-500 text-[11px]">{pkg.duration} • 1 Free Day Guaranteed</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase text-stone-400 block font-semibold">Starting</span>
                  <span className="font-extrabold text-[#9E7418] text-sm">{pkg.priceStarting}</span>
                </div>
              </div>

              {/* Direct Booking Actions */}
              <div className="space-y-2 pt-1">
                <a
                  href={`https://wa.me/919810024680?text=${encodeURIComponent(
                    `Hi Altitude Travel! I want to inquire about the "${pkg.title}" package (${pkg.duration}, starting at ${pkg.priceStarting}). Please share the day-by-day itinerary and best price options!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-white flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(37,211,102,0.3)] transition-all border border-[#25D366]/40 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4.5 h-4.5 fill-white shrink-0" />
                  <span>Chat on WhatsApp for This Package</span>
                </a>

                <a
                  href="tel:+919810024680"
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs bg-white hover:bg-stone-50 text-stone-900 border border-[#E5E0D5] flex items-center justify-center gap-2 shadow-2xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Call Delhi Desk: +91 98100 24680</span>
                </a>
              </div>

              <div className="text-center text-[11px] text-stone-500 flex items-center justify-center gap-1.5 pt-1 border-t border-stone-100 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct WhatsApp Desk • 100% Transparent • Zero Hidden Costs</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
