// Belt-and-braces for stealth mode: every response carries a noindex header,
// including pages that forget to set their own robots meta tag.
export default defineEventHandler((event) => {
  const {
    public: { indexable },
  } = useRuntimeConfig(event);

  if (String(indexable) !== "true") {
    setHeader(event, "X-Robots-Tag", "noindex, nofollow, noarchive");
  }
});
