<!--
 * @Descripttion: 总体布局
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-06 20:03:12
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-07 00:56:04
-->
<template>
  <a-layout class="c-components-layout">
    <a-layout-header class="c-components-header">
      <TopMenu @changeSideMenu="changeSideMenu" />
    </a-layout-header>
    <a-layout>
      <a-layout-sider class="c-components-sider"  v-if="menuList && menuList.length">
        <SizeMenu
          mode="inline"
          :menu="menuList"
          :theme="'light'"
          :collapsible="true"
        ></SizeMenu>
      </a-layout-sider>
      <a-layout-content class="c-components-content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import TopMenu from '@/components/topMenu/Index'
import SizeMenu from '@/components/sideMenu/index.js'
export default {
  components: {
    SizeMenu,
    TopMenu
  },
  data() {
    return {
      menuList: []
    }
  },
  methods: {
    /**
     * @description: 改变侧边导航栏
     */
    changeSideMenu(item) {
      this.getChildMenus(item)
    },
    /**
     * @description: 获取对应的侧边导航栏
     */
    getChildMenus(item) {
      const parentPath = item.path
      const routeList = this.$router.options.routes[0].children
      if (Array.isArray(routeList) && routeList.length) {
        const theMenu = routeList.find(item => item.path === parentPath)
        if (theMenu) {
          this.menuList = theMenu.children
        }
      }
    },
    /**
     * @description: 获取当前的path
     */
    getCurrPath(){
      const matched  = this.$route.matched
      console.log('this.$route', this.$route)
      if(matched && matched.length >1 ){
        return matched[matched.length -1].path
      }
      // if (routes.length >= 4) {
      //   routes.pop()
      //   console.log('poproutes', routes);
      //   this.selectedKeys = [routes[2].path]
      // } else {
      //   this.selectedKeys = [routes.pop().path]
      // }
    }
  }
}
</script>
<style lang="less" scoped>
.c-components-layout {
  height: 100vh;
  .ant-layout-header.c-components-header {
    background: blue;
    color: #fff;
  }
  .c-components-sider {
    color: #fff;
  }
}
</style>
