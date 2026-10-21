import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Deployed as static files to GitHub Pages (deep-icd.org), which has no
     Node server. `next build` writes the site to out/. */
  output: "export",

  /* "" on deep-icd.org; "/repo-name" when served from a GitHub project URL.
     Set by the deploy workflow -- see `basePath` in app/lib/site.ts. */
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",

  /* Emit /publications/index.html rather than /publications.html, the form
     every static host resolves without extra configuration. */
  trailingSlash: true,

  images: {
    /* Next's image optimiser is a server, which a static export cannot use.
       Images are served as-is instead, so they are pre-sized and converted to
       WebP in public/ rather than shipped at full camera/screenshot size. */
    unoptimized: true,
  },
};

export default nextConfig;
