var rml_shortcode =
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/src/rml_shortcode.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this || typeof self === "object" && self;
}() || Function("return this")(); // Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.


var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0; // Save the old regeneratorRuntime in case it needs to be restored later.

var oldRuntime = hadRuntime && g.regeneratorRuntime; // Force reevalutation of runtime.js.

g.regeneratorRuntime = undefined;
module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;

  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    } // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.


    return;
  } // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.


  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  runtime.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  runtime.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}( // In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this || typeof self === "object" && self;
}() || Function("return this")());

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js");

/***/ }),

/***/ "./node_modules/lil-uri/uri.js":
/*!*************************************!*\
  !*** ./node_modules/lil-uri/uri.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! lil-uri - v0.2.0 - MIT License - https://github.com/lil-js/uri */
;

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (exports) {
  'use strict';

  var VERSION = '0.2.2';
  var REGEX = /^(?:([^:\/?#]+):\/\/)?((?:([^\/?#@]*)@)?([^\/?#:]*)(?:\:(\d*))?)?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n)*))?/i;

  function isStr(o) {
    return typeof o === 'string';
  }

  function decode(uri) {
    return decodeURIComponent(escape(uri));
  }

  function mapSearchParams(search) {
    var map = {};

    if (typeof search === 'string') {
      search.split('&').forEach(function (values) {
        values = values.split('=');

        if (map.hasOwnProperty(values[0])) {
          map[values[0]] = Array.isArray(map[values[0]]) ? map[values[0]] : [map[values[0]]];
          map[values[0]].push(values[1]);
        } else {
          map[values[0]] = values[1];
        }
      });
      return map;
    }
  }

  function accessor(type) {
    return function (value) {
      if (value) {
        this.parts[type] = isStr(value) ? decode(value) : value;
        return this;
      }

      this.parts = this.parse(this.build());
      return this.parts[type];
    };
  }

  function URI(uri) {
    this.uri = uri || null;

    if (isStr(uri) && uri.length) {
      this.parts = this.parse(uri);
    } else {
      this.parts = {};
    }
  }

  URI.prototype.parse = function (uri) {
    var parts = decode(uri || '').match(REGEX);
    var auth = (parts[3] || '').split(':');
    var host = auth.length ? (parts[2] || '').replace(/(.*\@)/, '') : parts[2];
    return {
      uri: parts[0],
      protocol: parts[1],
      host: host,
      hostname: parts[4],
      port: parts[5],
      auth: parts[3],
      user: auth[0],
      password: auth[1],
      path: parts[6],
      search: parts[7],
      query: mapSearchParams(parts[7]),
      hash: parts[8]
    };
  };

  URI.prototype.protocol = function (host) {
    return accessor('protocol').call(this, host);
  };

  URI.prototype.host = function (host) {
    return accessor('host').call(this, host);
  };

  URI.prototype.hostname = function (hostname) {
    return accessor('hostname').call(this, hostname);
  };

  URI.prototype.port = function (port) {
    return accessor('port').call(this, port);
  };

  URI.prototype.auth = function (auth) {
    return accessor('host').call(this, auth);
  };

  URI.prototype.user = function (user) {
    return accessor('user').call(this, user);
  };

  URI.prototype.password = function (password) {
    return accessor('password').call(this, password);
  };

  URI.prototype.path = function (path) {
    return accessor('path').call(this, path);
  };

  URI.prototype.search = function (search) {
    return accessor('search').call(this, search);
  };

  URI.prototype.query = function (query) {
    return query && typeof query === 'object' ? accessor('query').call(this, query) : this.parts.query;
  };

  URI.prototype.hash = function (hash) {
    return accessor('hash').call(this, hash);
  };

  URI.prototype.get = function (value) {
    return this.parts[value] || '';
  };

  URI.prototype.build = URI.prototype.toString = URI.prototype.valueOf = function () {
    var p = this.parts,
        buf = [];
    if (p.protocol) buf.push(p.protocol + '://');
    if (p.auth) buf.push(p.auth + '@');else if (p.user) buf.push(p.user + (p.password ? ':' + p.password : '') + '@');

    if (p.host) {
      buf.push(p.host);
    } else {
      if (p.hostname) buf.push(p.hostname);
      if (p.port) buf.push(':' + p.port);
    }

    if (p.path) buf.push(p.path);

    if (p.query && typeof p.query === 'object') {
      if (!p.path) buf.push('/');
      buf.push('?' + Object.keys(p.query).map(function (name) {
        if (Array.isArray(p.query[name])) {
          return p.query[name].map(function (value) {
            return name + (value ? '=' + value : '');
          }).join('&');
        } else {
          return name + (p.query[name] ? '=' + p.query[name] : '');
        }
      }).join('&'));
    } else if (p.search) {
      buf.push('?' + p.search);
    }

    if (p.hash) {
      if (!p.path) buf.push('/');
      buf.push('#' + p.hash);
    }

    return this.url = buf.filter(function (part) {
      return isStr(part);
    }).join('');
  };

  function uri(uri) {
    return new URI(uri);
  }

  function isURL(uri) {
    return typeof uri === 'string' && REGEX.test(uri);
  }

  uri.VERSION = VERSION;
  uri.is = uri.isURL = isURL;
  uri.URI = URI;
  return exports.uri = uri;
});

/***/ }),

