<template>
  <div class="container">
    <div>
      <div class="tab-title">
            {{ tabNative }}
      </div>
  
      <Product></Product>
      <!-- <h1 class="title">leung_hardware 学习 nuxt</h1>
      <div class="titl2">test less</div>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>
import { state } from 'vuex'
export default {
  props: ['native'],
  computed: {
    tabNative() {
      return this.$store.state.tabNative
    },
  },
}
</script>

<style lang="less" scoped>
.tab-title{
  height: 80px;
  width: 256px;
  background: #1890FF;
  .flex-center();
    color: #ffffff;
    font-size: 32px;
}
.titl2 {
  color: @theme-color;
}
.container {
  margin: 0 auto;
  // min-height: 50vh;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
