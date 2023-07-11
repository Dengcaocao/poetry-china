<template>
  <Layout>
    <div class="layout">
      <div class="card">
        <div class="poetry">
          <div class="title">{{poetry?.title}}</div>
          <div class="author">{{poetry?.author}}</div>
          <p class="content" v-for="item in poetry?.paragraphs" :key="item">{{item}}</p>
        </div>
        <div class="info">
          <div class="info-item">
            <p class="info-data">1</p>
            <p class="info-title">时间</p>
          </div>
          <div class="info-item">
            <p class="info-data">1</p>
            <p class="info-title">输入数</p>
          </div>
          <div class="info-item">
            <p class="info-data">1</p>
            <p class="info-title">正确数</p>
          </div>
          <div class="info-item">
            <p class="info-data">1</p>
            <p class="info-title">正确率</p>
          </div>
        </div>
      </div>
      <div class="last" v-if="curIndex > 1" @click="handleUpdatePoetry('last')">
        <div class="icon">{{'<--'}}</div>
        <div class="info">
          <div class="title">{{nextPoetryInfo?.title}}</div>
          <div class="author">{{nextPoetryInfo?.author}}</div>
        </div>
      </div>
      <div class="next" v-if="curIndex < poetryList.length" @click="handleUpdatePoetry('next')">
        <div class="info">
          <div class="title">{{nextPoetryInfo?.title}}</div>
          <div class="author">{{nextPoetryInfo?.author}}</div>
        </div>
        <div class="icon">--></div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import poetryData from 'chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-1-juan.json'
import Layout from '@/components/layout/index.vue'

interface poetryType {
  title: string
  paragraphs: string[]
  author: string
  rhythmic: string
  notes: string[]
}

let curIndex = ref(0)
const poetryList = ref<poetryType[]>(poetryData)
const poetry = ref<poetryType | null>(null)
poetry.value = poetryList.value[curIndex.value]

interface poetryInfo {
  title?: string,
  author?: string
}

let lastPoetryInfo = reactive<poetryInfo>({})
let nextPoetryInfo = reactive<poetryInfo>({})
const getNextPoetryInfo = (type?: string) => {
  const index = type === 'last' ? --curIndex.value : ++curIndex.value
  const { title, author } = poetryList.value[index]
  nextPoetryInfo = {
    ...nextPoetryInfo,
    title,
    author
  }
}
getNextPoetryInfo()

const handleUpdatePoetry = (type: string) => {
  switch (type) {
    case 'last':
      poetry.value = poetryList.value[--curIndex.value]
      break
  
    default:
      poetry.value = poetryList.value[++curIndex.value]
      break
  }
  getNextPoetryInfo(type)
}
</script>

<style scoped lang="scss">
.layout {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #4d5562;
}
.card {
  min-width: 600px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.08),
              0 9px 28px 0 rgba(0, 0, 0, 0.05),
              0 12px 48px 16px rgba(0, 0, 0, 0.03);
  .poetry {
    padding: 20px;
    .title {
      font-size: 32px;
    }
    .author {
      font-size: 20px;
      opacity: 0.6;
    }
    .content {
      padding: 8px 0;
      font-size: 24px;
      opacity: 0.8;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 10px 10px;
    font-size: 14px;
    background-color: #fff;
    .info-item {
      flex: 1;
      padding: 20px 30px;
      font-weight: 500;
      p {
        line-height: 36px;
      }
      .info-data {
        opacity: 0.4;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
      .info-title {
        opacity: 0.6;
      }
    }
  }
}
.next,.last {
  display: flex;
  align-items: center;
  position: absolute;
  padding: 10px 20px;
  cursor: pointer;
  .info {
    font-weight: 400;
    opacity: 0.6;
    .title {
      font-size: 18px;
    }
    .author {
      font-size: 14px;
    }
  }
  .info:hover {
    opacity: 1;
    .author {
      opacity: 0.8;
    }
  }
  .icon{}
}
.next {
  right: 20px;
  top: 0;
  text-align: right;
  .info {
    margin-right: 10px;
  }
}
.last {
  left: 20px;
  top: 0;
  .info {
    margin-left: 10px;
  }
}
</style>
