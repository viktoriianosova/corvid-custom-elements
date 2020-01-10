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
})({"toolstrip.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Toolstrip =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(Toolstrip, _HTMLElement);

  function Toolstrip() {
    _classCallCheck(this, Toolstrip);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toolstrip).call(this));
  }

  _createClass(Toolstrip, [{
    key: "render",
    value: function render() {
      this.innerHTML = "\n        <style>\n            * {\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n                font-family: Tahoe;\n                font-size: 15px;\n            }\n\n            #wrapper {\n                position: relative;\n                height: 50px;\n                border: 1px solid lightgrey;\n                background-color: #F0F0F0;\n                display: inline-flex;\n                align-items: center;\n                padding: 5px;\n                flex-basis: auto;\n            }\n\n            .section-wrapper {\n                justify-content: space-between;\n                display: flex;\n                padding: 0px 5px;\n            }\n\n            .section-wrapper:not(:last-child) {\n                border-right: 1px solid lightgrey;\n            }\n\n            .mult-buttons-box {\n                min-width: 125px;\n            }\n\n            .button-box {\n                height: 35px;\n                display: flex;\n                justify-content: space-evenly;\n                align-items: center;\n                border: 1px solid;\n                border-color: rgb(169,169,169, 0);\n            }\n\n            .button-box:hover {\n                border-color: rgb(169,169,169, 1);\n            }\n\n            .button-box-clicked {\n                color: white;\n                background-color: grey;\n            }\n\n            .button-box-clicked img {\n                filter: brightness(0) invert(1);\n            }\n\n            .button-regular {\n                min-width: 70px;\n            }\n\n            .square-button {\n                width: 35px;\n            }\n\n            #font-family {\n                width: 150px;\n            }\n\n            #text-size {\n                width: 100px;\n            }\n\n            select {\n                min-width: 70px;\n                height: 35px;\n                background: white;\n                border: 1px solid lightgrey;\n                font-family: Tahoe;\n                font-size: 14px;\n            }\n\n            select:hover {\n                border-color: #147FCC;\n            }\n\n            .icon {\n                width: 15px;\n                height: 15px;\n            }\n\n            .icon-small {\n                width: 8px;\n                height: 8px;\n            }\n\n            #file-submenu {\n                position: absolute;\n                left: 20px;\n                top: 45px;\n                width: 200px;\n                min-height: 200px;\n                border: 1px solid lightgrey;\n                background-color: white;\n            }\n\n            .file-submenu-section:not(:last-child) {\n                border-bottom: 1px solid lightgrey;\n            }\n            \n            .file-submenu-item {\n                height: 50px;\n                display: flex;\n                align-items: center;\n                padding: 5px 10px;\n            }\n\n            .file-submenu-item .icon-left {\n                margin-right: 10px;\n            }\n\n            .file-submenu-item .action-name {\n                flex: 1;\n            }\n\n            .file-submenu-item .keyboard-shortcut {\n                color: grey;\n                margin-right: 10px;\n            }\n\n            .file-submenu-item:hover {\n                background-color: #147FCC;\n                color: white;\n            }\n\n            .file-submenu-item:hover img {\n                filter: brightness(0) invert(1);\n            }\n\n            .file-submenu-item:hover .keyboard-shortcut {\n                color: white;\n            }\n        </style>\n        <div id=\"wrapper\">\n            <div class=\"section-wrapper\">\n                <div class=\"button-box button-regular button-box-clicked\">\n                    <span>File</span>\n                    <img class=\"icon-small\" src=\"https://image.flaticon.com/icons/svg/58/58979.svg\"/>\n                </div>\n            </div>\n\n            <div class=\"section-wrapper\">\n                <div class=\"button-box button-regular button-box-clicked\">\n                    <img class=\"icon\" src=\"https://image.flaticon.com/icons/svg/446/446991.svg\"/>\n                    <span>Print</span>\n                </div>\n            </div>\n\n            <div class=\"section-wrapper mult-buttons-box\">\n                <div class=\"button-box square-button button-box-clicked\">\n                    <img class=\"icon\" src=\"https://image.flaticon.com/icons/svg/565/565691.svg\"/>\n                </div>\n                <div class=\"button-box square-button\">\n                    <img class=\"icon\" src=\"https://image.flaticon.com/icons/svg/565/565698.svg\"/>\n                </div>\n                <div class=\"button-box square-button\">\n                <img class=\"icon\" src=\"https://image.flaticon.com/icons/svg/2087/2087924.svg\"/>\n                </div>\n            </div>\n\n            <div class=\"section-wrapper mult-buttons-box\">\n                <div class=\"button-box square-button\">\n                    <img class=\"icon\" src=\"https://image.flaticon.com/icons/svg/565/565689.svg\"/>\n                </div>\n                <div class=\"button-box square-button\">\n                    <img class=\"icon\" src=\"https://image.flaticon.com/icons/svg/565/565690.svg\"/>\n                </div>\n                <div class=\"button-box square-button\">\n                    <img class=\"icon\" src=\"https://image.flaticon.com/icons/svg/2209/2209524.svg\"/>\n                </div>\n            </div>\n        \n            <div class=\"section-wrapper\">\n                <select id=\"font-family\">\n                    <option value=\"0\">Courier</option>\n                    <option value=\"1\">Verdana</option>\n                    <option value=\"2\">Times</option>\n                </select>\n            </div>\n\n            <div class=\"section-wrapper\">\n                <select id=\"text-size\">\n                    <option value=\"50\">50%</option>\n                    <option value=\"75\">75%</option>\n                    <option value=\"100\">100%</option>\n                    <option value=\"150\">150%</option>\n                    <option value=\"200\">200%</option>\n                    <option value=\"fit\">Fit</option>\n                </select>\n            </div>\n        </div>\n\n        <div id=\"file-submenu\">\n            <div class=\"file-submenu-section\">\n                <div class=\"file-submenu-item\">\n                    <img class=\"icon icon-left\" src=\"https://image.flaticon.com/icons/svg/1155/1155623.svg\"/>\n                    <span class=\"action-name\">New</span>\n                    <span class=\"keyboard-shortcut\">Ctrl+N</span>\n                </div>\n                <div class=\"file-submenu-item\">\n                    <img class=\"icon icon-left\" src=\"https://image.flaticon.com/icons/svg/62/62319.svg\"/>\n                    <span class=\"action-name\">Open</span>\n                    <span class=\"keyboard-shortcut\">Ctrl+O</span>\n                </div>\n            </div>\n            <div class=\"file-submenu-section\">\n                <div class=\"file-submenu-item\">\n                    <img class=\"icon icon-left\" src=\"https://image.flaticon.com/icons/svg/60/60721.svg\"/>\n                    <span class=\"action-name\">Save</span>\n                    <span class=\"keyboard-shortcut\">Ctrl+S</span>\n                </div>\n                <div class=\"file-submenu-item\">\n                    <img class=\"icon icon-left\" src=\"https://image.flaticon.com/icons/svg/376/376218.svg\"/>\n                    <span class=\"action-name\">Save as</span>\n                </div>\n            </div>\n            <div class=\"file-submenu-section\">\n                <div class=\"file-submenu-item\">\n                    <img class=\"icon icon-left\" src=\"https://image.flaticon.com/icons/svg/346/346878.svg\"/>\n                    <span class=\"action-name\">Recent documents</span>\n                    <img class=\"icon-small\" src=\"https://image.flaticon.com/icons/svg/0/320.svg\"/>\n                </div>\n            </div>\n            <div class=\"file-submenu-section\">\n                <div class=\"file-submenu-item\">\n                    <img class=\"icon icon-left\" src=\"https://image.flaticon.com/icons/svg/1059/1059157.svg\"/>\n                    <span class=\"action-name\">Export as</span>\n                    <img class=\"icon-small\" src=\"https://image.flaticon.com/icons/svg/0/320.svg\"/>\n                </div>\n            </div>\n            <div class=\"file-submenu-section\">\n                <div class=\"file-submenu-item\">\n                    <img class=\"icon icon-left\" src=\"https://image.flaticon.com/icons/svg/446/446991.svg\"/>\n                    <span class=\"action-name\">Print</span>\n                    <span class=\"keyboard-shortcut\">Ctrl+P</span>\n                </div>\n            </div>\n        </div>\n        ";
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }]);

  return Toolstrip;
}(_wrapNativeSuper(HTMLElement));

window.customElements.define('toolstrip-component', Toolstrip);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59276" + '/');

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
},{}]},{},["../../../../.npm-packages/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","toolstrip.js"], null)
//# sourceMappingURL=/toolstrip.62ce02b8.js.map