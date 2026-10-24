"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Clock,
  ArrowRight,
  Sparkles,
  Calendar,
  MessageSquare,
  Search,
  BookOpen,
} from "lucide-react";
import { BlogPost } from "@/data/blogs";

interface BlogClientListProps {
  posts: BlogPost[];
}

export default function BlogClientList({ posts }: BlogClientListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Travel Philosophy",
    "International Guides",
    "Indian Escapes",
    "Luxury Escapes",
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((p) => p.featured) || posts[0];

  return (
    <div className="space-y-12">
      {/* Search & Category Filter Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E5E0D5] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-full w-full md:w-auto pb-1 md:pb-0">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#0C0A09] text-[#F5D77F] shadow-sm border border-[#D4AF37]/50"
                    : "text-stone-700 hover:text-stone-950 hover:bg-stone-100 bg-[#FAF9F6] border border-transparent"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64 shrink-0">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stories, destinations..."
            className="w-full pl-9 pr-3.5 py-1.5 text-xs text-stone-900 bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl focus:outline-hidden focus:border-[#BFA13B] focus:ring-1 focus:ring-[#BFA13B] transition-all"
          />
        </div>
      </div>

      {/* Featured Story Spotlight (Only when All or matching is selected and no query) */}
      {selectedCategory === "All" && searchQuery === "" && featuredPost && (
        <div className="group relative bg-white rounded-3xl overflow-hidden border border-[#E5E0D5] shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Image Column */}
            <div className="lg:col-span-7 relative h-[280px] sm:h-[360px] lg:h-[440px] overflow-hidden bg-stone-950">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent lg:hidden" />
              
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C0A09]/90 text-[#F5D77F] text-xs font-bold border border-[#D4AF37]/50 shadow-sm backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Featured Journal</span>
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-stone-500 font-semibold">
                  <span className="text-[#7A5200] font-bold uppercase tracking-wider bg-[#FAF9F6] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-stone-950 tracking-tight font-serif leading-tight group-hover:text-[#7A5200] transition-colors">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E0D5] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-stone-100 border border-[#E5E0D5]">
                    <Image
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-900 block leading-tight">
                      {featuredPost.author.name}
                    </span>
                    <span className="text-[10px] text-stone-500 block">
                      {featuredPost.publishDate}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#0C0A09] text-[#F5D77F] hover:bg-[#7A5200] hover:text-white transition-all shadow-xs"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Grid of Articles */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-950 tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#BFA13B]" />
            <span>All Published Stories ({filteredPosts.length})</span>
          </h2>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E5E0D5] space-y-3">
            <Compass className="w-10 h-10 text-stone-400 mx-auto" />
            <h3 className="text-base font-bold text-stone-900">
              No matching stories found
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Try adjusting your search terms or selecting another category above.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs font-bold text-[#7A5200] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] hover:border-[#D4AF37] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail */}
                  <Link href={`/blog/${post.slug}`} className="block relative h-52 overflow-hidden bg-stone-950">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Category Pill */}
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[#7A5200] text-[10.5px] font-bold border border-[#D4AF37]/30 shadow-xs">
                      {post.category}
                    </span>

                    <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-[#0C0A09]/80 backdrop-blur-xs text-stone-200 text-[10px] font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      {post.readTime}
                    </span>
                  </Link>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-[11px] text-stone-500 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#BFA13B]" />
                      <span>{post.publishDate}</span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-base sm:text-lg font-bold text-stone-950 tracking-tight leading-snug font-serif group-hover:text-[#7A5200] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Info & Action */}
                <div className="p-5 sm:p-6 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden bg-stone-100 border border-stone-200">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-stone-700">
                      {post.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#7A5200] group-hover:text-stone-950 transition-colors"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Bespoke Journey Consultation Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0C0A09] via-[#141210] to-[#1C1917] p-7 sm:p-10 border border-[#D4AF37]/40 shadow-xl text-white">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#F5D77F] text-xs font-bold border border-[#D4AF37]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Bespoke Travel Planning</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-serif">
              Ready to Turn These Stories Into Your Next Journey?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl font-normal">
              Connect directly with our itinerary designers in Bazpur, Uttarakhand. We tailor every route with handpicked hotels, private drivers, and our signature guaranteed free day.
            </p>
          </div>

          <a
            href="https://wa.me/919639320101?text=Hello%20Altitude%20Travel,%20I%20am%20reading%20your%20travel%20journal%20and%20would%20like%20to%20plan%20a%20custom%20trip."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-shining-gold text-stone-950 hover:brightness-105 active:scale-95 shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2 shrink-0 cursor-pointer border border-[#D4AF37]/60"
          >
            <MessageSquare className="w-4 h-4 text-stone-950" />
            <span>Chat on WhatsApp (+91 96393 20101)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
