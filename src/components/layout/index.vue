<template>
  <Header></Header>
  <Main>
    <slot></slot>
  </Main>
  <Footer />
</template>
<script setup lang="ts">
import Header from './header.vue'
import Main from './main.vue'
import Footer from './footer.vue'
</script>