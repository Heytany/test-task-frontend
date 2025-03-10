<script setup lang="ts">
import { ref, computed } from 'vue'
import { apiPath } from '~/utils/api'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { useToast } from '~/components/ui/toast/use-toast'

const { toast } = useToast()
const products = ref()

products.value = await useAsyncData('products', async () => {
  const { products } = await $fetch(apiPath.getProducts)
  return products
})

const renderCards = computed(() => {
  return products.value?.data?.length
})

function toaster() {
  toast({
    title: 'Scheduled: Catch up',
    description: 'Example',
  })
}
</script>

<template>
  <div>
    <h1 class="font-bold text-[32px]">
      Тестовая задача
    </h1>
    <div
      v-if="renderCards"
      class="grid grid-cols-6 gap-4"
    >
      <Card
        v-for="(item, index) in products.data"
        :key="index"
        :item="item"
      />
    </div>
    <Button
      variant="outline"
      @click="toaster"
    >
      Example
    </Button>
  </div>
</template>