/***/ "./public/src/components/Breadcrumb.js":
/*!*********************************************!*\
  !*** ./public/src/components/Breadcrumb.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_3__);
/** @module components/Breadcrumb */




var ICON_OBJ_SEP = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
  type: "right"
});
/**
 * Simple breadcrumbs with arrows and a home icon.
 * 
 * @property {string[]} path The pathes
 * @type React.Element
 */

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var path = _ref.path;
  var i = 0; // Use counter as key

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _util__WEBPACK_IMPORTED_MODULE_2__["ICON_OBJ_FOLDER_ROOT"], "\xA0\xA0", path.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: i++
    }, item, "\xA0", i < path.length && ICON_OBJ_SEP, "\xA0");
  }));
});

/***/ }),

/***/ "./public/src/others/rfcBreadcrumb.js":
/*!********************************************!*\
  !*** ./public/src/others/rfcBreadcrumb.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/hooks */ "./public/src/util/hooks.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");
/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Breadcrumb */ "./public/src/components/Breadcrumb.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Create a WP RFC for a breadcrumb item and for a customField.
 * 
 * @property {string[]} data-path The pathes
 * @module others/rfcBreadcrumb
 */






/**
 * Create a WP RFC for a breadcrumb. All the element data is passed to
 * {@link module:components/Breadcrumb}.
 * 
 * @function breadcrumb
 * @listens module:util/hooks#wprfc/$function
 */

_util_hooks__WEBPACK_IMPORTED_MODULE_4__["default"].register('wprfc/breadcrumb', function (props) {
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["default"], props), jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).get(0));
});
/**
 * Create a WP RFC for a custom field. It puts a simple dropdown with folder
 * select to the element.
 * 
 * @property {string|int} selected The preselected id
 * @function customField
 * @listens module:util/hooks#wprfc/$function
 */

_util_hooks__WEBPACK_IMPORTED_MODULE_4__["default"].register('wprfc/customField',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var selected, _ref3, html;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            selected = _ref2.selected;
            _context.next = 3;
            return Object(_util__WEBPACK_IMPORTED_MODULE_5__["ajax"])('tree/dropdown', {
              data: {
                selected: selected
              }
            });

          case 3:
            _ref3 = _context.sent;
            html = _ref3.html;
            jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).html(html);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./public/src/others/rfcPreUploadUi.js":
/*!*********************************************!*\
  !*** ./public/src/others/rfcPreUploadUi.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/hooks */ "./public/src/util/hooks.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rmlopts */ "rmlopts");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rmlopts__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/** @module others/rfcPreUploadUi */




/**
 * Load data to a dropdown or show label that the folder is inherited from the AppTree.
 * This RFC is placed in the upload UI where you can select your files.
 * 
 * @function preUploadUi
 * @listens module:util/hooks#wprfc/$function
 */

_util_hooks__WEBPACK_IMPORTED_MODULE_2__["default"].register('wprfc/preUploadUi',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
    var attachmentsBrowser, _ref2, html;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            attachmentsBrowser = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.attachments-browser');

            if (!attachmentsBrowser.length) {
              _context.next = 5;
              break;
            }

            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().hide().prev().html(rmlopts__WEBPACK_IMPORTED_MODULE_4___default.a.lang.uploaderUsesLeftTree);
            _context.next = 10;
            break;

          case 5:
            _context.next = 7;
            return Object(_util__WEBPACK_IMPORTED_MODULE_3__["ajax"])('tree/dropdown');

          case 7:
            _ref2 = _context.sent;
            html = _ref2.html;
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('attachments-filter-preUploadUi').html(html);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./public/src/others/rfcShortcutInfo.js":
/*!**********************************************!*\
  !*** ./public/src/others/rfcShortcutInfo.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/hooks */ "./public/src/util/hooks.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Create a WP RFC for the shortcut info container.
 * 
 * @property {string[]} data-path The pathes
 * @module others/rfcShortcutInfo
 */



/**
 * Append HTML content below the attachment details.
 * 
 * @param {jQuery} container The container
 * @param {string} html The html
 * @returns {jQuery}
 */

var appendTo = function appendTo(container, html) {
  var attachmentDetails = container.parents('.attachment-details'),
      mediaSidebar = container.parents('.media-sidebar'); // Check if it is already an container

  (mediaSidebar.length > 0 ? mediaSidebar : attachmentDetails.length > 0 ? attachmentDetails : container).find('.rml-shortcut-info-container').remove(); // The normal media library view

  if (mediaSidebar.length > 0) {
    return jquery__WEBPACK_IMPORTED_MODULE_1___default()(html).appendTo(mediaSidebar);
  } else if (attachmentDetails.length > 0) {
    return jquery__WEBPACK_IMPORTED_MODULE_1___default()(html).insertAfter(attachmentDetails.children('.attachment-info').children('.settings'));
  } else {
    return container.replaceWithPush(html);
  }
};
/**
 * Create a WP RFC for a shortcut info container. 
 * 
 * @property {id} id The attachment id.
 * @function shortcutInfo
 * @listens module:util/hooks#wprfc/$function
 */


_util_hooks__WEBPACK_IMPORTED_MODULE_2__["default"].register('wprfc/shortcutInfo',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var id, loadingContainer, _ref3, html;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref2.id;
            loadingContainer = appendTo(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass("rml-shortcut-info-container"), '<div style="height:50px;text-align:center;"><div class="spinner is-active" style="float: initial;margin: 0;"></div></div>');
            _context.next = 4;
            return Object(_util__WEBPACK_IMPORTED_MODULE_3__["ajax"])('attachments/' + id + '/shortcutInfo');

          case 4:
            _ref3 = _context.sent;
            html = _ref3.html;
            loadingContainer.replaceWithPush(html);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./public/src/rml_shortcode.js":
/*!*************************************!*\
  !*** ./public/src/rml_shortcode.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tinymce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce */ "tinymce");
/* harmony import */ var tinymce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinymce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rmlopts */ "rmlopts");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rmlopts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./public/src/util/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/** 
 * Startup file for the MCE visual editor to create the shortcode modal.
 * 
 * @module rml_shortcode
 */



