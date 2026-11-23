<script setup lang="ts">
const event = useRequestEvent();
if (event) {
  setResponseStatus(event, 404);
}

useSeoMeta({
  title: "Page not found — Stream",
  description: "The page you were looking for does not exist.",
  robots: "noindex, follow",
});
</script>

<template>
  <section class="relative overflow-hidden">
    <div
      class="hero-glow pointer-events-none absolute inset-0 -z-10"
      aria-hidden="true"
    />
    <div
      class="hero-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"
      aria-hidden="true"
    />

    <div
      class="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center sm:py-32"
    >
      <p
        class="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand-600"
      >
        404
      </p>
      <h1
        class="mt-3 text-3xl font-semibold tracking-tight text-balance text-slate-900 sm:text-4xl"
      >
        That page isn’t here.
      </h1>
      <p class="mt-4 max-w-md text-base leading-7 text-slate-600">
        The address may be mistyped, or the page has moved. Head back home, or
        jump straight to the integration guide.
      </p>

      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <NuxtLink
          to="/"
          class="inline-flex h-11 items-center justify-center rounded-lg bg-brand-600 px-5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
        >
          Back to home
        </NuxtLink>
        <a
          href="/#developers"
          class="inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
        >
          Read the integration guide
        </a>
      </div>
    </div>
  </section>
</template>
