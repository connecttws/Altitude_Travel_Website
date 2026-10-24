import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://altitudetravel.in";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/goa-tour-packages`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dubai-tour-and-travel`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/thailand-tour-packages`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vietnam-tour-and-travel`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kandy-bentota-tour-packages`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...BLOG_POSTS.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/refund-cancellation-policy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
