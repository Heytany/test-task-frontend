<template>
  <div class="flex items-center justify-center text-center ">
    <div>
      <div class="text-2xl ">
        {{ believe }} catalog
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApplicationStore } from '~/store/application'
import { apiPath } from '~/utils/api'

const { welcome } = useApplicationStore()

const { believe } = await $fetch(apiPath.hello)
</script>
