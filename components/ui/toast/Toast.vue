<script setup lang="ts">
import type { ToastRootEmits } from 'reka-ui'
import { useForwardPropsEmits, ToastRoot } from 'reka-ui'

import { computed } from 'vue'
import type { ToastProps } from '.'
import { toastVariants } from '.'
import { cn } from '~/utils/utils'

const props = defineProps<ToastProps>()

const emits = defineEmits<ToastRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ToastRoot
    v-bind="forwarded"
    :class="cn(toastVariants({ variant }), props.class)"
    @update:open="onOpenChange"
  >
    <slot />
  </ToastRoot>
</template>
