export default defineEventHandler((event) => {
  const {
    public: { siteUrl, indexable },
  } = useRuntimeConfig(event);
  const base = siteUrl.replace(/\/+$/, "");
  const allowIndexing = String(indexable) === "true";

  setHeader(event, "content-type", "text/plain; charset=utf-8");
  setHeader(
    event,
    "cache-control",
    allowIndexing ? "public, max-age=3600" : "no-store",
  );

  if (!allowIndexing) {
    return `# Pre-launch: this site is not yet open to search engines.
User-agent: *
Disallow: /
`;
  }

  return `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;
});
