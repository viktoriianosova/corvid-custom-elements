parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"J3Or":[function(require,module,exports) {
module.exports="/star.42f60cad.png";
},{}],"QRin":[function(require,module,exports) {
"use strict";var t=n(require("./star.png"));function n(t){return t&&t.__esModule?t:{default:t}}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}function u(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?c(t):n}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&d(t,n)}function a(t){var n="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||!s(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return f(t,arguments,y(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),d(e,t)})(t)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t,n,e){return(f=p()?Reflect.construct:function(t,n,e){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(t,o));return e&&d(r,e.prototype),r}).apply(null,arguments)}function s(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function d(t,n){return(d=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(n){function e(){return o(this,e),u(this,y(e).call(this))}return l(e,a(HTMLElement)),i(e,[{key:"render",value:function(){this.shadowRoot.innerHTML='\n\t\t<style>\n\t\t\t* {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\n\t\t\t.component-wrapper {\n\t\t\t\twidth: 700px;\n\t\t\t\theight: 100px;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: space-between;\n\t\t\t}\n\n\t\t\t.input-wrapper {\n\t\t\t\twidth: 700px;\n\t\t\t\theight: 60px;\n\t\t\t\tborder: 1px solid grey;\n\t\t\t\tborder-radius: 5px;\n\t\t\t\tpadding: 10px 20px;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\tinput {\n\t\t\t\twidth: 95%;\n\t\t\t\theight: 45px;\n\t\t\t\tbackground-color: rgba(0, 0, 0, 0);\n\t\t\t\tborder: 0;\n\t\t\t\tpadding: 10px;\n\t\t\t\tcolor: black;\n\t\t\t\tfont-size: 16px;\n\t\t\t}\n\n\t\t\timg {\n\t\t\t\twidth: 20px; \n\t\t\t\theight: 20px;\n\t\t\t}\n\n\t\t\tbutton {\n\t\t\t\twidth: 80px;\n\t\t\t\theight: 30px;\n\t\t\t\tborder: 1px solid grey;\n\t\t\t\tborder-radius: 15px;\n\t\t\t}\n\t\t</style>\n\t\t<div class="component-wrapper">\n\t\t\t<div class="input-wrapper" style="background-color: white">\n\t\t\t\t<input placeholder="Value"></input>\n\t\t\t\t<img src='.concat(t.default,'></img>\n\t\t\t</div>\n\t\t\t<button style="background-color: white">Submit</button>\n\t\t</div>')}},{key:"connectedCallback",value:function(){this.attachShadow({mode:"open"}),this.render();var t=this.shadowRoot.querySelector(".input-wrapper"),n=this.shadowRoot.querySelector("button"),e=this.shadowRoot.querySelector("input");t.addEventListener("mouseover",function(n){t.style.backgroundColor="lightblue"}),t.addEventListener("mouseout",function(n){t.style.backgroundColor="white"}),n.addEventListener("mouseover",function(t){n.style.backgroundColor="lightblue"}),n.addEventListener("mouseout",function(t){n.style.backgroundColor="white"}),n.addEventListener("click",function(n){e.value.length<20&&(t.style.backgroundColor="red")}),e.addEventListener("change",function(n){t.style.backgroundColor="white"})}}]),e}();customElements.define("input-example",b);
},{"./star.png":"J3Or"}]},{},["QRin"], null)
//# sourceMappingURL=/inputExample.js.map