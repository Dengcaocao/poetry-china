<template>
  <Layout>
    <div class="layout">
      <Poetry />
      <NextData type="last" />
      <NextData type="next" />
    </div>
  </Layout>
  <Sider />
</template>

<script setup lang="ts">
import Layout from '@/components/layout/index.vue'
import Poetry from '@/views/index/components/poetry.vue'
import NextData from '@/views/index/components/nextData.vue'
import Sider from '@/components/sider/index.vue'
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.layout {
  position: relative;
  width: 100%;
  height: 100%;
  color: $text-color;
  overflow-y: auto;
}
</style>
