//引入合并环境配置
const { merge } = require('webpack-merge')
// 引入公共配置 
const base = require('./webpack.base')

// 利用插件把开发和环境和生产环境合并和导出
module.exports = merge(base, {
    mode:'development',
    // 配置生成映射源文件代码，
    // 用于快速定位错误位置
    devtool: "source-map",
      // + 开发服务配置
    devServer: {
        contentBase: './dist',
        port: 5500 // 默认端口是8080
   }
})
