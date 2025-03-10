<script setup lang="ts">
import { SiteHeader } from '~/components/widgets/site-header'
import { SiteFooter } from '~/components/widgets/site-footer'
</script>

<template>
  <div class="font-[Inter] min-h-screen grid grid-rows-[auto, 1fr, auto]">
    <SiteHeader />
    <main class="container min-h-[calc(100dvh-184px)] mx-auto">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
