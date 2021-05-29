const path = require('path');
const loaderUtils = require('loader-utils');
const { EntryPlugin,Compiler } = require('webpack');
const fs = require('fs');
const resolve = (p) => path.resolve(__dirname, p);
const map = {};

module.exports = function(content) {
  return content
//  const name = 'lepus'
//  const dep = EntryPlugin.createDependency(resolve('../src/lepus/math.lepus'), name);
// // console.log(dep)
// console.log(this._compiler.context)
// this._compilation.addEntry(this._compiler.context, dep, name, (err, module) => {
//   console.log(err)
//   console.log(module)
//   // console.log(this._compilation)
//  this.async(err, module)
// })

  // console.log(content);
  // const lepus = resolve('../src/lepus/math.lepus');
  // fs.readdir(resolve('../src/lepus/math.lepus'), (err, files) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(files);
  // });
  // const files = fs.readdirSync(resolve('../src/lepus'));
  // console.log(files);
  // files.forEach((file) => {
  //   console.log(path.relative(this.context, file));
  // });
  // this.callback(null, content);
  // fs.statSync(file)
  // this.addDependency(lepus);
  // const entry = new EntryPlugin(this.contxt, '../src/lepus/math.lepus');
  // this._compilation.addEntry(this.context, '../src/lepus/math.lepus');
  // this._compilation.emitAsset();
  // this.addContextDependency(lepus);
  // const relativePath = path.relative(this.context, lepus);
  // console.log(relativePath);
  // console.log('verison', this.version);
  // console.log('query', this.query);
  // console.log('request', this.request);
  // console.log('context', this.context);
  // console.log('rootContext', this.rootContext);
  // console.log('loaders', this.loaders);
  // console.log('resource', this.resource);
  // console.log('resourcePath', this.resourcePath);
  // console.log('resourceQuery', this.resourceQuery);
  // console.log('target', this.target);
  // console.log('webpack', this.webpack);
  // console.log('sourceMap', this.sourceMap);
  // this.loadModule(resolve('../src/lepus/tool.lepus'), function(
  //   err,
  //   source,
  //   sourceMap,
  //   module
  // ) {
  //   // console.log(err);
  //   // console.log('source', source);
  //   // console.log('sourceMap', sourceMap);
  //   // console.log('module', module);s
  // });
  // this.resolve(this.context, './lepus/tool.lepus', function(err, result) {
  //   console.log('result', result);
  // });
  // console.log(this._compilation);
  // if (!map[relativePath]) {
  // map[relativePath] = true;
  // }
  // console.log(loaderUtils.getOptions(this));
  // console.log(loaderUtils.getRemainingRequest(this));
  // console.log(loaderUtils.isUrlRequest('src/lepus'));
  // console.log(loaderUtils.urlToRequest('src/lepus'));
  // console.log(loaderUtils.stringifyRequest(this, 'src/lepus'));
};
