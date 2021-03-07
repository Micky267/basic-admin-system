<!--
 * @Descripttion: 头部导航栏 
 *  考虑两种情况：
 *  1、通过路由访问界面 - 思路：根据路由获取头部菜单选中项，如果目标菜单已开发，则获取侧边栏，侧边栏再根据路径获取选中项。如果没有菜单开发，则基于未开发的提示，则回到上一个路由。
 *  2、通过点击菜单访问界面 - 思路：如果目标菜单已开发，则获取侧边栏，侧边栏默认选中第一项。如果没有菜单开发，则基于未开发的提示，不做下一步处理。
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-06 21:10:42
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-07 12:10:15
-->
<template>
  <div class="c-top-menu">
    <a-menu v-model="selectedKey" mode="horizontal" @select="selectClick">
      <a-menu-item v-for="(item) in topMenuList" :key="item.path" @click="e => topMenuChange(e, item)">{{item.meta.title}}</a-menu-item>
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
    this.initMenu()
  },
  watch:{
    $route: function () {
      this.routeChange()
    }
  },
  methods: {
    /**
     * @description: 初始化菜单
     */
    initMenu(){
      // 获取头部菜单
      this.topMenuList = this.$router.options.routes[0].children
      // 如果有菜单权限
      if( Array.isArray(this.topMenuList)  &&  this.topMenuList.length){
        this.routeChange()
      }else{
        // 如果没有菜单权限则返回登录页
        this.$router.push({path: '/login'})
      }
    },
    /**
     * @description: 路由发生了变化
     * @param {*}
     * @return {*}
     */
    routeChange(){
      // 更改头部选中项
      this.setSelectKey()
      const targetMenu = this.topMenuList.find(item => item.path === this.selectedKey[0])
      if(!targetMenu.component){
        this.$message.warning('该功能正在开发中', 2)
        this.$router.go(-1)
        return
      }
      // 如果有子菜单，泽更改侧边栏
      if(Array.isArray(targetMenu.children) && targetMenu.children.length){
        this.setSideMenu(targetMenu)
      }
    },
    
    /**
     * @description: 根据路径更新头部菜单选中项
     */
    setSelectKey(){
      const pathArr = this.$route.path.split('/')
      this.selectedKey = [`/${pathArr[1]}`]
    },
    /**
     * @description: 头部菜单点击事件
     */
    topMenuChange(e, item){
      if(!item.component){
        this.$message.warning('该功能正在开发中', 2)
        this.$nextTick(()=>{
          this.setSelectKey()
        })
      }else{
        this.goDefaultPath(item)
        this.setSideMenu(item)
      }
    },
    /**
     * @description: 更新侧边栏
     */
    setSideMenu(item){
      this.$emit('changeSideMenu', item)
    },
    /**
     * @description: 跳转
     */
    goDefaultPath(item){
      if(item.children && item.children.length){
        this.$router.push({path: item.children[0].path})
      }else{
        this.$router.push({path: item.path})
      }
    },
    /**
   * @description: 菜单选中
   */  
    selectClick(e){
      console.log('e',e)
     
    }
  }
}
</script>

<style lang="less" scoped></style>
