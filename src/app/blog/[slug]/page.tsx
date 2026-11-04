import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS, BlogPost } from "@/data/blogs";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Compass,
  ArrowRight,
  Bookmark,
  MapPin,
  ShieldCheck,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function renderFormattedText(text: string) {
  if (!text) return "";
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const anchorText = match[1];
    let url = match[2];
    if (url.startsWith("https://www.altitudetravelco.com")) {
      url = url.replace("https://www.altitudetravelco.com", "") || "/";
    }
    parts.push(
      <Link
        key={match.index}
        href={url}
        className="font-bold text-[#7A5200] hover:text-stone-950 underline underline-offset-2 decoration-[#D4AF37]/60 transition-colors"
      >
        {anchorText}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const post of BLOG_POSTS) {
    params.push({ slug: post.slug });
    if (post.slug.toLowerCase() !== post.slug) {
      params.push({ slug: post.slug.toLowerCase() });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug.toLowerCase() === slug.toLowerCase());

  if (!post) {
    return {
      title: "Article Not Found | Altitude Travel Co.",
    };
  }

  const canonicalUrl = `https://www.altitudetravelco.com/blog/${post.slug}`;
  const fullCoverImageUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `https://www.altitudetravelco.com${post.coverImage}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonicalUrl,
      siteName: "Altitude Travel Co.",
      type: "article",
      locale: "en_IN",
      publishedTime: "2026-10-24T09:00:00.000Z",
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: fullCoverImageUrl,
          width: 1200,
          height: 630,
          alt: post.coverImageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [fullCoverImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug.toLowerCase() === slug.toLowerCase());

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug.toLowerCase() !== post.slug.toLowerCase()).slice(0, 3);

  const articleSchema: any = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.coverImage.startsWith("http")
      ? post.coverImage
      : `https://www.altitudetravelco.com${post.coverImage}`,
    datePublished: "2026-10-24T09:00:00.000Z",
    dateModified: "2026-11-03T09:00:00.000Z",
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "TravelAgency",
      name: "Altitude Travel Co.",
      url: "https://altitudetravel.in",
      logo: "https://altitudetravel.in/logo.jpg",
      telephone: "+919639320101",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.altitudetravelco.com/blog/${post.slug}`,
    },
  };

  const schemas: any[] = [articleSchema];

  if (post.content.faqs && post.content.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question.replace(/^\d+\.\s*/, ""),
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Altitude Travel Co., I just read your article "${post.title}" on your website and would like to inquire about planning a bespoke trip.`
  );

  // Extract numbered destination sections for quick-jump navigation if present
  const numberedSections = post.content.sections
    .map((s, idx) => {
      const match = s.heading.match(/^(\d+)\.\s*(.*)$/);
      if (!match) return null;
      const num = match[1];
      const heading = match[2];
      const shortName = heading.split("–")[0].trim().replace(/^\d+\.\s*/, "");
      return { num, shortName, index: idx };
    })
    .filter(Boolean) as { num: string; shortName: string; index: number }[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-24 bg-[#FAF9F6] min-h-screen text-stone-900 font-sans [font-feature-settings:'normal']">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-stone-500 font-medium overflow-x-auto no-scrollbar py-1">
            <Link
              href="/"
              className="text-[#7A5200] hover:text-stone-950 font-bold transition-colors shrink-0"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <Link
              href="/blog"
              className="text-[#7A5200] hover:text-stone-950 font-bold transition-colors shrink-0"
            >
              Travel Journal
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-900 font-bold truncate max-w-xs sm:max-w-md">
              {post.title}
            </span>
          </nav>

          {/* Article Header Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E5E0D5] shadow-xs space-y-6">
            
            {/* Meta Tags & Read Time */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
              <span className="bg-[#FAF9F6] text-[#7A5200] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/30">
                {post.category}
              </span>
              <span className="text-stone-300">•</span>
              <span className="flex items-center gap-1.5 text-stone-600 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#BFA13B]" />
                {post.readTime}
              </span>
              <span className="text-stone-300">•</span>
              <span className="flex items-center gap-1.5 text-stone-600 font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#BFA13B]" />
                {post.publishDate}
              </span>
            </div>

            {/* H1 Article Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold text-stone-950 tracking-tight leading-[1.25]">
              {post.title}
            </h1>

            {/* Excerpt Lead */}
            <p className="text-stone-800 text-base sm:text-[17px] leading-relaxed font-normal border-l-4 border-[#BFA13B] pl-4 sm:pl-5 py-2.5 bg-[#FAF9F6] rounded-r-2xl">
              {post.excerpt}
            </p>

            {/* Author Byline */}
            <div className="pt-4 border-t border-[#E5E0D5] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-stone-100 border border-[#E5E0D5]">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-sm font-bold text-stone-950 block">
                    {post.author.name}
                  </span>
                  <span className="text-xs text-stone-500 block">
                    {post.author.role} • Altitude Travel Co.
                  </span>
                </div>
              </div>

              <a
                href={`https://wa.me/919639320101?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ask Curator</span>
              </a>
            </div>

          </div>

          {/* Cinematic Hero Cover Image */}
          <div className="relative h-[280px] sm:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden border border-[#E5E0D5] shadow-lg bg-stone-950">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt || post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
          </div>

          {/* Quick Jump Bar for Multi-Destination Articles */}
          {numberedSections.length > 0 && (
            <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-[#E5E0D5] shadow-xs flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A5200] shrink-0 flex items-center gap-1.5 pl-1">
                <Compass className="w-3.5 h-3.5 text-[#BFA13B]" /> Quick Jump:
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                {numberedSections.map((sec, idx) => (
                  <a
                    key={idx}
                    href={`#destination-${sec.num}`}
                    className="px-3 py-1 rounded-xl text-xs font-semibold bg-[#FAF9F6] hover:bg-[#0C0A09] hover:text-[#F5D77F] text-stone-700 border border-[#E5E0D5] hover:border-[#D4AF37]/50 transition-all whitespace-nowrap cursor-pointer shadow-2xs"
                  >
                    {sec.shortName}
                  </a>
                ))}
                {post.content.faqs && (
                  <a
                    href="#faqs-section"
                    className="px-3 py-1 rounded-xl text-xs font-semibold bg-[#FAF9F6] hover:bg-[#0C0A09] hover:text-[#F5D77F] text-stone-700 border border-[#E5E0D5] hover:border-[#D4AF37]/50 transition-all whitespace-nowrap cursor-pointer shadow-2xs"
                  >
                    FAQs
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Top Section: Introduction (Left 7 Cols) + Concierge Card (Right 5 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Introduction */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-[#FAF9F6] text-[#7A5200] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Destination Overview</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-950 tracking-tight">
                  Introduction &amp; Travel Overview
                </h2>
                <div className="text-[15.5px] sm:text-[16.5px] text-stone-900 leading-[1.8] font-normal space-y-3.5">
                  {renderFormattedText(post.content.introduction)}
                </div>
              </div>
              
              <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center gap-3 text-xs text-stone-500">
                <span className="flex items-center gap-1 font-semibold text-stone-900">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Curated by {post.author.name}
                </span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Right: Quick Concierge Booking Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0C0A09] to-[#1C1917] text-white rounded-3xl p-6 sm:p-8 border border-[#BFA13B]/40 shadow-lg flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#F5D77F] text-xs font-bold border border-[#D4AF37]/30">
                  <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Custom Tour Planning</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  Planning a Trip to {post.destinationName || "This Destination"}?
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-normal">
                  Connect directly with Altitude Travel Co. in Bazpur, Uttarakhand. We tailor every itinerary to your travel dates, preferred budget, hotel category, and transfers.
                </p>

                <div className="space-y-1.5 pt-1 text-xs text-stone-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Best Price &amp; Service Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Handpicked 4-Star &amp; 5-Star Accommodations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Complete Visa &amp; Flight Guidance</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <a
                  href={`https://wa.me/919639320101?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp (+91 96393 20101)</span>
                </a>
                {post.destinationSlug && (
                  <Link
                    href={post.destinationSlug}
                    className="w-full py-2.5 px-3 rounded-xl font-bold text-xs bg-white/10 hover:bg-white/15 text-[#F5D77F] border border-[#D4AF37]/30 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View {post.destinationName || "Tour Package"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Dynamic Content Sections: 2-Column Grid for Numbered Destinations, Full-Width for General Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {post.content.sections.map((section, idx) => {
              const match = section.heading.match(/^(\d+)\.\s*(.*)$/);
              const isNumbered = Boolean(match);
              const sectionNum = match ? match[1] : null;
              const cleanHeading = match ? match[2] : section.heading;

              return (
                <section
                  key={idx}
                  id={isNumbered ? `destination-${sectionNum}` : undefined}
                  className={`bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-xs space-y-4 hover:border-[#D4AF37]/50 transition-all ${
                    isNumbered ? "lg:col-span-1" : "lg:col-span-2"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 border-b border-stone-100 pb-3">
                    <div className="flex items-start gap-2.5">
                      {isNumbered && (
                        <span className="w-8 h-8 rounded-xl bg-[#0C0A09] text-[#F5D77F] font-bold text-xs flex items-center justify-center shrink-0 border border-[#D4AF37]/40 shadow-xs mt-0.5">
                          {sectionNum?.padStart(2, "0")}
                        </span>
                      )}
                      <h2 className="text-xl sm:text-2xl font-bold text-stone-950 tracking-tight leading-snug">
                        {cleanHeading}
                      </h2>
                    </div>
                    {isNumbered && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5200] bg-[#FAF9F6] px-2.5 py-1 rounded-full border border-[#7A5200]/20 shrink-0 hidden sm:inline-block">
                        Top Destination
                      </span>
                    )}
                  </div>

                  <div className="space-y-3.5 text-[15.5px] sm:text-[16px] text-stone-900 leading-[1.8] font-normal">
                    {section.body.map((para, pIdx) => (
                      <p key={pIdx}>{renderFormattedText(para)}</p>
                    ))}
                  </div>

                  {/* Optional Bullet Sublist */}
                  {section.subList && (
                    <div className="bg-[#FAF9F6] rounded-2xl p-4 sm:p-5 border border-[#E5E0D5] space-y-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" /> Key Highlights &amp; Activities:
                      </span>
                      <ul className="space-y-2">
                        {section.subList.map((item, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-[14.5px] text-stone-900 leading-relaxed font-normal">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{renderFormattedText(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Optional Tip Callout */}
                  {section.tip && (
                    <div className="bg-[#FAF9F6] rounded-2xl p-4 border-l-4 border-[#BFA13B] shadow-2xs space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#7A5200] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" /> Altitude Insider Note
                      </span>
                      <p className="text-sm sm:text-[14.5px] text-stone-900 leading-relaxed font-normal">
                        {renderFormattedText(section.tip)}
                      </p>
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          {/* Quote Block (Full Width) */}
          {post.content.quote && (
            <blockquote className="my-2 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0C0A09] to-[#1C1917] text-white space-y-3 relative overflow-hidden shadow-lg border border-[#BFA13B]/30">
              <div className="text-[#D4AF37] font-sans text-5xl font-black leading-none absolute top-2 left-4 opacity-15 pointer-events-none">
                “
              </div>
              <p className="text-base sm:text-lg font-medium text-[#FAF9F6] relative z-10 leading-relaxed">
                &ldquo;{post.content.quote.text}&rdquo;
              </p>
              <cite className="block text-xs font-bold uppercase tracking-wider text-[#F5D77F] not-italic relative z-10">
                — {post.content.quote.author}
              </cite>
            </blockquote>
          )}

          {/* FAQs Section (2-Column Grid) */}
          {post.content.faqs && post.content.faqs.length > 0 && (
            <section id="faqs-section" className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0D5] shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#BFA13B]" />
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-950 tracking-tight">
                    Frequently Asked Questions
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#7A5200] bg-[#FAF9F6] px-3 py-1 rounded-full border border-[#D4AF37]/30">
                  {post.content.faqs.length} Important FAQs
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {post.content.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="bg-[#FAF9F6] rounded-2xl p-5 border border-[#E5E0D5] space-y-2.5 shadow-2xs hover:border-[#D4AF37]/50 transition-colors flex flex-col justify-between"
                  >
                    <h4 className="text-base sm:text-[16.5px] font-bold text-stone-950 flex items-start gap-2 leading-snug">
                      <span className="text-[#7A5200] font-bold">{fIdx + 1}.</span>
                      <span>{faq.question.replace(/^\d+\.\s*/, "")}</span>
                    </h4>
                    <p className="text-sm sm:text-[14.5px] text-stone-900 leading-relaxed font-normal pl-5">
                      {renderFormattedText(faq.answer)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Conclusion & Key Takeaways Grid (Left 7 Cols, Right 5 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Planning Your Escape & Conclusion */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-xs flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 bg-[#FAF9F6] text-[#7A5200] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/30">
                  <Compass className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Trip Wrap-Up</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-950 tracking-tight">
                  Planning Your Escape
                </h3>
                <div className="text-[15.5px] sm:text-[16.5px] text-stone-900 leading-[1.8] font-normal space-y-3.5">
                  {renderFormattedText(post.content.conclusion)}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-stone-500 mr-1">Tags:</span>
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#FAF9F6] text-stone-700 px-3 py-1 rounded-lg border border-[#E5E0D5] font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Key Travel Tips & Back to Journal */}
            <div className="lg:col-span-5 bg-[#FAF9F6] rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-stone-950 flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-[#BFA13B]" />
                  <span>Key Travel Tips for this Journey</span>
                </h4>
                <ul className="space-y-2.5 text-sm sm:text-[14.5px] text-stone-900 leading-relaxed font-normal">
                  {post.content.insiderTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#BFA13B] mt-1.5 shrink-0" />
                      <span>{renderFormattedText(tip)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E5E0D5]">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A5200] hover:text-stone-950 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Browse All Stories in Travel Journal</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles Row */}
          {relatedPosts.length > 0 && (
            <div className="pt-12 border-t border-[#E5E0D5] space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-bold text-stone-950 tracking-tight">
                  More Stories from Altitude Travel Journal
                </h3>
                <Link
                  href="/blog"
                  className="text-xs font-bold text-[#7A5200] hover:underline"
                >
                  View All →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <article
                    key={related.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] hover:border-[#D4AF37] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <Link href={`/blog/${related.slug}`} className="block relative h-44 overflow-hidden bg-stone-950">
                        <Image
                          src={related.coverImage}
                          alt={related.coverImageAlt || related.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-white/95 text-[#7A5200] text-[10px] font-bold border border-[#D4AF37]/30">
                          {related.category}
                        </span>
                      </Link>

                      <div className="p-4 space-y-2">
                        <div className="flex items-center gap-2 text-[10.5px] text-stone-500">
                          <Calendar className="w-3 h-3 text-[#BFA13B]" />
                          <span>{related.publishDate}</span>
                        </div>
                        <Link href={`/blog/${related.slug}`}>
                          <h4 className="text-sm sm:text-base font-bold text-stone-950 line-clamp-2 group-hover:text-[#7A5200] transition-colors leading-snug">
                            {related.title}
                          </h4>
                        </Link>
                      </div>
                    </div>

                    <div className="p-4 pt-0">
                      <Link
                        href={`/blog/${related.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#7A5200] group-hover:text-stone-950"
                      >
                        <span>Read Story</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
