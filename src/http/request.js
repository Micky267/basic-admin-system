/*
 * @Descripttion: 封装axios
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-10 01:38:17
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-10 01:57:51
 */
import axios from 'axios'
const http = axios.create()

http.defaults.timeout = 3000

http.interceptors.request.use(config => { // 请求拦截器配置
  // do sth
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

http.interceptors.response.use(response => { // 响应拦截器配置
  // do something
  return response
}, error => {
  console.log(error)
  return Promise.reject(error)
})

export function fetch(url, params) { // 封装axios的post请求
  return new Promise((resolve, reject) => { 
    axios.post(url, params).then(response => {
      resolve(response.data) 
    }).catch(error => {
      reject(error) 
    })
  })
}

export default { // 暴露htto_mock方法，即后面页面中用到的方法
  http_mock(url, params) {
    return fetch(url, params)
  }
}