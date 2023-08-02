<template>
  <Layout>
    <div class="container">
      <div class="content">
        <div class="poetry">
          <p
            v-for="(item, index) in randomSentence"
            :key="index"
            :class="{hide: index === hideIndex}"
            >
            {{item + '，'}}
          </p>
        </div>
        <div class="info">出自{{poetry.author}}《{{poetry.title}}》</div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Layout from '@/components/layout/index.vue'
import poetryData from '@/assets/poetry'

const poetry = ref<any>({})
const randomSentence = ref<string[]>([])
const hideIndex = ref(0)

const init = () => {
  // 过滤
  const arr = poetryData.filter(item => !['论语'].includes(item.title))
  const poetryTypeIndex = Math.floor(Math.random() * arr.length)
  const poetryType = arr[poetryTypeIndex]
  const poetryIndex = Math.floor(Math.random() * poetryType.data.length)
  poetry.value = poetryType.data[poetryIndex]
  const index = Math.floor(Math.random() * poetry.value.paragraphs.length)
  randomSentence.value = poetry.value.paragraphs[index].split('，')
  randomSentence.value.length < 2 && init()
}

const getHideSentence = () => hideIndex.value = Math.floor(Math.random() * randomSentence.value.length)

onMounted(() => {
  init()
  getHideSentence()
})
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .content {
    max-width: 750px;
    min-width: 750px;
    padding: 40px;
    box-sizing: border-box;
    border-radius: $radius-large;
    background-color: #fff;
    box-shadow: $shadow-middle;
    .poetry {
      display: flex;
      font-size: 26px;
      color: $text-color;
    }
  }
}
</style>