var TAG = 'folder-gallery';
/**
 * This function is fired, when the dialog button "OK" gets pressed.
 * 
 * @this tinymce.Editor instance
 */

function submit(_ref) {
  var data = _ref.data;

  if (!data) {
    return;
  }

  var fid = data.fid,
      link = data.link,
      columns = data.columns,
      orderby = data.orderby,
      size = data.size;

  if (fid > -1) {
    var shortcode = "[".concat(TAG, " fid=\"").concat(fid, "\"");
    link && link !== 'post' && (shortcode += " link=\"".concat(link, "\""));
    columns && +columns !== 3 && (shortcode += " columns=\"".concat(columns, "\""));

    if (orderby === true) {
      shortcode += " orderby=\"rand\"";
    } else {
      shortcode += " orderby=\"rml\"";
    }

    size && size !== 'thumbnail' && (shortcode += " size=\"".concat(size, "\""));
    var sdata = {
      shortcode: shortcode
    };
    /**
     * The shortcode gets generated. You are able to modify the shortcut
     * depending on the modal data.
     * 
     * @event module:util/hooks#shortcode/dialog/insert
     * @param {object} shortcodeData
     * @param {object} shortcodeData.shortcode The shortcode which you can modify
     * @param {object} data The data from the dialog
     */

    _util__WEBPACK_IMPORTED_MODULE_3__["hooks"].call('shortcode/dialog/insert', [sdata, data], this);
    sdata.shortcode += ']';
    this.insertContent(sdata.shortcode);
  }
}

