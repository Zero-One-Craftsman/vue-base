const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
//const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js', // 入口文件路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 设置别名
    },
  },
  output: {
    filename: 'js/[name].[contenthash].js', // 使用内容哈希而不是日期哈希
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 自动清除上次构建的输出
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/, // 正则表达式，匹配 CSS 文件
        use: [
          MiniCssExtractPlugin.loader, // 创建独立的 CSS 文件
          'css-loader' // CSS 加载器，处理 CSS 文件
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // 正则表达式，匹配图片文件
        use: [{
          loader: 'file-loader', // 文件加载器，处理图片文件
            options: {
              // 配置 name 屬性 (第二步)
              name: '[name].[ext]',
            },
        }
        ]
      },
      {
        test: /\.js$/, // 正则表达式，匹配 JS 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: {
          loader: 'babel-loader', // JS 编译器，转换 ES6 等高级语法
          options: {
            presets: ['@babel/preset-env'] // 转换的目标环境
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css' // 打包后的 CSS 文件名
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
    // new OptimizeCSSAssetsPlugin({}) // 优化 CSS 文件
  ]
};