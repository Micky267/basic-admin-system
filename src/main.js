/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-06 19:14:23
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-09 00:32:38
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/core/use'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
