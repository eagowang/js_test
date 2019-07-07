var obj = {
  name: 'wyc',
  data: {
    title: '标题',
  },
};
function saveData(data) {
  obj = {
    ...obj,
    ...data,
  };
}

saveData({ ...obj, name: 'haha' });
console.log(obj);
