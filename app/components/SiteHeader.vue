<script setup lang="ts">
import { computed, ref } from "vue";
import { navLinks } from "~/utils/site";

const open = ref(false);
const { dashboardUrl } = useRuntimeConfig().public;
const route = useRoute();
const homePrefix = computed(() => (route.path === "/" ? "" : "/"));
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur"
    @keydown.escape="open = false"
  >
    <div
      class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6"
    >
      <NuxtLink
        to="/"
        class="flex items-center gap-2.5"
        aria-label="Stream — home"
        @click="open = false"
      >
        <BrandMark />
        <span class="text-[17px] font-semibold tracking-tight text-slate-900">
          Stream
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-7 lg:flex" aria-label="Primary">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="`${homePrefix}${link.href}`"
          class="text-sm text-slate-600 transition-colors hover:text-slate-900"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <a
          :href="dashboardUrl"
          class="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:inline-flex"
        >
          Sign in
        </a>
        <a
          :href="`${homePrefix}#get-started`"
          class="inline-flex h-9 items-center rounded-lg bg-brand-600 px-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
        >
          Get started
        </a>
        <button
          type="button"
          class="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 lg:hidden"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          :aria-label="open ? 'Close menu' : 'Open menu'"
          @click="open = !open"
        >
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path v-if="!open" d="M4 7h16M4 12h16M4 17h16" />
            <path v-else d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
    </div>

    <div
      v-show="open"
      id="mobile-nav"
      class="border-t border-slate-200 bg-white lg:hidden"
    >
      <nav
        class="mx-auto flex max-w-6xl flex-col px-6 py-3"
        aria-label="Mobile"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="`${homePrefix}${link.href}`"
          class="rounded-lg py-2.5 text-sm text-slate-700 hover:text-brand-600"
          @click="open = false"
        >
          {{ link.label }}
        </a>
        <a
          :href="dashboardUrl"
          class="border-t border-slate-100 py-2.5 text-sm font-medium text-slate-700 hover:text-brand-600"
          @click="open = false"
        >
          Sign in
        </a>
      </nav>
    </div>
  </header>
</template>
