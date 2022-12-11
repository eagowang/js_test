const obj = {
  age: 5,
  // getAge: function() {
  //   return this.age;
  // },
  getAge: () => {
    return this.age;
  },
};

console.log(obj.getAge()); // 5
const getAge = obj.getAge;
console.log(getAge()); // undefined

const getAge2 = getAge.bind(obj);

console.log(getAge2()); // 5
const obj2 = {
  age: 6,
};
console.log(getAge2.call(obj2)); // 5

// bind原理

// 算法同构字符串 leetcode 205
// abb foo
// abac deda
