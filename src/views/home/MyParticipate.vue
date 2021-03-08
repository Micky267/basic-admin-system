<!--
 * @Descripttion: 首页-我参与的
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-08 10:31:36
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-09 00:05:29
-->
<template>
  <div class="c-my-participate">
    <CommonTitle>我参与的</CommonTitle>
    <div class="activity-container">
      <div :class="`activity-item activity-color-${index % 3}`" v-for="(item, index) in activityList" :key="item.sid">
        <div class="title">{{ item.title }}</div>
        <div class="detail">{{ item.detail }}</div>
        <div class="progress">
          <a-progress strokeColor="#fff" :percent="item.progress * 100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activityList: [
        {
          sid: '1',
          title: '8月“战狼”行动',
          detail: '超级日租卡用户获活动，1天1元800M，循环叠加，全国流量不封顶',
          progress: 0.52
        },
        {
          sid: '2',
          title: '3G升4G大冲锋',
          detail: '超级日租卡用户获活动，1天1元800M，循环叠加，全国流量不封顶',
          progress: 0.6
        },
        {
          sid: '3',
          title: '异网获取，“飓风”活动',
          detail: '超级日租卡用户获活动，1天1元800M，循环叠加，全国流量不封顶',
          progress: 0.1
        }
        // {
        //   sid: '4',
        //   title: '异网获取，“飓风”活动',
        //   detail: '超级日租卡用户获活动，1天1元800M，循环叠加，全国流量不封顶',
        //   progress: 0.1
        // },
        // {
        //   sid: '5',
        //   title: '异网获取，“飓风”活动',
        //   detail: '超级日租卡用户获活动，1天1元800M，循环叠加，全国流量不封顶',
        //   progress: 0.1
        // }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.c-my-participate {
  width: 100%;
  .activity-container {
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
    .activity-item {
      display: inline-block;
      height: 135px;
      max-width: 320px;
      margin-right: 20px;
      padding: 20px;
      color: #fff;
      white-space: pre-wrap;
      .title {
        font-size: 16px;
        margin-bottom: 10px;
      }
      .detail {
        font-size: 14px;
        margin-bottom: 12px;
      }
      /deep/ .ant-progress-text {
        color: #fff;
      }
    }
    .activity-color-0 {
      background: rgb(132, 134, 220);
      /deep/ .ant-progress-inner {
        background: rgb(118, 118, 188);
      }
    }
    .activity-color-1 {
      background: rgb(118, 156, 252);
      /deep/ .ant-progress-inner {
        background: rgb(105, 137, 212);
      }
    }
    .activity-color-2 {
      background: rgb(244, 145, 129);
      /deep/ .ant-progress-inner {
        background: rgb(205, 128, 113);
      }
    }
  }
}
</style>
