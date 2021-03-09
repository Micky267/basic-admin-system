<!--
 * @Descripttion: 页面头部
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-08 11:06:41
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-10 02:58:50
-->
<template>
  <div class="c-header-component">
    <!-- logo -->
    <div class="logo">
      <img src="@/assets/header/logo.png" alt="大数据精准营销系统" />
    </div>
    <!-- 头部导航 -->
    <div class="menu">
      <TopMenu @changeSideMenu="changeSideMenu" />
    </div>
    <!-- 用户信息 -->
    <div class="user-message">
      <img class="user-img" src="@/assets/header/nav-iconuser.png" alt="头像" />
      <a-dropdown>
        <span class="user-name">
          <span class="user-name-label">admin</span> <a-icon type="down" />
          </span>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">退出登录</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import TopMenu from '@/components/header/TopMenu' // 顶部导航
export default {
  components: {
    TopMenu
  },
  methods: {
    changeSideMenu(item) {
      this.$emit('changeSideMenu', item)
    }
  }
}
</script>

<style lang="less" scoped>
.c-header-component {
  height: 100%;
  display: flex;
  align-items: center;
  .logo {
    width: 300px;
  }
  .menu {
    height: 100%;
    flex: 1;
  }
  .user-message {
    width: 100px;
    .user-img{
      margin-right: 5px;
    }
    .user-name{
      cursor: pointer;
    }
  }
}
</style>
