const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            //正则表达式
            test: /\.css$/,
            //css-loader只负责将css文件进行加载
            use: ['style-loader', 'css-loader', 'less-loader']
        },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //当加载的图片，大于limit时，会将图片编译成base64字符串形式
                            //当加载的图片。大于limit时，需要使用file-loader模块进行加载
                            limit: 8192,
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    },
                ],
                type: 'javascript/auto'
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.vue'],
        //alias:别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [new VueLoaderPlugin(),
        new webpack.BannerPlugin('最终版权归lyx所有'),
        new HtmlWebpackPlugin({template: 'index.html'}),
        new UglifyjsWebpackPlugin()]

}