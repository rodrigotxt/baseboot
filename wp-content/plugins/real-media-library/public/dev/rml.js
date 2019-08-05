var rml =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/src/rml.js");
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

/***/ "./node_modules/antd/lib/icon/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/icon/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj['default'] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var Icon = function Icon(props) {
  var type = props.type,
      _props$className = props.className,
      className = _props$className === undefined ? '' : _props$className,
      spin = props.spin;
  var classString = (0, _classnames2['default'])((0, _defineProperty3['default'])({
    anticon: true,
    'anticon-spin': !!spin || type === 'loading'
  }, 'anticon-' + type, true), className);
  return React.createElement('i', (0, _extends3['default'])({}, (0, _omit2['default'])(props, ['type', 'spin']), {
    className: classString
  }));
};

exports['default'] = Icon;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/progress/index.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/progress/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _progress = __webpack_require__(/*! ./progress */ "./node_modules/antd/lib/progress/progress.js");

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

exports['default'] = _progress2['default'];
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/progress/progress.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/progress/progress.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _icon = __webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _rcProgress = __webpack_require__(/*! rc-progress */ "./node_modules/rc-progress/es/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj['default'] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var statusColorMap = {
  normal: '#108ee9',
  exception: '#ff5500',
  success: '#87d068'
};

var validProgress = function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  } else if (progress > 100) {
    return 100;
  }

  return progress;
};

var Progress = function (_React$Component) {
  (0, _inherits3['default'])(Progress, _React$Component);

  function Progress() {
    (0, _classCallCheck3['default'])(this, Progress);
    return (0, _possibleConstructorReturn3['default'])(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Progress, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var props = this.props;

      var prefixCls = props.prefixCls,
          className = props.className,
          _props$percent = props.percent,
          percent = _props$percent === undefined ? 0 : _props$percent,
          status = props.status,
          format = props.format,
          trailColor = props.trailColor,
          size = props.size,
          successPercent = props.successPercent,
          type = props.type,
          strokeWidth = props.strokeWidth,
          width = props.width,
          showInfo = props.showInfo,
          _props$gapDegree = props.gapDegree,
          gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree,
          gapPosition = props.gapPosition,
          strokeColor = props.strokeColor,
          _props$strokeLinecap = props.strokeLinecap,
          strokeLinecap = _props$strokeLinecap === undefined ? 'round' : _props$strokeLinecap,
          restProps = __rest(props, ["prefixCls", "className", "percent", "status", "format", "trailColor", "size", "successPercent", "type", "strokeWidth", "width", "showInfo", "gapDegree", "gapPosition", "strokeColor", "strokeLinecap"]);

      var progressStatus = parseInt(successPercent ? successPercent.toString() : percent.toString(), 10) >= 100 && !('status' in props) ? 'success' : status || 'normal';
      var progressInfo = void 0;
      var progress = void 0;

      var textFormatter = format || function (percentNumber) {
        return percentNumber + '%';
      };

      if (showInfo) {
        var text = void 0;
        var iconType = type === 'circle' || type === 'dashboard' ? '' : '-circle';

        if (format || progressStatus !== 'exception' && progressStatus !== 'success') {
          text = textFormatter(validProgress(percent), validProgress(successPercent));
        } else if (progressStatus === 'exception') {
          text = React.createElement(_icon2['default'], {
            type: 'cross' + iconType
          });
        } else if (progressStatus === 'success') {
          text = React.createElement(_icon2['default'], {
            type: 'check' + iconType
          });
        }

        progressInfo = React.createElement('span', {
          className: prefixCls + '-text'
        }, text);
      }

      if (type === 'line') {
        var percentStyle = {
          width: validProgress(percent) + '%',
          height: strokeWidth || (size === 'small' ? 6 : 8),
          background: strokeColor,
          borderRadius: strokeLinecap === 'square' ? 0 : '100px'
        };
        var successPercentStyle = {
          width: validProgress(successPercent) + '%',
          height: strokeWidth || (size === 'small' ? 6 : 8),
          borderRadius: strokeLinecap === 'square' ? 0 : '100px'
        };
        var successSegment = successPercent !== undefined ? React.createElement('div', {
          className: prefixCls + '-success-bg',
          style: successPercentStyle
        }) : null;
        progress = React.createElement('div', null, React.createElement('div', {
          className: prefixCls + '-outer'
        }, React.createElement('div', {
          className: prefixCls + '-inner'
        }, React.createElement('div', {
          className: prefixCls + '-bg',
          style: percentStyle
        }), successSegment)), progressInfo);
      } else if (type === 'circle' || type === 'dashboard') {
        var circleSize = width || 120;
        var circleStyle = {
          width: circleSize,
          height: circleSize,
          fontSize: circleSize * 0.15 + 6
        };
        var circleWidth = strokeWidth || 6;
        var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';
        var gapDeg = gapDegree || type === 'dashboard' && 75;
        progress = React.createElement('div', {
          className: prefixCls + '-inner',
          style: circleStyle
        }, React.createElement(_rcProgress.Circle, {
          percent: validProgress(percent),
          strokeWidth: circleWidth,
          trailWidth: circleWidth,
          strokeColor: statusColorMap[progressStatus],
          strokeLinecap: strokeLinecap,
          trailColor: trailColor,
          prefixCls: prefixCls,
          gapDegree: gapDeg,
          gapPosition: gapPos
        }), progressInfo);
      }

      var classString = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + (type === 'dashboard' && 'circle' || type), true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-status-' + progressStatus, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-show-info', showInfo), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + size, size), _classNames), className);
      return React.createElement('div', (0, _extends3['default'])({}, restProps, {
        className: classString
      }), progress);
    }
  }]);
  return Progress;
}(React.Component);

exports['default'] = Progress;
Progress.defaultProps = {
  type: 'line',
  percent: 0,
  showInfo: true,
  trailColor: '#f3f3f3',
  prefixCls: 'ant-progress',
  size: 'default'
};
Progress.propTypes = {
  status: PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
  type: PropTypes.oneOf(['line', 'circle', 'dashboard']),
  showInfo: PropTypes.bool,
  percent: PropTypes.number,
  width: PropTypes.number,
  strokeWidth: PropTypes.number,
  strokeLinecap: PropTypes.oneOf(['round', 'square']),
  strokeColor: PropTypes.string,
  trailColor: PropTypes.string,
  format: PropTypes.func,
  gapDegree: PropTypes.number,
  'default': PropTypes.oneOf(['default', 'small'])
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/progress/style/index.css":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/progress/style/index.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js"),
  __esModule: true
};

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js"),
  __esModule: true
};

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js"),
  __esModule: true
};

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js"),
  __esModule: true
};

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js"),
  __esModule: true
};

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js"),
  __esModule: true
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if (typeof module !== 'undefined' && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");

var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;

module.exports = function create(P, D) {
  return $Object.create(P, D);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");

var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;

module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");

__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");

__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");

module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  /* empty */
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.5.7'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");

module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;

  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;

    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue; // export native or passed

    out = own ? target[key] : source[key]; // prevent global pollution for namespaces

    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();

            case 1:
              return new C(a);

            case 2:
              return new C(a, b);
          }

          return new C(a, b, c);
        }

        return C.apply(this, arguments);
      };

      F[PROTOTYPE] = C[PROTOTYPE];
      return F; // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
}; // type bitmap


$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
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

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;

module.exports = document && document.documentElement;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js"); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");

module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");

var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");

var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);

  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");

var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;

var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});

var setMeta = function (it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      // object ID
      w: {} // weak collections IDs

    }
  });
};

var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMeta(it); // return object ID
  }

  return it[META].i;
};

var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMeta(it); // return hash weak collections IDs
  }

  return it[META].w;
}; // add metadata on freeze-family methods calling


var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};

var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.2.1 Object.assign(target, source, ...)

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");

var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  }

  return T;
} : $assign;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");

var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

var Empty = function () {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;

  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];

  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");

var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) dP.f(O, P = keys[i++], Properties[P]);

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");

var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {
    /* empty */
  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;

var toString = {}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");

var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key); // Don't enum bug & hidden keys


  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
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

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");

var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }

    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");

var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js"); // true  -> String#at
// false -> String#codePointAt


module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
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

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");

var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;

module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt.f(name)
  });
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");

var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;

var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");

var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js"); // 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()


module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }

  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', {
  assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js")
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js"); // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


$export($export.S, 'Object', {
  create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js")
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js"); // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', {
  defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Object', {
  setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true); // 21.1.3.27 String.prototype[@@iterator]()


__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target

  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ECMAScript 6 symbols shim

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");

var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;

var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");

var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");

var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");

var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");

var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");

var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");

var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");

var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);

  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }

    return setSymbolDesc(it, key, D);
  }

  return dP(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;

  while (l > i) $defineProperty(it, key = keys[i++], P[key]);

  return it;
};

var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }

  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }

  return result;
}; // 19.4.1.1 Symbol([description])


if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };

    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () {
    setter = true;
  },
  useSimple: function () {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols

  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;

    while (arguments.length > i) args.push(arguments[i++]);

    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');

/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");

var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

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

/***/ "./node_modules/mobx-react/index.module.js":
/*!*************************************************!*\
  !*** ./node_modules/mobx-react/index.module.js ***!
  \*************************************************/
/*! exports provided: propTypes, PropTypes, onError, observer, Observer, renderReporter, componentByNodeRegistery, componentByNodeRegistry, trackComponents, useStaticRendering, Provider, inject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return onError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderReporter", function() { return renderReporter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentByNodeRegistery", function() { return componentByNodeRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentByNodeRegistry", function() { return componentByNodeRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackComponents", function() { return trackComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return useStaticRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);


 // These functions can be stubbed out in specific environments

var unstable_batchedUpdates$1 = undefined;
'use strict';
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var EventEmitter = function () {
  function EventEmitter() {
    classCallCheck(this, EventEmitter);
    this.listeners = [];
  }

  createClass(EventEmitter, [{
    key: "on",
    value: function on(cb) {
      var _this = this;

      this.listeners.push(cb);
      return function () {
        var index = _this.listeners.indexOf(cb);

        if (index !== -1) _this.listeners.splice(index, 1);
      };
    }
  }, {
    key: "emit",
    value: function emit(data) {
      this.listeners.forEach(function (fn) {
        return fn(data);
      });
    }
  }]);
  return EventEmitter;
}(); // Copied from React.PropTypes


function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = typeof propValue === "undefined" ? "undefined" : _typeof(propValue);

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker = void 0;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableArray"];
          break;

        case "Object":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableObject"];
          break;

        case "Map":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableMap"];
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      }

      var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName);
      if (error instanceof Error) return error;
      var propValue = props[propName];

      for (var i = 0; i < propValue.length; i++) {
        error = typeChecker.apply(undefined, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
        if (error instanceof Error) return error;
      }

      return null;
    });
  });
}

var observableArray = createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = createObservableTypeCheckerCreator(false, "Map");
var observableObject = createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = createObservableTypeCheckerCreator(true, "Object");
var propTypes = Object.freeze({
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
});

function isStateless(component) {
  // `function() {}` has prototype, but `() => {}` doesn't
  // `() => {}` via Babel has prototype too.
  return !(component.prototype && component.prototype.render);
}

var injectorContextTypes = {
  mobxStores: objectOrObservableObject
};
Object.seal(injectorContextTypes);
var proxiedInjectorProps = {
  contextTypes: {
    get: function get$$1() {
      return injectorContextTypes;
    },
    set: function set$$1(_) {
      console.warn("Mobx Injector: you are trying to attach `contextTypes` on an component decorated with `inject` (or `observer`) HOC. Please specify the contextTypes on the wrapped component instead. It is accessible through the `wrappedComponent`");
    },
    configurable: true,
    enumerable: false
  },
  isMobxInjector: {
    value: true,
    writable: true,
    configurable: true,
    enumerable: true
    /**
     * Store Injection
     */

  }
};

function createStoreInjector(grabStoresFn, component, injectNames) {
  var _class, _temp2;

  var displayName = "inject-" + (component.displayName || component.name || component.constructor && component.constructor.name || "Unknown");
  if (injectNames) displayName += "-with-" + injectNames;
  var Injector = (_temp2 = _class = function (_Component) {
    inherits(Injector, _Component);

    function Injector() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, Injector);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Injector.__proto__ || Object.getPrototypeOf(Injector)).call.apply(_ref, [this].concat(args))), _this), _this.storeRef = function (instance) {
        _this.wrappedInstance = instance;
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Injector, [{
      key: "render",
      value: function render() {
        // Optimization: it might be more efficient to apply the mapper function *outside* the render method
        // (if the mapper is a function), that could avoid expensive(?) re-rendering of the injector component
        // See this test: 'using a custom injector is not too reactive' in inject.js
        var newProps = {};

        for (var key in this.props) {
          if (this.props.hasOwnProperty(key)) {
            newProps[key] = this.props[key];
          }
        }

        var additionalProps = grabStoresFn(this.context.mobxStores || {}, newProps, this.context) || {};

        for (var _key2 in additionalProps) {
          newProps[_key2] = additionalProps[_key2];
        }

        if (!isStateless(component)) {
          newProps.ref = this.storeRef;
        }

        return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(component, newProps);
      }
    }]);
    return Injector;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _class.displayName = displayName, _temp2); // Static fields from component should be visible on the generated Injector

  hoistNonReactStatics_cjs(Injector, component);
  Injector.wrappedComponent = component;
  Object.defineProperties(Injector, proxiedInjectorProps);
  return Injector;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject()
/* fn(stores, nextProps) or ...storeNames */
{
  var grabStoresFn = void 0;

  if (typeof arguments[0] === "function") {
    grabStoresFn = arguments[0];
    return function (componentClass) {
      var injected = createStoreInjector(grabStoresFn, componentClass);
      injected.isMobxInjector = false; // supress warning
      // mark the Injector as observer, to make it react to expressions in `grabStoresFn`,
      // see #111

      injected = observer(injected);
      injected.isMobxInjector = true; // restore warning

      return injected;
    };
  } else {
    var storeNames = [];

    for (var i = 0; i < arguments.length; i++) {
      storeNames[i] = arguments[i];
    }

    grabStoresFn = grabStoresByName(storeNames);
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, storeNames.join("-"));
    };
  }
}

var mobxAdminProperty = mobx__WEBPACK_IMPORTED_MODULE_0__["$mobx"] || "$mobx";
/**
 * dev tool support
 */

var isDevtoolsEnabled = false;
var isUsingStaticRendering = false;
var warnedAboutObserverInjectDeprecation = false; // WeakMap<Node, Object>;

var componentByNodeRegistry = typeof WeakMap !== "undefined" ? new WeakMap() : undefined;
var renderReporter = new EventEmitter();
var createdSymbols = {};

function createRealSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  return "$mobxReactProp$" + name + Math.random();
}

function createSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createRealSymbol(name);
  }

  return createdSymbols[name];
}

var skipRenderKey = createSymbol("skipRender");
var isForcingUpdateKey = createSymbol("isForcingUpdate");
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */

function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}

function findDOMNode$2(component) {
  if (react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"]) {
    try {
      return Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"])(component);
    } catch (e) {
      // findDOMNode will throw in react-test-renderer, see:
      // See https://github.com/mobxjs/mobx-react/issues/216
      // Is there a better heuristic?
      return null;
    }
  }

  return null;
}

function reportRendering(component) {
  var node = findDOMNode$2(component);
  if (node && componentByNodeRegistry) componentByNodeRegistry.set(node, component);
  renderReporter.emit({
    event: "render",
    renderTime: component.__$mobRenderEnd - component.__$mobRenderStart,
    totalTime: Date.now() - component.__$mobRenderStart,
    component: component,
    node: node
  });
}

function trackComponents() {
  if (typeof WeakMap === "undefined") throw new Error("[mobx-react] tracking components is not supported in this browser.");
  if (!isDevtoolsEnabled) isDevtoolsEnabled = true;
}

function useStaticRendering(useStaticRendering) {
  isUsingStaticRendering = useStaticRendering;
}
/**
 * Errors reporter
 */


var errorsReporter = new EventEmitter();
/**
 * Utilities
 */

function patch(target, funcName) {
  var runMixinFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var base = target[funcName];
  var mixinFunc = reactiveMixin[funcName];
  var f = !base ? mixinFunc : runMixinFirst === true ? function () {
    mixinFunc.apply(this, arguments);
    base.apply(this, arguments);
  } : function () {
    base.apply(this, arguments);
    mixinFunc.apply(this, arguments);
  }; // MWE: ideally we freeze here to protect against accidental overwrites in component instances, see #195
  // ...but that breaks react-hot-loader, see #231...

  target[funcName] = f;
}

function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) return true;

  if ((typeof objA === "undefined" ? "undefined" : _typeof(objA)) !== "object" || objA === null || (typeof objB === "undefined" ? "undefined" : _typeof(objB)) !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function makeComponentReactive(render) {
  var _this2 = this;

  if (isUsingStaticRendering === true) return render.call(this);

  function reactiveRender() {
    var _this = this;

    isRenderingPending = false;
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      if (isDevtoolsEnabled) {
        _this.__$mobRenderStart = Date.now();
      }

      try {
        rendering = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateChanges"])(false, baseRender);
      } catch (e) {
        exception = e;
      }

      if (isDevtoolsEnabled) {
        _this.__$mobRenderEnd = Date.now();
      }
    });

    if (exception) {
      errorsReporter.emit(exception);
      throw exception;
    }

    return rendering;
  } // Generate friendly name for debugging


  var initialName = this.displayName || this.name || this.constructor && (this.constructor.displayName || this.constructor.name) || "<component>";
  var rootNodeID = this._reactInternalInstance && this._reactInternalInstance._rootNodeID || this._reactInternalInstance && this._reactInternalInstance._debugID || this._reactInternalFiber && this._reactInternalFiber._debugID;
  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */

  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false); // wire up reactive render

  var baseRender = render.bind(this);
  var isRenderingPending = false;
  var reaction = new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](initialName + "#" + rootNodeID + ".render()", function () {
    if (!isRenderingPending) {
      // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
      // This unidiomatic React usage but React will correctly warn about this so we continue as usual
      // See #85 / Pull #44
      isRenderingPending = true;
      if (typeof _this2.componentWillReact === "function") _this2.componentWillReact(); // TODO: wrap in action?

      if (_this2.__$mobxIsUnmounted !== true) {
        // If we are unmounted at this point, componentWillReact() had a side effect causing the component to unmounted
        // TODO: remove this check? Then react will properly warn about the fact that this should not happen? See #73
        // However, people also claim this migth happen during unit tests..
        var hasError = true;

        try {
          setHiddenProp(_this2, isForcingUpdateKey, true);
          if (!_this2[skipRenderKey]) react__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.forceUpdate.call(_this2);
          hasError = false;
        } finally {
          setHiddenProp(_this2, isForcingUpdateKey, false);
          if (hasError) reaction.dispose();
        }
      }
    }
  });
  reaction.reactComponent = this;
  reactiveRender[mobxAdminProperty] = reaction;
  this.render = reactiveRender;
  return reactiveRender.call(this);
}
/**
 * ReactiveMixin
 */


var reactiveMixin = {
  componentWillUnmount: function componentWillUnmount() {
    if (isUsingStaticRendering === true) return;
    this.render[mobxAdminProperty] && this.render[mobxAdminProperty].dispose();
    this.__$mobxIsUnmounted = true;

    if (isDevtoolsEnabled) {
      var node = findDOMNode$2(this);

      if (node && componentByNodeRegistry) {
        componentByNodeRegistry.delete(node);
      }

      renderReporter.emit({
        event: "destroy",
        component: this,
        node: node
      });
    }
  },
  componentDidMount: function componentDidMount() {
    if (isDevtoolsEnabled) {
      reportRendering(this);
    }
  },
  componentDidUpdate: function componentDidUpdate() {
    if (isDevtoolsEnabled) {
      reportRendering(this);
    }
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (isUsingStaticRendering) {
      console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
    } // update on any state changes (as is the default)


    if (this.state !== nextState) {
      return true;
    } // update if props are shallowly not equal, inspired by PureRenderMixin
    // we could return just 'false' here, and avoid the `skipRender` checks etc
    // however, it is nicer if lifecycle events are triggered like usually,
    // so we return true here if props are shallowly modified.


    return !shallowEqual(this.props, nextProps);
  }
};

function makeObservableProp(target, propName) {
  var valueHolderKey = createSymbol(propName + " value holder");
  var atomHolderKey = createSymbol(propName + " atom holder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, Object(mobx__WEBPACK_IMPORTED_MODULE_0__["createAtom"])("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get$$1() {
      getAtom.call(this).reportObserved();
      return this[valueHolderKey];
    },
    set: function set$$1(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}
/**
 * Observer function / decorator
 */


function observer(arg1, arg2) {
  if (typeof arg1 === "string") {
    throw new Error("Store names should be provided as array");
  }

  if (Array.isArray(arg1)) {
    // TODO: remove in next major
    // component needs stores
    if (!warnedAboutObserverInjectDeprecation) {
      warnedAboutObserverInjectDeprecation = true;
      console.warn('Mobx observer: Using observer to inject stores is deprecated since 4.0. Use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))` instead of `@observer(["store1", "store2"]) ComponentClass`');
    }

    if (!arg2) {
      // invoked as decorator
      return function (componentClass) {
        return observer(arg1, componentClass);
      };
    } else {
      return inject.apply(null, arg1)(observer(arg2));
    }
  }

  var componentClass = arg1;

  if (componentClass.isMobxInjector === true) {
    console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
  }

  if (componentClass.__proto__ === react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
    console.warn("Mobx observer: You are using 'observer' on React.PureComponent. These two achieve two opposite goals and should not be used together");
  } // Stateless function component:
  // If it is function but doesn't seem to be a react class constructor,
  // wrap it to a react class automatically


  if (typeof componentClass === "function" && (!componentClass.prototype || !componentClass.prototype.render) && !componentClass.isReactClass && !react__WEBPACK_IMPORTED_MODULE_1__["Component"].isPrototypeOf(componentClass)) {
    var _class, _temp;

    var observerComponent = observer((_temp = _class = function (_Component) {
      inherits(_class, _Component);

      function _class() {
        classCallCheck(this, _class);
        return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      createClass(_class, [{
        key: "render",
        value: function render() {
          return componentClass.call(this, this.props, this.context);
        }
      }]);
      return _class;
    }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _class.displayName = componentClass.displayName || componentClass.name, _class.contextTypes = componentClass.contextTypes, _class.propTypes = componentClass.propTypes, _class.defaultProps = componentClass.defaultProps, _temp));
    hoistNonReactStatics_cjs(observerComponent, componentClass);
    return observerComponent;
  }

  if (!componentClass) {
    throw new Error("Please pass a valid component to 'observer'");
  }

  var target = componentClass.prototype || componentClass;
  mixinLifecycleEvents(target);
  componentClass.isMobXReactObserver = true;
  makeObservableProp(target, "props");
  makeObservableProp(target, "state");
  var baseRender = target.render;

  target.render = function () {
    return makeComponentReactive.call(this, baseRender);
  };

  return componentClass;
}

function mixinLifecycleEvents(target) {
  ["componentDidMount", "componentWillUnmount", "componentDidUpdate"].forEach(function (funcName) {
    patch(target, funcName);
  });

  if (!target.shouldComponentUpdate) {
    target.shouldComponentUpdate = reactiveMixin.shouldComponentUpdate;
  } else {
    if (target.shouldComponentUpdate !== reactiveMixin.shouldComponentUpdate) {
      // TODO: make throw in next major
      console.warn("Use `shouldComponentUpdate` in an `observer` based component breaks the behavior of `observer` and might lead to unexpected results. Manually implementing `sCU` should not be needed when using mobx-react.");
    }
  }
}

var Observer = observer(function (_ref) {
  var children = _ref.children,
      observerInject = _ref.inject,
      render = _ref.render;
  var component = children || render;

  if (typeof component === "undefined") {
    return null;
  }

  if (!observerInject) {
    return component();
  } // TODO: remove in next major


  console.warn("<Observer inject=.../> is no longer supported. Please use inject on the enclosing component instead");
  var InjectComponent = inject(observerInject)(component);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InjectComponent, null);
});
Observer.displayName = "Observer";

var ObserverPropsCheck = function ObserverPropsCheck(props, key, componentName, location, propFullName) {
  var extraKey = key === "children" ? "render" : "children";

  if (typeof props[key] === "function" && typeof props[extraKey] === "function") {
    return new Error("Invalid prop,do not use children and render in the same time in`" + componentName);
  }

  if (typeof props[key] === "function" || typeof props[extraKey] === "function") {
    return;
  }

  return new Error("Invalid prop `" + propFullName + "` of type `" + _typeof(props[key]) + "` supplied to" + " `" + componentName + "`, expected `function`.");
};

Observer.propTypes = {
  render: ObserverPropsCheck,
  children: ObserverPropsCheck
};
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);

  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  } // Binding "this" is important for shallow renderer support.


  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
} // React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.


componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component$$1) {
  var prototype = Component$$1.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (typeof Component$$1.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
    return Component$$1;
  } // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.


  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;

  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }

  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }

  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }

  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component$$1.displayName || Component$$1.name;
    var newApiName = typeof Component$$1.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
  } // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.


  if (typeof Component$$1.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  } // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.


  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
    }

    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component$$1;
}

var _class;

var _temp;

var specialReactKeys = {
  children: true,
  key: true,
  ref: true
};
var Provider = (_temp = _class = function (_Component) {
  inherits(Provider, _Component);

  function Provider(props, context) {
    classCallCheck(this, Provider);

    var _this = possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).call(this, props, context));

    _this.state = {};
    copyStores(props, _this.state);
    return _this;
  }

  createClass(Provider, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      var stores = {}; // inherit stores

      copyStores(this.context.mobxStores, stores); // add own stores

      copyStores(this.props, stores);
      return {
        mobxStores: stores
      };
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (!nextProps) return null;
      if (!prevState) return nextProps; // Maybe this warning is too aggressive?

      if (Object.keys(nextProps).filter(validStoreName).length !== Object.keys(prevState).filter(validStoreName).length) console.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children");
      if (!nextProps.suppressChangedStoreWarning) for (var key in nextProps) {
        if (validStoreName(key) && prevState[key] !== nextProps[key]) console.warn("MobX Provider: Provided store '" + key + "' has changed. Please avoid replacing stores as the change might not propagate to all children");
      }
      return nextProps;
    }
  }]);
  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _class.contextTypes = {
  mobxStores: objectOrObservableObject
}, _class.childContextTypes = {
  mobxStores: objectOrObservableObject.isRequired
}, _temp);

function copyStores(from, to) {
  if (!from) return;

  for (var key in from) {
    if (validStoreName(key)) to[key] = from[key];
  }
}

function validStoreName(key) {
  return !specialReactKeys[key] && key !== "suppressChangedStoreWarning";
} // TODO: kill in next major


polyfill(Provider);
if (!react__WEBPACK_IMPORTED_MODULE_1__["Component"]) throw new Error("mobx-react requires React to be available");
if (!mobx__WEBPACK_IMPORTED_MODULE_0__["spy"]) throw new Error("mobx-react requires mobx to be available");
if (typeof react_dom__WEBPACK_IMPORTED_MODULE_2__["unstable_batchedUpdates"] === "function") Object(mobx__WEBPACK_IMPORTED_MODULE_0__["configure"])({
  reactionScheduler: react_dom__WEBPACK_IMPORTED_MODULE_2__["unstable_batchedUpdates"]
});else if (typeof unstable_batchedUpdates$1 === "function") Object(mobx__WEBPACK_IMPORTED_MODULE_0__["configure"])({
  reactionScheduler: unstable_batchedUpdates$1
});

var onError = function onError(fn) {
  return errorsReporter.on(fn);
};
/* DevTool support */
// See: https://github.com/andykog/mobx-devtools/blob/d8976c24b8cb727ed59f9a0bc905a009df79e221/src/backend/installGlobalHook.js


if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === "object") {
  var mobx$1 = {
    spy: mobx__WEBPACK_IMPORTED_MODULE_0__["spy"],
    extras: {
      getDebugName: mobx__WEBPACK_IMPORTED_MODULE_0__["getDebugName"]
    }
  };
  var mobxReact = {
    renderReporter: renderReporter,
    componentByNodeRegistry: componentByNodeRegistry,
    componentByNodeRegistery: componentByNodeRegistry,
    trackComponents: trackComponents
  };

  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobxReact(mobxReact, mobx$1);
}



/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/omit.js/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/omit.js/es/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);


function omit(obj, fields) {
  var shallowCopy = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, obj);

  for (var i = 0; i < fields.length; i++) {
    var key = fields[i];
    delete shallowCopy[key];
  }

  return shallowCopy;
}

/* harmony default export */ __webpack_exports__["default"] = (omit);

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var printWarning = function () {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function () {};

if (true) {
  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = typeof propValue;

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (true) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function (object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }; // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/rc-progress/es/Circle.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-progress/es/Circle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enhancer */ "./node_modules/rc-progress/es/enhancer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types */ "./node_modules/rc-progress/es/types.js");





/* eslint react/prop-types: 0 */






var Circle = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Circle, _Component);

  function Circle() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Circle);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _Component.apply(this, arguments));
  }

  Circle.prototype.getPathStyles = function getPathStyles() {
    var _props = this.props,
        percent = _props.percent,
        strokeWidth = _props.strokeWidth,
        strokeColor = _props.strokeColor,
        _props$gapDegree = _props.gapDegree,
        gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree,
        gapPosition = _props.gapPosition;
    var radius = 50 - strokeWidth / 2;
    var beginPositionX = 0;
    var beginPositionY = -radius;
    var endPositionX = 0;
    var endPositionY = -2 * radius;

    switch (gapPosition) {
      case 'left':
        beginPositionX = -radius;
        beginPositionY = 0;
        endPositionX = 2 * radius;
        endPositionY = 0;
        break;

      case 'right':
        beginPositionX = radius;
        beginPositionY = 0;
        endPositionX = -2 * radius;
        endPositionY = 0;
        break;

      case 'bottom':
        beginPositionY = radius;
        endPositionY = 2 * radius;
        break;

      default:
    }

    var pathString = 'M 50,50 m ' + beginPositionX + ',' + beginPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + endPositionX + ',' + -endPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + -endPositionX + ',' + endPositionY;
    var len = Math.PI * 2 * radius;
    var trailPathStyle = {
      strokeDasharray: len - gapDegree + 'px ' + len + 'px',
      strokeDashoffset: '-' + gapDegree / 2 + 'px',
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
    };
    var strokePathStyle = {
      stroke: strokeColor,
      strokeDasharray: percent / 100 * (len - gapDegree) + 'px ' + len + 'px',
      strokeDashoffset: '-' + gapDegree / 2 + 'px',
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line

    };
    return {
      pathString: pathString,
      trailPathStyle: trailPathStyle,
      strokePathStyle: strokePathStyle
    };
  };

  Circle.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        strokeWidth = _props2.strokeWidth,
        trailWidth = _props2.trailWidth,
        percent = _props2.percent,
        trailColor = _props2.trailColor,
        strokeLinecap = _props2.strokeLinecap,
        style = _props2.style,
        className = _props2.className,
        restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props2, ['prefixCls', 'strokeWidth', 'trailWidth', 'percent', 'trailColor', 'strokeLinecap', 'style', 'className']);

    var _getPathStyles = this.getPathStyles(),
        pathString = _getPathStyles.pathString,
        trailPathStyle = _getPathStyles.trailPathStyle,
        strokePathStyle = _getPathStyles.strokePathStyle;

    delete restProps.percent;
    delete restProps.gapDegree;
    delete restProps.gapPosition;
    delete restProps.strokeColor;
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('svg', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: prefixCls + '-circle ' + className,
      viewBox: '0 0 100 100',
      style: style
    }, restProps), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
      className: prefixCls + '-circle-trail',
      d: pathString,
      stroke: trailColor,
      strokeWidth: trailWidth || strokeWidth,
      fillOpacity: '0',
      style: trailPathStyle
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
      className: prefixCls + '-circle-path',
      d: pathString,
      strokeLinecap: strokeLinecap,
      strokeWidth: this.props.percent === 0 ? 0 : strokeWidth,
      fillOpacity: '0',
      ref: function ref(path) {
        _this2.path = path;
      },
      style: strokePathStyle
    }));
  };

  return Circle;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Circle.propTypes = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _types__WEBPACK_IMPORTED_MODULE_8__["propTypes"], {
  gapPosition: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['top', 'bottom', 'left', 'right'])
});
Circle.defaultProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _types__WEBPACK_IMPORTED_MODULE_8__["defaultProps"], {
  gapPosition: 'top'
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_enhancer__WEBPACK_IMPORTED_MODULE_7__["default"])(Circle));

/***/ }),

/***/ "./node_modules/rc-progress/es/Line.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-progress/es/Line.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enhancer */ "./node_modules/rc-progress/es/enhancer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./node_modules/rc-progress/es/types.js");









var Line = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Line, _Component);

  function Line() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Line);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _Component.apply(this, arguments));
  }

  Line.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        percent = _props.percent,
        prefixCls = _props.prefixCls,
        strokeColor = _props.strokeColor,
        strokeLinecap = _props.strokeLinecap,
        strokeWidth = _props.strokeWidth,
        style = _props.style,
        trailColor = _props.trailColor,
        trailWidth = _props.trailWidth,
        restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['className', 'percent', 'prefixCls', 'strokeColor', 'strokeLinecap', 'strokeWidth', 'style', 'trailColor', 'trailWidth']);

    delete restProps.gapPosition;
    var pathStyle = {
      strokeDasharray: '100px, 100px',
      strokeDashoffset: 100 - percent + 'px',
      transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s linear'
    };
    var center = strokeWidth / 2;
    var right = 100 - strokeWidth / 2;
    var pathString = 'M ' + (strokeLinecap === 'round' ? center : 0) + ',' + center + '\n           L ' + (strokeLinecap === 'round' ? right : 100) + ',' + center;
    var viewBoxString = '0 0 100 ' + strokeWidth;
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('svg', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: prefixCls + '-line ' + className,
      viewBox: viewBoxString,
      preserveAspectRatio: 'none',
      style: style
    }, restProps), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
      className: prefixCls + '-line-trail',
      d: pathString,
      strokeLinecap: strokeLinecap,
      stroke: trailColor,
      strokeWidth: trailWidth || strokeWidth,
      fillOpacity: '0'
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
      className: prefixCls + '-line-path',
      d: pathString,
      strokeLinecap: strokeLinecap,
      stroke: strokeColor,
      strokeWidth: strokeWidth,
      fillOpacity: '0',
      ref: function ref(path) {
        _this2.path = path;
      },
      style: pathStyle
    }));
  };

  return Line;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Line.propTypes = _types__WEBPACK_IMPORTED_MODULE_7__["propTypes"];
Line.defaultProps = _types__WEBPACK_IMPORTED_MODULE_7__["defaultProps"];
/* harmony default export */ __webpack_exports__["default"] = (Object(_enhancer__WEBPACK_IMPORTED_MODULE_6__["default"])(Line));

/***/ }),

/***/ "./node_modules/rc-progress/es/enhancer.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-progress/es/enhancer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);




var enhancer = function enhancer(WrappedComponent) {
  return function (_WrappedComponent) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Progress, _WrappedComponent);

    function Progress() {
      babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Progress);

      return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _WrappedComponent.apply(this, arguments));
    }

    Progress.prototype.componentDidUpdate = function componentDidUpdate() {
      if (!this.path) {
        return;
      }

      var pathStyle = this.path.style;
      pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';
      var now = Date.now();

      if (this.prevTimeStamp && now - this.prevTimeStamp < 100) {
        pathStyle.transitionDuration = '0s, 0s';
      }

      this.prevTimeStamp = Date.now();
    };

    Progress.prototype.render = function render() {
      return _WrappedComponent.prototype.render.call(this);
    };

    return Progress;
  }(WrappedComponent);
};

/* harmony default export */ __webpack_exports__["default"] = (enhancer);

/***/ }),

/***/ "./node_modules/rc-progress/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-progress/es/index.js ***!
  \**********************************************/
/*! exports provided: Line, Circle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line */ "./node_modules/rc-progress/es/Line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _Line__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Circle */ "./node_modules/rc-progress/es/Circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _Circle__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = ({
  Line: _Line__WEBPACK_IMPORTED_MODULE_0__["default"],
  Circle: _Circle__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/rc-progress/es/types.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-progress/es/types.js ***!
  \**********************************************/
/*! exports provided: defaultProps, propTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var defaultProps = {
  className: '',
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  style: {},
  trailColor: '#D9D9D9',
  trailWidth: 1
};
var propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeLinecap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['butt', 'round', 'square']),
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  trailColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  trailWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string])
};

/***/ }),

/***/ "./node_modules/react-aiot/src/style/theme-wordpress.scss":
/*!****************************************************************!*\
  !*** ./node_modules/react-aiot/src/style/theme-wordpress.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function (handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function (event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function (handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function (handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function (handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function (handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./public/src/AppTree.js":
/*!*******************************!*\
  !*** ./public/src/AppTree.js ***!
  \*******************************/
/*! exports provided: latestQueriedFolder, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latestQueriedFolder", function() { return latestQueriedFolder; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./public/src/components/index.js");
/* harmony import */ var _others_renderOrderMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./others/renderOrderMenu */ "./public/src/others/renderOrderMenu.js");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./public/src/util/index.js");
/* harmony import */ var _util_dragdrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/dragdrop */ "./public/src/util/dragdrop.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _others_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./others/filter */ "./public/src/others/filter.js");
/* harmony import */ var _hooks_permissions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/permissions */ "./public/src/hooks/permissions.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _hooks_sortable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hooks/sortable */ "./public/src/hooks/sortable.js");
/* harmony import */ var _components_MetaBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/MetaBox */ "./public/src/components/MetaBox.js");


var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @module AppTree */














/**
 * The latest queried folder.
 * 
 * @type object
 */

var latestQueriedFolder = {
  node: null
};
react_aiot__WEBPACK_IMPORTED_MODULE_5__["message"].config({
  top: 50
});
/**
 * The application tree handler for Real Media Library.
 * 
 * @param {string} id The HTML id (needed to localStorage support)
 * @param {object} [attachmentsBrowser] The attachments browser (for media grid view)
 * @param {boolean} [isModal=false] If true the given app tree is a modal dialog
 * @param {module:AppTree~AppTree~init} [init]
 * @see module:store.StoredAppTree
 * @see module:react-aiot~Tree
 * @extends React.Component
 */

