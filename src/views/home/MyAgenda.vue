<!--
 * @Descripttion: 首页-我的待办
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-08 10:31:36
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-10 03:36:47
-->
<template>
  <div class="c-my-agenda">
    <div class="agenda-title">
      我的待办
    </div>
    <div class="container" @mouseenter="swiperMouseenter" @mouseleave="swiperMouseleave">
      <swiper style="height:310px" ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in agendaList" :key="item.sid">
          <div :class="`agenda-item ${activeKey === index ? 'agenda-item-active' : ''}`" @mouseenter="activeKey = index" @mouseleave="activeKey = null">
            <div class="agenda-item-title">
              <p>{{ item.title }}</p>
            </div>
            <div class="agenda-item-date">
              <p>{{ item.date }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
const agendaList = [
  {
    sid: '1',
    title: '1地市约谈：广州市电信分公司，关于省公司集约活动参与情况积极性问题约出来见一面谈一谈',
    date: '2020-02-22 10:22:11'
  },
  {
    sid: '2',
    title: '2地市约谈：广州市电信分公司，关于省公司集约活动参与情况积极性问题约出来见一面谈一谈',
    date: '2020-02-22 10:22:11'
  },
  {
    sid: '3',
    title: '3地市约谈：广州市电信分公司，关于省公司集约活动参与情况积极性问题约出来见一面谈一谈',
    date: '2020-02-22 10:22:11'
  },
  {
    sid: '4',
    title: '4地市约谈：广州市电信分公司，关于省公司集约活动参与情况积极性问题约出来见一面谈一谈',
    date: '2020-02-22 10:22:11'
  },
  {
    sid: '5',
    title: '5地市约谈：广州市电信分公司，关于省公司集约活动参与情况积极性问题约出来见一面谈一谈',
    date: '2020-02-22 10:22:11'
  }
]
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      activeKey: null,
      agendaList, // 待办列表
      swiperOptions: {
        slidesPerView: 3,
        direction: 'vertical',
        autoplay: {
          delay: 1000,
          disableOnInteraction: true
        },
        loop: true
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.mySwiper.$swiper.autoplay.start()
    })
  },
  beforeDestroy() {
    this.$refs.mySwiper.$swiper.destroy()
  },
  methods: {
    /**
     * @description: 鼠标移进轮播图时停止滚动
     */
    swiperMouseenter() {
      this.$nextTick(() => {
        this.$refs.mySwiper.$swiper.autoplay.stop()
      })
    },
    /**
     * @description: 鼠标移出轮播图时开始
     */
    swiperMouseleave() {
      this.$nextTick(() => {
        this.$refs.mySwiper.$swiper.autoplay.start()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.c-my-agenda {
  width: 100%;
  .agenda-title {
    font-size: 16px;
    padding-bottom: 5px;
    border-bottom: 2px solid rgb(232, 232, 232);
    margin-bottom: 5px;
  }
  .agenda-item {
    background: #fff;
    padding: 8px;
    margin-right: 10px;
    border-left: 3px solid rgb(217, 217, 217);
  }
  .agenda-item-active {
    border-left: 3px solid rgb(243, 150, 0);
  }
  .agenda-item-title {
    height: 40px;
    margin-bottom: 5px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    cursor: pointer;
  }
  .agenda-item-date {
    color: rgb(204, 204, 204);
  }
}
</style>
