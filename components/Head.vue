<template>
  <div class="title">
    <div class="name">北富联|NorthFull</div>
    <div class="tab">
      <a-menu v-model="current" mode="horizontal" @select="selectTab">
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper"
            ><a-icon type="setting" />产品中心</span
          >
          <a-menu-item-group title="NorthFull 优质系列">
            <a-menu-item
              v-for="(item, index) in productDetail"
              :key="'productList:' + index"
            >
              {{ item }}
            </a-menu-item>
          </a-menu-item-group>
          <!-- <a-menu-item-group title="Item 2">
          <a-menu-item key="productList:3"> Option 3 </a-menu-item>
          <a-menu-item key="productList:4"> Option 4 </a-menu-item>
        </a-menu-item-group> -->
        </a-sub-menu>
        <a-menu-item v-for="target in tabList" :key="target.key">
          <a-icon :type="target.type" />{{ target.title }}
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
const tabList = [
  {
    title: '首页',
    key: 'home',
    type: 'appstore',
  },
  {
    title: '公司简介',
    key: 'introduce',
    type: 'appstore',
  },
  {
    title: '产品中心',
    key: 'productList',
    type: 'setting',
  },
  {
    title: '企业动态',
    key: 'dynamic',
    type: 'appstore',
  },
  {
    title: '联系我们',
    key: 'contact',
    type: 'phone',
  },
  {
    title: '招贤纳士',
    key: 'talent',
    type: 'user-add',
  },
]
export default {
  data() {
    return {
      current: ['home'],
      tabList: Object.freeze(tabList),
      productDetail: [
        '波形弹簧',
        '弹性挡圈',
        '双螺旋弹簧',
        '密封产品',
        '碟形弹簧',
        '模具弹簧',
        '博鼎模具弹簧',
        '进口及国产氮气弹簧',
      ],
    }
  },
  methods: {
    selectTab({ key }) {
      this.$store.commit('toggleTab', key)
    },
  },
}
</script>
<style lang="less" scoped>
.title {
  padding-top: 30px;
  width: 100%;
  height: 100px;
  position: fixed;
  background: #ffffff;
  top: 0;
  z-index: 999;
  left: 0;
  text-align: center;
  color: @theme-color;
  font-size: 36px;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  .name {
    margin-right: 30px;
  }
}
.tab {
  .flex-center();
}
</style>
