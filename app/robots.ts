import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Required for `output: 'export'` — this route has no per-request data, so
// it can be generated once at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
