<script setup lang="ts">
import { endpoints } from "~/utils/site";
</script>

<template>
  <section id="developers" class="relative overflow-hidden bg-slate-950 py-20 sm:py-28">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(27,78,245,0.18),transparent_70%)]"
      aria-hidden="true"
    />

    <div
      class="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-16"
    >
      <div class="min-w-0">
        <p
          class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
        >
          Developers
        </p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A small API with sharp edges.
        </h2>
        <p class="mt-4 text-base leading-7 text-slate-400">
          Predictable resources, explicit amounts, and recurring billing that
          doesn’t depend on your cron jobs. Install the typed SDK, or call the
          API from any language that speaks HTTP.
        </p>

        <div class="mt-8 border-y border-white/10">
          <div
            v-for="endpoint in endpoints"
            :key="endpoint.path"
            class="flex items-center gap-4 border-b border-white/10 py-3.5 last:border-b-0"
          >
            <span
              class="w-12 font-mono text-[11px] font-medium uppercase tracking-wider text-slate-400"
            >
              {{ endpoint.method }}
            </span>
            <code class="font-mono text-sm text-slate-200">{{ endpoint.path }}</code>
            <span class="ml-auto hidden text-xs text-slate-400 sm:block">
              {{ endpoint.note }}
            </span>
          </div>
        </div>

        <div
          class="mt-6 rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-slate-300"
        >
          <span class="mr-2 text-slate-400" aria-hidden="true">$</span>
          npm i @stream/stream-js
        </div>
      </div>

      <CodeWindow filename="checkout.http">
<pre v-pre class="font-mono"><code><span class="text-sky-300">POST</span> /checkout
Content-Type: application/json

{
  <span class="text-slate-400">"publishableKey"</span>: <span class="text-emerald-300">"pk_test_..."</span>,
  <span class="text-slate-400">"purpose"</span>: <span class="text-emerald-300">"payment"</span>,
  <span class="text-slate-400">"amountMinor"</span>: <span class="text-sky-300">125000</span>,
  <span class="text-slate-400">"currency"</span>: <span class="text-emerald-300">"JMD"</span>
}

<span class="text-emerald-300">200 OK</span>
{
  <span class="text-slate-400">"checkoutUrl"</span>: <span class="text-emerald-300">"/?sessionId=ps_..."</span>
}</code></pre>
      </CodeWindow>

      <p class="text-xs text-slate-400 lg:col-span-2 lg:-mt-6">
        Errors are typed. Amounts are integers. Sessions expire. The boring
        guarantees are the ones you notice when they are missing.
      </p>
    </div>
  </section>
</template>
