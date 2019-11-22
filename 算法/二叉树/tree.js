var originData = [
  { id: 1, parentId: 0, name: '1' },
  { id: 12, parentId: 1, name: '12' },
  { id: 123, parentId: 12, name: '123' },
  { id: 2, parentId: 0, name: '1' },
  { id: 22, parentId: 2, name: '22' },
  { id: 23, parentId: 23, name: '23' },
];
// 目标生成的结构
var traverseData = [
  {
    id: 1,
    parentId: 0,
    name: '1',
    children: [
      {
        id: 12,
        parentId: 1,
        name: '12',
        children: [{ id: 123, parentId: 12, name: '123' }],
      },
    ],
  },
  {
    id: 2,
    parentId: 0,
    name: '1',
    children: [
      { id: 22, parentId: 2, name: '22' },
      { id: 23, parentId: 23, name: '23' },
    ],
  },
];
function list_to_tree(list) {
  var map = {},
    node,
    roots = [],
    i;
  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId !== 0) {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

var result = list_to_tree(originData);
console.log(result);
