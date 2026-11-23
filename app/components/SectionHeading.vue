<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string;
    title: string;
    lead?: string;
    invert?: boolean;
    centered?: boolean;
  }>(),
  { invert: false, centered: false },
);
</script>

<template>
  <div :class="centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'">
    <p
      class="text-xs font-semibold uppercase tracking-[0.18em]"
      :class="invert ? 'text-slate-400' : 'text-brand-600'"
    >
      {{ eyebrow }}
    </p>
    <h2
      class="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      :class="invert ? 'text-white' : 'text-slate-900'"
    >
      {{ title }}
    </h2>
    <p
      v-if="lead"
      class="mt-4 text-base leading-7"
      :class="invert ? 'text-slate-400' : 'text-slate-600'"
    >
      {{ lead }}
    </p>
  </div>
</template>