tinymce__WEBPACK_IMPORTED_MODULE_1___default.a.PluginManager.add(TAG, function (editor, url) {
  // Command
  editor.addCommand('folder_gallery_popup',
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ui, v) {
      var _ref3, _ref3$slugs, names, slugs, types, listValues, _ref4, _ref4$fid, fid, _ref4$link, link, _ref4$columns, columns, _ref4$orderby, orderby, _ref4$size, size, columnsValue, mce, options;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Create tree for listbox
              editor.setProgressState(true);
              _context.next = 3;
              return Object(_util__WEBPACK_IMPORTED_MODULE_3__["ajax"])('tree');

            case 3:
              _ref3 = _context.sent;
              _ref3$slugs = _ref3.slugs;
              names = _ref3$slugs.names;
              slugs = _ref3$slugs.slugs;
              types = _ref3$slugs.types;
              names.shift();
              slugs.shift();
              types.shift();
              listValues = slugs.map(function (id, i) {
                return {
                  text: names[i],
                  value: id,
                  disabled: [1].indexOf(types[i]) > -1
                };
              });
              editor.setProgressState(false); // Prepare dialog

              _ref4 = v || {}, _ref4$fid = _ref4.fid, fid = _ref4$fid === void 0 ? '' : _ref4$fid, _ref4$link = _ref4.link, link = _ref4$link === void 0 ? '' : _ref4$link, _ref4$columns = _ref4.columns, columns = _ref4$columns === void 0 ? '3' : _ref4$columns, _ref4$orderby = _ref4.orderby, orderby = _ref4$orderby === void 0 ? '' : _ref4$orderby, _ref4$size = _ref4.size, size = _ref4$size === void 0 ? '' : _ref4$size, columnsValue = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) {
                return {
                  text: '' + i,
                  value: '' + i
                };
              }), mce = rmlopts__WEBPACK_IMPORTED_MODULE_2___default.a.mce; // Show dialog

              options = {
                title: mce.mceButtonTooltip,
                onsubmit: submit.bind(editor),
                body: [{
                  // Add folder select
                  type: 'listbox',
                  name: 'fid',
                  label: mce.mceBodyGallery,
                  value: fid,
                  'values': listValues,
                  tooltip: mce.mceListBoxDirsTooltip
                }, {
                  // Add link to select
                  type: 'listbox',
                  name: 'link',
                  label: mce.mceBodyLinkTo,
                  value: link,
                  'values': mce.mceBodyLinkToValues
                }, {
                  // Add columns (1-9) to select
                  type: 'listbox',
                  name: 'columns',
                  label: mce.mceBodyColumns,
                  value: columns,
                  'values': columnsValue
                }, {
                  // Add random order checkbox
                  type: 'checkbox',
                  name: 'orderby',
                  label: mce.mceBodyRandomOrder,
                  value: orderby
                }, {
                  // Add size to select
                  type: 'listbox',
                  name: 'size',
                  label: mce.mceBodySize,
                  value: size,
                  'values': mce.mceBodySizeValues
                }]
              };
              /**
               * The shortcode dialog gets opened. You can modify the fields.
               * 
               * @event module:util/hooks#shortcode/dialog/open
               * @param {object} options The options
               * @param {object} editor The editor instance
               */

              _util__WEBPACK_IMPORTED_MODULE_3__["hooks"].call('shortcode/dialog/open', [options, editor]);
              editor.windowManager.open(options);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }()); // Add tinymce button

  rmlopts__WEBPACK_IMPORTED_MODULE_2___default.a && editor.addButton(TAG, {
    icon: ' rmlicon-gallery',
    tooltip: rmlopts__WEBPACK_IMPORTED_MODULE_2___default.a.mce.mceButtonTooltip,
    cmd: 'folder_gallery_popup'
  });
});

/***/ }),

/***/ "./public/src/util/addUrlParam.js":
/*!****************************************!*\
  !*** ./public/src/util/addUrlParam.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addUrlParam; });
/**
 * Add a URL parameter (or changing it if it already exists)
 * 
 * @param {string} url The url
 * @param {string} parameterName The parameter name
 * @param {string} parameterValue The parameter value
 * @param {boolean} [atStart] Add param before others
 * @returns {string} URL
 * @see http://stackoverflow.com/questions/486896/adding-a-parameter-to-the-url-with-javascript
 * @see http://stackoverflow.com/questions/6953944/how-to-add-parameters-to-a-url-that-already-contains-other-parameters-and-maybe?noredirect=1&lq=1
 * @module util/addUrlParam
 */
function addUrlParam(url, parameterName, parameterValue, atStart) {
  var replaceDuplicates = true,
      urlhash,
      sourceUrl;

  if (url.indexOf('#') > 0) {
    var cl = url.indexOf('#');
    urlhash = url.substring(url.indexOf('#'), url.length);
  } else {
    urlhash = '';
    cl = url.length;
  }

  sourceUrl = url.substring(0, cl);
  var urlParts = sourceUrl.split("?");
  var newQueryString = "";

  if (urlParts.length > 1) {
    var parameters = urlParts[1].split("&");

    for (var i = 0; i < parameters.length; i++) {
      var parameterParts = parameters[i].split("=");

      if (!(replaceDuplicates && parameterParts[0] == parameterName)) {
        if (newQueryString == "") newQueryString = "?";else newQueryString += "&";
        newQueryString += parameterParts[0] + "=" + (parameterParts[1] ? parameterParts[1] : '');
      }
    }
  }

  if (newQueryString == "") newQueryString = "?";

  if (atStart) {
    newQueryString = '?' + parameterName + "=" + parameterValue + (newQueryString.length > 1 ? '&' + newQueryString.substring(1) : '');
  } else {
    if (newQueryString !== "" && newQueryString != '?') newQueryString += "&";
    newQueryString += parameterName + "=" + (parameterValue ? parameterValue : '');
  }

  return urlParts[0] + newQueryString + urlhash;
}

/***/ }),

/***/ "./public/src/util/hooks.js":
/*!**********************************!*\
  !*** ./public/src/util/hooks.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Hook system to modify simple things.
 * 
 * @module util/hooks
 * @see Events for hook events
 * @example <caption>Accessing the hook system</caption>
 * window.rml.hooks.register("yourAction", function() {
 *  // Do something
 * });
 */

