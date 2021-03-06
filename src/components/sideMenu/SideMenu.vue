<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-06 23:30:31
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-07 00:37:13
-->
<template>
  <!-- <a-layout-sider
    collapsedWidth="60"
    width="206px"
    :style="{height:windowHeight}"
    :collapsible="collapsible"
    v-model="collapsed"
    :trigger="null"> -->
    <vue-scroll class="c-scroll">
      <s-menu
        :collapsed="collapsed"
        :menu="menus"
        :theme="theme"
        :mode="mode"
        @select="onSelect" ></s-menu>
    </vue-scroll>
  <!-- </a-layout-sider> -->
</template>

<script>
import SMenu from './index'

export default {
  name: 'SideMenu',
  components: {SMenu},
  props: {
    mode: {
      type: String,
      required: false,
      default: 'inline'
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    },
    collapsible: {
      type: Boolean,
      required: false,
      default: false
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    menus: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      windowHeight:null
    }
  },
  mounted () {
    this.windowHeight=window.document.body.clientHeight-64+'px'
  },
  methods: {
    onSelect (obj) {
      this.$emit('menuSelect', obj)
    }
  }
}
</script>

<style lang="less">
  .sider{
    .ant-layout-sider-children{
      padding-top:20px;
    }
    /deep/ .ant-menu-inline-collapsed > .ant-menu-item, .ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item, .ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
      padding: 0 20px!important;
    }
  }
  .c-scroll{
    height:100%;
  }

</style>