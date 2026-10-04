import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Deployed as static files to GitHub Pages (deep-icd.org), which has no
     Node server. `next build` writes the site to out/. The custom domain
     serves from the root, so no basePath is needed. */
  output: "export",

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
