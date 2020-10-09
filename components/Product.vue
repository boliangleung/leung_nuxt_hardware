<template>
  <div class="tab">
    <a-menu v-model="current" mode="vertical" style="width: 256px" theme="dark">
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
  methods: {},
}
</script>
<style lang="less" scoped>
.tab {
  .flex-start();
}
li.ant-menu-item,
li.ant-menu-submenu.ant-menu-submenu-vertical,
.ant-menu-submenu-title {
  height: 60px !important;
  line-height: 60px !important;
}
</style>
