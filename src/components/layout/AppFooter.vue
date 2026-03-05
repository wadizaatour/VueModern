<script setup lang="ts">
import { Github, Twitter, Linkedin } from 'lucide-vue-next'
</script>

<template>
  <footer class="w-full border-t bg-background/50 backdrop-blur-sm">
    <div class="container px-6 py-12 max-w-screen-2xl mx-auto">
      <div class="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
        <div class="flex flex-col gap-4 lg:col-span-2">
          <a href="/" class="flex items-center gap-2">
            <div class="size-7 rounded bg-primary flex items-center justify-center">
              <span class="text-primary-foreground font-bold text-sm">V</span>
            </div>
            <span class="font-bold tracking-tight">VueModern</span>
          </a>
          <p class="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Building the next generation of testing tools for Vue developers. Open source,
            community-driven, and lightning fast.
          </p>
          <div class="flex items-center gap-4 mt-2">
            <a href="#" class="text-muted-foreground hover:text-primary transition-colors">
              <Github class="size-5" />
            </a>
            <a href="#" class="text-muted-foreground hover:text-primary transition-colors">
              <Twitter class="size-5" />
            </a>
            <a href="#" class="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin class="size-5" />
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-foreground/80">Product</h3>
          <nav class="flex flex-col gap-2.5">
            <a href="#" class="text-sm text-muted-foreground hover:text-primary transition-colors"
              >Features</a
            >
            <a href="#" class="text-sm text-muted-foreground hover:text-primary transition-colors"
              >Integrations</a
            >
            <a href="#" class="text-sm text-muted-foreground hover:text-primary transition-colors"
              >Pricing</a
            >
            <a href="#" class="text-sm text-muted-foreground hover:text-primary transition-colors"
              >Changelog</a
            >
          </nav>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-foreground/80">Company</h3>
          <nav class="flex flex-col gap-2.5">
            <a href="#" class="text-sm text-muted-foreground hover:text-primary transition-colors"
              >About Us</a
            >
            <a href="#" class="text-sm text-muted-foreground hover:text-primary transition-colors"
              >Careers</a
            >
            <a href="#" class="text-sm text-muted-foreground hover:text-primary transition-colors"
              >Privacy Policy</a
            >
            <a href="#" class="text-sm text-muted-foreground hover:text-primary transition-colors"
              >Terms of Service</a
            >
          </nav>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold uppercase tracking-wider texfground/80">Newsletter</h3>
          <p class="text-sm text-muted-foreground">Get the latest updates in your inbox.</p>
          <div class="flex flex-col gap-2">
            <BaseInput placeholder="email@example.com" class="bg-muted/50 border-none h-10" />
            <BaseButton size="sm" class="w-full">Subscribe</BaseButton>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t flex flex-col items-center justify-between gap-6 md:flex-row">
        <p class="text-xs text-muted-foreground">
          &copy; 2026 VueModern UI developed by wadi zaatour.
        </p>
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-1">
            <span class="text-[10px] font-medium text-muted-foreground pase tracking-widest"
              >Systems Operational</span
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
