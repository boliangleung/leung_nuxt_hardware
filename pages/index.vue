<template>
  <div v-cloak class="container">
    <div>
      <Product></Product>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tabNative() {
      return this.$store.state.tabNative
    },
  },
}
</script>

<style lang="less" scoped>
.tab-title {
  height: 80px;
  width: 256px;
  margin-left: 30px;
  background: #1890ff;
  .flex-center();
  color: #ffffff;
  font-size: 32px;
}
.titl2 {
  color: @theme-color;
}
.container {
  margin: 0 auto;
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
