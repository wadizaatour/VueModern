<script setup lang="ts">
import { ref } from 'vue'
import { Menubar } from '@/components/ui/menubar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { Search, Menu } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
    <div
      class="container flex h-16 items-center justify-between gap-4 px-4 md:px-6 max-w-screen-2xl mx-auto"
    >
      <div class="flex items-center gap-4 md:gap-8">
        <Sheet v-model:open="isMobileMenuOpen">
          <SheetTrigger as-child>
            <BaseButton variant="ghost" size="icon" class="md:hidden">
              <Menu class="size-5" />
              <span class="sr-only">Toggle Menu</span>
            </BaseButton>
          </SheetTrigger>
          <SheetContent side="left" class="w-[300px] sm:w-[400px]">
            <nav class="flex flex-col gap-4 mt-8">
              <a href="/" class="flex items-center gap-2 mb-4" @click="isMobileMenuOpen = false">
                <div
                  class="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold"
                >
                  V
                </div>
                <span class="font-bold">VueModern</span>
              </a>
              <div class="flex flex-col gap-2">
                <h4 class="text-sm font-semibold text-muted-foreground px-2">Project</h4>
                <BaseButton variant="ghost" class="justify-start">Settings</BaseButton>
                <BaseButton variant="ghost" class="justify-start">Analytics</BaseButton>
                <BaseButton variant="ghost" class="justify-start">Deployments</BaseButton>
              </div>
              <hr class="my-2" />
              <BaseButton variant="outline" class="w-full">Log in</BaseButton>
              <BaseButton class="w-full">Get Started</BaseButton>
            </nav>
          </SheetContent>
        </Sheet>

        <a href="/" class="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <div class="size-8 rounded-lg bg-primary flex items-center justify-center">
            <span class="text-primary-foreground font-bold text-xl">V</span>
          </div>
          <span class="hidden font-bold lg:inline-block">VueModern</span>
        </a>

        <nav class="hidden md:flex items-center">
          <Menubar class="border-none bg-transparent shadow-none px-0" />
        </nav>
      </div>

      <div class="flex-1 max-w-md relative group hidden sm:block">
        <div
          class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors"
        >
          <Search class="size-4" />
        </div>
        <BaseInput
          placeholder="Search..."
          class="pl-10 pr-12 bg-muted/50 border-transparent focus-visible:bg-background transition-all h-9"
        />
        <div class="absolute right-3 top-1/2 -translate-y-1/2 hidden lg:block">
          <kbd
            class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground"
          >
            <span class="text-xs">⌘</span>K
          </kbd>
        </div>
      </div>

      <div class="flex items-center gap-2 md:gap-3">
        <AppBadge
          variant="outline"
          class="hidden sm:flex items-center gap-1 font-normal text-xs px-2 py-0.5 border-primary/20 bg-primary/5 text-primary"
        >
          v2.4.0
        </AppBadge>

        <div class="flex items-center gap-2 md:border-l md:pl-4 ml-1">
          <AppLogin />
          <BaseButton size="sm" class="h-9 px-3 md:px-4">
            <span class="hidden sm:inline">Get Started</span>
            <span class="sm:hidden font-bold">Join</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </header>
</template>
