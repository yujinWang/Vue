<!--
 * @Files: 
 * @Version: 1.0
 * @Author: yujinWang
 * @Date: 2021-07-08 14:44:47
 * @LastEditors: yujinWang
 * @LastEditTime: 2021-07-08 16:42:20
-->
<template>
  <div class="hello1">
    <h1>{{ msg }}</h1>
    <h2>{{ value }}{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Provide2',
  data() {
    return {
      msg: '这是Provide2页面'
    }
  },
  inject: ['value','age']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
