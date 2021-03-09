<!--
 * @Descripttion: 首页-公告和动态
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-08 10:31:36
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-09 23:23:40
-->
<template>
  <div class="c-notice-and-dynamic">
    <a-tabs default-active-key="notice">
      <a-tab-pane key="notice" tab="公告">
        <div class="tab-list notice-list">
          <ul class="tab-list-ul">
            <li class="tab-list-li" v-for="item in noticeList" :key="item.sid">
              <span class="title">{{ item.title }}</span>
              <span class="date">{{ item.date }}</span>
            </li>
          </ul>
        </div>
      </a-tab-pane>
      <a-tab-pane key="dynamic" tab="动态">
        <div class="tab-list active-list">
          <ul class="tab-list-ul">
            <li class="tab-list-li" v-for="item in noticeList" :key="item.sid">
              <span class="title">{{ item.title }}</span>
              <span class="date">{{ item.date }}</span>
            </li>
          </ul>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
const noticeList = [
  {
    sid: '1',
    title: '超级日租卡用户获取活动',
    date: '12-22'
  },
  {
    sid: '2',
    title: '宽带新装限时优惠活动',
    date: '12-18'
  },
  {
    sid: '3',
    title: '政企专线提速',
    date: '12-17'
  },
  {
    sid: '4',
    title: '第三季度各地销售季度汇总',
    date: '12-10'
  },
  {
    sid: '5',
    title: '明日活动发布事项，通知电信的各个领导来开会',
    date: '11-22'
  }
]

export default {
  data() {
    return {
      noticeList, // 公告列表
      activeList: noticeList // 活动列表
    }
  }
}
</script>

<style lang="less" scoped>
.c-notice-and-dynamic {
  padding-right: 10px;
  /deep/ .ant-tabs-nav {
    color: rgb(197, 197, 197);
  }
  /deep/ .ant-tabs-tab-active {
    color: #000;
  }
  .tab-list {
    .tab-list-ul {
      margin: 0;
      padding-left: 20px;
      .tab-list-li {
        position: relative;
        &:not(:last-child){
          margin-bottom: 10px;
        }
        .title {
          width: 80%;
          position: absolute;
          left: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .date {
          position: absolute;
          color: rgb(139, 139, 139);
          right: 0;
        }
      }
      li {
        &::marker {
          color: rgb(217, 217, 217);
        }
      }
    }
  }
}
</style>
