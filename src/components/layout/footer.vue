<template>
  <footer>
    <i class="iconfont icon-github-fill" @click="jumpStore"></i>
    <i class="iconfont icon-gongzhonghao"></i>
    <i class="iconfont icon-shejiaotubiao-09"></i>
    <i class="iconfont icon-kafei"></i>
    <span>@ Poetry China</span>
  </footer>
</template>

<script setup lang="ts">
const jumpStore = () => window.open('https://github.com/Dengcaocao/poetry-china')
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $text-color;
  margin-bottom: $gap-large;
  i,span {
    margin-left: $gap-middle;
    cursor: pointer;
  }
  i {
    font-size: 20px;
  }
  i:nth-child(1):hover {
    color: #000;
  }
  i:nth-child(2):hover {
    color: #6dcc7f;
  }
  i:nth-child(3):hover {
    color: #469de2;
  }
  i:nth-child(4):hover {
    color: #f9d9a2;
  }
}
</style>
