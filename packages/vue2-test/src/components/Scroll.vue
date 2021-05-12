<template>
  <ul>
    <li
      class="height-fixed__scroll-runway"
      :style="{
        transform: `translate(0, ${scrollRunwayEnd}px)`,
      }"
    ></li>
    <li class="item" v-for="(item, index) in list" :key="index">
      <div class="item__wrapper">
        <div class="item__info">
          <img :src="item.avatar" class="item__avatar" />
          <p class="item__name">{{ index }}. {{ item.name }}</p>
          <p class="item__date">{{ item.dob }}</p>
        </div>
        <p class="item__text">E-mail: {{ item.email }}</p>
        <p class="item__text">Phone: {{ item.phone }}</p>
        <p class="item__text">City: {{ item.address.city }}</p>
        <p class="item__text">Street: {{ item.address.street }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { fetchData } from '@/mock/mock.js';

export default {
  data() {
    return {
      list: [],
      scrollRunwayEnd: 0,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.list.push(...this.setItemIndex(fetchData()));
      this.scrollRunwayEnd = this.list.length * 180;
    },
    setItemIndex(list) {
      let latestIndex = this.list.length;
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        item.index = latestIndex + i;
        Object.freeze(item);
      }
      return list;
    },
  },
};
</script>

<style lang="less">
ul,
li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.item {
  position: relative;
  will-change: transform;
  padding: 11px 20px;
  width: 100%;
  height: 180px;
  &__wrapper {
    padding: 20px;
    padding-top: 0;
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 5px;
  }
  &__avatar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto 0;
    width: 50px;
    height: 50px;
    background-color: #eaeaea;
    border-radius: 100%;
    overflow: hidden;
  }
  &__date,
  &__name {
    margin-bottom: 4px;
    max-width: 100%;
    font-weight: 700;
    font-size: 12px;
  }
  &__text {
    margin-bottom: 4px;
    max-width: 100%;
    font-weight: 400;
    font-size: 12px;
  }
}
</style>
