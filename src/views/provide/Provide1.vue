<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ value }}</h1>
    <Provide2></Provide2>
  </div>
</template>

<script>
import Provide2 from './Provide2'
export default {
  name: 'Provide1',
  data() {
    return {
      msg: '这是Provide1页面'
    }
  },
  components: {
    Provide2
  },
  inject: ['value']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