var registry = {},
    hooks = {
  /**
   * Registers a callback to a given event name.
   * 
   * @param {string} names The event name, you can also pass multiple names when splitted with " "
   * @param {function} callback The callback function with the arguments
   * @returns {module:util/hooks}
   * @function register
   */
  register: function register(names, callback) {
    names.split(' ').forEach(function (name) {
      registry[name] = registry[name] || [];
      registry[name].push(callback);
    });
    return hooks;
  },

  /**
   * Deregister a callback to a given event name.
   * 
   * @param {string} name The event name
   * @param {function} callback The callback function with the arguments
   * @returns {module:util/hooks}
   * @function register
   */
  deregister: function deregister(name, callback) {
    var i;

    if (registry[name]) {
      registry[name].forEach(function (fns) {
        i = fns.indexOf(callback);
        i > -1 && fns.splice(i, 1);
      });
    }

    return hooks;
  },

  /**
   * Call an event.
   * 
   * @param {string} name The event name
   * @param {mixed[]} args Pass arguments to the callbacks
   * @param {object} context Pass context to the callbacks
   * @returns {module:util/hooks}
   * @function call
   */
  call: function call(name, args, context) {
    if (registry[name]) {
      if (args) {
        if (Object.prototype.toString.call(args) === '[object Array]') {
          args.push(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
        } else {
          args = [args, jquery__WEBPACK_IMPORTED_MODULE_0___default.a];
        }
      } else {
        args = [jquery__WEBPACK_IMPORTED_MODULE_0___default.a];
      } // When explicit false then break the for


      registry[name].forEach(function (callback) {
        return callback.apply(context, args) !== false;
      });
    }

    return hooks;
  },

  /**
   * Checks if a event name is registered.
   * 
   * @param {string} name The event name
   * @returns {boolean}
   * @function exists
   */
  exists: function exists(name) {
    return !!registry[name];
  }
};
/* harmony default export */ __webpack_exports__["default"] = (hooks);

/***/ }),

/***/ "./public/src/util/index.js":
/*!**********************************!*\
  !*** ./public/src/util/index.js ***!
  \**********************************/
/*! exports provided: untrailingslashit, trailingslashit, ready, i18n, urlParam, ajax, ICON_OBJ_FOLDER_OPEN, ICON_OBJ_FOLDER_CLOSED, ICON_OBJ_FOLDER_ROOT, ICON_OBJ_FOLDER_COLLECTION, ICON_OBJ_FOLDER_GALLERY, applyNodeDefaults, fetchTree, findDeep, humanFileSize, secondsFormat, dataUriToBlob, inViewPort, isMaterialWp, materialWpResizeOpposite, addUrlParam, hooks, uri, rmlOpts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untrailingslashit", function() { return untrailingslashit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trailingslashit", function() { return trailingslashit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return ready; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlParam", function() { return urlParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return ajax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_OBJ_FOLDER_OPEN", function() { return ICON_OBJ_FOLDER_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_OBJ_FOLDER_CLOSED", function() { return ICON_OBJ_FOLDER_CLOSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_OBJ_FOLDER_ROOT", function() { return ICON_OBJ_FOLDER_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_OBJ_FOLDER_COLLECTION", function() { return ICON_OBJ_FOLDER_COLLECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_OBJ_FOLDER_GALLERY", function() { return ICON_OBJ_FOLDER_GALLERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyNodeDefaults", function() { return applyNodeDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTree", function() { return fetchTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDeep", function() { return findDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanFileSize", function() { return humanFileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondsFormat", function() { return secondsFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataUriToBlob", function() { return dataUriToBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inViewPort", function() { return inViewPort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMaterialWp", function() { return isMaterialWp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialWpResizeOpposite", function() { return materialWpResizeOpposite; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _addUrlParam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addUrlParam */ "./public/src/util/addUrlParam.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUrlParam", function() { return _addUrlParam__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks */ "./public/src/util/hooks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hooks", function() { return _hooks__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rmlopts */ "rmlopts");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rmlopts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "rmlOpts", function() { return rmlopts__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var i18n_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! i18n-react */ "i18n-react");
/* harmony import */ var i18n_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(i18n_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wpRfc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wpRfc */ "./public/src/util/wpRfc.js");
/* harmony import */ var lil_uri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lil-uri */ "./node_modules/lil-uri/uri.js");
/* harmony import */ var lil_uri__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lil_uri__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "uri", function() { return lil_uri__WEBPACK_IMPORTED_MODULE_8___default.a; });


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** @module util */









var untrailingslashit = function untrailingslashit(str) {
  return str.endsWith('/') || str.endsWith('\\') ? untrailingslashit(str.slice(0, -1)) : str;
};
var trailingslashit = function trailingslashit(str) {
  return untrailingslashit(str) + '/';
};
var WP_REST_API_USE_GLOBAL_METHOD = true;
/**
 * Replacement for $(document).ready(). Some WordPress environments do not
 * support completely the above function when in conflict with another plugin.
 * 
 * @see https://matthiasweb.freshdesk.com/a/tickets/1545
 * @see http://youmightnotneedjquery.com/
 */

