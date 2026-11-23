<script setup lang="ts">
import { faqs } from "~/utils/site";

const { siteUrl, indexable } = useRuntimeConfig().public;
const allowIndexing = String(indexable) === "true";
const base = siteUrl.replace(/\/+$/, "");
const canonical = `${base}/`;
const ogImage = `${base}/og.png`;

const title = "Stream Payments — Payment infrastructure for the Caribbean";
const description =
  "Create an account, add the SDK, and start accepting payments online. Stream gives Caribbean businesses recurring billing and payouts out of the box.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogUrl: canonical,
  ogSiteName: "Stream Payments",
  ogLocale: "en_US",
  ogImage,
  ogImageAlt: "Stream Payments — payment infrastructure for the Caribbean",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
  robots: allowIndexing
    ? "index, follow, max-image-preview:large"
    : "noindex, nofollow",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${canonical}#organization`,
      name: "Stream Payments",
      alternateName: "Stream",
      url: canonical,
      logo: `${base}/favicon.svg`,
      description,
      slogan: "Easy payment infrastructure for the Caribbean.",
      areaServed: { "@type": "Place", name: "Caribbean" },
    },
    {
      "@type": "WebSite",
      "@id": `${canonical}#website`,
      url: canonical,
      name: "Stream Payments",
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
