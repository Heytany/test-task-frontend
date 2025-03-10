<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  item: Product
}>()

const sale = computed(() => {
  return props.item?.oldPrice ? Math.round((props.item.newPrice * 100) / props.item.oldPrice) : 0
})
</script>

<template>
  <div class="font-[Golos_Text] text-[12px]">
    <div class="rect-img-container overflow-hidden rounded-[12px] mb-[12px]">
      <img
        class="rect-img"
        :src="props.item.image"
        :alt="props.item.name"
      >
      <div
        v-if="sale"
        class="absolute bottom-2 left-2 rounded-[4px] px-[6px] py-[3px] bg-white text-pink-500"
      >
        {{ sale }}%
      </div>
    </div>
    <div class="mb-[3px] flex flex-wrap items-end gap-2">
      <span class="font-bold text-[16px]">{{ props.item.newPrice }} ₽</span>
      <span
        v-if="sale"
        class=" line-through text-gray-300"
      >{{ props.item.oldPrice }} ₽</span>
    </div>
    <p class="mb-[3px] font-semibold">
      {{ props.item.brand }}
    </p>
    <p class="line-clamp-2">
      {{ props.item.name }}
    </p>
  </div>
</template>

<style scoped>
.rect-img-container {
  position: relative;
}

.rect-img-container::after {
  content: "";
  display: block;
  padding-bottom: 100%;
  max-height: 201px;
}

.rect-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
