import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogClientList from "@/components/BlogClientList";
import { BLOG_POSTS } from "@/data/blogs";
import { ArrowLeft, Compass, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Journal & Blogs | Altitude Travel Co.",
  description:
    "Explore travel stories, luxury destination guides, slow travel philosophy, and insider tips from Altitude Travel Co. in Bazpur, Uttarakhand.",
  alternates: {
    canonical: "https://www.altitudetravelco.com/blog/",
  },
  openGraph: {
    title: "Travel Journal & Blogs | Altitude Travel Co.",
    description:
      "Explore travel stories, luxury destination guides, slow travel philosophy, and insider tips from Altitude Travel Co. in Bazpur, Uttarakhand.",
    url: "https://www.altitudetravelco.com/blog/",
    siteName: "Altitude Travel Co.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Journal & Blogs | Altitude Travel Co.",
    description:
      "Explore travel stories, luxury destination guides, slow travel philosophy, and insider tips from Altitude Travel Co.",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Altitude Travel Journal",
  description:
    "Curated stories, slow travel perspectives, and luxury destination guides by Altitude Travel Co.",
  url: "https://www.altitudetravelco.com/blog/",
  publisher: {
    "@type": "TravelAgency",
    name: "Altitude Travel Co.",
    url: "https://altitudetravel.in",
    logo: "https://altitudetravel.in/logo.jpg",
    telephone: "+919639320101",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bazpur, near Rudrapur, Nainital",
      addressLocality: "Bazpur",
      addressRegion: "Uttarakhand",
      postalCode: "262401",
      addressCountry: "IN",
    },
  },
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://www.altitudetravelco.com/blog/${post.slug}`,
    image: post.coverImage,
    datePublished: "2026-10-24",
    author: {
      "@type": "Person",
      name: post.author.name,
    },
  })),
};

export default function BlogListingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />

      <main className="pt-32 pb-24 bg-[#FAF9F6] min-h-screen text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[#7A5200] hover:text-stone-950 transition-colors font-bold"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </Link>
            <span>/</span>
            <span className="text-stone-900 font-bold">Travel Journal &amp; Blogs</span>
          </div>

          {/* Page Hero Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#BFA13B]" />
              <span className="text-xs font-bold text-stone-900 tracking-wider uppercase">
                Altitude Travel Journal
              </span>
              <span className="text-[10px] font-extrabold text-[#7A5200] bg-[#FFF5D6] px-2 py-0.5 rounded-full border border-[#D4AF37]/40">
                Curated
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 tracking-tight font-serif leading-tight">
              Stories, Guides &amp; Slow Travel Notes
            </h1>

            {/* Laser Line Accent */}
            <div className="moving-line-track max-w-[200px] h-[3px] rounded-full overflow-hidden shadow-[0_0_12px_rgba(212,175,55,0.5)]">
              <div className="moving-line-beam" />
            </div>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal pt-1">
              Curated perspectives on slow exploration, authentic cultural immersion, and why the best vacations always include room to breathe. Written with care by our travel designers in Bazpur, Uttarakhand.
            </p>
          </div>

          {/* Interactive Client Blog Explorer */}
          <BlogClientList posts={BLOG_POSTS} />

        </div>
      </main>

      <Footer />
    </>
  );
}
