/*
 * @Descripttion: 活动管理模拟数据
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-10 01:35:40
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-10 02:47:55
 */
//引入mockjs
import Mock from 'mockjs'
const baseUrl = 'http://mockjs.com'
//使用mockjs模拟数据
Mock.mock(`${baseUrl}/active/getActiveList/1/10`, {
  'success': true,
  'body':{
    'pages': 1,
    'total': 100,
    'list|6':[{
      'sid|20210310000-20210320000': 1,
      'activeCode|20210310000-20210320000': 1,
      'activeName|1':['战狼异网获取活动竞赛','超级日租卡用户获取活动','3G升4G营销活动','宽带新装限时优惠活动'],
      'businessScenario|1':['1','2','3'],
      'activeStatus|1':['0','1'],
      'startTime': '@date',//随机生成日期时间
      'endTime': '@date',//随机生成日期时间
    }]
  }
})