var AppTree = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppTree, _React$Component);

  /**
   * Initialize properties and state for AIOTree component.
   * Also handles the responsiveness.
   */
  function AppTree(_props) {
    var _this;

    _classCallCheck(this, AppTree);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppTree).call(this, _props)); // Add respnsive handler for non-modal views

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderToolbarButtons", function () {
      var _this$state = _this.state,
          availableToolbarButtons = _this$state.availableToolbarButtons,
          toolbarBackButton = _this$state.toolbarBackButton,
          toolbar = {
        buttons: {},
        backButton: _this.resolveStateRefs(toolbarBackButton, 'keysToolbar')
      };

      for (var i = 0; i < availableToolbarButtons.length; i++) {
        toolbar.buttons[availableToolbarButtons[i]] = _this.resolveStateRefs(_this.state['toolbar_' + availableToolbarButtons[i]], 'keysToolbar');
      }

      return toolbar;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderCreatables", function () {
      var _this$state2 = _this.state,
          availableCreatables = _this$state2.availableCreatables,
          creatableBackButton = _this$state2.creatableBackButton,
          creatable = {
        buttons: {},
        backButton: _this.resolveStateRefs(creatableBackButton, 'keysCreatable')
      };

      for (var i = 0; i < availableCreatables.length; i++) {
        creatable.buttons[availableCreatables[i]] = _this.resolveStateRefs(_this.state['creatable_' + availableCreatables[i]], 'keysCreatable');
      }

      return creatable;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "doRef", function (ref) {
      return _this.ref = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCreatableClick", function (type, typeInt) {
      var createRoot = undefined,
          $create = undefined;

      if (type) {
        // Activate create
        var creatable = _this.state['creatable_' + type],
            newNode = {
          $rename: true,
          icon: _this.resolveStateRef(creatable.icon),
          iconActive: _this.resolveStateRef(creatable.iconActive),
          parent: +_util__WEBPACK_IMPORTED_MODULE_6__["rmlOpts"].rootId,
          typeInt: typeInt
        },
            selectedId = _this.getSelectedId();

        if (typeof selectedId !== 'number' || selectedId === +_util__WEBPACK_IMPORTED_MODULE_6__["rmlOpts"].rootId) {
          createRoot = newNode;
        } else {
          $create = newNode;
          newNode.parent = selectedId;
        }
      }

      _this.setState({
        isTreeLinkDisabled: !!type,
        isCreatableLinkCancel: !!type,
        isToolbarActive: !type,
        createRoot: createRoot
      });

      _this.updateTreeItemById(function (node) {
        node.$create = $create;
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelect", function (id) {
      // Do nothing when sort mode is active
      if (_this.state.toolbarActiveButton === 'sort') {
        return;
      }

      var select = _this.getTreeItemById(id, false),
          setter = function setter(_id, $busy) {
        latestQueriedFolder.node = select;
        latestQueriedFolder.node.setter(function (node) {
          node.$busy = $busy;
          node.selected = true;
        });
        /**
         * The user is selecting a node in the app tree.
         * 
         * @event module:util/hooks#tree/select
         * @param {int|string} id
         * @param {object} select The MST node
         * @param {object} attachmentsBrowser
         * @this module:AppTree~AppTree
         * @since 4.0.5
         */

        _util__WEBPACK_IMPORTED_MODULE_6__["hooks"].call('tree/select', [_id, select, _this.attachmentsBrowser], _assertThisInitialized(_assertThisInitialized(_this)));
      };

      if (_this.attachmentsBrowser) {
        !id && _this.attachmentsBrowser.collection.props.set({
          ignore: +new Date()
        }); // Reload the view

        _this._handleBackboneFilterSelection(select.id);
      } else {
        var href = window.location.href;
        Object(_util__WEBPACK_IMPORTED_MODULE_6__["urlParam"])('orderby') === 'rml' && (href = href.split('?')[0]);
        +Object(_util__WEBPACK_IMPORTED_MODULE_6__["urlParam"])('paged') > 1 && (href = Object(_util__WEBPACK_IMPORTED_MODULE_6__["addUrlParam"])(href, 'paged', 1));
        select.properties && (select.contentCustomOrder === 1 || select.forceCustomOrder) && (href = Object(_hooks_sortable__WEBPACK_IMPORTED_MODULE_12__["orderUrl"])(href));
        window.location.href = Object(_util__WEBPACK_IMPORTED_MODULE_6__["addUrlParam"])(href, 'rml_folder', select.id);
      }

      setter(select.id, !_this.attachmentsBrowser);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleResize", function () {
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          attachmentsBrowser = _assertThisInitialize.attachmentsBrowser;

      attachmentsBrowser && attachmentsBrowser.attachments.setColumns();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOrderClick", function () {
      if (Object(_hooks_sortable__WEBPACK_IMPORTED_MODULE_12__["toggleSortable"])(_this.getTreeItemById(), true, _this.attachmentsBrowser)) {
        _this.setState({
          isMoveable: false,
          toolbarActiveButton: 'order',
          toolbarBackButton: Object.assign(_this.state.toolbarBackButton, {
            label: 'i18n.back'
          })
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOrderCancel", function () {
      Object(_hooks_sortable__WEBPACK_IMPORTED_MODULE_12__["toggleSortable"])(_this.getTreeItemById(), false, _this.attachmentsBrowser);

      _this.setState({
        isMoveable: true,
        toolbarActiveButton: undefined,
        toolbarBackButton: Object.assign(_this.state.toolbarBackButton, {
          label: 'i18n.cancel'
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRenameClick", function () {
      return _this._handleRenameNode('rename', true, true, true);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRenameCancel", function () {
      return _this._handleRenameNode(undefined, false, false, undefined);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRenameClose",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(save, inputValue, _ref2) {
        var id, hide, node, _ref3, name;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref2.id;

                if (!(save && inputValue.length)) {
                  _context.next = 22;
                  break;
                }

                hide = react_aiot__WEBPACK_IMPORTED_MODULE_5__["message"].loading(Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('renameLoadingText', {
                  name: inputValue
                }));
                _context.prev = 3;
                node = _this.props.store.getTreeItemById(id);
                _context.next = 7;
                return node.setName(inputValue);

              case 7:
                _ref3 = _context.sent;
                name = _ref3.name;

                /**
                 * Folder successfully renamed.
                 * 
                 * @event module:util/hooks#folder/renamed
                 * @param {module:store/TreeNode~TreeNode} node The node
                 * @this module:AppTree~AppTree
                 * @since 4.0.7
                 */
                _util__WEBPACK_IMPORTED_MODULE_6__["hooks"].call('folder/renamed', [node], _assertThisInitialized(_assertThisInitialized(_this)));
                react_aiot__WEBPACK_IMPORTED_MODULE_5__["message"].success(Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('renameSuccess', {
                  name: name
                }));

                _this.handleRenameCancel();

                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](3);
                react_aiot__WEBPACK_IMPORTED_MODULE_5__["message"].error(_context.t0.responseJSON.message);

              case 17:
                _context.prev = 17;
                hide();
                return _context.finish(17);

              case 20:
                _context.next = 23;
                break;

              case 22:
                _this.handleRenameCancel();

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 14, 17, 20]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleAddClose",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(save, name, _ref5) {
        var parent, typeInt, hide, newObj, backboneFilter, lastSlugs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                parent = _ref5.parent, typeInt = _ref5.typeInt;

                if (!save) {
                  _context2.next = 22;
                  break;
                }

                _this.updateCreateNode({
                  $busy: true
                });

                hide = react_aiot__WEBPACK_IMPORTED_MODULE_5__["message"].loading(Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('addLoadingText', {
                  name: name
                }));
                _context2.prev = 4;
                _context2.next = 7;
                return _this.props.store.persist(name, {
                  parent: parent,
                  typeInt: typeInt
                }, function () {
                  return _this.handleCreatableClick();
                });

              case 7:
                newObj = _context2.sent;
                react_aiot__WEBPACK_IMPORTED_MODULE_5__["message"].success(Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('addSuccess', {
                  name: name
                })); // Modify all available attachments browsers filter

                jquery__WEBPACK_IMPORTED_MODULE_8___default()(_others_filter__WEBPACK_IMPORTED_MODULE_9__["FILTER_SELECTOR"]).each(function () {
                  backboneFilter = jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).data('backboneView');

                  if (backboneFilter) {
                    lastSlugs = backboneFilter.lastSlugs;
                    lastSlugs.names.push('(NEW) ' + name);
                    lastSlugs.slugs.push(newObj.id);
                    lastSlugs.types.push(typeInt);
                    backboneFilter.createFilters(lastSlugs);
                  }
                });
                Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_7__["droppable"])(_assertThisInitialized(_assertThisInitialized(_this)));
                _context2.next = 17;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](4);
                react_aiot__WEBPACK_IMPORTED_MODULE_5__["message"].error(_context2.t0.responseJSON.message);

                _this.updateCreateNode({
                  $busy: false
                });

              case 17:
                _context2.prev = 17;
                hide();
                return _context2.finish(17);

              case 20:
                _context2.next = 23;
                break;

              case 22:
                _this.handleCreatableClick();

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 13, 17, 20]]);
      }));

      return function (_x4, _x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTrash",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var node, hide, parentId;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              node = _this.getTreeItemById(); // Check if subdirectories

              if (!node.childNodes.filter(function (node) {
                return node.$visible;
              }).length) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt("return", react_aiot__WEBPACK_IMPORTED_MODULE_5__["message"].error(Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('deleteFailedSub', {
                name: node.title
              })));

            case 3:
              hide = react_aiot__WEBPACK_IMPORTED_MODULE_5__["message"].loading(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Deleteing ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, node.title), "..."));
              _context3.prev = 4;
              _context3.next = 7;
              return node.trash();

            case 7:
              react_aiot__WEBPACK_IMPORTED_MODULE_5__["message"].success(Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('deleteSuccess', {
                name: node.title
              }));
              /**
               * A folder has been deleted.
               * 
               * @event module:util/hooks#tree/select
               * @param {module:store/TreeNode~TreeNode} node The node
               * @param {object} attachmentsBrowser
               * @this module:AppTree~AppTree
               * @since 4.0.7
               */

              _util__WEBPACK_IMPORTED_MODULE_6__["hooks"].call('folder/deleted', [node, _this.attachmentsBrowser], _assertThisInitialized(_assertThisInitialized(_this))); // Select parent

              parentId = Object(react_aiot__WEBPACK_IMPORTED_MODULE_5__["getTreeParentById"])(node.id, _this.props.store.tree);

              _this.handleSelect(parentId === 0 ? +_util__WEBPACK_IMPORTED_MODULE_6__["rmlOpts"].rootId : parentId);

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](4);
              react_aiot__WEBPACK_IMPORTED_MODULE_5__["message"].error(_context3.t0.responseJSON.message);

            case 16:
              _context3.prev = 16;
              hide();
              return _context3.finish(16);

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[4, 13, 16, 19]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSort",
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(props) {
        var hide, toolbarActiveButton, parentFromId, parentToId, store;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this.setState({
                  isSortableBusy: true,
                  isToolbarBusy: true
                });

                hide = react_aiot__WEBPACK_IMPORTED_MODULE_5__["message"].loading(Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('sortLoadingText')), toolbarActiveButton = _this.state.toolbarActiveButton, parentFromId = props.parentFromId, parentToId = props.parentToId, store = _this.props.store;
                _context4.prev = 2;
                _context4.next = 5;
                return store.handleSort(props);

              case 5:
                react_aiot__WEBPACK_IMPORTED_MODULE_5__["message"].success(Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('sortedSuccess'));

                if (parentFromId === parentToId) {
                  /**
                   * This action is called when a folder was relocated in the
                   * folder tree. That means the parent was not changed, only
                   * the order was changed.
                   * 
                   * @event module:util/hooks#folder/relocated
                   * @param {object} props The move properties
                   * @this module:AppTree~AppTree
                   * @since 4.0.7
                   */
                  _util__WEBPACK_IMPORTED_MODULE_6__["hooks"].call('folder/relocated', [props], _assertThisInitialized(_assertThisInitialized(_this)));
                } else {
                  /**
                   * This action is called when a folder was moved in the folder tree.
                   * That means the parent and order was changed.
                   * 
                   * @event module:util/hooks#folder/moved
                   * @param {object} props The move properties
                   * @this module:AppTree~AppTree
                   * @since 4.0.7
                   */
                  _util__WEBPACK_IMPORTED_MODULE_6__["hooks"].call('folder/moved', [props], _assertThisInitialized(_assertThisInitialized(_this)));
                }

                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](2);
                react_aiot__WEBPACK_IMPORTED_MODULE_5__["message"].error(_context4.t0.responseJSON.message);

              case 12:
                _context4.prev = 12;
                hide();

                _this._handleSortNode(toolbarActiveButton, false);

                return _context4.finish(12);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 9, 12, 16]]);
      }));

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleWindowResize", function () {
      var isMobile = _this._isMobile();

      _this.setState({
        isSticky: !isMobile,
        isStickyHeader: !isMobile,
        isResizable: !isMobile,
        isFullWidth: isMobile,
        style: isMobile ? {
          marginLeft: 10
        } : {}
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleReload", function () {
      _this.handleSelect();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDismissLicenseNotice",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return Object(_util__WEBPACK_IMPORTED_MODULE_6__["ajax"])('notice/license', {
                method: 'DELETE'
              });

            case 2:
              window.location.reload();

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTreeNodeRender", function (createTreeNode, TreeNode, node) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_11__["Observer"], {
        key: node.id
      }, function () {
        return createTreeNode(node);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleRenameNode", function (toolbarActiveButton, isCreatableLinkDisabled, isTreeLinkDisabled, nodeRename) {
      _this.setState({
        // Make other nodes editable / not editable
        isCreatableLinkDisabled: isCreatableLinkDisabled,
        isTreeLinkDisabled: isTreeLinkDisabled,
        toolbarActiveButton: toolbarActiveButton
      });

      _this.updateTreeItemById(function (node) {
        // Make selected node editable / not editable
        node.$rename = nodeRename;
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_isMobile", function () {
      return jquery__WEBPACK_IMPORTED_MODULE_8___default()(window).width() <= 700;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleSortNode", function (toolbarActiveButton, isBusy) {
      _this.setState({
        isCreatableLinkDisabled: !!toolbarActiveButton,
        toolbarActiveButton: toolbarActiveButton,
        isSortableDisabled: !toolbarActiveButton,
        toolbarBackButton: Object.assign(_this.state.toolbarBackButton, {
          label: 'i18n.' + (toolbarActiveButton ? 'back' : 'cancel')
        })
      });

      typeof isBusy === 'boolean' && _this.setState({
        isSortableBusy: isBusy
      });
      typeof isBusy === 'boolean' && _this.setState({
        isToolbarBusy: isBusy
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleDetails",
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(action) {
        var _message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                action !== 'save' && _this.setState({
                  toolbarActiveButton: action,
                  metaBoxId: action ? action === 'usersettings' ? action : _this.props.store.selectedId : false
                });

                if (!(action === 'save')) {
                  _context6.next = 16;
                  break;
                }

                _this.setState({
                  isBusyHeader: true,
                  metaBoxErrors: []
                });

                _context6.prev = 3;
                _context6.next = 6;
                return _this.metaboxPatcher();

              case 6:
                _this._handleDetails();

                _context6.next = 13;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](3);
                _message = _context6.t0.responseJSON.message;

                _this.setState({
                  metaBoxErrors: _message
                });

              case 13:
                _context6.prev = 13;

                _this.setState({
                  isBusyHeader: false
                });

                return _context6.finish(13);

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[3, 9, 13, 16]]);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());

    !_props.isModal && jquery__WEBPACK_IMPORTED_MODULE_8___default()(window).resize(_this.handleWindowResize);

    var _isMobile = _this._isMobile(); // State refs (see https://github.com/reactjs/redux/issues/1793) and #resolveStateRefs


    _this.stateRefs = {
      keysCreatable: 'icon,iconActive,toolTipTitle,toolTipText,onClick,label'.split(','),
      keysToolbar: 'content,toolTipTitle,toolTipText,onClick,onCancel,onSave,modifier,label,save,menu'.split(','),
      // Icons
      ICON_OBJ_FOLDER_CLOSED: _util__WEBPACK_IMPORTED_MODULE_6__["ICON_OBJ_FOLDER_CLOSED"],
      ICON_OBJ_FOLDER_OPEN: _util__WEBPACK_IMPORTED_MODULE_6__["ICON_OBJ_FOLDER_OPEN"],
      ICON_OBJ_FOLDER_ROOT: _util__WEBPACK_IMPORTED_MODULE_6__["ICON_OBJ_FOLDER_ROOT"],
      ICON_OBJ_FOLDER_COLLECTION: _util__WEBPACK_IMPORTED_MODULE_6__["ICON_OBJ_FOLDER_COLLECTION"],
      ICON_OBJ_FOLDER_GALLERY: _util__WEBPACK_IMPORTED_MODULE_6__["ICON_OBJ_FOLDER_GALLERY"],
      ICON_SETTINGS: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        type: "setting"
      }),
      ICON_LOCKED: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        type: "lock"
      }),
      ICON_ORDER: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["DashIcon"], {
        name: "move"
      }),
      ICON_RELOAD: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        type: "reload"
      }),
      ICON_RENAME: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        type: "edit"
      }),
      ICON_TRASH: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        type: "delete"
      }),
      ICON_SORT: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["DashIcon"], {
        name: "sort"
      }),
      ICON_SAVE: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        type: "save"
      }),
      ICON_ELLIPSIS: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        type: "ellipsis"
      }),
      // Creatable
      handleCreatableClickBackButton: function handleCreatableClickBackButton() {
        return _this.handleCreatableClick();
      },
      handleCreatableClickFolder: function handleCreatableClickFolder() {
        return _this.handleCreatableClick('folder', 0);
      },
      handleCreatableClickCollection: function handleCreatableClickCollection() {
        return _this.handleCreatableClick('collection', 1);
      },
      handleCreatableClickGallery: function handleCreatableClickGallery() {
        return _this.handleCreatableClick('gallery', 2);
      },
      // Toolbar buttons
      renderOrderMenu: _others_renderOrderMenu__WEBPACK_IMPORTED_MODULE_4__["default"].bind(_assertThisInitialized(_assertThisInitialized(_this))),
      handleOrderClick: _this.handleOrderClick,
      handleOrderCancel: _this.handleOrderCancel,
      handleReload: _this.handleReload,
      handleRenameClick: _this.handleRenameClick,
      handleRenameCancel: _this.handleRenameCancel,
      handleTrashModifier: function handleTrashModifier(body) {
        var node = _this.getTreeItemById();

        return node ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Popconfirm"], {
          placement: "bottom",
          onConfirm: _this.handleTrash,
          title: Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('deleteConfirm', {
            name: node.title
          }, 'maxWidth'),
          okText: Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('ok'),
          cancelText: Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('cancel')
        }, body) : body;
      },
      handleSortClick: function handleSortClick() {
        return _this._handleSortNode('sort');
      },
      handleSortCancel: function handleSortCancel() {
        return _this._handleSortNode();
      },
      handleDetailsClick: function handleDetailsClick() {
        return _this._handleDetails('details');
      },
      handleDetailsCancel: function handleDetailsCancel() {
        return _this._handleDetails();
      },
      handleDetailsSave: function handleDetailsSave() {
        return _this._handleDetails('save');
      },
      handleUserSettingsClick: function handleUserSettingsClick() {
        return _this._handleDetails('usersettings');
      },
      handleUserSettingsCancel: function handleUserSettingsCancel() {
        return _this._handleDetails();
      },
      handleUserSettingsSave: function handleUserSettingsSave() {
        return _this._handleDetails('save');
      }
    }; // Determine selected id and fetch tree

    var _selectedId = Object(_util__WEBPACK_IMPORTED_MODULE_6__["urlParam"])('rml_folder');

    _this.attachmentsBrowser = _props.attachmentsBrowser;
    _this.state = {
      // Custom
      currentFolderRestrictions: [],
      isModal: _props.isModal,
      isMoveable: true,
      isWPAttachmentsSortMode: false,
      // See modal.js
      initialSelectedId: !_selectedId || _selectedId === 'all' ? 'all' : +_selectedId,
      metaBoxId: false,
      metaBoxErrors: false,
      // Creatables
      availableCreatables: 'folder,collection,gallery'.split(','),
      selectedCreatableType: undefined,
      // The selected folder type
      creatable_folder: {
        icon: 'ICON_OBJ_FOLDER_CLOSED',
        iconActive: 'ICON_OBJ_FOLDER_OPEN',
        visibleInFolderType: [undefined, 0],
        cssClasses: 'page-title-action add-new-h2',
        toolTipTitle: 'i18n.creatable0ToolTipTitle',
        toolTipText: 'i18n.creatable0ToolTipText',
        label: '+',
        onClick: 'handleCreatableClickFolder'
      },
      creatable_collection: {
        icon: 'ICON_OBJ_FOLDER_COLLECTION',
        visibleInFolderType: [undefined, 0, 1],
        cssClasses: 'page-title-action add-new-h2',
        toolTipTitle: 'i18n.creatable1ToolTipTitle',
        toolTipText: 'i18n.creatable1ToolTipText',
        label: '+',
        onClick: 'handleCreatableClickCollection'
      },
      creatable_gallery: {
        icon: 'ICON_OBJ_FOLDER_GALLERY',
        visibleInFolderType: [1],
        visible: false,
        cssClasses: 'page-title-action add-new-h2',
        toolTipTitle: 'i18n.creatable2ToolTipTitle',
        toolTipText: 'i18n.creatable2ToolTipText',
        label: '+',
        onClick: 'handleCreatableClickGallery'
      },
      creatableBackButton: {
        cssClasses: 'page-title-action add-new-h2',
        label: 'i18n.cancel',
        onClick: 'handleCreatableClickBackButton'
      },
      // Toolbar buttons
      availableToolbarButtons: 'locked,usersettings,order,reload,rename,trash,sort,details'.split(','),
      toolbar_usersettings: {
        content: 'ICON_SETTINGS',
        visible: !!+_util__WEBPACK_IMPORTED_MODULE_6__["rmlOpts"].userSettings,
        toolTipTitle: 'i18n.userSettingsToolTipTitle',
        toolTipText: 'i18n.userSettingsToolTipText',
        onClick: 'handleUserSettingsClick',
        onCancel: 'handleUserSettingsCancel',
        onSave: 'handleUserSettingsSave'
      },
      toolbar_locked: {
        content: 'ICON_LOCKED',
        visible: false,
        toolTipTitle: 'i18n.lockedToolTipTitle',
        toolTipText: '' // Lazy

      },
      toolbar_order: {
        content: 'ICON_ORDER',
        toolTipTitle: 'i18n.orderToolTipTitle',
        toolTipText: 'i18n.orderToolTipText',
        onClick: 'handleOrderClick',
        onCancel: 'handleOrderCancel',
        menu: 'resolve.renderOrderMenu',
        toolTipPlacement: 'topLeft',
        dropdownPlacement: 'bottomLeft'
      },
      toolbar_reload: {
        content: 'ICON_RELOAD',
        toolTipTitle: 'i18n.refreshToolTipTitle',
        toolTipText: 'i18n.refreshToolTipText',
        onClick: 'handleReload'
      },
      toolbar_rename: {
        content: 'ICON_RENAME',
        toolTipTitle: 'i18n.renameToolTipTitle',
        toolTipText: 'i18n.renameToolTipText',
        onClick: 'handleRenameClick',
        onCancel: 'handleRenameCancel',
        disabled: true
      },
      toolbar_trash: {
        content: 'ICON_TRASH',
        toolTipTitle: 'i18n.trashToolTipTitle',
        toolTipText: 'i18n.trashToolTipText',
        modifier: 'handleTrashModifier',
        disabled: true
      },
      toolbar_sort: {
        content: 'ICON_SORT',
        toolTipTitle: 'i18n.sortToolTipTitle',
        toolTipText: 'i18n.sortToolTipText',
        onClick: 'handleSortClick',
        onCancel: 'handleSortCancel'
      },
      toolbar_details: {
        content: 'ICON_ELLIPSIS',
        disabled: true,
        toolTipTitle: 'i18n.detailsToolTipTitle',
        toolTipText: 'i18n.detailsToolTipText',
        onClick: 'handleDetailsClick',
        onCancel: 'handleDetailsCancel',
        onSave: 'handleDetailsSave'
      },
      toolbarBackButton: {
        label: 'i18n.cancel',
        save: 'i18n.save'
      },
      // AIO
      isResizable: !_isMobile,
      isSticky: !_isMobile,
      isStickyHeader: !_isMobile,
      isFullWidth: _isMobile,
      style: _isMobile ? {
        marginLeft: 10
      } : {},
      isSortable: true,
      isSortableDisabled: true,
      isTreeBusy: false,
      isBusyHeader: false,
      sortableDelay: 0,
      headerStickyAttr: {
        top: '#wpadminbar'
      },
      isCreatableLinkDisabled: false,
      toolbarActiveButton: undefined,
      isTreeLinkDisabled: false,
      onResizeOpposite: Object(_util__WEBPACK_IMPORTED_MODULE_6__["isMaterialWp"])() && _util__WEBPACK_IMPORTED_MODULE_6__["materialWpResizeOpposite"]
    }; // What happens if the attachments browser is available? We will add a reference to this React element

    _this.attachmentsBrowser && (_this.attachmentsBrowser.controller.$RmlAppTree = _assertThisInitialized(_assertThisInitialized(_this)));
    /**
     * Called on initialzation and allows you to modify the init state.
     * 
     * @callback module:AppTree~AppTree~init
     * @param {object} state The default state
     * @param {AppTree} tree The AppTree component instance
     * @returns {object} The new state
     */

    _props.init && (_this.state = _props.init(_this.state, _assertThisInitialized(_assertThisInitialized(_this))));
    /**
     * The React AppTree instance gets constructed and you can modify it here.
     * 
     * @event module:util/hooks#tree/init
     * @param {object} state
     * @param {object} props
     * @this module:AppTree~AppTree
     */

    _util__WEBPACK_IMPORTED_MODULE_6__["hooks"].call('tree/init', [_this.state, _props], _assertThisInitialized(_assertThisInitialized(_this)));
    _this.initialSelectedId = _this.state.initialSelectedId;
    return _this;
  }
  /**
   * Render AIO tree with tax switcher.
   */


  _createClass(AppTree, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$store = this.props.store,
          staticTree = _this$props$store.staticTree,
          tree = _this$props$store.tree,
          selectedId = _this$props$store.selectedId,
          methodNotAllowed405Endpoint = _this$props$store.methodNotAllowed405Endpoint,
          methodMoved301Endpoint = _this$props$store.methodMoved301Endpoint,
          _this$state3 = this.state,
          metaBoxId = _this$state3.metaBoxId,
          metaBoxErrors = _this$state3.metaBoxErrors,
          isBusyHeader = _this$state3.isBusyHeader;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
        ref: this.doRef,
        id: this.props.id,
        rootId: +_util__WEBPACK_IMPORTED_MODULE_6__["rmlOpts"].rootId,
        staticTree: staticTree,
        selectedId: selectedId,
        tree: tree.length > 0 ? tree : [],
        opposite: document.getElementById('wpbody-content'),
        onSelect: this.handleSelect,
        onRenameClose: this.handleRenameClose,
        onAddClose: this.handleAddClose,
        onNodeExpand: function onNodeExpand() {
          return setTimeout(function () {
            return Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_7__["droppable"])(_this2);
          }, 200);
        },
        renderItem: this.onTreeNodeRender,
        onNodePressF2: this.handleRenameClick,
        onSort: this.handleSort,
        onResize: this.handleResize,
        headline: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            paddingRight: 5
          }
        }, Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('folders')),
        renameSaveText: this.stateRefs.ICON_SAVE,
        renameAddText: this.stateRefs.ICON_SAVE,
        noFoldersTitle: Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('noFoldersTitle'),
        noFoldersDescription: Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('noFoldersDescription'),
        noSearchResult: Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('noSearchResult'),
        innerClassName: "wrap",
        theme: "wordpress",
        creatable: this.renderCreatables(),
        toolbar: this.renderToolbarButtons(),
        forceSortableFallback: true
      }, this.state), !!methodNotAllowed405Endpoint.length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
        message: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('methodNotAllowed405', {
          endpoint: methodNotAllowed405Endpoint
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "https://airbrake.io/blog/http-errors/405-method-not-allowed",
          target: "_blank"
        }, Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('methodNotAllowed405LinkText'))),
        type: "error",
        showIcon: true,
        style: {
          marginBottom: '10px'
        }
      }), _util__WEBPACK_IMPORTED_MODULE_6__["rmlOpts"].showLicenseNotice === '1' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
        message: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, _util__WEBPACK_IMPORTED_MODULE_6__["rmlOpts"].lang.noProductLicense, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: _util__WEBPACK_IMPORTED_MODULE_6__["rmlOpts"].pluginsUrl
        }, _util__WEBPACK_IMPORTED_MODULE_6__["rmlOpts"].lang.enterLicense), " \xB7 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "#",
          onClick: this.handleDismissLicenseNotice
        }, _util__WEBPACK_IMPORTED_MODULE_6__["rmlOpts"].lang.licenseNoticeDismiss), "."),
        type: "info",
        style: {
          marginBottom: '10px'
        }
      }), methodMoved301Endpoint && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
        message: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])('methodMoved301')),
        type: "error",
        showIcon: true,
        style: {
          marginBottom: '10px'
        }
      }), metaBoxId !== false && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MetaBox__WEBPACK_IMPORTED_MODULE_13__["default"], {
        treeInstance: this,
        patcher: function patcher(_patcher) {
          return _this2.metaboxPatcher = _patcher;
        },
        busy: isBusyHeader,
        errors: metaBoxErrors,
        id: metaBoxId
      }));
    }
    /**
     * @returns {object}
     */

  }, {
    key: "resolveStateRefs",

    /**
     * Iterates all available values in an object and resolve it with the available
     * this::stateRefs.
     * 
     * @returns {object}
     */
    value: function resolveStateRefs(_obj, keys) {
      var obj = Object.assign({}, _obj);
      var value, newValue;

      for (var key in obj) {
        if (obj.hasOwnProperty(key) && (value = obj[key]) && this.stateRefs[keys].indexOf(key) > -1 && typeof value === 'string' && (newValue = this.resolveStateRef(value))) {
          obj[key] = newValue;
        }
      }

      return obj;
    }
    /**
     * Resolve single state ref key.
     * 
     * @returns {object}
     */

  }, {
    key: "resolveStateRef",
    value: function resolveStateRef(key) {
      if (typeof key !== 'string') {
        return;
      }

      if (key.indexOf('i18n.') === 0) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_6__["i18n"])(key.substr(5));
      } else if (key.indexOf('resolve.') === 0) {
        return this.stateRefs[key.substr(8)]();
      } else if (this.stateRefs[key]) {
        return this.stateRefs[key];
      }
    }
  }, {
    key: "componentWillUnmount",

    /**
     * Remove resize handler.
     */
    value: function componentWillUnmount() {
      jquery__WEBPACK_IMPORTED_MODULE_8___default()(window).off('resize', this.handleWindowResize);
      /**
       * The React AppTree instance gets unmounted.
       * 
       * @event module:util/hooks#tree/destroy
       * @param {object} state
       * @param {object} props
       * @this module:AppTree~AppTree
       */

      _util__WEBPACK_IMPORTED_MODULE_6__["hooks"].call('tree/destroy', [this.state, this.props], this);
    }
    /**
     * Fetch initial tree.
     */

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.fetchTree(this.initialSelectedId);
    }
    /**
     * Initiate draggable and droppable
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_7__["draggable"])(this);
      Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_7__["droppable"])(this);
      this.handleResize(); // If order should be enabled in list mode, then activate it now

      if (_util__WEBPACK_IMPORTED_MODULE_6__["rmlOpts"].listMode === 'list' && window.location.hash === '#order') {
        this.handleOrderClick();
        window.location.hash = '';
      }
    }
    /**
     * When the component updates the droppable zone is reinitialized.
     * Also the toolbar buttons gets disabled or enabled depending on selected node.
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var selectedCreatableType = this.state.selectedCreatableType,
          selected = this.getTreeItemById();

      if (selected && selectedCreatableType !== selected.properties.type || !selected && selectedCreatableType !== undefined) {
        this._updateCreatableButtons(selected ? selected.properties.type : undefined);
      } // Enable / Disable toolbar buttons


      this._updateToolbarButtons(); // Enable locked toolbar item


      Object(_hooks_permissions__WEBPACK_IMPORTED_MODULE_10__["default"])(this);
      Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_7__["draggable"])(this);
      Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_7__["droppable"])(this);
    }
    /**
     * Return the backbone filter view for the given attachments browser.
     * 
     * @returns object
     */

  }, {
    key: "getBackboneFilter",
    value: function getBackboneFilter() {
      var attachmentsBrowser = this.attachmentsBrowser;
      return attachmentsBrowser && attachmentsBrowser.toolbar.get('rml_folder');
    }
    /**
     * Get the selected node id.
     * 
     * @returns {string|int}
     */

  }, {
    key: "getSelectedId",
    value: function getSelectedId() {
      return this.props.store.selectedId;
    }
    /**
     * Get tree item by id.
     * 
     * @param {string|int} [id=Current]
     * @param {boolean} [excludeStatic=true]
     * @returns {object} Tree node
     */

  }, {
    key: "getTreeItemById",
    value: function getTreeItemById() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelectedId();
      var excludeStatic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return this.props.store.getTreeItemById(id, excludeStatic);
    }
    /**
     * Update a tree item by id.
     * 
     * @param {function|array} callback The callback with one argument (node draft) and should return the new node.
     * @param {string|int} [id=Current] The id which should be updated
     * @param {boolean} [setHash] If true the hash node is changed so a rerender is forced
     */

  }, {
    key: "updateTreeItemById",
    value: function updateTreeItemById(callback) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getSelectedId();
      var setHash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var node = this.props.store.getTreeItemById(id);
      node && node.setter(callback, setHash);
    }
    /**
     * Updates the create node. That's the node without id and the input field.
     * 
     * @param {object} modifier The modifier object which is passed through Object.assign
     */

  }, {
    key: "updateCreateNode",
    value: function () {
      var _updateCreateNode = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(modifier) {
        var createRoot, node;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                // Root update
                createRoot = this.state.createRoot;
                createRoot && this.setState({
                  createRoot: Object.assign(createRoot, modifier)
                }); // Child node update

                node = this.getTreeItemById();
                node && node.$create && this.updateTreeItemById(function (node) {
                  node.$create = Object.assign(node.$create, modifier);
                }, undefined, true);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function updateCreateNode(_x9) {
        return _updateCreateNode.apply(this, arguments);
      };
    }()
    /**
     * Handles the creatable click and creates a new node depending on the selected one.
     * 
     * @method
     */

  }, {
    key: "handleDestroy",
    value: function handleDestroy() {
      this.ref && react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.unmountComponentAtNode(this.ref.container.parentNode);
    }
    /**
     * Dismiss the license notice for a given time (transient).
     * 
     * @method
     */

  }, {
    key: "_handleBackboneFilterSelection",

    /**
     * Set the attachments browser location.
     * 
     * @param {int} [id=Current selected id] The id
     */
    value: function _handleBackboneFilterSelection() {
      var _this3 = this;

      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelectedId();
      var attachmentsBrowser = this.attachmentsBrowser;

      if (attachmentsBrowser) {
        setTimeout(function () {
          var backboneFilter = _this3.getBackboneFilter();

          backboneFilter && backboneFilter.$el.val(id).change(); // Reset bulk select in no-modal mode

          attachmentsBrowser.$el.parents('.media-modal').length === 0 && attachmentsBrowser.controller.state().get('selection').reset(); // Check if folder needs refresh

          var store = _this3.props.store;

          if (store.foldersNeedsRefresh.indexOf(id) > -1) {
            store.removeFoldersNeedsRefresh(id);

            _this3.handleReload();
          }
        }, 0);
      }
    }
    /**
     * Update the creatable buttons regarding the selected type.
     * 
     * @param {int} selectedCreatableType
     */

  }, {
    key: "_updateCreatableButtons",
    value: function _updateCreatableButtons(selectedCreatableType) {
      var _this4 = this;

      this.setState({
        selectedCreatableType: selectedCreatableType
      });
      this.state.availableCreatables.forEach(function (c) {
        return _this4.setState(_defineProperty({}, 'creatable_' + c, Object.assign(_this4.state['creatable_' + c], {
          visible: _this4.state['creatable_' + c].visibleInFolderType.indexOf(selectedCreatableType) > -1
        })));
      });
    }
  }, {
    key: "_updateToolbarButtons",
    value: function _updateToolbarButtons() {
      var _this$state4 = this.state,
          isWPAttachmentsSortMode = _this$state4.isWPAttachmentsSortMode,
          toolbar_order = _this$state4.toolbar_order,
          toolbar_rename = _this$state4.toolbar_rename,
          toolbar_trash = _this$state4.toolbar_trash,
          toolbar_details = _this$state4.toolbar_details,
          selected = this.getTreeItemById(),
          disableIfStatic = !selected,
          restrictions = selected && selected.properties && selected.properties.restrictions || [];
      var disableOrder = disableIfStatic || isWPAttachmentsSortMode || selected && selected.contentCustomOrder === 2;
      toolbar_order.disabled !== disableOrder && this.setState({
        toolbar_order: Object.assign(toolbar_order, {
          disabled: disableOrder
        })
      });
      var disableRename = disableIfStatic || restrictions.indexOf('ren') > -1;
      toolbar_rename.disabled !== disableRename && this.setState({
        toolbar_rename: Object.assign(toolbar_rename, {
          disabled: disableRename
        })
      });
      var disableTrash = disableIfStatic || restrictions.indexOf('del') > -1;
      toolbar_trash.disabled !== disableTrash && this.setState({
        toolbar_trash: Object.assign(toolbar_trash, {
          disabled: disableTrash
        })
      });
      toolbar_details.disabled !== disableIfStatic && this.setState({
        toolbar_details: Object.assign(toolbar_details, {
          disabled: disableIfStatic
        })
      });
    }
    /**
     * Fetch folder tree.
     */

  }, {
    key: "fetchTree",
    value: function () {
      var _fetchTree = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(setSelectedId) {
        var _ref11, slugs;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.setState({
                  isTreeBusy: true
                });
                _context8.prev = 1;
                _context8.next = 4;
                return this.props.store.fetchTree(setSelectedId);

              case 4:
                _ref11 = _context8.sent;
                slugs = _ref11.slugs;
                // Modify all available attachments browsers filter
                jquery__WEBPACK_IMPORTED_MODULE_8___default()(_others_filter__WEBPACK_IMPORTED_MODULE_9__["FILTER_SELECTOR"]).each(function () {
                  var backboneFilter = jquery__WEBPACK_IMPORTED_MODULE_8___default()(this).data('backboneView');
                  backboneFilter && backboneFilter.createFilters(slugs);
                });

                this._handleBackboneFilterSelection();

                latestQueriedFolder.node = this.props.store.selected;
                _context8.next = 14;
                break;

              case 11:
                _context8.prev = 11;
                _context8.t0 = _context8["catch"](1);
                console.log(_context8.t0);

              case 14:
                // Modify this tree
                this.setState({
                  isTreeBusy: false
                });

              case 15:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[1, 11]]);
      }));

      return function fetchTree(_x10) {
        return _fetchTree.apply(this, arguments);
      };
    }()
    /**
     * Update the folder count. If you pass no argument the folder count is
     * requested from server.
     * 
     * @param {object} counts Key value map of folder and count
     */

  }, {
    key: "fetchCounts",
    value: function () {
      var _fetchCounts = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(counts) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.props.store.fetchCounts(counts);

              case 2:
                return _context9.abrupt("return", _context9.sent);

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function fetchCounts(_x11) {
        return _fetchCounts.apply(this, arguments);
      };
    }()
  }]);

  return AppTree;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (AppTree);

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

