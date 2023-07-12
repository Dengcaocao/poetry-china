<template>
  <div
    class="switch"
    :class="{active: value}"
    @click="updateValue"></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: boolean
}>()

const emit = defineEmits(['update:value'])
const updateValue = () => emit('update:value', !props.value)
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.switch {
  position: relative;
  width: 48px;
  height: 24px;
  border-radius: 24px;
  cursor: pointer;
  transition: all .2s;
  background-color: #d2d5da;
}
.switch::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translate(4px, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fff;
}
.switch.active {
  background-color: $theme-color;
  &::after {
    transform: translate(28px, -50%);
  }
}
</style>
