var fs = require("fs");
var babylon = require("babylon");
var traverse = require("@babel/traverse").default;
var babelCore = require("@babel/core");
var path = require("path");

// 文件id
let ID = 0;

function createAsset(filename) {
  const content = fs.readFileSync(filename, { encoding: "utf-8" });

  const ast = babylon.parse(content, {
    sourceType: "module"
  });
  // 收集依赖
  const dependencies = [];
  // 遍历ast树，对不同的节点做不同的操作
  traverse(ast, {
    ImportDeclaration({ node }) {
      dependencies.push(node.source.value);
    }
  });
  const { code } = babelCore.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"]
  });
  const id = ID++;
  return {
    id,
    filename,
    dependencies,
    code
  };
}
// 组合资源
function createGraph(entry) {
  const mainAsset = createAsset(entry);
  // 存放modules数组
  const queue = [mainAsset];
  // 广度优先遍历文件，拿到所有文件信息（依赖，id）
  for (const asset of queue) {
    const dirname = path.dirname(asset.filename);
    // 存放文件的关联关系
    asset.mapping = {};
    asset.dependencies.forEach(relativePath => {
      // 计算 dependency 的绝对路径
      const absolutePath = path.join(dirname, relativePath);
      // 创建新的资源
      const child = createAsset(absolutePath);
      asset.mapping[relativePath] = child.id;
      queue.push(child);
    });
  }
  return queue;
}

// 将graph生成bundle
function bundle(graph) {
  let modules = "";
  graph.forEach(mod => {
    modules += `${mod.id}: [
      function (require, module, exports) {
        ${mod.code}
      },
      ${JSON.stringify(mod.mapping)},
    ],`;
  });
  const result = `
    (function(modules){
      function require(id){
        const [fn, mapping] = modules[id];
        function localRequire(relativePath){
          return require(mapping[relativePath]);
        }
        const module = { exports: {} };
        fn(localRequire, module, module.exports);

        return module.exports;
      }

      require(0);

    })({${modules}})
  `;
  return result;
}
const graph = createGraph("./example/entry.js");
const bundlejs = bundle(graph);

fs.writeFileSync("./bundle.js", bundlejs);
