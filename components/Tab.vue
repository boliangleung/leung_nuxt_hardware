<template>
  <div v-cloak class="tab" style="width: 100%">
    <a-carousel arrows :autoplay="true" style="width: 100%">
      <div slot="prevArrow" class="custom-slick-arrow left-icon">
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 50px">
        <a-icon type="right-circle" />
      </div>
      <div v-for="(target, index) in tabList" v-cloak :key="index">
        <img :src="target" alt="" />
      </div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabList: Object.freeze([
        require('@/assets/img/banner2.jpg'),
        require('@/assets/img/banner5.jpg'),
      ]),
    }
  },
}
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.left-icon {
  left: 50px;
  z-index: 10;
}
.tab {
  margin-top: 100px;
}
</style>
