<template>
  <div class="preview" :class="props.type">
    <div class="info">
      <div class="title">{{poetry.title}}</div>
      <div class="author">{{poetry.author}}</div>
    </div>
    <i class="icon iconfont icon-fanhui"></i>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: 'last' | 'next',
  poetry: {
    title: string,
    author: string
  }
}>()
</script>

<style scoped lang="scss">
.preview {
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  text-align: right;
  padding: 10px 20px;
  opacity: 0.6;
  cursor: pointer;
  .info {
    margin-right: 10px;
    font-weight: 400;
    .title {
      font-size: 18px;
    }
    .author {
      font-size: 14px;
    }
  }
  .icon {
    transform: rotate(180deg);
  }
}
.preview:hover {
  opacity: 1;
  .author {
    opacity: 0.9;
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
