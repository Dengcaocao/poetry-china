<template>
  <div class="type">
    <header>
      <i class="iconfont icon-guanbi1" @click="router.push('/')"></i>
    </header>
    <div class="list">
      <div class="item"
        v-for="(item, index) in poetryData"
        :key="index"
        :class="{active: index === store.typeIndex}"
        @click="pickPoetry(item.title, item.data, index)">
        <div class="title">{{item.title}}</div>
        <div class="num">{{item.data.length}}首</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { usePoetryStore } from '@/stores/poetry'
import poetryData from '@/assets/poetry'

const router = useRouter()
const store = usePoetryStore()

const pickPoetry = (title: string, data: any, index: number) => {
  // store.$reset()
  store.changeTypeIndex(index)
  store.changeIndex()
  store.changePoetryList(data)
  store.changeTitle(title)
  router.push('/')
}
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.type {
  header {
    height: 68px;
    line-height: 68px;
    text-align: right;
    padding: 0 $gap-large;
    cursor: pointer;
    color: $text-color;
  }
  .list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: $gap-middle;
    .item {
      padding: $gap-large;
      border-radius: $radius-middle;
      line-height: 30px;
      cursor: pointer;
      background-color: rgba($color: #fff, $alpha: 0.3);
      box-shadow: $shadow-large;
      &.active {
        background-color: $theme-color-bg-deep !important;
        .title,.num {
          color: #fff !important;
        }
      }
      &:hover {
        background-color: rgba($color: #fff, $alpha: 1);
        .title {
          color: $theme-color;
        }
      }
      .title {
        font-size: 18px;
      }
      .desc {
        color: rgba($color: $text-color, $alpha: 0.8);
      }
      .num {
        color: $text-color;
        font-weight: 500;
      }
    }
  }
}
</style>
