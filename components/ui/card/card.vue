<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  item: Product
}>()

const sale = computed(() => {
  return props.item?.oldPrice ? (props.item.newPrice * 100) / props.item.oldPrice : 0
})
</script>

<template>
  <div>
    <div class="rect-img-container">
      <img
        class="rect-img"
        :src="props.item.image"
        :alt="props.item.name"
      >
      <div v-if="sale">
        {{ sale }}
      </div>
    </div>
    <div><span>{{ props.item.newPrice }}</span><span v-if="sale">{{ props.item.oldPrice }}</span></div>
    <p>{{ props.item.brand }}</p>
    <p :v-html="props.item.name" />
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
}

.rect-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
