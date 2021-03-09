<!--
 * @Descripttion: 导航面包屑
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-10 03:16:29
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-10 03:34:49
-->
<template>
  <div class="nav-breadcrumb">
    <a-breadcrumb separator=">">
      <a-breadcrumb-item v-for="(item, index) in navList" :key="index">{{item.title}}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
export default {
  computed: {
    navList() {
      const matched = this.$route.matched
      let navList = matched.slice(1, matched.length)
      if (Object.prototype.toString.call(navList) === '[object Object]') {
        navList = [navList]
      }
      const newList = []
      if (navList && navList.length) {
        navList.forEach(item => {
          newList.push({
            path: item.path,
            title: item.meta.title
          })
        })
      }
      return newList
    }
  }
}
</script>

<style></style>
