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
})({"megamenu.js":[function(require,module,exports) {
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

var MegaMenu =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(MegaMenu, _HTMLElement);

  function MegaMenu() {
    var _this;

    _classCallCheck(this, MegaMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MegaMenu).call(this));

    _this.attachShadow({
      mode: 'open'
    });

    return _this;
  }

  _createClass(MegaMenu, [{
    key: "render",
    value: function render() {
      // const componentCode = JSON.parse(this.getAttribute('component-code'));
      this.shadowRoot.innerHTML = "\n\t\t<style>\n\t\t/* General styling */\n\t\t* {\n\t\t\tbox-sizing: border-box;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\tfont-family: sans-serif;\n\t\t}\n\t\tbody {\n\t\tbackground: #f1f1f1;\n\t\t}\n\t\tul {\n\t\t\tlist-style-type: none;\n\t\t}\n\t\ta {\n\t\t\tcolor: white;\n\t\t\ttext-decoration: none;\n\t\t}\n\t\t.submenu-icon {\n\t\t\tcolor: #111;\n\t\t}\n\t\ta:hover {\n\t\t\ttext-decoration: underline;\n\t\t}\n\t\timg {\n\t\t\tmax-width: 100%;\n\t\t}\n\t\t.menu {\n\t\t\tbackground-color: darkslateblue;\n\t\t}\n\t\t.submenu {\n\t\tborder: 1px solid #ccc;\n\t\t}\n\t\t.menu li {\n\t\t\tpadding: 10px;\n\t\t}\n\t\t.menu-icon {\n\t\t\tcolor: white;\n\t\t\tmargin-left: 10px;\n\t\t\tfont-size: 14px;\n\t\t}\n\t\t/* Flexbox rules */\n\t\t.menu {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\ttext-align: center;\n\t\t\twidth: 90vw;\n\t\t\tmargin: 10px 5vw;\n\t\t\theight: 60px;\n\t\t\tposition: relative;\n\t\t}\n\t\t.menu-item {\n\t\t\tflex: 1;\n\t\t}\n\t\t.menu-item > a {\n\t\t\tline-height: 40px;\n\t\t}\n\t\t.submenu {\n\t\t\twidth: 90vw;\n\t\t\tposition: absolute;\n\t\t\ttop: 60px;\n\t\t\tleft: 0;\n\t\t\ttext-align: left;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t}\n\t\t.submenu-item {\n\t\t\tpadding: 15px;\n\t\t}\n\t\t.submenu-top {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-around;\n\t\t}\n\t\t.submenu-bottom {\n\t\t\tdisplay: flex;\n\t\t}\n\t\t.submenu-bottom-item {\n\t\t\tflex: 1;\n\t\t}\n\t\t/* Submenu general styling */\n\t\t.submenu-top li {\n\t\t\tpadding-left: 0;\n\t\t}\n\t\t.submenu a {\n\t\t\tcolor: #111;\n\t\t}\n\t\t.submenu-top-item {\n\t\t\tmax-width: 33.333%;\n\t\t}\n\t\t.submenu .submenu-title {\n\t\t\tfont-weight: bold;\n\t\t\tcolor: darkslateblue;\n\t\t}\n\t\t.submenu .submenu-title:hover {\n\t\t\ttext-decoration: none;\n\t\t}\n\t\t.submenu-list,\n\t\t.submenu-bottom {\n\t\t\tmargin-top: 10px;\n\t\t}\n\n\t\t/* Submenu: Thumbnail list */\n\t\t.thumb-list .submenu-list > li {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t}\n\t\t.submenu-thumbnail {\n\t\t\tmargin-right: 10px;\n\t\t}\n\n\t\t/* Submenu: Description list */\n\t\t.desc-list .submenu-list > li {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t}\n\t\t.submenu-desc {\n\t\t\tmargin-top: 10px;\n\t\t\tcolor: #555;\n\t\t}\n\n\t\t/* Submenu: Icon list */\n\t\t.submenu-icon {\n\t\t\twidth: 32px;\n\t\t}\n\n\t\t/* Submenu bottom */\n\t\t.submenu-bottom-title {\n\t\t\tpadding-left: 10px;\n\t\t}\n\t\t.submenu-bottom figcaption {\n\t\t\tmargin-top: 5px;\n\t\t\tfont-weight: bold;\n\t\t}\n\t\t.submenu-bottom a:hover {\n\t\t\ttext-decoration: none;\n\t\t}\n\t\t/* Hover rule */\n\t\t.submenu { \n\t\t\tdisplay: none;\n\t\t}\n\t\t.menu-item:hover .submenu {\n\t\t\tdisplay: flex;\n\t\t}\n\t\t.menu-item:hover > a {\n\t\t\ttext-decoration: underline;\n\t\t}\n\n\t\t.menu-item-with-arrow a {\n\t\t\tpadding-right: 10px;\n\t\t}\n\n\t\t.icon {\n\t\t\twidth: 10px;\n\t\t\theight: 10px;\n\t\t}\n\t\t</style>\n\t\t<nav>\n\t\t<ul class=\"menu\">\n\t\t  <li class=\"menu-item\"><a href=\"#\">Home</a></li>\n\t\t  <li class=\"menu-item menu-item-with-arrow\"><a href=\"#\">Holidays</a>\n\t\t  ".concat(this.renderArrow(), "\n\t\t\t<ul class=\"submenu\">\n\t\t\t  <li class=\"submenu-item\">\n\t\t\t\t<ul class=\"submenu-top\">\n\t\t\t\t  <li class=\"submenu-top-item thumb-list\">\n\t\t\t\t\t<a href=\"#\" class=\"submenu-title\">Holiday types</a>\n\t\t\t\t\t<ul class=\"submenu-list\">\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<span class=\"submenu-thumbnail\"><img src=\"https://picsum.photos/id/1067/32/32\" alt=\"City breaks\"></span>\n\t\t\t\t\t\t<a href=\"#\">City breaks</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<span class=\"submenu-thumbnail\"><img src=\"https://picsum.photos/id/173/32/32\" alt=\"Adventure tours\"></span>\n\t\t\t\t\t\t<a href=\"#\">Adventure tours</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<span class=\"submenu-thumbnail\"><img src=\"https://picsum.photos/id/1038/32/32\" alt=\"Cruises\"></span>\n\t\t\t\t\t\t<a href=\"#\">Cruises</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<span class=\"submenu-thumbnail\"><img src=\"https://picsum.photos/id/1015/32/32\" alt=\"Beach holidays\"></span>\n\t\t\t\t\t\t<a href=\"#\">Beach holidays</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t  </li>\n\t\t\t\t  <li class=\"submenu-top-item desc-list\">\n\t\t\t\t\t<a href=\"#\" class=\"submenu-title\">Holiday packages</a>\n\t\t\t\t\t<ul class=\"submenu-list\">\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<a href=\"#\">Families</a>\n\t\t\t\t\t\t<span class=\"submenu-desc\">Take advantage of our special holiday packages for families.</span>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<a href=\"#\">Students</a>\n\t\t\t\t\t\t<span class=\"submenu-desc\">Take advantage of our special holiday packages for students.</span>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<a href=\"#\">Couples</a>\n\t\t\t\t\t\t<span class=\"submenu-desc\">Take advantage of our special holiday packages for couples.</span>\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t  </li>\n\t\t\t\t  <li class=\"submenu-top-item icon-list\">\n\t\t\t\t\t<a href=\"#\" class=\"submenu-title\">Our services</a>\n\t\t\t\t\t<ul class=\"submenu-list\">\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<i class=\"submenu-icon fas fa-plane-departure\"></i>\n\t\t\t\t\t\t<a href=\"#\">Plane tickets</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<i class=\"submenu-icon fas fa-car\"></i>\n\t\t\t\t\t\t<a href=\"#\">Car rental</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<i class=\"submenu-icon fas fa-luggage-cart\"></i>\n\t\t\t\t\t\t<a href=\"#\">Luggage pickup</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<i class=\"submenu-icon fas fa-phone-alt\"></i>\n\t\t\t\t\t\t<a href=\"#\">24/7 customer service</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<i class=\"submenu-icon fas fa-dollar-sign\"></i>\n\t\t\t\t\t\t<a href=\"#\">30-day cancellation policy</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t  </li>\n\t\t\t\t  <li class=\"submenu-top-item\">\n\t\t\t\t\t<a href=\"#\" class=\"submenu-title\">Last minute offers</a>\n\t\t\t\t\t<ul class=\"submenu-list\">\n\t\t\t\t\t  <li><a href=\"#\">New York</a></li>\n\t\t\t\t\t  <li><a href=\"#\">Stockholm</a></li>\n\t\t\t\t\t  <li><a href=\"#\">Madrid</a></li>\n\t\t\t\t\t  <li><a href=\"#\">Buenos Aires</a></li>\n\t\t\t\t\t  <li><a href=\"#\">Tokyo</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t  </li>\n\t\t\t\t</ul>\n\t\t\t  </li>\n\t\t\t  <li class=\"submenu-item\">\n\t\t\t\t<a href=\"#\" class=\"submenu-title submenu-bottom-title\">Trending destinations</a>\n\t\t\t\t<ul class=\"submenu-bottom\">\n\t\t\t\t  <li class=\"submenu-bottom-item\">\n\t\t\t\t\t<figure>\n\t\t\t\t\t  <img class=\"submenu-img-lg\" src=\"https://picsum.photos/id/1016/640/260\">\n\t\t\t\t\t  <figcaption><a href=\"#\">Mountains</a></figcaption>\n\t\t\t\t\t</figure>\n\t\t\t\t  </li>\n\t\t\t\t  <li class=\"submenu-bottom-item\">\n\t\t\t\t\t<figure>\n\t\t\t\t\t  <img class=\"submenu-img-lg\" src=\"https://picsum.photos/id/1040/640/260\">\n\t\t\t\t\t  <figcaption><a href=\"#\">Castles</a></figcaption>\n\t\t\t\t\t</figure>\n\t\t\t\t  </li>\n\t\t\t\t  <li class=\"submenu-bottom-item\">\n\t\t\t\t\t<figure>\n\t\t\t\t\t  <img class=\"submenu-img-lg\" src=\"https://picsum.photos/id/1039/640/260\">\n\t\t\t\t\t  <figcaption><a href=\"#\">Waterfalls</a></figcaption>\n\t\t\t\t\t</figure>\n\t\t\t\t  </li>\n\t\t\t\t  <li class=\"submenu-bottom-item\">\n\t\t\t\t\t<figure>\n\t\t\t\t\t  <img class=\"submenu-img-lg\" src=\"https://picsum.photos/id/164/640/260\">\n\t\t\t\t\t  <figcaption><a href=\"#\">Historical towns</a></figcaption>\n\t\t\t\t\t</figure>\n\t\t\t\t  </li>\n\t\t\t\t</ul>\n\t\t\t  </li>\t  \n\t\t\t</ul>\n\t\t  </li>\n\t\t  <li class=\"menu-item\"><a href=\"#\">About</a></li>\n\t\t  <li class=\"menu-item\"><a href=\"#\">Blog</a></li>\n\t\t  <li class=\"menu-item\"><a href=\"#\">Contact</a></li>\n\t\t</ul>\n\t  </nav>");
    }
  }, {
    key: "renderArrow",
    value: function renderArrow() {
      return "<?xml version=\"1.0\"?>\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" width=\"10px\" height=\"10px\" viewBox=\"0 0 451.847 451.847\" style=\"enable-background:new 0 0 451.847 451.847;\" xml:space=\"preserve\"><g><g>\n\t\t\t<path d=\"M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#FFFFFF\"/>\n\t\t</g></g> </svg>";
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      console.log('callback changed');
      this.render();
    }
  }], [{
    key: "observedAttributes",
    get: function get() {// return ['component-code'];
    }
  }]);

  return MegaMenu;
}(_wrapNativeSuper(HTMLElement));

window.customElements.define('mega-menu', MegaMenu);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50921" + '/');

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
},{}]},{},["../../../../.npm-packages/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","megamenu.js"], null)
//# sourceMappingURL=/megamenu.b7ff8e9b.js.map