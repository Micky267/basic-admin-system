/*
 * @Descripttion: 配置
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-06 20:14:43
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-07 10:02:18
 */
module.exports = {
  devServer: {
    public: 'http://localhost:8000'
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */
          'primary-color': '#1890FF'
          // 'link-color': '#F5222D',
          // 'border-radius-base': '4px',
        },
        javascriptEnabled: true
      }
    }
  },
}