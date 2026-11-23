<script setup lang="ts">
import { faqs } from "~/utils/site";
</script>

<template>
  <section
    id="faq"
    class="border-t border-slate-200/70 bg-slate-50/60 py-20 sm:py-28"
  >
    <div class="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions, answered."
        lead="The short version. The integration guide has the long one."
      />

      <div class="border-y border-slate-200">
        <details
          v-for="faq in faqs"
          :key="faq.question"
          class="group border-b border-slate-200 py-5 last:border-b-0"
        >
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-medium text-slate-900"
          >
            {{ faq.question }}
            <svg
              class="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            {{ faq.answer }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>
