<script setup lang="ts">
import { computed } from "vue";

const { dashboardUrl } = useRuntimeConfig().public;
const route = useRoute();
const homePrefix = computed(() => (route.path === "/" ? "" : "/"));
const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-slate-200 bg-white">
    <div class="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div class="max-w-xs">
          <NuxtLink
            to="/"
            class="flex items-center gap-2.5"
            aria-label="Stream — home"
          >
            <BrandMark />
            <span class="text-[17px] font-semibold tracking-tight text-slate-900">
              Stream
            </span>
          </NuxtLink>
          <p class="mt-4 text-sm leading-6 text-slate-600">
            Payments infrastructure for modern businesses. Hosted checkout, a
            typed SDK, and a dashboard that keeps the details in order.
          </p>
        </div>

        <nav aria-label="Explore">
          <h2 class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Explore
          </h2>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li><a :href="`${homePrefix}#product`" class="text-slate-600 hover:text-brand-600">Product</a></li>
            <li><a :href="`${homePrefix}#how-it-works`" class="text-slate-600 hover:text-brand-600">How it works</a></li>
            <li><a :href="`${homePrefix}#developers`" class="text-slate-600 hover:text-brand-600">Developers</a></li>
            <li><a :href="`${homePrefix}#security`" class="text-slate-600 hover:text-brand-600">Security</a></li>
            <li><a :href="`${homePrefix}#faq`" class="text-slate-600 hover:text-brand-600">FAQ</a></li>
          </ul>
        </nav>

        <nav aria-label="Account">
          <h2 class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Account
          </h2>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li><a :href="dashboardUrl" class="text-slate-600 hover:text-brand-600">Dashboard</a></li>
            <li><a :href="`${homePrefix}#get-started`" class="text-slate-600 hover:text-brand-600">Get started</a></li>
            <li><a href="#main" class="text-slate-600 hover:text-brand-600">Back to top</a></li>
          </ul>
        </nav>
      </div>

      <div
        class="mt-12 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ year }} Stream. All rights reserved.</p>
        <p>Publishable keys in the browser. Secrets on the server.</p>
      </div>
    </div>
  </footer>
</template>
