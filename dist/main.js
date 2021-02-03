/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/error.js":
/*!*********************************!*\
  !*** ./src/components/error.js ***!
  \*********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./src/components/error.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => /* binding */ Header\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Header = function Header() {\n  var evt = function evt(link) {\n    return {\n      onclick: function onclick() {\n        if (link && link !== \"#\") {\n          window.location.pathname = link;\n        }\n      }\n    };\n  };\n\n  var navbar = [{\n    link: \"/home\",\n    props: {\n      \"class\": \"icon home-icon fa fa-home\"\n    }\n  }, {\n    link: \"/messenger\",\n    props: {\n      \"class\": \"icon fab fa-facebook-messenger\"\n    }\n  }, {\n    link: \"/explore\",\n    props: {\n      \"class\": \"icon explore-icon fa fa-compass\"\n    }\n  }, {\n    link: \"#\",\n    props: {\n      \"class\": \"icon explore-icon fa fa-heart\",\n      onclick: function onclick() {\n        var aa = document.querySelector(\".notificationContainer\");\n        console.log(aa);\n\n        if (!aa.style.display) {\n          aa.style.display = \"block\";\n        } else {\n          aa.style.display = \"\";\n        }\n      }\n    }\n  }, {\n    link: \"/profile\",\n    props: {\n      src: \"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/134944844_232419798263042_7386018853170716323_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=O0YDkyDqpXkAX_PTbJs&tp=1&oh=f293b6eb1726c4b1f94f9665c46bd150&oe=60340AF0\",\n      \"class\": \"profile-img\"\n    }\n  }];\n  var list = [];\n  navbar.forEach(function (item) {\n    if (item.link === \"/profile\") {\n      var _img = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"img\", _objectSpread(_objectSpread({}, evt(item.link)), item.props));\n\n      list.push(_img);\n    } else {\n      var li = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"i\", _objectSpread(_objectSpread({}, evt(item.link)), item.props));\n      list.push(li);\n    }\n  }); ///// logo div start here /////////\n\n  var img = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"img\", {\n    src: \"https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png\"\n  });\n  var logoDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"logo-div\"\n  }, img); ///// logo div end here /////////\n  ///// input div start here /////////\n\n  var inputIcon = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"i\", {\n    \"class\": \"search-icon fa fa-search\"\n  });\n  var inputIconDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"search-icon-div\"\n  }, inputIcon);\n  var input = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"input\", {\n    \"class\": \"nav-input\",\n    placeholder: \"Search\"\n  });\n  var inputDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"input-div\"\n  }, input, inputIconDiv); ///// input div end here /////////\n  //// header /////\n\n  var iconsDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", null, list);\n  var ul = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"ul\", null, logoDiv, inputDiv, iconsDiv);\n  return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"header\", null, ul);\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/header.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => /* binding */ home\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\");\n\n\nvar home = function home() {\n  return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', null, (0,_components_header__WEBPACK_IMPORTED_MODULE_1__.Header)());\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/home.js?");

/***/ }),

/***/ "./src/components/job.js":
/*!*******************************!*\
  !*** ./src/components/job.js ***!
  \*******************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./src/components/job.js?");

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => /* binding */ Layout\n/* harmony export */ });\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile */ \"./src/components/profile.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ \"./src/components/login.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/components/home.js\");\n/* harmony import */ var _messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messaging */ \"./src/components/messaging.js\");\n/* harmony import */ var _messaging__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_messaging__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _myNetwork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myNetwork */ \"./src/components/myNetwork.js\");\n/* harmony import */ var _myNetwork__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_myNetwork__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job */ \"./src/components/job.js\");\n/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_job__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications */ \"./src/components/notifications.js\");\n/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_notifications__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work */ \"./src/components/work.js\");\n/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_work__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _postAjob__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./postAjob */ \"./src/components/postAjob.js\");\n/* harmony import */ var _postAjob__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_postAjob__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error */ \"./src/components/error.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_error__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar path = window.location.pathname;\nvar Layout = function Layout() {\n  switch (path) {\n    case \"/\":\n      return (0,_login__WEBPACK_IMPORTED_MODULE_1__.login)();\n      break;\n\n    case \"/home\":\n      return linkdinAnimation();\n      break;\n\n    case \"/messaging\":\n      return linkdinAnimation();\n      break;\n\n    case \"/myNetwork\":\n      return linkdinAnimation();\n      break;\n\n    case \"/profile\":\n      return linkdinAnimation();\n      break;\n\n    case \"/job\":\n      return linkdinAnimation();\n      break;\n\n    case \"/notifications\":\n      return linkdinAnimation();\n      break;\n\n    case \"/work\":\n      return linkdinAnimation();\n      break;\n\n    case \"/postAjob\":\n      return linkdinAnimation();\n      break;\n\n    default:\n      return (0,_error__WEBPACK_IMPORTED_MODULE_9__.error)();\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/layout.js?");

