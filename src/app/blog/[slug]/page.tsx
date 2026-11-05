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

function renderStyledTitle(title: string): React.ReactNode {
  if (!title) return null;

  // Split by colon if present (e.g., "Tourist Places in Vietnam: 10 Best Destinations to Explore")
  if (title.includes(":")) {
    const colonIndex = title.indexOf(":");
    const main = title.substring(0, colonIndex + 1);
    const sub = title.substring(colonIndex + 1).trim();
    return (
      <>
        <span className="text-stone-950 block sm:inline">{main} </span>
        <span className="bg-gradient-to-r from-[#7A5200] via-[#D4AF37] to-[#7A5200] bg-clip-text text-transparent drop-shadow-xs block sm:inline">
          {sub}
        </span>
      </>
    );
  }

  // Split by dash or hyphen if present (e.g., "Tourist Places in Vietnam – 10 Best Places")
  const dashMatch = title.match(/^(.*?)\s+[–—\-]\s+(.*)$/);
  if (dashMatch) {
    return (
      <>
        <span className="text-stone-950">{dashMatch[1]} – </span>
        <span className="bg-gradient-to-r from-[#7A5200] via-[#D4AF37] to-[#7A5200] bg-clip-text text-transparent drop-shadow-xs">
          {dashMatch[2]}
        </span>
      </>
    );
  }

  // Split by parenthesis if present (e.g., "Why the Best Journeys Include a Free Day (And Why We Insist On It)")
  if (title.includes(" (") && title.endsWith(")")) {
    const parenIndex = title.indexOf(" (");
    const main = title.substring(0, parenIndex);
    const sub = title.substring(parenIndex);
    return (
      <>
        <span className="text-stone-950">{main} </span>
        <span className="bg-gradient-to-r from-[#7A5200] via-[#D4AF37] to-[#7A5200] bg-clip-text text-transparent drop-shadow-xs">
          {sub}
        </span>
      </>
    );
  }

  // Fallback: Split words so last portion has the gold color effect
  const words = title.split(" ");
  if (words.length > 3) {
    const splitAt = Math.ceil(words.length * 0.55);
    const firstPart = words.slice(0, splitAt).join(" ");
    const secondPart = words.slice(splitAt).join(" ");
    return (
      <>
        <span className="text-stone-950">{firstPart} </span>
        <span className="bg-gradient-to-r from-[#7A5200] via-[#D4AF37] to-[#7A5200] bg-clip-text text-transparent drop-shadow-xs">
          {secondPart}
        </span>
      </>
    );
  }

  return (
    <span className="bg-gradient-to-r from-[#7A5200] via-[#D4AF37] to-[#7A5200] bg-clip-text text-transparent drop-shadow-xs">
      {title}
    </span>
  );
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
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

          {/* Unified Full Blog Article Document (Standard editorial blog format, no chunks) */}
          <article className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#E5E0D5] shadow-xs space-y-8">
            
            {/* 1. Article Meta & Header */}
            <header className="space-y-4">
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

              {/* H1 Article Title with Brand Metallic Gold Dual-Tone */}
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-extrabold tracking-tight leading-[1.22] text-stone-950">
                  {renderStyledTitle(post.title)}
                </h1>

                {/* Animated Laser Gold Line Accent */}
                <div className="moving-line-track max-w-[220px] h-[3px] rounded-full overflow-hidden shadow-[0_0_12px_rgba(212,175,55,0.5)]">
                  <div className="moving-line-beam" />
                </div>
              </div>

              {/* Author Byline */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-4">
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
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 transition-colors shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden sm:inline">Ask Curator</span>
                  <span className="sm:hidden">Ask</span>
                </a>
              </div>
            </header>

            {/* 2. Panoramic Hero Cover Image (16:9 / 1.87:1, fits on screen, never cuts corners) */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[1.87/1] max-h-[520px] rounded-2xl overflow-hidden border border-[#E5E0D5] shadow-sm bg-stone-950">
              <Image
                src={post.coverImage}
                alt={post.coverImageAlt || post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-contain sm:object-cover w-full h-full"
              />
            </div>

            {/* 3. Quick Jump Bar (Compact in-article navigation) */}
            {numberedSections.length > 0 && (
              <div className="bg-[#FAF9F6] rounded-xl p-3 border border-[#E5E0D5] flex items-center gap-2 overflow-x-auto no-scrollbar">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A5200] shrink-0 flex items-center gap-1.5 pl-1">
                  <Compass className="w-3.5 h-3.5 text-[#BFA13B]" /> Quick Jump:
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  {numberedSections.map((sec, idx) => (
                    <a
                      key={idx}
                      href={`#destination-${sec.num}`}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white hover:bg-[#0C0A09] hover:text-[#F5D77F] text-stone-700 border border-[#E5E0D5] hover:border-[#D4AF37]/50 transition-all whitespace-nowrap cursor-pointer shadow-2xs"
                    >
                      {sec.shortName}
                    </a>
                  ))}
                  {post.content.faqs && (
                    <a
                      href="#faqs-section"
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white hover:bg-[#0C0A09] hover:text-[#F5D77F] text-stone-700 border border-[#E5E0D5] hover:border-[#D4AF37]/50 transition-all whitespace-nowrap cursor-pointer shadow-2xs"
                    >
                      FAQs
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* 4. Excerpt Lead */}
            <p className="text-stone-800 text-base sm:text-[17px] leading-relaxed font-normal border-l-4 border-[#BFA13B] pl-4 sm:pl-5 py-2.5 bg-[#FAF9F6] rounded-r-2xl">
              {post.excerpt}
            </p>

            {/* 5. Introduction Narrative */}
            <div className="space-y-4 text-[16px] sm:text-[17px] text-stone-900 leading-[1.8] font-normal">
              {renderFormattedText(post.content.introduction)}
            </div>

            {/* 6. Continuous Sections Stream (Headings and Content flowing naturally in real blog format) */}
            <div className="space-y-10 pt-2">
              {post.content.sections.map((section, idx) => {
                const match = section.heading.match(/^(\d+)\.\s*(.*)$/);
                const isNumbered = Boolean(match);
                const sectionNum = match ? match[1] : null;
                const cleanHeading = match ? match[2] : section.heading;

                return (
                  <section
                    key={idx}
                    id={isNumbered ? `destination-${sectionNum}` : undefined}
                    className="pt-8 border-t border-stone-200/70 space-y-4"
                  >
                    {/* H2 Heading */}
                    <h2 className="text-xl sm:text-2xl lg:text-[25px] font-bold text-stone-950 tracking-tight leading-snug flex items-center gap-3">
                      {isNumbered && (
                        <span className="w-8 h-8 rounded-xl bg-[#0C0A09] text-[#F5D77F] font-bold text-xs flex items-center justify-center shrink-0 border border-[#D4AF37]/40 shadow-xs">
                          {sectionNum?.padStart(2, "0")}
                        </span>
                      )}
                      <span>{cleanHeading}</span>
                    </h2>

                    {/* Paragraphs */}
                    <div className="space-y-4 text-[16px] sm:text-[17px] text-stone-900 leading-[1.8] font-normal">
                      {section.body.map((para, pIdx) => (
                        <p key={pIdx}>{renderFormattedText(para)}</p>
                      ))}
                    </div>

                    {/* Sublist (Key Highlights & Activities) */}
                    {section.subList && (
                      <div className="my-5 p-5 bg-[#FAF9F6] rounded-2xl border border-[#E5E0D5] space-y-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" /> Key Highlights &amp; Activities:
                        </span>
                        <ul className="space-y-2.5">
                          {section.subList.map((item, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-stone-900 leading-relaxed font-normal">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{renderFormattedText(item)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tip Box (Altitude Insider Note) */}
                    {section.tip && (
                      <div className="my-5 p-4 sm:p-5 bg-[#FFFDF7] rounded-2xl border-l-4 border-[#BFA13B] border-y border-r border-[#E5E0D5] flex items-start gap-3 shadow-2xs">
                        <Sparkles className="w-4 h-4 text-[#BFA13B]" />
                        <div className="space-y-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#7A5200] block">
                            Altitude Insider Note
                          </span>
                          <p className="text-sm sm:text-[14.5px] text-stone-900 leading-relaxed font-normal">
                            {renderFormattedText(section.tip)}
                          </p>
                        </div>
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            {/* 7. Inline Quote Block */}
            {post.content.quote && (
              <blockquote className="my-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0C0A09] to-[#1C1917] text-white space-y-3 relative overflow-hidden shadow-lg border border-[#BFA13B]/30">
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

            {/* 8. FAQs Section (Natural Q&A stream) */}
            {post.content.faqs && post.content.faqs.length > 0 && (
              <section id="faqs-section" className="pt-10 border-t border-stone-200/70 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#BFA13B]" />
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-950 tracking-tight">
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <span className="text-xs font-bold text-[#7A5200] bg-[#FAF9F6] px-3 py-1 rounded-full border border-[#D4AF37]/30">
                    {post.content.faqs.length} Important FAQs
                  </span>
                </div>

                <div className="space-y-4">
                  {post.content.faqs.map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      className="bg-[#FAF9F6] rounded-2xl p-5 border border-[#E5E0D5] space-y-2.5 shadow-2xs"
                    >
                      <h3 className="text-base sm:text-[17px] font-bold text-stone-950 flex items-start gap-2.5 leading-snug">
                        <span className="text-[#7A5200] font-bold">{fIdx + 1}.</span>
                        <span>{faq.question.replace(/^\d+\.\s*/, "")}</span>
                      </h3>
                      <p className="text-sm sm:text-[15px] text-stone-900 leading-relaxed font-normal pl-6">
                        {renderFormattedText(faq.answer)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 9. Conclusion & Practical Tips */}
            <section className="pt-10 border-t border-stone-200/70 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 bg-[#FAF9F6] text-[#7A5200] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/30">
                  <Compass className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Trip Wrap-Up</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-950 tracking-tight">
                  Planning Your Escape
                </h2>
                <div className="text-[16px] sm:text-[17px] text-stone-900 leading-[1.8] font-normal space-y-4">
                  {renderFormattedText(post.content.conclusion)}
                </div>
              </div>

              {/* Key Tips */}
              {post.content.insiderTips && post.content.insiderTips.length > 0 && (
                <div className="p-5 sm:p-6 bg-[#FAF9F6] rounded-2xl border border-[#E5E0D5] space-y-3">
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
              )}

              {/* Tags */}
              <div className="pt-4 flex flex-wrap items-center gap-2">
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
            </section>

            {/* 10. Integrated Custom Tour Planning Banner */}
            <div className="pt-4">
              <div className="bg-gradient-to-br from-[#0C0A09] to-[#1C1917] text-white rounded-3xl p-6 sm:p-8 border border-[#BFA13B]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#F5D77F] text-xs font-bold border border-[#D4AF37]/30">
                    <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Custom Tour Planning</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    Planning a Trip to {post.destinationName || "This Destination"}?
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 max-w-lg font-normal leading-relaxed">
                    Connect directly with Altitude Travel Co. in Bazpur, Uttarakhand. We tailor every itinerary to your travel dates, preferred budget, hotel category, and private transfers.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <a
                    href={`https://wa.me/919639320101?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3 px-5 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  {post.destinationSlug && (
                    <Link
                      href={post.destinationSlug}
                      className="w-full sm:w-auto py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/15 text-[#F5D77F] border border-[#D4AF37]/30 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>View Tour Package</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Back to Blog Hub */}
            <div className="pt-6 border-t border-stone-200/70">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#7A5200] hover:text-stone-950 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Altitude Travel Journal</span>
              </Link>
            </div>

          </article>

          {/* Related Articles Row (Outside the main article) */}
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
