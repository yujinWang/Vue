<!--
 * @Files: 
 * @Version: 1.0
 * @Author: yujinWang
 * @Date: 2021-07-08 15:48:42
 * @LastEditors: yujinWang
 * @LastEditTime: 2021-07-08 15:49:46
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ value }} {{ age }}</h2>
    <button @click="changeTab" v-for="item in btns" :key="item">{{item}}</button>
  </div>
</template>

<script>
export default {
  name: 'KeepAlive1',
  data() {
    return {
      msg: '这是KeepAlive1页面',
      btns: ['页签1','页签2']
    }
  },
  components: {},
  inject: ['value','age'],
  methods: {
    changeTab() {
        console.log('999')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
}
</style>
