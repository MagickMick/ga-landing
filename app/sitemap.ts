import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Required for `output: 'export'` — this route has no per-request data, so
// it can be generated once at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