/***/ "./public/src/components/MetaBox.js":
/*!******************************************!*\
  !*** ./public/src/components/MetaBox.js ***!
  \******************************************/
/*! exports provided: default */
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
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");


var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @module components/MetaBox */






/**
 * Show a meta box for the selected folder id. It also supports
 * user settings.
 * 
 * @property {string|int} id The id of the folder or 'usersettings'
 * @property {module:components/MetaBox~MetaBox~patcher} patcher
 * @extends React.Component
 */

var MetaBox = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MetaBox, _React$Component);

  function MetaBox(props) {
    var _this;

    _classCallCheck(this, MetaBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MetaBox).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRef", function (ref) {
      _this.refSpan = ref;
      /**
       * The MetaBox ref element is ready and created.
       * 
       * @event module:util/hooks#folder/meta
       * @param {HTMLElement} ref The reference
       * @param {string|id} id The folder id or 'usersettings'
       * @param {module:store~Store} store The store
       * @this MetaBox instance
       */

      _util__WEBPACK_IMPORTED_MODULE_6__["hooks"].call('folder/meta', [ref, _this.state.id, _this.props.store], _assertThisInitialized(_assertThisInitialized(_this)));
      var patcher = _this.props.patcher;
      /**
       * This callback is fired when the ref is created
       * 
       * @callback module:components/MetaBox~MetaBox~patcher
       * @param {function} handleSave Fire this function if you want to serialize the data and save to server (async)
       * @param {HTMLElement} ref The meta box container
       */

      patcher && patcher(_this.handleSave, ref);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSave",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var form, serialize, data, url, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              form = jquery__WEBPACK_IMPORTED_MODULE_3___default()(_this.refSpan).children('form'), serialize = form.serializeArray(), data = {};
              jquery__WEBPACK_IMPORTED_MODULE_3___default.a.each(serialize, function (key, value) {
                return data[value.name] = value.value;
              });
              /**
               * The MetaBox is serialized and ready to send.
               * 
               * @event module:util/hooks#folder/meta/serialize
               * @param {string|id} id The folder id or 'usersettings'
               * @param {module:store~Store} store The store
               * @param {object} data The data prepared for the server so you can perhaps modify it
               * @param {HTMLElement} form The form container
               * @this MetaBox instance
               */

              _util__WEBPACK_IMPORTED_MODULE_6__["hooks"].call('folder/meta/serialize', [_this.state.id, _this.props.store, data, form], _assertThisInitialized(_assertThisInitialized(_this)));
              url = _this.state.id === 'usersettings' ? 'usersettings' : 'folders/' + _this.state.id + '/meta';
              _context.next = 6;
              return Object(_util__WEBPACK_IMPORTED_MODULE_6__["ajax"])(url, {
                method: 'PUT',
                data: data
              });

            case 6:
              response = _context.sent;

              /**
               * The MetaBox is saved successfully.
               * 
               * @event module:util/hooks#folder/meta/saved
               * @param {string|id} id The folder id or 'usersettings'
               * @param {object} response The server response
               * @param {object} data The data sent to the server
               * @this MetaBox instance
               */
              _util__WEBPACK_IMPORTED_MODULE_6__["hooks"].call('folder/meta/saved', [_this.state.id, response, data], _assertThisInitialized(_assertThisInitialized(_this)));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _this.state = {
      id: 0,
      // The current visible id
      html: '' // The html

    };
    return _this;
  }

  _createClass(MetaBox, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.handleAjax(this.props, this.state);
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      this.handleAjax.apply(this, arguments);
    }
  }, {
    key: "handleAjax",
    value: function handleAjax(nextProps, nextState) {
      var _this2 = this;

      // Loading phase
      if (nextProps.id !== this.state.id) {
        this.state.id = nextProps.id; // Avoid rerendering

        this.state.html = '';
        var url = nextProps.id === 'usersettings' ? 'usersettings' : 'folders/' + nextProps.id + '/meta';
        Object(_util__WEBPACK_IMPORTED_MODULE_6__["ajax"])(url).then(function (_ref2) {
          var html = _ref2.html;

          _this2.setState({
            html: html
          });
        }, function () {
          // An error occured
          _this2.setState({
            html: ''
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var selected;

      if (this.props.id === 'usersettings') {
        selected = {
          icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
            type: "setting"
          }),
          title: _util__WEBPACK_IMPORTED_MODULE_6__["rmlOpts"].lang.userSettingsToolTipTitle
        };
      } else {
        selected = this.props.store.getTreeItemById(this.props.id, false);
      }

      var html = this.state.html,
          _this$props = this.props,
          _this$props$busy = _this$props.busy,
          busy = _this$props$busy === void 0 ? false : _this$props$busy,
          _this$props$errors = _this$props.errors,
          errors = _this$props$errors === void 0 ? [] : _this$props$errors;

      if (!selected) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Spin"], {
        spinning: !html || busy,
        size: "small"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "rml-postbox"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        type: "ellipsis"
      }), " ", selected.icon, " ", selected.title), errors.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, errors.map(function (e, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: i
        }, e);
      })), html && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "inside"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: html
        },
        style: {
          display: html ? 'block' : 'none'
        },
        ref: this.handleRef
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          float: 'right',
          paddingBottom: '5px',
          fontSize: '10px',
          opacity: .5
        }
      }, "ID #", this.state.id)));
    }
  }]);

  return MetaBox;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)) || _class) || _class);
/**
 * Wait for the input field for the cover image and create a media picker.
 * 
 * @see https://wordpress.stackexchange.com/questions/190987/how-do-i-create-a-custom-add-media-button-modal
 */

_util__WEBPACK_IMPORTED_MODULE_6__["hooks"].register('wprfc/metaCoverImage', function (data) {
  var inputFilename = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this),
      inputId = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).prev(),
      postBox = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).parents('.rml-postbox'),
      removeLink = postBox.find('.rml-coverimage-remove'),
      image = postBox.find('.rml-coverimage'); // Make cover image removable

  removeLink.click(function (e) {
    image.hide();
    removeLink.hide();
    inputFilename.val('');
    inputId.val('');
    return e.preventDefault();
  });
  jquery__WEBPACK_IMPORTED_MODULE_3___default()('<div class="rml-drop-zone">' + _util__WEBPACK_IMPORTED_MODULE_6__["rmlOpts"].lang.coverImageDropHere + '</div>').insertAfter(jquery__WEBPACK_IMPORTED_MODULE_3___default()(this)).droppable({
    tolerance: 'pointer',
    drop: function drop(event, ui) {
      var draggable = ui.draggable;
      var id, filename, src;

      if (draggable.is('tr')) {
        id = +draggable.find('input[type="checkbox"]').val();
        filename = draggable.find('input[name="filename"]').val();
        src = draggable.find('img').attr('src');
      } else {
        id = draggable.data('id');
        var obj = draggable.parents('.attachments-browser').data('backboneView').collection.get(id);
        filename = obj.get('filename');
        src = obj.get('sizes').full.url;
      }

      image.attr('src', src).show();
      removeLink.show();
      inputFilename.val(filename);
      inputId.val(id);
    }
  });
});
/**
 * When the metadata is saved successfully listen to the "reload" state and reload the current view.
 */

_util__WEBPACK_IMPORTED_MODULE_6__["hooks"].register('folder/meta/saved', function (id, response) {
  var treeInstance = this.props.treeInstance;
  treeInstance && response.reload && treeInstance.handleReload();
});
/* harmony default export */ __webpack_exports__["default"] = (MetaBox);

/***/ }),

/***/ "./public/src/components/UploadMessage.js":
/*!************************************************!*\
  !*** ./public/src/components/UploadMessage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./public/src/components/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./public/src/store/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_6__);
/** @module components/UploadMessage */







/**
 * Show the current uploading file with progress bar and status. It uses
 * the main store to read the current upload.
 * 
 * @type React.Element
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_store__WEBPACK_IMPORTED_MODULE_4__["injectAndObserve"])(function (_ref) {
  var store = _ref.store;
  var currentUpload = store.currentUpload,
      uploadTotalRemainTime = store.uploadTotalRemainTime,
      readableUploadTotalLoaded = store.readableUploadTotalLoaded,
      readableUploadTotalSize = store.readableUploadTotalSize,
      readableUploadTotalBytesPerSec = store.readableUploadTotalBytesPerSec;

  if (!currentUpload) {
    return null;
  }

  var name = currentUpload.name,
      previewSrc = currentUpload.previewSrc,
      percent = currentUpload.percent,
      _currentUpload$node = currentUpload.node,
      title = _currentUpload$node.title,
      icon = _currentUpload$node.icon,
      readableLoaded = currentUpload.readableLoaded,
      readableSize = currentUpload.readableSize,
      deny = currentUpload.deny,
      count = store.uploading.length;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "rml-upload"
  }, !!previewSrc && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rml-upload-image"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: previewSrc
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rml-upload-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "rml-upload-file"
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rml-upload-folder"
  }, icon, " ", title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["Progress"], {
    percent: percent,
    size: "small",
    status: percent >= 100 ? 'success' : 'active'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rml-upload-progress"
  }, count > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_util__WEBPACK_IMPORTED_MODULE_5__["i18n"])('filesRemaining', {
    count: count
  }), " \xB7\xA0"), percent >= 100 ? Object(_util__WEBPACK_IMPORTED_MODULE_5__["i18n"])('receiveData') : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, readableLoaded, " / ", readableSize), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), uploadTotalRemainTime, " \xB7 ", readableUploadTotalBytesPerSec, "/s\xA0", count > 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xB7 ", readableUploadTotalLoaded, " / ", readableUploadTotalSize) : ''), !!deny && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rml-upload-deny"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    type: "warning"
  }), " ", deny)));
}));

/***/ }),

/***/ "./public/src/components/index.js":
/*!****************************************!*\
  !*** ./public/src/components/index.js ***!
  \****************************************/
/*! exports provided: Progress, DashIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashIcon", function() { return DashIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/progress */ "./node_modules/antd/lib/progress/index.js");
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_progress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return antd_lib_progress__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var antd_lib_progress_style_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/progress/style/index.css */ "./node_modules/antd/lib/progress/style/index.css");
/* harmony import */ var antd_lib_progress_style_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_progress_style_index_css__WEBPACK_IMPORTED_MODULE_3__);
/** @module components */





/**
 * Create a WordPress dash icon.
 * 
 * @property {string} name The icon
 * @see https://developer.wordpress.org/resource/dashicons/ Available icons
 * @returns React.Element
 * @function
 */

var DashIcon = function DashIcon(_ref) {
  var name = _ref.name;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "dashicons dashicons-" + name
  });
};

/***/ }),

/***/ "./public/src/hooks/index.js":
/*!***********************************!*\
  !*** ./public/src/hooks/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcut */ "./public/src/hooks/shortcut.js");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions */ "./public/src/hooks/permissions.js");
/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uploader */ "./public/src/hooks/uploader.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./public/src/hooks/modal.js");
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortable */ "./public/src/hooks/sortable.js");






/***/ }),

/***/ "./public/src/hooks/modal.js":
/*!***********************************!*\
  !*** ./public/src/hooks/modal.js ***!
  \***********************************/
/*! exports provided: getModalControllerOf, isAttachmentsBrowserSortable, isAttachmentsGalleryEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModalControllerOf", function() { return getModalControllerOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAttachmentsBrowserSortable", function() { return isAttachmentsBrowserSortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAttachmentsGalleryEdit", function() { return isAttachmentsGalleryEdit; });
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/hooks */ "./public/src/util/hooks.js");
/* harmony import */ var wp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wp */ "wp");
/* harmony import */ var wp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _others_mediaViews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../others/mediaViews */ "./public/src/others/mediaViews.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/** @module hooks/modal */




/**
 * Get the backbone controller of the modal.
 * 
 * @param {object} element The DOM element
 * @returns {Controller} The backbone controller
 */

function getModalControllerOf(element) {
  try {
    return jquery__WEBPACK_IMPORTED_MODULE_2___default()(element).parents('.rml-modal').data('backboneView').controller;
  } catch (e) {
    return null;
  }
}
/**
 * When there is a new attachments browser in modal view then
 * prepare the media view for the AppTree container.
 */

_util_hooks__WEBPACK_IMPORTED_MODULE_0__["default"].register('attachmentsBrowser/modal', function () {
  var _this = this;

  // Wait the menu, it will immmediatly created
  setTimeout(function () {
    // Check if attachments browser is visible (plugins like ACF do hide it)
    if (!_this.$el.children('ul.attachments').is(':visible')) {
      return;
    }

    var parent = _this.views.parent,
        views = parent.views,
        _views$get = views.get('.media-frame-menu'),
        _views$get2 = _slicedToArray(_views$get, 1),
        mediaMenu = _views$get2[0],
        mediaMenuViews = mediaMenu.views.get();

    var container = mediaMenuViews && mediaMenuViews.filter(function (v) {
      return v.className === 'rml-modal-container';
    });
    container && container.length && (container = container[0]) || (container = undefined);

    if (!container) {
      // Add seperator
      mediaMenu.views.add(new wp__WEBPACK_IMPORTED_MODULE_1___default.a.media.View({
        className: 'separator'
      })); // Add ReactJS container

      container = new wp__WEBPACK_IMPORTED_MODULE_1___default.a.media.View({
        className: "rml-modal-container"
      });
      mediaMenu.views.add(container);
    } // Always enable the menu


    _this.controller.state().set('menu', true, {
      silent: true
    });

    parent.$el.addClass('rml-media-modal').removeClass('hide-menu');
    /**
     * A modal attachments browser is created and the view for the
     * React element is ready.
     * 
     * @event module:util/hooks#attachmentsBrowser/modal/dom/ready
     * @param {object} container The backbone view
     * @this wp.media.view.AttachmentsBrowser
     */

    _util_hooks__WEBPACK_IMPORTED_MODULE_0__["default"].call('attachmentsBrowser/modal/dom/ready', [container], _this);
    setTimeout(function () {
      return jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).trigger('resize');
    }, 0);
  }, 50);
});
/**
 * The sortable state gets refreshed so check if we have to destroy the
 * draggable instance.
 * 
 * @returns {boolean}
 */

