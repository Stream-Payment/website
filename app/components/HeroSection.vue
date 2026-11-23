<script setup lang="ts">
const facts = [
  "Hosted, iframe-isolated checkout",
  "Versioned REST API",
  "Granular key permissions",
];
</script>

<template>
  <section class="relative overflow-hidden">
    <div
      class="hero-glow pointer-events-none absolute inset-0 -z-10"
      aria-hidden="true"
    />
    <div
      class="hero-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]"
      aria-hidden="true"
    />

    <div
      class="mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-24"
    >
      <div>
        <p
          class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600"
        >
          Payments infrastructure
        </p>

        <h1
          class="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-balance text-slate-900 sm:text-5xl lg:text-[3.5rem]"
        >
          Money moves better on
          <span class="text-brand-600">Stream</span>.
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Hosted checkout, saved cards, and the operations behind them. One
          clean API, one dashboard, and card data that never touches your
          servers.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#developers"
            class="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
          >
            Start building
            <span
              class="transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              →
            </span>
          </a>
          <a
            href="#how-it-works"
            class="inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
          >
            See how it works
          </a>
        </div>

        <p class="mt-6 text-xs leading-5 text-slate-500">
          Publishable-key SDK · Versioned REST API · Server-side verification
        </p>
      </div>

      <div class="relative min-w-0">
        <div
          class="absolute inset-x-4 -bottom-4 top-8 rounded-lg border border-slate-200 bg-white/60"
          aria-hidden="true"
        />
        <div class="relative">
          <CodeWindow filename="checkout.ts">
<pre v-pre class="font-mono"><code><span class="text-violet-300">import</span> { Stream } <span class="text-violet-300">from</span> <span class="text-emerald-300">"@stream/stream-js"</span>;

<span class="text-violet-300">const</span> stream = <span class="text-violet-300">new</span> <span class="text-amber-200">Stream</span>(<span class="text-emerald-300">"pk_live_..."</span>, {
  purpose: <span class="text-emerald-300">"payment"</span>,
  amountMinor: <span class="text-sky-300">125000</span>,
  currency: <span class="text-emerald-300">"JMD"</span>,
  returnUrl: <span class="text-emerald-300">"https://shop.example/thanks"</span>,
});

stream.<span class="text-sky-300">on</span>(<span class="text-emerald-300">"success"</span>, (payment) => {
  console.<span class="text-sky-300">log</span>(<span class="text-emerald-300">"Paid"</span>, payment);
});

<span class="text-violet-300">await</span> stream.<span class="text-sky-300">mount</span>(<span class="text-emerald-300">"#checkout"</span>);</code></pre>
          </CodeWindow>
        </div>
        <p
          class="relative mt-4 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500"
        >
          Hosted checkout · typed SDK
        </p>
      </div>
    </div>

    <div class="border-y border-slate-200/70 bg-white/60">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-xs font-medium text-slate-700">
          Built for the whole payment lifecycle.
        </p>
        <ul
          class="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500"
        >
          <li v-for="fact in facts" :key="fact" class="flex items-center gap-2">
            <span class="h-1 w-1 rounded-full bg-brand-600" aria-hidden="true" />
            {{ fact }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
