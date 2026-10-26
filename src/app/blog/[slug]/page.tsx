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
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Altitude Travel Co.",
    };
  }

  const canonicalUrl = `https://www.altitudetravelco.com/blog/${post.slug}`;

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
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.coverImage,
    datePublished: "2026-10-24T09:00:00.000Z",
    dateModified: "2026-10-24T09:00:00.000Z",
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

  const whatsappMessage = encodeURIComponent(
    `Hello Altitude Travel Co., I just read your article "${post.title}" on your website and would like to inquire about planning a bespoke trip.`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-24 bg-[#FAF9F6] min-h-screen text-stone-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
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
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-extrabold text-stone-950 tracking-tight font-serif leading-[1.2]">
              {post.title}
            </h1>

            {/* Excerpt Lead */}
            <p className="text-stone-700 text-sm sm:text-base lg:text-lg leading-relaxed font-normal border-l-2 border-[#D4AF37] pl-4 italic">
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
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
          </div>

          {/* Main Layout: Article Body + Sticky Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Article Content (8 Cols) */}
            <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0D5] shadow-xs space-y-8 text-stone-800 leading-relaxed text-sm sm:text-base font-normal">
              
              {/* Introduction */}
              <div className="text-base sm:text-lg text-stone-900 leading-relaxed font-normal first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-[#7A5200]">
                {post.content.introduction}
              </div>

              {/* Dynamic Content Sections */}
              {post.content.sections.map((section, idx) => (
                <section key={idx} className="space-y-4 pt-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-950 tracking-tight font-serif">
                    {section.heading}
                  </h2>

                  {section.body.map((para, pIdx) => (
                    <p key={pIdx} className="text-stone-700 leading-relaxed">
                      {para}
                    </p>
                  ))}

                  {/* Optional Tip Callout */}
                  {section.tip && (
                    <div className="bg-[#FAF9F6] rounded-2xl p-4 sm:p-5 border-l-4 border-[#BFA13B] shadow-2xs space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#7A5200] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" /> Altitude Insider Note
                      </span>
                      <p className="text-xs sm:text-sm text-stone-800 font-medium">
                        {section.tip}
                      </p>
                    </div>
                  )}

                  {/* Optional Bullet Sublist */}
                  {section.subList && (
                    <ul className="space-y-2 pt-1 pl-1">
                      {section.subList.map((item, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Quote Block */}
              {post.content.quote && (
                <blockquote className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0C0A09] to-[#1C1917] text-white space-y-3 relative overflow-hidden">
                  <div className="text-[#D4AF37] font-serif text-5xl leading-none absolute top-4 left-4 opacity-20 pointer-events-none">
                    “
                  </div>
                  <p className="text-base sm:text-lg font-serif italic text-[#FAF9F6] relative z-10 leading-snug">
                    &ldquo;{post.content.quote.text}&rdquo;
                  </p>
                  <cite className="block text-xs font-bold uppercase tracking-wider text-[#F5D77F] not-italic relative z-10">
                    — {post.content.quote.author}
                  </cite>
                </blockquote>
              )}

              {/* Conclusion */}
              <div className="space-y-3 pt-4 border-t border-[#E5E0D5]">
                <h3 className="text-lg font-bold text-stone-950">
                  Planning Your Escape
                </h3>
                <p className="text-stone-700">
                  {post.content.conclusion}
                </p>
              </div>

              {/* Key Takeaways Box */}
              <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-[#E5E0D5] space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-stone-950 flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-[#BFA13B]" />
                  <span>Key Travel Tips for this Journey</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  {post.content.insiderTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BFA13B] mt-2 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-[#E5E0D5] flex flex-wrap items-center gap-2">
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

            </article>

            {/* Sticky Sidebar (4 Cols) */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* WhatsApp Booking Card */}
              <div className="bg-white rounded-3xl p-6 border border-[#E5E0D5] shadow-xs space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#FAF9F6] text-[#7A5200] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/30">
                  <Compass className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Custom Itineraries</span>
                </div>

                <h3 className="text-lg font-bold text-stone-950 font-serif leading-snug">
                  Inspired by This Story?
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  Connect with Altitude Travel Co. in Bazpur, Uttarakhand. We tailor every itinerary to your pace, preferences, and private dates.
                </p>

                <div className="space-y-2 pt-1 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Best Price &amp; Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Private Chauffeurs &amp; Transfers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Handpicked Boutique Resorts</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919639320101?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 96393 20101)</span>
                </a>
              </div>

              {/* Linked Destination Package Card (If applicable) */}
              {post.destinationSlug && (
                <div className="bg-white rounded-3xl p-6 border border-[#E5E0D5] shadow-xs space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#7A5200] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" />
                    <span>Featured Package</span>
                  </div>
                  <h4 className="text-base font-bold text-stone-950 font-serif leading-snug">
                    {post.destinationName}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    View our complete curated itinerary, luxury stays, landmark visits, and inclusions.
                  </p>
                  <Link
                    href={post.destinationSlug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A5200] hover:text-stone-950 transition-colors pt-1"
                  >
                    <span>View Curated Tour Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

              {/* Back to All Blogs Link */}
              <div className="bg-[#FAF9F6] rounded-2xl p-5 border border-[#E5E0D5] text-center space-y-2">
                <span className="text-xs text-stone-500 font-medium block">
                  Looking for more travel inspiration?
                </span>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A5200] hover:text-stone-950 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Browse All Published Stories</span>
                </Link>
              </div>

            </aside>

          </div>

          {/* Related Articles Row */}
          {relatedPosts.length > 0 && (
            <div className="pt-12 border-t border-[#E5E0D5] space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-extrabold text-stone-950 tracking-tight font-serif">
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
                          alt={related.title}
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
                          <h4 className="text-sm font-bold text-stone-950 font-serif line-clamp-2 group-hover:text-[#7A5200] transition-colors leading-snug">
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
