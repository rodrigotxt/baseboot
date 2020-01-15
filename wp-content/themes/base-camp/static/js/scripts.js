/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"scripts": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./resources/assets/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/vue-components/YourComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/vue-components/YourComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      msg: 'Hello world!'
    };
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/intersection-observer/intersection-observer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/intersection-observer/intersection-observer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {
'use strict';

// Exit early if we're not running in a browser.
if (typeof window !== 'object') {
  return;
}

// Exit early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * A local reference to the document.
 */
var document = window.document;


/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observing a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  if (parent && parent.assignedSlot) {
    // If the parent is distributed in a <slot>, return the parent of a slot.
    return parent.assignedSlot.parentNode;
  }

  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}());


/***/ }),

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(window, factory) {
	var lazySizes = factory(window, window.document, Date);
	window.lazySizes = lazySizes;
	if( true && module.exports){
		module.exports = lazySizes;
	}
}(typeof window != 'undefined' ?
      window : {}, function l(window, document, Date) { // Pass in the windoe Date function also for SSR because the Date class can be lost
	'use strict';
	/*jshint eqnull:true */

	var lazysizes, lazySizesCfg;

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125,
		};

		lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesCfg)){
				lazySizesCfg[prop] = lazySizesDefaults[prop];
			}
		}
	})();

	if (!document || !document.getElementsByClassName) {
		return {
			init: function () {},
			cfg: lazySizesCfg,
			noSupport: true,
		};
	}

	var docElem = document.documentElement;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	/**
	 * Update to bind to window because 'this' becomes null during SSR
	 * builds.
	 */
	var addEventListener = window[_addEventListener].bind(window);

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('Event');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){
			if(full && full.src && !el[_getAttribute]('srcset')){
				el.setAttribute('srcset', full.src);
			}
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = lazySizesCfg.throttleDelay;
		var rICTimeout = lazySizesCfg.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesCfg.ricTimeout){
					rICTimeout = lazySizesCfg.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || delay < 9){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isVisible = function (elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
				beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if (!defaultExpand) {
						defaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?
							docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
							lazySizesCfg.expand;

						lazysizes._defEx = defaultExpand;

						preloadExpand = defaultExpand * lazySizesCfg.expFactor;
						hFac = lazySizesCfg.hFac;
						isBodyHidden = null;

						if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
							currentExpand = preloadExpand;
							lowRuns = 0;
						} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
							currentExpand = defaultExpand;
						} else {
							currentExpand = shrinkExpand;
						}
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			var elem = e.target;

			if (elem._lazyCache) {
				delete elem._lazyCache;
				return;
			}

			resetPreloading(e);
			addClass(elem, lazySizesCfg.loadedClass);
			removeClass(elem, lazySizesCfg.loadingClass);
			addRemoveLoadEvents(elem, rafSwitchLoadingClass);
			triggerEvent(elem, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			try {
				elem.contentWindow.location.replace(src);
			} catch(e){
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

			if( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesCfg.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
				src = elem[_getAttribute](lazySizesCfg.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				addClass(elem, lazySizesCfg.loadingClass);

				if(firesLoad){
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesCfg.lazyClass);

			rAF(function(){
				// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
				var isLoaded = elem.complete && elem.naturalWidth > 1;

				if( !firesLoad || isLoaded){
					if (isLoaded) {
						addClass(elem, 'ls-is-cached');
					}
					switchLoadingClass(event);
					elem._lazyCache = true;
					setTimeout(function(){
						if ('_lazyCache' in elem) {
							delete elem._lazyCache;
						}
					}, 9);
				}
				if (elem.loading == 'lazy') {
					isLoading--;
				}
			}, true);
		});

		var unveilElement = function (elem){
			if (elem._lazyRace) {return;}
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var afterScroll = debounce(function(){
			lazySizesCfg.loadMode = 3;
			throttledCheckElements();
		});

		var altLoadmodeScrollListner = function(){
			if(lazySizesCfg.loadMode == 3){
				lazySizesCfg.loadMode = 2;
			}
			afterScroll();
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}


			isCompleted = true;

			lazySizesCfg.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', altLoadmodeScrollListner, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				addEventListener('pageshow', function (e) {
					if (e.persisted) {
						var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

						if (loadingElements.length && loadingElements.forEach) {
							requestAnimationFrame(function () {
								loadingElements.forEach( function (img) {
									if (img.complete) {
										unveilElement(img);
									}
								});
							});
						}
					}
				});

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement,
			_aLSL: altLoadmodeScrollListner,
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i && document.getElementsByClassName){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	setTimeout(function(){
		if(lazySizesCfg.init){
			init();
		}
	});

	lazysizes = {
		cfg: lazySizesCfg,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));


/***/ }),

/***/ "./node_modules/lazysizes/plugins/respimg/ls.respimg.js":
/*!**************************************************************!*\
  !*** ./node_modules/lazysizes/plugins/respimg/ls.respimg.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(window, factory) {
	if(!window) {return;}
	var globalInstall = function(){
		factory(window.lazySizes);
		window.removeEventListener('lazyunveilread', globalInstall, true);
	};

	factory = factory.bind(null, window, window.document);

	if( true && module.exports){
		factory(__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js"));
	} else if(window.lazySizes) {
		globalInstall();
	} else {
		window.addEventListener('lazyunveilread', globalInstall, true);
	}
}(typeof window != 'undefined' ?
	window : 0, function(window, document, lazySizes) {
	/*jshint eqnull:true */
	'use strict';
	var polyfill;
	var lazySizesCfg = lazySizes.cfg;
	var img = document.createElement('img');
	var supportSrcset = ('sizes' in img) && ('srcset' in img);
	var regHDesc = /\s+\d+h/g;
	var fixEdgeHDescriptor = (function(){
		var regDescriptors = /\s+(\d+)(w|h)\s+(\d+)(w|h)/;
		var forEach = Array.prototype.forEach;

		return function(){
			var img = document.createElement('img');
			var removeHDescriptors = function(source){
				var ratio, match;
				var srcset = source.getAttribute(lazySizesCfg.srcsetAttr);
				if(srcset){
					if((match = srcset.match(regDescriptors))){
						if(match[2] == 'w'){
							ratio = match[1] / match[3];
						} else {
							ratio = match[3] / match[1];
						}

						if(ratio){
							source.setAttribute('data-aspectratio', ratio);
						}
						source.setAttribute(lazySizesCfg.srcsetAttr, srcset.replace(regHDesc, ''));
					}
				}
			};
			var handler = function(e){
				if(e.detail.instance != lazySizes){return;}
				var picture = e.target.parentNode;

				if(picture && picture.nodeName == 'PICTURE'){
					forEach.call(picture.getElementsByTagName('source'), removeHDescriptors);
				}
				removeHDescriptors(e.target);
			};

			var test = function(){
				if(!!img.currentSrc){
					document.removeEventListener('lazybeforeunveil', handler);
				}
			};

			document.addEventListener('lazybeforeunveil', handler);

			img.onload = test;
			img.onerror = test;

			img.srcset = 'data:,a 1w 1h';

			if(img.complete){
				test();
			}
		};
	})();

	if(!lazySizesCfg.supportsType){
		lazySizesCfg.supportsType = function(type/*, elem*/){
			return !type;
		};
	}

	if (window.HTMLPictureElement && supportSrcset) {
		if(!lazySizes.hasHDescriptorFix && document.msElementsFromPoint){
			lazySizes.hasHDescriptorFix = true;
			fixEdgeHDescriptor();
		}
		return;
	}

	if(window.picturefill || lazySizesCfg.pf){return;}

	lazySizesCfg.pf = function(options){
		var i, len;
		if(window.picturefill){return;}
		for(i = 0, len = options.elements.length; i < len; i++){
			polyfill(options.elements[i]);
		}
	};

	// partial polyfill
	polyfill = (function(){
		var ascendingSort = function( a, b ) {
			return a.w - b.w;
		};
		var regPxLength = /^\s*\d+\.*\d*px\s*$/;
		var reduceCandidate = function (srces) {
			var lowerCandidate, bonusFactor;
			var len = srces.length;
			var candidate = srces[len -1];
			var i = 0;

			for(i; i < len;i++){
				candidate = srces[i];
				candidate.d = candidate.w / srces.w;

				if(candidate.d >= srces.d){
					if(!candidate.cached && (lowerCandidate = srces[i - 1]) &&
						lowerCandidate.d > srces.d - (0.13 * Math.pow(srces.d, 2.2))){

						bonusFactor = Math.pow(lowerCandidate.d - 0.6, 1.6);

						if(lowerCandidate.cached) {
							lowerCandidate.d += 0.15 * bonusFactor;
						}

						if(lowerCandidate.d + ((candidate.d - srces.d) * bonusFactor) > srces.d){
							candidate = lowerCandidate;
						}
					}
					break;
				}
			}
			return candidate;
		};

		var parseWsrcset = (function(){
			var candidates;
			var regWCandidates = /(([^,\s].[^\s]+)\s+(\d+)w)/g;
			var regMultiple = /\s/;
			var addCandidate = function(match, candidate, url, wDescriptor){
				candidates.push({
					c: candidate,
					u: url,
					w: wDescriptor * 1
				});
			};

			return function(input){
				candidates = [];
				input = input.trim();
				input
					.replace(regHDesc, '')
					.replace(regWCandidates, addCandidate)
				;

				if(!candidates.length && input && !regMultiple.test(input)){
					candidates.push({
						c: input,
						u: input,
						w: 99
					});
				}

				return candidates;
			};
		})();

		var runMatchMedia = function(){
			if(runMatchMedia.init){return;}

			runMatchMedia.init = true;
			addEventListener('resize', (function(){
				var timer;
				var matchMediaElems = document.getElementsByClassName('lazymatchmedia');
				var run = function(){
					var i, len;
					for(i = 0, len = matchMediaElems.length; i < len; i++){
						polyfill(matchMediaElems[i]);
					}
				};

				return function(){
					clearTimeout(timer);
					timer = setTimeout(run, 66);
				};
			})());
		};

		var createSrcset = function(elem, isImage){
			var parsedSet;
			var srcSet = elem.getAttribute('srcset') || elem.getAttribute(lazySizesCfg.srcsetAttr);

			if(!srcSet && isImage){
				srcSet = !elem._lazypolyfill ?
					(elem.getAttribute(lazySizesCfg.srcAttr) || elem.getAttribute('src')) :
					elem._lazypolyfill._set
				;
			}

			if(!elem._lazypolyfill || elem._lazypolyfill._set != srcSet){

				parsedSet = parseWsrcset( srcSet || '' );
				if(isImage && elem.parentNode){
					parsedSet.isPicture = elem.parentNode.nodeName.toUpperCase() == 'PICTURE';

					if(parsedSet.isPicture){
						if(window.matchMedia){
							lazySizes.aC(elem, 'lazymatchmedia');
							runMatchMedia();
						}
					}
				}

				parsedSet._set = srcSet;
				Object.defineProperty(elem, '_lazypolyfill', {
					value: parsedSet,
					writable: true
				});
			}
		};

		var getX = function(elem){
			var dpr = window.devicePixelRatio || 1;
			var optimum = lazySizes.getX && lazySizes.getX(elem);
			return Math.min(optimum || dpr, 2.5, dpr);
		};

		var matchesMedia = function(media){
			if(window.matchMedia){
				matchesMedia = function(media){
					return !media || (matchMedia(media) || {}).matches;
				};
			} else {
				return !media;
			}

			return matchesMedia(media);
		};

		var getCandidate = function(elem){
			var sources, i, len, media, source, srces, src, width;

			source = elem;
			createSrcset(source, true);
			srces = source._lazypolyfill;

			if(srces.isPicture){
				for(i = 0, sources = elem.parentNode.getElementsByTagName('source'), len = sources.length; i < len; i++){
					if( lazySizesCfg.supportsType(sources[i].getAttribute('type'), elem) && matchesMedia( sources[i].getAttribute('media')) ){
						source = sources[i];
						createSrcset(source);
						srces = source._lazypolyfill;
						break;
					}
				}
			}

			if(srces.length > 1){
				width = source.getAttribute('sizes') || '';
				width = regPxLength.test(width) && parseInt(width, 10) || lazySizes.gW(elem, elem.parentNode);
				srces.d = getX(elem);
				if(!srces.src || !srces.w || srces.w < width){
					srces.w = width;
					src = reduceCandidate(srces.sort(ascendingSort));
					srces.src = src;
				} else {
					src = srces.src;
				}
			} else {
				src = srces[0];
			}

			return src;
		};

		var p = function(elem){
			if(supportSrcset && elem.parentNode && elem.parentNode.nodeName.toUpperCase() != 'PICTURE'){return;}
			var candidate = getCandidate(elem);

			if(candidate && candidate.u && elem._lazypolyfill.cur != candidate.u){
				elem._lazypolyfill.cur = candidate.u;
				candidate.cached = true;
				elem.setAttribute(lazySizesCfg.srcAttr, candidate.u);
				elem.setAttribute('src', candidate.u);
			}
		};

		p.parse = parseWsrcset;

		return p;
	})();

	if(lazySizesCfg.loadedClass && lazySizesCfg.loadingClass){
		(function(){
			var sels = [];
			['img[sizes$="px"][srcset].', 'picture > img:not([srcset]).'].forEach(function(sel){
				sels.push(sel + lazySizesCfg.loadedClass);
				sels.push(sel + lazySizesCfg.loadingClass);
			});
			lazySizesCfg.pf({
				elements: document.querySelectorAll(sels.join(', '))
			});
		})();

	}
}));


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/vue-components/YourComponent.vue?vue&type=style&index=0&id=3c389b6c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader??ref--2-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/vue-components/YourComponent.vue?vue&type=style&index=0&id=3c389b6c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/sal.js/dist/sal.js":
/*!*****************************************!*\
  !*** ./node_modules/sal.js/dist/sal.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a="Sal was not initialised! Probably it is used in SSR.",s="Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",l={rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},u=[],c=null,f=function(e,t){var n=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(n)},d=function(){document.body.classList.add(l.disabledClassName)},b=function(){return l.disabled||"function"==typeof l.disabled&&l.disabled()},p=function(e,t){e.forEach((function(e){e.intersectionRatio>=l.threshold?(!function(e){e.target.classList.add(l.animateClassName),f(l.enterEventName,e)}(e),l.once&&t.unobserve(e.target)):l.once||function(e){e.target.classList.remove(l.animateClassName),f(l.exitEventName,e)}(e)}))},m=function(){d(),c.disconnect(),c=null},y=function(){document.body.classList.remove(l.disabledClassName),c=new IntersectionObserver(p,{rootMargin:l.rootMargin,threshold:l.threshold}),(u=[].filter.call(document.querySelectorAll(l.selector),(function(e){return!function(e){return e.classList.contains(l.animateClassName)}(e,l.animateClassName)}))).forEach((function(e){return c.observe(e)}))};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;if(e!==l&&(l=o({},l,{},e)),"undefined"==typeof window)return console.warn(a),{elements:u,disable:m,enable:y};if(!window.IntersectionObserver)throw d(),Error(s);return b()?d():y(),{elements:u,disable:m,enable:y}}},function(e,t,n){}]).default}));
//# sourceMappingURL=sal.js.map

/***/ }),

/***/ "./node_modules/scroll-out/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/scroll-out/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function clamp(v, min, max) {
    return min > v ? min : max < v ? max : v;
}
function sign(x) {
    return (+(x > 0) - +(x < 0));
}
function round(n) {
    return Math.round(n * 10000) / 10000;
}

var cache = {};
function replacer(match) {
    return '-' + match[0].toLowerCase();
}
function hyphenate(value) {
    return cache[value] || (cache[value] = value.replace(/([A-Z])/g, replacer));
}

/** find elements */
function $(e, parent) {
    return !e || e.length === 0
        ? // null or empty string returns empty array
            []
        : e.nodeName
            ? // a single element is wrapped in an array
                [e]
            : // selector and NodeList are converted to Element[]
                [].slice.call(e[0].nodeName ? e : (parent || document.documentElement).querySelectorAll(e));
}
function setAttrs(el, attrs) {
    // tslint:disable-next-line:forin
    for (var key in attrs) {
        if (key.indexOf('_')) {
            el.setAttribute('data-' + hyphenate(key), attrs[key]);
        }
    }
}
function setProps(cssProps) {
    return function (el, props) {
        for (var key in props) {
            if (key.indexOf('_') && (cssProps === true || cssProps[key])) {
                el.style.setProperty('--' + hyphenate(key), round(props[key]));
            }
        }
    };
}

var clearTask;
var subscribers = [];
function loop() {
    // process subscribers
    var s = subscribers.slice();
    s.forEach(function (s2) { return s2(); });
    // schedule next loop if the queue needs it
    clearTask = subscribers.length ? requestAnimationFrame(loop) : 0;
}
function subscribe(fn) {
    subscribers.push(fn);
    if (!clearTask) {
        loop();
    }
    return function () {
        subscribers = subscribers.filter(function (s) { return s !== fn; });
        if (!subscribers.length && clearTask) {
            clearTask = 0;
            cancelAnimationFrame(clearTask);
        }
    };
}

function noop() { }

/**
 * Creates a new instance of ScrollOut that marks elements in the viewport with
 * an "in" class and marks elements outside of the viewport with an "out"
 */
// tslint:disable-next-line:no-default-export
function main (opts) {
    // Apply default options.
    opts = opts || {};
    // Debounce onChange/onHidden/onShown.
    var onChange = opts.onChange || noop;
    var onHidden = opts.onHidden || noop;
    var onShown = opts.onShown || noop;
    var onScroll = opts.onScroll || noop;
    var props = opts.cssProps ? setProps(opts.cssProps) : noop;
    var se = opts.scrollingElement;
    var container = se ? $(se)[0] : window;
    var doc = se ? $(se)[0] : document.documentElement;
    var rootChanged = false;
    var scrollingElementContext = {};
    var elementContextList = [];
    var clientOffsetX, clientOffsety;
    var sub = subscribe(render);
    function index() {
        elementContextList = $(opts.targets || '[data-scroll]', $(opts.scope || doc)[0]).map(function (el) { return ({ element: el }); });
    }
    function update() {
        // Calculate position, direction and ratio.
        var clientWidth = doc.clientWidth;
        var clientHeight = doc.clientHeight;
        var scrollDirX = sign(-clientOffsetX + (clientOffsetX = doc.scrollLeft || window.pageXOffset));
        var scrollDirY = sign(-clientOffsety + (clientOffsety = doc.scrollTop || window.pageYOffset));
        var scrollPercentX = doc.scrollLeft / (doc.scrollWidth - clientWidth || 1);
        var scrollPercentY = doc.scrollTop / (doc.scrollHeight - clientHeight || 1);
        // Detect if the root context has changed.
        rootChanged =
            rootChanged ||
                scrollingElementContext.scrollDirX !== scrollDirX ||
                scrollingElementContext.scrollDirY !== scrollDirY ||
                scrollingElementContext.scrollPercentX !== scrollPercentX ||
                scrollingElementContext.scrollPercentY !== scrollPercentY;
        scrollingElementContext.scrollDirX = scrollDirX;
        scrollingElementContext.scrollDirY = scrollDirY;
        scrollingElementContext.scrollPercentX = scrollPercentX;
        scrollingElementContext.scrollPercentY = scrollPercentY;
        var childChanged = false;
        for (var index_1 = 0; index_1 < elementContextList.length; index_1++) {
            var ctx = elementContextList[index_1];
            var element = ctx.element;
            // find the distance from the element to the scrolling container
            var target = element;
            var offsetX = 0;
            var offsetY = 0;
            do {
                offsetX += target.offsetLeft;
                offsetY += target.offsetTop;
                target = target.offsetParent;
            } while (target && target !== container);
            // Get element dimensions.
            var elementHeight = element.clientHeight || element.offsetHeight || 0;
            var elementWidth = element.clientWidth || element.offsetWidth || 0;
            // Find visible ratios for each element.
            var visibleX = (clamp(offsetX + elementWidth, clientOffsetX, clientOffsetX + clientWidth) -
                clamp(offsetX, clientOffsetX, clientOffsetX + clientWidth)) /
                elementWidth;
            var visibleY = (clamp(offsetY + elementHeight, clientOffsety, clientOffsety + clientHeight) -
                clamp(offsetY, clientOffsety, clientOffsety + clientHeight)) /
                elementHeight;
            var intersectX = visibleX === 1 ? 0 : sign(offsetX - clientOffsetX);
            var intersectY = visibleY === 1 ? 0 : sign(offsetY - clientOffsety);
            var viewportX = clamp((clientOffsetX - (elementWidth / 2 + offsetX - clientWidth / 2)) / (clientWidth / 2), -1, 1);
            var viewportY = clamp((clientOffsety - (elementHeight / 2 + offsetY - clientHeight / 2)) / (clientHeight / 2), -1, 1);
            var visible = +(opts.offset
                ? opts.offset <= clientOffsety
                : (opts.threshold || 0) < visibleX * visibleY);
            var changedVisible = ctx.visible !== visible;
            var changed = ctx._changed ||
                changedVisible ||
                ctx.visibleX !== visibleX ||
                ctx.visibleY !== visibleY ||
                ctx.index !== index_1 ||
                ctx.elementHeight !== elementHeight ||
                ctx.elementWidth !== elementWidth ||
                ctx.offsetX !== offsetX ||
                ctx.offsetY !== offsetY ||
                ctx.intersectX !== ctx.intersectX ||
                ctx.intersectY !== ctx.intersectY ||
                ctx.viewportX !== viewportX ||
                ctx.viewportY !== viewportY;
            if (changed) {
                childChanged = true;
                ctx._changed = true;
                ctx._visibleChanged = changedVisible;
                ctx.visible = visible;
                ctx.elementHeight = elementHeight;
                ctx.elementWidth = elementWidth;
                ctx.index = index_1;
                ctx.offsetX = offsetX;
                ctx.offsetY = offsetY;
                ctx.visibleX = visibleX;
                ctx.visibleY = visibleY;
                ctx.intersectX = intersectX;
                ctx.intersectY = intersectY;
                ctx.viewportX = viewportX;
                ctx.viewportY = viewportY;
                ctx.visible = visible;
            }
        }
        if (!sub && (rootChanged || childChanged)) {
            sub = subscribe(render);
        }
    }
    function render() {
        maybeUnsubscribe();
        // Update root attributes if they have changed.
        if (rootChanged) {
            rootChanged = false;
            setAttrs(doc, {
                scrollDirX: scrollingElementContext.scrollDirX,
                scrollDirY: scrollingElementContext.scrollDirY
            });
            props(doc, scrollingElementContext);
            onScroll(doc, scrollingElementContext, elementContextList);
        }
        var len = elementContextList.length;
        for (var x = len - 1; x > -1; x--) {
            var ctx = elementContextList[x];
            var el = ctx.element;
            var visible = ctx.visible;
            if (ctx._changed) {
                ctx._changed = false;
                props(el, ctx);
            }
            if (ctx._visibleChanged) {
                setAttrs(el, { scroll: visible ? 'in' : 'out' });
                onChange(el, ctx, doc);
                (visible ? onShown : onHidden)(el, ctx, doc);
            }
            // if this is shown multiple times, keep it in the list
            if (visible && opts.once) {
                elementContextList.splice(x, 1);
            }
        }
    }
    function maybeUnsubscribe() {
        if (sub) {
            sub();
            sub = undefined;
        }
    }
    // Run initialize index.
    index();
    update();
    // Hook up document listeners to automatically detect changes.
    window.addEventListener('resize', update);
    container.addEventListener('scroll', update);
    return {
        index: index,
        update: update,
        teardown: function () {
            maybeUnsubscribe();
            window.removeEventListener('resize', update);
            container.removeEventListener('scroll', update);
        }
    };
}

module.exports = main;


/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ }),

/***/ "./node_modules/vue-bulma-accordion/dist/vue-bulma-accordion.umd.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vue-bulma-accordion/dist/vue-bulma-accordion.umd.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
     true ? factory(exports) :
    undefined;
}(this, function (exports) { 'use strict';

    //
    //
    //
    //
    //
    //

    var script = {
        name: "bulma-accordion",
        props: {
            initialOpenItem: {
                required: false,
                type: [Number, String],
                default: null
            },
            initialOpenItems: {
                required: false,
                type: Array,
                default: null,
                validator: function (items) { return Array.isArray(items) &&
                    !items.some(function (n) { return typeof n !== "number"; }); }
            },
            caretAnimation: {
                required: false,
                type: Object,
                default: function () { return ({
                    duration: "450ms",
                    timerFunc: "ease"
                }); },
                validator: function (config) {
                    var isValid =
                        (typeof config.duration === "string" &&
                            typeof config.timerFunc === "string") ||
                        config.none === true;
                    return isValid;
                }
            },
            dropdown: {
                required: false,
                type: Boolean,
                default: false
            },
            icon: {
                required: false,
                type: String,
                default: "caret",
                validator: function (choice) {
                    var isValid =
                        choice === "caret" ||
                        choice === "plus-minus" ||
                        choice === "custom";
                    return isValid;
                }
            },
            slide: {
                required: false,
                type: Object,
                default: function () { return ({
                    duration: "700ms",
                    timerFunc: "ease"
                }); },
                validator: function (config) {
                    var isValid =
                        typeof config.duration === "string" &&
                        typeof config.timerFunc === "string";
                    return isValid;
                }
            }
        },
        mounted: function mounted() {
            var this$1 = this;

            this.$on("child-registered", function (child) {
                var id = this$1.getNextId();
                child.setUniqueId(id);
                this$1.children_toggle_status[id] = false;
            });
            this.$on("child-clicked", this.handleChildClicked);
            this.$on("child-removed", function (child_id) {
                delete this$1.children_toggle_status[child_id];
            });
            this.$nextTick(function () {
                this$1.openInitialItems(this$1.$children.length);
            });
        },
        data: function data() {
            return {
                next_id: 1,
                children_toggle_status: {}
            };
        },
        methods: {
            getNextId: function getNextId() {
                var v = this.next_id.toString(10);
                this.next_id += 1;
                return v;
            },
            handleChildClicked: function handleChildClicked(child_id) {
                if (!this.dropdown) {
                    for (var id in this.children_toggle_status) {
                        if (this.children_toggle_status[id] && id !== child_id) {
                            this.$emit("toggle-child", id);
                            this.children_toggle_status[id] = false;
                        }
                    }
                }
                this.children_toggle_status[child_id] = !this
                    .children_toggle_status[child_id];
                this.$emit("toggle-child", child_id);
            },
            openInitialItems: function openInitialItems(items_length) {
                var this$1 = this;

                var i = this.initialOpenItem;
                var is = this.initialOpenItems;
                if (i !== null) {
                    this.openInitialItem(i, items_length);
                } else if (is !== null) {
                    is.forEach(function (item, idx) {
                        this$1.openInitialItem(item, items_length);
                    });
                }
            },
            openInitialItem: function openInitialItem(item, items_length) {
                var num_item =
                    typeof item === "number" ? item : parseInt(item, 10);
                if (num_item > 0 && num_item <= items_length) {
                    this.handleChildClicked(String(num_item));
                } else {
                    throw new Error(
                        ("There are only " + items_length + " AccordionItems, " + num_item + " is out of bounds. [indexing from 1]")
                    );
                }
            }
        }
    };

    /* script */
                var __vue_script__ = script;
                
    /* template */
    var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"accordion"},[_vm._t("default")],2)};
    var __vue_staticRenderFns__ = [];

      /* style */
      var __vue_inject_styles__ = undefined;
      /* scoped */
      var __vue_scope_id__ = undefined;
      /* module identifier */
      var __vue_module_identifier__ = undefined;
      /* functional template */
      var __vue_is_functional_template__ = false;
      /* component normalizer */
      function __vue_normalize__(
        template, style, script$$1,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "BulmaAccordion.vue";

        if (!component.render) {
          component.render = template.render;
          component.staticRenderFns = template.staticRenderFns;
          component._compiled = true;

          if (functional) { component.functional = true; }
        }

        component._scopeId = scope;

        return component
      }
      /* style inject */
      
      /* style inject SSR */
      

      
      var BulmaAccordion = __vue_normalize__(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        undefined,
        undefined
      );

    //
    //
    //
    //
    //
    //
    //

    var script$1 = {
        props: {
            minus: {
                required: true,
                type: Boolean
            }
        },
        computed: {
            verticalClasses: function verticalClasses() {
                return {
                    vertical: true,
                    "vertical-rotated": this.minus
                };
            }
        }
    };

    /* script */
                var __vue_script__$1 = script$1;
                
    /* template */
    var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"plus-minus"},[_c('div',{staticClass:"horizontal"}),_vm._v(" "),_c('div',{class:_vm.verticalClasses})])};
    var __vue_staticRenderFns__$1 = [];

      /* style */
      var __vue_inject_styles__$1 = function (inject) {
        if (!inject) { return }
        inject("data-v-6b0c21ae_0", { source: ".horizontal[data-v-6b0c21ae],.vertical[data-v-6b0c21ae]{position:absolute;border-radius:3px;background:#646464;transform:rotate(0);transition:.4s all ease-out}.horizontal[data-v-6b0c21ae]{top:45%;left:10%;right:10%;height:10%}.vertical[data-v-6b0c21ae]{top:10%;bottom:10%;left:45%;width:10%}.vertical-rotated[data-v-6b0c21ae]{transform:rotate(90deg)}.plus-minus[data-v-6b0c21ae]{position:relative;display:block;width:100%;height:100%}", map: undefined, media: undefined });

      };
      /* scoped */
      var __vue_scope_id__$1 = "data-v-6b0c21ae";
      /* module identifier */
      var __vue_module_identifier__$1 = undefined;
      /* functional template */
      var __vue_is_functional_template__$1 = false;
      /* component normalizer */
      function __vue_normalize__$1(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        var component = (typeof script === 'function' ? script.options : script) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "PlusMinus.vue";

        if (!component.render) {
          component.render = template.render;
          component.staticRenderFns = template.staticRenderFns;
          component._compiled = true;

          if (functional) { component.functional = true; }
        }

        component._scopeId = scope;

        {
          var hook;
          if (style) {
            hook = function(context) {
              style.call(this, createInjector(context));
            };
          }

          if (hook !== undefined) {
            if (component.functional) {
              // register for functional component in vue file
              var originalRender = component.render;
              component.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context)
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = component.beforeCreate;
              component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }
        }

        return component
      }
      /* style inject */
      function __vue_create_injector__() {
        var head = document.head || document.getElementsByTagName('head')[0];
        var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
        var isOldIE =
          typeof navigator !== 'undefined' &&
          /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

        return function addStyle(id, css) {
          if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

          var group = isOldIE ? css.media || 'default' : id;
          var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

          if (!style.ids.includes(id)) {
            var code = css.source;
            var index = style.ids.length;

            style.ids.push(id);

            if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                ' */';
            }

            if (isOldIE) {
              style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }

            if (!style.element) {
              var el = style.element = document.createElement('style');
              el.type = 'text/css';

              if (css.media) { el.setAttribute('media', css.media); }
              if (isOldIE) {
                el.setAttribute('data-group', group);
                el.setAttribute('data-next-index', '0');
              }

              head.appendChild(el);
            }

            if (isOldIE) {
              index = parseInt(style.element.getAttribute('data-next-index'));
              style.element.setAttribute('data-next-index', index + 1);
            }

            if (style.element.styleSheet) {
              style.parts.push(code);
              style.element.styleSheet.cssText = style.parts
                .filter(Boolean)
                .join('\n');
            } else {
              var textNode = document.createTextNode(code);
              var nodes = style.element.childNodes;
              if (nodes[index]) { style.element.removeChild(nodes[index]); }
              if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
              else { style.element.appendChild(textNode); }
            }
          }
        }
      }
      /* style inject SSR */
      

      
      var PlusMinus = __vue_normalize__$1(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
        __vue_create_injector__,
        undefined
      );

    // got this from https://stackoverflow.com/a/9090128, tidied it up somewhat
    function transitionEndEventName(el) {
        var transitions = {
            transition: 'transitionend',
            OTransition: 'otransitionend', // oTransitionEnd in very old Opera
            MozTransition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd'
        };
        for (var t in transitions) {
            if (transitions.hasOwnProperty(t) && el.style[t] !== undefined) {
                return transitions[t]
            }
        }
        throw new Error('TransitionEnd event is not supported in this browser')
    }

    //
    var script$2 = {
        name: "bulma-accordion-item",
        components: {
            PlusMinus: PlusMinus
        },
        data: function data() {
            return {
                isOpen: false,
                autoHeightInterval: null,
                showCardContent: false,
                uniqueId: null
            };
        },
        mounted: function mounted() {
            var this$1 = this;

            this.$nextTick(function () {
                this$1.$parent.$emit("child-registered", this$1);
                this$1.$parent.$on("toggle-child", this$1.handleToggleRequest);

                var accordionBody = this$1.$refs.body;
                var eName = transitionEndEventName(accordionBody);
                accordionBody.addEventListener(eName, function (e) {
                    if (accordionBody.style.height !== "0px") {
                        this$1.autoHeightStart(accordionBody);
                    } else {
                        this$1.autoHeightStop();
                        this$1.showCardContent = false;
                    }
                });
            });
        },
        beforeDestroy: function beforeDestroy() {
            this.$parent.$emit("child-removed", this.uniqueId);
        },
        watch: {
            isOpen: function isOpen(newStatus) {
                if (newStatus) {
                    this.$emit("open");
                } else {
                    this.$emit("close");
                }
                this.doTheSlide();
            }
        },
        computed: {
            config: function config() {
                var ref = this.$parent;
                var animation = ref.caretAnimation; if ( animation === void 0 ) animation = {
                        duration: "450ms",
                        timerFunc: "ease"
                    };
                var dropdown = ref.dropdown; if ( dropdown === void 0 ) dropdown = false;
                var icon = ref.icon; if ( icon === void 0 ) icon = "caret";
                var slide = ref.slide; if ( slide === void 0 ) slide = {
                        duration: "700ms",
                        timerFunc: "ease"
                    };
                return {
                    animation: animation,
                    dropdown: dropdown,
                    icon: icon,
                    slide: slide
                };
            },
            dropdownIconClasses: function dropdownIconClasses() {
                return {
                    "header-icon": true,
                    "caret-down": !this.isOpen
                };
            },
            card_classes: function card_classes() {
                return {
                    card: true,
                    "card-active": this.isOpen
                };
            },
            card_content_classes: function card_content_classes() {
                return {
                    "card-content": true,
                    "is-hidden": !this.showCardContent
                };
            },
            footerClasses: function footerClasses() {
                return {
                    "card-footer": true,
                    "is-hidden": !this.$slots.footer
                };
            },
            usingCustomIcon: function usingCustomIcon() {
                return this.config.icon === "custom";
            },
            showCaret: function showCaret() {
                return this.config.icon === "caret";
            },
            showPlus: function showPlus() {
                return this.config.icon === "plus-minus" && !this.isOpen;
            },
            showMinus: function showMinus() {
                return this.config.icon === "plus-minus" && this.isOpen;
            },
            slideStyle: function slideStyle() {
                var c = this.config.slide;
                return {
                    transition: ("all " + (c.duration) + " " + (c.timerFunc))
                };
            },
            iconStyle: function iconStyle() {
                var c = this.config.animation;
                if (c.none === true) {
                    return {};
                }
                return {
                    transition: ("all " + (c.duration) + " " + (c.timerFunc))
                };
            }
        },
        methods: {
            handleToggleRequest: function handleToggleRequest(toggleId) {
                if (toggleId === this.uniqueId) {
                    this.toggleCollapsed();
                }
            },
            setUniqueId: function setUniqueId(id) {
                this.uniqueId = id;
            },
            notifyOfClick: function notifyOfClick() {
                if (this.uniqueId) {
                    this.$parent.$emit("child-clicked", this.uniqueId);
                }
            },
            collapse: function collapse() {
                this.isOpen = false;
            },
            toggleCollapsed: function toggleCollapsed() {
                this.isOpen = !this.isOpen;
            },
            doTheSlide: function doTheSlide() {
                var this$1 = this;

                var el = this.$refs.body;
                if (this.isOpen === true) {
                    this.showCardContent = true;
                    this.$nextTick().then(function () {
                        this$1.adjustHeight(el, el.scrollHeight);
                    });
                } else {
                    this.slideUp(el);
                }
            },
            adjustHeight: function adjustHeight(el, newHeight) {
                el.style.height = newHeight + "px";
            },
            slideUp: function slideUp(el) {
                if (el.style.height === "auto") {
                    el.style.height = (el.scrollHeight) + "px";
                }
                el.style.height = "0px";
            },
            autoHeightStart: function autoHeightStart(el) {
                var this$1 = this;

                // clear running interval
                if (this.autoHeightInterval) { this.autoHeightStop(); }
                this.autoHeightInterval = setInterval(function () {
                    // set height for comparison to scrollHeight
                    try {
                        var actualHeight =
                            this$1.$refs.bodyContent.scrollHeight +
                            this$1.$refs.bodyFooter.scrollHeight +
                            1;
                        if (
                            el.style.height !== "0px" &&
                            actualHeight !== el.style.height &&
                            this$1.isOpen
                        ) {
                            this$1.adjustHeight(el, actualHeight);
                        }
                    } catch (e) {
                        this$1.autoHeightStop();
                    }
                }, 100);
            },
            autoHeightStop: function autoHeightStop() {
                clearInterval(this.autoHeightInterval);
                this.autoHeightInterval = null;
            }
        }
    };

    /* script */
                var __vue_script__$2 = script$2;
                
    /* template */
    var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.card_classes},[_c('div',{staticClass:"card-header",on:{"click":_vm.notifyOfClick}},[_c('p',{staticClass:"card-header-title"},[_vm._t("title")],2),_vm._v(" "),_c('p',{staticClass:"card-header-icon"},[(!_vm.usingCustomIcon)?_c('span',{staticClass:"icon"},[(_vm.showCaret)?_c('svg',{class:_vm.dropdownIconClasses,style:(_vm.iconStyle),attrs:{"version":"1.1","viewBox":"0 0 129 129","enable-background":"new 0 0 129 129"}},[_c('g',[_c('path',{attrs:{"d":"m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"}})])]):_vm._e(),_vm._v(" "),(_vm.showPlus || _vm.showMinus)?_c('PlusMinus',{attrs:{"minus":_vm.showMinus}}):_vm._e()],1):_c('span',{staticClass:"icon"},[_vm._t("icon"),_vm._v(" "),(_vm.isOpen)?_vm._t("icon-open"):_vm._t("icon-closed")],2)])]),_vm._v(" "),_c('div',{ref:"body",staticClass:"accordion-body",style:(_vm.slideStyle)},[_c('div',{ref:"bodyContent",class:_vm.card_content_classes},[_vm._t("content")],2),_vm._v(" "),_c('div',{ref:"bodyFooter",class:_vm.footerClasses},[_vm._t("footer")],2)])])};
    var __vue_staticRenderFns__$2 = [];

      /* style */
      var __vue_inject_styles__$2 = function (inject) {
        if (!inject) { return }
        inject("data-v-bc7d9a68_0", { source: ".accordion-body[data-v-bc7d9a68]{height:0;overflow:hidden}.caret-down[data-v-bc7d9a68]{transform:rotate(180deg)}.header-icon[data-v-bc7d9a68]{width:100%}", map: undefined, media: undefined });

      };
      /* scoped */
      var __vue_scope_id__$2 = "data-v-bc7d9a68";
      /* module identifier */
      var __vue_module_identifier__$2 = undefined;
      /* functional template */
      var __vue_is_functional_template__$2 = false;
      /* component normalizer */
      function __vue_normalize__$2(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        var component = (typeof script === 'function' ? script.options : script) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "BulmaAccordionItem.vue";

        if (!component.render) {
          component.render = template.render;
          component.staticRenderFns = template.staticRenderFns;
          component._compiled = true;

          if (functional) { component.functional = true; }
        }

        component._scopeId = scope;

        {
          var hook;
          if (style) {
            hook = function(context) {
              style.call(this, createInjector(context));
            };
          }

          if (hook !== undefined) {
            if (component.functional) {
              // register for functional component in vue file
              var originalRender = component.render;
              component.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context)
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = component.beforeCreate;
              component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }
        }

        return component
      }
      /* style inject */
      function __vue_create_injector__$1() {
        var head = document.head || document.getElementsByTagName('head')[0];
        var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
        var isOldIE =
          typeof navigator !== 'undefined' &&
          /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

        return function addStyle(id, css) {
          if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

          var group = isOldIE ? css.media || 'default' : id;
          var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

          if (!style.ids.includes(id)) {
            var code = css.source;
            var index = style.ids.length;

            style.ids.push(id);

            if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                ' */';
            }

            if (isOldIE) {
              style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }

            if (!style.element) {
              var el = style.element = document.createElement('style');
              el.type = 'text/css';

              if (css.media) { el.setAttribute('media', css.media); }
              if (isOldIE) {
                el.setAttribute('data-group', group);
                el.setAttribute('data-next-index', '0');
              }

              head.appendChild(el);
            }

            if (isOldIE) {
              index = parseInt(style.element.getAttribute('data-next-index'));
              style.element.setAttribute('data-next-index', index + 1);
            }

            if (style.element.styleSheet) {
              style.parts.push(code);
              style.element.styleSheet.cssText = style.parts
                .filter(Boolean)
                .join('\n');
            } else {
              var textNode = document.createTextNode(code);
              var nodes = style.element.childNodes;
              if (nodes[index]) { style.element.removeChild(nodes[index]); }
              if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
              else { style.element.appendChild(textNode); }
            }
          }
        }
      }
      /* style inject SSR */
      

      
      var BulmaAccordionItem = __vue_normalize__$2(
        { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
        __vue_inject_styles__$2,
        __vue_script__$2,
        __vue_scope_id__$2,
        __vue_is_functional_template__$2,
        __vue_module_identifier__$2,
        __vue_create_injector__$1,
        undefined
      );



    var components = /*#__PURE__*/Object.freeze({
        BulmaAccordion: BulmaAccordion,
        BulmaAccordionItem: BulmaAccordionItem
    });

    // Declare install function executed by Vue.use()
    function install(Vue) {
        if (install.installed) { return }
        install.installed = true;
        Object.keys(components).forEach(function (componentName) {
            Vue.component(componentName, components[componentName]);
        });
    }

    var plugin = {
        install: install
    };

    var GlobalVue = null;
    if (typeof window !== 'undefined') {
        GlobalVue = window.Vue;
    } else if (typeof global !== 'undefined') {
        GlobalVue = global.Vue;
    }
    if (GlobalVue) {
        GlobalVue.use(plugin);
    }

    var BulmaAccordion$1 = BulmaAccordion;
    var BulmaAccordionItem$1 = BulmaAccordionItem;

    exports.install = install;
    exports.BulmaAccordion = BulmaAccordion$1;
    exports.BulmaAccordionItem = BulmaAccordionItem$1;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/vue-components/YourComponent.vue?vue&type=template&id=3c389b6c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/vue-components/YourComponent.vue?vue&type=template&id=3c389b6c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "example" }, [_vm._v(_vm._s(_vm.msg))])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-owl-carousel/dist/vue-owl-carousel.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-owl-carousel/dist/vue-owl-carousel.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var i=n(1)(n(2),n(15),null,null);e.exports=i.exports},function(e,t){e.exports=function(e,t,n,i){var r,o=e=e||{},s=typeof e["default"];"object"!==s&&"function"!==s||(r=e,o=e["default"]);var a="function"==typeof o?o.options:o;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),i){var l=Object.create(a.computed||null);Object.keys(i).forEach(function(e){var t=i[e];l[e]=function(){return t}}),a.computed=l}return{esModule:r,exports:o,options:a}}},function(e,t,n){(function(e){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),n(4),n(11),n(13);var r=n(14),o=i(r);t["default"]={name:"VOwlCarousel",props:{items:{type:Number,"default":3},margin:{type:Number,"default":0},loop:{type:Boolean,"default":!1},center:{type:Boolean,"default":!1},mouseDrag:{type:Boolean,"default":!0},touchDrag:{type:Boolean,"default":!0},pullDrag:{type:Boolean,"default":!0},freeDrag:{type:Boolean,"default":!1},stagePadding:{type:Number,"default":0},merge:{type:Boolean,"default":!1},mergeFit:{type:Boolean,"default":!1},autoWidth:{type:Boolean,"default":!1},startPosition:{type:Number,"default":0},uRLhashListener:{type:Boolean,"default":!1},nav:{type:Boolean,"default":!0},rewind:{type:Boolean,"default":!0},navText:{type:Array,"default":function(){return["next","prev"]}},navElement:{type:String,"default":"div"},slideBy:{type:[Number,String],"default":1},slideTransition:{type:String,"default":""},dots:{type:Boolean,"default":!0},dotsEach:{type:[Number,Boolean],"default":!1},dotsData:{type:Boolean,"default":!1},lazyLoad:{type:Boolean,"default":!1},lazyLoadEager:{type:Number,"default":0},autoplay:{type:Boolean,"default":!1},autoplaySpeed:{type:Boolean,"default":!1},autoplayTimeout:{type:Number,"default":5e3},autoplayHoverPause:{type:Boolean,"default":!1},smartSpeed:{type:Number,"default":250},fluidSpeed:{type:[Number,Boolean],"default":!1},navSpeed:{type:[Number,Boolean],"default":!1},dragEndSpeed:{type:[Number,Boolean],"default":!1},callbacks:{type:Boolean,"default":!0},responsive:{type:Object,"default":function(){}},responsiveRefreshRate:{type:Number,"default":200},video:{type:Boolean,"default":!1},videoHeight:{type:[Number,Boolean],"default":!1},videoWidth:{type:[Number,Boolean],"default":!1},animateOut:{type:[String,Boolean],"default":!1},animateIn:{type:[String,Boolean],"default":!1},fallbackEasing:{type:String,"default":"swing"},info:{type:Function,"default":function(){}},itemElement:{type:String,"default":"div"},stageElement:{type:String,"default":"div"},navContainer:{type:[String,Boolean],"default":!1},dotsContainer:{type:[String,Boolean],"default":!1},checkVisible:{type:Boolean,"default":!0}},data:function(){return{showPrev:!1,showNext:!0,prevHandler:"carousel_prev_"+this.generateUniqueId(),elementHandle:"carousel_"+this.generateUniqueId(),nextHandler:"carousel_next_"+this.generateUniqueId()}},mounted:function(){var t=this,n=e("#"+this.elementHandle).owlCarousel({items:this.items,margin:this.margin,loop:this.loop,center:this.center,mouseDrag:this.mouseDrag,touchDrag:this.touchDrag,pullDrag:this.pullDrag,freeDrag:this.freeDrag,stagePadding:this.stagePadding,merge:this.merge,mergeFit:this.mergeFit,autoWidth:this.autoWidth,startPosition:this.startPosition,uRLhashListener:this.uRLhashListener,nav:this.nav,rewind:this.rewind,navText:this.navText,navElement:this.navElement,slideBy:this.slideBy,slideTransition:this.slideTransition,dots:this.dots,dotsEach:this.dotsEach,dotsData:this.dotsData,lazyLoad:this.lazyLoad,lazyLoadEager:this.lazyLoadEager,autoplay:this.autoplay,autoplaySpeed:this.autoplaySpeed,autoplayTimeout:this.autoplayTimeout,autoplayHoverPause:this.autoplayHoverPause,smartSpeed:this.smartSpeed,fluidSpeed:this.fluidSpeed,navSpeed:this.navSpeed,dragEndSpeed:this.dragEndSpeed,callbacks:this.callbacks,responsive:this.responsive,responsiveRefreshRate:this.responsiveRefreshRate,video:this.video,videoHeight:this.videoHeight,videoWidth:this.videoWidth,animateOut:this.animateOut,animateIn:this.animateIn,fallbackEasing:this.fallbackEasing,info:this.info,itemElement:this.itemElement,stageElement:this.stageElement,navContainer:this.navContainer,dotsContainer:this.dotsContainer,checkVisible:this.checkVisible});e("#"+this.prevHandler).click(function(){n.trigger("prev.owl.carousel")}),e("#"+this.nextHandler).click(function(){n.trigger("next.owl.carousel")}),o["default"].forEach(function(e){n.on(e+".owl.carousel",function(n){t.$emit(e,n)})}),this.loop||n.on("changed.owl.carousel",function(e){if(0===e.item.index)t.showPrev=!1,t.showNext=!0;else{var n=Math.floor(e.item.index+e.page.size);n===e.item.count?(t.showPrev=!0,t.showNext=!1):(t.showPrev=!0,t.showNext=!0)}})},methods:{generateUniqueId:function(){return Math.random().toString(36).substring(2,15)}}}}).call(t,n(3))},function(e,t,n){var i,r;/*!
	 * jQuery JavaScript Library v3.3.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2018-01-20T17:24Z
	 */
!function(t,n){"use strict";"object"==typeof e&&"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,function(n,o){"use strict";function s(e,t,n){t=t||ce;var i,r=t.createElement("script");if(r.text=e,n)for(i in Te)n[i]&&(r[i]=n[i]);t.head.appendChild(r).parentNode.removeChild(r)}function a(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?me[ve.call(e)]||"object":typeof e}function l(e){var t=!!e&&"length"in e&&e.length,n=a(e);return!_e(e)&&!Ce(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function u(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}function c(e,t,n){return _e(t)?ke.grep(e,function(e,i){return!!t.call(e,i,e)!==n}):t.nodeType?ke.grep(e,function(e){return e===t!==n}):"string"!=typeof t?ke.grep(e,function(e){return ge.call(t,e)>-1!==n}):ke.filter(t,e,n)}function h(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function p(e){var t={};return ke.each(e.match(qe)||[],function(e,n){t[n]=!0}),t}function d(e){return e}function f(e){throw e}function g(e,t,n,i){var r;try{e&&_e(r=e.promise)?r.call(e).done(t).fail(n):e&&_e(r=e.then)?r.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}function m(){ce.removeEventListener("DOMContentLoaded",m),n.removeEventListener("load",m),ke.ready()}function v(e,t){return t.toUpperCase()}function y(e){return e.replace(Be,"ms-").replace(We,v)}function w(){this.expando=ke.expando+w.uid++}function x(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Xe.test(e)?JSON.parse(e):e)}function b(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(Ye,"-$&").toLowerCase(),n=e.getAttribute(i),"string"==typeof n){try{n=x(n)}catch(r){}Ve.set(e,t,n)}else n=void 0;return n}function _(e,t,n,i){var r,o,s=20,a=i?function(){return i.cur()}:function(){return ke.css(e,t,"")},l=a(),u=n&&n[3]||(ke.cssNumber[t]?"":"px"),c=(ke.cssNumber[t]||"px"!==u&&+l)&&Ze.exec(ke.css(e,t));if(c&&c[3]!==u){for(l/=2,u=u||c[3],c=+l||1;s--;)ke.style(e,t,c+u),(1-o)*(1-(o=a()/l||.5))<=0&&(s=0),c/=o;c=2*c,ke.style(e,t,c+u),n=n||[]}return n&&(c=+c||+l||0,r=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=c,i.end=r)),r}function C(e){var t,n=e.ownerDocument,i=e.nodeName,r=et[i];return r?r:(t=n.body.appendChild(n.createElement(i)),r=ke.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),et[i]=r,r)}function T(e,t){for(var n,i,r=[],o=0,s=e.length;o<s;o++)i=e[o],i.style&&(n=i.style.display,t?("none"===n&&(r[o]=Ue.get(i,"display")||null,r[o]||(i.style.display="")),""===i.style.display&&Qe(i)&&(r[o]=C(i))):"none"!==n&&(r[o]="none",Ue.set(i,"display",n)));for(o=0;o<s;o++)null!=r[o]&&(e[o].style.display=r[o]);return e}function E(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&u(e,t)?ke.merge([e],n):n}function k(e,t){for(var n=0,i=e.length;n<i;n++)Ue.set(e[n],"globalEval",!t||Ue.get(t[n],"globalEval"))}function S(e,t,n,i,r){for(var o,s,l,u,c,h,p=t.createDocumentFragment(),d=[],f=0,g=e.length;f<g;f++)if(o=e[f],o||0===o)if("object"===a(o))ke.merge(d,o.nodeType?[o]:o);else if(ot.test(o)){for(s=s||p.appendChild(t.createElement("div")),l=(nt.exec(o)||["",""])[1].toLowerCase(),u=rt[l]||rt._default,s.innerHTML=u[1]+ke.htmlPrefilter(o)+u[2],h=u[0];h--;)s=s.lastChild;ke.merge(d,s.childNodes),s=p.firstChild,s.textContent=""}else d.push(t.createTextNode(o));for(p.textContent="",f=0;o=d[f++];)if(i&&ke.inArray(o,i)>-1)r&&r.push(o);else if(c=ke.contains(o.ownerDocument,o),s=E(p.appendChild(o),"script"),c&&k(s),n)for(h=0;o=s[h++];)it.test(o.type||"")&&n.push(o);return p}function D(){return!0}function N(){return!1}function j(){try{return ce.activeElement}catch(e){}}function A(e,t,n,i,r,o){var s,a;if("object"==typeof t){"string"!=typeof n&&(i=i||n,n=void 0);for(a in t)A(e,a,n,i,t[a],o);return e}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),r===!1)r=N;else if(!r)return e;return 1===o&&(s=r,r=function(e){return ke().off(e),s.apply(this,arguments)},r.guid=s.guid||(s.guid=ke.guid++)),e.each(function(){ke.event.add(this,t,r,i,n)})}function $(e,t){return u(e,"table")&&u(11!==t.nodeType?t:t.firstChild,"tr")?ke(e).children("tbody")[0]||e:e}function L(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function z(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function O(e,t){var n,i,r,o,s,a,l,u;if(1===t.nodeType){if(Ue.hasData(e)&&(o=Ue.access(e),s=Ue.set(t,o),u=o.events)){delete s.handle,s.events={};for(r in u)for(n=0,i=u[r].length;n<i;n++)ke.event.add(t,r,u[r][n])}Ve.hasData(e)&&(a=Ve.access(e),l=ke.extend({},a),Ve.set(t,l))}}function P(e,t){var n=t.nodeName.toLowerCase();"input"===n&&tt.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function H(e,t,n,i){t=de.apply([],t);var r,o,a,l,u,c,h=0,p=e.length,d=p-1,f=t[0],g=_e(f);if(g||p>1&&"string"==typeof f&&!be.checkClone&&pt.test(f))return e.each(function(r){var o=e.eq(r);g&&(t[0]=f.call(this,r,o.html())),H(o,t,n,i)});if(p&&(r=S(t,e[0].ownerDocument,!1,e,i),o=r.firstChild,1===r.childNodes.length&&(r=o),o||i)){for(a=ke.map(E(r,"script"),L),l=a.length;h<p;h++)u=r,h!==d&&(u=ke.clone(u,!0,!0),l&&ke.merge(a,E(u,"script"))),n.call(e[h],u,h);if(l)for(c=a[a.length-1].ownerDocument,ke.map(a,z),h=0;h<l;h++)u=a[h],it.test(u.type||"")&&!Ue.access(u,"globalEval")&&ke.contains(c,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ke._evalUrl&&ke._evalUrl(u.src):s(u.textContent.replace(dt,""),c,u))}return e}function q(e,t,n){for(var i,r=t?ke.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||ke.cleanData(E(i)),i.parentNode&&(n&&ke.contains(i.ownerDocument,i)&&k(E(i,"script")),i.parentNode.removeChild(i));return e}function M(e,t,n){var i,r,o,s,a=e.style;return n=n||gt(e),n&&(s=n.getPropertyValue(t)||n[t],""!==s||ke.contains(e.ownerDocument,e)||(s=ke.style(e,t)),!be.pixelBoxStyles()&&ft.test(s)&&mt.test(t)&&(i=a.width,r=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=r,a.maxWidth=o)),void 0!==s?s+"":s}function R(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function I(e){if(e in _t)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=bt.length;n--;)if(e=bt[n]+t,e in _t)return e}function B(e){var t=ke.cssProps[e];return t||(t=ke.cssProps[e]=I(e)||e),t}function W(e,t,n){var i=Ze.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function F(e,t,n,i,r,o){var s="width"===t?1:0,a=0,l=0;if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(l+=ke.css(e,n+Je[s],!0,r)),i?("content"===n&&(l-=ke.css(e,"padding"+Je[s],!0,r)),"margin"!==n&&(l-=ke.css(e,"border"+Je[s]+"Width",!0,r))):(l+=ke.css(e,"padding"+Je[s],!0,r),"padding"!==n?l+=ke.css(e,"border"+Je[s]+"Width",!0,r):a+=ke.css(e,"border"+Je[s]+"Width",!0,r));return!i&&o>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-a-.5))),l}function U(e,t,n){var i=gt(e),r=M(e,t,i),o="border-box"===ke.css(e,"boxSizing",!1,i),s=o;if(ft.test(r)){if(!n)return r;r="auto"}return s=s&&(be.boxSizingReliable()||r===e.style[t]),("auto"===r||!parseFloat(r)&&"inline"===ke.css(e,"display",!1,i))&&(r=e["offset"+t[0].toUpperCase()+t.slice(1)],s=!0),r=parseFloat(r)||0,r+F(e,t,n||(o?"border":"content"),s,i,r)+"px"}function V(e,t,n,i,r){return new V.prototype.init(e,t,n,i,r)}function X(){Tt&&(ce.hidden===!1&&n.requestAnimationFrame?n.requestAnimationFrame(X):n.setTimeout(X,ke.fx.interval),ke.fx.tick())}function Y(){return n.setTimeout(function(){Ct=void 0}),Ct=Date.now()}function G(e,t){var n,i=0,r={height:e};for(t=t?1:0;i<4;i+=2-t)n=Je[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function Z(e,t,n){for(var i,r=(K.tweeners[t]||[]).concat(K.tweeners["*"]),o=0,s=r.length;o<s;o++)if(i=r[o].call(n,t,e))return i}function J(e,t,n){var i,r,o,s,a,l,u,c,h="width"in t||"height"in t,p=this,d={},f=e.style,g=e.nodeType&&Qe(e),m=Ue.get(e,"fxshow");n.queue||(s=ke._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,p.always(function(){p.always(function(){s.unqueued--,ke.queue(e,"fx").length||s.empty.fire()})}));for(i in t)if(r=t[i],Et.test(r)){if(delete t[i],o=o||"toggle"===r,r===(g?"hide":"show")){if("show"!==r||!m||void 0===m[i])continue;g=!0}d[i]=m&&m[i]||ke.style(e,i)}if(l=!ke.isEmptyObject(t),l||!ke.isEmptyObject(d)){h&&1===e.nodeType&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],u=m&&m.display,null==u&&(u=Ue.get(e,"display")),c=ke.css(e,"display"),"none"===c&&(u?c=u:(T([e],!0),u=e.style.display||u,c=ke.css(e,"display"),T([e]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===ke.css(e,"float")&&(l||(p.done(function(){f.display=u}),null==u&&(c=f.display,u="none"===c?"":c)),f.display="inline-block")),n.overflow&&(f.overflow="hidden",p.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]})),l=!1;for(i in d)l||(m?"hidden"in m&&(g=m.hidden):m=Ue.access(e,"fxshow",{display:u}),o&&(m.hidden=!g),g&&T([e],!0),p.done(function(){g||T([e]),Ue.remove(e,"fxshow");for(i in d)ke.style(e,i,d[i])})),l=Z(g?m[i]:0,i,p),i in m||(m[i]=l.start,g&&(l.end=l.start,l.start=0))}}function Q(e,t){var n,i,r,o,s;for(n in e)if(i=y(n),r=t[i],o=e[n],Array.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),s=ke.cssHooks[i],s&&"expand"in s){o=s.expand(o),delete e[i];for(n in o)n in e||(e[n]=o[n],t[n]=r)}else t[i]=r}function K(e,t,n){var i,r,o=0,s=K.prefilters.length,a=ke.Deferred().always(function(){delete l.elem}),l=function(){if(r)return!1;for(var t=Ct||Y(),n=Math.max(0,u.startTime+u.duration-t),i=n/u.duration||0,o=1-i,s=0,l=u.tweens.length;s<l;s++)u.tweens[s].run(o);return a.notifyWith(e,[u,o,n]),o<1&&l?n:(l||a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:ke.extend({},t),opts:ke.extend(!0,{specialEasing:{},easing:ke.easing._default},n),originalProperties:t,originalOptions:n,startTime:Ct||Y(),duration:n.duration,tweens:[],createTween:function(t,n){var i=ke.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(i),i},stop:function(t){var n=0,i=t?u.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)u.tweens[n].run(1);return t?(a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u,t])):a.rejectWith(e,[u,t]),this}}),c=u.props;for(Q(c,u.opts.specialEasing);o<s;o++)if(i=K.prefilters[o].call(u,e,c,u.opts))return _e(i.stop)&&(ke._queueHooks(u.elem,u.opts.queue).stop=i.stop.bind(i)),i;return ke.map(c,Z,u),_e(u.opts.start)&&u.opts.start.call(e,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),ke.fx.timer(ke.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u}function ee(e){var t=e.match(qe)||[];return t.join(" ")}function te(e){return e.getAttribute&&e.getAttribute("class")||""}function ne(e){return Array.isArray(e)?e:"string"==typeof e?e.match(qe)||[]:[]}function ie(e,t,n,i){var r;if(Array.isArray(t))ke.each(t,function(t,r){n||Ht.test(e)?i(e,r):ie(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)});else if(n||"object"!==a(t))i(e,t);else for(r in t)ie(e+"["+r+"]",t[r],n,i)}function re(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(qe)||[];if(_e(n))for(;i=o[r++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function oe(e,t,n,i){function r(a){var l;return o[a]=!0,ke.each(e[a]||[],function(e,a){var u=a(t,n,i);return"string"!=typeof u||s||o[u]?s?!(l=u):void 0:(t.dataTypes.unshift(u),r(u),!1)}),l}var o={},s=e===Gt;return r(t.dataTypes[0])||!o["*"]&&r("*")}function se(e,t){var n,i,r=ke.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&ke.extend(!0,e,i),e}function ae(e,t,n){for(var i,r,o,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}if(l[0]in n)o=l[0];else{for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){o=r;break}s||(s=r)}o=o||s}if(o)return o!==l[0]&&l.unshift(o),n[o]}function le(e,t,n,i){var r,o,s,a,l,u={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)u[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(s=u[l+" "+o]||u["* "+o],!s)for(r in u)if(a=r.split(" "),a[1]===o&&(s=u[l+" "+a[0]]||u["* "+a[0]])){s===!0?s=u[r]:u[r]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(h){return{state:"parsererror",error:s?h:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}var ue=[],ce=n.document,he=Object.getPrototypeOf,pe=ue.slice,de=ue.concat,fe=ue.push,ge=ue.indexOf,me={},ve=me.toString,ye=me.hasOwnProperty,we=ye.toString,xe=we.call(Object),be={},_e=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},Ce=function(e){return null!=e&&e===e.window},Te={type:!0,src:!0,noModule:!0},Ee="3.3.1",ke=function(e,t){return new ke.fn.init(e,t)},Se=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;ke.fn=ke.prototype={jquery:Ee,constructor:ke,length:0,toArray:function(){return pe.call(this)},get:function(e){return null==e?pe.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ke.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ke.each(this,e)},map:function(e){return this.pushStack(ke.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(pe.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:fe,sort:ue.sort,splice:ue.splice},ke.extend=ke.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||_e(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],i=e[t],s!==i&&(u&&i&&(ke.isPlainObject(i)||(r=Array.isArray(i)))?(r?(r=!1,o=n&&Array.isArray(n)?n:[]):o=n&&ke.isPlainObject(n)?n:{},s[t]=ke.extend(u,o,i)):void 0!==i&&(s[t]=i));return s},ke.extend({expando:"jQuery"+(Ee+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==ve.call(e))&&(!(t=he(e))||(n=ye.call(t,"constructor")&&t.constructor,"function"==typeof n&&we.call(n)===xe))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){s(e)},each:function(e,t){var n,i=0;if(l(e))for(n=e.length;i<n&&t.call(e[i],i,e[i])!==!1;i++);else for(i in e)if(t.call(e[i],i,e[i])===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(Se,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(l(Object(e))?ke.merge(n,"string"==typeof e?[e]:e):fe.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:ge.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i,r=[],o=0,s=e.length,a=!n;o<s;o++)i=!t(e[o],o),i!==a&&r.push(e[o]);return r},map:function(e,t,n){var i,r,o=0,s=[];if(l(e))for(i=e.length;o<i;o++)r=t(e[o],o,n),null!=r&&s.push(r);else for(o in e)r=t(e[o],o,n),null!=r&&s.push(r);return de.apply([],s)},guid:1,support:be}),"function"==typeof Symbol&&(ke.fn[Symbol.iterator]=ue[Symbol.iterator]),ke.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){me["[object "+t+"]"]=t.toLowerCase()});var De=/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
function(e){function t(e,t,n,i){var r,o,s,a,l,u,c,p=t&&t.ownerDocument,f=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==f&&9!==f&&11!==f)return n;if(!i&&((t?t.ownerDocument||t:I)!==L&&$(t),t=t||L,O)){if(11!==f&&(l=ve.exec(e)))if(r=l[1]){if(9===f){if(!(s=t.getElementById(r)))return n;if(s.id===r)return n.push(s),n}else if(p&&(s=p.getElementById(r))&&M(t,s)&&s.id===r)return n.push(s),n}else{if(l[2])return Q.apply(n,t.getElementsByTagName(e)),n;if((r=l[3])&&_.getElementsByClassName&&t.getElementsByClassName)return Q.apply(n,t.getElementsByClassName(r)),n}if(_.qsa&&!V[e+" "]&&(!P||!P.test(e))){if(1!==f)p=t,c=e;else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(be,_e):t.setAttribute("id",a=R),u=k(e),o=u.length;o--;)u[o]="#"+a+" "+d(u[o]);c=u.join(","),p=ye.test(e)&&h(t.parentNode)||t}if(c)try{return Q.apply(n,p.querySelectorAll(c)),n}catch(g){}finally{a===R&&t.removeAttribute("id")}}}return D(e.replace(ae,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>C.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[R]=!0,e}function r(e){var t=L.createElement("fieldset");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),i=n.length;i--;)C.attrHandle[n[i]]=t}function s(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function u(e){return function(t){return"form"in t?t.parentNode&&t.disabled===!1?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Te(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function c(e){return i(function(t){return t=+t,i(function(n,i){for(var r,o=e([],n.length,t),s=o.length;s--;)n[r=o[s]]&&(n[r]=!(i[r]=n[r]))})})}function h(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function p(){}function d(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function f(e,t,n){var i=t.dir,r=t.next,o=r||i,s=n&&"parentNode"===o,a=W++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||s)return e(t,n,r);return!1}:function(t,n,l){var u,c,h,p=[B,a];if(l){for(;t=t[i];)if((1===t.nodeType||s)&&e(t,n,l))return!0}else for(;t=t[i];)if(1===t.nodeType||s)if(h=t[R]||(t[R]={}),c=h[t.uniqueID]||(h[t.uniqueID]={}),r&&r===t.nodeName.toLowerCase())t=t[i]||t;else{if((u=c[o])&&u[0]===B&&u[1]===a)return p[2]=u[2];if(c[o]=p,p[2]=e(t,n,l))return!0}return!1}}function g(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function m(e,n,i){for(var r=0,o=n.length;r<o;r++)t(e,n[r],i);return i}function v(e,t,n,i,r){for(var o,s=[],a=0,l=e.length,u=null!=t;a<l;a++)(o=e[a])&&(n&&!n(o,i,r)||(s.push(o),u&&t.push(a)));return s}function y(e,t,n,r,o,s){return r&&!r[R]&&(r=y(r)),o&&!o[R]&&(o=y(o,s)),i(function(i,s,a,l){var u,c,h,p=[],d=[],f=s.length,g=i||m(t||"*",a.nodeType?[a]:a,[]),y=!e||!i&&t?g:v(g,p,e,a,l),w=n?o||(i?e:f||r)?[]:s:y;if(n&&n(y,w,a,l),r)for(u=v(w,d),r(u,[],a,l),c=u.length;c--;)(h=u[c])&&(w[d[c]]=!(y[d[c]]=h));if(i){if(o||e){if(o){for(u=[],c=w.length;c--;)(h=w[c])&&u.push(y[c]=h);o(null,w=[],u,l)}for(c=w.length;c--;)(h=w[c])&&(u=o?ee(i,h):p[c])>-1&&(i[u]=!(s[u]=h))}}else w=v(w===s?w.splice(f,w.length):w),o?o(null,s,w,l):Q.apply(s,w)})}function w(e){for(var t,n,i,r=e.length,o=C.relative[e[0].type],s=o||C.relative[" "],a=o?1:0,l=f(function(e){return e===t},s,!0),u=f(function(e){return ee(t,e)>-1},s,!0),c=[function(e,n,i){var r=!o&&(i||n!==N)||((t=n).nodeType?l(e,n,i):u(e,n,i));return t=null,r}];a<r;a++)if(n=C.relative[e[a].type])c=[f(g(c),n)];else{if(n=C.filter[e[a].type].apply(null,e[a].matches),n[R]){for(i=++a;i<r&&!C.relative[e[i].type];i++);return y(a>1&&g(c),a>1&&d(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ae,"$1"),n,a<i&&w(e.slice(a,i)),i<r&&w(e=e.slice(i)),i<r&&d(e))}c.push(n)}return g(c)}function x(e,n){var r=n.length>0,o=e.length>0,s=function(i,s,a,l,u){var c,h,p,d=0,f="0",g=i&&[],m=[],y=N,w=i||o&&C.find.TAG("*",u),x=B+=null==y?1:Math.random()||.1,b=w.length;for(u&&(N=s===L||s||u);f!==b&&null!=(c=w[f]);f++){if(o&&c){for(h=0,s||c.ownerDocument===L||($(c),a=!O);p=e[h++];)if(p(c,s||L,a)){l.push(c);break}u&&(B=x)}r&&((c=!p&&c)&&d--,i&&g.push(c))}if(d+=f,r&&f!==d){for(h=0;p=n[h++];)p(g,m,s,a);if(i){if(d>0)for(;f--;)g[f]||m[f]||(m[f]=Z.call(l));m=v(m)}Q.apply(l,m),u&&!i&&m.length>0&&d+n.length>1&&t.uniqueSort(l)}return u&&(B=x,N=y),g};return r?i(s):s}var b,_,C,T,E,k,S,D,N,j,A,$,L,z,O,P,H,q,M,R="sizzle"+1*new Date,I=e.document,B=0,W=0,F=n(),U=n(),V=n(),X=function(e,t){return e===t&&(A=!0),0},Y={}.hasOwnProperty,G=[],Z=G.pop,J=G.push,Q=G.push,K=G.slice,ee=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",re="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",oe=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+re+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ae=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),le=new RegExp("^"+ne+"*,"+ne+"*"),ue=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),he=new RegExp(oe),pe=new RegExp("^"+ie+"$"),de={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+re),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},fe=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,we=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),xe=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},be=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,_e=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},Ce=function(){$()},Te=f(function(e){return e.disabled===!0&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{Q.apply(G=K.call(I.childNodes),I.childNodes),G[I.childNodes.length].nodeType}catch(Ee){Q={apply:G.length?function(e,t){J.apply(e,K.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}_=t.support={},E=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},$=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:I;return i!==L&&9===i.nodeType&&i.documentElement?(L=i,z=L.documentElement,O=!E(L),I!==L&&(n=L.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),_.attributes=r(function(e){return e.className="i",!e.getAttribute("className")}),_.getElementsByTagName=r(function(e){return e.appendChild(L.createComment("")),!e.getElementsByTagName("*").length}),_.getElementsByClassName=me.test(L.getElementsByClassName),_.getById=r(function(e){return z.appendChild(e).id=R,!L.getElementsByName||!L.getElementsByName(R).length}),_.getById?(C.filter.ID=function(e){var t=e.replace(we,xe);return function(e){return e.getAttribute("id")===t}},C.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&O){var n=t.getElementById(e);return n?[n]:[]}}):(C.filter.ID=function(e){var t=e.replace(we,xe);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},C.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&O){var n,i,r,o=t.getElementById(e);if(o){if(n=o.getAttributeNode("id"),n&&n.value===e)return[o];for(r=t.getElementsByName(e),i=0;o=r[i++];)if(n=o.getAttributeNode("id"),n&&n.value===e)return[o]}return[]}}),C.find.TAG=_.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):_.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[r++];)1===n.nodeType&&i.push(n);return i}return o},C.find.CLASS=_.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&O)return t.getElementsByClassName(e)},H=[],P=[],(_.qsa=me.test(L.querySelectorAll))&&(r(function(e){z.appendChild(e).innerHTML="<a id='"+R+"'></a><select id='"+R+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+R+"-]").length||P.push("~="),e.querySelectorAll(":checked").length||P.push(":checked"),e.querySelectorAll("a#"+R+"+*").length||P.push(".#.+[+~]")}),r(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=L.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+ne+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&P.push(":enabled",":disabled"),z.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(_.matchesSelector=me.test(q=z.matches||z.webkitMatchesSelector||z.mozMatchesSelector||z.oMatchesSelector||z.msMatchesSelector))&&r(function(e){_.disconnectedMatch=q.call(e,"*"),q.call(e,"[s!='']:x"),H.push("!=",oe)}),P=P.length&&new RegExp(P.join("|")),H=H.length&&new RegExp(H.join("|")),t=me.test(z.compareDocumentPosition),M=t||me.test(z.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},X=t?function(e,t){if(e===t)return A=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!_.sortDetached&&t.compareDocumentPosition(e)===n?e===L||e.ownerDocument===I&&M(I,e)?-1:t===L||t.ownerDocument===I&&M(I,t)?1:j?ee(j,e)-ee(j,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0;var n,i=0,r=e.parentNode,o=t.parentNode,a=[e],l=[t];if(!r||!o)return e===L?-1:t===L?1:r?-1:o?1:j?ee(j,e)-ee(j,t):0;if(r===o)return s(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;a[i]===l[i];)i++;return i?s(a[i],l[i]):a[i]===I?-1:l[i]===I?1:0},L):L},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==L&&$(e),n=n.replace(ce,"='$1']"),_.matchesSelector&&O&&!V[n+" "]&&(!H||!H.test(n))&&(!P||!P.test(n)))try{var i=q.call(e,n);if(i||_.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(r){}return t(n,L,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==L&&$(e),M(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==L&&$(e);var n=C.attrHandle[t.toLowerCase()],i=n&&Y.call(C.attrHandle,t.toLowerCase())?n(e,t,!O):void 0;return void 0!==i?i:_.attributes||!O?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.escape=function(e){return(e+"").replace(be,_e)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,r=0;if(A=!_.detectDuplicates,j=!_.sortStable&&e.slice(0),e.sort(X),A){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return j=null,e},T=t.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=T(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=T(t);return n},C=t.selectors={cacheLength:50,createPseudo:i,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,xe),e[3]=(e[3]||e[4]||e[5]||"").replace(we,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&he.test(n)&&(t=k(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,xe).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=F[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&F(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return function(r){var o=t.attr(r,e);return null==o?"!="===n:!n||(o+="","="===n?o===i:"!="===n?o!==i:"^="===n?i&&0===o.indexOf(i):"*="===n?i&&o.indexOf(i)>-1:"$="===n?i&&o.slice(-i.length)===i:"~="===n?(" "+o.replace(se," ")+" ").indexOf(i)>-1:"|="===n&&(o===i||o.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,l){var u,c,h,p,d,f,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a,w=!1;if(m){if(o){for(;g;){for(p=t;p=p[g];)if(a?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;f=g="only"===e&&!f&&"nextSibling"}return!0}if(f=[s?m.firstChild:m.lastChild],s&&y){for(p=m,h=p[R]||(p[R]={}),c=h[p.uniqueID]||(h[p.uniqueID]={}),u=c[e]||[],d=u[0]===B&&u[1],w=d&&u[2],p=d&&m.childNodes[d];p=++d&&p&&p[g]||(w=d=0)||f.pop();)if(1===p.nodeType&&++w&&p===t){c[e]=[B,d,w];break}}else if(y&&(p=t,h=p[R]||(p[R]={}),c=h[p.uniqueID]||(h[p.uniqueID]={}),u=c[e]||[],d=u[0]===B&&u[1],w=d),w===!1)for(;(p=++d&&p&&p[g]||(w=d=0)||f.pop())&&((a?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++w||(y&&(h=p[R]||(p[R]={}),c=h[p.uniqueID]||(h[p.uniqueID]={}),c[e]=[B,w]),p!==t)););return w-=r,w===i||w%i===0&&w/i>=0}}},PSEUDO:function(e,n){var r,o=C.pseudos[e]||C.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[R]?o(n):o.length>1?(r=[e,e,"",n],C.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,r=o(e,n),s=r.length;s--;)i=ee(e,r[s]),e[i]=!(t[i]=r[s])}):function(e){return o(e,0,r)}):o}},pseudos:{not:i(function(e){var t=[],n=[],r=S(e.replace(ae,"$1"));return r[R]?i(function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(we,xe),function(t){return(t.textContent||t.innerText||T(t)).indexOf(e)>-1}}),lang:i(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,xe).toLowerCase(),function(t){var n;do if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===z},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:u(!1),disabled:u(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return fe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[n<0?n+t:n]}),even:c(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i);return e}),gt:c(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}},C.pseudos.nth=C.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[b]=a(b);for(b in{submit:!0,reset:!0})C.pseudos[b]=l(b);return p.prototype=C.filters=C.pseudos,C.setFilters=new p,k=t.tokenize=function(e,n){var i,r,o,s,a,l,u,c=U[e+" "];if(c)return n?0:c.slice(0);for(a=e,l=[],u=C.preFilter;a;){i&&!(r=le.exec(a))||(r&&(a=a.slice(r[0].length)||a),l.push(o=[])),i=!1,(r=ue.exec(a))&&(i=r.shift(),o.push({value:i,type:r[0].replace(ae," ")}),a=a.slice(i.length));for(s in C.filter)!(r=de[s].exec(a))||u[s]&&!(r=u[s](r))||(i=r.shift(),o.push({value:i,type:s,matches:r}),a=a.slice(i.length));if(!i)break}return n?a.length:a?t.error(e):U(e,l).slice(0)},S=t.compile=function(e,t){var n,i=[],r=[],o=V[e+" "];if(!o){for(t||(t=k(e)),n=t.length;n--;)o=w(t[n]),o[R]?i.push(o):r.push(o);o=V(e,x(r,i)),o.selector=e}return o},D=t.select=function(e,t,n,i){var r,o,s,a,l,u="function"==typeof e&&e,c=!i&&k(e=u.selector||e);if(n=n||[],1===c.length){if(o=c[0]=c[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&9===t.nodeType&&O&&C.relative[o[1].type]){if(t=(C.find.ID(s.matches[0].replace(we,xe),t)||[])[0],!t)return n;u&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(r=de.needsContext.test(e)?0:o.length;r--&&(s=o[r],!C.relative[a=s.type]);)if((l=C.find[a])&&(i=l(s.matches[0].replace(we,xe),ye.test(o[0].type)&&h(t.parentNode)||t))){if(o.splice(r,1),e=i.length&&d(o),!e)return Q.apply(n,i),n;break}}return(u||S(e,c))(i,t,!O,n,!t||ye.test(e)&&h(t.parentNode)||t),n},_.sortStable=R.split("").sort(X).join("")===R,_.detectDuplicates=!!A,$(),_.sortDetached=r(function(e){return 1&e.compareDocumentPosition(L.createElement("fieldset"))}),r(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),_.attributes&&r(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),r(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var i;if(!n)return e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(n);ke.find=De,ke.expr=De.selectors,ke.expr[":"]=ke.expr.pseudos,ke.uniqueSort=ke.unique=De.uniqueSort,ke.text=De.getText,ke.isXMLDoc=De.isXML,ke.contains=De.contains,ke.escapeSelector=De.escape;var Ne=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&ke(e).is(n))break;i.push(e)}return i},je=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},Ae=ke.expr.match.needsContext,$e=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;ke.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?ke.find.matchesSelector(i,e)?[i]:[]:ke.find.matches(e,ke.grep(t,function(e){return 1===e.nodeType}))},ke.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(ke(e).filter(function(){for(t=0;t<i;t++)if(ke.contains(r[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)ke.find(e,r[t],n);return i>1?ke.uniqueSort(n):n},filter:function(e){return this.pushStack(c(this,e||[],!1))},not:function(e){return this.pushStack(c(this,e||[],!0))},is:function(e){return!!c(this,"string"==typeof e&&Ae.test(e)?ke(e):e||[],!1).length}});var Le,ze=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Oe=ke.fn.init=function(e,t,n){var i,r;if(!e)return this;if(n=n||Le,"string"==typeof e){if(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ze.exec(e),!i||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof ke?t[0]:t,ke.merge(this,ke.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:ce,!0)),$e.test(i[1])&&ke.isPlainObject(t))for(i in t)_e(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return r=ce.getElementById(i[2]),r&&(this[0]=r,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):_e(e)?void 0!==n.ready?n.ready(e):e(ke):ke.makeArray(e,this)};Oe.prototype=ke.fn,Le=ke(ce);var Pe=/^(?:parents|prev(?:Until|All))/,He={children:!0,contents:!0,next:!0,prev:!0};ke.fn.extend({has:function(e){var t=ke(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ke.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,r=this.length,o=[],s="string"!=typeof e&&ke(e);if(!Ae.test(e))for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&ke.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?ke.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?ge.call(ke(e),this[0]):ge.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ke.uniqueSort(ke.merge(this.get(),ke(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ke.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Ne(e,"parentNode")},parentsUntil:function(e,t,n){return Ne(e,"parentNode",n)},next:function(e){return h(e,"nextSibling")},prev:function(e){return h(e,"previousSibling")},nextAll:function(e){return Ne(e,"nextSibling")},prevAll:function(e){return Ne(e,"previousSibling")},nextUntil:function(e,t,n){return Ne(e,"nextSibling",n)},prevUntil:function(e,t,n){return Ne(e,"previousSibling",n)},siblings:function(e){return je((e.parentNode||{}).firstChild,e)},children:function(e){return je(e.firstChild)},contents:function(e){return u(e,"iframe")?e.contentDocument:(u(e,"template")&&(e=e.content||e),ke.merge([],e.childNodes))}},function(e,t){ke.fn[e]=function(n,i){var r=ke.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=ke.filter(i,r)),this.length>1&&(He[e]||ke.uniqueSort(r),Pe.test(e)&&r.reverse()),this.pushStack(r)}});var qe=/[^\x20\t\r\n\f]+/g;ke.Callbacks=function(e){e="string"==typeof e?p(e):ke.extend({},e);var t,n,i,r,o=[],s=[],l=-1,u=function(){for(r=r||e.once,i=t=!0;s.length;l=-1)for(n=s.shift();++l<o.length;)o[l].apply(n[0],n[1])===!1&&e.stopOnFalse&&(l=o.length,n=!1);e.memory||(n=!1),t=!1,r&&(o=n?[]:"")},c={add:function(){return o&&(n&&!t&&(l=o.length-1,s.push(n)),function i(t){ke.each(t,function(t,n){_e(n)?e.unique&&c.has(n)||o.push(n):n&&n.length&&"string"!==a(n)&&i(n)})}(arguments),n&&!t&&u()),this},remove:function(){return ke.each(arguments,function(e,t){for(var n;(n=ke.inArray(t,o,n))>-1;)o.splice(n,1),n<=l&&l--}),this},has:function(e){return e?ke.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return r=s=[],o=n="",this},disabled:function(){return!o},lock:function(){return r=s=[],n||t||(o=n=""),this},locked:function(){return!!r},fireWith:function(e,n){return r||(n=n||[],n=[e,n.slice?n.slice():n],s.push(n),t||u()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!i}};return c},ke.extend({Deferred:function(e){var t=[["notify","progress",ke.Callbacks("memory"),ke.Callbacks("memory"),2],["resolve","done",ke.Callbacks("once memory"),ke.Callbacks("once memory"),0,"resolved"],["reject","fail",ke.Callbacks("once memory"),ke.Callbacks("once memory"),1,"rejected"]],i="pending",r={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return r.then(null,e)},pipe:function(){var e=arguments;return ke.Deferred(function(n){ke.each(t,function(t,i){var r=_e(e[i[4]])&&e[i[4]];o[i[1]](function(){var e=r&&r.apply(this,arguments);e&&_e(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[i[0]+"With"](this,r?[e]:arguments)})}),e=null}).promise()},then:function(e,i,r){function o(e,t,i,r){return function(){var a=this,l=arguments,u=function(){var n,u;if(!(e<s)){if(n=i.apply(a,l),n===t.promise())throw new TypeError("Thenable self-resolution");u=n&&("object"==typeof n||"function"==typeof n)&&n.then,_e(u)?r?u.call(n,o(s,t,d,r),o(s,t,f,r)):(s++,u.call(n,o(s,t,d,r),o(s,t,f,r),o(s,t,d,t.notifyWith))):(i!==d&&(a=void 0,l=[n]),(r||t.resolveWith)(a,l))}},c=r?u:function(){try{u()}catch(n){ke.Deferred.exceptionHook&&ke.Deferred.exceptionHook(n,c.stackTrace),e+1>=s&&(i!==f&&(a=void 0,l=[n]),t.rejectWith(a,l))}};e?c():(ke.Deferred.getStackHook&&(c.stackTrace=ke.Deferred.getStackHook()),n.setTimeout(c))}}var s=0;return ke.Deferred(function(n){t[0][3].add(o(0,n,_e(r)?r:d,n.notifyWith)),t[1][3].add(o(0,n,_e(e)?e:d)),t[2][3].add(o(0,n,_e(i)?i:f))}).promise()},promise:function(e){return null!=e?ke.extend(e,r):r}},o={};return ke.each(t,function(e,n){var s=n[2],a=n[5];r[n[1]]=s.add,a&&s.add(function(){i=a},t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),s.add(n[3].fire),o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},o[n[0]+"With"]=s.fireWith}),r.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,n=t,i=Array(n),r=pe.call(arguments),o=ke.Deferred(),s=function(e){return function(n){i[e]=this,r[e]=arguments.length>1?pe.call(arguments):n,--t||o.resolveWith(i,r)}};if(t<=1&&(g(e,o.done(s(n)).resolve,o.reject,!t),"pending"===o.state()||_e(r[n]&&r[n].then)))return o.then();for(;n--;)g(r[n],s(n),o.reject);return o.promise()}});var Me=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ke.Deferred.exceptionHook=function(e,t){n.console&&n.console.warn&&e&&Me.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ke.readyException=function(e){n.setTimeout(function(){throw e})};var Re=ke.Deferred();ke.fn.ready=function(e){return Re.then(e)["catch"](function(e){ke.readyException(e)}),this},ke.extend({isReady:!1,readyWait:1,ready:function(e){(e===!0?--ke.readyWait:ke.isReady)||(ke.isReady=!0,e!==!0&&--ke.readyWait>0||Re.resolveWith(ce,[ke]))}}),ke.ready.then=Re.then,"complete"===ce.readyState||"loading"!==ce.readyState&&!ce.documentElement.doScroll?n.setTimeout(ke.ready):(ce.addEventListener("DOMContentLoaded",m),n.addEventListener("load",m));var Ie=function(e,t,n,i,r,o,s){var l=0,u=e.length,c=null==n;if("object"===a(n)){r=!0;for(l in n)Ie(e,t,l,n[l],!0,o,s)}else if(void 0!==i&&(r=!0,_e(i)||(s=!0),c&&(s?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(ke(e),n)})),t))for(;l<u;l++)t(e[l],n,s?i:i.call(e[l],l,t(e[l],n)));return r?e:c?t.call(e):u?t(e[0],n):o},Be=/^-ms-/,We=/-([a-z])/g,Fe=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};w.uid=1,w.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Fe(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);if("string"==typeof t)r[y(t)]=n;else for(i in t)r[y(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][y(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){Array.isArray(t)?t=t.map(y):(t=y(t),t=t in i?[t]:t.match(qe)||[]),n=t.length;for(;n--;)delete i[t[n]]}(void 0===t||ke.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ke.isEmptyObject(t)}};var Ue=new w,Ve=new w,Xe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ye=/[A-Z]/g;ke.extend({hasData:function(e){return Ve.hasData(e)||Ue.hasData(e)},data:function(e,t,n){return Ve.access(e,t,n)},removeData:function(e,t){Ve.remove(e,t)},_data:function(e,t,n){return Ue.access(e,t,n)},_removeData:function(e,t){Ue.remove(e,t)}}),ke.fn.extend({data:function(e,t){var n,i,r,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(r=Ve.get(o),1===o.nodeType&&!Ue.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=y(i.slice(5)),b(o,i,r[i])));Ue.set(o,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each(function(){Ve.set(this,e)}):Ie(this,function(t){var n;if(o&&void 0===t){if(n=Ve.get(o,e),void 0!==n)return n;if(n=b(o,e),void 0!==n)return n}else this.each(function(){Ve.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Ve.remove(this,e)})}}),ke.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=Ue.get(e,t),n&&(!i||Array.isArray(n)?i=Ue.access(e,t,ke.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=ke.queue(e,t),i=n.length,r=n.shift(),o=ke._queueHooks(e,t),s=function(){ke.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete o.stop,r.call(e,s,o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Ue.get(e,n)||Ue.access(e,n,{empty:ke.Callbacks("once memory").add(function(){Ue.remove(e,[t+"queue",n])})})}}),ke.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?ke.queue(this[0],e):void 0===t?this:this.each(function(){var n=ke.queue(this,e,t);ke._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&ke.dequeue(this,e)})},dequeue:function(e){return this.each(function(){ke.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=ke.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=Ue.get(o[s],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var Ge=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ze=new RegExp("^(?:([+-])=|)("+Ge+")([a-z%]*)$","i"),Je=["Top","Right","Bottom","Left"],Qe=function(e,t){return e=t||e,"none"===e.style.display||""===e.style.display&&ke.contains(e.ownerDocument,e)&&"none"===ke.css(e,"display")},Ke=function(e,t,n,i){var r,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];r=n.apply(e,i||[]);for(o in t)e.style[o]=s[o];return r},et={};ke.fn.extend({show:function(){return T(this,!0)},hide:function(){return T(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Qe(this)?ke(this).show():ke(this).hide()})}});var tt=/^(?:checkbox|radio)$/i,nt=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,it=/^$|^module$|\/(?:java|ecma)script/i,rt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};rt.optgroup=rt.option,rt.tbody=rt.tfoot=rt.colgroup=rt.caption=rt.thead,rt.th=rt.td;var ot=/<|&#?\w+;/;!function(){var e=ce.createDocumentFragment(),t=e.appendChild(ce.createElement("div")),n=ce.createElement("input");
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),be.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",be.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var st=ce.documentElement,at=/^key/,lt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ut=/^([^.]*)(?:\.(.+)|)/;ke.event={global:{},add:function(e,t,n,i,r){var o,s,a,l,u,c,h,p,d,f,g,m=Ue.get(e);if(m)for(n.handler&&(o=n,n=o.handler,r=o.selector),r&&ke.find.matchesSelector(st,r),n.guid||(n.guid=ke.guid++),(l=m.events)||(l=m.events={}),(s=m.handle)||(s=m.handle=function(t){return"undefined"!=typeof ke&&ke.event.triggered!==t.type?ke.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(qe)||[""],u=t.length;u--;)a=ut.exec(t[u])||[],d=g=a[1],f=(a[2]||"").split(".").sort(),d&&(h=ke.event.special[d]||{},d=(r?h.delegateType:h.bindType)||d,h=ke.event.special[d]||{},c=ke.extend({type:d,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&ke.expr.match.needsContext.test(r),namespace:f.join(".")},o),(p=l[d])||(p=l[d]=[],p.delegateCount=0,h.setup&&h.setup.call(e,i,f,s)!==!1||e.addEventListener&&e.addEventListener(d,s)),h.add&&(h.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),r?p.splice(p.delegateCount++,0,c):p.push(c),ke.event.global[d]=!0)},remove:function(e,t,n,i,r){var o,s,a,l,u,c,h,p,d,f,g,m=Ue.hasData(e)&&Ue.get(e);if(m&&(l=m.events)){for(t=(t||"").match(qe)||[""],u=t.length;u--;)if(a=ut.exec(t[u])||[],d=g=a[1],f=(a[2]||"").split(".").sort(),d){for(h=ke.event.special[d]||{},d=(i?h.delegateType:h.bindType)||d,p=l[d]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!r&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,h.remove&&h.remove.call(e,c));s&&!p.length&&(h.teardown&&h.teardown.call(e,f,m.handle)!==!1||ke.removeEvent(e,d,m.handle),delete l[d])}else for(d in l)ke.event.remove(e,d+t[u],n,i,!0);ke.isEmptyObject(l)&&Ue.remove(e,"handle events")}},dispatch:function(e){var t,n,i,r,o,s,a=ke.event.fix(e),l=new Array(arguments.length),u=(Ue.get(this,"events")||{})[a.type]||[],c=ke.event.special[a.type]||{};for(l[0]=a,t=1;t<arguments.length;t++)l[t]=arguments[t];if(a.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,a)!==!1){for(s=ke.event.handlers.call(this,a,u),t=0;(r=s[t++])&&!a.isPropagationStopped();)for(a.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!a.rnamespace.test(o.namespace)||(a.handleObj=o,a.data=o.data,i=((ke.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,l),void 0!==i&&(a.result=i)===!1&&(a.preventDefault(),a.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,a),a.result}},handlers:function(e,t){var n,i,r,o,s,a=[],l=t.delegateCount,u=e.target;if(l&&u.nodeType&&!("click"===e.type&&e.button>=1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==e.type||u.disabled!==!0)){for(o=[],s={},n=0;n<l;n++)i=t[n],r=i.selector+" ",void 0===s[r]&&(s[r]=i.needsContext?ke(r,this).index(u)>-1:ke.find(r,this,null,[u]).length),s[r]&&o.push(i);o.length&&a.push({elem:u,handlers:o})}return u=this,l<t.length&&a.push({elem:u,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(ke.Event.prototype,e,{enumerable:!0,configurable:!0,get:_e(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[ke.expando]?e:new ke.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==j()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===j()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&u(this,"input"))return this.click(),!1},_default:function(e){return u(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ke.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ke.Event=function(e,t){return this instanceof ke.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?D:N,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ke.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),void(this[ke.expando]=!0)):new ke.Event(e,t)},ke.Event.prototype={constructor:ke.Event,isDefaultPrevented:N,isPropagationStopped:N,isImmediatePropagationStopped:N,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=D,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=D,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=D,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ke.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&at.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&lt.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},ke.event.addProp),ke.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){ke.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj;return r&&(r===i||ke.contains(i,r))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),ke.fn.extend({on:function(e,t,n,i){return A(this,e,t,n,i)},one:function(e,t,n,i){return A(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,ke(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=N),this.each(function(){ke.event.remove(this,e,n,t)})}});var ct=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ht=/<script|<style|<link/i,pt=/checked\s*(?:[^=]|=\s*.checked.)/i,dt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;ke.extend({htmlPrefilter:function(e){return e.replace(ct,"<$1></$2>")},clone:function(e,t,n){var i,r,o,s,a=e.cloneNode(!0),l=ke.contains(e.ownerDocument,e);if(!(be.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ke.isXMLDoc(e)))for(s=E(a),o=E(e),i=0,r=o.length;i<r;i++)P(o[i],s[i]);if(t)if(n)for(o=o||E(e),s=s||E(a),i=0,r=o.length;i<r;i++)O(o[i],s[i]);else O(e,a);return s=E(a,"script"),s.length>0&&k(s,!l&&E(e,"script")),a},cleanData:function(e){for(var t,n,i,r=ke.event.special,o=0;void 0!==(n=e[o]);o++)if(Fe(n)){if(t=n[Ue.expando]){if(t.events)for(i in t.events)r[i]?ke.event.remove(n,i):ke.removeEvent(n,i,t.handle);n[Ue.expando]=void 0}n[Ve.expando]&&(n[Ve.expando]=void 0)}}}),ke.fn.extend({detach:function(e){return q(this,e,!0)},remove:function(e){return q(this,e)},text:function(e){return Ie(this,function(e){return void 0===e?ke.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return H(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=$(this,e);t.appendChild(e)}})},prepend:function(){return H(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=$(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return H(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return H(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ke.cleanData(E(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ke.clone(this,e,t)})},html:function(e){return Ie(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ht.test(e)&&!rt[(nt.exec(e)||["",""])[1].toLowerCase()]){e=ke.htmlPrefilter(e);try{for(;n<i;n++)t=this[n]||{},1===t.nodeType&&(ke.cleanData(E(t,!1)),t.innerHTML=e);t=0}catch(r){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return H(this,arguments,function(t){var n=this.parentNode;ke.inArray(this,e)<0&&(ke.cleanData(E(this)),n&&n.replaceChild(t,this))},e)}}),ke.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ke.fn[e]=function(e){for(var n,i=[],r=ke(e),o=r.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),ke(r[s])[t](n),fe.apply(i,n.get());return this.pushStack(i)}});var ft=new RegExp("^("+Ge+")(?!px)[a-z%]+$","i"),gt=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},mt=new RegExp(Je.join("|"),"i");!function(){function e(){if(u){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",st.appendChild(l).appendChild(u);var e=n.getComputedStyle(u);i="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",s=36===t(e.right),r=36===t(e.width),u.style.position="absolute",o=36===u.offsetWidth||"absolute",st.removeChild(l),u=null}}function t(e){return Math.round(parseFloat(e))}var i,r,o,s,a,l=ce.createElement("div"),u=ce.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",be.clearCloneStyle="content-box"===u.style.backgroundClip,ke.extend(be,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),i},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),o}}))}();var vt=/^(none|table(?!-c[ea]).+)/,yt=/^--/,wt={position:"absolute",visibility:"hidden",display:"block"},xt={letterSpacing:"0",fontWeight:"400"},bt=["Webkit","Moz","ms"],_t=ce.createElement("div").style;ke.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=M(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,o,s,a=y(t),l=yt.test(t),u=e.style;return l||(t=B(a)),s=ke.cssHooks[t]||ke.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(r=s.get(e,!1,i))?r:u[t]:(o=typeof n,"string"===o&&(r=Ze.exec(n))&&r[1]&&(n=_(e,t,r),o="number"),null!=n&&n===n&&("number"===o&&(n+=r&&r[3]||(ke.cssNumber[a]?"":"px")),be.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l?u.setProperty(t,n):u[t]=n)),void 0)}},css:function(e,t,n,i){var r,o,s,a=y(t),l=yt.test(t);return l||(t=B(a)),s=ke.cssHooks[t]||ke.cssHooks[a],s&&"get"in s&&(r=s.get(e,!0,n)),void 0===r&&(r=M(e,t,i)),"normal"===r&&t in xt&&(r=xt[t]),""===n||n?(o=parseFloat(r),n===!0||isFinite(o)?o||0:r):r}}),ke.each(["height","width"],function(e,t){ke.cssHooks[t]={get:function(e,n,i){if(n)return!vt.test(ke.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?U(e,t,i):Ke(e,wt,function(){return U(e,t,i)})},set:function(e,n,i){var r,o=gt(e),s="border-box"===ke.css(e,"boxSizing",!1,o),a=i&&F(e,t,i,s,o);return s&&be.scrollboxSize()===o.position&&(a-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-F(e,t,"border",!1,o)-.5)),a&&(r=Ze.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=ke.css(e,t)),W(e,n,a)}}}),ke.cssHooks.marginLeft=R(be.reliableMarginLeft,function(e,t){if(t)return(parseFloat(M(e,"marginLeft"))||e.getBoundingClientRect().left-Ke(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ke.each({margin:"",padding:"",border:"Width"},function(e,t){ke.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+Je[i]+t]=o[i]||o[i-2]||o[0];return r}},"margin"!==e&&(ke.cssHooks[e+t].set=W)}),ke.fn.extend({css:function(e,t){return Ie(this,function(e,t,n){var i,r,o={},s=0;if(Array.isArray(t)){for(i=gt(e),r=t.length;s<r;s++)o[t[s]]=ke.css(e,t[s],!1,i);return o}return void 0!==n?ke.style(e,t,n):ke.css(e,t)},e,t,arguments.length>1)}}),ke.Tween=V,V.prototype={constructor:V,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||ke.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(ke.cssNumber[n]?"":"px")},cur:function(){var e=V.propHooks[this.prop];return e&&e.get?e.get(this):V.propHooks._default.get(this)},run:function(e){var t,n=V.propHooks[this.prop];return this.options.duration?this.pos=t=ke.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):V.propHooks._default.set(this),this}},V.prototype.init.prototype=V.prototype,V.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ke.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){ke.fx.step[e.prop]?ke.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[ke.cssProps[e.prop]]&&!ke.cssHooks[e.prop]?e.elem[e.prop]=e.now:ke.style(e.elem,e.prop,e.now+e.unit)}}},V.propHooks.scrollTop=V.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ke.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ke.fx=V.prototype.init,ke.fx.step={};var Ct,Tt,Et=/^(?:toggle|show|hide)$/,kt=/queueHooks$/;ke.Animation=ke.extend(K,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return _(n.elem,e,Ze.exec(t),n),n}]},tweener:function(e,t){_e(e)?(t=e,e=["*"]):e=e.match(qe);for(var n,i=0,r=e.length;i<r;i++)n=e[i],K.tweeners[n]=K.tweeners[n]||[],K.tweeners[n].unshift(t)},prefilters:[J],prefilter:function(e,t){t?K.prefilters.unshift(e):K.prefilters.push(e)}}),ke.speed=function(e,t,n){var i=e&&"object"==typeof e?ke.extend({},e):{complete:n||!n&&t||_e(e)&&e,duration:e,easing:n&&t||t&&!_e(t)&&t};return ke.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in ke.fx.speeds?i.duration=ke.fx.speeds[i.duration]:i.duration=ke.fx.speeds._default),null!=i.queue&&i.queue!==!0||(i.queue="fx"),i.old=i.complete,i.complete=function(){_e(i.old)&&i.old.call(this),i.queue&&ke.dequeue(this,i.queue)},i},ke.fn.extend({fadeTo:function(e,t,n,i){return this.filter(Qe).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=ke.isEmptyObject(e),o=ke.speed(t,n,i),s=function(){var t=K(this,ke.extend({},e),o);(r||Ue.get(this,"finish"))&&t.stop(!0)};return s.finish=s,r||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=ke.timers,s=Ue.get(this);if(r)s[r]&&s[r].stop&&i(s[r]);else for(r in s)s[r]&&s[r].stop&&kt.test(r)&&i(s[r]);for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(n),t=!1,o.splice(r,1));!t&&n||ke.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Ue.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=ke.timers,s=i?i.length:0;for(n.finish=!0,ke.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<s;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),ke.each(["toggle","show","hide"],function(e,t){var n=ke.fn[t];ke.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(G(t,!0),e,i,r)}}),ke.each({slideDown:G("show"),slideUp:G("hide"),slideToggle:G("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ke.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),ke.timers=[],ke.fx.tick=function(){var e,t=0,n=ke.timers;for(Ct=Date.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||ke.fx.stop(),Ct=void 0},ke.fx.timer=function(e){ke.timers.push(e),ke.fx.start()},ke.fx.interval=13,ke.fx.start=function(){Tt||(Tt=!0,X())},ke.fx.stop=function(){Tt=null},ke.fx.speeds={slow:600,fast:200,_default:400},ke.fn.delay=function(e,t){return e=ke.fx?ke.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,i){var r=n.setTimeout(t,e);i.stop=function(){n.clearTimeout(r)}})},function(){var e=ce.createElement("input"),t=ce.createElement("select"),n=t.appendChild(ce.createElement("option"));e.type="checkbox",be.checkOn=""!==e.value,be.optSelected=n.selected,e=ce.createElement("input"),e.value="t",e.type="radio",be.radioValue="t"===e.value}();var St,Dt=ke.expr.attrHandle;ke.fn.extend({attr:function(e,t){return Ie(this,ke.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){ke.removeAttr(this,e)})}}),ke.extend({attr:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ke.prop(e,t,n):(1===o&&ke.isXMLDoc(e)||(r=ke.attrHooks[t.toLowerCase()]||(ke.expr.match.bool.test(t)?St:void 0)),void 0!==n?null===n?void ke.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=ke.find.attr(e,t),null==i?void 0:i))},attrHooks:{type:{set:function(e,t){if(!be.radioValue&&"radio"===t&&u(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,r=t&&t.match(qe);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),St={set:function(e,t,n){return t===!1?ke.removeAttr(e,n):e.setAttribute(n,n),n}},ke.each(ke.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Dt[t]||ke.find.attr;Dt[t]=function(e,t,i){var r,o,s=t.toLowerCase();return i||(o=Dt[s],Dt[s]=r,r=null!=n(e,t,i)?s:null,Dt[s]=o),r}});var Nt=/^(?:input|select|textarea|button)$/i,jt=/^(?:a|area)$/i;ke.fn.extend({prop:function(e,t){return Ie(this,ke.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[ke.propFix[e]||e]})}}),ke.extend({prop:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ke.isXMLDoc(e)||(t=ke.propFix[t]||t,r=ke.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=ke.find.attr(e,"tabindex");return t?parseInt(t,10):Nt.test(e.nodeName)||jt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),be.optSelected||(ke.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ke.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ke.propFix[this.toLowerCase()]=this}),ke.fn.extend({addClass:function(e){var t,n,i,r,o,s,a,l=0;if(_e(e))return this.each(function(t){ke(this).addClass(e.call(this,t,te(this)))});if(t=ne(e),t.length)for(;n=this[l++];)if(r=te(n),i=1===n.nodeType&&" "+ee(r)+" "){for(s=0;o=t[s++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");a=ee(i),r!==a&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,i,r,o,s,a,l=0;if(_e(e))return this.each(function(t){ke(this).removeClass(e.call(this,t,te(this)))});if(!arguments.length)return this.attr("class","");if(t=ne(e),t.length)for(;n=this[l++];)if(r=te(n),i=1===n.nodeType&&" "+ee(r)+" "){for(s=0;o=t[s++];)for(;i.indexOf(" "+o+" ")>-1;)i=i.replace(" "+o+" "," ");a=ee(i),r!==a&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e,i="string"===n||Array.isArray(e);return"boolean"==typeof t&&i?t?this.addClass(e):this.removeClass(e):_e(e)?this.each(function(n){ke(this).toggleClass(e.call(this,n,te(this),t),t)}):this.each(function(){var t,r,o,s;if(i)for(r=0,o=ke(this),s=ne(e);t=s[r++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||(t=te(this),t&&Ue.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":Ue.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+ee(te(n))+" ").indexOf(t)>-1)return!0;return!1}});var At=/\r/g;ke.fn.extend({val:function(e){var t,n,i,r=this[0];{if(arguments.length)return i=_e(e),this.each(function(n){var r;1===this.nodeType&&(r=i?e.call(this,n,ke(this).val()):e,null==r?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=ke.map(r,function(e){return null==e?"":e+""})),t=ke.valHooks[this.type]||ke.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))});if(r)return t=ke.valHooks[r.type]||ke.valHooks[r.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(At,""):null==n?"":n)}}}),ke.extend({valHooks:{option:{get:function(e){var t=ke.find.attr(e,"value");return null!=t?t:ee(ke.text(e))}},select:{get:function(e){var t,n,i,r=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],l=s?o+1:r.length;for(i=o<0?l:s?o:0;i<l;i++)if(n=r[i],(n.selected||i===o)&&!n.disabled&&(!n.parentNode.disabled||!u(n.parentNode,"optgroup"))){if(t=ke(n).val(),s)return t;a.push(t)}return a},set:function(e,t){for(var n,i,r=e.options,o=ke.makeArray(t),s=r.length;s--;)i=r[s],(i.selected=ke.inArray(ke.valHooks.option.get(i),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ke.each(["radio","checkbox"],function(){ke.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=ke.inArray(ke(e).val(),t)>-1}},be.checkOn||(ke.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),be.focusin="onfocusin"in n;var $t=/^(?:focusinfocus|focusoutblur)$/,Lt=function(e){e.stopPropagation()};ke.extend(ke.event,{trigger:function(e,t,i,r){var o,s,a,l,u,c,h,p,d=[i||ce],f=ye.call(e,"type")?e.type:e,g=ye.call(e,"namespace")?e.namespace.split("."):[];if(s=p=a=i=i||ce,3!==i.nodeType&&8!==i.nodeType&&!$t.test(f+ke.event.triggered)&&(f.indexOf(".")>-1&&(g=f.split("."),f=g.shift(),g.sort()),u=f.indexOf(":")<0&&"on"+f,e=e[ke.expando]?e:new ke.Event(f,"object"==typeof e&&e),e.isTrigger=r?2:3,e.namespace=g.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=null==t?[e]:ke.makeArray(t,[e]),h=ke.event.special[f]||{},r||!h.trigger||h.trigger.apply(i,t)!==!1)){if(!r&&!h.noBubble&&!Ce(i)){for(l=h.delegateType||f,$t.test(l+f)||(s=s.parentNode);s;s=s.parentNode)d.push(s),a=s;a===(i.ownerDocument||ce)&&d.push(a.defaultView||a.parentWindow||n)}for(o=0;(s=d[o++])&&!e.isPropagationStopped();)p=s,e.type=o>1?l:h.bindType||f,c=(Ue.get(s,"events")||{})[e.type]&&Ue.get(s,"handle"),c&&c.apply(s,t),c=u&&s[u],c&&c.apply&&Fe(s)&&(e.result=c.apply(s,t),e.result===!1&&e.preventDefault());return e.type=f,r||e.isDefaultPrevented()||h._default&&h._default.apply(d.pop(),t)!==!1||!Fe(i)||u&&_e(i[f])&&!Ce(i)&&(a=i[u],a&&(i[u]=null),ke.event.triggered=f,e.isPropagationStopped()&&p.addEventListener(f,Lt),i[f](),e.isPropagationStopped()&&p.removeEventListener(f,Lt),ke.event.triggered=void 0,a&&(i[u]=a)),e.result}},simulate:function(e,t,n){var i=ke.extend(new ke.Event,n,{type:e,isSimulated:!0});ke.event.trigger(i,null,t)}}),ke.fn.extend({trigger:function(e,t){return this.each(function(){ke.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ke.event.trigger(e,t,n,!0)}}),be.focusin||ke.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){ke.event.simulate(t,e.target,ke.event.fix(e))};ke.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=Ue.access(i,t);r||i.addEventListener(e,n,!0),Ue.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=Ue.access(i,t)-1;r?Ue.access(i,t,r):(i.removeEventListener(e,n,!0),Ue.remove(i,t))}}});var zt=n.location,Ot=Date.now(),Pt=/\?/;ke.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(i){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||ke.error("Invalid XML: "+e),t};var Ht=/\[\]$/,qt=/\r?\n/g,Mt=/^(?:submit|button|image|reset|file)$/i,Rt=/^(?:input|select|textarea|keygen)/i;ke.param=function(e,t){var n,i=[],r=function(e,t){var n=_e(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!ke.isPlainObject(e))ke.each(e,function(){r(this.name,this.value)});else for(n in e)ie(n,e[n],t,r);return i.join("&")},ke.fn.extend({serialize:function(){return ke.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ke.prop(this,"elements");return e?ke.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ke(this).is(":disabled")&&Rt.test(this.nodeName)&&!Mt.test(e)&&(this.checked||!tt.test(e))}).map(function(e,t){var n=ke(this).val();return null==n?null:Array.isArray(n)?ke.map(n,function(e){return{name:t.name,value:e.replace(qt,"\r\n")}}):{name:t.name,value:n.replace(qt,"\r\n")}}).get()}});var It=/%20/g,Bt=/#.*$/,Wt=/([?&])_=[^&]*/,Ft=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ut=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Vt=/^(?:GET|HEAD)$/,Xt=/^\/\//,Yt={},Gt={},Zt="*/".concat("*"),Jt=ce.createElement("a");Jt.href=zt.href,ke.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zt.href,type:"GET",isLocal:Ut.test(zt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ke.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?se(se(e,ke.ajaxSettings),t):se(ke.ajaxSettings,e)},ajaxPrefilter:re(Yt),ajaxTransport:re(Gt),ajax:function(e,t){function i(e,t,i,a){var u,p,d,x,b,_=t;c||(c=!0,l&&n.clearTimeout(l),r=void 0,s=a||"",C.readyState=e>0?4:0,u=e>=200&&e<300||304===e,i&&(x=ae(f,C,i)),x=le(f,x,C,u),u?(f.ifModified&&(b=C.getResponseHeader("Last-Modified"),b&&(ke.lastModified[o]=b),b=C.getResponseHeader("etag"),b&&(ke.etag[o]=b)),204===e||"HEAD"===f.type?_="nocontent":304===e?_="notmodified":(_=x.state,p=x.data,d=x.error,u=!d)):(d=_,!e&&_||(_="error",e<0&&(e=0))),C.status=e,C.statusText=(t||_)+"",u?v.resolveWith(g,[p,_,C]):v.rejectWith(g,[C,_,d]),C.statusCode(w),w=void 0,h&&m.trigger(u?"ajaxSuccess":"ajaxError",[C,f,u?p:d]),y.fireWith(g,[C,_]),h&&(m.trigger("ajaxComplete",[C,f]),--ke.active||ke.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,o,s,a,l,u,c,h,p,d,f=ke.ajaxSetup({},t),g=f.context||f,m=f.context&&(g.nodeType||g.jquery)?ke(g):ke.event,v=ke.Deferred(),y=ke.Callbacks("once memory"),w=f.statusCode||{},x={},b={},_="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(c){if(!a)for(a={};t=Ft.exec(s);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?s:null},setRequestHeader:function(e,t){return null==c&&(e=b[e.toLowerCase()]=b[e.toLowerCase()]||e,x[e]=t),this},overrideMimeType:function(e){return null==c&&(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)C.always(e[C.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||_;return r&&r.abort(t),i(0,t),this}};if(v.promise(C),f.url=((e||f.url||zt.href)+"").replace(Xt,zt.protocol+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(qe)||[""],null==f.crossDomain){u=ce.createElement("a");try{u.href=f.url,u.href=u.href,f.crossDomain=Jt.protocol+"//"+Jt.host!=u.protocol+"//"+u.host}catch(T){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=ke.param(f.data,f.traditional)),oe(Yt,f,t,C),c)return C;h=ke.event&&f.global,h&&0===ke.active++&&ke.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Vt.test(f.type),o=f.url.replace(Bt,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(It,"+")):(d=f.url.slice(o.length),f.data&&(f.processData||"string"==typeof f.data)&&(o+=(Pt.test(o)?"&":"?")+f.data,delete f.data),f.cache===!1&&(o=o.replace(Wt,"$1"),d=(Pt.test(o)?"&":"?")+"_="+Ot++ +d),f.url=o+d),f.ifModified&&(ke.lastModified[o]&&C.setRequestHeader("If-Modified-Since",ke.lastModified[o]),ke.etag[o]&&C.setRequestHeader("If-None-Match",ke.etag[o])),(f.data&&f.hasContent&&f.contentType!==!1||t.contentType)&&C.setRequestHeader("Content-Type",f.contentType),C.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Zt+"; q=0.01":""):f.accepts["*"]);for(p in f.headers)C.setRequestHeader(p,f.headers[p]);if(f.beforeSend&&(f.beforeSend.call(g,C,f)===!1||c))return C.abort();if(_="abort",y.add(f.complete),C.done(f.success),C.fail(f.error),r=oe(Gt,f,t,C)){if(C.readyState=1,h&&m.trigger("ajaxSend",[C,f]),c)return C;f.async&&f.timeout>0&&(l=n.setTimeout(function(){C.abort("timeout")},f.timeout));try{c=!1,r.send(x,i)}catch(T){if(c)throw T;i(-1,T)}}else i(-1,"No Transport");return C},getJSON:function(e,t,n){return ke.get(e,t,n,"json")},getScript:function(e,t){return ke.get(e,void 0,t,"script")}}),ke.each(["get","post"],function(e,t){ke[t]=function(e,n,i,r){return _e(n)&&(r=r||i,i=n,n=void 0),ke.ajax(ke.extend({url:e,type:t,dataType:r,data:n,success:i},ke.isPlainObject(e)&&e))}}),ke._evalUrl=function(e){return ke.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},ke.fn.extend({wrapAll:function(e){var t;return this[0]&&(_e(e)&&(e=e.call(this[0])),t=ke(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return _e(e)?this.each(function(t){ke(this).wrapInner(e.call(this,t))}):this.each(function(){var t=ke(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=_e(e);return this.each(function(n){ke(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ke(this).replaceWith(this.childNodes)}),this}}),ke.expr.pseudos.hidden=function(e){return!ke.expr.pseudos.visible(e)},ke.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ke.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var Qt={0:200,1223:204},Kt=ke.ajaxSettings.xhr();be.cors=!!Kt&&"withCredentials"in Kt,be.ajax=Kt=!!Kt,ke.ajaxTransport(function(e){var t,i;if(be.cors||Kt&&!e.crossDomain)return{
send:function(r,o){var s,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s];e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");for(s in r)a.setRequestHeader(s,r[s]);t=function(e){return function(){t&&(t=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(Qt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),i=a.onerror=a.ontimeout=t("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&n.setTimeout(function(){t&&i()})},t=t("abort");try{a.send(e.hasContent&&e.data||null)}catch(l){if(t)throw l}},abort:function(){t&&t()}}}),ke.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ke.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ke.globalEval(e),e}}}),ke.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ke.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,r){t=ke("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),ce.head.appendChild(t[0])},abort:function(){n&&n()}}}});var en=[],tn=/(=)\?(?=&|$)|\?\?/;ke.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=en.pop()||ke.expando+"_"+Ot++;return this[e]=!0,e}}),ke.ajaxPrefilter("json jsonp",function(e,t,i){var r,o,s,a=e.jsonp!==!1&&(tn.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&tn.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=_e(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(tn,"$1"+r):e.jsonp!==!1&&(e.url+=(Pt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return s||ke.error(r+" was not called"),s[0]},e.dataTypes[0]="json",o=n[r],n[r]=function(){s=arguments},i.always(function(){void 0===o?ke(n).removeProp(r):n[r]=o,e[r]&&(e.jsonpCallback=t.jsonpCallback,en.push(r)),s&&_e(o)&&o(s[0]),s=o=void 0}),"script"}),be.createHTMLDocument=function(){var e=ce.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),ke.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,r,o;return t||(be.createHTMLDocument?(t=ce.implementation.createHTMLDocument(""),i=t.createElement("base"),i.href=ce.location.href,t.head.appendChild(i)):t=ce),r=$e.exec(e),o=!n&&[],r?[t.createElement(r[1])]:(r=S([e],t,o),o&&o.length&&ke(o).remove(),ke.merge([],r.childNodes))},ke.fn.load=function(e,t,n){var i,r,o,s=this,a=e.indexOf(" ");return a>-1&&(i=ee(e.slice(a)),e=e.slice(0,a)),_e(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),s.length>0&&ke.ajax({url:e,type:r||"GET",dataType:"html",data:t}).done(function(e){o=arguments,s.html(i?ke("<div>").append(ke.parseHTML(e)).find(i):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ke.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ke.fn[t]=function(e){return this.on(t,e)}}),ke.expr.pseudos.animated=function(e){return ke.grep(ke.timers,function(t){return e===t.elem}).length},ke.offset={setOffset:function(e,t,n){var i,r,o,s,a,l,u,c=ke.css(e,"position"),h=ke(e),p={};"static"===c&&(e.style.position="relative"),a=h.offset(),o=ke.css(e,"top"),l=ke.css(e,"left"),u=("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1,u?(i=h.position(),s=i.top,r=i.left):(s=parseFloat(o)||0,r=parseFloat(l)||0),_e(t)&&(t=t.call(e,n,ke.extend({},a))),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+r),"using"in t?t.using.call(e,p):h.css(p)}},ke.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){ke.offset.setOffset(this,e,t)});var t,n,i=this[0];if(i)return i.getClientRects().length?(t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};if("fixed"===ke.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===ke.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&(r=ke(e).offset(),r.top+=ke.css(e,"borderTopWidth",!0),r.left+=ke.css(e,"borderLeftWidth",!0))}return{top:t.top-r.top-ke.css(i,"marginTop",!0),left:t.left-r.left-ke.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===ke.css(e,"position");)e=e.offsetParent;return e||st})}}),ke.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;ke.fn[e]=function(i){return Ie(this,function(e,i,r){var o;return Ce(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===r?o?o[t]:e[i]:void(o?o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):e[i]=r)},e,i,arguments.length)}}),ke.each(["top","left"],function(e,t){ke.cssHooks[t]=R(be.pixelPosition,function(e,n){if(n)return n=M(e,t),ft.test(n)?ke(e).position()[t]+"px":n})}),ke.each({Height:"height",Width:"width"},function(e,t){ke.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){ke.fn[i]=function(r,o){var s=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||o===!0?"margin":"border");return Ie(this,function(t,n,r){var o;return Ce(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===r?ke.css(t,n,a):ke.style(t,n,r,a)},t,s?r:void 0,s)}})}),ke.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){ke.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),ke.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ke.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),ke.proxy=function(e,t){var n,i,r;if("string"==typeof t&&(n=e[t],t=e,e=n),_e(e))return i=pe.call(arguments,2),r=function(){return e.apply(t||this,i.concat(pe.call(arguments)))},r.guid=e.guid=e.guid||ke.guid++,r},ke.holdReady=function(e){e?ke.readyWait++:ke.ready(!0)},ke.isArray=Array.isArray,ke.parseJSON=JSON.parse,ke.nodeName=u,ke.isFunction=_e,ke.isWindow=Ce,ke.camelCase=y,ke.type=a,ke.now=Date.now,ke.isNumeric=function(e){var t=ke.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},i=[],r=function(){return ke}.apply(t,i),!(void 0!==r&&(e.exports=r));var nn=n.jQuery,rn=n.$;return ke.noConflict=function(e){return n.$===ke&&(n.$=rn),e&&n.jQuery===ke&&(n.jQuery=nn),ke},o||(n.jQuery=n.$=ke),ke})},function(e,t,n){var i=n(5);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);n(9)("c9621516",i,!0)},function(e,t,n){var i=n(6);t=e.exports=n(7)(!1),t.push([e.id,'/**\n * Owl Carousel v2.3.4\n * Copyright 2013-2018 David Deutsch\n * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE\n */\n/*\n *  Owl Carousel - Core\n */\n.owl-carousel {\n  display: none;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  /* position relative and z-index fix webkit rendering fonts issue */\n  position: relative;\n  z-index: 1; }\n  .owl-carousel .owl-stage {\n    position: relative;\n    -ms-touch-action: pan-Y;\n    touch-action: manipulation;\n    -moz-backface-visibility: hidden;\n    /* fix firefox animation glitch */ }\n  .owl-carousel .owl-stage:after {\n    content: ".";\n    display: block;\n    clear: both;\n    visibility: hidden;\n    line-height: 0;\n    height: 0; }\n  .owl-carousel .owl-stage-outer {\n    position: relative;\n    overflow: hidden;\n    /* fix for flashing background */\n    -webkit-transform: translate3d(0px, 0px, 0px); }\n  .owl-carousel .owl-wrapper,\n  .owl-carousel .owl-item {\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    -ms-backface-visibility: hidden;\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0); }\n  .owl-carousel .owl-item {\n    position: relative;\n    min-height: 1px;\n    float: left;\n    -webkit-backface-visibility: hidden;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-touch-callout: none; }\n  .owl-carousel .owl-item img {\n    display: block;\n    width: 100%; }\n  .owl-carousel .owl-nav.disabled,\n  .owl-carousel .owl-dots.disabled {\n    display: none; }\n  .owl-carousel .owl-nav .owl-prev,\n  .owl-carousel .owl-nav .owl-next,\n  .owl-carousel .owl-dot {\n    cursor: pointer;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .owl-carousel .owl-nav button.owl-prev,\n  .owl-carousel .owl-nav button.owl-next,\n  .owl-carousel button.owl-dot {\n    background: none;\n    color: inherit;\n    border: none;\n    padding: 0 !important;\n    font: inherit; }\n  .owl-carousel.owl-loaded {\n    display: block; }\n  .owl-carousel.owl-loading {\n    opacity: 0;\n    display: block; }\n  .owl-carousel.owl-hidden {\n    opacity: 0; }\n  .owl-carousel.owl-refresh .owl-item {\n    visibility: hidden; }\n  .owl-carousel.owl-drag .owl-item {\n    -ms-touch-action: pan-y;\n        touch-action: pan-y;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .owl-carousel.owl-grab {\n    cursor: move;\n    cursor: grab; }\n  .owl-carousel.owl-rtl {\n    direction: rtl; }\n  .owl-carousel.owl-rtl .owl-item {\n    float: right; }\n\n/* No Js */\n.no-js .owl-carousel {\n  display: block; }\n\n/*\n *  Owl Carousel - Animate Plugin\n */\n.owl-carousel .animated {\n  animation-duration: 1000ms;\n  animation-fill-mode: both; }\n\n.owl-carousel .owl-animated-in {\n  z-index: 0; }\n\n.owl-carousel .owl-animated-out {\n  z-index: 1; }\n\n.owl-carousel .fadeOut {\n  animation-name: fadeOut; }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n/*\n * \tOwl Carousel - Auto Height Plugin\n */\n.owl-height {\n  transition: height 500ms ease-in-out; }\n\n/*\n * \tOwl Carousel - Lazy Load Plugin\n */\n.owl-carousel .owl-item {\n  /**\n\t\t\tThis is introduced due to a bug in IE11 where lazy loading combined with autoheight plugin causes a wrong\n\t\t\tcalculation of the height of the owl-item that breaks page layouts\n\t\t */ }\n  .owl-carousel .owl-item .owl-lazy {\n    opacity: 0;\n    transition: opacity 400ms ease; }\n  .owl-carousel .owl-item .owl-lazy[src^=""], .owl-carousel .owl-item .owl-lazy:not([src]) {\n    max-height: 0; }\n  .owl-carousel .owl-item img.owl-lazy {\n    transform-style: preserve-3d; }\n\n/*\n * \tOwl Carousel - Video Plugin\n */\n.owl-carousel .owl-video-wrapper {\n  position: relative;\n  height: 100%;\n  background: #000; }\n\n.owl-carousel .owl-video-play-icon {\n  position: absolute;\n  height: 80px;\n  width: 80px;\n  left: 50%;\n  top: 50%;\n  margin-left: -40px;\n  margin-top: -40px;\n  background: url('+i(n(8))+") no-repeat;\n  cursor: pointer;\n  z-index: 1;\n  -webkit-backface-visibility: hidden;\n  transition: transform 100ms ease; }\n\n.owl-carousel .owl-video-play-icon:hover {\n  -ms-transform: scale(1.3, 1.3);\n      transform: scale(1.3, 1.3); }\n\n.owl-carousel .owl-video-playing .owl-video-tn,\n.owl-carousel .owl-video-playing .owl-video-play-icon {\n  display: none; }\n\n.owl-carousel .owl-video-tn {\n  opacity: 0;\n  height: 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  transition: opacity 400ms ease; }\n\n.owl-carousel .owl-video-frame {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  width: 100%; }\n",""])},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=i(r),s=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(s).concat([o]).join("\n")}return[n].join("\n")}function i(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+t;return"/*# "+n+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){e.exports=n.p+"4a37f8008959c75f619bf0a3a4e2d7a2.png"},function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=c[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(o(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",h.appendChild(e),e}function o(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(f)return g;i.parentNode.removeChild(i)}if(m){var o=d++;i=p||(p=r()),t=s.bind(null,i,o,!1),n=s.bind(null,i,o,!0)}else i=r(),t=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function s(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=v(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var n=t.css,i=t.media,r=t.sourceMap;if(i&&e.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,u=n(10),c={},h=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,f=!1,g=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){f=n;var r=u(e,t);return i(r),function(t){for(var n=[],o=0;o<r.length;o++){var s=r[o],a=c[s.id];a.refs--,n.push(a)}t?(r=u(e,t),i(r)):r=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete c[a.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=o[0],a=o[1],l=o[2],u=o[3],c={id:e+":"+r,css:a,media:l,sourceMap:u};i[s]?i[s].parts.push(c):n.push(i[s]={id:s,parts:[c]})}return n}},function(e,t,n){var i=n(12);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);n(9)("25bb882e",i,!0)},function(e,t,n){t=e.exports=n(7)(!1),t.push([e.id,"/**\n * Owl Carousel v2.3.4\n * Copyright 2013-2018 David Deutsch\n * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE\n */\n/*\n * \tDefault theme - Owl Carousel CSS File\n */\n.owl-theme .owl-nav {\n  margin-top: 10px;\n  text-align: center;\n  -webkit-tap-highlight-color: transparent; }\n  .owl-theme .owl-nav [class*='owl-'] {\n    color: #FFF;\n    font-size: 14px;\n    margin: 5px;\n    padding: 4px 7px;\n    background: #D6D6D6;\n    display: inline-block;\n    cursor: pointer;\n    border-radius: 3px; }\n    .owl-theme .owl-nav [class*='owl-']:hover {\n      background: #869791;\n      color: #FFF;\n      text-decoration: none; }\n  .owl-theme .owl-nav .disabled {\n    opacity: 0.5;\n    cursor: default; }\n\n.owl-theme .owl-nav.disabled + .owl-dots {\n  margin-top: 10px; }\n\n.owl-theme .owl-dots {\n  text-align: center;\n  -webkit-tap-highlight-color: transparent; }\n  .owl-theme .owl-dots .owl-dot {\n    display: inline-block;\n    zoom: 1;\n    *display: inline; }\n    .owl-theme .owl-dots .owl-dot span {\n      width: 10px;\n      height: 10px;\n      margin: 5px 7px;\n      background: #D6D6D6;\n      display: block;\n      -webkit-backface-visibility: visible;\n      transition: opacity 200ms ease;\n      border-radius: 30px; }\n    .owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {\n      background: #869791; }\n",""])},function(e,t,n){(function(e,t){!function(e,n,i,r){function o(t,n){this.settings=null,this.options=e.extend({},o.Defaults,n),this.$element=e(t),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},e.each(["onResize","onThrottledResize"],e.proxy(function(t,n){this._handlers[n]=e.proxy(this[n],this)},this)),e.each(o.Plugins,e.proxy(function(e,t){this._plugins[e.charAt(0).toLowerCase()+e.slice(1)]=new t(this)},this)),e.each(o.Workers,e.proxy(function(t,n){this._pipe.push({filter:n.filter,run:e.proxy(n.run,this)})},this)),this.setup(),this.initialize()}o.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:n,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},o.Width={Default:"default",Inner:"inner",Outer:"outer"},o.Type={Event:"event",State:"state"},o.Plugins={},o.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(e){e.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(e){var t=this.settings.margin||"",n=!this.settings.autoWidth,i=this.settings.rtl,r={width:"auto","margin-left":i?t:"","margin-right":i?"":t};!n&&this.$stage.children().css(r),e.css=r}},{filter:["width","items","settings"],run:function(e){var t=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,n=null,i=this._items.length,r=!this.settings.autoWidth,o=[];for(e.items={merge:!1,width:t};i--;)n=this._mergers[i],n=this.settings.mergeFit&&Math.min(n,this.settings.items)||n,e.items.merge=n>1||e.items.merge,o[i]=r?t*n:this._items[i].width();this._widths=o}},{filter:["items","settings"],run:function(){var t=[],n=this._items,i=this.settings,r=Math.max(2*i.items,4),o=2*Math.ceil(n.length/2),s=i.loop&&n.length?i.rewind?r:Math.max(r,o):0,a="",l="";for(s/=2;s>0;)t.push(this.normalize(t.length/2,!0)),a+=n[t[t.length-1]][0].outerHTML,t.push(this.normalize(n.length-1-(t.length-1)/2,!0)),l=n[t[t.length-1]][0].outerHTML+l,s-=1;this._clones=t,e(a).addClass("cloned").appendTo(this.$stage),e(l).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var e=this.settings.rtl?1:-1,t=this._clones.length+this._items.length,n=-1,i=0,r=0,o=[];++n<t;)i=o[n-1]||0,r=this._widths[this.relative(n)]+this.settings.margin,o.push(i+r*e);this._coordinates=o}},{filter:["width","items","settings"],run:function(){var e=this.settings.stagePadding,t=this._coordinates,n={width:Math.ceil(Math.abs(t[t.length-1]))+2*e,"padding-left":e||"","padding-right":e||""};this.$stage.css(n)}},{filter:["width","items","settings"],run:function(e){var t=this._coordinates.length,n=!this.settings.autoWidth,i=this.$stage.children();if(n&&e.items.merge)for(;t--;)e.css.width=this._widths[this.relative(t)],i.eq(t).css(e.css);else n&&(e.css.width=e.items.width,i.css(e.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(e){e.current=e.current?this.$stage.children().index(e.current):0,e.current=Math.max(this.minimum(),Math.min(this.maximum(),e.current)),this.reset(e.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var e,t,n,i,r=this.settings.rtl?1:-1,o=2*this.settings.stagePadding,s=this.coordinates(this.current())+o,a=s+this.width()*r,l=[];for(n=0,i=this._coordinates.length;n<i;n++)e=this._coordinates[n-1]||0,t=Math.abs(this._coordinates[n])+o*r,(this.op(e,"<=",s)&&this.op(e,">",a)||this.op(t,"<",s)&&this.op(t,">",a))&&l.push(n);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+l.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],o.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=e("<"+this.settings.stageElement+">",{"class":this.settings.stageClass}).wrap(e("<div/>",{"class":this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},o.prototype.initializeItems=function(){var t=this.$element.find(".owl-item");return t.length?(this._items=t.get().map(function(t){return e(t)}),this._mergers=this._items.map(function(){return 1}),void this.refresh()):(this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),void this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass))},o.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var e,t,n;e=this.$element.find("img"),t=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:r,n=this.$element.children(t).width(),e.length&&n<=0&&this.preloadAutoWidthImages(e)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},o.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},o.prototype.setup=function(){var t=this.viewport(),n=this.options.responsive,i=-1,r=null;n?(e.each(n,function(e){e<=t&&e>i&&(i=Number(e))}),r=e.extend({},this.options,n[i]),"function"==typeof r.stagePadding&&(r.stagePadding=r.stagePadding()),delete r.responsive,r.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+i))):r=e.extend({},this.options),this.trigger("change",{property:{name:"settings",value:r}}),this._breakpoint=i,this.settings=r,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},o.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},o.prototype.prepare=function(t){var n=this.trigger("prepare",{content:t});return n.data||(n.data=e("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(t)),this.trigger("prepared",{content:n.data}),n.data},o.prototype.update=function(){for(var t=0,n=this._pipe.length,i=e.proxy(function(e){return this[e]},this._invalidated),r={};t<n;)(this._invalidated.all||e.grep(this._pipe[t].filter,i).length>0)&&this._pipe[t].run(r),t++;this._invalidated={},!this.is("valid")&&this.enter("valid")},o.prototype.width=function(e){switch(e=e||o.Width.Default){case o.Width.Inner:case o.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},o.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},o.prototype.onThrottledResize=function(){n.clearTimeout(this.resizeTimer),this.resizeTimer=n.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},o.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},o.prototype.registerEventHandlers=function(){e.support.transition&&this.$stage.on(e.support.transition.end+".owl.core",e.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(n,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",e.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",e.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",e.proxy(this.onDragEnd,this)))},o.prototype.onDragStart=function(t){var n=null;3!==t.which&&(e.support.transform?(n=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),n={x:n[16===n.length?12:4],y:n[16===n.length?13:5]}):(n=this.$stage.position(),n={x:this.settings.rtl?n.left+this.$stage.width()-this.width()+this.settings.margin:n.left,y:n.top}),this.is("animating")&&(e.support.transform?this.animate(n.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===t.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=e(t.target),this._drag.stage.start=n,this._drag.stage.current=n,this._drag.pointer=this.pointer(t),e(i).on("mouseup.owl.core touchend.owl.core",e.proxy(this.onDragEnd,this)),e(i).one("mousemove.owl.core touchmove.owl.core",e.proxy(function(t){var n=this.difference(this._drag.pointer,this.pointer(t));e(i).on("mousemove.owl.core touchmove.owl.core",e.proxy(this.onDragMove,this)),Math.abs(n.x)<Math.abs(n.y)&&this.is("valid")||(t.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},o.prototype.onDragMove=function(e){var t=null,n=null,i=null,r=this.difference(this._drag.pointer,this.pointer(e)),o=this.difference(this._drag.stage.start,r);this.is("dragging")&&(e.preventDefault(),this.settings.loop?(t=this.coordinates(this.minimum()),n=this.coordinates(this.maximum()+1)-t,o.x=((o.x-t)%n+n)%n+t):(t=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),n=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),i=this.settings.pullDrag?-1*r.x/5:0,o.x=Math.max(Math.min(o.x,t+i),n+i)),this._drag.stage.current=o,this.animate(o.x))},o.prototype.onDragEnd=function(t){var n=this.difference(this._drag.pointer,this.pointer(t)),r=this._drag.stage.current,o=n.x>0^this.settings.rtl?"left":"right";e(i).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==n.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(r.x,0!==n.x?o:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=o,(Math.abs(n.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},o.prototype.closest=function(t,n){var i=-1,o=30,s=this.width(),a=this.coordinates();return this.settings.freeDrag||e.each(a,e.proxy(function(e,l){return"left"===n&&t>l-o&&t<l+o?i=e:"right"===n&&t>l-s-o&&t<l-s+o?i=e+1:this.op(t,"<",l)&&this.op(t,">",a[e+1]!==r?a[e+1]:l-s)&&(i="left"===n?e+1:e),i===-1},this)),this.settings.loop||(this.op(t,">",a[this.minimum()])?i=t=this.minimum():this.op(t,"<",a[this.maximum()])&&(i=t=this.maximum())),i},o.prototype.animate=function(t){var n=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),n&&(this.enter("animating"),this.trigger("translate")),e.support.transform3d&&e.support.transition?this.$stage.css({transform:"translate3d("+t+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):n?this.$stage.animate({left:t+"px"},this.speed(),this.settings.fallbackEasing,e.proxy(this.onTransitionEnd,this)):this.$stage.css({left:t+"px"})},o.prototype.is=function(e){return this._states.current[e]&&this._states.current[e]>0},o.prototype.current=function(e){if(e===r)return this._current;if(0===this._items.length)return r;if(e=this.normalize(e),this._current!==e){var t=this.trigger("change",{property:{name:"position",value:e}});t.data!==r&&(e=this.normalize(t.data)),this._current=e,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},o.prototype.invalidate=function(t){return"string"===e.type(t)&&(this._invalidated[t]=!0,this.is("valid")&&this.leave("valid")),e.map(this._invalidated,function(e,t){return t})},o.prototype.reset=function(e){e=this.normalize(e),e!==r&&(this._speed=0,this._current=e,this.suppress(["translate","translated"]),this.animate(this.coordinates(e)),this.release(["translate","translated"]))},o.prototype.normalize=function(e,t){var n=this._items.length,i=t?0:this._clones.length;return!this.isNumeric(e)||n<1?e=r:(e<0||e>=n+i)&&(e=((e-i/2)%n+n)%n+i/2),e},o.prototype.relative=function(e){return e-=this._clones.length/2,this.normalize(e,!0)},o.prototype.maximum=function(e){var t,n,i,r=this.settings,o=this._coordinates.length;if(r.loop)o=this._clones.length/2+this._items.length-1;else if(r.autoWidth||r.merge){if(t=this._items.length)for(n=this._items[--t].width(),i=this.$element.width();t--&&(n+=this._items[t].width()+this.settings.margin,!(n>i)););o=t+1}else o=r.center?this._items.length-1:this._items.length-r.items;return e&&(o-=this._clones.length/2),Math.max(o,0)},o.prototype.minimum=function(e){return e?0:this._clones.length/2},o.prototype.items=function(e){return e===r?this._items.slice():(e=this.normalize(e,!0),this._items[e])},o.prototype.mergers=function(e){return e===r?this._mergers.slice():(e=this.normalize(e,!0),this._mergers[e])},o.prototype.clones=function(t){var n=this._clones.length/2,i=n+this._items.length,o=function(e){
return e%2===0?i+e/2:n-(e+1)/2};return t===r?e.map(this._clones,function(e,t){return o(t)}):e.map(this._clones,function(e,n){return e===t?o(n):null})},o.prototype.speed=function(e){return e!==r&&(this._speed=e),this._speed},o.prototype.coordinates=function(t){var n,i=1,o=t-1;return t===r?e.map(this._coordinates,e.proxy(function(e,t){return this.coordinates(t)},this)):(this.settings.center?(this.settings.rtl&&(i=-1,o=t+1),n=this._coordinates[t],n+=(this.width()-n+(this._coordinates[o]||0))/2*i):n=this._coordinates[o]||0,n=Math.ceil(n))},o.prototype.duration=function(e,t,n){return 0===n?0:Math.min(Math.max(Math.abs(t-e),1),6)*Math.abs(n||this.settings.smartSpeed)},o.prototype.to=function(e,t){var n=this.current(),i=null,r=e-this.relative(n),o=(r>0)-(r<0),s=this._items.length,a=this.minimum(),l=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(r)>s/2&&(r+=o*-1*s),e=n+r,i=((e-a)%s+s)%s+a,i!==e&&i-r<=l&&i-r>0&&(n=i-r,e=i,this.reset(n))):this.settings.rewind?(l+=1,e=(e%l+l)%l):e=Math.max(a,Math.min(l,e)),this.speed(this.duration(n,e,t)),this.current(e),this.isVisible()&&this.update()},o.prototype.next=function(e){e=e||!1,this.to(this.relative(this.current())+1,e)},o.prototype.prev=function(e){e=e||!1,this.to(this.relative(this.current())-1,e)},o.prototype.onTransitionEnd=function(e){return(e===r||(e.stopPropagation(),(e.target||e.srcElement||e.originalTarget)===this.$stage.get(0)))&&(this.leave("animating"),void this.trigger("translated"))},o.prototype.viewport=function(){var t;return this.options.responsiveBaseElement!==n?t=e(this.options.responsiveBaseElement).width():n.innerWidth?t=n.innerWidth:i.documentElement&&i.documentElement.clientWidth?t=i.documentElement.clientWidth:console.warn("Can not detect viewport width."),t},o.prototype.replace=function(n){this.$stage.empty(),this._items=[],n&&(n=n instanceof t?n:e(n)),this.settings.nestedItemSelector&&(n=n.find("."+this.settings.nestedItemSelector)),n.filter(function(){return 1===this.nodeType}).each(e.proxy(function(e,t){t=this.prepare(t),this.$stage.append(t),this._items.push(t),this._mergers.push(1*t.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},o.prototype.add=function(n,i){var o=this.relative(this._current);i=i===r?this._items.length:this.normalize(i,!0),n=n instanceof t?n:e(n),this.trigger("add",{content:n,position:i}),n=this.prepare(n),0===this._items.length||i===this._items.length?(0===this._items.length&&this.$stage.append(n),0!==this._items.length&&this._items[i-1].after(n),this._items.push(n),this._mergers.push(1*n.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[i].before(n),this._items.splice(i,0,n),this._mergers.splice(i,0,1*n.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[o]&&this.reset(this._items[o].index()),this.invalidate("items"),this.trigger("added",{content:n,position:i})},o.prototype.remove=function(e){e=this.normalize(e,!0),e!==r&&(this.trigger("remove",{content:this._items[e],position:e}),this._items[e].remove(),this._items.splice(e,1),this._mergers.splice(e,1),this.invalidate("items"),this.trigger("removed",{content:null,position:e}))},o.prototype.preloadAutoWidthImages=function(t){t.each(e.proxy(function(t,n){this.enter("pre-loading"),n=e(n),e(new Image).one("load",e.proxy(function(e){n.attr("src",e.target.src),n.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",n.attr("src")||n.attr("data-src")||n.attr("data-src-retina"))},this))},o.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),e(i).off(".owl.core"),this.settings.responsive!==!1&&(n.clearTimeout(this.resizeTimer),this.off(n,"resize",this._handlers.onThrottledResize));for(var t in this._plugins)this._plugins[t].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},o.prototype.op=function(e,t,n){var i=this.settings.rtl;switch(t){case"<":return i?e>n:e<n;case">":return i?e<n:e>n;case">=":return i?e<=n:e>=n;case"<=":return i?e>=n:e<=n}},o.prototype.on=function(e,t,n,i){e.addEventListener?e.addEventListener(t,n,i):e.attachEvent&&e.attachEvent("on"+t,n)},o.prototype.off=function(e,t,n,i){e.removeEventListener?e.removeEventListener(t,n,i):e.detachEvent&&e.detachEvent("on"+t,n)},o.prototype.trigger=function(t,n,i,r,s){var a={item:{count:this._items.length,index:this.current()}},l=e.camelCase(e.grep(["on",t,i],function(e){return e}).join("-").toLowerCase()),u=e.Event([t,"owl",i||"carousel"].join(".").toLowerCase(),e.extend({relatedTarget:this},a,n));return this._supress[t]||(e.each(this._plugins,function(e,t){t.onTrigger&&t.onTrigger(u)}),this.register({type:o.Type.Event,name:t}),this.$element.trigger(u),this.settings&&"function"==typeof this.settings[l]&&this.settings[l].call(this,u)),u},o.prototype.enter=function(t){e.each([t].concat(this._states.tags[t]||[]),e.proxy(function(e,t){this._states.current[t]===r&&(this._states.current[t]=0),this._states.current[t]++},this))},o.prototype.leave=function(t){e.each([t].concat(this._states.tags[t]||[]),e.proxy(function(e,t){this._states.current[t]--},this))},o.prototype.register=function(t){if(t.type===o.Type.Event){if(e.event.special[t.name]||(e.event.special[t.name]={}),!e.event.special[t.name].owl){var n=e.event.special[t.name]._default;e.event.special[t.name]._default=function(e){return!n||!n.apply||e.namespace&&e.namespace.indexOf("owl")!==-1?e.namespace&&e.namespace.indexOf("owl")>-1:n.apply(this,arguments)},e.event.special[t.name].owl=!0}}else t.type===o.Type.State&&(this._states.tags[t.name]?this._states.tags[t.name]=this._states.tags[t.name].concat(t.tags):this._states.tags[t.name]=t.tags,this._states.tags[t.name]=e.grep(this._states.tags[t.name],e.proxy(function(n,i){return e.inArray(n,this._states.tags[t.name])===i},this)))},o.prototype.suppress=function(t){e.each(t,e.proxy(function(e,t){this._supress[t]=!0},this))},o.prototype.release=function(t){e.each(t,e.proxy(function(e,t){delete this._supress[t]},this))},o.prototype.pointer=function(e){var t={x:null,y:null};return e=e.originalEvent||e||n.event,e=e.touches&&e.touches.length?e.touches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,e.pageX?(t.x=e.pageX,t.y=e.pageY):(t.x=e.clientX,t.y=e.clientY),t},o.prototype.isNumeric=function(e){return!isNaN(parseFloat(e))},o.prototype.difference=function(e,t){return{x:e.x-t.x,y:e.y-t.y}},e.fn.owlCarousel=function(t){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var i=e(this),r=i.data("owl.carousel");r||(r=new o(this,"object"==typeof t&&t),i.data("owl.carousel",r),e.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(t,n){r.register({type:o.Type.Event,name:n}),r.$element.on(n+".owl.carousel.core",e.proxy(function(e){e.namespace&&e.relatedTarget!==this&&(this.suppress([n]),r[n].apply(this,[].slice.call(arguments,1)),this.release([n]))},r))})),"string"==typeof t&&"_"!==t.charAt(0)&&r[t].apply(r,n)})},e.fn.owlCarousel.Constructor=o}(window.Zepto||e,window,document),function(e,t,n,i){var r=function(t){this._core=t,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":e.proxy(function(e){e.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=e.extend({},r.Defaults,this._core.options),this._core.$element.on(this._handlers)};r.Defaults={autoRefresh:!0,autoRefreshInterval:500},r.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=t.setInterval(e.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},r.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},r.prototype.destroy=function(){var e,n;t.clearInterval(this._interval);for(e in this._handlers)this._core.$element.off(e,this._handlers[e]);for(n in Object.getOwnPropertyNames(this))"function"!=typeof this[n]&&(this[n]=null)},e.fn.owlCarousel.Constructor.Plugins.AutoRefresh=r}(window.Zepto||e,window,document),function(e,t,n,i){var r=function(t){this._core=t,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":e.proxy(function(t){if(t.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(t.property&&"position"==t.property.name||"initialized"==t.type)){var n=this._core.settings,r=n.center&&Math.ceil(n.items/2)||n.items,o=n.center&&r*-1||0,s=(t.property&&t.property.value!==i?t.property.value:this._core.current())+o,a=this._core.clones().length,l=e.proxy(function(e,t){this.load(t)},this);for(n.lazyLoadEager>0&&(r+=n.lazyLoadEager,n.loop&&(s-=n.lazyLoadEager,r++));o++<r;)this.load(a/2+this._core.relative(s)),a&&e.each(this._core.clones(this._core.relative(s)),l),s++}},this)},this._core.options=e.extend({},r.Defaults,this._core.options),this._core.$element.on(this._handlers)};r.Defaults={lazyLoad:!1,lazyLoadEager:0},r.prototype.load=function(n){var i=this._core.$stage.children().eq(n),r=i&&i.find(".owl-lazy");!r||e.inArray(i.get(0),this._loaded)>-1||(r.each(e.proxy(function(n,i){var r,o=e(i),s=t.devicePixelRatio>1&&o.attr("data-src-retina")||o.attr("data-src")||o.attr("data-srcset");this._core.trigger("load",{element:o,url:s},"lazy"),o.is("img")?o.one("load.owl.lazy",e.proxy(function(){o.css("opacity",1),this._core.trigger("loaded",{element:o,url:s},"lazy")},this)).attr("src",s):o.is("source")?o.one("load.owl.lazy",e.proxy(function(){this._core.trigger("loaded",{element:o,url:s},"lazy")},this)).attr("srcset",s):(r=new Image,r.onload=e.proxy(function(){o.css({"background-image":'url("'+s+'")',opacity:"1"}),this._core.trigger("loaded",{element:o,url:s},"lazy")},this),r.src=s)},this)),this._loaded.push(i.get(0)))},r.prototype.destroy=function(){var e,t;for(e in this.handlers)this._core.$element.off(e,this.handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},e.fn.owlCarousel.Constructor.Plugins.Lazy=r}(window.Zepto||e,window,document),function(e,t,n,i){var r=function(n){this._core=n,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":e.proxy(function(e){e.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":e.proxy(function(e){e.namespace&&this._core.settings.autoHeight&&"position"===e.property.name&&this.update()},this),"loaded.owl.lazy":e.proxy(function(e){e.namespace&&this._core.settings.autoHeight&&e.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=e.extend({},r.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var i=this;e(t).on("load",function(){i._core.settings.autoHeight&&i.update()}),e(t).resize(function(){i._core.settings.autoHeight&&(null!=i._intervalId&&clearTimeout(i._intervalId),i._intervalId=setTimeout(function(){i.update()},250))})};r.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},r.prototype.update=function(){var t=this._core._current,n=t+this._core.settings.items,i=this._core.settings.lazyLoad,r=this._core.$stage.children().toArray().slice(t,n),o=[],s=0;e.each(r,function(t,n){o.push(e(n).height())}),s=Math.max.apply(null,o),s<=1&&i&&this._previousHeight&&(s=this._previousHeight),this._previousHeight=s,this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)},r.prototype.destroy=function(){var e,t;for(e in this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},e.fn.owlCarousel.Constructor.Plugins.AutoHeight=r}(window.Zepto||e,window,document),function(e,t,n,i){var r=function(t){this._core=t,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":e.proxy(function(e){e.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":e.proxy(function(e){e.namespace&&this._core.settings.video&&this.isInFullScreen()&&e.preventDefault()},this),"refreshed.owl.carousel":e.proxy(function(e){e.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":e.proxy(function(e){e.namespace&&"position"===e.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":e.proxy(function(t){if(t.namespace){var n=e(t.content).find(".owl-video");n.length&&(n.css("display","none"),this.fetch(n,e(t.content)))}},this)},this._core.options=e.extend({},r.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",e.proxy(function(e){this.play(e)},this))};r.Defaults={video:!1,videoHeight:!1,videoWidth:!1},r.prototype.fetch=function(e,t){var n=function(){return e.attr("data-vimeo-id")?"vimeo":e.attr("data-vzaar-id")?"vzaar":"youtube"}(),i=e.attr("data-vimeo-id")||e.attr("data-youtube-id")||e.attr("data-vzaar-id"),r=e.attr("data-width")||this._core.settings.videoWidth,o=e.attr("data-height")||this._core.settings.videoHeight,s=e.attr("href");if(!s)throw new Error("Missing video URL.");if(i=s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),i[3].indexOf("youtu")>-1)n="youtube";else if(i[3].indexOf("vimeo")>-1)n="vimeo";else{if(!(i[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");n="vzaar"}i=i[6],this._videos[s]={type:n,id:i,width:r,height:o},t.attr("data-video",s),this.thumbnail(e,this._videos[s])},r.prototype.thumbnail=function(t,n){var i,r,o,s=n.width&&n.height?"width:"+n.width+"px;height:"+n.height+"px;":"",a=t.find("img"),l="src",u="",c=this._core.settings,h=function(n){r='<div class="owl-video-play-icon"></div>',i=c.lazyLoad?e("<div/>",{"class":"owl-video-tn "+u,srcType:n}):e("<div/>",{"class":"owl-video-tn",style:"opacity:1;background-image:url("+n+")"}),t.after(i),t.after(r)};return t.wrap(e("<div/>",{"class":"owl-video-wrapper",style:s})),this._core.settings.lazyLoad&&(l="data-src",u="owl-lazy"),a.length?(h(a.attr(l)),a.remove(),!1):void("youtube"===n.type?(o="//img.youtube.com/vi/"+n.id+"/hqdefault.jpg",h(o)):"vimeo"===n.type?e.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+n.id+".json",jsonp:"callback",dataType:"jsonp",success:function(e){o=e[0].thumbnail_large,h(o)}}):"vzaar"===n.type&&e.ajax({type:"GET",url:"//vzaar.com/api/videos/"+n.id+".json",jsonp:"callback",dataType:"jsonp",success:function(e){o=e.framegrab_url,h(o)}}))},r.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},r.prototype.play=function(t){var n,i,r=e(t.target),o=r.closest("."+this._core.settings.itemClass),s=this._videos[o.attr("data-video")],a=s.width||"100%",l=s.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),o=this._core.items(this._core.relative(o.index())),this._core.reset(o.index()),n=e('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),n.attr("height",l),n.attr("width",a),"youtube"===s.type?n.attr("src","//www.youtube.com/embed/"+s.id+"?autoplay=1&rel=0&v="+s.id):"vimeo"===s.type?n.attr("src","//player.vimeo.com/video/"+s.id+"?autoplay=1"):"vzaar"===s.type&&n.attr("src","//view.vzaar.com/"+s.id+"/player?autoplay=true"),i=e(n).wrap('<div class="owl-video-frame" />').insertAfter(o.find(".owl-video")),this._playing=o.addClass("owl-video-playing"))},r.prototype.isInFullScreen=function(){var t=n.fullscreenElement||n.mozFullScreenElement||n.webkitFullscreenElement;return t&&e(t).parent().hasClass("owl-video-frame")},r.prototype.destroy=function(){var e,t;this._core.$element.off("click.owl.video");for(e in this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},e.fn.owlCarousel.Constructor.Plugins.Video=r}(window.Zepto||e,window,document),function(e,t,n,i){var r=function(t){this.core=t,this.core.options=e.extend({},r.Defaults,this.core.options),this.swapping=!0,this.previous=i,this.next=i,this.handlers={"change.owl.carousel":e.proxy(function(e){e.namespace&&"position"==e.property.name&&(this.previous=this.core.current(),this.next=e.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":e.proxy(function(e){e.namespace&&(this.swapping="translated"==e.type)},this),"translate.owl.carousel":e.proxy(function(e){e.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};r.Defaults={animateOut:!1,animateIn:!1},r.prototype.swap=function(){if(1===this.core.settings.items&&e.support.animation&&e.support.transition){this.core.speed(0);var t,n=e.proxy(this.clear,this),i=this.core.$stage.children().eq(this.previous),r=this.core.$stage.children().eq(this.next),o=this.core.settings.animateIn,s=this.core.settings.animateOut;this.core.current()!==this.previous&&(s&&(t=this.core.coordinates(this.previous)-this.core.coordinates(this.next),i.one(e.support.animation.end,n).css({left:t+"px"}).addClass("animated owl-animated-out").addClass(s)),o&&r.one(e.support.animation.end,n).addClass("animated owl-animated-in").addClass(o))}},r.prototype.clear=function(t){e(t.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},r.prototype.destroy=function(){var e,t;for(e in this.handlers)this.core.$element.off(e,this.handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},e.fn.owlCarousel.Constructor.Plugins.Animate=r}(window.Zepto||e,window,document),function(e,t,n,i){var r=function(t){this._core=t,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":e.proxy(function(e){e.namespace&&"settings"===e.property.name?this._core.settings.autoplay?this.play():this.stop():e.namespace&&"position"===e.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":e.proxy(function(e){e.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":e.proxy(function(e,t,n){e.namespace&&this.play(t,n)},this),"stop.owl.autoplay":e.proxy(function(e){e.namespace&&this.stop()},this),"mouseover.owl.autoplay":e.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":e.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":e.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":e.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=e.extend({},r.Defaults,this._core.options)};r.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},r.prototype._next=function(i){this._call=t.setTimeout(e.proxy(this._next,this,i),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||n.hidden||this._core.next(i||this._core.settings.autoplaySpeed)},r.prototype.read=function(){return(new Date).getTime()-this._time},r.prototype.play=function(n,i){var r;this._core.is("rotating")||this._core.enter("rotating"),n=n||this._core.settings.autoplayTimeout,r=Math.min(this._time%(this._timeout||n),n),this._paused?(this._time=this.read(),this._paused=!1):t.clearTimeout(this._call),this._time+=this.read()%n-r,this._timeout=n,this._call=t.setTimeout(e.proxy(this._next,this,i),n-r)},r.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,t.clearTimeout(this._call),this._core.leave("rotating"))},r.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,t.clearTimeout(this._call))},r.prototype.destroy=function(){var e,t;this.stop();for(e in this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},e.fn.owlCarousel.Constructor.Plugins.autoplay=r}(window.Zepto||e,window,document),function(e,t,n,i){"use strict";var r=function(t){this._core=t,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":e.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":e.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.splice(e.position,0,this._templates.pop())},this),"remove.owl.carousel":e.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.splice(e.position,1)},this),"changed.owl.carousel":e.proxy(function(e){e.namespace&&"position"==e.property.name&&this.draw()},this),"initialized.owl.carousel":e.proxy(function(e){e.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":e.proxy(function(e){e.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=e.extend({},r.Defaults,this._core.options),this.$element.on(this._handlers)};r.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},r.prototype.initialize=function(){var t,n=this._core.settings;this._controls.$relative=(n.navContainer?e(n.navContainer):e("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=e("<"+n.navElement+">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click",e.proxy(function(e){this.prev(n.navSpeed)},this)),this._controls.$next=e("<"+n.navElement+">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click",e.proxy(function(e){this.next(n.navSpeed)},this)),n.dotsData||(this._templates=[e('<button role="button">').addClass(n.dotClass).append(e("<span>")).prop("outerHTML")]),this._controls.$absolute=(n.dotsContainer?e(n.dotsContainer):e("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",e.proxy(function(t){var i=e(t.target).parent().is(this._controls.$absolute)?e(t.target).index():e(t.target).parent().index();t.preventDefault(),this.to(i,n.dotsSpeed)},this));for(t in this._overrides)this._core[t]=e.proxy(this[t],this)},r.prototype.destroy=function(){var e,t,n,i,r;r=this._core.settings;for(e in this._handlers)this.$element.off(e,this._handlers[e]);for(t in this._controls)"$relative"===t&&r.navContainer?this._controls[t].html(""):this._controls[t].remove();for(i in this.overides)this._core[i]=this._overrides[i];for(n in Object.getOwnPropertyNames(this))"function"!=typeof this[n]&&(this[n]=null)},r.prototype.update=function(){var e,t,n,i=this._core.clones().length/2,r=i+this._core.items().length,o=this._core.maximum(!0),s=this._core.settings,a=s.center||s.autoWidth||s.dotsData?1:s.dotsEach||s.items;if("page"!==s.slideBy&&(s.slideBy=Math.min(s.slideBy,s.items)),s.dots||"page"==s.slideBy)for(this._pages=[],e=i,t=0,n=0;e<r;e++){if(t>=a||0===t){if(this._pages.push({start:Math.min(o,e-i),end:e-i+a-1}),Math.min(o,e-i)===o)break;t=0,++n}t+=this._core.mergers(this._core.relative(e))}},r.prototype.draw=function(){var t,n=this._core.settings,i=this._core.items().length<=n.items,r=this._core.relative(this._core.current()),o=n.loop||n.rewind;this._controls.$relative.toggleClass("disabled",!n.nav||i),n.nav&&(this._controls.$previous.toggleClass("disabled",!o&&r<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!o&&r>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!n.dots||i),n.dots&&(t=this._pages.length-this._controls.$absolute.children().length,n.dotsData&&0!==t?this._controls.$absolute.html(this._templates.join("")):t>0?this._controls.$absolute.append(new Array(t+1).join(this._templates[0])):t<0&&this._controls.$absolute.children().slice(t).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(e.inArray(this.current(),this._pages)).addClass("active"))},r.prototype.onTrigger=function(t){var n=this._core.settings;t.page={index:e.inArray(this.current(),this._pages),count:this._pages.length,size:n&&(n.center||n.autoWidth||n.dotsData?1:n.dotsEach||n.items)}},r.prototype.current=function(){var t=this._core.relative(this._core.current());return e.grep(this._pages,e.proxy(function(e,n){return e.start<=t&&e.end>=t},this)).pop()},r.prototype.getPosition=function(t){var n,i,r=this._core.settings;return"page"==r.slideBy?(n=e.inArray(this.current(),this._pages),i=this._pages.length,t?++n:--n,n=this._pages[(n%i+i)%i].start):(n=this._core.relative(this._core.current()),i=this._core.items().length,t?n+=r.slideBy:n-=r.slideBy),n},r.prototype.next=function(t){e.proxy(this._overrides.to,this._core)(this.getPosition(!0),t)},r.prototype.prev=function(t){e.proxy(this._overrides.to,this._core)(this.getPosition(!1),t)},r.prototype.to=function(t,n,i){var r;!i&&this._pages.length?(r=this._pages.length,e.proxy(this._overrides.to,this._core)(this._pages[(t%r+r)%r].start,n)):e.proxy(this._overrides.to,this._core)(t,n)},e.fn.owlCarousel.Constructor.Plugins.Navigation=r}(window.Zepto||e,window,document),function(e,t,n,i){"use strict";var r=function(n){this._core=n,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":e.proxy(function(n){n.namespace&&"URLHash"===this._core.settings.startPosition&&e(t).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":e.proxy(function(t){if(t.namespace){var n=e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!n)return;this._hashes[n]=t.content}},this),"changed.owl.carousel":e.proxy(function(n){if(n.namespace&&"position"===n.property.name){var i=this._core.items(this._core.relative(this._core.current())),r=e.map(this._hashes,function(e,t){return e===i?t:null}).join();if(!r||t.location.hash.slice(1)===r)return;t.location.hash=r}},this)},this._core.options=e.extend({},r.Defaults,this._core.options),this.$element.on(this._handlers),e(t).on("hashchange.owl.navigation",e.proxy(function(e){var n=t.location.hash.substring(1),r=this._core.$stage.children(),o=this._hashes[n]&&r.index(this._hashes[n]);o!==i&&o!==this._core.current()&&this._core.to(this._core.relative(o),!1,!0)},this))};r.Defaults={URLhashListener:!1},r.prototype.destroy=function(){var n,i;e(t).off("hashchange.owl.navigation");for(n in this._handlers)this._core.$element.off(n,this._handlers[n]);for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},e.fn.owlCarousel.Constructor.Plugins.Hash=r}(window.Zepto||e,window,document),function(e,t,n,i){function r(t,n){var r=!1,o=t.charAt(0).toUpperCase()+t.slice(1);return e.each((t+" "+a.join(o+" ")+o).split(" "),function(e,t){if(s[t]!==i)return r=!n||t,!1}),r}function o(e){return r(e,!0)}var s=e("<support>").get(0).style,a="Webkit Moz O ms".split(" "),l={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},u={csstransforms:function(){return!!r("transform")},csstransforms3d:function(){return!!r("perspective")},csstransitions:function(){return!!r("transition")},cssanimations:function(){return!!r("animation")}};u.csstransitions()&&(e.support.transition=new String(o("transition")),e.support.transition.end=l.transition.end[e.support.transition]),u.cssanimations()&&(e.support.animation=new String(o("animation")),e.support.animation.end=l.animation.end[e.support.animation]),u.csstransforms()&&(e.support.transform=new String(o("transform")),e.support.transform3d=u.csstransforms3d())}(window.Zepto||e,window,document)}).call(t,n(3),n(3))},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["initialize","initialized","resize","resized","refresh","refreshed","update","updated","drag","dragged","translate","translated","to","changed"]},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{directives:[{name:"show",rawName:"v-show",value:e.showPrev,expression:"showPrev"}],attrs:{id:e.prevHandler}},[e._t("prev")],2),e._v(" "),n("div",{"class":["owl-carousel","owl-theme"],attrs:{id:e.elementHandle}},[e._t("default")],2),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.showNext,expression:"showNext"}],attrs:{id:e.nextHandler}},[e._t("next")],2)])},staticRenderFns:[]}}])});

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/vue-components/YourComponent.vue?vue&type=style&index=0&id=3c389b6c&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader??ref--2-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/vue-components/YourComponent.vue?vue&type=style&index=0&id=3c389b6c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!../../../../node_modules/css-loader??ref--2-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--2-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./YourComponent.vue?vue&type=style&index=0&id=3c389b6c&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/vue-components/YourComponent.vue?vue&type=style&index=0&id=3c389b6c&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7b9db852", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./resources/assets/js/accessibility.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/accessibility.js ***!
  \**********************************************/
/*! exports provided: accessibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessibility", function() { return accessibility; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

function accessibility() {}
;

/***/ }),

/***/ "./resources/assets/js/anchor.js":
/*!***************************************!*\
  !*** ./resources/assets/js/anchor.js ***!
  \***************************************/
/*! exports provided: anchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anchor", function() { return anchor; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

function anchor() {
  // direct browser to top right away https://stackoverflow.com/questions/44899008/how-to-navigate-to-another-page-with-a-smooth-scroll-on-a-specific-id
  // direct browser to top right away
  if (window.location.hash) scroll(0, 0); // takes care of some browsers issue

  setTimeout(function () {
    scroll(0, 0);
  }, 1);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    //your current click function
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll').on('click', function (e) {
      e.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html,body').animate({
        scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href')).offset().top + 'px'
      }, 1000, 'swing');
    }); // if we have anchor on the url (calling from other page)

    if (window.location.hash) {
      // smooth scroll to the anchor id
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html,body').animate({
        scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()(window.location.hash).offset().top + 'px'
      }, 1000, 'swing');
    }
  });
}
;

/***/ }),

/***/ "./resources/assets/js/carousels.js":
/*!******************************************!*\
  !*** ./resources/assets/js/carousels.js ***!
  \******************************************/
/*! exports provided: carousels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carousels", function() { return carousels; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-owl-carousel */ "./node_modules/vue-owl-carousel/dist/vue-owl-carousel.js");
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



function carousels() {
  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-1').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-1',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-2').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-2',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-3').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-3',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-4').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-4',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-5').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-5',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-6').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-6',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-7').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-7',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-8').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-8',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-9').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-9',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-10').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-10',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-11').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-11',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-12').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-12',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-13').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-13',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-14').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-14',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-15').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-15',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-16').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-16',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-17').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-17',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-18').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-18',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-19').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-19',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-gallery-20').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-gallery-20',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#publication-block').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#publication-block',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#publication-infographic-gallery').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#publication-infographic-gallery',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#publication-video-gallery').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#publication-video-gallery',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#publication-related-gallery').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#publication-related-gallery',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#carousel-casestudies').length) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#carousel-casestudies',
      components: {
        carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    });
  }

  var amount = jquery__WEBPACK_IMPORTED_MODULE_2___default()(".red").length;
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('button.owl-dot').attr('aria-label', 'Carousel Navigation + amount');
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('button.pswp__button').attr('aria-label', 'Fullscreen Carousel Navigation + amount');
}

/***/ }),

/***/ "./resources/assets/js/elements.js":
/*!*****************************************!*\
  !*** ./resources/assets/js/elements.js ***!
  \*****************************************/
/*! exports provided: search, pageload, accordions, copyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageload", function() { return pageload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accordions", function() { return accordions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToClipboard", function() { return copyToClipboard; });
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_bulma_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-bulma-accordion */ "./node_modules/vue-bulma-accordion/dist/vue-bulma-accordion.umd.js");
/* harmony import */ var vue_bulma_accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_bulma_accordion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sal.js */ "./node_modules/sal.js/dist/sal.js");
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sal_js__WEBPACK_IMPORTED_MODULE_4__);





function search() {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('input.input.search').on("keypress", function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.show-if-focus').removeClass('d-none');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.hide-if-focus').addClass('d-none');
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('input.input.search').on("focusout", function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.show-if-focus').addClass('d-none');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.hide-if-focus').removeClass('d-none');
  });
}
function pageload() {
  var salAnimation = sal_js__WEBPACK_IMPORTED_MODULE_4___default()({
    threshold: .05
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on('load', function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.pageloader').removeClass('is-active');
    var $top = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".sticky-header").get(0).getBoundingClientRect(); // console.log( $top );

    if ($top.top != 0) {
      // $(".sticky-header, .subnav").addClass('not-top');
      // $("html").addClass('fixnav').removeClass('unfixnav');
      salAnimation.disable();
    } else {
      salAnimation.enable();
    }
  }); // button dropdown

  var button = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.button-dropdown');
  var dropdown = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.dropdown-menu');
  button.on('click', function (e) {
    dropdown.toggleClass("is-active");
  }); // read more

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('a.read-more').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.readmore').toggleClass('d-inline');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.elipsis').toggleClass('d-none');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass('reveal');

    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).hasClass('reveal')) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).text('Read Less');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).text('Read More');
    }
  }); // add close quote

  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wysiwyg").find("blockquote p").append("<span>”</span>"); // show caption

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('a.show-caption').on('mouseenter', function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.info').removeClass('opacity-100').addClass('opacity-0');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.caption').removeClass('opacity-0').addClass('opacity-100');
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('a.show-caption').on('mouseleave', function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.info').removeClass('opacity-0').addClass('opacity-100');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.caption').removeClass('opacity-100').addClass('opacity-0');
  }); // add element for caption

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.wp-caption-text').parent().append("<div class='captioninfo'>i</div>");
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.captioninfo').on('mouseenter', function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('hide');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('p.wp-caption-text').addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.captioninfo').on('mouseleave', function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).removeClass('hide');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('p.wp-caption-text').removeClass('active');
  }); // activate bkg img class
  // $('a.bkg-img-link').on('mouseenter', function() {
  //   $(this).parentsUntil().find('.bkg-img').addClass('active');
  // });
  // $('a.bkg-img-link').on('mouseleave', function() {
  //   $(this).parentsUntil().find('.bkg-img').removeClass('active');
  // });
  // add lazy load to image in wysiwyg

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.wysiwyg img, iframe').addClass('lazyload'); // add bulma style to table

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tablepress, table').addClass('table is-bordered is-striped is-narrow is-hoverable is-fullwidth');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#articles').on('click', '#load-older-posts', function (e) {
    // prevent new page load
    e.preventDefault(); // store next page number

    var next_page = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('href'); // remove older posts button from DOM

    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).remove(); // ajax older posts below existing posts

    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#articles').append(jquery__WEBPACK_IMPORTED_MODULE_1___default()('<section />').load(next_page + ' #articles'));
  });
}
;
function accordions() {
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bulma-accordion-1').length) {
    new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
      el: '#bulma-accordion-1',
      components: {
        BulmaAccordion: vue_bulma_accordion__WEBPACK_IMPORTED_MODULE_3__["BulmaAccordion"],
        BulmaAccordionItem: vue_bulma_accordion__WEBPACK_IMPORTED_MODULE_3__["BulmaAccordionItem"]
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bulma-accordion-2').length) {
    new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
      el: '#bulma-accordion-2',
      components: {
        BulmaAccordion: vue_bulma_accordion__WEBPACK_IMPORTED_MODULE_3__["BulmaAccordion"],
        BulmaAccordionItem: vue_bulma_accordion__WEBPACK_IMPORTED_MODULE_3__["BulmaAccordionItem"]
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bulma-accordion-3').length) {
    new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
      el: '#bulma-accordion-3',
      components: {
        BulmaAccordion: vue_bulma_accordion__WEBPACK_IMPORTED_MODULE_3__["BulmaAccordion"],
        BulmaAccordionItem: vue_bulma_accordion__WEBPACK_IMPORTED_MODULE_3__["BulmaAccordionItem"]
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bulma-accordion-4').length) {
    new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
      el: '#bulma-accordion-4',
      components: {
        BulmaAccordion: vue_bulma_accordion__WEBPACK_IMPORTED_MODULE_3__["BulmaAccordion"],
        BulmaAccordionItem: vue_bulma_accordion__WEBPACK_IMPORTED_MODULE_3__["BulmaAccordionItem"]
      }
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bulma-accordion-5').length) {
    new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
      el: '#bulma-accordion-5',
      components: {
        BulmaAccordion: vue_bulma_accordion__WEBPACK_IMPORTED_MODULE_3__["BulmaAccordion"],
        BulmaAccordionItem: vue_bulma_accordion__WEBPACK_IMPORTED_MODULE_3__["BulmaAccordionItem"]
      }
    });
  }
}
function copyToClipboard() {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()("button.clicktocopy").click(function (event) {
    var $tempElement = jquery__WEBPACK_IMPORTED_MODULE_1___default()("<input>");
    jquery__WEBPACK_IMPORTED_MODULE_1___default()("body").append($tempElement);
    $tempElement.val(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find("span.copythis").text()).select();
    document.execCommand("Copy");
    $tempElement.remove();
    alert('copied anchor link to clipboard! this will help you create the main menu nav');
  });
}
;

/***/ }),

/***/ "./resources/assets/js/main.js":
/*!*************************************!*\
  !*** ./resources/assets/js/main.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lazysizes_plugins_respimg_ls_respimg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lazysizes/plugins/respimg/ls.respimg */ "./node_modules/lazysizes/plugins/respimg/ls.respimg.js");
/* harmony import */ var lazysizes_plugins_respimg_ls_respimg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_respimg_ls_respimg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-owl-carousel */ "./node_modules/vue-owl-carousel/dist/vue-owl-carousel.js");
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_owl_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav.js */ "./resources/assets/js/nav.js");
/* harmony import */ var _accessibility_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accessibility.js */ "./resources/assets/js/accessibility.js");
/* harmony import */ var _carousels_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carousels.js */ "./resources/assets/js/carousels.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar.js */ "./resources/assets/js/sidebar.js");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./elements.js */ "./resources/assets/js/elements.js");
/* harmony import */ var _anchor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./anchor.js */ "./resources/assets/js/anchor.js");
/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scroll.js */ "./resources/assets/js/scroll.js");
/* harmony import */ var _vue_components_YourComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vue-components/YourComponent */ "./resources/assets/js/vue-components/YourComponent.vue");
__webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");

 //import js libraries



 //import vue components

 // import Parallax from "vue-parallaxy";

 // import custom scripts












smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3___default.a.polyfill(); // init scripts

Object(_accessibility_js__WEBPACK_IMPORTED_MODULE_7__["accessibility"])();
Object(_sidebar_js__WEBPACK_IMPORTED_MODULE_9__["sidebar"])();
Object(_carousels_js__WEBPACK_IMPORTED_MODULE_8__["carousels"])();
Object(_elements_js__WEBPACK_IMPORTED_MODULE_10__["accordions"])();
Object(_elements_js__WEBPACK_IMPORTED_MODULE_10__["search"])();
Object(_elements_js__WEBPACK_IMPORTED_MODULE_10__["pageload"])();
Object(_elements_js__WEBPACK_IMPORTED_MODULE_10__["copyToClipboard"])();
Object(_scroll_js__WEBPACK_IMPORTED_MODULE_12__["scroll"])();
Object(_anchor_js__WEBPACK_IMPORTED_MODULE_11__["anchor"])();
Object(_nav_js__WEBPACK_IMPORTED_MODULE_6__["nav"])();

/***/ }),

/***/ "./resources/assets/js/nav.js":
/*!************************************!*\
  !*** ./resources/assets/js/nav.js ***!
  \************************************/
/*! exports provided: nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nav", function() { return nav; });
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scroll-out */ "./node_modules/scroll-out/lib/index.js");
/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scroll_out__WEBPACK_IMPORTED_MODULE_2__);



function nav() {
  var hero = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.hero');
  var heroHeight = hero.height();
  var wrapHeight = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header-wrap').height();
  var stickyHeader = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.sticky-header');
  var stickyHeaderHeight = stickyHeader.height();
  var scrollHeight = heroHeight - stickyHeaderHeight;
  scroll_out__WEBPACK_IMPORTED_MODULE_2___default()({
    /* options */
    targets: jquery__WEBPACK_IMPORTED_MODULE_1___default()('.sticky-header, .subnav'),
    offset: scrollHeight // cssProps: {
    //   scrollPercentY: true,
    // },

  });
  var topofDiv = hero.offset().top; //gets offset of header

  var height = hero.outerHeight(); //gets height of header

  jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scroll(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scrollTop() > heroHeight) {
      stickyHeader.addClass('past-hero');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('button.go-top').addClass('is-active');
    } else {
      stickyHeader.removeClass('past-hero');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('button.go-top').removeClass('is-active');
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scrollTop() < heroHeight - wrapHeight) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.sticky-header, .subnav').addClass('inside-hero');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.sticky-header, .subnav').removeClass('anchor-active');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.sticky-header, .subnav').removeClass('inside-hero');
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scrollTop() > scrollHeight && jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scrollTop() < heroHeight) {
      stickyHeader.addClass('disable-nav');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').removeClass('fixnav-init');
    } else {
      stickyHeader.removeClass('disable-nav');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default.a.extend(jquery__WEBPACK_IMPORTED_MODULE_1___default.a.expr[':'], {
    'off-top': function offTop(el) {
      return jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).offset().top < jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scrollTop();
    },
    'off-right': function offRight(el) {
      return jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).offset().left + jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).outerWidth() - jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scrollLeft() > jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).width();
    },
    'off-bottom': function offBottom(el) {
      return jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).offset().top + jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).outerHeight() - jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scrollTop() > jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).height();
    },
    'off-left': function offLeft(el) {
      return jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).offset().left < jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scrollLeft();
    },
    'off-screen': function offScreen(el) {
      return jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).is(':off-top, :off-right, :off-bottom, :off-left');
    }
  });
  var htmlBody = jquery__WEBPACK_IMPORTED_MODULE_1___default()('html, body');
  var navbarMenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.navbar-menu ul');
  var navDrop = jquery__WEBPACK_IMPORTED_MODULE_1___default()('ul.nav-drop');
  var navMainLink = jquery__WEBPACK_IMPORTED_MODULE_1___default()('a.nav-main-link');
  var searchInputMain = jquery__WEBPACK_IMPORTED_MODULE_1___default()('input[name="s"]');
  var navbarBurger = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.navbar-burger');
  var mobileMenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('ul.mobile-menu');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scroll(function () {
    stickyHeader.removeClass('show-search');
    navbarMenu.removeClass('hide-search');
    navDrop.removeClass('is-active');
    navMainLink.removeClass('is-active');
    searchInputMain.parent().find('.icon-close').addClass('icon-search').removeClass('icon-close button-close-search');
  });

  function clickSearchIcon() {
    stickyHeader.toggleClass('show-search');
    searchInputMain.focus();
    searchInputMain.parent().find('.icon-search').removeClass('icon-search').addClass('icon-close button-close-search');
    navbarMenu.addClass('hide-search');
  }

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.close-topic').on('click', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.search-topic-menu').removeClass('menu-active');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.navbar-menu').removeClass('menu-topic');
    htmlBody.removeClass('overflow-y-hidden');
    htmlBody.removeClass('overflow-hidden');
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.close-state').on('click', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.search-region-menu').removeClass('menu-active');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.navbar-menu').removeClass('menu-region');
    htmlBody.removeClass('overflow-y-hidden');
    htmlBody.removeClass('overflow-hidden');
  });

  function openMenu() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.navbar-burger, .navbar-menu').addClass('is-active');
    mobileMenu.addClass('menu-active');
    stickyHeader.addClass('menu-active');
    htmlBody.css({
      'overflow-y': 'hidden'
    });
  }

  function closeMenu() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.navbar-burger, .navbar-menu').removeClass('is-active');
    mobileMenu.removeClass('menu-active');
    stickyHeader.removeClass('menu-active');
    htmlBody.css({
      'overflow-y': 'scroll'
    });
  }

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('a.search-icon-btf').on('click', function () {
    clickSearchIcon();
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('span.icon.search-close').on('click', function () {
    clickSearchIcon();
    navbarMenu.removeClass('hide-search');
  }); // Toggle mobile menu

  navbarBurger.on('click', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.search-region-menu, .search-topic-menu').toggleClass('closed-by-mainmenu').removeClass('menu-active');
    var clicks = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).data('clicks');

    if (clicks) {
      closeMenu();
    } else {
      openMenu();
    }

    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).data("clicks", !clicks);
  });
  var width = jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).width();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on('resize', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).width() != width) {
      closeMenu();
    }
  });
  navMainLink.on('mouseover touchstart focus', function (e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('ul.nav-drop').hasClass('is-active')) {} else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('a.nav-main-link.is-active').toggleClass('is-active');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('ul.nav-drop.is-active').toggleClass('is-active');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('ul.nav-drop').toggleClass('is-active');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass('is-active');
      var f = jquery__WEBPACK_IMPORTED_MODULE_1___default()('ul.nav-drop');

      if (f.is(':off-right')) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('ul.nav-drop').addClass('offscreen');
      }
    }
  }); // when click outside nav this closes it

  jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', function (e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).closest("span.navwrap").length === 0) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('ul.nav-drop, a.nav-main-link').removeClass('is-active');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.search-region').on('click', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.navbar-menu').toggleClass('menu-region');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.navbar-menu').removeClass('menu-topic');
    htmlBody.toggleClass('overflow-y-hidden');
    htmlBody.removeClass('overflow-hidden');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.search-region-menu').toggleClass('menu-active');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.search-topic-menu').removeClass('menu-active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.search-topic').on('click', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.navbar-menu').toggleClass('menu-topic');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.navbar-menu').removeClass('menu-region');
    htmlBody.toggleClass('overflow-hidden');
    htmlBody.removeClass('overflow-y-hidden');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.search-topic-menu').toggleClass('menu-active');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.search-region-menu').removeClass('menu-active');
  }); //mobile accordion

  var allPanels = jquery__WEBPACK_IMPORTED_MODULE_1___default()('ul.accordion-content');
  allPanels.hide();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('a.toggle-shelf').on('click', function (e) {
    e.preventDefault();
    var targetContent = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().parent().find('ul.accordion-content');
    var clicks = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).data('clicks');

    if (clicks) {
      targetContent.removeClass('active').slideUp();
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).removeClass('active');
    } else {
      targetContent.addClass('active').slideDown(); // open this accordion

      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active');
    }

    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).data("clicks", !clicks);
    return false;
  });
}
;

/***/ }),

/***/ "./resources/assets/js/scroll.js":
/*!***************************************!*\
  !*** ./resources/assets/js/scroll.js ***!
  \***************************************/
/*! exports provided: scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


function scroll() {
  var html = jquery__WEBPACK_IMPORTED_MODULE_1___default()('html');
  var navbar = jquery__WEBPACK_IMPORTED_MODULE_1___default()('nav.navbar');
  var didScroll;
  var lastScrollTop = 0;
  var delta = 15;
  var heroheight = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.hero').height();
  var wrapHeight = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header-wrap').outerHeight();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scroll(function (event) {
    didScroll = true;
  }); // https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c

  function hasScrolled() {
    var st = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop); // console.log( st );
    // add background color after leaving top of page

    if (st <= 50) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".sticky-header").removeClass('not-top');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".sticky-header").addClass('not-top');
    }

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > heroheight) {
      html.removeClass('fixnav').addClass('unfixnav');
    } else {
      if (st + jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).height() < jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).height()) {
        html.addClass('fixnav').removeClass('unfixnav');
      }
    }

    lastScrollTop = st;
  }

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.dropdown-menu').removeClass("is-active"); // $(".sticky-header").addClass('not-top');
    }
  }, 250); // https://codepen.io/BoyWithSilverWings/pen/MJgQqR

  jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn.isInViewport = function () {
    var elementTop = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).offset().top - 61;
    var elementBottom = elementTop + jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).outerHeight();
    var viewportTop = jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scrollTop();
    var viewportBottom = viewportTop + jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).height();
    return elementTop < viewportTop;
  }; // control scroll up subnav anchor


  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.sub-nav-item a').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.sticky-header, .subnav').addClass('anchor-active');
  }); // subnav anchor links

  jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on('resize scroll', function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.flex-blocks').not('.not-header').each(function (i) {
      if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).isInViewport()) {} else {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.jump-to').html('Jump to section ...');
      }
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on('resize scroll', function () {
    var currentTop = jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scrollTop();
    var elems = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.flex-blocks').not('.not-header');
    elems.each(function () {
      var elemTop = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).offset().top;
      var elemBottom = elemTop + jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).height();
      var id = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('scrollname');
      var navElem = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.jump-to');

      if (currentTop >= elemTop && currentTop <= elemBottom) {
        navElem.html(id);
      }
    });
  }); // Select all links with hashes

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('a[href*="#"]') // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.hash);
      target = target.length ? target : jquery__WEBPACK_IMPORTED_MODULE_1___default()('[name=' + this.hash.slice(1) + ']'); // Does a scroll target exist?

      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('html, body').animate({
          scrollTop: target.offset().top - 0
        }, 350, function () {
          // Callback after animation
          // Must change focus!
          var $target = jquery__WEBPACK_IMPORTED_MODULE_1___default()(target);
          $target.focus();

          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable

            $target.focus(); // Set focus again
          }

          ;
        });
      }
    }
  });
}
;

/***/ }),

/***/ "./resources/assets/js/sidebar.js":
/*!****************************************!*\
  !*** ./resources/assets/js/sidebar.js ***!
  \****************************************/
/*! exports provided: sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebar", function() { return sidebar; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

function sidebar() {
  var $window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);

  function sidebar() {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);
    var scrollTop = $this.scrollTop();
    var $sidebarWrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-wrapper');
    var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-menu', $sidebarWrapper);
    var top = $sidebarWrapper.offset().top;

    if ($this.width() > 991) {
      if (scrollTop > jquery__WEBPACK_IMPORTED_MODULE_0___default()('footer').offset().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-menu').outerHeight(true) - 200) {
        $sidebar.removeClass('fixed');
        $sidebar.addClass('bottom');
      } else if (scrollTop > top - 200) {
        $sidebar.addClass('fixed');
        $sidebar.removeClass('bottom');
      } else {
        $sidebar.removeClass('fixed');
        $sidebar.removeClass('bottom');
      }
    }
  }

  function scrollListener() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-wrapper .sidebar-menu').outerHeight(true) + 100 > jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content-body').outerHeight(true)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-wrapper .sidebar-menu').addClass('needs-fit');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-wrapper').addClass('needs-fit');
      return;
    }

    $window.on('scroll', function () {
      sidebar();
    });
  }

  function init() {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-wrapper').length) {
      return;
    }

    sidebar();
    scrollListener();
  }

  init();
}
;

/***/ }),

/***/ "./resources/assets/js/vue-components/YourComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/vue-components/YourComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _YourComponent_vue_vue_type_template_id_3c389b6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YourComponent.vue?vue&type=template&id=3c389b6c&scoped=true& */ "./resources/assets/js/vue-components/YourComponent.vue?vue&type=template&id=3c389b6c&scoped=true&");
/* harmony import */ var _YourComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YourComponent.vue?vue&type=script&lang=js& */ "./resources/assets/js/vue-components/YourComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _YourComponent_vue_vue_type_style_index_0_id_3c389b6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./YourComponent.vue?vue&type=style&index=0&id=3c389b6c&scoped=true&lang=css& */ "./resources/assets/js/vue-components/YourComponent.vue?vue&type=style&index=0&id=3c389b6c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _YourComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _YourComponent_vue_vue_type_template_id_3c389b6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _YourComponent_vue_vue_type_template_id_3c389b6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3c389b6c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/vue-components/YourComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/vue-components/YourComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/vue-components/YourComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_YourComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./YourComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/vue-components/YourComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_YourComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/vue-components/YourComponent.vue?vue&type=style&index=0&id=3c389b6c&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/assets/js/vue-components/YourComponent.vue?vue&type=style&index=0&id=3c389b6c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_1_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_YourComponent_vue_vue_type_style_index_0_id_3c389b6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!../../../../node_modules/css-loader??ref--2-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--2-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./YourComponent.vue?vue&type=style&index=0&id=3c389b6c&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/vue-components/YourComponent.vue?vue&type=style&index=0&id=3c389b6c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_1_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_YourComponent_vue_vue_type_style_index_0_id_3c389b6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_1_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_YourComponent_vue_vue_type_style_index_0_id_3c389b6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_1_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_YourComponent_vue_vue_type_style_index_0_id_3c389b6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_1_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_YourComponent_vue_vue_type_style_index_0_id_3c389b6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_1_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_YourComponent_vue_vue_type_style_index_0_id_3c389b6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/vue-components/YourComponent.vue?vue&type=template&id=3c389b6c&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/vue-components/YourComponent.vue?vue&type=template&id=3c389b6c&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YourComponent_vue_vue_type_template_id_3c389b6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./YourComponent.vue?vue&type=template&id=3c389b6c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/vue-components/YourComponent.vue?vue&type=template&id=3c389b6c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YourComponent_vue_vue_type_template_id_3c389b6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YourComponent_vue_vue_type_template_id_3c389b6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvdnVlLWNvbXBvbmVudHMvWW91ckNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZnVuY3Rpb24tdG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmV4ZWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludGVyc2VjdGlvbi1vYnNlcnZlci9pbnRlcnNlY3Rpb24tb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhenlzaXplcy9sYXp5c2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhenlzaXplcy9wbHVnaW5zL3Jlc3BpbWcvbHMucmVzcGltZy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Z1ZS1jb21wb25lbnRzL1lvdXJDb21wb25lbnQudnVlPzEwNzAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NhbC5qcy9kaXN0L3NhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2Nyb2xsLW91dC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Ntb290aHNjcm9sbC1wb2x5ZmlsbC9kaXN0L3Ntb290aHNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWJ1bG1hLWFjY29yZGlvbi9kaXN0L3Z1ZS1idWxtYS1hY2NvcmRpb24udW1kLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdnVlLWNvbXBvbmVudHMvWW91ckNvbXBvbmVudC52dWU/OTY2MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtb3dsLWNhcm91c2VsL2Rpc3QvdnVlLW93bC1jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Z1ZS1jb21wb25lbnRzL1lvdXJDb21wb25lbnQudnVlP2UzZmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYWNjZXNzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FuY2hvci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Nhcm91c2Vscy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2VsZW1lbnRzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92dWUtY29tcG9uZW50cy9Zb3VyQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Z1ZS1jb21wb25lbnRzL1lvdXJDb21wb25lbnQudnVlPzMzODAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92dWUtY29tcG9uZW50cy9Zb3VyQ29tcG9uZW50LnZ1ZT80ZGE1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdnVlLWNvbXBvbmVudHMvWW91ckNvbXBvbmVudC52dWU/NDk1MSJdLCJuYW1lcyI6WyJhY2Nlc3NpYmlsaXR5IiwiYW5jaG9yIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic2Nyb2xsIiwic2V0VGltZW91dCIsIiQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJhdHRyIiwib2Zmc2V0IiwidG9wIiwiY2Fyb3VzZWxzIiwibGVuZ3RoIiwiVnVlIiwiZWwiLCJjb21wb25lbnRzIiwiY2Fyb3VzZWwiLCJhbW91bnQiLCJzZWFyY2giLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicGFnZWxvYWQiLCJzYWxBbmltYXRpb24iLCJzYWwiLCJ0aHJlc2hvbGQiLCIkdG9wIiwiZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGlzYWJsZSIsImVuYWJsZSIsImJ1dHRvbiIsImRyb3Bkb3duIiwidG9nZ2xlQ2xhc3MiLCJwYXJlbnQiLCJmaW5kIiwiaGFzQ2xhc3MiLCJ0ZXh0IiwiYXBwZW5kIiwibmV4dF9wYWdlIiwicmVtb3ZlIiwibG9hZCIsImFjY29yZGlvbnMiLCJCdWxtYUFjY29yZGlvbiIsIkJ1bG1hQWNjb3JkaW9uSXRlbSIsImNvcHlUb0NsaXBib2FyZCIsImNsaWNrIiwiZXZlbnQiLCIkdGVtcEVsZW1lbnQiLCJ2YWwiLCJzZWxlY3QiLCJkb2N1bWVudCIsImV4ZWNDb21tYW5kIiwiYWxlcnQiLCJyZXF1aXJlIiwic21vb3Roc2Nyb2xsIiwicG9seWZpbGwiLCJzaWRlYmFyIiwibmF2IiwiaGVybyIsImhlcm9IZWlnaHQiLCJoZWlnaHQiLCJ3cmFwSGVpZ2h0Iiwic3RpY2t5SGVhZGVyIiwic3RpY2t5SGVhZGVySGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiU2Nyb2xsT3V0IiwidGFyZ2V0cyIsInRvcG9mRGl2Iiwib3V0ZXJIZWlnaHQiLCJleHRlbmQiLCJleHByIiwibGVmdCIsIm91dGVyV2lkdGgiLCJzY3JvbGxMZWZ0Iiwid2lkdGgiLCJpcyIsImh0bWxCb2R5IiwibmF2YmFyTWVudSIsIm5hdkRyb3AiLCJuYXZNYWluTGluayIsInNlYXJjaElucHV0TWFpbiIsIm5hdmJhckJ1cmdlciIsIm1vYmlsZU1lbnUiLCJjbGlja1NlYXJjaEljb24iLCJmb2N1cyIsIm9wZW5NZW51IiwiY3NzIiwiY2xvc2VNZW51IiwiY2xpY2tzIiwiZGF0YSIsImYiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiYWxsUGFuZWxzIiwiaGlkZSIsInRhcmdldENvbnRlbnQiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwiaHRtbCIsIm5hdmJhciIsImRpZFNjcm9sbCIsImxhc3RTY3JvbGxUb3AiLCJkZWx0YSIsImhlcm9oZWlnaHQiLCJoYXNTY3JvbGxlZCIsInN0IiwiTWF0aCIsIm1heCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsImFicyIsInNldEludGVydmFsIiwiZm4iLCJpc0luVmlld3BvcnQiLCJlbGVtZW50VG9wIiwiZWxlbWVudEJvdHRvbSIsInZpZXdwb3J0VG9wIiwidmlld3BvcnRCb3R0b20iLCJub3QiLCJlYWNoIiwiaSIsImN1cnJlbnRUb3AiLCJlbGVtcyIsImVsZW1Ub3AiLCJlbGVtQm90dG9tIiwiaWQiLCJuYXZFbGVtIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaG9zdG5hbWUiLCJzbGljZSIsIiR0YXJnZXQiLCIkd2luZG93IiwiJHRoaXMiLCIkc2lkZWJhcldyYXBwZXIiLCIkc2lkZWJhciIsInNjcm9sbExpc3RlbmVyIiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FB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QTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQjtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LGVBQWUsWUFBWTtBQUMzQixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFFTDtBQUFBLEM7Ozs7Ozs7Ozs7OztBQzVDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdHO0FBQ3ZDO0FBQ0w7QUFDcUM7OztBQUdqRztBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsb0dBQU07QUFDUixFQUFFLDZHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUF5TCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E3TTtBQUFBO0FBQUE7QUFBQTtBQUE0ZCxDQUFnQiw2ZEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJzY3JpcHRzXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21haW4uanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGVcIj57eyBtc2cgfX08L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtc2c6ICdIZWxsbyB3b3JsZCEnXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5leGFtcGxlIHtcbiAgY29sb3I6IHJlZDtcbn1cbjwvc3R5bGU+IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4gLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gIHJldHVybiBpbmRleCArICh1bmljb2RlID8gYXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhc2MgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbCwgcmVzO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG4iLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi4xMScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG5cbnZhciBTUEVDSUVTID0gd2tzKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoID09PSAyICYmIHJlc3VsdFswXSA9PT0gJ2EnICYmIHJlc3VsdFsxXSA9PT0gJ2InO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgdmFyIFNZTUJPTCA9IHdrcyhLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgPyAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICB9XG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KSA6IHVuZGVmaW5lZDtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIVJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTKSB8fFxuICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgKSB7XG4gICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgIHZhciBmbnMgPSBleGVjKFxuICAgICAgZGVmaW5lZCxcbiAgICAgIFNZTUJPTCxcbiAgICAgICcnW0tFWV0sXG4gICAgICBmdW5jdGlvbiBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgaWYgKHJlZ2V4cC5leGVjID09PSByZWdleHBFeGVjKSB7XG4gICAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgICAgfVxuICAgICk7XG4gICAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICAgIHZhciByeGZuID0gZm5zWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4vX2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgYnVpbHRpbkV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG5cbiAvLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICB9XG4gIHJldHVybiBidWlsdGluRXhlYy5jYWxsKFIsIFMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvLFxuICAgICAgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTFbTEFTVF9JTkRFWF0gIT09IDAgfHwgcmUyW0xBU1RfSU5ERVhdICE9PSAwO1xufSkoKTtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQ7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgcmUuc291cmNlICsgJyQoPyFcXFxccyknLCByZWdleHBGbGFncy5jYWxsKHJlKSk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlW0xBU1RfSU5ERVhdO1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwocmUsIHN0cik7XG5cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZVtMQVNUX0lOREVYXSA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSg1KTtcbnZhciBLRVkgPSAnZmluZCc7XG52YXIgZm9yY2VkID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoS0VZIGluIFtdKSBBcnJheSgxKVtLRVldKGZ1bmN0aW9uICgpIHsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnJlcXVpcmUoJy4vX2V4cG9ydCcpKHtcbiAgdGFyZ2V0OiAnUmVnRXhwJyxcbiAgcHJvdG86IHRydWUsXG4gIGZvcmNlZDogcmVnZXhwRXhlYyAhPT0gLy4vLmV4ZWNcbn0sIHtcbiAgZXhlYzogcmVnZXhwRXhlY1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFMgPSAvXFwkKFskJmAnXXxcXGRcXGQ/fDxbXj5dKj4pL2c7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQgPSAvXFwkKFskJmAnXXxcXGRcXGQ/KS9nO1xuXG52YXIgbWF5YmVUb1N0cmluZyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/IGl0IDogU3RyaW5nKGl0KTtcbn07XG5cbi8vIEBAcmVwbGFjZSBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFJFUExBQ0UsICRyZXBsYWNlLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGxhY2VcbiAgICBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBmbi5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICAgIDogJHJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoJHJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgdmFyIGZ1bmN0aW9uYWxSZXBsYWNlID0gdHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGlmICghZnVuY3Rpb25hbFJlcGxhY2UpIHJlcGxhY2VWYWx1ZSA9IFN0cmluZyhyZXBsYWNlVmFsdWUpO1xuICAgICAgdmFyIGdsb2JhbCA9IHJ4Lmdsb2JhbDtcbiAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGJyZWFrO1xuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgaWYgKCFnbG9iYWwpIGJyZWFrO1xuICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgIH1cbiAgICAgIHZhciBhY2N1bXVsYXRlZFJlc3VsdCA9ICcnO1xuICAgICAgdmFyIG5leHRTb3VyY2VQb3NpdGlvbiA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgdmFyIGNhcHR1cmVzID0gW107XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgY2FwdHVyZXMucHVzaChtYXliZVRvU3RyaW5nKHJlc3VsdFtqXSkpO1xuICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgIHZhciByZXBsYWNlckFyZ3MgPSBbbWF0Y2hlZF0uY29uY2F0KGNhcHR1cmVzLCBwb3NpdGlvbiwgUyk7XG4gICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gbmV4dFNvdXJjZVBvc2l0aW9uKSB7XG4gICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICB9XG4gIF07XG5cbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbiAgZnVuY3Rpb24gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICAgIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICB2YXIgbSA9IGNhcHR1cmVzLmxlbmd0aDtcbiAgICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5hbWVkQ2FwdHVyZXMgPSB0b09iamVjdChuYW1lZENhcHR1cmVzKTtcbiAgICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgICB9XG4gICAgcmV0dXJuICRyZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgc3dpdGNoIChjaC5jaGFyQXQoMCkpIHtcbiAgICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICAgIGNhc2UgJyYnOiByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgY2FzZSAnYCc6IHJldHVybiBzdHIuc2xpY2UoMCwgcG9zaXRpb24pO1xuICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBjYXB0dXJlID0gbmFtZWRDYXB0dXJlc1tjaC5zbGljZSgxLCAtMSldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiAvLyBcXGRcXGQ/XG4gICAgICAgICAgdmFyIG4gPSArY2g7XG4gICAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICAgIHZhciBmID0gZmxvb3IobiAvIDEwKTtcbiAgICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICBpZiAoZiA8PSBtKSByZXR1cm4gY2FwdHVyZXNbZiAtIDFdID09PSB1bmRlZmluZWQgPyBjaC5jaGFyQXQoMSkgOiBjYXB0dXJlc1tmIC0gMV0gKyBjaC5jaGFyQXQoMSk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICAgIH0pO1xuICB9XG59KTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNPRlRXQVJFIEFORCBET0NVTUVOVCBOT1RJQ0UgQU5EIExJQ0VOU0UuXG4gKlxuICogIGh0dHBzOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudFxuICpcbiAqL1xuKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBFeGl0IGVhcmx5IGlmIHdlJ3JlIG5vdCBydW5uaW5nIGluIGEgYnJvd3Nlci5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0Jykge1xuICByZXR1cm47XG59XG5cbi8vIEV4aXQgZWFybHkgaWYgYWxsIEludGVyc2VjdGlvbk9ic2VydmVyIGFuZCBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5XG4vLyBmZWF0dXJlcyBhcmUgbmF0aXZlbHkgc3VwcG9ydGVkLlxuaWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93ICYmXG4gICAgJ0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnknIGluIHdpbmRvdyAmJlxuICAgICdpbnRlcnNlY3Rpb25SYXRpbycgaW4gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlKSB7XG5cbiAgLy8gTWluaW1hbCBwb2x5ZmlsbCBmb3IgRWRnZSAxNSdzIGxhY2sgb2YgYGlzSW50ZXJzZWN0aW5nYFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvaXNzdWVzLzIxMVxuICBpZiAoISgnaXNJbnRlcnNlY3RpbmcnIGluIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlLFxuICAgICAgJ2lzSW50ZXJzZWN0aW5nJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm47XG59XG5cblxuLyoqXG4gKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgZG9jdW1lbnQuXG4gKi9cbnZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblxuXG4vKipcbiAqIEFuIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5LiBUaGlzIHJlZ2lzdHJ5IGV4aXN0cyB0byBob2xkIGEgc3Ryb25nXG4gKiByZWZlcmVuY2UgdG8gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaW5zdGFuY2VzIGN1cnJlbnRseSBvYnNlcnZpbmcgYSB0YXJnZXRcbiAqIGVsZW1lbnQuIFdpdGhvdXQgdGhpcyByZWdpc3RyeSwgaW5zdGFuY2VzIHdpdGhvdXQgYW5vdGhlciByZWZlcmVuY2UgbWF5IGJlXG4gKiBnYXJiYWdlIGNvbGxlY3RlZC5cbiAqL1xudmFyIHJlZ2lzdHJ5ID0gW107XG5cblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSBjb25zdHJ1Y3Rvci5cbiAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jaW50ZXJzZWN0aW9uLW9ic2VydmVyLWVudHJ5XG4gKiBAcGFyYW0ge09iamVjdH0gZW50cnkgQSBkaWN0aW9uYXJ5IG9mIGluc3RhbmNlIHByb3BlcnRpZXMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeShlbnRyeSkge1xuICB0aGlzLnRpbWUgPSBlbnRyeS50aW1lO1xuICB0aGlzLnRhcmdldCA9IGVudHJ5LnRhcmdldDtcbiAgdGhpcy5yb290Qm91bmRzID0gZW50cnkucm9vdEJvdW5kcztcbiAgdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QgPSBlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3Q7XG4gIHRoaXMuaW50ZXJzZWN0aW9uUmVjdCA9IGVudHJ5LmludGVyc2VjdGlvblJlY3QgfHwgZ2V0RW1wdHlSZWN0KCk7XG4gIHRoaXMuaXNJbnRlcnNlY3RpbmcgPSAhIWVudHJ5LmludGVyc2VjdGlvblJlY3Q7XG5cbiAgLy8gQ2FsY3VsYXRlcyB0aGUgaW50ZXJzZWN0aW9uIHJhdGlvLlxuICB2YXIgdGFyZ2V0UmVjdCA9IHRoaXMuYm91bmRpbmdDbGllbnRSZWN0O1xuICB2YXIgdGFyZ2V0QXJlYSA9IHRhcmdldFJlY3Qud2lkdGggKiB0YXJnZXRSZWN0LmhlaWdodDtcbiAgdmFyIGludGVyc2VjdGlvblJlY3QgPSB0aGlzLmludGVyc2VjdGlvblJlY3Q7XG4gIHZhciBpbnRlcnNlY3Rpb25BcmVhID0gaW50ZXJzZWN0aW9uUmVjdC53aWR0aCAqIGludGVyc2VjdGlvblJlY3QuaGVpZ2h0O1xuXG4gIC8vIFNldHMgaW50ZXJzZWN0aW9uIHJhdGlvLlxuICBpZiAodGFyZ2V0QXJlYSkge1xuICAgIC8vIFJvdW5kIHRoZSBpbnRlcnNlY3Rpb24gcmF0aW8gdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgbWF0aCBpc3N1ZXM6XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbnRlcnNlY3Rpb25PYnNlcnZlci9pc3N1ZXMvMzI0XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA9IE51bWJlcigoaW50ZXJzZWN0aW9uQXJlYSAvIHRhcmdldEFyZWEpLnRvRml4ZWQoNCkpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIGFyZWEgaXMgemVybyBhbmQgaXMgaW50ZXJzZWN0aW5nLCBzZXRzIHRvIDEsIG90aGVyd2lzZSB0byAwXG4gICAgdGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA9IHRoaXMuaXNJbnRlcnNlY3RpbmcgPyAxIDogMDtcbiAgfVxufVxuXG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIGNvbnN0cnVjdG9yLlxuICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNpbnRlcnNlY3Rpb24tb2JzZXJ2ZXItaW50ZXJmYWNlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciBpbnRlcnNlY3Rpb25cbiAqICAgICBjaGFuZ2VzIGhhdmUgcXVldWVkLiBUaGUgZnVuY3Rpb24gaXMgbm90IGludm9rZWQgaWYgdGhlIHF1ZXVlIGhhc1xuICogICAgIGJlZW4gZW1wdGllZCBieSBjYWxsaW5nIHRoZSBgdGFrZVJlY29yZHNgIG1ldGhvZC5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X29wdGlvbnMgT3B0aW9uYWwgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRfb3B0aW9ucykge1xuXG4gIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnJvb3QgJiYgb3B0aW9ucy5yb290Lm5vZGVUeXBlICE9IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Jvb3QgbXVzdCBiZSBhbiBFbGVtZW50Jyk7XG4gIH1cblxuICAvLyBCaW5kcyBhbmQgdGhyb3R0bGVzIGB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnNgLlxuICB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMgPSB0aHJvdHRsZShcbiAgICAgIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucy5iaW5kKHRoaXMpLCB0aGlzLlRIUk9UVExFX1RJTUVPVVQpO1xuXG4gIC8vIFByaXZhdGUgcHJvcGVydGllcy5cbiAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID0gW107XG4gIHRoaXMuX3F1ZXVlZEVudHJpZXMgPSBbXTtcbiAgdGhpcy5fcm9vdE1hcmdpblZhbHVlcyA9IHRoaXMuX3BhcnNlUm9vdE1hcmdpbihvcHRpb25zLnJvb3RNYXJnaW4pO1xuXG4gIC8vIFB1YmxpYyBwcm9wZXJ0aWVzLlxuICB0aGlzLnRocmVzaG9sZHMgPSB0aGlzLl9pbml0VGhyZXNob2xkcyhvcHRpb25zLnRocmVzaG9sZCk7XG4gIHRoaXMucm9vdCA9IG9wdGlvbnMucm9vdCB8fCBudWxsO1xuICB0aGlzLnJvb3RNYXJnaW4gPSB0aGlzLl9yb290TWFyZ2luVmFsdWVzLm1hcChmdW5jdGlvbihtYXJnaW4pIHtcbiAgICByZXR1cm4gbWFyZ2luLnZhbHVlICsgbWFyZ2luLnVuaXQ7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuXG4vKipcbiAqIFRoZSBtaW5pbXVtIGludGVydmFsIHdpdGhpbiB3aGljaCB0aGUgZG9jdW1lbnQgd2lsbCBiZSBjaGVja2VkIGZvclxuICogaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5USFJPVFRMRV9USU1FT1VUID0gMTAwO1xuXG5cbi8qKlxuICogVGhlIGZyZXF1ZW5jeSBpbiB3aGljaCB0aGUgcG9seWZpbGwgcG9sbHMgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICogdGhpcyBjYW4gYmUgdXBkYXRlZCBvbiBhIHBlciBpbnN0YW5jZSBiYXNpcyBhbmQgbXVzdCBiZSBzZXQgcHJpb3IgdG9cbiAqIGNhbGxpbmcgYG9ic2VydmVgIG9uIHRoZSBmaXJzdCB0YXJnZXQuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5QT0xMX0lOVEVSVkFMID0gbnVsbDtcblxuLyoqXG4gKiBVc2UgYSBtdXRhdGlvbiBvYnNlcnZlciBvbiB0aGUgcm9vdCBlbGVtZW50XG4gKiB0byBkZXRlY3QgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5VU0VfTVVUQVRJT05fT0JTRVJWRVIgPSB0cnVlO1xuXG5cbi8qKlxuICogU3RhcnRzIG9ic2VydmluZyBhIHRhcmdldCBlbGVtZW50IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBiYXNlZCBvblxuICogdGhlIHRocmVzaG9sZHMgdmFsdWVzLlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIHZhciBpc1RhcmdldEFscmVhZHlPYnNlcnZlZCA9IHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5zb21lKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5lbGVtZW50ID09IHRhcmdldDtcbiAgfSk7XG5cbiAgaWYgKGlzVGFyZ2V0QWxyZWFkeU9ic2VydmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCEodGFyZ2V0ICYmIHRhcmdldC5ub2RlVHlwZSA9PSAxKSkge1xuICAgIHRocm93IG5ldyBFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gRWxlbWVudCcpO1xuICB9XG5cbiAgdGhpcy5fcmVnaXN0ZXJJbnN0YW5jZSgpO1xuICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMucHVzaCh7ZWxlbWVudDogdGFyZ2V0LCBlbnRyeTogbnVsbH0pO1xuICB0aGlzLl9tb25pdG9ySW50ZXJzZWN0aW9ucygpO1xuICB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMoKTtcbn07XG5cblxuLyoqXG4gKiBTdG9wcyBvYnNlcnZpbmcgYSB0YXJnZXQgZWxlbWVudCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgRE9NIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMgPVxuICAgICAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG5cbiAgICByZXR1cm4gaXRlbS5lbGVtZW50ICE9IHRhcmdldDtcbiAgfSk7XG4gIGlmICghdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aCkge1xuICAgIHRoaXMuX3VubW9uaXRvckludGVyc2VjdGlvbnMoKTtcbiAgICB0aGlzLl91bnJlZ2lzdGVySW5zdGFuY2UoKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIFN0b3BzIG9ic2VydmluZyBhbGwgdGFyZ2V0IGVsZW1lbnRzIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID0gW107XG4gIHRoaXMuX3VubW9uaXRvckludGVyc2VjdGlvbnMoKTtcbiAgdGhpcy5fdW5yZWdpc3Rlckluc3RhbmNlKCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyBhbnkgcXVldWUgZW50cmllcyB0aGF0IGhhdmUgbm90IHlldCBiZWVuIHJlcG9ydGVkIHRvIHRoZVxuICogY2FsbGJhY2sgYW5kIGNsZWFycyB0aGUgcXVldWUuIFRoaXMgY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAqIGNhbGxiYWNrIHRvIG9idGFpbiB0aGUgYWJzb2x1dGUgbW9zdCB1cC10by1kYXRlIGludGVyc2VjdGlvbiBpbmZvcm1hdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgY3VycmVudGx5IHF1ZXVlZCBlbnRyaWVzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUudGFrZVJlY29yZHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlY29yZHMgPSB0aGlzLl9xdWV1ZWRFbnRyaWVzLnNsaWNlKCk7XG4gIHRoaXMuX3F1ZXVlZEVudHJpZXMgPSBbXTtcbiAgcmV0dXJuIHJlY29yZHM7XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyB0aGUgdGhyZXNob2xkIHZhbHVlIGZyb20gdGhlIHVzZXIgY29uZmlndXJhdGlvbiBvYmplY3QgYW5kXG4gKiByZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIHVuaXF1ZSB0aHJlc2hvbGQgdmFsdWVzLiBJZiBhIHZhbHVlIGlzIG5vdFxuICogYmV0d2VlbiAwIGFuZCAxIGFuZCBlcnJvciBpcyB0aHJvd24uXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxudW1iZXI9fSBvcHRfdGhyZXNob2xkIEFuIG9wdGlvbmFsIHRocmVzaG9sZCB2YWx1ZSBvclxuICogICAgIGEgbGlzdCBvZiB0aHJlc2hvbGQgdmFsdWVzLCBkZWZhdWx0aW5nIHRvIFswXS5cbiAqIEByZXR1cm4ge0FycmF5fSBBIHNvcnRlZCBsaXN0IG9mIHVuaXF1ZSBhbmQgdmFsaWQgdGhyZXNob2xkIHZhbHVlcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9pbml0VGhyZXNob2xkcyA9IGZ1bmN0aW9uKG9wdF90aHJlc2hvbGQpIHtcbiAgdmFyIHRocmVzaG9sZCA9IG9wdF90aHJlc2hvbGQgfHwgWzBdO1xuICBpZiAoIUFycmF5LmlzQXJyYXkodGhyZXNob2xkKSkgdGhyZXNob2xkID0gW3RocmVzaG9sZF07XG5cbiAgcmV0dXJuIHRocmVzaG9sZC5zb3J0KCkuZmlsdGVyKGZ1bmN0aW9uKHQsIGksIGEpIHtcbiAgICBpZiAodHlwZW9mIHQgIT0gJ251bWJlcicgfHwgaXNOYU4odCkgfHwgdCA8IDAgfHwgdCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndGhyZXNob2xkIG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGluY2x1c2l2ZWx5Jyk7XG4gICAgfVxuICAgIHJldHVybiB0ICE9PSBhW2kgLSAxXTtcbiAgfSk7XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyB0aGUgcm9vdE1hcmdpbiB2YWx1ZSBmcm9tIHRoZSB1c2VyIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKiBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgZm91ciBtYXJnaW4gdmFsdWVzIGFzIGFuIG9iamVjdCBjb250YWluaW5nXG4gKiB0aGUgdmFsdWUgYW5kIHVuaXQgcHJvcGVydGllcy4gSWYgYW55IG9mIHRoZSB2YWx1ZXMgYXJlIG5vdCBwcm9wZXJseVxuICogZm9ybWF0dGVkIG9yIHVzZSBhIHVuaXQgb3RoZXIgdGhhbiBweCBvciAlLCBhbmQgZXJyb3IgaXMgdGhyb3duLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0X3Jvb3RNYXJnaW4gQW4gb3B0aW9uYWwgcm9vdE1hcmdpbiB2YWx1ZSxcbiAqICAgICBkZWZhdWx0aW5nIHRvICcwcHgnLlxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn0gQW4gYXJyYXkgb2YgbWFyZ2luIG9iamVjdHMgd2l0aCB0aGUga2V5c1xuICogICAgIHZhbHVlIGFuZCB1bml0LlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3BhcnNlUm9vdE1hcmdpbiA9IGZ1bmN0aW9uKG9wdF9yb290TWFyZ2luKSB7XG4gIHZhciBtYXJnaW5TdHJpbmcgPSBvcHRfcm9vdE1hcmdpbiB8fCAnMHB4JztcbiAgdmFyIG1hcmdpbnMgPSBtYXJnaW5TdHJpbmcuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24obWFyZ2luKSB7XG4gICAgdmFyIHBhcnRzID0gL14oLT9cXGQqXFwuP1xcZCspKHB4fCUpJC8uZXhlYyhtYXJnaW4pO1xuICAgIGlmICghcGFydHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncm9vdE1hcmdpbiBtdXN0IGJlIHNwZWNpZmllZCBpbiBwaXhlbHMgb3IgcGVyY2VudCcpO1xuICAgIH1cbiAgICByZXR1cm4ge3ZhbHVlOiBwYXJzZUZsb2F0KHBhcnRzWzFdKSwgdW5pdDogcGFydHNbMl19O1xuICB9KTtcblxuICAvLyBIYW5kbGVzIHNob3J0aGFuZC5cbiAgbWFyZ2luc1sxXSA9IG1hcmdpbnNbMV0gfHwgbWFyZ2luc1swXTtcbiAgbWFyZ2luc1syXSA9IG1hcmdpbnNbMl0gfHwgbWFyZ2luc1swXTtcbiAgbWFyZ2luc1szXSA9IG1hcmdpbnNbM10gfHwgbWFyZ2luc1sxXTtcblxuICByZXR1cm4gbWFyZ2lucztcbn07XG5cblxuLyoqXG4gKiBTdGFydHMgcG9sbGluZyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgaWYgdGhlIHBvbGxpbmcgaXMgbm90IGFscmVhZHlcbiAqIGhhcHBlbmluZywgYW5kIGlmIHRoZSBwYWdlJ3MgdmlzaWJpbGl0eSBzdGF0ZSBpcyB2aXNpYmxlLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9tb25pdG9ySW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuX21vbml0b3JpbmdJbnRlcnNlY3Rpb25zKSB7XG4gICAgdGhpcy5fbW9uaXRvcmluZ0ludGVyc2VjdGlvbnMgPSB0cnVlO1xuXG4gICAgLy8gSWYgYSBwb2xsIGludGVydmFsIGlzIHNldCwgdXNlIHBvbGxpbmcgaW5zdGVhZCBvZiBsaXN0ZW5pbmcgdG9cbiAgICAvLyByZXNpemUgYW5kIHNjcm9sbCBldmVudHMgb3IgRE9NIG11dGF0aW9ucy5cbiAgICBpZiAodGhpcy5QT0xMX0lOVEVSVkFMKSB7XG4gICAgICB0aGlzLl9tb25pdG9yaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMsIHRoaXMuUE9MTF9JTlRFUlZBTCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYWRkRXZlbnQod2luZG93LCAncmVzaXplJywgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLCB0cnVlKTtcbiAgICAgIGFkZEV2ZW50KGRvY3VtZW50LCAnc2Nyb2xsJywgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLCB0cnVlKTtcblxuICAgICAgaWYgKHRoaXMuVVNFX01VVEFUSU9OX09CU0VSVkVSICYmICdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgdGhpcy5fZG9tT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMpO1xuICAgICAgICB0aGlzLl9kb21PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7XG4gICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuXG4vKipcbiAqIFN0b3BzIHBvbGxpbmcgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl9tb25pdG9yaW5nSW50ZXJzZWN0aW9ucykge1xuICAgIHRoaXMuX21vbml0b3JpbmdJbnRlcnNlY3Rpb25zID0gZmFsc2U7XG5cbiAgICBjbGVhckludGVydmFsKHRoaXMuX21vbml0b3JpbmdJbnRlcnZhbCk7XG4gICAgdGhpcy5fbW9uaXRvcmluZ0ludGVydmFsID0gbnVsbDtcblxuICAgIHJlbW92ZUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdHJ1ZSk7XG4gICAgcmVtb3ZlRXZlbnQoZG9jdW1lbnQsICdzY3JvbGwnLCB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMsIHRydWUpO1xuXG4gICAgaWYgKHRoaXMuX2RvbU9ic2VydmVyKSB7XG4gICAgICB0aGlzLl9kb21PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLl9kb21PYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICB9XG59O1xuXG5cbi8qKlxuICogU2NhbnMgZWFjaCBvYnNlcnZhdGlvbiB0YXJnZXQgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzIGFuZCBhZGRzIHRoZW1cbiAqIHRvIHRoZSBpbnRlcm5hbCBlbnRyaWVzIHF1ZXVlLiBJZiBuZXcgZW50cmllcyBhcmUgZm91bmQsIGl0XG4gKiBzY2hlZHVsZXMgdGhlIGNhbGxiYWNrIHRvIGJlIGludm9rZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcm9vdElzSW5Eb20gPSB0aGlzLl9yb290SXNJbkRvbSgpO1xuICB2YXIgcm9vdFJlY3QgPSByb290SXNJbkRvbSA/IHRoaXMuX2dldFJvb3RSZWN0KCkgOiBnZXRFbXB0eVJlY3QoKTtcblxuICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgdmFyIHRhcmdldCA9IGl0ZW0uZWxlbWVudDtcbiAgICB2YXIgdGFyZ2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdCh0YXJnZXQpO1xuICAgIHZhciByb290Q29udGFpbnNUYXJnZXQgPSB0aGlzLl9yb290Q29udGFpbnNUYXJnZXQodGFyZ2V0KTtcbiAgICB2YXIgb2xkRW50cnkgPSBpdGVtLmVudHJ5O1xuICAgIHZhciBpbnRlcnNlY3Rpb25SZWN0ID0gcm9vdElzSW5Eb20gJiYgcm9vdENvbnRhaW5zVGFyZ2V0ICYmXG4gICAgICAgIHRoaXMuX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uKHRhcmdldCwgcm9vdFJlY3QpO1xuXG4gICAgdmFyIG5ld0VudHJ5ID0gaXRlbS5lbnRyeSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KHtcbiAgICAgIHRpbWU6IG5vdygpLFxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICBib3VuZGluZ0NsaWVudFJlY3Q6IHRhcmdldFJlY3QsXG4gICAgICByb290Qm91bmRzOiByb290UmVjdCxcbiAgICAgIGludGVyc2VjdGlvblJlY3Q6IGludGVyc2VjdGlvblJlY3RcbiAgICB9KTtcblxuICAgIGlmICghb2xkRW50cnkpIHtcbiAgICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSk7XG4gICAgfSBlbHNlIGlmIChyb290SXNJbkRvbSAmJiByb290Q29udGFpbnNUYXJnZXQpIHtcbiAgICAgIC8vIElmIHRoZSBuZXcgZW50cnkgaW50ZXJzZWN0aW9uIHJhdGlvIGhhcyBjcm9zc2VkIGFueSBvZiB0aGVcbiAgICAgIC8vIHRocmVzaG9sZHMsIGFkZCBhIG5ldyBlbnRyeS5cbiAgICAgIGlmICh0aGlzLl9oYXNDcm9zc2VkVGhyZXNob2xkKG9sZEVudHJ5LCBuZXdFbnRyeSkpIHtcbiAgICAgICAgdGhpcy5fcXVldWVkRW50cmllcy5wdXNoKG5ld0VudHJ5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHJvb3QgaXMgbm90IGluIHRoZSBET00gb3IgdGFyZ2V0IGlzIG5vdCBjb250YWluZWQgd2l0aGluXG4gICAgICAvLyByb290IGJ1dCB0aGUgcHJldmlvdXMgZW50cnkgZm9yIHRoaXMgdGFyZ2V0IGhhZCBhbiBpbnRlcnNlY3Rpb24sXG4gICAgICAvLyBhZGQgYSBuZXcgcmVjb3JkIGluZGljYXRpbmcgcmVtb3ZhbC5cbiAgICAgIGlmIChvbGRFbnRyeSAmJiBvbGRFbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICB0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgdGhpcyk7XG5cbiAgaWYgKHRoaXMuX3F1ZXVlZEVudHJpZXMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2sodGhpcy50YWtlUmVjb3JkcygpLCB0aGlzKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgYSB0YXJnZXQgYW5kIHJvb3QgcmVjdCBjb21wdXRlcyB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gdGhlblxuICogZm9sbG93aW5nIHRoZSBhbGdvcml0aG0gaW4gdGhlIHNwZWMuXG4gKiBUT0RPKHBoaWxpcHdhbHRvbik6IGF0IHRoaXMgdGltZSBjbGlwLXBhdGggaXMgbm90IGNvbnNpZGVyZWQuXG4gKiBodHRwczovL3czYy5naXRodWIuaW8vSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvI2NhbGN1bGF0ZS1pbnRlcnNlY3Rpb24tcmVjdC1hbGdvXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgdGFyZ2V0IERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gcm9vdFJlY3QgVGhlIGJvdW5kaW5nIHJlY3Qgb2YgdGhlIHJvb3QgYWZ0ZXIgYmVpbmdcbiAqICAgICBleHBhbmRlZCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAqIEByZXR1cm4gez9PYmplY3R9IFRoZSBmaW5hbCBpbnRlcnNlY3Rpb24gcmVjdCBvYmplY3Qgb3IgdW5kZWZpbmVkIGlmIG5vXG4gKiAgICAgaW50ZXJzZWN0aW9uIGlzIGZvdW5kLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9jb21wdXRlVGFyZ2V0QW5kUm9vdEludGVyc2VjdGlvbiA9XG4gICAgZnVuY3Rpb24odGFyZ2V0LCByb290UmVjdCkge1xuXG4gIC8vIElmIHRoZSBlbGVtZW50IGlzbid0IGRpc3BsYXllZCwgYW4gaW50ZXJzZWN0aW9uIGNhbid0IGhhcHBlbi5cbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZGlzcGxheSA9PSAnbm9uZScpIHJldHVybjtcblxuICB2YXIgdGFyZ2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdCh0YXJnZXQpO1xuICB2YXIgaW50ZXJzZWN0aW9uUmVjdCA9IHRhcmdldFJlY3Q7XG4gIHZhciBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKHRhcmdldCk7XG4gIHZhciBhdFJvb3QgPSBmYWxzZTtcblxuICB3aGlsZSAoIWF0Um9vdCkge1xuICAgIHZhciBwYXJlbnRSZWN0ID0gbnVsbDtcbiAgICB2YXIgcGFyZW50Q29tcHV0ZWRTdHlsZSA9IHBhcmVudC5ub2RlVHlwZSA9PSAxID9cbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KSA6IHt9O1xuXG4gICAgLy8gSWYgdGhlIHBhcmVudCBpc24ndCBkaXNwbGF5ZWQsIGFuIGludGVyc2VjdGlvbiBjYW4ndCBoYXBwZW4uXG4gICAgaWYgKHBhcmVudENvbXB1dGVkU3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHJldHVybjtcblxuICAgIGlmIChwYXJlbnQgPT0gdGhpcy5yb290IHx8IHBhcmVudCA9PSBkb2N1bWVudCkge1xuICAgICAgYXRSb290ID0gdHJ1ZTtcbiAgICAgIHBhcmVudFJlY3QgPSByb290UmVjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgbm9uLXZpc2libGUgb3ZlcmZsb3csIGFuZCBpdCdzIG5vdCB0aGUgPGJvZHk+XG4gICAgICAvLyBvciA8aHRtbD4gZWxlbWVudCwgdXBkYXRlIHRoZSBpbnRlcnNlY3Rpb24gcmVjdC5cbiAgICAgIC8vIE5vdGU6IDxib2R5PiBhbmQgPGh0bWw+IGNhbm5vdCBiZSBjbGlwcGVkIHRvIGEgcmVjdCB0aGF0J3Mgbm90IGFsc29cbiAgICAgIC8vIHRoZSBkb2N1bWVudCByZWN0LCBzbyBubyBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgaW50ZXJzZWN0aW9uLlxuICAgICAgaWYgKHBhcmVudCAhPSBkb2N1bWVudC5ib2R5ICYmXG4gICAgICAgICAgcGFyZW50ICE9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgICAgIHBhcmVudENvbXB1dGVkU3R5bGUub3ZlcmZsb3cgIT0gJ3Zpc2libGUnKSB7XG4gICAgICAgIHBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocGFyZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBlaXRoZXIgb2YgdGhlIGFib3ZlIGNvbmRpdGlvbmFscyBzZXQgYSBuZXcgcGFyZW50UmVjdCxcbiAgICAvLyBjYWxjdWxhdGUgbmV3IGludGVyc2VjdGlvbiBkYXRhLlxuICAgIGlmIChwYXJlbnRSZWN0KSB7XG4gICAgICBpbnRlcnNlY3Rpb25SZWN0ID0gY29tcHV0ZVJlY3RJbnRlcnNlY3Rpb24ocGFyZW50UmVjdCwgaW50ZXJzZWN0aW9uUmVjdCk7XG5cbiAgICAgIGlmICghaW50ZXJzZWN0aW9uUmVjdCkgYnJlYWs7XG4gICAgfVxuICAgIHBhcmVudCA9IGdldFBhcmVudE5vZGUocGFyZW50KTtcbiAgfVxuICByZXR1cm4gaW50ZXJzZWN0aW9uUmVjdDtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByb290IHJlY3QgYWZ0ZXIgYmVpbmcgZXhwYW5kZWQgYnkgdGhlIHJvb3RNYXJnaW4gdmFsdWUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBleHBhbmRlZCByb290IHJlY3QuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2dldFJvb3RSZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciByb290UmVjdDtcbiAgaWYgKHRoaXMucm9vdCkge1xuICAgIHJvb3RSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRoaXMucm9vdCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVXNlIDxodG1sPi88Ym9keT4gaW5zdGVhZCBvZiB3aW5kb3cgc2luY2Ugc2Nyb2xsIGJhcnMgYWZmZWN0IHNpemUuXG4gICAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIHJvb3RSZWN0ID0ge1xuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiBodG1sLmNsaWVudFdpZHRoIHx8IGJvZHkuY2xpZW50V2lkdGgsXG4gICAgICB3aWR0aDogaHRtbC5jbGllbnRXaWR0aCB8fCBib2R5LmNsaWVudFdpZHRoLFxuICAgICAgYm90dG9tOiBodG1sLmNsaWVudEhlaWdodCB8fCBib2R5LmNsaWVudEhlaWdodCxcbiAgICAgIGhlaWdodDogaHRtbC5jbGllbnRIZWlnaHQgfHwgYm9keS5jbGllbnRIZWlnaHRcbiAgICB9O1xuICB9XG4gIHJldHVybiB0aGlzLl9leHBhbmRSZWN0QnlSb290TWFyZ2luKHJvb3RSZWN0KTtcbn07XG5cblxuLyoqXG4gKiBBY2NlcHRzIGEgcmVjdCBhbmQgZXhwYW5kcyBpdCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0IFRoZSByZWN0IG9iamVjdCB0byBleHBhbmQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBleHBhbmRlZCByZWN0LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9leHBhbmRSZWN0QnlSb290TWFyZ2luID0gZnVuY3Rpb24ocmVjdCkge1xuICB2YXIgbWFyZ2lucyA9IHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXMubWFwKGZ1bmN0aW9uKG1hcmdpbiwgaSkge1xuICAgIHJldHVybiBtYXJnaW4udW5pdCA9PSAncHgnID8gbWFyZ2luLnZhbHVlIDpcbiAgICAgICAgbWFyZ2luLnZhbHVlICogKGkgJSAyID8gcmVjdC53aWR0aCA6IHJlY3QuaGVpZ2h0KSAvIDEwMDtcbiAgfSk7XG4gIHZhciBuZXdSZWN0ID0ge1xuICAgIHRvcDogcmVjdC50b3AgLSBtYXJnaW5zWzBdLFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0ICsgbWFyZ2luc1sxXSxcbiAgICBib3R0b206IHJlY3QuYm90dG9tICsgbWFyZ2luc1syXSxcbiAgICBsZWZ0OiByZWN0LmxlZnQgLSBtYXJnaW5zWzNdXG4gIH07XG4gIG5ld1JlY3Qud2lkdGggPSBuZXdSZWN0LnJpZ2h0IC0gbmV3UmVjdC5sZWZ0O1xuICBuZXdSZWN0LmhlaWdodCA9IG5ld1JlY3QuYm90dG9tIC0gbmV3UmVjdC50b3A7XG5cbiAgcmV0dXJuIG5ld1JlY3Q7XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyBhbiBvbGQgYW5kIG5ldyBlbnRyeSBhbmQgcmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGVcbiAqIHRocmVzaG9sZCB2YWx1ZXMgaGFzIGJlZW4gY3Jvc3NlZC5cbiAqIEBwYXJhbSB7P0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnl9IG9sZEVudHJ5IFRoZSBwcmV2aW91cyBlbnRyeSBmb3IgYVxuICogICAgcGFydGljdWxhciB0YXJnZXQgZWxlbWVudCBvciBudWxsIGlmIG5vIHByZXZpb3VzIGVudHJ5IGV4aXN0cy5cbiAqIEBwYXJhbSB7SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeX0gbmV3RW50cnkgVGhlIGN1cnJlbnQgZW50cnkgZm9yIGFcbiAqICAgIHBhcnRpY3VsYXIgdGFyZ2V0IGVsZW1lbnQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgYSBhbnkgdGhyZXNob2xkIGhhcyBiZWVuIGNyb3NzZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2hhc0Nyb3NzZWRUaHJlc2hvbGQgPVxuICAgIGZ1bmN0aW9uKG9sZEVudHJ5LCBuZXdFbnRyeSkge1xuXG4gIC8vIFRvIG1ha2UgY29tcGFyaW5nIGVhc2llciwgYW4gZW50cnkgdGhhdCBoYXMgYSByYXRpbyBvZiAwXG4gIC8vIGJ1dCBkb2VzIG5vdCBhY3R1YWxseSBpbnRlcnNlY3QgaXMgZ2l2ZW4gYSB2YWx1ZSBvZiAtMVxuICB2YXIgb2xkUmF0aW8gPSBvbGRFbnRyeSAmJiBvbGRFbnRyeS5pc0ludGVyc2VjdGluZyA/XG4gICAgICBvbGRFbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyB8fCAwIDogLTE7XG4gIHZhciBuZXdSYXRpbyA9IG5ld0VudHJ5LmlzSW50ZXJzZWN0aW5nID9cbiAgICAgIG5ld0VudHJ5LmludGVyc2VjdGlvblJhdGlvIHx8IDAgOiAtMTtcblxuICAvLyBJZ25vcmUgdW5jaGFuZ2VkIHJhdGlvc1xuICBpZiAob2xkUmF0aW8gPT09IG5ld1JhdGlvKSByZXR1cm47XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRocmVzaG9sZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdGhyZXNob2xkID0gdGhpcy50aHJlc2hvbGRzW2ldO1xuXG4gICAgLy8gUmV0dXJuIHRydWUgaWYgYW4gZW50cnkgbWF0Y2hlcyBhIHRocmVzaG9sZCBvciBpZiB0aGUgbmV3IHJhdGlvXG4gICAgLy8gYW5kIHRoZSBvbGQgcmF0aW8gYXJlIG9uIHRoZSBvcHBvc2l0ZSBzaWRlcyBvZiBhIHRocmVzaG9sZC5cbiAgICBpZiAodGhyZXNob2xkID09IG9sZFJhdGlvIHx8IHRocmVzaG9sZCA9PSBuZXdSYXRpbyB8fFxuICAgICAgICB0aHJlc2hvbGQgPCBvbGRSYXRpbyAhPT0gdGhyZXNob2xkIDwgbmV3UmF0aW8pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHJvb3QgZWxlbWVudCBpcyBhbiBlbGVtZW50IGFuZCBpcyBpbiB0aGUgRE9NLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcm9vdCBlbGVtZW50IGlzIGFuIGVsZW1lbnQgYW5kIGlzIGluIHRoZSBET00uXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3Jvb3RJc0luRG9tID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAhdGhpcy5yb290IHx8IGNvbnRhaW5zRGVlcChkb2N1bWVudCwgdGhpcy5yb290KTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHJvb3QuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgdGFyZ2V0IGVsZW1lbnQgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHJvb3QuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3Jvb3RDb250YWluc1RhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICByZXR1cm4gY29udGFpbnNEZWVwKHRoaXMucm9vdCB8fCBkb2N1bWVudCwgdGFyZ2V0KTtcbn07XG5cblxuLyoqXG4gKiBBZGRzIHRoZSBpbnN0YW5jZSB0byB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5IGlmIGl0IGlzbid0XG4gKiBhbHJlYWR5IHByZXNlbnQuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3JlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHJlZ2lzdHJ5LmluZGV4T2YodGhpcykgPCAwKSB7XG4gICAgcmVnaXN0cnkucHVzaCh0aGlzKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGluc3RhbmNlIGZyb20gdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeS5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5yZWdpc3Rlckluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpbmRleCA9IHJlZ2lzdHJ5LmluZGV4T2YodGhpcyk7XG4gIGlmIChpbmRleCAhPSAtMSkgcmVnaXN0cnkuc3BsaWNlKGluZGV4LCAxKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHBlcmZvcm1hbmNlLm5vdygpIG1ldGhvZCBvciBudWxsIGluIGJyb3dzZXJzXG4gKiB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIEFQSS5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGVsYXBzZWQgdGltZSBzaW5jZSB0aGUgcGFnZSB3YXMgcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiBub3coKSB7XG4gIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2Uubm93ICYmIHBlcmZvcm1hbmNlLm5vdygpO1xufVxuXG5cbi8qKlxuICogVGhyb3R0bGVzIGEgZnVuY3Rpb24gYW5kIGRlbGF5cyBpdHMgZXhlY3V0aW9uLCBzbyBpdCdzIG9ubHkgY2FsbGVkIGF0IG1vc3RcbiAqIG9uY2Ugd2l0aGluIGEgZ2l2ZW4gdGltZSBwZXJpb2QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZW91dCBUaGUgYW1vdW50IG9mIHRpbWUgdGhhdCBtdXN0IHBhc3MgYmVmb3JlIHRoZVxuICogICAgIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgYWdhaW4uXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHRocm90dGxlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHRpbWVvdXQpIHtcbiAgdmFyIHRpbWVyID0gbnVsbDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRpbWVyKSB7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZuKCk7XG4gICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cbiAgfTtcbn1cblxuXG4vKipcbiAqIEFkZHMgYW4gZXZlbnQgaGFuZGxlciB0byBhIERPTSBub2RlIGVuc3VyaW5nIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJpbGl0eS5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgRE9NIG5vZGUgdG8gYWRkIHRoZSBldmVudCBoYW5kbGVyIHRvLlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGV2ZW50IGhhbmRsZXIgdG8gYWRkLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRfdXNlQ2FwdHVyZSBPcHRpb25hbGx5IGFkZHMgdGhlIGV2ZW4gdG8gdGhlIGNhcHR1cmVcbiAqICAgICBwaGFzZS4gTm90ZTogdGhpcyBvbmx5IHdvcmtzIGluIG1vZGVybiBicm93c2Vycy5cbiAqL1xuZnVuY3Rpb24gYWRkRXZlbnQobm9kZSwgZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSkge1xuICBpZiAodHlwZW9mIG5vZGUuYWRkRXZlbnRMaXN0ZW5lciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUgfHwgZmFsc2UpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBub2RlLmF0dGFjaEV2ZW50ID09ICdmdW5jdGlvbicpIHtcbiAgICBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgZm4pO1xuICB9XG59XG5cblxuLyoqXG4gKiBSZW1vdmVzIGEgcHJldmlvdXNseSBhZGRlZCBldmVudCBoYW5kbGVyIGZyb20gYSBET00gbm9kZS5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgRE9NIG5vZGUgdG8gcmVtb3ZlIHRoZSBldmVudCBoYW5kbGVyIGZyb20uXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZXZlbnQgaGFuZGxlciB0byByZW1vdmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdF91c2VDYXB0dXJlIElmIHRoZSBldmVudCBoYW5kbGVyIHdhcyBhZGRlZCB3aXRoIHRoaXNcbiAqICAgICBmbGFnIHNldCB0byB0cnVlLCBpdCBzaG91bGQgYmUgc2V0IHRvIHRydWUgaGVyZSBpbiBvcmRlciB0byByZW1vdmUgaXQuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5vZGUsIGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUpIHtcbiAgaWYgKHR5cGVvZiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlIHx8IGZhbHNlKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2Ygbm9kZS5kZXRhdGNoRXZlbnQgPT0gJ2Z1bmN0aW9uJykge1xuICAgIG5vZGUuZGV0YXRjaEV2ZW50KCdvbicgKyBldmVudCwgZm4pO1xuICB9XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0d28gcmVjdCBvYmplY3RzLlxuICogQHBhcmFtIHtPYmplY3R9IHJlY3QxIFRoZSBmaXJzdCByZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHJlY3QyIFRoZSBzZWNvbmQgcmVjdC5cbiAqIEByZXR1cm4gez9PYmplY3R9IFRoZSBpbnRlcnNlY3Rpb24gcmVjdCBvciB1bmRlZmluZWQgaWYgbm8gaW50ZXJzZWN0aW9uXG4gKiAgICAgaXMgZm91bmQuXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVSZWN0SW50ZXJzZWN0aW9uKHJlY3QxLCByZWN0Mikge1xuICB2YXIgdG9wID0gTWF0aC5tYXgocmVjdDEudG9wLCByZWN0Mi50b3ApO1xuICB2YXIgYm90dG9tID0gTWF0aC5taW4ocmVjdDEuYm90dG9tLCByZWN0Mi5ib3R0b20pO1xuICB2YXIgbGVmdCA9IE1hdGgubWF4KHJlY3QxLmxlZnQsIHJlY3QyLmxlZnQpO1xuICB2YXIgcmlnaHQgPSBNYXRoLm1pbihyZWN0MS5yaWdodCwgcmVjdDIucmlnaHQpO1xuICB2YXIgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gIHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG5cbiAgcmV0dXJuICh3aWR0aCA+PSAwICYmIGhlaWdodCA+PSAwKSAmJiB7XG4gICAgdG9wOiB0b3AsXG4gICAgYm90dG9tOiBib3R0b20sXG4gICAgbGVmdDogbGVmdCxcbiAgICByaWdodDogcmlnaHQsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59XG5cblxuLyoqXG4gKiBTaGltcyB0aGUgbmF0aXZlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG9sZGVyIElFLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZyByZWN0IHRvIGdldC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIChwb3NzaWJseSBzaGltbWVkKSByZWN0IG9mIHRoZSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWwpIHtcbiAgdmFyIHJlY3Q7XG5cbiAgdHJ5IHtcbiAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIElnbm9yZSBXaW5kb3dzIDcgSUUxMSBcIlVuc3BlY2lmaWVkIGVycm9yXCJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL3B1bGwvMjA1XG4gIH1cblxuICBpZiAoIXJlY3QpIHJldHVybiBnZXRFbXB0eVJlY3QoKTtcblxuICAvLyBPbGRlciBJRVxuICBpZiAoIShyZWN0LndpZHRoICYmIHJlY3QuaGVpZ2h0KSkge1xuICAgIHJlY3QgPSB7XG4gICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgd2lkdGg6IHJlY3QucmlnaHQgLSByZWN0LmxlZnQsXG4gICAgICBoZWlnaHQ6IHJlY3QuYm90dG9tIC0gcmVjdC50b3BcbiAgICB9O1xuICB9XG4gIHJldHVybiByZWN0O1xufVxuXG5cbi8qKlxuICogUmV0dXJucyBhbiBlbXB0eSByZWN0IG9iamVjdC4gQW4gZW1wdHkgcmVjdCBpcyByZXR1cm5lZCB3aGVuIGFuIGVsZW1lbnRcbiAqIGlzIG5vdCBpbiB0aGUgRE9NLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZW1wdHkgcmVjdC5cbiAqL1xuZnVuY3Rpb24gZ2V0RW1wdHlSZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDBcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVja3MgdG8gc2VlIGlmIGEgcGFyZW50IGVsZW1lbnQgY29udGFpbnMgYSBjaGlsZCBlbGVtZW50IChpbmNsdWRpbmcgaW5zaWRlXG4gKiBzaGFkb3cgRE9NKS5cbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IFRoZSBwYXJlbnQgZWxlbWVudC5cbiAqIEBwYXJhbSB7Tm9kZX0gY2hpbGQgVGhlIGNoaWxkIGVsZW1lbnQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYXJlbnQgbm9kZSBjb250YWlucyB0aGUgY2hpbGQgbm9kZS5cbiAqL1xuZnVuY3Rpb24gY29udGFpbnNEZWVwKHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIG5vZGUgPSBjaGlsZDtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PSBwYXJlbnQpIHJldHVybiB0cnVlO1xuXG4gICAgbm9kZSA9IGdldFBhcmVudE5vZGUobm9kZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8qKlxuICogR2V0cyB0aGUgcGFyZW50IG5vZGUgb2YgYW4gZWxlbWVudCBvciBpdHMgaG9zdCBlbGVtZW50IGlmIHRoZSBwYXJlbnQgbm9kZVxuICogaXMgYSBzaGFkb3cgcm9vdC5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB3aG9zZSBwYXJlbnQgdG8gZ2V0LlxuICogQHJldHVybiB7Tm9kZXxudWxsfSBUaGUgcGFyZW50IG5vZGUgb3IgbnVsbCBpZiBubyBwYXJlbnQgZXhpc3RzLlxuICovXG5mdW5jdGlvbiBnZXRQYXJlbnROb2RlKG5vZGUpIHtcbiAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcblxuICBpZiAocGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSA9PSAxMSAmJiBwYXJlbnQuaG9zdCkge1xuICAgIC8vIElmIHRoZSBwYXJlbnQgaXMgYSBzaGFkb3cgcm9vdCwgcmV0dXJuIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgcmV0dXJuIHBhcmVudC5ob3N0O1xuICB9XG5cbiAgaWYgKHBhcmVudCAmJiBwYXJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgLy8gSWYgdGhlIHBhcmVudCBpcyBkaXN0cmlidXRlZCBpbiBhIDxzbG90PiwgcmV0dXJuIHRoZSBwYXJlbnQgb2YgYSBzbG90LlxuICAgIHJldHVybiBwYXJlbnQuYXNzaWduZWRTbG90LnBhcmVudE5vZGU7XG4gIH1cblxuICByZXR1cm4gcGFyZW50O1xufVxuXG5cbi8vIEV4cG9zZXMgdGhlIGNvbnN0cnVjdG9ycyBnbG9iYWxseS5cbndpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA9IEludGVyc2VjdGlvbk9ic2VydmVyO1xud2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgPSBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5O1xuXG59KCkpO1xuIiwiKGZ1bmN0aW9uKHdpbmRvdywgZmFjdG9yeSkge1xuXHR2YXIgbGF6eVNpemVzID0gZmFjdG9yeSh3aW5kb3csIHdpbmRvdy5kb2N1bWVudCwgRGF0ZSk7XG5cdHdpbmRvdy5sYXp5U2l6ZXMgPSBsYXp5U2l6ZXM7XG5cdGlmKHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpe1xuXHRcdG1vZHVsZS5leHBvcnRzID0gbGF6eVNpemVzO1xuXHR9XG59KHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgd2luZG93IDoge30sIGZ1bmN0aW9uIGwod2luZG93LCBkb2N1bWVudCwgRGF0ZSkgeyAvLyBQYXNzIGluIHRoZSB3aW5kb2UgRGF0ZSBmdW5jdGlvbiBhbHNvIGZvciBTU1IgYmVjYXVzZSB0aGUgRGF0ZSBjbGFzcyBjYW4gYmUgbG9zdFxuXHQndXNlIHN0cmljdCc7XG5cdC8qanNoaW50IGVxbnVsbDp0cnVlICovXG5cblx0dmFyIGxhenlzaXplcywgbGF6eVNpemVzQ2ZnO1xuXG5cdChmdW5jdGlvbigpe1xuXHRcdHZhciBwcm9wO1xuXG5cdFx0dmFyIGxhenlTaXplc0RlZmF1bHRzID0ge1xuXHRcdFx0bGF6eUNsYXNzOiAnbGF6eWxvYWQnLFxuXHRcdFx0bG9hZGVkQ2xhc3M6ICdsYXp5bG9hZGVkJyxcblx0XHRcdGxvYWRpbmdDbGFzczogJ2xhenlsb2FkaW5nJyxcblx0XHRcdHByZWxvYWRDbGFzczogJ2xhenlwcmVsb2FkJyxcblx0XHRcdGVycm9yQ2xhc3M6ICdsYXp5ZXJyb3InLFxuXHRcdFx0Ly9zdHJpY3RDbGFzczogJ2xhenlzdHJpY3QnLFxuXHRcdFx0YXV0b3NpemVzQ2xhc3M6ICdsYXp5YXV0b3NpemVzJyxcblx0XHRcdHNyY0F0dHI6ICdkYXRhLXNyYycsXG5cdFx0XHRzcmNzZXRBdHRyOiAnZGF0YS1zcmNzZXQnLFxuXHRcdFx0c2l6ZXNBdHRyOiAnZGF0YS1zaXplcycsXG5cdFx0XHQvL3ByZWxvYWRBZnRlckxvYWQ6IGZhbHNlLFxuXHRcdFx0bWluU2l6ZTogNDAsXG5cdFx0XHRjdXN0b21NZWRpYToge30sXG5cdFx0XHRpbml0OiB0cnVlLFxuXHRcdFx0ZXhwRmFjdG9yOiAxLjUsXG5cdFx0XHRoRmFjOiAwLjgsXG5cdFx0XHRsb2FkTW9kZTogMixcblx0XHRcdGxvYWRIaWRkZW46IHRydWUsXG5cdFx0XHRyaWNUaW1lb3V0OiAwLFxuXHRcdFx0dGhyb3R0bGVEZWxheTogMTI1LFxuXHRcdH07XG5cblx0XHRsYXp5U2l6ZXNDZmcgPSB3aW5kb3cubGF6eVNpemVzQ29uZmlnIHx8IHdpbmRvdy5sYXp5c2l6ZXNDb25maWcgfHwge307XG5cblx0XHRmb3IocHJvcCBpbiBsYXp5U2l6ZXNEZWZhdWx0cyl7XG5cdFx0XHRpZighKHByb3AgaW4gbGF6eVNpemVzQ2ZnKSl7XG5cdFx0XHRcdGxhenlTaXplc0NmZ1twcm9wXSA9IGxhenlTaXplc0RlZmF1bHRzW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblx0fSkoKTtcblxuXHRpZiAoIWRvY3VtZW50IHx8ICFkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uICgpIHt9LFxuXHRcdFx0Y2ZnOiBsYXp5U2l6ZXNDZmcsXG5cdFx0XHRub1N1cHBvcnQ6IHRydWUsXG5cdFx0fTtcblx0fVxuXG5cdHZhciBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cdHZhciBzdXBwb3J0UGljdHVyZSA9IHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQ7XG5cblx0dmFyIF9hZGRFdmVudExpc3RlbmVyID0gJ2FkZEV2ZW50TGlzdGVuZXInO1xuXG5cdHZhciBfZ2V0QXR0cmlidXRlID0gJ2dldEF0dHJpYnV0ZSc7XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSB0byBiaW5kIHRvIHdpbmRvdyBiZWNhdXNlICd0aGlzJyBiZWNvbWVzIG51bGwgZHVyaW5nIFNTUlxuXHQgKiBidWlsZHMuXG5cdCAqL1xuXHR2YXIgYWRkRXZlbnRMaXN0ZW5lciA9IHdpbmRvd1tfYWRkRXZlbnRMaXN0ZW5lcl0uYmluZCh3aW5kb3cpO1xuXG5cdHZhciBzZXRUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQ7XG5cblx0dmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dDtcblxuXHR2YXIgcmVxdWVzdElkbGVDYWxsYmFjayA9IHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrO1xuXG5cdHZhciByZWdQaWN0dXJlID0gL15waWN0dXJlJC9pO1xuXG5cdHZhciBsb2FkRXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJywgJ2xhenlpbmNsdWRlZCcsICdfbGF6eWxvYWRlZCddO1xuXG5cdHZhciByZWdDbGFzc0NhY2hlID0ge307XG5cblx0dmFyIGZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcblxuXHR2YXIgaGFzQ2xhc3MgPSBmdW5jdGlvbihlbGUsIGNscykge1xuXHRcdGlmKCFyZWdDbGFzc0NhY2hlW2Nsc10pe1xuXHRcdFx0cmVnQ2xhc3NDYWNoZVtjbHNdID0gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJytjbHMrJyhcXFxcc3wkKScpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVnQ2xhc3NDYWNoZVtjbHNdLnRlc3QoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKSAmJiByZWdDbGFzc0NhY2hlW2Nsc107XG5cdH07XG5cblx0dmFyIGFkZENsYXNzID0gZnVuY3Rpb24oZWxlLCBjbHMpIHtcblx0XHRpZiAoIWhhc0NsYXNzKGVsZSwgY2xzKSl7XG5cdFx0XHRlbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVbX2dldEF0dHJpYnV0ZV0oJ2NsYXNzJykgfHwgJycpLnRyaW0oKSArICcgJyArIGNscyk7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsZSwgY2xzKSB7XG5cdFx0dmFyIHJlZztcblx0XHRpZiAoKHJlZyA9IGhhc0NsYXNzKGVsZSxjbHMpKSkge1xuXHRcdFx0ZWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKS5yZXBsYWNlKHJlZywgJyAnKSk7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBhZGRSZW1vdmVMb2FkRXZlbnRzID0gZnVuY3Rpb24oZG9tLCBmbiwgYWRkKXtcblx0XHR2YXIgYWN0aW9uID0gYWRkID8gX2FkZEV2ZW50TGlzdGVuZXIgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG5cdFx0aWYoYWRkKXtcblx0XHRcdGFkZFJlbW92ZUxvYWRFdmVudHMoZG9tLCBmbik7XG5cdFx0fVxuXHRcdGxvYWRFdmVudHMuZm9yRWFjaChmdW5jdGlvbihldnQpe1xuXHRcdFx0ZG9tW2FjdGlvbl0oZXZ0LCBmbik7XG5cdFx0fSk7XG5cdH07XG5cblx0dmFyIHRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uKGVsZW0sIG5hbWUsIGRldGFpbCwgbm9CdWJibGVzLCBub0NhbmNlbGFibGUpe1xuXHRcdHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuXG5cdFx0aWYoIWRldGFpbCl7XG5cdFx0XHRkZXRhaWwgPSB7fTtcblx0XHR9XG5cblx0XHRkZXRhaWwuaW5zdGFuY2UgPSBsYXp5c2l6ZXM7XG5cblx0XHRldmVudC5pbml0RXZlbnQobmFtZSwgIW5vQnViYmxlcywgIW5vQ2FuY2VsYWJsZSk7XG5cblx0XHRldmVudC5kZXRhaWwgPSBkZXRhaWw7XG5cblx0XHRlbGVtLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdHJldHVybiBldmVudDtcblx0fTtcblxuXHR2YXIgdXBkYXRlUG9seWZpbGwgPSBmdW5jdGlvbiAoZWwsIGZ1bGwpe1xuXHRcdHZhciBwb2x5ZmlsbDtcblx0XHRpZiggIXN1cHBvcnRQaWN0dXJlICYmICggcG9seWZpbGwgPSAod2luZG93LnBpY3R1cmVmaWxsIHx8IGxhenlTaXplc0NmZy5wZikgKSApe1xuXHRcdFx0aWYoZnVsbCAmJiBmdWxsLnNyYyAmJiAhZWxbX2dldEF0dHJpYnV0ZV0oJ3NyY3NldCcpKXtcblx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBmdWxsLnNyYyk7XG5cdFx0XHR9XG5cdFx0XHRwb2x5ZmlsbCh7cmVldmFsdWF0ZTogdHJ1ZSwgZWxlbWVudHM6IFtlbF19KTtcblx0XHR9IGVsc2UgaWYoZnVsbCAmJiBmdWxsLnNyYyl7XG5cdFx0XHRlbC5zcmMgPSBmdWxsLnNyYztcblx0XHR9XG5cdH07XG5cblx0dmFyIGdldENTUyA9IGZ1bmN0aW9uIChlbGVtLCBzdHlsZSl7XG5cdFx0cmV0dXJuIChnZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpIHx8IHt9KVtzdHlsZV07XG5cdH07XG5cblx0dmFyIGdldFdpZHRoID0gZnVuY3Rpb24oZWxlbSwgcGFyZW50LCB3aWR0aCl7XG5cdFx0d2lkdGggPSB3aWR0aCB8fCBlbGVtLm9mZnNldFdpZHRoO1xuXG5cdFx0d2hpbGUod2lkdGggPCBsYXp5U2l6ZXNDZmcubWluU2l6ZSAmJiBwYXJlbnQgJiYgIWVsZW0uX2xhenlzaXplc1dpZHRoKXtcblx0XHRcdHdpZHRoID0gIHBhcmVudC5vZmZzZXRXaWR0aDtcblx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuXHRcdH1cblxuXHRcdHJldHVybiB3aWR0aDtcblx0fTtcblxuXHR2YXIgckFGID0gKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHJ1bm5pbmcsIHdhaXRpbmc7XG5cdFx0dmFyIGZpcnN0Rm5zID0gW107XG5cdFx0dmFyIHNlY29uZEZucyA9IFtdO1xuXHRcdHZhciBmbnMgPSBmaXJzdEZucztcblxuXHRcdHZhciBydW4gPSBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHJ1bkZucyA9IGZucztcblxuXHRcdFx0Zm5zID0gZmlyc3RGbnMubGVuZ3RoID8gc2Vjb25kRm5zIDogZmlyc3RGbnM7XG5cblx0XHRcdHJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0d2FpdGluZyA9IGZhbHNlO1xuXG5cdFx0XHR3aGlsZShydW5GbnMubGVuZ3RoKXtcblx0XHRcdFx0cnVuRm5zLnNoaWZ0KCkoKTtcblx0XHRcdH1cblxuXHRcdFx0cnVubmluZyA9IGZhbHNlO1xuXHRcdH07XG5cblx0XHR2YXIgcmFmQmF0Y2ggPSBmdW5jdGlvbihmbiwgcXVldWUpe1xuXHRcdFx0aWYocnVubmluZyAmJiAhcXVldWUpe1xuXHRcdFx0XHRmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm5zLnB1c2goZm4pO1xuXG5cdFx0XHRcdGlmKCF3YWl0aW5nKXtcblx0XHRcdFx0XHR3YWl0aW5nID0gdHJ1ZTtcblx0XHRcdFx0XHQoZG9jdW1lbnQuaGlkZGVuID8gc2V0VGltZW91dCA6IHJlcXVlc3RBbmltYXRpb25GcmFtZSkocnVuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyYWZCYXRjaC5fbHNGbHVzaCA9IHJ1bjtcblxuXHRcdHJldHVybiByYWZCYXRjaDtcblx0fSkoKTtcblxuXHR2YXIgckFGSXQgPSBmdW5jdGlvbihmbiwgc2ltcGxlKXtcblx0XHRyZXR1cm4gc2ltcGxlID9cblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyQUYoZm4pO1xuXHRcdFx0fSA6XG5cdFx0XHRmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHRcdHZhciBhcmdzID0gYXJndW1lbnRzO1xuXHRcdFx0XHRyQUYoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRmbi5hcHBseSh0aGF0LCBhcmdzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0O1xuXHR9O1xuXG5cdHZhciB0aHJvdHRsZSA9IGZ1bmN0aW9uKGZuKXtcblx0XHR2YXIgcnVubmluZztcblx0XHR2YXIgbGFzdFRpbWUgPSAwO1xuXHRcdHZhciBnRGVsYXkgPSBsYXp5U2l6ZXNDZmcudGhyb3R0bGVEZWxheTtcblx0XHR2YXIgcklDVGltZW91dCA9IGxhenlTaXplc0NmZy5yaWNUaW1lb3V0O1xuXHRcdHZhciBydW4gPSBmdW5jdGlvbigpe1xuXHRcdFx0cnVubmluZyA9IGZhbHNlO1xuXHRcdFx0bGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdFx0Zm4oKTtcblx0XHR9O1xuXHRcdHZhciBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHJJQ1RpbWVvdXQgPiA0OSA/XG5cdFx0XHRmdW5jdGlvbigpe1xuXHRcdFx0XHRyZXF1ZXN0SWRsZUNhbGxiYWNrKHJ1biwge3RpbWVvdXQ6IHJJQ1RpbWVvdXR9KTtcblxuXHRcdFx0XHRpZihySUNUaW1lb3V0ICE9PSBsYXp5U2l6ZXNDZmcucmljVGltZW91dCl7XG5cdFx0XHRcdFx0cklDVGltZW91dCA9IGxhenlTaXplc0NmZy5yaWNUaW1lb3V0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IDpcblx0XHRcdHJBRkl0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHNldFRpbWVvdXQocnVuKTtcblx0XHRcdH0sIHRydWUpXG5cdFx0O1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGlzUHJpb3JpdHkpe1xuXHRcdFx0dmFyIGRlbGF5O1xuXG5cdFx0XHRpZigoaXNQcmlvcml0eSA9IGlzUHJpb3JpdHkgPT09IHRydWUpKXtcblx0XHRcdFx0cklDVGltZW91dCA9IDMzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihydW5uaW5nKXtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRydW5uaW5nID0gIHRydWU7XG5cblx0XHRcdGRlbGF5ID0gZ0RlbGF5IC0gKERhdGUubm93KCkgLSBsYXN0VGltZSk7XG5cblx0XHRcdGlmKGRlbGF5IDwgMCl7XG5cdFx0XHRcdGRlbGF5ID0gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYoaXNQcmlvcml0eSB8fCBkZWxheSA8IDkpe1xuXHRcdFx0XHRpZGxlQ2FsbGJhY2soKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoaWRsZUNhbGxiYWNrLCBkZWxheSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblxuXHQvL2Jhc2VkIG9uIGh0dHA6Ly9tb2Rlcm5qYXZhc2NyaXB0LmJsb2dzcG90LmRlLzIwMTMvMDgvYnVpbGRpbmctYmV0dGVyLWRlYm91bmNlLmh0bWxcblx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYykge1xuXHRcdHZhciB0aW1lb3V0LCB0aW1lc3RhbXA7XG5cdFx0dmFyIHdhaXQgPSA5OTtcblx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0ZnVuYygpO1xuXHRcdH07XG5cdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbGFzdCA9IERhdGUubm93KCkgLSB0aW1lc3RhbXA7XG5cblx0XHRcdGlmIChsYXN0IDwgd2FpdCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQocmVxdWVzdElkbGVDYWxsYmFjayB8fCBydW4pKHJ1bik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cblx0XHRcdGlmICghdGltZW91dCkge1xuXHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblxuXHR2YXIgbG9hZGVyID0gKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHByZWxvYWRFbGVtcywgaXNDb21wbGV0ZWQsIHJlc2V0UHJlbG9hZGluZ1RpbWVyLCBsb2FkTW9kZSwgc3RhcnRlZDtcblxuXHRcdHZhciBlTHZXLCBlbHZILCBlTHRvcCwgZUxsZWZ0LCBlTHJpZ2h0LCBlTGJvdHRvbSwgaXNCb2R5SGlkZGVuO1xuXG5cdFx0dmFyIHJlZ0ltZyA9IC9eaW1nJC9pO1xuXHRcdHZhciByZWdJZnJhbWUgPSAvXmlmcmFtZSQvaTtcblxuXHRcdHZhciBzdXBwb3J0U2Nyb2xsID0gKCdvbnNjcm9sbCcgaW4gd2luZG93KSAmJiAhKC8oZ2xlfGluZylib3QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpO1xuXG5cdFx0dmFyIHNocmlua0V4cGFuZCA9IDA7XG5cdFx0dmFyIGN1cnJlbnRFeHBhbmQgPSAwO1xuXG5cdFx0dmFyIGlzTG9hZGluZyA9IDA7XG5cdFx0dmFyIGxvd1J1bnMgPSAtMTtcblxuXHRcdHZhciByZXNldFByZWxvYWRpbmcgPSBmdW5jdGlvbihlKXtcblx0XHRcdGlzTG9hZGluZy0tO1xuXHRcdFx0aWYoIWUgfHwgaXNMb2FkaW5nIDwgMCB8fCAhZS50YXJnZXQpe1xuXHRcdFx0XHRpc0xvYWRpbmcgPSAwO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgaXNWaXNpYmxlID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdGlmIChpc0JvZHlIaWRkZW4gPT0gbnVsbCkge1xuXHRcdFx0XHRpc0JvZHlIaWRkZW4gPSBnZXRDU1MoZG9jdW1lbnQuYm9keSwgJ3Zpc2liaWxpdHknKSA9PSAnaGlkZGVuJztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGlzQm9keUhpZGRlbiB8fCAhKGdldENTUyhlbGVtLnBhcmVudE5vZGUsICd2aXNpYmlsaXR5JykgPT0gJ2hpZGRlbicgJiYgZ2V0Q1NTKGVsZW0sICd2aXNpYmlsaXR5JykgPT0gJ2hpZGRlbicpO1xuXHRcdH07XG5cblx0XHR2YXIgaXNOZXN0ZWRWaXNpYmxlID0gZnVuY3Rpb24oZWxlbSwgZWxlbUV4cGFuZCl7XG5cdFx0XHR2YXIgb3V0ZXJSZWN0O1xuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW07XG5cdFx0XHR2YXIgdmlzaWJsZSA9IGlzVmlzaWJsZShlbGVtKTtcblxuXHRcdFx0ZUx0b3AgLT0gZWxlbUV4cGFuZDtcblx0XHRcdGVMYm90dG9tICs9IGVsZW1FeHBhbmQ7XG5cdFx0XHRlTGxlZnQgLT0gZWxlbUV4cGFuZDtcblx0XHRcdGVMcmlnaHQgKz0gZWxlbUV4cGFuZDtcblxuXHRcdFx0d2hpbGUodmlzaWJsZSAmJiAocGFyZW50ID0gcGFyZW50Lm9mZnNldFBhcmVudCkgJiYgcGFyZW50ICE9IGRvY3VtZW50LmJvZHkgJiYgcGFyZW50ICE9IGRvY0VsZW0pe1xuXHRcdFx0XHR2aXNpYmxlID0gKChnZXRDU1MocGFyZW50LCAnb3BhY2l0eScpIHx8IDEpID4gMCk7XG5cblx0XHRcdFx0aWYodmlzaWJsZSAmJiBnZXRDU1MocGFyZW50LCAnb3ZlcmZsb3cnKSAhPSAndmlzaWJsZScpe1xuXHRcdFx0XHRcdG91dGVyUmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHR2aXNpYmxlID0gZUxyaWdodCA+IG91dGVyUmVjdC5sZWZ0ICYmXG5cdFx0XHRcdFx0XHRlTGxlZnQgPCBvdXRlclJlY3QucmlnaHQgJiZcblx0XHRcdFx0XHRcdGVMYm90dG9tID4gb3V0ZXJSZWN0LnRvcCAtIDEgJiZcblx0XHRcdFx0XHRcdGVMdG9wIDwgb3V0ZXJSZWN0LmJvdHRvbSArIDFcblx0XHRcdFx0XHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHZpc2libGU7XG5cdFx0fTtcblxuXHRcdHZhciBjaGVja0VsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZUxsZW4sIGksIHJlY3QsIGF1dG9Mb2FkRWxlbSwgbG9hZGVkU29tZXRoaW5nLCBlbGVtRXhwYW5kLCBlbGVtTmVnYXRpdmVFeHBhbmQsIGVsZW1FeHBhbmRWYWwsXG5cdFx0XHRcdGJlZm9yZUV4cGFuZFZhbCwgZGVmYXVsdEV4cGFuZCwgcHJlbG9hZEV4cGFuZCwgaEZhYztcblx0XHRcdHZhciBsYXp5bG9hZEVsZW1zID0gbGF6eXNpemVzLmVsZW1lbnRzO1xuXG5cdFx0XHRpZigobG9hZE1vZGUgPSBsYXp5U2l6ZXNDZmcubG9hZE1vZGUpICYmIGlzTG9hZGluZyA8IDggJiYgKGVMbGVuID0gbGF6eWxvYWRFbGVtcy5sZW5ndGgpKXtcblxuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0XHRsb3dSdW5zKys7XG5cblx0XHRcdFx0Zm9yKDsgaSA8IGVMbGVuOyBpKyspe1xuXG5cdFx0XHRcdFx0aWYoIWxhenlsb2FkRWxlbXNbaV0gfHwgbGF6eWxvYWRFbGVtc1tpXS5fbGF6eVJhY2Upe2NvbnRpbnVlO31cblxuXHRcdFx0XHRcdGlmKCFzdXBwb3J0U2Nyb2xsIHx8IChsYXp5c2l6ZXMucHJlbWF0dXJlVW52ZWlsICYmIGxhenlzaXplcy5wcmVtYXR1cmVVbnZlaWwobGF6eWxvYWRFbGVtc1tpXSkpKXt1bnZlaWxFbGVtZW50KGxhenlsb2FkRWxlbXNbaV0pO2NvbnRpbnVlO31cblxuXHRcdFx0XHRcdGlmKCEoZWxlbUV4cGFuZFZhbCA9IGxhenlsb2FkRWxlbXNbaV1bX2dldEF0dHJpYnV0ZV0oJ2RhdGEtZXhwYW5kJykpIHx8ICEoZWxlbUV4cGFuZCA9IGVsZW1FeHBhbmRWYWwgKiAxKSl7XG5cdFx0XHRcdFx0XHRlbGVtRXhwYW5kID0gY3VycmVudEV4cGFuZDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIWRlZmF1bHRFeHBhbmQpIHtcblx0XHRcdFx0XHRcdGRlZmF1bHRFeHBhbmQgPSAoIWxhenlTaXplc0NmZy5leHBhbmQgfHwgbGF6eVNpemVzQ2ZnLmV4cGFuZCA8IDEpID9cblx0XHRcdFx0XHRcdFx0ZG9jRWxlbS5jbGllbnRIZWlnaHQgPiA1MDAgJiYgZG9jRWxlbS5jbGllbnRXaWR0aCA+IDUwMCA/IDUwMCA6IDM3MCA6XG5cdFx0XHRcdFx0XHRcdGxhenlTaXplc0NmZy5leHBhbmQ7XG5cblx0XHRcdFx0XHRcdGxhenlzaXplcy5fZGVmRXggPSBkZWZhdWx0RXhwYW5kO1xuXG5cdFx0XHRcdFx0XHRwcmVsb2FkRXhwYW5kID0gZGVmYXVsdEV4cGFuZCAqIGxhenlTaXplc0NmZy5leHBGYWN0b3I7XG5cdFx0XHRcdFx0XHRoRmFjID0gbGF6eVNpemVzQ2ZnLmhGYWM7XG5cdFx0XHRcdFx0XHRpc0JvZHlIaWRkZW4gPSBudWxsO1xuXG5cdFx0XHRcdFx0XHRpZihjdXJyZW50RXhwYW5kIDwgcHJlbG9hZEV4cGFuZCAmJiBpc0xvYWRpbmcgPCAxICYmIGxvd1J1bnMgPiAyICYmIGxvYWRNb2RlID4gMiAmJiAhZG9jdW1lbnQuaGlkZGVuKXtcblx0XHRcdFx0XHRcdFx0Y3VycmVudEV4cGFuZCA9IHByZWxvYWRFeHBhbmQ7XG5cdFx0XHRcdFx0XHRcdGxvd1J1bnMgPSAwO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKGxvYWRNb2RlID4gMSAmJiBsb3dSdW5zID4gMSAmJiBpc0xvYWRpbmcgPCA2KXtcblx0XHRcdFx0XHRcdFx0Y3VycmVudEV4cGFuZCA9IGRlZmF1bHRFeHBhbmQ7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50RXhwYW5kID0gc2hyaW5rRXhwYW5kO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKGJlZm9yZUV4cGFuZFZhbCAhPT0gZWxlbUV4cGFuZCl7XG5cdFx0XHRcdFx0XHRlTHZXID0gaW5uZXJXaWR0aCArIChlbGVtRXhwYW5kICogaEZhYyk7XG5cdFx0XHRcdFx0XHRlbHZIID0gaW5uZXJIZWlnaHQgKyBlbGVtRXhwYW5kO1xuXHRcdFx0XHRcdFx0ZWxlbU5lZ2F0aXZlRXhwYW5kID0gZWxlbUV4cGFuZCAqIC0xO1xuXHRcdFx0XHRcdFx0YmVmb3JlRXhwYW5kVmFsID0gZWxlbUV4cGFuZDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZWN0ID0gbGF6eWxvYWRFbGVtc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdFx0XHRcdGlmICgoZUxib3R0b20gPSByZWN0LmJvdHRvbSkgPj0gZWxlbU5lZ2F0aXZlRXhwYW5kICYmXG5cdFx0XHRcdFx0XHQoZUx0b3AgPSByZWN0LnRvcCkgPD0gZWx2SCAmJlxuXHRcdFx0XHRcdFx0KGVMcmlnaHQgPSByZWN0LnJpZ2h0KSA+PSBlbGVtTmVnYXRpdmVFeHBhbmQgKiBoRmFjICYmXG5cdFx0XHRcdFx0XHQoZUxsZWZ0ID0gcmVjdC5sZWZ0KSA8PSBlTHZXICYmXG5cdFx0XHRcdFx0XHQoZUxib3R0b20gfHwgZUxyaWdodCB8fCBlTGxlZnQgfHwgZUx0b3ApICYmXG5cdFx0XHRcdFx0XHQobGF6eVNpemVzQ2ZnLmxvYWRIaWRkZW4gfHwgaXNWaXNpYmxlKGxhenlsb2FkRWxlbXNbaV0pKSAmJlxuXHRcdFx0XHRcdFx0KChpc0NvbXBsZXRlZCAmJiBpc0xvYWRpbmcgPCAzICYmICFlbGVtRXhwYW5kVmFsICYmIChsb2FkTW9kZSA8IDMgfHwgbG93UnVucyA8IDQpKSB8fCBpc05lc3RlZFZpc2libGUobGF6eWxvYWRFbGVtc1tpXSwgZWxlbUV4cGFuZCkpKXtcblx0XHRcdFx0XHRcdHVudmVpbEVsZW1lbnQobGF6eWxvYWRFbGVtc1tpXSk7XG5cdFx0XHRcdFx0XHRsb2FkZWRTb21ldGhpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aWYoaXNMb2FkaW5nID4gOSl7YnJlYWs7fVxuXHRcdFx0XHRcdH0gZWxzZSBpZighbG9hZGVkU29tZXRoaW5nICYmIGlzQ29tcGxldGVkICYmICFhdXRvTG9hZEVsZW0gJiZcblx0XHRcdFx0XHRcdGlzTG9hZGluZyA8IDQgJiYgbG93UnVucyA8IDQgJiYgbG9hZE1vZGUgPiAyICYmXG5cdFx0XHRcdFx0XHQocHJlbG9hZEVsZW1zWzBdIHx8IGxhenlTaXplc0NmZy5wcmVsb2FkQWZ0ZXJMb2FkKSAmJlxuXHRcdFx0XHRcdFx0KHByZWxvYWRFbGVtc1swXSB8fCAoIWVsZW1FeHBhbmRWYWwgJiYgKChlTGJvdHRvbSB8fCBlTHJpZ2h0IHx8IGVMbGVmdCB8fCBlTHRvcCkgfHwgbGF6eWxvYWRFbGVtc1tpXVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDZmcuc2l6ZXNBdHRyKSAhPSAnYXV0bycpKSkpe1xuXHRcdFx0XHRcdFx0YXV0b0xvYWRFbGVtID0gcHJlbG9hZEVsZW1zWzBdIHx8IGxhenlsb2FkRWxlbXNbaV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoYXV0b0xvYWRFbGVtICYmICFsb2FkZWRTb21ldGhpbmcpe1xuXHRcdFx0XHRcdHVudmVpbEVsZW1lbnQoYXV0b0xvYWRFbGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyA9IHRocm90dGxlKGNoZWNrRWxlbWVudHMpO1xuXG5cdFx0dmFyIHN3aXRjaExvYWRpbmdDbGFzcyA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0dmFyIGVsZW0gPSBlLnRhcmdldDtcblxuXHRcdFx0aWYgKGVsZW0uX2xhenlDYWNoZSkge1xuXHRcdFx0XHRkZWxldGUgZWxlbS5fbGF6eUNhY2hlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHJlc2V0UHJlbG9hZGluZyhlKTtcblx0XHRcdGFkZENsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5sb2FkZWRDbGFzcyk7XG5cdFx0XHRyZW1vdmVDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubG9hZGluZ0NsYXNzKTtcblx0XHRcdGFkZFJlbW92ZUxvYWRFdmVudHMoZWxlbSwgcmFmU3dpdGNoTG9hZGluZ0NsYXNzKTtcblx0XHRcdHRyaWdnZXJFdmVudChlbGVtLCAnbGF6eWxvYWRlZCcpO1xuXHRcdH07XG5cdFx0dmFyIHJhZmVkU3dpdGNoTG9hZGluZ0NsYXNzID0gckFGSXQoc3dpdGNoTG9hZGluZ0NsYXNzKTtcblx0XHR2YXIgcmFmU3dpdGNoTG9hZGluZ0NsYXNzID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRyYWZlZFN3aXRjaExvYWRpbmdDbGFzcyh7dGFyZ2V0OiBlLnRhcmdldH0pO1xuXHRcdH07XG5cblx0XHR2YXIgY2hhbmdlSWZyYW1lU3JjID0gZnVuY3Rpb24oZWxlbSwgc3JjKXtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGVsZW0uY29udGVudFdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHNyYyk7XG5cdFx0XHR9IGNhdGNoKGUpe1xuXHRcdFx0XHRlbGVtLnNyYyA9IHNyYztcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGhhbmRsZVNvdXJjZXMgPSBmdW5jdGlvbihzb3VyY2Upe1xuXHRcdFx0dmFyIGN1c3RvbU1lZGlhO1xuXG5cdFx0XHR2YXIgc291cmNlU3Jjc2V0ID0gc291cmNlW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NmZy5zcmNzZXRBdHRyKTtcblxuXHRcdFx0aWYoIChjdXN0b21NZWRpYSA9IGxhenlTaXplc0NmZy5jdXN0b21NZWRpYVtzb3VyY2VbX2dldEF0dHJpYnV0ZV0oJ2RhdGEtbWVkaWEnKSB8fCBzb3VyY2VbX2dldEF0dHJpYnV0ZV0oJ21lZGlhJyldKSApe1xuXHRcdFx0XHRzb3VyY2Uuc2V0QXR0cmlidXRlKCdtZWRpYScsIGN1c3RvbU1lZGlhKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoc291cmNlU3Jjc2V0KXtcblx0XHRcdFx0c291cmNlLnNldEF0dHJpYnV0ZSgnc3Jjc2V0Jywgc291cmNlU3Jjc2V0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGxhenlVbnZlaWwgPSByQUZJdChmdW5jdGlvbiAoZWxlbSwgZGV0YWlsLCBpc0F1dG8sIHNpemVzLCBpc0ltZyl7XG5cdFx0XHR2YXIgc3JjLCBzcmNzZXQsIHBhcmVudCwgaXNQaWN0dXJlLCBldmVudCwgZmlyZXNMb2FkO1xuXG5cdFx0XHRpZighKGV2ZW50ID0gdHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5YmVmb3JldW52ZWlsJywgZGV0YWlsKSkuZGVmYXVsdFByZXZlbnRlZCl7XG5cblx0XHRcdFx0aWYoc2l6ZXMpe1xuXHRcdFx0XHRcdGlmKGlzQXV0byl7XG5cdFx0XHRcdFx0XHRhZGRDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcuYXV0b3NpemVzQ2xhc3MpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCBzaXplcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Jjc2V0ID0gZWxlbVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDZmcuc3Jjc2V0QXR0cik7XG5cdFx0XHRcdHNyYyA9IGVsZW1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNyY0F0dHIpO1xuXG5cdFx0XHRcdGlmKGlzSW1nKSB7XG5cdFx0XHRcdFx0cGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0XHRcdGlzUGljdHVyZSA9IHBhcmVudCAmJiByZWdQaWN0dXJlLnRlc3QocGFyZW50Lm5vZGVOYW1lIHx8ICcnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZpcmVzTG9hZCA9IGRldGFpbC5maXJlc0xvYWQgfHwgKCgnc3JjJyBpbiBlbGVtKSAmJiAoc3Jjc2V0IHx8IHNyYyB8fCBpc1BpY3R1cmUpKTtcblxuXHRcdFx0XHRldmVudCA9IHt0YXJnZXQ6IGVsZW19O1xuXG5cdFx0XHRcdGFkZENsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5sb2FkaW5nQ2xhc3MpO1xuXG5cdFx0XHRcdGlmKGZpcmVzTG9hZCl7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHJlc2V0UHJlbG9hZGluZ1RpbWVyKTtcblx0XHRcdFx0XHRyZXNldFByZWxvYWRpbmdUaW1lciA9IHNldFRpbWVvdXQocmVzZXRQcmVsb2FkaW5nLCAyNTAwKTtcblx0XHRcdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGVsZW0sIHJhZlN3aXRjaExvYWRpbmdDbGFzcywgdHJ1ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihpc1BpY3R1cmUpe1xuXHRcdFx0XHRcdGZvckVhY2guY2FsbChwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NvdXJjZScpLCBoYW5kbGVTb3VyY2VzKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHNyY3NldCl7XG5cdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoJ3NyY3NldCcsIHNyY3NldCk7XG5cdFx0XHRcdH0gZWxzZSBpZihzcmMgJiYgIWlzUGljdHVyZSl7XG5cdFx0XHRcdFx0aWYocmVnSWZyYW1lLnRlc3QoZWxlbS5ub2RlTmFtZSkpe1xuXHRcdFx0XHRcdFx0Y2hhbmdlSWZyYW1lU3JjKGVsZW0sIHNyYyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVsZW0uc3JjID0gc3JjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGlzSW1nICYmIChzcmNzZXQgfHwgaXNQaWN0dXJlKSl7XG5cdFx0XHRcdFx0dXBkYXRlUG9seWZpbGwoZWxlbSwge3NyYzogc3JjfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoZWxlbS5fbGF6eVJhY2Upe1xuXHRcdFx0XHRkZWxldGUgZWxlbS5fbGF6eVJhY2U7XG5cdFx0XHR9XG5cdFx0XHRyZW1vdmVDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubGF6eUNsYXNzKTtcblxuXHRcdFx0ckFGKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdC8vIFBhcnQgb2YgdGhpcyBjYW4gYmUgcmVtb3ZlZCBhcyBzb29uIGFzIHRoaXMgZml4IGlzIG9sZGVyOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03NzMxICgyMDE1KVxuXHRcdFx0XHR2YXIgaXNMb2FkZWQgPSBlbGVtLmNvbXBsZXRlICYmIGVsZW0ubmF0dXJhbFdpZHRoID4gMTtcblxuXHRcdFx0XHRpZiggIWZpcmVzTG9hZCB8fCBpc0xvYWRlZCl7XG5cdFx0XHRcdFx0aWYgKGlzTG9hZGVkKSB7XG5cdFx0XHRcdFx0XHRhZGRDbGFzcyhlbGVtLCAnbHMtaXMtY2FjaGVkJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN3aXRjaExvYWRpbmdDbGFzcyhldmVudCk7XG5cdFx0XHRcdFx0ZWxlbS5fbGF6eUNhY2hlID0gdHJ1ZTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRpZiAoJ19sYXp5Q2FjaGUnIGluIGVsZW0pIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIGVsZW0uX2xhenlDYWNoZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCA5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWxlbS5sb2FkaW5nID09ICdsYXp5Jykge1xuXHRcdFx0XHRcdGlzTG9hZGluZy0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0cnVlKTtcblx0XHR9KTtcblxuXHRcdHZhciB1bnZlaWxFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW0pe1xuXHRcdFx0aWYgKGVsZW0uX2xhenlSYWNlKSB7cmV0dXJuO31cblx0XHRcdHZhciBkZXRhaWw7XG5cblx0XHRcdHZhciBpc0ltZyA9IHJlZ0ltZy50ZXN0KGVsZW0ubm9kZU5hbWUpO1xuXG5cdFx0XHQvL2FsbG93IHVzaW5nIHNpemVzPVwiYXV0b1wiLCBidXQgZG9uJ3QgdXNlLiBpdCdzIGludmFsaWQuIFVzZSBkYXRhLXNpemVzPVwiYXV0b1wiIG9yIGEgdmFsaWQgdmFsdWUgZm9yIHNpemVzIGluc3RlYWQgKGkuZS46IHNpemVzPVwiODB2d1wiKVxuXHRcdFx0dmFyIHNpemVzID0gaXNJbWcgJiYgKGVsZW1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNpemVzQXR0cikgfHwgZWxlbVtfZ2V0QXR0cmlidXRlXSgnc2l6ZXMnKSk7XG5cdFx0XHR2YXIgaXNBdXRvID0gc2l6ZXMgPT0gJ2F1dG8nO1xuXG5cdFx0XHRpZiggKGlzQXV0byB8fCAhaXNDb21wbGV0ZWQpICYmIGlzSW1nICYmIChlbGVtW19nZXRBdHRyaWJ1dGVdKCdzcmMnKSB8fCBlbGVtLnNyY3NldCkgJiYgIWVsZW0uY29tcGxldGUgJiYgIWhhc0NsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5lcnJvckNsYXNzKSAmJiBoYXNDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubGF6eUNsYXNzKSl7cmV0dXJuO31cblxuXHRcdFx0ZGV0YWlsID0gdHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5dW52ZWlscmVhZCcpLmRldGFpbDtcblxuXHRcdFx0aWYoaXNBdXRvKXtcblx0XHRcdFx0IGF1dG9TaXplci51cGRhdGVFbGVtKGVsZW0sIHRydWUsIGVsZW0ub2Zmc2V0V2lkdGgpO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtLl9sYXp5UmFjZSA9IHRydWU7XG5cdFx0XHRpc0xvYWRpbmcrKztcblxuXHRcdFx0bGF6eVVudmVpbChlbGVtLCBkZXRhaWwsIGlzQXV0bywgc2l6ZXMsIGlzSW1nKTtcblx0XHR9O1xuXG5cdFx0dmFyIGFmdGVyU2Nyb2xsID0gZGVib3VuY2UoZnVuY3Rpb24oKXtcblx0XHRcdGxhenlTaXplc0NmZy5sb2FkTW9kZSA9IDM7XG5cdFx0XHR0aHJvdHRsZWRDaGVja0VsZW1lbnRzKCk7XG5cdFx0fSk7XG5cblx0XHR2YXIgYWx0TG9hZG1vZGVTY3JvbGxMaXN0bmVyID0gZnVuY3Rpb24oKXtcblx0XHRcdGlmKGxhenlTaXplc0NmZy5sb2FkTW9kZSA9PSAzKXtcblx0XHRcdFx0bGF6eVNpemVzQ2ZnLmxvYWRNb2RlID0gMjtcblx0XHRcdH1cblx0XHRcdGFmdGVyU2Nyb2xsKCk7XG5cdFx0fTtcblxuXHRcdHZhciBvbmxvYWQgPSBmdW5jdGlvbigpe1xuXHRcdFx0aWYoaXNDb21wbGV0ZWQpe3JldHVybjt9XG5cdFx0XHRpZihEYXRlLm5vdygpIC0gc3RhcnRlZCA8IDk5OSl7XG5cdFx0XHRcdHNldFRpbWVvdXQob25sb2FkLCA5OTkpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblxuXHRcdFx0aXNDb21wbGV0ZWQgPSB0cnVlO1xuXG5cdFx0XHRsYXp5U2l6ZXNDZmcubG9hZE1vZGUgPSAzO1xuXG5cdFx0XHR0aHJvdHRsZWRDaGVja0VsZW1lbnRzKCk7XG5cblx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGFsdExvYWRtb2RlU2Nyb2xsTGlzdG5lciwgdHJ1ZSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRfOiBmdW5jdGlvbigpe1xuXHRcdFx0XHRzdGFydGVkID0gRGF0ZS5ub3coKTtcblxuXHRcdFx0XHRsYXp5c2l6ZXMuZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxhenlTaXplc0NmZy5sYXp5Q2xhc3MpO1xuXHRcdFx0XHRwcmVsb2FkRWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxhenlTaXplc0NmZy5sYXp5Q2xhc3MgKyAnICcgKyBsYXp5U2l6ZXNDZmcucHJlbG9hZENsYXNzKTtcblxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdwYWdlc2hvdycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0aWYgKGUucGVyc2lzdGVkKSB7XG5cdFx0XHRcdFx0XHR2YXIgbG9hZGluZ0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBsYXp5U2l6ZXNDZmcubG9hZGluZ0NsYXNzKTtcblxuXHRcdFx0XHRcdFx0aWYgKGxvYWRpbmdFbGVtZW50cy5sZW5ndGggJiYgbG9hZGluZ0VsZW1lbnRzLmZvckVhY2gpIHtcblx0XHRcdFx0XHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nRWxlbWVudHMuZm9yRWFjaCggZnVuY3Rpb24gKGltZykge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGltZy5jb21wbGV0ZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bnZlaWxFbGVtZW50KGltZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYod2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpe1xuXHRcdFx0XHRcdG5ldyBNdXRhdGlvbk9ic2VydmVyKCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzICkub2JzZXJ2ZSggZG9jRWxlbSwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgYXR0cmlidXRlczogdHJ1ZX0gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkb2NFbGVtW19hZGRFdmVudExpc3RlbmVyXSgnRE9NTm9kZUluc2VydGVkJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cdFx0XHRcdFx0ZG9jRWxlbVtfYWRkRXZlbnRMaXN0ZW5lcl0oJ0RPTUF0dHJNb2RpZmllZCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXHRcdFx0XHRcdHNldEludGVydmFsKHRocm90dGxlZENoZWNrRWxlbWVudHMsIDk5OSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cblx0XHRcdFx0Ly8sICdmdWxsc2NyZWVuY2hhbmdlJ1xuXHRcdFx0XHRbJ2ZvY3VzJywgJ21vdXNlb3ZlcicsICdjbGljaycsICdsb2FkJywgJ3RyYW5zaXRpb25lbmQnLCAnYW5pbWF0aW9uZW5kJ10uZm9yRWFjaChmdW5jdGlvbihuYW1lKXtcblx0XHRcdFx0XHRkb2N1bWVudFtfYWRkRXZlbnRMaXN0ZW5lcl0obmFtZSwgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmKCgvZCR8XmMvLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSkpKXtcblx0XHRcdFx0XHRvbmxvYWQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25sb2FkKTtcblx0XHRcdFx0XHRkb2N1bWVudFtfYWRkRXZlbnRMaXN0ZW5lcl0oJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KG9ubG9hZCwgMjAwMDApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYobGF6eXNpemVzLmVsZW1lbnRzLmxlbmd0aCl7XG5cdFx0XHRcdFx0Y2hlY2tFbGVtZW50cygpO1xuXHRcdFx0XHRcdHJBRi5fbHNGbHVzaCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm90dGxlZENoZWNrRWxlbWVudHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGNoZWNrRWxlbXM6IHRocm90dGxlZENoZWNrRWxlbWVudHMsXG5cdFx0XHR1bnZlaWw6IHVudmVpbEVsZW1lbnQsXG5cdFx0XHRfYUxTTDogYWx0TG9hZG1vZGVTY3JvbGxMaXN0bmVyLFxuXHRcdH07XG5cdH0pKCk7XG5cblxuXHR2YXIgYXV0b1NpemVyID0gKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGF1dG9zaXplc0VsZW1zO1xuXG5cdFx0dmFyIHNpemVFbGVtZW50ID0gckFGSXQoZnVuY3Rpb24oZWxlbSwgcGFyZW50LCBldmVudCwgd2lkdGgpe1xuXHRcdFx0dmFyIHNvdXJjZXMsIGksIGxlbjtcblx0XHRcdGVsZW0uX2xhenlzaXplc1dpZHRoID0gd2lkdGg7XG5cdFx0XHR3aWR0aCArPSAncHgnO1xuXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCB3aWR0aCk7XG5cblx0XHRcdGlmKHJlZ1BpY3R1cmUudGVzdChwYXJlbnQubm9kZU5hbWUgfHwgJycpKXtcblx0XHRcdFx0c291cmNlcyA9IHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyk7XG5cdFx0XHRcdGZvcihpID0gMCwgbGVuID0gc291cmNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XG5cdFx0XHRcdFx0c291cmNlc1tpXS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgd2lkdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFldmVudC5kZXRhaWwuZGF0YUF0dHIpe1xuXHRcdFx0XHR1cGRhdGVQb2x5ZmlsbChlbGVtLCBldmVudC5kZXRhaWwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHZhciBnZXRTaXplRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtLCBkYXRhQXR0ciwgd2lkdGgpe1xuXHRcdFx0dmFyIGV2ZW50O1xuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblxuXHRcdFx0aWYocGFyZW50KXtcblx0XHRcdFx0d2lkdGggPSBnZXRXaWR0aChlbGVtLCBwYXJlbnQsIHdpZHRoKTtcblx0XHRcdFx0ZXZlbnQgPSB0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenliZWZvcmVzaXplcycsIHt3aWR0aDogd2lkdGgsIGRhdGFBdHRyOiAhIWRhdGFBdHRyfSk7XG5cblx0XHRcdFx0aWYoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpe1xuXHRcdFx0XHRcdHdpZHRoID0gZXZlbnQuZGV0YWlsLndpZHRoO1xuXG5cdFx0XHRcdFx0aWYod2lkdGggJiYgd2lkdGggIT09IGVsZW0uX2xhenlzaXplc1dpZHRoKXtcblx0XHRcdFx0XHRcdHNpemVFbGVtZW50KGVsZW0sIHBhcmVudCwgZXZlbnQsIHdpZHRoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIHVwZGF0ZUVsZW1lbnRzU2l6ZXMgPSBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGk7XG5cdFx0XHR2YXIgbGVuID0gYXV0b3NpemVzRWxlbXMubGVuZ3RoO1xuXHRcdFx0aWYobGVuKXtcblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdFx0Zm9yKDsgaSA8IGxlbjsgaSsrKXtcblx0XHRcdFx0XHRnZXRTaXplRWxlbWVudChhdXRvc2l6ZXNFbGVtc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGRlYm91bmNlZFVwZGF0ZUVsZW1lbnRzU2l6ZXMgPSBkZWJvdW5jZSh1cGRhdGVFbGVtZW50c1NpemVzKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRfOiBmdW5jdGlvbigpe1xuXHRcdFx0XHRhdXRvc2l6ZXNFbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobGF6eVNpemVzQ2ZnLmF1dG9zaXplc0NsYXNzKTtcblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyk7XG5cdFx0XHR9LFxuXHRcdFx0Y2hlY2tFbGVtczogZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyxcblx0XHRcdHVwZGF0ZUVsZW06IGdldFNpemVFbGVtZW50XG5cdFx0fTtcblx0fSkoKTtcblxuXHR2YXIgaW5pdCA9IGZ1bmN0aW9uKCl7XG5cdFx0aWYoIWluaXQuaSAmJiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXtcblx0XHRcdGluaXQuaSA9IHRydWU7XG5cdFx0XHRhdXRvU2l6ZXIuXygpO1xuXHRcdFx0bG9hZGVyLl8oKTtcblx0XHR9XG5cdH07XG5cblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdGlmKGxhenlTaXplc0NmZy5pbml0KXtcblx0XHRcdGluaXQoKTtcblx0XHR9XG5cdH0pO1xuXG5cdGxhenlzaXplcyA9IHtcblx0XHRjZmc6IGxhenlTaXplc0NmZyxcblx0XHRhdXRvU2l6ZXI6IGF1dG9TaXplcixcblx0XHRsb2FkZXI6IGxvYWRlcixcblx0XHRpbml0OiBpbml0LFxuXHRcdHVQOiB1cGRhdGVQb2x5ZmlsbCxcblx0XHRhQzogYWRkQ2xhc3MsXG5cdFx0ckM6IHJlbW92ZUNsYXNzLFxuXHRcdGhDOiBoYXNDbGFzcyxcblx0XHRmaXJlOiB0cmlnZ2VyRXZlbnQsXG5cdFx0Z1c6IGdldFdpZHRoLFxuXHRcdHJBRjogckFGLFxuXHR9O1xuXG5cdHJldHVybiBsYXp5c2l6ZXM7XG59XG4pKTtcbiIsIihmdW5jdGlvbih3aW5kb3csIGZhY3RvcnkpIHtcblx0aWYoIXdpbmRvdykge3JldHVybjt9XG5cdHZhciBnbG9iYWxJbnN0YWxsID0gZnVuY3Rpb24oKXtcblx0XHRmYWN0b3J5KHdpbmRvdy5sYXp5U2l6ZXMpO1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsYXp5dW52ZWlscmVhZCcsIGdsb2JhbEluc3RhbGwsIHRydWUpO1xuXHR9O1xuXG5cdGZhY3RvcnkgPSBmYWN0b3J5LmJpbmQobnVsbCwgd2luZG93LCB3aW5kb3cuZG9jdW1lbnQpO1xuXG5cdGlmKHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpe1xuXHRcdGZhY3RvcnkocmVxdWlyZSgnbGF6eXNpemVzJykpO1xuXHR9IGVsc2UgaWYod2luZG93LmxhenlTaXplcykge1xuXHRcdGdsb2JhbEluc3RhbGwoKTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbGF6eXVudmVpbHJlYWQnLCBnbG9iYWxJbnN0YWxsLCB0cnVlKTtcblx0fVxufSh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID9cblx0d2luZG93IDogMCwgZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgbGF6eVNpemVzKSB7XG5cdC8qanNoaW50IGVxbnVsbDp0cnVlICovXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHBvbHlmaWxsO1xuXHR2YXIgbGF6eVNpemVzQ2ZnID0gbGF6eVNpemVzLmNmZztcblx0dmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHR2YXIgc3VwcG9ydFNyY3NldCA9ICgnc2l6ZXMnIGluIGltZykgJiYgKCdzcmNzZXQnIGluIGltZyk7XG5cdHZhciByZWdIRGVzYyA9IC9cXHMrXFxkK2gvZztcblx0dmFyIGZpeEVkZ2VIRGVzY3JpcHRvciA9IChmdW5jdGlvbigpe1xuXHRcdHZhciByZWdEZXNjcmlwdG9ycyA9IC9cXHMrKFxcZCspKHd8aClcXHMrKFxcZCspKHd8aCkvO1xuXHRcdHZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKXtcblx0XHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRcdHZhciByZW1vdmVIRGVzY3JpcHRvcnMgPSBmdW5jdGlvbihzb3VyY2Upe1xuXHRcdFx0XHR2YXIgcmF0aW8sIG1hdGNoO1xuXHRcdFx0XHR2YXIgc3Jjc2V0ID0gc291cmNlLmdldEF0dHJpYnV0ZShsYXp5U2l6ZXNDZmcuc3Jjc2V0QXR0cik7XG5cdFx0XHRcdGlmKHNyY3NldCl7XG5cdFx0XHRcdFx0aWYoKG1hdGNoID0gc3Jjc2V0Lm1hdGNoKHJlZ0Rlc2NyaXB0b3JzKSkpe1xuXHRcdFx0XHRcdFx0aWYobWF0Y2hbMl0gPT0gJ3cnKXtcblx0XHRcdFx0XHRcdFx0cmF0aW8gPSBtYXRjaFsxXSAvIG1hdGNoWzNdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmF0aW8gPSBtYXRjaFszXSAvIG1hdGNoWzFdO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZihyYXRpbyl7XG5cdFx0XHRcdFx0XHRcdHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXNwZWN0cmF0aW8nLCByYXRpbyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzb3VyY2Uuc2V0QXR0cmlidXRlKGxhenlTaXplc0NmZy5zcmNzZXRBdHRyLCBzcmNzZXQucmVwbGFjZShyZWdIRGVzYywgJycpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRpZihlLmRldGFpbC5pbnN0YW5jZSAhPSBsYXp5U2l6ZXMpe3JldHVybjt9XG5cdFx0XHRcdHZhciBwaWN0dXJlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcblxuXHRcdFx0XHRpZihwaWN0dXJlICYmIHBpY3R1cmUubm9kZU5hbWUgPT0gJ1BJQ1RVUkUnKXtcblx0XHRcdFx0XHRmb3JFYWNoLmNhbGwocGljdHVyZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyksIHJlbW92ZUhEZXNjcmlwdG9ycyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVtb3ZlSERlc2NyaXB0b3JzKGUudGFyZ2V0KTtcblx0XHRcdH07XG5cblx0XHRcdHZhciB0ZXN0ID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0aWYoISFpbWcuY3VycmVudFNyYyl7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbGF6eWJlZm9yZXVudmVpbCcsIGhhbmRsZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdsYXp5YmVmb3JldW52ZWlsJywgaGFuZGxlcik7XG5cblx0XHRcdGltZy5vbmxvYWQgPSB0ZXN0O1xuXHRcdFx0aW1nLm9uZXJyb3IgPSB0ZXN0O1xuXG5cdFx0XHRpbWcuc3Jjc2V0ID0gJ2RhdGE6LGEgMXcgMWgnO1xuXG5cdFx0XHRpZihpbWcuY29tcGxldGUpe1xuXHRcdFx0XHR0ZXN0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSkoKTtcblxuXHRpZighbGF6eVNpemVzQ2ZnLnN1cHBvcnRzVHlwZSl7XG5cdFx0bGF6eVNpemVzQ2ZnLnN1cHBvcnRzVHlwZSA9IGZ1bmN0aW9uKHR5cGUvKiwgZWxlbSovKXtcblx0XHRcdHJldHVybiAhdHlwZTtcblx0XHR9O1xuXHR9XG5cblx0aWYgKHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgc3VwcG9ydFNyY3NldCkge1xuXHRcdGlmKCFsYXp5U2l6ZXMuaGFzSERlc2NyaXB0b3JGaXggJiYgZG9jdW1lbnQubXNFbGVtZW50c0Zyb21Qb2ludCl7XG5cdFx0XHRsYXp5U2l6ZXMuaGFzSERlc2NyaXB0b3JGaXggPSB0cnVlO1xuXHRcdFx0Zml4RWRnZUhEZXNjcmlwdG9yKCk7XG5cdFx0fVxuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmKHdpbmRvdy5waWN0dXJlZmlsbCB8fCBsYXp5U2l6ZXNDZmcucGYpe3JldHVybjt9XG5cblx0bGF6eVNpemVzQ2ZnLnBmID0gZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dmFyIGksIGxlbjtcblx0XHRpZih3aW5kb3cucGljdHVyZWZpbGwpe3JldHVybjt9XG5cdFx0Zm9yKGkgPSAwLCBsZW4gPSBvcHRpb25zLmVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcblx0XHRcdHBvbHlmaWxsKG9wdGlvbnMuZWxlbWVudHNbaV0pO1xuXHRcdH1cblx0fTtcblxuXHQvLyBwYXJ0aWFsIHBvbHlmaWxsXG5cdHBvbHlmaWxsID0gKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGFzY2VuZGluZ1NvcnQgPSBmdW5jdGlvbiggYSwgYiApIHtcblx0XHRcdHJldHVybiBhLncgLSBiLnc7XG5cdFx0fTtcblx0XHR2YXIgcmVnUHhMZW5ndGggPSAvXlxccypcXGQrXFwuKlxcZCpweFxccyokLztcblx0XHR2YXIgcmVkdWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24gKHNyY2VzKSB7XG5cdFx0XHR2YXIgbG93ZXJDYW5kaWRhdGUsIGJvbnVzRmFjdG9yO1xuXHRcdFx0dmFyIGxlbiA9IHNyY2VzLmxlbmd0aDtcblx0XHRcdHZhciBjYW5kaWRhdGUgPSBzcmNlc1tsZW4gLTFdO1xuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHRmb3IoaTsgaSA8IGxlbjtpKyspe1xuXHRcdFx0XHRjYW5kaWRhdGUgPSBzcmNlc1tpXTtcblx0XHRcdFx0Y2FuZGlkYXRlLmQgPSBjYW5kaWRhdGUudyAvIHNyY2VzLnc7XG5cblx0XHRcdFx0aWYoY2FuZGlkYXRlLmQgPj0gc3JjZXMuZCl7XG5cdFx0XHRcdFx0aWYoIWNhbmRpZGF0ZS5jYWNoZWQgJiYgKGxvd2VyQ2FuZGlkYXRlID0gc3JjZXNbaSAtIDFdKSAmJlxuXHRcdFx0XHRcdFx0bG93ZXJDYW5kaWRhdGUuZCA+IHNyY2VzLmQgLSAoMC4xMyAqIE1hdGgucG93KHNyY2VzLmQsIDIuMikpKXtcblxuXHRcdFx0XHRcdFx0Ym9udXNGYWN0b3IgPSBNYXRoLnBvdyhsb3dlckNhbmRpZGF0ZS5kIC0gMC42LCAxLjYpO1xuXG5cdFx0XHRcdFx0XHRpZihsb3dlckNhbmRpZGF0ZS5jYWNoZWQpIHtcblx0XHRcdFx0XHRcdFx0bG93ZXJDYW5kaWRhdGUuZCArPSAwLjE1ICogYm9udXNGYWN0b3I7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmKGxvd2VyQ2FuZGlkYXRlLmQgKyAoKGNhbmRpZGF0ZS5kIC0gc3JjZXMuZCkgKiBib251c0ZhY3RvcikgPiBzcmNlcy5kKXtcblx0XHRcdFx0XHRcdFx0Y2FuZGlkYXRlID0gbG93ZXJDYW5kaWRhdGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2FuZGlkYXRlO1xuXHRcdH07XG5cblx0XHR2YXIgcGFyc2VXc3Jjc2V0ID0gKGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgY2FuZGlkYXRlcztcblx0XHRcdHZhciByZWdXQ2FuZGlkYXRlcyA9IC8oKFteLFxcc10uW15cXHNdKylcXHMrKFxcZCspdykvZztcblx0XHRcdHZhciByZWdNdWx0aXBsZSA9IC9cXHMvO1xuXHRcdFx0dmFyIGFkZENhbmRpZGF0ZSA9IGZ1bmN0aW9uKG1hdGNoLCBjYW5kaWRhdGUsIHVybCwgd0Rlc2NyaXB0b3Ipe1xuXHRcdFx0XHRjYW5kaWRhdGVzLnB1c2goe1xuXHRcdFx0XHRcdGM6IGNhbmRpZGF0ZSxcblx0XHRcdFx0XHR1OiB1cmwsXG5cdFx0XHRcdFx0dzogd0Rlc2NyaXB0b3IgKiAxXG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGlucHV0KXtcblx0XHRcdFx0Y2FuZGlkYXRlcyA9IFtdO1xuXHRcdFx0XHRpbnB1dCA9IGlucHV0LnRyaW0oKTtcblx0XHRcdFx0aW5wdXRcblx0XHRcdFx0XHQucmVwbGFjZShyZWdIRGVzYywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UocmVnV0NhbmRpZGF0ZXMsIGFkZENhbmRpZGF0ZSlcblx0XHRcdFx0O1xuXG5cdFx0XHRcdGlmKCFjYW5kaWRhdGVzLmxlbmd0aCAmJiBpbnB1dCAmJiAhcmVnTXVsdGlwbGUudGVzdChpbnB1dCkpe1xuXHRcdFx0XHRcdGNhbmRpZGF0ZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRjOiBpbnB1dCxcblx0XHRcdFx0XHRcdHU6IGlucHV0LFxuXHRcdFx0XHRcdFx0dzogOTlcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBjYW5kaWRhdGVzO1xuXHRcdFx0fTtcblx0XHR9KSgpO1xuXG5cdFx0dmFyIHJ1bk1hdGNoTWVkaWEgPSBmdW5jdGlvbigpe1xuXHRcdFx0aWYocnVuTWF0Y2hNZWRpYS5pbml0KXtyZXR1cm47fVxuXG5cdFx0XHRydW5NYXRjaE1lZGlhLmluaXQgPSB0cnVlO1xuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciB0aW1lcjtcblx0XHRcdFx0dmFyIG1hdGNoTWVkaWFFbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhenltYXRjaG1lZGlhJyk7XG5cdFx0XHRcdHZhciBydW4gPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHZhciBpLCBsZW47XG5cdFx0XHRcdFx0Zm9yKGkgPSAwLCBsZW4gPSBtYXRjaE1lZGlhRWxlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xuXHRcdFx0XHRcdFx0cG9seWZpbGwobWF0Y2hNZWRpYUVsZW1zW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0XHRcdFx0XHR0aW1lciA9IHNldFRpbWVvdXQocnVuLCA2Nik7XG5cdFx0XHRcdH07XG5cdFx0XHR9KSgpKTtcblx0XHR9O1xuXG5cdFx0dmFyIGNyZWF0ZVNyY3NldCA9IGZ1bmN0aW9uKGVsZW0sIGlzSW1hZ2Upe1xuXHRcdFx0dmFyIHBhcnNlZFNldDtcblx0XHRcdHZhciBzcmNTZXQgPSBlbGVtLmdldEF0dHJpYnV0ZSgnc3Jjc2V0JykgfHwgZWxlbS5nZXRBdHRyaWJ1dGUobGF6eVNpemVzQ2ZnLnNyY3NldEF0dHIpO1xuXG5cdFx0XHRpZighc3JjU2V0ICYmIGlzSW1hZ2Upe1xuXHRcdFx0XHRzcmNTZXQgPSAhZWxlbS5fbGF6eXBvbHlmaWxsID9cblx0XHRcdFx0XHQoZWxlbS5nZXRBdHRyaWJ1dGUobGF6eVNpemVzQ2ZnLnNyY0F0dHIpIHx8IGVsZW0uZ2V0QXR0cmlidXRlKCdzcmMnKSkgOlxuXHRcdFx0XHRcdGVsZW0uX2xhenlwb2x5ZmlsbC5fc2V0XG5cdFx0XHRcdDtcblx0XHRcdH1cblxuXHRcdFx0aWYoIWVsZW0uX2xhenlwb2x5ZmlsbCB8fCBlbGVtLl9sYXp5cG9seWZpbGwuX3NldCAhPSBzcmNTZXQpe1xuXG5cdFx0XHRcdHBhcnNlZFNldCA9IHBhcnNlV3NyY3NldCggc3JjU2V0IHx8ICcnICk7XG5cdFx0XHRcdGlmKGlzSW1hZ2UgJiYgZWxlbS5wYXJlbnROb2RlKXtcblx0XHRcdFx0XHRwYXJzZWRTZXQuaXNQaWN0dXJlID0gZWxlbS5wYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT0gJ1BJQ1RVUkUnO1xuXG5cdFx0XHRcdFx0aWYocGFyc2VkU2V0LmlzUGljdHVyZSl7XG5cdFx0XHRcdFx0XHRpZih3aW5kb3cubWF0Y2hNZWRpYSl7XG5cdFx0XHRcdFx0XHRcdGxhenlTaXplcy5hQyhlbGVtLCAnbGF6eW1hdGNobWVkaWEnKTtcblx0XHRcdFx0XHRcdFx0cnVuTWF0Y2hNZWRpYSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHBhcnNlZFNldC5fc2V0ID0gc3JjU2V0O1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbSwgJ19sYXp5cG9seWZpbGwnLCB7XG5cdFx0XHRcdFx0dmFsdWU6IHBhcnNlZFNldCxcblx0XHRcdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGdldFggPSBmdW5jdGlvbihlbGVtKXtcblx0XHRcdHZhciBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuXHRcdFx0dmFyIG9wdGltdW0gPSBsYXp5U2l6ZXMuZ2V0WCAmJiBsYXp5U2l6ZXMuZ2V0WChlbGVtKTtcblx0XHRcdHJldHVybiBNYXRoLm1pbihvcHRpbXVtIHx8IGRwciwgMi41LCBkcHIpO1xuXHRcdH07XG5cblx0XHR2YXIgbWF0Y2hlc01lZGlhID0gZnVuY3Rpb24obWVkaWEpe1xuXHRcdFx0aWYod2luZG93Lm1hdGNoTWVkaWEpe1xuXHRcdFx0XHRtYXRjaGVzTWVkaWEgPSBmdW5jdGlvbihtZWRpYSl7XG5cdFx0XHRcdFx0cmV0dXJuICFtZWRpYSB8fCAobWF0Y2hNZWRpYShtZWRpYSkgfHwge30pLm1hdGNoZXM7XG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gIW1lZGlhO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbWF0Y2hlc01lZGlhKG1lZGlhKTtcblx0XHR9O1xuXG5cdFx0dmFyIGdldENhbmRpZGF0ZSA9IGZ1bmN0aW9uKGVsZW0pe1xuXHRcdFx0dmFyIHNvdXJjZXMsIGksIGxlbiwgbWVkaWEsIHNvdXJjZSwgc3JjZXMsIHNyYywgd2lkdGg7XG5cblx0XHRcdHNvdXJjZSA9IGVsZW07XG5cdFx0XHRjcmVhdGVTcmNzZXQoc291cmNlLCB0cnVlKTtcblx0XHRcdHNyY2VzID0gc291cmNlLl9sYXp5cG9seWZpbGw7XG5cblx0XHRcdGlmKHNyY2VzLmlzUGljdHVyZSl7XG5cdFx0XHRcdGZvcihpID0gMCwgc291cmNlcyA9IGVsZW0ucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyksIGxlbiA9IHNvdXJjZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xuXHRcdFx0XHRcdGlmKCBsYXp5U2l6ZXNDZmcuc3VwcG9ydHNUeXBlKHNvdXJjZXNbaV0uZ2V0QXR0cmlidXRlKCd0eXBlJyksIGVsZW0pICYmIG1hdGNoZXNNZWRpYSggc291cmNlc1tpXS5nZXRBdHRyaWJ1dGUoJ21lZGlhJykpICl7XG5cdFx0XHRcdFx0XHRzb3VyY2UgPSBzb3VyY2VzW2ldO1xuXHRcdFx0XHRcdFx0Y3JlYXRlU3Jjc2V0KHNvdXJjZSk7XG5cdFx0XHRcdFx0XHRzcmNlcyA9IHNvdXJjZS5fbGF6eXBvbHlmaWxsO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKHNyY2VzLmxlbmd0aCA+IDEpe1xuXHRcdFx0XHR3aWR0aCA9IHNvdXJjZS5nZXRBdHRyaWJ1dGUoJ3NpemVzJykgfHwgJyc7XG5cdFx0XHRcdHdpZHRoID0gcmVnUHhMZW5ndGgudGVzdCh3aWR0aCkgJiYgcGFyc2VJbnQod2lkdGgsIDEwKSB8fCBsYXp5U2l6ZXMuZ1coZWxlbSwgZWxlbS5wYXJlbnROb2RlKTtcblx0XHRcdFx0c3JjZXMuZCA9IGdldFgoZWxlbSk7XG5cdFx0XHRcdGlmKCFzcmNlcy5zcmMgfHwgIXNyY2VzLncgfHwgc3JjZXMudyA8IHdpZHRoKXtcblx0XHRcdFx0XHRzcmNlcy53ID0gd2lkdGg7XG5cdFx0XHRcdFx0c3JjID0gcmVkdWNlQ2FuZGlkYXRlKHNyY2VzLnNvcnQoYXNjZW5kaW5nU29ydCkpO1xuXHRcdFx0XHRcdHNyY2VzLnNyYyA9IHNyYztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzcmMgPSBzcmNlcy5zcmM7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNyYyA9IHNyY2VzWzBdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc3JjO1xuXHRcdH07XG5cblx0XHR2YXIgcCA9IGZ1bmN0aW9uKGVsZW0pe1xuXHRcdFx0aWYoc3VwcG9ydFNyY3NldCAmJiBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5wYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT0gJ1BJQ1RVUkUnKXtyZXR1cm47fVxuXHRcdFx0dmFyIGNhbmRpZGF0ZSA9IGdldENhbmRpZGF0ZShlbGVtKTtcblxuXHRcdFx0aWYoY2FuZGlkYXRlICYmIGNhbmRpZGF0ZS51ICYmIGVsZW0uX2xhenlwb2x5ZmlsbC5jdXIgIT0gY2FuZGlkYXRlLnUpe1xuXHRcdFx0XHRlbGVtLl9sYXp5cG9seWZpbGwuY3VyID0gY2FuZGlkYXRlLnU7XG5cdFx0XHRcdGNhbmRpZGF0ZS5jYWNoZWQgPSB0cnVlO1xuXHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZShsYXp5U2l6ZXNDZmcuc3JjQXR0ciwgY2FuZGlkYXRlLnUpO1xuXHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgY2FuZGlkYXRlLnUpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRwLnBhcnNlID0gcGFyc2VXc3Jjc2V0O1xuXG5cdFx0cmV0dXJuIHA7XG5cdH0pKCk7XG5cblx0aWYobGF6eVNpemVzQ2ZnLmxvYWRlZENsYXNzICYmIGxhenlTaXplc0NmZy5sb2FkaW5nQ2xhc3Mpe1xuXHRcdChmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHNlbHMgPSBbXTtcblx0XHRcdFsnaW1nW3NpemVzJD1cInB4XCJdW3NyY3NldF0uJywgJ3BpY3R1cmUgPiBpbWc6bm90KFtzcmNzZXRdKS4nXS5mb3JFYWNoKGZ1bmN0aW9uKHNlbCl7XG5cdFx0XHRcdHNlbHMucHVzaChzZWwgKyBsYXp5U2l6ZXNDZmcubG9hZGVkQ2xhc3MpO1xuXHRcdFx0XHRzZWxzLnB1c2goc2VsICsgbGF6eVNpemVzQ2ZnLmxvYWRpbmdDbGFzcyk7XG5cdFx0XHR9KTtcblx0XHRcdGxhenlTaXplc0NmZy5wZih7XG5cdFx0XHRcdGVsZW1lbnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbHMuam9pbignLCAnKSlcblx0XHRcdH0pO1xuXHRcdH0pKCk7XG5cblx0fVxufSkpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5zYWw9dCgpOmUuc2FsPXQoKX0odGhpcywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIG89dFtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxyKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKW4uZChyLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJkaXN0L1wiLG4obi5zPTApfShbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO24ucih0KTtuKDEpO2Z1bmN0aW9uIHIoZSx0KXt2YXIgbj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihyPXIuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLG4ucHVzaC5hcHBseShuLHIpfXJldHVybiBufWZ1bmN0aW9uIG8oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/cihuLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtpKGUsdCxuW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG4pKTpyKG4pLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBpKGUsdCxuKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPW4sZX12YXIgYT1cIlNhbCB3YXMgbm90IGluaXRpYWxpc2VkISBQcm9iYWJseSBpdCBpcyB1c2VkIGluIFNTUi5cIixzPVwiWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhXFxuR2V0IGEgcG9seWZpbGwgZnJvbSBoZXJlOlxcbmh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvdHJlZS9tYXN0ZXIvcG9seWZpbGxcIixsPXtyb290TWFyZ2luOlwiMCUgNTAlXCIsdGhyZXNob2xkOi41LGFuaW1hdGVDbGFzc05hbWU6XCJzYWwtYW5pbWF0ZVwiLGRpc2FibGVkQ2xhc3NOYW1lOlwic2FsLWRpc2FibGVkXCIsZW50ZXJFdmVudE5hbWU6XCJzYWw6aW5cIixleGl0RXZlbnROYW1lOlwic2FsOm91dFwiLHNlbGVjdG9yOlwiW2RhdGEtc2FsXVwiLG9uY2U6ITAsZGlzYWJsZWQ6ITF9LHU9W10sYz1udWxsLGY9ZnVuY3Rpb24oZSx0KXt2YXIgbj1uZXcgQ3VzdG9tRXZlbnQoZSx7YnViYmxlczohMCxkZXRhaWw6dH0pO3QudGFyZ2V0LmRpc3BhdGNoRXZlbnQobil9LGQ9ZnVuY3Rpb24oKXtkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQobC5kaXNhYmxlZENsYXNzTmFtZSl9LGI9ZnVuY3Rpb24oKXtyZXR1cm4gbC5kaXNhYmxlZHx8XCJmdW5jdGlvblwiPT10eXBlb2YgbC5kaXNhYmxlZCYmbC5kaXNhYmxlZCgpfSxwPWZ1bmN0aW9uKGUsdCl7ZS5mb3JFYWNoKChmdW5jdGlvbihlKXtlLmludGVyc2VjdGlvblJhdGlvPj1sLnRocmVzaG9sZD8oIWZ1bmN0aW9uKGUpe2UudGFyZ2V0LmNsYXNzTGlzdC5hZGQobC5hbmltYXRlQ2xhc3NOYW1lKSxmKGwuZW50ZXJFdmVudE5hbWUsZSl9KGUpLGwub25jZSYmdC51bm9ic2VydmUoZS50YXJnZXQpKTpsLm9uY2V8fGZ1bmN0aW9uKGUpe2UudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUobC5hbmltYXRlQ2xhc3NOYW1lKSxmKGwuZXhpdEV2ZW50TmFtZSxlKX0oZSl9KSl9LG09ZnVuY3Rpb24oKXtkKCksYy5kaXNjb25uZWN0KCksYz1udWxsfSx5PWZ1bmN0aW9uKCl7ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGwuZGlzYWJsZWRDbGFzc05hbWUpLGM9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHAse3Jvb3RNYXJnaW46bC5yb290TWFyZ2luLHRocmVzaG9sZDpsLnRocmVzaG9sZH0pLCh1PVtdLmZpbHRlci5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobC5zZWxlY3RvciksKGZ1bmN0aW9uKGUpe3JldHVybiFmdW5jdGlvbihlKXtyZXR1cm4gZS5jbGFzc0xpc3QuY29udGFpbnMobC5hbmltYXRlQ2xhc3NOYW1lKX0oZSxsLmFuaW1hdGVDbGFzc05hbWUpfSkpKS5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gYy5vYnNlcnZlKGUpfSkpfTt0LmRlZmF1bHQ9ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bDtpZihlIT09bCYmKGw9byh7fSxsLHt9LGUpKSxcInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93KXJldHVybiBjb25zb2xlLndhcm4oYSkse2VsZW1lbnRzOnUsZGlzYWJsZTptLGVuYWJsZTp5fTtpZighd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKXRocm93IGQoKSxFcnJvcihzKTtyZXR1cm4gYigpP2QoKTp5KCkse2VsZW1lbnRzOnUsZGlzYWJsZTptLGVuYWJsZTp5fX19LGZ1bmN0aW9uKGUsdCxuKXt9XSkuZGVmYXVsdH0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNhbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNsYW1wKHYsIG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gbWluID4gdiA/IG1pbiA6IG1heCA8IHYgPyBtYXggOiB2O1xyXG59XHJcbmZ1bmN0aW9uIHNpZ24oeCkge1xyXG4gICAgcmV0dXJuICgrKHggPiAwKSAtICsoeCA8IDApKTtcclxufVxyXG5mdW5jdGlvbiByb3VuZChuKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChuICogMTAwMDApIC8gMTAwMDA7XHJcbn1cblxudmFyIGNhY2hlID0ge307XHJcbmZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoKSB7XHJcbiAgICByZXR1cm4gJy0nICsgbWF0Y2hbMF0udG9Mb3dlckNhc2UoKTtcclxufVxyXG5mdW5jdGlvbiBoeXBoZW5hdGUodmFsdWUpIHtcclxuICAgIHJldHVybiBjYWNoZVt2YWx1ZV0gfHwgKGNhY2hlW3ZhbHVlXSA9IHZhbHVlLnJlcGxhY2UoLyhbQS1aXSkvZywgcmVwbGFjZXIpKTtcclxufVxuXG4vKiogZmluZCBlbGVtZW50cyAqL1xyXG5mdW5jdGlvbiAkKGUsIHBhcmVudCkge1xyXG4gICAgcmV0dXJuICFlIHx8IGUubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyAvLyBudWxsIG9yIGVtcHR5IHN0cmluZyByZXR1cm5zIGVtcHR5IGFycmF5XHJcbiAgICAgICAgICAgIFtdXHJcbiAgICAgICAgOiBlLm5vZGVOYW1lXHJcbiAgICAgICAgICAgID8gLy8gYSBzaW5nbGUgZWxlbWVudCBpcyB3cmFwcGVkIGluIGFuIGFycmF5XHJcbiAgICAgICAgICAgICAgICBbZV1cclxuICAgICAgICAgICAgOiAvLyBzZWxlY3RvciBhbmQgTm9kZUxpc3QgYXJlIGNvbnZlcnRlZCB0byBFbGVtZW50W11cclxuICAgICAgICAgICAgICAgIFtdLnNsaWNlLmNhbGwoZVswXS5ub2RlTmFtZSA/IGUgOiAocGFyZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkucXVlcnlTZWxlY3RvckFsbChlKSk7XHJcbn1cclxuZnVuY3Rpb24gc2V0QXR0cnMoZWwsIGF0dHJzKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cclxuICAgIGZvciAodmFyIGtleSBpbiBhdHRycykge1xyXG4gICAgICAgIGlmIChrZXkuaW5kZXhPZignXycpKSB7XHJcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS0nICsgaHlwaGVuYXRlKGtleSksIGF0dHJzW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzZXRQcm9wcyhjc3NQcm9wcykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlbCwgcHJvcHMpIHtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcclxuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdfJykgJiYgKGNzc1Byb3BzID09PSB0cnVlIHx8IGNzc1Byb3BzW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS0nICsgaHlwaGVuYXRlKGtleSksIHJvdW5kKHByb3BzW2tleV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cblxudmFyIGNsZWFyVGFzaztcclxudmFyIHN1YnNjcmliZXJzID0gW107XHJcbmZ1bmN0aW9uIGxvb3AoKSB7XHJcbiAgICAvLyBwcm9jZXNzIHN1YnNjcmliZXJzXHJcbiAgICB2YXIgcyA9IHN1YnNjcmliZXJzLnNsaWNlKCk7XHJcbiAgICBzLmZvckVhY2goZnVuY3Rpb24gKHMyKSB7IHJldHVybiBzMigpOyB9KTtcclxuICAgIC8vIHNjaGVkdWxlIG5leHQgbG9vcCBpZiB0aGUgcXVldWUgbmVlZHMgaXRcclxuICAgIGNsZWFyVGFzayA9IHN1YnNjcmliZXJzLmxlbmd0aCA/IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKSA6IDA7XHJcbn1cclxuZnVuY3Rpb24gc3Vic2NyaWJlKGZuKSB7XHJcbiAgICBzdWJzY3JpYmVycy5wdXNoKGZuKTtcclxuICAgIGlmICghY2xlYXJUYXNrKSB7XHJcbiAgICAgICAgbG9vcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzdWJzY3JpYmVycyA9IHN1YnNjcmliZXJzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcyAhPT0gZm47IH0pO1xyXG4gICAgICAgIGlmICghc3Vic2NyaWJlcnMubGVuZ3RoICYmIGNsZWFyVGFzaykge1xyXG4gICAgICAgICAgICBjbGVhclRhc2sgPSAwO1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShjbGVhclRhc2spO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHsgfVxuXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBTY3JvbGxPdXQgdGhhdCBtYXJrcyBlbGVtZW50cyBpbiB0aGUgdmlld3BvcnQgd2l0aFxyXG4gKiBhbiBcImluXCIgY2xhc3MgYW5kIG1hcmtzIGVsZW1lbnRzIG91dHNpZGUgb2YgdGhlIHZpZXdwb3J0IHdpdGggYW4gXCJvdXRcIlxyXG4gKi9cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0XHJcbmZ1bmN0aW9uIG1haW4gKG9wdHMpIHtcclxuICAgIC8vIEFwcGx5IGRlZmF1bHQgb3B0aW9ucy5cclxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xyXG4gICAgLy8gRGVib3VuY2Ugb25DaGFuZ2Uvb25IaWRkZW4vb25TaG93bi5cclxuICAgIHZhciBvbkNoYW5nZSA9IG9wdHMub25DaGFuZ2UgfHwgbm9vcDtcclxuICAgIHZhciBvbkhpZGRlbiA9IG9wdHMub25IaWRkZW4gfHwgbm9vcDtcclxuICAgIHZhciBvblNob3duID0gb3B0cy5vblNob3duIHx8IG5vb3A7XHJcbiAgICB2YXIgb25TY3JvbGwgPSBvcHRzLm9uU2Nyb2xsIHx8IG5vb3A7XHJcbiAgICB2YXIgcHJvcHMgPSBvcHRzLmNzc1Byb3BzID8gc2V0UHJvcHMob3B0cy5jc3NQcm9wcykgOiBub29wO1xyXG4gICAgdmFyIHNlID0gb3B0cy5zY3JvbGxpbmdFbGVtZW50O1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IHNlID8gJChzZSlbMF0gOiB3aW5kb3c7XHJcbiAgICB2YXIgZG9jID0gc2UgPyAkKHNlKVswXSA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIHZhciByb290Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgdmFyIHNjcm9sbGluZ0VsZW1lbnRDb250ZXh0ID0ge307XHJcbiAgICB2YXIgZWxlbWVudENvbnRleHRMaXN0ID0gW107XHJcbiAgICB2YXIgY2xpZW50T2Zmc2V0WCwgY2xpZW50T2Zmc2V0eTtcclxuICAgIHZhciBzdWIgPSBzdWJzY3JpYmUocmVuZGVyKTtcclxuICAgIGZ1bmN0aW9uIGluZGV4KCkge1xyXG4gICAgICAgIGVsZW1lbnRDb250ZXh0TGlzdCA9ICQob3B0cy50YXJnZXRzIHx8ICdbZGF0YS1zY3JvbGxdJywgJChvcHRzLnNjb3BlIHx8IGRvYylbMF0pLm1hcChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuICh7IGVsZW1lbnQ6IGVsIH0pOyB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBDYWxjdWxhdGUgcG9zaXRpb24sIGRpcmVjdGlvbiBhbmQgcmF0aW8uXHJcbiAgICAgICAgdmFyIGNsaWVudFdpZHRoID0gZG9jLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIHZhciBjbGllbnRIZWlnaHQgPSBkb2MuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHZhciBzY3JvbGxEaXJYID0gc2lnbigtY2xpZW50T2Zmc2V0WCArIChjbGllbnRPZmZzZXRYID0gZG9jLnNjcm9sbExlZnQgfHwgd2luZG93LnBhZ2VYT2Zmc2V0KSk7XHJcbiAgICAgICAgdmFyIHNjcm9sbERpclkgPSBzaWduKC1jbGllbnRPZmZzZXR5ICsgKGNsaWVudE9mZnNldHkgPSBkb2Muc2Nyb2xsVG9wIHx8IHdpbmRvdy5wYWdlWU9mZnNldCkpO1xyXG4gICAgICAgIHZhciBzY3JvbGxQZXJjZW50WCA9IGRvYy5zY3JvbGxMZWZ0IC8gKGRvYy5zY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIHx8IDEpO1xyXG4gICAgICAgIHZhciBzY3JvbGxQZXJjZW50WSA9IGRvYy5zY3JvbGxUb3AgLyAoZG9jLnNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCB8fCAxKTtcclxuICAgICAgICAvLyBEZXRlY3QgaWYgdGhlIHJvb3QgY29udGV4dCBoYXMgY2hhbmdlZC5cclxuICAgICAgICByb290Q2hhbmdlZCA9XHJcbiAgICAgICAgICAgIHJvb3RDaGFuZ2VkIHx8XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmdFbGVtZW50Q29udGV4dC5zY3JvbGxEaXJYICE9PSBzY3JvbGxEaXJYIHx8XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmdFbGVtZW50Q29udGV4dC5zY3JvbGxEaXJZICE9PSBzY3JvbGxEaXJZIHx8XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmdFbGVtZW50Q29udGV4dC5zY3JvbGxQZXJjZW50WCAhPT0gc2Nyb2xsUGVyY2VudFggfHxcclxuICAgICAgICAgICAgICAgIHNjcm9sbGluZ0VsZW1lbnRDb250ZXh0LnNjcm9sbFBlcmNlbnRZICE9PSBzY3JvbGxQZXJjZW50WTtcclxuICAgICAgICBzY3JvbGxpbmdFbGVtZW50Q29udGV4dC5zY3JvbGxEaXJYID0gc2Nyb2xsRGlyWDtcclxuICAgICAgICBzY3JvbGxpbmdFbGVtZW50Q29udGV4dC5zY3JvbGxEaXJZID0gc2Nyb2xsRGlyWTtcclxuICAgICAgICBzY3JvbGxpbmdFbGVtZW50Q29udGV4dC5zY3JvbGxQZXJjZW50WCA9IHNjcm9sbFBlcmNlbnRYO1xyXG4gICAgICAgIHNjcm9sbGluZ0VsZW1lbnRDb250ZXh0LnNjcm9sbFBlcmNlbnRZID0gc2Nyb2xsUGVyY2VudFk7XHJcbiAgICAgICAgdmFyIGNoaWxkQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIGluZGV4XzEgPSAwOyBpbmRleF8xIDwgZWxlbWVudENvbnRleHRMaXN0Lmxlbmd0aDsgaW5kZXhfMSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjdHggPSBlbGVtZW50Q29udGV4dExpc3RbaW5kZXhfMV07XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gY3R4LmVsZW1lbnQ7XHJcbiAgICAgICAgICAgIC8vIGZpbmQgdGhlIGRpc3RhbmNlIGZyb20gdGhlIGVsZW1lbnQgdG8gdGhlIHNjcm9sbGluZyBjb250YWluZXJcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZhciBvZmZzZXRYID0gMDtcclxuICAgICAgICAgICAgdmFyIG9mZnNldFkgPSAwO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYICs9IHRhcmdldC5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WSArPSB0YXJnZXQub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lm9mZnNldFBhcmVudDtcclxuICAgICAgICAgICAgfSB3aGlsZSAodGFyZ2V0ICYmIHRhcmdldCAhPT0gY29udGFpbmVyKTtcclxuICAgICAgICAgICAgLy8gR2V0IGVsZW1lbnQgZGltZW5zaW9ucy5cclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodCB8fCBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAwO1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudFdpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aCB8fCBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDA7XHJcbiAgICAgICAgICAgIC8vIEZpbmQgdmlzaWJsZSByYXRpb3MgZm9yIGVhY2ggZWxlbWVudC5cclxuICAgICAgICAgICAgdmFyIHZpc2libGVYID0gKGNsYW1wKG9mZnNldFggKyBlbGVtZW50V2lkdGgsIGNsaWVudE9mZnNldFgsIGNsaWVudE9mZnNldFggKyBjbGllbnRXaWR0aCkgLVxyXG4gICAgICAgICAgICAgICAgY2xhbXAob2Zmc2V0WCwgY2xpZW50T2Zmc2V0WCwgY2xpZW50T2Zmc2V0WCArIGNsaWVudFdpZHRoKSkgL1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFdpZHRoO1xyXG4gICAgICAgICAgICB2YXIgdmlzaWJsZVkgPSAoY2xhbXAob2Zmc2V0WSArIGVsZW1lbnRIZWlnaHQsIGNsaWVudE9mZnNldHksIGNsaWVudE9mZnNldHkgKyBjbGllbnRIZWlnaHQpIC1cclxuICAgICAgICAgICAgICAgIGNsYW1wKG9mZnNldFksIGNsaWVudE9mZnNldHksIGNsaWVudE9mZnNldHkgKyBjbGllbnRIZWlnaHQpKSAvXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICB2YXIgaW50ZXJzZWN0WCA9IHZpc2libGVYID09PSAxID8gMCA6IHNpZ24ob2Zmc2V0WCAtIGNsaWVudE9mZnNldFgpO1xyXG4gICAgICAgICAgICB2YXIgaW50ZXJzZWN0WSA9IHZpc2libGVZID09PSAxID8gMCA6IHNpZ24ob2Zmc2V0WSAtIGNsaWVudE9mZnNldHkpO1xyXG4gICAgICAgICAgICB2YXIgdmlld3BvcnRYID0gY2xhbXAoKGNsaWVudE9mZnNldFggLSAoZWxlbWVudFdpZHRoIC8gMiArIG9mZnNldFggLSBjbGllbnRXaWR0aCAvIDIpKSAvIChjbGllbnRXaWR0aCAvIDIpLCAtMSwgMSk7XHJcbiAgICAgICAgICAgIHZhciB2aWV3cG9ydFkgPSBjbGFtcCgoY2xpZW50T2Zmc2V0eSAtIChlbGVtZW50SGVpZ2h0IC8gMiArIG9mZnNldFkgLSBjbGllbnRIZWlnaHQgLyAyKSkgLyAoY2xpZW50SGVpZ2h0IC8gMiksIC0xLCAxKTtcclxuICAgICAgICAgICAgdmFyIHZpc2libGUgPSArKG9wdHMub2Zmc2V0XHJcbiAgICAgICAgICAgICAgICA/IG9wdHMub2Zmc2V0IDw9IGNsaWVudE9mZnNldHlcclxuICAgICAgICAgICAgICAgIDogKG9wdHMudGhyZXNob2xkIHx8IDApIDwgdmlzaWJsZVggKiB2aXNpYmxlWSk7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2VkVmlzaWJsZSA9IGN0eC52aXNpYmxlICE9PSB2aXNpYmxlO1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlZCA9IGN0eC5fY2hhbmdlZCB8fFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlZFZpc2libGUgfHxcclxuICAgICAgICAgICAgICAgIGN0eC52aXNpYmxlWCAhPT0gdmlzaWJsZVggfHxcclxuICAgICAgICAgICAgICAgIGN0eC52aXNpYmxlWSAhPT0gdmlzaWJsZVkgfHxcclxuICAgICAgICAgICAgICAgIGN0eC5pbmRleCAhPT0gaW5kZXhfMSB8fFxyXG4gICAgICAgICAgICAgICAgY3R4LmVsZW1lbnRIZWlnaHQgIT09IGVsZW1lbnRIZWlnaHQgfHxcclxuICAgICAgICAgICAgICAgIGN0eC5lbGVtZW50V2lkdGggIT09IGVsZW1lbnRXaWR0aCB8fFxyXG4gICAgICAgICAgICAgICAgY3R4Lm9mZnNldFggIT09IG9mZnNldFggfHxcclxuICAgICAgICAgICAgICAgIGN0eC5vZmZzZXRZICE9PSBvZmZzZXRZIHx8XHJcbiAgICAgICAgICAgICAgICBjdHguaW50ZXJzZWN0WCAhPT0gY3R4LmludGVyc2VjdFggfHxcclxuICAgICAgICAgICAgICAgIGN0eC5pbnRlcnNlY3RZICE9PSBjdHguaW50ZXJzZWN0WSB8fFxyXG4gICAgICAgICAgICAgICAgY3R4LnZpZXdwb3J0WCAhPT0gdmlld3BvcnRYIHx8XHJcbiAgICAgICAgICAgICAgICBjdHgudmlld3BvcnRZICE9PSB2aWV3cG9ydFk7XHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZENoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY3R4Ll9jaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGN0eC5fdmlzaWJsZUNoYW5nZWQgPSBjaGFuZ2VkVmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIGN0eC52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIGN0eC5lbGVtZW50SGVpZ2h0ID0gZWxlbWVudEhlaWdodDtcclxuICAgICAgICAgICAgICAgIGN0eC5lbGVtZW50V2lkdGggPSBlbGVtZW50V2lkdGg7XHJcbiAgICAgICAgICAgICAgICBjdHguaW5kZXggPSBpbmRleF8xO1xyXG4gICAgICAgICAgICAgICAgY3R4Lm9mZnNldFggPSBvZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgY3R4Lm9mZnNldFkgPSBvZmZzZXRZO1xyXG4gICAgICAgICAgICAgICAgY3R4LnZpc2libGVYID0gdmlzaWJsZVg7XHJcbiAgICAgICAgICAgICAgICBjdHgudmlzaWJsZVkgPSB2aXNpYmxlWTtcclxuICAgICAgICAgICAgICAgIGN0eC5pbnRlcnNlY3RYID0gaW50ZXJzZWN0WDtcclxuICAgICAgICAgICAgICAgIGN0eC5pbnRlcnNlY3RZID0gaW50ZXJzZWN0WTtcclxuICAgICAgICAgICAgICAgIGN0eC52aWV3cG9ydFggPSB2aWV3cG9ydFg7XHJcbiAgICAgICAgICAgICAgICBjdHgudmlld3BvcnRZID0gdmlld3BvcnRZO1xyXG4gICAgICAgICAgICAgICAgY3R4LnZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3ViICYmIChyb290Q2hhbmdlZCB8fCBjaGlsZENoYW5nZWQpKSB7XHJcbiAgICAgICAgICAgIHN1YiA9IHN1YnNjcmliZShyZW5kZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgICAgICBtYXliZVVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgLy8gVXBkYXRlIHJvb3QgYXR0cmlidXRlcyBpZiB0aGV5IGhhdmUgY2hhbmdlZC5cclxuICAgICAgICBpZiAocm9vdENoYW5nZWQpIHtcclxuICAgICAgICAgICAgcm9vdENoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2V0QXR0cnMoZG9jLCB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxEaXJYOiBzY3JvbGxpbmdFbGVtZW50Q29udGV4dC5zY3JvbGxEaXJYLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsRGlyWTogc2Nyb2xsaW5nRWxlbWVudENvbnRleHQuc2Nyb2xsRGlyWVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcHJvcHMoZG9jLCBzY3JvbGxpbmdFbGVtZW50Q29udGV4dCk7XHJcbiAgICAgICAgICAgIG9uU2Nyb2xsKGRvYywgc2Nyb2xsaW5nRWxlbWVudENvbnRleHQsIGVsZW1lbnRDb250ZXh0TGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsZW4gPSBlbGVtZW50Q29udGV4dExpc3QubGVuZ3RoO1xyXG4gICAgICAgIGZvciAodmFyIHggPSBsZW4gLSAxOyB4ID4gLTE7IHgtLSkge1xyXG4gICAgICAgICAgICB2YXIgY3R4ID0gZWxlbWVudENvbnRleHRMaXN0W3hdO1xyXG4gICAgICAgICAgICB2YXIgZWwgPSBjdHguZWxlbWVudDtcclxuICAgICAgICAgICAgdmFyIHZpc2libGUgPSBjdHgudmlzaWJsZTtcclxuICAgICAgICAgICAgaWYgKGN0eC5fY2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgY3R4Ll9jaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBwcm9wcyhlbCwgY3R4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3R4Ll92aXNpYmxlQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0QXR0cnMoZWwsIHsgc2Nyb2xsOiB2aXNpYmxlID8gJ2luJyA6ICdvdXQnIH0pO1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoZWwsIGN0eCwgZG9jKTtcclxuICAgICAgICAgICAgICAgICh2aXNpYmxlID8gb25TaG93biA6IG9uSGlkZGVuKShlbCwgY3R4LCBkb2MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgc2hvd24gbXVsdGlwbGUgdGltZXMsIGtlZXAgaXQgaW4gdGhlIGxpc3RcclxuICAgICAgICAgICAgaWYgKHZpc2libGUgJiYgb3B0cy5vbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Q29udGV4dExpc3Quc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbWF5YmVVbnN1YnNjcmliZSgpIHtcclxuICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgIHN1YigpO1xyXG4gICAgICAgICAgICBzdWIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gUnVuIGluaXRpYWxpemUgaW5kZXguXHJcbiAgICBpbmRleCgpO1xyXG4gICAgdXBkYXRlKCk7XHJcbiAgICAvLyBIb29rIHVwIGRvY3VtZW50IGxpc3RlbmVycyB0byBhdXRvbWF0aWNhbGx5IGRldGVjdCBjaGFuZ2VzLlxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZSk7XHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgIHVwZGF0ZTogdXBkYXRlLFxyXG4gICAgICAgIHRlYXJkb3duOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1heWJlVW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZSk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYWluO1xuIiwiLyogc21vb3Roc2Nyb2xsIHYwLjQuNCAtIDIwMTkgLSBEdXN0YW4gS2FzdGVuLCBKZXJlbWlhcyBNZW5pY2hlbGxpIC0gTUlUIExpY2Vuc2UgKi9cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBwb2x5ZmlsbFxuICBmdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgICAvLyBhbGlhc2VzXG4gICAgdmFyIHcgPSB3aW5kb3c7XG4gICAgdmFyIGQgPSBkb2N1bWVudDtcblxuICAgIC8vIHJldHVybiBpZiBzY3JvbGwgYmVoYXZpb3IgaXMgc3VwcG9ydGVkIGFuZCBwb2x5ZmlsbCBpcyBub3QgZm9yY2VkXG4gICAgaWYgKFxuICAgICAgJ3Njcm9sbEJlaGF2aW9yJyBpbiBkLmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJlxuICAgICAgdy5fX2ZvcmNlU21vb3RoU2Nyb2xsUG9seWZpbGxfXyAhPT0gdHJ1ZVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGdsb2JhbHNcbiAgICB2YXIgRWxlbWVudCA9IHcuSFRNTEVsZW1lbnQgfHwgdy5FbGVtZW50O1xuICAgIHZhciBTQ1JPTExfVElNRSA9IDQ2ODtcblxuICAgIC8vIG9iamVjdCBnYXRoZXJpbmcgb3JpZ2luYWwgc2Nyb2xsIG1ldGhvZHNcbiAgICB2YXIgb3JpZ2luYWwgPSB7XG4gICAgICBzY3JvbGw6IHcuc2Nyb2xsIHx8IHcuc2Nyb2xsVG8sXG4gICAgICBzY3JvbGxCeTogdy5zY3JvbGxCeSxcbiAgICAgIGVsZW1lbnRTY3JvbGw6IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCB8fCBzY3JvbGxFbGVtZW50LFxuICAgICAgc2Nyb2xsSW50b1ZpZXc6IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3XG4gICAgfTtcblxuICAgIC8vIGRlZmluZSB0aW1pbmcgbWV0aG9kXG4gICAgdmFyIG5vdyA9XG4gICAgICB3LnBlcmZvcm1hbmNlICYmIHcucGVyZm9ybWFuY2Uubm93XG4gICAgICAgID8gdy5wZXJmb3JtYW5jZS5ub3cuYmluZCh3LnBlcmZvcm1hbmNlKVxuICAgICAgICA6IERhdGUubm93O1xuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGEgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBtYWRlIGJ5IE1pY3Jvc29mdFxuICAgICAqIEBtZXRob2QgaXNNaWNyb3NvZnRCcm93c2VyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzTWljcm9zb2Z0QnJvd3Nlcih1c2VyQWdlbnQpIHtcbiAgICAgIHZhciB1c2VyQWdlbnRQYXR0ZXJucyA9IFsnTVNJRSAnLCAnVHJpZGVudC8nLCAnRWRnZS8nXTtcblxuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodXNlckFnZW50UGF0dGVybnMuam9pbignfCcpKS50ZXN0KHVzZXJBZ2VudCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBJRSBoYXMgcm91bmRpbmcgYnVnIHJvdW5kaW5nIGRvd24gY2xpZW50SGVpZ2h0IGFuZCBjbGllbnRXaWR0aCBhbmRcbiAgICAgKiByb3VuZGluZyB1cCBzY3JvbGxIZWlnaHQgYW5kIHNjcm9sbFdpZHRoIGNhdXNpbmcgZmFsc2UgcG9zaXRpdmVzXG4gICAgICogb24gaGFzU2Nyb2xsYWJsZVNwYWNlXG4gICAgICovXG4gICAgdmFyIFJPVU5ESU5HX1RPTEVSQU5DRSA9IGlzTWljcm9zb2Z0QnJvd3Nlcih3Lm5hdmlnYXRvci51c2VyQWdlbnQpID8gMSA6IDA7XG5cbiAgICAvKipcbiAgICAgKiBjaGFuZ2VzIHNjcm9sbCBwb3NpdGlvbiBpbnNpZGUgYW4gZWxlbWVudFxuICAgICAqIEBtZXRob2Qgc2Nyb2xsRWxlbWVudFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNjcm9sbEVsZW1lbnQoeCwgeSkge1xuICAgICAgdGhpcy5zY3JvbGxMZWZ0ID0geDtcbiAgICAgIHRoaXMuc2Nyb2xsVG9wID0geTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHJlc3VsdCBvZiBhcHBseWluZyBlYXNlIG1hdGggZnVuY3Rpb24gdG8gYSBudW1iZXJcbiAgICAgKiBAbWV0aG9kIGVhc2VcbiAgICAgKiBAcGFyYW0ge051bWJlcn0ga1xuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZWFzZShrKSB7XG4gICAgICByZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhIHNtb290aCBiZWhhdmlvciBzaG91bGQgYmUgYXBwbGllZFxuICAgICAqIEBtZXRob2Qgc2hvdWxkQmFpbE91dFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfE9iamVjdH0gZmlyc3RBcmdcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzaG91bGRCYWlsT3V0KGZpcnN0QXJnKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGZpcnN0QXJnID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBmaXJzdEFyZyAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ2F1dG8nIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnaW5zdGFudCdcbiAgICAgICkge1xuICAgICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gb2JqZWN0L251bGxcbiAgICAgICAgLy8gb3IgYmVoYXZpb3IgaXMgYXV0bywgaW5zdGFudCBvciB1bmRlZmluZWRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZmlyc3RBcmcgPT09ICdvYmplY3QnICYmIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnc21vb3RoJykge1xuICAgICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBhbiBvYmplY3QgYW5kIGJlaGF2aW9yIGlzIHNtb290aFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIHRocm93IGVycm9yIHdoZW4gYmVoYXZpb3IgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgJ2JlaGF2aW9yIG1lbWJlciBvZiBTY3JvbGxPcHRpb25zICcgK1xuICAgICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yICtcbiAgICAgICAgICAnIGlzIG5vdCBhIHZhbGlkIHZhbHVlIGZvciBlbnVtZXJhdGlvbiBTY3JvbGxCZWhhdmlvci4nXG4gICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGhhcyBzY3JvbGxhYmxlIHNwYWNlIGluIHRoZSBwcm92aWRlZCBheGlzXG4gICAgICogQG1ldGhvZCBoYXNTY3JvbGxhYmxlU3BhY2VcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsIGF4aXMpIHtcbiAgICAgIGlmIChheGlzID09PSAnWScpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsaWVudEhlaWdodCArIFJPVU5ESU5HX1RPTEVSQU5DRSA8IGVsLnNjcm9sbEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKGF4aXMgPT09ICdYJykge1xuICAgICAgICByZXR1cm4gZWwuY2xpZW50V2lkdGggKyBST1VORElOR19UT0xFUkFOQ0UgPCBlbC5zY3JvbGxXaWR0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgYSBzY3JvbGxhYmxlIG92ZXJmbG93IHByb3BlcnR5IGluIHRoZSBheGlzXG4gICAgICogQG1ldGhvZCBjYW5PdmVyZmxvd1xuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNhbk92ZXJmbG93KGVsLCBheGlzKSB7XG4gICAgICB2YXIgb3ZlcmZsb3dWYWx1ZSA9IHcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbClbJ292ZXJmbG93JyArIGF4aXNdO1xuXG4gICAgICByZXR1cm4gb3ZlcmZsb3dWYWx1ZSA9PT0gJ2F1dG8nIHx8IG92ZXJmbG93VmFsdWUgPT09ICdzY3JvbGwnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGNhbiBiZSBzY3JvbGxlZCBpbiBlaXRoZXIgYXhpc1xuICAgICAqIEBtZXRob2QgaXNTY3JvbGxhYmxlXG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNTY3JvbGxhYmxlKGVsKSB7XG4gICAgICB2YXIgaXNTY3JvbGxhYmxlWSA9IGhhc1Njcm9sbGFibGVTcGFjZShlbCwgJ1knKSAmJiBjYW5PdmVyZmxvdyhlbCwgJ1knKTtcbiAgICAgIHZhciBpc1Njcm9sbGFibGVYID0gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCAnWCcpICYmIGNhbk92ZXJmbG93KGVsLCAnWCcpO1xuXG4gICAgICByZXR1cm4gaXNTY3JvbGxhYmxlWSB8fCBpc1Njcm9sbGFibGVYO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGZpbmRzIHNjcm9sbGFibGUgcGFyZW50IG9mIGFuIGVsZW1lbnRcbiAgICAgKiBAbWV0aG9kIGZpbmRTY3JvbGxhYmxlUGFyZW50XG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEByZXR1cm5zIHtOb2RlfSBlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZpbmRTY3JvbGxhYmxlUGFyZW50KGVsKSB7XG4gICAgICB3aGlsZSAoZWwgIT09IGQuYm9keSAmJiBpc1Njcm9sbGFibGUoZWwpID09PSBmYWxzZSkge1xuICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGUgfHwgZWwuaG9zdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNlbGYgaW52b2tlZCBmdW5jdGlvbiB0aGF0LCBnaXZlbiBhIGNvbnRleHQsIHN0ZXBzIHRocm91Z2ggc2Nyb2xsaW5nXG4gICAgICogQG1ldGhvZCBzdGVwXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHN0ZXAoY29udGV4dCkge1xuICAgICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICAgIHZhciB2YWx1ZTtcbiAgICAgIHZhciBjdXJyZW50WDtcbiAgICAgIHZhciBjdXJyZW50WTtcbiAgICAgIHZhciBlbGFwc2VkID0gKHRpbWUgLSBjb250ZXh0LnN0YXJ0VGltZSkgLyBTQ1JPTExfVElNRTtcblxuICAgICAgLy8gYXZvaWQgZWxhcHNlZCB0aW1lcyBoaWdoZXIgdGhhbiBvbmVcbiAgICAgIGVsYXBzZWQgPSBlbGFwc2VkID4gMSA/IDEgOiBlbGFwc2VkO1xuXG4gICAgICAvLyBhcHBseSBlYXNpbmcgdG8gZWxhcHNlZCB0aW1lXG4gICAgICB2YWx1ZSA9IGVhc2UoZWxhcHNlZCk7XG5cbiAgICAgIGN1cnJlbnRYID0gY29udGV4dC5zdGFydFggKyAoY29udGV4dC54IC0gY29udGV4dC5zdGFydFgpICogdmFsdWU7XG4gICAgICBjdXJyZW50WSA9IGNvbnRleHQuc3RhcnRZICsgKGNvbnRleHQueSAtIGNvbnRleHQuc3RhcnRZKSAqIHZhbHVlO1xuXG4gICAgICBjb250ZXh0Lm1ldGhvZC5jYWxsKGNvbnRleHQuc2Nyb2xsYWJsZSwgY3VycmVudFgsIGN1cnJlbnRZKTtcblxuICAgICAgLy8gc2Nyb2xsIG1vcmUgaWYgd2UgaGF2ZSBub3QgcmVhY2hlZCBvdXIgZGVzdGluYXRpb25cbiAgICAgIGlmIChjdXJyZW50WCAhPT0gY29udGV4dC54IHx8IGN1cnJlbnRZICE9PSBjb250ZXh0LnkpIHtcbiAgICAgICAgdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcC5iaW5kKHcsIGNvbnRleHQpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzY3JvbGxzIHdpbmRvdyBvciBlbGVtZW50IHdpdGggYSBzbW9vdGggYmVoYXZpb3JcbiAgICAgKiBAbWV0aG9kIHNtb290aFNjcm9sbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE5vZGV9IGVsXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gc21vb3RoU2Nyb2xsKGVsLCB4LCB5KSB7XG4gICAgICB2YXIgc2Nyb2xsYWJsZTtcbiAgICAgIHZhciBzdGFydFg7XG4gICAgICB2YXIgc3RhcnRZO1xuICAgICAgdmFyIG1ldGhvZDtcbiAgICAgIHZhciBzdGFydFRpbWUgPSBub3coKTtcblxuICAgICAgLy8gZGVmaW5lIHNjcm9sbCBjb250ZXh0XG4gICAgICBpZiAoZWwgPT09IGQuYm9keSkge1xuICAgICAgICBzY3JvbGxhYmxlID0gdztcbiAgICAgICAgc3RhcnRYID0gdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQ7XG4gICAgICAgIHN0YXJ0WSA9IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBtZXRob2QgPSBvcmlnaW5hbC5zY3JvbGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGxhYmxlID0gZWw7XG4gICAgICAgIHN0YXJ0WCA9IGVsLnNjcm9sbExlZnQ7XG4gICAgICAgIHN0YXJ0WSA9IGVsLnNjcm9sbFRvcDtcbiAgICAgICAgbWV0aG9kID0gc2Nyb2xsRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgLy8gc2Nyb2xsIGxvb3Bpbmcgb3ZlciBhIGZyYW1lXG4gICAgICBzdGVwKHtcbiAgICAgICAgc2Nyb2xsYWJsZTogc2Nyb2xsYWJsZSxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lLFxuICAgICAgICBzdGFydFg6IHN0YXJ0WCxcbiAgICAgICAgc3RhcnRZOiBzdGFydFksXG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE9SSUdJTkFMIE1FVEhPRFMgT1ZFUlJJREVTXG4gICAgLy8gdy5zY3JvbGwgYW5kIHcuc2Nyb2xsVG9cbiAgICB3LnNjcm9sbCA9IHcuc2Nyb2xsVG8gPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbC5jYWxsKFxuICAgICAgICAgIHcsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0J1xuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1swXVxuICAgICAgICAgICAgICA6IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgIC8vIHVzZSB0b3AgcHJvcCwgc2Vjb25kIGFyZ3VtZW50IGlmIHByZXNlbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsWVxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gYXJndW1lbnRzWzFdXG4gICAgICAgICAgICAgIDogdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXRcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB3LFxuICAgICAgICBkLmJvZHksXG4gICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICA6IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0LFxuICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgIDogdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXRcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIHcuc2Nyb2xsQnlcbiAgICB3LnNjcm9sbEJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGxCeS5jYWxsKFxuICAgICAgICAgIHcsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0JyA/IGFyZ3VtZW50c1swXSA6IDAsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdyxcbiAgICAgICAgZC5ib2R5LFxuICAgICAgICB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgKHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0KSxcbiAgICAgICAgfn5hcmd1bWVudHNbMF0udG9wICsgKHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0KVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsIGFuZCBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUb1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCA9IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbFRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBpZiBvbmUgbnVtYmVyIGlzIHBhc3NlZCwgdGhyb3cgZXJyb3IgdG8gbWF0Y2ggRmlyZWZveCBpbXBsZW1lbnRhdGlvblxuICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ251bWJlcicgJiYgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1ZhbHVlIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9yaWdpbmFsLmVsZW1lbnRTY3JvbGwuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIC8vIHVzZSBsZWZ0IHByb3AsIGZpcnN0IG51bWJlciBhcmd1bWVudCBvciBmYWxsYmFjayB0byBzY3JvbGxMZWZ0XG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgICA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnID8gfn5hcmd1bWVudHNbMF0gOiB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgICAgLy8gdXNlIHRvcCBwcm9wLCBzZWNvbmQgYXJndW1lbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsVG9wXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IH5+YXJndW1lbnRzWzFdIDogdGhpcy5zY3JvbGxUb3BcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBsZWZ0ID0gYXJndW1lbnRzWzBdLmxlZnQ7XG4gICAgICB2YXIgdG9wID0gYXJndW1lbnRzWzBdLnRvcDtcblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHR5cGVvZiBsZWZ0ID09PSAndW5kZWZpbmVkJyA/IHRoaXMuc2Nyb2xsTGVmdCA6IH5+bGVmdCxcbiAgICAgICAgdHlwZW9mIHRvcCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjcm9sbFRvcCA6IH5+dG9wXG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeVxuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnRcbiAgICAgICAgICAgIDogfn5hcmd1bWVudHNbMF0gKyB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLnRvcCArIHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICAgICA6IH5+YXJndW1lbnRzWzFdICsgdGhpcy5zY3JvbGxUb3BcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2Nyb2xsKHtcbiAgICAgICAgbGVmdDogfn5hcmd1bWVudHNbMF0ubGVmdCArIHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgdG9wOiB+fmFyZ3VtZW50c1swXS50b3AgKyB0aGlzLnNjcm9sbFRvcCxcbiAgICAgICAgYmVoYXZpb3I6IGFyZ3VtZW50c1swXS5iZWhhdmlvclxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3XG4gICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsSW50b1ZpZXcuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1swXVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgdmFyIHNjcm9sbGFibGVQYXJlbnQgPSBmaW5kU2Nyb2xsYWJsZVBhcmVudCh0aGlzKTtcbiAgICAgIHZhciBwYXJlbnRSZWN0cyA9IHNjcm9sbGFibGVQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgY2xpZW50UmVjdHMgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBpZiAoc2Nyb2xsYWJsZVBhcmVudCAhPT0gZC5ib2R5KSB7XG4gICAgICAgIC8vIHJldmVhbCBlbGVtZW50IGluc2lkZSBwYXJlbnRcbiAgICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LFxuICAgICAgICAgIHNjcm9sbGFibGVQYXJlbnQuc2Nyb2xsTGVmdCArIGNsaWVudFJlY3RzLmxlZnQgLSBwYXJlbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgIHNjcm9sbGFibGVQYXJlbnQuc2Nyb2xsVG9wICsgY2xpZW50UmVjdHMudG9wIC0gcGFyZW50UmVjdHMudG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gcmV2ZWFsIHBhcmVudCBpbiB2aWV3cG9ydCB1bmxlc3MgaXMgZml4ZWRcbiAgICAgICAgaWYgKHcuZ2V0Q29tcHV0ZWRTdHlsZShzY3JvbGxhYmxlUGFyZW50KS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgICAgIHcuc2Nyb2xsQnkoe1xuICAgICAgICAgICAgbGVmdDogcGFyZW50UmVjdHMubGVmdCxcbiAgICAgICAgICAgIHRvcDogcGFyZW50UmVjdHMudG9wLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldmVhbCBlbGVtZW50IGluIHZpZXdwb3J0XG4gICAgICAgIHcuc2Nyb2xsQnkoe1xuICAgICAgICAgIGxlZnQ6IGNsaWVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgdG9wOiBjbGllbnRSZWN0cy50b3AsXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gY29tbW9uanNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHsgcG9seWZpbGw6IHBvbHlmaWxsIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gZ2xvYmFsXG4gICAgcG9seWZpbGwoKTtcbiAgfVxuXG59KCkpO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLkJ1bG1hQWNjb3JkaW9uID0ge30pKTtcbn0odGhpcywgZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG5cbiAgICB2YXIgc2NyaXB0ID0ge1xuICAgICAgICBuYW1lOiBcImJ1bG1hLWFjY29yZGlvblwiLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaW5pdGlhbE9wZW5JdGVtOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluaXRpYWxPcGVuSXRlbXM6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIChpdGVtcykgeyByZXR1cm4gQXJyYXkuaXNBcnJheShpdGVtcykgJiZcbiAgICAgICAgICAgICAgICAgICAgIWl0ZW1zLnNvbWUoZnVuY3Rpb24gKG4pIHsgcmV0dXJuIHR5cGVvZiBuICE9PSBcIm51bWJlclwiOyB9KTsgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhcmV0QW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXCI0NTBtc1wiLFxuICAgICAgICAgICAgICAgICAgICB0aW1lckZ1bmM6IFwiZWFzZVwiXG4gICAgICAgICAgICAgICAgfSk7IH0sXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID1cbiAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgY29uZmlnLmR1cmF0aW9uID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGNvbmZpZy50aW1lckZ1bmMgPT09IFwic3RyaW5nXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWcubm9uZSA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRyb3Bkb3duOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBcImNhcmV0XCIsXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZSA9PT0gXCJjYXJldFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBjaG9pY2UgPT09IFwicGx1cy1taW51c1wiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBjaG9pY2UgPT09IFwiY3VzdG9tXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzbGlkZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IFwiNzAwbXNcIixcbiAgICAgICAgICAgICAgICAgICAgdGltZXJGdW5jOiBcImVhc2VcIlxuICAgICAgICAgICAgICAgIH0pOyB9LFxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgY29uZmlnLmR1cmF0aW9uID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgY29uZmlnLnRpbWVyRnVuYyA9PT0gXCJzdHJpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuJG9uKFwiY2hpbGQtcmVnaXN0ZXJlZFwiLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSB0aGlzJDEuZ2V0TmV4dElkKCk7XG4gICAgICAgICAgICAgICAgY2hpbGQuc2V0VW5pcXVlSWQoaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMkMS5jaGlsZHJlbl90b2dnbGVfc3RhdHVzW2lkXSA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRvbihcImNoaWxkLWNsaWNrZWRcIiwgdGhpcy5oYW5kbGVDaGlsZENsaWNrZWQpO1xuICAgICAgICAgICAgdGhpcy4kb24oXCJjaGlsZC1yZW1vdmVkXCIsIGZ1bmN0aW9uIChjaGlsZF9pZCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzJDEuY2hpbGRyZW5fdG9nZ2xlX3N0YXR1c1tjaGlsZF9pZF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzJDEub3BlbkluaXRpYWxJdGVtcyh0aGlzJDEuJGNoaWxkcmVuLmxlbmd0aCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmV4dF9pZDogMSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbl90b2dnbGVfc3RhdHVzOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0TmV4dElkOiBmdW5jdGlvbiBnZXROZXh0SWQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB0aGlzLm5leHRfaWQudG9TdHJpbmcoMTApO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dF9pZCArPSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZUNoaWxkQ2xpY2tlZDogZnVuY3Rpb24gaGFuZGxlQ2hpbGRDbGlja2VkKGNoaWxkX2lkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGlkIGluIHRoaXMuY2hpbGRyZW5fdG9nZ2xlX3N0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW5fdG9nZ2xlX3N0YXR1c1tpZF0gJiYgaWQgIT09IGNoaWxkX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcInRvZ2dsZS1jaGlsZFwiLCBpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbl90b2dnbGVfc3RhdHVzW2lkXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5fdG9nZ2xlX3N0YXR1c1tjaGlsZF9pZF0gPSAhdGhpc1xuICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW5fdG9nZ2xlX3N0YXR1c1tjaGlsZF9pZF07XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcInRvZ2dsZS1jaGlsZFwiLCBjaGlsZF9pZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3BlbkluaXRpYWxJdGVtczogZnVuY3Rpb24gb3BlbkluaXRpYWxJdGVtcyhpdGVtc19sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcy5pbml0aWFsT3Blbkl0ZW07XG4gICAgICAgICAgICAgICAgdmFyIGlzID0gdGhpcy5pbml0aWFsT3Blbkl0ZW1zO1xuICAgICAgICAgICAgICAgIGlmIChpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkluaXRpYWxJdGVtKGksIGl0ZW1zX2xlbmd0aCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMkMS5vcGVuSW5pdGlhbEl0ZW0oaXRlbSwgaXRlbXNfbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wZW5Jbml0aWFsSXRlbTogZnVuY3Rpb24gb3BlbkluaXRpYWxJdGVtKGl0ZW0sIGl0ZW1zX2xlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBudW1faXRlbSA9XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBpdGVtID09PSBcIm51bWJlclwiID8gaXRlbSA6IHBhcnNlSW50KGl0ZW0sIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAobnVtX2l0ZW0gPiAwICYmIG51bV9pdGVtIDw9IGl0ZW1zX2xlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoaWxkQ2xpY2tlZChTdHJpbmcobnVtX2l0ZW0pKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAoXCJUaGVyZSBhcmUgb25seSBcIiArIGl0ZW1zX2xlbmd0aCArIFwiIEFjY29yZGlvbkl0ZW1zLCBcIiArIG51bV9pdGVtICsgXCIgaXMgb3V0IG9mIGJvdW5kcy4gW2luZGV4aW5nIGZyb20gMV1cIilcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyogc2NyaXB0ICovXG4gICAgICAgICAgICAgICAgdmFyIF9fdnVlX3NjcmlwdF9fID0gc2NyaXB0O1xuICAgICAgICAgICAgICAgIFxuICAgIC8qIHRlbXBsYXRlICovXG4gICAgdmFyIF9fdnVlX3JlbmRlcl9fID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJhY2NvcmRpb25cIn0sW192bS5fdChcImRlZmF1bHRcIildLDIpfTtcbiAgICB2YXIgX192dWVfc3RhdGljUmVuZGVyRm5zX18gPSBbXTtcblxuICAgICAgLyogc3R5bGUgKi9cbiAgICAgIHZhciBfX3Z1ZV9pbmplY3Rfc3R5bGVzX18gPSB1bmRlZmluZWQ7XG4gICAgICAvKiBzY29wZWQgKi9cbiAgICAgIHZhciBfX3Z1ZV9zY29wZV9pZF9fID0gdW5kZWZpbmVkO1xuICAgICAgLyogbW9kdWxlIGlkZW50aWZpZXIgKi9cbiAgICAgIHZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gdW5kZWZpbmVkO1xuICAgICAgLyogZnVuY3Rpb25hbCB0ZW1wbGF0ZSAqL1xuICAgICAgdmFyIF9fdnVlX2lzX2Z1bmN0aW9uYWxfdGVtcGxhdGVfXyA9IGZhbHNlO1xuICAgICAgLyogY29tcG9uZW50IG5vcm1hbGl6ZXIgKi9cbiAgICAgIGZ1bmN0aW9uIF9fdnVlX25vcm1hbGl6ZV9fKFxuICAgICAgICB0ZW1wbGF0ZSwgc3R5bGUsIHNjcmlwdCQkMSxcbiAgICAgICAgc2NvcGUsIGZ1bmN0aW9uYWwsIG1vZHVsZUlkZW50aWZpZXIsXG4gICAgICAgIGNyZWF0ZUluamVjdG9yLCBjcmVhdGVJbmplY3RvclNTUlxuICAgICAgKSB7XG4gICAgICAgIHZhciBjb21wb25lbnQgPSAodHlwZW9mIHNjcmlwdCQkMSA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdCQkMS5vcHRpb25zIDogc2NyaXB0JCQxKSB8fCB7fTtcblxuICAgICAgICAvLyBGb3Igc2VjdXJpdHkgY29uY2VybnMsIHdlIHVzZSBvbmx5IGJhc2UgbmFtZSBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAgIGNvbXBvbmVudC5fX2ZpbGUgPSBcIkJ1bG1hQWNjb3JkaW9uLnZ1ZVwiO1xuXG4gICAgICAgIGlmICghY29tcG9uZW50LnJlbmRlcikge1xuICAgICAgICAgIGNvbXBvbmVudC5yZW5kZXIgPSB0ZW1wbGF0ZS5yZW5kZXI7XG4gICAgICAgICAgY29tcG9uZW50LnN0YXRpY1JlbmRlckZucyA9IHRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICAgICAgICBjb21wb25lbnQuX2NvbXBpbGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGlmIChmdW5jdGlvbmFsKSB7IGNvbXBvbmVudC5mdW5jdGlvbmFsID0gdHJ1ZTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50Ll9zY29wZUlkID0gc2NvcGU7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFxuICAgICAgfVxuICAgICAgLyogc3R5bGUgaW5qZWN0ICovXG4gICAgICBcbiAgICAgIC8qIHN0eWxlIGluamVjdCBTU1IgKi9cbiAgICAgIFxuXG4gICAgICBcbiAgICAgIHZhciBCdWxtYUFjY29yZGlvbiA9IF9fdnVlX25vcm1hbGl6ZV9fKFxuICAgICAgICB7IHJlbmRlcjogX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZuczogX192dWVfc3RhdGljUmVuZGVyRm5zX18gfSxcbiAgICAgICAgX192dWVfaW5qZWN0X3N0eWxlc19fLFxuICAgICAgICBfX3Z1ZV9zY3JpcHRfXyxcbiAgICAgICAgX192dWVfc2NvcGVfaWRfXyxcbiAgICAgICAgX192dWVfaXNfZnVuY3Rpb25hbF90ZW1wbGF0ZV9fLFxuICAgICAgICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHVuZGVmaW5lZFxuICAgICAgKTtcblxuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG5cbiAgICB2YXIgc2NyaXB0JDEgPSB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBtaW51czoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHZlcnRpY2FsQ2xhc3NlczogZnVuY3Rpb24gdmVydGljYWxDbGFzc2VzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsLXJvdGF0ZWRcIjogdGhpcy5taW51c1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyogc2NyaXB0ICovXG4gICAgICAgICAgICAgICAgdmFyIF9fdnVlX3NjcmlwdF9fJDEgPSBzY3JpcHQkMTtcbiAgICAgICAgICAgICAgICBcbiAgICAvKiB0ZW1wbGF0ZSAqL1xuICAgIHZhciBfX3Z1ZV9yZW5kZXJfXyQxID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJwbHVzLW1pbnVzXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJob3Jpem9udGFsXCJ9KSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtjbGFzczpfdm0udmVydGljYWxDbGFzc2VzfSldKX07XG4gICAgdmFyIF9fdnVlX3N0YXRpY1JlbmRlckZuc19fJDEgPSBbXTtcblxuICAgICAgLyogc3R5bGUgKi9cbiAgICAgIHZhciBfX3Z1ZV9pbmplY3Rfc3R5bGVzX18kMSA9IGZ1bmN0aW9uIChpbmplY3QpIHtcbiAgICAgICAgaWYgKCFpbmplY3QpIHsgcmV0dXJuIH1cbiAgICAgICAgaW5qZWN0KFwiZGF0YS12LTZiMGMyMWFlXzBcIiwgeyBzb3VyY2U6IFwiLmhvcml6b250YWxbZGF0YS12LTZiMGMyMWFlXSwudmVydGljYWxbZGF0YS12LTZiMGMyMWFlXXtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjNweDtiYWNrZ3JvdW5kOiM2NDY0NjQ7dHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2l0aW9uOi40cyBhbGwgZWFzZS1vdXR9Lmhvcml6b250YWxbZGF0YS12LTZiMGMyMWFlXXt0b3A6NDUlO2xlZnQ6MTAlO3JpZ2h0OjEwJTtoZWlnaHQ6MTAlfS52ZXJ0aWNhbFtkYXRhLXYtNmIwYzIxYWVde3RvcDoxMCU7Ym90dG9tOjEwJTtsZWZ0OjQ1JTt3aWR0aDoxMCV9LnZlcnRpY2FsLXJvdGF0ZWRbZGF0YS12LTZiMGMyMWFlXXt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0ucGx1cy1taW51c1tkYXRhLXYtNmIwYzIxYWVde3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX1cIiwgbWFwOiB1bmRlZmluZWQsIG1lZGlhOiB1bmRlZmluZWQgfSk7XG5cbiAgICAgIH07XG4gICAgICAvKiBzY29wZWQgKi9cbiAgICAgIHZhciBfX3Z1ZV9zY29wZV9pZF9fJDEgPSBcImRhdGEtdi02YjBjMjFhZVwiO1xuICAgICAgLyogbW9kdWxlIGlkZW50aWZpZXIgKi9cbiAgICAgIHZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fJDEgPSB1bmRlZmluZWQ7XG4gICAgICAvKiBmdW5jdGlvbmFsIHRlbXBsYXRlICovXG4gICAgICB2YXIgX192dWVfaXNfZnVuY3Rpb25hbF90ZW1wbGF0ZV9fJDEgPSBmYWxzZTtcbiAgICAgIC8qIGNvbXBvbmVudCBub3JtYWxpemVyICovXG4gICAgICBmdW5jdGlvbiBfX3Z1ZV9ub3JtYWxpemVfXyQxKFxuICAgICAgICB0ZW1wbGF0ZSwgc3R5bGUsIHNjcmlwdCxcbiAgICAgICAgc2NvcGUsIGZ1bmN0aW9uYWwsIG1vZHVsZUlkZW50aWZpZXIsXG4gICAgICAgIGNyZWF0ZUluamVjdG9yLCBjcmVhdGVJbmplY3RvclNTUlxuICAgICAgKSB7XG4gICAgICAgIHZhciBjb21wb25lbnQgPSAodHlwZW9mIHNjcmlwdCA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdC5vcHRpb25zIDogc2NyaXB0KSB8fCB7fTtcblxuICAgICAgICAvLyBGb3Igc2VjdXJpdHkgY29uY2VybnMsIHdlIHVzZSBvbmx5IGJhc2UgbmFtZSBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAgIGNvbXBvbmVudC5fX2ZpbGUgPSBcIlBsdXNNaW51cy52dWVcIjtcblxuICAgICAgICBpZiAoIWNvbXBvbmVudC5yZW5kZXIpIHtcbiAgICAgICAgICBjb21wb25lbnQucmVuZGVyID0gdGVtcGxhdGUucmVuZGVyO1xuICAgICAgICAgIGNvbXBvbmVudC5zdGF0aWNSZW5kZXJGbnMgPSB0ZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnM7XG4gICAgICAgICAgY29tcG9uZW50Ll9jb21waWxlZCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoZnVuY3Rpb25hbCkgeyBjb21wb25lbnQuZnVuY3Rpb25hbCA9IHRydWU7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudC5fc2NvcGVJZCA9IHNjb3BlO1xuXG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgaG9vaztcbiAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgIGhvb2sgPSBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgICAgICAgIHN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3IoY29udGV4dCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaG9vayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmZ1bmN0aW9uYWwpIHtcbiAgICAgICAgICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICAgICAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IGNvbXBvbmVudC5yZW5kZXI7XG4gICAgICAgICAgICAgIGNvbXBvbmVudC5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGhvb2suY2FsbChjb250ZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICAgICAgICAgIHZhciBleGlzdGluZyA9IGNvbXBvbmVudC5iZWZvcmVDcmVhdGU7XG4gICAgICAgICAgICAgIGNvbXBvbmVudC5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFxuICAgICAgfVxuICAgICAgLyogc3R5bGUgaW5qZWN0ICovXG4gICAgICBmdW5jdGlvbiBfX3Z1ZV9jcmVhdGVfaW5qZWN0b3JfXygpIHtcbiAgICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIHZhciBzdHlsZXMgPSBfX3Z1ZV9jcmVhdGVfaW5qZWN0b3JfXy5zdHlsZXMgfHwgKF9fdnVlX2NyZWF0ZV9pbmplY3Rvcl9fLnN0eWxlcyA9IHt9KTtcbiAgICAgICAgdmFyIGlzT2xkSUUgPVxuICAgICAgICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgL21zaWUgWzYtOV1cXFxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBhZGRTdHlsZShpZCwgY3NzKSB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdnVlLXNzci1pZH49XCInICsgaWQgKyAnXCJdJykpIHsgcmV0dXJuIH0gLy8gU1NSIHN0eWxlcyBhcmUgcHJlc2VudC5cblxuICAgICAgICAgIHZhciBncm91cCA9IGlzT2xkSUUgPyBjc3MubWVkaWEgfHwgJ2RlZmF1bHQnIDogaWQ7XG4gICAgICAgICAgdmFyIHN0eWxlID0gc3R5bGVzW2dyb3VwXSB8fCAoc3R5bGVzW2dyb3VwXSA9IHsgaWRzOiBbXSwgcGFydHM6IFtdLCBlbGVtZW50OiB1bmRlZmluZWQgfSk7XG5cbiAgICAgICAgICBpZiAoIXN0eWxlLmlkcy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gY3NzLnNvdXJjZTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHN0eWxlLmlkcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIHN0eWxlLmlkcy5wdXNoKGlkKTtcblxuICAgICAgICAgICAgaWYgKGNzcy5tYXApIHtcbiAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgICAgICAgICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICAgICAgICAgICAgY29kZSArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgY3NzLm1hcC5zb3VyY2VzWzBdICsgJyAqLyc7XG4gICAgICAgICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgICAgICAgICAgIGNvZGUgKz1cbiAgICAgICAgICAgICAgICAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICtcbiAgICAgICAgICAgICAgICBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3MubWFwKSkpKSArXG4gICAgICAgICAgICAgICAgJyAqLyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc09sZElFKSB7XG4gICAgICAgICAgICAgIHN0eWxlLmVsZW1lbnQgPSBzdHlsZS5lbGVtZW50IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtZ3JvdXA9JyArIGdyb3VwICsgJ10nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdHlsZS5lbGVtZW50KSB7XG4gICAgICAgICAgICAgIHZhciBlbCA9IHN0eWxlLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgICBlbC50eXBlID0gJ3RleHQvY3NzJztcblxuICAgICAgICAgICAgICBpZiAoY3NzLm1lZGlhKSB7IGVsLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBjc3MubWVkaWEpOyB9XG4gICAgICAgICAgICAgIGlmIChpc09sZElFKSB7XG4gICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLWdyb3VwJywgZ3JvdXApO1xuICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1uZXh0LWluZGV4JywgJzAnKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNPbGRJRSkge1xuICAgICAgICAgICAgICBpbmRleCA9IHBhcnNlSW50KHN0eWxlLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW5leHQtaW5kZXgnKSk7XG4gICAgICAgICAgICAgIHN0eWxlLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW5leHQtaW5kZXgnLCBpbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3R5bGUuZWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgICAgICAgICAgIHN0eWxlLnBhcnRzLnB1c2goY29kZSk7XG4gICAgICAgICAgICAgIHN0eWxlLmVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gc3R5bGUucGFydHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgICAgICAgLmpvaW4oJ1xcbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29kZSk7XG4gICAgICAgICAgICAgIHZhciBub2RlcyA9IHN0eWxlLmVsZW1lbnQuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgaWYgKG5vZGVzW2luZGV4XSkgeyBzdHlsZS5lbGVtZW50LnJlbW92ZUNoaWxkKG5vZGVzW2luZGV4XSk7IH1cbiAgICAgICAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCkgeyBzdHlsZS5lbGVtZW50Lmluc2VydEJlZm9yZSh0ZXh0Tm9kZSwgbm9kZXNbaW5kZXhdKTsgfVxuICAgICAgICAgICAgICBlbHNlIHsgc3R5bGUuZWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qIHN0eWxlIGluamVjdCBTU1IgKi9cbiAgICAgIFxuXG4gICAgICBcbiAgICAgIHZhciBQbHVzTWludXMgPSBfX3Z1ZV9ub3JtYWxpemVfXyQxKFxuICAgICAgICB7IHJlbmRlcjogX192dWVfcmVuZGVyX18kMSwgc3RhdGljUmVuZGVyRm5zOiBfX3Z1ZV9zdGF0aWNSZW5kZXJGbnNfXyQxIH0sXG4gICAgICAgIF9fdnVlX2luamVjdF9zdHlsZXNfXyQxLFxuICAgICAgICBfX3Z1ZV9zY3JpcHRfXyQxLFxuICAgICAgICBfX3Z1ZV9zY29wZV9pZF9fJDEsXG4gICAgICAgIF9fdnVlX2lzX2Z1bmN0aW9uYWxfdGVtcGxhdGVfXyQxLFxuICAgICAgICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fJDEsXG4gICAgICAgIF9fdnVlX2NyZWF0ZV9pbmplY3Rvcl9fLFxuICAgICAgICB1bmRlZmluZWRcbiAgICAgICk7XG5cbiAgICAvLyBnb3QgdGhpcyBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS85MDkwMTI4LCB0aWRpZWQgaXQgdXAgc29tZXdoYXRcbiAgICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kRXZlbnROYW1lKGVsKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9ucyA9IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgICAgIE9UcmFuc2l0aW9uOiAnb3RyYW5zaXRpb25lbmQnLCAvLyBvVHJhbnNpdGlvbkVuZCBpbiB2ZXJ5IG9sZCBPcGVyYVxuICAgICAgICAgICAgTW96VHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICAgICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIHQgaW4gdHJhbnNpdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2l0aW9ucy5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25zW3RdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmFuc2l0aW9uRW5kIGV2ZW50IGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAgICB9XG5cbiAgICAvL1xuICAgIHZhciBzY3JpcHQkMiA9IHtcbiAgICAgICAgbmFtZTogXCJidWxtYS1hY2NvcmRpb24taXRlbVwiLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBQbHVzTWludXM6IFBsdXNNaW51c1xuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9IZWlnaHRJbnRlcnZhbDogbnVsbCxcbiAgICAgICAgICAgICAgICBzaG93Q2FyZENvbnRlbnQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVuaXF1ZUlkOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzJDEuJHBhcmVudC4kZW1pdChcImNoaWxkLXJlZ2lzdGVyZWRcIiwgdGhpcyQxKTtcbiAgICAgICAgICAgICAgICB0aGlzJDEuJHBhcmVudC4kb24oXCJ0b2dnbGUtY2hpbGRcIiwgdGhpcyQxLmhhbmRsZVRvZ2dsZVJlcXVlc3QpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFjY29yZGlvbkJvZHkgPSB0aGlzJDEuJHJlZnMuYm9keTtcbiAgICAgICAgICAgICAgICB2YXIgZU5hbWUgPSB0cmFuc2l0aW9uRW5kRXZlbnROYW1lKGFjY29yZGlvbkJvZHkpO1xuICAgICAgICAgICAgICAgIGFjY29yZGlvbkJvZHkuYWRkRXZlbnRMaXN0ZW5lcihlTmFtZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjY29yZGlvbkJvZHkuc3R5bGUuaGVpZ2h0ICE9PSBcIjBweFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzJDEuYXV0b0hlaWdodFN0YXJ0KGFjY29yZGlvbkJvZHkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyQxLmF1dG9IZWlnaHRTdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzJDEuc2hvd0NhcmRDb250ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRlbWl0KFwiY2hpbGQtcmVtb3ZlZFwiLCB0aGlzLnVuaXF1ZUlkKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGlzT3BlbjogZnVuY3Rpb24gaXNPcGVuKG5ld1N0YXR1cykge1xuICAgICAgICAgICAgICAgIGlmIChuZXdTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcImNsb3NlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRvVGhlU2xpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGNvbmZpZzogZnVuY3Rpb24gY29uZmlnKCkge1xuICAgICAgICAgICAgICAgIHZhciByZWYgPSB0aGlzLiRwYXJlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHJlZi5jYXJldEFuaW1hdGlvbjsgaWYgKCBhbmltYXRpb24gPT09IHZvaWQgMCApIGFuaW1hdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBcIjQ1MG1zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lckZ1bmM6IFwiZWFzZVwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGRyb3Bkb3duID0gcmVmLmRyb3Bkb3duOyBpZiAoIGRyb3Bkb3duID09PSB2b2lkIDAgKSBkcm9wZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBpY29uID0gcmVmLmljb247IGlmICggaWNvbiA9PT0gdm9pZCAwICkgaWNvbiA9IFwiY2FyZXRcIjtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSByZWYuc2xpZGU7IGlmICggc2xpZGUgPT09IHZvaWQgMCApIHNsaWRlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IFwiNzAwbXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyRnVuYzogXCJlYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd246IGRyb3Bkb3duLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZTogc2xpZGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRyb3Bkb3duSWNvbkNsYXNzZXM6IGZ1bmN0aW9uIGRyb3Bkb3duSWNvbkNsYXNzZXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXItaWNvblwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImNhcmV0LWRvd25cIjogIXRoaXMuaXNPcGVuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXJkX2NsYXNzZXM6IGZ1bmN0aW9uIGNhcmRfY2xhc3NlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjYXJkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImNhcmQtYWN0aXZlXCI6IHRoaXMuaXNPcGVuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXJkX2NvbnRlbnRfY2xhc3NlczogZnVuY3Rpb24gY2FyZF9jb250ZW50X2NsYXNzZXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgXCJjYXJkLWNvbnRlbnRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJpcy1oaWRkZW5cIjogIXRoaXMuc2hvd0NhcmRDb250ZW50XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb290ZXJDbGFzc2VzOiBmdW5jdGlvbiBmb290ZXJDbGFzc2VzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2FyZC1mb290ZXJcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJpcy1oaWRkZW5cIjogIXRoaXMuJHNsb3RzLmZvb3RlclxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXNpbmdDdXN0b21JY29uOiBmdW5jdGlvbiB1c2luZ0N1c3RvbUljb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmljb24gPT09IFwiY3VzdG9tXCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0NhcmV0OiBmdW5jdGlvbiBzaG93Q2FyZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmljb24gPT09IFwiY2FyZXRcIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93UGx1czogZnVuY3Rpb24gc2hvd1BsdXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmljb24gPT09IFwicGx1cy1taW51c1wiICYmICF0aGlzLmlzT3BlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TWludXM6IGZ1bmN0aW9uIHNob3dNaW51cygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuaWNvbiA9PT0gXCJwbHVzLW1pbnVzXCIgJiYgdGhpcy5pc09wZW47XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2xpZGVTdHlsZTogZnVuY3Rpb24gc2xpZGVTdHlsZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHRoaXMuY29uZmlnLnNsaWRlO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IChcImFsbCBcIiArIChjLmR1cmF0aW9uKSArIFwiIFwiICsgKGMudGltZXJGdW5jKSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb25TdHlsZTogZnVuY3Rpb24gaWNvblN0eWxlKCkge1xuICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcy5jb25maWcuYW5pbWF0aW9uO1xuICAgICAgICAgICAgICAgIGlmIChjLm5vbmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAoXCJhbGwgXCIgKyAoYy5kdXJhdGlvbikgKyBcIiBcIiArIChjLnRpbWVyRnVuYykpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaGFuZGxlVG9nZ2xlUmVxdWVzdDogZnVuY3Rpb24gaGFuZGxlVG9nZ2xlUmVxdWVzdCh0b2dnbGVJZCkge1xuICAgICAgICAgICAgICAgIGlmICh0b2dnbGVJZCA9PT0gdGhpcy51bmlxdWVJZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbGxhcHNlZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRVbmlxdWVJZDogZnVuY3Rpb24gc2V0VW5pcXVlSWQoaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXF1ZUlkID0gaWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm90aWZ5T2ZDbGljazogZnVuY3Rpb24gbm90aWZ5T2ZDbGljaygpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51bmlxdWVJZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJGVtaXQoXCJjaGlsZC1jbGlja2VkXCIsIHRoaXMudW5pcXVlSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xsYXBzZTogZnVuY3Rpb24gY29sbGFwc2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVDb2xsYXBzZWQ6IGZ1bmN0aW9uIHRvZ2dsZUNvbGxhcHNlZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb1RoZVNsaWRlOiBmdW5jdGlvbiBkb1RoZVNsaWRlKCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gdGhpcy4kcmVmcy5ib2R5O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDYXJkQ29udGVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzJDEuYWRqdXN0SGVpZ2h0KGVsLCBlbC5zY3JvbGxIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlVXAoZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGp1c3RIZWlnaHQ6IGZ1bmN0aW9uIGFkanVzdEhlaWdodChlbCwgbmV3SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gbmV3SGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNsaWRlVXA6IGZ1bmN0aW9uIHNsaWRlVXAoZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWwuc3R5bGUuaGVpZ2h0ID09PSBcImF1dG9cIikge1xuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSAoZWwuc2Nyb2xsSGVpZ2h0KSArIFwicHhcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gXCIwcHhcIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdXRvSGVpZ2h0U3RhcnQ6IGZ1bmN0aW9uIGF1dG9IZWlnaHRTdGFydChlbCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgcnVubmluZyBpbnRlcnZhbFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9IZWlnaHRJbnRlcnZhbCkgeyB0aGlzLmF1dG9IZWlnaHRTdG9wKCk7IH1cbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9IZWlnaHRJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGhlaWdodCBmb3IgY29tcGFyaXNvbiB0byBzY3JvbGxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3R1YWxIZWlnaHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMkMS4kcmVmcy5ib2R5Q29udGVudC5zY3JvbGxIZWlnaHQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMkMS4kcmVmcy5ib2R5Rm9vdGVyLnNjcm9sbEhlaWdodCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5oZWlnaHQgIT09IFwiMHB4XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxIZWlnaHQgIT09IGVsLnN0eWxlLmhlaWdodCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMkMS5pc09wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMkMS5hZGp1c3RIZWlnaHQoZWwsIGFjdHVhbEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMkMS5hdXRvSGVpZ2h0U3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdXRvSGVpZ2h0U3RvcDogZnVuY3Rpb24gYXV0b0hlaWdodFN0b3AoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9IZWlnaHRJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvSGVpZ2h0SW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qIHNjcmlwdCAqL1xuICAgICAgICAgICAgICAgIHZhciBfX3Z1ZV9zY3JpcHRfXyQyID0gc2NyaXB0JDI7XG4gICAgICAgICAgICAgICAgXG4gICAgLyogdGVtcGxhdGUgKi9cbiAgICB2YXIgX192dWVfcmVuZGVyX18kMiA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse2NsYXNzOl92bS5jYXJkX2NsYXNzZXN9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjYXJkLWhlYWRlclwiLG9uOntcImNsaWNrXCI6X3ZtLm5vdGlmeU9mQ2xpY2t9fSxbX2MoJ3AnLHtzdGF0aWNDbGFzczpcImNhcmQtaGVhZGVyLXRpdGxlXCJ9LFtfdm0uX3QoXCJ0aXRsZVwiKV0sMiksX3ZtLl92KFwiIFwiKSxfYygncCcse3N0YXRpY0NsYXNzOlwiY2FyZC1oZWFkZXItaWNvblwifSxbKCFfdm0udXNpbmdDdXN0b21JY29uKT9fYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiaWNvblwifSxbKF92bS5zaG93Q2FyZXQpP19jKCdzdmcnLHtjbGFzczpfdm0uZHJvcGRvd25JY29uQ2xhc3NlcyxzdHlsZTooX3ZtLmljb25TdHlsZSksYXR0cnM6e1widmVyc2lvblwiOlwiMS4xXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMTI5IDEyOVwiLFwiZW5hYmxlLWJhY2tncm91bmRcIjpcIm5ldyAwIDAgMTI5IDEyOVwifX0sW19jKCdnJyxbX2MoJ3BhdGgnLHthdHRyczp7XCJkXCI6XCJtMTIxLjMsMzQuNmMtMS42LTEuNi00LjItMS42LTUuOCwwbC01MSw1MS4xLTUxLjEtNTEuMWMtMS42LTEuNi00LjItMS42LTUuOCwwLTEuNiwxLjYtMS42LDQuMiAwLDUuOGw1My45LDUzLjljMC44LDAuOCAxLjgsMS4yIDIuOSwxLjIgMSwwIDIuMS0wLjQgMi45LTEuMmw1My45LTUzLjljMS43LTEuNiAxLjctNC4yIDAuMS01Ljh6XCJ9fSldKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKF92bS5zaG93UGx1cyB8fCBfdm0uc2hvd01pbnVzKT9fYygnUGx1c01pbnVzJyx7YXR0cnM6e1wibWludXNcIjpfdm0uc2hvd01pbnVzfX0pOl92bS5fZSgpXSwxKTpfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiaWNvblwifSxbX3ZtLl90KFwiaWNvblwiKSxfdm0uX3YoXCIgXCIpLChfdm0uaXNPcGVuKT9fdm0uX3QoXCJpY29uLW9wZW5cIik6X3ZtLl90KFwiaWNvbi1jbG9zZWRcIildLDIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtyZWY6XCJib2R5XCIsc3RhdGljQ2xhc3M6XCJhY2NvcmRpb24tYm9keVwiLHN0eWxlOihfdm0uc2xpZGVTdHlsZSl9LFtfYygnZGl2Jyx7cmVmOlwiYm9keUNvbnRlbnRcIixjbGFzczpfdm0uY2FyZF9jb250ZW50X2NsYXNzZXN9LFtfdm0uX3QoXCJjb250ZW50XCIpXSwyKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtyZWY6XCJib2R5Rm9vdGVyXCIsY2xhc3M6X3ZtLmZvb3RlckNsYXNzZXN9LFtfdm0uX3QoXCJmb290ZXJcIildLDIpXSldKX07XG4gICAgdmFyIF9fdnVlX3N0YXRpY1JlbmRlckZuc19fJDIgPSBbXTtcblxuICAgICAgLyogc3R5bGUgKi9cbiAgICAgIHZhciBfX3Z1ZV9pbmplY3Rfc3R5bGVzX18kMiA9IGZ1bmN0aW9uIChpbmplY3QpIHtcbiAgICAgICAgaWYgKCFpbmplY3QpIHsgcmV0dXJuIH1cbiAgICAgICAgaW5qZWN0KFwiZGF0YS12LWJjN2Q5YTY4XzBcIiwgeyBzb3VyY2U6IFwiLmFjY29yZGlvbi1ib2R5W2RhdGEtdi1iYzdkOWE2OF17aGVpZ2h0OjA7b3ZlcmZsb3c6aGlkZGVufS5jYXJldC1kb3duW2RhdGEtdi1iYzdkOWE2OF17dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5oZWFkZXItaWNvbltkYXRhLXYtYmM3ZDlhNjhde3dpZHRoOjEwMCV9XCIsIG1hcDogdW5kZWZpbmVkLCBtZWRpYTogdW5kZWZpbmVkIH0pO1xuXG4gICAgICB9O1xuICAgICAgLyogc2NvcGVkICovXG4gICAgICB2YXIgX192dWVfc2NvcGVfaWRfXyQyID0gXCJkYXRhLXYtYmM3ZDlhNjhcIjtcbiAgICAgIC8qIG1vZHVsZSBpZGVudGlmaWVyICovXG4gICAgICB2YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyQyID0gdW5kZWZpbmVkO1xuICAgICAgLyogZnVuY3Rpb25hbCB0ZW1wbGF0ZSAqL1xuICAgICAgdmFyIF9fdnVlX2lzX2Z1bmN0aW9uYWxfdGVtcGxhdGVfXyQyID0gZmFsc2U7XG4gICAgICAvKiBjb21wb25lbnQgbm9ybWFsaXplciAqL1xuICAgICAgZnVuY3Rpb24gX192dWVfbm9ybWFsaXplX18kMihcbiAgICAgICAgdGVtcGxhdGUsIHN0eWxlLCBzY3JpcHQsXG4gICAgICAgIHNjb3BlLCBmdW5jdGlvbmFsLCBtb2R1bGVJZGVudGlmaWVyLFxuICAgICAgICBjcmVhdGVJbmplY3RvciwgY3JlYXRlSW5qZWN0b3JTU1JcbiAgICAgICkge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gKHR5cGVvZiBzY3JpcHQgPT09ICdmdW5jdGlvbicgPyBzY3JpcHQub3B0aW9ucyA6IHNjcmlwdCkgfHwge307XG5cbiAgICAgICAgLy8gRm9yIHNlY3VyaXR5IGNvbmNlcm5zLCB3ZSB1c2Ugb25seSBiYXNlIG5hbWUgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgICBjb21wb25lbnQuX19maWxlID0gXCJCdWxtYUFjY29yZGlvbkl0ZW0udnVlXCI7XG5cbiAgICAgICAgaWYgKCFjb21wb25lbnQucmVuZGVyKSB7XG4gICAgICAgICAgY29tcG9uZW50LnJlbmRlciA9IHRlbXBsYXRlLnJlbmRlcjtcbiAgICAgICAgICBjb21wb25lbnQuc3RhdGljUmVuZGVyRm5zID0gdGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICAgICAgICAgIGNvbXBvbmVudC5fY29tcGlsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKGZ1bmN0aW9uYWwpIHsgY29tcG9uZW50LmZ1bmN0aW9uYWwgPSB0cnVlOyB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnQuX3Njb3BlSWQgPSBzY29wZTtcblxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGhvb2s7XG4gICAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICBob29rID0gZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICAgICAgICBzdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGhvb2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5mdW5jdGlvbmFsKSB7XG4gICAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBjb21wb25lbnQucmVuZGVyO1xuICAgICAgICAgICAgICBjb21wb25lbnQucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBob29rLmNhbGwoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgICAgICAgICB2YXIgZXhpc3RpbmcgPSBjb21wb25lbnQuYmVmb3JlQ3JlYXRlO1xuICAgICAgICAgICAgICBjb21wb25lbnQuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRcbiAgICAgIH1cbiAgICAgIC8qIHN0eWxlIGluamVjdCAqL1xuICAgICAgZnVuY3Rpb24gX192dWVfY3JlYXRlX2luamVjdG9yX18kMSgpIHtcbiAgICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIHZhciBzdHlsZXMgPSBfX3Z1ZV9jcmVhdGVfaW5qZWN0b3JfXyQxLnN0eWxlcyB8fCAoX192dWVfY3JlYXRlX2luamVjdG9yX18kMS5zdHlsZXMgPSB7fSk7XG4gICAgICAgIHZhciBpc09sZElFID1cbiAgICAgICAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgIC9tc2llIFs2LTldXFxcXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYWRkU3R5bGUoaWQsIGNzcykge1xuICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLXZ1ZS1zc3ItaWR+PVwiJyArIGlkICsgJ1wiXScpKSB7IHJldHVybiB9IC8vIFNTUiBzdHlsZXMgYXJlIHByZXNlbnQuXG5cbiAgICAgICAgICB2YXIgZ3JvdXAgPSBpc09sZElFID8gY3NzLm1lZGlhIHx8ICdkZWZhdWx0JyA6IGlkO1xuICAgICAgICAgIHZhciBzdHlsZSA9IHN0eWxlc1tncm91cF0gfHwgKHN0eWxlc1tncm91cF0gPSB7IGlkczogW10sIHBhcnRzOiBbXSwgZWxlbWVudDogdW5kZWZpbmVkIH0pO1xuXG4gICAgICAgICAgaWYgKCFzdHlsZS5pZHMuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICB2YXIgY29kZSA9IGNzcy5zb3VyY2U7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBzdHlsZS5pZHMubGVuZ3RoO1xuXG4gICAgICAgICAgICBzdHlsZS5pZHMucHVzaChpZCk7XG5cbiAgICAgICAgICAgIGlmIChjc3MubWFwKSB7XG4gICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgICAgICAgICAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgICAgICAgICAgIGNvZGUgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIGNzcy5tYXAuc291cmNlc1swXSArICcgKi8nO1xuICAgICAgICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgICAgICAgICAgICBjb2RlICs9XG4gICAgICAgICAgICAgICAgJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArXG4gICAgICAgICAgICAgICAgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzLm1hcCkpKSkgK1xuICAgICAgICAgICAgICAgICcgKi8nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNPbGRJRSkge1xuICAgICAgICAgICAgICBzdHlsZS5lbGVtZW50ID0gc3R5bGUuZWxlbWVudCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLWdyb3VwPScgKyBncm91cCArICddJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc3R5bGUuZWxlbWVudCkge1xuICAgICAgICAgICAgICB2YXIgZWwgPSBzdHlsZS5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgZWwudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgICAgICAgICAgICAgaWYgKGNzcy5tZWRpYSkgeyBlbC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgY3NzLm1lZGlhKTsgfVxuICAgICAgICAgICAgICBpZiAoaXNPbGRJRSkge1xuICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1ncm91cCcsIGdyb3VwKTtcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dC1pbmRleCcsICcwJyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzT2xkSUUpIHtcbiAgICAgICAgICAgICAgaW5kZXggPSBwYXJzZUludChzdHlsZS5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1uZXh0LWluZGV4JykpO1xuICAgICAgICAgICAgICBzdHlsZS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1uZXh0LWluZGV4JywgaW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0eWxlLmVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgICAgICAgICAgICBzdHlsZS5wYXJ0cy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgICBzdHlsZS5lbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHN0eWxlLnBhcnRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvZGUpO1xuICAgICAgICAgICAgICB2YXIgbm9kZXMgPSBzdHlsZS5lbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgIGlmIChub2Rlc1tpbmRleF0pIHsgc3R5bGUuZWxlbWVudC5yZW1vdmVDaGlsZChub2Rlc1tpbmRleF0pOyB9XG4gICAgICAgICAgICAgIGlmIChub2Rlcy5sZW5ndGgpIHsgc3R5bGUuZWxlbWVudC5pbnNlcnRCZWZvcmUodGV4dE5vZGUsIG5vZGVzW2luZGV4XSk7IH1cbiAgICAgICAgICAgICAgZWxzZSB7IHN0eWxlLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dE5vZGUpOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKiBzdHlsZSBpbmplY3QgU1NSICovXG4gICAgICBcblxuICAgICAgXG4gICAgICB2YXIgQnVsbWFBY2NvcmRpb25JdGVtID0gX192dWVfbm9ybWFsaXplX18kMihcbiAgICAgICAgeyByZW5kZXI6IF9fdnVlX3JlbmRlcl9fJDIsIHN0YXRpY1JlbmRlckZuczogX192dWVfc3RhdGljUmVuZGVyRm5zX18kMiB9LFxuICAgICAgICBfX3Z1ZV9pbmplY3Rfc3R5bGVzX18kMixcbiAgICAgICAgX192dWVfc2NyaXB0X18kMixcbiAgICAgICAgX192dWVfc2NvcGVfaWRfXyQyLFxuICAgICAgICBfX3Z1ZV9pc19mdW5jdGlvbmFsX3RlbXBsYXRlX18kMixcbiAgICAgICAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyQyLFxuICAgICAgICBfX3Z1ZV9jcmVhdGVfaW5qZWN0b3JfXyQxLFxuICAgICAgICB1bmRlZmluZWRcbiAgICAgICk7XG5cblxuXG4gICAgdmFyIGNvbXBvbmVudHMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIEJ1bG1hQWNjb3JkaW9uOiBCdWxtYUFjY29yZGlvbixcbiAgICAgICAgQnVsbWFBY2NvcmRpb25JdGVtOiBCdWxtYUFjY29yZGlvbkl0ZW1cbiAgICB9KTtcblxuICAgIC8vIERlY2xhcmUgaW5zdGFsbCBmdW5jdGlvbiBleGVjdXRlZCBieSBWdWUudXNlKClcbiAgICBmdW5jdGlvbiBpbnN0YWxsKFZ1ZSkge1xuICAgICAgICBpZiAoaW5zdGFsbC5pbnN0YWxsZWQpIHsgcmV0dXJuIH1cbiAgICAgICAgaW5zdGFsbC5pbnN0YWxsZWQgPSB0cnVlO1xuICAgICAgICBPYmplY3Qua2V5cyhjb21wb25lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb25lbnROYW1lKSB7XG4gICAgICAgICAgICBWdWUuY29tcG9uZW50KGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudHNbY29tcG9uZW50TmFtZV0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgcGx1Z2luID0ge1xuICAgICAgICBpbnN0YWxsOiBpbnN0YWxsXG4gICAgfTtcblxuICAgIHZhciBHbG9iYWxWdWUgPSBudWxsO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBHbG9iYWxWdWUgPSB3aW5kb3cuVnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgR2xvYmFsVnVlID0gZ2xvYmFsLlZ1ZTtcbiAgICB9XG4gICAgaWYgKEdsb2JhbFZ1ZSkge1xuICAgICAgICBHbG9iYWxWdWUudXNlKHBsdWdpbik7XG4gICAgfVxuXG4gICAgdmFyIEJ1bG1hQWNjb3JkaW9uJDEgPSBCdWxtYUFjY29yZGlvbjtcbiAgICB2YXIgQnVsbWFBY2NvcmRpb25JdGVtJDEgPSBCdWxtYUFjY29yZGlvbkl0ZW07XG5cbiAgICBleHBvcnRzLmluc3RhbGwgPSBpbnN0YWxsO1xuICAgIGV4cG9ydHMuQnVsbWFBY2NvcmRpb24gPSBCdWxtYUFjY29yZGlvbiQxO1xuICAgIGV4cG9ydHMuQnVsbWFBY2NvcmRpb25JdGVtID0gQnVsbWFBY2NvcmRpb25JdGVtJDE7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSk7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXhhbXBsZVwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5tc2cpKV0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwidnVlLW93bC1jYXJvdXNlbFwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHNbXCJ2dWUtb3dsLWNhcm91c2VsXCJdPXQoKTplW1widnVlLW93bC1jYXJvdXNlbFwiXT10KCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChpKXtpZihuW2ldKXJldHVybiBuW2ldLmV4cG9ydHM7dmFyIHI9bltpXT17ZXhwb3J0czp7fSxpZDppLGxvYWRlZDohMX07cmV0dXJuIGVbaV0uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsdCksci5sb2FkZWQ9ITAsci5leHBvcnRzfXZhciBuPXt9O3JldHVybiB0Lm09ZSx0LmM9bix0LnA9XCJcIix0KDApfShbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPW4oMSkobigyKSxuKDE1KSxudWxsLG51bGwpO2UuZXhwb3J0cz1pLmV4cG9ydHN9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCxuLGkpe3ZhciByLG89ZT1lfHx7fSxzPXR5cGVvZiBlW1wiZGVmYXVsdFwiXTtcIm9iamVjdFwiIT09cyYmXCJmdW5jdGlvblwiIT09c3x8KHI9ZSxvPWVbXCJkZWZhdWx0XCJdKTt2YXIgYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBvP28ub3B0aW9uczpvO2lmKHQmJihhLnJlbmRlcj10LnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz10LnN0YXRpY1JlbmRlckZucyksbiYmKGEuX3Njb3BlSWQ9biksaSl7dmFyIGw9T2JqZWN0LmNyZWF0ZShhLmNvbXB1dGVkfHxudWxsKTtPYmplY3Qua2V5cyhpKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PWlbZV07bFtlXT1mdW5jdGlvbigpe3JldHVybiB0fX0pLGEuY29tcHV0ZWQ9bH1yZXR1cm57ZXNNb2R1bGU6cixleHBvcnRzOm8sb3B0aW9uczphfX19LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaShlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG4oNCksbigxMSksbigxMyk7dmFyIHI9bigxNCksbz1pKHIpO3RbXCJkZWZhdWx0XCJdPXtuYW1lOlwiVk93bENhcm91c2VsXCIscHJvcHM6e2l0ZW1zOnt0eXBlOk51bWJlcixcImRlZmF1bHRcIjozfSxtYXJnaW46e3R5cGU6TnVtYmVyLFwiZGVmYXVsdFwiOjB9LGxvb3A6e3R5cGU6Qm9vbGVhbixcImRlZmF1bHRcIjohMX0sY2VudGVyOnt0eXBlOkJvb2xlYW4sXCJkZWZhdWx0XCI6ITF9LG1vdXNlRHJhZzp7dHlwZTpCb29sZWFuLFwiZGVmYXVsdFwiOiEwfSx0b3VjaERyYWc6e3R5cGU6Qm9vbGVhbixcImRlZmF1bHRcIjohMH0scHVsbERyYWc6e3R5cGU6Qm9vbGVhbixcImRlZmF1bHRcIjohMH0sZnJlZURyYWc6e3R5cGU6Qm9vbGVhbixcImRlZmF1bHRcIjohMX0sc3RhZ2VQYWRkaW5nOnt0eXBlOk51bWJlcixcImRlZmF1bHRcIjowfSxtZXJnZTp7dHlwZTpCb29sZWFuLFwiZGVmYXVsdFwiOiExfSxtZXJnZUZpdDp7dHlwZTpCb29sZWFuLFwiZGVmYXVsdFwiOiExfSxhdXRvV2lkdGg6e3R5cGU6Qm9vbGVhbixcImRlZmF1bHRcIjohMX0sc3RhcnRQb3NpdGlvbjp7dHlwZTpOdW1iZXIsXCJkZWZhdWx0XCI6MH0sdVJMaGFzaExpc3RlbmVyOnt0eXBlOkJvb2xlYW4sXCJkZWZhdWx0XCI6ITF9LG5hdjp7dHlwZTpCb29sZWFuLFwiZGVmYXVsdFwiOiEwfSxyZXdpbmQ6e3R5cGU6Qm9vbGVhbixcImRlZmF1bHRcIjohMH0sbmF2VGV4dDp7dHlwZTpBcnJheSxcImRlZmF1bHRcIjpmdW5jdGlvbigpe3JldHVybltcIm5leHRcIixcInByZXZcIl19fSxuYXZFbGVtZW50Ont0eXBlOlN0cmluZyxcImRlZmF1bHRcIjpcImRpdlwifSxzbGlkZUJ5Ont0eXBlOltOdW1iZXIsU3RyaW5nXSxcImRlZmF1bHRcIjoxfSxzbGlkZVRyYW5zaXRpb246e3R5cGU6U3RyaW5nLFwiZGVmYXVsdFwiOlwiXCJ9LGRvdHM6e3R5cGU6Qm9vbGVhbixcImRlZmF1bHRcIjohMH0sZG90c0VhY2g6e3R5cGU6W051bWJlcixCb29sZWFuXSxcImRlZmF1bHRcIjohMX0sZG90c0RhdGE6e3R5cGU6Qm9vbGVhbixcImRlZmF1bHRcIjohMX0sbGF6eUxvYWQ6e3R5cGU6Qm9vbGVhbixcImRlZmF1bHRcIjohMX0sbGF6eUxvYWRFYWdlcjp7dHlwZTpOdW1iZXIsXCJkZWZhdWx0XCI6MH0sYXV0b3BsYXk6e3R5cGU6Qm9vbGVhbixcImRlZmF1bHRcIjohMX0sYXV0b3BsYXlTcGVlZDp7dHlwZTpCb29sZWFuLFwiZGVmYXVsdFwiOiExfSxhdXRvcGxheVRpbWVvdXQ6e3R5cGU6TnVtYmVyLFwiZGVmYXVsdFwiOjVlM30sYXV0b3BsYXlIb3ZlclBhdXNlOnt0eXBlOkJvb2xlYW4sXCJkZWZhdWx0XCI6ITF9LHNtYXJ0U3BlZWQ6e3R5cGU6TnVtYmVyLFwiZGVmYXVsdFwiOjI1MH0sZmx1aWRTcGVlZDp7dHlwZTpbTnVtYmVyLEJvb2xlYW5dLFwiZGVmYXVsdFwiOiExfSxuYXZTcGVlZDp7dHlwZTpbTnVtYmVyLEJvb2xlYW5dLFwiZGVmYXVsdFwiOiExfSxkcmFnRW5kU3BlZWQ6e3R5cGU6W051bWJlcixCb29sZWFuXSxcImRlZmF1bHRcIjohMX0sY2FsbGJhY2tzOnt0eXBlOkJvb2xlYW4sXCJkZWZhdWx0XCI6ITB9LHJlc3BvbnNpdmU6e3R5cGU6T2JqZWN0LFwiZGVmYXVsdFwiOmZ1bmN0aW9uKCl7fX0scmVzcG9uc2l2ZVJlZnJlc2hSYXRlOnt0eXBlOk51bWJlcixcImRlZmF1bHRcIjoyMDB9LHZpZGVvOnt0eXBlOkJvb2xlYW4sXCJkZWZhdWx0XCI6ITF9LHZpZGVvSGVpZ2h0Ont0eXBlOltOdW1iZXIsQm9vbGVhbl0sXCJkZWZhdWx0XCI6ITF9LHZpZGVvV2lkdGg6e3R5cGU6W051bWJlcixCb29sZWFuXSxcImRlZmF1bHRcIjohMX0sYW5pbWF0ZU91dDp7dHlwZTpbU3RyaW5nLEJvb2xlYW5dLFwiZGVmYXVsdFwiOiExfSxhbmltYXRlSW46e3R5cGU6W1N0cmluZyxCb29sZWFuXSxcImRlZmF1bHRcIjohMX0sZmFsbGJhY2tFYXNpbmc6e3R5cGU6U3RyaW5nLFwiZGVmYXVsdFwiOlwic3dpbmdcIn0saW5mbzp7dHlwZTpGdW5jdGlvbixcImRlZmF1bHRcIjpmdW5jdGlvbigpe319LGl0ZW1FbGVtZW50Ont0eXBlOlN0cmluZyxcImRlZmF1bHRcIjpcImRpdlwifSxzdGFnZUVsZW1lbnQ6e3R5cGU6U3RyaW5nLFwiZGVmYXVsdFwiOlwiZGl2XCJ9LG5hdkNvbnRhaW5lcjp7dHlwZTpbU3RyaW5nLEJvb2xlYW5dLFwiZGVmYXVsdFwiOiExfSxkb3RzQ29udGFpbmVyOnt0eXBlOltTdHJpbmcsQm9vbGVhbl0sXCJkZWZhdWx0XCI6ITF9LGNoZWNrVmlzaWJsZTp7dHlwZTpCb29sZWFuLFwiZGVmYXVsdFwiOiEwfX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntzaG93UHJldjohMSxzaG93TmV4dDohMCxwcmV2SGFuZGxlcjpcImNhcm91c2VsX3ByZXZfXCIrdGhpcy5nZW5lcmF0ZVVuaXF1ZUlkKCksZWxlbWVudEhhbmRsZTpcImNhcm91c2VsX1wiK3RoaXMuZ2VuZXJhdGVVbmlxdWVJZCgpLG5leHRIYW5kbGVyOlwiY2Fyb3VzZWxfbmV4dF9cIit0aGlzLmdlbmVyYXRlVW5pcXVlSWQoKX19LG1vdW50ZWQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLG49ZShcIiNcIit0aGlzLmVsZW1lbnRIYW5kbGUpLm93bENhcm91c2VsKHtpdGVtczp0aGlzLml0ZW1zLG1hcmdpbjp0aGlzLm1hcmdpbixsb29wOnRoaXMubG9vcCxjZW50ZXI6dGhpcy5jZW50ZXIsbW91c2VEcmFnOnRoaXMubW91c2VEcmFnLHRvdWNoRHJhZzp0aGlzLnRvdWNoRHJhZyxwdWxsRHJhZzp0aGlzLnB1bGxEcmFnLGZyZWVEcmFnOnRoaXMuZnJlZURyYWcsc3RhZ2VQYWRkaW5nOnRoaXMuc3RhZ2VQYWRkaW5nLG1lcmdlOnRoaXMubWVyZ2UsbWVyZ2VGaXQ6dGhpcy5tZXJnZUZpdCxhdXRvV2lkdGg6dGhpcy5hdXRvV2lkdGgsc3RhcnRQb3NpdGlvbjp0aGlzLnN0YXJ0UG9zaXRpb24sdVJMaGFzaExpc3RlbmVyOnRoaXMudVJMaGFzaExpc3RlbmVyLG5hdjp0aGlzLm5hdixyZXdpbmQ6dGhpcy5yZXdpbmQsbmF2VGV4dDp0aGlzLm5hdlRleHQsbmF2RWxlbWVudDp0aGlzLm5hdkVsZW1lbnQsc2xpZGVCeTp0aGlzLnNsaWRlQnksc2xpZGVUcmFuc2l0aW9uOnRoaXMuc2xpZGVUcmFuc2l0aW9uLGRvdHM6dGhpcy5kb3RzLGRvdHNFYWNoOnRoaXMuZG90c0VhY2gsZG90c0RhdGE6dGhpcy5kb3RzRGF0YSxsYXp5TG9hZDp0aGlzLmxhenlMb2FkLGxhenlMb2FkRWFnZXI6dGhpcy5sYXp5TG9hZEVhZ2VyLGF1dG9wbGF5OnRoaXMuYXV0b3BsYXksYXV0b3BsYXlTcGVlZDp0aGlzLmF1dG9wbGF5U3BlZWQsYXV0b3BsYXlUaW1lb3V0OnRoaXMuYXV0b3BsYXlUaW1lb3V0LGF1dG9wbGF5SG92ZXJQYXVzZTp0aGlzLmF1dG9wbGF5SG92ZXJQYXVzZSxzbWFydFNwZWVkOnRoaXMuc21hcnRTcGVlZCxmbHVpZFNwZWVkOnRoaXMuZmx1aWRTcGVlZCxuYXZTcGVlZDp0aGlzLm5hdlNwZWVkLGRyYWdFbmRTcGVlZDp0aGlzLmRyYWdFbmRTcGVlZCxjYWxsYmFja3M6dGhpcy5jYWxsYmFja3MscmVzcG9uc2l2ZTp0aGlzLnJlc3BvbnNpdmUscmVzcG9uc2l2ZVJlZnJlc2hSYXRlOnRoaXMucmVzcG9uc2l2ZVJlZnJlc2hSYXRlLHZpZGVvOnRoaXMudmlkZW8sdmlkZW9IZWlnaHQ6dGhpcy52aWRlb0hlaWdodCx2aWRlb1dpZHRoOnRoaXMudmlkZW9XaWR0aCxhbmltYXRlT3V0OnRoaXMuYW5pbWF0ZU91dCxhbmltYXRlSW46dGhpcy5hbmltYXRlSW4sZmFsbGJhY2tFYXNpbmc6dGhpcy5mYWxsYmFja0Vhc2luZyxpbmZvOnRoaXMuaW5mbyxpdGVtRWxlbWVudDp0aGlzLml0ZW1FbGVtZW50LHN0YWdlRWxlbWVudDp0aGlzLnN0YWdlRWxlbWVudCxuYXZDb250YWluZXI6dGhpcy5uYXZDb250YWluZXIsZG90c0NvbnRhaW5lcjp0aGlzLmRvdHNDb250YWluZXIsY2hlY2tWaXNpYmxlOnRoaXMuY2hlY2tWaXNpYmxlfSk7ZShcIiNcIit0aGlzLnByZXZIYW5kbGVyKS5jbGljayhmdW5jdGlvbigpe24udHJpZ2dlcihcInByZXYub3dsLmNhcm91c2VsXCIpfSksZShcIiNcIit0aGlzLm5leHRIYW5kbGVyKS5jbGljayhmdW5jdGlvbigpe24udHJpZ2dlcihcIm5leHQub3dsLmNhcm91c2VsXCIpfSksb1tcImRlZmF1bHRcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtuLm9uKGUrXCIub3dsLmNhcm91c2VsXCIsZnVuY3Rpb24obil7dC4kZW1pdChlLG4pfSl9KSx0aGlzLmxvb3B8fG4ub24oXCJjaGFuZ2VkLm93bC5jYXJvdXNlbFwiLGZ1bmN0aW9uKGUpe2lmKDA9PT1lLml0ZW0uaW5kZXgpdC5zaG93UHJldj0hMSx0LnNob3dOZXh0PSEwO2Vsc2V7dmFyIG49TWF0aC5mbG9vcihlLml0ZW0uaW5kZXgrZS5wYWdlLnNpemUpO249PT1lLml0ZW0uY291bnQ/KHQuc2hvd1ByZXY9ITAsdC5zaG93TmV4dD0hMSk6KHQuc2hvd1ByZXY9ITAsdC5zaG93TmV4dD0hMCl9fSl9LG1ldGhvZHM6e2dlbmVyYXRlVW5pcXVlSWQ6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsMTUpfX19fSkuY2FsbCh0LG4oMykpfSxmdW5jdGlvbihlLHQsbil7dmFyIGkscjsvKiFcblx0ICogalF1ZXJ5IEphdmFTY3JpcHQgTGlicmFyeSB2My4zLjFcblx0ICogaHR0cHM6Ly9qcXVlcnkuY29tL1xuXHQgKlxuXHQgKiBJbmNsdWRlcyBTaXp6bGUuanNcblx0ICogaHR0cHM6Ly9zaXp6bGVqcy5jb20vXG5cdCAqXG5cdCAqIENvcHlyaWdodCBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcblx0ICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG5cdCAqIGh0dHBzOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG5cdCAqXG5cdCAqIERhdGU6IDIwMTgtMDEtMjBUMTc6MjRaXG5cdCAqL1xuIWZ1bmN0aW9uKHQsbil7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlLmV4cG9ydHM/ZS5leHBvcnRzPXQuZG9jdW1lbnQ/bih0LCEwKTpmdW5jdGlvbihlKXtpZighZS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBuKGUpfTpuKHQpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKG4sbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyhlLHQsbil7dD10fHxjZTt2YXIgaSxyPXQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZihyLnRleHQ9ZSxuKWZvcihpIGluIFRlKW5baV0mJihyW2ldPW5baV0pO3QuaGVhZC5hcHBlbmRDaGlsZChyKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpfWZ1bmN0aW9uIGEoZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP21lW3ZlLmNhbGwoZSldfHxcIm9iamVjdFwiOnR5cGVvZiBlfWZ1bmN0aW9uIGwoZSl7dmFyIHQ9ISFlJiZcImxlbmd0aFwiaW4gZSYmZS5sZW5ndGgsbj1hKGUpO3JldHVybiFfZShlKSYmIUNlKGUpJiYoXCJhcnJheVwiPT09bnx8MD09PXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0PjAmJnQtMSBpbiBlKX1mdW5jdGlvbiB1KGUsdCl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXQudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBjKGUsdCxuKXtyZXR1cm4gX2UodCk/a2UuZ3JlcChlLGZ1bmN0aW9uKGUsaSl7cmV0dXJuISF0LmNhbGwoZSxpLGUpIT09bn0pOnQubm9kZVR5cGU/a2UuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiBlPT09dCE9PW59KTpcInN0cmluZ1wiIT10eXBlb2YgdD9rZS5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIGdlLmNhbGwodCxlKT4tMSE9PW59KTprZS5maWx0ZXIodCxlLG4pfWZ1bmN0aW9uIGgoZSx0KXtmb3IoOyhlPWVbdF0pJiYxIT09ZS5ub2RlVHlwZTspO3JldHVybiBlfWZ1bmN0aW9uIHAoZSl7dmFyIHQ9e307cmV0dXJuIGtlLmVhY2goZS5tYXRjaChxZSl8fFtdLGZ1bmN0aW9uKGUsbil7dFtuXT0hMH0pLHR9ZnVuY3Rpb24gZChlKXtyZXR1cm4gZX1mdW5jdGlvbiBmKGUpe3Rocm93IGV9ZnVuY3Rpb24gZyhlLHQsbixpKXt2YXIgcjt0cnl7ZSYmX2Uocj1lLnByb21pc2UpP3IuY2FsbChlKS5kb25lKHQpLmZhaWwobik6ZSYmX2Uocj1lLnRoZW4pP3IuY2FsbChlLHQsbik6dC5hcHBseSh2b2lkIDAsW2VdLnNsaWNlKGkpKX1jYXRjaChlKXtuLmFwcGx5KHZvaWQgMCxbZV0pfX1mdW5jdGlvbiBtKCl7Y2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixtKSxuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsbSksa2UucmVhZHkoKX1mdW5jdGlvbiB2KGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX1mdW5jdGlvbiB5KGUpe3JldHVybiBlLnJlcGxhY2UoQmUsXCJtcy1cIikucmVwbGFjZShXZSx2KX1mdW5jdGlvbiB3KCl7dGhpcy5leHBhbmRvPWtlLmV4cGFuZG8rdy51aWQrK31mdW5jdGlvbiB4KGUpe3JldHVyblwidHJ1ZVwiPT09ZXx8XCJmYWxzZVwiIT09ZSYmKFwibnVsbFwiPT09ZT9udWxsOmU9PT0rZStcIlwiPytlOlhlLnRlc3QoZSk/SlNPTi5wYXJzZShlKTplKX1mdW5jdGlvbiBiKGUsdCxuKXt2YXIgaTtpZih2b2lkIDA9PT1uJiYxPT09ZS5ub2RlVHlwZSlpZihpPVwiZGF0YS1cIit0LnJlcGxhY2UoWWUsXCItJCZcIikudG9Mb3dlckNhc2UoKSxuPWUuZ2V0QXR0cmlidXRlKGkpLFwic3RyaW5nXCI9PXR5cGVvZiBuKXt0cnl7bj14KG4pfWNhdGNoKHIpe31WZS5zZXQoZSx0LG4pfWVsc2Ugbj12b2lkIDA7cmV0dXJuIG59ZnVuY3Rpb24gXyhlLHQsbixpKXt2YXIgcixvLHM9MjAsYT1pP2Z1bmN0aW9uKCl7cmV0dXJuIGkuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIGtlLmNzcyhlLHQsXCJcIil9LGw9YSgpLHU9biYmblszXXx8KGtlLmNzc051bWJlclt0XT9cIlwiOlwicHhcIiksYz0oa2UuY3NzTnVtYmVyW3RdfHxcInB4XCIhPT11JiYrbCkmJlplLmV4ZWMoa2UuY3NzKGUsdCkpO2lmKGMmJmNbM10hPT11KXtmb3IobC89Mix1PXV8fGNbM10sYz0rbHx8MTtzLS07KWtlLnN0eWxlKGUsdCxjK3UpLCgxLW8pKigxLShvPWEoKS9sfHwuNSkpPD0wJiYocz0wKSxjLz1vO2M9MipjLGtlLnN0eWxlKGUsdCxjK3UpLG49bnx8W119cmV0dXJuIG4mJihjPStjfHwrbHx8MCxyPW5bMV0/YysoblsxXSsxKSpuWzJdOituWzJdLGkmJihpLnVuaXQ9dSxpLnN0YXJ0PWMsaS5lbmQ9cikpLHJ9ZnVuY3Rpb24gQyhlKXt2YXIgdCxuPWUub3duZXJEb2N1bWVudCxpPWUubm9kZU5hbWUscj1ldFtpXTtyZXR1cm4gcj9yOih0PW4uYm9keS5hcHBlbmRDaGlsZChuLmNyZWF0ZUVsZW1lbnQoaSkpLHI9a2UuY3NzKHQsXCJkaXNwbGF5XCIpLHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSxcIm5vbmVcIj09PXImJihyPVwiYmxvY2tcIiksZXRbaV09cixyKX1mdW5jdGlvbiBUKGUsdCl7Zm9yKHZhciBuLGkscj1bXSxvPTAscz1lLmxlbmd0aDtvPHM7bysrKWk9ZVtvXSxpLnN0eWxlJiYobj1pLnN0eWxlLmRpc3BsYXksdD8oXCJub25lXCI9PT1uJiYocltvXT1VZS5nZXQoaSxcImRpc3BsYXlcIil8fG51bGwscltvXXx8KGkuc3R5bGUuZGlzcGxheT1cIlwiKSksXCJcIj09PWkuc3R5bGUuZGlzcGxheSYmUWUoaSkmJihyW29dPUMoaSkpKTpcIm5vbmVcIiE9PW4mJihyW29dPVwibm9uZVwiLFVlLnNldChpLFwiZGlzcGxheVwiLG4pKSk7Zm9yKG89MDtvPHM7bysrKW51bGwhPXJbb10mJihlW29dLnN0eWxlLmRpc3BsYXk9cltvXSk7cmV0dXJuIGV9ZnVuY3Rpb24gRShlLHQpe3ZhciBuO3JldHVybiBuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lP2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUodHx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGw/ZS5xdWVyeVNlbGVjdG9yQWxsKHR8fFwiKlwiKTpbXSx2b2lkIDA9PT10fHx0JiZ1KGUsdCk/a2UubWVyZ2UoW2VdLG4pOm59ZnVuY3Rpb24gayhlLHQpe2Zvcih2YXIgbj0wLGk9ZS5sZW5ndGg7bjxpO24rKylVZS5zZXQoZVtuXSxcImdsb2JhbEV2YWxcIiwhdHx8VWUuZ2V0KHRbbl0sXCJnbG9iYWxFdmFsXCIpKX1mdW5jdGlvbiBTKGUsdCxuLGkscil7Zm9yKHZhciBvLHMsbCx1LGMsaCxwPXQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGQ9W10sZj0wLGc9ZS5sZW5ndGg7ZjxnO2YrKylpZihvPWVbZl0sb3x8MD09PW8paWYoXCJvYmplY3RcIj09PWEobykpa2UubWVyZ2UoZCxvLm5vZGVUeXBlP1tvXTpvKTtlbHNlIGlmKG90LnRlc3Qobykpe2ZvcihzPXN8fHAuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxsPShudC5leGVjKG8pfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSx1PXJ0W2xdfHxydC5fZGVmYXVsdCxzLmlubmVySFRNTD11WzFdK2tlLmh0bWxQcmVmaWx0ZXIobykrdVsyXSxoPXVbMF07aC0tOylzPXMubGFzdENoaWxkO2tlLm1lcmdlKGQscy5jaGlsZE5vZGVzKSxzPXAuZmlyc3RDaGlsZCxzLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBkLnB1c2godC5jcmVhdGVUZXh0Tm9kZShvKSk7Zm9yKHAudGV4dENvbnRlbnQ9XCJcIixmPTA7bz1kW2YrK107KWlmKGkmJmtlLmluQXJyYXkobyxpKT4tMSlyJiZyLnB1c2gobyk7ZWxzZSBpZihjPWtlLmNvbnRhaW5zKG8ub3duZXJEb2N1bWVudCxvKSxzPUUocC5hcHBlbmRDaGlsZChvKSxcInNjcmlwdFwiKSxjJiZrKHMpLG4pZm9yKGg9MDtvPXNbaCsrXTspaXQudGVzdChvLnR5cGV8fFwiXCIpJiZuLnB1c2gobyk7cmV0dXJuIHB9ZnVuY3Rpb24gRCgpe3JldHVybiEwfWZ1bmN0aW9uIE4oKXtyZXR1cm4hMX1mdW5jdGlvbiBqKCl7dHJ5e3JldHVybiBjZS5hY3RpdmVFbGVtZW50fWNhdGNoKGUpe319ZnVuY3Rpb24gQShlLHQsbixpLHIsbyl7dmFyIHMsYTtpZihcIm9iamVjdFwiPT10eXBlb2YgdCl7XCJzdHJpbmdcIiE9dHlwZW9mIG4mJihpPWl8fG4sbj12b2lkIDApO2ZvcihhIGluIHQpQShlLGEsbixpLHRbYV0sbyk7cmV0dXJuIGV9aWYobnVsbD09aSYmbnVsbD09cj8ocj1uLGk9bj12b2lkIDApOm51bGw9PXImJihcInN0cmluZ1wiPT10eXBlb2Ygbj8ocj1pLGk9dm9pZCAwKToocj1pLGk9bixuPXZvaWQgMCkpLHI9PT0hMSlyPU47ZWxzZSBpZighcilyZXR1cm4gZTtyZXR1cm4gMT09PW8mJihzPXIscj1mdW5jdGlvbihlKXtyZXR1cm4ga2UoKS5vZmYoZSkscy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIuZ3VpZD1zLmd1aWR8fChzLmd1aWQ9a2UuZ3VpZCsrKSksZS5lYWNoKGZ1bmN0aW9uKCl7a2UuZXZlbnQuYWRkKHRoaXMsdCxyLGksbil9KX1mdW5jdGlvbiAkKGUsdCl7cmV0dXJuIHUoZSxcInRhYmxlXCIpJiZ1KDExIT09dC5ub2RlVHlwZT90OnQuZmlyc3RDaGlsZCxcInRyXCIpP2tlKGUpLmNoaWxkcmVuKFwidGJvZHlcIilbMF18fGU6ZX1mdW5jdGlvbiBMKGUpe3JldHVybiBlLnR5cGU9KG51bGwhPT1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2UudHlwZSxlfWZ1bmN0aW9uIHooZSl7cmV0dXJuXCJ0cnVlL1wiPT09KGUudHlwZXx8XCJcIikuc2xpY2UoMCw1KT9lLnR5cGU9ZS50eXBlLnNsaWNlKDUpOmUucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxlfWZ1bmN0aW9uIE8oZSx0KXt2YXIgbixpLHIsbyxzLGEsbCx1O2lmKDE9PT10Lm5vZGVUeXBlKXtpZihVZS5oYXNEYXRhKGUpJiYobz1VZS5hY2Nlc3MoZSkscz1VZS5zZXQodCxvKSx1PW8uZXZlbnRzKSl7ZGVsZXRlIHMuaGFuZGxlLHMuZXZlbnRzPXt9O2ZvcihyIGluIHUpZm9yKG49MCxpPXVbcl0ubGVuZ3RoO248aTtuKyspa2UuZXZlbnQuYWRkKHQscix1W3JdW25dKX1WZS5oYXNEYXRhKGUpJiYoYT1WZS5hY2Nlc3MoZSksbD1rZS5leHRlbmQoe30sYSksVmUuc2V0KHQsbCkpfX1mdW5jdGlvbiBQKGUsdCl7dmFyIG49dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wiaW5wdXRcIj09PW4mJnR0LnRlc3QoZS50eXBlKT90LmNoZWNrZWQ9ZS5jaGVja2VkOlwiaW5wdXRcIiE9PW4mJlwidGV4dGFyZWFcIiE9PW58fCh0LmRlZmF1bHRWYWx1ZT1lLmRlZmF1bHRWYWx1ZSl9ZnVuY3Rpb24gSChlLHQsbixpKXt0PWRlLmFwcGx5KFtdLHQpO3ZhciByLG8sYSxsLHUsYyxoPTAscD1lLmxlbmd0aCxkPXAtMSxmPXRbMF0sZz1fZShmKTtpZihnfHxwPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBmJiYhYmUuY2hlY2tDbG9uZSYmcHQudGVzdChmKSlyZXR1cm4gZS5lYWNoKGZ1bmN0aW9uKHIpe3ZhciBvPWUuZXEocik7ZyYmKHRbMF09Zi5jYWxsKHRoaXMscixvLmh0bWwoKSkpLEgobyx0LG4saSl9KTtpZihwJiYocj1TKHQsZVswXS5vd25lckRvY3VtZW50LCExLGUsaSksbz1yLmZpcnN0Q2hpbGQsMT09PXIuY2hpbGROb2Rlcy5sZW5ndGgmJihyPW8pLG98fGkpKXtmb3IoYT1rZS5tYXAoRShyLFwic2NyaXB0XCIpLEwpLGw9YS5sZW5ndGg7aDxwO2grKyl1PXIsaCE9PWQmJih1PWtlLmNsb25lKHUsITAsITApLGwmJmtlLm1lcmdlKGEsRSh1LFwic2NyaXB0XCIpKSksbi5jYWxsKGVbaF0sdSxoKTtpZihsKWZvcihjPWFbYS5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxrZS5tYXAoYSx6KSxoPTA7aDxsO2grKyl1PWFbaF0saXQudGVzdCh1LnR5cGV8fFwiXCIpJiYhVWUuYWNjZXNzKHUsXCJnbG9iYWxFdmFsXCIpJiZrZS5jb250YWlucyhjLHUpJiYodS5zcmMmJlwibW9kdWxlXCIhPT0odS50eXBlfHxcIlwiKS50b0xvd2VyQ2FzZSgpP2tlLl9ldmFsVXJsJiZrZS5fZXZhbFVybCh1LnNyYyk6cyh1LnRleHRDb250ZW50LnJlcGxhY2UoZHQsXCJcIiksYyx1KSl9cmV0dXJuIGV9ZnVuY3Rpb24gcShlLHQsbil7Zm9yKHZhciBpLHI9dD9rZS5maWx0ZXIodCxlKTplLG89MDtudWxsIT0oaT1yW29dKTtvKyspbnx8MSE9PWkubm9kZVR5cGV8fGtlLmNsZWFuRGF0YShFKGkpKSxpLnBhcmVudE5vZGUmJihuJiZrZS5jb250YWlucyhpLm93bmVyRG9jdW1lbnQsaSkmJmsoRShpLFwic2NyaXB0XCIpKSxpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSkpO3JldHVybiBlfWZ1bmN0aW9uIE0oZSx0LG4pe3ZhciBpLHIsbyxzLGE9ZS5zdHlsZTtyZXR1cm4gbj1ufHxndChlKSxuJiYocz1uLmdldFByb3BlcnR5VmFsdWUodCl8fG5bdF0sXCJcIiE9PXN8fGtlLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKXx8KHM9a2Uuc3R5bGUoZSx0KSksIWJlLnBpeGVsQm94U3R5bGVzKCkmJmZ0LnRlc3QocykmJm10LnRlc3QodCkmJihpPWEud2lkdGgscj1hLm1pbldpZHRoLG89YS5tYXhXaWR0aCxhLm1pbldpZHRoPWEubWF4V2lkdGg9YS53aWR0aD1zLHM9bi53aWR0aCxhLndpZHRoPWksYS5taW5XaWR0aD1yLGEubWF4V2lkdGg9bykpLHZvaWQgMCE9PXM/cytcIlwiOnN9ZnVuY3Rpb24gUihlLHQpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD10KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBJKGUpe2lmKGUgaW4gX3QpcmV0dXJuIGU7Zm9yKHZhciB0PWVbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLG49YnQubGVuZ3RoO24tLTspaWYoZT1idFtuXSt0LGUgaW4gX3QpcmV0dXJuIGV9ZnVuY3Rpb24gQihlKXt2YXIgdD1rZS5jc3NQcm9wc1tlXTtyZXR1cm4gdHx8KHQ9a2UuY3NzUHJvcHNbZV09SShlKXx8ZSksdH1mdW5jdGlvbiBXKGUsdCxuKXt2YXIgaT1aZS5leGVjKHQpO3JldHVybiBpP01hdGgubWF4KDAsaVsyXS0obnx8MCkpKyhpWzNdfHxcInB4XCIpOnR9ZnVuY3Rpb24gRihlLHQsbixpLHIsbyl7dmFyIHM9XCJ3aWR0aFwiPT09dD8xOjAsYT0wLGw9MDtpZihuPT09KGk/XCJib3JkZXJcIjpcImNvbnRlbnRcIikpcmV0dXJuIDA7Zm9yKDtzPDQ7cys9MilcIm1hcmdpblwiPT09biYmKGwrPWtlLmNzcyhlLG4rSmVbc10sITAscikpLGk/KFwiY29udGVudFwiPT09biYmKGwtPWtlLmNzcyhlLFwicGFkZGluZ1wiK0plW3NdLCEwLHIpKSxcIm1hcmdpblwiIT09biYmKGwtPWtlLmNzcyhlLFwiYm9yZGVyXCIrSmVbc10rXCJXaWR0aFwiLCEwLHIpKSk6KGwrPWtlLmNzcyhlLFwicGFkZGluZ1wiK0plW3NdLCEwLHIpLFwicGFkZGluZ1wiIT09bj9sKz1rZS5jc3MoZSxcImJvcmRlclwiK0plW3NdK1wiV2lkdGhcIiwhMCxyKTphKz1rZS5jc3MoZSxcImJvcmRlclwiK0plW3NdK1wiV2lkdGhcIiwhMCxyKSk7cmV0dXJuIWkmJm8+PTAmJihsKz1NYXRoLm1heCgwLE1hdGguY2VpbChlW1wib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSldLW8tbC1hLS41KSkpLGx9ZnVuY3Rpb24gVShlLHQsbil7dmFyIGk9Z3QoZSkscj1NKGUsdCxpKSxvPVwiYm9yZGVyLWJveFwiPT09a2UuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxpKSxzPW87aWYoZnQudGVzdChyKSl7aWYoIW4pcmV0dXJuIHI7cj1cImF1dG9cIn1yZXR1cm4gcz1zJiYoYmUuYm94U2l6aW5nUmVsaWFibGUoKXx8cj09PWUuc3R5bGVbdF0pLChcImF1dG9cIj09PXJ8fCFwYXJzZUZsb2F0KHIpJiZcImlubGluZVwiPT09a2UuY3NzKGUsXCJkaXNwbGF5XCIsITEsaSkpJiYocj1lW1wib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSldLHM9ITApLHI9cGFyc2VGbG9hdChyKXx8MCxyK0YoZSx0LG58fChvP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLHMsaSxyKStcInB4XCJ9ZnVuY3Rpb24gVihlLHQsbixpLHIpe3JldHVybiBuZXcgVi5wcm90b3R5cGUuaW5pdChlLHQsbixpLHIpfWZ1bmN0aW9uIFgoKXtUdCYmKGNlLmhpZGRlbj09PSExJiZuLnJlcXVlc3RBbmltYXRpb25GcmFtZT9uLnJlcXVlc3RBbmltYXRpb25GcmFtZShYKTpuLnNldFRpbWVvdXQoWCxrZS5meC5pbnRlcnZhbCksa2UuZngudGljaygpKX1mdW5jdGlvbiBZKCl7cmV0dXJuIG4uc2V0VGltZW91dChmdW5jdGlvbigpe0N0PXZvaWQgMH0pLEN0PURhdGUubm93KCl9ZnVuY3Rpb24gRyhlLHQpe3ZhciBuLGk9MCxyPXtoZWlnaHQ6ZX07Zm9yKHQ9dD8xOjA7aTw0O2krPTItdCluPUplW2ldLHJbXCJtYXJnaW5cIituXT1yW1wicGFkZGluZ1wiK25dPWU7cmV0dXJuIHQmJihyLm9wYWNpdHk9ci53aWR0aD1lKSxyfWZ1bmN0aW9uIFooZSx0LG4pe2Zvcih2YXIgaSxyPShLLnR3ZWVuZXJzW3RdfHxbXSkuY29uY2F0KEsudHdlZW5lcnNbXCIqXCJdKSxvPTAscz1yLmxlbmd0aDtvPHM7bysrKWlmKGk9cltvXS5jYWxsKG4sdCxlKSlyZXR1cm4gaX1mdW5jdGlvbiBKKGUsdCxuKXt2YXIgaSxyLG8scyxhLGwsdSxjLGg9XCJ3aWR0aFwiaW4gdHx8XCJoZWlnaHRcImluIHQscD10aGlzLGQ9e30sZj1lLnN0eWxlLGc9ZS5ub2RlVHlwZSYmUWUoZSksbT1VZS5nZXQoZSxcImZ4c2hvd1wiKTtuLnF1ZXVlfHwocz1rZS5fcXVldWVIb29rcyhlLFwiZnhcIiksbnVsbD09cy51bnF1ZXVlZCYmKHMudW5xdWV1ZWQ9MCxhPXMuZW1wdHkuZmlyZSxzLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtzLnVucXVldWVkfHxhKCl9KSxzLnVucXVldWVkKysscC5hbHdheXMoZnVuY3Rpb24oKXtwLmFsd2F5cyhmdW5jdGlvbigpe3MudW5xdWV1ZWQtLSxrZS5xdWV1ZShlLFwiZnhcIikubGVuZ3RofHxzLmVtcHR5LmZpcmUoKX0pfSkpO2ZvcihpIGluIHQpaWYocj10W2ldLEV0LnRlc3Qocikpe2lmKGRlbGV0ZSB0W2ldLG89b3x8XCJ0b2dnbGVcIj09PXIscj09PShnP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1yfHwhbXx8dm9pZCAwPT09bVtpXSljb250aW51ZTtnPSEwfWRbaV09bSYmbVtpXXx8a2Uuc3R5bGUoZSxpKX1pZihsPSFrZS5pc0VtcHR5T2JqZWN0KHQpLGx8fCFrZS5pc0VtcHR5T2JqZWN0KGQpKXtoJiYxPT09ZS5ub2RlVHlwZSYmKG4ub3ZlcmZsb3c9W2Yub3ZlcmZsb3csZi5vdmVyZmxvd1gsZi5vdmVyZmxvd1ldLHU9bSYmbS5kaXNwbGF5LG51bGw9PXUmJih1PVVlLmdldChlLFwiZGlzcGxheVwiKSksYz1rZS5jc3MoZSxcImRpc3BsYXlcIiksXCJub25lXCI9PT1jJiYodT9jPXU6KFQoW2VdLCEwKSx1PWUuc3R5bGUuZGlzcGxheXx8dSxjPWtlLmNzcyhlLFwiZGlzcGxheVwiKSxUKFtlXSkpKSwoXCJpbmxpbmVcIj09PWN8fFwiaW5saW5lLWJsb2NrXCI9PT1jJiZudWxsIT11KSYmXCJub25lXCI9PT1rZS5jc3MoZSxcImZsb2F0XCIpJiYobHx8KHAuZG9uZShmdW5jdGlvbigpe2YuZGlzcGxheT11fSksbnVsbD09dSYmKGM9Zi5kaXNwbGF5LHU9XCJub25lXCI9PT1jP1wiXCI6YykpLGYuZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksbi5vdmVyZmxvdyYmKGYub3ZlcmZsb3c9XCJoaWRkZW5cIixwLmFsd2F5cyhmdW5jdGlvbigpe2Yub3ZlcmZsb3c9bi5vdmVyZmxvd1swXSxmLm92ZXJmbG93WD1uLm92ZXJmbG93WzFdLGYub3ZlcmZsb3dZPW4ub3ZlcmZsb3dbMl19KSksbD0hMTtmb3IoaSBpbiBkKWx8fChtP1wiaGlkZGVuXCJpbiBtJiYoZz1tLmhpZGRlbik6bT1VZS5hY2Nlc3MoZSxcImZ4c2hvd1wiLHtkaXNwbGF5OnV9KSxvJiYobS5oaWRkZW49IWcpLGcmJlQoW2VdLCEwKSxwLmRvbmUoZnVuY3Rpb24oKXtnfHxUKFtlXSksVWUucmVtb3ZlKGUsXCJmeHNob3dcIik7Zm9yKGkgaW4gZClrZS5zdHlsZShlLGksZFtpXSl9KSksbD1aKGc/bVtpXTowLGkscCksaSBpbiBtfHwobVtpXT1sLnN0YXJ0LGcmJihsLmVuZD1sLnN0YXJ0LGwuc3RhcnQ9MCkpfX1mdW5jdGlvbiBRKGUsdCl7dmFyIG4saSxyLG8scztmb3IobiBpbiBlKWlmKGk9eShuKSxyPXRbaV0sbz1lW25dLEFycmF5LmlzQXJyYXkobykmJihyPW9bMV0sbz1lW25dPW9bMF0pLG4hPT1pJiYoZVtpXT1vLGRlbGV0ZSBlW25dKSxzPWtlLmNzc0hvb2tzW2ldLHMmJlwiZXhwYW5kXCJpbiBzKXtvPXMuZXhwYW5kKG8pLGRlbGV0ZSBlW2ldO2ZvcihuIGluIG8pbiBpbiBlfHwoZVtuXT1vW25dLHRbbl09cil9ZWxzZSB0W2ldPXJ9ZnVuY3Rpb24gSyhlLHQsbil7dmFyIGkscixvPTAscz1LLnByZWZpbHRlcnMubGVuZ3RoLGE9a2UuRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgbC5lbGVtfSksbD1mdW5jdGlvbigpe2lmKHIpcmV0dXJuITE7Zm9yKHZhciB0PUN0fHxZKCksbj1NYXRoLm1heCgwLHUuc3RhcnRUaW1lK3UuZHVyYXRpb24tdCksaT1uL3UuZHVyYXRpb258fDAsbz0xLWkscz0wLGw9dS50d2VlbnMubGVuZ3RoO3M8bDtzKyspdS50d2VlbnNbc10ucnVuKG8pO3JldHVybiBhLm5vdGlmeVdpdGgoZSxbdSxvLG5dKSxvPDEmJmw/bjoobHx8YS5ub3RpZnlXaXRoKGUsW3UsMSwwXSksYS5yZXNvbHZlV2l0aChlLFt1XSksITEpfSx1PWEucHJvbWlzZSh7ZWxlbTplLHByb3BzOmtlLmV4dGVuZCh7fSx0KSxvcHRzOmtlLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6a2UuZWFzaW5nLl9kZWZhdWx0fSxuKSxvcmlnaW5hbFByb3BlcnRpZXM6dCxvcmlnaW5hbE9wdGlvbnM6bixzdGFydFRpbWU6Q3R8fFkoKSxkdXJhdGlvbjpuLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbih0LG4pe3ZhciBpPWtlLlR3ZWVuKGUsdS5vcHRzLHQsbix1Lm9wdHMuc3BlY2lhbEVhc2luZ1t0XXx8dS5vcHRzLmVhc2luZyk7cmV0dXJuIHUudHdlZW5zLnB1c2goaSksaX0sc3RvcDpmdW5jdGlvbih0KXt2YXIgbj0wLGk9dD91LnR3ZWVucy5sZW5ndGg6MDtpZihyKXJldHVybiB0aGlzO2ZvcihyPSEwO248aTtuKyspdS50d2VlbnNbbl0ucnVuKDEpO3JldHVybiB0PyhhLm5vdGlmeVdpdGgoZSxbdSwxLDBdKSxhLnJlc29sdmVXaXRoKGUsW3UsdF0pKTphLnJlamVjdFdpdGgoZSxbdSx0XSksdGhpc319KSxjPXUucHJvcHM7Zm9yKFEoYyx1Lm9wdHMuc3BlY2lhbEVhc2luZyk7bzxzO28rKylpZihpPUsucHJlZmlsdGVyc1tvXS5jYWxsKHUsZSxjLHUub3B0cykpcmV0dXJuIF9lKGkuc3RvcCkmJihrZS5fcXVldWVIb29rcyh1LmVsZW0sdS5vcHRzLnF1ZXVlKS5zdG9wPWkuc3RvcC5iaW5kKGkpKSxpO3JldHVybiBrZS5tYXAoYyxaLHUpLF9lKHUub3B0cy5zdGFydCkmJnUub3B0cy5zdGFydC5jYWxsKGUsdSksdS5wcm9ncmVzcyh1Lm9wdHMucHJvZ3Jlc3MpLmRvbmUodS5vcHRzLmRvbmUsdS5vcHRzLmNvbXBsZXRlKS5mYWlsKHUub3B0cy5mYWlsKS5hbHdheXModS5vcHRzLmFsd2F5cyksa2UuZngudGltZXIoa2UuZXh0ZW5kKGwse2VsZW06ZSxhbmltOnUscXVldWU6dS5vcHRzLnF1ZXVlfSkpLHV9ZnVuY3Rpb24gZWUoZSl7dmFyIHQ9ZS5tYXRjaChxZSl8fFtdO3JldHVybiB0LmpvaW4oXCIgXCIpfWZ1bmN0aW9uIHRlKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1mdW5jdGlvbiBuZShlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9lOlwic3RyaW5nXCI9PXR5cGVvZiBlP2UubWF0Y2gocWUpfHxbXTpbXX1mdW5jdGlvbiBpZShlLHQsbixpKXt2YXIgcjtpZihBcnJheS5pc0FycmF5KHQpKWtlLmVhY2godCxmdW5jdGlvbih0LHIpe258fEh0LnRlc3QoZSk/aShlLHIpOmllKGUrXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiByJiZudWxsIT1yP3Q6XCJcIikrXCJdXCIscixuLGkpfSk7ZWxzZSBpZihufHxcIm9iamVjdFwiIT09YSh0KSlpKGUsdCk7ZWxzZSBmb3IociBpbiB0KWllKGUrXCJbXCIrcitcIl1cIix0W3JdLG4saSl9ZnVuY3Rpb24gcmUoZSl7cmV0dXJuIGZ1bmN0aW9uKHQsbil7XCJzdHJpbmdcIiE9dHlwZW9mIHQmJihuPXQsdD1cIipcIik7dmFyIGkscj0wLG89dC50b0xvd2VyQ2FzZSgpLm1hdGNoKHFlKXx8W107aWYoX2UobikpZm9yKDtpPW9bcisrXTspXCIrXCI9PT1pWzBdPyhpPWkuc2xpY2UoMSl8fFwiKlwiLChlW2ldPWVbaV18fFtdKS51bnNoaWZ0KG4pKTooZVtpXT1lW2ldfHxbXSkucHVzaChuKX19ZnVuY3Rpb24gb2UoZSx0LG4saSl7ZnVuY3Rpb24gcihhKXt2YXIgbDtyZXR1cm4gb1thXT0hMCxrZS5lYWNoKGVbYV18fFtdLGZ1bmN0aW9uKGUsYSl7dmFyIHU9YSh0LG4saSk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIHV8fHN8fG9bdV0/cz8hKGw9dSk6dm9pZCAwOih0LmRhdGFUeXBlcy51bnNoaWZ0KHUpLHIodSksITEpfSksbH12YXIgbz17fSxzPWU9PT1HdDtyZXR1cm4gcih0LmRhdGFUeXBlc1swXSl8fCFvW1wiKlwiXSYmcihcIipcIil9ZnVuY3Rpb24gc2UoZSx0KXt2YXIgbixpLHI9a2UuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IobiBpbiB0KXZvaWQgMCE9PXRbbl0mJigocltuXT9lOml8fChpPXt9KSlbbl09dFtuXSk7cmV0dXJuIGkmJmtlLmV4dGVuZCghMCxlLGkpLGV9ZnVuY3Rpb24gYWUoZSx0LG4pe2Zvcih2YXIgaSxyLG8scyxhPWUuY29udGVudHMsbD1lLmRhdGFUeXBlcztcIipcIj09PWxbMF07KWwuc2hpZnQoKSx2b2lkIDA9PT1pJiYoaT1lLm1pbWVUeXBlfHx0LmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihpKWZvcihyIGluIGEpaWYoYVtyXSYmYVtyXS50ZXN0KGkpKXtsLnVuc2hpZnQocik7YnJlYWt9aWYobFswXWluIG4pbz1sWzBdO2Vsc2V7Zm9yKHIgaW4gbil7aWYoIWxbMF18fGUuY29udmVydGVyc1tyK1wiIFwiK2xbMF1dKXtvPXI7YnJlYWt9c3x8KHM9cil9bz1vfHxzfWlmKG8pcmV0dXJuIG8hPT1sWzBdJiZsLnVuc2hpZnQobyksbltvXX1mdW5jdGlvbiBsZShlLHQsbixpKXt2YXIgcixvLHMsYSxsLHU9e30sYz1lLmRhdGFUeXBlcy5zbGljZSgpO2lmKGNbMV0pZm9yKHMgaW4gZS5jb252ZXJ0ZXJzKXVbcy50b0xvd2VyQ2FzZSgpXT1lLmNvbnZlcnRlcnNbc107Zm9yKG89Yy5zaGlmdCgpO287KWlmKGUucmVzcG9uc2VGaWVsZHNbb10mJihuW2UucmVzcG9uc2VGaWVsZHNbb11dPXQpLCFsJiZpJiZlLmRhdGFGaWx0ZXImJih0PWUuZGF0YUZpbHRlcih0LGUuZGF0YVR5cGUpKSxsPW8sbz1jLnNoaWZ0KCkpaWYoXCIqXCI9PT1vKW89bDtlbHNlIGlmKFwiKlwiIT09bCYmbCE9PW8pe2lmKHM9dVtsK1wiIFwiK29dfHx1W1wiKiBcIitvXSwhcylmb3IociBpbiB1KWlmKGE9ci5zcGxpdChcIiBcIiksYVsxXT09PW8mJihzPXVbbCtcIiBcIithWzBdXXx8dVtcIiogXCIrYVswXV0pKXtzPT09ITA/cz11W3JdOnVbcl0hPT0hMCYmKG89YVswXSxjLnVuc2hpZnQoYVsxXSkpO2JyZWFrfWlmKHMhPT0hMClpZihzJiZlW1widGhyb3dzXCJdKXQ9cyh0KTtlbHNlIHRyeXt0PXModCl9Y2F0Y2goaCl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjpzP2g6XCJObyBjb252ZXJzaW9uIGZyb20gXCIrbCtcIiB0byBcIitvfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6dH19dmFyIHVlPVtdLGNlPW4uZG9jdW1lbnQsaGU9T2JqZWN0LmdldFByb3RvdHlwZU9mLHBlPXVlLnNsaWNlLGRlPXVlLmNvbmNhdCxmZT11ZS5wdXNoLGdlPXVlLmluZGV4T2YsbWU9e30sdmU9bWUudG9TdHJpbmcseWU9bWUuaGFzT3duUHJvcGVydHksd2U9eWUudG9TdHJpbmcseGU9d2UuY2FsbChPYmplY3QpLGJlPXt9LF9lPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJlwibnVtYmVyXCIhPXR5cGVvZiBlLm5vZGVUeXBlfSxDZT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZSYmZT09PWUud2luZG93fSxUZT17dHlwZTohMCxzcmM6ITAsbm9Nb2R1bGU6ITB9LEVlPVwiMy4zLjFcIixrZT1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcga2UuZm4uaW5pdChlLHQpfSxTZT0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2c7a2UuZm49a2UucHJvdG90eXBlPXtqcXVlcnk6RWUsY29uc3RydWN0b3I6a2UsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBwZS5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/cGUuY2FsbCh0aGlzKTplPDA/dGhpc1tlK3RoaXMubGVuZ3RoXTp0aGlzW2VdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oZSl7dmFyIHQ9a2UubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGUpO3JldHVybiB0LnByZXZPYmplY3Q9dGhpcyx0fSxlYWNoOmZ1bmN0aW9uKGUpe3JldHVybiBrZS5lYWNoKHRoaXMsZSl9LG1hcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soa2UubWFwKHRoaXMsZnVuY3Rpb24odCxuKXtyZXR1cm4gZS5jYWxsKHQsbix0KX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2socGUuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5sZW5ndGgsbj0rZSsoZTwwP3Q6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4+PTAmJm48dD9bdGhpc1tuXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6ZmUsc29ydDp1ZS5zb3J0LHNwbGljZTp1ZS5zcGxpY2V9LGtlLmV4dGVuZD1rZS5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSx0LG4saSxyLG8scz1hcmd1bWVudHNbMF18fHt9LGE9MSxsPWFyZ3VtZW50cy5sZW5ndGgsdT0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBzJiYodT1zLHM9YXJndW1lbnRzW2FdfHx7fSxhKyspLFwib2JqZWN0XCI9PXR5cGVvZiBzfHxfZShzKXx8KHM9e30pLGE9PT1sJiYocz10aGlzLGEtLSk7YTxsO2ErKylpZihudWxsIT0oZT1hcmd1bWVudHNbYV0pKWZvcih0IGluIGUpbj1zW3RdLGk9ZVt0XSxzIT09aSYmKHUmJmkmJihrZS5pc1BsYWluT2JqZWN0KGkpfHwocj1BcnJheS5pc0FycmF5KGkpKSk/KHI/KHI9ITEsbz1uJiZBcnJheS5pc0FycmF5KG4pP246W10pOm89biYma2UuaXNQbGFpbk9iamVjdChuKT9uOnt9LHNbdF09a2UuZXh0ZW5kKHUsbyxpKSk6dm9pZCAwIT09aSYmKHNbdF09aSkpO3JldHVybiBzfSxrZS5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisoRWUrTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoZSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQsbjtyZXR1cm4hKCFlfHxcIltvYmplY3QgT2JqZWN0XVwiIT09dmUuY2FsbChlKSkmJighKHQ9aGUoZSkpfHwobj15ZS5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3RvcixcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZ3ZS5jYWxsKG4pPT09eGUpKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlKXJldHVybiExO3JldHVybiEwfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGUpe3MoZSl9LGVhY2g6ZnVuY3Rpb24oZSx0KXt2YXIgbixpPTA7aWYobChlKSlmb3Iobj1lLmxlbmd0aDtpPG4mJnQuY2FsbChlW2ldLGksZVtpXSkhPT0hMTtpKyspO2Vsc2UgZm9yKGkgaW4gZSlpZih0LmNhbGwoZVtpXSxpLGVbaV0pPT09ITEpYnJlYWs7cmV0dXJuIGV9LHRyaW06ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjooZStcIlwiKS5yZXBsYWNlKFNlLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oZSx0KXt2YXIgbj10fHxbXTtyZXR1cm4gbnVsbCE9ZSYmKGwoT2JqZWN0KGUpKT9rZS5tZXJnZShuLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTpmZS5jYWxsKG4sZSkpLG59LGluQXJyYXk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBudWxsPT10Py0xOmdlLmNhbGwodCxlLG4pfSxtZXJnZTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0rdC5sZW5ndGgsaT0wLHI9ZS5sZW5ndGg7aTxuO2krKyllW3IrK109dFtpXTtyZXR1cm4gZS5sZW5ndGg9cixlfSxncmVwOmZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIGkscj1bXSxvPTAscz1lLmxlbmd0aCxhPSFuO288cztvKyspaT0hdChlW29dLG8pLGkhPT1hJiZyLnB1c2goZVtvXSk7cmV0dXJuIHJ9LG1hcDpmdW5jdGlvbihlLHQsbil7dmFyIGkscixvPTAscz1bXTtpZihsKGUpKWZvcihpPWUubGVuZ3RoO288aTtvKyspcj10KGVbb10sbyxuKSxudWxsIT1yJiZzLnB1c2gocik7ZWxzZSBmb3IobyBpbiBlKXI9dChlW29dLG8sbiksbnVsbCE9ciYmcy5wdXNoKHIpO3JldHVybiBkZS5hcHBseShbXSxzKX0sZ3VpZDoxLHN1cHBvcnQ6YmV9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihrZS5mbltTeW1ib2wuaXRlcmF0b3JdPXVlW1N5bWJvbC5pdGVyYXRvcl0pLGtlLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe21lW1wiW29iamVjdCBcIit0K1wiXVwiXT10LnRvTG93ZXJDYXNlKCl9KTt2YXIgRGU9LyohXG5cdCAqIFNpenpsZSBDU1MgU2VsZWN0b3IgRW5naW5lIHYyLjMuM1xuXHQgKiBodHRwczovL3NpenpsZWpzLmNvbS9cblx0ICpcblx0ICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcblx0ICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG5cdCAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2Vcblx0ICpcblx0ICogRGF0ZTogMjAxNi0wOC0wOFxuXHQgKi9cbmZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSx0LG4saSl7dmFyIHIsbyxzLGEsbCx1LGMscD10JiZ0Lm93bmVyRG9jdW1lbnQsZj10P3Qubm9kZVR5cGU6OTtpZihuPW58fFtdLFwic3RyaW5nXCIhPXR5cGVvZiBlfHwhZXx8MSE9PWYmJjkhPT1mJiYxMSE9PWYpcmV0dXJuIG47aWYoIWkmJigodD90Lm93bmVyRG9jdW1lbnR8fHQ6SSkhPT1MJiYkKHQpLHQ9dHx8TCxPKSl7aWYoMTEhPT1mJiYobD12ZS5leGVjKGUpKSlpZihyPWxbMV0pe2lmKDk9PT1mKXtpZighKHM9dC5nZXRFbGVtZW50QnlJZChyKSkpcmV0dXJuIG47aWYocy5pZD09PXIpcmV0dXJuIG4ucHVzaChzKSxufWVsc2UgaWYocCYmKHM9cC5nZXRFbGVtZW50QnlJZChyKSkmJk0odCxzKSYmcy5pZD09PXIpcmV0dXJuIG4ucHVzaChzKSxufWVsc2V7aWYobFsyXSlyZXR1cm4gUS5hcHBseShuLHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSkpLG47aWYoKHI9bFszXSkmJl8uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBRLmFwcGx5KG4sdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHIpKSxufWlmKF8ucXNhJiYhVltlK1wiIFwiXSYmKCFQfHwhUC50ZXN0KGUpKSl7aWYoMSE9PWYpcD10LGM9ZTtlbHNlIGlmKFwib2JqZWN0XCIhPT10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe2ZvcigoYT10LmdldEF0dHJpYnV0ZShcImlkXCIpKT9hPWEucmVwbGFjZShiZSxfZSk6dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLGE9UiksdT1rKGUpLG89dS5sZW5ndGg7by0tOyl1W29dPVwiI1wiK2ErXCIgXCIrZCh1W29dKTtjPXUuam9pbihcIixcIikscD15ZS50ZXN0KGUpJiZoKHQucGFyZW50Tm9kZSl8fHR9aWYoYyl0cnl7cmV0dXJuIFEuYXBwbHkobixwLnF1ZXJ5U2VsZWN0b3JBbGwoYykpLG59Y2F0Y2goZyl7fWZpbmFsbHl7YT09PVImJnQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gRChlLnJlcGxhY2UoYWUsXCIkMVwiKSx0LG4saSl9ZnVuY3Rpb24gbigpe2Z1bmN0aW9uIGUobixpKXtyZXR1cm4gdC5wdXNoKG4rXCIgXCIpPkMuY2FjaGVMZW5ndGgmJmRlbGV0ZSBlW3Quc2hpZnQoKV0sZVtuK1wiIFwiXT1pfXZhciB0PVtdO3JldHVybiBlfWZ1bmN0aW9uIGkoZSl7cmV0dXJuIGVbUl09ITAsZX1mdW5jdGlvbiByKGUpe3ZhciB0PUwuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO3RyeXtyZXR1cm4hIWUodCl9Y2F0Y2gobil7cmV0dXJuITF9ZmluYWxseXt0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSx0PW51bGx9fWZ1bmN0aW9uIG8oZSx0KXtmb3IodmFyIG49ZS5zcGxpdChcInxcIiksaT1uLmxlbmd0aDtpLS07KUMuYXR0ckhhbmRsZVtuW2ldXT10fWZ1bmN0aW9uIHMoZSx0KXt2YXIgbj10JiZlLGk9biYmMT09PWUubm9kZVR5cGUmJjE9PT10Lm5vZGVUeXBlJiZlLnNvdXJjZUluZGV4LXQuc291cmNlSW5kZXg7aWYoaSlyZXR1cm4gaTtpZihuKWZvcig7bj1uLm5leHRTaWJsaW5nOylpZihuPT09dClyZXR1cm4tMTtyZXR1cm4gZT8xOi0xfWZ1bmN0aW9uIGEoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1uJiZ0LnR5cGU9PT1lfX1mdW5jdGlvbiBsKGUpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PW58fFwiYnV0dG9uXCI9PT1uKSYmdC50eXBlPT09ZX19ZnVuY3Rpb24gdShlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuXCJmb3JtXCJpbiB0P3QucGFyZW50Tm9kZSYmdC5kaXNhYmxlZD09PSExP1wibGFiZWxcImluIHQ/XCJsYWJlbFwiaW4gdC5wYXJlbnROb2RlP3QucGFyZW50Tm9kZS5kaXNhYmxlZD09PWU6dC5kaXNhYmxlZD09PWU6dC5pc0Rpc2FibGVkPT09ZXx8dC5pc0Rpc2FibGVkIT09IWUmJlRlKHQpPT09ZTp0LmRpc2FibGVkPT09ZTpcImxhYmVsXCJpbiB0JiZ0LmRpc2FibGVkPT09ZX19ZnVuY3Rpb24gYyhlKXtyZXR1cm4gaShmdW5jdGlvbih0KXtyZXR1cm4gdD0rdCxpKGZ1bmN0aW9uKG4saSl7Zm9yKHZhciByLG89ZShbXSxuLmxlbmd0aCx0KSxzPW8ubGVuZ3RoO3MtLTspbltyPW9bc11dJiYobltyXT0hKGlbcl09bltyXSkpfSl9KX1mdW5jdGlvbiBoKGUpe3JldHVybiBlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmZX1mdW5jdGlvbiBwKCl7fWZ1bmN0aW9uIGQoZSl7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aCxpPVwiXCI7dDxuO3QrKylpKz1lW3RdLnZhbHVlO3JldHVybiBpfWZ1bmN0aW9uIGYoZSx0LG4pe3ZhciBpPXQuZGlyLHI9dC5uZXh0LG89cnx8aSxzPW4mJlwicGFyZW50Tm9kZVwiPT09byxhPVcrKztyZXR1cm4gdC5maXJzdD9mdW5jdGlvbih0LG4scil7Zm9yKDt0PXRbaV07KWlmKDE9PT10Lm5vZGVUeXBlfHxzKXJldHVybiBlKHQsbixyKTtyZXR1cm4hMX06ZnVuY3Rpb24odCxuLGwpe3ZhciB1LGMsaCxwPVtCLGFdO2lmKGwpe2Zvcig7dD10W2ldOylpZigoMT09PXQubm9kZVR5cGV8fHMpJiZlKHQsbixsKSlyZXR1cm4hMH1lbHNlIGZvcig7dD10W2ldOylpZigxPT09dC5ub2RlVHlwZXx8cylpZihoPXRbUl18fCh0W1JdPXt9KSxjPWhbdC51bmlxdWVJRF18fChoW3QudW5pcXVlSURdPXt9KSxyJiZyPT09dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXQ9dFtpXXx8dDtlbHNle2lmKCh1PWNbb10pJiZ1WzBdPT09QiYmdVsxXT09PWEpcmV0dXJuIHBbMl09dVsyXTtpZihjW29dPXAscFsyXT1lKHQsbixsKSlyZXR1cm4hMH1yZXR1cm4hMX19ZnVuY3Rpb24gZyhlKXtyZXR1cm4gZS5sZW5ndGg+MT9mdW5jdGlvbih0LG4saSl7Zm9yKHZhciByPWUubGVuZ3RoO3ItLTspaWYoIWVbcl0odCxuLGkpKXJldHVybiExO3JldHVybiEwfTplWzBdfWZ1bmN0aW9uIG0oZSxuLGkpe2Zvcih2YXIgcj0wLG89bi5sZW5ndGg7cjxvO3IrKyl0KGUsbltyXSxpKTtyZXR1cm4gaX1mdW5jdGlvbiB2KGUsdCxuLGkscil7Zm9yKHZhciBvLHM9W10sYT0wLGw9ZS5sZW5ndGgsdT1udWxsIT10O2E8bDthKyspKG89ZVthXSkmJihuJiYhbihvLGkscil8fChzLnB1c2gobyksdSYmdC5wdXNoKGEpKSk7cmV0dXJuIHN9ZnVuY3Rpb24geShlLHQsbixyLG8scyl7cmV0dXJuIHImJiFyW1JdJiYocj15KHIpKSxvJiYhb1tSXSYmKG89eShvLHMpKSxpKGZ1bmN0aW9uKGkscyxhLGwpe3ZhciB1LGMsaCxwPVtdLGQ9W10sZj1zLmxlbmd0aCxnPWl8fG0odHx8XCIqXCIsYS5ub2RlVHlwZT9bYV06YSxbXSkseT0hZXx8IWkmJnQ/Zzp2KGcscCxlLGEsbCksdz1uP298fChpP2U6Znx8cik/W106czp5O2lmKG4mJm4oeSx3LGEsbCkscilmb3IodT12KHcsZCkscih1LFtdLGEsbCksYz11Lmxlbmd0aDtjLS07KShoPXVbY10pJiYod1tkW2NdXT0hKHlbZFtjXV09aCkpO2lmKGkpe2lmKG98fGUpe2lmKG8pe2Zvcih1PVtdLGM9dy5sZW5ndGg7Yy0tOykoaD13W2NdKSYmdS5wdXNoKHlbY109aCk7byhudWxsLHc9W10sdSxsKX1mb3IoYz13Lmxlbmd0aDtjLS07KShoPXdbY10pJiYodT1vP2VlKGksaCk6cFtjXSk+LTEmJihpW3VdPSEoc1t1XT1oKSl9fWVsc2Ugdz12KHc9PT1zP3cuc3BsaWNlKGYsdy5sZW5ndGgpOncpLG8/byhudWxsLHMsdyxsKTpRLmFwcGx5KHMsdyl9KX1mdW5jdGlvbiB3KGUpe2Zvcih2YXIgdCxuLGkscj1lLmxlbmd0aCxvPUMucmVsYXRpdmVbZVswXS50eXBlXSxzPW98fEMucmVsYXRpdmVbXCIgXCJdLGE9bz8xOjAsbD1mKGZ1bmN0aW9uKGUpe3JldHVybiBlPT09dH0scywhMCksdT1mKGZ1bmN0aW9uKGUpe3JldHVybiBlZSh0LGUpPi0xfSxzLCEwKSxjPVtmdW5jdGlvbihlLG4saSl7dmFyIHI9IW8mJihpfHxuIT09Til8fCgodD1uKS5ub2RlVHlwZT9sKGUsbixpKTp1KGUsbixpKSk7cmV0dXJuIHQ9bnVsbCxyfV07YTxyO2ErKylpZihuPUMucmVsYXRpdmVbZVthXS50eXBlXSljPVtmKGcoYyksbildO2Vsc2V7aWYobj1DLmZpbHRlcltlW2FdLnR5cGVdLmFwcGx5KG51bGwsZVthXS5tYXRjaGVzKSxuW1JdKXtmb3IoaT0rK2E7aTxyJiYhQy5yZWxhdGl2ZVtlW2ldLnR5cGVdO2krKyk7cmV0dXJuIHkoYT4xJiZnKGMpLGE+MSYmZChlLnNsaWNlKDAsYS0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09ZVthLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKGFlLFwiJDFcIiksbixhPGkmJncoZS5zbGljZShhLGkpKSxpPHImJncoZT1lLnNsaWNlKGkpKSxpPHImJmQoZSkpfWMucHVzaChuKX1yZXR1cm4gZyhjKX1mdW5jdGlvbiB4KGUsbil7dmFyIHI9bi5sZW5ndGg+MCxvPWUubGVuZ3RoPjAscz1mdW5jdGlvbihpLHMsYSxsLHUpe3ZhciBjLGgscCxkPTAsZj1cIjBcIixnPWkmJltdLG09W10seT1OLHc9aXx8byYmQy5maW5kLlRBRyhcIipcIix1KSx4PUIrPW51bGw9PXk/MTpNYXRoLnJhbmRvbSgpfHwuMSxiPXcubGVuZ3RoO2Zvcih1JiYoTj1zPT09THx8c3x8dSk7ZiE9PWImJm51bGwhPShjPXdbZl0pO2YrKyl7aWYobyYmYyl7Zm9yKGg9MCxzfHxjLm93bmVyRG9jdW1lbnQ9PT1MfHwoJChjKSxhPSFPKTtwPWVbaCsrXTspaWYocChjLHN8fEwsYSkpe2wucHVzaChjKTticmVha311JiYoQj14KX1yJiYoKGM9IXAmJmMpJiZkLS0saSYmZy5wdXNoKGMpKX1pZihkKz1mLHImJmYhPT1kKXtmb3IoaD0wO3A9bltoKytdOylwKGcsbSxzLGEpO2lmKGkpe2lmKGQ+MClmb3IoO2YtLTspZ1tmXXx8bVtmXXx8KG1bZl09Wi5jYWxsKGwpKTttPXYobSl9US5hcHBseShsLG0pLHUmJiFpJiZtLmxlbmd0aD4wJiZkK24ubGVuZ3RoPjEmJnQudW5pcXVlU29ydChsKX1yZXR1cm4gdSYmKEI9eCxOPXkpLGd9O3JldHVybiByP2kocyk6c312YXIgYixfLEMsVCxFLGssUyxELE4saixBLCQsTCx6LE8sUCxILHEsTSxSPVwic2l6emxlXCIrMSpuZXcgRGF0ZSxJPWUuZG9jdW1lbnQsQj0wLFc9MCxGPW4oKSxVPW4oKSxWPW4oKSxYPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9PT10JiYoQT0hMCksMH0sWT17fS5oYXNPd25Qcm9wZXJ0eSxHPVtdLFo9Ry5wb3AsSj1HLnB1c2gsUT1HLnB1c2gsSz1HLnNsaWNlLGVlPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTAsaT1lLmxlbmd0aDtuPGk7bisrKWlmKGVbbl09PT10KXJldHVybiBuO3JldHVybi0xfSx0ZT1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsbmU9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLGllPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFwwLVxcXFx4YTBdKStcIixyZT1cIlxcXFxbXCIrbmUrXCIqKFwiK2llK1wiKSg/OlwiK25lK1wiKihbKl4kfCF+XT89KVwiK25lK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIraWUrXCIpKXwpXCIrbmUrXCIqXFxcXF1cIixvZT1cIjooXCIraWUrXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK3JlK1wiKSopfC4qKVxcXFwpfClcIixzZT1uZXcgUmVnRXhwKG5lK1wiK1wiLFwiZ1wiKSxhZT1uZXcgUmVnRXhwKFwiXlwiK25lK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIituZStcIiskXCIsXCJnXCIpLGxlPW5ldyBSZWdFeHAoXCJeXCIrbmUrXCIqLFwiK25lK1wiKlwiKSx1ZT1uZXcgUmVnRXhwKFwiXlwiK25lK1wiKihbPit+XXxcIituZStcIilcIituZStcIipcIiksY2U9bmV3IFJlZ0V4cChcIj1cIituZStcIiooW15cXFxcXSdcXFwiXSo/KVwiK25lK1wiKlxcXFxdXCIsXCJnXCIpLGhlPW5ldyBSZWdFeHAob2UpLHBlPW5ldyBSZWdFeHAoXCJeXCIraWUrXCIkXCIpLGRlPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIraWUrXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIraWUrXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitpZStcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIityZSksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrb2UpLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK25lK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrbmUrXCIqKD86KFsrLV18KVwiK25lK1wiKihcXFxcZCspfCkpXCIrbmUrXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrdGUrXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIituZStcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrbmUrXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK25lK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxmZT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLGdlPS9eaFxcZCQvaSxtZT0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLHZlPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLHllPS9bK35dLyx3ZT1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrbmUrXCI/fChcIituZStcIil8LilcIixcImlnXCIpLHhlPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1cIjB4XCIrdC02NTUzNjtyZXR1cm4gaSE9PWl8fG4/dDppPDA/U3RyaW5nLmZyb21DaGFyQ29kZShpKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKGk+PjEwfDU1Mjk2LDEwMjMmaXw1NjMyMCl9LGJlPS8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLF9lPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/XCJcXDBcIj09PWU/XCLvv71cIjplLnNsaWNlKDAsLTEpK1wiXFxcXFwiK2UuY2hhckNvZGVBdChlLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrZX0sQ2U9ZnVuY3Rpb24oKXskKCl9LFRlPWYoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZGlzYWJsZWQ9PT0hMCYmKFwiZm9ybVwiaW4gZXx8XCJsYWJlbFwiaW4gZSl9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e1EuYXBwbHkoRz1LLmNhbGwoSS5jaGlsZE5vZGVzKSxJLmNoaWxkTm9kZXMpLEdbSS5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goRWUpe1E9e2FwcGx5OkcubGVuZ3RoP2Z1bmN0aW9uKGUsdCl7Si5hcHBseShlLEsuY2FsbCh0KSl9OmZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPWUubGVuZ3RoLGk9MDtlW24rK109dFtpKytdOyk7ZS5sZW5ndGg9bi0xfX19Xz10LnN1cHBvcnQ9e30sRT10LmlzWE1MPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJihlLm93bmVyRG9jdW1lbnR8fGUpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4hIXQmJlwiSFRNTFwiIT09dC5ub2RlTmFtZX0sJD10LnNldERvY3VtZW50PWZ1bmN0aW9uKGUpe3ZhciB0LG4saT1lP2Uub3duZXJEb2N1bWVudHx8ZTpJO3JldHVybiBpIT09TCYmOT09PWkubm9kZVR5cGUmJmkuZG9jdW1lbnRFbGVtZW50PyhMPWksej1MLmRvY3VtZW50RWxlbWVudCxPPSFFKEwpLEkhPT1MJiYobj1MLmRlZmF1bHRWaWV3KSYmbi50b3AhPT1uJiYobi5hZGRFdmVudExpc3RlbmVyP24uYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLENlLCExKTpuLmF0dGFjaEV2ZW50JiZuLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixDZSkpLF8uYXR0cmlidXRlcz1yKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsYXNzTmFtZT1cImlcIiwhZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxfLmdldEVsZW1lbnRzQnlUYWdOYW1lPXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXBwZW5kQ2hpbGQoTC5jcmVhdGVDb21tZW50KFwiXCIpKSwhZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksXy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPW1lLnRlc3QoTC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxfLmdldEJ5SWQ9cihmdW5jdGlvbihlKXtyZXR1cm4gei5hcHBlbmRDaGlsZChlKS5pZD1SLCFMLmdldEVsZW1lbnRzQnlOYW1lfHwhTC5nZXRFbGVtZW50c0J5TmFtZShSKS5sZW5ndGh9KSxfLmdldEJ5SWQ/KEMuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZSh3ZSx4ZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImlkXCIpPT09dH19LEMuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZPKXt2YXIgbj10LmdldEVsZW1lbnRCeUlkKGUpO3JldHVybiBuP1tuXTpbXX19KTooQy5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKHdlLHhlKTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlTm9kZSYmZS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIG4mJm4udmFsdWU9PT10fX0sQy5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJk8pe3ZhciBuLGkscixvPXQuZ2V0RWxlbWVudEJ5SWQoZSk7aWYobyl7aWYobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSxuJiZuLnZhbHVlPT09ZSlyZXR1cm5bb107Zm9yKHI9dC5nZXRFbGVtZW50c0J5TmFtZShlKSxpPTA7bz1yW2krK107KWlmKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIiksbiYmbi52YWx1ZT09PWUpcmV0dXJuW29dfXJldHVybltdfX0pLEMuZmluZC5UQUc9Xy5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihlLHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlUYWdOYW1lP3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk6Xy5xc2E/dC5xdWVyeVNlbGVjdG9yQWxsKGUpOnZvaWQgMH06ZnVuY3Rpb24oZSx0KXt2YXIgbixpPVtdLHI9MCxvPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk7aWYoXCIqXCI9PT1lKXtmb3IoO249b1tyKytdOykxPT09bi5ub2RlVHlwZSYmaS5wdXNoKG4pO3JldHVybiBpfXJldHVybiBvfSxDLmZpbmQuQ0xBU1M9Xy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJk8pcmV0dXJuIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlKX0sSD1bXSxQPVtdLChfLnFzYT1tZS50ZXN0KEwucXVlcnlTZWxlY3RvckFsbCkpJiYocihmdW5jdGlvbihlKXt6LmFwcGVuZENoaWxkKGUpLmlubmVySFRNTD1cIjxhIGlkPSdcIitSK1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrUitcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGUucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmUC5wdXNoKFwiWypeJF09XCIrbmUrXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxQLnB1c2goXCJcXFxcW1wiK25lK1wiKig/OnZhbHVlfFwiK3RlK1wiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK1IrXCItXVwiKS5sZW5ndGh8fFAucHVzaChcIn49XCIpLGUucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8UC5wdXNoKFwiOmNoZWNrZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIitSK1wiKypcIikubGVuZ3RofHxQLnB1c2goXCIuIy4rWyt+XVwiKX0pLHIoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjt2YXIgdD1MLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTt0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxlLmFwcGVuZENoaWxkKHQpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZQLnB1c2goXCJuYW1lXCIrbmUrXCIqWypeJHwhfl0/PVwiKSwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoJiZQLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLHouYXBwZW5kQ2hpbGQoZSkuZGlzYWJsZWQ9ITAsMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGgmJlAucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSxQLnB1c2goXCIsLio6XCIpfSkpLChfLm1hdGNoZXNTZWxlY3Rvcj1tZS50ZXN0KHE9ei5tYXRjaGVzfHx6LndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8ei5tb3pNYXRjaGVzU2VsZWN0b3J8fHoub01hdGNoZXNTZWxlY3Rvcnx8ei5tc01hdGNoZXNTZWxlY3RvcikpJiZyKGZ1bmN0aW9uKGUpe18uZGlzY29ubmVjdGVkTWF0Y2g9cS5jYWxsKGUsXCIqXCIpLHEuY2FsbChlLFwiW3MhPScnXTp4XCIpLEgucHVzaChcIiE9XCIsb2UpfSksUD1QLmxlbmd0aCYmbmV3IFJlZ0V4cChQLmpvaW4oXCJ8XCIpKSxIPUgubGVuZ3RoJiZuZXcgUmVnRXhwKEguam9pbihcInxcIikpLHQ9bWUudGVzdCh6LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSxNPXR8fG1lLnRlc3Qoei5jb250YWlucyk/ZnVuY3Rpb24oZSx0KXt2YXIgbj05PT09ZS5ub2RlVHlwZT9lLmRvY3VtZW50RWxlbWVudDplLGk9dCYmdC5wYXJlbnROb2RlO3JldHVybiBlPT09aXx8ISghaXx8MSE9PWkubm9kZVR5cGV8fCEobi5jb250YWlucz9uLmNvbnRhaW5zKGkpOmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oaSkpKX06ZnVuY3Rpb24oZSx0KXtpZih0KWZvcig7dD10LnBhcmVudE5vZGU7KWlmKHQ9PT1lKXJldHVybiEwO3JldHVybiExfSxYPXQ/ZnVuY3Rpb24oZSx0KXtpZihlPT09dClyZXR1cm4gQT0hMCwwO3ZhciBuPSFlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSF0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBuP246KG49KGUub3duZXJEb2N1bWVudHx8ZSk9PT0odC5vd25lckRvY3VtZW50fHx0KT9lLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHQpOjEsMSZufHwhXy5zb3J0RGV0YWNoZWQmJnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSk9PT1uP2U9PT1MfHxlLm93bmVyRG9jdW1lbnQ9PT1JJiZNKEksZSk/LTE6dD09PUx8fHQub3duZXJEb2N1bWVudD09PUkmJk0oSSx0KT8xOmo/ZWUoaixlKS1lZShqLHQpOjA6NCZuPy0xOjEpfTpmdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBBPSEwLDA7dmFyIG4saT0wLHI9ZS5wYXJlbnROb2RlLG89dC5wYXJlbnROb2RlLGE9W2VdLGw9W3RdO2lmKCFyfHwhbylyZXR1cm4gZT09PUw/LTE6dD09PUw/MTpyPy0xOm8/MTpqP2VlKGosZSktZWUoaix0KTowO2lmKHI9PT1vKXJldHVybiBzKGUsdCk7Zm9yKG49ZTtuPW4ucGFyZW50Tm9kZTspYS51bnNoaWZ0KG4pO2ZvcihuPXQ7bj1uLnBhcmVudE5vZGU7KWwudW5zaGlmdChuKTtmb3IoO2FbaV09PT1sW2ldOylpKys7cmV0dXJuIGk/cyhhW2ldLGxbaV0pOmFbaV09PT1JPy0xOmxbaV09PT1JPzE6MH0sTCk6TH0sdC5tYXRjaGVzPWZ1bmN0aW9uKGUsbil7cmV0dXJuIHQoZSxudWxsLG51bGwsbil9LHQubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGUsbil7aWYoKGUub3duZXJEb2N1bWVudHx8ZSkhPT1MJiYkKGUpLG49bi5yZXBsYWNlKGNlLFwiPSckMSddXCIpLF8ubWF0Y2hlc1NlbGVjdG9yJiZPJiYhVltuK1wiIFwiXSYmKCFIfHwhSC50ZXN0KG4pKSYmKCFQfHwhUC50ZXN0KG4pKSl0cnl7dmFyIGk9cS5jYWxsKGUsbik7aWYoaXx8Xy5kaXNjb25uZWN0ZWRNYXRjaHx8ZS5kb2N1bWVudCYmMTEhPT1lLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBpfWNhdGNoKHIpe31yZXR1cm4gdChuLEwsbnVsbCxbZV0pLmxlbmd0aD4wfSx0LmNvbnRhaW5zPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPT1MJiYkKGUpLE0oZSx0KX0sdC5hdHRyPWZ1bmN0aW9uKGUsdCl7KGUub3duZXJEb2N1bWVudHx8ZSkhPT1MJiYkKGUpO3ZhciBuPUMuYXR0ckhhbmRsZVt0LnRvTG93ZXJDYXNlKCldLGk9biYmWS5jYWxsKEMuYXR0ckhhbmRsZSx0LnRvTG93ZXJDYXNlKCkpP24oZSx0LCFPKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWk/aTpfLmF0dHJpYnV0ZXN8fCFPP2UuZ2V0QXR0cmlidXRlKHQpOihpPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJmkuc3BlY2lmaWVkP2kudmFsdWU6bnVsbH0sdC5lc2NhcGU9ZnVuY3Rpb24oZSl7cmV0dXJuKGUrXCJcIikucmVwbGFjZShiZSxfZSl9LHQuZXJyb3I9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrZSl9LHQudW5pcXVlU29ydD1mdW5jdGlvbihlKXt2YXIgdCxuPVtdLGk9MCxyPTA7aWYoQT0hXy5kZXRlY3REdXBsaWNhdGVzLGo9IV8uc29ydFN0YWJsZSYmZS5zbGljZSgwKSxlLnNvcnQoWCksQSl7Zm9yKDt0PWVbcisrXTspdD09PWVbcl0mJihpPW4ucHVzaChyKSk7Zm9yKDtpLS07KWUuc3BsaWNlKG5baV0sMSl9cmV0dXJuIGo9bnVsbCxlfSxUPXQuZ2V0VGV4dD1mdW5jdGlvbihlKXt2YXIgdCxuPVwiXCIsaT0wLHI9ZS5ub2RlVHlwZTtpZihyKXtpZigxPT09cnx8OT09PXJ8fDExPT09cil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUudGV4dENvbnRlbnQpcmV0dXJuIGUudGV4dENvbnRlbnQ7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKW4rPVQoZSl9ZWxzZSBpZigzPT09cnx8ND09PXIpcmV0dXJuIGUubm9kZVZhbHVlfWVsc2UgZm9yKDt0PWVbaSsrXTspbis9VCh0KTtyZXR1cm4gbn0sQz10LnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmksbWF0Y2g6ZGUsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnJlcGxhY2Uod2UseGUpLGVbM109KGVbM118fGVbNF18fGVbNV18fFwiXCIpLnJlcGxhY2Uod2UseGUpLFwifj1cIj09PWVbMl0mJihlWzNdPVwiIFwiK2VbM10rXCIgXCIpLGUuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1lWzFdLnNsaWNlKDAsMyk/KGVbM118fHQuZXJyb3IoZVswXSksZVs0XT0rKGVbNF0/ZVs1XSsoZVs2XXx8MSk6MiooXCJldmVuXCI9PT1lWzNdfHxcIm9kZFwiPT09ZVszXSkpLGVbNV09KyhlWzddK2VbOF18fFwib2RkXCI9PT1lWzNdKSk6ZVszXSYmdC5lcnJvcihlWzBdKSxlfSxQU0VVRE86ZnVuY3Rpb24oZSl7dmFyIHQsbj0hZVs2XSYmZVsyXTtyZXR1cm4gZGUuQ0hJTEQudGVzdChlWzBdKT9udWxsOihlWzNdP2VbMl09ZVs0XXx8ZVs1XXx8XCJcIjpuJiZoZS50ZXN0KG4pJiYodD1rKG4sITApKSYmKHQ9bi5pbmRleE9mKFwiKVwiLG4ubGVuZ3RoLXQpLW4ubGVuZ3RoKSYmKGVbMF09ZVswXS5zbGljZSgwLHQpLGVbMl09bi5zbGljZSgwLHQpKSxlLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKHdlLHhlKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09ZT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihlKXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dH19LENMQVNTOmZ1bmN0aW9uKGUpe3ZhciB0PUZbZStcIiBcIl07cmV0dXJuIHR8fCh0PW5ldyBSZWdFeHAoXCIoXnxcIituZStcIilcIitlK1wiKFwiK25lK1wifCQpXCIpKSYmRihlLGZ1bmN0aW9uKGUpe3JldHVybiB0LnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGUuY2xhc3NOYW1lJiZlLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGUsbixpKXtyZXR1cm4gZnVuY3Rpb24ocil7dmFyIG89dC5hdHRyKHIsZSk7cmV0dXJuIG51bGw9PW8/XCIhPVwiPT09bjohbnx8KG8rPVwiXCIsXCI9XCI9PT1uP289PT1pOlwiIT1cIj09PW4/byE9PWk6XCJePVwiPT09bj9pJiYwPT09by5pbmRleE9mKGkpOlwiKj1cIj09PW4/aSYmby5pbmRleE9mKGkpPi0xOlwiJD1cIj09PW4/aSYmby5zbGljZSgtaS5sZW5ndGgpPT09aTpcIn49XCI9PT1uPyhcIiBcIitvLnJlcGxhY2Uoc2UsXCIgXCIpK1wiIFwiKS5pbmRleE9mKGkpPi0xOlwifD1cIj09PW4mJihvPT09aXx8by5zbGljZSgwLGkubGVuZ3RoKzEpPT09aStcIi1cIikpfX0sQ0hJTEQ6ZnVuY3Rpb24oZSx0LG4saSxyKXt2YXIgbz1cIm50aFwiIT09ZS5zbGljZSgwLDMpLHM9XCJsYXN0XCIhPT1lLnNsaWNlKC00KSxhPVwib2YtdHlwZVwiPT09dDtyZXR1cm4gMT09PWkmJjA9PT1yP2Z1bmN0aW9uKGUpe3JldHVybiEhZS5wYXJlbnROb2RlfTpmdW5jdGlvbih0LG4sbCl7dmFyIHUsYyxoLHAsZCxmLGc9byE9PXM/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIsbT10LnBhcmVudE5vZGUsdj1hJiZ0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkseT0hbCYmIWEsdz0hMTtpZihtKXtpZihvKXtmb3IoO2c7KXtmb3IocD10O3A9cFtnXTspaWYoYT9wLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT12OjE9PT1wLm5vZGVUeXBlKXJldHVybiExO2Y9Zz1cIm9ubHlcIj09PWUmJiFmJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYoZj1bcz9tLmZpcnN0Q2hpbGQ6bS5sYXN0Q2hpbGRdLHMmJnkpe2ZvcihwPW0saD1wW1JdfHwocFtSXT17fSksYz1oW3AudW5pcXVlSURdfHwoaFtwLnVuaXF1ZUlEXT17fSksdT1jW2VdfHxbXSxkPXVbMF09PT1CJiZ1WzFdLHc9ZCYmdVsyXSxwPWQmJm0uY2hpbGROb2Rlc1tkXTtwPSsrZCYmcCYmcFtnXXx8KHc9ZD0wKXx8Zi5wb3AoKTspaWYoMT09PXAubm9kZVR5cGUmJisrdyYmcD09PXQpe2NbZV09W0IsZCx3XTticmVha319ZWxzZSBpZih5JiYocD10LGg9cFtSXXx8KHBbUl09e30pLGM9aFtwLnVuaXF1ZUlEXXx8KGhbcC51bmlxdWVJRF09e30pLHU9Y1tlXXx8W10sZD11WzBdPT09QiYmdVsxXSx3PWQpLHc9PT0hMSlmb3IoOyhwPSsrZCYmcCYmcFtnXXx8KHc9ZD0wKXx8Zi5wb3AoKSkmJigoYT9wLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkhPT12OjEhPT1wLm5vZGVUeXBlKXx8ISsrd3x8KHkmJihoPXBbUl18fChwW1JdPXt9KSxjPWhbcC51bmlxdWVJRF18fChoW3AudW5pcXVlSURdPXt9KSxjW2VdPVtCLHddKSxwIT09dCkpOyk7cmV0dXJuIHctPXIsdz09PWl8fHclaT09PTAmJncvaT49MH19fSxQU0VVRE86ZnVuY3Rpb24oZSxuKXt2YXIgcixvPUMucHNldWRvc1tlXXx8Qy5zZXRGaWx0ZXJzW2UudG9Mb3dlckNhc2UoKV18fHQuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2UpO3JldHVybiBvW1JdP28obik6by5sZW5ndGg+MT8ocj1bZSxlLFwiXCIsbl0sQy5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGUudG9Mb3dlckNhc2UoKSk/aShmdW5jdGlvbihlLHQpe2Zvcih2YXIgaSxyPW8oZSxuKSxzPXIubGVuZ3RoO3MtLTspaT1lZShlLHJbc10pLGVbaV09ISh0W2ldPXJbc10pfSk6ZnVuY3Rpb24oZSl7cmV0dXJuIG8oZSwwLHIpfSk6b319LHBzZXVkb3M6e25vdDppKGZ1bmN0aW9uKGUpe3ZhciB0PVtdLG49W10scj1TKGUucmVwbGFjZShhZSxcIiQxXCIpKTtyZXR1cm4gcltSXT9pKGZ1bmN0aW9uKGUsdCxuLGkpe2Zvcih2YXIgbyxzPXIoZSxudWxsLGksW10pLGE9ZS5sZW5ndGg7YS0tOykobz1zW2FdKSYmKGVbYV09ISh0W2FdPW8pKX0pOmZ1bmN0aW9uKGUsaSxvKXtyZXR1cm4gdFswXT1lLHIodCxudWxsLG8sbiksdFswXT1udWxsLCFuLnBvcCgpfX0pLGhhczppKGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdChlLG4pLmxlbmd0aD4wfX0pLGNvbnRhaW5zOmkoZnVuY3Rpb24oZSl7cmV0dXJuIGU9ZS5yZXBsYWNlKHdlLHhlKSxmdW5jdGlvbih0KXtyZXR1cm4odC50ZXh0Q29udGVudHx8dC5pbm5lclRleHR8fFQodCkpLmluZGV4T2YoZSk+LTF9fSksbGFuZzppKGZ1bmN0aW9uKGUpe3JldHVybiBwZS50ZXN0KGV8fFwiXCIpfHx0LmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrZSksZT1lLnJlcGxhY2Uod2UseGUpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24odCl7dmFyIG47ZG8gaWYobj1PP3QubGFuZzp0LmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHx0LmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuIG49bi50b0xvd2VyQ2FzZSgpLG49PT1lfHwwPT09bi5pbmRleE9mKGUrXCItXCIpO3doaWxlKCh0PXQucGFyZW50Tm9kZSkmJjE9PT10Lm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24odCl7dmFyIG49ZS5sb2NhdGlvbiYmZS5sb2NhdGlvbi5oYXNoO3JldHVybiBuJiZuLnNsaWNlKDEpPT09dC5pZH0scm9vdDpmdW5jdGlvbihlKXtyZXR1cm4gZT09PXp9LGZvY3VzOmZ1bmN0aW9uKGUpe3JldHVybiBlPT09TC5hY3RpdmVFbGVtZW50JiYoIUwuaGFzRm9jdXN8fEwuaGFzRm9jdXMoKSkmJiEhKGUudHlwZXx8ZS5ocmVmfHx+ZS50YWJJbmRleCl9LGVuYWJsZWQ6dSghMSksZGlzYWJsZWQ6dSghMCksY2hlY2tlZDpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmISFlLmNoZWNrZWR8fFwib3B0aW9uXCI9PT10JiYhIWUuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LGUuc2VsZWN0ZWQ9PT0hMH0sZW1wdHk6ZnVuY3Rpb24oZSl7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKWlmKGUubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGUpe3JldHVybiFDLnBzZXVkb3MuZW1wdHkoZSl9LGhlYWRlcjpmdW5jdGlvbihlKXtyZXR1cm4gZ2UudGVzdChlLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGZlLnRlc3QoZS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmXCJidXR0b25cIj09PWUudHlwZXx8XCJidXR0b25cIj09PXR9LHRleHQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWUudHlwZSYmKG51bGw9PSh0PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09dC50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6YyhmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6YyhmdW5jdGlvbihlLHQpe3JldHVyblt0LTFdfSksZXE6YyhmdW5jdGlvbihlLHQsbil7cmV0dXJuW248MD9uK3Q6bl19KSxldmVuOmMoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MDtuPHQ7bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxvZGQ6YyhmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0xO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLGx0OmMoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgaT1uPDA/bit0Om47LS1pPj0wOyllLnB1c2goaSk7cmV0dXJuIGV9KSxndDpjKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIGk9bjwwP24rdDpuOysraTx0OyllLnB1c2goaSk7cmV0dXJuIGV9KX19LEMucHNldWRvcy5udGg9Qy5wc2V1ZG9zLmVxO2ZvcihiIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KUMucHNldWRvc1tiXT1hKGIpO2ZvcihiIGlue3N1Ym1pdDohMCxyZXNldDohMH0pQy5wc2V1ZG9zW2JdPWwoYik7cmV0dXJuIHAucHJvdG90eXBlPUMuZmlsdGVycz1DLnBzZXVkb3MsQy5zZXRGaWx0ZXJzPW5ldyBwLGs9dC50b2tlbml6ZT1mdW5jdGlvbihlLG4pe3ZhciBpLHIsbyxzLGEsbCx1LGM9VVtlK1wiIFwiXTtpZihjKXJldHVybiBuPzA6Yy5zbGljZSgwKTtmb3IoYT1lLGw9W10sdT1DLnByZUZpbHRlcjthOyl7aSYmIShyPWxlLmV4ZWMoYSkpfHwociYmKGE9YS5zbGljZShyWzBdLmxlbmd0aCl8fGEpLGwucHVzaChvPVtdKSksaT0hMSwocj11ZS5leGVjKGEpKSYmKGk9ci5zaGlmdCgpLG8ucHVzaCh7dmFsdWU6aSx0eXBlOnJbMF0ucmVwbGFjZShhZSxcIiBcIil9KSxhPWEuc2xpY2UoaS5sZW5ndGgpKTtmb3IocyBpbiBDLmZpbHRlcikhKHI9ZGVbc10uZXhlYyhhKSl8fHVbc10mJiEocj11W3NdKHIpKXx8KGk9ci5zaGlmdCgpLG8ucHVzaCh7dmFsdWU6aSx0eXBlOnMsbWF0Y2hlczpyfSksYT1hLnNsaWNlKGkubGVuZ3RoKSk7aWYoIWkpYnJlYWt9cmV0dXJuIG4/YS5sZW5ndGg6YT90LmVycm9yKGUpOlUoZSxsKS5zbGljZSgwKX0sUz10LmNvbXBpbGU9ZnVuY3Rpb24oZSx0KXt2YXIgbixpPVtdLHI9W10sbz1WW2UrXCIgXCJdO2lmKCFvKXtmb3IodHx8KHQ9ayhlKSksbj10Lmxlbmd0aDtuLS07KW89dyh0W25dKSxvW1JdP2kucHVzaChvKTpyLnB1c2gobyk7bz1WKGUseChyLGkpKSxvLnNlbGVjdG9yPWV9cmV0dXJuIG99LEQ9dC5zZWxlY3Q9ZnVuY3Rpb24oZSx0LG4saSl7dmFyIHIsbyxzLGEsbCx1PVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUsYz0haSYmayhlPXUuc2VsZWN0b3J8fGUpO2lmKG49bnx8W10sMT09PWMubGVuZ3RoKXtpZihvPWNbMF09Y1swXS5zbGljZSgwKSxvLmxlbmd0aD4yJiZcIklEXCI9PT0ocz1vWzBdKS50eXBlJiY5PT09dC5ub2RlVHlwZSYmTyYmQy5yZWxhdGl2ZVtvWzFdLnR5cGVdKXtpZih0PShDLmZpbmQuSUQocy5tYXRjaGVzWzBdLnJlcGxhY2Uod2UseGUpLHQpfHxbXSlbMF0sIXQpcmV0dXJuIG47dSYmKHQ9dC5wYXJlbnROb2RlKSxlPWUuc2xpY2Uoby5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9Zm9yKHI9ZGUubmVlZHNDb250ZXh0LnRlc3QoZSk/MDpvLmxlbmd0aDtyLS0mJihzPW9bcl0sIUMucmVsYXRpdmVbYT1zLnR5cGVdKTspaWYoKGw9Qy5maW5kW2FdKSYmKGk9bChzLm1hdGNoZXNbMF0ucmVwbGFjZSh3ZSx4ZSkseWUudGVzdChvWzBdLnR5cGUpJiZoKHQucGFyZW50Tm9kZSl8fHQpKSl7aWYoby5zcGxpY2UociwxKSxlPWkubGVuZ3RoJiZkKG8pLCFlKXJldHVybiBRLmFwcGx5KG4saSksbjticmVha319cmV0dXJuKHV8fFMoZSxjKSkoaSx0LCFPLG4sIXR8fHllLnRlc3QoZSkmJmgodC5wYXJlbnROb2RlKXx8dCksbn0sXy5zb3J0U3RhYmxlPVIuc3BsaXQoXCJcIikuc29ydChYKS5qb2luKFwiXCIpPT09UixfLmRldGVjdER1cGxpY2F0ZXM9ISFBLCQoKSxfLnNvcnREZXRhY2hlZD1yKGZ1bmN0aW9uKGUpe3JldHVybiAxJmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oTC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIikpfSkscihmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxvKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbilyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodCxcInR5cGVcIj09PXQudG9Mb3dlckNhc2UoKT8xOjIpfSksXy5hdHRyaWJ1dGVzJiZyKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsZS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxvKFwidmFsdWVcIixmdW5jdGlvbihlLHQsbil7aWYoIW4mJlwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSlyZXR1cm4gZS5kZWZhdWx0VmFsdWV9KSxyKGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fG8odGUsZnVuY3Rpb24oZSx0LG4pe3ZhciBpO2lmKCFuKXJldHVybiBlW3RdPT09ITA/dC50b0xvd2VyQ2FzZSgpOihpPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJmkuc3BlY2lmaWVkP2kudmFsdWU6bnVsbH0pLHR9KG4pO2tlLmZpbmQ9RGUsa2UuZXhwcj1EZS5zZWxlY3RvcnMsa2UuZXhwcltcIjpcIl09a2UuZXhwci5wc2V1ZG9zLGtlLnVuaXF1ZVNvcnQ9a2UudW5pcXVlPURlLnVuaXF1ZVNvcnQsa2UudGV4dD1EZS5nZXRUZXh0LGtlLmlzWE1MRG9jPURlLmlzWE1MLGtlLmNvbnRhaW5zPURlLmNvbnRhaW5zLGtlLmVzY2FwZVNlbGVjdG9yPURlLmVzY2FwZTt2YXIgTmU9ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgaT1bXSxyPXZvaWQgMCE9PW47KGU9ZVt0XSkmJjkhPT1lLm5vZGVUeXBlOylpZigxPT09ZS5ub2RlVHlwZSl7aWYociYma2UoZSkuaXMobikpYnJlYWs7aS5wdXNoKGUpfXJldHVybiBpfSxqZT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bXTtlO2U9ZS5uZXh0U2libGluZykxPT09ZS5ub2RlVHlwZSYmZSE9PXQmJm4ucHVzaChlKTtyZXR1cm4gbn0sQWU9a2UuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQsJGU9L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2k7a2UuZmlsdGVyPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10WzBdO3JldHVybiBuJiYoZT1cIjpub3QoXCIrZStcIilcIiksMT09PXQubGVuZ3RoJiYxPT09aS5ub2RlVHlwZT9rZS5maW5kLm1hdGNoZXNTZWxlY3RvcihpLGUpP1tpXTpbXTprZS5maW5kLm1hdGNoZXMoZSxrZS5ncmVwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfSkpfSxrZS5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixpPXRoaXMubGVuZ3RoLHI9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gdGhpcy5wdXNoU3RhY2soa2UoZSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHQ9MDt0PGk7dCsrKWlmKGtlLmNvbnRhaW5zKHJbdF0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKG49dGhpcy5wdXNoU3RhY2soW10pLHQ9MDt0PGk7dCsrKWtlLmZpbmQoZSxyW3RdLG4pO3JldHVybiBpPjE/a2UudW5pcXVlU29ydChuKTpufSxmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGModGhpcyxlfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGModGhpcyxlfHxbXSwhMCkpfSxpczpmdW5jdGlvbihlKXtyZXR1cm4hIWModGhpcyxcInN0cmluZ1wiPT10eXBlb2YgZSYmQWUudGVzdChlKT9rZShlKTplfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBMZSx6ZT0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLyxPZT1rZS5mbi5pbml0PWZ1bmN0aW9uKGUsdCxuKXt2YXIgaSxyO2lmKCFlKXJldHVybiB0aGlzO2lmKG49bnx8TGUsXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKGk9XCI8XCI9PT1lWzBdJiZcIj5cIj09PWVbZS5sZW5ndGgtMV0mJmUubGVuZ3RoPj0zP1tudWxsLGUsbnVsbF06emUuZXhlYyhlKSwhaXx8IWlbMV0mJnQpcmV0dXJuIXR8fHQuanF1ZXJ5Pyh0fHxuKS5maW5kKGUpOnRoaXMuY29uc3RydWN0b3IodCkuZmluZChlKTtpZihpWzFdKXtpZih0PXQgaW5zdGFuY2VvZiBrZT90WzBdOnQsa2UubWVyZ2UodGhpcyxrZS5wYXJzZUhUTUwoaVsxXSx0JiZ0Lm5vZGVUeXBlP3Qub3duZXJEb2N1bWVudHx8dDpjZSwhMCkpLCRlLnRlc3QoaVsxXSkmJmtlLmlzUGxhaW5PYmplY3QodCkpZm9yKGkgaW4gdClfZSh0aGlzW2ldKT90aGlzW2ldKHRbaV0pOnRoaXMuYXR0cihpLHRbaV0pO3JldHVybiB0aGlzfXJldHVybiByPWNlLmdldEVsZW1lbnRCeUlkKGlbMl0pLHImJih0aGlzWzBdPXIsdGhpcy5sZW5ndGg9MSksdGhpc31yZXR1cm4gZS5ub2RlVHlwZT8odGhpc1swXT1lLHRoaXMubGVuZ3RoPTEsdGhpcyk6X2UoZSk/dm9pZCAwIT09bi5yZWFkeT9uLnJlYWR5KGUpOmUoa2UpOmtlLm1ha2VBcnJheShlLHRoaXMpfTtPZS5wcm90b3R5cGU9a2UuZm4sTGU9a2UoY2UpO3ZhciBQZT0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxIZT17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtrZS5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihlKXt2YXIgdD1rZShlLHRoaXMpLG49dC5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxuO2UrKylpZihrZS5jb250YWlucyh0aGlzLHRbZV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgbixpPTAscj10aGlzLmxlbmd0aCxvPVtdLHM9XCJzdHJpbmdcIiE9dHlwZW9mIGUmJmtlKGUpO2lmKCFBZS50ZXN0KGUpKWZvcig7aTxyO2krKylmb3Iobj10aGlzW2ldO24mJm4hPT10O249bi5wYXJlbnROb2RlKWlmKG4ubm9kZVR5cGU8MTEmJihzP3MuaW5kZXgobik+LTE6MT09PW4ubm9kZVR5cGUmJmtlLmZpbmQubWF0Y2hlc1NlbGVjdG9yKG4sZSkpKXtvLnB1c2gobik7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKG8ubGVuZ3RoPjE/a2UudW5pcXVlU29ydChvKTpvKX0saW5kZXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/XCJzdHJpbmdcIj09dHlwZW9mIGU/Z2UuY2FsbChrZShlKSx0aGlzWzBdKTpnZS5jYWxsKHRoaXMsZS5qcXVlcnk/ZVswXTplKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLnB1c2hTdGFjayhrZS51bmlxdWVTb3J0KGtlLm1lcmdlKHRoaXMuZ2V0KCksa2UoZSx0KSkpKX0sYWRkQmFjazpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09ZT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihlKSl9fSksa2UuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmMTEhPT10Lm5vZGVUeXBlP3Q6bnVsbH0scGFyZW50czpmdW5jdGlvbihlKXtyZXR1cm4gTmUoZSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIE5lKGUsXCJwYXJlbnROb2RlXCIsbil9LG5leHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGUpe3JldHVybiBoKGUsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIE5lKGUsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihlKXtyZXR1cm4gTmUoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gTmUoZSxcIm5leHRTaWJsaW5nXCIsbil9LHByZXZVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIE5lKGUsXCJwcmV2aW91c1NpYmxpbmdcIixuKX0sc2libGluZ3M6ZnVuY3Rpb24oZSl7cmV0dXJuIGplKChlLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gamUoZS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIHUoZSxcImlmcmFtZVwiKT9lLmNvbnRlbnREb2N1bWVudDoodShlLFwidGVtcGxhdGVcIikmJihlPWUuY29udGVudHx8ZSksa2UubWVyZ2UoW10sZS5jaGlsZE5vZGVzKSl9fSxmdW5jdGlvbihlLHQpe2tlLmZuW2VdPWZ1bmN0aW9uKG4saSl7dmFyIHI9a2UubWFwKHRoaXMsdCxuKTtyZXR1cm5cIlVudGlsXCIhPT1lLnNsaWNlKC01KSYmKGk9biksaSYmXCJzdHJpbmdcIj09dHlwZW9mIGkmJihyPWtlLmZpbHRlcihpLHIpKSx0aGlzLmxlbmd0aD4xJiYoSGVbZV18fGtlLnVuaXF1ZVNvcnQociksUGUudGVzdChlKSYmci5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKHIpfX0pO3ZhciBxZT0vW15cXHgyMFxcdFxcclxcblxcZl0rL2c7a2UuQ2FsbGJhY2tzPWZ1bmN0aW9uKGUpe2U9XCJzdHJpbmdcIj09dHlwZW9mIGU/cChlKTprZS5leHRlbmQoe30sZSk7dmFyIHQsbixpLHIsbz1bXSxzPVtdLGw9LTEsdT1mdW5jdGlvbigpe2ZvcihyPXJ8fGUub25jZSxpPXQ9ITA7cy5sZW5ndGg7bD0tMSlmb3Iobj1zLnNoaWZ0KCk7KytsPG8ubGVuZ3RoOylvW2xdLmFwcGx5KG5bMF0sblsxXSk9PT0hMSYmZS5zdG9wT25GYWxzZSYmKGw9by5sZW5ndGgsbj0hMSk7ZS5tZW1vcnl8fChuPSExKSx0PSExLHImJihvPW4/W106XCJcIil9LGM9e2FkZDpmdW5jdGlvbigpe3JldHVybiBvJiYobiYmIXQmJihsPW8ubGVuZ3RoLTEscy5wdXNoKG4pKSxmdW5jdGlvbiBpKHQpe2tlLmVhY2godCxmdW5jdGlvbih0LG4pe19lKG4pP2UudW5pcXVlJiZjLmhhcyhuKXx8by5wdXNoKG4pOm4mJm4ubGVuZ3RoJiZcInN0cmluZ1wiIT09YShuKSYmaShuKX0pfShhcmd1bWVudHMpLG4mJiF0JiZ1KCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBrZS5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihlLHQpe2Zvcih2YXIgbjsobj1rZS5pbkFycmF5KHQsbyxuKSk+LTE7KW8uc3BsaWNlKG4sMSksbjw9bCYmbC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGUpe3JldHVybiBlP2tlLmluQXJyYXkoZSxvKT4tMTpvLmxlbmd0aD4wfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBvJiYobz1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiByPXM9W10sbz1uPVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hb30sbG9jazpmdW5jdGlvbigpe3JldHVybiByPXM9W10sbnx8dHx8KG89bj1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIXJ9LGZpcmVXaXRoOmZ1bmN0aW9uKGUsbil7cmV0dXJuIHJ8fChuPW58fFtdLG49W2Usbi5zbGljZT9uLnNsaWNlKCk6bl0scy5wdXNoKG4pLHR8fHUoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBjLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhaX19O3JldHVybiBjfSxrZS5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGUpe3ZhciB0PVtbXCJub3RpZnlcIixcInByb2dyZXNzXCIsa2UuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLGtlLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSwyXSxbXCJyZXNvbHZlXCIsXCJkb25lXCIsa2UuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksa2UuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMCxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLGtlLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLGtlLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDEsXCJyZWplY3RlZFwiXV0saT1cInBlbmRpbmdcIixyPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBpfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gby5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LFwiY2F0Y2hcIjpmdW5jdGlvbihlKXtyZXR1cm4gci50aGVuKG51bGwsZSl9LHBpcGU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHM7cmV0dXJuIGtlLkRlZmVycmVkKGZ1bmN0aW9uKG4pe2tlLmVhY2godCxmdW5jdGlvbih0LGkpe3ZhciByPV9lKGVbaVs0XV0pJiZlW2lbNF1dO29baVsxXV0oZnVuY3Rpb24oKXt2YXIgZT1yJiZyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtlJiZfZShlLnByb21pc2UpP2UucHJvbWlzZSgpLnByb2dyZXNzKG4ubm90aWZ5KS5kb25lKG4ucmVzb2x2ZSkuZmFpbChuLnJlamVjdCk6bltpWzBdK1wiV2l0aFwiXSh0aGlzLHI/W2VdOmFyZ3VtZW50cyl9KX0pLGU9bnVsbH0pLnByb21pc2UoKX0sdGhlbjpmdW5jdGlvbihlLGkscil7ZnVuY3Rpb24gbyhlLHQsaSxyKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYT10aGlzLGw9YXJndW1lbnRzLHU9ZnVuY3Rpb24oKXt2YXIgbix1O2lmKCEoZTxzKSl7aWYobj1pLmFwcGx5KGEsbCksbj09PXQucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7dT1uJiYoXCJvYmplY3RcIj09dHlwZW9mIG58fFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pJiZuLnRoZW4sX2UodSk/cj91LmNhbGwobixvKHMsdCxkLHIpLG8ocyx0LGYscikpOihzKyssdS5jYWxsKG4sbyhzLHQsZCxyKSxvKHMsdCxmLHIpLG8ocyx0LGQsdC5ub3RpZnlXaXRoKSkpOihpIT09ZCYmKGE9dm9pZCAwLGw9W25dKSwocnx8dC5yZXNvbHZlV2l0aCkoYSxsKSl9fSxjPXI/dTpmdW5jdGlvbigpe3RyeXt1KCl9Y2F0Y2gobil7a2UuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayYma2UuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayhuLGMuc3RhY2tUcmFjZSksZSsxPj1zJiYoaSE9PWYmJihhPXZvaWQgMCxsPVtuXSksdC5yZWplY3RXaXRoKGEsbCkpfX07ZT9jKCk6KGtlLkRlZmVycmVkLmdldFN0YWNrSG9vayYmKGMuc3RhY2tUcmFjZT1rZS5EZWZlcnJlZC5nZXRTdGFja0hvb2soKSksbi5zZXRUaW1lb3V0KGMpKX19dmFyIHM9MDtyZXR1cm4ga2UuRGVmZXJyZWQoZnVuY3Rpb24obil7dFswXVszXS5hZGQobygwLG4sX2Uocik/cjpkLG4ubm90aWZ5V2l0aCkpLHRbMV1bM10uYWRkKG8oMCxuLF9lKGUpP2U6ZCkpLHRbMl1bM10uYWRkKG8oMCxuLF9lKGkpP2k6ZikpfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lP2tlLmV4dGVuZChlLHIpOnJ9fSxvPXt9O3JldHVybiBrZS5lYWNoKHQsZnVuY3Rpb24oZSxuKXt2YXIgcz1uWzJdLGE9bls1XTtyW25bMV1dPXMuYWRkLGEmJnMuYWRkKGZ1bmN0aW9uKCl7aT1hfSx0WzMtZV1bMl0uZGlzYWJsZSx0WzMtZV1bM10uZGlzYWJsZSx0WzBdWzJdLmxvY2ssdFswXVszXS5sb2NrKSxzLmFkZChuWzNdLmZpcmUpLG9bblswXV09ZnVuY3Rpb24oKXtyZXR1cm4gb1tuWzBdK1wiV2l0aFwiXSh0aGlzPT09bz92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LG9bblswXStcIldpdGhcIl09cy5maXJlV2l0aH0pLHIucHJvbWlzZShvKSxlJiZlLmNhbGwobyxvKSxvfSx3aGVuOmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj10LGk9QXJyYXkobikscj1wZS5jYWxsKGFyZ3VtZW50cyksbz1rZS5EZWZlcnJlZCgpLHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKG4pe2lbZV09dGhpcyxyW2VdPWFyZ3VtZW50cy5sZW5ndGg+MT9wZS5jYWxsKGFyZ3VtZW50cyk6biwtLXR8fG8ucmVzb2x2ZVdpdGgoaSxyKX19O2lmKHQ8PTEmJihnKGUsby5kb25lKHMobikpLnJlc29sdmUsby5yZWplY3QsIXQpLFwicGVuZGluZ1wiPT09by5zdGF0ZSgpfHxfZShyW25dJiZyW25dLnRoZW4pKSlyZXR1cm4gby50aGVuKCk7Zm9yKDtuLS07KWcocltuXSxzKG4pLG8ucmVqZWN0KTtyZXR1cm4gby5wcm9taXNlKCl9fSk7dmFyIE1lPS9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO2tlLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2s9ZnVuY3Rpb24oZSx0KXtuLmNvbnNvbGUmJm4uY29uc29sZS53YXJuJiZlJiZNZS50ZXN0KGUubmFtZSkmJm4uY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIrZS5tZXNzYWdlLGUuc3RhY2ssdCl9LGtlLnJlYWR5RXhjZXB0aW9uPWZ1bmN0aW9uKGUpe24uc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGV9KX07dmFyIFJlPWtlLkRlZmVycmVkKCk7a2UuZm4ucmVhZHk9ZnVuY3Rpb24oZSl7cmV0dXJuIFJlLnRoZW4oZSlbXCJjYXRjaFwiXShmdW5jdGlvbihlKXtrZS5yZWFkeUV4Y2VwdGlvbihlKX0pLHRoaXN9LGtlLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxyZWFkeTpmdW5jdGlvbihlKXsoZT09PSEwPy0ta2UucmVhZHlXYWl0OmtlLmlzUmVhZHkpfHwoa2UuaXNSZWFkeT0hMCxlIT09ITAmJi0ta2UucmVhZHlXYWl0PjB8fFJlLnJlc29sdmVXaXRoKGNlLFtrZV0pKX19KSxrZS5yZWFkeS50aGVuPVJlLnRoZW4sXCJjb21wbGV0ZVwiPT09Y2UucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1jZS5yZWFkeVN0YXRlJiYhY2UuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsP24uc2V0VGltZW91dChrZS5yZWFkeSk6KGNlLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsbSksbi5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLG0pKTt2YXIgSWU9ZnVuY3Rpb24oZSx0LG4saSxyLG8scyl7dmFyIGw9MCx1PWUubGVuZ3RoLGM9bnVsbD09bjtpZihcIm9iamVjdFwiPT09YShuKSl7cj0hMDtmb3IobCBpbiBuKUllKGUsdCxsLG5bbF0sITAsbyxzKX1lbHNlIGlmKHZvaWQgMCE9PWkmJihyPSEwLF9lKGkpfHwocz0hMCksYyYmKHM/KHQuY2FsbChlLGkpLHQ9bnVsbCk6KGM9dCx0PWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gYy5jYWxsKGtlKGUpLG4pfSkpLHQpKWZvcig7bDx1O2wrKyl0KGVbbF0sbixzP2k6aS5jYWxsKGVbbF0sbCx0KGVbbF0sbikpKTtyZXR1cm4gcj9lOmM/dC5jYWxsKGUpOnU/dChlWzBdLG4pOm99LEJlPS9eLW1zLS8sV2U9Ly0oW2Etel0pL2csRmU9ZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfHw5PT09ZS5ub2RlVHlwZXx8IStlLm5vZGVUeXBlfTt3LnVpZD0xLHcucHJvdG90eXBlPXtjYWNoZTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHR8fCh0PXt9LEZlKGUpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dDpPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0aGlzLmV4cGFuZG8se3ZhbHVlOnQsY29uZmlndXJhYmxlOiEwfSkpKSx0fSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpLHI9dGhpcy5jYWNoZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyW3kodCldPW47ZWxzZSBmb3IoaSBpbiB0KXJbeShpKV09dFtpXTtyZXR1cm4gcn0sZ2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQ/dGhpcy5jYWNoZShlKTplW3RoaXMuZXhwYW5kb10mJmVbdGhpcy5leHBhbmRvXVt5KHQpXX0sYWNjZXNzOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdm9pZCAwPT09dHx8dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJnZvaWQgMD09PW4/dGhpcy5nZXQoZSx0KToodGhpcy5zZXQoZSx0LG4pLHZvaWQgMCE9PW4/bjp0KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7dmFyIG4saT1lW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09aSl7aWYodm9pZCAwIT09dCl7QXJyYXkuaXNBcnJheSh0KT90PXQubWFwKHkpOih0PXkodCksdD10IGluIGk/W3RdOnQubWF0Y2gocWUpfHxbXSksbj10Lmxlbmd0aDtmb3IoO24tLTspZGVsZXRlIGlbdFtuXV19KHZvaWQgMD09PXR8fGtlLmlzRW1wdHlPYmplY3QoaSkpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBlW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PXQmJiFrZS5pc0VtcHR5T2JqZWN0KHQpfX07dmFyIFVlPW5ldyB3LFZlPW5ldyB3LFhlPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxZZT0vW0EtWl0vZztrZS5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIFZlLmhhc0RhdGEoZSl8fFVlLmhhc0RhdGEoZSl9LGRhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBWZS5hY2Nlc3MoZSx0LG4pfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7VmUucmVtb3ZlKGUsdCl9LF9kYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gVWUuYWNjZXNzKGUsdCxuKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtVZS5yZW1vdmUoZSx0KX19KSxrZS5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oZSx0KXt2YXIgbixpLHIsbz10aGlzWzBdLHM9byYmby5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWUpe2lmKHRoaXMubGVuZ3RoJiYocj1WZS5nZXQobyksMT09PW8ubm9kZVR5cGUmJiFVZS5nZXQobyxcImhhc0RhdGFBdHRyc1wiKSkpe2ZvcihuPXMubGVuZ3RoO24tLTspc1tuXSYmKGk9c1tuXS5uYW1lLDA9PT1pLmluZGV4T2YoXCJkYXRhLVwiKSYmKGk9eShpLnNsaWNlKDUpKSxiKG8saSxyW2ldKSkpO1VlLnNldChvLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiByfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlP3RoaXMuZWFjaChmdW5jdGlvbigpe1ZlLnNldCh0aGlzLGUpfSk6SWUodGhpcyxmdW5jdGlvbih0KXt2YXIgbjtpZihvJiZ2b2lkIDA9PT10KXtpZihuPVZlLmdldChvLGUpLHZvaWQgMCE9PW4pcmV0dXJuIG47aWYobj1iKG8sZSksdm9pZCAwIT09bilyZXR1cm4gbn1lbHNlIHRoaXMuZWFjaChmdW5jdGlvbigpe1ZlLnNldCh0aGlzLGUsdCl9KX0sbnVsbCx0LGFyZ3VtZW50cy5sZW5ndGg+MSxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7VmUucmVtb3ZlKHRoaXMsZSl9KX19KSxrZS5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaTtpZihlKXJldHVybiB0PSh0fHxcImZ4XCIpK1wicXVldWVcIixpPVVlLmdldChlLHQpLG4mJighaXx8QXJyYXkuaXNBcnJheShuKT9pPVVlLmFjY2VzcyhlLHQsa2UubWFrZUFycmF5KG4pKTppLnB1c2gobikpLGl8fFtdfSxkZXF1ZXVlOmZ1bmN0aW9uKGUsdCl7dD10fHxcImZ4XCI7dmFyIG49a2UucXVldWUoZSx0KSxpPW4ubGVuZ3RoLHI9bi5zaGlmdCgpLG89a2UuX3F1ZXVlSG9va3MoZSx0KSxzPWZ1bmN0aW9uKCl7a2UuZGVxdWV1ZShlLHQpfTtcImlucHJvZ3Jlc3NcIj09PXImJihyPW4uc2hpZnQoKSxpLS0pLHImJihcImZ4XCI9PT10JiZuLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBvLnN0b3Asci5jYWxsKGUscyxvKSksIWkmJm8mJm8uZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihlLHQpe3ZhciBuPXQrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIFVlLmdldChlLG4pfHxVZS5hY2Nlc3MoZSxuLHtlbXB0eTprZS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtVZS5yZW1vdmUoZSxbdCtcInF1ZXVlXCIsbl0pfSl9KX19KSxrZS5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPVwiZnhcIixuLS0pLGFyZ3VtZW50cy5sZW5ndGg8bj9rZS5xdWV1ZSh0aGlzWzBdLGUpOnZvaWQgMD09PXQ/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgbj1rZS5xdWV1ZSh0aGlzLGUsdCk7a2UuX3F1ZXVlSG9va3ModGhpcyxlKSxcImZ4XCI9PT1lJiZcImlucHJvZ3Jlc3NcIiE9PW5bMF0mJmtlLmRlcXVldWUodGhpcyxlKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtrZS5kZXF1ZXVlKHRoaXMsZSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGUsdCl7dmFyIG4saT0xLHI9a2UuRGVmZXJyZWQoKSxvPXRoaXMscz10aGlzLmxlbmd0aCxhPWZ1bmN0aW9uKCl7LS1pfHxyLnJlc29sdmVXaXRoKG8sW29dKX07Zm9yKFwic3RyaW5nXCIhPXR5cGVvZiBlJiYodD1lLGU9dm9pZCAwKSxlPWV8fFwiZnhcIjtzLS07KW49VWUuZ2V0KG9bc10sZStcInF1ZXVlSG9va3NcIiksbiYmbi5lbXB0eSYmKGkrKyxuLmVtcHR5LmFkZChhKSk7cmV0dXJuIGEoKSxyLnByb21pc2UodCl9fSk7dmFyIEdlPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxaZT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitHZStcIikoW2EteiVdKikkXCIsXCJpXCIpLEplPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxRZT1mdW5jdGlvbihlLHQpe3JldHVybiBlPXR8fGUsXCJub25lXCI9PT1lLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1lLnN0eWxlLmRpc3BsYXkmJmtlLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKSYmXCJub25lXCI9PT1rZS5jc3MoZSxcImRpc3BsYXlcIil9LEtlPWZ1bmN0aW9uKGUsdCxuLGkpe3ZhciByLG8scz17fTtmb3IobyBpbiB0KXNbb109ZS5zdHlsZVtvXSxlLnN0eWxlW29dPXRbb107cj1uLmFwcGx5KGUsaXx8W10pO2ZvcihvIGluIHQpZS5zdHlsZVtvXT1zW29dO3JldHVybiByfSxldD17fTtrZS5mbi5leHRlbmQoe3Nob3c6ZnVuY3Rpb24oKXtyZXR1cm4gVCh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBUKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oZSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBlP2U/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7UWUodGhpcyk/a2UodGhpcykuc2hvdygpOmtlKHRoaXMpLmhpZGUoKX0pfX0pO3ZhciB0dD0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxudD0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSspL2ksaXQ9L14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxydD17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O3J0Lm9wdGdyb3VwPXJ0Lm9wdGlvbixydC50Ym9keT1ydC50Zm9vdD1ydC5jb2xncm91cD1ydC5jYXB0aW9uPXJ0LnRoZWFkLHJ0LnRoPXJ0LnRkO3ZhciBvdD0vPHwmIz9cXHcrOy87IWZ1bmN0aW9uKCl7dmFyIGU9Y2UuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHQ9ZS5hcHBlbmRDaGlsZChjZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxuPWNlLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbm4uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksbi5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLG4uc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSx0LmFwcGVuZENoaWxkKG4pLGJlLmNoZWNrQ2xvbmU9dC5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsdC5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIsYmUubm9DbG9uZUNoZWNrZWQ9ISF0LmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgc3Q9Y2UuZG9jdW1lbnRFbGVtZW50LGF0PS9ea2V5LyxsdD0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sdXQ9L14oW14uXSopKD86XFwuKC4rKXwpLztrZS5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihlLHQsbixpLHIpe3ZhciBvLHMsYSxsLHUsYyxoLHAsZCxmLGcsbT1VZS5nZXQoZSk7aWYobSlmb3Iobi5oYW5kbGVyJiYobz1uLG49by5oYW5kbGVyLHI9by5zZWxlY3RvciksciYma2UuZmluZC5tYXRjaGVzU2VsZWN0b3Ioc3Qsciksbi5ndWlkfHwobi5ndWlkPWtlLmd1aWQrKyksKGw9bS5ldmVudHMpfHwobD1tLmV2ZW50cz17fSksKHM9bS5oYW5kbGUpfHwocz1tLmhhbmRsZT1mdW5jdGlvbih0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2Yga2UmJmtlLmV2ZW50LnRyaWdnZXJlZCE9PXQudHlwZT9rZS5ldmVudC5kaXNwYXRjaC5hcHBseShlLGFyZ3VtZW50cyk6dm9pZCAwfSksdD0odHx8XCJcIikubWF0Y2gocWUpfHxbXCJcIl0sdT10Lmxlbmd0aDt1LS07KWE9dXQuZXhlYyh0W3VdKXx8W10sZD1nPWFbMV0sZj0oYVsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkJiYoaD1rZS5ldmVudC5zcGVjaWFsW2RdfHx7fSxkPShyP2guZGVsZWdhdGVUeXBlOmguYmluZFR5cGUpfHxkLGg9a2UuZXZlbnQuc3BlY2lhbFtkXXx8e30sYz1rZS5leHRlbmQoe3R5cGU6ZCxvcmlnVHlwZTpnLGRhdGE6aSxoYW5kbGVyOm4sZ3VpZDpuLmd1aWQsc2VsZWN0b3I6cixuZWVkc0NvbnRleHQ6ciYma2UuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChyKSxuYW1lc3BhY2U6Zi5qb2luKFwiLlwiKX0sbyksKHA9bFtkXSl8fChwPWxbZF09W10scC5kZWxlZ2F0ZUNvdW50PTAsaC5zZXR1cCYmaC5zZXR1cC5jYWxsKGUsaSxmLHMpIT09ITF8fGUuYWRkRXZlbnRMaXN0ZW5lciYmZS5hZGRFdmVudExpc3RlbmVyKGQscykpLGguYWRkJiYoaC5hZGQuY2FsbChlLGMpLGMuaGFuZGxlci5ndWlkfHwoYy5oYW5kbGVyLmd1aWQ9bi5ndWlkKSkscj9wLnNwbGljZShwLmRlbGVnYXRlQ291bnQrKywwLGMpOnAucHVzaChjKSxrZS5ldmVudC5nbG9iYWxbZF09ITApfSxyZW1vdmU6ZnVuY3Rpb24oZSx0LG4saSxyKXt2YXIgbyxzLGEsbCx1LGMsaCxwLGQsZixnLG09VWUuaGFzRGF0YShlKSYmVWUuZ2V0KGUpO2lmKG0mJihsPW0uZXZlbnRzKSl7Zm9yKHQ9KHR8fFwiXCIpLm1hdGNoKHFlKXx8W1wiXCJdLHU9dC5sZW5ndGg7dS0tOylpZihhPXV0LmV4ZWModFt1XSl8fFtdLGQ9Zz1hWzFdLGY9KGFbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCl7Zm9yKGg9a2UuZXZlbnQuc3BlY2lhbFtkXXx8e30sZD0oaT9oLmRlbGVnYXRlVHlwZTpoLmJpbmRUeXBlKXx8ZCxwPWxbZF18fFtdLGE9YVsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2Yuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLHM9bz1wLmxlbmd0aDtvLS07KWM9cFtvXSwhciYmZyE9PWMub3JpZ1R5cGV8fG4mJm4uZ3VpZCE9PWMuZ3VpZHx8YSYmIWEudGVzdChjLm5hbWVzcGFjZSl8fGkmJmkhPT1jLnNlbGVjdG9yJiYoXCIqKlwiIT09aXx8IWMuc2VsZWN0b3IpfHwocC5zcGxpY2UobywxKSxjLnNlbGVjdG9yJiZwLmRlbGVnYXRlQ291bnQtLSxoLnJlbW92ZSYmaC5yZW1vdmUuY2FsbChlLGMpKTtzJiYhcC5sZW5ndGgmJihoLnRlYXJkb3duJiZoLnRlYXJkb3duLmNhbGwoZSxmLG0uaGFuZGxlKSE9PSExfHxrZS5yZW1vdmVFdmVudChlLGQsbS5oYW5kbGUpLGRlbGV0ZSBsW2RdKX1lbHNlIGZvcihkIGluIGwpa2UuZXZlbnQucmVtb3ZlKGUsZCt0W3VdLG4saSwhMCk7a2UuaXNFbXB0eU9iamVjdChsKSYmVWUucmVtb3ZlKGUsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dmFyIHQsbixpLHIsbyxzLGE9a2UuZXZlbnQuZml4KGUpLGw9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLHU9KFVlLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYS50eXBlXXx8W10sYz1rZS5ldmVudC5zcGVjaWFsW2EudHlwZV18fHt9O2ZvcihsWzBdPWEsdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0KyspbFt0XT1hcmd1bWVudHNbdF07aWYoYS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFjLnByZURpc3BhdGNofHxjLnByZURpc3BhdGNoLmNhbGwodGhpcyxhKSE9PSExKXtmb3Iocz1rZS5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsYSx1KSx0PTA7KHI9c1t0KytdKSYmIWEuaXNQcm9wYWdhdGlvblN0b3BwZWQoKTspZm9yKGEuY3VycmVudFRhcmdldD1yLmVsZW0sbj0wOyhvPXIuaGFuZGxlcnNbbisrXSkmJiFhLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCk7KWEucm5hbWVzcGFjZSYmIWEucm5hbWVzcGFjZS50ZXN0KG8ubmFtZXNwYWNlKXx8KGEuaGFuZGxlT2JqPW8sYS5kYXRhPW8uZGF0YSxpPSgoa2UuZXZlbnQuc3BlY2lhbFtvLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8by5oYW5kbGVyKS5hcHBseShyLmVsZW0sbCksdm9pZCAwIT09aSYmKGEucmVzdWx0PWkpPT09ITEmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSkpO3JldHVybiBjLnBvc3REaXNwYXRjaCYmYy5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGEpLGEucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oZSx0KXt2YXIgbixpLHIsbyxzLGE9W10sbD10LmRlbGVnYXRlQ291bnQsdT1lLnRhcmdldDtpZihsJiZ1Lm5vZGVUeXBlJiYhKFwiY2xpY2tcIj09PWUudHlwZSYmZS5idXR0b24+PTEpKWZvcig7dSE9PXRoaXM7dT11LnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PXUubm9kZVR5cGUmJihcImNsaWNrXCIhPT1lLnR5cGV8fHUuZGlzYWJsZWQhPT0hMCkpe2ZvcihvPVtdLHM9e30sbj0wO248bDtuKyspaT10W25dLHI9aS5zZWxlY3RvcitcIiBcIix2b2lkIDA9PT1zW3JdJiYoc1tyXT1pLm5lZWRzQ29udGV4dD9rZShyLHRoaXMpLmluZGV4KHUpPi0xOmtlLmZpbmQocix0aGlzLG51bGwsW3VdKS5sZW5ndGgpLHNbcl0mJm8ucHVzaChpKTtvLmxlbmd0aCYmYS5wdXNoKHtlbGVtOnUsaGFuZGxlcnM6b30pfXJldHVybiB1PXRoaXMsbDx0Lmxlbmd0aCYmYS5wdXNoKHtlbGVtOnUsaGFuZGxlcnM6dC5zbGljZShsKX0pLGF9LGFkZFByb3A6ZnVuY3Rpb24oZSx0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoa2UuRXZlbnQucHJvdG90eXBlLGUse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpfZSh0KT9mdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gdCh0aGlzLm9yaWdpbmFsRXZlbnQpfTpmdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W2VdfSxzZXQ6ZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsZSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfX0pfSxmaXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGVba2UuZXhwYW5kb10/ZTpuZXcga2UuRXZlbnQoZSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT1qKCkmJnRoaXMuZm9jdXMpcmV0dXJuIHRoaXMuZm9jdXMoKSwhMX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYodGhpcz09PWooKSYmdGhpcy5ibHVyKXJldHVybiB0aGlzLmJsdXIoKSwhMX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZihcImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2smJnUodGhpcyxcImlucHV0XCIpKXJldHVybiB0aGlzLmNsaWNrKCksITF9LF9kZWZhdWx0OmZ1bmN0aW9uKGUpe3JldHVybiB1KGUudGFyZ2V0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZvaWQgMCE9PWUucmVzdWx0JiZlLm9yaWdpbmFsRXZlbnQmJihlLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9ZS5yZXN1bHQpfX19fSxrZS5yZW1vdmVFdmVudD1mdW5jdGlvbihlLHQsbil7ZS5yZW1vdmVFdmVudExpc3RlbmVyJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuKX0sa2UuRXZlbnQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGtlLkV2ZW50PyhlJiZlLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1lLHRoaXMudHlwZT1lLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1lLmRlZmF1bHRQcmV2ZW50ZWQmJmUucmV0dXJuVmFsdWU9PT0hMT9EOk4sdGhpcy50YXJnZXQ9ZS50YXJnZXQmJjM9PT1lLnRhcmdldC5ub2RlVHlwZT9lLnRhcmdldC5wYXJlbnROb2RlOmUudGFyZ2V0LHRoaXMuY3VycmVudFRhcmdldD1lLmN1cnJlbnRUYXJnZXQsdGhpcy5yZWxhdGVkVGFyZ2V0PWUucmVsYXRlZFRhcmdldCk6dGhpcy50eXBlPWUsdCYma2UuZXh0ZW5kKHRoaXMsdCksdGhpcy50aW1lU3RhbXA9ZSYmZS50aW1lU3RhbXB8fERhdGUubm93KCksdm9pZCh0aGlzW2tlLmV4cGFuZG9dPSEwKSk6bmV3IGtlLkV2ZW50KGUsdCl9LGtlLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6a2UuRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOk4saXNQcm9wYWdhdGlvblN0b3BwZWQ6Tixpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpOLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPUQsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9RCxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9RCxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sa2UuZWFjaCh7YWx0S2V5OiEwLGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxjaGFuZ2VkVG91Y2hlczohMCxjdHJsS2V5OiEwLGRldGFpbDohMCxldmVudFBoYXNlOiEwLG1ldGFLZXk6ITAscGFnZVg6ITAscGFnZVk6ITAsc2hpZnRLZXk6ITAsdmlldzohMCxcImNoYXJcIjohMCxjaGFyQ29kZTohMCxrZXk6ITAsa2V5Q29kZTohMCxidXR0b246ITAsYnV0dG9uczohMCxjbGllbnRYOiEwLGNsaWVudFk6ITAsb2Zmc2V0WDohMCxvZmZzZXRZOiEwLHBvaW50ZXJJZDohMCxwb2ludGVyVHlwZTohMCxzY3JlZW5YOiEwLHNjcmVlblk6ITAsdGFyZ2V0VG91Y2hlczohMCx0b0VsZW1lbnQ6ITAsdG91Y2hlczohMCx3aGljaDpmdW5jdGlvbihlKXt2YXIgdD1lLmJ1dHRvbjtyZXR1cm4gbnVsbD09ZS53aGljaCYmYXQudGVzdChlLnR5cGUpP251bGwhPWUuY2hhckNvZGU/ZS5jaGFyQ29kZTplLmtleUNvZGU6IWUud2hpY2gmJnZvaWQgMCE9PXQmJmx0LnRlc3QoZS50eXBlKT8xJnQ/MToyJnQ/Mzo0JnQ/MjowOmUud2hpY2h9fSxrZS5ldmVudC5hZGRQcm9wKSxrZS5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGUsdCl7a2UuZXZlbnQuc3BlY2lhbFtlXT17ZGVsZWdhdGVUeXBlOnQsYmluZFR5cGU6dCxoYW5kbGU6ZnVuY3Rpb24oZSl7dmFyIG4saT10aGlzLHI9ZS5yZWxhdGVkVGFyZ2V0LG89ZS5oYW5kbGVPYmo7cmV0dXJuIHImJihyPT09aXx8a2UuY29udGFpbnMoaSxyKSl8fChlLnR5cGU9by5vcmlnVHlwZSxuPW8uaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksZS50eXBlPXQpLG59fX0pLGtlLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oZSx0LG4saSl7cmV0dXJuIEEodGhpcyxlLHQsbixpKX0sb25lOmZ1bmN0aW9uKGUsdCxuLGkpe3JldHVybiBBKHRoaXMsZSx0LG4saSwxKX0sb2ZmOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaSxyO2lmKGUmJmUucHJldmVudERlZmF1bHQmJmUuaGFuZGxlT2JqKXJldHVybiBpPWUuaGFuZGxlT2JqLGtlKGUuZGVsZWdhdGVUYXJnZXQpLm9mZihpLm5hbWVzcGFjZT9pLm9yaWdUeXBlK1wiLlwiK2kubmFtZXNwYWNlOmkub3JpZ1R5cGUsaS5zZWxlY3RvcixpLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe2ZvcihyIGluIGUpdGhpcy5vZmYocix0LGVbcl0pO3JldHVybiB0aGlzfXJldHVybiB0IT09ITEmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fChuPXQsdD12b2lkIDApLG49PT0hMSYmKG49TiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7a2UuZXZlbnQucmVtb3ZlKHRoaXMsZSxuLHQpfSl9fSk7dmFyIGN0PS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKilbXj5dKilcXC8+L2dpLGh0PS88c2NyaXB0fDxzdHlsZXw8bGluay9pLHB0PS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksZHQ9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2tlLmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKGN0LFwiPCQxPjwvJDI+XCIpfSxjbG9uZTpmdW5jdGlvbihlLHQsbil7dmFyIGkscixvLHMsYT1lLmNsb25lTm9kZSghMCksbD1rZS5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSk7aWYoIShiZS5ub0Nsb25lQ2hlY2tlZHx8MSE9PWUubm9kZVR5cGUmJjExIT09ZS5ub2RlVHlwZXx8a2UuaXNYTUxEb2MoZSkpKWZvcihzPUUoYSksbz1FKGUpLGk9MCxyPW8ubGVuZ3RoO2k8cjtpKyspUChvW2ldLHNbaV0pO2lmKHQpaWYobilmb3Iobz1vfHxFKGUpLHM9c3x8RShhKSxpPTAscj1vLmxlbmd0aDtpPHI7aSsrKU8ob1tpXSxzW2ldKTtlbHNlIE8oZSxhKTtyZXR1cm4gcz1FKGEsXCJzY3JpcHRcIikscy5sZW5ndGg+MCYmayhzLCFsJiZFKGUsXCJzY3JpcHRcIikpLGF9LGNsZWFuRGF0YTpmdW5jdGlvbihlKXtmb3IodmFyIHQsbixpLHI9a2UuZXZlbnQuc3BlY2lhbCxvPTA7dm9pZCAwIT09KG49ZVtvXSk7bysrKWlmKEZlKG4pKXtpZih0PW5bVWUuZXhwYW5kb10pe2lmKHQuZXZlbnRzKWZvcihpIGluIHQuZXZlbnRzKXJbaV0/a2UuZXZlbnQucmVtb3ZlKG4saSk6a2UucmVtb3ZlRXZlbnQobixpLHQuaGFuZGxlKTtuW1VlLmV4cGFuZG9dPXZvaWQgMH1uW1ZlLmV4cGFuZG9dJiYobltWZS5leHBhbmRvXT12b2lkIDApfX19KSxrZS5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihlKXtyZXR1cm4gcSh0aGlzLGUsITApfSxyZW1vdmU6ZnVuY3Rpb24oZSl7cmV0dXJuIHEodGhpcyxlKX0sdGV4dDpmdW5jdGlvbihlKXtyZXR1cm4gSWUodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZT9rZS50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWUpfSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEgodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciB0PSQodGhpcyxlKTt0LmFwcGVuZENoaWxkKGUpfX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEgodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciB0PSQodGhpcyxlKTt0Lmluc2VydEJlZm9yZShlLHQuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiBIKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIEgodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD0wO251bGwhPShlPXRoaXNbdF0pO3QrKykxPT09ZS5ub2RlVHlwZSYmKGtlLmNsZWFuRGF0YShFKGUsITEpKSxlLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihlLHQpe3JldHVybiBlPW51bGwhPWUmJmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBrZS5jbG9uZSh0aGlzLGUsdCl9KX0saHRtbDpmdW5jdGlvbihlKXtyZXR1cm4gSWUodGhpcyxmdW5jdGlvbihlKXt2YXIgdD10aGlzWzBdfHx7fSxuPTAsaT10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1lJiYxPT09dC5ub2RlVHlwZSlyZXR1cm4gdC5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiFodC50ZXN0KGUpJiYhcnRbKG50LmV4ZWMoZSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7ZT1rZS5odG1sUHJlZmlsdGVyKGUpO3RyeXtmb3IoO248aTtuKyspdD10aGlzW25dfHx7fSwxPT09dC5ub2RlVHlwZSYmKGtlLmNsZWFuRGF0YShFKHQsITEpKSx0LmlubmVySFRNTD1lKTt0PTB9Y2F0Y2gocil7fX10JiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGUpfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGU9W107cmV0dXJuIEgodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24odCl7dmFyIG49dGhpcy5wYXJlbnROb2RlO2tlLmluQXJyYXkodGhpcyxlKTwwJiYoa2UuY2xlYW5EYXRhKEUodGhpcykpLG4mJm4ucmVwbGFjZUNoaWxkKHQsdGhpcykpfSxlKX19KSxrZS5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGUsdCl7a2UuZm5bZV09ZnVuY3Rpb24oZSl7Zm9yKHZhciBuLGk9W10scj1rZShlKSxvPXIubGVuZ3RoLTEscz0wO3M8PW87cysrKW49cz09PW8/dGhpczp0aGlzLmNsb25lKCEwKSxrZShyW3NdKVt0XShuKSxmZS5hcHBseShpLG4uZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhpKX19KTt2YXIgZnQ9bmV3IFJlZ0V4cChcIl4oXCIrR2UrXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksZ3Q9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiB0JiZ0Lm9wZW5lcnx8KHQ9biksdC5nZXRDb21wdXRlZFN0eWxlKGUpfSxtdD1uZXcgUmVnRXhwKEplLmpvaW4oXCJ8XCIpLFwiaVwiKTshZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7aWYodSl7bC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDt3aWR0aDo2MHB4O21hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiLHUuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OnNjcm9sbDttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3dpZHRoOjYwJTt0b3A6MSVcIixzdC5hcHBlbmRDaGlsZChsKS5hcHBlbmRDaGlsZCh1KTt2YXIgZT1uLmdldENvbXB1dGVkU3R5bGUodSk7aT1cIjElXCIhPT1lLnRvcCxhPTEyPT09dChlLm1hcmdpbkxlZnQpLHUuc3R5bGUucmlnaHQ9XCI2MCVcIixzPTM2PT09dChlLnJpZ2h0KSxyPTM2PT09dChlLndpZHRoKSx1LnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixvPTM2PT09dS5vZmZzZXRXaWR0aHx8XCJhYnNvbHV0ZVwiLHN0LnJlbW92ZUNoaWxkKGwpLHU9bnVsbH19ZnVuY3Rpb24gdChlKXtyZXR1cm4gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGUpKX12YXIgaSxyLG8scyxhLGw9Y2UuY3JlYXRlRWxlbWVudChcImRpdlwiKSx1PWNlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dS5zdHlsZSYmKHUuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLHUuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLGJlLmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT11LnN0eWxlLmJhY2tncm91bmRDbGlwLGtlLmV4dGVuZChiZSx7Ym94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLHJ9LHBpeGVsQm94U3R5bGVzOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxzfSxwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxpfSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLGF9LHNjcm9sbGJveFNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG99fSkpfSgpO3ZhciB2dD0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8seXQ9L14tLS8sd3Q9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LHh0PXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn0sYnQ9W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLF90PWNlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7a2UuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGUsdCl7aWYodCl7dmFyIG49TShlLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09bj9cIjFcIjpufX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOnt9LHN0eWxlOmZ1bmN0aW9uKGUsdCxuLGkpe2lmKGUmJjMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmZS5zdHlsZSl7dmFyIHIsbyxzLGE9eSh0KSxsPXl0LnRlc3QodCksdT1lLnN0eWxlO3JldHVybiBsfHwodD1CKGEpKSxzPWtlLmNzc0hvb2tzW3RdfHxrZS5jc3NIb29rc1thXSx2b2lkIDA9PT1uP3MmJlwiZ2V0XCJpbiBzJiZ2b2lkIDAhPT0ocj1zLmdldChlLCExLGkpKT9yOnVbdF06KG89dHlwZW9mIG4sXCJzdHJpbmdcIj09PW8mJihyPVplLmV4ZWMobikpJiZyWzFdJiYobj1fKGUsdCxyKSxvPVwibnVtYmVyXCIpLG51bGwhPW4mJm49PT1uJiYoXCJudW1iZXJcIj09PW8mJihuKz1yJiZyWzNdfHwoa2UuY3NzTnVtYmVyW2FdP1wiXCI6XCJweFwiKSksYmUuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09bnx8MCE9PXQuaW5kZXhPZihcImJhY2tncm91bmRcIil8fCh1W3RdPVwiaW5oZXJpdFwiKSxzJiZcInNldFwiaW4gcyYmdm9pZCAwPT09KG49cy5zZXQoZSxuLGkpKXx8KGw/dS5zZXRQcm9wZXJ0eSh0LG4pOnVbdF09bikpLHZvaWQgMCl9fSxjc3M6ZnVuY3Rpb24oZSx0LG4saSl7dmFyIHIsbyxzLGE9eSh0KSxsPXl0LnRlc3QodCk7cmV0dXJuIGx8fCh0PUIoYSkpLHM9a2UuY3NzSG9va3NbdF18fGtlLmNzc0hvb2tzW2FdLHMmJlwiZ2V0XCJpbiBzJiYocj1zLmdldChlLCEwLG4pKSx2b2lkIDA9PT1yJiYocj1NKGUsdCxpKSksXCJub3JtYWxcIj09PXImJnQgaW4geHQmJihyPXh0W3RdKSxcIlwiPT09bnx8bj8obz1wYXJzZUZsb2F0KHIpLG49PT0hMHx8aXNGaW5pdGUobyk/b3x8MDpyKTpyfX0pLGtlLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihlLHQpe2tlLmNzc0hvb2tzW3RdPXtnZXQ6ZnVuY3Rpb24oZSxuLGkpe2lmKG4pcmV0dXJuIXZ0LnRlc3Qoa2UuY3NzKGUsXCJkaXNwbGF5XCIpKXx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aD9VKGUsdCxpKTpLZShlLHd0LGZ1bmN0aW9uKCl7cmV0dXJuIFUoZSx0LGkpfSl9LHNldDpmdW5jdGlvbihlLG4saSl7dmFyIHIsbz1ndChlKSxzPVwiYm9yZGVyLWJveFwiPT09a2UuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxvKSxhPWkmJkYoZSx0LGkscyxvKTtyZXR1cm4gcyYmYmUuc2Nyb2xsYm94U2l6ZSgpPT09by5wb3NpdGlvbiYmKGEtPU1hdGguY2VpbChlW1wib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSldLXBhcnNlRmxvYXQob1t0XSktRihlLHQsXCJib3JkZXJcIiwhMSxvKS0uNSkpLGEmJihyPVplLmV4ZWMobikpJiZcInB4XCIhPT0oclszXXx8XCJweFwiKSYmKGUuc3R5bGVbdF09bixuPWtlLmNzcyhlLHQpKSxXKGUsbixhKX19fSksa2UuY3NzSG9va3MubWFyZ2luTGVmdD1SKGJlLnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuKHBhcnNlRmxvYXQoTShlLFwibWFyZ2luTGVmdFwiKSl8fGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1LZShlLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCJ9KSxrZS5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oZSx0KXtrZS5jc3NIb29rc1tlK3RdPXtleHBhbmQ6ZnVuY3Rpb24obil7Zm9yKHZhciBpPTAscj17fSxvPVwic3RyaW5nXCI9PXR5cGVvZiBuP24uc3BsaXQoXCIgXCIpOltuXTtpPDQ7aSsrKXJbZStKZVtpXSt0XT1vW2ldfHxvW2ktMl18fG9bMF07cmV0dXJuIHJ9fSxcIm1hcmdpblwiIT09ZSYmKGtlLmNzc0hvb2tzW2UrdF0uc2V0PVcpfSksa2UuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gSWUodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIGkscixvPXt9LHM9MDtpZihBcnJheS5pc0FycmF5KHQpKXtmb3IoaT1ndChlKSxyPXQubGVuZ3RoO3M8cjtzKyspb1t0W3NdXT1rZS5jc3MoZSx0W3NdLCExLGkpO3JldHVybiBvfXJldHVybiB2b2lkIDAhPT1uP2tlLnN0eWxlKGUsdCxuKTprZS5jc3MoZSx0KX0sZSx0LGFyZ3VtZW50cy5sZW5ndGg+MSl9fSksa2UuVHdlZW49VixWLnByb3RvdHlwZT17Y29uc3RydWN0b3I6Vixpbml0OmZ1bmN0aW9uKGUsdCxuLGkscixvKXt0aGlzLmVsZW09ZSx0aGlzLnByb3A9bix0aGlzLmVhc2luZz1yfHxrZS5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPXQsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPWksdGhpcy51bml0PW98fChrZS5jc3NOdW1iZXJbbl0/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgZT1WLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBlJiZlLmdldD9lLmdldCh0aGlzKTpWLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihlKXt2YXIgdCxuPVYucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz10PWtlLmVhc2luZ1t0aGlzLmVhc2luZ10oZSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qZSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz10PWUsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKnQrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksbiYmbi5zZXQ/bi5zZXQodGhpcyk6Vi5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxWLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1WLnByb3RvdHlwZSxWLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gMSE9PWUuZWxlbS5ub2RlVHlwZXx8bnVsbCE9ZS5lbGVtW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVtlLnByb3BdP2UuZWxlbVtlLnByb3BdOih0PWtlLmNzcyhlLmVsZW0sZS5wcm9wLFwiXCIpLHQmJlwiYXV0b1wiIT09dD90OjApfSxzZXQ6ZnVuY3Rpb24oZSl7a2UuZnguc3RlcFtlLnByb3BdP2tlLmZ4LnN0ZXBbZS5wcm9wXShlKToxIT09ZS5lbGVtLm5vZGVUeXBlfHxudWxsPT1lLmVsZW0uc3R5bGVba2UuY3NzUHJvcHNbZS5wcm9wXV0mJiFrZS5jc3NIb29rc1tlLnByb3BdP2UuZWxlbVtlLnByb3BdPWUubm93OmtlLnN0eWxlKGUuZWxlbSxlLnByb3AsZS5ub3crZS51bml0KX19fSxWLnByb3BIb29rcy5zY3JvbGxUb3A9Vi5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGUpe2UuZWxlbS5ub2RlVHlwZSYmZS5lbGVtLnBhcmVudE5vZGUmJihlLmVsZW1bZS5wcm9wXT1lLm5vdyl9fSxrZS5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LGtlLmZ4PVYucHJvdG90eXBlLmluaXQsa2UuZnguc3RlcD17fTt2YXIgQ3QsVHQsRXQ9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLGt0PS9xdWV1ZUhvb2tzJC87a2UuQW5pbWF0aW9uPWtlLmV4dGVuZChLLHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5jcmVhdGVUd2VlbihlLHQpO3JldHVybiBfKG4uZWxlbSxlLFplLmV4ZWModCksbiksbn1dfSx0d2VlbmVyOmZ1bmN0aW9uKGUsdCl7X2UoZSk/KHQ9ZSxlPVtcIipcIl0pOmU9ZS5tYXRjaChxZSk7Zm9yKHZhciBuLGk9MCxyPWUubGVuZ3RoO2k8cjtpKyspbj1lW2ldLEsudHdlZW5lcnNbbl09Sy50d2VlbmVyc1tuXXx8W10sSy50d2VlbmVyc1tuXS51bnNoaWZ0KHQpfSxwcmVmaWx0ZXJzOltKXSxwcmVmaWx0ZXI6ZnVuY3Rpb24oZSx0KXt0P0sucHJlZmlsdGVycy51bnNoaWZ0KGUpOksucHJlZmlsdGVycy5wdXNoKGUpfX0pLGtlLnNwZWVkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1lJiZcIm9iamVjdFwiPT10eXBlb2YgZT9rZS5leHRlbmQoe30sZSk6e2NvbXBsZXRlOm58fCFuJiZ0fHxfZShlKSYmZSxkdXJhdGlvbjplLGVhc2luZzpuJiZ0fHx0JiYhX2UodCkmJnR9O3JldHVybiBrZS5meC5vZmY/aS5kdXJhdGlvbj0wOlwibnVtYmVyXCIhPXR5cGVvZiBpLmR1cmF0aW9uJiYoaS5kdXJhdGlvbiBpbiBrZS5meC5zcGVlZHM/aS5kdXJhdGlvbj1rZS5meC5zcGVlZHNbaS5kdXJhdGlvbl06aS5kdXJhdGlvbj1rZS5meC5zcGVlZHMuX2RlZmF1bHQpLG51bGwhPWkucXVldWUmJmkucXVldWUhPT0hMHx8KGkucXVldWU9XCJmeFwiKSxpLm9sZD1pLmNvbXBsZXRlLGkuY29tcGxldGU9ZnVuY3Rpb24oKXtfZShpLm9sZCkmJmkub2xkLmNhbGwodGhpcyksaS5xdWV1ZSYma2UuZGVxdWV1ZSh0aGlzLGkucXVldWUpfSxpfSxrZS5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihlLHQsbixpKXtyZXR1cm4gdGhpcy5maWx0ZXIoUWUpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTp0fSxlLG4saSl9LGFuaW1hdGU6ZnVuY3Rpb24oZSx0LG4saSl7dmFyIHI9a2UuaXNFbXB0eU9iamVjdChlKSxvPWtlLnNwZWVkKHQsbixpKSxzPWZ1bmN0aW9uKCl7dmFyIHQ9Syh0aGlzLGtlLmV4dGVuZCh7fSxlKSxvKTsocnx8VWUuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZ0LnN0b3AoITApfTtyZXR1cm4gcy5maW5pc2g9cyxyfHxvLnF1ZXVlPT09ITE/dGhpcy5lYWNoKHMpOnRoaXMucXVldWUoby5xdWV1ZSxzKX0sc3RvcDpmdW5jdGlvbihlLHQsbil7dmFyIGk9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdG9wO2RlbGV0ZSBlLnN0b3AsdChuKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGUmJihuPXQsdD1lLGU9dm9pZCAwKSx0JiZlIT09ITEmJnRoaXMucXVldWUoZXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD0hMCxyPW51bGwhPWUmJmUrXCJxdWV1ZUhvb2tzXCIsbz1rZS50aW1lcnMscz1VZS5nZXQodGhpcyk7aWYocilzW3JdJiZzW3JdLnN0b3AmJmkoc1tyXSk7ZWxzZSBmb3IociBpbiBzKXNbcl0mJnNbcl0uc3RvcCYma3QudGVzdChyKSYmaShzW3JdKTtmb3Iocj1vLmxlbmd0aDtyLS07KW9bcl0uZWxlbSE9PXRoaXN8fG51bGwhPWUmJm9bcl0ucXVldWUhPT1lfHwob1tyXS5hbmltLnN0b3AobiksdD0hMSxvLnNwbGljZShyLDEpKTshdCYmbnx8a2UuZGVxdWV1ZSh0aGlzLGUpfSl9LGZpbmlzaDpmdW5jdGlvbihlKXtyZXR1cm4gZSE9PSExJiYoZT1lfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0LG49VWUuZ2V0KHRoaXMpLGk9bltlK1wicXVldWVcIl0scj1uW2UrXCJxdWV1ZUhvb2tzXCJdLG89a2UudGltZXJzLHM9aT9pLmxlbmd0aDowO2ZvcihuLmZpbmlzaD0hMCxrZS5xdWV1ZSh0aGlzLGUsW10pLHImJnIuc3RvcCYmci5zdG9wLmNhbGwodGhpcywhMCksdD1vLmxlbmd0aDt0LS07KW9bdF0uZWxlbT09PXRoaXMmJm9bdF0ucXVldWU9PT1lJiYob1t0XS5hbmltLnN0b3AoITApLG8uc3BsaWNlKHQsMSkpO2Zvcih0PTA7dDxzO3QrKylpW3RdJiZpW3RdLmZpbmlzaCYmaVt0XS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgbi5maW5pc2h9KX19KSxrZS5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihlLHQpe3ZhciBuPWtlLmZuW3RdO2tlLmZuW3RdPWZ1bmN0aW9uKGUsaSxyKXtyZXR1cm4gbnVsbD09ZXx8XCJib29sZWFuXCI9PXR5cGVvZiBlP24uYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShHKHQsITApLGUsaSxyKX19KSxrZS5lYWNoKHtzbGlkZURvd246RyhcInNob3dcIiksc2xpZGVVcDpHKFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpHKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oZSx0KXtrZS5mbltlXT1mdW5jdGlvbihlLG4saSl7cmV0dXJuIHRoaXMuYW5pbWF0ZSh0LGUsbixpKX19KSxrZS50aW1lcnM9W10sa2UuZngudGljaz1mdW5jdGlvbigpe3ZhciBlLHQ9MCxuPWtlLnRpbWVycztmb3IoQ3Q9RGF0ZS5ub3coKTt0PG4ubGVuZ3RoO3QrKyllPW5bdF0sZSgpfHxuW3RdIT09ZXx8bi5zcGxpY2UodC0tLDEpO24ubGVuZ3RofHxrZS5meC5zdG9wKCksQ3Q9dm9pZCAwfSxrZS5meC50aW1lcj1mdW5jdGlvbihlKXtrZS50aW1lcnMucHVzaChlKSxrZS5meC5zdGFydCgpfSxrZS5meC5pbnRlcnZhbD0xMyxrZS5meC5zdGFydD1mdW5jdGlvbigpe1R0fHwoVHQ9ITAsWCgpKX0sa2UuZnguc3RvcD1mdW5jdGlvbigpe1R0PW51bGx9LGtlLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxrZS5mbi5kZWxheT1mdW5jdGlvbihlLHQpe3JldHVybiBlPWtlLmZ4P2tlLmZ4LnNwZWVkc1tlXXx8ZTplLHQ9dHx8XCJmeFwiLHRoaXMucXVldWUodCxmdW5jdGlvbih0LGkpe3ZhciByPW4uc2V0VGltZW91dCh0LGUpO2kuc3RvcD1mdW5jdGlvbigpe24uY2xlYXJUaW1lb3V0KHIpfX0pfSxmdW5jdGlvbigpe3ZhciBlPWNlLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSx0PWNlLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksbj10LmFwcGVuZENoaWxkKGNlLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2UudHlwZT1cImNoZWNrYm94XCIsYmUuY2hlY2tPbj1cIlwiIT09ZS52YWx1ZSxiZS5vcHRTZWxlY3RlZD1uLnNlbGVjdGVkLGU9Y2UuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGUudmFsdWU9XCJ0XCIsZS50eXBlPVwicmFkaW9cIixiZS5yYWRpb1ZhbHVlPVwidFwiPT09ZS52YWx1ZX0oKTt2YXIgU3QsRHQ9a2UuZXhwci5hdHRySGFuZGxlO2tlLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQpe3JldHVybiBJZSh0aGlzLGtlLmF0dHIsZSx0LGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2tlLnJlbW92ZUF0dHIodGhpcyxlKX0pfX0pLGtlLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQsbil7dmFyIGkscixvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgZS5nZXRBdHRyaWJ1dGU/a2UucHJvcChlLHQsbik6KDE9PT1vJiZrZS5pc1hNTERvYyhlKXx8KHI9a2UuYXR0ckhvb2tzW3QudG9Mb3dlckNhc2UoKV18fChrZS5leHByLm1hdGNoLmJvb2wudGVzdCh0KT9TdDp2b2lkIDApKSx2b2lkIDAhPT1uP251bGw9PT1uP3ZvaWQga2UucmVtb3ZlQXR0cihlLHQpOnImJlwic2V0XCJpbiByJiZ2b2lkIDAhPT0oaT1yLnNldChlLG4sdCkpP2k6KGUuc2V0QXR0cmlidXRlKHQsbitcIlwiKSxuKTpyJiZcImdldFwiaW4gciYmbnVsbCE9PShpPXIuZ2V0KGUsdCkpP2k6KGk9a2UuZmluZC5hdHRyKGUsdCksbnVsbD09aT92b2lkIDA6aSkpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihlLHQpe2lmKCFiZS5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT10JiZ1KGUsXCJpbnB1dFwiKSl7dmFyIG49ZS52YWx1ZTtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsdCksbiYmKGUudmFsdWU9biksdH19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlLHQpe3ZhciBuLGk9MCxyPXQmJnQubWF0Y2gocWUpO2lmKHImJjE9PT1lLm5vZGVUeXBlKWZvcig7bj1yW2krK107KWUucmVtb3ZlQXR0cmlidXRlKG4pfX0pLFN0PXtzZXQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0PT09ITE/a2UucmVtb3ZlQXR0cihlLG4pOmUuc2V0QXR0cmlidXRlKG4sbiksbn19LGtlLmVhY2goa2UuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihlLHQpe3ZhciBuPUR0W3RdfHxrZS5maW5kLmF0dHI7RHRbdF09ZnVuY3Rpb24oZSx0LGkpe3ZhciByLG8scz10LnRvTG93ZXJDYXNlKCk7cmV0dXJuIGl8fChvPUR0W3NdLER0W3NdPXIscj1udWxsIT1uKGUsdCxpKT9zOm51bGwsRHRbc109bykscn19KTt2YXIgTnQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxqdD0vXig/OmF8YXJlYSkkL2k7a2UuZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIEllKHRoaXMsa2UucHJvcCxlLHQsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNba2UucHJvcEZpeFtlXXx8ZV19KX19KSxrZS5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpLHIsbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuIDE9PT1vJiZrZS5pc1hNTERvYyhlKXx8KHQ9a2UucHJvcEZpeFt0XXx8dCxyPWtlLnByb3BIb29rc1t0XSksdm9pZCAwIT09bj9yJiZcInNldFwiaW4gciYmdm9pZCAwIT09KGk9ci5zZXQoZSxuLHQpKT9pOmVbdF09bjpyJiZcImdldFwiaW4gciYmbnVsbCE9PShpPXIuZ2V0KGUsdCkpP2k6ZVt0XX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWtlLmZpbmQuYXR0cihlLFwidGFiaW5kZXhcIik7cmV0dXJuIHQ/cGFyc2VJbnQodCwxMCk6TnQudGVzdChlLm5vZGVOYW1lKXx8anQudGVzdChlLm5vZGVOYW1lKSYmZS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSxiZS5vcHRTZWxlY3RlZHx8KGtlLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfSxzZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3QmJih0LnNlbGVjdGVkSW5kZXgsdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCl9fSksa2UuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtrZS5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pLGtlLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixpLHIsbyxzLGEsbD0wO2lmKF9lKGUpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24odCl7a2UodGhpcykuYWRkQ2xhc3MoZS5jYWxsKHRoaXMsdCx0ZSh0aGlzKSkpfSk7aWYodD1uZShlKSx0Lmxlbmd0aClmb3IoO249dGhpc1tsKytdOylpZihyPXRlKG4pLGk9MT09PW4ubm9kZVR5cGUmJlwiIFwiK2VlKHIpK1wiIFwiKXtmb3Iocz0wO289dFtzKytdOylpLmluZGV4T2YoXCIgXCIrbytcIiBcIik8MCYmKGkrPW8rXCIgXCIpO2E9ZWUoaSksciE9PWEmJm4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixhKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixpLHIsbyxzLGEsbD0wO2lmKF9lKGUpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24odCl7a2UodGhpcykucmVtb3ZlQ2xhc3MoZS5jYWxsKHRoaXMsdCx0ZSh0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7aWYodD1uZShlKSx0Lmxlbmd0aClmb3IoO249dGhpc1tsKytdOylpZihyPXRlKG4pLGk9MT09PW4ubm9kZVR5cGUmJlwiIFwiK2VlKHIpK1wiIFwiKXtmb3Iocz0wO289dFtzKytdOylmb3IoO2kuaW5kZXhPZihcIiBcIitvK1wiIFwiKT4tMTspaT1pLnJlcGxhY2UoXCIgXCIrbytcIiBcIixcIiBcIik7YT1lZShpKSxyIT09YSYmbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGEpfXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihlLHQpe3ZhciBuPXR5cGVvZiBlLGk9XCJzdHJpbmdcIj09PW58fEFycmF5LmlzQXJyYXkoZSk7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiB0JiZpP3Q/dGhpcy5hZGRDbGFzcyhlKTp0aGlzLnJlbW92ZUNsYXNzKGUpOl9lKGUpP3RoaXMuZWFjaChmdW5jdGlvbihuKXtrZSh0aGlzKS50b2dnbGVDbGFzcyhlLmNhbGwodGhpcyxuLHRlKHRoaXMpLHQpLHQpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQscixvLHM7aWYoaSlmb3Iocj0wLG89a2UodGhpcykscz1uZShlKTt0PXNbcisrXTspby5oYXNDbGFzcyh0KT9vLnJlbW92ZUNsYXNzKHQpOm8uYWRkQ2xhc3ModCk7ZWxzZSB2b2lkIDAhPT1lJiZcImJvb2xlYW5cIiE9PW58fCh0PXRlKHRoaXMpLHQmJlVlLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLHQpLHRoaXMuc2V0QXR0cmlidXRlJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsdHx8ZT09PSExP1wiXCI6VWUuZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixpPTA7Zm9yKHQ9XCIgXCIrZStcIiBcIjtuPXRoaXNbaSsrXTspaWYoMT09PW4ubm9kZVR5cGUmJihcIiBcIitlZSh0ZShuKSkrXCIgXCIpLmluZGV4T2YodCk+LTEpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIEF0PS9cXHIvZztrZS5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihlKXt2YXIgdCxuLGkscj10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBpPV9lKGUpLHRoaXMuZWFjaChmdW5jdGlvbihuKXt2YXIgcjsxPT09dGhpcy5ub2RlVHlwZSYmKHI9aT9lLmNhbGwodGhpcyxuLGtlKHRoaXMpLnZhbCgpKTplLG51bGw9PXI/cj1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiByP3IrPVwiXCI6QXJyYXkuaXNBcnJheShyKSYmKHI9a2UubWFwKHIsZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjplK1wiXCJ9KSksdD1rZS52YWxIb29rc1t0aGlzLnR5cGVdfHxrZS52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLHQmJlwic2V0XCJpbiB0JiZ2b2lkIDAhPT10LnNldCh0aGlzLHIsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9cikpfSk7aWYocilyZXR1cm4gdD1rZS52YWxIb29rc1tyLnR5cGVdfHxrZS52YWxIb29rc1tyLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLHQmJlwiZ2V0XCJpbiB0JiZ2b2lkIDAhPT0obj10LmdldChyLFwidmFsdWVcIikpP246KG49ci52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2Ygbj9uLnJlcGxhY2UoQXQsXCJcIik6bnVsbD09bj9cIlwiOm4pfX19KSxrZS5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihlKXt2YXIgdD1rZS5maW5kLmF0dHIoZSxcInZhbHVlXCIpO3JldHVybiBudWxsIT10P3Q6ZWUoa2UudGV4dChlKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihlKXt2YXIgdCxuLGkscj1lLm9wdGlvbnMsbz1lLnNlbGVjdGVkSW5kZXgscz1cInNlbGVjdC1vbmVcIj09PWUudHlwZSxhPXM/bnVsbDpbXSxsPXM/bysxOnIubGVuZ3RoO2ZvcihpPW88MD9sOnM/bzowO2k8bDtpKyspaWYobj1yW2ldLChuLnNlbGVjdGVkfHxpPT09bykmJiFuLmRpc2FibGVkJiYoIW4ucGFyZW50Tm9kZS5kaXNhYmxlZHx8IXUobi5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZih0PWtlKG4pLnZhbCgpLHMpcmV0dXJuIHQ7YS5wdXNoKHQpfXJldHVybiBhfSxzZXQ6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4saSxyPWUub3B0aW9ucyxvPWtlLm1ha2VBcnJheSh0KSxzPXIubGVuZ3RoO3MtLTspaT1yW3NdLChpLnNlbGVjdGVkPWtlLmluQXJyYXkoa2UudmFsSG9va3Mub3B0aW9uLmdldChpKSxvKT4tMSkmJihuPSEwKTtyZXR1cm4gbnx8KGUuc2VsZWN0ZWRJbmRleD0tMSksb319fX0pLGtlLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7a2UudmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihlLHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIGUuY2hlY2tlZD1rZS5pbkFycmF5KGtlKGUpLnZhbCgpLHQpPi0xfX0sYmUuY2hlY2tPbnx8KGtlLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmUudmFsdWV9KX0pLGJlLmZvY3VzaW49XCJvbmZvY3VzaW5cImluIG47dmFyICR0PS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxMdD1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpfTtrZS5leHRlbmQoa2UuZXZlbnQse3RyaWdnZXI6ZnVuY3Rpb24oZSx0LGkscil7dmFyIG8scyxhLGwsdSxjLGgscCxkPVtpfHxjZV0sZj15ZS5jYWxsKGUsXCJ0eXBlXCIpP2UudHlwZTplLGc9eWUuY2FsbChlLFwibmFtZXNwYWNlXCIpP2UubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihzPXA9YT1pPWl8fGNlLDMhPT1pLm5vZGVUeXBlJiY4IT09aS5ub2RlVHlwZSYmISR0LnRlc3QoZitrZS5ldmVudC50cmlnZ2VyZWQpJiYoZi5pbmRleE9mKFwiLlwiKT4tMSYmKGc9Zi5zcGxpdChcIi5cIiksZj1nLnNoaWZ0KCksZy5zb3J0KCkpLHU9Zi5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrZixlPWVba2UuZXhwYW5kb10/ZTpuZXcga2UuRXZlbnQoZixcIm9iamVjdFwiPT10eXBlb2YgZSYmZSksZS5pc1RyaWdnZXI9cj8yOjMsZS5uYW1lc3BhY2U9Zy5qb2luKFwiLlwiKSxlLnJuYW1lc3BhY2U9ZS5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2cuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsZS5yZXN1bHQ9dm9pZCAwLGUudGFyZ2V0fHwoZS50YXJnZXQ9aSksdD1udWxsPT10P1tlXTprZS5tYWtlQXJyYXkodCxbZV0pLGg9a2UuZXZlbnQuc3BlY2lhbFtmXXx8e30scnx8IWgudHJpZ2dlcnx8aC50cmlnZ2VyLmFwcGx5KGksdCkhPT0hMSkpe2lmKCFyJiYhaC5ub0J1YmJsZSYmIUNlKGkpKXtmb3IobD1oLmRlbGVnYXRlVHlwZXx8ZiwkdC50ZXN0KGwrZil8fChzPXMucGFyZW50Tm9kZSk7cztzPXMucGFyZW50Tm9kZSlkLnB1c2gocyksYT1zO2E9PT0oaS5vd25lckRvY3VtZW50fHxjZSkmJmQucHVzaChhLmRlZmF1bHRWaWV3fHxhLnBhcmVudFdpbmRvd3x8bil9Zm9yKG89MDsocz1kW28rK10pJiYhZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpOylwPXMsZS50eXBlPW8+MT9sOmguYmluZFR5cGV8fGYsYz0oVWUuZ2V0KHMsXCJldmVudHNcIil8fHt9KVtlLnR5cGVdJiZVZS5nZXQocyxcImhhbmRsZVwiKSxjJiZjLmFwcGx5KHMsdCksYz11JiZzW3VdLGMmJmMuYXBwbHkmJkZlKHMpJiYoZS5yZXN1bHQ9Yy5hcHBseShzLHQpLGUucmVzdWx0PT09ITEmJmUucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGUudHlwZT1mLHJ8fGUuaXNEZWZhdWx0UHJldmVudGVkKCl8fGguX2RlZmF1bHQmJmguX2RlZmF1bHQuYXBwbHkoZC5wb3AoKSx0KSE9PSExfHwhRmUoaSl8fHUmJl9lKGlbZl0pJiYhQ2UoaSkmJihhPWlbdV0sYSYmKGlbdV09bnVsbCksa2UuZXZlbnQudHJpZ2dlcmVkPWYsZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZwLmFkZEV2ZW50TGlzdGVuZXIoZixMdCksaVtmXSgpLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmcC5yZW1vdmVFdmVudExpc3RlbmVyKGYsTHQpLGtlLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsYSYmKGlbdV09YSkpLGUucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWtlLmV4dGVuZChuZXcga2UuRXZlbnQsbix7dHlwZTplLGlzU2ltdWxhdGVkOiEwfSk7a2UuZXZlbnQudHJpZ2dlcihpLG51bGwsdCl9fSksa2UuZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2tlLmV2ZW50LnRyaWdnZXIoZSx0LHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpc1swXTtpZihuKXJldHVybiBrZS5ldmVudC50cmlnZ2VyKGUsdCxuLCEwKX19KSxiZS5mb2N1c2lufHxrZS5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbihlKXtrZS5ldmVudC5zaW11bGF0ZSh0LGUudGFyZ2V0LGtlLmV2ZW50LmZpeChlKSl9O2tlLmV2ZW50LnNwZWNpYWxbdF09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLHI9VWUuYWNjZXNzKGksdCk7cnx8aS5hZGRFdmVudExpc3RlbmVyKGUsbiwhMCksVWUuYWNjZXNzKGksdCwocnx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLHI9VWUuYWNjZXNzKGksdCktMTtyP1VlLmFjY2VzcyhpLHQscik6KGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLG4sITApLFVlLnJlbW92ZShpLHQpKX19fSk7dmFyIHp0PW4ubG9jYXRpb24sT3Q9RGF0ZS5ub3coKSxQdD0vXFw/LztrZS5wYXJzZVhNTD1mdW5jdGlvbihlKXt2YXIgdDtpZighZXx8XCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIG51bGw7dHJ5e3Q9KG5ldyBuLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGUsXCJ0ZXh0L3htbFwiKX1jYXRjaChpKXt0PXZvaWQgMH1yZXR1cm4gdCYmIXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fGtlLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2UpLHR9O3ZhciBIdD0vXFxbXFxdJC8scXQ9L1xccj9cXG4vZyxNdD0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksUnQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2tlLnBhcmFtPWZ1bmN0aW9uKGUsdCl7dmFyIG4saT1bXSxyPWZ1bmN0aW9uKGUsdCl7dmFyIG49X2UodCk/dCgpOnQ7aVtpLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChudWxsPT1uP1wiXCI6bil9O2lmKEFycmF5LmlzQXJyYXkoZSl8fGUuanF1ZXJ5JiYha2UuaXNQbGFpbk9iamVjdChlKSlrZS5lYWNoKGUsZnVuY3Rpb24oKXtyKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKG4gaW4gZSlpZShuLGVbbl0sdCxyKTtyZXR1cm4gaS5qb2luKFwiJlwiKX0sa2UuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4ga2UucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT1rZS5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gZT9rZS5tYWtlQXJyYXkoZSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBlPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYha2UodGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJlJ0LnRlc3QodGhpcy5ub2RlTmFtZSkmJiFNdC50ZXN0KGUpJiYodGhpcy5jaGVja2VkfHwhdHQudGVzdChlKSl9KS5tYXAoZnVuY3Rpb24oZSx0KXt2YXIgbj1rZSh0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09bj9udWxsOkFycmF5LmlzQXJyYXkobik/a2UubWFwKG4sZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6dC5uYW1lLHZhbHVlOmUucmVwbGFjZShxdCxcIlxcclxcblwiKX19KTp7bmFtZTp0Lm5hbWUsdmFsdWU6bi5yZXBsYWNlKHF0LFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciBJdD0vJTIwL2csQnQ9LyMuKiQvLFd0PS8oWz8mXSlfPVteJl0qLyxGdD0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLFV0PS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLFZ0PS9eKD86R0VUfEhFQUQpJC8sWHQ9L15cXC9cXC8vLFl0PXt9LEd0PXt9LFp0PVwiKi9cIi5jb25jYXQoXCIqXCIpLEp0PWNlLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO0p0LmhyZWY9enQuaHJlZixrZS5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOnp0LmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6VXQudGVzdCh6dC5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6WnQsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOkpTT04ucGFyc2UsXCJ0ZXh0IHhtbFwiOmtlLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9zZShzZShlLGtlLmFqYXhTZXR0aW5ncyksdCk6c2Uoa2UuYWpheFNldHRpbmdzLGUpfSxhamF4UHJlZmlsdGVyOnJlKFl0KSxhamF4VHJhbnNwb3J0OnJlKEd0KSxhamF4OmZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gaShlLHQsaSxhKXt2YXIgdSxwLGQseCxiLF89dDtjfHwoYz0hMCxsJiZuLmNsZWFyVGltZW91dChsKSxyPXZvaWQgMCxzPWF8fFwiXCIsQy5yZWFkeVN0YXRlPWU+MD80OjAsdT1lPj0yMDAmJmU8MzAwfHwzMDQ9PT1lLGkmJih4PWFlKGYsQyxpKSkseD1sZShmLHgsQyx1KSx1PyhmLmlmTW9kaWZpZWQmJihiPUMuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLGImJihrZS5sYXN0TW9kaWZpZWRbb109YiksYj1DLmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSxiJiYoa2UuZXRhZ1tvXT1iKSksMjA0PT09ZXx8XCJIRUFEXCI9PT1mLnR5cGU/Xz1cIm5vY29udGVudFwiOjMwND09PWU/Xz1cIm5vdG1vZGlmaWVkXCI6KF89eC5zdGF0ZSxwPXguZGF0YSxkPXguZXJyb3IsdT0hZCkpOihkPV8sIWUmJl98fChfPVwiZXJyb3JcIixlPDAmJihlPTApKSksQy5zdGF0dXM9ZSxDLnN0YXR1c1RleHQ9KHR8fF8pK1wiXCIsdT92LnJlc29sdmVXaXRoKGcsW3AsXyxDXSk6di5yZWplY3RXaXRoKGcsW0MsXyxkXSksQy5zdGF0dXNDb2RlKHcpLHc9dm9pZCAwLGgmJm0udHJpZ2dlcih1P1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFtDLGYsdT9wOmRdKSx5LmZpcmVXaXRoKGcsW0MsX10pLGgmJihtLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbQyxmXSksLS1rZS5hY3RpdmV8fGtlLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfVwib2JqZWN0XCI9PXR5cGVvZiBlJiYodD1lLGU9dm9pZCAwKSx0PXR8fHt9O3ZhciByLG8scyxhLGwsdSxjLGgscCxkLGY9a2UuYWpheFNldHVwKHt9LHQpLGc9Zi5jb250ZXh0fHxmLG09Zi5jb250ZXh0JiYoZy5ub2RlVHlwZXx8Zy5qcXVlcnkpP2tlKGcpOmtlLmV2ZW50LHY9a2UuRGVmZXJyZWQoKSx5PWtlLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHc9Zi5zdGF0dXNDb2RlfHx7fSx4PXt9LGI9e30sXz1cImNhbmNlbGVkXCIsQz17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKGMpe2lmKCFhKWZvcihhPXt9O3Q9RnQuZXhlYyhzKTspYVt0WzFdLnRvTG93ZXJDYXNlKCldPXRbMl07dD1hW2UudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PXQ/bnVsbDp0fSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gYz9zOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09YyYmKGU9YltlLnRvTG93ZXJDYXNlKCldPWJbZS50b0xvd2VyQ2FzZSgpXXx8ZSx4W2VdPXQpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWMmJihmLm1pbWVUeXBlPWUpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoZSlpZihjKUMuYWx3YXlzKGVbQy5zdGF0dXNdKTtlbHNlIGZvcih0IGluIGUpd1t0XT1bd1t0XSxlW3RdXTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZXx8XztyZXR1cm4gciYmci5hYm9ydCh0KSxpKDAsdCksdGhpc319O2lmKHYucHJvbWlzZShDKSxmLnVybD0oKGV8fGYudXJsfHx6dC5ocmVmKStcIlwiKS5yZXBsYWNlKFh0LHp0LnByb3RvY29sK1wiLy9cIiksZi50eXBlPXQubWV0aG9kfHx0LnR5cGV8fGYubWV0aG9kfHxmLnR5cGUsZi5kYXRhVHlwZXM9KGYuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKHFlKXx8W1wiXCJdLG51bGw9PWYuY3Jvc3NEb21haW4pe3U9Y2UuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e3UuaHJlZj1mLnVybCx1LmhyZWY9dS5ocmVmLGYuY3Jvc3NEb21haW49SnQucHJvdG9jb2wrXCIvL1wiK0p0Lmhvc3QhPXUucHJvdG9jb2wrXCIvL1wiK3UuaG9zdH1jYXRjaChUKXtmLmNyb3NzRG9tYWluPSEwfX1pZihmLmRhdGEmJmYucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBmLmRhdGEmJihmLmRhdGE9a2UucGFyYW0oZi5kYXRhLGYudHJhZGl0aW9uYWwpKSxvZShZdCxmLHQsQyksYylyZXR1cm4gQztoPWtlLmV2ZW50JiZmLmdsb2JhbCxoJiYwPT09a2UuYWN0aXZlKysmJmtlLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksZi50eXBlPWYudHlwZS50b1VwcGVyQ2FzZSgpLGYuaGFzQ29udGVudD0hVnQudGVzdChmLnR5cGUpLG89Zi51cmwucmVwbGFjZShCdCxcIlwiKSxmLmhhc0NvbnRlbnQ/Zi5kYXRhJiZmLnByb2Nlc3NEYXRhJiYwPT09KGYuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJihmLmRhdGE9Zi5kYXRhLnJlcGxhY2UoSXQsXCIrXCIpKTooZD1mLnVybC5zbGljZShvLmxlbmd0aCksZi5kYXRhJiYoZi5wcm9jZXNzRGF0YXx8XCJzdHJpbmdcIj09dHlwZW9mIGYuZGF0YSkmJihvKz0oUHQudGVzdChvKT9cIiZcIjpcIj9cIikrZi5kYXRhLGRlbGV0ZSBmLmRhdGEpLGYuY2FjaGU9PT0hMSYmKG89by5yZXBsYWNlKFd0LFwiJDFcIiksZD0oUHQudGVzdChvKT9cIiZcIjpcIj9cIikrXCJfPVwiK090KysgK2QpLGYudXJsPW8rZCksZi5pZk1vZGlmaWVkJiYoa2UubGFzdE1vZGlmaWVkW29dJiZDLnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLGtlLmxhc3RNb2RpZmllZFtvXSksa2UuZXRhZ1tvXSYmQy5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLGtlLmV0YWdbb10pKSwoZi5kYXRhJiZmLmhhc0NvbnRlbnQmJmYuY29udGVudFR5cGUhPT0hMXx8dC5jb250ZW50VHlwZSkmJkMuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLGYuY29udGVudFR5cGUpLEMuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLGYuZGF0YVR5cGVzWzBdJiZmLmFjY2VwdHNbZi5kYXRhVHlwZXNbMF1dP2YuYWNjZXB0c1tmLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09Zi5kYXRhVHlwZXNbMF0/XCIsIFwiK1p0K1wiOyBxPTAuMDFcIjpcIlwiKTpmLmFjY2VwdHNbXCIqXCJdKTtmb3IocCBpbiBmLmhlYWRlcnMpQy5zZXRSZXF1ZXN0SGVhZGVyKHAsZi5oZWFkZXJzW3BdKTtpZihmLmJlZm9yZVNlbmQmJihmLmJlZm9yZVNlbmQuY2FsbChnLEMsZik9PT0hMXx8YykpcmV0dXJuIEMuYWJvcnQoKTtpZihfPVwiYWJvcnRcIix5LmFkZChmLmNvbXBsZXRlKSxDLmRvbmUoZi5zdWNjZXNzKSxDLmZhaWwoZi5lcnJvcikscj1vZShHdCxmLHQsQykpe2lmKEMucmVhZHlTdGF0ZT0xLGgmJm0udHJpZ2dlcihcImFqYXhTZW5kXCIsW0MsZl0pLGMpcmV0dXJuIEM7Zi5hc3luYyYmZi50aW1lb3V0PjAmJihsPW4uc2V0VGltZW91dChmdW5jdGlvbigpe0MuYWJvcnQoXCJ0aW1lb3V0XCIpfSxmLnRpbWVvdXQpKTt0cnl7Yz0hMSxyLnNlbmQoeCxpKX1jYXRjaChUKXtpZihjKXRocm93IFQ7aSgtMSxUKX19ZWxzZSBpKC0xLFwiTm8gVHJhbnNwb3J0XCIpO3JldHVybiBDfSxnZXRKU09OOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4ga2UuZ2V0KGUsdCxuLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGtlLmdldChlLHZvaWQgMCx0LFwic2NyaXB0XCIpfX0pLGtlLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGUsdCl7a2VbdF09ZnVuY3Rpb24oZSxuLGkscil7cmV0dXJuIF9lKG4pJiYocj1yfHxpLGk9bixuPXZvaWQgMCksa2UuYWpheChrZS5leHRlbmQoe3VybDplLHR5cGU6dCxkYXRhVHlwZTpyLGRhdGE6bixzdWNjZXNzOml9LGtlLmlzUGxhaW5PYmplY3QoZSkmJmUpKX19KSxrZS5fZXZhbFVybD1mdW5jdGlvbihlKXtyZXR1cm4ga2UuYWpheCh7dXJsOmUsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sa2UuZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiB0aGlzWzBdJiYoX2UoZSkmJihlPWUuY2FsbCh0aGlzWzBdKSksdD1rZShlLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmdC5pbnNlcnRCZWZvcmUodGhpc1swXSksdC5tYXAoZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcztlLmZpcnN0RWxlbWVudENoaWxkOyllPWUuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGV9KS5hcHBlbmQodGhpcykpLHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihlKXtyZXR1cm4gX2UoZSk/dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2tlKHRoaXMpLndyYXBJbm5lcihlLmNhbGwodGhpcyx0KSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1rZSh0aGlzKSxuPXQuY29udGVudHMoKTtuLmxlbmd0aD9uLndyYXBBbGwoZSk6dC5hcHBlbmQoZSl9KX0sd3JhcDpmdW5jdGlvbihlKXt2YXIgdD1fZShlKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKG4pe2tlKHRoaXMpLndyYXBBbGwodD9lLmNhbGwodGhpcyxuKTplKX0pfSx1bndyYXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucGFyZW50KGUpLm5vdChcImJvZHlcIikuZWFjaChmdW5jdGlvbigpe2tlKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KSx0aGlzfX0pLGtlLmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oZSl7cmV0dXJuIWtlLmV4cHIucHNldWRvcy52aXNpYmxlKGUpfSxrZS5leHByLnBzZXVkb3MudmlzaWJsZT1mdW5jdGlvbihlKXtyZXR1cm4hIShlLm9mZnNldFdpZHRofHxlLm9mZnNldEhlaWdodHx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCl9LGtlLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBuLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGUpe319O3ZhciBRdD17MDoyMDAsMTIyMzoyMDR9LEt0PWtlLmFqYXhTZXR0aW5ncy54aHIoKTtiZS5jb3JzPSEhS3QmJlwid2l0aENyZWRlbnRpYWxzXCJpbiBLdCxiZS5hamF4PUt0PSEhS3Qsa2UuYWpheFRyYW5zcG9ydChmdW5jdGlvbihlKXt2YXIgdCxpO2lmKGJlLmNvcnN8fEt0JiYhZS5jcm9zc0RvbWFpbilyZXR1cm57XG5zZW5kOmZ1bmN0aW9uKHIsbyl7dmFyIHMsYT1lLnhocigpO2lmKGEub3BlbihlLnR5cGUsZS51cmwsZS5hc3luYyxlLnVzZXJuYW1lLGUucGFzc3dvcmQpLGUueGhyRmllbGRzKWZvcihzIGluIGUueGhyRmllbGRzKWFbc109ZS54aHJGaWVsZHNbc107ZS5taW1lVHlwZSYmYS5vdmVycmlkZU1pbWVUeXBlJiZhLm92ZXJyaWRlTWltZVR5cGUoZS5taW1lVHlwZSksZS5jcm9zc0RvbWFpbnx8cltcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChyW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO2ZvcihzIGluIHIpYS5zZXRSZXF1ZXN0SGVhZGVyKHMscltzXSk7dD1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXt0JiYodD1pPWEub25sb2FkPWEub25lcnJvcj1hLm9uYWJvcnQ9YS5vbnRpbWVvdXQ9YS5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1lP2EuYWJvcnQoKTpcImVycm9yXCI9PT1lP1wibnVtYmVyXCIhPXR5cGVvZiBhLnN0YXR1cz9vKDAsXCJlcnJvclwiKTpvKGEuc3RhdHVzLGEuc3RhdHVzVGV4dCk6byhRdFthLnN0YXR1c118fGEuc3RhdHVzLGEuc3RhdHVzVGV4dCxcInRleHRcIiE9PShhLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2YgYS5yZXNwb25zZVRleHQ/e2JpbmFyeTphLnJlc3BvbnNlfTp7dGV4dDphLnJlc3BvbnNlVGV4dH0sYS5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0sYS5vbmxvYWQ9dCgpLGk9YS5vbmVycm9yPWEub250aW1lb3V0PXQoXCJlcnJvclwiKSx2b2lkIDAhPT1hLm9uYWJvcnQ/YS5vbmFib3J0PWk6YS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09YS5yZWFkeVN0YXRlJiZuLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0JiZpKCl9KX0sdD10KFwiYWJvcnRcIik7dHJ5e2Euc2VuZChlLmhhc0NvbnRlbnQmJmUuZGF0YXx8bnVsbCl9Y2F0Y2gobCl7aWYodCl0aHJvdyBsfX0sYWJvcnQ6ZnVuY3Rpb24oKXt0JiZ0KCl9fX0pLGtlLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oZSl7ZS5jcm9zc0RvbWFpbiYmKGUuY29udGVudHMuc2NyaXB0PSExKX0pLGtlLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihlKXtyZXR1cm4ga2UuZ2xvYmFsRXZhbChlKSxlfX19KSxrZS5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7dm9pZCAwPT09ZS5jYWNoZSYmKGUuY2FjaGU9ITEpLGUuY3Jvc3NEb21haW4mJihlLnR5cGU9XCJHRVRcIil9KSxrZS5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7aWYoZS5jcm9zc0RvbWFpbil7dmFyIHQsbjtyZXR1cm57c2VuZDpmdW5jdGlvbihpLHIpe3Q9a2UoXCI8c2NyaXB0PlwiKS5wcm9wKHtjaGFyc2V0OmUuc2NyaXB0Q2hhcnNldCxzcmM6ZS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixuPWZ1bmN0aW9uKGUpe3QucmVtb3ZlKCksbj1udWxsLGUmJnIoXCJlcnJvclwiPT09ZS50eXBlPzQwNDoyMDAsZS50eXBlKX0pLGNlLmhlYWQuYXBwZW5kQ2hpbGQodFswXSl9LGFib3J0OmZ1bmN0aW9uKCl7biYmbigpfX19fSk7dmFyIGVuPVtdLHRuPS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87a2UuYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBlPWVuLnBvcCgpfHxrZS5leHBhbmRvK1wiX1wiK090Kys7cmV0dXJuIHRoaXNbZV09ITAsZX19KSxrZS5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKGUsdCxpKXt2YXIgcixvLHMsYT1lLmpzb25wIT09ITEmJih0bi50ZXN0KGUudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBlLmRhdGEmJjA9PT0oZS5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmdG4udGVzdChlLmRhdGEpJiZcImRhdGFcIik7aWYoYXx8XCJqc29ucFwiPT09ZS5kYXRhVHlwZXNbMF0pcmV0dXJuIHI9ZS5qc29ucENhbGxiYWNrPV9lKGUuanNvbnBDYWxsYmFjayk/ZS5qc29ucENhbGxiYWNrKCk6ZS5qc29ucENhbGxiYWNrLGE/ZVthXT1lW2FdLnJlcGxhY2UodG4sXCIkMVwiK3IpOmUuanNvbnAhPT0hMSYmKGUudXJsKz0oUHQudGVzdChlLnVybCk/XCImXCI6XCI/XCIpK2UuanNvbnArXCI9XCIrciksZS5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gc3x8a2UuZXJyb3IocitcIiB3YXMgbm90IGNhbGxlZFwiKSxzWzBdfSxlLmRhdGFUeXBlc1swXT1cImpzb25cIixvPW5bcl0sbltyXT1mdW5jdGlvbigpe3M9YXJndW1lbnRzfSxpLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PW8/a2UobikucmVtb3ZlUHJvcChyKTpuW3JdPW8sZVtyXSYmKGUuanNvbnBDYWxsYmFjaz10Lmpzb25wQ2FsbGJhY2ssZW4ucHVzaChyKSkscyYmX2UobykmJm8oc1swXSkscz1vPXZvaWQgMH0pLFwic2NyaXB0XCJ9KSxiZS5jcmVhdGVIVE1MRG9jdW1lbnQ9ZnVuY3Rpb24oKXt2YXIgZT1jZS5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keTtyZXR1cm4gZS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1lLmNoaWxkTm9kZXMubGVuZ3RofSgpLGtlLnBhcnNlSFRNTD1mdW5jdGlvbihlLHQsbil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuW107XCJib29sZWFuXCI9PXR5cGVvZiB0JiYobj10LHQ9ITEpO3ZhciBpLHIsbztyZXR1cm4gdHx8KGJlLmNyZWF0ZUhUTUxEb2N1bWVudD8odD1jZS5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIiksaT10LmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpLGkuaHJlZj1jZS5sb2NhdGlvbi5ocmVmLHQuaGVhZC5hcHBlbmRDaGlsZChpKSk6dD1jZSkscj0kZS5leGVjKGUpLG89IW4mJltdLHI/W3QuY3JlYXRlRWxlbWVudChyWzFdKV06KHI9UyhbZV0sdCxvKSxvJiZvLmxlbmd0aCYma2UobykucmVtb3ZlKCksa2UubWVyZ2UoW10sci5jaGlsZE5vZGVzKSl9LGtlLmZuLmxvYWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciBpLHIsbyxzPXRoaXMsYT1lLmluZGV4T2YoXCIgXCIpO3JldHVybiBhPi0xJiYoaT1lZShlLnNsaWNlKGEpKSxlPWUuc2xpY2UoMCxhKSksX2UodCk/KG49dCx0PXZvaWQgMCk6dCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJihyPVwiUE9TVFwiKSxzLmxlbmd0aD4wJiZrZS5hamF4KHt1cmw6ZSx0eXBlOnJ8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTp0fSkuZG9uZShmdW5jdGlvbihlKXtvPWFyZ3VtZW50cyxzLmh0bWwoaT9rZShcIjxkaXY+XCIpLmFwcGVuZChrZS5wYXJzZUhUTUwoZSkpLmZpbmQoaSk6ZSl9KS5hbHdheXMobiYmZnVuY3Rpb24oZSx0KXtzLmVhY2goZnVuY3Rpb24oKXtuLmFwcGx5KHRoaXMsb3x8W2UucmVzcG9uc2VUZXh0LHQsZV0pfSl9KSx0aGlzfSxrZS5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oZSx0KXtrZS5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vbih0LGUpfX0pLGtlLmV4cHIucHNldWRvcy5hbmltYXRlZD1mdW5jdGlvbihlKXtyZXR1cm4ga2UuZ3JlcChrZS50aW1lcnMsZnVuY3Rpb24odCl7cmV0dXJuIGU9PT10LmVsZW19KS5sZW5ndGh9LGtlLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgaSxyLG8scyxhLGwsdSxjPWtlLmNzcyhlLFwicG9zaXRpb25cIiksaD1rZShlKSxwPXt9O1wic3RhdGljXCI9PT1jJiYoZS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLGE9aC5vZmZzZXQoKSxvPWtlLmNzcyhlLFwidG9wXCIpLGw9a2UuY3NzKGUsXCJsZWZ0XCIpLHU9KFwiYWJzb2x1dGVcIj09PWN8fFwiZml4ZWRcIj09PWMpJiYobytsKS5pbmRleE9mKFwiYXV0b1wiKT4tMSx1PyhpPWgucG9zaXRpb24oKSxzPWkudG9wLHI9aS5sZWZ0KToocz1wYXJzZUZsb2F0KG8pfHwwLHI9cGFyc2VGbG9hdChsKXx8MCksX2UodCkmJih0PXQuY2FsbChlLG4sa2UuZXh0ZW5kKHt9LGEpKSksbnVsbCE9dC50b3AmJihwLnRvcD10LnRvcC1hLnRvcCtzKSxudWxsIT10LmxlZnQmJihwLmxlZnQ9dC5sZWZ0LWEubGVmdCtyKSxcInVzaW5nXCJpbiB0P3QudXNpbmcuY2FsbChlLHApOmguY3NzKHApfX0sa2UuZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24oZSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09ZT90aGlzOnRoaXMuZWFjaChmdW5jdGlvbih0KXtrZS5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsZSx0KX0pO3ZhciB0LG4saT10aGlzWzBdO2lmKGkpcmV0dXJuIGkuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg/KHQ9aS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuPWkub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldyx7dG9wOnQudG9wK24ucGFnZVlPZmZzZXQsbGVmdDp0LmxlZnQrbi5wYWdlWE9mZnNldH0pOnt0b3A6MCxsZWZ0OjB9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBlLHQsbixpPXRoaXNbMF0scj17dG9wOjAsbGVmdDowfTtpZihcImZpeGVkXCI9PT1rZS5jc3MoaSxcInBvc2l0aW9uXCIpKXQ9aS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtlbHNle2Zvcih0PXRoaXMub2Zmc2V0KCksbj1pLm93bmVyRG9jdW1lbnQsZT1pLm9mZnNldFBhcmVudHx8bi5kb2N1bWVudEVsZW1lbnQ7ZSYmKGU9PT1uLmJvZHl8fGU9PT1uLmRvY3VtZW50RWxlbWVudCkmJlwic3RhdGljXCI9PT1rZS5jc3MoZSxcInBvc2l0aW9uXCIpOyllPWUucGFyZW50Tm9kZTtlJiZlIT09aSYmMT09PWUubm9kZVR5cGUmJihyPWtlKGUpLm9mZnNldCgpLHIudG9wKz1rZS5jc3MoZSxcImJvcmRlclRvcFdpZHRoXCIsITApLHIubGVmdCs9a2UuY3NzKGUsXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpfXJldHVybnt0b3A6dC50b3Atci50b3Ata2UuY3NzKGksXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDp0LmxlZnQtci5sZWZ0LWtlLmNzcyhpLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy5vZmZzZXRQYXJlbnQ7ZSYmXCJzdGF0aWNcIj09PWtlLmNzcyhlLFwicG9zaXRpb25cIik7KWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fHN0fSl9fSksa2UuZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oZSx0KXt2YXIgbj1cInBhZ2VZT2Zmc2V0XCI9PT10O2tlLmZuW2VdPWZ1bmN0aW9uKGkpe3JldHVybiBJZSh0aGlzLGZ1bmN0aW9uKGUsaSxyKXt2YXIgbztyZXR1cm4gQ2UoZSk/bz1lOjk9PT1lLm5vZGVUeXBlJiYobz1lLmRlZmF1bHRWaWV3KSx2b2lkIDA9PT1yP28/b1t0XTplW2ldOnZvaWQobz9vLnNjcm9sbFRvKG4/by5wYWdlWE9mZnNldDpyLG4/cjpvLnBhZ2VZT2Zmc2V0KTplW2ldPXIpfSxlLGksYXJndW1lbnRzLmxlbmd0aCl9fSksa2UuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oZSx0KXtrZS5jc3NIb29rc1t0XT1SKGJlLnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oZSxuKXtpZihuKXJldHVybiBuPU0oZSx0KSxmdC50ZXN0KG4pP2tlKGUpLnBvc2l0aW9uKClbdF0rXCJweFwiOm59KX0pLGtlLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oZSx0KXtrZS5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIitlLGNvbnRlbnQ6dCxcIlwiOlwib3V0ZXJcIitlfSxmdW5jdGlvbihuLGkpe2tlLmZuW2ldPWZ1bmN0aW9uKHIsbyl7dmFyIHM9YXJndW1lbnRzLmxlbmd0aCYmKG58fFwiYm9vbGVhblwiIT10eXBlb2YgciksYT1ufHwocj09PSEwfHxvPT09ITA/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gSWUodGhpcyxmdW5jdGlvbih0LG4scil7dmFyIG87cmV0dXJuIENlKHQpPzA9PT1pLmluZGV4T2YoXCJvdXRlclwiKT90W1wiaW5uZXJcIitlXTp0LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2VdOjk9PT10Lm5vZGVUeXBlPyhvPXQuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KHQuYm9keVtcInNjcm9sbFwiK2VdLG9bXCJzY3JvbGxcIitlXSx0LmJvZHlbXCJvZmZzZXRcIitlXSxvW1wib2Zmc2V0XCIrZV0sb1tcImNsaWVudFwiK2VdKSk6dm9pZCAwPT09cj9rZS5jc3ModCxuLGEpOmtlLnN0eWxlKHQsbixyLGEpfSx0LHM/cjp2b2lkIDAscyl9fSl9KSxrZS5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe2tlLmZuW3RdPWZ1bmN0aW9uKGUsbil7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKHQsbnVsbCxlLG4pOnRoaXMudHJpZ2dlcih0KX19KSxrZS5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubW91c2VlbnRlcihlKS5tb3VzZWxlYXZlKHR8fGUpfX0pLGtlLmZuLmV4dGVuZCh7YmluZDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMub24oZSxudWxsLHQsbil9LHVuYmluZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm9mZihlLG51bGwsdCl9LGRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuLGkpe3JldHVybiB0aGlzLm9uKHQsZSxuLGkpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoZSxcIioqXCIpOnRoaXMub2ZmKHQsZXx8XCIqKlwiLG4pfX0pLGtlLnByb3h5PWZ1bmN0aW9uKGUsdCl7dmFyIG4saSxyO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1lW3RdLHQ9ZSxlPW4pLF9lKGUpKXJldHVybiBpPXBlLmNhbGwoYXJndW1lbnRzLDIpLHI9ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0fHx0aGlzLGkuY29uY2F0KHBlLmNhbGwoYXJndW1lbnRzKSkpfSxyLmd1aWQ9ZS5ndWlkPWUuZ3VpZHx8a2UuZ3VpZCsrLHJ9LGtlLmhvbGRSZWFkeT1mdW5jdGlvbihlKXtlP2tlLnJlYWR5V2FpdCsrOmtlLnJlYWR5KCEwKX0sa2UuaXNBcnJheT1BcnJheS5pc0FycmF5LGtlLnBhcnNlSlNPTj1KU09OLnBhcnNlLGtlLm5vZGVOYW1lPXUsa2UuaXNGdW5jdGlvbj1fZSxrZS5pc1dpbmRvdz1DZSxrZS5jYW1lbENhc2U9eSxrZS50eXBlPWEsa2Uubm93PURhdGUubm93LGtlLmlzTnVtZXJpYz1mdW5jdGlvbihlKXt2YXIgdD1rZS50eXBlKGUpO3JldHVybihcIm51bWJlclwiPT09dHx8XCJzdHJpbmdcIj09PXQpJiYhaXNOYU4oZS1wYXJzZUZsb2F0KGUpKX0saT1bXSxyPWZ1bmN0aW9uKCl7cmV0dXJuIGtlfS5hcHBseSh0LGkpLCEodm9pZCAwIT09ciYmKGUuZXhwb3J0cz1yKSk7dmFyIG5uPW4ualF1ZXJ5LHJuPW4uJDtyZXR1cm4ga2Uubm9Db25mbGljdD1mdW5jdGlvbihlKXtyZXR1cm4gbi4kPT09a2UmJihuLiQ9cm4pLGUmJm4ualF1ZXJ5PT09a2UmJihuLmpRdWVyeT1ubiksa2V9LG98fChuLmpRdWVyeT1uLiQ9a2UpLGtlfSl9LGZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1uKDUpO1wic3RyaW5nXCI9PXR5cGVvZiBpJiYoaT1bW2UuaWQsaSxcIlwiXV0pLGkubG9jYWxzJiYoZS5leHBvcnRzPWkubG9jYWxzKTtuKDkpKFwiYzk2MjE1MTZcIixpLCEwKX0sZnVuY3Rpb24oZSx0LG4pe3ZhciBpPW4oNik7dD1lLmV4cG9ydHM9big3KSghMSksdC5wdXNoKFtlLmlkLCcvKipcXG4gKiBPd2wgQ2Fyb3VzZWwgdjIuMy40XFxuICogQ29weXJpZ2h0IDIwMTMtMjAxOCBEYXZpZCBEZXV0c2NoXFxuICogTGljZW5zZWQgdW5kZXI6IFNFRSBMSUNFTlNFIElOIGh0dHBzOi8vZ2l0aHViLmNvbS9Pd2xDYXJvdXNlbDIvT3dsQ2Fyb3VzZWwyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcXG4gKi9cXG4vKlxcbiAqICBPd2wgQ2Fyb3VzZWwgLSBDb3JlXFxuICovXFxuLm93bC1jYXJvdXNlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLyogcG9zaXRpb24gcmVsYXRpdmUgYW5kIHotaW5kZXggZml4IHdlYmtpdCByZW5kZXJpbmcgZm9udHMgaXNzdWUgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7IH1cXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLVk7XFxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgLyogZml4IGZpcmVmb3ggYW5pbWF0aW9uIGdsaXRjaCAqLyB9XFxuICAub3dsLWNhcm91c2VsIC5vd2wtc3RhZ2U6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcIi5cIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNsZWFyOiBib3RoO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBoZWlnaHQ6IDA7IH1cXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZS1vdXRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgLyogZml4IGZvciBmbGFzaGluZyBiYWNrZ3JvdW5kICovXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTsgfVxcbiAgLm93bC1jYXJvdXNlbCAub3dsLXdyYXBwZXIsXFxuICAub3dsLWNhcm91c2VsIC5vd2wtaXRlbSB7XFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgLW1zLWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XFxuICAub3dsLWNhcm91c2VsIC5vd2wtaXRlbSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogMXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgfVxcbiAgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAub3dsLWNhcm91c2VsIC5vd2wtbmF2LmRpc2FibGVkLFxcbiAgLm93bC1jYXJvdXNlbCAub3dsLWRvdHMuZGlzYWJsZWQge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAub3dsLWNhcm91c2VsIC5vd2wtbmF2IC5vd2wtcHJldixcXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1uZXh0LFxcbiAgLm93bC1jYXJvdXNlbCAub3dsLWRvdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAub3dsLWNhcm91c2VsIC5vd2wtbmF2IGJ1dHRvbi5vd2wtcHJldixcXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgYnV0dG9uLm93bC1uZXh0LFxcbiAgLm93bC1jYXJvdXNlbCBidXR0b24ub3dsLWRvdCB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gICAgZm9udDogaW5oZXJpdDsgfVxcbiAgLm93bC1jYXJvdXNlbC5vd2wtbG9hZGVkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5vd2wtY2Fyb3VzZWwub3dsLWxvYWRpbmcge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLm93bC1jYXJvdXNlbC5vd2wtaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgLm93bC1jYXJvdXNlbC5vd2wtcmVmcmVzaCAub3dsLWl0ZW0ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG4gIC5vd2wtY2Fyb3VzZWwub3dsLWRyYWcgLm93bC1pdGVtIHtcXG4gICAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLXk7XFxuICAgICAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAub3dsLWNhcm91c2VsLm93bC1ncmFiIHtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbiAgICBjdXJzb3I6IGdyYWI7IH1cXG4gIC5vd2wtY2Fyb3VzZWwub3dsLXJ0bCB7XFxuICAgIGRpcmVjdGlvbjogcnRsOyB9XFxuICAub3dsLWNhcm91c2VsLm93bC1ydGwgLm93bC1pdGVtIHtcXG4gICAgZmxvYXQ6IHJpZ2h0OyB9XFxuXFxuLyogTm8gSnMgKi9cXG4ubm8tanMgLm93bC1jYXJvdXNlbCB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi8qXFxuICogIE93bCBDYXJvdXNlbCAtIEFuaW1hdGUgUGx1Z2luXFxuICovXFxuLm93bC1jYXJvdXNlbCAuYW5pbWF0ZWQge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoOyB9XFxuXFxuLm93bC1jYXJvdXNlbCAub3dsLWFuaW1hdGVkLWluIHtcXG4gIHotaW5kZXg6IDA7IH1cXG5cXG4ub3dsLWNhcm91c2VsIC5vd2wtYW5pbWF0ZWQtb3V0IHtcXG4gIHotaW5kZXg6IDE7IH1cXG5cXG4ub3dsLWNhcm91c2VsIC5mYWRlT3V0IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0OyB9XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcblxcbi8qXFxuICogXFx0T3dsIENhcm91c2VsIC0gQXV0byBIZWlnaHQgUGx1Z2luXFxuICovXFxuLm93bC1oZWlnaHQge1xcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDUwMG1zIGVhc2UtaW4tb3V0OyB9XFxuXFxuLypcXG4gKiBcXHRPd2wgQ2Fyb3VzZWwgLSBMYXp5IExvYWQgUGx1Z2luXFxuICovXFxuLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0ge1xcbiAgLyoqXFxuXFx0XFx0XFx0VGhpcyBpcyBpbnRyb2R1Y2VkIGR1ZSB0byBhIGJ1ZyBpbiBJRTExIHdoZXJlIGxhenkgbG9hZGluZyBjb21iaW5lZCB3aXRoIGF1dG9oZWlnaHQgcGx1Z2luIGNhdXNlcyBhIHdyb25nXFxuXFx0XFx0XFx0Y2FsY3VsYXRpb24gb2YgdGhlIGhlaWdodCBvZiB0aGUgb3dsLWl0ZW0gdGhhdCBicmVha3MgcGFnZSBsYXlvdXRzXFxuXFx0XFx0ICovIH1cXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtIC5vd2wtbGF6eSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZTsgfVxcbiAgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gLm93bC1sYXp5W3NyY149XCJcIl0sIC5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtIC5vd2wtbGF6eTpub3QoW3NyY10pIHtcXG4gICAgbWF4LWhlaWdodDogMDsgfVxcbiAgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1nLm93bC1sYXp5IHtcXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgfVxcblxcbi8qXFxuICogXFx0T3dsIENhcm91c2VsIC0gVmlkZW8gUGx1Z2luXFxuICovXFxuLm93bC1jYXJvdXNlbCAub3dsLXZpZGVvLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogIzAwMDsgfVxcblxcbi5vd2wtY2Fyb3VzZWwgLm93bC12aWRlby1wbGF5LWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcXG4gIG1hcmdpbi10b3A6IC00MHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKCcraShuKDgpKStcIikgbm8tcmVwZWF0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2U7IH1cXG5cXG4ub3dsLWNhcm91c2VsIC5vd2wtdmlkZW8tcGxheS1pY29uOmhvdmVyIHtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4zKTtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4zKTsgfVxcblxcbi5vd2wtY2Fyb3VzZWwgLm93bC12aWRlby1wbGF5aW5nIC5vd2wtdmlkZW8tdG4sXFxuLm93bC1jYXJvdXNlbCAub3dsLXZpZGVvLXBsYXlpbmcgLm93bC12aWRlby1wbGF5LWljb24ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5vd2wtY2Fyb3VzZWwgLm93bC12aWRlby10biB7XFxuICBvcGFjaXR5OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2U7IH1cXG5cXG4ub3dsLWNhcm91c2VsIC5vd2wtdmlkZW8tZnJhbWUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXCIsXCJcIl0pfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZT9lOigvXlsnXCJdLipbJ1wiXSQvLnRlc3QoZSkmJihlPWUuc2xpY2UoMSwtMSkpLC9bXCInKCkgXFx0XFxuXS8udGVzdChlKT8nXCInK2UucmVwbGFjZSgvXCIvZywnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csXCJcXFxcblwiKSsnXCInOmUpfX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKGUsdCl7dmFyIG49ZVsxXXx8XCJcIixyPWVbM107aWYoIXIpcmV0dXJuIG47aWYodCYmXCJmdW5jdGlvblwiPT10eXBlb2YgYnRvYSl7dmFyIG89aShyKSxzPXIuc291cmNlcy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiK3Iuc291cmNlUm9vdCtlK1wiICovXCJ9KTtyZXR1cm5bbl0uY29uY2F0KHMpLmNvbmNhdChbb10pLmpvaW4oXCJcXG5cIil9cmV0dXJuW25dLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gaShlKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShlKSkpKSxuPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIrdDtyZXR1cm5cIi8qIyBcIituK1wiICovXCJ9ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PVtdO3JldHVybiB0LnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciBpPW4odCxlKTtyZXR1cm4gdFsyXT9cIkBtZWRpYSBcIit0WzJdK1wie1wiK2krXCJ9XCI6aX0pLmpvaW4oXCJcIil9LHQuaT1mdW5jdGlvbihlLG4pe1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1bW251bGwsZSxcIlwiXV0pO2Zvcih2YXIgaT17fSxyPTA7cjx0aGlzLmxlbmd0aDtyKyspe3ZhciBvPXRoaXNbcl1bMF07XCJudW1iZXJcIj09dHlwZW9mIG8mJihpW29dPSEwKX1mb3Iocj0wO3I8ZS5sZW5ndGg7cisrKXt2YXIgcz1lW3JdO1wibnVtYmVyXCI9PXR5cGVvZiBzWzBdJiZpW3NbMF1dfHwobiYmIXNbMl0/c1syXT1uOm4mJihzWzJdPVwiKFwiK3NbMl0rXCIpIGFuZCAoXCIrbitcIilcIiksdC5wdXNoKHMpKX19LHR9fSxmdW5jdGlvbihlLHQsbil7ZS5leHBvcnRzPW4ucCtcIjRhMzdmODAwODk1OWM3NWY2MTliZjBhM2E0ZTJkN2EyLnBuZ1wifSxmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gaShlKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7dmFyIG49ZVt0XSxpPWNbbi5pZF07aWYoaSl7aS5yZWZzKys7Zm9yKHZhciByPTA7cjxpLnBhcnRzLmxlbmd0aDtyKyspaS5wYXJ0c1tyXShuLnBhcnRzW3JdKTtmb3IoO3I8bi5wYXJ0cy5sZW5ndGg7cisrKWkucGFydHMucHVzaChvKG4ucGFydHNbcl0pKTtpLnBhcnRzLmxlbmd0aD5uLnBhcnRzLmxlbmd0aCYmKGkucGFydHMubGVuZ3RoPW4ucGFydHMubGVuZ3RoKX1lbHNle2Zvcih2YXIgcz1bXSxyPTA7cjxuLnBhcnRzLmxlbmd0aDtyKyspcy5wdXNoKG8obi5wYXJ0c1tyXSkpO2Nbbi5pZF09e2lkOm4uaWQscmVmczoxLHBhcnRzOnN9fX19ZnVuY3Rpb24gcigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtyZXR1cm4gZS50eXBlPVwidGV4dC9jc3NcIixoLmFwcGVuZENoaWxkKGUpLGV9ZnVuY3Rpb24gbyhlKXt2YXIgdCxuLGk9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS12dWUtc3NyLWlkfj1cIicrZS5pZCsnXCJdJyk7aWYoaSl7aWYoZilyZXR1cm4gZztpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSl9aWYobSl7dmFyIG89ZCsrO2k9cHx8KHA9cigpKSx0PXMuYmluZChudWxsLGksbywhMSksbj1zLmJpbmQobnVsbCxpLG8sITApfWVsc2UgaT1yKCksdD1hLmJpbmQobnVsbCxpKSxuPWZ1bmN0aW9uKCl7aS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGkpfTtyZXR1cm4gdChlKSxmdW5jdGlvbihpKXtpZihpKXtpZihpLmNzcz09PWUuY3NzJiZpLm1lZGlhPT09ZS5tZWRpYSYmaS5zb3VyY2VNYXA9PT1lLnNvdXJjZU1hcClyZXR1cm47dChlPWkpfWVsc2UgbigpfX1mdW5jdGlvbiBzKGUsdCxuLGkpe3ZhciByPW4/XCJcIjppLmNzcztpZihlLnN0eWxlU2hlZXQpZS5zdHlsZVNoZWV0LmNzc1RleHQ9dih0LHIpO2Vsc2V7dmFyIG89ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocikscz1lLmNoaWxkTm9kZXM7c1t0XSYmZS5yZW1vdmVDaGlsZChzW3RdKSxzLmxlbmd0aD9lLmluc2VydEJlZm9yZShvLHNbdF0pOmUuYXBwZW5kQ2hpbGQobyl9fWZ1bmN0aW9uIGEoZSx0KXt2YXIgbj10LmNzcyxpPXQubWVkaWEscj10LnNvdXJjZU1hcDtpZihpJiZlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsaSksciYmKG4rPVwiXFxuLyojIHNvdXJjZVVSTD1cIityLnNvdXJjZXNbMF0rXCIgKi9cIixuKz1cIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkocikpKSkrXCIgKi9cIiksZS5zdHlsZVNoZWV0KWUuc3R5bGVTaGVldC5jc3NUZXh0PW47ZWxzZXtmb3IoO2UuZmlyc3RDaGlsZDspZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpO2UuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobikpfX12YXIgbD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQsdT1uKDEwKSxjPXt9LGg9bCYmKGRvY3VtZW50LmhlYWR8fGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSkscD1udWxsLGQ9MCxmPSExLGc9ZnVuY3Rpb24oKXt9LG09XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG5hdmlnYXRvciYmL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0LG4pe2Y9bjt2YXIgcj11KGUsdCk7cmV0dXJuIGkociksZnVuY3Rpb24odCl7Zm9yKHZhciBuPVtdLG89MDtvPHIubGVuZ3RoO28rKyl7dmFyIHM9cltvXSxhPWNbcy5pZF07YS5yZWZzLS0sbi5wdXNoKGEpfXQ/KHI9dShlLHQpLGkocikpOnI9W107Zm9yKHZhciBvPTA7bzxuLmxlbmd0aDtvKyspe3ZhciBhPW5bb107aWYoMD09PWEucmVmcyl7Zm9yKHZhciBsPTA7bDxhLnBhcnRzLmxlbmd0aDtsKyspYS5wYXJ0c1tsXSgpO2RlbGV0ZSBjW2EuaWRdfX19fTt2YXIgdj1mdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBmdW5jdGlvbih0LG4pe3JldHVybiBlW3RdPW4sZS5maWx0ZXIoQm9vbGVhbikuam9pbihcIlxcblwiKX19KCl9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPVtdLGk9e30scj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgbz10W3JdLHM9b1swXSxhPW9bMV0sbD1vWzJdLHU9b1szXSxjPXtpZDplK1wiOlwiK3IsY3NzOmEsbWVkaWE6bCxzb3VyY2VNYXA6dX07aVtzXT9pW3NdLnBhcnRzLnB1c2goYyk6bi5wdXNoKGlbc109e2lkOnMscGFydHM6W2NdfSl9cmV0dXJuIG59fSxmdW5jdGlvbihlLHQsbil7dmFyIGk9bigxMik7XCJzdHJpbmdcIj09dHlwZW9mIGkmJihpPVtbZS5pZCxpLFwiXCJdXSksaS5sb2NhbHMmJihlLmV4cG9ydHM9aS5sb2NhbHMpO24oOSkoXCIyNWJiODgyZVwiLGksITApfSxmdW5jdGlvbihlLHQsbil7dD1lLmV4cG9ydHM9big3KSghMSksdC5wdXNoKFtlLmlkLFwiLyoqXFxuICogT3dsIENhcm91c2VsIHYyLjMuNFxcbiAqIENvcHlyaWdodCAyMDEzLTIwMTggRGF2aWQgRGV1dHNjaFxcbiAqIExpY2Vuc2VkIHVuZGVyOiBTRUUgTElDRU5TRSBJTiBodHRwczovL2dpdGh1Yi5jb20vT3dsQ2Fyb3VzZWwyL093bENhcm91c2VsMi9ibG9iL21hc3Rlci9MSUNFTlNFXFxuICovXFxuLypcXG4gKiBcXHREZWZhdWx0IHRoZW1lIC0gT3dsIENhcm91c2VsIENTUyBGaWxlXFxuICovXFxuLm93bC10aGVtZSAub3dsLW5hdiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLm93bC10aGVtZSAub3dsLW5hdiBbY2xhc3MqPSdvd2wtJ10ge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNHB4IDdweDtcXG4gICAgYmFja2dyb3VuZDogI0Q2RDZENjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgICAub3dsLXRoZW1lIC5vd2wtbmF2IFtjbGFzcyo9J293bC0nXTpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogIzg2OTc5MTtcXG4gICAgICBjb2xvcjogI0ZGRjtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5vd2wtdGhlbWUgLm93bC1uYXYgLmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4ub3dsLXRoZW1lIC5vd2wtbmF2LmRpc2FibGVkICsgLm93bC1kb3RzIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG5cXG4ub3dsLXRoZW1lIC5vd2wtZG90cyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgem9vbTogMTtcXG4gICAgKmRpc3BsYXk6IGlubGluZTsgfVxcbiAgICAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcXG4gICAgICB3aWR0aDogMTBweDtcXG4gICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgbWFyZ2luOiA1cHggN3B4O1xcbiAgICAgIGJhY2tncm91bmQ6ICNENkQ2RDY7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4OyB9XFxuICAgIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSBzcGFuLCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdDpob3ZlciBzcGFuIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjODY5NzkxOyB9XFxuXCIsXCJcIl0pfSxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKGUsdCl7IWZ1bmN0aW9uKGUsbixpLHIpe2Z1bmN0aW9uIG8odCxuKXt0aGlzLnNldHRpbmdzPW51bGwsdGhpcy5vcHRpb25zPWUuZXh0ZW5kKHt9LG8uRGVmYXVsdHMsbiksdGhpcy4kZWxlbWVudD1lKHQpLHRoaXMuX2hhbmRsZXJzPXt9LHRoaXMuX3BsdWdpbnM9e30sdGhpcy5fc3VwcmVzcz17fSx0aGlzLl9jdXJyZW50PW51bGwsdGhpcy5fc3BlZWQ9bnVsbCx0aGlzLl9jb29yZGluYXRlcz1bXSx0aGlzLl9icmVha3BvaW50PW51bGwsdGhpcy5fd2lkdGg9bnVsbCx0aGlzLl9pdGVtcz1bXSx0aGlzLl9jbG9uZXM9W10sdGhpcy5fbWVyZ2Vycz1bXSx0aGlzLl93aWR0aHM9W10sdGhpcy5faW52YWxpZGF0ZWQ9e30sdGhpcy5fcGlwZT1bXSx0aGlzLl9kcmFnPXt0aW1lOm51bGwsdGFyZ2V0Om51bGwscG9pbnRlcjpudWxsLHN0YWdlOntzdGFydDpudWxsLGN1cnJlbnQ6bnVsbH0sZGlyZWN0aW9uOm51bGx9LHRoaXMuX3N0YXRlcz17Y3VycmVudDp7fSx0YWdzOntpbml0aWFsaXppbmc6W1wiYnVzeVwiXSxhbmltYXRpbmc6W1wiYnVzeVwiXSxkcmFnZ2luZzpbXCJpbnRlcmFjdGluZ1wiXX19LGUuZWFjaChbXCJvblJlc2l6ZVwiLFwib25UaHJvdHRsZWRSZXNpemVcIl0sZS5wcm94eShmdW5jdGlvbih0LG4pe3RoaXMuX2hhbmRsZXJzW25dPWUucHJveHkodGhpc1tuXSx0aGlzKX0sdGhpcykpLGUuZWFjaChvLlBsdWdpbnMsZS5wcm94eShmdW5jdGlvbihlLHQpe3RoaXMuX3BsdWdpbnNbZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKStlLnNsaWNlKDEpXT1uZXcgdCh0aGlzKX0sdGhpcykpLGUuZWFjaChvLldvcmtlcnMsZS5wcm94eShmdW5jdGlvbih0LG4pe3RoaXMuX3BpcGUucHVzaCh7ZmlsdGVyOm4uZmlsdGVyLHJ1bjplLnByb3h5KG4ucnVuLHRoaXMpfSl9LHRoaXMpKSx0aGlzLnNldHVwKCksdGhpcy5pbml0aWFsaXplKCl9by5EZWZhdWx0cz17aXRlbXM6Myxsb29wOiExLGNlbnRlcjohMSxyZXdpbmQ6ITEsY2hlY2tWaXNpYmlsaXR5OiEwLG1vdXNlRHJhZzohMCx0b3VjaERyYWc6ITAscHVsbERyYWc6ITAsZnJlZURyYWc6ITEsbWFyZ2luOjAsc3RhZ2VQYWRkaW5nOjAsbWVyZ2U6ITEsbWVyZ2VGaXQ6ITAsYXV0b1dpZHRoOiExLHN0YXJ0UG9zaXRpb246MCxydGw6ITEsc21hcnRTcGVlZDoyNTAsZmx1aWRTcGVlZDohMSxkcmFnRW5kU3BlZWQ6ITEscmVzcG9uc2l2ZTp7fSxyZXNwb25zaXZlUmVmcmVzaFJhdGU6MjAwLHJlc3BvbnNpdmVCYXNlRWxlbWVudDpuLGZhbGxiYWNrRWFzaW5nOlwic3dpbmdcIixzbGlkZVRyYW5zaXRpb246XCJcIixpbmZvOiExLG5lc3RlZEl0ZW1TZWxlY3RvcjohMSxpdGVtRWxlbWVudDpcImRpdlwiLHN0YWdlRWxlbWVudDpcImRpdlwiLHJlZnJlc2hDbGFzczpcIm93bC1yZWZyZXNoXCIsbG9hZGVkQ2xhc3M6XCJvd2wtbG9hZGVkXCIsbG9hZGluZ0NsYXNzOlwib3dsLWxvYWRpbmdcIixydGxDbGFzczpcIm93bC1ydGxcIixyZXNwb25zaXZlQ2xhc3M6XCJvd2wtcmVzcG9uc2l2ZVwiLGRyYWdDbGFzczpcIm93bC1kcmFnXCIsaXRlbUNsYXNzOlwib3dsLWl0ZW1cIixzdGFnZUNsYXNzOlwib3dsLXN0YWdlXCIsc3RhZ2VPdXRlckNsYXNzOlwib3dsLXN0YWdlLW91dGVyXCIsZ3JhYkNsYXNzOlwib3dsLWdyYWJcIn0sby5XaWR0aD17RGVmYXVsdDpcImRlZmF1bHRcIixJbm5lcjpcImlubmVyXCIsT3V0ZXI6XCJvdXRlclwifSxvLlR5cGU9e0V2ZW50OlwiZXZlbnRcIixTdGF0ZTpcInN0YXRlXCJ9LG8uUGx1Z2lucz17fSxvLldvcmtlcnM9W3tmaWx0ZXI6W1wid2lkdGhcIixcInNldHRpbmdzXCJdLHJ1bjpmdW5jdGlvbigpe3RoaXMuX3dpZHRoPXRoaXMuJGVsZW1lbnQud2lkdGgoKX19LHtmaWx0ZXI6W1wid2lkdGhcIixcIml0ZW1zXCIsXCJzZXR0aW5nc1wiXSxydW46ZnVuY3Rpb24oZSl7ZS5jdXJyZW50PXRoaXMuX2l0ZW1zJiZ0aGlzLl9pdGVtc1t0aGlzLnJlbGF0aXZlKHRoaXMuX2N1cnJlbnQpXX19LHtmaWx0ZXI6W1wiaXRlbXNcIixcInNldHRpbmdzXCJdLHJ1bjpmdW5jdGlvbigpe3RoaXMuJHN0YWdlLmNoaWxkcmVuKFwiLmNsb25lZFwiKS5yZW1vdmUoKX19LHtmaWx0ZXI6W1wid2lkdGhcIixcIml0ZW1zXCIsXCJzZXR0aW5nc1wiXSxydW46ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5zZXR0aW5ncy5tYXJnaW58fFwiXCIsbj0hdGhpcy5zZXR0aW5ncy5hdXRvV2lkdGgsaT10aGlzLnNldHRpbmdzLnJ0bCxyPXt3aWR0aDpcImF1dG9cIixcIm1hcmdpbi1sZWZ0XCI6aT90OlwiXCIsXCJtYXJnaW4tcmlnaHRcIjppP1wiXCI6dH07IW4mJnRoaXMuJHN0YWdlLmNoaWxkcmVuKCkuY3NzKHIpLGUuY3NzPXJ9fSx7ZmlsdGVyOltcIndpZHRoXCIsXCJpdGVtc1wiLFwic2V0dGluZ3NcIl0scnVuOmZ1bmN0aW9uKGUpe3ZhciB0PSh0aGlzLndpZHRoKCkvdGhpcy5zZXR0aW5ncy5pdGVtcykudG9GaXhlZCgzKS10aGlzLnNldHRpbmdzLm1hcmdpbixuPW51bGwsaT10aGlzLl9pdGVtcy5sZW5ndGgscj0hdGhpcy5zZXR0aW5ncy5hdXRvV2lkdGgsbz1bXTtmb3IoZS5pdGVtcz17bWVyZ2U6ITEsd2lkdGg6dH07aS0tOyluPXRoaXMuX21lcmdlcnNbaV0sbj10aGlzLnNldHRpbmdzLm1lcmdlRml0JiZNYXRoLm1pbihuLHRoaXMuc2V0dGluZ3MuaXRlbXMpfHxuLGUuaXRlbXMubWVyZ2U9bj4xfHxlLml0ZW1zLm1lcmdlLG9baV09cj90Km46dGhpcy5faXRlbXNbaV0ud2lkdGgoKTt0aGlzLl93aWR0aHM9b319LHtmaWx0ZXI6W1wiaXRlbXNcIixcInNldHRpbmdzXCJdLHJ1bjpmdW5jdGlvbigpe3ZhciB0PVtdLG49dGhpcy5faXRlbXMsaT10aGlzLnNldHRpbmdzLHI9TWF0aC5tYXgoMippLml0ZW1zLDQpLG89MipNYXRoLmNlaWwobi5sZW5ndGgvMikscz1pLmxvb3AmJm4ubGVuZ3RoP2kucmV3aW5kP3I6TWF0aC5tYXgocixvKTowLGE9XCJcIixsPVwiXCI7Zm9yKHMvPTI7cz4wOyl0LnB1c2godGhpcy5ub3JtYWxpemUodC5sZW5ndGgvMiwhMCkpLGErPW5bdFt0Lmxlbmd0aC0xXV1bMF0ub3V0ZXJIVE1MLHQucHVzaCh0aGlzLm5vcm1hbGl6ZShuLmxlbmd0aC0xLSh0Lmxlbmd0aC0xKS8yLCEwKSksbD1uW3RbdC5sZW5ndGgtMV1dWzBdLm91dGVySFRNTCtsLHMtPTE7dGhpcy5fY2xvbmVzPXQsZShhKS5hZGRDbGFzcyhcImNsb25lZFwiKS5hcHBlbmRUbyh0aGlzLiRzdGFnZSksZShsKS5hZGRDbGFzcyhcImNsb25lZFwiKS5wcmVwZW5kVG8odGhpcy4kc3RhZ2UpfX0se2ZpbHRlcjpbXCJ3aWR0aFwiLFwiaXRlbXNcIixcInNldHRpbmdzXCJdLHJ1bjpmdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLnNldHRpbmdzLnJ0bD8xOi0xLHQ9dGhpcy5fY2xvbmVzLmxlbmd0aCt0aGlzLl9pdGVtcy5sZW5ndGgsbj0tMSxpPTAscj0wLG89W107KytuPHQ7KWk9b1tuLTFdfHwwLHI9dGhpcy5fd2lkdGhzW3RoaXMucmVsYXRpdmUobildK3RoaXMuc2V0dGluZ3MubWFyZ2luLG8ucHVzaChpK3IqZSk7dGhpcy5fY29vcmRpbmF0ZXM9b319LHtmaWx0ZXI6W1wid2lkdGhcIixcIml0ZW1zXCIsXCJzZXR0aW5nc1wiXSxydW46ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyx0PXRoaXMuX2Nvb3JkaW5hdGVzLG49e3dpZHRoOk1hdGguY2VpbChNYXRoLmFicyh0W3QubGVuZ3RoLTFdKSkrMiplLFwicGFkZGluZy1sZWZ0XCI6ZXx8XCJcIixcInBhZGRpbmctcmlnaHRcIjplfHxcIlwifTt0aGlzLiRzdGFnZS5jc3Mobil9fSx7ZmlsdGVyOltcIndpZHRoXCIsXCJpdGVtc1wiLFwic2V0dGluZ3NcIl0scnVuOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuX2Nvb3JkaW5hdGVzLmxlbmd0aCxuPSF0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCxpPXRoaXMuJHN0YWdlLmNoaWxkcmVuKCk7aWYobiYmZS5pdGVtcy5tZXJnZSlmb3IoO3QtLTspZS5jc3Mud2lkdGg9dGhpcy5fd2lkdGhzW3RoaXMucmVsYXRpdmUodCldLGkuZXEodCkuY3NzKGUuY3NzKTtlbHNlIG4mJihlLmNzcy53aWR0aD1lLml0ZW1zLndpZHRoLGkuY3NzKGUuY3NzKSl9fSx7ZmlsdGVyOltcIml0ZW1zXCJdLHJ1bjpmdW5jdGlvbigpe3RoaXMuX2Nvb3JkaW5hdGVzLmxlbmd0aDwxJiZ0aGlzLiRzdGFnZS5yZW1vdmVBdHRyKFwic3R5bGVcIil9fSx7ZmlsdGVyOltcIndpZHRoXCIsXCJpdGVtc1wiLFwic2V0dGluZ3NcIl0scnVuOmZ1bmN0aW9uKGUpe2UuY3VycmVudD1lLmN1cnJlbnQ/dGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5pbmRleChlLmN1cnJlbnQpOjAsZS5jdXJyZW50PU1hdGgubWF4KHRoaXMubWluaW11bSgpLE1hdGgubWluKHRoaXMubWF4aW11bSgpLGUuY3VycmVudCkpLHRoaXMucmVzZXQoZS5jdXJyZW50KX19LHtmaWx0ZXI6W1wicG9zaXRpb25cIl0scnVuOmZ1bmN0aW9uKCl7dGhpcy5hbmltYXRlKHRoaXMuY29vcmRpbmF0ZXModGhpcy5fY3VycmVudCkpfX0se2ZpbHRlcjpbXCJ3aWR0aFwiLFwicG9zaXRpb25cIixcIml0ZW1zXCIsXCJzZXR0aW5nc1wiXSxydW46ZnVuY3Rpb24oKXt2YXIgZSx0LG4saSxyPXRoaXMuc2V0dGluZ3MucnRsPzE6LTEsbz0yKnRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nLHM9dGhpcy5jb29yZGluYXRlcyh0aGlzLmN1cnJlbnQoKSkrbyxhPXMrdGhpcy53aWR0aCgpKnIsbD1bXTtmb3Iobj0wLGk9dGhpcy5fY29vcmRpbmF0ZXMubGVuZ3RoO248aTtuKyspZT10aGlzLl9jb29yZGluYXRlc1tuLTFdfHwwLHQ9TWF0aC5hYnModGhpcy5fY29vcmRpbmF0ZXNbbl0pK28qciwodGhpcy5vcChlLFwiPD1cIixzKSYmdGhpcy5vcChlLFwiPlwiLGEpfHx0aGlzLm9wKHQsXCI8XCIscykmJnRoaXMub3AodCxcIj5cIixhKSkmJmwucHVzaChuKTt0aGlzLiRzdGFnZS5jaGlsZHJlbihcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksdGhpcy4kc3RhZ2UuY2hpbGRyZW4oXCI6ZXEoXCIrbC5qb2luKFwiKSwgOmVxKFwiKStcIilcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIiksdGhpcy4kc3RhZ2UuY2hpbGRyZW4oXCIuY2VudGVyXCIpLnJlbW92ZUNsYXNzKFwiY2VudGVyXCIpLHRoaXMuc2V0dGluZ3MuY2VudGVyJiZ0aGlzLiRzdGFnZS5jaGlsZHJlbigpLmVxKHRoaXMuY3VycmVudCgpKS5hZGRDbGFzcyhcImNlbnRlclwiKX19XSxvLnByb3RvdHlwZS5pbml0aWFsaXplU3RhZ2U9ZnVuY3Rpb24oKXt0aGlzLiRzdGFnZT10aGlzLiRlbGVtZW50LmZpbmQoXCIuXCIrdGhpcy5zZXR0aW5ncy5zdGFnZUNsYXNzKSx0aGlzLiRzdGFnZS5sZW5ndGh8fCh0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nQ2xhc3MpLHRoaXMuJHN0YWdlPWUoXCI8XCIrdGhpcy5zZXR0aW5ncy5zdGFnZUVsZW1lbnQrXCI+XCIse1wiY2xhc3NcIjp0aGlzLnNldHRpbmdzLnN0YWdlQ2xhc3N9KS53cmFwKGUoXCI8ZGl2Lz5cIix7XCJjbGFzc1wiOnRoaXMuc2V0dGluZ3Muc3RhZ2VPdXRlckNsYXNzfSkpLHRoaXMuJGVsZW1lbnQuYXBwZW5kKHRoaXMuJHN0YWdlLnBhcmVudCgpKSl9LG8ucHJvdG90eXBlLmluaXRpYWxpemVJdGVtcz1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGVsZW1lbnQuZmluZChcIi5vd2wtaXRlbVwiKTtyZXR1cm4gdC5sZW5ndGg/KHRoaXMuX2l0ZW1zPXQuZ2V0KCkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBlKHQpfSksdGhpcy5fbWVyZ2Vycz10aGlzLl9pdGVtcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gMX0pLHZvaWQgdGhpcy5yZWZyZXNoKCkpOih0aGlzLnJlcGxhY2UodGhpcy4kZWxlbWVudC5jaGlsZHJlbigpLm5vdCh0aGlzLiRzdGFnZS5wYXJlbnQoKSkpLHRoaXMuaXNWaXNpYmxlKCk/dGhpcy5yZWZyZXNoKCk6dGhpcy5pbnZhbGlkYXRlKFwid2lkdGhcIiksdm9pZCB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nQ2xhc3MpLmFkZENsYXNzKHRoaXMub3B0aW9ucy5sb2FkZWRDbGFzcykpfSxvLnByb3RvdHlwZS5pbml0aWFsaXplPWZ1bmN0aW9uKCl7aWYodGhpcy5lbnRlcihcImluaXRpYWxpemluZ1wiKSx0aGlzLnRyaWdnZXIoXCJpbml0aWFsaXplXCIpLHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3ModGhpcy5zZXR0aW5ncy5ydGxDbGFzcyx0aGlzLnNldHRpbmdzLnJ0bCksdGhpcy5zZXR0aW5ncy5hdXRvV2lkdGgmJiF0aGlzLmlzKFwicHJlLWxvYWRpbmdcIikpe3ZhciBlLHQsbjtlPXRoaXMuJGVsZW1lbnQuZmluZChcImltZ1wiKSx0PXRoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yP1wiLlwiK3RoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yOnIsbj10aGlzLiRlbGVtZW50LmNoaWxkcmVuKHQpLndpZHRoKCksZS5sZW5ndGgmJm48PTAmJnRoaXMucHJlbG9hZEF1dG9XaWR0aEltYWdlcyhlKX10aGlzLmluaXRpYWxpemVTdGFnZSgpLHRoaXMuaW5pdGlhbGl6ZUl0ZW1zKCksdGhpcy5yZWdpc3RlckV2ZW50SGFuZGxlcnMoKSx0aGlzLmxlYXZlKFwiaW5pdGlhbGl6aW5nXCIpLHRoaXMudHJpZ2dlcihcImluaXRpYWxpemVkXCIpfSxvLnByb3RvdHlwZS5pc1Zpc2libGU9ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5zZXR0aW5ncy5jaGVja1Zpc2liaWxpdHl8fHRoaXMuJGVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKX0sby5wcm90b3R5cGUuc2V0dXA9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZpZXdwb3J0KCksbj10aGlzLm9wdGlvbnMucmVzcG9uc2l2ZSxpPS0xLHI9bnVsbDtuPyhlLmVhY2gobixmdW5jdGlvbihlKXtlPD10JiZlPmkmJihpPU51bWJlcihlKSl9KSxyPWUuZXh0ZW5kKHt9LHRoaXMub3B0aW9ucyxuW2ldKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiByLnN0YWdlUGFkZGluZyYmKHIuc3RhZ2VQYWRkaW5nPXIuc3RhZ2VQYWRkaW5nKCkpLGRlbGV0ZSByLnJlc3BvbnNpdmUsci5yZXNwb25zaXZlQ2xhc3MmJnRoaXMuJGVsZW1lbnQuYXR0cihcImNsYXNzXCIsdGhpcy4kZWxlbWVudC5hdHRyKFwiY2xhc3NcIikucmVwbGFjZShuZXcgUmVnRXhwKFwiKFwiK3RoaXMub3B0aW9ucy5yZXNwb25zaXZlQ2xhc3MrXCItKVxcXFxTK1xcXFxzXCIsXCJnXCIpLFwiJDFcIitpKSkpOnI9ZS5leHRlbmQoe30sdGhpcy5vcHRpb25zKSx0aGlzLnRyaWdnZXIoXCJjaGFuZ2VcIix7cHJvcGVydHk6e25hbWU6XCJzZXR0aW5nc1wiLHZhbHVlOnJ9fSksdGhpcy5fYnJlYWtwb2ludD1pLHRoaXMuc2V0dGluZ3M9cix0aGlzLmludmFsaWRhdGUoXCJzZXR0aW5nc1wiKSx0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIse3Byb3BlcnR5OntuYW1lOlwic2V0dGluZ3NcIix2YWx1ZTp0aGlzLnNldHRpbmdzfX0pfSxvLnByb3RvdHlwZS5vcHRpb25zTG9naWM9ZnVuY3Rpb24oKXt0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCYmKHRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nPSExLHRoaXMuc2V0dGluZ3MubWVyZ2U9ITEpfSxvLnByb3RvdHlwZS5wcmVwYXJlPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMudHJpZ2dlcihcInByZXBhcmVcIix7Y29udGVudDp0fSk7cmV0dXJuIG4uZGF0YXx8KG4uZGF0YT1lKFwiPFwiK3RoaXMuc2V0dGluZ3MuaXRlbUVsZW1lbnQrXCIvPlwiKS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuaXRlbUNsYXNzKS5hcHBlbmQodCkpLHRoaXMudHJpZ2dlcihcInByZXBhcmVkXCIse2NvbnRlbnQ6bi5kYXRhfSksbi5kYXRhfSxvLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MCxuPXRoaXMuX3BpcGUubGVuZ3RoLGk9ZS5wcm94eShmdW5jdGlvbihlKXtyZXR1cm4gdGhpc1tlXX0sdGhpcy5faW52YWxpZGF0ZWQpLHI9e307dDxuOykodGhpcy5faW52YWxpZGF0ZWQuYWxsfHxlLmdyZXAodGhpcy5fcGlwZVt0XS5maWx0ZXIsaSkubGVuZ3RoPjApJiZ0aGlzLl9waXBlW3RdLnJ1bihyKSx0Kys7dGhpcy5faW52YWxpZGF0ZWQ9e30sIXRoaXMuaXMoXCJ2YWxpZFwiKSYmdGhpcy5lbnRlcihcInZhbGlkXCIpfSxvLnByb3RvdHlwZS53aWR0aD1mdW5jdGlvbihlKXtzd2l0Y2goZT1lfHxvLldpZHRoLkRlZmF1bHQpe2Nhc2Ugby5XaWR0aC5Jbm5lcjpjYXNlIG8uV2lkdGguT3V0ZXI6cmV0dXJuIHRoaXMuX3dpZHRoO2RlZmF1bHQ6cmV0dXJuIHRoaXMuX3dpZHRoLTIqdGhpcy5zZXR0aW5ncy5zdGFnZVBhZGRpbmcrdGhpcy5zZXR0aW5ncy5tYXJnaW59fSxvLnByb3RvdHlwZS5yZWZyZXNoPWZ1bmN0aW9uKCl7dGhpcy5lbnRlcihcInJlZnJlc2hpbmdcIiksdGhpcy50cmlnZ2VyKFwicmVmcmVzaFwiKSx0aGlzLnNldHVwKCksdGhpcy5vcHRpb25zTG9naWMoKSx0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5yZWZyZXNoQ2xhc3MpLHRoaXMudXBkYXRlKCksdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucmVmcmVzaENsYXNzKSx0aGlzLmxlYXZlKFwicmVmcmVzaGluZ1wiKSx0aGlzLnRyaWdnZXIoXCJyZWZyZXNoZWRcIil9LG8ucHJvdG90eXBlLm9uVGhyb3R0bGVkUmVzaXplPWZ1bmN0aW9uKCl7bi5jbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lciksdGhpcy5yZXNpemVUaW1lcj1uLnNldFRpbWVvdXQodGhpcy5faGFuZGxlcnMub25SZXNpemUsdGhpcy5zZXR0aW5ncy5yZXNwb25zaXZlUmVmcmVzaFJhdGUpfSxvLnByb3RvdHlwZS5vblJlc2l6ZT1mdW5jdGlvbigpe3JldHVybiEhdGhpcy5faXRlbXMubGVuZ3RoJiYodGhpcy5fd2lkdGghPT10aGlzLiRlbGVtZW50LndpZHRoKCkmJighIXRoaXMuaXNWaXNpYmxlKCkmJih0aGlzLmVudGVyKFwicmVzaXppbmdcIiksdGhpcy50cmlnZ2VyKFwicmVzaXplXCIpLmlzRGVmYXVsdFByZXZlbnRlZCgpPyh0aGlzLmxlYXZlKFwicmVzaXppbmdcIiksITEpOih0aGlzLmludmFsaWRhdGUoXCJ3aWR0aFwiKSx0aGlzLnJlZnJlc2goKSx0aGlzLmxlYXZlKFwicmVzaXppbmdcIiksdm9pZCB0aGlzLnRyaWdnZXIoXCJyZXNpemVkXCIpKSkpKX0sby5wcm90b3R5cGUucmVnaXN0ZXJFdmVudEhhbmRsZXJzPWZ1bmN0aW9uKCl7ZS5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJHN0YWdlLm9uKGUuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCtcIi5vd2wuY29yZVwiLGUucHJveHkodGhpcy5vblRyYW5zaXRpb25FbmQsdGhpcykpLHRoaXMuc2V0dGluZ3MucmVzcG9uc2l2ZSE9PSExJiZ0aGlzLm9uKG4sXCJyZXNpemVcIix0aGlzLl9oYW5kbGVycy5vblRocm90dGxlZFJlc2l6ZSksdGhpcy5zZXR0aW5ncy5tb3VzZURyYWcmJih0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5kcmFnQ2xhc3MpLHRoaXMuJHN0YWdlLm9uKFwibW91c2Vkb3duLm93bC5jb3JlXCIsZS5wcm94eSh0aGlzLm9uRHJhZ1N0YXJ0LHRoaXMpKSx0aGlzLiRzdGFnZS5vbihcImRyYWdzdGFydC5vd2wuY29yZSBzZWxlY3RzdGFydC5vd2wuY29yZVwiLGZ1bmN0aW9uKCl7cmV0dXJuITF9KSksdGhpcy5zZXR0aW5ncy50b3VjaERyYWcmJih0aGlzLiRzdGFnZS5vbihcInRvdWNoc3RhcnQub3dsLmNvcmVcIixlLnByb3h5KHRoaXMub25EcmFnU3RhcnQsdGhpcykpLHRoaXMuJHN0YWdlLm9uKFwidG91Y2hjYW5jZWwub3dsLmNvcmVcIixlLnByb3h5KHRoaXMub25EcmFnRW5kLHRoaXMpKSl9LG8ucHJvdG90eXBlLm9uRHJhZ1N0YXJ0PWZ1bmN0aW9uKHQpe3ZhciBuPW51bGw7MyE9PXQud2hpY2gmJihlLnN1cHBvcnQudHJhbnNmb3JtPyhuPXRoaXMuJHN0YWdlLmNzcyhcInRyYW5zZm9ybVwiKS5yZXBsYWNlKC8uKlxcKHxcXCl8IC9nLFwiXCIpLnNwbGl0KFwiLFwiKSxuPXt4Om5bMTY9PT1uLmxlbmd0aD8xMjo0XSx5Om5bMTY9PT1uLmxlbmd0aD8xMzo1XX0pOihuPXRoaXMuJHN0YWdlLnBvc2l0aW9uKCksbj17eDp0aGlzLnNldHRpbmdzLnJ0bD9uLmxlZnQrdGhpcy4kc3RhZ2Uud2lkdGgoKS10aGlzLndpZHRoKCkrdGhpcy5zZXR0aW5ncy5tYXJnaW46bi5sZWZ0LHk6bi50b3B9KSx0aGlzLmlzKFwiYW5pbWF0aW5nXCIpJiYoZS5zdXBwb3J0LnRyYW5zZm9ybT90aGlzLmFuaW1hdGUobi54KTp0aGlzLiRzdGFnZS5zdG9wKCksdGhpcy5pbnZhbGlkYXRlKFwicG9zaXRpb25cIikpLHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmdyYWJDbGFzcyxcIm1vdXNlZG93blwiPT09dC50eXBlKSx0aGlzLnNwZWVkKDApLHRoaXMuX2RyYWcudGltZT0obmV3IERhdGUpLmdldFRpbWUoKSx0aGlzLl9kcmFnLnRhcmdldD1lKHQudGFyZ2V0KSx0aGlzLl9kcmFnLnN0YWdlLnN0YXJ0PW4sdGhpcy5fZHJhZy5zdGFnZS5jdXJyZW50PW4sdGhpcy5fZHJhZy5wb2ludGVyPXRoaXMucG9pbnRlcih0KSxlKGkpLm9uKFwibW91c2V1cC5vd2wuY29yZSB0b3VjaGVuZC5vd2wuY29yZVwiLGUucHJveHkodGhpcy5vbkRyYWdFbmQsdGhpcykpLGUoaSkub25lKFwibW91c2Vtb3ZlLm93bC5jb3JlIHRvdWNobW92ZS5vd2wuY29yZVwiLGUucHJveHkoZnVuY3Rpb24odCl7dmFyIG49dGhpcy5kaWZmZXJlbmNlKHRoaXMuX2RyYWcucG9pbnRlcix0aGlzLnBvaW50ZXIodCkpO2UoaSkub24oXCJtb3VzZW1vdmUub3dsLmNvcmUgdG91Y2htb3ZlLm93bC5jb3JlXCIsZS5wcm94eSh0aGlzLm9uRHJhZ01vdmUsdGhpcykpLE1hdGguYWJzKG4ueCk8TWF0aC5hYnMobi55KSYmdGhpcy5pcyhcInZhbGlkXCIpfHwodC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuZW50ZXIoXCJkcmFnZ2luZ1wiKSx0aGlzLnRyaWdnZXIoXCJkcmFnXCIpKX0sdGhpcykpKX0sby5wcm90b3R5cGUub25EcmFnTW92ZT1mdW5jdGlvbihlKXt2YXIgdD1udWxsLG49bnVsbCxpPW51bGwscj10aGlzLmRpZmZlcmVuY2UodGhpcy5fZHJhZy5wb2ludGVyLHRoaXMucG9pbnRlcihlKSksbz10aGlzLmRpZmZlcmVuY2UodGhpcy5fZHJhZy5zdGFnZS5zdGFydCxyKTt0aGlzLmlzKFwiZHJhZ2dpbmdcIikmJihlLnByZXZlbnREZWZhdWx0KCksdGhpcy5zZXR0aW5ncy5sb29wPyh0PXRoaXMuY29vcmRpbmF0ZXModGhpcy5taW5pbXVtKCkpLG49dGhpcy5jb29yZGluYXRlcyh0aGlzLm1heGltdW0oKSsxKS10LG8ueD0oKG8ueC10KSVuK24pJW4rdCk6KHQ9dGhpcy5zZXR0aW5ncy5ydGw/dGhpcy5jb29yZGluYXRlcyh0aGlzLm1heGltdW0oKSk6dGhpcy5jb29yZGluYXRlcyh0aGlzLm1pbmltdW0oKSksbj10aGlzLnNldHRpbmdzLnJ0bD90aGlzLmNvb3JkaW5hdGVzKHRoaXMubWluaW11bSgpKTp0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWF4aW11bSgpKSxpPXRoaXMuc2V0dGluZ3MucHVsbERyYWc/LTEqci54LzU6MCxvLng9TWF0aC5tYXgoTWF0aC5taW4oby54LHQraSksbitpKSksdGhpcy5fZHJhZy5zdGFnZS5jdXJyZW50PW8sdGhpcy5hbmltYXRlKG8ueCkpfSxvLnByb3RvdHlwZS5vbkRyYWdFbmQ9ZnVuY3Rpb24odCl7dmFyIG49dGhpcy5kaWZmZXJlbmNlKHRoaXMuX2RyYWcucG9pbnRlcix0aGlzLnBvaW50ZXIodCkpLHI9dGhpcy5fZHJhZy5zdGFnZS5jdXJyZW50LG89bi54PjBedGhpcy5zZXR0aW5ncy5ydGw/XCJsZWZ0XCI6XCJyaWdodFwiO2UoaSkub2ZmKFwiLm93bC5jb3JlXCIpLHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmdyYWJDbGFzcyksKDAhPT1uLngmJnRoaXMuaXMoXCJkcmFnZ2luZ1wiKXx8IXRoaXMuaXMoXCJ2YWxpZFwiKSkmJih0aGlzLnNwZWVkKHRoaXMuc2V0dGluZ3MuZHJhZ0VuZFNwZWVkfHx0aGlzLnNldHRpbmdzLnNtYXJ0U3BlZWQpLHRoaXMuY3VycmVudCh0aGlzLmNsb3Nlc3Qoci54LDAhPT1uLng/bzp0aGlzLl9kcmFnLmRpcmVjdGlvbikpLHRoaXMuaW52YWxpZGF0ZShcInBvc2l0aW9uXCIpLHRoaXMudXBkYXRlKCksdGhpcy5fZHJhZy5kaXJlY3Rpb249bywoTWF0aC5hYnMobi54KT4zfHwobmV3IERhdGUpLmdldFRpbWUoKS10aGlzLl9kcmFnLnRpbWU+MzAwKSYmdGhpcy5fZHJhZy50YXJnZXQub25lKFwiY2xpY2sub3dsLmNvcmVcIixmdW5jdGlvbigpe3JldHVybiExfSkpLHRoaXMuaXMoXCJkcmFnZ2luZ1wiKSYmKHRoaXMubGVhdmUoXCJkcmFnZ2luZ1wiKSx0aGlzLnRyaWdnZXIoXCJkcmFnZ2VkXCIpKX0sby5wcm90b3R5cGUuY2xvc2VzdD1mdW5jdGlvbih0LG4pe3ZhciBpPS0xLG89MzAscz10aGlzLndpZHRoKCksYT10aGlzLmNvb3JkaW5hdGVzKCk7cmV0dXJuIHRoaXMuc2V0dGluZ3MuZnJlZURyYWd8fGUuZWFjaChhLGUucHJveHkoZnVuY3Rpb24oZSxsKXtyZXR1cm5cImxlZnRcIj09PW4mJnQ+bC1vJiZ0PGwrbz9pPWU6XCJyaWdodFwiPT09biYmdD5sLXMtbyYmdDxsLXMrbz9pPWUrMTp0aGlzLm9wKHQsXCI8XCIsbCkmJnRoaXMub3AodCxcIj5cIixhW2UrMV0hPT1yP2FbZSsxXTpsLXMpJiYoaT1cImxlZnRcIj09PW4/ZSsxOmUpLGk9PT0tMX0sdGhpcykpLHRoaXMuc2V0dGluZ3MubG9vcHx8KHRoaXMub3AodCxcIj5cIixhW3RoaXMubWluaW11bSgpXSk/aT10PXRoaXMubWluaW11bSgpOnRoaXMub3AodCxcIjxcIixhW3RoaXMubWF4aW11bSgpXSkmJihpPXQ9dGhpcy5tYXhpbXVtKCkpKSxpfSxvLnByb3RvdHlwZS5hbmltYXRlPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMuc3BlZWQoKT4wO3RoaXMuaXMoXCJhbmltYXRpbmdcIikmJnRoaXMub25UcmFuc2l0aW9uRW5kKCksbiYmKHRoaXMuZW50ZXIoXCJhbmltYXRpbmdcIiksdGhpcy50cmlnZ2VyKFwidHJhbnNsYXRlXCIpKSxlLnN1cHBvcnQudHJhbnNmb3JtM2QmJmUuc3VwcG9ydC50cmFuc2l0aW9uP3RoaXMuJHN0YWdlLmNzcyh7dHJhbnNmb3JtOlwidHJhbnNsYXRlM2QoXCIrdCtcInB4LDBweCwwcHgpXCIsdHJhbnNpdGlvbjp0aGlzLnNwZWVkKCkvMWUzK1wic1wiKyh0aGlzLnNldHRpbmdzLnNsaWRlVHJhbnNpdGlvbj9cIiBcIit0aGlzLnNldHRpbmdzLnNsaWRlVHJhbnNpdGlvbjpcIlwiKX0pOm4/dGhpcy4kc3RhZ2UuYW5pbWF0ZSh7bGVmdDp0K1wicHhcIn0sdGhpcy5zcGVlZCgpLHRoaXMuc2V0dGluZ3MuZmFsbGJhY2tFYXNpbmcsZS5wcm94eSh0aGlzLm9uVHJhbnNpdGlvbkVuZCx0aGlzKSk6dGhpcy4kc3RhZ2UuY3NzKHtsZWZ0OnQrXCJweFwifSl9LG8ucHJvdG90eXBlLmlzPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9zdGF0ZXMuY3VycmVudFtlXSYmdGhpcy5fc3RhdGVzLmN1cnJlbnRbZV0+MH0sby5wcm90b3R5cGUuY3VycmVudD1mdW5jdGlvbihlKXtpZihlPT09cilyZXR1cm4gdGhpcy5fY3VycmVudDtpZigwPT09dGhpcy5faXRlbXMubGVuZ3RoKXJldHVybiByO2lmKGU9dGhpcy5ub3JtYWxpemUoZSksdGhpcy5fY3VycmVudCE9PWUpe3ZhciB0PXRoaXMudHJpZ2dlcihcImNoYW5nZVwiLHtwcm9wZXJ0eTp7bmFtZTpcInBvc2l0aW9uXCIsdmFsdWU6ZX19KTt0LmRhdGEhPT1yJiYoZT10aGlzLm5vcm1hbGl6ZSh0LmRhdGEpKSx0aGlzLl9jdXJyZW50PWUsdGhpcy5pbnZhbGlkYXRlKFwicG9zaXRpb25cIiksdGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiLHtwcm9wZXJ0eTp7bmFtZTpcInBvc2l0aW9uXCIsdmFsdWU6dGhpcy5fY3VycmVudH19KX1yZXR1cm4gdGhpcy5fY3VycmVudH0sby5wcm90b3R5cGUuaW52YWxpZGF0ZT1mdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT09ZS50eXBlKHQpJiYodGhpcy5faW52YWxpZGF0ZWRbdF09ITAsdGhpcy5pcyhcInZhbGlkXCIpJiZ0aGlzLmxlYXZlKFwidmFsaWRcIikpLGUubWFwKHRoaXMuX2ludmFsaWRhdGVkLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHR9KX0sby5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oZSl7ZT10aGlzLm5vcm1hbGl6ZShlKSxlIT09ciYmKHRoaXMuX3NwZWVkPTAsdGhpcy5fY3VycmVudD1lLHRoaXMuc3VwcHJlc3MoW1widHJhbnNsYXRlXCIsXCJ0cmFuc2xhdGVkXCJdKSx0aGlzLmFuaW1hdGUodGhpcy5jb29yZGluYXRlcyhlKSksdGhpcy5yZWxlYXNlKFtcInRyYW5zbGF0ZVwiLFwidHJhbnNsYXRlZFwiXSkpfSxvLnByb3RvdHlwZS5ub3JtYWxpemU9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLl9pdGVtcy5sZW5ndGgsaT10PzA6dGhpcy5fY2xvbmVzLmxlbmd0aDtyZXR1cm4hdGhpcy5pc051bWVyaWMoZSl8fG48MT9lPXI6KGU8MHx8ZT49bitpKSYmKGU9KChlLWkvMiklbituKSVuK2kvMiksZX0sby5wcm90b3R5cGUucmVsYXRpdmU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUtPXRoaXMuX2Nsb25lcy5sZW5ndGgvMix0aGlzLm5vcm1hbGl6ZShlLCEwKX0sby5wcm90b3R5cGUubWF4aW11bT1mdW5jdGlvbihlKXt2YXIgdCxuLGkscj10aGlzLnNldHRpbmdzLG89dGhpcy5fY29vcmRpbmF0ZXMubGVuZ3RoO2lmKHIubG9vcClvPXRoaXMuX2Nsb25lcy5sZW5ndGgvMit0aGlzLl9pdGVtcy5sZW5ndGgtMTtlbHNlIGlmKHIuYXV0b1dpZHRofHxyLm1lcmdlKXtpZih0PXRoaXMuX2l0ZW1zLmxlbmd0aClmb3Iobj10aGlzLl9pdGVtc1stLXRdLndpZHRoKCksaT10aGlzLiRlbGVtZW50LndpZHRoKCk7dC0tJiYobis9dGhpcy5faXRlbXNbdF0ud2lkdGgoKSt0aGlzLnNldHRpbmdzLm1hcmdpbiwhKG4+aSkpOyk7bz10KzF9ZWxzZSBvPXIuY2VudGVyP3RoaXMuX2l0ZW1zLmxlbmd0aC0xOnRoaXMuX2l0ZW1zLmxlbmd0aC1yLml0ZW1zO3JldHVybiBlJiYoby09dGhpcy5fY2xvbmVzLmxlbmd0aC8yKSxNYXRoLm1heChvLDApfSxvLnByb3RvdHlwZS5taW5pbXVtPWZ1bmN0aW9uKGUpe3JldHVybiBlPzA6dGhpcy5fY2xvbmVzLmxlbmd0aC8yfSxvLnByb3RvdHlwZS5pdGVtcz1mdW5jdGlvbihlKXtyZXR1cm4gZT09PXI/dGhpcy5faXRlbXMuc2xpY2UoKTooZT10aGlzLm5vcm1hbGl6ZShlLCEwKSx0aGlzLl9pdGVtc1tlXSl9LG8ucHJvdG90eXBlLm1lcmdlcnM9ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1yP3RoaXMuX21lcmdlcnMuc2xpY2UoKTooZT10aGlzLm5vcm1hbGl6ZShlLCEwKSx0aGlzLl9tZXJnZXJzW2VdKX0sby5wcm90b3R5cGUuY2xvbmVzPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMuX2Nsb25lcy5sZW5ndGgvMixpPW4rdGhpcy5faXRlbXMubGVuZ3RoLG89ZnVuY3Rpb24oZSl7XG5yZXR1cm4gZSUyPT09MD9pK2UvMjpuLShlKzEpLzJ9O3JldHVybiB0PT09cj9lLm1hcCh0aGlzLl9jbG9uZXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gbyh0KX0pOmUubWFwKHRoaXMuX2Nsb25lcyxmdW5jdGlvbihlLG4pe3JldHVybiBlPT09dD9vKG4pOm51bGx9KX0sby5wcm90b3R5cGUuc3BlZWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUhPT1yJiYodGhpcy5fc3BlZWQ9ZSksdGhpcy5fc3BlZWR9LG8ucHJvdG90eXBlLmNvb3JkaW5hdGVzPWZ1bmN0aW9uKHQpe3ZhciBuLGk9MSxvPXQtMTtyZXR1cm4gdD09PXI/ZS5tYXAodGhpcy5fY29vcmRpbmF0ZXMsZS5wcm94eShmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmNvb3JkaW5hdGVzKHQpfSx0aGlzKSk6KHRoaXMuc2V0dGluZ3MuY2VudGVyPyh0aGlzLnNldHRpbmdzLnJ0bCYmKGk9LTEsbz10KzEpLG49dGhpcy5fY29vcmRpbmF0ZXNbdF0sbis9KHRoaXMud2lkdGgoKS1uKyh0aGlzLl9jb29yZGluYXRlc1tvXXx8MCkpLzIqaSk6bj10aGlzLl9jb29yZGluYXRlc1tvXXx8MCxuPU1hdGguY2VpbChuKSl9LG8ucHJvdG90eXBlLmR1cmF0aW9uPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gMD09PW4/MDpNYXRoLm1pbihNYXRoLm1heChNYXRoLmFicyh0LWUpLDEpLDYpKk1hdGguYWJzKG58fHRoaXMuc2V0dGluZ3Muc21hcnRTcGVlZCl9LG8ucHJvdG90eXBlLnRvPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5jdXJyZW50KCksaT1udWxsLHI9ZS10aGlzLnJlbGF0aXZlKG4pLG89KHI+MCktKHI8MCkscz10aGlzLl9pdGVtcy5sZW5ndGgsYT10aGlzLm1pbmltdW0oKSxsPXRoaXMubWF4aW11bSgpO3RoaXMuc2V0dGluZ3MubG9vcD8oIXRoaXMuc2V0dGluZ3MucmV3aW5kJiZNYXRoLmFicyhyKT5zLzImJihyKz1vKi0xKnMpLGU9bityLGk9KChlLWEpJXMrcyklcythLGkhPT1lJiZpLXI8PWwmJmktcj4wJiYobj1pLXIsZT1pLHRoaXMucmVzZXQobikpKTp0aGlzLnNldHRpbmdzLnJld2luZD8obCs9MSxlPShlJWwrbCklbCk6ZT1NYXRoLm1heChhLE1hdGgubWluKGwsZSkpLHRoaXMuc3BlZWQodGhpcy5kdXJhdGlvbihuLGUsdCkpLHRoaXMuY3VycmVudChlKSx0aGlzLmlzVmlzaWJsZSgpJiZ0aGlzLnVwZGF0ZSgpfSxvLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKGUpe2U9ZXx8ITEsdGhpcy50byh0aGlzLnJlbGF0aXZlKHRoaXMuY3VycmVudCgpKSsxLGUpfSxvLnByb3RvdHlwZS5wcmV2PWZ1bmN0aW9uKGUpe2U9ZXx8ITEsdGhpcy50byh0aGlzLnJlbGF0aXZlKHRoaXMuY3VycmVudCgpKS0xLGUpfSxvLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmQ9ZnVuY3Rpb24oZSl7cmV0dXJuKGU9PT1yfHwoZS5zdG9wUHJvcGFnYXRpb24oKSwoZS50YXJnZXR8fGUuc3JjRWxlbWVudHx8ZS5vcmlnaW5hbFRhcmdldCk9PT10aGlzLiRzdGFnZS5nZXQoMCkpKSYmKHRoaXMubGVhdmUoXCJhbmltYXRpbmdcIiksdm9pZCB0aGlzLnRyaWdnZXIoXCJ0cmFuc2xhdGVkXCIpKX0sby5wcm90b3R5cGUudmlld3BvcnQ9ZnVuY3Rpb24oKXt2YXIgdDtyZXR1cm4gdGhpcy5vcHRpb25zLnJlc3BvbnNpdmVCYXNlRWxlbWVudCE9PW4/dD1lKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlQmFzZUVsZW1lbnQpLndpZHRoKCk6bi5pbm5lcldpZHRoP3Q9bi5pbm5lcldpZHRoOmkuZG9jdW1lbnRFbGVtZW50JiZpLmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aD90PWkuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoOmNvbnNvbGUud2FybihcIkNhbiBub3QgZGV0ZWN0IHZpZXdwb3J0IHdpZHRoLlwiKSx0fSxvLnByb3RvdHlwZS5yZXBsYWNlPWZ1bmN0aW9uKG4pe3RoaXMuJHN0YWdlLmVtcHR5KCksdGhpcy5faXRlbXM9W10sbiYmKG49biBpbnN0YW5jZW9mIHQ/bjplKG4pKSx0aGlzLnNldHRpbmdzLm5lc3RlZEl0ZW1TZWxlY3RvciYmKG49bi5maW5kKFwiLlwiK3RoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yKSksbi5maWx0ZXIoZnVuY3Rpb24oKXtyZXR1cm4gMT09PXRoaXMubm9kZVR5cGV9KS5lYWNoKGUucHJveHkoZnVuY3Rpb24oZSx0KXt0PXRoaXMucHJlcGFyZSh0KSx0aGlzLiRzdGFnZS5hcHBlbmQodCksdGhpcy5faXRlbXMucHVzaCh0KSx0aGlzLl9tZXJnZXJzLnB1c2goMSp0LmZpbmQoXCJbZGF0YS1tZXJnZV1cIikuYWRkQmFjayhcIltkYXRhLW1lcmdlXVwiKS5hdHRyKFwiZGF0YS1tZXJnZVwiKXx8MSl9LHRoaXMpKSx0aGlzLnJlc2V0KHRoaXMuaXNOdW1lcmljKHRoaXMuc2V0dGluZ3Muc3RhcnRQb3NpdGlvbik/dGhpcy5zZXR0aW5ncy5zdGFydFBvc2l0aW9uOjApLHRoaXMuaW52YWxpZGF0ZShcIml0ZW1zXCIpfSxvLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24obixpKXt2YXIgbz10aGlzLnJlbGF0aXZlKHRoaXMuX2N1cnJlbnQpO2k9aT09PXI/dGhpcy5faXRlbXMubGVuZ3RoOnRoaXMubm9ybWFsaXplKGksITApLG49biBpbnN0YW5jZW9mIHQ/bjplKG4pLHRoaXMudHJpZ2dlcihcImFkZFwiLHtjb250ZW50Om4scG9zaXRpb246aX0pLG49dGhpcy5wcmVwYXJlKG4pLDA9PT10aGlzLl9pdGVtcy5sZW5ndGh8fGk9PT10aGlzLl9pdGVtcy5sZW5ndGg/KDA9PT10aGlzLl9pdGVtcy5sZW5ndGgmJnRoaXMuJHN0YWdlLmFwcGVuZChuKSwwIT09dGhpcy5faXRlbXMubGVuZ3RoJiZ0aGlzLl9pdGVtc1tpLTFdLmFmdGVyKG4pLHRoaXMuX2l0ZW1zLnB1c2gobiksdGhpcy5fbWVyZ2Vycy5wdXNoKDEqbi5maW5kKFwiW2RhdGEtbWVyZ2VdXCIpLmFkZEJhY2soXCJbZGF0YS1tZXJnZV1cIikuYXR0cihcImRhdGEtbWVyZ2VcIil8fDEpKToodGhpcy5faXRlbXNbaV0uYmVmb3JlKG4pLHRoaXMuX2l0ZW1zLnNwbGljZShpLDAsbiksdGhpcy5fbWVyZ2Vycy5zcGxpY2UoaSwwLDEqbi5maW5kKFwiW2RhdGEtbWVyZ2VdXCIpLmFkZEJhY2soXCJbZGF0YS1tZXJnZV1cIikuYXR0cihcImRhdGEtbWVyZ2VcIil8fDEpKSx0aGlzLl9pdGVtc1tvXSYmdGhpcy5yZXNldCh0aGlzLl9pdGVtc1tvXS5pbmRleCgpKSx0aGlzLmludmFsaWRhdGUoXCJpdGVtc1wiKSx0aGlzLnRyaWdnZXIoXCJhZGRlZFwiLHtjb250ZW50Om4scG9zaXRpb246aX0pfSxvLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oZSl7ZT10aGlzLm5vcm1hbGl6ZShlLCEwKSxlIT09ciYmKHRoaXMudHJpZ2dlcihcInJlbW92ZVwiLHtjb250ZW50OnRoaXMuX2l0ZW1zW2VdLHBvc2l0aW9uOmV9KSx0aGlzLl9pdGVtc1tlXS5yZW1vdmUoKSx0aGlzLl9pdGVtcy5zcGxpY2UoZSwxKSx0aGlzLl9tZXJnZXJzLnNwbGljZShlLDEpLHRoaXMuaW52YWxpZGF0ZShcIml0ZW1zXCIpLHRoaXMudHJpZ2dlcihcInJlbW92ZWRcIix7Y29udGVudDpudWxsLHBvc2l0aW9uOmV9KSl9LG8ucHJvdG90eXBlLnByZWxvYWRBdXRvV2lkdGhJbWFnZXM9ZnVuY3Rpb24odCl7dC5lYWNoKGUucHJveHkoZnVuY3Rpb24odCxuKXt0aGlzLmVudGVyKFwicHJlLWxvYWRpbmdcIiksbj1lKG4pLGUobmV3IEltYWdlKS5vbmUoXCJsb2FkXCIsZS5wcm94eShmdW5jdGlvbihlKXtuLmF0dHIoXCJzcmNcIixlLnRhcmdldC5zcmMpLG4uY3NzKFwib3BhY2l0eVwiLDEpLHRoaXMubGVhdmUoXCJwcmUtbG9hZGluZ1wiKSwhdGhpcy5pcyhcInByZS1sb2FkaW5nXCIpJiYhdGhpcy5pcyhcImluaXRpYWxpemluZ1wiKSYmdGhpcy5yZWZyZXNoKCl9LHRoaXMpKS5hdHRyKFwic3JjXCIsbi5hdHRyKFwic3JjXCIpfHxuLmF0dHIoXCJkYXRhLXNyY1wiKXx8bi5hdHRyKFwiZGF0YS1zcmMtcmV0aW5hXCIpKX0sdGhpcykpfSxvLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy4kZWxlbWVudC5vZmYoXCIub3dsLmNvcmVcIiksdGhpcy4kc3RhZ2Uub2ZmKFwiLm93bC5jb3JlXCIpLGUoaSkub2ZmKFwiLm93bC5jb3JlXCIpLHRoaXMuc2V0dGluZ3MucmVzcG9uc2l2ZSE9PSExJiYobi5jbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lciksdGhpcy5vZmYobixcInJlc2l6ZVwiLHRoaXMuX2hhbmRsZXJzLm9uVGhyb3R0bGVkUmVzaXplKSk7Zm9yKHZhciB0IGluIHRoaXMuX3BsdWdpbnMpdGhpcy5fcGx1Z2luc1t0XS5kZXN0cm95KCk7dGhpcy4kc3RhZ2UuY2hpbGRyZW4oXCIuY2xvbmVkXCIpLnJlbW92ZSgpLHRoaXMuJHN0YWdlLnVud3JhcCgpLHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkuY29udGVudHMoKS51bndyYXAoKSx0aGlzLiRzdGFnZS5jaGlsZHJlbigpLnVud3JhcCgpLHRoaXMuJHN0YWdlLnJlbW92ZSgpLHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnJlZnJlc2hDbGFzcykucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRpbmdDbGFzcykucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRlZENsYXNzKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucnRsQ2xhc3MpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5kcmFnQ2xhc3MpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5ncmFiQ2xhc3MpLmF0dHIoXCJjbGFzc1wiLHRoaXMuJGVsZW1lbnQuYXR0cihcImNsYXNzXCIpLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUNsYXNzK1wiLVxcXFxTK1xcXFxzXCIsXCJnXCIpLFwiXCIpKS5yZW1vdmVEYXRhKFwib3dsLmNhcm91c2VsXCIpfSxvLnByb3RvdHlwZS5vcD1mdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcy5zZXR0aW5ncy5ydGw7c3dpdGNoKHQpe2Nhc2VcIjxcIjpyZXR1cm4gaT9lPm46ZTxuO2Nhc2VcIj5cIjpyZXR1cm4gaT9lPG46ZT5uO2Nhc2VcIj49XCI6cmV0dXJuIGk/ZTw9bjplPj1uO2Nhc2VcIjw9XCI6cmV0dXJuIGk/ZT49bjplPD1ufX0sby5wcm90b3R5cGUub249ZnVuY3Rpb24oZSx0LG4saSl7ZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcih0LG4saSk6ZS5hdHRhY2hFdmVudCYmZS5hdHRhY2hFdmVudChcIm9uXCIrdCxuKX0sby5wcm90b3R5cGUub2ZmPWZ1bmN0aW9uKGUsdCxuLGkpe2UucmVtb3ZlRXZlbnRMaXN0ZW5lcj9lLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuLGkpOmUuZGV0YWNoRXZlbnQmJmUuZGV0YWNoRXZlbnQoXCJvblwiK3Qsbil9LG8ucHJvdG90eXBlLnRyaWdnZXI9ZnVuY3Rpb24odCxuLGkscixzKXt2YXIgYT17aXRlbTp7Y291bnQ6dGhpcy5faXRlbXMubGVuZ3RoLGluZGV4OnRoaXMuY3VycmVudCgpfX0sbD1lLmNhbWVsQ2FzZShlLmdyZXAoW1wib25cIix0LGldLGZ1bmN0aW9uKGUpe3JldHVybiBlfSkuam9pbihcIi1cIikudG9Mb3dlckNhc2UoKSksdT1lLkV2ZW50KFt0LFwib3dsXCIsaXx8XCJjYXJvdXNlbFwiXS5qb2luKFwiLlwiKS50b0xvd2VyQ2FzZSgpLGUuZXh0ZW5kKHtyZWxhdGVkVGFyZ2V0OnRoaXN9LGEsbikpO3JldHVybiB0aGlzLl9zdXByZXNzW3RdfHwoZS5lYWNoKHRoaXMuX3BsdWdpbnMsZnVuY3Rpb24oZSx0KXt0Lm9uVHJpZ2dlciYmdC5vblRyaWdnZXIodSl9KSx0aGlzLnJlZ2lzdGVyKHt0eXBlOm8uVHlwZS5FdmVudCxuYW1lOnR9KSx0aGlzLiRlbGVtZW50LnRyaWdnZXIodSksdGhpcy5zZXR0aW5ncyYmXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5zZXR0aW5nc1tsXSYmdGhpcy5zZXR0aW5nc1tsXS5jYWxsKHRoaXMsdSkpLHV9LG8ucHJvdG90eXBlLmVudGVyPWZ1bmN0aW9uKHQpe2UuZWFjaChbdF0uY29uY2F0KHRoaXMuX3N0YXRlcy50YWdzW3RdfHxbXSksZS5wcm94eShmdW5jdGlvbihlLHQpe3RoaXMuX3N0YXRlcy5jdXJyZW50W3RdPT09ciYmKHRoaXMuX3N0YXRlcy5jdXJyZW50W3RdPTApLHRoaXMuX3N0YXRlcy5jdXJyZW50W3RdKyt9LHRoaXMpKX0sby5wcm90b3R5cGUubGVhdmU9ZnVuY3Rpb24odCl7ZS5lYWNoKFt0XS5jb25jYXQodGhpcy5fc3RhdGVzLnRhZ3NbdF18fFtdKSxlLnByb3h5KGZ1bmN0aW9uKGUsdCl7dGhpcy5fc3RhdGVzLmN1cnJlbnRbdF0tLX0sdGhpcykpfSxvLnByb3RvdHlwZS5yZWdpc3Rlcj1mdW5jdGlvbih0KXtpZih0LnR5cGU9PT1vLlR5cGUuRXZlbnQpe2lmKGUuZXZlbnQuc3BlY2lhbFt0Lm5hbWVdfHwoZS5ldmVudC5zcGVjaWFsW3QubmFtZV09e30pLCFlLmV2ZW50LnNwZWNpYWxbdC5uYW1lXS5vd2wpe3ZhciBuPWUuZXZlbnQuc3BlY2lhbFt0Lm5hbWVdLl9kZWZhdWx0O2UuZXZlbnQuc3BlY2lhbFt0Lm5hbWVdLl9kZWZhdWx0PWZ1bmN0aW9uKGUpe3JldHVybiFufHwhbi5hcHBseXx8ZS5uYW1lc3BhY2UmJmUubmFtZXNwYWNlLmluZGV4T2YoXCJvd2xcIikhPT0tMT9lLm5hbWVzcGFjZSYmZS5uYW1lc3BhY2UuaW5kZXhPZihcIm93bFwiKT4tMTpuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS5ldmVudC5zcGVjaWFsW3QubmFtZV0ub3dsPSEwfX1lbHNlIHQudHlwZT09PW8uVHlwZS5TdGF0ZSYmKHRoaXMuX3N0YXRlcy50YWdzW3QubmFtZV0/dGhpcy5fc3RhdGVzLnRhZ3NbdC5uYW1lXT10aGlzLl9zdGF0ZXMudGFnc1t0Lm5hbWVdLmNvbmNhdCh0LnRhZ3MpOnRoaXMuX3N0YXRlcy50YWdzW3QubmFtZV09dC50YWdzLHRoaXMuX3N0YXRlcy50YWdzW3QubmFtZV09ZS5ncmVwKHRoaXMuX3N0YXRlcy50YWdzW3QubmFtZV0sZS5wcm94eShmdW5jdGlvbihuLGkpe3JldHVybiBlLmluQXJyYXkobix0aGlzLl9zdGF0ZXMudGFnc1t0Lm5hbWVdKT09PWl9LHRoaXMpKSl9LG8ucHJvdG90eXBlLnN1cHByZXNzPWZ1bmN0aW9uKHQpe2UuZWFjaCh0LGUucHJveHkoZnVuY3Rpb24oZSx0KXt0aGlzLl9zdXByZXNzW3RdPSEwfSx0aGlzKSl9LG8ucHJvdG90eXBlLnJlbGVhc2U9ZnVuY3Rpb24odCl7ZS5lYWNoKHQsZS5wcm94eShmdW5jdGlvbihlLHQpe2RlbGV0ZSB0aGlzLl9zdXByZXNzW3RdfSx0aGlzKSl9LG8ucHJvdG90eXBlLnBvaW50ZXI9ZnVuY3Rpb24oZSl7dmFyIHQ9e3g6bnVsbCx5Om51bGx9O3JldHVybiBlPWUub3JpZ2luYWxFdmVudHx8ZXx8bi5ldmVudCxlPWUudG91Y2hlcyYmZS50b3VjaGVzLmxlbmd0aD9lLnRvdWNoZXNbMF06ZS5jaGFuZ2VkVG91Y2hlcyYmZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg/ZS5jaGFuZ2VkVG91Y2hlc1swXTplLGUucGFnZVg/KHQueD1lLnBhZ2VYLHQueT1lLnBhZ2VZKToodC54PWUuY2xpZW50WCx0Lnk9ZS5jbGllbnRZKSx0fSxvLnByb3RvdHlwZS5pc051bWVyaWM9ZnVuY3Rpb24oZSl7cmV0dXJuIWlzTmFOKHBhcnNlRmxvYXQoZSkpfSxvLnByb3RvdHlwZS5kaWZmZXJlbmNlPWZ1bmN0aW9uKGUsdCl7cmV0dXJue3g6ZS54LXQueCx5OmUueS10Lnl9fSxlLmZuLm93bENhcm91c2VsPWZ1bmN0aW9uKHQpe3ZhciBuPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGk9ZSh0aGlzKSxyPWkuZGF0YShcIm93bC5jYXJvdXNlbFwiKTtyfHwocj1uZXcgbyh0aGlzLFwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0KSxpLmRhdGEoXCJvd2wuY2Fyb3VzZWxcIixyKSxlLmVhY2goW1wibmV4dFwiLFwicHJldlwiLFwidG9cIixcImRlc3Ryb3lcIixcInJlZnJlc2hcIixcInJlcGxhY2VcIixcImFkZFwiLFwicmVtb3ZlXCJdLGZ1bmN0aW9uKHQsbil7ci5yZWdpc3Rlcih7dHlwZTpvLlR5cGUuRXZlbnQsbmFtZTpufSksci4kZWxlbWVudC5vbihuK1wiLm93bC5jYXJvdXNlbC5jb3JlXCIsZS5wcm94eShmdW5jdGlvbihlKXtlLm5hbWVzcGFjZSYmZS5yZWxhdGVkVGFyZ2V0IT09dGhpcyYmKHRoaXMuc3VwcHJlc3MoW25dKSxyW25dLmFwcGx5KHRoaXMsW10uc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpLHRoaXMucmVsZWFzZShbbl0pKX0scikpfSkpLFwic3RyaW5nXCI9PXR5cGVvZiB0JiZcIl9cIiE9PXQuY2hhckF0KDApJiZyW3RdLmFwcGx5KHIsbil9KX0sZS5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvcj1vfSh3aW5kb3cuWmVwdG98fGUsd2luZG93LGRvY3VtZW50KSxmdW5jdGlvbihlLHQsbixpKXt2YXIgcj1mdW5jdGlvbih0KXt0aGlzLl9jb3JlPXQsdGhpcy5faW50ZXJ2YWw9bnVsbCx0aGlzLl92aXNpYmxlPW51bGwsdGhpcy5faGFuZGxlcnM9e1wiaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsXCI6ZS5wcm94eShmdW5jdGlvbihlKXtlLm5hbWVzcGFjZSYmdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvUmVmcmVzaCYmdGhpcy53YXRjaCgpfSx0aGlzKX0sdGhpcy5fY29yZS5vcHRpb25zPWUuZXh0ZW5kKHt9LHIuRGVmYXVsdHMsdGhpcy5fY29yZS5vcHRpb25zKSx0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKX07ci5EZWZhdWx0cz17YXV0b1JlZnJlc2g6ITAsYXV0b1JlZnJlc2hJbnRlcnZhbDo1MDB9LHIucHJvdG90eXBlLndhdGNoPWZ1bmN0aW9uKCl7dGhpcy5faW50ZXJ2YWx8fCh0aGlzLl92aXNpYmxlPXRoaXMuX2NvcmUuaXNWaXNpYmxlKCksdGhpcy5faW50ZXJ2YWw9dC5zZXRJbnRlcnZhbChlLnByb3h5KHRoaXMucmVmcmVzaCx0aGlzKSx0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9SZWZyZXNoSW50ZXJ2YWwpKX0sci5wcm90b3R5cGUucmVmcmVzaD1mdW5jdGlvbigpe3RoaXMuX2NvcmUuaXNWaXNpYmxlKCkhPT10aGlzLl92aXNpYmxlJiYodGhpcy5fdmlzaWJsZT0hdGhpcy5fdmlzaWJsZSx0aGlzLl9jb3JlLiRlbGVtZW50LnRvZ2dsZUNsYXNzKFwib3dsLWhpZGRlblwiLCF0aGlzLl92aXNpYmxlKSx0aGlzLl92aXNpYmxlJiZ0aGlzLl9jb3JlLmludmFsaWRhdGUoXCJ3aWR0aFwiKSYmdGhpcy5fY29yZS5yZWZyZXNoKCkpfSxyLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dmFyIGUsbjt0LmNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO2ZvcihlIGluIHRoaXMuX2hhbmRsZXJzKXRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGUsdGhpcy5faGFuZGxlcnNbZV0pO2ZvcihuIGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKVwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXNbbl0mJih0aGlzW25dPW51bGwpfSxlLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuQXV0b1JlZnJlc2g9cn0od2luZG93LlplcHRvfHxlLHdpbmRvdyxkb2N1bWVudCksZnVuY3Rpb24oZSx0LG4saSl7dmFyIHI9ZnVuY3Rpb24odCl7dGhpcy5fY29yZT10LHRoaXMuX2xvYWRlZD1bXSx0aGlzLl9oYW5kbGVycz17XCJpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwgY2hhbmdlLm93bC5jYXJvdXNlbCByZXNpemVkLm93bC5jYXJvdXNlbFwiOmUucHJveHkoZnVuY3Rpb24odCl7aWYodC5uYW1lc3BhY2UmJnRoaXMuX2NvcmUuc2V0dGluZ3MmJnRoaXMuX2NvcmUuc2V0dGluZ3MubGF6eUxvYWQmJih0LnByb3BlcnR5JiZcInBvc2l0aW9uXCI9PXQucHJvcGVydHkubmFtZXx8XCJpbml0aWFsaXplZFwiPT10LnR5cGUpKXt2YXIgbj10aGlzLl9jb3JlLnNldHRpbmdzLHI9bi5jZW50ZXImJk1hdGguY2VpbChuLml0ZW1zLzIpfHxuLml0ZW1zLG89bi5jZW50ZXImJnIqLTF8fDAscz0odC5wcm9wZXJ0eSYmdC5wcm9wZXJ0eS52YWx1ZSE9PWk/dC5wcm9wZXJ0eS52YWx1ZTp0aGlzLl9jb3JlLmN1cnJlbnQoKSkrbyxhPXRoaXMuX2NvcmUuY2xvbmVzKCkubGVuZ3RoLGw9ZS5wcm94eShmdW5jdGlvbihlLHQpe3RoaXMubG9hZCh0KX0sdGhpcyk7Zm9yKG4ubGF6eUxvYWRFYWdlcj4wJiYocis9bi5sYXp5TG9hZEVhZ2VyLG4ubG9vcCYmKHMtPW4ubGF6eUxvYWRFYWdlcixyKyspKTtvKys8cjspdGhpcy5sb2FkKGEvMit0aGlzLl9jb3JlLnJlbGF0aXZlKHMpKSxhJiZlLmVhY2godGhpcy5fY29yZS5jbG9uZXModGhpcy5fY29yZS5yZWxhdGl2ZShzKSksbCkscysrfX0sdGhpcyl9LHRoaXMuX2NvcmUub3B0aW9ucz1lLmV4dGVuZCh7fSxyLkRlZmF1bHRzLHRoaXMuX2NvcmUub3B0aW9ucyksdGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyl9O3IuRGVmYXVsdHM9e2xhenlMb2FkOiExLGxhenlMb2FkRWFnZXI6MH0sci5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihuKXt2YXIgaT10aGlzLl9jb3JlLiRzdGFnZS5jaGlsZHJlbigpLmVxKG4pLHI9aSYmaS5maW5kKFwiLm93bC1sYXp5XCIpOyFyfHxlLmluQXJyYXkoaS5nZXQoMCksdGhpcy5fbG9hZGVkKT4tMXx8KHIuZWFjaChlLnByb3h5KGZ1bmN0aW9uKG4saSl7dmFyIHIsbz1lKGkpLHM9dC5kZXZpY2VQaXhlbFJhdGlvPjEmJm8uYXR0cihcImRhdGEtc3JjLXJldGluYVwiKXx8by5hdHRyKFwiZGF0YS1zcmNcIil8fG8uYXR0cihcImRhdGEtc3Jjc2V0XCIpO3RoaXMuX2NvcmUudHJpZ2dlcihcImxvYWRcIix7ZWxlbWVudDpvLHVybDpzfSxcImxhenlcIiksby5pcyhcImltZ1wiKT9vLm9uZShcImxvYWQub3dsLmxhenlcIixlLnByb3h5KGZ1bmN0aW9uKCl7by5jc3MoXCJvcGFjaXR5XCIsMSksdGhpcy5fY29yZS50cmlnZ2VyKFwibG9hZGVkXCIse2VsZW1lbnQ6byx1cmw6c30sXCJsYXp5XCIpfSx0aGlzKSkuYXR0cihcInNyY1wiLHMpOm8uaXMoXCJzb3VyY2VcIik/by5vbmUoXCJsb2FkLm93bC5sYXp5XCIsZS5wcm94eShmdW5jdGlvbigpe3RoaXMuX2NvcmUudHJpZ2dlcihcImxvYWRlZFwiLHtlbGVtZW50Om8sdXJsOnN9LFwibGF6eVwiKX0sdGhpcykpLmF0dHIoXCJzcmNzZXRcIixzKToocj1uZXcgSW1hZ2Usci5vbmxvYWQ9ZS5wcm94eShmdW5jdGlvbigpe28uY3NzKHtcImJhY2tncm91bmQtaW1hZ2VcIjondXJsKFwiJytzKydcIiknLG9wYWNpdHk6XCIxXCJ9KSx0aGlzLl9jb3JlLnRyaWdnZXIoXCJsb2FkZWRcIix7ZWxlbWVudDpvLHVybDpzfSxcImxhenlcIil9LHRoaXMpLHIuc3JjPXMpfSx0aGlzKSksdGhpcy5fbG9hZGVkLnB1c2goaS5nZXQoMCkpKX0sci5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3ZhciBlLHQ7Zm9yKGUgaW4gdGhpcy5oYW5kbGVycyl0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihlLHRoaXMuaGFuZGxlcnNbZV0pO2Zvcih0IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKVwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXNbdF0mJih0aGlzW3RdPW51bGwpfSxlLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuTGF6eT1yfSh3aW5kb3cuWmVwdG98fGUsd2luZG93LGRvY3VtZW50KSxmdW5jdGlvbihlLHQsbixpKXt2YXIgcj1mdW5jdGlvbihuKXt0aGlzLl9jb3JlPW4sdGhpcy5fcHJldmlvdXNIZWlnaHQ9bnVsbCx0aGlzLl9oYW5kbGVycz17XCJpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwgcmVmcmVzaGVkLm93bC5jYXJvdXNlbFwiOmUucHJveHkoZnVuY3Rpb24oZSl7ZS5uYW1lc3BhY2UmJnRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodCYmdGhpcy51cGRhdGUoKX0sdGhpcyksXCJjaGFuZ2VkLm93bC5jYXJvdXNlbFwiOmUucHJveHkoZnVuY3Rpb24oZSl7ZS5uYW1lc3BhY2UmJnRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodCYmXCJwb3NpdGlvblwiPT09ZS5wcm9wZXJ0eS5uYW1lJiZ0aGlzLnVwZGF0ZSgpfSx0aGlzKSxcImxvYWRlZC5vd2wubGF6eVwiOmUucHJveHkoZnVuY3Rpb24oZSl7ZS5uYW1lc3BhY2UmJnRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodCYmZS5lbGVtZW50LmNsb3Nlc3QoXCIuXCIrdGhpcy5fY29yZS5zZXR0aW5ncy5pdGVtQ2xhc3MpLmluZGV4KCk9PT10aGlzLl9jb3JlLmN1cnJlbnQoKSYmdGhpcy51cGRhdGUoKX0sdGhpcyl9LHRoaXMuX2NvcmUub3B0aW9ucz1lLmV4dGVuZCh7fSxyLkRlZmF1bHRzLHRoaXMuX2NvcmUub3B0aW9ucyksdGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyksdGhpcy5faW50ZXJ2YWxJZD1udWxsO3ZhciBpPXRoaXM7ZSh0KS5vbihcImxvYWRcIixmdW5jdGlvbigpe2kuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodCYmaS51cGRhdGUoKX0pLGUodCkucmVzaXplKGZ1bmN0aW9uKCl7aS5fY29yZS5zZXR0aW5ncy5hdXRvSGVpZ2h0JiYobnVsbCE9aS5faW50ZXJ2YWxJZCYmY2xlYXJUaW1lb3V0KGkuX2ludGVydmFsSWQpLGkuX2ludGVydmFsSWQ9c2V0VGltZW91dChmdW5jdGlvbigpe2kudXBkYXRlKCl9LDI1MCkpfSl9O3IuRGVmYXVsdHM9e2F1dG9IZWlnaHQ6ITEsYXV0b0hlaWdodENsYXNzOlwib3dsLWhlaWdodFwifSxyLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9jb3JlLl9jdXJyZW50LG49dCt0aGlzLl9jb3JlLnNldHRpbmdzLml0ZW1zLGk9dGhpcy5fY29yZS5zZXR0aW5ncy5sYXp5TG9hZCxyPXRoaXMuX2NvcmUuJHN0YWdlLmNoaWxkcmVuKCkudG9BcnJheSgpLnNsaWNlKHQsbiksbz1bXSxzPTA7ZS5lYWNoKHIsZnVuY3Rpb24odCxuKXtvLnB1c2goZShuKS5oZWlnaHQoKSl9KSxzPU1hdGgubWF4LmFwcGx5KG51bGwsbyksczw9MSYmaSYmdGhpcy5fcHJldmlvdXNIZWlnaHQmJihzPXRoaXMuX3ByZXZpb3VzSGVpZ2h0KSx0aGlzLl9wcmV2aW91c0hlaWdodD1zLHRoaXMuX2NvcmUuJHN0YWdlLnBhcmVudCgpLmhlaWdodChzKS5hZGRDbGFzcyh0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHRDbGFzcyl9LHIucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgZSx0O2ZvcihlIGluIHRoaXMuX2hhbmRsZXJzKXRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGUsdGhpcy5faGFuZGxlcnNbZV0pO2Zvcih0IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKVwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXNbdF0mJih0aGlzW3RdPW51bGwpfSxlLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuQXV0b0hlaWdodD1yfSh3aW5kb3cuWmVwdG98fGUsd2luZG93LGRvY3VtZW50KSxmdW5jdGlvbihlLHQsbixpKXt2YXIgcj1mdW5jdGlvbih0KXt0aGlzLl9jb3JlPXQsdGhpcy5fdmlkZW9zPXt9LHRoaXMuX3BsYXlpbmc9bnVsbCx0aGlzLl9oYW5kbGVycz17XCJpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWxcIjplLnByb3h5KGZ1bmN0aW9uKGUpe2UubmFtZXNwYWNlJiZ0aGlzLl9jb3JlLnJlZ2lzdGVyKHt0eXBlOlwic3RhdGVcIixuYW1lOlwicGxheWluZ1wiLHRhZ3M6W1wiaW50ZXJhY3RpbmdcIl19KX0sdGhpcyksXCJyZXNpemUub3dsLmNhcm91c2VsXCI6ZS5wcm94eShmdW5jdGlvbihlKXtlLm5hbWVzcGFjZSYmdGhpcy5fY29yZS5zZXR0aW5ncy52aWRlbyYmdGhpcy5pc0luRnVsbFNjcmVlbigpJiZlLnByZXZlbnREZWZhdWx0KCl9LHRoaXMpLFwicmVmcmVzaGVkLm93bC5jYXJvdXNlbFwiOmUucHJveHkoZnVuY3Rpb24oZSl7ZS5uYW1lc3BhY2UmJnRoaXMuX2NvcmUuaXMoXCJyZXNpemluZ1wiKSYmdGhpcy5fY29yZS4kc3RhZ2UuZmluZChcIi5jbG9uZWQgLm93bC12aWRlby1mcmFtZVwiKS5yZW1vdmUoKX0sdGhpcyksXCJjaGFuZ2VkLm93bC5jYXJvdXNlbFwiOmUucHJveHkoZnVuY3Rpb24oZSl7ZS5uYW1lc3BhY2UmJlwicG9zaXRpb25cIj09PWUucHJvcGVydHkubmFtZSYmdGhpcy5fcGxheWluZyYmdGhpcy5zdG9wKCl9LHRoaXMpLFwicHJlcGFyZWQub3dsLmNhcm91c2VsXCI6ZS5wcm94eShmdW5jdGlvbih0KXtpZih0Lm5hbWVzcGFjZSl7dmFyIG49ZSh0LmNvbnRlbnQpLmZpbmQoXCIub3dsLXZpZGVvXCIpO24ubGVuZ3RoJiYobi5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpLHRoaXMuZmV0Y2gobixlKHQuY29udGVudCkpKX19LHRoaXMpfSx0aGlzLl9jb3JlLm9wdGlvbnM9ZS5leHRlbmQoe30sci5EZWZhdWx0cyx0aGlzLl9jb3JlLm9wdGlvbnMpLHRoaXMuX2NvcmUuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpLHRoaXMuX2NvcmUuJGVsZW1lbnQub24oXCJjbGljay5vd2wudmlkZW9cIixcIi5vd2wtdmlkZW8tcGxheS1pY29uXCIsZS5wcm94eShmdW5jdGlvbihlKXt0aGlzLnBsYXkoZSl9LHRoaXMpKX07ci5EZWZhdWx0cz17dmlkZW86ITEsdmlkZW9IZWlnaHQ6ITEsdmlkZW9XaWR0aDohMX0sci5wcm90b3R5cGUuZmV0Y2g9ZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbigpe3JldHVybiBlLmF0dHIoXCJkYXRhLXZpbWVvLWlkXCIpP1widmltZW9cIjplLmF0dHIoXCJkYXRhLXZ6YWFyLWlkXCIpP1widnphYXJcIjpcInlvdXR1YmVcIn0oKSxpPWUuYXR0cihcImRhdGEtdmltZW8taWRcIil8fGUuYXR0cihcImRhdGEteW91dHViZS1pZFwiKXx8ZS5hdHRyKFwiZGF0YS12emFhci1pZFwiKSxyPWUuYXR0cihcImRhdGEtd2lkdGhcIil8fHRoaXMuX2NvcmUuc2V0dGluZ3MudmlkZW9XaWR0aCxvPWUuYXR0cihcImRhdGEtaGVpZ2h0XCIpfHx0aGlzLl9jb3JlLnNldHRpbmdzLnZpZGVvSGVpZ2h0LHM9ZS5hdHRyKFwiaHJlZlwiKTtpZighcyl0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHZpZGVvIFVSTC5cIik7aWYoaT1zLm1hdGNoKC8oaHR0cDp8aHR0cHM6fClcXC9cXC8ocGxheWVyLnx3d3cufGFwcC4pPyh2aW1lb1xcLmNvbXx5b3V0dShiZVxcLmNvbXxcXC5iZXxiZVxcLmdvb2dsZWFwaXNcXC5jb218YmVcXC1ub2Nvb2tpZVxcLmNvbSl8dnphYXJcXC5jb20pXFwvKHZpZGVvXFwvfHZpZGVvc1xcL3xlbWJlZFxcL3xjaGFubmVsc1xcLy4rXFwvfGdyb3Vwc1xcLy4rXFwvfHdhdGNoXFw/dj18dlxcLyk/KFtBLVphLXowLTkuXyUtXSopKFxcJlxcUyspPy8pLGlbM10uaW5kZXhPZihcInlvdXR1XCIpPi0xKW49XCJ5b3V0dWJlXCI7ZWxzZSBpZihpWzNdLmluZGV4T2YoXCJ2aW1lb1wiKT4tMSluPVwidmltZW9cIjtlbHNle2lmKCEoaVszXS5pbmRleE9mKFwidnphYXJcIik+LTEpKXRocm93IG5ldyBFcnJvcihcIlZpZGVvIFVSTCBub3Qgc3VwcG9ydGVkLlwiKTtuPVwidnphYXJcIn1pPWlbNl0sdGhpcy5fdmlkZW9zW3NdPXt0eXBlOm4saWQ6aSx3aWR0aDpyLGhlaWdodDpvfSx0LmF0dHIoXCJkYXRhLXZpZGVvXCIscyksdGhpcy50aHVtYm5haWwoZSx0aGlzLl92aWRlb3Nbc10pfSxyLnByb3RvdHlwZS50aHVtYm5haWw9ZnVuY3Rpb24odCxuKXt2YXIgaSxyLG8scz1uLndpZHRoJiZuLmhlaWdodD9cIndpZHRoOlwiK24ud2lkdGgrXCJweDtoZWlnaHQ6XCIrbi5oZWlnaHQrXCJweDtcIjpcIlwiLGE9dC5maW5kKFwiaW1nXCIpLGw9XCJzcmNcIix1PVwiXCIsYz10aGlzLl9jb3JlLnNldHRpbmdzLGg9ZnVuY3Rpb24obil7cj0nPGRpdiBjbGFzcz1cIm93bC12aWRlby1wbGF5LWljb25cIj48L2Rpdj4nLGk9Yy5sYXp5TG9hZD9lKFwiPGRpdi8+XCIse1wiY2xhc3NcIjpcIm93bC12aWRlby10biBcIit1LHNyY1R5cGU6bn0pOmUoXCI8ZGl2Lz5cIix7XCJjbGFzc1wiOlwib3dsLXZpZGVvLXRuXCIsc3R5bGU6XCJvcGFjaXR5OjE7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIrbitcIilcIn0pLHQuYWZ0ZXIoaSksdC5hZnRlcihyKX07cmV0dXJuIHQud3JhcChlKFwiPGRpdi8+XCIse1wiY2xhc3NcIjpcIm93bC12aWRlby13cmFwcGVyXCIsc3R5bGU6c30pKSx0aGlzLl9jb3JlLnNldHRpbmdzLmxhenlMb2FkJiYobD1cImRhdGEtc3JjXCIsdT1cIm93bC1sYXp5XCIpLGEubGVuZ3RoPyhoKGEuYXR0cihsKSksYS5yZW1vdmUoKSwhMSk6dm9pZChcInlvdXR1YmVcIj09PW4udHlwZT8obz1cIi8vaW1nLnlvdXR1YmUuY29tL3ZpL1wiK24uaWQrXCIvaHFkZWZhdWx0LmpwZ1wiLGgobykpOlwidmltZW9cIj09PW4udHlwZT9lLmFqYXgoe3R5cGU6XCJHRVRcIix1cmw6XCIvL3ZpbWVvLmNvbS9hcGkvdjIvdmlkZW8vXCIrbi5pZCtcIi5qc29uXCIsanNvbnA6XCJjYWxsYmFja1wiLGRhdGFUeXBlOlwianNvbnBcIixzdWNjZXNzOmZ1bmN0aW9uKGUpe289ZVswXS50aHVtYm5haWxfbGFyZ2UsaChvKX19KTpcInZ6YWFyXCI9PT1uLnR5cGUmJmUuYWpheCh7dHlwZTpcIkdFVFwiLHVybDpcIi8vdnphYXIuY29tL2FwaS92aWRlb3MvXCIrbi5pZCtcIi5qc29uXCIsanNvbnA6XCJjYWxsYmFja1wiLGRhdGFUeXBlOlwianNvbnBcIixzdWNjZXNzOmZ1bmN0aW9uKGUpe289ZS5mcmFtZWdyYWJfdXJsLGgobyl9fSkpfSxyLnByb3RvdHlwZS5zdG9wPWZ1bmN0aW9uKCl7dGhpcy5fY29yZS50cmlnZ2VyKFwic3RvcFwiLG51bGwsXCJ2aWRlb1wiKSx0aGlzLl9wbGF5aW5nLmZpbmQoXCIub3dsLXZpZGVvLWZyYW1lXCIpLnJlbW92ZSgpLHRoaXMuX3BsYXlpbmcucmVtb3ZlQ2xhc3MoXCJvd2wtdmlkZW8tcGxheWluZ1wiKSx0aGlzLl9wbGF5aW5nPW51bGwsdGhpcy5fY29yZS5sZWF2ZShcInBsYXlpbmdcIiksdGhpcy5fY29yZS50cmlnZ2VyKFwic3RvcHBlZFwiLG51bGwsXCJ2aWRlb1wiKX0sci5wcm90b3R5cGUucGxheT1mdW5jdGlvbih0KXt2YXIgbixpLHI9ZSh0LnRhcmdldCksbz1yLmNsb3Nlc3QoXCIuXCIrdGhpcy5fY29yZS5zZXR0aW5ncy5pdGVtQ2xhc3MpLHM9dGhpcy5fdmlkZW9zW28uYXR0cihcImRhdGEtdmlkZW9cIildLGE9cy53aWR0aHx8XCIxMDAlXCIsbD1zLmhlaWdodHx8dGhpcy5fY29yZS4kc3RhZ2UuaGVpZ2h0KCk7dGhpcy5fcGxheWluZ3x8KHRoaXMuX2NvcmUuZW50ZXIoXCJwbGF5aW5nXCIpLHRoaXMuX2NvcmUudHJpZ2dlcihcInBsYXlcIixudWxsLFwidmlkZW9cIiksbz10aGlzLl9jb3JlLml0ZW1zKHRoaXMuX2NvcmUucmVsYXRpdmUoby5pbmRleCgpKSksdGhpcy5fY29yZS5yZXNldChvLmluZGV4KCkpLG49ZSgnPGlmcmFtZSBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4gbW96YWxsb3dmdWxsc2NyZWVuIHdlYmtpdEFsbG93RnVsbFNjcmVlbiA+PC9pZnJhbWU+Jyksbi5hdHRyKFwiaGVpZ2h0XCIsbCksbi5hdHRyKFwid2lkdGhcIixhKSxcInlvdXR1YmVcIj09PXMudHlwZT9uLmF0dHIoXCJzcmNcIixcIi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiK3MuaWQrXCI/YXV0b3BsYXk9MSZyZWw9MCZ2PVwiK3MuaWQpOlwidmltZW9cIj09PXMudHlwZT9uLmF0dHIoXCJzcmNcIixcIi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby9cIitzLmlkK1wiP2F1dG9wbGF5PTFcIik6XCJ2emFhclwiPT09cy50eXBlJiZuLmF0dHIoXCJzcmNcIixcIi8vdmlldy52emFhci5jb20vXCIrcy5pZCtcIi9wbGF5ZXI/YXV0b3BsYXk9dHJ1ZVwiKSxpPWUobikud3JhcCgnPGRpdiBjbGFzcz1cIm93bC12aWRlby1mcmFtZVwiIC8+JykuaW5zZXJ0QWZ0ZXIoby5maW5kKFwiLm93bC12aWRlb1wiKSksdGhpcy5fcGxheWluZz1vLmFkZENsYXNzKFwib3dsLXZpZGVvLXBsYXlpbmdcIikpfSxyLnByb3RvdHlwZS5pc0luRnVsbFNjcmVlbj1mdW5jdGlvbigpe3ZhciB0PW4uZnVsbHNjcmVlbkVsZW1lbnR8fG4ubW96RnVsbFNjcmVlbkVsZW1lbnR8fG4ud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQ7cmV0dXJuIHQmJmUodCkucGFyZW50KCkuaGFzQ2xhc3MoXCJvd2wtdmlkZW8tZnJhbWVcIil9LHIucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgZSx0O3RoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKFwiY2xpY2sub3dsLnZpZGVvXCIpO2ZvcihlIGluIHRoaXMuX2hhbmRsZXJzKXRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGUsdGhpcy5faGFuZGxlcnNbZV0pO2Zvcih0IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKVwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXNbdF0mJih0aGlzW3RdPW51bGwpfSxlLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuVmlkZW89cn0od2luZG93LlplcHRvfHxlLHdpbmRvdyxkb2N1bWVudCksZnVuY3Rpb24oZSx0LG4saSl7dmFyIHI9ZnVuY3Rpb24odCl7dGhpcy5jb3JlPXQsdGhpcy5jb3JlLm9wdGlvbnM9ZS5leHRlbmQoe30sci5EZWZhdWx0cyx0aGlzLmNvcmUub3B0aW9ucyksdGhpcy5zd2FwcGluZz0hMCx0aGlzLnByZXZpb3VzPWksdGhpcy5uZXh0PWksdGhpcy5oYW5kbGVycz17XCJjaGFuZ2Uub3dsLmNhcm91c2VsXCI6ZS5wcm94eShmdW5jdGlvbihlKXtlLm5hbWVzcGFjZSYmXCJwb3NpdGlvblwiPT1lLnByb3BlcnR5Lm5hbWUmJih0aGlzLnByZXZpb3VzPXRoaXMuY29yZS5jdXJyZW50KCksdGhpcy5uZXh0PWUucHJvcGVydHkudmFsdWUpfSx0aGlzKSxcImRyYWcub3dsLmNhcm91c2VsIGRyYWdnZWQub3dsLmNhcm91c2VsIHRyYW5zbGF0ZWQub3dsLmNhcm91c2VsXCI6ZS5wcm94eShmdW5jdGlvbihlKXtlLm5hbWVzcGFjZSYmKHRoaXMuc3dhcHBpbmc9XCJ0cmFuc2xhdGVkXCI9PWUudHlwZSl9LHRoaXMpLFwidHJhbnNsYXRlLm93bC5jYXJvdXNlbFwiOmUucHJveHkoZnVuY3Rpb24oZSl7ZS5uYW1lc3BhY2UmJnRoaXMuc3dhcHBpbmcmJih0aGlzLmNvcmUub3B0aW9ucy5hbmltYXRlT3V0fHx0aGlzLmNvcmUub3B0aW9ucy5hbmltYXRlSW4pJiZ0aGlzLnN3YXAoKX0sdGhpcyl9LHRoaXMuY29yZS4kZWxlbWVudC5vbih0aGlzLmhhbmRsZXJzKX07ci5EZWZhdWx0cz17YW5pbWF0ZU91dDohMSxhbmltYXRlSW46ITF9LHIucHJvdG90eXBlLnN3YXA9ZnVuY3Rpb24oKXtpZigxPT09dGhpcy5jb3JlLnNldHRpbmdzLml0ZW1zJiZlLnN1cHBvcnQuYW5pbWF0aW9uJiZlLnN1cHBvcnQudHJhbnNpdGlvbil7dGhpcy5jb3JlLnNwZWVkKDApO3ZhciB0LG49ZS5wcm94eSh0aGlzLmNsZWFyLHRoaXMpLGk9dGhpcy5jb3JlLiRzdGFnZS5jaGlsZHJlbigpLmVxKHRoaXMucHJldmlvdXMpLHI9dGhpcy5jb3JlLiRzdGFnZS5jaGlsZHJlbigpLmVxKHRoaXMubmV4dCksbz10aGlzLmNvcmUuc2V0dGluZ3MuYW5pbWF0ZUluLHM9dGhpcy5jb3JlLnNldHRpbmdzLmFuaW1hdGVPdXQ7dGhpcy5jb3JlLmN1cnJlbnQoKSE9PXRoaXMucHJldmlvdXMmJihzJiYodD10aGlzLmNvcmUuY29vcmRpbmF0ZXModGhpcy5wcmV2aW91cyktdGhpcy5jb3JlLmNvb3JkaW5hdGVzKHRoaXMubmV4dCksaS5vbmUoZS5zdXBwb3J0LmFuaW1hdGlvbi5lbmQsbikuY3NzKHtsZWZ0OnQrXCJweFwifSkuYWRkQ2xhc3MoXCJhbmltYXRlZCBvd2wtYW5pbWF0ZWQtb3V0XCIpLmFkZENsYXNzKHMpKSxvJiZyLm9uZShlLnN1cHBvcnQuYW5pbWF0aW9uLmVuZCxuKS5hZGRDbGFzcyhcImFuaW1hdGVkIG93bC1hbmltYXRlZC1pblwiKS5hZGRDbGFzcyhvKSl9fSxyLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbih0KXtlKHQudGFyZ2V0KS5jc3Moe2xlZnQ6XCJcIn0pLnJlbW92ZUNsYXNzKFwiYW5pbWF0ZWQgb3dsLWFuaW1hdGVkLW91dCBvd2wtYW5pbWF0ZWQtaW5cIikucmVtb3ZlQ2xhc3ModGhpcy5jb3JlLnNldHRpbmdzLmFuaW1hdGVJbikucmVtb3ZlQ2xhc3ModGhpcy5jb3JlLnNldHRpbmdzLmFuaW1hdGVPdXQpLHRoaXMuY29yZS5vblRyYW5zaXRpb25FbmQoKX0sci5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3ZhciBlLHQ7Zm9yKGUgaW4gdGhpcy5oYW5kbGVycyl0aGlzLmNvcmUuJGVsZW1lbnQub2ZmKGUsdGhpcy5oYW5kbGVyc1tlXSk7Zm9yKHQgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpXCJmdW5jdGlvblwiIT10eXBlb2YgdGhpc1t0XSYmKHRoaXNbdF09bnVsbCl9LGUuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5BbmltYXRlPXJ9KHdpbmRvdy5aZXB0b3x8ZSx3aW5kb3csZG9jdW1lbnQpLGZ1bmN0aW9uKGUsdCxuLGkpe3ZhciByPWZ1bmN0aW9uKHQpe3RoaXMuX2NvcmU9dCx0aGlzLl9jYWxsPW51bGwsdGhpcy5fdGltZT0wLHRoaXMuX3RpbWVvdXQ9MCx0aGlzLl9wYXVzZWQ9ITAsdGhpcy5faGFuZGxlcnM9e1wiY2hhbmdlZC5vd2wuY2Fyb3VzZWxcIjplLnByb3h5KGZ1bmN0aW9uKGUpe2UubmFtZXNwYWNlJiZcInNldHRpbmdzXCI9PT1lLnByb3BlcnR5Lm5hbWU/dGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheT90aGlzLnBsYXkoKTp0aGlzLnN0b3AoKTplLm5hbWVzcGFjZSYmXCJwb3NpdGlvblwiPT09ZS5wcm9wZXJ0eS5uYW1lJiZ0aGlzLl9wYXVzZWQmJih0aGlzLl90aW1lPTApfSx0aGlzKSxcImluaXRpYWxpemVkLm93bC5jYXJvdXNlbFwiOmUucHJveHkoZnVuY3Rpb24oZSl7ZS5uYW1lc3BhY2UmJnRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXkmJnRoaXMucGxheSgpfSx0aGlzKSxcInBsYXkub3dsLmF1dG9wbGF5XCI6ZS5wcm94eShmdW5jdGlvbihlLHQsbil7ZS5uYW1lc3BhY2UmJnRoaXMucGxheSh0LG4pfSx0aGlzKSxcInN0b3Aub3dsLmF1dG9wbGF5XCI6ZS5wcm94eShmdW5jdGlvbihlKXtlLm5hbWVzcGFjZSYmdGhpcy5zdG9wKCl9LHRoaXMpLFwibW91c2VvdmVyLm93bC5hdXRvcGxheVwiOmUucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5SG92ZXJQYXVzZSYmdGhpcy5fY29yZS5pcyhcInJvdGF0aW5nXCIpJiZ0aGlzLnBhdXNlKCl9LHRoaXMpLFwibW91c2VsZWF2ZS5vd2wuYXV0b3BsYXlcIjplLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheUhvdmVyUGF1c2UmJnRoaXMuX2NvcmUuaXMoXCJyb3RhdGluZ1wiKSYmdGhpcy5wbGF5KCl9LHRoaXMpLFwidG91Y2hzdGFydC5vd2wuY29yZVwiOmUucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5SG92ZXJQYXVzZSYmdGhpcy5fY29yZS5pcyhcInJvdGF0aW5nXCIpJiZ0aGlzLnBhdXNlKCl9LHRoaXMpLFwidG91Y2hlbmQub3dsLmNvcmVcIjplLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheUhvdmVyUGF1c2UmJnRoaXMucGxheSgpfSx0aGlzKX0sdGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyksdGhpcy5fY29yZS5vcHRpb25zPWUuZXh0ZW5kKHt9LHIuRGVmYXVsdHMsdGhpcy5fY29yZS5vcHRpb25zKX07ci5EZWZhdWx0cz17YXV0b3BsYXk6ITEsYXV0b3BsYXlUaW1lb3V0OjVlMyxhdXRvcGxheUhvdmVyUGF1c2U6ITEsYXV0b3BsYXlTcGVlZDohMX0sci5wcm90b3R5cGUuX25leHQ9ZnVuY3Rpb24oaSl7dGhpcy5fY2FsbD10LnNldFRpbWVvdXQoZS5wcm94eSh0aGlzLl9uZXh0LHRoaXMsaSksdGhpcy5fdGltZW91dCooTWF0aC5yb3VuZCh0aGlzLnJlYWQoKS90aGlzLl90aW1lb3V0KSsxKS10aGlzLnJlYWQoKSksdGhpcy5fY29yZS5pcyhcImludGVyYWN0aW5nXCIpfHxuLmhpZGRlbnx8dGhpcy5fY29yZS5uZXh0KGl8fHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlTcGVlZCl9LHIucHJvdG90eXBlLnJlYWQ9ZnVuY3Rpb24oKXtyZXR1cm4obmV3IERhdGUpLmdldFRpbWUoKS10aGlzLl90aW1lfSxyLnByb3RvdHlwZS5wbGF5PWZ1bmN0aW9uKG4saSl7dmFyIHI7dGhpcy5fY29yZS5pcyhcInJvdGF0aW5nXCIpfHx0aGlzLl9jb3JlLmVudGVyKFwicm90YXRpbmdcIiksbj1ufHx0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5VGltZW91dCxyPU1hdGgubWluKHRoaXMuX3RpbWUlKHRoaXMuX3RpbWVvdXR8fG4pLG4pLHRoaXMuX3BhdXNlZD8odGhpcy5fdGltZT10aGlzLnJlYWQoKSx0aGlzLl9wYXVzZWQ9ITEpOnQuY2xlYXJUaW1lb3V0KHRoaXMuX2NhbGwpLHRoaXMuX3RpbWUrPXRoaXMucmVhZCgpJW4tcix0aGlzLl90aW1lb3V0PW4sdGhpcy5fY2FsbD10LnNldFRpbWVvdXQoZS5wcm94eSh0aGlzLl9uZXh0LHRoaXMsaSksbi1yKX0sci5wcm90b3R5cGUuc3RvcD1mdW5jdGlvbigpe3RoaXMuX2NvcmUuaXMoXCJyb3RhdGluZ1wiKSYmKHRoaXMuX3RpbWU9MCx0aGlzLl9wYXVzZWQ9ITAsdC5jbGVhclRpbWVvdXQodGhpcy5fY2FsbCksdGhpcy5fY29yZS5sZWF2ZShcInJvdGF0aW5nXCIpKX0sci5wcm90b3R5cGUucGF1c2U9ZnVuY3Rpb24oKXt0aGlzLl9jb3JlLmlzKFwicm90YXRpbmdcIikmJiF0aGlzLl9wYXVzZWQmJih0aGlzLl90aW1lPXRoaXMucmVhZCgpLHRoaXMuX3BhdXNlZD0hMCx0LmNsZWFyVGltZW91dCh0aGlzLl9jYWxsKSl9LHIucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgZSx0O3RoaXMuc3RvcCgpO2ZvcihlIGluIHRoaXMuX2hhbmRsZXJzKXRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGUsdGhpcy5faGFuZGxlcnNbZV0pO2Zvcih0IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKVwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXNbdF0mJih0aGlzW3RdPW51bGwpfSxlLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuYXV0b3BsYXk9cn0od2luZG93LlplcHRvfHxlLHdpbmRvdyxkb2N1bWVudCksZnVuY3Rpb24oZSx0LG4saSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZnVuY3Rpb24odCl7dGhpcy5fY29yZT10LHRoaXMuX2luaXRpYWxpemVkPSExLHRoaXMuX3BhZ2VzPVtdLHRoaXMuX2NvbnRyb2xzPXt9LHRoaXMuX3RlbXBsYXRlcz1bXSx0aGlzLiRlbGVtZW50PXRoaXMuX2NvcmUuJGVsZW1lbnQsdGhpcy5fb3ZlcnJpZGVzPXtuZXh0OnRoaXMuX2NvcmUubmV4dCxwcmV2OnRoaXMuX2NvcmUucHJldix0bzp0aGlzLl9jb3JlLnRvfSx0aGlzLl9oYW5kbGVycz17XCJwcmVwYXJlZC5vd2wuY2Fyb3VzZWxcIjplLnByb3h5KGZ1bmN0aW9uKHQpe3QubmFtZXNwYWNlJiZ0aGlzLl9jb3JlLnNldHRpbmdzLmRvdHNEYXRhJiZ0aGlzLl90ZW1wbGF0ZXMucHVzaCgnPGRpdiBjbGFzcz1cIicrdGhpcy5fY29yZS5zZXR0aW5ncy5kb3RDbGFzcysnXCI+JytlKHQuY29udGVudCkuZmluZChcIltkYXRhLWRvdF1cIikuYWRkQmFjayhcIltkYXRhLWRvdF1cIikuYXR0cihcImRhdGEtZG90XCIpK1wiPC9kaXY+XCIpfSx0aGlzKSxcImFkZGVkLm93bC5jYXJvdXNlbFwiOmUucHJveHkoZnVuY3Rpb24oZSl7ZS5uYW1lc3BhY2UmJnRoaXMuX2NvcmUuc2V0dGluZ3MuZG90c0RhdGEmJnRoaXMuX3RlbXBsYXRlcy5zcGxpY2UoZS5wb3NpdGlvbiwwLHRoaXMuX3RlbXBsYXRlcy5wb3AoKSl9LHRoaXMpLFwicmVtb3ZlLm93bC5jYXJvdXNlbFwiOmUucHJveHkoZnVuY3Rpb24oZSl7ZS5uYW1lc3BhY2UmJnRoaXMuX2NvcmUuc2V0dGluZ3MuZG90c0RhdGEmJnRoaXMuX3RlbXBsYXRlcy5zcGxpY2UoZS5wb3NpdGlvbiwxKX0sdGhpcyksXCJjaGFuZ2VkLm93bC5jYXJvdXNlbFwiOmUucHJveHkoZnVuY3Rpb24oZSl7ZS5uYW1lc3BhY2UmJlwicG9zaXRpb25cIj09ZS5wcm9wZXJ0eS5uYW1lJiZ0aGlzLmRyYXcoKX0sdGhpcyksXCJpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWxcIjplLnByb3h5KGZ1bmN0aW9uKGUpe2UubmFtZXNwYWNlJiYhdGhpcy5faW5pdGlhbGl6ZWQmJih0aGlzLl9jb3JlLnRyaWdnZXIoXCJpbml0aWFsaXplXCIsbnVsbCxcIm5hdmlnYXRpb25cIiksdGhpcy5pbml0aWFsaXplKCksdGhpcy51cGRhdGUoKSx0aGlzLmRyYXcoKSx0aGlzLl9pbml0aWFsaXplZD0hMCx0aGlzLl9jb3JlLnRyaWdnZXIoXCJpbml0aWFsaXplZFwiLG51bGwsXCJuYXZpZ2F0aW9uXCIpKX0sdGhpcyksXCJyZWZyZXNoZWQub3dsLmNhcm91c2VsXCI6ZS5wcm94eShmdW5jdGlvbihlKXtlLm5hbWVzcGFjZSYmdGhpcy5faW5pdGlhbGl6ZWQmJih0aGlzLl9jb3JlLnRyaWdnZXIoXCJyZWZyZXNoXCIsbnVsbCxcIm5hdmlnYXRpb25cIiksdGhpcy51cGRhdGUoKSx0aGlzLmRyYXcoKSx0aGlzLl9jb3JlLnRyaWdnZXIoXCJyZWZyZXNoZWRcIixudWxsLFwibmF2aWdhdGlvblwiKSl9LHRoaXMpfSx0aGlzLl9jb3JlLm9wdGlvbnM9ZS5leHRlbmQoe30sci5EZWZhdWx0cyx0aGlzLl9jb3JlLm9wdGlvbnMpLHRoaXMuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpfTtyLkRlZmF1bHRzPXtuYXY6ITEsbmF2VGV4dDpbJzxzcGFuIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiPiYjeDIwMzk7PC9zcGFuPicsJzxzcGFuIGFyaWEtbGFiZWw9XCJOZXh0XCI+JiN4MjAzYTs8L3NwYW4+J10sbmF2U3BlZWQ6ITEsbmF2RWxlbWVudDonYnV0dG9uIHR5cGU9XCJidXR0b25cIiByb2xlPVwicHJlc2VudGF0aW9uXCInLG5hdkNvbnRhaW5lcjohMSxuYXZDb250YWluZXJDbGFzczpcIm93bC1uYXZcIixuYXZDbGFzczpbXCJvd2wtcHJldlwiLFwib3dsLW5leHRcIl0sc2xpZGVCeToxLGRvdENsYXNzOlwib3dsLWRvdFwiLGRvdHNDbGFzczpcIm93bC1kb3RzXCIsZG90czohMCxkb3RzRWFjaDohMSxkb3RzRGF0YTohMSxkb3RzU3BlZWQ6ITEsZG90c0NvbnRhaW5lcjohMX0sci5wcm90b3R5cGUuaW5pdGlhbGl6ZT1mdW5jdGlvbigpe3ZhciB0LG49dGhpcy5fY29yZS5zZXR0aW5nczt0aGlzLl9jb250cm9scy4kcmVsYXRpdmU9KG4ubmF2Q29udGFpbmVyP2Uobi5uYXZDb250YWluZXIpOmUoXCI8ZGl2PlwiKS5hZGRDbGFzcyhuLm5hdkNvbnRhaW5lckNsYXNzKS5hcHBlbmRUbyh0aGlzLiRlbGVtZW50KSkuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSx0aGlzLl9jb250cm9scy4kcHJldmlvdXM9ZShcIjxcIituLm5hdkVsZW1lbnQrXCI+XCIpLmFkZENsYXNzKG4ubmF2Q2xhc3NbMF0pLmh0bWwobi5uYXZUZXh0WzBdKS5wcmVwZW5kVG8odGhpcy5fY29udHJvbHMuJHJlbGF0aXZlKS5vbihcImNsaWNrXCIsZS5wcm94eShmdW5jdGlvbihlKXt0aGlzLnByZXYobi5uYXZTcGVlZCl9LHRoaXMpKSx0aGlzLl9jb250cm9scy4kbmV4dD1lKFwiPFwiK24ubmF2RWxlbWVudCtcIj5cIikuYWRkQ2xhc3Mobi5uYXZDbGFzc1sxXSkuaHRtbChuLm5hdlRleHRbMV0pLmFwcGVuZFRvKHRoaXMuX2NvbnRyb2xzLiRyZWxhdGl2ZSkub24oXCJjbGlja1wiLGUucHJveHkoZnVuY3Rpb24oZSl7dGhpcy5uZXh0KG4ubmF2U3BlZWQpfSx0aGlzKSksbi5kb3RzRGF0YXx8KHRoaXMuX3RlbXBsYXRlcz1bZSgnPGJ1dHRvbiByb2xlPVwiYnV0dG9uXCI+JykuYWRkQ2xhc3Mobi5kb3RDbGFzcykuYXBwZW5kKGUoXCI8c3Bhbj5cIikpLnByb3AoXCJvdXRlckhUTUxcIildKSx0aGlzLl9jb250cm9scy4kYWJzb2x1dGU9KG4uZG90c0NvbnRhaW5lcj9lKG4uZG90c0NvbnRhaW5lcik6ZShcIjxkaXY+XCIpLmFkZENsYXNzKG4uZG90c0NsYXNzKS5hcHBlbmRUbyh0aGlzLiRlbGVtZW50KSkuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSx0aGlzLl9jb250cm9scy4kYWJzb2x1dGUub24oXCJjbGlja1wiLFwiYnV0dG9uXCIsZS5wcm94eShmdW5jdGlvbih0KXt2YXIgaT1lKHQudGFyZ2V0KS5wYXJlbnQoKS5pcyh0aGlzLl9jb250cm9scy4kYWJzb2x1dGUpP2UodC50YXJnZXQpLmluZGV4KCk6ZSh0LnRhcmdldCkucGFyZW50KCkuaW5kZXgoKTt0LnByZXZlbnREZWZhdWx0KCksdGhpcy50byhpLG4uZG90c1NwZWVkKX0sdGhpcykpO2Zvcih0IGluIHRoaXMuX292ZXJyaWRlcyl0aGlzLl9jb3JlW3RdPWUucHJveHkodGhpc1t0XSx0aGlzKX0sci5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3ZhciBlLHQsbixpLHI7cj10aGlzLl9jb3JlLnNldHRpbmdzO2ZvcihlIGluIHRoaXMuX2hhbmRsZXJzKXRoaXMuJGVsZW1lbnQub2ZmKGUsdGhpcy5faGFuZGxlcnNbZV0pO2Zvcih0IGluIHRoaXMuX2NvbnRyb2xzKVwiJHJlbGF0aXZlXCI9PT10JiZyLm5hdkNvbnRhaW5lcj90aGlzLl9jb250cm9sc1t0XS5odG1sKFwiXCIpOnRoaXMuX2NvbnRyb2xzW3RdLnJlbW92ZSgpO2ZvcihpIGluIHRoaXMub3ZlcmlkZXMpdGhpcy5fY29yZVtpXT10aGlzLl9vdmVycmlkZXNbaV07Zm9yKG4gaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpXCJmdW5jdGlvblwiIT10eXBlb2YgdGhpc1tuXSYmKHRoaXNbbl09bnVsbCl9LHIucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbigpe3ZhciBlLHQsbixpPXRoaXMuX2NvcmUuY2xvbmVzKCkubGVuZ3RoLzIscj1pK3RoaXMuX2NvcmUuaXRlbXMoKS5sZW5ndGgsbz10aGlzLl9jb3JlLm1heGltdW0oITApLHM9dGhpcy5fY29yZS5zZXR0aW5ncyxhPXMuY2VudGVyfHxzLmF1dG9XaWR0aHx8cy5kb3RzRGF0YT8xOnMuZG90c0VhY2h8fHMuaXRlbXM7aWYoXCJwYWdlXCIhPT1zLnNsaWRlQnkmJihzLnNsaWRlQnk9TWF0aC5taW4ocy5zbGlkZUJ5LHMuaXRlbXMpKSxzLmRvdHN8fFwicGFnZVwiPT1zLnNsaWRlQnkpZm9yKHRoaXMuX3BhZ2VzPVtdLGU9aSx0PTAsbj0wO2U8cjtlKyspe2lmKHQ+PWF8fDA9PT10KXtpZih0aGlzLl9wYWdlcy5wdXNoKHtzdGFydDpNYXRoLm1pbihvLGUtaSksZW5kOmUtaSthLTF9KSxNYXRoLm1pbihvLGUtaSk9PT1vKWJyZWFrO3Q9MCwrK259dCs9dGhpcy5fY29yZS5tZXJnZXJzKHRoaXMuX2NvcmUucmVsYXRpdmUoZSkpfX0sci5wcm90b3R5cGUuZHJhdz1mdW5jdGlvbigpe3ZhciB0LG49dGhpcy5fY29yZS5zZXR0aW5ncyxpPXRoaXMuX2NvcmUuaXRlbXMoKS5sZW5ndGg8PW4uaXRlbXMscj10aGlzLl9jb3JlLnJlbGF0aXZlKHRoaXMuX2NvcmUuY3VycmVudCgpKSxvPW4ubG9vcHx8bi5yZXdpbmQ7dGhpcy5fY29udHJvbHMuJHJlbGF0aXZlLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwhbi5uYXZ8fGkpLG4ubmF2JiYodGhpcy5fY29udHJvbHMuJHByZXZpb3VzLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwhbyYmcjw9dGhpcy5fY29yZS5taW5pbXVtKCEwKSksdGhpcy5fY29udHJvbHMuJG5leHQudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLCFvJiZyPj10aGlzLl9jb3JlLm1heGltdW0oITApKSksdGhpcy5fY29udHJvbHMuJGFic29sdXRlLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwhbi5kb3RzfHxpKSxuLmRvdHMmJih0PXRoaXMuX3BhZ2VzLmxlbmd0aC10aGlzLl9jb250cm9scy4kYWJzb2x1dGUuY2hpbGRyZW4oKS5sZW5ndGgsbi5kb3RzRGF0YSYmMCE9PXQ/dGhpcy5fY29udHJvbHMuJGFic29sdXRlLmh0bWwodGhpcy5fdGVtcGxhdGVzLmpvaW4oXCJcIikpOnQ+MD90aGlzLl9jb250cm9scy4kYWJzb2x1dGUuYXBwZW5kKG5ldyBBcnJheSh0KzEpLmpvaW4odGhpcy5fdGVtcGxhdGVzWzBdKSk6dDwwJiZ0aGlzLl9jb250cm9scy4kYWJzb2x1dGUuY2hpbGRyZW4oKS5zbGljZSh0KS5yZW1vdmUoKSx0aGlzLl9jb250cm9scy4kYWJzb2x1dGUuZmluZChcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksdGhpcy5fY29udHJvbHMuJGFic29sdXRlLmNoaWxkcmVuKCkuZXEoZS5pbkFycmF5KHRoaXMuY3VycmVudCgpLHRoaXMuX3BhZ2VzKSkuYWRkQ2xhc3MoXCJhY3RpdmVcIikpfSxyLnByb3RvdHlwZS5vblRyaWdnZXI9ZnVuY3Rpb24odCl7dmFyIG49dGhpcy5fY29yZS5zZXR0aW5nczt0LnBhZ2U9e2luZGV4OmUuaW5BcnJheSh0aGlzLmN1cnJlbnQoKSx0aGlzLl9wYWdlcyksY291bnQ6dGhpcy5fcGFnZXMubGVuZ3RoLHNpemU6biYmKG4uY2VudGVyfHxuLmF1dG9XaWR0aHx8bi5kb3RzRGF0YT8xOm4uZG90c0VhY2h8fG4uaXRlbXMpfX0sci5wcm90b3R5cGUuY3VycmVudD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX2NvcmUucmVsYXRpdmUodGhpcy5fY29yZS5jdXJyZW50KCkpO3JldHVybiBlLmdyZXAodGhpcy5fcGFnZXMsZS5wcm94eShmdW5jdGlvbihlLG4pe3JldHVybiBlLnN0YXJ0PD10JiZlLmVuZD49dH0sdGhpcykpLnBvcCgpfSxyLnByb3RvdHlwZS5nZXRQb3NpdGlvbj1mdW5jdGlvbih0KXt2YXIgbixpLHI9dGhpcy5fY29yZS5zZXR0aW5ncztyZXR1cm5cInBhZ2VcIj09ci5zbGlkZUJ5PyhuPWUuaW5BcnJheSh0aGlzLmN1cnJlbnQoKSx0aGlzLl9wYWdlcyksaT10aGlzLl9wYWdlcy5sZW5ndGgsdD8rK246LS1uLG49dGhpcy5fcGFnZXNbKG4laStpKSVpXS5zdGFydCk6KG49dGhpcy5fY29yZS5yZWxhdGl2ZSh0aGlzLl9jb3JlLmN1cnJlbnQoKSksaT10aGlzLl9jb3JlLml0ZW1zKCkubGVuZ3RoLHQ/bis9ci5zbGlkZUJ5Om4tPXIuc2xpZGVCeSksbn0sci5wcm90b3R5cGUubmV4dD1mdW5jdGlvbih0KXtlLnByb3h5KHRoaXMuX292ZXJyaWRlcy50byx0aGlzLl9jb3JlKSh0aGlzLmdldFBvc2l0aW9uKCEwKSx0KX0sci5wcm90b3R5cGUucHJldj1mdW5jdGlvbih0KXtlLnByb3h5KHRoaXMuX292ZXJyaWRlcy50byx0aGlzLl9jb3JlKSh0aGlzLmdldFBvc2l0aW9uKCExKSx0KX0sci5wcm90b3R5cGUudG89ZnVuY3Rpb24odCxuLGkpe3ZhciByOyFpJiZ0aGlzLl9wYWdlcy5sZW5ndGg/KHI9dGhpcy5fcGFnZXMubGVuZ3RoLGUucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLHRoaXMuX2NvcmUpKHRoaXMuX3BhZ2VzWyh0JXIrciklcl0uc3RhcnQsbikpOmUucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLHRoaXMuX2NvcmUpKHQsbil9LGUuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5OYXZpZ2F0aW9uPXJ9KHdpbmRvdy5aZXB0b3x8ZSx3aW5kb3csZG9jdW1lbnQpLGZ1bmN0aW9uKGUsdCxuLGkpe1widXNlIHN0cmljdFwiO3ZhciByPWZ1bmN0aW9uKG4pe3RoaXMuX2NvcmU9bix0aGlzLl9oYXNoZXM9e30sdGhpcy4kZWxlbWVudD10aGlzLl9jb3JlLiRlbGVtZW50LHRoaXMuX2hhbmRsZXJzPXtcImluaXRpYWxpemVkLm93bC5jYXJvdXNlbFwiOmUucHJveHkoZnVuY3Rpb24obil7bi5uYW1lc3BhY2UmJlwiVVJMSGFzaFwiPT09dGhpcy5fY29yZS5zZXR0aW5ncy5zdGFydFBvc2l0aW9uJiZlKHQpLnRyaWdnZXIoXCJoYXNoY2hhbmdlLm93bC5uYXZpZ2F0aW9uXCIpfSx0aGlzKSxcInByZXBhcmVkLm93bC5jYXJvdXNlbFwiOmUucHJveHkoZnVuY3Rpb24odCl7aWYodC5uYW1lc3BhY2Upe3ZhciBuPWUodC5jb250ZW50KS5maW5kKFwiW2RhdGEtaGFzaF1cIikuYWRkQmFjayhcIltkYXRhLWhhc2hdXCIpLmF0dHIoXCJkYXRhLWhhc2hcIik7aWYoIW4pcmV0dXJuO3RoaXMuX2hhc2hlc1tuXT10LmNvbnRlbnR9fSx0aGlzKSxcImNoYW5nZWQub3dsLmNhcm91c2VsXCI6ZS5wcm94eShmdW5jdGlvbihuKXtpZihuLm5hbWVzcGFjZSYmXCJwb3NpdGlvblwiPT09bi5wcm9wZXJ0eS5uYW1lKXt2YXIgaT10aGlzLl9jb3JlLml0ZW1zKHRoaXMuX2NvcmUucmVsYXRpdmUodGhpcy5fY29yZS5jdXJyZW50KCkpKSxyPWUubWFwKHRoaXMuX2hhc2hlcyxmdW5jdGlvbihlLHQpe3JldHVybiBlPT09aT90Om51bGx9KS5qb2luKCk7aWYoIXJ8fHQubG9jYXRpb24uaGFzaC5zbGljZSgxKT09PXIpcmV0dXJuO3QubG9jYXRpb24uaGFzaD1yfX0sdGhpcyl9LHRoaXMuX2NvcmUub3B0aW9ucz1lLmV4dGVuZCh7fSxyLkRlZmF1bHRzLHRoaXMuX2NvcmUub3B0aW9ucyksdGhpcy4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyksZSh0KS5vbihcImhhc2hjaGFuZ2Uub3dsLm5hdmlnYXRpb25cIixlLnByb3h5KGZ1bmN0aW9uKGUpe3ZhciBuPXQubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkscj10aGlzLl9jb3JlLiRzdGFnZS5jaGlsZHJlbigpLG89dGhpcy5faGFzaGVzW25dJiZyLmluZGV4KHRoaXMuX2hhc2hlc1tuXSk7byE9PWkmJm8hPT10aGlzLl9jb3JlLmN1cnJlbnQoKSYmdGhpcy5fY29yZS50byh0aGlzLl9jb3JlLnJlbGF0aXZlKG8pLCExLCEwKX0sdGhpcykpfTtyLkRlZmF1bHRzPXtVUkxoYXNoTGlzdGVuZXI6ITF9LHIucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgbixpO2UodCkub2ZmKFwiaGFzaGNoYW5nZS5vd2wubmF2aWdhdGlvblwiKTtmb3IobiBpbiB0aGlzLl9oYW5kbGVycyl0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihuLHRoaXMuX2hhbmRsZXJzW25dKTtmb3IoaSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSlcImZ1bmN0aW9uXCIhPXR5cGVvZiB0aGlzW2ldJiYodGhpc1tpXT1udWxsKX0sZS5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLkhhc2g9cn0od2luZG93LlplcHRvfHxlLHdpbmRvdyxkb2N1bWVudCksZnVuY3Rpb24oZSx0LG4saSl7ZnVuY3Rpb24gcih0LG4pe3ZhciByPSExLG89dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpO3JldHVybiBlLmVhY2goKHQrXCIgXCIrYS5qb2luKG8rXCIgXCIpK28pLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe2lmKHNbdF0hPT1pKXJldHVybiByPSFufHx0LCExfSkscn1mdW5jdGlvbiBvKGUpe3JldHVybiByKGUsITApfXZhciBzPWUoXCI8c3VwcG9ydD5cIikuZ2V0KDApLnN0eWxlLGE9XCJXZWJraXQgTW96IE8gbXNcIi5zcGxpdChcIiBcIiksbD17dHJhbnNpdGlvbjp7ZW5kOntXZWJraXRUcmFuc2l0aW9uOlwid2Via2l0VHJhbnNpdGlvbkVuZFwiLE1velRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCIsT1RyYW5zaXRpb246XCJvVHJhbnNpdGlvbkVuZFwiLHRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCJ9fSxhbmltYXRpb246e2VuZDp7V2Via2l0QW5pbWF0aW9uOlwid2Via2l0QW5pbWF0aW9uRW5kXCIsTW96QW5pbWF0aW9uOlwiYW5pbWF0aW9uZW5kXCIsT0FuaW1hdGlvbjpcIm9BbmltYXRpb25FbmRcIixhbmltYXRpb246XCJhbmltYXRpb25lbmRcIn19fSx1PXtjc3N0cmFuc2Zvcm1zOmZ1bmN0aW9uKCl7cmV0dXJuISFyKFwidHJhbnNmb3JtXCIpfSxjc3N0cmFuc2Zvcm1zM2Q6ZnVuY3Rpb24oKXtyZXR1cm4hIXIoXCJwZXJzcGVjdGl2ZVwiKX0sY3NzdHJhbnNpdGlvbnM6ZnVuY3Rpb24oKXtyZXR1cm4hIXIoXCJ0cmFuc2l0aW9uXCIpfSxjc3NhbmltYXRpb25zOmZ1bmN0aW9uKCl7cmV0dXJuISFyKFwiYW5pbWF0aW9uXCIpfX07dS5jc3N0cmFuc2l0aW9ucygpJiYoZS5zdXBwb3J0LnRyYW5zaXRpb249bmV3IFN0cmluZyhvKFwidHJhbnNpdGlvblwiKSksZS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kPWwudHJhbnNpdGlvbi5lbmRbZS5zdXBwb3J0LnRyYW5zaXRpb25dKSx1LmNzc2FuaW1hdGlvbnMoKSYmKGUuc3VwcG9ydC5hbmltYXRpb249bmV3IFN0cmluZyhvKFwiYW5pbWF0aW9uXCIpKSxlLnN1cHBvcnQuYW5pbWF0aW9uLmVuZD1sLmFuaW1hdGlvbi5lbmRbZS5zdXBwb3J0LmFuaW1hdGlvbl0pLHUuY3NzdHJhbnNmb3JtcygpJiYoZS5zdXBwb3J0LnRyYW5zZm9ybT1uZXcgU3RyaW5nKG8oXCJ0cmFuc2Zvcm1cIikpLGUuc3VwcG9ydC50cmFuc2Zvcm0zZD11LmNzc3RyYW5zZm9ybXMzZCgpKX0od2luZG93LlplcHRvfHxlLHdpbmRvdyxkb2N1bWVudCl9KS5jYWxsKHQsbigzKSxuKDMpKX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0W1wiZGVmYXVsdFwiXT1bXCJpbml0aWFsaXplXCIsXCJpbml0aWFsaXplZFwiLFwicmVzaXplXCIsXCJyZXNpemVkXCIsXCJyZWZyZXNoXCIsXCJyZWZyZXNoZWRcIixcInVwZGF0ZVwiLFwidXBkYXRlZFwiLFwiZHJhZ1wiLFwiZHJhZ2dlZFwiLFwidHJhbnNsYXRlXCIsXCJ0cmFuc2xhdGVkXCIsXCJ0b1wiLFwiY2hhbmdlZFwiXX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLFtuKFwic3BhblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6ZS5zaG93UHJldixleHByZXNzaW9uOlwic2hvd1ByZXZcIn1dLGF0dHJzOntpZDplLnByZXZIYW5kbGVyfX0sW2UuX3QoXCJwcmV2XCIpXSwyKSxlLl92KFwiIFwiKSxuKFwiZGl2XCIse1wiY2xhc3NcIjpbXCJvd2wtY2Fyb3VzZWxcIixcIm93bC10aGVtZVwiXSxhdHRyczp7aWQ6ZS5lbGVtZW50SGFuZGxlfX0sW2UuX3QoXCJkZWZhdWx0XCIpXSwyKSxlLl92KFwiIFwiKSxuKFwic3BhblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6ZS5zaG93TmV4dCxleHByZXNzaW9uOlwic2hvd05leHRcIn1dLGF0dHJzOntpZDplLm5leHRIYW5kbGVyfX0sW2UuX3QoXCJuZXh0XCIpXSwyKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fV0pfSk7IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTItMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1lvdXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2MzODliNmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjdiOWRiODUyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0yLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Zb3VyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjMzg5YjZjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0yLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Zb3VyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjMzg5YjZjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY2Nlc3NpYmlsaXR5KCkge1xuXG59O1xuXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZnVuY3Rpb24gYW5jaG9yKCkge1xuXG4gIC8vIGRpcmVjdCBicm93c2VyIHRvIHRvcCByaWdodCBhd2F5IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ0ODk5MDA4L2hvdy10by1uYXZpZ2F0ZS10by1hbm90aGVyLXBhZ2Utd2l0aC1hLXNtb290aC1zY3JvbGwtb24tYS1zcGVjaWZpYy1pZFxuICAvLyBkaXJlY3QgYnJvd3NlciB0byB0b3AgcmlnaHQgYXdheVxuICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpXG4gICAgICBzY3JvbGwoMCwwKTtcbiAgLy8gdGFrZXMgY2FyZSBvZiBzb21lIGJyb3dzZXJzIGlzc3VlXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtzY3JvbGwoMCwwKTt9LDEpO1xuXG4gICQoZnVuY3Rpb24oKXtcbiAgLy95b3VyIGN1cnJlbnQgY2xpY2sgZnVuY3Rpb25cbiAgJCgnLnNjcm9sbCcpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6JCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wICsgJ3B4J1xuICAgICAgfSwxMDAwLCdzd2luZycpO1xuICB9KTtcblxuICAvLyBpZiB3ZSBoYXZlIGFuY2hvciBvbiB0aGUgdXJsIChjYWxsaW5nIGZyb20gb3RoZXIgcGFnZSlcbiAgaWYod2luZG93LmxvY2F0aW9uLmhhc2gpe1xuICAgICAgLy8gc21vb3RoIHNjcm9sbCB0byB0aGUgYW5jaG9yIGlkXG4gICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6JCh3aW5kb3cubG9jYXRpb24uaGFzaCkub2Zmc2V0KCkudG9wICsgJ3B4J1xuICAgICAgICAgIH0sMTAwMCwnc3dpbmcnKTtcbiAgICAgIH1cbiAgfSk7XG5cbn07IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IGNhcm91c2VsIGZyb20gJ3Z1ZS1vd2wtY2Fyb3VzZWwnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZnVuY3Rpb24gY2Fyb3VzZWxzKCkge1xuXG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS0xJykubGVuZ3RoKSB7XG4gICAgbmV3IFZ1ZSh7XG4gICAgICBlbDogJyNjYXJvdXNlbC1nYWxsZXJ5LTEnLFxuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBjYXJvdXNlbFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS0yJykubGVuZ3RoKSB7XG4gICAgbmV3IFZ1ZSh7XG4gICAgICBlbDogJyNjYXJvdXNlbC1nYWxsZXJ5LTInLFxuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBjYXJvdXNlbFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS0zJykubGVuZ3RoKSB7XG4gICAgbmV3IFZ1ZSh7XG4gICAgICBlbDogJyNjYXJvdXNlbC1nYWxsZXJ5LTMnLFxuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBjYXJvdXNlbFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS00JykubGVuZ3RoKSB7XG4gICAgbmV3IFZ1ZSh7XG4gICAgICBlbDogJyNjYXJvdXNlbC1nYWxsZXJ5LTQnLFxuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBjYXJvdXNlbFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS01JykubGVuZ3RoKSB7XG4gICAgbmV3IFZ1ZSh7XG4gICAgICBlbDogJyNjYXJvdXNlbC1nYWxsZXJ5LTUnLFxuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBjYXJvdXNlbFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS02JykubGVuZ3RoKSB7XG4gICAgbmV3IFZ1ZSh7XG4gICAgICBlbDogJyNjYXJvdXNlbC1nYWxsZXJ5LTYnLFxuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBjYXJvdXNlbFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS03JykubGVuZ3RoKSB7XG4gICAgbmV3IFZ1ZSh7XG4gICAgICBlbDogJyNjYXJvdXNlbC1nYWxsZXJ5LTcnLFxuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBjYXJvdXNlbFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS04JykubGVuZ3RoKSB7XG4gICAgbmV3IFZ1ZSh7XG4gICAgICBlbDogJyNjYXJvdXNlbC1nYWxsZXJ5LTgnLFxuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBjYXJvdXNlbFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS05JykubGVuZ3RoKSB7XG4gICAgbmV3IFZ1ZSh7XG4gICAgICBlbDogJyNjYXJvdXNlbC1nYWxsZXJ5LTknLFxuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBjYXJvdXNlbFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS0xMCcpLmxlbmd0aCkge1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjY2Fyb3VzZWwtZ2FsbGVyeS0xMCcsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGNhcm91c2VsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS0xMScpLmxlbmd0aCkge1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjY2Fyb3VzZWwtZ2FsbGVyeS0xMScsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGNhcm91c2VsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS0xMicpLmxlbmd0aCkge1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjY2Fyb3VzZWwtZ2FsbGVyeS0xMicsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGNhcm91c2VsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS0xMycpLmxlbmd0aCkge1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjY2Fyb3VzZWwtZ2FsbGVyeS0xMycsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGNhcm91c2VsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS0xNCcpLmxlbmd0aCkge1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjY2Fyb3VzZWwtZ2FsbGVyeS0xNCcsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGNhcm91c2VsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS0xNScpLmxlbmd0aCkge1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjY2Fyb3VzZWwtZ2FsbGVyeS0xNScsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGNhcm91c2VsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS0xNicpLmxlbmd0aCkge1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjY2Fyb3VzZWwtZ2FsbGVyeS0xNicsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGNhcm91c2VsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS0xNycpLmxlbmd0aCkge1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjY2Fyb3VzZWwtZ2FsbGVyeS0xNycsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGNhcm91c2VsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS0xOCcpLmxlbmd0aCkge1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjY2Fyb3VzZWwtZ2FsbGVyeS0xOCcsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGNhcm91c2VsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS0xOScpLmxlbmd0aCkge1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjY2Fyb3VzZWwtZ2FsbGVyeS0xOScsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGNhcm91c2VsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIGlmICgkKCcjY2Fyb3VzZWwtZ2FsbGVyeS0yMCcpLmxlbmd0aCkge1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjY2Fyb3VzZWwtZ2FsbGVyeS0yMCcsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGNhcm91c2VsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCQoJyNwdWJsaWNhdGlvbi1ibG9jaycpLmxlbmd0aCkge1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjcHVibGljYXRpb24tYmxvY2snLFxuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBjYXJvdXNlbFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjcHVibGljYXRpb24taW5mb2dyYXBoaWMtZ2FsbGVyeScpLmxlbmd0aCkge1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjcHVibGljYXRpb24taW5mb2dyYXBoaWMtZ2FsbGVyeScsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGNhcm91c2VsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCQoJyNwdWJsaWNhdGlvbi12aWRlby1nYWxsZXJ5JykubGVuZ3RoKSB7XG4gICAgbmV3IFZ1ZSh7XG4gICAgICBlbDogJyNwdWJsaWNhdGlvbi12aWRlby1nYWxsZXJ5JyxcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgY2Fyb3VzZWxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbiAgaWYgKCQoJyNwdWJsaWNhdGlvbi1yZWxhdGVkLWdhbGxlcnknKS5sZW5ndGgpIHtcbiAgICBuZXcgVnVlKHtcbiAgICAgIGVsOiAnI3B1YmxpY2F0aW9uLXJlbGF0ZWQtZ2FsbGVyeScsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGNhcm91c2VsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIGlmICgkKCcjY2Fyb3VzZWwtY2FzZXN0dWRpZXMnKS5sZW5ndGgpIHtcbiAgICBuZXcgVnVlKHtcbiAgICAgIGVsOiAnI2Nhcm91c2VsLWNhc2VzdHVkaWVzJyxcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgY2Fyb3VzZWxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuXG4gIHZhciBhbW91bnQgPSAkKFwiLnJlZFwiKS5sZW5ndGg7XG4gICQoJ2J1dHRvbi5vd2wtZG90JykuYXR0cignYXJpYS1sYWJlbCcsICdDYXJvdXNlbCBOYXZpZ2F0aW9uICsgYW1vdW50Jyk7XG4gICQoJ2J1dHRvbi5wc3dwX19idXR0b24nKS5hdHRyKCdhcmlhLWxhYmVsJywgJ0Z1bGxzY3JlZW4gQ2Fyb3VzZWwgTmF2aWdhdGlvbiArIGFtb3VudCcpO1xuXG59IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgQnVsbWFBY2NvcmRpb24sIEJ1bG1hQWNjb3JkaW9uSXRlbSB9IGZyb20gXCJ2dWUtYnVsbWEtYWNjb3JkaW9uXCI7XG5pbXBvcnQgc2FsIGZyb20gJ3NhbC5qcydcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2goKSB7XG4gICQoJ2lucHV0LmlucHV0LnNlYXJjaCcpLm9uKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24oKXtcbiAgICAkKCcuc2hvdy1pZi1mb2N1cycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAkKCcuaGlkZS1pZi1mb2N1cycpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgfSlcblxuICAkKCdpbnB1dC5pbnB1dC5zZWFyY2gnKS5vbihcImZvY3Vzb3V0XCIsIGZ1bmN0aW9uKCl7XG4gICAgJCgnLnNob3ctaWYtZm9jdXMnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgJCgnLmhpZGUtaWYtZm9jdXMnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIH0pXG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gcGFnZWxvYWQoKSB7XG5cbiAgdmFyIHNhbEFuaW1hdGlvbiA9IHNhbCh7XG4gICAgdGhyZXNob2xkOiAuMDUsXG4gIH0pO1xuXG4gICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcblxuICAgICQoJy5wYWdlbG9hZGVyJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG5cbiAgICB2YXIgJHRvcCA9ICQoXCIuc3RpY2t5LWhlYWRlclwiKS5nZXQoMCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyggJHRvcCApO1xuXG4gICAgaWYgKCR0b3AudG9wICE9IDApIHtcbiAgICAgIC8vICQoXCIuc3RpY2t5LWhlYWRlciwgLnN1Ym5hdlwiKS5hZGRDbGFzcygnbm90LXRvcCcpO1xuICAgICAgLy8gJChcImh0bWxcIikuYWRkQ2xhc3MoJ2ZpeG5hdicpLnJlbW92ZUNsYXNzKCd1bmZpeG5hdicpO1xuICAgICAgc2FsQW5pbWF0aW9uLmRpc2FibGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICBzYWxBbmltYXRpb24uZW5hYmxlKClcbiAgICB9XG5cbiAgfSk7XG5cblxuICAvLyBidXR0b24gZHJvcGRvd25cbiAgdmFyIGJ1dHRvbiA9ICQoJy5idXR0b24tZHJvcGRvd24nKTtcbiAgdmFyIGRyb3Bkb3duID0gJCgnLmRyb3Bkb3duLW1lbnUnKTtcblxuICBidXR0b24ub24oICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBkcm9wZG93bi50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcbiAgfSk7XG5cblxuICAvLyByZWFkIG1vcmVcbiAgJCgnYS5yZWFkLW1vcmUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcucmVhZG1vcmUnKS50b2dnbGVDbGFzcygnZC1pbmxpbmUnKTtcbiAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5lbGlwc2lzJykudG9nZ2xlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3JldmVhbCcpO1xuICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ3JldmVhbCcpKXtcbiAgICAgICQodGhpcykudGV4dCgnUmVhZCBMZXNzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcykudGV4dCgnUmVhZCBNb3JlJyk7XG4gICAgfVxuICB9KVxuXG5cbiAgLy8gYWRkIGNsb3NlIHF1b3RlXG4gICQoXCIud3lzaXd5Z1wiKS5maW5kKFwiYmxvY2txdW90ZSBwXCIpLmFwcGVuZChcIjxzcGFuPuKAnTwvc3Bhbj5cIik7XG5cbiAgLy8gc2hvdyBjYXB0aW9uXG4gICQoJ2Euc2hvdy1jYXB0aW9uJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLmZpbmQoJy5pbmZvJykucmVtb3ZlQ2xhc3MoJ29wYWNpdHktMTAwJykuYWRkQ2xhc3MoJ29wYWNpdHktMCcpO1xuICAgICQodGhpcykuZmluZCgnLmNhcHRpb24nKS5yZW1vdmVDbGFzcygnb3BhY2l0eS0wJykuYWRkQ2xhc3MoJ29wYWNpdHktMTAwJyk7XG4gIH0pO1xuICAkKCdhLnNob3ctY2FwdGlvbicpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5maW5kKCcuaW5mbycpLnJlbW92ZUNsYXNzKCdvcGFjaXR5LTAnKS5hZGRDbGFzcygnb3BhY2l0eS0xMDAnKTtcbiAgICAkKHRoaXMpLmZpbmQoJy5jYXB0aW9uJykucmVtb3ZlQ2xhc3MoJ29wYWNpdHktMTAwJykuYWRkQ2xhc3MoJ29wYWNpdHktMCcpO1xuICB9KTtcbiAgLy8gYWRkIGVsZW1lbnQgZm9yIGNhcHRpb25cbiAgJCgnLndwLWNhcHRpb24tdGV4dCcpLnBhcmVudCgpLmFwcGVuZCggXCI8ZGl2IGNsYXNzPSdjYXB0aW9uaW5mbyc+aTwvZGl2PlwiIClcblxuICAkKCcuY2FwdGlvbmluZm8nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ3Aud3AtY2FwdGlvbi10ZXh0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KVxuICAkKCcuY2FwdGlvbmluZm8nKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ3Aud3AtY2FwdGlvbi10ZXh0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KVxuXG4gIC8vIGFjdGl2YXRlIGJrZyBpbWcgY2xhc3NcbiAgLy8gJCgnYS5ia2ctaW1nLWxpbmsnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAvLyAgICQodGhpcykucGFyZW50c1VudGlsKCkuZmluZCgnLmJrZy1pbWcnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gIC8vIH0pO1xuICAvLyAkKCdhLmJrZy1pbWctbGluaycpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gIC8vICAgJCh0aGlzKS5wYXJlbnRzVW50aWwoKS5maW5kKCcuYmtnLWltZycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgLy8gfSk7XG5cblxuICAvLyBhZGQgbGF6eSBsb2FkIHRvIGltYWdlIGluIHd5c2l3eWdcbiAgJCgnLnd5c2l3eWcgaW1nLCBpZnJhbWUnKS5hZGRDbGFzcygnbGF6eWxvYWQnKTtcblxuICAvLyBhZGQgYnVsbWEgc3R5bGUgdG8gdGFibGVcbiAgJCgnLnRhYmxlcHJlc3MsIHRhYmxlJykuYWRkQ2xhc3MoJ3RhYmxlIGlzLWJvcmRlcmVkIGlzLXN0cmlwZWQgaXMtbmFycm93IGlzLWhvdmVyYWJsZSBpcy1mdWxsd2lkdGgnKTtcblxuICAkKCcjYXJ0aWNsZXMnKS5vbignY2xpY2snLCAnI2xvYWQtb2xkZXItcG9zdHMnLCBmdW5jdGlvbihlKSB7XG4gICAgICAvLyBwcmV2ZW50IG5ldyBwYWdlIGxvYWRcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIHN0b3JlIG5leHQgcGFnZSBudW1iZXJcbiAgICAgIHZhciBuZXh0X3BhZ2UgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgICAgIC8vIHJlbW92ZSBvbGRlciBwb3N0cyBidXR0b24gZnJvbSBET01cbiAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAvLyBhamF4IG9sZGVyIHBvc3RzIGJlbG93IGV4aXN0aW5nIHBvc3RzXG4gICAgICAkKCcjYXJ0aWNsZXMnKS5hcHBlbmQoICQoJzxzZWN0aW9uIC8+JykubG9hZChuZXh0X3BhZ2UgKyAnICNhcnRpY2xlcycpICk7XG4gIH0pO1xuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWNjb3JkaW9ucygpIHtcblxuICBpZiAoJCgnI2J1bG1hLWFjY29yZGlvbi0xJykubGVuZ3RoKSB7XG4gICAgbmV3IFZ1ZSh7XG4gICAgICBlbDogJyNidWxtYS1hY2NvcmRpb24tMScsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEJ1bG1hQWNjb3JkaW9uLFxuICAgICAgICBCdWxtYUFjY29yZGlvbkl0ZW1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjYnVsbWEtYWNjb3JkaW9uLTInKS5sZW5ndGgpIHtcbiAgICBuZXcgVnVlKHtcbiAgICAgIGVsOiAnI2J1bG1hLWFjY29yZGlvbi0yJyxcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQnVsbWFBY2NvcmRpb24sXG4gICAgICAgIEJ1bG1hQWNjb3JkaW9uSXRlbVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCQoJyNidWxtYS1hY2NvcmRpb24tMycpLmxlbmd0aCkge1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjYnVsbWEtYWNjb3JkaW9uLTMnLFxuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBCdWxtYUFjY29yZGlvbixcbiAgICAgICAgQnVsbWFBY2NvcmRpb25JdGVtXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoJCgnI2J1bG1hLWFjY29yZGlvbi00JykubGVuZ3RoKSB7XG4gICAgbmV3IFZ1ZSh7XG4gICAgICBlbDogJyNidWxtYS1hY2NvcmRpb24tNCcsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEJ1bG1hQWNjb3JkaW9uLFxuICAgICAgICBCdWxtYUFjY29yZGlvbkl0ZW1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjYnVsbWEtYWNjb3JkaW9uLTUnKS5sZW5ndGgpIHtcbiAgICBuZXcgVnVlKHtcbiAgICAgIGVsOiAnI2J1bG1hLWFjY29yZGlvbi01JyxcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQnVsbWFBY2NvcmRpb24sXG4gICAgICAgIEJ1bG1hQWNjb3JkaW9uSXRlbVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKCkge1xuXG5cbiAgICAkKFwiYnV0dG9uLmNsaWNrdG9jb3B5XCIpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICB2YXIgJHRlbXBFbGVtZW50ID0gJChcIjxpbnB1dD5cIik7XG4gICAgICAgICQoXCJib2R5XCIpLmFwcGVuZCgkdGVtcEVsZW1lbnQpO1xuICAgICAgICAkdGVtcEVsZW1lbnQudmFsKCQodGhpcykuZmluZChcInNwYW4uY29weXRoaXNcIikudGV4dCgpKS5zZWxlY3QoKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJDb3B5XCIpO1xuICAgICAgICAkdGVtcEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIGFsZXJ0KCdjb3BpZWQgYW5jaG9yIGxpbmsgdG8gY2xpcGJvYXJkISB0aGlzIHdpbGwgaGVscCB5b3UgY3JlYXRlIHRoZSBtYWluIG1lbnUgbmF2JylcbiAgICB9KTtcblxufTsiLCJyZXF1aXJlKCdpbnRlcnNlY3Rpb24tb2JzZXJ2ZXInKTtcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLy9pbXBvcnQganMgbGlicmFyaWVzXG5pbXBvcnQgJ2xhenlzaXplcyc7XG5pbXBvcnQgJ2xhenlzaXplcy9wbHVnaW5zL3Jlc3BpbWcvbHMucmVzcGltZyc7XG5pbXBvcnQgc21vb3Roc2Nyb2xsIGZyb20gJ3Ntb290aHNjcm9sbC1wb2x5ZmlsbCc7XG5cbi8vaW1wb3J0IHZ1ZSBjb21wb25lbnRzXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG4vLyBpbXBvcnQgUGFyYWxsYXggZnJvbSBcInZ1ZS1wYXJhbGxheHlcIjtcbmltcG9ydCBjYXJvdXNlbCBmcm9tICd2dWUtb3dsLWNhcm91c2VsJ1xuXG4vLyBpbXBvcnQgY3VzdG9tIHNjcmlwdHNcbmltcG9ydCB7IG5hdiB9IGZyb20gJy4vbmF2LmpzJztcbmltcG9ydCB7IGFjY2Vzc2liaWxpdHkgfSBmcm9tICcuL2FjY2Vzc2liaWxpdHkuanMnO1xuaW1wb3J0IHsgY2Fyb3VzZWxzIH0gZnJvbSAnLi9jYXJvdXNlbHMuanMnO1xuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gJy4vc2lkZWJhci5qcyc7XG5pbXBvcnQgeyBhY2NvcmRpb25zIH0gZnJvbSAnLi9lbGVtZW50cy5qcyc7XG5pbXBvcnQgeyBwYWdlbG9hZCB9IGZyb20gJy4vZWxlbWVudHMuanMnO1xuaW1wb3J0IHsgc2VhcmNoIH0gZnJvbSAnLi9lbGVtZW50cy5qcyc7XG5pbXBvcnQgeyBjb3B5VG9DbGlwYm9hcmQgfSBmcm9tICcuL2VsZW1lbnRzLmpzJztcbmltcG9ydCB7IGFuY2hvciB9IGZyb20gJy4vYW5jaG9yLmpzJztcbmltcG9ydCB7IHNjcm9sbCB9IGZyb20gJy4vc2Nyb2xsLmpzJztcblxuaW1wb3J0IFlvdXJDb21wb25lbnQgZnJvbSAnLi92dWUtY29tcG9uZW50cy9Zb3VyQ29tcG9uZW50Jztcblxuc21vb3Roc2Nyb2xsLnBvbHlmaWxsKCk7XG5cbi8vIGluaXQgc2NyaXB0c1xuYWNjZXNzaWJpbGl0eSgpO1xuc2lkZWJhcigpO1xuY2Fyb3VzZWxzKCk7XG5hY2NvcmRpb25zKCk7XG5zZWFyY2goKTtcbnBhZ2Vsb2FkKCk7XG5jb3B5VG9DbGlwYm9hcmQoKTtcbnNjcm9sbCgpO1xuYW5jaG9yKCk7XG5uYXYoKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgU2Nyb2xsT3V0IGZyb20gXCJzY3JvbGwtb3V0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXYoKSB7XG5cblxuICBjb25zdCBoZXJvID0gJCgnLmhlcm8nKTtcbiAgY29uc3QgaGVyb0hlaWdodCA9IGhlcm8uaGVpZ2h0KCk7XG4gIGNvbnN0IHdyYXBIZWlnaHQgPSAkKCcuaGVhZGVyLXdyYXAnKS5oZWlnaHQoKTtcbiAgY29uc3Qgc3RpY2t5SGVhZGVyID0gJCgnLnN0aWNreS1oZWFkZXInKTtcblxuICBjb25zdCBzdGlja3lIZWFkZXJIZWlnaHQgPSBzdGlja3lIZWFkZXIuaGVpZ2h0KCk7XG5cbiAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gaGVyb0hlaWdodCAtIHN0aWNreUhlYWRlckhlaWdodDtcblxuXG4gIFNjcm9sbE91dCh7XG4gICAgLyogb3B0aW9ucyAqL1xuICAgIHRhcmdldHM6ICQoJy5zdGlja3ktaGVhZGVyLCAuc3VibmF2JyksXG4gICAgb2Zmc2V0OiBzY3JvbGxIZWlnaHQsXG4gICAgLy8gY3NzUHJvcHM6IHtcbiAgICAvLyAgIHNjcm9sbFBlcmNlbnRZOiB0cnVlLFxuICAgIC8vIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHRvcG9mRGl2ID0gaGVyby5vZmZzZXQoKS50b3A7IC8vZ2V0cyBvZmZzZXQgb2YgaGVhZGVyXG4gIGNvbnN0IGhlaWdodCA9IGhlcm8ub3V0ZXJIZWlnaHQoKTsgLy9nZXRzIGhlaWdodCBvZiBoZWFkZXJcblxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gKGhlcm9IZWlnaHQpKXtcbiAgICAgIHN0aWNreUhlYWRlci5hZGRDbGFzcygncGFzdC1oZXJvJylcbiAgICAgICQoJ2J1dHRvbi5nby10b3AnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBzdGlja3lIZWFkZXIucmVtb3ZlQ2xhc3MoJ3Bhc3QtaGVybycpXG4gICAgICAkKCdidXR0b24uZ28tdG9wJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cbiAgICBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPCAoaGVyb0hlaWdodCAtIHdyYXBIZWlnaHQpKXtcbiAgICAgICQoJy5zdGlja3ktaGVhZGVyLCAuc3VibmF2JykuYWRkQ2xhc3MoJ2luc2lkZS1oZXJvJyk7XG4gICAgICAkKCcuc3RpY2t5LWhlYWRlciwgLnN1Ym5hdicpLnJlbW92ZUNsYXNzKCdhbmNob3ItYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5zdGlja3ktaGVhZGVyLCAuc3VibmF2JykucmVtb3ZlQ2xhc3MoJ2luc2lkZS1oZXJvJyk7XG4gICAgfVxuICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAoc2Nyb2xsSGVpZ2h0KSAmJiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpIDwgKGhlcm9IZWlnaHQpKSApe1xuICAgICAgc3RpY2t5SGVhZGVyLmFkZENsYXNzKCdkaXNhYmxlLW5hdicpO1xuICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdmaXhuYXYtaW5pdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGlja3lIZWFkZXIucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUtbmF2Jyk7XG4gICAgfVxuICB9KTtcblxuICAkLmV4dGVuZCgkLmV4cHJbJzonXSwge1xuICAgICdvZmYtdG9wJzogZnVuY3Rpb24oZWwpIHtcbiAgICAgIHJldHVybiAkKGVsKS5vZmZzZXQoKS50b3AgPCAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgfSxcbiAgICAnb2ZmLXJpZ2h0JzogZnVuY3Rpb24oZWwpIHtcbiAgICAgIHJldHVybiAkKGVsKS5vZmZzZXQoKS5sZWZ0ICsgJChlbCkub3V0ZXJXaWR0aCgpIC0gJCh3aW5kb3cpLnNjcm9sbExlZnQoKSA+ICQod2luZG93KS53aWR0aCgpO1xuICAgIH0sXG4gICAgJ29mZi1ib3R0b20nOiBmdW5jdGlvbihlbCkge1xuICAgICAgcmV0dXJuICQoZWwpLm9mZnNldCgpLnRvcCArICQoZWwpLm91dGVySGVpZ2h0KCkgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgfSxcbiAgICAnb2ZmLWxlZnQnOiBmdW5jdGlvbihlbCkge1xuICAgICAgcmV0dXJuICQoZWwpLm9mZnNldCgpLmxlZnQgPCAkKHdpbmRvdykuc2Nyb2xsTGVmdCgpO1xuICAgIH0sXG4gICAgJ29mZi1zY3JlZW4nOiBmdW5jdGlvbihlbCkge1xuICAgICAgcmV0dXJuICQoZWwpLmlzKCc6b2ZmLXRvcCwgOm9mZi1yaWdodCwgOm9mZi1ib3R0b20sIDpvZmYtbGVmdCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaHRtbEJvZHkgPSAkKCdodG1sLCBib2R5Jyk7XG4gIGNvbnN0IG5hdmJhck1lbnUgPSAkKCcubmF2YmFyLW1lbnUgdWwnKTtcbiAgY29uc3QgbmF2RHJvcCA9ICQoJ3VsLm5hdi1kcm9wJyk7XG4gIGNvbnN0IG5hdk1haW5MaW5rID0gJCgnYS5uYXYtbWFpbi1saW5rJyk7XG4gIGNvbnN0IHNlYXJjaElucHV0TWFpbiA9ICQoJ2lucHV0W25hbWU9XCJzXCJdJyk7XG4gIGNvbnN0IG5hdmJhckJ1cmdlciA9ICQoJy5uYXZiYXItYnVyZ2VyJyk7XG4gIGNvbnN0IG1vYmlsZU1lbnUgPSAkKCd1bC5tb2JpbGUtbWVudScpO1xuXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICAgc3RpY2t5SGVhZGVyLnJlbW92ZUNsYXNzKCdzaG93LXNlYXJjaCcpO1xuICAgICBuYXZiYXJNZW51LnJlbW92ZUNsYXNzKCdoaWRlLXNlYXJjaCcpXG4gICAgIG5hdkRyb3AucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICBuYXZNYWluTGluay5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgIHNlYXJjaElucHV0TWFpbi5wYXJlbnQoKS5maW5kKCcuaWNvbi1jbG9zZScpLmFkZENsYXNzKCdpY29uLXNlYXJjaCcpLnJlbW92ZUNsYXNzKCdpY29uLWNsb3NlIGJ1dHRvbi1jbG9zZS1zZWFyY2gnKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xpY2tTZWFyY2hJY29uKCkge1xuICAgIHN0aWNreUhlYWRlci50b2dnbGVDbGFzcygnc2hvdy1zZWFyY2gnKVxuICAgIHNlYXJjaElucHV0TWFpbi5mb2N1cygpO1xuICAgIHNlYXJjaElucHV0TWFpbi5wYXJlbnQoKS5maW5kKCcuaWNvbi1zZWFyY2gnKS5yZW1vdmVDbGFzcygnaWNvbi1zZWFyY2gnKS5hZGRDbGFzcygnaWNvbi1jbG9zZSBidXR0b24tY2xvc2Utc2VhcmNoJyk7XG4gICAgbmF2YmFyTWVudS5hZGRDbGFzcygnaGlkZS1zZWFyY2gnKVxuICB9XG5cbiAgJCgnLmNsb3NlLXRvcGljJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnLnNlYXJjaC10b3BpYy1tZW51JykucmVtb3ZlQ2xhc3MoJ21lbnUtYWN0aXZlJyk7XG4gICAgJCgnLm5hdmJhci1tZW51JykucmVtb3ZlQ2xhc3MoJ21lbnUtdG9waWMnKTtcbiAgICBodG1sQm9keS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICBodG1sQm9keS5yZW1vdmVDbGFzcygnb3ZlcmZsb3ctaGlkZGVuJyk7XG4gIH0pO1xuXG4gICQoJy5jbG9zZS1zdGF0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5zZWFyY2gtcmVnaW9uLW1lbnUnKS5yZW1vdmVDbGFzcygnbWVudS1hY3RpdmUnKTtcbiAgICAkKCcubmF2YmFyLW1lbnUnKS5yZW1vdmVDbGFzcygnbWVudS1yZWdpb24nKTtcbiAgICBodG1sQm9keS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cteS1oaWRkZW4nKTtcbiAgICBodG1sQm9keS5yZW1vdmVDbGFzcygnb3ZlcmZsb3ctaGlkZGVuJyk7XG4gIH0pO1xuXG5cbiAgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgJCgnLm5hdmJhci1idXJnZXIsIC5uYXZiYXItbWVudScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICBtb2JpbGVNZW51LmFkZENsYXNzKCdtZW51LWFjdGl2ZScpO1xuICAgIHN0aWNreUhlYWRlci5hZGRDbGFzcygnbWVudS1hY3RpdmUnKTtcbiAgICBodG1sQm9keS5jc3Moe1xuICAgICAgICdvdmVyZmxvdy15JyA6ICdoaWRkZW4nXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG4gICAgJCgnLm5hdmJhci1idXJnZXIsIC5uYXZiYXItbWVudScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICBtb2JpbGVNZW51LnJlbW92ZUNsYXNzKCdtZW51LWFjdGl2ZScpO1xuICAgIHN0aWNreUhlYWRlci5yZW1vdmVDbGFzcygnbWVudS1hY3RpdmUnKTtcbiAgICBodG1sQm9keS5jc3Moe1xuICAgICAgICdvdmVyZmxvdy15JyA6ICdzY3JvbGwnXG4gICAgfSk7XG4gIH1cblxuXG4gICQoJ2Euc2VhcmNoLWljb24tYnRmJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNsaWNrU2VhcmNoSWNvbigpO1xuICB9KTtcblxuICAkKCdzcGFuLmljb24uc2VhcmNoLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNsaWNrU2VhcmNoSWNvbigpO1xuICAgIG5hdmJhck1lbnUucmVtb3ZlQ2xhc3MoJ2hpZGUtc2VhcmNoJylcbiAgfSk7XG5cblxuICAvLyBUb2dnbGUgbW9iaWxlIG1lbnVcbiAgbmF2YmFyQnVyZ2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5zZWFyY2gtcmVnaW9uLW1lbnUsIC5zZWFyY2gtdG9waWMtbWVudScpLnRvZ2dsZUNsYXNzKCdjbG9zZWQtYnktbWFpbm1lbnUnKS5yZW1vdmVDbGFzcygnbWVudS1hY3RpdmUnKTtcbiAgICB2YXIgY2xpY2tzID0gJCh0aGlzKS5kYXRhKCdjbGlja3MnKTtcbiAgICBpZiAoY2xpY2tzKSB7XG4gICAgICBjbG9zZU1lbnUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3Blbk1lbnUoKTtcbiAgICB9XG4gICAgJCh0aGlzKS5kYXRhKFwiY2xpY2tzXCIsICFjbGlja3MpO1xuICB9KTtcblxuICB2YXIgd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCh0aGlzKS53aWR0aCgpICE9IHdpZHRoKSB7XG4gICAgICBjbG9zZU1lbnUoKTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgbmF2TWFpbkxpbmsub24oJ21vdXNlb3ZlciB0b3VjaHN0YXJ0IGZvY3VzJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZigkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ3VsLm5hdi1kcm9wJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKXtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnYS5uYXYtbWFpbi1saW5rLmlzLWFjdGl2ZScpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICQoJ3VsLm5hdi1kcm9wLmlzLWFjdGl2ZScpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgndWwubmF2LWRyb3AnKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIHZhciBmID0gJCgndWwubmF2LWRyb3AnKTtcbiAgICAgIGlmKCBmLmlzKCc6b2ZmLXJpZ2h0JykgKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgndWwubmF2LWRyb3AnKS5hZGRDbGFzcygnb2Zmc2NyZWVuJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG4gIC8vIHdoZW4gY2xpY2sgb3V0c2lkZSBuYXYgdGhpcyBjbG9zZXMgaXRcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdChcInNwYW4ubmF2d3JhcFwiKS5sZW5ndGggPT09IDApIHtcbiAgICAgICQoJ3VsLm5hdi1kcm9wLCBhLm5hdi1tYWluLWxpbmsnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcblxuICAkKCcuc2VhcmNoLXJlZ2lvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5uYXZiYXItbWVudScpLnRvZ2dsZUNsYXNzKCdtZW51LXJlZ2lvbicpO1xuICAgICQoJy5uYXZiYXItbWVudScpLnJlbW92ZUNsYXNzKCdtZW51LXRvcGljJyk7XG4gICAgaHRtbEJvZHkudG9nZ2xlQ2xhc3MoJ292ZXJmbG93LXktaGlkZGVuJyk7XG4gICAgaHRtbEJvZHkucmVtb3ZlQ2xhc3MoJ292ZXJmbG93LWhpZGRlbicpO1xuICAgICQoJy5zZWFyY2gtcmVnaW9uLW1lbnUnKS50b2dnbGVDbGFzcygnbWVudS1hY3RpdmUnKTtcbiAgICAkKCcuc2VhcmNoLXRvcGljLW1lbnUnKS5yZW1vdmVDbGFzcygnbWVudS1hY3RpdmUnKTtcbiAgfSk7XG5cbiAgJCgnLnNlYXJjaC10b3BpYycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5uYXZiYXItbWVudScpLnRvZ2dsZUNsYXNzKCdtZW51LXRvcGljJyk7XG4gICAgJCgnLm5hdmJhci1tZW51JykucmVtb3ZlQ2xhc3MoJ21lbnUtcmVnaW9uJyk7XG4gICAgaHRtbEJvZHkudG9nZ2xlQ2xhc3MoJ292ZXJmbG93LWhpZGRlbicpO1xuICAgIGh0bWxCb2R5LnJlbW92ZUNsYXNzKCdvdmVyZmxvdy15LWhpZGRlbicpO1xuICAgICQoJy5zZWFyY2gtdG9waWMtbWVudScpLnRvZ2dsZUNsYXNzKCdtZW51LWFjdGl2ZScpO1xuICAgICQoJy5zZWFyY2gtcmVnaW9uLW1lbnUnKS5yZW1vdmVDbGFzcygnbWVudS1hY3RpdmUnKTtcbiAgfSk7XG5cbiAgLy9tb2JpbGUgYWNjb3JkaW9uXG4gIHZhciBhbGxQYW5lbHMgPSAkKCd1bC5hY2NvcmRpb24tY29udGVudCcpO1xuXG4gIGFsbFBhbmVscy5oaWRlKClcblxuICAkKCdhLnRvZ2dsZS1zaGVsZicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB0YXJnZXRDb250ZW50ID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCd1bC5hY2NvcmRpb24tY29udGVudCcpO1xuXG4gICAgdmFyIGNsaWNrcyA9ICQodGhpcykuZGF0YSgnY2xpY2tzJyk7XG4gICAgaWYgKGNsaWNrcykge1xuICAgICB0YXJnZXRDb250ZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5zbGlkZVVwKCk7XG4gICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgIHRhcmdldENvbnRlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNsaWRlRG93bigpOyAvLyBvcGVuIHRoaXMgYWNjb3JkaW9uXG4gICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICAkKHRoaXMpLmRhdGEoXCJjbGlja3NcIiwgIWNsaWNrcyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG5cbn07IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbCgpIHtcblxuICB2YXIgaHRtbCA9ICQoJ2h0bWwnKTtcbiAgdmFyIG5hdmJhciA9ICQoJ25hdi5uYXZiYXInKTtcbiAgdmFyIGRpZFNjcm9sbDtcbiAgdmFyIGxhc3RTY3JvbGxUb3AgPSAwO1xuICB2YXIgZGVsdGEgPSAxNTtcbiAgdmFyIGhlcm9oZWlnaHQgPSAkKCcuaGVybycpLmhlaWdodCgpO1xuICB2YXIgd3JhcEhlaWdodCA9ICQoJy5oZWFkZXItd3JhcCcpLm91dGVySGVpZ2h0KCk7XG5cbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbihldmVudCl7XG5cbiAgICBkaWRTY3JvbGwgPSB0cnVlO1xuXG4gIH0pO1xuXG4gIC8vIGh0dHBzOi8vbWVkaXVtLmNvbS9AbWFyaXVzYzIzL2hpZGUtaGVhZGVyLW9uLXNjcm9sbC1kb3duLXNob3ctb24tc2Nyb2xsLXVwLTY3YmJhYWU5YTc4Y1xuICBmdW5jdGlvbiBoYXNTY3JvbGxlZCgpIHtcblxuICAgIHZhciBzdCA9IE1hdGgubWF4KHdpbmRvdy5wYWdlWU9mZnNldCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApO1xuXG4gICAgLy8gY29uc29sZS5sb2coIHN0ICk7XG5cblxuICAgIC8vIGFkZCBiYWNrZ3JvdW5kIGNvbG9yIGFmdGVyIGxlYXZpbmcgdG9wIG9mIHBhZ2VcbiAgICBpZiAoc3QgPD0gNTApIHtcbiAgICAgICQoXCIuc3RpY2t5LWhlYWRlclwiKS5yZW1vdmVDbGFzcygnbm90LXRvcCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiLnN0aWNreS1oZWFkZXJcIikuYWRkQ2xhc3MoJ25vdC10b3AnKTtcbiAgICB9XG5cbiAgICBpZiAoTWF0aC5hYnMobGFzdFNjcm9sbFRvcCAtIHN0KSA8PSBkZWx0YSlcblxuICAgICAgcmV0dXJuO1xuXG4gICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCAmJiBzdCA+IGhlcm9oZWlnaHQpIHtcblxuICAgICAgaHRtbC5yZW1vdmVDbGFzcygnZml4bmF2JykuYWRkQ2xhc3MoJ3VuZml4bmF2Jyk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBpZiAoc3QgKyAkKHdpbmRvdykuaGVpZ2h0KCkgPCAkKGRvY3VtZW50KS5oZWlnaHQoKSkge1xuXG4gICAgICAgIGh0bWwuYWRkQ2xhc3MoJ2ZpeG5hdicpLnJlbW92ZUNsYXNzKCd1bmZpeG5hdicpO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBsYXN0U2Nyb2xsVG9wID0gc3Q7XG5cbiAgfVxuXG4gIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKGRpZFNjcm9sbCkge1xuXG4gICAgICBoYXNTY3JvbGxlZCgpO1xuXG4gICAgICBkaWRTY3JvbGwgPSBmYWxzZTtcblxuICAgICAgJCgnLmRyb3Bkb3duLW1lbnUnKS5yZW1vdmVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcblxuICAgICAgLy8gJChcIi5zdGlja3ktaGVhZGVyXCIpLmFkZENsYXNzKCdub3QtdG9wJyk7XG4gICAgfVxuXG4gIH0sIDI1MCk7XG5cbiAgLy8gaHR0cHM6Ly9jb2RlcGVuLmlvL0JveVdpdGhTaWx2ZXJXaW5ncy9wZW4vTUpnUXFSXG4gICQuZm4uaXNJblZpZXdwb3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsZW1lbnRUb3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCAtIDYxO1xuICAgIHZhciBlbGVtZW50Qm90dG9tID0gZWxlbWVudFRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcblxuICAgIHZhciB2aWV3cG9ydFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICB2YXIgdmlld3BvcnRCb3R0b20gPSB2aWV3cG9ydFRvcCArICQod2luZG93KS5oZWlnaHQoKTtcblxuICAgIHJldHVybiAgZWxlbWVudFRvcCA8IHZpZXdwb3J0VG9wO1xuICB9O1xuXG5cbiAgLy8gY29udHJvbCBzY3JvbGwgdXAgc3VibmF2IGFuY2hvclxuICAkKCcuc3ViLW5hdi1pdGVtIGEnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICQoJy5zdGlja3ktaGVhZGVyLCAuc3VibmF2JykuYWRkQ2xhc3MoJ2FuY2hvci1hY3RpdmUnKTtcbiAgfSlcblxuICAvLyBzdWJuYXYgYW5jaG9yIGxpbmtzXG4gICQod2luZG93KS5vbigncmVzaXplIHNjcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICQoJy5mbGV4LWJsb2NrcycpLm5vdCgnLm5vdC1oZWFkZXInKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgIGlmICgkKHRoaXMpLmlzSW5WaWV3cG9ydCgpKSB7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcuanVtcC10bycpLmh0bWwoJ0p1bXAgdG8gc2VjdGlvbiAuLi4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUgc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgY3VycmVudFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICB2YXIgZWxlbXMgPSAkKCcuZmxleC1ibG9ja3MnKS5ub3QoJy5ub3QtaGVhZGVyJyk7XG5cbiAgICBlbGVtcy5lYWNoKGZ1bmN0aW9uKCl7XG5cbiAgICAgIHZhciBlbGVtVG9wICAgICA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIGVsZW1Cb3R0b20gID0gZWxlbVRvcCArICQodGhpcykuaGVpZ2h0KCk7XG4gICAgICB2YXIgaWQgICAgICAgICAgPSAkKHRoaXMpLmF0dHIoJ3Njcm9sbG5hbWUnKTtcbiAgICAgIHZhciBuYXZFbGVtICAgICA9ICQoJy5qdW1wLXRvJyk7XG5cbiAgICAgIGlmKGN1cnJlbnRUb3AgPj0gZWxlbVRvcCAmJiBjdXJyZW50VG9wIDw9IGVsZW1Cb3R0b20pe1xuXG4gICAgICAgIG5hdkVsZW0uaHRtbChpZCk7XG5cbiAgICAgIH1cblxuICAgIH0pXG5cbiAgfSk7XG5cblxuXG4gIC8vIFNlbGVjdCBhbGwgbGlua3Mgd2l0aCBoYXNoZXNcbiAgJCgnYVtocmVmKj1cIiNcIl0nKVxuICAvLyBSZW1vdmUgbGlua3MgdGhhdCBkb24ndCBhY3R1YWxseSBsaW5rIHRvIGFueXRoaW5nXG4gIC5ub3QoJ1tocmVmPVwiI1wiXScpXG4gIC5ub3QoJ1tocmVmPVwiIzBcIl0nKVxuICAuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBPbi1wYWdlIGxpbmtzXG4gICAgaWYgKFxuICAgICAgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJylcbiAgICAgICYmXG4gICAgICBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lXG4gICAgKSB7XG4gICAgICAvLyBGaWd1cmUgb3V0IGVsZW1lbnQgdG8gc2Nyb2xsIHRvXG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyAnXScpO1xuICAgICAgLy8gRG9lcyBhIHNjcm9sbCB0YXJnZXQgZXhpc3Q/XG4gICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAvLyBPbmx5IHByZXZlbnQgZGVmYXVsdCBpZiBhbmltYXRpb24gaXMgYWN0dWFsbHkgZ29ubmEgaGFwcGVuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgLSAwXG4gICAgICAgIH0sIDM1MCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gQ2FsbGJhY2sgYWZ0ZXIgYW5pbWF0aW9uXG4gICAgICAgICAgLy8gTXVzdCBjaGFuZ2UgZm9jdXMhXG4gICAgICAgICAgdmFyICR0YXJnZXQgPSAkKHRhcmdldCk7XG4gICAgICAgICAgJHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgIGlmICgkdGFyZ2V0LmlzKFwiOmZvY3VzXCIpKSB7IC8vIENoZWNraW5nIGlmIHRoZSB0YXJnZXQgd2FzIGZvY3VzZWRcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHRhcmdldC5hdHRyKCd0YWJpbmRleCcsJy0xJyk7IC8vIEFkZGluZyB0YWJpbmRleCBmb3IgZWxlbWVudHMgbm90IGZvY3VzYWJsZVxuICAgICAgICAgICAgJHRhcmdldC5mb2N1cygpOyAvLyBTZXQgZm9jdXMgYWdhaW5cbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cblxufTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZnVuY3Rpb24gc2lkZWJhcigpIHtcblxuICB2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcblxuICBmdW5jdGlvbiBzaWRlYmFyKCkge1xuICAgIHZhciAkdGhpcyA9ICQod2luZG93KTtcbiAgICB2YXIgc2Nyb2xsVG9wID0gJHRoaXMuc2Nyb2xsVG9wKCk7XG4gICAgdmFyICRzaWRlYmFyV3JhcHBlciA9ICQoJy5zaWRlYmFyLXdyYXBwZXInKTtcbiAgICB2YXIgJHNpZGViYXIgPSAkKCcuc2lkZWJhci1tZW51JywgJHNpZGViYXJXcmFwcGVyKTtcbiAgICB2YXIgdG9wID0gJHNpZGViYXJXcmFwcGVyLm9mZnNldCgpLnRvcDtcbiAgICBpZiAoJHRoaXMud2lkdGgoKSA+IDk5MSkge1xuICAgICAgaWYgKHNjcm9sbFRvcCA+ICQoJ2Zvb3RlcicpLm9mZnNldCgpLnRvcCAtICQoJy5zaWRlYmFyLW1lbnUnKS5vdXRlckhlaWdodCh0cnVlKSAtIDIwMCkge1xuICAgICAgICAkc2lkZWJhci5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgJHNpZGViYXIuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgfSBlbHNlIGlmIChzY3JvbGxUb3AgPiAodG9wIC0gMjAwKSkge1xuICAgICAgICAkc2lkZWJhci5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgJHNpZGViYXIucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHNpZGViYXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICRzaWRlYmFyLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgaWYgKCQoJy5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudScpLm91dGVySGVpZ2h0KHRydWUpICsgMTAwID4gJCgnLmNvbnRlbnQtYm9keScpLm91dGVySGVpZ2h0KHRydWUpKSB7XG4gICAgICAkKCcuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUnKS5hZGRDbGFzcygnbmVlZHMtZml0Jyk7XG4gICAgICAkKCcuc2lkZWJhci13cmFwcGVyJykuYWRkQ2xhc3MoJ25lZWRzLWZpdCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkd2luZG93Lm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzaWRlYmFyKCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAoISQoJy5zaWRlYmFyLXdyYXBwZXInKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2lkZWJhcigpO1xuICAgIHNjcm9sbExpc3RlbmVyKCk7XG4gIH1cbiAgaW5pdCgpO1xuXG59OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vWW91ckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2MzODliNmMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vWW91ckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1lvdXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1lvdXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2MzODliNmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNjMzg5YjZjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2pnaWxsaXNwaWUvd2Vic2l0ZXMvYmFsdGltb3JlL3dwLWNvbnRlbnQvdGhlbWVzL2Jhc2UtY2FtcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczYzM4OWI2YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczYzM4OWI2YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczYzM4OWI2YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vWW91ckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2MzODliNmMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2MzODliNmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvdnVlLWNvbXBvbmVudHMvWW91ckNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vWW91ckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Zb3VyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMi0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vWW91ckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYzM4OWI2YyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0yLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Zb3VyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjMzg5YjZjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1lvdXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjMzg5YjZjJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==