<template>
  <div id="app">
    <calculator/>
  </div>
</template>

<script>
import calculator from './components/calculator.vue'

export default {
  name: 'app',
  components: {
    calculator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
