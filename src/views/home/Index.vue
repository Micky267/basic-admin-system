<!--
 * @Descripttion: 首页（工作台）
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-06 20:06:07
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-10 00:33:52
-->
<template>
  <div class="c-home">
    <div class="layout-left">
      <!-- 我参与的 -->
      <div class="my-participate">
        <MyParticipate />
      </div>
      <!-- 统计概览 -->
      <div class="statistics">
        <Statistics />
      </div>
    </div>
    <div class="layout-right">
      <!-- 我的消息 -->
      <div class="right-item my-message">
        <MyMessage />
      </div>
      <div class="right-bottom">
        <!-- 我的待办 -->
        <div class="right-item my-agenda">
          <MyAgenda />
        </div>
        <!-- 公告和动态 -->
        <div class="right-item notive-and-dynamic">
          <NoticeAndDynamic />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyAgenda from '@/views/home/MyAgenda' // 我的待办
import MyMessage from '@/views/home/MyMessage' // 我的消息
import MyParticipate from '@/views/home/MyParticipate' // 我参与的
import NoticeAndDynamic from '@/views/home/NoticeAndDynamic' // 公告和动态
import Statistics from '@/views/home/Statistics' // 统计预览
export default {
  components: {
    MyAgenda,
    MyMessage,
    MyParticipate,
    NoticeAndDynamic,
    Statistics
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
<style lang="less" scoped>
.c-home {
  display: flex;
  height: 100%;
  width: 100%;
  .layout-left {
    display: flex;
    flex-direction: column;
    flex: 1 1 200px;
    height: 100%;
    padding: 15px 30px 30px 30px;
    .my-participate {
      height: 165px;
      width: 100%;
      margin-bottom: 20px;
    }
    .statistics {
      flex: 1;
    }
  }
  .layout-right {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 0 0 300px;
    background: rgb(247, 247, 247);
    .right-bottom {
      padding-left: 10px;
    }
    .right-item {
      width: 100%;
    }
    .my-message {
      height: 55px;
      margin-bottom: 10px;
    }
    .my-agenda {
      flex: 3 1 340px;
      height: 340px;
      margin-bottom: 10px;
    }
    .notive-and-dynamic {
      flex: 2 1 260px;
      height: 260px;
    }
  }
}
</style>
