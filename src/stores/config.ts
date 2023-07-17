import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  const isDictation = ref(false)
  const isAnnotate = ref(true)

  const handleAnnotateStatus = () => isAnnotate.value = !isAnnotate.value

  return { isDictation, isAnnotate, handleAnnotateStatus }
})
