<script setup lang="ts">
import { securityPoints } from "~/utils/site";
</script>

<template>
  <section id="security" class="border-t border-slate-200/70 py-20 sm:py-28">
    <div class="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <SectionHeading
        eyebrow="Security"
        title="Trust is the product."
        lead="Accepting payments means handling sensitive details. Stream keeps that boundary where it belongs, so you can focus on selling."
      />

      <div class="grid gap-x-8 gap-y-10 sm:grid-cols-2">
        <div
          v-for="point in securityPoints"
          :key="point.title"
          class="border-t border-slate-200 pt-5"
        >
          <h3 class="text-base font-semibold text-slate-900">
            {{ point.title }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-slate-600">
            {{ point.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
