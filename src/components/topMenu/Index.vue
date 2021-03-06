<!--
 * @Descripttion: 侧边导航栏
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-06 21:10:42
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-07 00:51:32
-->
<template>
  <div class="c-top-menu">
    <a-menu v-model="selectedKey" mode="horizontal">
      <a-menu-item v-for="(item, index) in topMenuList" :key="index" @click="e => changeSideMenu(e, item)">{{item.meta.title}}</a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedKey: null,
      topMenuList: []
    }
  },
  mounted() {
    this.getTopMenu()
  },
  methods: {
    getTopMenu() {
      this.topMenuList = this.$router.options.routes[0].children
    },
    /**
     * @description: 显示侧边栏
     */
    changeSideMenu(e, item){
      // 如果该模块还没开发，则不做跳转
      if(!item.component){
        this.$message.warning('该模块正在开发中……')
        return
      }
      this.changePath(item)
      this.$emit('changeSideMenu', item)
    },
    /**
     * @description: 跳转
     */
    changePath(item){
      if(item.children && item.children.length){
        this.$router.push({path: item.children[0].path})
      }else{
        this.$router.push({path: item.path})
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
