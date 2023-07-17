<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { usePoetryStore } from '@/stores/poetry'
import poetryData from './assets/poetry'

const store = usePoetryStore()

const init = () => {
  const { title, data } = poetryData[0]
  store.changeTitle(title)
  store.changePoetryList(data)
}
onMounted(init)
</script>
