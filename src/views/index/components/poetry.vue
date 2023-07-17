<template>
  <div class="content-box">
    <div class="poetry">
      <div class="title">
        {{poetry.title}}
        <i class="icon iconfont icon-shengyin" @click="readAloud"></i>
      </div>
      <div class="author">{{poetry.author}}</div>
      <div class="content">
        <p class="row" v-for="item in poetry.paragraphs" :key="item">
          <span
            class="char-box"
            :class="{active: configStore.isDictation}"
            v-for="(char, index) in item"
            :key="char + index">
            <span class="char">
              {{char}}
            </span>
            <span class="line"></span>
          </span>
        </p>
        <textarea
          v-model="poetryStr"
          v-if="configStore.isDictation"
          :rows="poetry.paragraphs.length"
          :maxlength="poetry.paragraphs.join('').length">
        </textarea>
      </div>
    </div>
    <div class="annotate" v-if="configStore.isAnnotate">
      <div class="title">[注解]</div>
      <p>{{ poetry.notes.join('') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs, watch } from 'vue'
import { usePoetryStore } from '@/stores/poetry'
import { useConfigStore } from '@/stores/config'

const store = usePoetryStore()
const configStore = useConfigStore()
const { poetry } = toRefs(store)

const poetryStr = ref('')

const content = computed(() => {
  const { title, author, paragraphs } = poetry.value
  return title + author + paragraphs
})

const addStrIndex = computed(() => {
  let lastIndex = 0
  return poetry.value.paragraphs
    .map((item, index) => {
      lastIndex = item.length + lastIndex + (index && 1)
      return lastIndex
    })
})

watch(poetryStr, str => {
  const index = addStrIndex.value
    .reverse()
    .find(item => {
      return str.length >= item
    })
  if (!index) return
  const poetryCharArr = str.split('');
  /\n/.test(poetryCharArr[index]) || poetryCharArr.splice(index, 0, '\n')
  poetryStr.value = poetryCharArr.join('')
})

const readAloud = () => {
  const utterThis = new SpeechSynthesisUtterance(content.value)
  utterThis.lang = 'zh-CN'
  speechSynthesis.speak(utterThis)
}
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.content-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 750px;
  margin: 0 auto;
}
.poetry {
  padding: 20px;
  margin-top: 6px;
  .title {
    font-size: 28px;
    .icon {
      font-size: 28px;
      font-weight: 800;
    }
  }
  .author {
    font-size: 16px;
    opacity: 0.6;
  }
  .content {
    position: relative;
    textarea {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: -2px;
      bottom: -46px;
      outline: none;
      border-color: transparent;
      font-size: 22px;
      line-height: 46px;
      letter-spacing: 4px;
      color: $text-color;
      background-color: transparent;
    }
  }
  .row {
    font-size: 22px;
    line-height: 46px;
    opacity: 0.8;
    .char-box {
      position: relative;
      letter-spacing: 4px;
      .line {
        position: absolute;
        left: 50%;
        bottom: -2px;
        transform: translateX(-50%);
        width: 100%;
        height: 2px;
        background-color: $text-color;
      }
      &.active {
        .char {
          opacity: 0;
        }
        .line {
          width: 90%;
        }
      }
    }
  }
}
.annotate {
  align-self: flex-start;
  .title {
    font-weight: 400;
  }
}
</style>
