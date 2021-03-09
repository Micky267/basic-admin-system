/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-06 19:14:23
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-10 02:01:11
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/core/use'
import http from '@/http/request'
Vue.config.productionTip = false
Vue.prototype.$http = http
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
