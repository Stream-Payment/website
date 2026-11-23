import tailwindcss from "@tailwindcss/vite";

const siteUrl = (
  process.env.NUXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

export default defineNuxtConfig({
  compatibilityDate: "2026-11-22",
  devtools: { enabled: true },

  // Server-rendered Vue. Every request gets fully-formed HTML for crawlers.
  ssr: true,

  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Stream — Payments infrastructure for modern businesses",
      meta: [
        { name: "theme-color", content: "#1B4EF5" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl,
      dashboardUrl:
        process.env.NUXT_PUBLIC_DASHBOARD_URL ?? "http://localhost:4200",
    },
  },

  routeRules: {
    "/**": {
      headers: {
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "X-Frame-Options": "SAMEORIGIN",
        "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
      },
    },
  },

  typescript: { strict: true },
});
