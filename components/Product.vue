<template>
  <div class="tab">
    <a-menu v-model="current" mode="vertical" style="width: 256px" theme="dark">
      <a-menu-item v-for="target in tabList" :key="target.key">
        <a-icon :type="target.type" />{{ target.title }}
      </a-menu-item>
    </a-menu>
    <div class="product">
      <div class="product-detail">
        <p>
          <!-- {{ selectedTarget.title }} -->
          <img :src="selectedTarget.logo" alt="" />
        </p>
        <div>
          {{ selectedTarget.detail }}
        </div>
      </div>
      <div class="product-list">
        <div
          v-for="(target, index) in selectedTarget.productList"
          :key="index"
          class="product-item"
        >
          <img :src="target.img" alt="" />
          <p>{{ target.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { layoutMockJson } from '@/assets/js/layoutMockJson'
export default {
  data() {
    return {
      current: ['1'],
      tabList: Object.freeze(layoutMockJson),
    }
  },
  computed: {
    selectedTarget() {
      return this.tabList.find((item) => item.key === this.current[0])
    },
  },
  methods: {},
}
</script>
<style lang="less" scoped>
.tab {
  margin-left: 20px;
  display: flex;
}
li.ant-menu-item,
li.ant-menu-submenu.ant-menu-submenu-vertical,
.ant-menu-submenu-title {
  height: 60px !important;
  line-height: 60px !important;
}
.product {
  border: 1px solid @gray-color;
  flex: 1;
  overflow: auto;
  margin: 20px 20px 20px 60px;
  height: 700px;
  &-detail {
    min-height: 120px;
    background: @gray-color;
    padding: 20px;
    p {
      font-size: 28px;
      font-weight: 600;
    }
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    min-width: 200px;
    min-height: 200px;
    margin: 20px 0 0 20px;
    .flex-center();
    flex-direction: column;
    border: 1px solid @gray-color;
    img {
      height: 100px;
      width: 100px;
      margin-bottom: 10px;
    }
    &:hover {
      color: @theme-color;
      img {
        transform: scale(1.2);
        transition-duration: 0.08s;
      }
    }
  }
}
</style>
