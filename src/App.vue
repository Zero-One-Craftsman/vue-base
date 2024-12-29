<!--
 * @Author: TheEverlyn oncwnuPHraQE2iCPc4byZrcyKQ8s@git.weixin.qq.com
 * @Date: 2024-12-29 15:39:59
 * @LastEditors: TheEverlyn oncwnuPHraQE2iCPc4byZrcyKQ8s@git.weixin.qq.com
 * @LastEditTime: 2024-12-29 16:19:07
 * @FilePath: \vue-init\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <img :src="imageUrl"></img>
    <div>{{ message }}</div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      imageUrl:'./assets/xxx.png',
      message: '你好欢迎来到集成项目中心!'
    }
  },
  setup(){
    
  }
}
</script>
 
<style>
div {
  color: #42b983;
}
</style>