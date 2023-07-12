<template>
  <Layout>
    <div class="layout">
      <Poetry :poetry="poetry" />
      <NextData type="last" :poetry="nextPoetryInfo" />
      <NextData type="next" :poetry="nextPoetryInfo" />
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import poetryData from 'chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-1-juan.json'
import Layout from '@/components/layout/index.vue'
import Poetry, { type poetryType } from '@/views/index/components/poetry.vue'
import NextData from '@/views/index/components/nextData.vue'

let curIndex = ref(0)
const poetryList = ref<poetryType[]>(poetryData)
const poetry = ref<poetryType>()
poetry.value = poetryList.value[curIndex.value]

interface poetryInfo {
  title: string,
  author: string
}

let nextPoetryInfo = reactive<poetryInfo>({
  title: '',
  author: ''
})
const getNextPoetryInfo = (type?: string) => {
  const index = type === 'last' ? --curIndex.value : ++curIndex.value
  const { title, author } = poetryList.value[index]
  nextPoetryInfo = {
    ...nextPoetryInfo,
    title,
    author
  }
}
getNextPoetryInfo()

const handleUpdatePoetry = (type: string) => {
  switch (type) {
    case 'last':
      poetry.value = poetryList.value[--curIndex.value]
      break
  
    default:
      poetry.value = poetryList.value[++curIndex.value]
      break
  }
  getNextPoetryInfo(type)
}
</script>

<style scoped lang="scss">
.layout {
  position: relative;
  width: 100%;
  height: 100%;
  color: #4d5562;
}
</style>
