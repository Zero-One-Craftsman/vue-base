/*
 * @Author: 林崽爱吃糖 oncwnuPHraQE2iCPc4byZrcyKQ8s@git.weixin.qq.com
 * @Date: 2024-12-07 20:10:39
 * @LastEditors: 林崽爱吃糖 oncwnuPHraQE2iCPc4byZrcyKQ8s@git.weixin.qq.com
 * @LastEditTime: 2024-12-07 20:14:24
 * @FilePath: \template-vue\src\lang\i18n.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/i18n/index.ts
import { createI18n } from 'vue-i18n'
import {en} from './en'
import {zh} from './zh'

const i18n = createI18n({
  legacy: false, // 使用 Composition API
  locale: 'en',  // 默认语言
  messages:{
    zh,en
  },
})

export default i18n
