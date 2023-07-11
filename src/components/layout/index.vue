<template>
  <Header></Header>
  <Main>
    <slot></slot>
  </Main>
</template>
<script setup lang="ts">
import Header from './header.vue'
import Main from './main.vue'
</script>