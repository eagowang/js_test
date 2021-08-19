<template>
  <div id="app">
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="tab">
      <div
        class="tab-item"
        :class="{ active: active === 0 }"
        @click="handleToggle(0)"
      >
        游戏详情
      </div>
      <div
        class="tab-item"
        :class="{ active: active === 1 }"
        @click="handleToggle(1)"
      >
        游戏频道
      </div>
    </div>
    <div class="body"></div>
    <h1>父组件</h1>
    <label for="msg">change item.msg：</label>
    <input id="msg" type="text" v-model="item.msg" />
    <!-- <HelloWorld :item="item" /> -->
    <Scroll />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Scroll from '@/components/Scroll.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Scroll,
  },
  provide() {
    return {
      common: this.common,
    };
  },
  data() {
    return {
      active: 0,
      item: {
        msg: 'Welcome to Your Vue.js App',
        greet: 'hello, guys',
      },
      common: 'this is app`s common data',
    };
  },
  methods: {
    handleToggle(active) {
      this.active = active;
    },
  },
};
</script>

<style lang="less">
body {
  margin: 0;
}
.container {
  margin-top: 40px;
  margin-bottom: 50px;
  display: flex;
  align-items: flex-end;
  height: 45px;
  background: green;
  width: 100%;
}
.left {
  width: 50%;
  height: 45px;
  background: red;
  transform: skewX(-20deg);
  border-radius: 0 0 8px 0;
}
.right {
  margin-left: 5px;
  width: 50%;
  height: 53px;
  background: green;
  transform: skewX(-20deg);
  border-radius: 8px 0 0;
}

.tab {
  position: sticky;
  top: 53px;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 53px;
  transform: translateY(2px);
  overflow: hidden;
}
.full-content {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.tab-item {
  flex: 1;
  position: relative;
  display: inline-block;
  height: 45px;
  line-height: 45px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease-in-out;
  &:after {
    .full-content();
    top: 20px;
    background: #1d1d2b;
    z-index: -3;
  }
  &:before {
    .full-content();
    background: #0e0e19;
    z-index: -2;
    transition: all 0.2s ease-in-out;
  }
  &:first-child:before {
    border-radius: 12px 0 12px 0;
    transform: perspective(10px) rotateX(-1deg);
    transform-origin: left;
  }
  &:last-child:before {
    border-radius: 0 12px 0 12px;
    transform-origin: right;
    transform: perspective(10px) rotateX(-1deg);
  }
}
.active.tab-item {
  height: 53px;
  line-height: 62px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  &:before {
    bottom: 2px;
    border-radius: 12px 12px 0 0;
    background: #1d1d2b;
    z-index: -1;
  }
  &:first-child:before {
    transform: perspective(10px) rotateX(1deg);
  }
  &:last-child:before {
    transform: perspective(10px) rotateX(1deg);
  }
}

.body {
  height: 100px;
  background: #1d1d2b;
}
</style>