/***/ }),

/***/ "./src/components/login.js":
/*!*********************************!*\
  !*** ./src/components/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => /* binding */ login\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\");\n\n\nvar login = function login() {\n  return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', null, (0,_components_header__WEBPACK_IMPORTED_MODULE_1__.Header)());\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/login.js?");

/***/ }),

/***/ "./src/components/messaging.js":
/*!*************************************!*\
  !*** ./src/components/messaging.js ***!
  \*************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./src/components/messaging.js?");

/***/ }),

/***/ "./src/components/myNetwork.js":
/*!*************************************!*\
  !*** ./src/components/myNetwork.js ***!
  \*************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./src/components/myNetwork.js?");

/***/ }),

/***/ "./src/components/notifications.js":
/*!*****************************************!*\
  !*** ./src/components/notifications.js ***!
  \*****************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./src/components/notifications.js?");

/***/ }),

/***/ "./src/components/postAjob.js":
/*!************************************!*\
  !*** ./src/components/postAjob.js ***!
  \************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./src/components/postAjob.js?");

/***/ }),

/***/ "./src/components/profile.js":
/*!***********************************!*\
  !*** ./src/components/profile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"profile\": () => /* binding */ profile\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\");\n\n\nvar profile = function profile() {\n  return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', null, (0,_components_header__WEBPACK_IMPORTED_MODULE_1__.Header)());\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/profile.js?");

/***/ }),

/***/ "./src/components/work.js":
/*!********************************!*\
  !*** ./src/components/work.js ***!
  \********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./src/components/work.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ \"./src/react/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout */ \"./src/components/layout.js\");\n\n\n\nvar App = function App() {\n  var main = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', null);\n  var layout = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', null, (0,_components_layout__WEBPACK_IMPORTED_MODULE_1__.Layout)());\n  main.appendChild(layout);\n  return main;\n};\n\n_react__WEBPACK_IMPORTED_MODULE_0__.reactDOM.render(App(), document.getElementById('root'));\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/react/index.js":
/*!****************************!*\
  !*** ./src/react/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => /* binding */ createElement,\n/* harmony export */   \"reactDOM\": () => /* binding */ reactDOM\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar createElement = function createElement(elementType, props) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  var element = document.createElement(elementType);\n  children.forEach(function (child) {\n    if (_typeof(child) === \"object\") {\n      if (Array.isArray(child)) {\n        child.forEach(function (innerChild) {\n          element.appendChild(innerChild);\n        });\n      } else {\n        element.appendChild(child);\n      }\n    } else {\n      element.innerHTML = children;\n    }\n  });\n  return handleProps(element, props);\n};\n\nvar handleProps = function handleProps(element, props) {\n  if (props) {\n    Object.keys(props).forEach(function (prop) {\n      if (prop) {\n        if (/^on.*$/.test(prop)) {\n          element.addEventListener(prop.substring(2), props[prop]);\n        } else {\n          element.setAttribute(prop, props[prop]);\n        }\n      }\n    });\n  }\n\n  return element;\n};\n\nvar reactDOM = {\n  render: function render(element, rootElement) {\n    rootElement.appendChild(element);\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/react/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;