function isAttachmentsBrowserSortable(element) {
  try {
    var attachments = element.attachmentsBrowser.attachments; // attachments.options.model.get('id') === 'gallery-edit'

    return !attachments.$el.sortable('option', 'disabled');
  } catch (e) {
    return false;
  }
}
/**
 * @returns {boolean}
 */

function isAttachmentsGalleryEdit(attachments) {
  try {
    return attachments.options.model.get('id') === 'gallery-edit';
  } catch (e) {
    return false;
  }
}
/**
 * When a tree gets initialized then check if it is a modal and
 * modify the state.
 */

_util_hooks__WEBPACK_IMPORTED_MODULE_0__["default"].register('tree/init', function (state, _ref) {
  var _this2 = this;

  var isModal = _ref.isModal;

  if (isModal && this.attachmentsBrowser) {
    state.isResizable = false, state.isSticky = false;
    state.isStickyHeader = false;
    state.isFullWidth = true; // Update WP attachment sort mode and disable the draggable items

    state.isWPAttachmentsSortMode = isAttachmentsBrowserSortable(this);

    var changeOrderBy = function changeOrderBy() {
      return _this2.setState({
        isWPAttachmentsSortMode: isAttachmentsBrowserSortable(_this2)
      });
    },
        props = this.attachmentsBrowser.collection.props;

    props.on('change:orderby', changeOrderBy);

    this._unsubscribeChangeOrderBy = function () {
      return props.off('change:orderby', changeOrderBy);
    }; // Update previously selected item if tab change is the reason to rerender


    var modal = this.attachmentsBrowser.controller.modal;
    Object(_others_mediaViews__WEBPACK_IMPORTED_MODULE_3__["restoreMediaViewSelection"])(this, modal._rmlFolder, function (_ref2) {
      var id = _ref2.id;
      _this2.attachmentsBrowser.attachments._rmlInitialSetted = true;
      state.initialSelectedId = id;
    });
  }
});
/**
 * When a modal tree gets destroyed save the last selected folder in the modal.
 */

_util_hooks__WEBPACK_IMPORTED_MODULE_0__["default"].register('tree/destroy', function (state, _ref3) {
  var isModal = _ref3.isModal,
      store = _ref3.store;

  if (isModal) {
    this.attachmentsBrowser.controller.modal._rmlFolder = store.selectedId;
    var _unsubscribeChangeOrderBy = this._unsubscribeChangeOrderBy;
    _unsubscribeChangeOrderBy && _unsubscribeChangeOrderBy();
    this._unsubscribeChangeOrderBy = undefined;
  }
});
/**
 * When the window gets resized check the flexible modal containers
 * for responsiveness.
 */

jquery__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).resize(function () {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.rml-modal-container .aiot-pad > div:nth-child(2)').each(function () {
      var parent = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents('.rml-media-modal'),
          menu = parent.find('.media-frame-menu .media-menu'),
          menuHeight = menu.get(0).offsetHeight,
          oppositeHeight = menu.children(':not(.rml-modal-container)').get().map(function (c) {
        return c.offsetHeight;
      }).reduce(function (a, b) {
        return a + b;
      }, 0);

      if (menuHeight - oppositeHeight > 300) {
        parent.removeClass('rml-mobile-modal');
      } else {
        parent.addClass('rml-mobile-modal');
      }
    });
  });
});

/***/ }),

/***/ "./public/src/hooks/permissions.js":
/*!*****************************************!*\
  !*** ./public/src/hooks/permissions.js ***!
  \*****************************************/
/*! exports provided: LockedToolTipText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockedToolTipText", function() { return LockedToolTipText; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rmlopts */ "rmlopts");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rmlopts__WEBPACK_IMPORTED_MODULE_1__);
/** @module hooks/permissions */


/**
 * This functions generates a tooltip text for the locked toolbar button.
 * 
 * @params {object} props The properties
 * @params {string[]} props.restrictions The restrictions
 * @returns {React.Element}
 */

var LockedToolTipText = function LockedToolTipText(_ref) {
  var restrictions = _ref.restrictions;
  var inheritsCount = 0;
  return React.createElement("div", null, Object(_util__WEBPACK_IMPORTED_MODULE_0__["i18n"])('restrictionsSuffix'), React.createElement("br", null), restrictions.map(function (r) {
    var inherits = r.slice(-1) === '>',
        i18nKey = inherits ? r.slice(0, -1) : r;
    inherits && inheritsCount++;
    return React.createElement("div", {
      key: r
    }, "- ", Object(_util__WEBPACK_IMPORTED_MODULE_0__["i18n"])('restrictions.' + i18nKey), inherits && React.createElement("strong", null, " *"));
  }), inheritsCount > 0 && React.createElement("div", null, React.createElement("strong", null, "*"), " ", Object(_util__WEBPACK_IMPORTED_MODULE_0__["i18n"])('restrictionsInherits')));
};
/**
 * Show a locked button with tooltip in toolbar depending the permissions.
 * 
 * @param {module:AppTree} element The AppTree
 * @param {object} [selected=Current] The node
 */

/* harmony default export */ __webpack_exports__["default"] = (function (element) {
  var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : element.getTreeItemById();
  var restrictions = [];
  var _element$state = element.state,
      currentFolderRestrictions = _element$state.currentFolderRestrictions,
      toolbar_locked = _element$state.toolbar_locked,
      lockedVisible = !!(selected && (restrictions = selected.properties.restrictions).length),
      lockedToolTipText = lockedVisible ? React.createElement(LockedToolTipText, {
    restrictions: restrictions
  }) : '';
  currentFolderRestrictions.join() !== restrictions.join() && element.setState({
    currentFolderRestrictions: restrictions || [],
    toolbar_locked: Object.assign(toolbar_locked, {
      visible: lockedVisible,
      toolTipText: lockedToolTipText
    })
  });
});
/**
 * A new node is pushed to the folder tree. We can modify it here that way that
 * a locked icon is shown.
 */

_util__WEBPACK_IMPORTED_MODULE_0__["hooks"].register('tree/node', function (node) {
  var restrictions = node.properties.restrictions;

  if (restrictions.length) {
    node.className['rml-locked'] = true;
  }
});
/**
 * When a file is added do check if upload is allowed to this folder.
 */

_util__WEBPACK_IMPORTED_MODULE_0__["hooks"].register('uploader/add', function (file, _ref2, store) {
  var properties = _ref2.properties;

  if (properties && properties.restrictions && properties.restrictions.join().indexOf('ins') > -1) {
    this.node = store.getTreeItemById(+rmlopts__WEBPACK_IMPORTED_MODULE_1___default.a.rootId, false);
    this.deny = Object(_util__WEBPACK_IMPORTED_MODULE_0__["i18n"])('restrictions.ins');
  }
});

/***/ }),

/***/ "./public/src/hooks/shortcut.js":
/*!**************************************!*\
  !*** ./public/src/hooks/shortcut.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_4__);
/** @module hooks/shortcut */





/**
 * A icon with tooltip showing a text that the given attachment is a shortcut.
 * 
 * @param {object} props Properties
 * @type React.Element
 */

var ShortcutIconTooltip = function ShortcutIconTooltip(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    placement: "top",
    title: Object(_util__WEBPACK_IMPORTED_MODULE_2__["i18n"])('shortcut'),
    content: Object(_util__WEBPACK_IMPORTED_MODULE_2__["i18n"])('shortcutInfo')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "rmlicon-share"
  }));
};
/**
 * Is called after each grid item in the attachments browser is rendered completely
 * and adds the shortcut icon container with a tooltip.
 */


_util__WEBPACK_IMPORTED_MODULE_2__["hooks"].register('attachmentsBrowser/item/rendered', function ($el, model, element) {
  // Parse it
  var isShortcut = model.attributes.rmlIsShortcut > 0;
  var icon = $el.children('.attachment-preview').children('.rml-shortcut-container');
  icon.remove();

  if (isShortcut > 0) {
    $el.addClass('rml-shortcut rml-shortcut-grid');
    icon = jquery__WEBPACK_IMPORTED_MODULE_3___default()('<div class="rml-shortcut-container"></div>').appendTo($el.children('.attachment-preview'));
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShortcutIconTooltip, null), icon.get(0));
  } else {
    $el.removeClass('rml-shortcut rml-shortcut-grid');
  }
});
/**
 * Is called in media library list mode and shows a shortcut icon to each shortcut attachment.
 */

_util__WEBPACK_IMPORTED_MODULE_2__["hooks"].register('ready', function () {
  jquery__WEBPACK_IMPORTED_MODULE_3___default()('.rmlShortcutSpan').each(function () {
    var tr = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).parents('tr'),
        imgContainer = tr.children('td.title').find('.media-icon'),
        icon = jquery__WEBPACK_IMPORTED_MODULE_3___default()('<div class="rml-shortcut-container"></div>').appendTo(imgContainer);
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShortcutIconTooltip, null), icon.get(0));
  });
});
/**
 * Is called in grid mode when an item is removed. This callback handles the remove of duplicate
 * shortcuts when one gets removed.
 */

_util__WEBPACK_IMPORTED_MODULE_2__["hooks"].register('attachmentsBrowser/item/removed', function (element, model, collection) {
  var id = model.attributes.id;
  collection.models.forEach(function (single) {
    if (single.attributes.rmlIsShortcut === id) {
      collection.remove(single);
    }
  });
});

/***/ }),

/***/ "./public/src/hooks/sortable.js":
/*!**************************************!*\
  !*** ./public/src/hooks/sortable.js ***!
  \**************************************/
/*! exports provided: applyToAttachmentsBrowser, isFilterActive, isOrderByActive, orderUrl, toggleSortable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyToAttachmentsBrowser", function() { return applyToAttachmentsBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilterActive", function() { return isFilterActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOrderByActive", function() { return isOrderByActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderUrl", function() { return orderUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSortable", function() { return toggleSortable; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./public/src/store/index.js");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_3__);
/** @module hooks/sortable */




var WP_TABLE_LIST_SELECTOR = '.wp-list-table.media tbody';
/**
 * Apply an order to attachments browser without reloading the collection.
 */

function applyToAttachmentsBrowser(attachmentsBrowser, selected) {
  var orderby = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'rml';
  var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ASC';
  var filter;

  if (attachmentsBrowser && (filter = attachmentsBrowser.toolbar.get('rml_folder').filters[selected.id])) {
    var props = attachmentsBrowser.collection.props,
        o = {
      silent: true
    };

    if (selected.contentCustomOrder === 1 || selected.forceCustomOrder) {
      filter.props.orderby = 'rml';
      filter.props.order = 'ASC';
      props.set({
        orderby: orderby,
        order: order
      }, o);
    } else {
      delete filter.props.orderby;
      delete filter.props.order;
      props.set({
        orderby: 'date',
        order: 'DESC'
      }, o);
    }
  }
}
/**
 * An item gets relocated, so update the table or grid view.
 */

_util__WEBPACK_IMPORTED_MODULE_0__["hooks"].register('attachment/relocate', function (node, attachmentId, nextId, lastIdInView, next, e, ui) {
  var attachmentsBrowser = jquery__WEBPACK_IMPORTED_MODULE_1___default()(ui.item).parents(".attachments-browser").data('backboneView');
  ui.item.stop().fadeTo(100, 0.2);
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["ajax"])('attachments/' + attachmentId, {
    method: 'PUT',
    data: {
      folderId: node.id,
      nextId: nextId,
      lastId: lastIdInView
    }
  }).done(function () {
    node.setter(function (node) {
      return node.contentCustomOrder = 1;
    });
    applyToAttachmentsBrowser(attachmentsBrowser, node);
    ui.item.stop().fadeTo(100, 1);
  });
});
/**
 * Prepare sortable in list table mode.
 */

_util__WEBPACK_IMPORTED_MODULE_0__["hooks"].register('ready', function () {
  var lastIdInView; // Grid mode

  jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('sortstart', '.attachments-browser ul.attachments', function (e, ui) {
    var _$$parents$data = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents(".attachments-browser").data('backboneView'),
        collection = _$$parents$data.collection;

    lastIdInView = collection.models[collection.models.length - 1].id;
  }).on('sortupdate', '.attachments-browser ul.attachments', function (e, ui) {
    var next = ui.item.next(),
        nextId = next.html() ? next.data('id') : false,
        attachmentId = ui.item.data('id'),
        folder = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents(".attachments-browser").data('backboneView').controller.$RmlAppTree.getTreeItemById();
    /**
     * An attachment is relocated and should be saved to the server.
     * 
     * @event module:util/hooks#attachment/relocate
     * @param {module:store/TreeNode~TreeNode} folder The tree node
     * @param {int} attachmentId The attachment id
     * @param {int} nextId The next id
     * @param {int} lastIdInView
     * @param {jQuery} next
     * @this wp.media.view.AttachmentsBrowser
     */

    _util__WEBPACK_IMPORTED_MODULE_0__["hooks"].call('attachment/relocate', [folder, attachmentId, nextId, lastIdInView, next, e, ui]);
  }); // List mode

  jquery__WEBPACK_IMPORTED_MODULE_1___default()(WP_TABLE_LIST_SELECTOR).sortable({
    disabled: true,
    appendTo: 'body',
    tolerance: 'pointer',
    scrollSensitivity: 50,
    placeholder: 'ui-sortable-helper-wp-media-list',
    scrollSpeed: 50,
    distance: 10,
    cursor: 'move',
    start: function start(e, ui) {
      ui.placeholder.height(ui.helper[0].scrollHeight); // The last ID (grid mode is done in the backbone collection)

      lastIdInView = +jquery__WEBPACK_IMPORTED_MODULE_1___default()(WP_TABLE_LIST_SELECTOR + ' tr:last input[name="media[]"]').val();
    },
    update: function update(e, ui) {
      var next = ui.item.next(),
          nextId = next.html() ? next.find('input[name="media[]"]').val() : false,
          attachmentId = ui.item.find('input[name="media[]"]').val(),
          folderId = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.rml-container .aiot-active').data('id');
      _util__WEBPACK_IMPORTED_MODULE_0__["hooks"].call('attachment/relocate', [_store__WEBPACK_IMPORTED_MODULE_2__["default"].getTreeItemById(folderId), attachmentId, nextId, lastIdInView, next, e, ui]);
    }
  });
});
/**
 * Checks if a filter is active.
 * 
 * @param {object} [attachmentsBrowser] If set the filter is searched in the backbone controller
 */

function isFilterActive(attachmentsBrowser) {
  if (attachmentsBrowser) {
    var filters = ['monthnum', 'year', 'uploadedTo', 'type'],
        props = attachmentsBrowser.collection.props;

    for (var i = 0; i < filters.length; i++) {
      if (props.get(filters[i])) {
        return true;
      }
    }

    return false;
  } else {
    // List
    return !!Object(_util__WEBPACK_IMPORTED_MODULE_0__["urlParam"])('attachment-filter');
  }
}
/**
 * Checks if a orderby is active.
 * 
 * @param {object} [attachmentsBrowser] If set the filter is searched in the backbone controller
 */

function isOrderByActive(attachmentsBrowser) {
  var orderby = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rml';
  var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ASC';

  if (attachmentsBrowser) {
    var props = attachmentsBrowser.collection.props,
        propOrder = props.get('order') || 'DESC';
    return props.get('orderby') === orderby && propOrder.toUpperCase() === order.toUpperCase();
  } else {
    // List
    var _propOrder = Object(_util__WEBPACK_IMPORTED_MODULE_0__["urlParam"])('order') || 'DESC';

    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["urlParam"])('orderby') === orderby && _propOrder.toUpperCase() === order.toUpperCase();
  }
}
/**
 * @returns {string}
 */

function orderUrl() {
  var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href;
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["addUrlParam"])(Object(_util__WEBPACK_IMPORTED_MODULE_0__["addUrlParam"])(href, 'orderby', 'rml'), 'order', 'asc');
}
/**
 * Toggle the sortable mode. Popup a message if custom order is not disabled, yet.
 * If custom order is enabled check the different list and grid mode behavior.
 * 
 * @param {object} selected The selected node
 * @parma {boolean} mode The mode to activate
 * @param {object} [attachmentsBrowser] If set the filter is searched in the backbone controller
 */

function toggleSortable(selected, mode, attachmentsBrowser) {
  var orderByActive = isOrderByActive(attachmentsBrowser) || isOrderByActive(attachmentsBrowser, 'date', 'DESC'),
      filterActive = isFilterActive(attachmentsBrowser),
      redirect = !orderByActive || filterActive; // Redirect to the sortable mode

  if (redirect && mode) {
    if (!attachmentsBrowser) {
      var href = orderUrl();
      window.location.href = href + "#order";
    } else {
      // Grid mode, show popup that the filters should be deactivated
      react_aiot__WEBPACK_IMPORTED_MODULE_3__["message"].error(Object(_util__WEBPACK_IMPORTED_MODULE_0__["i18n"])('orderFilterActive'));
    }

    return false;
  } // Toggle sortable


  (attachmentsBrowser ? attachmentsBrowser.attachments.$el : jquery__WEBPACK_IMPORTED_MODULE_1___default()(WP_TABLE_LIST_SELECTOR)).sortable(mode ? 'enable' : 'disable');
  return true;
}

/***/ }),

/***/ "./public/src/hooks/uploader.js":
/*!**************************************!*\
  !*** ./public/src/hooks/uploader.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");
/* harmony import */ var wp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp */ "wp");
/* harmony import */ var wp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./public/src/store/index.js");
/* harmony import */ var _AppTree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AppTree */ "./public/src/AppTree.js");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_UploadMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UploadMessage */ "./public/src/components/UploadMessage.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _others_mediaViews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../others/mediaViews */ "./public/src/others/mediaViews.js");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rmlopts */ "rmlopts");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rmlopts__WEBPACK_IMPORTED_MODULE_10__);
/** @module hooks/uploader */











var UniqueUploadMessage = React.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
  store: _store__WEBPACK_IMPORTED_MODULE_4__["default"]
}, React.createElement(_components_UploadMessage__WEBPACK_IMPORTED_MODULE_7__["default"], null)),
    CLASS_NAME = 'ant-message-bottom';
var uploaderFetchCountsTimeout, currentMessageHide;
/**
 * Show the uploading message.
 */

function showMessage() {
  currentMessageHide = react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].loading(UniqueUploadMessage, 0);
}
/**
 * Hide the uploading message.
 */


function hideMessage() {
  currentMessageHide && currentMessageHide();
}
/**
 * Toggle the placement of the unique uploader message.
 */


function togglePlacement() {
  jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).parents('.ant-message').toggleClass(CLASS_NAME);
  setTimeout(function () {
    return jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).one('mouseenter', '.rml-upload', togglePlacement);
  }, 10);
}
/**
 * Get the current selected node id.
 * 
 * @returns {object}
 */


function getNodeId() {
  var selectVal = jquery__WEBPACK_IMPORTED_MODULE_3___default()(".attachments-filter-preUploadUi:visible:first"),
      value = selectVal.val();

  if (value) {
    var option = selectVal.find('option[value="' + value + '"]'),
        _option$data = option.data(),
        type = _option$data.type,
        name = _option$data.name,
        id = parseInt(value, 10);

    return _store__WEBPACK_IMPORTED_MODULE_4__["default"].getTreeItemById(value, false) || _store__WEBPACK_IMPORTED_MODULE_4__["TreeNode"].create({
      id: id,
      title: name,
      properties: {
        type: type
      },
      isQueried: false
    });
  } else {
    return _AppTree__WEBPACK_IMPORTED_MODULE_5__["latestQueriedFolder"].node;
  }
}
/**
 * When a file is added do general checks.
 */


_util__WEBPACK_IMPORTED_MODULE_1__["hooks"].register('uploader/add', function (file, node) {
  if (node.id === 'all') {
    this.node = _store__WEBPACK_IMPORTED_MODULE_4__["default"].getTreeItemById(+rmlopts__WEBPACK_IMPORTED_MODULE_10___default.a.rootId, false);
  }
});
/**
 * The media-new.php page. Adds the property to the asyn-upload.php file and
 * modifies the output row while uploading a new file. 
 * 
 * @see wp-includes/js/plupload/handlers.js
 */

_util__WEBPACK_IMPORTED_MODULE_1__["hooks"].register('general', function () {
  if (!jquery__WEBPACK_IMPORTED_MODULE_3___default()('body').hasClass('media-new-php')) {
    return;
  } // When the file is uploaded, then the original filename is overwritten. Now we
  // must add it again to the row after the filename.


  if (window.prepareMediaItemInit) {
    var copyPrepareMediaItemInit = window.prepareMediaItemInit;

    window.prepareMediaItemInit = function (file) {
      copyPrepareMediaItemInit.apply(this, arguments);

      if (file.rmlFolderHTML) {
        var mediaRowFilename = jquery__WEBPACK_IMPORTED_MODULE_3___default()('#media-item-' + file.id).find(".filename");

        if (mediaRowFilename.length) {
          mediaRowFilename.after(file.rmlFolderHTML);
        }
      }
    };
  } // Add event to the uploader so the parameter for the folder id is sent


  setTimeout(function () {
    return window.uploader && window.uploader.bind('BeforeUpload', function (up, file) {
      var rmlFolderNode = getNodeId(); // Set server-side-readable rmlfolder id

      if (rmlFolderNode && !isNaN(+rmlFolderNode.id)) {
        up.settings.multipart_params.rmlFolder = rmlFolderNode.id; // Get title as string

        var div = document.createElement('div');
        var title = rmlFolderNode.title;
        typeof title === 'string' ? div.innerText = title : react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render(title, div);
        title = div.innerText;
        var mediaRowFilename = jquery__WEBPACK_IMPORTED_MODULE_3___default()('#media-item-' + file.id).find('.filename');

        if (mediaRowFilename.length > 0) {
          file.rmlFolderHTML = '<div class="media-item-rml-folder">' + title + '</div>';
          mediaRowFilename.after(file.rmlFolderHTML);
        }
      }
    });
  }, 500);
});
/**
 * The default backbone uploader.
 */

