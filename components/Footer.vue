<template>
  <div class="footer">
    <div>联系我们：{{ footerDetail.phone }}</div>
    <div>企业邮箱：{{ footerDetail.email }}</div>
    <div>添加微信好友 <img :src="footerDetail.weixinImg" alt="" /></div>
    <p>版权所有:{{ footerDetail.name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerDetail: Object.freeze({
        phone: '18620620589',
        email: '374853121@qq.com',
        name: '北富联贸易有限公司',
        weixinImg: require('@/assets/img/weixin.png'),
      }),
    }
  },
}
</script>

<style lang="less" scoped>
.footer {
  height: 225px;
  background: #2e2e2e;
  border-top: 2px solid #e8e8e8;
  color: #ffffff;
  .flex-column();
  justify-content: center;
  img {
    width: 60px;
    height: 60px;
  }
}
</style>
