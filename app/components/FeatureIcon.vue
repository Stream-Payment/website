<script setup lang="ts">
import type { FeatureIconName } from "~/utils/site";

defineProps<{ name: FeatureIconName }>();
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'checkout'">
      <rect x="2.75" y="5.25" width="18.5" height="13.5" rx="2.25" />
      <path d="M2.75 9.75h18.5" />
      <path d="M6.5 15.25h4" />
    </template>

    <template v-else-if="name === 'card'">
      <path d="M6.25 4.75h11.5v14.5L12 15.4l-5.75 3.85V4.75Z" />
      <path d="M9.25 8.75h5.5" />
    </template>

    <template v-else-if="name === 'tag'">
      <path
        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
      />
      <circle cx="7.5" cy="7.5" r="0.5" fill="currentColor" />
    </template>

    <template v-else-if="name === 'users'">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </template>

    <template v-else-if="name === 'activity'">
      <path d="M3 12h4l3-8 4 16 3-8h4" />
    </template>

    <template v-else-if="name === 'key'">
      <circle cx="8" cy="16" r="4" />
      <path d="m10.85 13.15 9.4-9.4" />
      <path d="m16.25 7.75 2 2" />
      <path d="m13.75 10.25 2 2" />
    </template>
  </svg>
</template>
