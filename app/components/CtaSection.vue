<script setup lang="ts">
const { dashboardUrl } = useRuntimeConfig().public;
</script>

<template>
  <section id="get-started" class="relative overflow-hidden bg-brand-600">
    <div class="cta-glow pointer-events-none absolute inset-0" aria-hidden="true" />

    <div class="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
      <p
        class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-50/80"
      >
        Get started
      </p>
      <h2
        class="mt-3 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl"
      >
        Ready when you are.
      </h2>
      <p class="mx-auto mt-4 max-w-xl text-base leading-7 text-brand-50">
        Create a key, mount the checkout, and take your first payment. Your
        integration stays small; the rest lives in the dashboard.
      </p>

      <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          :href="dashboardUrl"
          class="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-50 focus-visible:outline-white"
        >
          Open the dashboard
        </a>
        <a
          href="#developers"
          class="inline-flex h-11 items-center justify-center rounded-lg border border-white/40 px-5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-white"
        >
          Read the integration guide
        </a>
      </div>

      <p class="mt-6 text-xs text-brand-50/80">
        Publishable keys in the browser. Secrets on the server. That is the
        deal.
      </p>
    </div>
  </section>
</template>
