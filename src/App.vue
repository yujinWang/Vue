<template>
  <div id="app">
    <router-link to='/'><button>返回首页</button></router-link>
    <router-link to='/provide'><button>provide/inject</button></router-link>
    <router-link to='/keepalive'><button>keepalive</button></router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  provide: {
    value: '这是App.vue中提供的信息',
    age: 100
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
