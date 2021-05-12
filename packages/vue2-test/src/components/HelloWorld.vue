<template>
  <div class="hello">
    <h2>子组件</h2>
    <p>props：item.msg：{{ item.msg }}</p>
    <p>props：item.greet：{{ item.greet }}</p>
    <p>data：obj.score：{{ obj.score }}</p>
    <p>data：obj.subjects.chinese：{{ obj.subjects.chinese }}</p>

    <label for="chinese">change obj.subjects.chinese：</label>
    <input id="chinese" type="text" v-model="obj.subjects.chinese" />

    <p>provide/inject：{{ common }}</p>
    <label for="common">change provide/inject common：</label>
    <input id="common" type="text" v-model="common" />

    <p>{{ obj2.a.b }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    item: Object,
  },
  inject: ['common'],
  data() {
    return {
      obj: {
        score: 750,
        subjects: {
          chinese: 150,
          math: 150,
        },
      },
      obj2: {
        a: {},
      },
    };
  },
  mounted() {
    this.obj2.a.b = 4;
    // this.$set(this.obj2.a, 'b', 4);
  },
};
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
.hello {
  margin: 30px;
  border: 1px solid #ddd;
}
</style>
