/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-06 19:14:23
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-07 09:54:51
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import  BasicLayout  from '@/layouts/BasicLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta:{
      title: '首页',
    },
    redirect: '/home',
    children:[{
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/Index.vue'),
      meta:{
        title: '首页',
      }
    },{
      path: '/tagsManage',
      name: 'tagsManage',
      meta:{
        title: '标签管理',
      },
      component: null
    },{
      path: '/modelManage',
      name: 'modelManage',
      meta:{
        title: '模型管理',
      },
      component: null
    },{
      path: '/activityMange',
      name: 'activityMange',
      meta:{
        title: '活动管理',
      },
      component: () => import('@/views/activityManage/Index.vue'),
      children:[
        {
          path: '/activityMange/activityList',
          name: 'activityMangeActivityList',
          component: () => import('@/views/activityManage/activityList/Index.vue'),
          meta:{
            title: '活动列表',
          },
        },{
          path: '/activityMange/tagsLibraryManage',
          name: 'tagsLibraryManage',
          meta:{
            title: '标签库管理',
          },
          component: null,
        },{
          path: '/activityMange/userGroupMange',
          name: 'userGroupMange',
          meta:{
            title: '用户群管理',
          },
          component: null,
        }
      ]
    },{
      path: '/assessmentCenter',
      name: 'assessmentCenter',
      meta:{
        title: '评估中心',
      },
      component: null
    },{
      path: '/labourCompetition',
      name: 'labourCompetition',
      meta:{
        title: '劳动竞赛',
      },
      component: null
    }]
  },{
    path: '*',
    redirect: '/404',
  },{
    path: '/404',
    name: 'notFind',
    comments:()=> import('@/views/home/Index.vue'),
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
