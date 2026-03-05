<template>
  <div class="relative min-h-screen bg-background">
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)]"
    />

    <AppHeader class="relative z-10 border-b bg-background/95 backdrop-blur" />

    <main class="relative z-10 flex-1">
      <div class="container max-w-7xl px-4 py-8 md:py-12">
        <div class="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 class="text-3xl font-bold tracking-tight md:text-4xl">AI Discovery Engine</h1>
            <p class="text-muted-foreground mt-2 text-lg">
              Analyze and explore the latest trending tools from Product Hunt.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <section class="lg:col-span-12 xl:col-span-8">
            <div class="h-full rounded-xl border bg-card text-card-foreground shadow-sm">
              <ProductChart />
            </div>
          </section>

          <section class="hidden xl:col-span-4 xl:block">
            <div
              class="h-full rounded-xl border border-dashed p-6 flex items-center justify-center text-center"
            >
              <div class="space-y-2">
                <p class="text-sm font-medium text-muted-foreground">Market Snapshot</p>
                <p class="text-2xl font-bold italic text-primary">Trending Now</p>
                <div class="h-px w-full bg-border my-4" />
                <p class="text-xs text-muted-foreground max-w-[200px]">
                  Visualizing engagement density across the top 6 AI tools in real-time.
                </p>
              </div>
            </div>
          </section>

          <section class="lg:col-span-12">
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <h2 class="text-2xl font-semibold tracking-tight">Live Directory</h2>
                <div class="h-px flex-1 bg-border" />
              </div>
              <ProductList />
            </div>
          </section>
        </div>

        <slot />
      </div>
    </main>

    <AppFooter class="border-t" />
  </div>
</template>

<style scoped>
/* Optional: Smooth entry animation */
main {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
