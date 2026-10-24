"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  ChevronDown,
  Phone,
  MapPin,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Calendar,
} from "lucide-react";

interface NavbarProps {
  onOpenCustomModal?: () => void;
  onOpenInquiryModal?: (packageName?: string) => void;
}

export default function Navbar({ onOpenCustomModal, onOpenInquiryModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 240); // 240ms grace period prevents dropdown from vanishing during cursor travel
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const indianDestinations = [
    {
      name: "Goa Coastal & Heritage",
      desc: "Tropical Palms, Secluded Beaches & Latin Quarter",
      tag: "Beach & Palms",
      href: "/goa-tour-packages",
    },
  ];

  const internationalDestinations = [
    {
      name: "Dubai & Abu Dhabi",
      desc: "Burj Khalifa, Red Dune Desert Safari & Marina Yachts",
      tag: "Modern Luxe",
      href: "/dubai-tour-and-travel",
    },
    {
      name: "Thailand & Bangkok",
      desc: "Phuket Beaches, Phi Phi Islands & Bangkok Markets",
      tag: "Beaches & Food",
      href: "/thailand-tour-packages",
    },
    {
      name: "Vietnam Heritage & Bays",
      desc: "Halong Bay Overnight Cruise & Hoi An River Lanterns",
      tag: "Bay & Culture",
      href: "/vietnam-tour-and-travel",
    },
    {
      name: "Sri Lanka: Kandy & Bentota",
      desc: "Temple of Tooth, Peradeniya Gardens & Bentota Beach",
      tag: "Culture & Beach",
      href: "/kandy-bentota-tour-packages",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      
      {/* 1. TOP ANNOUNCEMENT BAR: Refined, Understated Luxury (32px mobile / 34px desktop) */}
      <div className="bg-[#0C0A09] text-stone-300 text-[10.5px] sm:text-[11px] border-b border-[#BFA13B]/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-[32px] sm:h-[34px] flex items-center justify-between">
          
          {/* Left Agency Info */}
          <div className="flex items-center gap-2 sm:gap-3 truncate">
            <span className="flex items-center gap-1.5 text-[#C9A84C] font-medium tracking-wide shrink-0">
              <Sparkles className="w-3 h-3 text-[#BFA13B]" />
              <span>Tour &amp; Travel<span className="hidden xs:inline"> Agency</span></span>
            </span>

            <span className="text-stone-700 hidden sm:inline">•</span>

            <span className="hidden sm:flex items-center gap-1 text-stone-400 truncate">
              <MapPin className="w-3 h-3 text-[#BFA13B] shrink-0" />
              <span>Bazpur, Uttarakhand</span>
            </span>

            <span className="text-stone-700 hidden lg:inline">•</span>

            <span className="hidden lg:inline text-stone-300 font-medium">
              Curated Itineraries with Built-in Leisure Days
            </span>
          </div>

          {/* Right Direct Links */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <a
              href="https://wa.me/919639320101"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Support</span>
            </a>

            <span className="text-stone-700 hidden md:inline">|</span>

            <a
              href="tel:+919639320101"
              className="flex items-center gap-1 text-stone-100 hover:text-[#C9A84C] font-semibold text-[10.5px] sm:text-[11px] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#BFA13B] shrink-0" />
              <span>+91 96393 20101</span>
            </a>
          </div>

        </div>
      </div>
      <div className="moving-line-track">
        <div className="moving-line-beam" />
      </div>

      {/* 2. MAIN NAVBAR: Balanced, Elegant, Perfectly Aligned Height */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(28,25,23,0.06)] border-b border-[#E5E0D5]"
            : "bg-white/95 backdrop-blur-md border-b border-[#E5E0D5]/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-5 xl:px-8 h-[62px] sm:h-[68px] flex items-center justify-between gap-2 lg:gap-4">
          
          {/* Brand Logo: Clean, Proportional, Luxury Typographic Mark & Official Emblem */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0" aria-label="Altitude Travel Co.">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 xl:w-11 xl:h-11 rounded-xl overflow-hidden bg-white border border-[#E5E0D5] shadow-xs group-hover:scale-105 group-hover:border-[#BFA13B]/50 transition-all duration-200 flex items-center justify-center shrink-0">
              <Image
                src="/logo.jpg"
                alt="Altitude Travel Co. Logo"
                width={44}
                height={44}
                className="object-contain w-full h-full p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col shrink-0">
              <div className="flex items-center leading-none">
                <span className="text-[16px] sm:text-[17px] xl:text-[19px] font-bold text-[#1C1917] tracking-tight group-hover:text-[#BFA13B] transition-colors whitespace-nowrap font-serif">
                  Altitude Travel
                </span>
                <span className="text-[#BFA13B] font-bold text-base sm:text-lg leading-none ml-0.5">.</span>
              </div>
              <span className="hidden xl:block text-[8px] xl:text-[8.5px] uppercase tracking-[0.2em] font-semibold text-stone-500 mt-1 whitespace-nowrap">
                Travel Beyond The Tourist Trail
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links: Responsive Font Size, Compact Labels on lg, and Strict Single-Line Whitespace */}
          <div ref={navContainerRef} className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
            
            {/* Home */}
            <Link
              href="/"
              className="px-2 xl:px-3 py-1.5 text-[12.5px] xl:text-[13.5px] font-medium text-stone-700 hover:text-[#7A5200] rounded-lg hover:bg-stone-50 transition-colors whitespace-nowrap shrink-0"
            >
              Home
            </Link>

            {/* Indian Tour Packages ▾ Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => handleMouseEnter("indian")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "indian" ? null : "indian")}
                className={`px-2 xl:px-3 py-1.5 text-[12.5px] xl:text-[13.5px] font-medium rounded-lg transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0 ${
                  activeDropdown === "indian"
                    ? "text-[#7A5200] bg-[#FAF9F6] font-bold"
                    : "text-stone-700 hover:text-[#7A5200] hover:bg-stone-50"
                }`}
                aria-expanded={activeDropdown === "indian"}
              >
                <span className="xl:hidden">Indian Tours</span>
                <span className="hidden xl:inline">Indian Tour Packages</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                    activeDropdown === "indian" ? "rotate-180 text-[#7A5200]" : "text-stone-400"
                  }`}
                />
              </button>

              {/* Dropdown Panel with Zero-Gap Bridge */}
              {activeDropdown === "indian" && (
                <div
                  className="absolute top-full left-0 w-[360px] pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter("indian")}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Invisible Hover Bridge connecting button to dropdown panel */}
                  <div className="absolute -top-3 inset-x-0 h-4 bg-transparent pointer-events-auto" />

                  <div className="bg-white rounded-2xl shadow-[0_24px_50px_-12px_rgba(28,25,23,0.18)] border border-[#E5E0D5] p-3.5 flex flex-col gap-1.5">
                    <div className="pb-2 mb-1 border-b border-[#E5E0D5] flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A5200]">
                        Indian Destinations
                      </span>
                      <span className="text-[10px] font-semibold text-[#7A5200] bg-[#FAF9F6] px-2 py-0.5 rounded-full border border-[#7A5200]/20">
                        Verified Tour
                      </span>
                    </div>

                    {indianDestinations.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="p-3 rounded-xl hover:bg-[#FAF9F6] border border-transparent hover:border-[#E5E0D5] transition-all flex flex-col group/item"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[13.5px] font-semibold text-stone-900 group-hover/item:text-[#7A5200]">
                            {item.name}
                          </span>
                          <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-[#FAF9F6] text-[#7A5200] border border-[#7A5200]/20 group-hover/item:bg-[#7A5200]/10">
                            {item.tag}
                          </span>
                        </div>
                        <span className="text-[11px] text-stone-500 line-clamp-1 mt-1">
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* International Tour Packages ▾ Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => handleMouseEnter("international")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "international" ? null : "international")}
                className={`px-2 xl:px-3 py-1.5 text-[12.5px] xl:text-[13.5px] font-medium rounded-lg transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0 ${
                  activeDropdown === "international"
                    ? "text-[#7A5200] bg-[#FAF9F6] font-bold"
                    : "text-stone-700 hover:text-[#7A5200] hover:bg-stone-50"
                }`}
                aria-expanded={activeDropdown === "international"}
              >
                <span className="xl:hidden">International</span>
                <span className="hidden xl:inline">International Tour Packages</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                    activeDropdown === "international" ? "rotate-180 text-[#7A5200]" : "text-stone-400"
                  }`}
                />
              </button>

              {/* Mega Dropdown Panel with Zero-Gap Bridge */}
              {activeDropdown === "international" && (
                <div
                  className="absolute top-full left-0 w-[540px] pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter("international")}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Invisible Hover Bridge connecting button to dropdown panel */}
                  <div className="absolute -top-3 inset-x-0 h-4 bg-transparent pointer-events-auto" />

                  <div className="bg-white rounded-2xl shadow-[0_24px_50px_-12px_rgba(28,25,23,0.18)] border border-[#E5E0D5] p-4 grid grid-cols-2 gap-2">
                    <div className="col-span-2 pb-2 mb-1 border-b border-[#E5E0D5] flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A5200]">
                        International Holidays
                      </span>
                      <span className="text-[10px] font-semibold text-[#7A5200] bg-[#FAF9F6] px-2 py-0.5 rounded-full border border-[#7A5200]/20">
                        4 Destinations
                      </span>
                    </div>

                    {internationalDestinations.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="p-3 rounded-xl hover:bg-[#FAF9F6] border border-transparent hover:border-[#E5E0D5] transition-all flex flex-col group/item"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[13px] font-semibold text-stone-900 group-hover/item:text-[#7A5200]">
                            {item.name}
                          </span>
                          <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-[#FAF9F6] text-[#7A5200] border border-[#7A5200]/20 group-hover/item:bg-[#7A5200]/10">
                            {item.tag}
                          </span>
                        </div>
                        <span className="text-[11px] text-stone-500 line-clamp-1 mt-1">
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Custom Tour Packages */}
            <button
              type="button"
              onClick={onOpenCustomModal}
              className="px-2 xl:px-3 py-1.5 text-[12.5px] xl:text-[13.5px] font-medium text-stone-700 hover:text-[#7A5200] rounded-lg hover:bg-stone-50 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span className="xl:hidden">Custom Trips</span>
              <span className="hidden xl:inline">Custom Tour Packages</span>
              <span className="hidden xl:inline-block text-[9.5px] uppercase tracking-wide font-semibold text-[#7A5200] bg-[#FAF9F6] px-1.5 py-0.5 rounded-full border border-[#7A5200]/30 shrink-0">
                Tailored
              </span>
            </button>

            {/* About Us - Guaranteed 1 Line */}
            <Link
              href="/about-us"
              className="px-2 xl:px-3 py-1.5 text-[12.5px] xl:text-[13.5px] font-medium text-stone-700 hover:text-[#7A5200] rounded-lg hover:bg-stone-50 transition-colors whitespace-nowrap shrink-0"
            >
              About Us
            </Link>

            {/* Contact Us */}
            <Link
              href="#contact-footer"
              className="px-2 xl:px-3 py-1.5 text-[12.5px] xl:text-[13.5px] font-medium text-stone-700 hover:text-[#7A5200] rounded-lg hover:bg-stone-50 transition-colors whitespace-nowrap shrink-0"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Action: Refined Gold "Inquiry Now" CTA Button - Direct WhatsApp Link */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href="https://wa.me/919639320101?text=Hello%20Altitude%20Travel,%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-3 xl:px-5 rounded-xl font-bold text-xs xl:text-[13px] whitespace-nowrap shrink-0 bg-shining-gold shining-sweep hover:brightness-105 active:scale-95 text-stone-950 shadow-[0_4px_16px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_22px_rgba(212,175,55,0.5)] transition-all duration-200 flex items-center gap-1.5 border border-[#BFA13B]/40 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-stone-950 shrink-0" />
              <span className="whitespace-nowrap">Inquiry Now</span>
            </a>
          </div>

          {/* Mobile Actions: Compact Direct WhatsApp CTA and Hamburger */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href="https://wa.me/919639320101?text=Hello%20Altitude%20Travel,%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 px-2.5 sm:px-3 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 bg-shining-gold text-stone-950 shadow-xs border border-[#BFA13B]/40 flex items-center gap-1 active:scale-95 transition-transform"
            >
              <MessageSquare className="w-3.5 h-3.5 text-stone-950 shrink-0" />
              <span>Inquiry</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-stone-800 hover:bg-stone-100 flex items-center justify-center cursor-pointer border border-stone-200/60"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-stone-950" /> : <Menu className="w-5 h-5 text-stone-950" />}
            </button>
          </div>

        </div>

        {/* Mobile Backdrop Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-[94px] sm:top-[102px] bg-black/40 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="relative z-50 lg:hidden bg-white border-b border-[#E5E0D5] px-4 pt-2.5 pb-6 max-h-[calc(100vh-100px)] overflow-y-auto shadow-2xl animate-in fade-in slide-in-from-top-1 duration-150">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-50 rounded-lg"
              >
                Home
              </Link>

              {/* Mobile Indian Packages Accordion */}
              <div className="border-t border-[#E5E0D5] pt-1">
                <button
                  type="button"
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === "indian" ? null : "indian")
                  }
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-50 rounded-lg"
                >
                  <span>Indian Tour Packages</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      mobileSubmenu === "indian" ? "rotate-180 text-[#BFA13B]" : "text-stone-400"
                    }`}
                  />
                </button>
                {mobileSubmenu === "indian" && (
                  <div className="pl-3 pr-2 py-1 space-y-0.5 bg-[#FAF9F6] rounded-xl my-1 border border-[#E5E0D5]">
                    {indianDestinations.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-1.5 px-2 text-xs font-medium text-stone-700 hover:text-[#BFA13B]"
                      >
                        <span>{item.name}</span>
                        <span className="text-[9.5px] text-[#BFA13B] bg-white px-1.5 py-0.5 rounded border border-[#BFA13B]/20">
                          {item.tag}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile International Packages Accordion */}
              <div className="border-t border-[#E5E0D5] pt-1">
                <button
                  type="button"
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === "intl" ? null : "intl")
                  }
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-50 rounded-lg"
                >
                  <span>International Tour Packages</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      mobileSubmenu === "intl" ? "rotate-180 text-[#BFA13B]" : "text-stone-400"
                    }`}
                  />
                </button>
                {mobileSubmenu === "intl" && (
                  <div className="pl-3 pr-2 py-1 space-y-0.5 bg-[#FAF9F6] rounded-xl my-1 border border-[#E5E0D5]">
                    {internationalDestinations.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-1.5 px-2 text-xs font-medium text-stone-700 hover:text-[#BFA13B]"
                      >
                        <span>{item.name}</span>
                        <span className="text-[9.5px] text-[#BFA13B] bg-white px-1.5 py-0.5 rounded border border-[#BFA13B]/20">
                          {item.tag}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Custom Tour Packages */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenCustomModal) onOpenCustomModal();
                }}
                className="text-left px-3 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-50 rounded-lg flex items-center justify-between"
              >
                <span>Custom Tour Packages</span>
                <span className="text-[9.5px] bg-[#FAF9F6] text-[#BFA13B] px-1.5 py-0.5 rounded-full font-semibold border border-[#BFA13B]/30">
                  Tailored
                </span>
              </button>

              <Link
                href="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-50 rounded-lg"
              >
                About Us
              </Link>

              <Link
                href="#contact-footer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-50 rounded-lg"
              >
                Contact Us
              </Link>

              <div className="pt-2 border-t border-[#E5E0D5] flex flex-col gap-2">
                <a
                  href="https://wa.me/919639320101?text=Hello%20Altitude%20Travel,%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> WhatsApp +91 96393 20101
                </a>
                <a
                  href="tel:+919639320101"
                  className="w-full py-2 bg-[#FAF9F6] text-stone-900 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 border border-[#E5E0D5]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#BFA13B]" /> Call +91 96393 20101
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
