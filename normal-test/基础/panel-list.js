function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

// 设置展示类型
function setShowType(showType) {
  return (next) => {
    return (panel) => {
      next({
        ...panel,
        showType,
      });
    };
  };
}
// 通过media过滤
function filterByMedia(next) {
  return (panel) => {
    next({
      ...panel,
      list: panel.list.filter((v) => v.media),
    });
  };
}
// 截取前9个
function slice0to9(next) {
  return (panel) => {
    next({
      ...panel,
      list: panel.list.slice(0, 9),
    });
  };
}

// 根据长度判断返回
function handleByLength(len) {
  return (next) => {
    return (panel) => {
      if (panel.list && panel.list.length <= len) return null;
      else next(panel);
    };
  };
}

// 转换成2d数组
function convertTo2DArray(m = 1) {
  return (next) => {
    return (panel) => {
      if (panel.list && panel.list.length < 1) {
        next(panel);
      }
      if (panel.list && panel.list.length <= m) {
        next({
          ...panel,
          list: [[...panel.list]],
        });
      }
      const newList = [];
      let temp = [];
      for (let i = 1; i <= panel.list.length; i++) {
        temp.push(panel.list[i - 1]);
        if (i % m === 0) {
          newList.push(temp);
          temp = i === panel.list.length ? null : [];
        }
      }
      temp && newList.push(temp);
      next({ ...panel, list: newList });
    };
  };
}

function doSomething(panel) {
  console.log(panel);
  return panel;
}

const generateList = compose(
  handleByLength(2),
  filterByMedia
  // slice0to9,
  // setShowType('COIN'),
  // convertTo2DArray(3)
)(doSomething);

const panel = {
  list: [
    {
      media: 1,
      icon: '',
    },
    {
      media: 1,
      icon: '',
    },
    {
      media: 1,
      icon: '',
    },
    {
      media: 1,
      icon: '',
    },
  ],
};

// const panel = [
//   {media: 1, list: [1, 1, 1]},
//   {media: 2, list: [2, 2, 2]},
//   {media: 3, list: [3, 3, 3]},
//   {media: 4, list: [4, 4, 4]},
//   // {media: 5},
//   // {aaa: 6},
//   // {media: 7},
//   // {media: 8},
//   // {media: 9},
//   // {media: 10},
//   // {media: 11},
// ];
console.log(generateList);
const newPanel = generateList(panel);

console.log(newPanel);
