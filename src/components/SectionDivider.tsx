"use client";

import React from "react";
import { Compass, Sparkles } from "lucide-react";

export type SectionDividerVariant = "emblem" | "glow" | "diamonds" | "animated";

interface SectionDividerProps {
  variant?: SectionDividerVariant;
  className?: string;
  darkBg?: boolean;
}

export default function SectionDivider({
  variant = "emblem",
  className = "",
  darkBg = false,
}: SectionDividerProps) {
  if (variant === "glow") {
    return (
      <div className={`relative w-full py-1 flex items-center justify-center overflow-hidden ${className}`}>
        {/* Soft base hairline fading at edges */}
        <div
          className={`w-full h-[1px] ${
            darkBg
              ? "bg-gradient-to-r from-transparent via-white/15 to-transparent"
              : "bg-gradient-to-r from-transparent via-[#E5E0D5] to-transparent"
          }`}
        />
        {/* Ambient Golden Core Flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-[2px] bg-gradient-to-r from-transparent via-[#7A5200]/70 to-transparent blur-[0.5px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 sm:w-44 h-[6px] bg-[#D4AF37]/20 rounded-full blur-xs pointer-events-none" />
      </div>
    );
  }

  if (variant === "diamonds") {
    return (
      <div className={`relative w-full py-3 flex items-center justify-center max-w-5xl mx-auto px-4 ${className}`}>
        {/* Left Tapered Line */}
        <div
          className={`flex-1 h-[1px] ${
            darkBg
              ? "bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-[#D4AF37]/50"
              : "bg-gradient-to-r from-transparent via-[#7A5200]/20 to-[#7A5200]/45"
          }`}
        />

        {/* Center Editorial Motif: 3 Golden Diamonds */}
        <div className="flex items-center gap-2 px-3 shrink-0">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#7A5200]/40 shrink-0" />
          <span className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#D4AF37] to-[#7A5200] shadow-[0_0_8px_rgba(212,175,55,0.4)] shrink-0" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#7A5200]/40 shrink-0" />
        </div>

        {/* Right Tapered Line */}
        <div
          className={`flex-1 h-[1px] ${
            darkBg
              ? "bg-gradient-to-l from-transparent via-[#D4AF37]/30 to-[#D4AF37]/50"
              : "bg-gradient-to-l from-transparent via-[#7A5200]/20 to-[#7A5200]/45"
          }`}
        />
      </div>
    );
  }

  if (variant === "animated") {
    return (
      <div className={`relative w-full h-[2px] overflow-hidden ${className}`}>
        {/* Base Track */}
        <div
          className={`w-full h-full ${
            darkBg
              ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
              : "bg-gradient-to-r from-transparent via-[#E5E0D5] to-transparent"
          }`}
        />
        {/* Gliding Specular Beam */}
        <div className="moving-line-beam !w-[25%] opacity-75" />
      </div>
    );
  }

  // Default: "emblem" (Luxury Compass & Tapered Line)
  return (
    <div className={`relative w-full py-2 flex items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 ${className}`}>
      {/* Left Hairline with Soft Gradient Fade */}
      <div
        className={`flex-1 h-[1px] ${
          darkBg
            ? "bg-gradient-to-r from-transparent via-white/15 to-[#D4AF37]/40"
            : "bg-gradient-to-r from-transparent via-[#E5E0D5] to-[#7A5200]/35"
        }`}
      />

      {/* Center Micro Badge */}
      <div className="mx-3.5 shrink-0 relative group">
        {/* Micro Glow behind emblem */}
        <div className="absolute -inset-1 rounded-full bg-[#D4AF37]/15 blur-xs pointer-events-none" />
        
        <div
          className={`relative w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs ${
            darkBg
              ? "bg-[#141210] border border-[#D4AF37]/40 text-[#D4AF37]"
              : "bg-white border border-[#7A5200]/30 text-[#7A5200]"
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Right Hairline with Soft Gradient Fade */}
      <div
        className={`flex-1 h-[1px] ${
          darkBg
            ? "bg-gradient-to-l from-transparent via-white/15 to-[#D4AF37]/40"
            : "bg-gradient-to-l from-transparent via-[#E5E0D5] to-[#7A5200]/35"
        }`}
      />
    </div>
  );
}
