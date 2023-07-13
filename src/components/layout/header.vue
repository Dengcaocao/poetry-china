<template>
  <header>
    <a class="title" href="https://www.baidu.com">
      <img src="https://avatars.githubusercontent.com/u/30764933?s=200&v=4" alt="诗词中国🇨🇳" />
      <h3>Poetry China</h3>
    </a>
    <div class="action">
      <div class="item chapter">花间集 第一章</div>
      <div class="item dictation">
        <Switch v-model:value="store.isDictation" />
      </div>
      <div class="item annotate">开关注解</div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/stores/config'
import Switch from '@/components/swtich/index.vue'

const store = useConfigStore()
</script>

<style scoped lang="scss">
@import '../../assets/main.scss';
header {
  display: flex;
  justify-content: space-between;
  height: 68px;
  padding: 20px 30px;
  .title {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 32px;
    img {
      width: 48px;
      height: 48px;
      background-color: #fafafa;
      margin-right: 12px;
    }
    h3 {
      color: $theme-color;
      font-weight: 600;
    }
  }
  .action {
    display: flex;
    align-items: center;
    width: 600px;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.08),
              0 9px 28px 0 rgba(0, 0, 0, 0.05),
              0 12px 48px 16px rgba(0, 0, 0, 0.03);
    .item {
      padding: 0 8px;
    }
    .chapter {
      font-size: 18px;
    }
  }
}
</style>
