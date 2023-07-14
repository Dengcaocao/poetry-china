<template>
  <div class="sider" :class="{close: isCollapsed}">
    <i class="collapse iconfont icon-caidan" v-if="isCollapsed" @click="handleCollapseStatus"></i>
    <div class="header">
      <div class="title">花间集 第一章</div>
      <i class="iconfont icon-guanbi1" @click="handleCollapseStatus"></i>
    </div>
    <div class="list">
      <div
        class="list-item"
        v-for="(item, index) in store.poetryList"
        :key="index"
        :class="{active: store.poetryIndex === index}">
        <p class="title">{{item.title}}</p>
        <p class="author">{{item.author}}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePoetryStore } from '@/stores/poetry'
const store = usePoetryStore()

const isCollapsed = ref(true)
const handleCollapseStatus = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.sider {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  width: 300px;
  transform: 0.2s;
  background-color: $gey-color-bg;
  &.close {
    width: 0;
  }
  .collapse {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(100%, -50%);
    background-color: $theme-color-bg;
    font-size: 20px;
    font-weight: bold;
    color: $theme-color;
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 0 6px 6px 0;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    padding: 15px;
    box-sizing: border-box;
    .title {
      font-size: 18px;
      font-weight: 500;
    }
    .iconfont {
      cursor: pointer;
    }
  }
  .list {
    height: calc(100vh - 55px);
    overflow-y: auto;
    padding: 0 15px;
    .list-item {
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 10px;
      background-color: #fff;
      &.active {
        background-color: $theme-color-bg;
      }
      .title {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 6px;
      }
      .author {
        font-size: 14px;
        color: rgba($color: $text-color, $alpha: 0.6);
      }
    }
  }
}
</style>
