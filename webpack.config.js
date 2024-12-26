/*
 * @Author: TheEverlyn oncwnuPHraQE2iCPc4byZrcyKQ8s@git.weixin.qq.com
 * @Date: 2024-12-26 12:34:00
 * @LastEditors: TheEverlyn oncwnuPHraQE2iCPc4byZrcyKQ8s@git.weixin.qq.com
 * @LastEditTime: 2024-12-26 12:34:37
 * @FilePath: \vue-base\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');
 
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  }
};