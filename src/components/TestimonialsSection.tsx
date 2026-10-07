"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS_DATA } from "@/data/packages";
import { Star, Quote, CheckCircle2, User, ShieldCheck, ArrowDown } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Soft Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-sky-200/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200/80 text-sky-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>Verified Delhi Client Reviews</span>
          </div>

          {/* Psychological Heading with 1 Highlight */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08182B] tracking-tight leading-tight">
            What Our Travellers Say About <span className="text-sky-700">Altitude Travel</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Real stories from Delhi families and travelers who explored beyond the tourist trail with guaranteed free time.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                
                {/* Header: Client Avatar & Details */}
                <div className="flex items-center gap-3.5">
                  
                  {/* Curated Client Portrait Avatar */}
                  <div className="relative w-13 h-13 rounded-full border-2 border-slate-100 overflow-hidden bg-slate-100 shrink-0 shadow-xs">
                    {t.avatarImage ? (
                      <Image
                        src={t.avatarImage}
                        alt={t.clientName}
                        fill
                        sizes="52px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-sky-100 text-sky-800 font-bold text-sm">
                        {t.avatarPlaceholderText}
                      </div>
                    )}
                  </div>

                  {/* Client Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-[#08182B] truncate">
                        {t.clientName}
                      </h3>
                      <div className="flex items-center text-amber-400 shrink-0">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-slate-500 font-normal">
                      {t.location}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-medium text-sky-800 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{t.tripName}</span>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative pt-1">
                  <Quote className="w-8 h-8 text-sky-200/40 absolute -top-2 -left-1.5 pointer-events-none" />
                  <p className="relative z-10 text-sm text-slate-700 leading-relaxed font-normal italic">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>

              </div>

              {/* Date & Verified Badge */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium">{t.date}</span>
                <span className="text-[11px] font-semibold text-sky-900 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" /> Verified Booking • Delhi Desk
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

