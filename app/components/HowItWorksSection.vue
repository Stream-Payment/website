<script setup lang="ts">
import { steps } from "~/utils/site";
</script>

<template>
  <section
    id="how-it-works"
    class="border-t border-slate-200/70 bg-slate-50/60 py-20 sm:py-28"
  >
    <div class="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="How it works"
        title="Three steps, then it is live."
        lead="No orchestration layer to build, no card form to maintain. The integration stays small on purpose."
      />

      <ol class="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
        <li v-for="(step, index) in steps" :key="step.title" class="border-t border-slate-300 pt-6">
          <p class="font-mono text-xs font-medium text-brand-600">
            {{ String(index + 1).padStart(2, "0") }}
          </p>
          <h3 class="mt-3 text-base font-semibold text-slate-900">
            {{ step.title }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-slate-600">
            {{ step.description }}
          </p>
        </li>
      </ol>

      <a
        href="#developers"
        class="group mt-12 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700"
      >
        Read the integration guide
        <span
          class="transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          →
        </span>
      </a>
    </div>
  </section>
</template>
