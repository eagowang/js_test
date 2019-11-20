(function(modules) {
  function require(id) {
    const [fn, mapping] = modules[id];
    function localRequire(relativePath) {
      return require(mapping[relativePath]);
    }
    const module = { exports: {} };
    fn(localRequire, module, module.exports);

    return module.exports;
  }

  require(0);
})({
  0: [
    function(require, module, exports) {
      "use strict";

      var _a = _interopRequireDefault(require("./a.js"));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      console.log(" i am ".concat(_a["default"]));
    },
    { "./a.js": 1 }
  ],
  1: [
    function(require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;

      var _b = require("./b.js");

      var a = "yicccccary ".concat(_b.b);
      var _default = a;
      exports["default"] = _default;
    },
    { "./b.js": 2 }
  ],
  2: [
    function(require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.b = void 0;
      var b = "!!!";
      exports.b = b;
    },
    {}
  ]
});
