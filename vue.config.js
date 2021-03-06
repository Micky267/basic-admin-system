module.exports = {
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