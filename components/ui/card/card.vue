<script setup lang="ts">
import { computed } from 'vue'
import { useToast } from '~/components/ui/toast/use-toast'
import { Button } from '~/components/ui/button'
import { useApplicationStore } from '~/store/application'
const { AddToStash } = useApplicationStore()

const props = defineProps<{
  item: Product
}>()

const sale = computed(() => {
  return props.item?.oldPrice ? Math.round((props.item.newPrice * 100) / props.item.oldPrice) : 0
})

const { toast } = useToast()

function AddProduct() {
  AddToStash()
  toast({
    title: 'Добавлен товар',
    description: props.item.name,
  })
}
</script>

<template>
  <div class="font-[Golos_Text] text-[12px] relative card">
    <NuxtLink
        class="card__link"
        :to="props.item.url"
    />
    <div class="card__img-container overflow-hidden rounded-[12px] mb-[12px]">
      <img
        class="card__img"
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
    <Button
        variant="secondary"
        @click="AddProduct"
        class="card__btn"
    >
      В корзину
    </Button>
  </div>
</template>

<style scoped>
.card__img-container {
  position: relative;
}

.card__img-container::after {
  content: "";
  display: block;
  padding-bottom: 100%;
  max-height: 201px;
}

.card__img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card:hover{
  z-index: 2;
}

.card:hover:after{
  content: '';
  position: absolute;
  inset: -24px -24px -88px -24px;
  background: white;
  border-radius: 16px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  z-index: -1;
}

.card__btn{
  position: absolute;
  bottom: -52px;
  display: none;
  cursor: pointer;
  background: black;
  color: white;
  z-index: 2;
}

.card__btn:hover{
  background: gray;
}

.card:hover .card__btn{
  display: block;
}

.card__link{
  position: absolute;
  inset: 0;
  z-index: 1;
}

.card:hover .card__link{
  inset: -24px -24px -88px -24px;
  border-radius: 16px;
}
</style>
