<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
</script>
<template>
  <footer
      class="w-full px-[40px] py-[22px] shadow-xl gap-[10px] flex items-center justify-between bg-black text-white"
  >
    <NuxtLink class="font-bold text-[32px]" to="/">{{ runtimeConfig.public.BRAND_NAME }}</NuxtLink>
    <div class="text-[14px] pr-[97px]">
      Разработчик <br>
      <a href="https://career.habr.com/heytan" class="underline hover:no-underline" target="_blank">Алексей Артемьев</a>
    </div>
  </footer>
</template>