_util__WEBPACK_IMPORTED_MODULE_1__["hooks"].register('general', function () {
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_1__["findDeep"])(window, 'wp.media') || !Object(_util__WEBPACK_IMPORTED_MODULE_1__["findDeep"])(window, 'wp.Uploader')) {
    return;
  }

  jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).one('mouseenter', '.rml-upload', togglePlacement); // Initialize

  var oldP = wp__WEBPACK_IMPORTED_MODULE_2___default.a.Uploader.prototype,
      oldInit = oldP.init,
      oldSucess = oldP.success;

  oldP.init = function () {
    oldInit.apply(this, arguments);
    /**
     * The uploader gets initialized.
     * 
     * @event module:util/hooks#uploader/init
     * @this wp.Uploader
     */

    _util__WEBPACK_IMPORTED_MODULE_1__["hooks"].call('uploader/init', [], this); // Bind the last selected node to the uploaded file

    this.uploader.bind('FileFiltered', function (up, file) {
      file.rmlFolderNode = getNodeId();
    }); // Remove files from queue if upload is a folder

    /*this.uploader.bind('FilesAdded', function(up, files) {
        files.forEach(file => {
            console.log(file.getSource().relativePath);
        	up.removeFile(file);
        });
        console.log(files);
        console.log(up);
        
        // TODO: Disable upload until here and show dialog with folder preview
    }, undefined, 10);*/
    // A new file is added, add it to the store so it can be rendered

    this.uploader.bind('FilesAdded', function (up, files) {
      showMessage();
      files.forEach(function (file) {
        var cid = file.attachment.cid,
            name = file.name,
            percent = file.percent,
            loaded = file.loaded,
            size = file.size,
            rmlFolderNode = file.rmlFolderNode,
            previewObj = {
          cid: cid,
          name: name,
          percent: percent,
          loaded: loaded,
          size: size,
          node: rmlFolderNode
        };
        /**
         * A new file is added.
         * 
         * @event module:util/hooks#uploader/add
         * @param {object} file The file
         * @param {module:store/TreeNode~TreeNode} folder The folder node
         * @param {module:store~Store} store The store
         * @this object
         */

        _util__WEBPACK_IMPORTED_MODULE_1__["hooks"].call('uploader/add', [file, rmlFolderNode, _store__WEBPACK_IMPORTED_MODULE_4__["default"]], previewObj);
        var upload = file.rmlUpload = _store__WEBPACK_IMPORTED_MODULE_4__["default"].addUploading(previewObj); // Generate preview url

        var preloader = new window.mOxie.Image();

        preloader.onload = function () {
          preloader.downsize(89, 89);
          var finalUrl;

          try {
            finalUrl = preloader.getAsDataURL();
            finalUrl = Object(_util__WEBPACK_IMPORTED_MODULE_1__["dataUriToBlob"])(finalUrl);
            finalUrl = window.URL.createObjectURL(finalUrl);
            finalUrl && upload.setter(function (u) {
              return u.previewSrc = finalUrl;
            });
          } catch (e) {// Silence is golden.
          }
        };

        preloader.load(file.getSource());
      });
    }); // Set server-side-readable RML folder id

    this.uploader.bind('BeforeUpload', function (up, file) {
      var multipart_params = up.settings.multipart_params;
      var rmlFolderNode = file.rmlFolderNode;
      !rmlFolderNode && (rmlFolderNode = getNodeId()); // Lazy node

      if (rmlFolderNode && !isNaN(+rmlFolderNode.id)) {
        multipart_params.rmlFolder = rmlFolderNode.id;
      }
    }); // The upload progress

    this.uploader.bind('UploadProgress', function (_ref, _ref2) {
      var total = _ref.total;
      var rmlUpload = _ref2.rmlUpload,
          percent = _ref2.percent,
          loaded = _ref2.loaded;
      rmlUpload.setter(function (u) {
        u.percent = percent;
        u.loaded = loaded;
      });
      _store__WEBPACK_IMPORTED_MODULE_4__["default"].setUploadTotal(total);
    }); // All files are completed

    this.uploader.bind('UploadComplete', function (up, files) {
      // Update queue and counter
      up.splice();
      up.total.reset();
      clearTimeout(uploaderFetchCountsTimeout);
      uploaderFetchCountsTimeout = setTimeout(function () {
        return _store__WEBPACK_IMPORTED_MODULE_4__["default"].fetchCounts();
      }, 500); // Avoid too many requests
      // Hide uploader message

      hideMessage();
    });
  };
  /**
   * A single file is completed successfully.
   */


  oldP.success = function (file_attachment) {
    oldSucess.apply(this, arguments); // Remove file from queue

    var upload = _store__WEBPACK_IMPORTED_MODULE_4__["default"].removeUploading(file_attachment.cid),
        uploadId = upload.node;
    _store__WEBPACK_IMPORTED_MODULE_4__["default"].addFoldersNeedsRefresh(uploadId); // Update all available backbone view

    var rmlGalleryOrder = file_attachment.get('rmlGalleryOrder'),
        at = rmlGalleryOrder === -1 ? 0 : rmlGalleryOrder;
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(_others_mediaViews__WEBPACK_IMPORTED_MODULE_9__["BROWSER_SELECTOR"]).each(function () {
      var backboneView = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).data('backboneView');

      if (backboneView) {
        var $RmlAppTree = backboneView.controller.$RmlAppTree,
            activeNode = $RmlAppTree.getTreeItemById(undefined, false);

        if (uploadId === activeNode.id || activeNode.id === 'all') {
          backboneView.collection.add(file_attachment, {
            at: activeNode.id === 'all' ? 0 : at
          });
        }
      }
    });
  };
});
var GALLERY_ALLOWED_EXT = ['jpg', 'jpeg', 'jpe', 'gif', 'png'];
/**
 * Checks, if the uploading folder is a collection or gallery and restrict the upload,
 * move the file to unorganized folder.
 */

_util__WEBPACK_IMPORTED_MODULE_1__["hooks"].register('uploader/add', function (_ref3, _ref4, store) {
  var name = _ref3.name;
  var properties = _ref4.properties;

  // May only contain image files
  if (properties && properties.type) {
    var ext = name.substr(name.lastIndexOf('.') + 1).toLowerCase(),
        isCollection = +properties.type === 1;

    if (jquery__WEBPACK_IMPORTED_MODULE_3___default.a.inArray(ext, GALLERY_ALLOWED_EXT) === -1 || isCollection) {
      this.node = store.getTreeItemById(+rmlopts__WEBPACK_IMPORTED_MODULE_10___default.a.rootId, false);
      this.deny = Object(_util__WEBPACK_IMPORTED_MODULE_1__["i18n"])(isCollection ? 'uploadingCollection' : 'uploadingGallery');
    }
  }
});

/***/ }),

/***/ "./public/src/others/filter.js":
/*!*************************************!*\
  !*** ./public/src/others/filter.js ***!
  \*************************************/
/*! exports provided: FILTER_SELECTOR, filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_SELECTOR", function() { return FILTER_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./public/src/store/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _ */ "_");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_2__);
/** @module others/filter */



/**
 * The attachments filter selectors.
 */

var FILTER_SELECTOR = '.attachment-filters.attachment-filters-rml';
/**
 * The filter select dropdown prepared as backbone object.
 */

var filter = {
  id: 'media-attachment-filters-rml',
  className: 'attachment-filters attachment-filters-rml',
  lastSlugs: {},
  createFilters: function createFilters(namesSlug) {
    this.$el.data('backboneView', this); // default "all" filter, shows all tags

    var filters = this.filters = {
      all: {
        text: 'All',
        props: {
          rml_folder: ''
        },
        priority: 10
      }
    }; // No filters loaded, yet

    if (namesSlug) {
      this.lastSlugs = namesSlug;
      var names = namesSlug.names,
          slugs = namesSlug.slugs; // create a filter for each tag

      var props, node;

      for (var i = 0; i < names.length; i++) {
        node = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTreeItemById(slugs[i]);
        props = {
          rml_folder: slugs[i]
        }; // Add order by

        if (node && (node.contentCustomOrder === 1 || node.forceCustomOrder)) {
          props.orderby = 'rml';
          props.order = 'ASC';
        }

        filters[slugs[i]] = {
          text: names[i],
          props: props,
          priority: 20 + i
        };
      }
    } //this.model.set(filters['all'].props); // Implemented in mediaViews


    if (namesSlug) {
      // Build `<option>` elements.
      this.$el.html(___WEBPACK_IMPORTED_MODULE_2___default.a.chain(this.filters).map(function (filter, value) {
        return {
          el: jquery__WEBPACK_IMPORTED_MODULE_1___default()('<option></option>').val(value).html(filter.text)[0],
          priority: filter.priority || 50
        };
      }, this).sortBy('priority').pluck('el').value()); // Reselect

      this.select();
    }
  }
};

/***/ }),

/***/ "./public/src/others/mediaViews.js":
/*!*****************************************!*\
  !*** ./public/src/others/mediaViews.js ***!
  \*****************************************/
/*! exports provided: BROWSER_SELECTOR, firstCreatedToolbar, restoreMediaViewSelection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_SELECTOR", function() { return BROWSER_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstCreatedToolbar", function() { return firstCreatedToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreMediaViewSelection", function() { return restoreMediaViewSelection; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");
/* harmony import */ var _util_dragdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/dragdrop */ "./public/src/util/dragdrop.js");
/* harmony import */ var wp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp */ "wp");
/* harmony import */ var wp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter */ "./public/src/others/filter.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/modal */ "./public/src/hooks/modal.js");
/** @module others/mediaViews */






/**
 * The attachments browser selectors.hooks
 */

var BROWSER_SELECTOR = '.attachments-browser';
/**
 * This deferred promise is resolved when the first attachments browser'
 * toolbar is created with the RML filter.
 */

var firstCreatedToolbar = jquery__WEBPACK_IMPORTED_MODULE_4___default.a.Deferred();
/**
 * Restores the selected id from the _rmlFolder property of the given context.
 * 
 * @param {module:AppTree~AppTree} tree The tree instance
 * @param {object} _rmlFolder The _rmlFolder property
 * @param {function} [callback] Optional callback resolved with the selected node
 */

function restoreMediaViewSelection(tree, _rmlFolder, callback) {
  if (_rmlFolder !== undefined && tree) {
    // Detect, if the folder is available, if yes, select it if not yet
    var store = tree.props.store,
        node = store.getTreeItemById(_rmlFolder);

    if (node && node.visible && store.selectedId !== _rmlFolder) {
      node.setter(function (node) {
        node.selected = true;
      });
    } // If the folder is no longer available, force 'All' files to be selected


    if (!node || !node.$visible) {
      tree.handleSelect('all');
    } else {
      callback && callback(node);
    }
  }
}
/**
 * Modify the media-views.js components (Backbone) in a way
 * to make them compatible with the AIOT component.
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["findDeep"])(window, 'wp.media.view.Attachment.Library')) {
    return false;
  } // Fix bug with uploads.php?item=:item route when refreshing the page
  //const oldShowItem = wp.media.view.MediaFrame.Manage.Router.prototype.showItem;
  //wp.media.view.MediaFrame.Manage.Router.prototype.showItem = function() {
  //	const args = arguments;
  //	if (wp.media.frames.browse) {
  //		return oldShowItem.apply(this, );
  //	}
  //	setTimeout(() => wp.media.view.MediaFrame.Manage.Router.prototype.showItem.apply(this, args), 50);
  //};
  // Create filter


  var RMLFilter = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.AttachmentFilters.RML = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.AttachmentFilters.extend(_filter__WEBPACK_IMPORTED_MODULE_3__["filter"]); // Hold selectedId to select previously selected id

  var Modal = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Modal;
  wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Modal = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Modal.extend({
    className: 'rml-modal',
    // Add class and backboneView so we can find it via DOM, see getModalControllerOf in modal.js
    initialize: function initialize() {
      Modal.prototype.initialize.apply(this, arguments);
      this.$el.data('backboneView', this);
    },
    close: function close() {
      Modal.prototype.close.apply(this, arguments);
      var $RmlAppTree = this.controller.$RmlAppTree;
      this._rmlFolder = $RmlAppTree ? $RmlAppTree.props.store.selectedId : undefined;
    },
    open: function open() {
      var $RmlAppTree = this.controller.$RmlAppTree;
      $RmlAppTree && restoreMediaViewSelection($RmlAppTree, this._rmlFolder);
      Modal.prototype.open.apply(this, arguments);
    }
  }); // Allow rml orderby

  wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.model.Query.orderby.allowed.push('rml');

  var createComporator = function createComporator(attachments, collection, fallbackComparator) {
    return function (a, b, c) {
      var $RmlAppTree = attachments.controller.$RmlAppTree;
      var selectedId;

      if ($RmlAppTree && $RmlAppTree.props && (selectedId = $RmlAppTree.getSelectedId()) && selectedId === 'all') {
        return fallbackComparator.apply(this, arguments);
      }

      var aO, bO;

      if (collection.props.get('orderby') === 'rml' && (aO = a.attributes.rmlGalleryOrder) && (bO = b.attributes.rmlGalleryOrder) && aO !== -1 && bO !== -1) {
        if (aO < bO) {
          return -1;
        } else if (aO > bO) {
          return 1;
        }

        return 0;
      } else if (typeof fallbackComparator === 'function') {
        return fallbackComparator.apply(this, arguments);
      }
    };
  }; // Create rml orderby comparator


  var Attachments = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Attachments;
  wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Attachments = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Attachments.extend({
    initialize: function initialize() {
      Attachments.prototype.initialize.apply(this, arguments);
      var that = this,
          collection = this.collection,
          comparator = collection.comparator; // Disable comporator in gallery-edit mode (dialog)

      if (Object(_hooks_modal__WEBPACK_IMPORTED_MODULE_5__["isAttachmentsGalleryEdit"])(this)) {
        collection.comparator = undefined;
        this.initSortable();
        return;
      }

      collection.comparator = createComporator(that, collection, comparator); // Initially load a folder from the AppTree initialSelectedId state

      var oldMore = collection.more;
      that._rmlInitialSetted = false;

      collection.more = function () {
        var _that$controller, _that$controller$acf, _that$controller$acf$;

        if (!that.views.parent || ((_that$controller = that.controller) === null || _that$controller === void 0 ? void 0 : (_that$controller$acf = _that$controller.acf) === null || _that$controller$acf === void 0 ? void 0 : (_that$controller$acf$ = _that$controller$acf.data) === null || _that$controller$acf$ === void 0 ? void 0 : _that$controller$acf$.mode) === 'edit') {
          return oldMore.apply(this, arguments);
        }

        var $RmlAppTree = that.controller.$RmlAppTree,
            toolbar = that.views.parent.toolbar;
        var initialSelectedId;

        if ($RmlAppTree && $RmlAppTree.props && (initialSelectedId = $RmlAppTree.initialSelectedId)) {
          if (!that._rmlInitialSetted) {
            var model = toolbar.get('rml_folder').model;
            model.set({
              rml_folder: initialSelectedId === 'all' ? '' : initialSelectedId
            }, {
              silent: false
            });
            that._rmlInitialSetted = true;
          }

          return oldMore.apply(this, arguments);
        }

        return jquery__WEBPACK_IMPORTED_MODULE_4___default.a.Deferred().resolveWith(that).promise();
      };
    },

    /**
     * Override the default behavior when scrolling is relative to the document
     * height: upload.php. Instead of calculating with the scroll bottom use
     * the view-port approach.
     * 
     * @internal
     */
    scroll: function scroll() {
      var _this = this;

      var el = this.options.scrollElement,
          overrideDefault = el === document && !Object(_hooks_modal__WEBPACK_IMPORTED_MODULE_5__["isAttachmentsGalleryEdit"])(this); // The scroll event occurs on the document, but the element
      // that should be checked is the last grid item

      if (overrideDefault && !this.$el.hasClass('rml-loading')) {
        el = this.$el.children(':last');

        if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()(el).is(':visible') || !this.collection.hasMore()) {
          return;
        }

        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["inViewPort"])(el, true)) {
          this.$el.addClass('rml-loading');
          this.collection.more().done(function () {
            _this.$el.removeClass('rml-loading');

            _this.scroll();
          });
        }
      } else {
        Attachments.prototype.scroll.apply(this, arguments);
      }
    }
  }); // Call a grid render for all new generated items

  var oldRender = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Attachment.Library.prototype.render;

  wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Attachment.Library.prototype.render = function () {
    oldRender.apply(this, arguments); // Disable in gallery edit view

    if (Object(_hooks_modal__WEBPACK_IMPORTED_MODULE_5__["isAttachmentsGalleryEdit"])(this.views.parent)) {
      return;
    }

    var $RmlAppTree = this.controller.$RmlAppTree;
    /**
           * Fired when an attachments browser item is rendered.
           * 
           * @event module:util/hooks#attachmentsBrowser/item/rendered
           * @param {jQuery} $el The element
           * @param {object} model The backbone model
           * @param {object} appTree The app tree instance
           * @this wp.media.view.Attachment.Library
           */

    _util__WEBPACK_IMPORTED_MODULE_0__["hooks"].call('attachmentsBrowser/item/rendered', [this.$el, this.model, $RmlAppTree], this);
  }; // Modify attachments browser


  var timeoutReloadCount;
  var AttachmentsBrowser = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.AttachmentsBrowser;
  wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.AttachmentsBrowser = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.AttachmentsBrowser.extend({
    initialize: function initialize() {
      var _this2 = this;

      AttachmentsBrowser.prototype.initialize.apply(this, arguments); // Disable in gallery edit view

      if (Object(_hooks_modal__WEBPACK_IMPORTED_MODULE_5__["isAttachmentsGalleryEdit"])(this)) {
        return;
      } // Events for attachments browsers collections


      var timeout;
      this.collection.on('change reset add remove', function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          // Merged collection change
          var $RmlAppTree = _this2.controller.$RmlAppTree;

          if ($RmlAppTree) {
            Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_1__["draggable"])($RmlAppTree);
            /**
            * Fired when the collection of attachments browser changes.
            * 
            * @event module:util/hooks#attachmentsBrowser/collection/change
            * @param {object} appTree The app tree instance
            * @this wp.media.view.AttachmentsBrowser
            */

            _util__WEBPACK_IMPORTED_MODULE_0__["hooks"].call('attachmentsBrowser/collection/change', [$RmlAppTree], _this2);
          }
        }, 50);
      });
      this.collection.on('remove', function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        /**
        * Fired when an attachments browser item gets removed.
        * 
        * @event module:util/hooks#attachmentsBrowser/item/removed
        * @param {mixed} args... The event arguments
        * @this wp.media.view.AttachmentsBrowser
        */
        _util__WEBPACK_IMPORTED_MODULE_0__["hooks"].call('attachmentsBrowser/item/removed', [_this2.controller.$RmlAppTree].concat(args), _this2);
      }); // Listen to the ajax complete to refresh the folder counts

      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ajaxComplete(function (e, xhs, req) {
        try {
          if (req.data.indexOf('action=delete-post') > -1) {
            var $RmlAppTree = _this2.controller.$RmlAppTree;
            clearTimeout(timeoutReloadCount);
            $RmlAppTree && (timeoutReloadCount = setTimeout(function () {
              return $RmlAppTree.fetchCounts();
            }, 1800));
          }
        } catch (e) {// Silence is golden.
        }
      });
    },
    createToolbar: function createToolbar() {
      AttachmentsBrowser.prototype.createToolbar.call(this); // Disable in gallery edit view

      if (Object(_hooks_modal__WEBPACK_IMPORTED_MODULE_5__["isAttachmentsGalleryEdit"])(this)) {
        return;
      }

      this.$el.data('backboneView', this); // Add new toolbar

      var obj = new RMLFilter({
        controller: this.controller,
        model: this.collection.props,
        priority: -81 // see media-views.js#7295

      }).render();
      this.toolbar.set('rml_folder', obj);
      obj.initialize();
      var modal = this.controller.options.modal;

      if (modal) {
        /**
               * Fired, when a new modal window is created.
               * 
               * @event module:util/hooks#attachmentsBrowser/modal
               * @this wp.media.view.AttachmentsBrowser
               */
        _util__WEBPACK_IMPORTED_MODULE_0__["hooks"].call('attachmentsBrowser/modal', [], this);
      } else {
        firstCreatedToolbar.resolve(this);
      }
    },
    remove: function remove() {
      var $RmlAppTree = this.controller.$RmlAppTree;
      $RmlAppTree && $RmlAppTree.handleDestroy();
      AttachmentsBrowser.prototype.remove.apply(this, arguments);
    }
  });
  return true;
});
/**
 * Enhanced Media Library compatibility and layout adjustment.
 */

_util__WEBPACK_IMPORTED_MODULE_0__["hooks"].register('ready', function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('body').hasClass('eml-grid')) {
    var mediaGrid = jquery__WEBPACK_IMPORTED_MODULE_4___default()('#wp-media-grid'),
        offsetTop = mediaGrid.offset().top,
        fnResize = function fnResize() {
      mediaGrid.css('height', jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).height() - jquery__WEBPACK_IMPORTED_MODULE_4___default()('#wpadminbar').height() - 10);
    },
        fnScroll = function fnScroll() {
      var scrollTop = jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).scrollTop();
      mediaGrid[0].style.top = (scrollTop > offsetTop ? scrollTop : 0) + 'px'; //mediaGrid.css("top", scrollTop > offsetTop ? scrollTop - offsetTop : 0);
    }; // Centerize container


    jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).on("resize", fnResize);
    fnResize(); // Scroll container

    jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).on("scroll", fnScroll);
    fnScroll();
  }
});

/***/ }),

/***/ "./public/src/others/optionsScreen.js":
/*!********************************************!*\
  !*** ./public/src/others/optionsScreen.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @module others/optionsScreen */


