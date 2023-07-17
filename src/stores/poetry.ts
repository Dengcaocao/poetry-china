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
  const typeIndex = ref(0)
  const poetryIndex = ref(0)
  const title = ref('')
  const poetryList = ref<IPoetry[]>([])

  const poetry = computed(() => poetryList.value[poetryIndex.value])

  const changeTypeIndex = (index: number) => typeIndex.value = index 

  const changeIndex = (index?: number) => {
    index ? poetryIndex.value += index : poetryIndex.value = 0
  }

  const changeTitle = (data: string) => title.value = data

  const changePoetryList = (data: any) => {
    poetryList.value = data
  }

  return {
    typeIndex,
    poetryIndex,
    title,
    poetryList,
    poetry,
    changeTypeIndex,
    changeIndex,
    changeTitle,
    changePoetryList
  }
})
