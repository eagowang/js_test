<template>
  <div id="app">
    <h1>父组件</h1>
    <label for="msg">change item.msg：</label>
    <input id="msg" type="text" v-model="item.msg" />
    <HelloWorld :item="item" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  provide() {
    return {
      common: this.common,
    };
  },
  data() {
    return {
      item: {
        msg: 'Welcome to Your Vue.js App',
        greet: 'hello, guys',
      },
      common: 'this is app`s common data',
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 1px solid #ddd;
}
</style>
