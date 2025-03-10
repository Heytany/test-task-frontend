<template>
  <div>
    <h1>Тестовая задача</h1>
    <div class="text-[14px]">
      <pre>{{ products }}</pre>
    </div>
    <Button
      variant="outline"
      @click="toaster"
    >
      Delete
    </Button>
  </div>
</template>

<script setup lang="ts">
import { useApplicationStore } from '~/store/application'
import { apiPath } from '~/utils/api'
import { Button } from '~/components/ui/button'
import { useToast } from '~/components/ui/toast/use-toast'

const { welcome } = useApplicationStore()
const { toast } = useToast()

const products = await useAsyncData('products', async () => {
  const { products } = await $fetch(apiPath.getProducts)
  return products
})

function toaster() {
  console.log('wadawdwa')
  toast({
    title: 'Scheduled: Catch up',
    description: 'Friday, February 10, 2023 at 5:57 PM',
  })
}
</script>