var ready = function ready(fn) {
  return (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') ? fn() : document.addEventListener('DOMContentLoaded', fn);
};
/**
 * Creates a React component (span) with the translated markdown.
 * 
 * @param {string} key The key in rmlOpts.lang
 * @param {object} [params] The parameters
 * @param {object|string('maxWidth')} [spanWrapperProps] Wraps an additinal span wrapper with custom attributes
 * @see https://github.com/alexdrel/i18n-react
 * @returns {React.Element} Or null if key not found
 */

function i18n(key, params, spanWrapperProps) {
  if (rmlopts__WEBPACK_IMPORTED_MODULE_4___default.a && rmlopts__WEBPACK_IMPORTED_MODULE_4___default.a.lang && rmlopts__WEBPACK_IMPORTED_MODULE_4___default.a.lang[key]) {
    var span = React.createElement(i18n_react__WEBPACK_IMPORTED_MODULE_6___default.a.span, _extends({
      text: rmlopts__WEBPACK_IMPORTED_MODULE_4___default.a.lang[key]
    }, params)); // Predefined span wrapper props

    if (typeof spanWrapperProps === 'string') {
      switch (spanWrapperProps) {
        case 'maxWidth':
          spanWrapperProps = {
            style: {
              display: 'inline-block',
              maxWidth: 200
            }
          };
          break;

        default:
          break;
      }
    }

    return spanWrapperProps ? React.createElement("span", spanWrapperProps, span) : span;
  }

  return key;
}
/**
 * Get URL parameter of current url.
 * 
 * @param {string} name The parameter name
 * @param {string} [url=window.location.href]
 * @returns {string|null}
 */

function urlParam(name) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
  return results && results[1] || null;
}
/**
 * Execute a jQuery request with X-WP-Nonce header.
 * 
 * @param {string} url The url appended to ".../wp-json/realmedialibrary/v1/"
 * @param {object} [settings] The options for jQuery.ajax
 * @param {string} [url='realmedialibrary/v1'] The API namespace
 * @returns Result of jQuery.ajax
 */

function ajax(url) {
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var urlNamespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'realmedialibrary/v1';

  /* global rml */
  var apiUrl = lil_uri__WEBPACK_IMPORTED_MODULE_8___default()(rmlopts__WEBPACK_IMPORTED_MODULE_4___default.a.restRoot);
  var windowProtocol = lil_uri__WEBPACK_IMPORTED_MODULE_8___default()(window.location.href).protocol(),
      query = apiUrl.query() || {},
      path = query.rest_route || apiUrl.path(),
      // Determine path from permalink settings
  usePath = trailingslashit(path) + trailingslashit(urlNamespace) + url;
  windowProtocol === 'https' && apiUrl.protocol('https'); // Set https if site url is SSL
  // Set path depending on permalink settings

  if (query.rest_route) {
    query.rest_route = usePath;
  } else {
    apiUrl.path(usePath); // Set path
  } // Use global parameter (see https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/)


  if (WP_REST_API_USE_GLOBAL_METHOD && settings.method && settings.method.toUpperCase() !== 'GET') {
    query._method = settings.method;
    settings.method = 'POST';
  }

  var promise = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax(jquery__WEBPACK_IMPORTED_MODULE_1___default.a.extend(true, settings, {
    url: apiUrl.query(jquery__WEBPACK_IMPORTED_MODULE_1___default.a.extend(true, {}, rmlopts__WEBPACK_IMPORTED_MODULE_4___default.a.restQuery, query)).build(),
    headers: {
      'X-WP-Nonce': rmlopts__WEBPACK_IMPORTED_MODULE_4___default.a.restNonce
    }
  })),
      _url = url;
  urlNamespace.startsWith('realmedialibrary') && promise.fail(function (_ref) {
    var status = _ref.status;
    status === 405 && rml && rml.store && rml.store.setter(function (self) {
      self.methodNotAllowed405Endpoint = (settings && settings.method ? settings.method : 'GET') + ' ' + _url;
    });
  });
  return promise;
}
/**
 * Icon showing a opened folder.
 * 
 * @type React.Element
 */

var ICON_OBJ_FOLDER_OPEN = React.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
  type: "folder-open"
});
/**
 * Icon showing a closed folder.
 * 
 * @type React.Element
 */

var ICON_OBJ_FOLDER_CLOSED = React.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
  type: "folder"
});
/**
 * Icon showing a home icon for Unorganized.
 * 
 * @type React.Element
 */

var ICON_OBJ_FOLDER_ROOT = React.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
  type: "home"
});
/**
 * Icon showing a collection.
 * 
 * @type React.Element
 */

var ICON_OBJ_FOLDER_COLLECTION = React.createElement("i", {
  className: "rmlicon-collection"
});
/**
 * Icon showing a gallery.
 * 
 * @type React.Element
 */

var ICON_OBJ_FOLDER_GALLERY = React.createElement("i", {
  className: "rmlicon-gallery"
});
/**
 * Handle tree node defaults for loaded folder items and new items.
 * 
 * @param {object[]} folders The folders
 * @returns object[]
 */

