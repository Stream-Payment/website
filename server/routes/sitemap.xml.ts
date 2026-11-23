export default defineEventHandler((event) => {
  const {
    public: { siteUrl, indexable },
  } = useRuntimeConfig(event);
  const base = siteUrl.replace(/\/+$/, "");
  const allowIndexing = String(indexable) === "true";

  setHeader(event, "content-type", "application/xml; charset=utf-8");
  setHeader(
    event,
    "cache-control",
    allowIndexing ? "public, max-age=3600" : "no-store",
  );

  if (!allowIndexing) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>
`;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${base}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
});
