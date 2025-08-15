import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/search?*", "/*?utm_*", "/*?ref=*"],
    },
    sitemap: "https://discgolfodds.com/sitemap.xml",
  }
}
