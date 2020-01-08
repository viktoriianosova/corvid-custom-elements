// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"timeline.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TimelineComponent =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(TimelineComponent, _HTMLElement);

  function TimelineComponent() {
    _classCallCheck(this, TimelineComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TimelineComponent).call(this));
  }

  _createClass(TimelineComponent, [{
    key: "render",
    value: function render() {
      this.innerHTML = "<div class=\"chart-wrapper\">\n\t\t<ul class=\"chart-values\">\n\t\t  <li>sun</li>\n\t\t  <li>mon</li>\n\t\t  <li>tue</li>\n\t\t  <li>wed</li>\n\t\t  <li>thu</li>\n\t\t  <li>fri</li>\n\t\t  <li>sat</li>\n\t\t</ul>\n\t\t<ul class=\"chart-bars\">\n\t\t  <li data-duration=\"tue\xBD-wed\" data-color=\"#b03532\">Learn closures</li>\n\t\t  <li data-duration=\"wed-sat\" data-color=\"#33a8a5\">Solve Codewars challenge</li>\n\t\t  <li data-duration=\"sun-tue\" data-color=\"#30997a\">Help a colleague with the presentation</li>\n\t\t  <li data-duration=\"tue\xBD-thu\" data-color=\"#6a478f\">Final paper preparation</li>\n\t\t  <li data-duration=\"mon-tue\xBD\" data-color=\"#da6f2b\">Write an essay</li>\n\t\t  <li data-duration=\"wed-wed\" data-color=\"#3d8bb1\">Call mom</li>\n\t\t  <li data-duration=\"thu-fri\xBD\" data-color=\"#e03f3f\">Read about Web Components</li>\n\t\t  <li data-duration=\"mon\xBD-wed\xBD\" data-color=\"#59a627\">Learn React Hooks</li>\n\t\t  <li data-duration=\"fri-sat\" data-color=\"#4464a1\">Register for the marathon</li>\n\t\t</ul>\n\t  </div>\n\t  <footer class=\"page-footer\">\n\t\t<small>Made with <span>\u2764</span> by <a href=\"http://georgemartsoukos.com/\" target=\"_blank\">George Martsoukos</a>\n\t\t</small>\n\t\t</br>\n\t\t<a href=\"https://codepen.io/tutsplus/pen/ZEzerNB\" target=\"_blank\" style=\"color:blue; text-decoration: underline;\">Source</a>\n\t\t</footer>\n\t\t\n\t\t<style>\n\t\t\t:root {\n\t\t\t--white: #fff;\n\t\t\t--divider: lightgrey;\n\t\t\t--body: #f5f7f8;\n\t\t\t}\n\n\t\t\t* {\n\t\t\tpadding: 0;\n\t\t\tmargin: 0;\n\t\t\tbox-sizing: border-box;\n\t\t\t}\n\n\t\t\tul {\n\t\t\tlist-style: none;\n\t\t\t}\n\n\t\t\ta {\n\t\t\ttext-decoration: none;\n\t\t\tcolor: inherit;\n\t\t\t}\n\n\t\t\tbody {\n\t\t\tbackground: var(--body);\n\t\t\tfont-size: 16px;\n\t\t\tfont-family: sans-serif;\n\t\t\tpadding-top: 40px;\n\t\t\t}\n\n\t\t\t.chart-wrapper {\n\t\t\tmax-width: 1150px;\n\t\t\tpadding: 0 10px;\n\t\t\tmargin: 0 auto;\n\t\t\t}\n\n\t\t\t.chart-wrapper .chart-values {\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\tmargin-bottom: 20px;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 1.2rem;\n\t\t\t}\n\n\t\t\t.chart-wrapper .chart-values li {\n\t\t\tflex: 1;\n\t\t\tmin-width: 80px;\n\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t.chart-wrapper .chart-values li:not(:last-child) {\n\t\t\tposition: relative;\n\t\t\t}\n\n\t\t\t.chart-wrapper .chart-values li:not(:last-child)::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tright: 0;\n\t\t\theight: 510px;\n\t\t\tborder-right: 1px solid var(--divider);\n\t\t\t}\n\n\t\t\t.chart-wrapper .chart-bars li {\n\t\t\tposition: relative;\n\t\t\tcolor: var(--white);\n\t\t\tmargin-bottom: 15px;\n\t\t\tfont-size: 16px;\n\t\t\tborder-radius: 20px;\n\t\t\tpadding: 10px 20px;\n\t\t\twidth: 0;\n\t\t\topacity: 0;\n\t\t\ttransition: all 0.65s linear 0.2s;\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 600px) {\n\t\t\t.chart-wrapper .chart-bars li {\n\t\t\t\tpadding: 10px;\n\t\t\t}\n\t\t\t}\n\n\t\t\t.page-footer {\n\t\t\tfont-size: 0.85rem;\n\t\t\tpadding: 10px;\n\t\t\ttext-align: right;\n\t\t\tcolor: var(--black);\n\t\t\t}\n\n\t\t\t\t.page-footer span {\n\t\t\t\tcolor: #e31b23;\n\t\t\t\t}\t\n\t\t</style>\n\t\t";

      function createChart(e) {
        var days = document.querySelectorAll('.chart-values li');
        var tasks = document.querySelectorAll('.chart-bars li');

        var daysArray = _toConsumableArray(days);

        tasks.forEach(function (el) {
          var duration = el.dataset.duration.split('-');
          var startDay = duration[0];
          var endDay = duration[1];
          var left = 0,
              width = 0;

          if (startDay.endsWith('½')) {
            var filteredArray = daysArray.filter(function (day) {
              return day.textContent == startDay.slice(0, -1);
            });
            left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2;
          } else {
            var _filteredArray = daysArray.filter(function (day) {
              return day.textContent == startDay;
            });

            left = _filteredArray[0].offsetLeft;
          }

          if (endDay.endsWith('½')) {
            var _filteredArray2 = daysArray.filter(function (day) {
              return day.textContent == endDay.slice(0, -1);
            });

            width = _filteredArray2[0].offsetLeft + _filteredArray2[0].offsetWidth / 2 - left;
          } else {
            var _filteredArray3 = daysArray.filter(function (day) {
              return day.textContent == endDay;
            });

            width = _filteredArray3[0].offsetLeft + _filteredArray3[0].offsetWidth - left;
          } // apply css


          el.style.left = "".concat(left, "px");
          el.style.width = "".concat(width, "px");

          if (e.type == 'load') {
            el.style.backgroundColor = el.dataset.color;
            el.style.opacity = 1;
          }
        });
      }

      window.addEventListener('load', createChart);
      window.addEventListener('resize', createChart);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }]);

  return TimelineComponent;
}(_wrapNativeSuper(HTMLElement));

window.customElements.define('timeline-component', TimelineComponent);
},{}],"../../../../.npm-packages/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61539" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.npm-packages/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","timeline.js"], null)
//# sourceMappingURL=/timeline.02a44989.js.map