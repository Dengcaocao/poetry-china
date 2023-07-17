import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface IPoetry {
  title: string,
  author: string,
  rhythmic: string,
  notes: string[],
  paragraphs: string[]
}

export const usePoetryStore = defineStore('poetry', () => {
  const poetryIndex = ref(0)
  const title = ref('')
  const poetryList = ref<IPoetry[]>([])

  const poetry = computed(() => poetryList.value[poetryIndex.value])

  const changeIndex = (type: 'last' | 'next') => {
    type === 'next' ? poetryIndex.value++ : poetryIndex.value--
  }

  const changeTitle = (data: string) => title.value = data

  const changePoetryList = (data: any) => {
    poetryList.value = data
  }

  return {
    poetryIndex,
    title,
    poetryList,
    poetry,
    changeIndex,
    changeTitle,
    changePoetryList
  }
})
