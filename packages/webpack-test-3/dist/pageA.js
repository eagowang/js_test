/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
<<<<<<< HEAD
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
=======
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
>>>>>>> 6699f6a53d1911529f84d09e9d7d0d42506ce932
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
<<<<<<< HEAD
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
=======
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
>>>>>>> 6699f6a53d1911529f84d09e9d7d0d42506ce932
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_second__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/second */ \"./src/second.js\");\n/* harmony import */ var _src_second__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_second__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_second_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/second-2 */ \"./src/second-2.js\");\n\n\nconsole.log(11111);\nconst val = Object(_src_second_2__WEBPACK_IMPORTED_MODULE_1__[\"multi\"])(2, 2);\nconsole.log(val);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/second-2.js":
/*!*************************!*\
  !*** ./src/second-2.js ***!
  \*************************/
/*! exports provided: multi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multi\", function() { return multi; });\n/* harmony import */ var _third__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./third */ \"./src/third.js\");\n\nconsole.log(Object(_third__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(1, 2));\nfunction multi(a, b) {\n  return a * b;\n}\n\n\n//# sourceURL=webpack:///./src/second-2.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multi\", function() { return multi; });\n/* harmony import */ var _third__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./third */ \"./src/third.js\");\n\nconsole.log(Object(_third__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, 2));\nconsole.log(Object(_third__WEBPACK_IMPORTED_MODULE_0__[\"reduce\"])(2,1))\nfunction multi(a, b) {\n  return a * b;\n}\n\n\n//# sourceURL=webpack:///./src/second-2.js?");
>>>>>>> 6699f6a53d1911529f84d09e9d7d0d42506ce932

/***/ }),

/***/ "./src/second.js":
/*!***********************!*\
  !*** ./src/second.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('second');\n\n\n//# sourceURL=webpack:///./src/second.js?");

/***/ }),

/***/ "./src/third.js":
/*!**********************!*\
  !*** ./src/third.js ***!
  \**********************/
<<<<<<< HEAD
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\nfunction add(a, b) {\n  return a + b;\n}\n\n\n//# sourceURL=webpack:///./src/third.js?");
=======
/*! exports provided: default, reduce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return reduce; });\nfunction add(a, b) {\n  return a + b;\n}\nfunction reduce(a, b){\n  return a - b;\n}\n\n\n//# sourceURL=webpack:///./src/third.js?");
>>>>>>> 6699f6a53d1911529f84d09e9d7d0d42506ce932

/***/ })

/******/ });