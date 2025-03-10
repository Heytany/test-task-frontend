<script lang="ts" setup>
import {computed} from "vue";
import { getNoun } from '~/utils/utils'
const runtimeConfig = useRuntimeConfig()
import { useApplicationStore } from '~/store/application'
import { storeToRefs } from 'pinia'

const store = useApplicationStore()
const { stashCounter } = storeToRefs(store)

const productsCount = computed(() => {
  return `${stashCounter.value} ${getNoun(stashCounter.value,'товар','товара','товаров')}`
})
</script>

<template>
  <header class="pointer-events-auto backdrop-blur-sm sticky top-0 z-[50] w-full px-[40px] py-[22px] shadow-xl gap-[10px] flex items-center justify-between">
    <NuxtLink
      class="font-bold text-[32px]"
      to="/"
    >
      {{ runtimeConfig.public.BRAND_NAME }}
    </NuxtLink>
    <div class="text-[14px] gap-[10px] flex items-center justify-center pr-[85px]">
      <Icon
        name="material-symbols:shopping-basket-outline"
        class="text-[32px]"
      />  {{productsCount}}
    </div>
  </header>
</template>
