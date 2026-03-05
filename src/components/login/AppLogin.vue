<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
</script>

<template>
  <Dialog>
    <form>
      <DialogTrigger data-testid="login-trigger" as-child>
        <Button variant="outline"> log in </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]" data-testid="login-dialog">
        <div class="grid gap-4">
          <LoginForm />
        </div>
      </DialogContent>
    </form>
  </Dialog>
</template>
