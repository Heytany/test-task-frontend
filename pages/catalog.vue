<script setup lang="ts">
import { ref, computed } from 'vue'
import { apiPath } from '~/utils/api'

import { Card } from '~/components/ui/card'

const products = ref()

products.value = await useAsyncData('products', async () => {
  const { products } = await $fetch(apiPath.getProducts)
  return products
})

const renderCards = computed(() => {
  return products.value?.data?.length
})
</script>

<template>
  <div class="mt-[32px] mb-[112px]">
    <h1 class="font-bold text-[32px] mb-[24px]">
      Тестовая задача
    </h1>
    <div
      v-if="renderCards"
      class="grid grid-cols-6 gap-[30px]"
    >
      <Card
        v-for="(item, index) in products.data"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>
