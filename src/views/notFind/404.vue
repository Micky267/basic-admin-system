<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-06 22:14:14
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-06 22:16:10
-->
<template>
  <div class="c-page-404">
      <div class="desc">抱歉，你访问的页面不存在或仍在开发中</div>
      <a-button  type="primary" @click="handleToHome">返回首页</a-button>
  </div>
</template>

<script>
export default {
  methods:{
    /**
     * @description: 返回首页
     */
    handleToHome(){
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style>

</style>