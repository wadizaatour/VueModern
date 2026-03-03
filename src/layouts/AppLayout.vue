<template>
  <div class="relative flex min-h-screen flex-col">
    <AppHeader />

    <main class="flex-1">
      <div class="container py-6">
        <slot />
      </div>
    </main>

    <AppFooter />
  </div>
</template>
