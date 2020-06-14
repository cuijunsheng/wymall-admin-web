const path = require('path')
const defaultSettings = import('./src/settings')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title // 网址标题
const port = 8013 // 端口配置

module.exports = {
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'api'
        }
      },
      '/auth': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/auth': 'auth'
        }
      }
    }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        'api': '@/api',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'router': '@/router',
        'store': '@/store',
        'views': '@/views',
      }
    }
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
