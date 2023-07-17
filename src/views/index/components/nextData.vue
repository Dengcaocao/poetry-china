<template>
  <div
    v-if="isShow"
    class="preview"
    :class="type"
    @click="store.changeIndex(props.type === 'next' ? 1 : -1)">
    <div class="info">
      <div class="title">{{poetry.title}}</div>
      <div class="author">{{poetry.author}}</div>
    </div>
    <i class="icon iconfont icon-fanhui"></i>
  </div>
</template>

<script setup lang="ts">
import { usePoetryStore } from '@/stores/poetry'
import { computed, reactive, watch } from 'vue'

const props = defineProps<{
  type: 'last' | 'next'
}>()

const store = usePoetryStore()

interface poetryInfo {
  title: string,
  author: string
}

let poetry = reactive<poetryInfo>({
  title: '',
  author: ''
})

const isShow = computed(() => {
  return props.type === 'last' ? store.poetryIndex >= 1 : store.poetryIndex < store.poetryList.length - 1
})

const initInfo = () => {
  const constant = props.type === 'last' ? -1 : 1
  const { title, author } = store.poetryList[store.poetryIndex + constant] || { title: '', author: '' }
  poetry = {
    title,
    author
  }
}
initInfo()

watch(() => store.poetryIndex, initInfo)
</script>

<style scoped lang="scss">
.preview {
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  text-align: right;
  padding: 10px 20px;
  user-select: none;
  cursor: pointer;
  .info {
    margin-right: 10px;
    font-weight: 400;
    .title {
      font-size: 18px;
      opacity: 0.8;
    }
    .author {
      opacity: 0.7;
      font-size: 14px;
    }
  }
  &:hover {
    .title {
      opacity: 1;
    }
    .author {
    opacity: 0.9;
  }
  }
  .icon {
    transform: rotate(180deg);
  }
}
.preview.last {
  flex-direction: row-reverse;
  left: 20px;
  text-align: left;
  .info {
    margin-left: 10px;
  }
  .icon {
    transform: rotate(0deg);
  }
}
.preview.next {
  right: 20px;
}
</style>
