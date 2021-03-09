<!--
 * @Descripttion: 首页-我的消息
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-08 10:31:36
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-09 23:55:23
-->
<template>
  <div class="c-my-message">
    <div class="left">
      <div class="mes-item c-icon">
        <img src="@/assets/header/shape1.png" alt="提醒" />
      </div>
      <div class="mes-item c-label">
        我的消息
      </div>
      <div class="mes-item c-number">
        <a-badge
          count="25"
          :number-style="{
            backgroundColor: '#fff',
            color: '#E63A3A',
            borderColor: '#E63A3A'
          }"
        />
      </div>
    </div>
    <div class="right">
      <div class="mes-item c-more">
        更多>>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.c-my-message {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background: #fff;
  padding: 0 5px 0 5px;
  .mes-item {
    display: inline-block;
  }
  .left {
    .mes-item {
      margin-right: 5px;
    }
    .c-label {
      font-size: 16px;
      vertical-align: middle;
    }
  }
  .right {
    .c-more {
      font-size: 14px;
      color: rgb(139, 139, 139);
    }
  }
}
</style>
