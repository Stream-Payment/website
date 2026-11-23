export default defineEventHandler((event) => {
  const {
    public: { siteUrl },
  } = useRuntimeConfig(event);
  const base = siteUrl.replace(/\/+$/, "");

  setHeader(event, "content-type", "text/plain; charset=utf-8");
  setHeader(event, "cache-control", "public, max-age=3600");

  return `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;
});
