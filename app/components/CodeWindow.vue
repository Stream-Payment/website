<script setup lang="ts">
defineProps<{ filename: string }>();
</script>

<template>
  <div
    class="min-w-0 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/15"
  >
    <div
      class="flex items-center gap-1.5 border-b border-white/10 px-4 py-3"
      aria-hidden="true"
    >
      <span class="h-2.5 w-2.5 rounded-full bg-slate-700" />
      <span class="h-2.5 w-2.5 rounded-full bg-slate-700" />
      <span class="h-2.5 w-2.5 rounded-full bg-slate-700" />
      <span class="ml-2.5 font-mono text-xs text-slate-400">{{ filename }}</span>
    </div>
    <div
      class="overflow-x-auto p-5 text-[13px] leading-6 text-slate-300"
      tabindex="0"
      role="region"
      :aria-label="`${filename} code sample`"
    >
      <slot />
    </div>
  </div>
</template>
