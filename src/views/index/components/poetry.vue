<template>
  <div class="content-box">
    <div class="poetry">
      <div class="title">
        {{poetry?.title}}
        <i class="icon iconfont icon-shengyin" @click="readAloud"></i>
      </div>
      <div class="author">{{poetry?.author}}</div>
      <p class="content" v-for="item in poetry?.paragraphs" :key="item">{{item}}</p>
    </div>
    <div class="annotate">
      <div class="title">[注解]</div>
      <p v-for="(item, index) in props.poetry?.notes" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  poetry: poetryType | undefined
}>()

export interface poetryType {
  title: string
  paragraphs: string[]
  author: string
  rhythmic?: string
  notes: string[]
}

const content = computed(() => {
  const { title, author, paragraphs } = props.poetry as poetryType
  return title + author + paragraphs
})

const readAloud = () => {
  const utterThis = new SpeechSynthesisUtterance(content.value)
  utterThis.lang = 'zh-CN'
  speechSynthesis.speak(utterThis)
}
</script>

<style scoped lang="scss">
.content-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 750px;
  margin: 0 auto;
}
.poetry {
  padding: 20px;
  margin-top: 6px;
  .title {
    font-size: 28px;
    .icon {
      font-size: 28px;
      font-weight: 800;
    }
  }
  .author {
    font-size: 16px;
    opacity: 0.6;
  }
  .content {
    padding: 8px 0;
    font-size: 22px;
    opacity: 0.8;
  }
}
.annotate {
  .title {
    font-weight: 400;
  }
}
</style>
