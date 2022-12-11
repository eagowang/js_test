const loaderUtils = require('loader-utils');
const path = require('path');
module.exports = function(content) {
  console.log(this.request);
  console.log(loaderUtils.parseString(this.request));
  console.log(path.parse(this.resourcePath));
  debugger;
  const filename = path.parse(this.resourcePath).base;
  const childFilename = 'extract-file';
  const childCompiler = this._compilation.createChildCompiler(filename, {
    filename: childFilename,
  });
  childCompiler.hooks.thisCompilation.tap('MpxWebpackPlugin', (compilation) => {
    compilation.hooks.normalModuleLoader.tap(
      'MpxWebpackPlugin',
      (loaderContext) => {}
    );
    compilation.hooks.succeedEntry.tap(
      'MpxWebpackPlugin',
      (entry, name, module) => {}
    );
  });

  let source;
  childCompiler.hooks.afterCompile.tapAsync(
    'MpxWebpackPlugin',
    (compilation, callback) => {
      debugger;
      source =
        compilation.assets[childFilename] &&
        compilation.assets[childFilename].source();

      // Remove all chunk assets
      compilation.chunks.forEach((chunk) => {
        chunk.files.forEach((file) => {
          delete compilation.assets[file];
        });
      });

      callback();
    }
  );
  childCompiler.runAsChild((err, entries, compilation) => {
    debugger;
  });
  this.callback(null, '');
};
