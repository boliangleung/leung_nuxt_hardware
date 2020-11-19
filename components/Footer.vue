<template>
  <div class="footer">
    <div class="footer-contact">
      <div class="footer-about">
        <h1>关于我们</h1>
        <div>
          深圳市北富联机电有限公司（www.northfull.com）是一家专业进口高端机电零部件销售、服务为一体的专业公司，为客户提供高品质五金紧固件工业服务商!
        </div>
        <div class="mt30">
          北富联机电位于深圳市宝安区，提供McMASER-CARR中国代理(高端螺丝和螺栓，螺纹杆和螺柱，吊环螺栓,U型螺栓,坚果类,垫圈,垫片，螺旋和螺纹刀片，垫片和支座，销，锚点,钉，射钉枪，柳钉，柳钉工具，斯台普斯，订书机，关键股票等)、Helicoil螺套（金属螺纹嵌件，塑料螺纹嵌件，木螺纹嵌件，复合材料的螺纹嵌件，紧固件分类，管状腿的调平安装插件等）、BERG连接器、RECOIL螺纹护套及配套机电工具等。
          本公司以“用心服务，不断提升自我”为宗旨，坚持以用户的要求为中心，提供高效服务，为客户解决问题，北富联机电致力于为客户提供高效服务的五金机电服务商
        </div>
      </div>
      <div>
        <h1>联系我们</h1>
        <div>
          <a-icon type="phone" class="icon" width="32" height=" 32" />：{{
            footerDetail.phone
          }}
        </div>
        <div class="mtb20">企业邮箱：{{ footerDetail.email }}</div>
        <div>添加微信好友 <img :src="footerDetail.weixinImg" alt="" /></div>
      </div>
    </div>
    <div>
      <p>版权所有:{{ footerDetail.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerDetail: Object.freeze({
        phone: '13570342539',
        email: 'northfull@163.com',
        name: '深圳市北富联机电有限公司',
        weixinImg: require('@/assets/img/weixin.png'),
      }),
    }
  },
}
</script>

<style lang="less" scoped>
.footer {
  min-height: 225px;
  background: #2e2e2e;
  border-top: 2px solid #e8e8e8;
  color: #ffffff;
  .flex-column();
  justify-content: center;
  &-contact {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  img {
    width: 60px;
    height: 60px;
  }
  h1 {
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    margin-top: 40px;
  }
  &-about {
    width: 40%;
    min-height: 260px;
    border-bottom: 1px solid #4d4d4d;
    margin-bottom: 20px;
    margin-right: 30px;
    div {
      color: #ffffff;
      font-size: 14px;
    }
  }
  .mt30 {
    margin-top: 30px;
  }
  .icon {
    font-size: 30px;
  }
  .icons-list {
    &.anticon {
      margin-right: 6px;
      font-size: 24px;
    }
  }
  .mtb20 {
    margin: 20px 0;
  }
}
</style>
