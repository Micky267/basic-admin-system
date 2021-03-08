/*
 * @Descripttion: 配置
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-06 20:14:43
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-08 12:12:57
 */
const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV)
module.exports = {
  devServer: {
    public: ''
  },
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true)
    
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: IS_PROD,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
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