function applyNodeDefaults(arr) {
  return arr.map(function (_ref2) {
    var id = _ref2.id,
        name = _ref2.name,
        cnt = _ref2.cnt,
        children = _ref2.children,
        contentCustomOrder = _ref2.contentCustomOrder,
        forceCustomOrder = _ref2.forceCustomOrder,
        lastOrderBy = _ref2.lastOrderBy,
        orderAutomatically = _ref2.orderAutomatically,
        rest = _objectWithoutProperties(_ref2, ["id", "name", "cnt", "children", "contentCustomOrder", "forceCustomOrder", "lastOrderBy", "orderAutomatically"]);

    return function (node) {
      // Update node
      switch (node.properties.type) {
        case 0:
          node.iconActive = ICON_OBJ_FOLDER_OPEN;
          break;

        case 1:
          node.icon = ICON_OBJ_FOLDER_COLLECTION;
          break;

        case 2:
          node.icon = ICON_OBJ_FOLDER_GALLERY;
          break;

        default:
          break;
      }
      /**
       * A tree node is fetched from the server and should be prepared
       * for the {@link module:store/TreeNode~TreeNode} class.
       * 
       * @event module:util/hooks#tree/node
       * @param {object} node The node object
       */


      _hooks__WEBPACK_IMPORTED_MODULE_3__["default"].call('tree/node', [node]);
      return node;
    }(jquery__WEBPACK_IMPORTED_MODULE_1___default.a.extend({}, react_aiot__WEBPACK_IMPORTED_MODULE_5__["TreeNode"].defaultProps, {
      // Default node
      id: id,
      title: name,
      icon: ICON_OBJ_FOLDER_CLOSED,
      count: cnt,
      childNodes: children ? applyNodeDefaults(children) : [],
      properties: rest,
      className: {},
      contentCustomOrder: contentCustomOrder,
      forceCustomOrder: forceCustomOrder,
      lastOrderBy: !!lastOrderBy ? lastOrderBy : "",
      orderAutomatically: !!orderAutomatically,
      $visible: true
    }));
  });
}
/**
 * Execute the REST query to fetch the category tree.
 * 
 * @param {object} [settings] Additional options for jQuery.ajax
 * @returns {object} The original AJAX result and the tree result prepared for AIO
 */

function fetchTree(_x) {
  return _fetchTree.apply(this, arguments);
}
/**
 * Allows you to find an object path.
 * 
 * @param {object} obj The object
 * @param {string} path The path
 * @returns {mixed|undefined}
 */

function _fetchTree() {
  _fetchTree = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(settings) {
    var _ref3, tree, rest;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return ajax('tree', settings);

          case 2:
            _ref3 = _context.sent;
            tree = _ref3.tree;
            rest = _objectWithoutProperties(_ref3, ["tree"]);

            if (!tree) {
              rml && rml.store && rml.store.setter(function (self) {
                self.methodMoved301Endpoint = true;
              });
            }

            return _context.abrupt("return", _objectSpread({
              tree: applyNodeDefaults(tree)
            }, rest));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _fetchTree.apply(this, arguments);
}

function findDeep(obj, path) {
  var paths = path.split('.');
  var current = obj;

  for (var i = 0; i < paths.length; ++i) {
    if (current[paths[i]] == undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }

  return current;
}
/**
 * Transform bytes to humand readable string.
 * 
 * @param {int} bytes The bytes
 * @returns {string}
 * @see http://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable
 */

function humanFileSize(bytes) {
  var si = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  var units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  var u = -1;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.abs(bytes) >= thresh && u < units.length - 1);

  return bytes.toFixed(1) + ' ' + units[u];
}
/**
 * Transform seconds to readable HH:mm:ss.
 * 
 * @param {int} totalSec The seconds
 * @returns {string}
 */

function secondsFormat(totalSec) {
  var hours = Math.floor(totalSec / 3600),
      minutes = Math.floor((totalSec - hours * 3600) / 60),
      seconds = totalSec - hours * 3600 - minutes * 60;
  return (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
}
/**
 * Export Data URI to blob instance.
 * 
 * @param {string} sUri
 * @returns {Blob}
 */

function dataUriToBlob(sUri) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;

  if (sUri.split(",")[0].indexOf("base64") >= 0) {
    byteString = window.atob(sUri.split(',')[1]);
  } else {
    byteString = unescape(sUri.split(',')[1]);
  } // separate out the mime component


  var type = sUri.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to a typed array

  var ia = new Uint8Array(byteString.length);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new window.Blob([ia], {
    type: type
  });
}
/**
 * Detects if an element is in view port.
 * 
 * @param {jQuery|HTMLElement} el
 * @returns {boolean}
 */

function inViewPort(el, allowFromBottom) {
  var elementTop = jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).offset().top,
      height = jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).outerHeight(),
      elementBottom = elementTop + height,
      viewportTop = jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scrollTop(),
      viewportBottom = viewportTop + jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).height();

  if (allowFromBottom && viewportTop > elementBottom - viewportTop) {
    return true;
  }

  return elementBottom > viewportTop && elementTop < viewportBottom;
}
/**
 * Check if Material WP is activated.
 * 
 * @see https://codecanyon.net/item/material-wp-material-design-dashboard-theme/12981098
 * @returns {boolean}
 */

