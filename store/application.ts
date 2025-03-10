import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * Хранилище приложения для управления глобальными состояниями.
 */
export const useApplicationStore = defineStore('application', () => {
  const stashCounter = ref(0)

  function AddToStash() {
    /**
     * Тут у нас должна быть связь с корзиной на сервере, отправка и обновление данных о товаре, все красиво и сепарированно
     */

    UpdateStashCounter(stashCounter.value + 1)
  }

  function UpdateStashCounter(payload:number) {
    stashCounter.value = payload
  }

  return {
    stashCounter,
    AddToStash,
  }
})
