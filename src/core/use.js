/*
 * @Descripttion: 导入
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-06 19:53:41
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-10 03:08:15
 */
import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'normalize.css'
import 'ant-design-vue/dist/antd.less'
import '@/components/global.less'
import CommonTitle from '@/components/commonTitle/index.js'
import PageTitle from '@/components/pageTitle/index.js'
Vue.use(Antd)
Vue.use(CommonTitle)
Vue.use(PageTitle)
