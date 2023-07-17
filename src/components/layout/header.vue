<template>
  <header>
    <a class="title" href="https://www.baidu.com">
      <img src="https://avatars.githubusercontent.com/u/30764933?s=200&v=4" alt="诗词中国🇨🇳" />
      <h3>Poetry China</h3>
    </a>
    <div class="action">
      <div class="item chapter" @click="router.push('poetry')">{{poetryStore.title}}</div>
      <div class="item dictation">
        <i
          class="iconfont icon-zitiyulan"
          :class="{active: store.isDictation}"
          @click="status = !status">
        </i>
        <Transition name="menu-move">
          <div class="menu" v-if="status">
            <p class="tips">是否开启默写</p>
            <div class="switch-box">
              <Switch v-model:value="store.isDictation" />
              <p>默写已{{store.isDictation ? '开启' : '关闭'}}</p>
            </div>
            <template v-if="store.isDictation">
              <p class="tips">默写模式</p>
              <div class="selector">
                <select>
                  <option :value="0">全部隐藏</option>
                  <option :value="1">显示标点符号</option>
                </select>
              </div>
            </template>
          </div>
        </Transition>
      </div>
      <div class="item annotate">
        <i
          class="iconfont icon-zhongwenxianshi" 
          :class="{active: store.isAnnotate}"
          @click="store.handleAnnotateStatus">
        </i>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePoetryStore } from '@/stores/poetry'
import { useConfigStore } from '@/stores/config'
import Switch from '@/components/swtich/index.vue'

const router = useRouter()
const store = useConfigStore()
const poetryStore = usePoetryStore()

const status = ref(false)
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
    height: 100%;
    padding: $gap-large;
    font-size: 18px;
    box-sizing: border-box;
    border-radius: $radius-large;
    background-color: #fff;
    box-shadow: $shadow-small;
    .chapter {
      padding: 6px 12px;
      margin-right: $gap-middle;
    }
    .item {
      border-radius: $radius-middle;
      &:hover.chapter,
      &:hover .iconfont {
        color: #fff !important;
        cursor: pointer;
        background-color: $theme-color-bg-deep;
      }
      .iconfont {
        padding: 2px 4px;
        margin-left: 6px;
        color: $text-color;
        border-radius: $radius-middle;
        font-size: 22px;
        &.active {
          color: $theme-color !important;
        }
      }
    }
    .dictation {
      position: relative;
      .menu {
        position: absolute;
        top: 33px;
        left: 50%;
        z-index: 88;
        transform: translateX(-50%);
        width: 180px;
        padding: $gap-large;
        border-radius: $radius-middle;
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: $shadow-large;
        .tips {
          font-size: 14px;
          margin-bottom: $gap-middle;
        }
        .switch-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          margin-bottom: $gap-large;
        }
        .selector {
          select {
            outline: none;
            width: 80%;
            height: 30px;
            border: none;
            box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 2.16);
          }
        }
      }
    }
  }
}
.menu-move-enter-active {
  animation: moveEnter 0.2s;
}
.menu-move-leave-active {
  animation: moveLeave 0.2s;
}
@keyframes moveEnter {
  0% {
    top: 66px;
    opacity: 0;
  }
  100% {
    top: 33px;
    opacity: 1;
  }
}
@keyframes moveLeave {
  0% {
    top: 33px;
    opacity: 1;
  }
  100% {
    top: 66px;
    opacity: 0;
  }
}
</style>
