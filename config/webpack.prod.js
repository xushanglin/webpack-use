// 引入合并环境插件
const {merge} = require('webpack-merge')
// 公共配置
const base = require('./webpack.base.js')
// 导入清除插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 导出合并配置
module.exports = merge(base, {
    mode:'production',
      // 调用清除打包插件
    plugins: [
        new CleanWebpackPlugin()
      ] 
})