function isMaterialWp() {
  return jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').attr('class').indexOf('material-wp') > -1;
}

function materialWpWidthRules(calc) {
  return 'width: -webkit-calc(' + calc + ') !important;' + 'width: -moz-calc(' + calc + ') !important;' + 'width: calc(' + calc + ') !important;';
}
/**
 * Resize handler for opposite when Material WP is active.
 * 
 * @returns {boolean}
 */


function materialWpResizeOpposite(containerId, oppositeId, width, injectStyle) {
  var adminBarWidth = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#adminmenu").width();
  return injectStyle(containerId + '-styleOpposite', "@media only screen and (min-width: 1224px) {\n            body:not(.wp-customizer) #".concat(oppositeId, " {' +\n                ").concat(materialWpWidthRules('100% - ' + width + 'px - ' + (adminBarWidth + 20) + 'px'), "\n            }\n        }\n        @media only screen and (max-width: 1223px) and (min-width: 990px) {\n            body:not(.wp-customizer) #").concat(oppositeId, " {' +\n                ").concat(materialWpWidthRules('100% - ' + width + 'px - ' + (adminBarWidth + 40) + 'px'), "\n            }\n        }\n        @media only screen and (min-width: 700px) {\n          body.aiot-wp-material.activate-aiot .rml-container {\n        \tmargin-left: ").concat(adminBarWidth + 20, "px;\n          }\n        }\n        @media only screen and (max-width: 1223px) {\n          body.aiot-wp-material.activate-aiot .rml-container {\n            margin-left: ").concat(adminBarWidth + 40, "px;\n          }\n        }\n        body #wpcontent #wpbody #").concat(oppositeId, ".mwp-expanded {' +\n            ").concat(materialWpWidthRules('100% - ' + width + 'px - 50px'), "\n        }"));
}


/***/ }),

/***/ "./public/src/util/wpRfc.js":
/*!**********************************!*\
  !*** ./public/src/util/wpRfc.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ "./public/src/util/hooks.js");
/* harmony import */ var _others_rfcBreadcrumb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../others/rfcBreadcrumb.js */ "./public/src/others/rfcBreadcrumb.js");
/* harmony import */ var _others_rfcShortcutInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../others/rfcShortcutInfo.js */ "./public/src/others/rfcShortcutInfo.js");
/* harmony import */ var _others_rfcPreUploadUi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../others/rfcPreUploadUi.js */ "./public/src/others/rfcPreUploadUi.js");
/**
 * The RML WP RFC functionality allows you to create callbacks for specific
 * elements defined in the DOM. For example you have to fallback to HTML output
 * like the CustomField in attachment browser.
 * 
 * You can otherwise use the attribute data-wprfc-visible="1" then the RFC is called when
 * the elemen is visible. You do not have to append an additional script.
 * 
 * @example <caption>PHP side component</caption>
 * <div class="rml-wprfc" data-wprfc="breadcrumb"></div>
 * <script>jQuery(function() { window.rml.hooks.call("wprfc"); });</script>
 * @example <caption>JS side</caption>
 * window.rml.hooks.register('wprfc/breadcrumb', () => { });
 * @module util/wpRfc
 * @see module:util/hooks#wprfc/$function
 */





var RFC_CLASS_NAME = 'rml-wprfc';
/**
 * Interval visible rfc.
 */

var _fnSearch;

(_fnSearch = function fnSearch() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-wprfc-visible="1"]').filter(':visible').removeClass(RFC_CLASS_NAME + '-visible').each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-wprfc-visible', '2');
    /**
     * A RML WP RFC is called and should be handled.
     * 
     * @event module:util/hooks#wprfc/$function
     * @param {object} data The element data
     * @param {jQuery} $el The element
     */

    _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].call('wprfc/' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-wprfc'), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  setTimeout(_fnSearch, 500);
})();
/**
 * Usual scripted rfc.
 */


_hooks__WEBPACK_IMPORTED_MODULE_1__["default"].register('wprfc', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.' + RFC_CLASS_NAME).removeClass(RFC_CLASS_NAME).each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':visible') && _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].call('wprfc/' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-wprfc'), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
});

/***/ }),

/***/ "i18n-react":
/*!***************************************!*\
  !*** external "window['i18n-react']" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window['i18n-react'];

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-aiot":
/*!****************************!*\
  !*** external "ReactAIOT" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactAIOT;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "rmlopts":
/*!**************************!*\
  !*** external "rmlOpts" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rmlOpts;

/***/ }),

/***/ "tinymce":
/*!**************************!*\
  !*** external "tinymce" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = tinymce;

/***/ })

/******/ });
//# sourceMappingURL=rml_shortcode.js.map