/**
 * Do the options screen with a nav bar (WordPress standard). This
 * nav bar is not ReactJS.
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Append to known option
  var container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="rml-options"><nav><ul></ul></nav></div>').insertBefore(jquery__WEBPACK_IMPORTED_MODULE_0___default()('[for="rml_load_frontend"]').parents('table').prev()),
      headline = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h2 id="rml">Real Media Library</h2>').insertBefore(container),
      nav = container.find('nav ul');
  var navLiCnt = 0;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a target="_blank" href="https://matthias-web.com/wordpress/real-media-library/add-ons/"><strong>Browse Add-Ons</strong></a>').insertAfter(headline); // Search the option panels

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('table.form-table').each(function () {
    var oHeadline = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prev();
    var sHeadline = oHeadline.html();

    if (sHeadline && sHeadline.indexOf('RealMediaLibrary') === 0) {
      sHeadline = sHeadline.split(":", 2)[1]; // Append headline to options panel

      var li = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li class="nav-tab ' + (navLiCnt === 0 ? 'nav-tab-active' : '') + '">' + sHeadline + '</li>').appendTo(nav),
          section = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).appendTo(container);
      !navLiCnt && section.show();
      li.click(function () {
        container.children('table').hide();
        nav.find('.nav-tab-active').removeClass('nav-tab-active');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('nav-tab-active');
        section.show();
      }); // Hash navigation

      var hashObj,
          hash = window.location.hash.split('rml-', 2);

      if (hash.length > 1 && (hashObj = section.find('#' + hash[1])).length) {
        li.click(); // Scroll to element

        setTimeout(function () {
          return jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
            scrollTop: hashObj.offset().top - 170
          }, 500);
        }, 300);
      }

      oHeadline.remove();
      navLiCnt++;
    }
  });
  /**
   * Fired when the options screen tables are rendered successfully.
   * 
   * @event module:util/hooks#options/ready
   */

  _util__WEBPACK_IMPORTED_MODULE_1__["hooks"].call('options/ready');
});
/**
 * When a .rml-rest-button is pressed show a loading indicator and send
 * the request to the REST server.
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  return jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.rml-rest-button', function (e) {
    var _$$data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(),
        url = _$$data.url,
        method = _$$data.method,
        urlnamespace = _$$data.urlnamespace,
        data = _objectWithoutProperties(_$$data, ["url", "method", "urlnamespace"]),
        btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

    if (window.confirm(_util__WEBPACK_IMPORTED_MODULE_1__["rmlOpts"].lang.areYouSure)) {
      btn.html('<div class="spinner is-active" style="float: initial;margin: 0;"></div>');
      btn.attr('disabled', 'disabled');
      /**
       * Fired when a button with class .rml-rest-button gets clicked and
       * the POST data is prepared so you can modify it. The $url is the
       * data-url attribute of the button. You also have to define a
       * data-method attribute.
       * 
       * @event module:util/hooks#rest/button/prepare/$url
       * @param {object} data The data
       * @this jQuery
       */

      _util__WEBPACK_IMPORTED_MODULE_1__["hooks"].call('rest/button/prepare/' + url, [data], btn);
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["ajax"])(url, {
        method: method,
        data: data
      }, urlnamespace).then(function () {
        btn.html('<i class="fa fa-check"></i> ' + _util__WEBPACK_IMPORTED_MODULE_1__["rmlOpts"].lang.success).attr("disabled", false);
        /**
         * Fired when a button with class .rml-rest-button is successfully saved.
         * 
         * @event module:util/hooks#rest/button/success/$url
         * @param {mixed} args... The $.ajax success arguments
         * @param {string} method The method
         * @param {object} data The data
         * @this jQuery
         */

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _util__WEBPACK_IMPORTED_MODULE_1__["hooks"].call('rest/button/success/' + url, args.concat([method, data]), btn);
      }, function () {
        btn.html('<i class="fa fa-warning"></i> ' + _util__WEBPACK_IMPORTED_MODULE_1__["rmlOpts"].lang.failed).attr("disabled", false);
        /**
         * Fired when a button with class .rml-rest-button is successfully saved.
         * 
         * @event module:util/hooks#rest/button/error/$url
         * @param {mixed} args... The $.ajax success arguments
         * @param {string} method The method
         * @param {object} data The data
         * @this jQuery
         */

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _util__WEBPACK_IMPORTED_MODULE_1__["hooks"].call('rest/button/error/' + url, args.concat([method, data]), btn);
      });
    }

    e.preventDefault();
    return false;
  });
});
_util__WEBPACK_IMPORTED_MODULE_1__["hooks"].register('rest/button/success/export', function (response) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#rml_export_data textarea').get(0).value = response;
});
_util__WEBPACK_IMPORTED_MODULE_1__["hooks"].register('rest/button/prepare/import', function (data) {
  data.import = encodeURIComponent(jquery__WEBPACK_IMPORTED_MODULE_0___default()("#rml_import_data textarea").get(0).value);
});

/***/ }),

/***/ "./public/src/others/renderOrderMenu.js":
/*!**********************************************!*\
  !*** ./public/src/others/renderOrderMenu.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");
/* harmony import */ var _hooks_sortable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/sortable */ "./public/src/hooks/sortable.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/** @module others/renderOrderMenu */





var Item = react_aiot__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item,
    SubMenu = react_aiot__WEBPACK_IMPORTED_MODULE_3__["Menu"].SubMenu,
    Divider = react_aiot__WEBPACK_IMPORTED_MODULE_3__["Menu"].Divider;
/**
 * An element rendering sortables for the popup menu.
 * 
 * @returns React.Element[]
 */

var createSortables = function createSortables(sortables, select, selectText) {
  return Object.keys(sortables).map(function (key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      key: key
    }, sortables[key], " ", select === key && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "(", selectText, ")"));
  });
};
/**
 * Apply an order to a tree node object and afterwards reload the view.
 * 
 * @this AppTree
 */


function applyOrder(_x, _x2, _x3) {
  return _applyOrder2.apply(this, arguments);
}
/**
 * When clicking on a menu item in the order menu popup.
 * 
 * @this AppTree
 */


function _applyOrder2() {
  _applyOrder2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(selected, key, automatically) {
    var hide, attachmentsBrowser;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            hide = react_aiot__WEBPACK_IMPORTED_MODULE_3__["message"].loading(Object(_util__WEBPACK_IMPORTED_MODULE_4__["i18n"])('orderLoadingText', {
              name: selected.title
            })), attachmentsBrowser = this.attachmentsBrowser;
            _context.next = 3;
            return selected.applyOrder(key, automatically);

          case 3:
            // Apply props to backbone model
            Object(_hooks_sortable__WEBPACK_IMPORTED_MODULE_5__["applyToAttachmentsBrowser"])(attachmentsBrowser, selected);
            this.handleReload();
            hide();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _applyOrder2.apply(this, arguments);
}

function handleClick(_x4) {
  return _handleClick.apply(this, arguments);
}
/**
 * Render the order menu.
 * 
 * @type React.Element
 */


function _handleClick() {
  _handleClick = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
    var key, keyPath, path, selected, _applyOrder;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            key = _ref.key, keyPath = _ref.keyPath;
            path = keyPath.reverse(), selected = this.props.store.selected, _applyOrder = applyOrder.bind(this);

            if (path[0] === 'applyOnce') {
              // Apply sorting once
              _applyOrder(selected, key);
            } else if (path[0] === 'applyAutomatically') {
              _applyOrder(selected, key, true);
            } else if (key === 'reset') {
              _applyOrder(selected, 'original');
            } else if (key === 'resetAutomatically') {
              _applyOrder(selected, 'deactivate');
            } else if (key === 'applyReindex') {
              _applyOrder(selected, 'reindex');
            } else if (key === 'applyResetLast') {
              _applyOrder(selected, 'last');
            }

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _handleClick.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var store = this.props.store,
      selected = store.selected,
      sortables = store.sortables,
      isSortable = selected && selected.properties && selected.contentCustomOrder !== 2;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    onClick: handleClick.bind(this)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    key: "reset",
    disabled: !isSortable || selected.contentCustomOrder === 0
  }, Object(_util__WEBPACK_IMPORTED_MODULE_4__["i18n"])('resetOrder')), isSortable && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "applyOnce",
    title: Object(_util__WEBPACK_IMPORTED_MODULE_4__["i18n"])('applyOrderOnce'),
    disabled: selected.orderAutomatically
  }, sortables && createSortables(sortables, selected.lastOrderBy, Object(_util__WEBPACK_IMPORTED_MODULE_4__["i18n"])('last'))), isSortable && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Divider, null), isSortable && selected.orderAutomatically && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    key: "resetAutomatically",
    disabled: !isSortable || selected.contentCustomOrder === 0
  }, Object(_util__WEBPACK_IMPORTED_MODULE_4__["i18n"])('deactivateOrderAutomatically')), isSortable && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "applyAutomatically",
    title: Object(_util__WEBPACK_IMPORTED_MODULE_4__["i18n"])('applyOrderAutomatically')
  }, sortables && createSortables(sortables, selected.orderAutomatically && selected.lastOrderBy, Object(_util__WEBPACK_IMPORTED_MODULE_4__["i18n"])('latest'))), isSortable && selected.contentCustomOrder === 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Divider, null), isSortable && selected.contentCustomOrder === 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    key: "applyReindex"
  }, Object(_util__WEBPACK_IMPORTED_MODULE_4__["i18n"])('reindexOrder')), isSortable && selected.contentCustomOrder === 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    key: "applyResetLast"
  }, Object(_util__WEBPACK_IMPORTED_MODULE_4__["i18n"])('resetToLastOrder')));
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

/***/ "./public/src/others/static.js":
/*!*************************************!*\
  !*** ./public/src/others/static.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rmlopts */ "rmlopts");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rmlopts__WEBPACK_IMPORTED_MODULE_0__);
/* global commonL10n */

/**
 * Warn the user when deleting files and give a hint while deleting shortcuts.
 */

window.rmlWarnDelete = function () {
  return confirm((commonL10n.warnDelete || '') + rmlopts__WEBPACK_IMPORTED_MODULE_0___default.a.lang.warnDelete);
};

/***/ }),

/***/ "./public/src/rml.js":
/*!***************************!*\
  !*** ./public/src/rml.js ***!
  \***************************/
/*! exports provided: hooks, rmlOpts, i18n, urlParam, ajax, applyNodeDefaults, fetchTree, findDeep, humanFileSize, secondsFormat, dataUriToBlob, addUrlParam, uri, injectAndObserve, store, TreeNode, Upload, StoredAppTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./public/src/util/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hooks", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["hooks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rmlOpts", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlParam", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["urlParam"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["ajax"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyNodeDefaults", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["applyNodeDefaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchTree", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["fetchTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDeep", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["findDeep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "humanFileSize", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["humanFileSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "secondsFormat", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["secondsFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dataUriToBlob", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["dataUriToBlob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUrlParam", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["addUrlParam"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uri", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["uri"]; });

/* harmony import */ var _others_optionsScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./others/optionsScreen */ "./public/src/others/optionsScreen.js");
/* harmony import */ var _others_mediaViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./others/mediaViews */ "./public/src/others/mediaViews.js");
/* harmony import */ var _util_dragdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/dragdrop */ "./public/src/util/dragdrop.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ "./public/src/store/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injectAndObserve", function() { return _store__WEBPACK_IMPORTED_MODULE_7__["injectAndObserve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _store__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return _store__WEBPACK_IMPORTED_MODULE_7__["TreeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return _store__WEBPACK_IMPORTED_MODULE_7__["Upload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoredAppTree", function() { return _store__WEBPACK_IMPORTED_MODULE_7__["StoredAppTree"]; });

/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style/style.scss */ "./public/src/style/style.scss");
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_aiot_src_style_theme_wordpress_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-aiot/src/style/theme-wordpress.scss */ "./node_modules/react-aiot/src/style/theme-wordpress.scss");
/* harmony import */ var react_aiot_src_style_theme_wordpress_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_aiot_src_style_theme_wordpress_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks */ "./public/src/hooks/index.js");
/* harmony import */ var _others_static__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./others/static */ "./public/src/others/static.js");
/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(setimmediate__WEBPACK_IMPORTED_MODULE_12__);
/**
 * Startup file which initializes the AIOT Tree. You can access the exports
 * through <code>window.rml</code>.
 * 
 * @module rml
 */












 // Polyfill for yielding
// ReplaceWith should return the new object

!jquery__WEBPACK_IMPORTED_MODULE_2___default.a.fn.replaceWithPush && (jquery__WEBPACK_IMPORTED_MODULE_2___default.a.fn.replaceWithPush = function (a) {
  var $a = jquery__WEBPACK_IMPORTED_MODULE_2___default()(a);
  this.replaceWith($a);
  return $a;
});
/**
 * General event when script for RML is ready to load.
 * 
 * @event module:util/hooks#general 
 */

_util__WEBPACK_IMPORTED_MODULE_3__["hooks"].call('general');
Object(_others_mediaViews__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_util__WEBPACK_IMPORTED_MODULE_3__["ready"])(function () {
  // Add rml-touch class if touch device
  if ('ontouchstart' in window || window.navigator.maxTouchPoints) {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').addClass('rml-touch');
  }

  Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_6__["anyKeyHolding"])();
  'WebkitAppearance' in document.documentElement.style && jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').addClass('rml-webkit');

  if (_util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"] && jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').hasClass('wp-admin') && jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').hasClass('upload-php')) {
    var $container, container;
    var containerId = 'rml' + _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].blogId;
    /**
     * General event when DOM is ready and a list table / grid mode
     * is available in media library page.
     * 
     * @event module:util/hooks#ready
     */

    _util__WEBPACK_IMPORTED_MODULE_3__["hooks"].call('ready'); // Create the container sidebar

    jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').addClass('activate-aiot');
    $container = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<div/>').prependTo('body.wp-admin #wpbody').addClass('rml-container');
    container = $container.get(0); // Create the wrapper and React component, the modal react element is created in hooks/modal.js

    if (_util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].listMode === 'grid') {
      // When in grid mode, we have to wait for the first attachments browser
      _others_mediaViews__WEBPACK_IMPORTED_MODULE_5__["firstCreatedToolbar"].done(function (attachmentsBrowser) {
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_store__WEBPACK_IMPORTED_MODULE_7__["StoredAppTree"], {
          attachmentsBrowser: attachmentsBrowser,
          id: containerId
        }), container);
      });
    } else {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_store__WEBPACK_IMPORTED_MODULE_7__["StoredAppTree"], {
        id: containerId
      }), container);
    }
  } // Wait for modals


  _util__WEBPACK_IMPORTED_MODULE_3__["hooks"].register('attachmentsBrowser/modal/dom/ready', function (container) {
    if (!_util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"]) return;

    try {
      _util__WEBPACK_IMPORTED_MODULE_3__["hooks"].call('attachmentsBrowser/modal/exception', [container], this);

      var _containerId = 'rml' + _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].blogId;

      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_store__WEBPACK_IMPORTED_MODULE_7__["StoredAppTree"], {
        attachmentsBrowser: this,
        isModal: true,
        id: _containerId
      }), container.el);
    } catch (e) {// Silence is golden.
    }
  }); // Options panel

  jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').hasClass('options-media-php') && Object(_others_optionsScreen__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
jquery__WEBPACK_IMPORTED_MODULE_2___default()('link#dark_mode-css').length && jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').addClass('aiot-wp-dark-mode');
Object(_util__WEBPACK_IMPORTED_MODULE_3__["isMaterialWp"])() && jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').addClass('aiot-wp-material');


/***/ }),

/***/ "./public/src/store/TreeNode.js":
/*!**************************************!*\
  !*** ./public/src/store/TreeNode.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_4__);


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @module store/TreeNode */




/**
 * The store holding general data for folders. The properties are read-only.
 * 
 * @see React AIOT TreeNode documentation for properties and defaults
 * @class TreeNode
 */

var TreeNode = mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].model('RMLTreeNode', {
  id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].identifier,
  hash: '',
  className: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].frozen()),
  icon: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].frozen()),
  iconActive: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].frozen()),
  childNodes: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].late(function () {
    return TreeNode;
  }))),
  title: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].string,
  count: 0,
  attr: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].frozen()),
  isTreeLinkDisabled: false,
  selected: false,
  $busy: false,
  $busyOrder: false,
  $droppable: true,
  $visible: true,
  $rename: false,
  $create: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].frozen()),
  contentCustomOrder: 0,
  forceCustomOrder: false,
  lastOrderBy: '',
  orderAutomatically: false,
  //searchSelected: false,
  //expandedState: true,
  //displayChildren: true,
  //selectedIds: [],
  //onRenameClose: undefined,
  //onAddClose: undefined,
  //onSelect: undefined,
  //onNodePressF2: undefined,
  //onExpand: undefined,
  //onUlRef: undefined
  properties: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].frozen()),
  isQueried: true
}).actions(function (self) {
  return {
    /**
     * Update this node attributes.
     * 
     * @param {function} callback The callback with one argument (node draft)
     * @param {boolean} [setHash] If true the hash node is changed so a rerender is forced
     * @memberof module:store/TreeNode~TreeNode
     * @instance
     */
    setter: function setter(callback) {
      var setHash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      callback(self);
      setHash && (self.hash = Object(react_aiot__WEBPACK_IMPORTED_MODULE_4__["uuid"])());
    },

    /**
     * Rename folder.
     * 
     * @param {string} inputValue The new name
     * @returns {object} Server response
     * @throws Error
     * @memberof module:store/TreeNode~TreeNode
     * @instance
     * @async
     */
    setName: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["flow"])(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(inputValue) {
      var result, _result, id, name, cnt, children, rest;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              self.setter(function (node) {
                node.$busy = true;
              });
              _context.prev = 1;
              _context.next = 4;
              return Object(_util__WEBPACK_IMPORTED_MODULE_1__["ajax"])('folders/' + self.id, {
                method: 'PUT',
                data: {
                  name: inputValue
                }
              });

            case 4:
              _result = result = _context.sent;
              id = _result.id;
              name = _result.name;
              cnt = _result.cnt;
              children = _result.children;
              rest = _objectWithoutProperties(_result, ["id", "name", "cnt", "children"]);
              self.setter(function (node) {
                node.title = name;
                node.properties = jquery__WEBPACK_IMPORTED_MODULE_3___default.a.merge(node.properties, rest);
                node.$busy = false;
              });
              return _context.abrupt("return", result);

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](1);
              self.setter(function (node) {
                node.$busy = false;
              }, self.id);
              throw _context.t0;

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 14]]);
    })),

    /**
     * Apply an order to the folder.
     * 
     * @param {string} id The sortable id
     * @param {boolean} [automatically=false] If true the order is applied automatically if new files are added to the folder
     * @memberof module:store/TreeNode~TreeNode
     * @instance
     * @async
     */
    applyOrder: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["flow"])(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
      var automatically,
          result,
          _args2 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              automatically = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
              self.setter(function (node) {
                node.$busyOrder = true;
              });
              _context2.prev = 2;
              _context2.next = 5;
              return Object(_util__WEBPACK_IMPORTED_MODULE_1__["ajax"])('folders/content/sortables', {
                method: 'POST',
                data: {
                  id: id,
                  applyTo: self.id,
                  automatically: automatically
                }
              });

            case 5:
              result = _context2.sent;
              result && id !== 'reindex' && id !== 'last' && (self.contentCustomOrder = 1, self.lastOrderBy = id);
              result && automatically && (self.orderAutomatically = true);
              id === 'original' && result && (self.contentCustomOrder = 0, self.orderAutomatically = false);
              id === 'deactivate' && result && (self.orderAutomatically = false);
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](2);
              throw _context2.t0;

            case 15:
              _context2.prev = 15;
              self.setter(function (node) {
                node.$busyOrder = false;
              });
              return _context2.finish(15);

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[2, 12, 15, 18]]);
    })),

    /**
     * Toggle the view of this folder.
     * 
     * @param boolean state
     * @memberof module:store/TreeNode~TreeNode
     * @instance
     * @since 4.0.9
     */
    visible: function visible(state) {
      self.$visible = state;
    },

    /**
     * Permanently delete folder.
     * 
     * @returns {string|int} The parent id
     * @throws Error
     * @memberof module:store/TreeNode~TreeNode
     * @instance
     * @async
     */
    trash: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["flow"])(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              self.setter(function (node) {
                node.$busy = true;
              });
              _context3.prev = 1;
              _context3.next = 4;
              return Object(_util__WEBPACK_IMPORTED_MODULE_1__["ajax"])('folders/' + self.id, {
                method: 'DELETE'
              });

            case 4:
              self.visible(false);
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](1);
              throw _context3.t0;

            case 10:
              _context3.prev = 10;
              self.setter(function (node) {
                node.$busy = false;
              });
              return _context3.finish(10);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[1, 7, 10, 13]]);
    }))
  };
});
/* harmony default export */ __webpack_exports__["default"] = (TreeNode);

/***/ }),

/***/ "./public/src/store/Upload.js":
/*!************************************!*\
  !*** ./public/src/store/Upload.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TreeNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeNode */ "./public/src/store/TreeNode.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");
/** @module store/Upload */



/**
 * This model represents an uploading file. The properties are read-only.
 * 
 * @class Upload
 * @property {string} cid The cid
 * @property {string} name The name of the uploaded file
 * @property {module:store/TreeNode~TreeNode} node The destination tree node
 * @property {int} percent The percent
 * @property {int} loaded The loaded size
 * @property {int} size The total size of the upload
 * @property {string} [previewSrc] The src for the preview image
 * @property {React.Element|string} [deny] Deny message
 * @property {int} readableLoaded The loaded size in human readable format
 * @property {int} readableSize The total size of the upload in human readable format
 */

var Upload = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('RMLUpload', {
  cid: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].identifier,
  name: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string,
  node: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].reference(_TreeNode__WEBPACK_IMPORTED_MODULE_1__["default"]),
  percent: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number,
  // Not computed because it comes directly from plupload
  loaded: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number,
  size: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number,
  previewSrc: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  deny: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].frozen())
}).views(function (self) {
  return {
    get readableLoaded() {
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["humanFileSize"])(self.loaded);
    },

    get readableSize() {
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["humanFileSize"])(self.size);
    }

  };
}).actions(function (self) {
  return {
    /**
     * Update this upload attributes.
     * 
     * @param {function} callback The callback with one argument (node draft)
     * @memberof module:store/Upload~Upload
     * @instance
     */
    setter: function setter(callback) {
      callback(self);
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ }),

/***/ "./public/src/store/index.js":
/*!***********************************!*\
  !*** ./public/src/store/index.js ***!
  \***********************************/
/*! exports provided: default, StoredAppTree, injectAndObserve, TreeNode, Upload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoredAppTree", function() { return StoredAppTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectAndObserve", function() { return injectAndObserve; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _AppTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppTree */ "./public/src/AppTree.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./public/src/util/index.js");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TreeNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TreeNode */ "./public/src/store/TreeNode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return _TreeNode__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Upload */ "./public/src/store/Upload.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return _Upload__WEBPACK_IMPORTED_MODULE_7__["default"]; });



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @module store */







/**
 * The main Mobx State Tree store for the RML application. It holds a static tree and
 * the fetched tree from the server. The properties are read-only.
 * 
 * @class Store
 * @property {int} [rootId=rmlOpts.rootId] The root folder id
 * @property {module:store/TreeNode~TreeNode[]} staticTree The static tree
 * @property {module:store/TreeNode~TreeNode[]} [tree] The tree
 * @property {string|int} [selectedId=0] The selected id
 * @property {mixed[]} [foldersNeedsRefresh] Node ids which needs to be refreshed when they gets queried
 * @property {module:store/Upload~Upload[]} [uploading] The upload queue
 * @property {int} [uploadTotalLoaded=0] The upload total loaded
 * @property {int} [uploadTotalSize=0] The upload total size
 * @property {object} [sortables] Available sortables for the order menu
 * @property {int} [uploadTotalBytesPerSec=0] The uploader bytes per second
 * @property {module:store/TreeNode~TreeNode} [selected] The selected tree node
 * @property {module:store/Upload~Upload} [currentUpload] The current upload file
 * @property {string} [uploadTotalRemainTime] The current upload remaining time in human readable form
 * @property {string} [readableUploadTotalLoaded] The uploader total loaded in human readable form
 * @property {string} [readableUploadTotalSize] The uploader total size in human readable form
 * @property {string} [readableUploadTotalBytesPerSec] The uploader bytes per second in human readable form
 */

