import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Compass,
  ArrowLeft,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck2,
  Sliders,
  Bus,
  Globe2,
  Eye,
  HeartHandshake,
  ArrowRight,
  MessageSquare,
  Palmtree,
  Star,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Altitude Travel Co. | Tour & Travel Agency",
  description:
    "Discover Altitude Travel Co., a tour and travel agency in Uttarakhand offering curated Indian holidays, international tour packages, and customised travel experiences.",
  alternates: {
    canonical: "https://www.altitudetravelco.com/about-us/",
  },
  openGraph: {
    title: "About Altitude Travel Co. | Tour & Travel Agency",
    description:
      "Discover Altitude Travel Co., a tour and travel agency in Uttarakhand offering curated Indian holidays, international tour packages, and customised travel experiences.",
    url: "https://www.altitudetravelco.com/about-us/",
    siteName: "Altitude Travel Co.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Altitude Travel Co. | Tour & Travel Agency",
    description:
      "Discover Altitude Travel Co., a tour and travel agency in Uttarakhand offering curated Indian holidays, international tour packages, and customised travel experiences.",
  },
};

export default function AboutUsPage() {
  const whatsappUrl =
    "https://wa.me/919639320101?text=Hello%20Altitude%20Travel,%20I%20am%20ready%20to%20plan%20my%20journey%20today.";

  const differentiators = [
    {
      title: "Curated Itineraries",
      desc: "Travel plans designed around your destination and preferences.",
      icon: Compass,
    },
    {
      title: "Iconic Sights and Hidden Gems",
      desc: "A balance of popular attractions and local discoveries.",
      icon: Sparkles,
    },
    {
      title: "Dedicated Leisure Time",
      desc: "A planned free day wherever possible, subject to the selected itinerary.",
      icon: CalendarCheck2,
    },
    {
      title: "Transparent Pricing",
      desc: "Clear information about package inclusions, exclusions, and applicable charges.",
      icon: ShieldCheck,
    },
    {
      title: "Personalised Support",
      desc: "Assistance before and during your journey, according to your package and service arrangements.",
      icon: HeartHandshake,
    },
    {
      title: "Flexible Travel Options",
      desc: "Curated packages and customised plans for different travel styles.",
      icon: Sliders,
    },
  ];

  const travelServices = [
    {
      title: "Indian Tour Packages",
      tag: "Incredible India",
      desc: "Discover India's diverse landscapes, rich heritage, beautiful coastlines, and mountain destinations. Explore destinations such as Kashmir, Himachal Pradesh, Goa, Kerala, Rajasthan, and Ladakh through thoughtfully planned holiday experiences.",
      icon: Bus,
      link: "/goa-tour-packages",
      linkText: "Explore Indian Escapes",
    },
    {
      title: "International Tour Packages",
      tag: "Worldwide Escapes",
      desc: "Explore destinations around the world with travel planning support for holidays to Dubai, Switzerland, Thailand, Bali, Singapore, Vietnam, and other popular international destinations.",
      icon: Globe2,
      link: "/dubai-tour-and-travel",
      linkText: "Explore International Holidays",
    },
    {
      title: "Custom Tour Packages",
      tag: "Tailored Craft",
      desc: "Have a specific destination or travel experience in mind? We help create personalised itineraries around your schedule, budget, preferred activities, and travel preferences.",
      icon: Sliders,
      link: whatsappUrl,
      linkText: "Build a Custom Plan",
    },
    {
      title: "Travel Planning Assistance",
      tag: "End-to-End Care",
      desc: "Depending on your selected package, we can assist with accommodation, transfers, sightseeing, flight planning, and visa guidance to help make your holiday planning more convenient.",
      icon: ShieldCheck,
      link: whatsappUrl,
      linkText: "Contact Concierge Desk",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAF9F6] text-stone-900 pt-[120px] sm:pt-[130px] pb-16 sm:pb-20">
        
        {/* Schema.org TravelAgency JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Altitude Travel Co.",
              description:
                "Discover Altitude Travel Co., a tour and travel agency in Uttarakhand offering curated Indian holidays, international tour packages, and customised travel experiences.",
              url: "https://altitudetravel.in/about-us",
              telephone: "+919639320101",
              email: "altitudetravelco@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bazpur",
                addressRegion: "Uttarakhand",
                addressCountry: "IN",
              },
            }),
          }}
        />

        {/* 1. HERO / ABOUT INTRO SECTION */}
        <section className="relative overflow-hidden pb-12 sm:pb-16 border-b border-[#E5E0D5]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#D4AF37]/15 via-[#BFA13B]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 pt-2 pb-6 text-xs text-stone-500 font-medium">
              <Link href="/" className="hover:text-stone-900 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#7A5200] font-semibold">About Us</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading & Core Narrative */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Eyebrow Capsule */}
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 px-3.5 py-1.5 rounded-full shadow-[0_2px_10px_rgba(212,175,55,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <Compass className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase text-stone-900">
                    Bazpur, Uttarakhand • Est. 2025
                  </span>
                </div>

                {/* Main H1 */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-950 tracking-tight leading-[1.15]">
                  About <span className="text-[#7A5200]">Altitude Travel Co.</span>
                </h1>

                {/* Narrative Paragraphs */}
                <div className="space-y-4 text-stone-800 text-[15px] sm:text-base leading-relaxed font-normal">
                  <p>
                    At Altitude Travel Co., we believe that a memorable journey is about more than visiting famous landmarks. It is about discovering hidden places, tasting local flavours, exploring vibrant markets, meeting new cultures, and having the freedom to enjoy every moment at your own pace.
                  </p>
                  <p>
                    Based in Bazpur, Uttarakhand, Altitude Travel Co. is a tour and travel agency specialising in curated Indian tour packages, international holidays, and customised travel experiences. Our goal is to make every trip comfortable, meaningful, and tailored to the people taking it.
                  </p>
                  <p>
                    Whether you are planning a peaceful mountain escape, a relaxing beach holiday, a family vacation, a romantic getaway, or an international adventure, we help you plan a journey that suits your interests, budget, and travel style.
                  </p>
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white flex items-center gap-2 shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Plan Your Journey Today</span>
                  </a>

                  <Link
                    href="/"
                    className="px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-stone-900 bg-white hover:bg-stone-50 border border-[#E5E0D5] hover:border-[#D4AF37] transition-all flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4 text-[#BFA13B]" />
                    <span>Explore Tour Packages</span>
                  </Link>
                </div>

              </div>

              {/* Right Column: Visual Photo Card with Highlights */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E5E0D5] bg-stone-950 h-[340px] sm:h-[400px] group">
                  <Image
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=85"
                    alt="Scenic Mountain Peaks and Valley"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C0A09]/85 text-[#F5D77F] text-xs font-bold border border-[#D4AF37]/40 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Tour &amp; Travel Agency</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-stone-950 text-[10px] font-extrabold uppercase">
                      Est. 2025
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Altitude Travel Co.
                    </h3>
                    <p className="text-xs text-stone-200 font-normal">
                      Travel Beyond The Tourist Trail • Bazpur, Uttarakhand
                    </p>
                  </div>
                </div>

                {/* Trust Highlights Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3.5 rounded-xl border border-[#E5E0D5] shadow-xs text-center">
                    <span className="text-xl sm:text-2xl font-black text-stone-950 block">10,000+</span>
                    <span className="text-[11px] text-stone-600 font-medium">Happy Travellers</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-[#E5E0D5] shadow-xs text-center">
                    <span className="text-xl sm:text-2xl font-black text-[#7A5200] block">1 Guaranteed</span>
                    <span className="text-[11px] text-stone-600 font-medium">Free Day in Itineraries</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* 2. SECTION: MAKING EVERY JOURNEY MORE MEANINGFUL */}
        <section className="py-12 sm:py-16 bg-white border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#7A5200]">
                <Sparkles className="w-3.5 h-3.5 text-[#7A5200]" />
                <span>Our Founding Vision</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-950 tracking-tight">
                Making Every Journey More Meaningful
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4 text-stone-800 text-[15px] sm:text-base leading-relaxed font-normal bg-[#FAF9F6] p-6 sm:p-8 rounded-2xl border border-[#E5E0D5]">
              <p>
                <strong>Altitude Travel Co. was established in 2025</strong> with a simple vision: to help travellers experience destinations beyond the usual tourist itinerary.
              </p>
              <p>
                We understand that every traveller has different expectations. Some want scenic landscapes and peaceful surroundings, while others enjoy local cuisine, shopping streets, cultural experiences, and exciting adventures. That is why we focus on thoughtfully planned itineraries that balance must-visit attractions with local discoveries and personal leisure time.
              </p>
              <p>
                From the valleys of Kashmir and the beaches of Goa to the skylines of Dubai, the mountains of Switzerland, and the tropical beauty of Bali, we help turn travel ideas into well-planned holiday experiences.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SECTION: EXPLORE MORE. EXPERIENCE DEEPER. TRAVEL BETTER. */}
        <section className="py-12 sm:py-16 bg-[#FAF9F6] border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#7A5200]">
                <Compass className="w-3.5 h-3.5 text-[#7A5200]" />
                <span>Travel Philosophy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-950 tracking-tight">
                Explore More. Experience Deeper. Travel Better.
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-2xl mx-auto">
                We believe great travel planning should give you the right balance of exploration, comfort, and freedom. Our approach goes beyond arranging destinations on a schedule. We focus on creating journeys that feel personal, flexible, and enjoyable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-2xl border border-[#E5E0D5] shadow-xs flex flex-col justify-between space-y-3 hover:border-[#D4AF37] transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] flex items-center justify-center text-[#7A5200] group-hover:bg-[#0C0A09] group-hover:text-[#F5D77F] transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-stone-950 tracking-tight">
                  Discover Beyond the Usual
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  Explore iconic attractions alongside lesser-known places, local cafés, authentic food experiences, scenic routes, and shopping destinations.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-2xl border border-[#E5E0D5] shadow-xs flex flex-col justify-between space-y-3 hover:border-[#D4AF37] transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] flex items-center justify-center text-[#7A5200] group-hover:bg-[#0C0A09] group-hover:text-[#F5D77F] transition-colors">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-stone-950 tracking-tight">
                  Enjoy a Balanced Itinerary
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  Our curated packages aim to include a dedicated free day wherever the itinerary allows, giving you time to relax, shop, explore independently, or simply enjoy your destination without a packed schedule.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-2xl border border-[#E5E0D5] shadow-xs flex flex-col justify-between space-y-3 hover:border-[#D4AF37] transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] flex items-center justify-center text-[#7A5200] group-hover:bg-[#0C0A09] group-hover:text-[#F5D77F] transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-stone-950 tracking-tight">
                  Travel with Greater Comfort
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  From accommodation and transfers to sightseeing arrangements, we help coordinate essential travel details according to your chosen package.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-2xl border border-[#E5E0D5] shadow-xs flex flex-col justify-between space-y-3 hover:border-[#D4AF37] transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] flex items-center justify-center text-[#7A5200] group-hover:bg-[#0C0A09] group-hover:text-[#F5D77F] transition-colors">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-stone-950 tracking-tight">
                  Make It Personal
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  Choose from our curated travel packages or request a customised itinerary based on your preferred destination, travel dates, budget, and interests.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 4. SECTION: OUR TRAVEL SERVICES */}
        <section className="py-12 sm:py-16 bg-white border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#7A5200]">
                <Globe2 className="w-3.5 h-3.5 text-[#7A5200]" />
                <span>Our Travel Services</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-950 tracking-tight">
                Thoughtfully Planned Holidays Across India and Beyond
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {travelServices.map((service, idx) => {
                const Icon = service.icon;
                const isExternal = service.link.startsWith("http");
                return (
                  <div
                    key={idx}
                    className="bg-[#FAF9F6] p-6 sm:p-7 rounded-2xl border border-[#E5E0D5] flex flex-col justify-between space-y-4 hover:border-[#BFA13B] transition-all"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E0D5] flex items-center justify-center text-[#7A5200]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white text-[#7A5200] border border-[#7A5200]/20">
                          {service.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-stone-950">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E5E0D5]">
                      {isExternal ? (
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A5200] hover:text-stone-950 transition-colors"
                        >
                          <span>{service.linkText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <Link
                          href={service.link}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A5200] hover:text-stone-950 transition-colors"
                        >
                          <span>{service.linkText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 5. SECTION: WHAT MAKES ALTITUDE TRAVEL CO. DIFFERENT? (Dark Obsidian) */}
        <section className="py-12 sm:py-16 bg-[#0C0A09] text-white relative overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] bg-[#BFA13B]/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#F5D77F]">
                <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]" />
                <span>The Altitude Difference</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                What Makes Altitude Travel Co. Different?
              </h2>
              <p className="text-sm sm:text-base text-stone-300">
                A More Thoughtful Way to Travel
              </p>
            </div>

            {/* 6 Differentiators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {differentiators.map((diff, idx) => {
                const Icon = diff.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-[#BFA13B]/25 hover:border-[#BFA13B]/60 transition-all space-y-2.5 backdrop-blur-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#BFA13B]/15 border border-[#BFA13B]/30 flex items-center justify-center text-[#F5D77F]">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {diff.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-stone-300 leading-relaxed font-normal">
                      {diff.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Key Signature Callout */}
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-stone-900 to-black border border-[#D4AF37]/40 text-center max-w-3xl mx-auto shadow-lg">
              <p className="text-sm sm:text-base font-serif italic text-[#F5D77F] leading-relaxed">
                &ldquo;We want you to return home with more than photographs. We want you to carry stories, experiences, and memories that make you want to travel again.&rdquo;
              </p>
            </div>

          </div>
        </section>

        {/* 6. SECTION: MISSION & VISION DUAL SHOWCASE */}
        <section className="py-12 sm:py-16 bg-white border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Mission */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-[#E5E0D5] shadow-xs space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A5200]">
                  <Compass className="w-4 h-4 text-[#7A5200]" />
                  <span>Our Mission</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                  To Make Every Journey Count
                </h2>
                <div className="space-y-3 text-stone-800 text-xs sm:text-sm leading-relaxed font-normal">
                  <p>
                    Our mission is to make travel planning simpler and holiday experiences more rewarding through thoughtful itineraries, personalised service, transparent communication, and a genuine focus on what travellers enjoy most.
                  </p>
                  <p>
                    We aim to help every traveller discover destinations at a comfortable pace while experiencing the culture, flavours, landscapes, and hidden corners that make each place unique.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-[#E5E0D5] shadow-xs space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A5200]">
                  <Eye className="w-4 h-4 text-[#7A5200]" />
                  <span>Our Vision</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                  To Help People Travel Beyond Expectations
                </h2>
                <div className="space-y-3 text-stone-800 text-xs sm:text-sm leading-relaxed font-normal">
                  <p>
                    Our vision is to build a trusted travel brand known for meaningful journeys, well-planned holidays, and experiences that go beyond conventional sightseeing.
                  </p>
                  <p>
                    We aspire to help more travellers explore India and the world with confidence, comfort, and a sense of discovery.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 7. SECTION: LET'S PLAN YOUR NEXT JOURNEY (CTA & CONTACT HUB) */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-[#FAF9F6] via-[#F6F2E8] to-[#FAF9F6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7A5200]">
              <Sparkles className="w-3.5 h-3.5 text-[#7A5200]" />
              <span>Start Your Adventure</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight">
              Let&apos;s Plan Your Next Journey
            </h2>

            <div className="space-y-3 text-stone-800 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              <p>
                Your next memorable holiday starts with an idea. Tell us where you want to go, when you want to travel, and what kind of experience you are looking for. Our team will help you explore suitable packages and plan a journey that fits your preferences.
              </p>
              <p>
                Whether you choose an Indian getaway, an international holiday, or a completely customised trip, Altitude Travel Co. is here to help you take the next step.
              </p>
            </div>

            {/* Brand Signature */}
            <div className="text-sm font-bold tracking-widest uppercase text-[#7A5200] pt-1">
              Altitude Travel Co. — Travel Beyond the Tourist Trail
            </div>

            {/* Contact Details Card */}
            <div className="p-5 sm:p-6 bg-white rounded-2xl border border-[#E5E0D5] shadow-xs max-w-lg mx-auto space-y-2 text-xs sm:text-sm text-stone-800">
              <div className="flex items-center justify-center gap-2 font-medium">
                <MapPin className="w-4 h-4 text-[#BFA13B] shrink-0" />
                <span>Based in: <strong>Bazpur, Uttarakhand, India</strong></span>
              </div>
              <div className="flex items-center justify-center gap-2 font-medium">
                <Phone className="w-4 h-4 text-[#BFA13B] shrink-0" />
                <span>Call or WhatsApp: <a href="tel:+919639320101" className="font-bold text-stone-950 hover:text-[#7A5200]">+91 96393 20101</a></span>
              </div>
              <div className="flex items-center justify-center gap-2 font-medium">
                <Mail className="w-4 h-4 text-[#BFA13B] shrink-0" />
                <span>Email: <a href="mailto:altitudetravelco@gmail.com" className="font-bold text-stone-950 hover:text-[#7A5200]">altitudetravelco@gmail.com</a></span>
              </div>
            </div>

            {/* THE CTA BUTTON */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-2xl font-black text-sm sm:text-base tracking-wide bg-shining-gold shining-sweep hover:brightness-105 active:scale-98 text-stone-950 shadow-[0_8px_30px_rgba(212,175,55,0.45)] transition-all border border-[#D4AF37]/60 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-stone-950" />
                <span>Plan Your Journey Today</span>
                <ArrowRight className="w-4 h-4 text-stone-950" />
              </a>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
