// TypeScript 实现一个 get 函数来获取它的属性值
const data = {
  name: 'tom',
  age: 18,
};
function get<T, K extends keyof T>(data: T, key: K): T[K] {
  return data[key];
}

let n = get(data, 'name');

console.log(n);
const value = get(data, 'name');
