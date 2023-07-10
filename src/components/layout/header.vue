<template>
  <header>
    <a class="title" href="https://www.baidu.com">
      <img src="https://avatars.githubusercontent.com/u/30764933?s=200&v=4" alt="诗词中国🇨🇳" />
      <h3>Poetry China</h3>
    </a>
  </header>
</template>

<style scoped lang="scss">
@import '../../assets/main.scss';
header {
  height: 68px;
  padding: 20px 30px;
  .title {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 32px;
    img {
      width: 64px;
      height: 64px;
      background-color: #fafafa;
      margin-right: 12px;
    }
    h3 {
      color: $theme-color;
      font-weight: 600;
    }
  }
}
</style>
