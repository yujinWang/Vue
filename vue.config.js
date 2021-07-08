/*
 * @Files: 
 * @Version: 1.0
 * @Author: yujinWang
 * @Date: 2021-07-08 15:15:37
 * @LastEditors: yujinWang
 * @LastEditTime: 2021-07-08 15:42:37
 */
'use strict'
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname,dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