var Store = mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].model('RMLStore', {
  rootId: +_util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].rootId,
  staticTree: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].array(_TreeNode__WEBPACK_IMPORTED_MODULE_6__["default"]),
  tree: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].array(_TreeNode__WEBPACK_IMPORTED_MODULE_6__["default"]), []),
  selectedId: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].union(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].string, mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].number), 0),
  // Do not fill manually, it is filled in afterCreated through onPatch
  foldersNeedsRefresh: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].union(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].string, mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].number)), []),
  uploading: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].array(_Upload__WEBPACK_IMPORTED_MODULE_7__["default"]), []),
  uploadTotalLoaded: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].number, 0),
  uploadTotalSize: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].number, 0),
  sortables: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].frozen()),
  uploadTotalBytesPerSec: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].number, 0),
  methodNotAllowed405Endpoint: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].string, ''),
  methodMoved301Endpoint: false
}).views(function (self) {
  return {
    /**
     * Get tree item by id.
     * 
     * @param {string|int} id
     * @param {boolean} [exlucdeStatic=true]
     * @returns {module:store/TreeNode~TreeNode} Tree node
     * @memberof module:store~Store
     * @instance
     */
    getTreeItemById: function getTreeItemById(id) {
      var excludeStatic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var result = Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["resolveIdentifier"])(_TreeNode__WEBPACK_IMPORTED_MODULE_6__["default"], self, id);

      if (excludeStatic && self.staticTree.indexOf(result) > -1) {
        return undefined;
      }

      return result;
    },

    get selected() {
      return self.getTreeItemById(self.selectedId, false);
    },

    get currentUpload() {
      return self.uploading.length ? self.uploading[0] : undefined;
    },

    get uploadTotalRemainTime() {
      if (self.uploadTotalBytesPerSec > 0) {
        var remainTime = Math.floor((self.uploadTotalSize - self.uploadTotalLoaded) / self.uploadTotalBytesPerSec);
        return Object(_util__WEBPACK_IMPORTED_MODULE_3__["secondsFormat"])(remainTime);
      } else {
        return '00:00:00';
      }
    },

    get readableUploadTotalLoaded() {
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["humanFileSize"])(self.uploadTotalLoaded);
    },

    get readableUploadTotalSize() {
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["humanFileSize"])(self.uploadTotalSize);
    },

    get readableUploadTotalBytesPerSec() {
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["humanFileSize"])(self.uploadTotalBytesPerSec);
    }

  };
}).actions(function (self) {
  return {
    /**
     * The model is created so watch for specific properties. For example set
     * the selected property.
     * 
     * @memberof module:store~Store
     * @private
     * @instance
     */
    afterCreate: function afterCreate() {
      Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["onPatch"])(self, function (_ref) {
        var op = _ref.op,
            path = _ref.path,
            value = _ref.value;

        // A new selected item is setted
        if ((path.startsWith('/tree/') || path.startsWith('/staticTree/')) && path.endsWith('/selected') && value === true) {
          var currentSelected = self.selected,
              obj = Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["resolvePath"])(self, path.slice(0, path.length - 9));
          currentSelected && currentSelected.id !== obj.id && currentSelected.setter(function (node) {
            node.selected = false;
          });

          self._setSelectedIdFromPath(obj);
        }
      });
    },
    _setSelectedIdFromPath: function _setSelectedIdFromPath(obj) {
      self.selectedId = obj.id;
    },

    /**
     * Update this node attributes.
     * 
     * @param {function} callback The callback with one argument (node draft)
     * @memberof module:store~Store
     * @instance
     */
    setter: function setter(callback) {
      callback(self);
    },

    /**
     * Set the tree.
     * 
     * @param {object} tree The object representing a tree
     * @param {boolean} [isStatic=false]
     * @memberof module:store~Store
     * @instance
     */
    setTree: function setTree(tree) {
      var isStatic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (isStatic) {
        self.staticTree.clear();
        self.staticTree.replace(tree);
      } else {
        self.tree.clear();
        self.tree.replace(tree);
      }
    },

    /**
     * Set upload total stats.
     * 
     * @memberof module:store~Store
     * @instance
     */
    setUploadTotal: function setUploadTotal(_ref2) {
      var loaded = _ref2.loaded,
          size = _ref2.size,
          bytesPerSec = _ref2.bytesPerSec;
      self.uploadTotalLoaded = loaded;
      self.uploadTotalSize = size;
      self.uploadTotalBytesPerSec = bytesPerSec;
    },

    /**
     * Add an uploading file.
     * 
     * @param {object} object The object to push
     * @returns {object} The upload instance
     * @memberof module:store~Store
     * @instance
     */
    addUploading: function addUploading(upload) {
      self.uploading.push(upload);
      return self.uploading[self.uploading.length - 1];
    },

    /**
     * Register a folder that it needs refresh.
     * 
     * @memberof module:store~Store
     * @instance
     */
    addFoldersNeedsRefresh: function addFoldersNeedsRefresh(id) {
      self.foldersNeedsRefresh.indexOf(id) === -1 && self.foldersNeedsRefresh.push(id);
    },

    /**
     * Register a folder that it needs refresh.
     * 
     * @memberof module:store~Store
     * @instance
     */
    removeFoldersNeedsRefresh: function removeFoldersNeedsRefresh(id) {
      var idx = self.foldersNeedsRefresh.indexOf(id);
      idx > -1 && self.foldersNeedsRefresh.splice(idx, 1);
    },

    /**
     * Remove an uploading file from queue.
     * 
     * @param {string} cid The cid
     * @returns {object} A copy of the original object
     * @memberof module:store~Store
     * @instance
     */
    removeUploading: function removeUploading(cid) {
      var found = self.uploading.filter(function (u) {
        return u.cid === cid;
      }),
          result = !!found.length && found[0].toJSON();
      found.length && self.uploading.splice(self.uploading.indexOf(found[0]), 1);
      return result;
    },

    /**
     * Handle sort mechanism.
     * 
     * @returns {boolean}
     * @throws Error
     * @memberof module:store~Store
     * @instance
     */
    handleSort: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["flow"])(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {
      var id, oldIndex, newIndex, parentFromId, parentToId, nextId, _ref3$request, request, tree, rootId, treeItem;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = _ref3.id, oldIndex = _ref3.oldIndex, newIndex = _ref3.newIndex, parentFromId = _ref3.parentFromId, parentToId = _ref3.parentToId, nextId = _ref3.nextId, _ref3$request = _ref3.request, request = _ref3$request === void 0 ? true : _ref3$request;
              tree = self.tree, rootId = self.rootId; // Find parent trees with children

              if (parentFromId === rootId) {
                treeItem = tree[oldIndex].toJSON();
                tree.splice(oldIndex, 1);
              } else {
                self.getTreeItemById(parentFromId).setter(function (node) {
                  treeItem = node.childNodes[oldIndex].toJSON();
                  node.childNodes.splice(oldIndex, 1);
                }, true);
              } // Find destination tree


              if (parentToId === rootId) {
                tree.splice(newIndex, 0, treeItem);
              } else {
                self.getTreeItemById(parentToId).setter(function (node) {
                  node.childNodes.splice(newIndex, 0, treeItem);
                }, true);
              }

              if (request) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", true);

            case 6:
              _context.prev = 6;
              _context.next = 9;
              return Object(_util__WEBPACK_IMPORTED_MODULE_3__["ajax"])('hierarchy/' + id, {
                method: 'PUT',
                data: {
                  parent: parentToId,
                  nextId: nextId === 0 ? false : nextId
                }
              });

            case 9:
              return _context.abrupt("return", true);

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](6);
              _context.next = 16;
              return store.handleSort({
                id: id,
                oldIndex: newIndex,
                newIndex: oldIndex,
                parentFromId: parentToId,
                parentToId: parentFromId,
                request: false
              });

            case 16:
              throw _context.t0;

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[6, 12]]);
    })),

    /**
     * Fetch the folder tree.
     * 
     * @returns {object[]} Tree
     * @memberof module:store~Store
     * @instance
     * @async
     */
    fetchTree: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["flow"])(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(setSelectedId) {
      var _ref4, tree, cntRoot, cntAll, slugs, result;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_util__WEBPACK_IMPORTED_MODULE_3__["fetchTree"])();

            case 2:
              _ref4 = _context2.sent;
              tree = _ref4.tree;
              cntRoot = _ref4.cntRoot;
              cntAll = _ref4.cntAll;
              slugs = _ref4.slugs;
              result = {
                tree: tree,
                cntRoot: cntRoot,
                cntAll: cntAll,
                slugs: slugs
              };
              self.setTree(tree);
              typeof setSelectedId !== 'undefined' && self.getTreeItemById(setSelectedId, false).setter(function (node) {
                return node.selected = true;
              });
              self.getTreeItemById('all', false).setter(function (node) {
                return node.count = cntAll;
              });
              self.getTreeItemById(self.rootId, false).setter(function (node) {
                return node.count = cntRoot;
              });
              return _context2.abrupt("return", result);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })),

    /**
     * Update the folder count. If you pass no argument the folder count is
     * requested from server.
     * 
     * @param {object} counts Key value map of folder and count
     * @returns {object<string|int,int>} Count map
     * @memberof module:store~Store
     * @instance
     * @async
     */
    fetchCounts: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["flow"])(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(counts) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!counts) {
                _context3.next = 3;
                break;
              }

              Object.keys(counts).forEach(function (k) {
                var ref = self.getTreeItemById(k, false);
                ref && (ref.count = counts[k]);
              });
              return _context3.abrupt("return", counts);

            case 3:
              _context3.t0 = self;
              _context3.next = 6;
              return Object(_util__WEBPACK_IMPORTED_MODULE_3__["ajax"])('folders/content/counts');

            case 6:
              _context3.t1 = _context3.sent;
              _context3.next = 9;
              return _context3.t0.fetchCounts.call(_context3.t0, _context3.t1);

            case 9:
              return _context3.abrupt("return", _context3.sent);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })),

    /**
     * Create a new tree node.
     * 
     * @param {string} name The name of the new folder
     * @param {object} obj The object representing the folder
     * @param {string|int} obj.parent 
     * @param {int} obj.typeInt 
     * @param {function} [beforeAttach] Callback executed before attaching the new object to the tree
     * @returns {object} The tree node (no mobx model)
     * @memberof module:store~Store
     * @instance
     * @async
     */
    persist: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["flow"])(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(name, _ref5, beforeAttach) {
      var parent, typeInt, newObj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              parent = _ref5.parent, typeInt = _ref5.typeInt;
              _context4.t0 = _util__WEBPACK_IMPORTED_MODULE_3__["applyNodeDefaults"];
              _context4.next = 4;
              return Object(_util__WEBPACK_IMPORTED_MODULE_3__["ajax"])('folders', {
                method: 'POST',
                data: {
                  name: name,
                  parent: parent,
                  type: typeInt
                }
              });

            case 4:
              _context4.t1 = _context4.sent;
              _context4.t2 = [_context4.t1];
              newObj = (0, _context4.t0)(_context4.t2)[0];
              // Add to tree
              beforeAttach && beforeAttach(newObj);

              if (parent === self.rootId) {
                self.tree.push(newObj);
              } else {
                self.getTreeItemById(parent).setter(function (node) {
                  node.childNodes.push(newObj);
                }, true);
              }

              return _context4.abrupt("return", newObj);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }))
  };
});
/**
 * Main store instance.
 */

var store = Store.create({
  staticTree: [{
    id: 'all',
    title: React.createElement("span", null, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])('allPosts')),
    icon: React.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      type: "copy"
    }),
    count: _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].allPostCnt
  }, {
    id: +_util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].rootId,
    title: Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])('unorganized'),
    icon: _util__WEBPACK_IMPORTED_MODULE_3__["ICON_OBJ_FOLDER_ROOT"],
    count: 0,
    properties: {
      type: 4
    }
  }],
  sortables: _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].sortables
});
/**
 * A single instance of store.
 */

/* harmony default export */ __webpack_exports__["default"] = (store);
/**
 * An AppTree implementation with store provided. This means you have no longer
 * implement the Provider of mobx here.
 * 
 * @returns {React.Element}
 */

var StoredAppTree = function StoredAppTree(_ref6) {
  var children = _ref6.children,
      rest = _objectWithoutProperties(_ref6, ["children"]);

  return React.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: store
  }, React.createElement(_AppTree__WEBPACK_IMPORTED_MODULE_2__["default"], rest, children));
};
/**
 * Import general store to ReactJS component.
 */

function injectAndObserve(fn) {
  var store = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'store';
  return Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])(store)(Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(fn));
}


/***/ }),

/***/ "./public/src/style/style.scss":
/*!*************************************!*\
  !*** ./public/src/style/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "./public/src/util/dragdrop.js":
/*!*************************************!*\
  !*** ./public/src/util/dragdrop.js ***!
  \*************************************/
/*! exports provided: anyKeyHolding, droppable, draggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anyKeyHolding", function() { return anyKeyHolding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "droppable", function() { return droppable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draggable", function() { return draggable; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./public/src/util/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/modal */ "./public/src/hooks/modal.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/** @module util/dragdrop */






/**
 * On CTRL holding add class 'aiot-helper-method-append' to document body.
 */

function anyKeyHolding() {
  jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keydown', function (e) {
    return jquery__WEBPACK_IMPORTED_MODULE_5___default()('body').addClass('aiot-helper-method-append');
  });
  jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keyup', function (e) {
    return jquery__WEBPACK_IMPORTED_MODULE_5___default()('body').removeClass('aiot-helper-method-append');
  });
}
/**
 * jQuery's draggable helper container.
 * 
 * @param {object} props Properties
 * @param {int} props.count The count
 * @type React.Element
 */

var DragHelper = function DragHelper(_ref) {
  var count = _ref.count;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aiot-helper-method-move"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "swap"
  }), " ", Object(___WEBPACK_IMPORTED_MODULE_4__["i18n"])(count > 1 ? 'move' : 'moveOne', {
    count: count
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(___WEBPACK_IMPORTED_MODULE_4__["i18n"])('moveTip'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aiot-helper-method-append"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "copy"
  }), " ", Object(___WEBPACK_IMPORTED_MODULE_4__["i18n"])(count > 1 ? 'append' : 'appendOne', {
    count: count
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(___WEBPACK_IMPORTED_MODULE_4__["i18n"])('appendTip'))));
};
/**
 * Enables / Reinitializes the droppable nodes. If a draggable item is dropped
 * here the given posts are moved to the category. You have to provide a ReactJS
 * element to reload the tree.
 * 
 * @param {React.Element} element The element
 */


function droppable(element) {
  var dom = jquery__WEBPACK_IMPORTED_MODULE_5___default()(element.ref.container).find('.aiot-node.aiot-droppable[data-id!=\'all\']'),
      attachmentsBrowser = element.attachmentsBrowser;
  dom.droppable({
    activeClass: 'aiot-state-default',
    hoverClass: 'aiot-state-hover',
    tolerance: 'pointer',
    drop: function () {
      var _drop = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, ui) {
        var ids, toTmp, to, activeId, elements, fnFade, isCopy, store, isOne, i18nProps, i18nGet, hide, _ref2, counts, removedFolderIds, fadeBack;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ids = [], toTmp = jquery__WEBPACK_IMPORTED_MODULE_5___default()(event.target).attr('data-id'), to = toTmp === 'all' ? toTmp : +toTmp, activeId = element.getSelectedId(), elements = [], fnFade = function fnFade(percent) {
                  return elements.forEach(function (obj) {
                    return obj.fadeTo(250, percent);
                  });
                }, isCopy = jquery__WEBPACK_IMPORTED_MODULE_5___default()('body').hasClass('aiot-helper-method-append'), store = element.props.store; // Get dragged items

                iterateDraggedItem(ui.draggable, element, function (tr) {
                  ids.push(+tr.find('input[name="media[]"]').attr("value"));
                  elements.push(tr);
                }, function (attributes, attachmentsBrowser) {
                  ids.push(attributes.id);
                  elements.push(attachmentsBrowser.$el.find('li[data-id="' + attributes.id + '"]'));
                });
                element.setState({
                  isTreeLinkDisabled: true
                }); // Disable tree

                fnFade(0.3); // Make folders updateable in grid mode

                if (attachmentsBrowser) {
                  // If the target is "Uncategorized" the current folder has to be refreshed, too
                  store.addFoldersNeedsRefresh(to);
                  to === +___WEBPACK_IMPORTED_MODULE_4__["rmlOpts"].rootId && store.addFoldersNeedsRefresh(activeId);
                } // Get i18n key


                isOne = ids.length === 1, i18nProps = {
                  count: ids.length,
                  category: jquery__WEBPACK_IMPORTED_MODULE_5___default()(event.target).find('.aiot-node-name').html()
                }, i18nGet = function i18nGet(key) {
                  return Object(___WEBPACK_IMPORTED_MODULE_4__["i18n"])((isCopy ? 'append' : 'move') + key + (isOne ? 'One' : ''), i18nProps);
                };
                hide = react_aiot__WEBPACK_IMPORTED_MODULE_3__["message"].loading(i18nGet('LoadingText'));
                _context.prev = 7;
                _context.next = 10;
                return Object(___WEBPACK_IMPORTED_MODULE_4__["ajax"])('attachments/bulk/move', {
                  method: 'PUT',
                  data: {
                    ids: ids,
                    to: to,
                    isCopy: isCopy
                  }
                });

              case 10:
                _ref2 = _context.sent;
                counts = _ref2.counts;
                removedFolderIds = _ref2.removedFolderIds;
                // Remove the folders which got deleted through the move process
                removedFolderIds && removedFolderIds.length && removedFolderIds.forEach(function (id) {
                  var obj = store.getTreeItemById(+id);
                  obj && obj.visible(false);
                });
                /**
                 * Attachment items got moved.
                 * 
                 * @event module:util/hooks#attachment/move/finished
                 * @param {int[]} ids The attachment ids
                 * @param {int|string} to The destination folder
                 * @param {boolean} isCopy If true the files were copied (shortcut)
                 * @this module:AppTree~AppTree
                 * @since 4.0.7
                 */

                ___WEBPACK_IMPORTED_MODULE_4__["hooks"].call('attachment/move/finished', [ids, to, isCopy], element);
                react_aiot__WEBPACK_IMPORTED_MODULE_3__["message"].success(i18nGet('Success'));
                element.fetchCounts(counts); // Update items view

                fadeBack = isCopy || !isCopy && activeId === to || activeId === 'all';
                fadeBack ? fnFade(1) : elements.forEach(function (obj) {
                  return obj.remove();
                }); // Refresh view if necessery

                if (activeId === 'all' && isCopy || isCopy && activeId === to) {
                  element.handleReload();
                } // Deselect for the next bulk selection action


                elements.forEach(function (obj) {
                  var attachmentPreview = obj.children('.attachment-preview');
                  obj.hasClass('selected') && attachmentPreview.length && attachmentPreview.click();
                }); // Add no media

                if (!element.attachmentsBrowser && !jquery__WEBPACK_IMPORTED_MODULE_5___default()(".wp-list-table tbody tr").length) {
                  jquery__WEBPACK_IMPORTED_MODULE_5___default()(".wp-list-table tbody").html('<tr class="no-items"><td class="colspanchange" colspan="6">' + ___WEBPACK_IMPORTED_MODULE_4__["rmlOpts"].lang.noEntries + '</td></tr></tbody>');
                }

                _context.next = 28;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](7);
                react_aiot__WEBPACK_IMPORTED_MODULE_3__["message"].error(_context.t0.responseJSON.message);
                fnFade(1);

              case 28:
                _context.prev = 28;
                hide();
                element.setState(function (prevState) {
                  return {
                    isTreeLinkDisabled: false
                  };
                }); // Enable tree

                return _context.finish(28);

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 24, 28, 32]]);
      }));

      return function drop(_x, _x2) {
        return _drop.apply(this, arguments);
      };
    }()
  });
}
/*
 * Iterates through the UI and gets the collection of dragged items.
 * 
 * @param {jQuery} ui The draggable ui object
 * @param {React.Element} container The AIOT container
 * @param {function} [listMode] Function to iterate over list mode items (<tr> object)
 * @param {function} [gridMode] Function to iterate over grid mode items (attributes, attachmentsBrowser)
 * @returns {int} The count of selected items
 */

function iterateDraggedItem(ui, _ref3, listMode, gridMode) {
  var attachmentsBrowser = _ref3.attachmentsBrowser;

  if (attachmentsBrowser) {
    // Grid mode
    var selection = attachmentsBrowser.options.selection.models;

    if (selection.length) {
      selection.forEach(function (model) {
        gridMode && gridMode(model.attributes, attachmentsBrowser);
      });
      return selection.length;
    } else {
      var id = ui.data('id'),
          models = attachmentsBrowser.collection.models;
      gridMode && gridMode(models.filter(function (model) {
        return model.id === id;
      })[0], attachmentsBrowser);
      return 1;
    }
  } else {
    // List mode
    var trs = jquery__WEBPACK_IMPORTED_MODULE_5___default()('input[name="media[]"]:checked');

    if (trs.length) {
      trs.each(function () {
        listMode && listMode(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).parents('tr'));
      });
    } else {
      listMode && listMode(ui);
    }

    return trs.length || 1;
  }
}
/**
 * Make the list table draggable if sort mode is not active.
 * 
 * @param {React.Element} element The element
 * @param {boolean} [destroy=false] If true the draggable gets destroyed
 */


function draggable(element, destroy) {
  // Get selector
  var attachmentsBrowser = element.attachmentsBrowser,
      _element$state = element.state,
      isMoveable = _element$state.isMoveable,
      isWPAttachmentsSortMode = _element$state.isWPAttachmentsSortMode,
      attachments = attachmentsBrowser && attachmentsBrowser.attachments,
      selector = attachmentsBrowser ? attachmentsBrowser.$el.find('ul.attachments > li') : jquery__WEBPACK_IMPORTED_MODULE_5___default()('#wpbody-content .wp-list-table tbody tr:not(.no-items)'),
      isGalleryEdit = Object(_hooks_modal__WEBPACK_IMPORTED_MODULE_6__["isAttachmentsGalleryEdit"])(attachments); // Make draggable

  if (destroy || !isMoveable || isWPAttachmentsSortMode || isGalleryEdit) {
    try {
      selector.draggable('destroy');
    } catch (e) {} // Silence is golden.
    // In gallery edit mode enable the built-in sortable


    if (isGalleryEdit) {
      attachments.collection.comparator = undefined;
      attachments.initSortable();
    }
  } else {
    selector.draggable({
      revert: 'invalid',
      revertDuration: 0,
      appendTo: 'body',
      cursorAt: {
        top: 0,
        left: 0
      },
      distance: 10,
      refreshPositions: true,
      helper: function helper(event) {
        var helper = jquery__WEBPACK_IMPORTED_MODULE_5___default()('<div class="aiot-helper"></div>').appendTo(jquery__WEBPACK_IMPORTED_MODULE_5___default()('body')),
            count = iterateDraggedItem(jquery__WEBPACK_IMPORTED_MODULE_5___default()(event.currentTarget), element);
        react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DragHelper, {
          count: count
        }), helper.get(0));
        return helper;
      },
      start: function start(event) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('body').addClass('aiot-currently-dragging'); // FIX https://bugs.jqueryui.com/ticket/4261

        jquery__WEBPACK_IMPORTED_MODULE_5___default()(document.activeElement).blur();
      },
      stop: function stop() {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('body').removeClass("aiot-currently-dragging");
      }
    });
  }
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

/***/ "_":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = _;

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

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = mobx;

/***/ }),

/***/ "mobx-state-tree":
/*!********************************!*\
  !*** external "mobxStateTree" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = mobxStateTree;

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

/***/ "wp":
/*!*********************!*\
  !*** external "wp" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp;

/***/ })

/******/ });
//# sourceMappingURL=rml.js.map