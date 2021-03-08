<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-08 22:29:10
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-09 00:06:35
-->
<template>
  <div class="c-common-title">
    <div class="title-label">
      <slot />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.c-common-title {
  height: 25px;
  font-size: 16px;
  color: rgb(84, 124, 261);
  margin: 10px 0 10px 0;
  .title-label {
    display: inline-block;
    line-height: 25px;
    vertical-align: top;
  }
  &::before {
    content: '';
    display: inline-block;
    width: 3px;
    height: 25px;
    background: rgb(84, 124, 261);
    margin-right: 15px;
  }
}
</style>
