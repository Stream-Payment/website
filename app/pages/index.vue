<script setup lang="ts">
import { faqs } from "~/utils/site";

const { siteUrl } = useRuntimeConfig().public;
const base = siteUrl.replace(/\/+$/, "");
const canonical = `${base}/`;
const ogImage = `${base}/og.png`;

const title = "Stream — Payments infrastructure for modern businesses";
const description =
  "Hosted checkout, saved cards, a typed JavaScript SDK, and a dashboard for customers, products, and transactions. Card data never touches your servers.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogUrl: canonical,
  ogSiteName: "Stream",
  ogLocale: "en_US",
  ogImage,
  ogImageAlt:
    "Stream — payments infrastructure for modern businesses",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
  robots: "index, follow, max-image-preview:large",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${canonical}#organization`,
      name: "Stream",
      url: canonical,
      logo: `${base}/favicon.svg`,
      description,
    },
    {
      "@type": "WebSite",
      "@id": `${canonical}#website`,
      url: canonical,
      name: "Stream",
      inLanguage: "en",
      publisher: { "@id": `${canonical}#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      inLanguage: "en",
      isPartOf: { "@id": `${canonical}#website` },
      about: { "@id": `${canonical}#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

useHead({
  link: [{ rel: "canonical", href: canonical }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(schema),
    },
  ],
});
</script>

<template>
  <div>
    <HeroSection />
    <ProductSection />
    <HowItWorksSection />
    <DevelopersSection />
    <SecuritySection />
    <FaqSection />
    <CtaSection />
  </div>
</template>
