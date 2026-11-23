<script setup lang="ts">
import { features } from "~/utils/site";
</script>

<template>
  <section id="product" class="border-t border-slate-200/70 py-20 sm:py-28">
    <div class="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="Product"
        title="Everything you need to get paid."
        lead="A checkout is the moment. Stream also handles the billing, customers, and payouts that make it repeatable."
      />

      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="rounded-lg border border-slate-200 bg-white p-6"
        >
          <div
            class="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-600/10"
          >
            <FeatureIcon :name="feature.icon" class="h-5 w-5" />
          </div>
          <h3 class="mt-5 text-base font-semibold text-slate-900">
            {{ feature.title }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-slate-600">
            {{ feature.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
