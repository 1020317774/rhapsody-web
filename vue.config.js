const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = process.env.VUE_APP_PORT || 9527 // dev port

const host = process.env.VUE_APP_HOST

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development', // 是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
  productionSourceMap: false,
  // 开发服务器
  devServer: {
    port: port, // 端口
    host: host, // host
    https: false, // https:{type:Boolean}
    open: false, // 打开页面
    hotOnly: true, // 热更新
    overlay: {
      warnings: false,
      errors: true
    }
    // proxy: { //配置多个代理
    //     "/": {
    //         target: "http://127.0.0.1:10000",
    //         changeOrigin: true,
    //         ws: true,//websocket支持
    //         secure: false,
    //         pathRewrite: {
    //             "^/": "/"
    //         }
    //     },
    // }

    // before: require('./mock/mock-server.js')
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
