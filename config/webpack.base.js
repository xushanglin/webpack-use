const path = require('path')
// 引入插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//引入插件系统库
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 处理 vue 文件第二步, 引入插件并注册
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
    entry: '/src/main.js',  //项目入口文件
    output: {
        filename: 'main.js', //打包后的名字
        path:path.resolve(__dirname,'../dist') //打包后的文件目录 
    },
    module: {
        rules: [
            // 处理 vue 文件第一步
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
            {
                test: /\.css$/,			// 匹配css扩展名文件
                use: [					// 配置loader加载器
                    //利用插件修改加载器
                    //利用对象配置
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath:"./"
                        }
                    },
                    'css-loader'		// 读取css的代码
                ]	
            },
            {
                test: /\.less$/,		// 匹配less扩展名文件
                use:[				
                    //利用插件修改加载器
                    //利用对象配置
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath:"./"
                        }
                    },		// 把less代码写入到网页中
                    'css-loader',		// 读取less的代码
                    'less-loader'		// 解释编译less代码
                ]	
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",              // 处理图片文件返回链接
                        options: {
                            outputPath: "images"            //  输出到dist下的images目录
                        }
                    } 
                ]
            },
            {
                test: /\.(ttf)$/,  //匹配扩展名
                use:{
                    loader: "file-loader",  //处理文件返回连接
                    options: {
                        outputPath:"assets" //输出到assets文件中
                    }
                }
            }
        ]
    },
    plugins: [
        // 如果不添加配置信息，就默认添加到main.css
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            // 给他一个模板，去照这个模板生成一个html
            template: 'public/index.html'
        }),
        new VueLoaderPlugin()
    ]
}