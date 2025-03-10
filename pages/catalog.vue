<template>
  <div class="flex items-center justify-center text-center ">
    <h1>Тестовая задача</h1>
    <div class="text-[14px]">
      <pre>{{ products }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useApplicationStore} from '~/store/application'
import {apiPath} from '~/utils/api'

const {welcome} = useApplicationStore()

const products = await useAsyncData('products', async () => {
  const { products } = await $fetch(apiPath.getProducts)
  return products
})
</script>
