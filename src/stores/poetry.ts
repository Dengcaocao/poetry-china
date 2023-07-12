import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import poetryData from 'chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-1-juan.json'

export const usePoetryStore = defineStore('poetry', () => {
  const poetryIndex = ref(0)
  const poetryList = reactive(poetryData)

  const poetry = computed(() => poetryList[poetryIndex.value])

  const changeIndex = (type: 'last' | 'next') => {
    type === 'next' ? poetryIndex.value++ : poetryIndex.value--
  }

  return { poetryIndex, poetryList, poetry, changeIndex }
})
