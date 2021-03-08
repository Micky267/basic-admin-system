<!--
 * @Descripttion: 首页-我的待办
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-08 10:31:36
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-08 21:13:15
-->
<template>
  <div class="c-my-agenda">
    我的待办
    <swiper ref="mySwiper" :slides-per-view="3" :space-between="50" :options="swiperOptions">
      <swiper-slide><div class="my-swiper-slide">Slide 1</div></swiper-slide>
      <swiper-slide><div class="my-swiper-slide">Slide 2</div></swiper-slide>
      <swiper-slide><div class="my-swiper-slide">Slide 3</div></swiper-slide>
      <swiper-slide><div class="my-swiper-slide">Slide 4</div></swiper-slide>
      <swiper-slide><div class="my-swiper-slide">Slide 5</div></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        direction: 'vertical',
        // autoplay: {
        //   delay: 1000,
        //   disableOnInteraction: true
        // },
        loop: true
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
