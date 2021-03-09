<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-08 22:29:10
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-10 03:14:41
-->
<template>
  <div class="c-page-title">
    <span  class="title-label">
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$route.meta.title
    }
  }
}
</script>

<style lang="less" scoped>
.c-page-title {
  height: 40px;
  width: 100%;
  border-bottom: 1px solid rgb(226, 229, 236);
  padding-left: 10px;
  .title-label{
    font-size: 16px;
    line-height: 40px;
  }
}
</style>
